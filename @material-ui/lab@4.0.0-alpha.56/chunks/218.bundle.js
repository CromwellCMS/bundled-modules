(self.webpackChunk_material_ui_lab=self.webpackChunk_material_ui_lab||[]).push([[218],{8218:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});const n=t(7313).Z},2122:(e,r,t)=>{"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:()=>n})},7375:(e,r,t)=>{"use strict";function n(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}t.d(r,{Z:()=>n})},8207:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>l,_i:()=>i,uU:()=>a,pQ:()=>o});var n=t(2030),u=(t(8953),n.createContext(null));function l(e){var r,t,l,i=e.children,a=e.value,o=(t=(r=n.useState(null))[0],l=r[1],n.useEffect((function(){l("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t),c=n.useMemo((function(){return{idPrefix:o,value:a}}),[o,a]);return n.createElement(u.Provider,{value:c},i)}function i(){return n.useContext(u)}function a(e,r){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(r)}function o(e,r){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(r)}},7313:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(2122),u=t(7375),l=t(2030),i=(t(8953),t(2746)),a=t.n(i),o=t(8207);const c=l.forwardRef((function(e,r){var t=e.children,i=(0,u.Z)(e,["children"]),c=(0,o._i)();if(null===c)throw new TypeError("No TabContext provided");var f=l.Children.map(t,(function(e){return l.cloneElement(e,{"aria-controls":(0,o.uU)(c,e.props.value),id:(0,o.pQ)(c,e.props.value)})}));return l.createElement(a(),(0,n.Z)({},i,{ref:r,value:c.value}),f)}))}}]);