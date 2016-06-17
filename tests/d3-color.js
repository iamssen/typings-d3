const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.rgb, d3.hsl, d3.hcl, d3.cubehelix', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-color";
    const a:d3.Rgb = d3.rgb('#ffffff');
    const a1:number = a.r;
    const a2:number = a.g;
    const a3:number = a.b;
    const a4:d3.Rgb = a.rgb();
    const b:d3.Hsl = d3.hsl('hsl(120, 50%, 20%)');
    const b1:number = b.h;
    const b2:number = b.s;
    const b3:number = b.l;
    const b4:d3.Rgb = b.rgb();
    const c:d3.Lab = d3.lab('#ffffff');
    const c1:number = c.l;
    const c2:number = c.a;
    const c3:number = c.b;
    const c4:d3.Rgb = c.rgb();
    const d:d3.Hcl = d3.hcl('#ffffff');
    const d1:number = d.h;
    const d2:number = d.c;
    const d4:number = d.l;
    const d5:d3.Rgb = d.rgb();
    const e:d3.Cubehelix = d3.cubehelix('#ffffff');
    const e1:number = e.h;
    const e2:number = e.s;
    const e3:number = e.l;
    const e4:d3.Rgb = e.rgb();
    const f:d3.Color = d3.rgb(e);
    
    const g:number = f.opacity;
    const h:d3.Color = f.brighter(0.5);
    const i:d3.Color = f.darker(0.5);
    const j:boolean = f.displayable();
    const k:string = f.toString();
  `), 'available syntaxes')

  t.end()
})