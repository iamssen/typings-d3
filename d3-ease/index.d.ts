/** @link https://github.com/d3/d3-ease#easeLinear */
export function easeLinear(t:number):number;

/** @link https://github.com/d3/d3-ease#easeQuad */
export function easeQuad(t:number):number;

/** @link https://github.com/d3/d3-ease#easeQuadIn */
export function easeQuadIn(t:number):number;

/** @link https://github.com/d3/d3-ease#easeQuadOut */
export function easeQuadOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeQuadInOut */
export function easeQuadInOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCubic */
export function easeCubic(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCubicIn */
export function easeCubicIn(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCubicOut */
export function easeCubicOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCubicInOut */
export function easeCubicInOut(t:number):number;

interface Poly {
  (t:number):number;
  exponent(e:number):this;
}

/** @link https://github.com/d3/d3-ease#easePoly */
export const easePoly:Poly;

/** @link https://github.com/d3/d3-ease#easePolyIn */
export const easePolyIn:Poly;

/** @link https://github.com/d3/d3-ease#easePolyOut */
export const easePolyOut:Poly;

/** @link https://github.com/d3/d3-ease#easePolyInOut */
export const easePolyInOut:Poly;

/** @link https://github.com/d3/d3-ease#easeSin */
export function easeSin(t:number):number;

/** @link https://github.com/d3/d3-ease#easeSinIn */
export function easeSinIn(t:number):number;

/** @link https://github.com/d3/d3-ease#easeSinOut */
export function easeSinOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeSinInOut */
export function easeSinInOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeExp */
export function easeExp(t:number):number;

/** @link https://github.com/d3/d3-ease#easeExpIn */
export function easeExpIn(t:number):number;

/** @link https://github.com/d3/d3-ease#easeExpOut */
export function easeExpOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeExpInOut */
export function easeExpInOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCircle */
export function easeCircle(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCircleIn */
export function easeCircleIn(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCircleOut */
export function easeCircleOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeCircleInOut */
export function easeCircleInOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeBounce */
export function easeBounce(t:number):number;

/** @link https://github.com/d3/d3-ease#easeBounceIn */
export function easeBounceIn(t:number):number;

/** @link https://github.com/d3/d3-ease#easeBounceOut */
export function easeBounceOut(t:number):number;

/** @link https://github.com/d3/d3-ease#easeBounceInOut */
export function easeBounceInOut(t:number):number;

interface Back {
  (t:number):number;
  overshoot(s:number):this;
}

/** @link https://github.com/d3/d3-ease#easeBack */
export const easeBack:Back;

/** @link https://github.com/d3/d3-ease#easeBackIn */
export const easeBackIn:Back;

/** @link https://github.com/d3/d3-ease#easeBackOut */
export const easeBackOut:Back;

/** @link https://github.com/d3/d3-ease#easeBackInOut */
export const easeBackInOut:Back;

interface Elastic {
  (t:number):number;
  amplitude(a:number):this;
  period(p:number):this;
}

/** @link https://github.com/d3/d3-ease#easeElastic */
export const easeElastic:Elastic;

/** @link https://github.com/d3/d3-ease#easeElasticIn */
export const easeElasticIn:Elastic;

/** @link https://github.com/d3/d3-ease#easeElasticOut */
export const easeElasticOut:Elastic;

/** @link https://github.com/d3/d3-ease#easeElasticInOut */
export const easeElasticInOut:Elastic;
