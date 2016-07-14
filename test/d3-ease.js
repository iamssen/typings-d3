const test = require('tape');
const {accept, reject} = require('declaration-syntax-tester')();

test('d3.quad, d3.cubic...', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-ease';
    
    const nums:number[] = [
      d3.easeLinear(0),
      d3.easeQuad(0),
      d3.easeQuadIn(0),
      d3.easeQuadOut(0),
      d3.easeQuadInOut(0),
      d3.easeCubic(0),
      d3.easeCubicIn(0),
      d3.easeCubicOut(0),
      d3.easeCubicInOut(0),
      d3.easePoly(0),
      d3.easePolyIn(0),
      d3.easePolyOut(0),
      d3.easePolyInOut(0),
      d3.easePoly.exponent(0.5)(0),
      d3.easeSin(0),
      d3.easeSinIn(0),
      d3.easeSinOut(0),
      d3.easeSinInOut(0),
      d3.easeExp(0),
      d3.easeExpIn(0),
      d3.easeExpOut(0),
      d3.easeExpInOut(0),
      d3.easeCircle(0),
      d3.easeCircleIn(0),
      d3.easeCircleOut(0),
      d3.easeCircleInOut(0),
      d3.easeBounce(0),
      d3.easeBounceIn(0),
      d3.easeBounceOut(0),
      d3.easeBounceInOut(0),
      d3.easeBack(0),
      d3.easeBackIn(0),
      d3.easeBackOut(0),
      d3.easeBackInOut(0),
      d3.easeBack.overshoot(0.3)(0),
      d3.easeElastic(0),
      d3.easeElasticIn(0),
      d3.easeElasticOut(0),
      d3.easeElasticInOut(0),
      d3.easeElastic.amplitude(0.4).period(0.6)(0)
    ]
  `), 'available syntaxes')

  t.end()
})

test('with d3.transition', t => {
  t.error(accept(/* language=TypeScript */ `
    /// <reference path="./d3.d.ts"/>
    import * as d3 from 'd3-ease';
    import {select, Transition} from 'd3-selection';
    
    const x:Transition = select('a').transition()
    
    x.ease(d3.easeLinear)
    x.ease(d3.easeQuad)
    x.ease(d3.easeQuadIn)
    x.ease(d3.easeQuadOut)
    x.ease(d3.easeQuadInOut)
    x.ease(d3.easeCubic)
    x.ease(d3.easeCubicIn)
    x.ease(d3.easeCubicOut)
    x.ease(d3.easeCubicInOut)
    x.ease(d3.easePoly)
    x.ease(d3.easePolyIn)
    x.ease(d3.easePolyOut)
    x.ease(d3.easePolyInOut)
    x.ease(d3.easePoly.exponent(0.5))
    x.ease(d3.easeSin)
    x.ease(d3.easeSinIn)
    x.ease(d3.easeSinOut)
    x.ease(d3.easeSinInOut)
    x.ease(d3.easeExp)
    x.ease(d3.easeExpIn)
    x.ease(d3.easeExpOut)
    x.ease(d3.easeExpInOut)
    x.ease(d3.easeCircle)
    x.ease(d3.easeCircleIn)
    x.ease(d3.easeCircleOut)
    x.ease(d3.easeCircleInOut)
    x.ease(d3.easeBounce)
    x.ease(d3.easeBounceIn)
    x.ease(d3.easeBounceOut)
    x.ease(d3.easeBounceInOut)
    x.ease(d3.easeBack)
    x.ease(d3.easeBackIn)
    x.ease(d3.easeBackOut)
    x.ease(d3.easeBackInOut)
    x.ease(d3.easeBack.overshoot(0.3))
    x.ease(d3.easeElastic)
    x.ease(d3.easeElasticIn)
    x.ease(d3.easeElasticOut)
    x.ease(d3.easeElasticInOut)
    x.ease(d3.easeElastic.amplitude(0.4).period(0.6))
  `), 'available for transition.ease')
  
  t.end()
})