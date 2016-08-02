declare module 'd3-selection' {
  // Shothand types
  namespace $$ {
    type ValueFunction<T> = (datum?:any, index?:number, nodes?:Node[]) => T;
    type Selector = string | Node;
    type SelectorAll = string | Node[] | NodeListOf<Node>;
    type Primitive = string | number | boolean;
    
    interface Namespace {
      space:string;
      local:string;
    }
  }
  
  interface BaseSelection {
    /** @link https://github.com/d3/d3-selection#selection_nodes */
    nodes():Node[];
    
    /** @link https://github.com/d3/d3-selection#selection_node */
    node():Node;
    
    /** @link https://github.com/d3/d3-selection#selection_size */
    size():number;
    
    /** @link https://github.com/d3/d3-selection#selection_empty */
    empty():boolean;
    
    /** @link https://github.com/d3/d3-selection#selection_each */
    each(func:$$.ValueFunction<void>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_select */
    select(selector:$$.Selector | $$.ValueFunction<Node>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_selectAll */
    selectAll(selector:$$.SelectorAll | $$.ValueFunction<Node[] | NodeListOf<Node>>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_filter */
    filter(filter:$$.ValueFunction<boolean>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_merge */
    merge(otherSelection:BaseSelection):this;
    
    /** @link https://github.com/d3/d3-selection#selection_attr */
    attr(name:string):any;
    attr(name:string, value:$$.Primitive):this;
    attr(name:string, value:$$.ValueFunction<$$.Primitive>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_style */
    style(name:string):any;
    style(name:string, value:$$.Primitive, priority?:boolean):this;
    style(name:string, value:$$.ValueFunction<$$.Primitive>, priority?:boolean):this;
    
    /** @link https://github.com/d3/d3-selection#selection_text */
    text():string;
    text(value:string):this;
    text(value:$$.ValueFunction<string>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_remove */
    remove():this;
  }
  
  // Virtual type for Selection - d3.select(), d3.selectAll()
  interface Selection extends BaseSelection {
    // /** @link https://github.com/d3/d3-selection#selection_select */
    // select(selector:$$.Selector | $$.ValueFunction<Node>):this;
    //
    // /** @link https://github.com/d3/d3-selection#selection_selectAll */
    // selectAll(selector:$$.SelectorAll | $$.ValueFunction<Node[] | NodeListOf<Node>>):this;
    //
    // /** @link https://github.com/d3/d3-selection#selection_filter */
    // filter(filter:$$.ValueFunction<boolean>):this;
    
    data():any[];
    data(value:any[] | $$.ValueFunction<any>, key?:$$.ValueFunction<any>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_enter */
    enter():this;
    
    /** @link https://github.com/d3/d3-selection#selection_exit */
    exit():this;
    
    // /** @link https://github.com/d3/d3-selection#selection_merge */
    // merge(otherSelection:Selection):this;
    
    /** @link https://github.com/d3/d3-selection#selection_order */
    order():this;
    
    /** @link https://github.com/d3/d3-selection#selection_sort */
    sort(comparator:(a:any, b:any) => number):this;
    
    /** @link https://github.com/d3/d3-selection#selection_call */
    call(func:(selection:Selection, ...args) => void, ...args):this;
    
    // /** @link https://github.com/d3/d3-selection#selection_nodes */
    // nodes():Node[];
    //
    // /** @link https://github.com/d3/d3-selection#selection_node */
    // node():Node;
    //
    // /** @link https://github.com/d3/d3-selection#selection_size */
    // size():number;
    //
    // /** @link https://github.com/d3/d3-selection#selection_empty */
    // empty():boolean;
    //
    // /** @link https://github.com/d3/d3-selection#selection_each */
    // each(func:$$.ValueFunction<void>):this;
    
    // /** @link https://github.com/d3/d3-selection#selection_attr */
    // attr(name:string):any;
    // attr(name:string, value:$$.Primitive):this;
    // attr(name:string, value:$$.ValueFunction<$$.Primitive>):this;
    //
    // /** @link https://github.com/d3/d3-selection#selection_style */
    // style(name:string):any;
    // style(name:string, value:$$.Primitive, priority?:boolean):this;
    // style(name:string, value:$$.ValueFunction<$$.Primitive>, priority?:boolean):this;
    
    /** @link https://github.com/d3/d3-selection#selection_property */
    property(name:string):any;
    property(name:string, value:any):this;
    property(name:string, value:$$.ValueFunction<any>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_classed */
    classed(name:string):boolean;
    classed(name:string, value:boolean):this;
    classed(name:string, value:$$.ValueFunction<boolean>):this;
    
    // /** @link https://github.com/d3/d3-selection#selection_text */
    // text():string;
    // text(value:string):this;
    // text(value:$$.ValueFunction<string>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_html */
    html():string;
    html(value:string):this;
    html(value:$$.ValueFunction<string>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_raise */
    raise():this;
    
    /** @link https://github.com/d3/d3-selection#selection_lower */
    lower():this;
    
    /** @link https://github.com/d3/d3-selection#selection_append */
    append(type:string):this;
    append(type:$$.ValueFunction<Node>):this;
    
    /** @link https://github.com/d3/d3-selection#selection_insert */
    insert(type:string | $$.ValueFunction<Node>, before?:$$.Selector | $$.ValueFunction<Node>):this;
    
    // /** @link https://github.com/d3/d3-selection#selection_remove */
    // remove():this;
    
    /** @link https://github.com/d3/d3-selection#selection_datum */
    datum():any;
    datum(value:any):this;
    
    /** @link https://github.com/d3/d3-selection#selection_on */
    on(type:string, listener?:$$.ValueFunction<void>, capture?:boolean):this;
    
    /** @link https://github.com/d3/d3-selection#selection_dispatch */
    dispatch(type:string, params?:$$.ValueFunction<any> | any):this;
  }
  
  // Virtual type for Local - d3.local()
  interface Local {
    /** @link https://github.com/d3/d3-selection#local_set */
    set(node:Node, value:any);
    
    /** @link https://github.com/d3/d3-selection#local_get */
    get(node:Node):any;
    
    /** @link https://github.com/d3/d3-selection#local_remove */
    remove(node:Node);
    
    /** @link https://github.com/d3/d3-selection#local_toString */
    toString():string;
  }
  
  //---------------------------------------------
  // Local Variables
  //---------------------------------------------
  /** @link https://github.com/d3/d3-selection#local */
  function local():Local;
  
  //---------------------------------------------
  // Selecting Elements
  //---------------------------------------------
  /** @link https://github.com/d3/d3-selection#selection */
  function selection():Selection;
  
  /** @link https://github.com/d3/d3-selection#select */
  function select(selector:$$.Selector):Selection;
  
  /** @link https://github.com/d3/d3-selection#selectAll */
  function selectAll(selector:$$.SelectorAll):Selection;
  
  /** @link https://github.com/d3/d3-selection#matcher */
  function matcher(selector:string):$$.ValueFunction<boolean>;
  
  /** @link https://github.com/d3/d3-selection#selector */
  function selector(selector:string):$$.ValueFunction<Node>;
  
  /** @link https://github.com/d3/d3-selection#selectorAll */
  function selectorAll(selector:string):$$.ValueFunction<NodeListOf<Node>>;
  
  /** @link https://github.com/d3/d3-selection#window */
  function window(node:Node):Node;
  
  //---------------------------------------------
  // Modifying Elements
  //---------------------------------------------
  /** @link https://github.com/d3/d3-selection#creator */
  function creator(tagName:string):$$.ValueFunction<Node>;
  
  //---------------------------------------------
  // Handling Events
  //---------------------------------------------
  /** @link https://github.com/d3/d3-selection#event */
    // SOMEDAY any → Event | {type:string, sourceEvent:Event}
  var event:any;
  
  /** @link https://github.com/d3/d3-selection#customEvent */
  function customEvent(event:Event, listener:Function, listenerThisArg?:any, listenerArguments?:any[]);
  
  /** @link https://github.com/d3/d3-selection#mouse */
  function mouse(container:Node):[number, number];
  
  /** @link https://github.com/d3/d3-selection#touch */
  function touch(container:Node, identifier?:number):[number, number];
  function touch(container:Node, touches:Touch[], identifier?:number):[number, number];
  
  /** @link https://github.com/d3/d3-selection#touches */
  function touches(container:Node, touches?:Touch[]):[number, number][];
  
  //---------------------------------------------
  // Namespaces
  //---------------------------------------------
  /** @link https://github.com/d3/d3-selection#namespace */
  function namespace(name:string):$$.Namespace;
  
  /** @link https://github.com/d3/d3-selection#namespaces */
  const namespaces:{[name:string]:string};
  
  //================================================================
  // import 'd3-transition'
  //================================================================
  interface Transition extends BaseSelection {
    // same as the Selection
    /** @link https://github.com/d3/d3-transition#transition_call */
    call(func:(selection:Selection, ...args) => any, ...args):this;
    
    // /** @link https://github.com/d3/d3-transition#transition_nodes */
    // nodes():Node[];
    //
    // /** @link https://github.com/d3/d3-transition#transition_node */
    // node():Node;
    //
    // /** @link https://github.com/d3/d3-transition#transition_size */
    // size():number;
    //
    // /** @link https://github.com/d3/d3-transition#transition_empty */
    // empty():boolean;
    //
    // /** @link https://github.com/d3/d3-transition#transition_each */
    // each(func:$$.ValueFunction<void>):this;
    
    // // like as the Selection
    // /** @link https://github.com/d3/d3-transition#transition_select */
    // select(selector:$$.Selector | $$.ValueFunction<Node>):this;
    //
    // /** @link https://github.com/d3/d3-transition#transition_selectAll */
    // selectAll(selector:$$.SelectorAll | $$.ValueFunction<Node[] | NodeListOf<Node>>):this;
    //
    // /** @link https://github.com/d3/d3-transition#transition_filter */
    // filter(filter:$$.ValueFunction<boolean>):this;
    //
    // /** @link https://github.com/d3/d3-transition#transition_merge */
    // merge(otherSelection:Selection):this;
    
    /** @link https://github.com/d3/d3-transition#transition_transition */
    transition(transition?:any):this;
    
    // /** @link https://github.com/d3/d3-transition#transition_attr */
    // attr(name:string):any;
    // attr(name:string, value:$$.Primitive):this;
    // attr(name:string, value:$$.ValueFunction<$$.Primitive>):this;
    //
    // /** @link https://github.com/d3/d3-transition#transition_style */
    // style(name:string):any;
    // style(name:string, value:$$.Primitive, priority?:boolean):this;
    // style(name:string, value:$$.ValueFunction<$$.Primitive>, priority?:boolean):this;
    //
    // /** @link https://github.com/d3/d3-transition#transition_text */
    // text():string;
    // text(value:string):this;
    // text(value:$$.ValueFunction<string>):this;
    //
    // /** @link https://github.com/d3/d3-transition#transition_remove */
    // remove():this; // transition end
    
    // original
    /** @link https://github.com/d3/d3-transition#transition_selection */
    selection():Selection;
    
    /** @link https://github.com/d3/d3-transition#transition_on */
    on(type:string):$$.ValueFunction<void>;
    on(type:string, listener:$$.ValueFunction<void>):this;
    
    on(type:'start'):$$.ValueFunction<void>;
    on(type:'start', listener:$$.ValueFunction<void>):this;
    
    on(type:'end'):$$.ValueFunction<void>;
    on(type:'end', listener:$$.ValueFunction<void>):this;
    
    on(type:'interrupt'):$$.ValueFunction<void>;
    on(type:'interrupt', listener:$$.ValueFunction<void>):this;
    
    /** @link https://github.com/d3/d3-transition#transition_attrTween */
    attrTween(name:string):$$.ValueFunction<(t:number) => any>;
    attrTween(name:string, value:(t:number) => any):this;
    attrTween(name:string, value:$$.ValueFunction<(t:number) => any>):this;
    
    /** @link https://github.com/d3/d3-transition#transition_styleTween */
    styleTween(name:string):$$.ValueFunction<(t:number) => any>;
    styleTween(name:string, value:(t:number) => any, priority?:boolean):this;
    styleTween(name:string, value:$$.ValueFunction<(t:number) => any>, priority?:boolean):this;
    
    /** @link https://github.com/d3/d3-transition#transition_tween */
    tween(name:string):$$.ValueFunction<(t:number) => void>;
    tween(name:string, value:(t:number) => void):this;
    tween(name:string, value:$$.ValueFunction<(t:number) => void>):this;
    
    /** @link https://github.com/d3/d3-transition#transition_delay */
    delay():number;
    delay(value:number):this;
    delay(value:$$.ValueFunction<number>):this;
    
    /** @link https://github.com/d3/d3-transition#transition_duration */
    duration():number;
    duration(value:number):this;
    duration(value:$$.ValueFunction<number>):this;
    
    /** @link https://github.com/d3/d3-transition#transition_ease */
    ease():(t:number)=>number;
    ease(value:(t:number)=>number):this;
  }
  
  interface Selection {
    /** @link https://github.com/d3/d3-transition#selection_transition */
    transition(transition?:any):Transition;
    
    /** @link https://github.com/d3/d3-transition#selection_interrupt */
    interrupt(transition?:any)
  }
}