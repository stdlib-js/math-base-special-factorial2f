"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(T,f){
var o=require('@stdlib/math-base-assert-is-nanf/dist'),n=require('@stdlib/math-base-assert-is-integerf/dist'),q=require('@stdlib/math-base-assert-is-evenf/dist'),u=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/constants-float32-pinf/dist'),N=require('@stdlib/constants-float32-max-nth-double-factorial/dist');function c(e){var r,i,a,t;if(o(e))return NaN;if(e>N)return l;if(e<0||n(e)===!1)return NaN;if(a=e|0,a===0|0||a===1|0)return 1;for(q(a)?r=2:r=3,i=u(1),t=a|0;t>=r;t-=2)i=u(i*t);return i}f.exports=c
});var A=v();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
