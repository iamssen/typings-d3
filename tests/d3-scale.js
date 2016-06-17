const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('continuous scales', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Linear<string> = d3.scaleLinear<string>()
                                  .domain([0, 20, 100])
                                  .range(['a', 'b', 'c'])
                                  .clamp(true)
                                  .nice();
    const a:string = x(0);
    const b:number = x.invert('b');
    const c:number[] = x.domain();
    const d:string[] = x.range();
    const e:number[] = x.ticks(5);
    const f:(n:number) => string = x.tickFormat(3);
    const g:d3.Linear<string> = x.copy();
  `), 'available syntaxes');
  
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    import {interpolateNumber} from '../d3-interpolate';
    const x:d3.Linear<number> = d3.scaleLinear<number>()
                                  .rangeRound([0.245, 20.679, 43.9987])
                                  .interpolate(interpolateNumber(1, 100))
  `), 'rangeRound, interpolate');

  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const a:d3.Pow<number> = d3.scalePow<number>().exponent(0.5);
    const b:d3.Log<number> = d3.scaleLog<number>().base(0.5);
    const c:d3.Identity = d3.scaleIdentity();
    const d:d3.Time = d3.scaleTime().nice(1000);
  `), 'pow, log, identity, time');

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Linear<string> = d3.scaleLinear<string>()
    const a:number = x(0);
  `), 'miss match generic type')

  t.end()
})

test('sequential scales', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Sequential = d3.scaleSequential(d3.interpolateInferno)
                              .domain([0, 100, 1000])
                              .clamp(true)
    
    const a:number = x(10);
    const b:number[] = x.domain();
    const c:boolean = x.clamp();
    const d:d3.Sequential = x.copy();
    
    d3.scaleSequential(d3.interpolateCool);
    d3.scaleSequential(d3.interpolateCubehelixDefault);
    d3.scaleSequential(d3.interpolateInferno);
    d3.scaleSequential(d3.interpolateMagma);
    d3.scaleSequential(d3.interpolatePlasma);
    d3.scaleSequential(d3.interpolateRainbow);
    d3.scaleSequential(d3.interpolateViridis);
    d3.scaleSequential(d3.interpolateWarm);
  `), 'available syntaxes')

  t.end()
})

test('quantize scales', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Quantize<string> = d3.scaleQuantize<string>()
                                    .domain([0, 20])
                                    .range(['a', 'b', 'c'])
                                    .nice();
    const a:string = x(0);
    const b:[number,number] = x.invertExtent('b');
    const c:number[] = x.domain();
    const d:string[] = x.range();
    const e:number[] = x.ticks(5);
    const f:(n:number) => string = x.tickFormat(3);
    const g:d3.Quantize<string> = x.copy();
  `), 'available syntaxes');

  // TODO Typescript did not catch specific array lenth type
  // t.error(reject(/* language=TypeScript */ `
  //   import * as d3 from '../d3-scale';
  //   import {interpolateNumber} from '../d3-interpolate';
  //   const x:d3.Quantize<number> = d3.scaleQuantize<number>()
  //   x.domain([1, 2, 3])
  // `), 'domain can receive only two element array');

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Quantize<string> = d3.scaleQuantize<string>()
    const a:number = x(0);
  `), 'miss match generic type')

  t.end()
})

test('quantile scales', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Quantile<string> = d3.scaleQuantile<string>()
                                    .domain([0, 20])
                                    .range(['a', 'b', 'c']);
    const a:string = x(0);
    const b:[number,number] = x.invertExtent('b');
    const c:number[] = x.domain();
    const d:number[] = x.quantiles();
    const g:d3.Quantile<string> = x.copy();
  `), 'available syntaxes');


  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Quantile<string> = d3.scaleQuantile<string>()
    const a:number = x(0);
  `), 'miss match generic type')

  t.end()
})

test('threshold scales', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Threshold<Date, string> = d3.scaleThreshold<Date, string>()
                                           .domain([new Date, new Date])
                                           .range(['a', 'b', 'c']);
    const a:string = x(new Date);
    const b:[Date,Date] = x.invertExtent('b');
    const c:Date[] = x.domain();
    const d:string[] = x.range();
    const g:d3.Threshold<Date, string> = x.copy();
  `), 'available syntaxes');

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Threshold<number, string> = d3.scaleThreshold<Date, string>()
  `), 'miss match generic type')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Threshold<Date, string> = d3.scaleThreshold<Date, string>()
    const a:number = x(new Date);
  `), 'miss match generic type')

  t.end()
})

test('ordinal scales', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Ordinal<Date, string> = d3.scaleOrdinal<Date, string>(['a', 'b', 'c'])
                                         .domain([new Date, new Date])
                                         .range(['a', 'b', 'c'])
                                         .unknown(d3.scaleImplicit);
    const a:string = x(new Date);
    const c:Date[] = x.domain();
    const d:string[] = x.range();
    const g:d3.Ordinal<Date, string> = x.copy();
  `), 'available syntaxes');

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Ordinal<number, string> = d3.scaleOrdinal<Date, string>(['a', 'b', 'c'])
  `), 'miss match generic type')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const x:d3.Ordinal<Date, string> = d3.scaleOrdinal<Date, string>(['a', 'b', 'c'])
    const a:number = x(new Date);
  `), 'miss match generic type')

  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-scale';
    const a:d3.Ordinal<string, number> = d3.scaleOrdinal<string, number>(d3.schemeCategory10);
    const b:d3.Ordinal<string, number> = d3.scaleOrdinal<string, number>(d3.schemeCategory20);
    const c:d3.Ordinal<string, number> = d3.scaleOrdinal<string, number>(d3.schemeCategory20b);
    const d:d3.Ordinal<string, number> = d3.scaleOrdinal<string, number>(d3.schemeCategory20c);
  `), 'with schemeCategory');

  t.end()
})