declare module 'd3-path' {
  interface Path {
    moveTo(x:number, y:number);
    closePath();
    lineTo(x:number, y:number);
    quadraticCurveTo(cpx:number, cpy:number, x:number, y:number);
    bezierCurveTo(cpx1:number, cpy1:number, cpx2:number, cpy2:number, x:number, y:number);
    arcTo(x1:number, y1:number, x2:number, y2:number, radius:number);
    arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, antiClockWise?:boolean);
    rect(x:number, y:number, w:number, h:number);
    toString():string;
  }
  
  /** @link https://github.com/d3/d3-path */
  function path():Path;
}
