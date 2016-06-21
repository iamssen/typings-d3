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
  (data?:ArcData, ...args):string; // → [ArcValues], [...args]
  centroid(data?:ArcData, ...args):[number,number]; // → [ArcValues], [...args]
  
  innerRadius():(d?:ArcData, ...args) => number; // ← [ArcValues], [...args]
  innerRadius(radius:((d?:ArcData, ...args) => number) | number):this;
  
  outerRadius():(d?:ArcData, ...args) => number;
  outerRadius(radius:((d?:ArcData, ...args) => number) | number):this;
  
  cornerRadius():(d?:ArcData, ...args) => number;
  cornerRadius(radius:((d?:ArcData, ...args) => number) | number):this;
  
  /**
   * @return radian
   */
  startAngle():(d?:ArcData, ...args) => number;
  startAngle(angle:((d?:ArcData, ...args) => number) | number):this;
  
  /**
   * @return radian
   */
  endAngle():(d?:ArcData, ...args) => number;
  endAngle(angle:((d?:ArcData, ...args) => number) | number):this;
  
  /**
   * @return radian
   */
  padAngle():(d?:ArcData, ...args) => number;
  padAngle(angle:((d?:ArcData, ...args) => number) | number):this;
  
  padRadius():(d?:ArcData, ...args) => number;
  padRadius(radius:((d?:ArcData, ...args) => number) | number):this;
  
  context():Context;
  context(context:Context):this;
}

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
  (data:T[], ...args):PieResult<T>[]; // [data:T[]], [...args]
  
  value():(d?:T, i?:number, data?:T[]) => number;
  value(value:(d?:T, i?:number, data?:T[]) => number):this; // d:T, i:number, data:T[]
  
  sort():(a:T, b:T) => number;
  sort(comparator:(a:T, b:T) => number):this; // a:T, b:T
  
  sortValues():(a:T, b:T) => number;
  sortValues(comparator:(a:T, b:T) => number):this;
  
  startAngle():number;
  startAngle(angle:((d:T, ...args) => number) | number):this; // data:T, [...args]
  
  endAngle():number;
  endAngle(angle:((d:T, ...args) => number) | number):this;
  
  padAngle():number;
  padAngle(angle:((d:T, ...args) => number) | number):this;
}

export function pie<T>():Pie<T>;

//----------------------------------------------------------------
// Lines
//----------------------------------------------------------------
export interface Curve {
  areaStart();
  areaEnd();
  lineStart();
  lineEnd();
  point(x:number, y:number);
}

export interface Line<T> {
  (data:T[]):string;
  
  x():(d?:T, i?:number, data?:T[]) => number;
  x(x:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  y():(d?:T, i?:number, data?:T[]) => number;
  y(y:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;
  
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;
  
  context():Context;
  context(context:Context):this;
}

export function line<T>():Line<T>;

//----------------------------------------------------------------
// Radial Lines
//----------------------------------------------------------------
export interface RadialLine<T> {
  (data:T[]):string;
  
  angle():(d?:T, i?:number, data?:T[]) => number;
  angle(angle:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  radius():(d?:T, i?:number, data?:T[]) => number;
  radius(radius:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;
  
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;
  
  context():Context;
  context(context:Context):this;
}

export function radialLine<T>():RadialLine<T>;

//----------------------------------------------------------------
// Areas
//----------------------------------------------------------------
export interface Area<T> {
  (data:T[]):string;
  
  x():(d?:T, i?:number, data?:T[]) => number;
  x(x:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  x0():(d?:T, i?:number, data?:T[]) => number;
  x0(x0:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  x1():(d?:T, i?:number, data?:T[]) => number;
  x1(x1:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  y():(d?:T, i?:number, data?:T[]) => number;
  y(y:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  y0():(d?:T, i?:number, data?:T[]) => number;
  y0(y0:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  y1():(d?:T, i?:number, data?:T[]) => number;
  y1(y1:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  lineX0():Line<T>;
  
  lineX1():Line<T>;
  
  lineY0():Line<T>;
  
  lineY1():Line<T>;
  
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;
  
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;
  
  context():Context;
  context(context:Context):this;
}

export function area<T>():Area<T>;

//----------------------------------------------------------------
// Radial Areas
//----------------------------------------------------------------
export interface RadialArea<T> {
  (data:T[]):string;
  
  angle():(d?:T, i?:number, data?:T[]) => number;
  angle(angle:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  startAngle():(d?:T, i?:number, data?:T[]) => number;
  startAngle(startAngle:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  endAngle():(d?:T, i?:number, data?:T[]) => number;
  endAngle(endAngle:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  radius():(d?:T, i?:number, data?:T[]) => number;
  radius(radius:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  innerRadius():(d?:T, i?:number, data?:T[]) => number;
  innerRadius(innerRadius:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  outerRadius():(d?:T, i?:number, data?:T[]) => number;
  outerRadius(outerRadius:((d?:T, i?:number, data?:T[]) => number) | number):this;
  
  lineStartAngle():RadialLine<T>;
  
  lineInnerRadius():RadialLine<T>;
  
  lineEndAngle():RadialLine<T>;
  
  lineOuterRadius():RadialLine<T>;
  
  defined():(d?:T, i?:number, data?:T[]) => boolean;
  defined(defined:((d?:T, i?:number, data?:T[]) => boolean) | boolean):this;
  
  curve():Curve;
  curve(curve:((context:Context) => Curve) | Curve):this;
  
  context():Context;
  context(context:Context):this;
}

export function radialArea<T>():RadialArea<T>;

//----------------------------------------------------------------
// Curves
//----------------------------------------------------------------
export function curveBasis(context:Context):Curve;
export function curveBasisClosed(context:Context):Curve;
export function curveBasisOpen(context:Context):Curve;

export interface BundleCurve {
  (context:Context):Curve;
  beta(beta:number):this;
}

export const curveBundle:BundleCurve;

export interface CardinalCurve {
  (context:Context):Curve;
  tension(tension:number):this;
}

export const curveCardinal:CardinalCurve;
export const curveCardinalClosed:CardinalCurve;
export const curveCardinalOpen:CardinalCurve;

export interface CatmullRomCurve {
  (context:Context):Curve;
  alpha(alpha:number):this;
}

export const curveCatmullRom:CatmullRomCurve;
export const curveCatmullRomClosed:CatmullRomCurve;
export const curveCatmullRomOpen:CatmullRomCurve;

export function curveLinear(context:Context):Curve;
export function curveLinearClosed(context:Context):Curve;

export function curveMonotoneX(context:Context):Curve;
export function curveMonotoneY(context:Context):Curve;

export function curveNatural(context:Context):Curve;

export function curveStep(context:Context):Curve;
export function curveStepAfter(context:Context):Curve;
export function curveStepBefore(context:Context):Curve;

//----------------------------------------------------------------
// Symbols
//----------------------------------------------------------------
export interface SymbolType {
  draw(context:Context, size:number)
}

export interface Symbol<T> {
  (data:T):string;
  
  type():(d?:T) => SymbolType;
  type(type:((d?:T) => SymbolType) | SymbolType):this;
  
  size():(d?:T) => number;
  size(size:((d?:T) => number) | number):this;
  
  context():Context;
  context(context:Context):this;
}

export function symbol<T>():Symbol<T>;

export const symbols:[SymbolType, SymbolType, SymbolType, SymbolType, SymbolType, SymbolType, SymbolType];

export const symbolCircle:SymbolType;
export const symbolCross:SymbolType;
export const symbolDiamond:SymbolType;
export const symbolSquare:SymbolType;
export const symbolStar:SymbolType;
export const symbolTriangle:SymbolType;
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
  (data:T[], ...args):StackSeries<T>[];
  
  keys():(d:T[], ...args) => string[];
  keys(keys:((d:T[], ...args) => string[]) | string[]):this;
  
  value():(d:T, key:string, i?:number, data?:T[]) => number;
  value(value:(d:T, key:string, i?:number, data?:T[]) => number):this;
  
  order():(stack:StackSeries<T>[]) => number[];
  order(order:((stack:StackSeries<T>[]) => number[]) | number[]):this;

  offset():(stack:StackSeries<T>[], order:number[]) => void;
  offset(offset:(stack:StackSeries<T>[], order:number[]) => void):this;
}

export function stack<T>():Stack<T>;

export function stackOrderAscending(series:StackSeries<any>[]):number[];
export function stackOrderDescending(series:StackSeries<any>[]):number[];
export function stackOrderInsideOut(series:StackSeries<any>[]):number[];
export function stackOrderNone(series:StackSeries<any>[]):number[];
export function stackOrderReverse(series:StackSeries<any>[]):number[];

export function stackOffsetExpand(series:StackSeries<any>[], order:number[]);
export function stackOffsetNone(series:StackSeries<any>[], order:number[]);
export function stackOffsetSilhouette(series:StackSeries<any>[], order:number[]);
export function stackOffsetWiggle(series:StackSeries<any>[], order:number[]);