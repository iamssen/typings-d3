declare module 'd3-axis' {
  interface Axis {
    /**
     * d3.select() or d3.select().transition()
     *
     * @link https://github.com/d3/d3-axis#_axis
     */
    (selectionOrTransition:any);
    
    /** @link https://github.com/d3/d3-axis#axis_scale */
    scale():any;
    scale(scale:any):this;
    
    /**
     * pass to scale.ticks(count:number)
     * pass to scale.tickFormat(count:number, specifier:string)
     *
     * @link https://github.com/d3/d3-axis#axis_ticks
     */
    ticks(...args):this;
    
    /**
     * pass to scale.ticks(count:number)
     * pass to scale.tickFormat(count:number, specifier:string)
     *
     * @link https://github.com/d3/d3-axis#axis_tickArguments
     */
    tickArguments():any[];
    tickArguments(args:any[]):this;
    
    /**
     * receive from scale.ticks()
     * receive from scale.domain()
     *
     * @link https://github.com/d3/d3-axis#axis_tickValues
     */
    tickValues():any[];
    tickValues(values:any[]):this;
    
    /** @link https://github.com/d3/d3-axis#axis_tickFormat */
    tickFormat():(value:any) => string;
    tickFormat(format:(value:any) => string):this;
    
    /** @link https://github.com/d3/d3-axis#axis_tickSize */
    tickSize():number;
    tickSize(size:number):this;
    
    /** @link https://github.com/d3/d3-axis#axis_tickSizeInner */
    tickSizeInner():number;
    tickSizeInner(size:number):this;
    
    /** @link https://github.com/d3/d3-axis#axis_tickSizeOuter */
    tickSizeOuter():number;
    tickSizeOuter(size:number):this;
    
    /** @link https://github.com/d3/d3-axis#axis_tickPadding */
    tickPadding():number;
    tickPadding(padding:number):this;
  }
  
  /** @link https://github.com/d3/d3-axis#axisTop */
  function axisTop(scale:any):Axis;
  
  /** @link https://github.com/d3/d3-axis#axisRight */
  function axisRight(scale:any):Axis;
  
  /** @link https://github.com/d3/d3-axis#axisBottom */
  function axisBottom(scale:any):Axis;
  
  /** @link https://github.com/d3/d3-axis#axisLeft */
  function axisLeft(scale:any):Axis;
}