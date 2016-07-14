declare module 'd3-color' {
  interface Color {
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
  
  interface Rgb extends Color {
    r:number;
    g:number;
    b:number;
  }
  
  interface Hsl extends Color {
    h:number;
    s:number;
    l:number;
  }
  
  interface Lab extends Color {
    l:number;
    a:number;
    b:number;
  }
  
  interface Hcl extends Color {
    h:number;
    c:number;
    l:number;
  }
  
  interface Cubehelix extends Color {
    h:number;
    s:number;
    l:number;
  }
  
  /** @link https://github.com/d3/d3-color#color */
  function color(specifier:string):Color;
  
  /** @link https://github.com/d3/d3-color#rgb */
  function rgb(specifier:string):Rgb;
  function rgb(color:Color):Rgb;
  function rgb(r:number, g:number, b:number, opacity?:number):Rgb;
  
  /** @link https://github.com/d3/d3-color#hsl */
  function hsl(specifier:string):Hsl;
  function hsl(color:Color):Hsl;
  function hsl(h:number, s:number, l:number, opacity?:number):Hsl;
  
  /** @link https://github.com/d3/d3-color#lab */
  function lab(specifier:string):Lab;
  function lab(color:Color):Lab;
  function lab(l:number, a:number, b:number, opacity?:number):Lab;
  
  /** @link https://github.com/d3/d3-color#hcl */
  function hcl(specifier:string):Hcl;
  function hcl(color:Color):Hcl;
  function hcl(h:number, c:number, l:number, opacity?:number):Hcl;
  
  /** @link https://github.com/d3/d3-color#cubehelix */
  function cubehelix(specifier:string):Cubehelix;
  function cubehelix(color:Color):Cubehelix;
  function cubehelix(h:number, s:number, l:number, opacity?:number):Cubehelix;
}