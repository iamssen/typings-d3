/** @link https://github.com/d3/d3-interpolate */
export namespace $$ {
  export type Rgb = {r:number, g:number, b:number};
  export type Hsl = {h:number, s:number, l:number};
  export type Hcl = {h:number, c:number, l:number};
  export type Lab = {l:number, a:number, b:number};
  export type Cubehelix = {h:number, s:number, l:number};
}

/** @link https://github.com/d3/d3-interpolate#interpolate */
export function interpolate(a:any, b:any):(t:number) => any;

/** @link https://github.com/d3/d3-interpolate#interpolateArray */
export function interpolateArray(a:any[], b:any[]):(t:number) => any[];

/** @link https://github.com/d3/d3-interpolate#interpolateNumber */
export function interpolateNumber(a:number, b:number):(t:number) => number;

/** @link https://github.com/d3/d3-interpolate#interpolateObject */
export function interpolateObject(a:any, b:any):(t:number) => any;

/** @link https://github.com/d3/d3-interpolate#interpolateRound */
export function interpolateRound(a:number, b:number):(t:number) => number;

/** @link https://github.com/d3/d3-interpolate#interpolateString */
export function interpolateString(a:string, b:string):(t:number) => string;

/**
 * ```
 * const x = interpolateTransformCss('translate(0, 0)', 'translate(100px, 30px)')
 * console.log(d3.quantize(t => x(t), 10))
 * ```
 *
 * @link https://github.com/d3/d3-interpolate#interpolateTransformCss
 */
export function interpolateTransformCss(a:string, b:string):(t:number) => string;

/**
 * ```
 * const x = interpolateTransformSvg('translate(0, 0)', 'translate(100, 30)')
 * console.log(d3.quantize(t => x(t), 10))
 * ```
 *
 * @link https://github.com/d3/d3-interpolate#interpolateTransformSvg
 */
export function interpolateTransformSvg(a:string, b:string):(t:number) => string;

/**
 * @param a `[ux0, uy0, w0]`
 * @param b `[ux1, uy1, w1]`
 * @return `t => [ux, uy, w]`
 *
 * @link https://github.com/d3/d3-interpolate#interpolateZoom
 */
export function interpolateZoom(a:[number, number, number], b:[number, number, number]):(t:number) => [number, number, number];

/** @link https://github.com/d3/d3-interpolate#interpolateRgb */
export function interpolateRgb(a:string | $$.Rgb, b:string | $$.Rgb):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateRgbBasis */
export function interpolateRgbBasis(colors:Array<string | $$.Rgb>):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateRgbBasisClosed */
export function interpolateRgbBasisClosed(colors:Array<string | $$.Rgb>):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateHsl */
export function interpolateHsl(a:string | $$.Hsl, b:string | $$.Hsl):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateHslLong */
export function interpolateHslLong(a:string | $$.Hsl, b:string | $$.Hsl):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateLab */
export function interpolateLab(a:string | $$.Lab, b:string | $$.Lab):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateHcl */
export function interpolateHcl(a:string | $$.Hcl, b:string | $$.Hcl):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateHclLong */
export function interpolateHclLong(a:string | $$.Hcl, b:string | $$.Hcl):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateCubehelix */
export function interpolateCubehelix(a:string | $$.Cubehelix, b:string | $$.Cubehelix):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateCubehelixLong */
export function interpolateCubehelixLong(a:string | $$.Cubehelix, b:string | $$.Cubehelix):(t:number) => string;

/** @link https://github.com/d3/d3-interpolate#interpolateBasis */
export function interpolateBasis(values:number[]):(t:number) => number;

/** @link https://github.com/d3/d3-interpolate#interpolateBasisClosed */
export function interpolateBasisClosed(values:number[]):(t:number) => number;

/** @link https://github.com/d3/d3-interpolate#interpolateDate */
export function interpolateDate(values:Date[]):(t:number) => Date;

/**
 * ```
 * const x = d3.quantize(t => Math.round(t * 100), 10)
 * x // [ 0, 11, 22, 33, 44, 56, 67, 78, 89, 100 ]
 * ```
 *
 * Caution: if you want work with interpolateArray, interpolateObject
 * you need copy that return items
 * because that methods return defensive copies
 *
 * ```
 * const x = d3.interpolateArray([1, 2], [100, 1000])
 * d3.quantize(t => x(t).slice(), 10) // Array.slice()
 * ```
 *
 * @link https://github.com/d3/d3-interpolate#quantize
 */
export function quantize<T>(interpolator:(t:number) => T, length:number):T[];
