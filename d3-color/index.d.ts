export interface Color {
  /** @link https://github.com/d3/d3-color#color_opacity */
  opacity:number;
  /** @link https://github.com/d3/d3-color#color_rgb */
  rgb():Rgb;
  /** @link https://github.com/d3/d3-color#color_brighter */
  brighter(k:number):this;
  /** @link https://github.com/d3/d3-color#color_darker */
  darker(k:number):this;
  /** @link https://github.com/d3/d3-color#color_displayable */
  displayable():boolean;
  /** @link https://github.com/d3/d3-color#color_toString */
  toString():string;
}

export interface Rgb extends Color {
  r:number;
  g:number;
  b:number;
}

export interface Hsl extends Color {
  h:number;
  s:number;
  l:number;
}

export interface Lab extends Color {
  l:number;
  a:number;
  b:number;
}

export interface Hcl extends Color {
  h:number;
  c:number;
  l:number;
}

export interface Cubehelix extends Color {
  h:number;
  s:number;
  l:number;
}

/** @link https://github.com/d3/d3-color#color */
export function color(specifier:string):Color;

/** @link https://github.com/d3/d3-color#rgb */
export function rgb(specifier:string):Rgb;
export function rgb(color:Color):Rgb;
export function rgb(r:number, g:number, b:number, opacity?:number):Rgb;

/** @link https://github.com/d3/d3-color#hsl */
export function hsl(specifier:string):Hsl;
export function hsl(color:Color):Hsl;
export function hsl(h:number, s:number, l:number, opacity?:number):Hsl;

/** @link https://github.com/d3/d3-color#lab */
export function lab(specifier:string):Lab;
export function lab(color:Color):Lab;
export function lab(l:number, a:number, b:number, opacity?:number):Lab;

/** @link https://github.com/d3/d3-color#hcl */
export function hcl(specifier:string):Hcl;
export function hcl(color:Color):Hcl;
export function hcl(h:number, c:number, l:number, opacity?:number):Hcl;

/** @link https://github.com/d3/d3-color#cubehelix */
export function cubehelix(specifier:string):Cubehelix;
export function cubehelix(color:Color):Cubehelix;
export function cubehelix(h:number, s:number, l:number, opacity?:number):Cubehelix;
