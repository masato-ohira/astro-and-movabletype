import{r as u}from"./index.8365acb2.js";var j=typeof global=="object"&&global&&global.Object===Object&&global;const g=j;var O=typeof self=="object"&&self&&self.Object===Object&&self,d=g||O||Function("return this")();const m=d;var S=m.Symbol;const s=S;var b=Object.prototype,_=b.hasOwnProperty,T=b.toString,n=s?s.toStringTag:void 0;function v(t){var r=_.call(t,n),i=t[n];try{t[n]=void 0;var e=!0}catch{}var o=T.call(t);return e&&(r?t[n]=i:delete t[n]),o}var x=Object.prototype,R=x.toString;function $(t){return R.call(t)}var w="[object Null]",E="[object Undefined]",l=s?s.toStringTag:void 0;function P(t){return t==null?t===void 0?E:w:l&&l in Object(t)?v(t):$(t)}function h(t){return t!=null&&typeof t=="object"}var k="[object Symbol]";function D(t){return typeof t=="symbol"||h(t)&&P(t)==k}function q(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var p={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=u,N=Symbol.for("react.element"),F=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,I=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function y(t,r,i){var e,o={},a=null,c=null;i!==void 0&&(a=""+i),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(c=r.ref);for(e in r)G.call(r,e)&&!U.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:N,type:t,key:a,ref:c,props:o,_owner:I.current}}f.Fragment=F;f.jsx=y;f.jsxs=y;p.exports=f;var A=p.exports;export{s as S,q as a,P as b,D as c,g as f,h as i,A as j,m as r};
