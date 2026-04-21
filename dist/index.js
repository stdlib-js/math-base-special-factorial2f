"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=s(function(T,v){
var n=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-nonnegative-integerf/dist'),q=require('@stdlib/math-base-assert-is-evenf/dist'),u=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/constants-float32-pinf/dist'),N=require('@stdlib/constants-float32-max-nth-double-factorial/dist');function c(e){var r,a,i,t;if(n(e)||!o(e))return NaN;if(e>N)return l;if(i=e|0,i===0|0||i===1|0)return 1;for(q(i)?r=2:r=3,a=u(1),t=i|0;t>=r;t-=2)a=u(a*t);return a}v.exports=c
});var A=f();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
