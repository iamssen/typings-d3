//----------------------------------------------------------------
// Continuous Scales
//----------------------------------------------------------------
export interface ContinuousBase<Domain, Range> {
  /** @link https://github.com/d3/d3-scale#_continuous */
  (x:Domain):Range;

  /** @link https://github.com/d3/d3-scale#continuous_invert */
  invert(x:Range):Domain;

  /** @link https://github.com/d3/d3-scale#continuous_domain */
  domain():Domain[];
  domain(domain:Domain[]):this;

  /** @link https://github.com/d3/d3-scale#continuous_range */
  range():Range[];
  range(range:Range[]):this;

  /** @link https://github.com/d3/d3-scale#continuous_ticks */
  ticks(count?:number):number[];

  /** @link https://github.com/d3/d3-scale#continuous_tickFormat */
  tickFormat(count?:number, specifier?:string):(n:number) => string;

  /** @link https://github.com/d3/d3-scale#continuous_nice */
  nice(count?:number):this;

  /** @link https://github.com/d3/d3-scale#continuous_copy */
  copy():this;
}

export interface Continuous<Domain, Range> extends ContinuousBase<Domain, Range> {
  /** @link https://github.com/d3/d3-scale#continuous_rangeRound */
  rangeRound():Range[];
  rangeRound(range:Range[]):this;

  /** @link https://github.com/d3/d3-scale#continuous_clamp */
  clamp():boolean;
  clamp(clamp:boolean):this;

  /** @link https://github.com/d3/d3-scale#continuous_interpolate */
  interpolate(interpolate:(t:number) => any):this;
}

// Linear Scales
export interface Linear<Range> extends Continuous<number, Range> {
}

/** @link https://github.com/d3/d3-scale#scaleLinear */
export function scaleLinear<Range>():Linear<Range>;

// Power Scales
export interface Pow<Range> extends Continuous<number, Range> {
  /** @link https://github.com/d3/d3-scale#pow_exponent */
  exponent():number;
  exponent(k:number):this;
}

/** @link https://github.com/d3/d3-scale#scalePow */
export function scalePow<Range>():Pow<Range>;

/** @link https://github.com/d3/d3-scale#scaleSqrt */
export function scaleSqrt<Range>():Pow<Range>;

// Log Scales
export interface Log<Range> extends Continuous<number, Range> {
  /** @link https://github.com/d3/d3-scale#log_base */
  base():number;
  base(base:number):this;
}

/** @link https://github.com/d3/d3-scale#scaleLog */
export function scaleLog<Range>():Log<Range>;

// Identity Scales
export interface Identity extends ContinuousBase<number, number> {
}

/** @link https://github.com/d3/d3-scale#scaleIdentity */
export function scaleIdentity():Identity;

// Time Scales
export interface Time extends Continuous<Date, number> {
  /** @link https://github.com/d3/d3-scale#time_nice */
  nice(interval?:number, step?:number):this;
}

/** @link https://github.com/d3/d3-scale#scaleTime */
export function scaleTime():Time;

/** @link https://github.com/d3/d3-scale#scaleUtc */
export function scaleUtc():Time;

//----------------------------------------------------------------
// Sequential Scales
//----------------------------------------------------------------
export interface Sequential {
  /** @link https://github.com/d3/d3-scale#_sequential */
  (x:number):number;

  /** @link https://github.com/d3/d3-scale#sequential_domain */
  domain():number[];
  domain(domain:number[]):this;

  /** @link https://github.com/d3/d3-scale#sequential_clamp */
  clamp():boolean;
  clamp(clamp:boolean):this;

  /** @link https://github.com/d3/d3-scale#sequential_copy */
  copy():this;
}

/** @link https://github.com/d3/d3-scale#scaleSequential */
export function scaleSequential(interpolator:(t:number)=>any):Sequential;

/** @link https://github.com/d3/d3-scale#interpolateViridis */
export function interpolateViridis(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolateInferno */
export function interpolateInferno(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolateMagma */
export function interpolateMagma(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolatePlasma */
export function interpolatePlasma(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolateWarm */
export function interpolateWarm(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolateCool */
export function interpolateCool(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolateRainbow */
export function interpolateRainbow(t:number):string;

/** @link https://github.com/d3/d3-scale#interpolateCubehelixDefault */
export function interpolateCubehelixDefault(t:number):string;

//----------------------------------------------------------------
// Quantize Scales
//----------------------------------------------------------------
export interface Quantize<Range> {
  /** @link https://github.com/d3/d3-scale#_quantize */
  (x:number):Range;

  /** @link https://github.com/d3/d3-scale#quantize_invertExtent */
  invertExtent(t:Range):[number,number];

  /** @link https://github.com/d3/d3-scale#quantize_domain */
  domain():[number,number];
  domain(domain:[number,number]):this;

  /** @link https://github.com/d3/d3-scale#quantize_range */
  range():Range[];
  range(range:Range[]):this;

  /** @link https://github.com/d3/d3-scale#quantize_ticks */
  ticks(count?:number):number[];

  /** @link https://github.com/d3/d3-scale#quantize_tickFormat */
  tickFormat(count?:number, specifier?:string):(n:number) => string;

  /** @link https://github.com/d3/d3-scale#quantize_nice */
  nice(count?:number):this;

  /** @link https://github.com/d3/d3-scale#quantize_copy */
  copy():this;
}

/** @link https://github.com/d3/d3-scale#scaleQuantize */
export function scaleQuantize<Range>():Quantize<Range>;

//----------------------------------------------------------------
// Quantile Scales
//----------------------------------------------------------------
export interface Quantile<Range> {
  /** @link https://github.com/d3/d3-scale#_quantile */
  (x:number):Range;

  /** @link https://github.com/d3/d3-scale#quantile_invertExtent */
  invertExtent(t:Range):[number, number];

  /** @link https://github.com/d3/d3-scale#quantile_domain */
  domain():number[];
  domain(domain:number[]):this;

  /** @link https://github.com/d3/d3-scale#quantile_range */
  range():Range[];
  range(range:Range[]):this;

  /** @link https://github.com/d3/d3-scale#quantile_quantiles */
  quantiles():number[];

  /** @link https://github.com/d3/d3-scale#quantile_copy */
  copy():this;
}

/** @link https://github.com/d3/d3-scale#scaleQuantile */
export function scaleQuantile<T>():Quantile<T>;

//----------------------------------------------------------------
// Threshold Scales
//----------------------------------------------------------------
export interface Threshold<Domain, Range> {
  /** @link https://github.com/d3/d3-scale#_threshold */
  (x:Domain):Range;

  /** @link https://github.com/d3/d3-scale#threshold_invertExtent */
  invertExtent(y:Range):[Domain, Domain];

  /** @link https://github.com/d3/d3-scale#threshold_domain */
  domain():Domain[];
  domain(domain:Domain[]):this;

  /** @link https://github.com/d3/d3-scale#threshold_range */
  range():Range[];
  range(range:Range[]):this;

  /** @link https://github.com/d3/d3-scale#threshold_copy */
  copy():this;
}

/**
 * Domain ← Orderable datas = number | string | Date
 *
 * @link https://github.com/d3/d3-scale#scaleThreshold
 */
export function scaleThreshold<Domain, Range>():Threshold<Domain, Range>;

//----------------------------------------------------------------
// Ordinal Scales
//----------------------------------------------------------------
export interface Ordinal<Domain, Range> {
  /** @link https://github.com/d3/d3-scale#_ordinal */
  (x:Domain):Range;

  /** @link https://github.com/d3/d3-scale#ordinal_domain */
  domain():Domain[];
  domain(domain:Domain[]):this;

  /** @link https://github.com/d3/d3-scale#ordinal_range */
  range():Range[];
  range(range:Range[]):this;

  /** @link https://github.com/d3/d3-scale#ordinal_unknown */
  unknown():Domain[];
  unknown(x:Domain[]):this;

  copy():this;
}

/** @link https://github.com/d3/d3-scale#scaleOrdinal */
export function scaleOrdinal<Domain, Range>(range:Range[]):Ordinal<Domain, Range>;

/** @link https://github.com/d3/d3-scale#scaleImplicit */
export const scaleImplicit:any[];

//----------------------------------------------------------------
// Band Scales
//----------------------------------------------------------------
export interface Band<Domain> {
  /** @link https://github.com/d3/d3-scale#_band */
  (x:Domain):number;

  /** @link https://github.com/d3/d3-scale#band_domain */
  domain():Domain[];
  domain(domain:Domain[]):this;

  /** @link https://github.com/d3/d3-scale#band_range */
  range():[number,number];
  range(range:[number,number]):this;

  /** @link https://github.com/d3/d3-scale#band_rangeRound */
  rangeRound():[number,number];
  rangeRound(range:[number,number]):this;

  /** @link https://github.com/d3/d3-scale#band_round */
  round():boolean;
  round(round:boolean):this;

  /** @link https://github.com/d3/d3-scale#band_paddingInner */
  paddingInner():number;
  paddingInner(padding:number):this;

  /** @link https://github.com/d3/d3-scale#band_paddingOuter */
  paddingOuter():number;
  paddingOuter(padding:number):this;

  /** @link https://github.com/d3/d3-scale#band_padding */
  padding():number;
  padding(padding:number):this;

  /** @link https://github.com/d3/d3-scale#band_align */
  align():number;
  align(align:number):this;

  /** @link https://github.com/d3/d3-scale#band_bandwidth */
  bandwidth():number;

  /** @link https://github.com/d3/d3-scale#band_step */
  step():number;

  /** @link https://github.com/d3/d3-scale#band_copy */
  copy():this;
}

/** @link https://github.com/d3/d3-scale#scaleBand */
export function scaleBand<Domain>():Band<Domain>;

//----------------------------------------------------------------
// Point Scales
//----------------------------------------------------------------
export interface Point<Domain> {
  /** @link https://github.com/d3/d3-scale#_point */
  (x:Domain):number;

  /** @link https://github.com/d3/d3-scale#point_domain */
  domain():Domain[];
  domain(domain:Domain[]):this;

  /** @link https://github.com/d3/d3-scale#point_range */
  range():[number,number];
  range(range:[number,number]):this;

  /** @link https://github.com/d3/d3-scale#point_rangeRound */
  rangeRound():[number,number];
  rangeRound(range:[number,number]):this;

  /** @link https://github.com/d3/d3-scale#point_round */
  round():boolean;
  round(round:boolean):this;

  /** @link https://github.com/d3/d3-scale#point_padding */
  padding():number;
  padding(padding:number):this;

  /** @link https://github.com/d3/d3-scale#point_align */
  align():number;
  align(align:number):this;

  /** @link https://github.com/d3/d3-scale#point_bandwidth */
  bandwidth():number;

  /** @link https://github.com/d3/d3-scale#point_step */
  step():number;

  /** @link https://github.com/d3/d3-scale#point_copy */
  copy():this;
}

/** @link https://github.com/d3/d3-scale#scalePoint */
export function scalePoint<Domain>():Point<Domain>;

//----------------------------------------------------------------
// Category Scales
//----------------------------------------------------------------
/** @link https://github.com/d3/d3-scale#schemeCategory10 */
export const schemeCategory10:string[];

/** @link https://github.com/d3/d3-scale#schemeCategory20 */
export const schemeCategory20:string[];

/** @link https://github.com/d3/d3-scale#schemeCategory20b */
export const schemeCategory20b:string[];

/** @link https://github.com/d3/d3-scale#schemeCategory20c */
export const schemeCategory20c:string[];
