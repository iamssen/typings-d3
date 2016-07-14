const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.arc', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    const a:d3.Arc = d3.arc()
                       .innerRadius((d:d3.ArcData, ...args) => 60)
                       .outerRadius(() => 100)
                       .cornerRadius(14)
                       .startAngle(Math.PI / 2)
                       .endAngle((d:d3.ArcData) => Math.PI)
    
    const d1:string = a();
    const d2:string = d3.arc()({
      innerRadius: 10,
      outerRadius: 20,
      startAngle: 0,
      endAngle: Math.PI / 2
    })
    
    const centroid:[number,number] = d3.arc().centroid({
      innerRadius: 10,
      outerRadius: 20,
      startAngle: 0,
      endAngle: Math.PI / 2
    })
    
    // draw to canvas
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    d3.arc().context(canvas)({
      innerRadius: 10,
      outerRadius: 20,
      startAngle: 0,
      endAngle: Math.PI / 2
    })
               
    // draw to d3.path()
    const path:d3Path.Path = d3Path.path();
    d3.arc().context(path)({
      innerRadius: 10,
      outerRadius: 20,
      startAngle: 0,
      endAngle: Math.PI / 2
    })
    
    const d4:string = path.toString();
  `), 'available syntaxes')
  
  t.end()
})

test('d3.pie', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    
    type Data = {a:string, b:number, c:boolean};
    
    const a:d3.Pie<Data> = d3.pie<Data>()
                             .value(d => d.b)
                             .sort((a, b) => a.b > b.b ? 1 : -1)
                             .startAngle((d:Data) => 0)
                             .endAngle(Math.PI * 2)
                             
    const r:d3.PieResult<Data>[] = a([
      {a: 'a', b: 10, c: true},
      {a: 'b', b: 20, c: false},
      {a: 'c', b: 30, c: true},
      {a: 'd', b: 40, c: false}
    ])
    
    const b:d3.Arc = d3.arc()
                       .innerRadius(100)
                       .outerRadius(150)
    const p:string = b(r[0])
  `), 'available syntaxes')

  t.end()
})

test('d3.line', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    type Data = {a:string, b:number, c:boolean};
    
    const a:d3.Line<Data> = d3.line<Data>()
                              .x(d => d.b)
                              .y(d => d.b)
                              .defined(d => d.a === 'hello')
                              .curve(context => d3.curveBasis(context))
                              
    const r:string = a([
      {a: 'a', b: 10, c: true},
      {a: 'b', b: 20, c: false},
      {a: 'c', b: 30, c: true},
      {a: 'd', b: 40, c: false}
    ])
    
    // draw to canvas
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    d3.line<Data>().x(d => d.b)
                   .y(d => d.b)
                   .context(canvas)
                    ([
                      {a: 'a', b: 10, c: true},
                      {a: 'b', b: 20, c: false},
                      {a: 'c', b: 30, c: true},
                      {a: 'd', b: 40, c: false}
                    ])
               
    // draw to d3.path()
    const path:d3Path.Path = d3Path.path();
    d3.line<Data>().x(d => d.b)
                   .y(d => d.b)
                   .context(path)
                    ([
                      {a: 'a', b: 10, c: true},
                      {a: 'b', b: 20, c: false},
                      {a: 'c', b: 30, c: true},
                      {a: 'd', b: 40, c: false}
                    ])
    
    const d4:string = path.toString();
  `), 'available syntaxes')

  t.end()
})

test('d3.radialLine', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    type Data = {a:string, b:number, c:boolean};
    
    const a:d3.RadialLine<Data> = d3.radialLine<Data>()
                              .angle(d => d.b)
                              .radius(d => d.b)
                              .defined(d => d.a === 'hello')
                              .curve(context => d3.curveBasis(context))
                              
    const r:string = a([
      {a: 'a', b: 10, c: true},
      {a: 'b', b: 20, c: false},
      {a: 'c', b: 30, c: true},
      {a: 'd', b: 40, c: false}
    ])
    
    // draw to canvas
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    d3.radialLine<Data>().angle(d => d.b)
                         .radius(d => d.b)
                         .context(canvas)
                          ([
                            {a: 'a', b: 10, c: true},
                            {a: 'b', b: 20, c: false},
                            {a: 'c', b: 30, c: true},
                            {a: 'd', b: 40, c: false}
                          ])
               
    // draw to d3.path()
    const path:d3Path.Path = d3Path.path();
    d3.radialLine<Data>().angle(d => d.b)
                         .radius(d => d.b)
                         .context(path)
                          ([
                            {a: 'a', b: 10, c: true},
                            {a: 'b', b: 20, c: false},
                            {a: 'c', b: 30, c: true},
                            {a: 'd', b: 40, c: false}
                          ])
    
    const d4:string = path.toString();
  `), 'available syntaxes')

  t.end()
})

test('d3.area', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    type Data = {a:string, b:number, c:boolean};
    
    const a:d3.Area<Data> = d3.area<Data>()
                              .x(10)
                              .x(d => d.b)
                              .x((d:Data) => d.b)
                              .x((d:Data, i:number) => d.b)
                              .x((d:Data, i:number, data:Data[]) => d.b)
                              .x0(10)
                              .x1(d => d.b)
                              .y(50)
                              .y0(d => d.b)
                              .y1((d:Data, i:number) => d.b)
                              .defined(d => d.a === 'hello')
                              .curve((context:d3.Context) => d3.curveBasis(context))
                              
    const r:string = a([
      {a: 'a', b: 10, c: true},
      {a: 'b', b: 20, c: false},
      {a: 'c', b: 30, c: true},
      {a: 'd', b: 40, c: false}
    ])
    
    // draw to canvas
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    d3.area<Data>().x(d => d.b)
                   .y(d => d.b)
                   .context(canvas)
                    ([
                      {a: 'a', b: 10, c: true},
                      {a: 'b', b: 20, c: false},
                      {a: 'c', b: 30, c: true},
                      {a: 'd', b: 40, c: false}
                    ])
               
    // draw to d3.path()
    const path:d3Path.Path = d3Path.path();
    d3.area<Data>().x(d => d.b)
                   .y(d => d.b)
                   .context(path)
                    ([
                      {a: 'a', b: 10, c: true},
                      {a: 'b', b: 20, c: false},
                      {a: 'c', b: 30, c: true},
                      {a: 'd', b: 40, c: false}
                    ])
    
    const d4:string = path.toString();
                               
  `), 'available syntaxes')

  t.end()
})

test('d3.radialArea', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    type Data = {a:string, b:number, c:boolean};
    
    const a:d3.RadialArea<Data> = d3.radialArea<Data>()
                                    .angle(10)
                                    .angle(d => d.b)
                                    .angle((d:Data) => d.b)
                                    .angle((d:Data, i:number) => d.b)
                                    .angle((d:Data, i:number, data:Data[]) => d.b)
                                    .startAngle(10)
                                    .endAngle(d => d.b)
                                    .radius(50)
                                    .innerRadius(d => d.b)
                                    .outerRadius((d:Data, i:number) => d.b)
                                    .defined(d => d.a === 'hello')
                                    .curve((context:d3.Context) => d3.curveBasis(context))
                              
    const r:string = a([
      {a: 'a', b: 10, c: true},
      {a: 'b', b: 20, c: false},
      {a: 'c', b: 30, c: true},
      {a: 'd', b: 40, c: false}
    ])
    
    // draw to canvas
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    d3.radialArea<Data>().angle(d => d.b)
                         .radius(d => d.b)
                         .context(canvas)
                          ([
                            {a: 'a', b: 10, c: true},
                            {a: 'b', b: 20, c: false},
                            {a: 'c', b: 30, c: true},
                            {a: 'd', b: 40, c: false}
                          ])
               
    // draw to d3.path()
    const path:d3Path.Path = d3Path.path();
    d3.radialArea<Data>().angle(d => d.b)
                         .radius(d => d.b)
                         .context(path)
                          ([
                            {a: 'a', b: 10, c: true},
                            {a: 'b', b: 20, c: false},
                            {a: 'c', b: 30, c: true},
                            {a: 'd', b: 40, c: false}
                          ])
    
    const d4:string = path.toString();
                               
  `), 'available syntaxes')
  
  t.end()
})

test('d3.curve', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    const path:d3Path.Path = d3Path.path();
    
    const curves:d3.Curve[] = [
      d3.curveBasis(canvas),
      d3.curveBasisClosed(canvas),
      d3.curveBasisOpen(canvas),
      d3.curveBundle(canvas),
      d3.curveBundle.beta(0.5)(canvas),
      d3.curveCardinal(canvas),
      d3.curveCardinal.tension(0.5)(canvas),
      d3.curveCardinalClosed(canvas),
      d3.curveCardinalOpen(canvas),
      d3.curveCatmullRom(canvas),
      d3.curveCatmullRom.alpha(0.5)(canvas),
      d3.curveCatmullRomClosed(canvas),
      d3.curveCatmullRomOpen(canvas),
      d3.curveCatmullRomOpen.alpha(0.3)(canvas),
      d3.curveLinear(canvas),
      d3.curveLinearClosed(canvas),
      d3.curveMonotoneX(canvas),
      d3.curveMonotoneY(canvas),
      d3.curveNatural(canvas),
      d3.curveStep(canvas),
      d3.curveStepAfter(canvas),
      d3.curveStepBefore(canvas),
      
      d3.curveBasis(path),
      d3.curveBasisClosed(path),
      d3.curveBasisOpen(path),
      d3.curveBundle(path),
      d3.curveBundle.beta(0.5)(path),
      d3.curveCardinal(path),
      d3.curveCardinal.tension(0.5)(path),
      d3.curveCardinalClosed(path),
      d3.curveCardinalOpen(path),
      d3.curveCatmullRom(path),
      d3.curveCatmullRom.alpha(0.5)(path),
      d3.curveCatmullRomClosed(path),
      d3.curveCatmullRomOpen(path),
      d3.curveCatmullRomOpen.alpha(0.3)(path),
      d3.curveLinear(path),
      d3.curveLinearClosed(path),
      d3.curveMonotoneX(path),
      d3.curveMonotoneY(path),
      d3.curveNatural(path),
      d3.curveStep(path),
      d3.curveStepAfter(path),
      d3.curveStepBefore(path)
    ]
  `), 'available syntaxes')

  t.end()
})

test('d3.symbol', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    import * as d3Path from 'd3-path';
    
    type Data = {a:string, b:number, c:boolean};
    
    const a:d3.Symbol<Data> = d3.symbol<Data>()
                                .type(d3.symbolCircle)
                                .type(d => d3.symbolCircle)
                                .type((d:Data) => d3.symbolCircle)
                                .size(64)
                                .size(d => 64)
                                
    const p:string = a({a: 'hello', b: 30, c: true});
    
    // draw to canvas
    const canvasElement:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
    const canvas:CanvasRenderingContext2D = canvasElement.getContext('2d');
    d3.symbol<Data>().type(() => d3.symbolCircle)
                     .size(64)
                     .context(canvas)
                      ({a: 'a', b: 10, c: true})
               
    // draw to d3.path()
    const path:d3Path.Path = d3Path.path();
    d3.symbol<Data>().type(() => d3.symbolCircle)
                     .size(64)
                     .context(path)
                      ({a: 'a', b: 10, c: true})
    
    const d4:string = path.toString();
  `), 'available syntaxes')

  t.end()
})

test('d3.stack', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-shape';
    
    type Data = {month:Date, apples: number, bananas: number, cherries: number, dates: number};
    
    const data:Data[] = [
      {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
      {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
      {month: new Date(2015, 2, 1), apples: 640, bananas: 960, cherries: 640, dates: 400},
      {month: new Date(2015, 3, 1), apples: 320, bananas: 480, cherries: 640, dates: 400}
    ]
    
    const a:d3.Stack<Data> = d3.stack<Data>()
                               .keys(['apples', 'bananas', 'cherries', 'dates'])
                               .keys(d => ['apples', 'bananas', 'cherries', 'dates'])
                               .keys((d:Data[]) => ['apples', 'bananas', 'cherries', 'dates'])
                               .value((d, k) => d[k])
                               .value((d:Data, key:string) => d[key])
                               .value((d:Data, key:string, i:number, data:Data[]) => d[key])
                               .order(stack => [0, 1, 2, 3, 4])
                               .order((stack:d3.StackSeries<Data>[]) => [0, 1, 2, 3, 4])
                               .offset((stack, order) => d3.stackOffsetNone(stack, order))
                               .offset((stack:d3.StackSeries<Data>[], order:number[]) => d3.stackOffsetNone(stack, order))
                               
    
    const stacks:d3.StackSeries<Data>[] = a(data);
    
    stacks.forEach((stack:d3.StackSeries<Data>) => {
      const index:number = stack.index;
      const key:string = stack.key;
      stack.forEach((series:d3.Series<Data>) => {
        const data:Data = series.data;
        const x:number = series[0];
        const y:number = series[1];
      })
    })
  `), 'available syntaxes')

  t.end()
})
