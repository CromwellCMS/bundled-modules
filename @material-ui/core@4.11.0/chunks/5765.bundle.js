(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[5765],{5765:(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});const n=e(9506).Z},6156:(r,t,e)=>{"use strict";function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}e.d(t,{Z:()=>n})},2122:(r,t,e)=>{"use strict";function n(){return(n=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r}).apply(this,arguments)}e.d(t,{Z:()=>n})},9506:(r,t,e)=>{"use strict";e.d(t,{Z:()=>p});var n=e(2122),i=e(8192),o=e(6156);function a(r){return String(parseFloat(r)).length===String(r).length}function u(r){return parseFloat(r)}function l(r){return function(t,e){var n=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===e)return t;var i=u(t);if("px"!==n)if("em"===n)i=u(t)*u(r);else if("rem"===n)return i=u(t)*u(r),t;var o=i;if("px"!==e)if("em"===e)o=i/u(r);else{if("rem"!==e)return t;o=i/u(r)}return parseFloat(o.toFixed(5))+e}}function s(r){var t=r.size,e=r.grid,n=t-t%e,i=n+e;return t-n<i-t?n:i}function c(r){var t=r.lineHeight;return r.pixels/(t*r.htmlFontSize)}function f(r){var t=r.cssProperty,e=r.min,n=r.max,i=r.unit,a=void 0===i?"rem":i,u=r.breakpoints,l=void 0===u?[600,960,1280]:u,s=r.transform,c=void 0===s?null:s,f=(0,o.Z)({},t,"".concat(e).concat(a)),p=(n-e)/l[l.length-1];return l.forEach((function(r){var n=e+p*r;null!==c&&(n=c(n)),f["@media (min-width:".concat(r,"px)")]=(0,o.Z)({},t,"".concat(Math.round(1e4*n)/1e4).concat(a))})),f}function p(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.breakpoints,o=void 0===e?["sm","md","lg"]:e,u=t.disableAlign,p=void 0!==u&&u,h=t.factor,m=void 0===h?2:h,v=t.variants,d=void 0===v?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:v,g=(0,n.Z)({},r);g.typography=(0,n.Z)({},g.typography);var b=g.typography,y=l(b.htmlFontSize),F=o.map((function(r){return g.breakpoints.values[r]}));return d.forEach((function(r){var t=b[r],e=parseFloat(y(t.fontSize,"rem"));if(!(e<=1)){var o=e,u=1+(o-1)/m,l=t.lineHeight;if(!a(l)&&!p)throw new Error((0,i.formatMuiErrorMessage)(6));a(l)||(l=parseFloat(y(l,"rem"))/parseFloat(e));var h=null;p||(h=function(r){return s({size:r,grid:c({pixels:4,lineHeight:l,htmlFontSize:b.htmlFontSize})})}),b[r]=(0,n.Z)({},t,f({cssProperty:"fontSize",min:u,max:o,unit:"rem",breakpoints:F,transform:h}))}})),g}}}]);