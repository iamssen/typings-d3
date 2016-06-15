declare namespace d3 {
  export function interpolate(a:any, b:any):(t:number) => any;

  // interpolateArra()
  export function interpolateNumber(a:number, b:number):(t:number) => number;

  export function interpolateObject(a:any, b:any):(t:number) => any;

  export function interpolateRound(a:number, b:number):(t:number) => number;

  export function interpolateString(a:string, b:string):(t:number) => string;

  export function interpolateTransformCss(a:any, b:any):(t:number) => any;
  
  // interpolateTransformSvg()
  // interpolateZoom()
  // interpolateRgb()
  // interpolateRgbBasis()
  // interpolateRgbBasisClosed()
  // interpolateHsl()
  // interpolateHslLong()
  // interpolateLab()
  // interpolateHcl()
  // interpolateHclLong()
  // interpolateCubehelix()
  // interpolateCubehelixLong()
  // interpolateBasis()
  // interpolateBasisClosed()
  //
  // quantize()
}

export = d3;