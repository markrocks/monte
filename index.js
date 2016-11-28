export { version } from './build/package';

// Abstract charts
export { Chart } from './src/chart/Chart';
export { AxesChart } from './src/chart/axesChart/AxesChart';
export { PolarChart } from './src/chart/polarChart/PolarChart';

// Concrete charts
// Cartesian coordinates
export { LineChart } from './src/chart/axesChart/LineChart';
export { AreaChart } from './src/chart/axesChart/AreaChart';
export { SparklineChart } from './src/chart/axesChart/SparklineChart';

export { BarChart } from './src/chart/axesChart/BarChart';
export { HorizontalBarChart } from './src/chart/axesChart/HorizontalBarChart';
export { SimpleBarChart } from './src/chart/axesChart/SimpleBarChart';
export { HorizontalSimpleBarChart } from './src/chart/axesChart/SimpleHorizontalBarChart';
export { SegmentBarChart } from './src/chart/axesChart/SegmentBarChart';
export { HorizontalSegmentBarChart } from './src/chart/axesChart/HorizontalSegmentBarChart';

export { ScatterPlot } from './src/chart/axesChart/ScatterPlotChart';
export { IconArray } from './src/chart/axesChart/IconArray';

// Polar coordinates
export { ArcChart } from './src/chart/polarChart/ArcChart';
export { GaugeChart } from './src/chart/polarChart/GaugeChart';
export { WedgeChart } from './src/chart/polarChart/WedgeChart';

// Const
import * as constants from './src/const';
export { constants };

// Support
export {
  EventWatcher,
  InstanceGroup,
  MonteError,
  MonteOptionError,
} from './src/support/';

// Extensions
export { Extension } from './src/extension/Extension';
export { Arc as ExtArc } from './src/extension/Arc';
export { Frame as ExtFrame } from './src/extension/Frame';

export {
  Grid as ExtGrid,
  HorizontalLines as ExtHorizontalLines,
  VerticalLines as ExtVerticalLines,
} from './src/extension/Grid';

export { Label as ExtLabel } from './src/extension/Label';
export { PolarGrid as ExtPolarGrid } from './src/extension/PolarGrid';
export { PolarLine as ExtPolarLine } from './src/extension/PolarLine';
export { PolarRotateLabel as ExtPolarRotateLabel } from './src/extension/PolarRotateLabel';
export { PolarTicks as ExtPolarTicks } from './src/extension/PolarTicks';

export {
  BarBg as ExtBarBg,
  HorizontalBarBg as ExtHorizontalBarBg,
} from './src/extension/BarBg';

export { ReferenceLine as ExtReferenceLine } from './src/extension/ReferenceLine';

// Tools
import * as tools from './src/tools/';
export { tools };

// Util
export {
  axisNoTicks,
  axisWholeNumberFormat,
} from './src/util/axis';

export {
  needleRoundedEnd,
  needleFlatEnd,
  needleExtraPointer,
  needleRect,
} from './src/util/needle';

export {
  extentFromZero,
  extentBalanced,
  extentGeneratorPercentOffset,
  extentGeneratorValueOffset,
  extentGeneratorZeroToMax,
} from './src/util/extents';

export {
  AutoResizer,
  HorizontalResizer,
  HorizontalRatioResizer,
  Resizer,
  VerticalResizer,
} from './src/util/resizeHandlers';

export {
  polarLabelCentroid,
  polarLabelInner,
  polarLabelOuter,
  polarLabelInnerFactor,
  polarLabelOuterFactor,
  polarLabelRotateTangentOrigin,
  polarLabelRotateTangentFlip,
  polarLabelRotateRay,
  polarLabelRotateRayOpposite,
} from './src/util/polarLabels';
