const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.polygon', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-polygon';
    const p:[number,number][] = [[0, 0], [100, 0], [100, 100], [0, 100]];
    const a:number = d3.polygonArea(p);
    const b:[number,number] = d3.polygonCentroid(p);
    const c:[number,number][] = d3.polygonHull(p);
    const d:boolean = d3.polygonContains(p, [50,50]);
    const e:number = d3.polygonLength(p);
  `), 'available syntaxes')

  t.end()
})