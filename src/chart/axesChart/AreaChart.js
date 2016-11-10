import { EXIT, UPDATE } from '../../const/d3';
import { LineChart } from './LineChart';
import { commonEventNames } from '../../tools/commonEventNames';
import { extentFromZero } from '../../util/extents';
import { noop } from '../../tools/noop';
import { resetScaleDomain } from '../../tools/resetScaleDomain';

const AREA_CHART_DEFAULTS = {
  chartCss: 'monte-area-chart',

  margin: {
    top: 10,
    right: 10,
    bottom: 30,
    left: 40,
  },

  /***********************************************************************************************
   *
   * Area related options
   *
   **********************************************************************************************/

  // Callback function to customize the area generator.
  areaCustomize: null,

  // Scale function for the `fill` attribute to apply per area.
  areaFillScale: noop,

  // Scale function for CSS class to apply per area. Input: line index, Output: String of CSS Class.
  areaCssScale: noop,

  // Static CSS class(es) to apply to every area.
  areaCss: 'area',

  // OVERRIDES
  yDomainCustomize: extentFromZero,
};

export class AreaChart extends LineChart {
  _initOptions(...options) {
    super._initOptions(...options, AREA_CHART_DEFAULTS);
  }

  _initCore() {
    super._initCore();

    // Initialize the line generator
    this.area = d3.area()
      .x((d) => this.getScaledProp('x', d))
      .y0(() => this.height)
      .y1((d) => this.getScaledProp('y', d));
  }

  _initCustomize() {
    super._initCustomize();

    if (this.opts.areaCustomize) {
      this.tryInvoke(this.opts.areaCustomize, this.area);
    }
  }

  _initPublicEvents(...events) {
    super._initPublicEvents(...events,
      ...commonEventNames('area')   // Area events
    );
  }

  _resetCssDomains() {
    super._resetCssDomains();

    resetScaleDomain(this.opts.areaCssScale);

    return this;
  }

  _update() {
    const lineGrps = super._update();

    lineGrps.each((d, i, nodes) => {
      this._updateLineArea(nodes[i], d, i);
    });
  }

  _updateLineArea(node, lineDatum, lineIndex) {
    const lineGrp = d3.select(node);

    // Data join for the points
    const area = lineGrp.selectAll('.monte-area').data((d) => [d]);

    // Create new area
    const allAreas = area.enter().insert('path', ':first-child')
        .call(this.__bindCommonEvents('area'))
      .merge(area) // Update existing points and set values on new points.
        .attr('class', (d) => this._buildCss(
          ['monte-area',
            lineDatum.css,
            this.opts.lineCssScale,
            this.opts.areaCss,
            this.opts.areaCssScale,
            d.css], lineDatum, lineIndex));

    allAreas.transition()
        .duration(this.tryInvoke(this.opts.transitionDuration, UPDATE))
        .ease(this.opts.ease)
        .attr('d', (d) => this.area(this.getProp('values', d)))
        .attr('fill', this.optionReaderFunc('areaFillScale'));

    // Fade out removed points.
    area.exit()
      .transition(this.tryInvoke(this.opts.transitionDuration, EXIT))
        .duration(this.opts.transitionDuration)
        .ease(this.opts.ease)
        .style('opacity', 0)
        .remove();
  }
}
