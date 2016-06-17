const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.interpolate, d3.interpolateArray...', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-interpolate";
    
    const a:number = d3.interpolate(1, 10)(0.5)
    const b:string = d3.interpolate('10px', '100px')(0.5)
    const c:number = d3.interpolateNumber(1, 100)(0.5)
    const d:string = d3.interpolateObject({a:1}, {a:100})(0.5)
    const e:number = d3.interpolateRound(1, 5)(0.5)
    const f:string = d3.interpolateString('10px 10%', '100px 100%')(0.5)
    const g:string = d3.interpolateTransformCss('translate(0, 0)', 'translate(100px, 30px)')(0.5)
    const h:string = d3.interpolateTransformSvg('translate(0, 0)', 'translate(100, 30)')(0.5)
    const i:[number, number, number] = d3.interpolateZoom([0, 0, 10], [100, 200, 340])(0.5)
  `), 'available syntaxes')

  // TODO Typescript can not catch miss match array length
  // t.error(reject(/* language=TypeScript */ `
  //   import * as d3 from "../d3-interpolate";
  //   const i:[number, number] = d3.interpolateZoom([0, 0, 10], [100, 200, 340])(0.5)
  // `), 'return type is [number, number, number]')

  t.end()
})

test('with d3.transition', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as d3 from "../d3-interpolate";
    import {select, Transition} from '../d3-selection';
    
    const a = d3.interpolate(1, 10)
    const b = d3.interpolate('10px', '100px')
    const c = d3.interpolateNumber(1, 100)
    const d = d3.interpolateObject({a:1}, {a:100})
    const e = d3.interpolateRound(1, 5)
    const f = d3.interpolateString('10px 10%', '100px 100%')
    const g = d3.interpolateTransformCss('translate(0, 0)', 'translate(100px, 30px)')
    const h = d3.interpolateTransformSvg('translate(0, 0)', 'translate(100, 30)')
    const i = d3.interpolateZoom([0, 0, 10], [100, 200, 340])
    
    const x:Transition = select('a').transition()
    
    x.tween('a', a)
    x.tween('a', b)
    x.tween('a', c)
    x.tween('a', d)
    x.tween('a', e)
    x.tween('a', f)
    x.tween('a', g)
    x.tween('a', h)
    x.tween('a', i)
    
    x.attrTween('a', a)
    x.attrTween('a', b)
    x.attrTween('a', c)
    x.attrTween('a', d)
    x.attrTween('a', e)
    x.attrTween('a', f)
    x.attrTween('a', g)
    x.attrTween('a', h)
    x.attrTween('a', i)
    
    x.styleTween('a', a)
    x.styleTween('a', b)
    x.styleTween('a', c)
    x.styleTween('a', d)
    x.styleTween('a', e)
    x.styleTween('a', f)
    x.styleTween('a', g)
    x.styleTween('a', h)
    x.styleTween('a', i)
  `), 'available syntaxes')
  
  t.end()
})

test('color spaces: d3.interpolateRgb, d3.interpolateRgbBasis...', t => {
  t.error(accept(/* language=TypeScript */ `
    import * as color from "../d3-color";
    import * as d3 from "../d3-interpolate";
    
    const a:((t:number) => string)[] = [
      d3.interpolateRgb('#000000', '#ffffff'),
      d3.interpolateRgbBasis(['#ff0000', '#00ff00', '#0000ff']),
      d3.interpolateRgbBasisClosed(['#ff0000', '#00ff00', '#0000ff']),
      d3.interpolateHsl('#000000', '#ffffff'),
      d3.interpolateHslLong('#000000', '#ffffff'),
      d3.interpolateLab('#000000', '#ffffff'),
      d3.interpolateHcl('#000000', '#ffffff'),
      d3.interpolateHclLong('#000000', '#ffffff'),
      d3.interpolateCubehelix('#000000', '#ffffff'),
      d3.interpolateCubehelixLong('#000000', '#ffffff'),
      d3.interpolateRgb(color.rgb('#000000'), color.rgb('#ffffff')),
      d3.interpolateRgbBasis([color.rgb('#ff0000'), color.rgb('#00ff00'), color.rgb('#0000ff')]),
      d3.interpolateRgbBasisClosed([color.rgb('#ff0000'), color.rgb('#00ff00'), color.rgb('#0000ff')]),
      d3.interpolateHsl(color.hsl('#000000'), color.hsl('#ffffff')),
      d3.interpolateHslLong(color.hsl('#000000'), color.hsl('#ffffff')),
      d3.interpolateLab(color.lab('#000000'), color.lab('#ffffff')),
      d3.interpolateHcl(color.hcl('#000000'), color.hcl('#ffffff')),
      d3.interpolateHclLong(color.hcl('#000000'), color.hcl('#ffffff')),
      d3.interpolateCubehelix(color.cubehelix('#000000'), color.cubehelix('#ffffff')),
      d3.interpolateCubehelixLong(color.cubehelix('#000000'), color.cubehelix('#ffffff'))
    ];
  `), 'available syntaxes')

  t.error(reject(/* language=TypeScript */ `
    import * as color from '../d3-color';
    import * as d3 from '../d3-interpolate';
    
    d3.interpolateRgb(color.hsl('#000000'), color.hsl('#ffffff'))
  `), 'they can not receive other color types')

  t.end()
})

