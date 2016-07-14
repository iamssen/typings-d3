const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.axisBottom', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import {scaleLinear, Linear} from 'd3-scale';
    import {select, Selection} from 'd3-selection';
    import {axisBottom, Axis} from 'd3-axis';
    
    const scale:Linear<number> = scaleLinear<number>()
                                    .domain([0, 100]) // data
                                    .range([0, 300]) // pixel
                                                      
    const selection:Selection = select('svg')
                                    .append('g')
                                    .attr('class', 'axis')
                                    .attr('transform', 'translate(10, 100)')
                                    
    const format = (n:number) => '-' + n + '-'

    const axis:Axis = axisBottom(scale)
                          .scale(scale)
                          .ticks(6)
                          .tickFormat(format)
                          .tickSize(0)
                          .tickSizeInner(10)
                          .tickSizeOuter(0)
                          .tickPadding(10)
                          
    const a:any[] = axis.tickArguments()
    const b:any[] = axis.tickValues()
    const c:(v:number) => string = axis.tickFormat()
    const d:number = axis.tickSize()
    const e:number = axis.tickSizeInner()
    const f:number = axis.tickSizeOuter()
    const g:number = axis.tickPadding()
    
    selection.call(axis)
  `), 'available syntaxes')

  t.end()
})