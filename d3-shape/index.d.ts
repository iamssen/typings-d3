// d3.path() or CanvasRenderingContext2D
export interface Context {
  moveTo(x:number, y:number);
  closePath();
  lineTo(x:number, y:number);
  quadraticCurveTo(cpx:number, cpy:number, x:number, y:number);
  bezierCurveTo(cpx1:number, cpy1:number, cpx2:number, cpy2:number, x:number, y:number);
  arcTo(x1:number, y1:number, x2:number, y2:number, radius:number);
  arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, antiClockWise?:boolean);
  rect(x:number, y:number, w:number, h:number);
}

//----------------------------------------------------------------
// Arcs
//----------------------------------------------------------------
export interface ArcData {
  innerRadius?:number;
  outerRadius?:number;
  cornerRadius?:number;
  startAngle?:number;
  endAngle?:number;
  padAngle?:number;
  padRadius?:number;
}

export interface Arc {
  /** @link https://github.com/d3/d3-shape#_arc */
  (data?:ArcData, ...args):string; // → [ArcValues], [...args]

  /** @link https://github.com/d3/d3-shape#arc_centroid */
  centroid(data?:ArcData, ...args):[number,number]; // → [ArcValues], [...args]

  /** @link https://github.com/d3/d3-shape#arc_innerRadius */
  innerRadius():(d?:ArcData, ...args) => number; // ← [ArcValues], [...args]
  innerRadius(radius:((d?:ArcData, ...args) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#arc_outerRadius */
  outerRadius():(d?:ArcData, ...args) => number;
  outerRadius(radius:((d?:ArcData, ...args) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#arc_cornerRadius */
  cornerRadius():(d?:ArcData, ...args) => number;
  cornerRadius(radius:((d?:ArcData, ...args) => number) | number):this;
  
  /**
   * @return radian
   * @link https://github.com/d3/d3-shape#arc_startAngle
   */
  startAngle():(d?:ArcData, ...args) => number;
  startAngle(angle:((d?:ArcData, ...args) => number) | number):this;
  
  /**
   * @return radian
   * @link https://github.com/d3/d3-shape#arc_endAngle
   */
  endAngle():(d?:ArcData, ...args) => number;
  endAngle(angle:((d?:ArcData, ...args) => number) | number):this;
  
  /**
   * @return radian
   * @link https://github.com/d3/d3-shape#arc_padAngle
   */
  padAngle():(d?:ArcData, ...args) => number;
  padAngle(angle:((d?:ArcData, ...args) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#arc_padRadius */
  padRadius():(d?:ArcData, ...args) => number;
  padRadius(radius:((d?:ArcData, ...args) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#arc_context */
  context():Context;
  context(context:Context):this;
}

/** @link https://github.com/d3/d3-shape#arc */
export function arc():Arc;

//----------------------------------------------------------------
// Pies
//----------------------------------------------------------------
export interface PieResult<T> {
  data:T;
  value:number;
  index:number;
  startAngle:number;
  endAngle:number;
  padAngle:number;
}

export interface Pie<T> {
  /** @link https://github.com/d3/d3-shape#_pie */
  (data:T[], ...args):PieResult<T>[]; // [data:T[]], [...args]

  /** @link https://github.com/d3/d3-shape#pie_value */
  value():(d?:T, i?:number, data?:T[]) => number;
  value(value:(d?:T, i?:number, data?:T[]) => number):this; // d:T, i:number, data:T[]

  /** @link https://github.com/d3/d3-shape#pie_sort */
  sort():(a:T, b:T) => number;
  sort(comparator:(a:T, b:T) => number):this; // a:T, b:T

  /** @link https://github.com/d3/d3-shape#pie_sortValues */
  sortValues():(a:T, b:T) => number;
  sortValues(comparator:(a:T, b:T) => number):this;

  /** @link https://github.com/d3/d3-shape#pie_startAngle */
  startAngle():number;
  startAngle(angle:((d:T, ...args) => number) | number):this; // data:T, [...args]

  /** @link https://github.com/d3/d3-shape#pie_endAngle */
  endAngle():number;
  endAngle(angle:((d:T, ...args) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#pie_padAngle */
  padAngle():number;
  padAngle(angle:((d:T, ...args) => number) | number):this;
}

/** @link https://github.com/d3/d3-shape#pie */
export function pie<T>():Pie<T>;

//----------------------------------------------------------------
// Lines
//----------------------------------------------------------------
export interface Curve {
  /** @link https://github.com/d3/d3-shape#curve_areaStart */
  areaStart();

  /** @link https://github.com/d3/d3-shape#curve_areaEnd */
  areaEnd();

  /** @link https://github.com/d3/d3-shape#curve_lineStart */
  lineStart();

  /** @link https://github.com/d3/d3-shape#curve_lineEnd */
  lineEnd();

  /** @link https://github.com/d3/d3-shape#curve_point */
  point(x:number, y:number);
}

export interface Line<T> {
  /** @link https://github.com/d3/d3-shape#_line */
  (data:T[]):string;

  /** @link https://github.com/d3/d3-shape#line_x */
  x():(d?:T, i?:number, data?:T[]) => number;
  x(x:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#line_y */
  y():(d?:T, i?:number, data?:T[]) => number;
  y(y:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#line_defined */
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;

  /** @link https://github.com/d3/d3-shape#line_curve */
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;

  /** @link https://github.com/d3/d3-shape#line_context */
  context():Context;
  context(context:Context):this;
}

/** @link https://github.com/d3/d3-shape#line */
export function line<T>():Line<T>;

//----------------------------------------------------------------
// Radial Lines
//----------------------------------------------------------------
export interface RadialLine<T> {
  /** @link https://github.com/d3/d3-shape#_radialLine */
  (data:T[]):string;

  /** @link https://github.com/d3/d3-shape#radialLine_angle */
  angle():(d?:T, i?:number, data?:T[]) => number;
  angle(angle:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialLine_radius */
  radius():(d?:T, i?:number, data?:T[]) => number;
  radius(radius:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialLine_defined */
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;

  /** @link https://github.com/d3/d3-shape#radialLine_curve */
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;

  /** @link https://github.com/d3/d3-shape#radialLine_context */
  context():Context;
  context(context:Context):this;
}

/** @link https://github.com/d3/d3-shape#radialLine */
export function radialLine<T>():RadialLine<T>;

//----------------------------------------------------------------
// Areas
//----------------------------------------------------------------
export interface Area<T> {
  /** @link https://github.com/d3/d3-shape#_area */
  (data:T[]):string;

  /** @link https://github.com/d3/d3-shape#area_x */
  x():(d?:T, i?:number, data?:T[]) => number;
  x(x:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#area_x0 */
  x0():(d?:T, i?:number, data?:T[]) => number;
  x0(x0:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#area_x1 */
  x1():(d?:T, i?:number, data?:T[]) => number;
  x1(x1:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#area_y */
  y():(d?:T, i?:number, data?:T[]) => number;
  y(y:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#area_y0 */
  y0():(d?:T, i?:number, data?:T[]) => number;
  y0(y0:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#area_y1 */
  y1():(d?:T, i?:number, data?:T[]) => number;
  y1(y1:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#area_lineX0 */
  lineX0():Line<T>;

  /** @link https://github.com/d3/d3-shape#area_lineX1 */
  lineX1():Line<T>;

  /** @link https://github.com/d3/d3-shape#area_lineY0 */
  lineY0():Line<T>;

  /** @link https://github.com/d3/d3-shape#area_lineY1 */
  lineY1():Line<T>;

  /** @link https://github.com/d3/d3-shape#area_defined */
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;

  /** @link https://github.com/d3/d3-shape#area_curve */
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;

  /** @link https://github.com/d3/d3-shape#area_context */
  context():Context;
  context(context:Context):this;
}

/** @link https://github.com/d3/d3-shape#area */
export function area<T>():Area<T>;

//----------------------------------------------------------------
// Radial Areas
//----------------------------------------------------------------
export interface RadialArea<T> {
  /** @link https://github.com/d3/d3-shape#_radialArea */
  (data:T[]):string;

  /** @link https://github.com/d3/d3-shape#radialArea_angle */
  angle():(d?:T, i?:number, data?:T[]) => number;
  angle(angle:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialArea_startAngle */
  startAngle():(d?:T, i?:number, data?:T[]) => number;
  startAngle(startAngle:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialArea_endAngle */
  endAngle():(d?:T, i?:number, data?:T[]) => number;
  endAngle(endAngle:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialArea_radius */
  radius():(d?:T, i?:number, data?:T[]) => number;
  radius(radius:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialArea_innerRadius */
  innerRadius():(d?:T, i?:number, data?:T[]) => number;
  innerRadius(innerRadius:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialArea_outerRadius */
  outerRadius():(d?:T, i?:number, data?:T[]) => number;
  outerRadius(outerRadius:((d?:T, i?:number, data?:T[]) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#radialArea_lineStartAngle */
  lineStartAngle():RadialLine<T>;

  /** @link https://github.com/d3/d3-shape#radialArea_lineInnerRadius */
  lineInnerRadius():RadialLine<T>;

  /** @link https://github.com/d3/d3-shape#radialArea_lineEndAngle */
  lineEndAngle():RadialLine<T>;

  /** @link https://github.com/d3/d3-shape#radialArea_lineOuterRadius */
  lineOuterRadius():RadialLine<T>;

  /** @link https://github.com/d3/d3-shape#radialArea_defined */
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;

  /** @link https://github.com/d3/d3-shape#radialArea_curve */
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;

  /** @link https://github.com/d3/d3-shape#radialArea_context */
  context():Context;
  context(context:Context):this;
}

/** @link https://github.com/d3/d3-shape#radialArea */
export function radialArea<T>():RadialArea<T>;

//----------------------------------------------------------------
// Curves
//----------------------------------------------------------------
/** @link https://github.com/d3/d3-shape#curveBasis */
export function curveBasis(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveBasisClosed */
export function curveBasisClosed(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveBasisOpen */
export function curveBasisOpen(context:Context):Curve;

export interface BundleCurve {
  (context:Context):Curve;

  /** @link https://github.com/d3/d3-shape#curveBundle_beta */
  beta(beta:number):this;
}

/** @link https://github.com/d3/d3-shape#curveBundle */
export const curveBundle:BundleCurve;

export interface CardinalCurve {
  (context:Context):Curve;

  /** @link https://github.com/d3/d3-shape#curveCardinal_tension */
  tension(tension:number):this;
}

/** @link https://github.com/d3/d3-shape#curveCardinal */
export const curveCardinal:CardinalCurve;

/** @link https://github.com/d3/d3-shape#curveCardinalClosed */
export const curveCardinalClosed:CardinalCurve;

/** @link https://github.com/d3/d3-shape#curveCardinalOpen */
export const curveCardinalOpen:CardinalCurve;

export interface CatmullRomCurve {
  (context:Context):Curve;

  /** @link https://github.com/d3/d3-shape#curveCatmullRom_alpha */
  alpha(alpha:number):this;
}

/** @link https://github.com/d3/d3-shape#curveCatmullRom */
export const curveCatmullRom:CatmullRomCurve;

/** @link https://github.com/d3/d3-shape#curveCatmullRomClosed */
export const curveCatmullRomClosed:CatmullRomCurve;

/** @link https://github.com/d3/d3-shape#curveCatmullRomOpen */
export const curveCatmullRomOpen:CatmullRomCurve;

/** @link https://github.com/d3/d3-shape#curveLinear */
export function curveLinear(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveLinearClosed */
export function curveLinearClosed(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveMonotoneX */
export function curveMonotoneX(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveMonotoneY */
export function curveMonotoneY(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveNatural */
export function curveNatural(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveStep */
export function curveStep(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveStepAfter */
export function curveStepAfter(context:Context):Curve;

/** @link https://github.com/d3/d3-shape#curveStepBefore */
export function curveStepBefore(context:Context):Curve;

//----------------------------------------------------------------
// Symbols
//----------------------------------------------------------------
export interface SymbolType {
  /** @link https://github.com/d3/d3-shape#symbolType_draw */
  draw(context:Context, size:number)
}

export interface Symbol<T> {
  /** @link https://github.com/d3/d3-shape#_symbol */
  (data:T):string;

  /** @link https://github.com/d3/d3-shape#symbol_type */
  type():(d?:T) => SymbolType;
  type(type:((d?:T) => SymbolType) | SymbolType):this;

  /** @link https://github.com/d3/d3-shape#symbol_size */
  size():(d?:T) => number;
  size(size:((d?:T) => number) | number):this;

  /** @link https://github.com/d3/d3-shape#symbol_context */
  context():Context;
  context(context:Context):this;
}

/** @link https://github.com/d3/d3-shape#symbol */
export function symbol<T>():Symbol<T>;

/** @link https://github.com/d3/d3-shape#symbols */
export const symbols:[SymbolType, SymbolType, SymbolType, SymbolType, SymbolType, SymbolType, SymbolType];

/** @link https://github.com/d3/d3-shape#symbolCircle */
export const symbolCircle:SymbolType;

/** @link https://github.com/d3/d3-shape#symbolCross */
export const symbolCross:SymbolType;

/** @link https://github.com/d3/d3-shape#symbolDiamond */
export const symbolDiamond:SymbolType;

/** @link https://github.com/d3/d3-shape#symbolSquare */
export const symbolSquare:SymbolType;

/** @link https://github.com/d3/d3-shape#symbolStar */
export const symbolStar:SymbolType;

/** @link https://github.com/d3/d3-shape#symbolTriangle */
export const symbolTriangle:SymbolType;

/** @link https://github.com/d3/d3-shape#symbolWye */
export const symbolWye:SymbolType;

//----------------------------------------------------------------
// Stacks
//----------------------------------------------------------------
export interface Series<T> {
  [0]:number;
  [1]:number;
  data:T;
}

export interface StackSeries<T> extends Array<Series<T>> {
  // [index:number]:Series<T>;
  index:number;
  key:string;
}

export interface Stack<T> {
  /** @link https://github.com/d3/d3-shape#_stack */
  (data:T[], ...args):StackSeries<T>[];

  /** @link https://github.com/d3/d3-shape#stack_keys */
  keys():(d:T[], ...args) => string[];
  keys(keys:((d:T[], ...args) => string[]) | string[]):this;

  /** @link https://github.com/d3/d3-shape#stack_value */
  value():(d:T, key:string, i?:number, data?:T[]) => number;
  value(value:(d:T, key:string, i?:number, data?:T[]) => number):this;

  /** @link https://github.com/d3/d3-shape#stack_order */
  order():(stack:StackSeries<T>[]) => number[];
  order(order:((stack:StackSeries<T>[]) => number[]) | number[]):this;

  /** @link https://github.com/d3/d3-shape#stack_offset */
  offset():(stack:StackSeries<T>[], order:number[]) => void;
  offset(offset:(stack:StackSeries<T>[], order:number[]) => void):this;
}

/** @link https://github.com/d3/d3-shape#stack */
export function stack<T>():Stack<T>;

/** @link https://github.com/d3/d3-shape#stackOrderAscending */
export function stackOrderAscending(series:StackSeries<any>[]):number[];

/** @link https://github.com/d3/d3-shape#stackOrderDescending */
export function stackOrderDescending(series:StackSeries<any>[]):number[];

/** @link https://github.com/d3/d3-shape#stackOrderInsideOut */
export function stackOrderInsideOut(series:StackSeries<any>[]):number[];

/** @link https://github.com/d3/d3-shape#stackOrderNone */
export function stackOrderNone(series:StackSeries<any>[]):number[];

/** @link https://github.com/d3/d3-shape#stackOrderReverse */
export function stackOrderReverse(series:StackSeries<any>[]):number[];

/** @link https://github.com/d3/d3-shape#stackOffsetExpand */
export function stackOffsetExpand(series:StackSeries<any>[], order:number[]);

/** @link https://github.com/d3/d3-shape#stackOffsetNone */
export function stackOffsetNone(series:StackSeries<any>[], order:number[]);

/** @link https://github.com/d3/d3-shape#stackOffsetSilhouette */
export function stackOffsetSilhouette(series:StackSeries<any>[], order:number[]);

/** @link https://github.com/d3/d3-shape#stackOffsetWiggle */
export function stackOffsetWiggle(series:StackSeries<any>[], order:number[]);