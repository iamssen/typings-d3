declare module 'd3-transition' {
  import {Transition} from 'd3-selection';
  
  /** @link https://github.com/d3/d3-transition#transition */
  function transition(name?:string):Transition;
  
  /** @link https://github.com/d3/d3-transition#active */
  function active(node:Node, name?:string):Transition;
  
  /** @link https://github.com/d3/d3-transition#interrupt */
  function interrupt(node:Node, name?:string);
}