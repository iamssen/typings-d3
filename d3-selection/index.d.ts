declare namespace d3 {
  // Shothand types
  export namespace selection {
    export type ValueFunction<T> = (datum?:any, index?:number, nodes?:Node[]) => T;
    export type D3CustomEvent = {type:string, sourceEvent:Event};
    export type Selector = string | Node;
    export type SelectorAll = string | Node[] | NodeListOf<Node>;
    export type Evt = Event | D3CustomEvent;
    export type Value = ValueFunction<any> | any;

    export interface Namespace {
      space:string;
      local:string;
    }
  }

  // Virtual type for Selection - d3.select(), d3.selectAll()
  export interface Selection {
    select(selector:selection.Selector | selection.ValueFunction<Node>):this;
    selectAll(selector:selection.SelectorAll | selection.ValueFunction<Node[] | NodeListOf<Node>>):this;
    
    filter(filter:selection.ValueFunction<boolean>):this;
    
    data():any[];
    data(value:any[] | selection.ValueFunction<any>, key?:selection.ValueFunction<any>):this;
    
    enter():this;
    exit():this;
    
    merge(otherSelection:Selection):this;
    
    order():this;
    sort(comparator:(a:any, b:any) => number):this;
    call(func:(selection:Selection, ...args) => any, ...args):this;
    
    nodes():Node[];
    node():Node;
    
    size():number;
    
    empty():boolean;
    
    each(func:selection.ValueFunction<void>):this;
    
    attr(name:string):any;
    attr(name:string, value:selection.Value):this;
    // attr(values:{[name:string]:Value}):this;
    
    style(name:string):any;
    style(name:string, value:selection.Value, priority?:boolean):this;
    // style(values:{[name:string]:Value}):this;
    
    property(name:string):any;
    property(name:string, value:selection.Value):this;
    // property(values:{[name:string]:Value}):this;
    
    classed(name:string):boolean;
    classed(name:string, value:selection.Value):this;
    // classed(values:{[name:string]:Value}):this;
    
    text():string;
    text(value:selection.Value):this;
    // text(values:{[name:string]:Value}):this;
    
    html():string;
    html(value:selection.Value):this;
    // html(values:{[name:string]:Value}):this;
    
    raise():this;
    lower():this;
    
    append(type:string | selection.ValueFunction<Node>):this;
    insert(type:string | selection.ValueFunction<Node>, before?:selection.Selector | selection.ValueFunction<Node>):this;
    remove():this;
    
    datum():any;
    datum(value:any):this;
    
    on(type:string, listener?:Function, capture?:boolean):this;
    dispatch(type:string, params?:selection.ValueFunction<any> | any):this;
  }
  
  // Virtual type for Local - d3.local()
  export interface Local {
    set(node:Node, value:any);
    get(node:Node);
    remove(node:Node);
    toString():string;
  }
  
  //---------------------------------------------
  // Local Variables
  //---------------------------------------------
  export function local():Local;
  
  //---------------------------------------------
  // Selecting Elements
  //---------------------------------------------
  export function select(selector:selection.Selector):Selection;
  
  export function selectAll(selector:selection.SelectorAll):Selection;
  
  export function matcher(selector:string):selection.ValueFunction<boolean>;
  
  export function selector(selector:string):selection.ValueFunction<Node>;
  
  export function selectorAll(selector:string):selection.ValueFunction<NodeListOf<Node>>;
  
  export function window(node:Node):Node;
  
  //---------------------------------------------
  // Modifying Elements
  //---------------------------------------------
  export function creator(tagName:string):selection.ValueFunction<Node>;
  
  //---------------------------------------------
  // Handling Events
  //---------------------------------------------
  export const event:selection.Evt;
  
  export function customEvent(event:Event, listener:Function, listenerThisArg?:any, listenerArguments?:any[]);
  
  export function mouse(container:Node):[number, number];
  
  export function touch(container:Node, identifier?:number):[number, number];
  export function touch(container:Node, touches:Touch[], identifier?:number):[number, number];
  
  export function touches(container:Node, touches?:Touch[]):[number, number][];
  
  //---------------------------------------------
  // Namespaces
  //---------------------------------------------
  export function namespace(name:string):selection.Namespace;
  
  export const namespaces:{[name:string]:string};
}

export = d3;
