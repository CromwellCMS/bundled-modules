(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[2079],{2079:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});const n=t(7369).Z},2122:(e,r,t)=>{"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:()=>n})},7375:(e,r,t)=>{"use strict";function n(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(r,{Z:()=>n})},7369:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(2122),i=t(7375),o=t(2030);function u(e,r){var t=r.disableHysteresis,n=void 0!==t&&t,i=r.threshold,o=void 0===i?100:i,u=r.target,s=e.current;return u&&(e.current=void 0!==u.pageYOffset?u.pageYOffset:u.scrollTop),!(!n&&void 0!==s&&e.current<s)&&e.current>o}var s="undefined"!=typeof window?window:null;function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.getTrigger,t=void 0===r?u:r,c=e.target,a=void 0===c?s:c,f=(0,i.Z)(e,["getTrigger","target"]),l=o.useRef(),d=o.useState((function(){return t(l,f)})),v=d[0],g=d[1];return o.useEffect((function(){var e=function(){g(t(l,(0,n.Z)({target:a},f)))};return e(),a.addEventListener("scroll",e),function(){a.removeEventListener("scroll",e)}}),[a,t,JSON.stringify(f)]),v}}}]);