const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.min, d3.max', t => {
  ['min', 'max'].forEach(name => {
    t.error(accept(`
      import * as d3 from "../d3-array";
      
      type Data = { x:number, y:string, z:Date, a:Node };
      const data:Data[] = [];
      
      const a:number = d3.${name}([1, 2, 3]);
      const b:string = d3.${name}(['a', 'b', 'c']);
      const c:Date = d3.${name}([new Date, new Date, new Date]);
      const d:number = d3.${name}(data, (item:Data) => item.x);
      const e:string = d3.${name}(data, (item:Data) => item.x);
      const f:Date = d3.${name}(data, (item:Data) => item.x);
      const g:Date = d3.${name}(data, (item:Data, i:number) => item.x);
      const h:Date = d3.${name}(data, (item:Data, i:number, arr:Data[]) => item.x);
      const i:Date = d3.${name}(data, (item:Data) => item.y);
      const j:Date = d3.${name}(data, (item:Data) => item.z);
    `), 'available syntaxes')

    t.error(reject(`
      import * as d3 from '../d3-array';
      const a:number = d3.${name}(1);
    `), 'args[0] can not receive 1')

    t.error(reject(`
      import * as d3 from '../d3-array';
      const a:number = d3.${name}([true]);
    `), 'args[0] can not receive [true]')

    t.error(reject(`
      import * as d3 from '../d3-array';
      
      type Data = { x:number, y:string, z:Date, a:Node };
      const data:Data[] = [];
      
      const a:number = d3.${name}([1, 2, 3], (item:Data) => item.a);
    `), 'accessor can not return no orderable type')
  })

  t.end()
})

test('d3.extent', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
      
    type Data = { x:number, y:string, z:Date, a:Node };
    const data:Data[] = [];
  
    const a:[number, number] = d3.extent([1, 2, 3]);
    const b:[string, string] = d3.extent(['a', 'b', 'c']);
    const c:[Date, Date] = d3.extent([new Date, new Date, new Date]);
    const d:[number, number] = d3.extent(data, (item:Data) => item.x);
    const e:[string, string] = d3.extent(data, (item:Data) => item.x);
    const f:[Date, Date] = d3.extent(data, (item:Data) => item.x);
    const g:[Date, Date] = d3.extent(data, (item:Data, i:number) => item.x);
    const h:[Date, Date] = d3.extent(data, (item:Data, i:number, arr:Data[]) => item.x);
    const i:[string, string] = d3.extent(data, (item:Data) => item.y);
    const j:[Date, Date] = d3.extent(data, (item:Data) => item.z);
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:[number, number] = d3.extent(1);
  `), 'args[0] can not receive 1')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:[number, number] = d3.extent([true]);
  `), 'args[0] can not receive [true]')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:number = d3.extent([1, 2, 3]);
  `), 'return value can not assign to number')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:[number, number, number] = d3.extent([1, 2, 3]);
  `), 'return value can not assign to [number, number, number]')

  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:number[] = d3.extent([1, 2, 3]);
  `), 'return value can assign to number[]')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    
    type Data = { x:number, y:string, z:Date, a:Node };
    const data:Data[] = [];
    
    const a:[number, number] = d3.extent([1, 2, 3], (item:Data) => item.a);
  `), 'accessor can not return no orderable type')

  t.end()
})

test('d3.sum, d3.mean, d3.median, d3.variance, d3.deviation', t => {
  ['sum', 'mean', 'median', 'variance', 'deviation'].forEach(name => {
    t.error(accept(`
      import * as d3 from "../d3-array";
      
      type Data = { x:number, y:string, z:Date, a:Node };
      const data:Data[] = [];
      
      const a:number = d3.${name}([1, 2, 3]);
      const b:number = d3.${name}(data, (item:Data) => item.x);
      const c:number = d3.${name}(data, (item:Data, i:number) => item.x);
      const d:number = d3.${name}(data, (item:Data, i:number, arr:Data[]) => item.x);
    `), 'available syntaxes')

    t.error(reject(`
      import * as d3 from '../d3-array';
      const a:number = d3.${name}(1);
    `), 'args[0] can not receive 1')

    t.error(reject(`
      import * as d3 from '../d3-array';
      const a:number = d3.${name}(['a']);
    `), 'args[0] can not receive ["a"]')

    t.error(reject(`
      import * as d3 from '../d3-array';
      const a:string = d3.${name}([1, 2, 3]);
    `), 'return value can not assign to string')

    t.error(reject(`
      import * as d3 from '../d3-array';
      const a:number = d3.${name}(data, (item:Data) => item.y);
    `), 'accessor can not return string')
  })

  t.end()
})

test('d3.quantile', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    
    type Data = { x:number, y:string, z:Date, a:Node };
    const data:Data[] = [];
    
    const a:number = d3.quantile([1, 2, 3], 0.5);
    const b:number = d3.quantile(data, 0.5, (item:Data) => item.x);
    const c:number = d3.quantile(data, 0.5, (item:Data, i:number) => item.x);
    const d:number = d3.quantile(data, 0.5, (item:Data, i:number, arr:Data[]) => item.x);
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:number = d3.quantile([1, 2, 3]);
  `), 'args[1] is required')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:number = d3.quantile(1, 0.5);
  `), 'args[0] can not receive 1')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:number = d3.quantile(['a'], 0.5);
  `), 'args[0] can not receive ["a"]')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:string = d3.quantile([1, 2, 3], 0.5);
  `), 'return value can not assign to string')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from '../d3-array';
    const a:number = d3.quantile(data, 0.5, (item:Data) => item.y);
  `), 'accessor can not return string')

  t.end()
})

test('d3.histogram', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    
    type Data = { x:number, y:string, z:Date, a:Node };
    const data:Data[] = [];

    const histogram:d3.Histogram<string> = d3.histogram<string>();
    histogram
      .value((d:Data) => d.x)
      .domain([1, 2])
      .domain(['a', 'b'])
      .domain([new Date, new Date])
      .domain((values:number[]) => [1, 2])
      .domain((values:string[]) => ['a', 'b'])
      .domain((values:Date[]) => [new Date, new Date])
      .thresholds([1, 2, 3])
      .thresholds(['a', 'b', 'c'])
      .thresholds([new Date, new Date, new Date])
      .thresholds((values:number[], min:number, max:number) => [1, 2, 3, 4])
      .thresholds((values:string[], min:string, max:string) => ['a', 'b', 'c', 'd'])
      .thresholds((values:Date[], min:Date, max:Date) => [new Date, new Date, new Date]);
  
    const histogramValue1:() => number = histogram.value();
    const histogramValue2:() => string = histogram.value();
    const histogramValue3:() => Date = histogram.value();
  
    const histogramDomain1:(values:number[]) => number = histogram.domain();
    const histogramDomain2:(values:string[]) => string = histogram.domain();
    const histogramDomain3:(values:Date[]) => Date = histogram.domain();
  
    const histogramThresholds1:(values:number[], min:number, max:number) => number[] = histogram.thresholds();
    const histogramThresholds2:(values:string[], min:string, max:string) => string[] = histogram.thresholds();
    const histogramThresholds3:(values:Date[], min:Date, max:Date) => Date[] = histogram.thresholds();
  
    const histogramBins:d3.HistogramBin<string>[] = histogram(data);
  
    histogram.thresholds(d3.thresholdFreedmanDiaconis);
    histogram.thresholds(d3.thresholdScott);
    histogram.thresholds(d3.thresholdSturges);
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    const histogram:d3.Histogram<number> = d3.histogram<string>();
  `), 'can not assign different generic types')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    const histogram:d3.Histogram<string> = d3.histogram<string>();
    const bins:d3.HistogramBin<number> = histogram([]);
  `), 'can not assign different generic types')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    const histogram:d3.Histogram<string> = d3.histogram<string>();
    histogram.thresholds((values:Node[], min:number, max:number) => 1);
  `), 'accessor args[0] can not assign to Node[]')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    const histogram:d3.Histogram<string> = d3.histogram<string>();
    histogram.thresholds((values:number[], min:Node, max:number) => 1);
  `), 'accessor args[1] can not assign to Node')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-array";
    const histogram:d3.Histogram<string> = d3.histogram<string>();
    histogram.thresholds((values:number[], min:number, max:Node) => 1);
  `), 'accessor args[2] can not assign to Node')

  // TODO Typescript can not catch error insert [1, 2, 3] to [orderable, orderable]
  // t.error(reject(/* language=TypeScript */ `
  //   import * as d3 from "../d3-array";
  //   const histogram:d3.Histogram<string> = d3.histogram<string>();
  //   histogram.domain([1, 2, 3]);
  // `), 'can not insert [1, 2, 3]')

  t.end()
})