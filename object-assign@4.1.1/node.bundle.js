/*! For license information please see node.bundle.js.LICENSE.txt */
module.exports.object_assign=(()=>{"use strict";var e={485:(e,t,r)=>{r.r(t);var o=r(418);const n="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);n.nodeModules.imports||(n.nodeModules.imports={}),n.nodeModules.modules||(n.nodeModules.modules={}),n.nodeModules.modules["object-assign"]||(n.nodeModules.modules["object-assign"]=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(o))},418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,l){for(var u,a,s=n(e),d=1;d<arguments.length;d++){for(var i in u=Object(arguments[d]))r.call(u,i)&&(s[i]=u[i]);if(t){a=t(u);for(var f=0;f<a.length;f++)o.call(u,a[f])&&(s[a[f]]=u[a[f]])}}return s}}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(485)})();