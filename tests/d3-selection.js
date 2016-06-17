const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.local', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";

    const node:Node = document.querySelector('.a');
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    
    const local1:d3.Local = d3.local();
    local1.set(node, 12);
    const localValue:number = local1.get(node);
    local1.remove(node);
    const localString:string = local1.toString();
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const local1:d3.Local = d3.local();
    local1.set('a', 123);
  `), 'can not insert "a" to args[0]')
  
  t.end()
})

test('d3.selection, d3.select, d3.selectAll', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";

    const node:Node = document.querySelector('.a');
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    
    const selections:d3.Selection[] = [
      d3.selection(),
      d3.select('a'),
      d3.select(node),
      d3.selectAll('a'),
      d3.selectAll(nodes)
    ]
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    
    d3.select(nodes);
  `), 'can not insert NodeListOf<Node>')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const node:Node = document.querySelector('.a');
    
    d3.selectAll(node);
  `), 'can not insert NodeListOf<Node>')

  t.end()
})

test('d3.Selection', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    type Custom = {a:number, b:number};

    const node:Node = document.querySelector('.a');
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    
    d3.select('a')
      .select('a')
      .select(node)
      .select(() => node)
      .select((d:any) => node)
      .select((d:any, i:number) => node)
      .select((d:any, i:number, nodes:Node[]) => node)
      .select((d:Custom, i:number, nodes:Node[]) => node)
      .selectAll('a')
      .selectAll(nodes)
      .selectAll(() => nodes)
      .selectAll((d:any) => nodes)
      .selectAll((d:any, i:number) => nodes)
      .selectAll((d:any, i:number, nodes:Node[]) => nodes)
      .selectAll((d:Custom, i:number, nodes:Node[]) => nodes)
      .filter(() => true)
      .filter((d:any) => true)
      .filter((d:any, i:number) => true)
      .filter((d:any, i:number, nodes:Node[]) => true)
      .filter((d:Custom, i:number, nodes:Node[]) => true)
      .data([1, 2, 3])
      .data(() => [1, 2, 3])
      .data((d:any) => [1, 2, 3])
      .data((d:any, i:number) => [1, 2, 3])
      .data((d:any, i:number, nodes:Node[]) => [1, 2, 3])
      .data((d:Custom, i:number, nodes:Node[]) => [1, 2, 3])
      .call((selection:d3.Selection) => { /* todo */ })
      .call((selection:d3.Selection) => { /* todo */ }, 1, 2, 3)
      .call((selection:d3.Selection, ...arg) => { /* todo */ })
      .call((selection:d3.Selection, ...arg) => { /* todo */ }, 1, 2, 3)
      .each(() => { /* todo */ })
      .each((d:any) => { /* todo */ })
      .each((d:any, i:number) => { /* todo */ })
      .each((d:any, i:number, nodes:Node[]) => { /* todo */ })
      .each((d:Custom, i:number, nodes:Node[]) => { /* todo */ })
      .attr('font-size', '10')
      .attr('font-size', 10)
      .attr('font-size', true)
      .attr('font-size', () => 10)
      .attr('font-size', (d:any) => 10)
      .attr('font-size', (d:any, i:number) => 10)
      .attr('font-size', (d:any, i:number, nodes:Node[]) => 10)
      .attr('font-size', (d:Custom, i:number, nodes:Node[]) => 10)
      .style('fontSize', '10px')
      .style('fontSize', 10)
      .style('fontSize', true)
      .style('fontSize', 10, true)
      .style('fontSize', () => 10)
      .style('fontSize', (d:any) => 10)
      .style('fontSize', (d:any, i:number) => 10)
      .style('fontSize', (d:any, i:number, nodes:Node[]) => 10)
      .style('fontSize', (d:any) => 10, true)
      .style('fontSize', (d:Custom) => 10, true)
      .text('hello world')
      .text(() => 'hello world')
      .text((d:any) => 'hello world')
      .text((d:any, i:number) => 'hello world')
      .text((d:any, i:number, nodes:Node[]) => 'hello world')
      .text((d:Custom, i:number, nodes:Node[]) => 'hello world')
      .html('hello world')
      .html(() => 'hello world')
      .html((d:any) => 'hello world')
      .html((d:any, i:number) => 'hello world')
      .html((d:any, i:number, nodes:Node[]) => 'hello world')
      .html((d:Custom, i:number, nodes:Node[]) => 'hello world')
      .append('a')
      .append(() => node)
      .append((d:any) => node)
      .append((d:any, i:number) => node)
      .append((d:any, i:number, nodes:Node[]) => node)
      .append((d:Custom, i:number, nodes:Node[]) => node)
      .insert('a', node)
      .insert(() => node, node)
      .insert((d:any) => node, node)
      .insert((d:any, i:number) => node, node)
      .insert((d:any, i:number, nodes:Node[]) => node, node)
      .insert((d:Custom, i:number, nodes:Node[]) => node, node)
      .datum([1, 2, 3])
      .on('click', () => { /* todo */ }, true)
      .on('click', (d:any) => { /* todo */ })
      .on('click', (d:any, i:number) => { /* todo */ })
      .on('click', (d:any, i:number, nodes:Node[]) => { /* todo */ })
      .on('click', (d:Custom, i:number, nodes:Node[]) => { /* todo */ })
      
    const x:d3.Selection = d3.selection()
    
    const a:number[] = x.data()
    const b:number = x.attr('font-size')
    const c:string = x.attr('font-size')
    const d:boolean = x.attr('font-size')
    const e:number = x.style('fontSize')
    const f:string = x.style('fontSize')
    const g:boolean = x.style('fontSize')
    const h:string = x.text()
    const i:string = x.html()
      
  `), 'available syntaxes')

  t.end()
})


test('d3.matcher, d3.selector, d3.selectorAll, d3.window, d3.creator', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const node:Node = document.querySelector('.a');
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    
    const matcher1:(item:any) => boolean = d3.matcher('a');
    const matcher2:(item:any, i:number) => boolean = d3.matcher('a');
    const matcher3:(item:any, i:number, nodes:Node[]) => boolean = d3.matcher('a');
    const matcher4:() => boolean = d3.matcher('a');
    const matcher5:Function = d3.matcher('a');
    const selector1:(item:any) => Node = d3.selector('a');
    const selector2:(item:any, i:number) => Node = d3.selector('a');
    const selector3:(item:any, i:number, nodes:Node[]) => Node = d3.selector('a');
    const selector4:() => Node = d3.selector('a');
    const selector5:Function = d3.selector('a');
    const selectorAll1:(item:any) => NodeListOf<Node> = d3.selectorAll('a');
    const selectorAll2:(item:any, i:number) => NodeListOf<Node> = d3.selectorAll('a');
    const selectorAll3:(item:any, i:number, nodes:Node[]) => NodeListOf<Node> = d3.selectorAll('a');
    const selectorAll4:() => NodeListOf<Node> = d3.selectorAll('a');
    const selectorAll5:Function = d3.selectorAll('a');
    
    const window:Node = d3.window(node);
    
    const creator1:(item:any) => Node = d3.creator('a');
    const creator2:(item:any, i:number) => Node = d3.creator('a');
    const creator3:(item:any, i:number, nodes:Node[]) => Node = d3.creator('a');
    const creator4:() => Node = d3.creator('a');
    const creator5:Function = d3.creator('a');
  `), 'available syntaxes')

  t.end()
})

test('d3.event, d3.customEvent, d3.mouse, d3.touch, d3.touches', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const node:Node = document.querySelector('.a');
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    const touches:Touch[] = null;
    
    const event1:Event = d3.event;
    const event2:{type:string, sourceEvent:Event} = d3.event;
    
    const a:[number, number] = d3.mouse(node);
    const b:[number, number] = d3.touch(node);
    const c:[number, number] = d3.touch(node, 1);
    const d:[number, number] = d3.touch(node, touches);
    const e:[number, number] = d3.touch(node, touches, 1);
    const f:[number, number][] = d3.touches(node);
    const g:[number, number][] = d3.touches(node, touches);
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const node:Node = document.querySelector('.a');
    
    const a:[string, string] = d3.mouse(node);
  `), 'can not assign to [string, string]')

  t.error(reject(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    const node:Node = document.querySelector('.a');
    
    const a:[number, number, number] = d3.touch(node);
  `), 'can not assign to [number, number, number]')

  t.end()
})

test('d3.Transition', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-selection";
    
    type Custom = {a:number, b:number};

    const node:Node = document.querySelector('.a');
    const nodes:NodeListOf<Node> = document.querySelectorAll('.a');
    
    d3.select('a').transition()
      .select('a')
      .select(node)
      .select(() => node)
      .select((d:any) => node)
      .select((d:any, i:number) => node)
      .select((d:any, i:number, nodes:Node[]) => node)
      .select((d:Custom, i:number, nodes:Node[]) => node)
      .selectAll('a')
      .selectAll(nodes)
      .selectAll(() => nodes)
      .selectAll((d:any) => nodes)
      .selectAll((d:any, i:number) => nodes)
      .selectAll((d:any, i:number, nodes:Node[]) => nodes)
      .selectAll((d:Custom, i:number, nodes:Node[]) => nodes)
      .filter(() => true)
      .filter((d:any) => true)
      .filter((d:any, i:number) => true)
      .filter((d:any, i:number, nodes:Node[]) => true)
      .filter((d:Custom, i:number, nodes:Node[]) => true)
      .call((selection:d3.Selection) => { /* todo */ })
      .call((selection:d3.Selection) => { /* todo */ }, 1, 2, 3)
      .call((selection:d3.Selection, ...arg) => { /* todo */ })
      .call((selection:d3.Selection, ...arg) => { /* todo */ }, 1, 2, 3)
      .each(() => { /* todo */ })
      .each((d:any) => { /* todo */ })
      .each((d:any, i:number) => { /* todo */ })
      .each((d:any, i:number, nodes:Node[]) => { /* todo */ })
      .each((d:Custom, i:number, nodes:Node[]) => { /* todo */ })
      .attr('font-size', '10')
      .attr('font-size', 10)
      .attr('font-size', true)
      .attr('font-size', () => 10)
      .attr('font-size', (d:any) => 10)
      .attr('font-size', (d:any, i:number) => 10)
      .attr('font-size', (d:any, i:number, nodes:Node[]) => 10)
      .attr('font-size', (d:Custom, i:number, nodes:Node[]) => 10)
      .style('fontSize', '10px')
      .style('fontSize', 10)
      .style('fontSize', true)
      .style('fontSize', 10, true)
      .style('fontSize', () => 10)
      .style('fontSize', (d:any) => 10)
      .style('fontSize', (d:any, i:number) => 10)
      .style('fontSize', (d:any, i:number, nodes:Node[]) => 10)
      .style('fontSize', (d:any) => 10, true)
      .style('fontSize', (d:Custom) => 10, true)
      .text('hello world')
      .text(() => 'hello world')
      .text((d:any) => 'hello world')
      .text((d:any, i:number) => 'hello world')
      .text((d:any, i:number, nodes:Node[]) => 'hello world')
      .text((d:Custom, i:number, nodes:Node[]) => 'hello world')
      .on('start', () => { /* todo */ })
      .on('start', (d:any) => { /* todo */ })
      .on('start', (d:any, i:number) => { /* todo */ })
      .on('start', (d:any, i:number, nodes:Node[]) => { /* todo */ })
      .on('start', (d:Custom, i:number, nodes:Node[]) => { /* todo */ })
      .attrTween('font-size', (t:number) => 10 * t)
      .attrTween('font-size', () => (t:number) => 10 * t)
      .attrTween('font-size', (d:any) => (t:number) => 10 * t)
      .attrTween('font-size', (d:any, i:number) => (t:number) => 10 * t)
      .attrTween('font-size', (d:any, i:number, nodes:Node[]) => (t:number) => 10 * t)
      .attrTween('font-size', (d:Custom, i:number, nodes:Node[]) => (t:number) => 10 * t)
      .styleTween('fontSize', (t:number) => 10 * t)
      .styleTween('fontSize', () => (t:number) => 10 * t)
      .styleTween('fontSize', (d:any) => (t:number) => 10 * t)
      .styleTween('fontSize', (d:any, i:number) => (t:number) => 10 * t)
      .styleTween('fontSize', (d:any, i:number, nodes:Node[]) => (t:number) => 10 * t)
      .styleTween('fontSize', (d:Custom, i:number, nodes:Node[]) => (t:number) => 10 * t)
      .tween('?', () => (t:number) => { /* todo */ })
      .tween('?', (d:any) => (t:number) => { /* todo */ })
      .tween('?', (d:any, i:number) => (t:number) => { /* todo */ })
      .tween('?', (d:any, i:number, nodes:Node[]) => (t:number) => { /* todo */ })
      .tween('?', (d:Custom, i:number, nodes:Node[]) => (t:number) => { /* todo */ })
      .delay(3)
      .delay(() => 4)
      .duration(3)
      .duration(() => 4)
      .ease((t:number) => 1)
      
    const x:d3.Transition = d3.selection().transition()
    
    const b:number = x.attr('font-size')
    const c:string = x.attr('font-size')
    const d:boolean = x.attr('font-size')
    const e:number = x.style('fontSize')
    const f:string = x.style('fontSize')
    const g:boolean = x.style('fontSize')
    const h:string = x.text()
  `), 'available syntaxes')

  t.end()
})
