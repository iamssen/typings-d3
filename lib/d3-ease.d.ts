declare module 'd3-ease' {
  /** @link https://github.com/d3/d3-ease#easeLinear */
  function easeLinear(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeQuad */
  function easeQuad(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeQuadIn */
  function easeQuadIn(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeQuadOut */
  function easeQuadOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeQuadInOut */
  function easeQuadInOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCubic */
  function easeCubic(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCubicIn */
  function easeCubicIn(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCubicOut */
  function easeCubicOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCubicInOut */
  function easeCubicInOut(t:number):number;
  
  interface Poly {
    (t:number):number;
    exponent(e:number):this;
  }
  
  /** @link https://github.com/d3/d3-ease#easePoly */
  const easePoly:Poly;
  
  /** @link https://github.com/d3/d3-ease#easePolyIn */
  const easePolyIn:Poly;
  
  /** @link https://github.com/d3/d3-ease#easePolyOut */
  const easePolyOut:Poly;
  
  /** @link https://github.com/d3/d3-ease#easePolyInOut */
  const easePolyInOut:Poly;
  
  /** @link https://github.com/d3/d3-ease#easeSin */
  function easeSin(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeSinIn */
  function easeSinIn(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeSinOut */
  function easeSinOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeSinInOut */
  function easeSinInOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeExp */
  function easeExp(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeExpIn */
  function easeExpIn(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeExpOut */
  function easeExpOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeExpInOut */
  function easeExpInOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCircle */
  function easeCircle(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCircleIn */
  function easeCircleIn(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCircleOut */
  function easeCircleOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeCircleInOut */
  function easeCircleInOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeBounce */
  function easeBounce(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeBounceIn */
  function easeBounceIn(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeBounceOut */
  function easeBounceOut(t:number):number;
  
  /** @link https://github.com/d3/d3-ease#easeBounceInOut */
  function easeBounceInOut(t:number):number;
  
  interface Back {
    (t:number):number;
    overshoot(s:number):this;
  }
  
  /** @link https://github.com/d3/d3-ease#easeBack */
  const easeBack:Back;
  
  /** @link https://github.com/d3/d3-ease#easeBackIn */
  const easeBackIn:Back;
  
  /** @link https://github.com/d3/d3-ease#easeBackOut */
  const easeBackOut:Back;
  
  /** @link https://github.com/d3/d3-ease#easeBackInOut */
  const easeBackInOut:Back;
  
  interface Elastic {
    (t:number):number;
    amplitude(a:number):this;
    period(p:number):this;
  }
  
  /** @link https://github.com/d3/d3-ease#easeElastic */
  const easeElastic:Elastic;
  
  /** @link https://github.com/d3/d3-ease#easeElasticIn */
  const easeElasticIn:Elastic;
  
  /** @link https://github.com/d3/d3-ease#easeElasticOut */
  const easeElasticOut:Elastic;
  
  /** @link https://github.com/d3/d3-ease#easeElasticInOut */
  const easeElasticInOut:Elastic;
}