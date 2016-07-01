const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.hierarchy', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    interface Data {
      name:string;
      children?:Data[];
    }
  
    const data:Data = {
    name: 'Root', children: [
      {name: 'A'},
      {name: 'B', children: [
        {name: 'B1'},
        {name: 'B2'},
        {name: 'B3'}
      ]},
      {name: 'C', children: [
        {name: 'C1'},
        {name: 'C2', children: [
          {name: 'C21'},
          {name: 'C22'},
          {name: 'C23'}
        ]}
      ]},
      {name: 'D'}
    ]}
  
    const a:d3.Node<Data> = d3.hierarchy<Data>(data)
                              .sum((d:Data) => 0)
                              .sort((a:Data, b:Data) => 1)
                              .each((d:d3.Node<Data>) => console.log(d))
                              .eachAfter((d:d3.Node<Data>) => console.log(d))
                              .eachBefore((d:d3.Node<Data>) => console.log(d))
    const b:d3.Node<Data>[] = a.ancestors()
    const c:d3.Node<Data>[] = a.descendants()
    const d:d3.Node<Data>[] = a.leaves()
    const e:d3.Node<Data>[] = a.children[2].children[1].path(a)
    const f:d3.Node<Data> = a.copy()
    
    const g:Data = f.data
    const h:number = f.depth
    const i:number = f.depth
    const j:number = f.height
    const k:d3.Node<Data> = f.parent
    const l:d3.Node<Data>[] = f.children
    const value:number = f.value
    
    const z:d3.Link<Data>[] = a.links()
  `), 'available syntaxes')
  
  t.end()
})

test('d3.stratify', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    interface Data {
      name:string;
    }
    
    const table:Data[] = [
      {name: 'Root'},
      {name: 'A'},
      {name: 'A1'},
      {name: 'B'},
      {name: 'B1'},
      {name: 'B11'},
      {name: 'B12'},
      {name: 'B2'},
      {name: 'C'},
      {name: 'C1'},
      {name: 'C2'},
      {name: 'C21'},
      {name: 'C22'},
      {name: 'D'}
    ]
    
    const s:d3.Stratify<Data> = d3.stratify<Data>()
                                  .id(d => d.name)
                                  .id((d:Data) => d.name)
                                  .parentId(d => {
                                    if (d.name === 'Root') return null;
                                    return (d.name.length > 1) ? d.name.substr(0, d.name.length -1) : 'Root'
                                  })
    
    const a:d3.Node<Data> = s(table)
    const b:(d:Data) => string = s.id()
    const c:(d:Data) => string = s.parentId()
  `), 'available syntaxes')
  
  t.end()
})

test('d3.cluster', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    type Data = {name:string}
    
    let h:d3.Node<Data>;
    
    const a:d3.Cluster<Data> = d3.cluster<Data>()
                                 .size([100, 100])
                                 .nodeSize([100, 100])
                                 .separation((a, b) => 1)
                                 .separation((a:d3.Node<Data>, b:d3.Node<Data>) => 1)
                              
    const b:[number,number] = a.size()
    const c:[number,number] = a.nodeSize()
    const d:(a:d3.Node<Data>, b:d3.Node<Data>) => number = a.separation()
    
    const e:d3.PointNode<Data> = a(h)
    
    const x:number = e.x
    const y:number = e.y
  `), 'available syntaxes')
  
  t.end()
})

test('d3.tree', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    type Data = {name:string}
    
    let h:d3.Node<Data>;
    
    const a:d3.Tree<Data> = d3.tree<Data>()
                              .size([100, 100])
                              .nodeSize([100, 100])
                              .separation((a, b) => 1)
                              .separation((a:d3.Node<Data>, b:d3.Node<Data>) => 1)
                              
    const b:[number,number] = a.size()
    const c:[number,number] = a.nodeSize()
    const d:(a:d3.Node<Data>, b:d3.Node<Data>) => number = a.separation()
    
    const e:d3.PointNode<Data> = a(h)
    
    const x:number = e.x
    const y:number = e.y
  `), 'available syntaxes')
  
  t.end()
})

test('d3.treemap', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    type Data = {name:string}
    
    let h:d3.Node<Data>;
    
    const a:d3.Treemap<Data> = d3.treemap<Data>()
                                 .tile(d3.treemapBinary)
                                 .tile(d3.treemapDice)
                                 .tile(d3.treemapSlice)
                                 .tile(d3.treemapSliceDice)
                                 .tile(d3.treemapSquarify.ratio(0.5))
                                 .tile(d3.treemapResquarify.ratio(0.5))
                                 .size([100, 100])
                                 .round(true)
                                 .padding(1)
                                 .padding(d => 1)
                                 .padding((d:d3.Node<Data>) => 1)
                                 .paddingInner(1)
                                 .paddingInner(d => 1)
                                 .paddingInner((d:d3.Node<Data>) => 1)
                                 .paddingOuter(1)
                                 .paddingOuter(d => 1)
                                 .paddingOuter((d:d3.Node<Data>) => 1)
                                 .paddingTop(1)
                                 .paddingTop(d => 1)
                                 .paddingTop((d:d3.Node<Data>) => 1)
                                 .paddingRight(1)
                                 .paddingRight(d => 1)
                                 .paddingRight((d:d3.Node<Data>) => 1)
                                 .paddingBottom(1)
                                 .paddingBottom(d => 1)
                                 .paddingBottom((d:d3.Node<Data>) => 1)
                                 .paddingLeft(1)
                                 .paddingLeft(d => 1)
                                 .paddingLeft((d:d3.Node<Data>) => 1)
                              
    const b:(node:d3.Node<Data>, x0:number, y0:number, x1:number, y1:number) => void = a.tile()
    const c:[number,number] = a.size()
    const d:boolean = a.round()
    const e:(d:d3.Node<Data>) => number = a.padding()
    const f:(d:d3.Node<Data>) => number = a.paddingInner()
    const g:(d:d3.Node<Data>) => number = a.paddingOuter()
    const m:(d:d3.Node<Data>) => number = a.paddingTop()
    const i:(d:d3.Node<Data>) => number = a.paddingRight()
    const j:(d:d3.Node<Data>) => number = a.paddingBottom()
    const k:(d:d3.Node<Data>) => number = a.paddingLeft()
    
    const l:d3.RectangleNode<Data> = a(h)
    
    const x0:number = l.x0
    const y0:number = l.y0
    const x1:number = l.x1
    const y1:number = l.y1
  `), 'available syntaxes')
  
  t.end()
})

test('d3.partition', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    type Data = {name:string}
    
    let h:d3.Node<Data>;
    
    const a:d3.Partition<Data> = d3.partition<Data>()
                                   .size([100, 100])
                                   .round(true)
                                   .padding(1)
                                   .padding(d => 1)
                                   .padding((d:d3.Node<Data>) => 1)
                              
    const c:[number,number] = a.size()
    const d:boolean = a.round()
    const e:(d:d3.Node<Data>) => number = a.padding()
    
    const l:d3.RectangleNode<Data> = a(h)
    
    const x0:number = l.x0
    const y0:number = l.y0
    const x1:number = l.x1
    const y1:number = l.y1
  `), 'available syntaxes')
  
  t.end()
})

test('d3.pack', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    type Data = {name:string}
    
    let h:d3.Node<Data>;
    
    const a:d3.Pack<Data> = d3.pack<Data>()
                              .radius(1)
                              .radius(d => 1)
                              .radius((d:d3.Node<Data>) => 1)
                              .size([100, 100])
                              .padding(1)
                              .padding(d => 1)
                              .padding((d:d3.Node<Data>) => 1)
                              
    const c:[number,number] = a.size()
    const e:(d:d3.Node<Data>) => number = a.padding()
    const f:(d:d3.Node<Data>) => number = a.radius()
    
    const l:d3.CircleNode<Data> = a(h)
    
    const x:number = l.x
    const y:number = l.y
    const r:number = l.r
  `), 'available syntaxes')
  
  t.end()
})

test('d3.packSiblings, d3.packEnclose', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from '../d3-hierarchy';
  
    type A = {r:number};
    type B = {x:number, y:number, r:number};
  
    const a:{r:number}[] = [...new Array(5)].map(() => ({r: Math.random() * 100}));
    const b:{x:number, y:number, r:number}[] = d3.packSiblings<B>(a);
    const c:{x:number, y:number, r:number} = d3.packEnclose<B>(b);
    
    type C = {r:number, name:string};
    type D = {x:number, y:number, r:number, name:string};
    
    const d:C[] = [...new Array(5)].map(() => ({r: Math.random() * 100, name: 'hello'}));
    const e:D[] = d3.packSiblings<D>(d);
    const f:D = d3.packEnclose<D>(e);
  `), 'available syntaxes')
  
  t.end()
})