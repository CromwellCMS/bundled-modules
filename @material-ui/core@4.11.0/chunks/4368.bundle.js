(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[4368],{4368:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});const r=e(6211).Z},676:(t,n,e)=>{"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Z:()=>r})},9968:(t,n,e)=>{"use strict";function r(t){if(Array.isArray(t))return t}e.d(n,{Z:()=>r})},8970:(t,n,e)=>{"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(n,{Z:()=>r})},8481:(t,n,e)=>{"use strict";e.d(n,{Z:()=>s});var r=e(9968),i=e(2961),o=e(8970);function s(t,n){return(0,r.Z)(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return e}}(t,n)||(0,i.Z)(t,n)||(0,o.Z)()}},2961:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var r=e(676);function i(t,n){if(t){if("string"==typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(t,n):void 0}}},6211:(t,n,e)=>{"use strict";e.d(n,{Z:()=>y});var r=e(2122),i=e(8481),o=e(7375),s=e(2030),a=(e(8953),e(5411)),u=e(3366),c=e(8920),l=e(5653),d=e(7294),f={entering:{transform:"none"},entered:{transform:"none"}},m={enter:u.x9.enteringScreen,exit:u.x9.leavingScreen};const y=s.forwardRef((function(t,n){var e=t.children,u=t.disableStrictModeCompat,y=void 0!==u&&u,v=t.in,Z=t.onEnter,p=t.onEntered,E=t.onEntering,b=t.onExit,h=t.onExited,g=t.onExiting,x=t.style,C=t.timeout,S=void 0===C?m:C,w=t.TransitionComponent,T=void 0===w?a.Transition:w,_=(0,o.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=(0,c.Z)(),A=k.unstable_strictMode&&!y,M=s.useRef(null),j=(0,d.Z)(e.ref,n),I=(0,d.Z)(A?M:void 0,j),O=function(t){return function(n,e){if(t){var r=A?[M.current,n]:[n,e],o=(0,i.Z)(r,2),s=o[0],a=o[1];void 0===a?t(s):t(s,a)}}},R=O(E),D=O((function(t,n){(0,l.n)(t);var e=(0,l.C)({style:x,timeout:S},{mode:"enter"});t.style.webkitTransition=k.transitions.create("transform",e),t.style.transition=k.transitions.create("transform",e),Z&&Z(t,n)})),U=O(p),$=O(g),q=O((function(t){var n=(0,l.C)({style:x,timeout:S},{mode:"exit"});t.style.webkitTransition=k.transitions.create("transform",n),t.style.transition=k.transitions.create("transform",n),b&&b(t)})),z=O(h);return s.createElement(T,(0,r.Z)({appear:!0,in:v,nodeRef:A?M:void 0,onEnter:D,onEntered:U,onEntering:R,onExit:q,onExited:z,onExiting:$,timeout:S},_),(function(t,n){return s.cloneElement(e,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==t||v?void 0:"hidden"},f[t],x,e.props.style),ref:I},n))}))}))},9700:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r=(0,e(3633).Z)()},8920:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=e(563),i=(e(2030),e(9700));function o(){return(0,r.useTheme)()||i.Z}},5653:(t,n,e)=>{"use strict";e.d(n,{n:()=>r,C:()=>i});var r=function(t){return t.scrollTop};function i(t,n){var e=t.timeout,r=t.style,i=void 0===r?{}:r;return{duration:i.transitionDuration||"number"==typeof e?e:e[n.mode]||0,delay:i.transitionDelay}}},4236:(t,n,e)=>{"use strict";function r(t,n){"function"==typeof t?t(n):t&&(t.current=n)}e.d(n,{Z:()=>r})},7294:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=e(2030),i=e(4236);function o(t,n){return r.useMemo((function(){return null==t&&null==n?null:function(e){(0,i.Z)(t,e),(0,i.Z)(n,e)}}),[t,n])}}}]);