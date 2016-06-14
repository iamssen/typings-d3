/** @link https://github.com/d3/d3-array */
declare namespace d3 {
  export namespace $$ {
    export type Accessor<I,O> = (item:I, index?:number, data?:I[]) => O;
    export type Orderable = number | string | Date;
  }
  
  //---------------------------------------------
  // Statistics
  //---------------------------------------------
  /** @link https://github.com/d3/d3-array#min */
  export function min(array:$$.Orderable[]):$$.Orderable;
  export function min(array:any[], accessor?:$$.Accessor<any,$$.Orderable>):$$.Orderable;
  
  /** @link https://github.com/d3/d3-array#max */
  export function max(array:$$.Orderable[]):$$.Orderable;
  export function max(array:any[], accessor?:$$.Accessor<any,$$.Orderable>):$$.Orderable;
  
  /** @link https://github.com/d3/d3-array#extent */
  export function extent(array:$$.Orderable[]):[$$.Orderable, $$.Orderable];
  export function extent(array:any[], accessor?:$$.Accessor<any,$$.Orderable>):[$$.Orderable, $$.Orderable];
  
  /** @link https://github.com/d3/d3-array#sum */
  export function sum(array:number[]):number;
  export function sum(array:any[], accessor?:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#mean */
  export function mean(array:number[]):number;
  export function mean(array:any[], accessor?:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#median */
  export function median(array:number[]):number;
  export function median(array:any[], accessor?:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#quantile */
  export function quantile(array:number[], p:number):number;
  export function quantile(array:any[], p:number, accessor?:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#variance */
  export function variance(array:number[]):number;
  export function variance(array:any[], accessor?:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#deviation */
  export function deviation(array:number[]):number;
  export function deviation(array:any[], accessor?:$$.Accessor<any,number>):number;
  
  //---------------------------------------------
  // Histograms
  //---------------------------------------------
  export interface HistogramBin<T> extends Array<T> {
    x0:number;
    x1:number;
  }
  
  export interface Histogram<T> {
    /**
     * 0: data
     * 4: → `[...matchd datas, x0, x1][]` → `result[x][y]` is `T / result[x].x0` is min
     * @link https://github.com/d3/d3-array#_histogram
     */
    (data:any[]):HistogramBin<T>[];
    
    /**
     * 1: data → numeric data {}
     * @link https://github.com/d3/d3-array#histogram_value
     */
    value():(d?:any, i?:number, data?:any[]) => $$.Orderable;
    value(value:(d?:any, i?:number, data?:any[]) => $$.Orderable):this;
    
    /**
     * 2: numeric data → [min, max]
     * @link https://github.com/d3/d3-array#histogram_domain
     */
    domain():(values:$$.Orderable[]) => [$$.Orderable, $$.Orderable];
    domain(value:[$$.Orderable, $$.Orderable]):this;
    domain(value:(values:$$.Orderable[]) => [$$.Orderable, $$.Orderable]):this;
    
    /**
     * 3: [numeric data, min, max] → number[] - threshold points
     * @link https://github.com/d3/d3-array#histogram_thresholds
     */
    thresholds():(values:$$.Orderable[], min:$$.Orderable, max:$$.Orderable) => $$.Orderable[];
    thresholds(value:$$.Orderable[]):this;
    thresholds(value:(values:$$.Orderable[], min:$$.Orderable, max:$$.Orderable) => $$.Orderable[]):this;
  }
  
  /** @link https://github.com/d3/d3-array#histogram */
  export function histogram<T>():Histogram<T>;
  
  /** @link https://github.com/d3/d3-array#thresholdFreedmanDiaconis */
  export function thresholdFreedmanDiaconis(values:number[], min:number, max:number):number;
  
  /** @link https://github.com/d3/d3-array#thresholdScott */
  export function thresholdScott(values:number[], min:number, max:number):number;
  
  /** @link https://github.com/d3/d3-array#thresholdSturges */
  export function thresholdSturges(values:number[], min:number, max:number):number;
  
  //---------------------------------------------
  // Search
  //---------------------------------------------
  export interface Bisector {
    /** @link https://github.com/d3/d3-array#bisector_left */
    left:(array:any[], x:any, lo?:number, hi?:number) => number,
    /** @link https://github.com/d3/d3-array#bisector_right */
    right:(array:any[], x:any, lo?:number, hi?:number) => number
  }
  
  /** @link https://github.com/d3/d3-array#scan */
  export function scan(array:any[], comparator:(a:any, b:any) => number):number;
  
  /** @link https://github.com/d3/d3-array#bisect */
  export function bisect(array:any[], x:any, lo?:number, hi?:number):number;
  
  /** @link https://github.com/d3/d3-array#bisectRight */
  export function bisectRight(array:any[], x:any, lo?:number, hi?:number):number;
  
  /** @link https://github.com/d3/d3-array#bisectLeft */
  export function bisectLeft(array:any[], x:any, lo?:number, hi?:number):number;
  
  /** @link https://github.com/d3/d3-array#bisector */
  export function bisector(accessor:(x:any) => any):Bisector;
  export function bisector(comparator:(a:any, b:any) => number):Bisector;
  
  /** @link https://github.com/d3/d3-array#ascending */
  export function ascending(a:any, b:any):number;
  
  /** @link https://github.com/d3/d3-array#descending */
  export function descending(a:any, b:any):number;
  
  //---------------------------------------------
  // Transformations
  //---------------------------------------------
  /**
   * ```
   * merge([[1], [2, 3]]) // [1, 2, 3]
   * ```
   * @link https://github.com/d3/d3-array#merge
   */
  export function merge(arrays:any[][]):any[];
  
  /**
   * ```
   * pairs([1, 2, 3, 4]) // [[1, 2], [2, 3], [3, 4]]
   * ```
   * @link https://github.com/d3/d3-array#pairs
   */
  export function pairs(array):any[][];
  
  /**
   * ```
   * permute(['a', 'b', 'c'], [0, 2]) // ['a', 'c']
   *
   * const object = {yield: 27, variety: 'Manchuria', year: 1931, site: 'University Farm'}
   * const fields:string[] = ['site', 'variety', 'yield']
   * permute(object, fields) // ['University Farm', 'Manchuria', 27]
   * ```
   * @link https://github.com/d3/d3-array#permute
   */
  export function permute(array:any[], indexes:number[]):any[];
  export function permute(object:any, fields:string[]):any[];
  
  /** @link https://github.com/d3/d3-array#shuffle */
  export function shuffle(array:any[], lo?:number, hi?:number):any[];
  
  /**
   * ```
   * const start = 0;
   * const stop = 100;
   * const count = 7;
   * ticks(start, stop, count) // [ 0, 20, 40, 60, 80, 100 ]
   * ```
   * @link https://github.com/d3/d3-array#ticks
   */
  export function ticks(start:number, stop:number, count:number):number[];
  
  /**
   * ```
   * tickStep(start, stop, count) // 20
   * ```
   * @link https://github.com/d3/d3-array#tickStep
   */
  export function tickStep(start:number, stop:number, count:number):number[];
  
  /**
   * ```
   * range(10) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
   * range(10, 20) // [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
   * range(10, 20, 5) // [ 10, 15 ]
   * ```
   * @link https://github.com/d3/d3-array#range
   */
  export function range(stop:number):number[];
  export function range(start:number, stop:number):number[];
  export function range(start:number, stop:number, step:number):number[];
  
  /** @link https://github.com/d3/d3-array#transpose */
  export function transpose(matrix:any[][]):any[][];
  
  /** @link https://github.com/d3/d3-array#zip */
  export function zip(...arrays:any[][]):any[][];
}

export = d3;