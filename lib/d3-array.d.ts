/** @link https://github.com/d3/d3-array */
declare module 'd3-array' {
  namespace $$ {
    type Accessor<I,O> = (item:I, index?:number, data?:I[]) => O;
    type Orderable = number | string | Date;
  }
  
  //---------------------------------------------
  // Statistics
  //---------------------------------------------
  /** @link https://github.com/d3/d3-array#min */
  // FIXME return type $$.Orderable is not assignable to string or number or Date
  // - can typescript assign multiple return type?
  // SOMEDAY ():any → ():$$.Orderable
  function min(array:$$.Orderable[]):any;
  function min(array:any[], accessor:$$.Accessor<any,$$.Orderable>):any;
  
  /** @link https://github.com/d3/d3-array#max */
  // SOMEDAY ():any → ():$$.Orderable
  function max(array:$$.Orderable[]):any;
  function max(array:any[], accessor:$$.Accessor<any,$$.Orderable>):any;
  
  /** @link https://github.com/d3/d3-array#extent */
  // SOMEDAY ():[any, any] → ():[$$.Orderable, $$.Orderable]
  function extent(array:$$.Orderable[]):[any, any];
  function extent(array:any[], accessor:$$.Accessor<any,$$.Orderable>):[any, any];
  
  /** @link https://github.com/d3/d3-array#sum */
  function sum(array:number[]):number;
  function sum(array:any[], accessor:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#mean */
  function mean(array:number[]):number;
  function mean(array:any[], accessor:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#median */
  function median(array:number[]):number;
  function median(array:any[], accessor:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#quantile */
  function quantile(array:number[], p:number):number;
  function quantile(array:any[], p:number, accessor:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#variance */
  function variance(array:number[]):number;
  function variance(array:any[], accessor:$$.Accessor<any,number>):number;
  
  /** @link https://github.com/d3/d3-array#deviation */
  function deviation(array:number[]):number;
  function deviation(array:any[], accessor:$$.Accessor<any,number>):number;
  
  //---------------------------------------------
  // Histograms
  //---------------------------------------------
  interface HistogramBin<T> extends Array<T> {
    x0:number;
    x1:number;
  }
  
  interface Histogram<T> {
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
    // SOMEDAY => any → => $$.Orderable
    value():(d?:any, i?:number, data?:any[]) => any;
    value(value:(d?:any, i?:number, data?:any[]) => any):this;
    
    /**
     * 2: numeric data → [min, max]
     * @link https://github.com/d3/d3-array#histogram_domain
     */
    // SOMEDAY => any → => $$.Orderable
    domain():(values:$$.Orderable[]) => any;
    domain(value:[$$.Orderable, $$.Orderable]):this;
    domain(value:(values:$$.Orderable[]) => any[]):this;
    
    /**
     * 3: [numeric data, min, max] → number[] - threshold points
     *
     * [=> any]'s return type are $$.Orderable[] or number(count)
     * @link https://github.com/d3/d3-array#histogram_thresholds
     */
    // SOMEDAY => any → => $$.Orderable | number
    thresholds():(values:$$.Orderable[], min:$$.Orderable, max:$$.Orderable) => any;
    thresholds(value:$$.Orderable[]):this;
    thresholds(value:(values:$$.Orderable[], min:$$.Orderable, max:$$.Orderable) => any):this;
  }
  
  /** @link https://github.com/d3/d3-array#histogram */
  function histogram<T>():Histogram<T>;
  
  /** @link https://github.com/d3/d3-array#thresholdFreedmanDiaconis */
  function thresholdFreedmanDiaconis(values:number[], min:number, max:number):number;
  
  /** @link https://github.com/d3/d3-array#thresholdScott */
  function thresholdScott(values:number[], min:number, max:number):number;
  
  /** @link https://github.com/d3/d3-array#thresholdSturges */
  function thresholdSturges(values:number[], min:number, max:number):number;
  
  //---------------------------------------------
  // Search
  //---------------------------------------------
  interface Bisector {
    /** @link https://github.com/d3/d3-array#bisector_left */
    left:(array:any[], x:any, lo?:number, hi?:number) => number,
    /** @link https://github.com/d3/d3-array#bisector_right */
    right:(array:any[], x:any, lo?:number, hi?:number) => number
  }
  
  /** @link https://github.com/d3/d3-array#scan */
  function scan(array:any[], comparator:(a:any, b:any) => number):number;
  
  /** @link https://github.com/d3/d3-array#bisect */
  function bisect(array:any[], x:any, lo?:number, hi?:number):number;
  
  /** @link https://github.com/d3/d3-array#bisectRight */
  function bisectRight(array:any[], x:any, lo?:number, hi?:number):number;
  
  /** @link https://github.com/d3/d3-array#bisectLeft */
  function bisectLeft(array:any[], x:any, lo?:number, hi?:number):number;
  
  /** @link https://github.com/d3/d3-array#bisector */
  function bisector(accessor:(x:any) => any):Bisector;
  function bisector(comparator:(a:any, b:any) => number):Bisector;
  
  /** @link https://github.com/d3/d3-array#ascending */
  function ascending(a:any, b:any):number;
  
  /** @link https://github.com/d3/d3-array#descending */
  function descending(a:any, b:any):number;
  
  //---------------------------------------------
  // Transformations
  //---------------------------------------------
  /**
   * ```
   * merge([[1], [2, 3]]) // [1, 2, 3]
   * ```
   * @link https://github.com/d3/d3-array#merge
   */
  function merge(arrays:any[][]):any[];
  
  /**
   * ```
   * pairs([1, 2, 3, 4]) // [[1, 2], [2, 3], [3, 4]]
   * ```
   * @link https://github.com/d3/d3-array#pairs
   */
  function pairs(array):any[][];
  
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
  function permute(array:any[], indexes:number[]):any[];
  function permute(object:any, fields:string[]):any[];
  
  /** @link https://github.com/d3/d3-array#shuffle */
  function shuffle(array:any[], lo?:number, hi?:number):any[];
  
  /**
   * ```
   * const start = 0;
   * const stop = 100;
   * const count = 7;
   * ticks(start, stop, count) // [ 0, 20, 40, 60, 80, 100 ]
   * ```
   * @link https://github.com/d3/d3-array#ticks
   */
  function ticks(start:number, stop:number, count:number):number[];
  
  /**
   * ```
   * tickStep(start, stop, count) // 20
   * ```
   * @link https://github.com/d3/d3-array#tickStep
   */
  function tickStep(start:number, stop:number, count:number):number[];
  
  /**
   * ```
   * range(10) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
   * range(10, 20) // [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
   * range(10, 20, 5) // [ 10, 15 ]
   * ```
   * @link https://github.com/d3/d3-array#range
   */
  function range(stop:number):number[];
  function range(start:number, stop:number):number[];
  function range(start:number, stop:number, step:number):number[];
  
  /** @link https://github.com/d3/d3-array#transpose */
  function transpose(matrix:any[][]):any[][];
  
  /** @link https://github.com/d3/d3-array#zip */
  function zip(...arrays:any[][]):any[][];
}