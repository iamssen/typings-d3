import {Transition} from "d3-selection";

/** @link https://github.com/d3/d3-transition#transition */
export function transition(name?:string):Transition;

/** @link https://github.com/d3/d3-transition#active */
export function active(node:Node, name?:string):Transition;

/** @link https://github.com/d3/d3-transition#interrupt */
export function interrupt(node:Node, name?:string);