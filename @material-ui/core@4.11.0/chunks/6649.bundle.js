(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[6649],{6649:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});const r=e(170).Z},676:(t,n,e)=>{"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Z:()=>r})},9968:(t,n,e)=>{"use strict";function r(t){if(Array.isArray(t))return t}e.d(n,{Z:()=>r})},8970:(t,n,e)=>{"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(n,{Z:()=>r})},8481:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(9968),o=e(2961),i=e(8970);function u(t,n){return(0,r.Z)(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}}(t,n)||(0,o.Z)(t,n)||(0,i.Z)()}},2961:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=e(676);function o(t,n){if(t){if("string"==typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(t,n):void 0}}},170:(t,n,e)=>{"use strict";e.d(n,{Z:()=>m});var r=e(2122),o=e(8481),i=e(7375),u=e(2030),a=(e(8953),e(5411)),s=e(8920),c=e(5653),l=e(7294);function d(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var f={entering:{opacity:1,transform:d(1)},entered:{opacity:1,transform:"none"}},y=u.forwardRef((function(t,n){var e=t.children,y=t.disableStrictModeCompat,m=void 0!==y&&y,p=t.in,v=t.onEnter,Z=t.onEntered,E=t.onEntering,h=t.onExit,g=t.onExited,b=t.onExiting,x=t.style,C=t.timeout,A=void 0===C?"auto":C,S=t.TransitionComponent,w=void 0===S?a.Transition:S,T=(0,i.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),_=u.useRef(),j=u.useRef(),M=(0,s.Z)(),R=M.unstable_strictMode&&!m,k=u.useRef(null),D=(0,l.Z)(e.ref,n),H=(0,l.Z)(R?k:void 0,D),I=function(t){return function(n,e){if(t){var r=R?[k.current,n]:[n,e],i=(0,o.Z)(r,2),u=i[0],a=i[1];void 0===a?t(u):t(u,a)}}},O=I(E),L=I((function(t,n){(0,c.n)(t);var e,r=(0,c.C)({style:x,timeout:A},{mode:"enter"}),o=r.duration,i=r.delay;"auto"===A?(e=M.transitions.getAutoHeightDuration(t.clientHeight),j.current=e):e=o,t.style.transition=[M.transitions.create("opacity",{duration:e,delay:i}),M.transitions.create("transform",{duration:.666*e,delay:i})].join(","),v&&v(t,n)})),U=I(Z),$=I(b),q=I((function(t){var n,e=(0,c.C)({style:x,timeout:A},{mode:"exit"}),r=e.duration,o=e.delay;"auto"===A?(n=M.transitions.getAutoHeightDuration(t.clientHeight),j.current=n):n=r,t.style.transition=[M.transitions.create("opacity",{duration:n,delay:o}),M.transitions.create("transform",{duration:.666*n,delay:o||.333*n})].join(","),t.style.opacity="0",t.style.transform=d(.75),h&&h(t)})),z=I(g);return u.useEffect((function(){return function(){clearTimeout(_.current)}}),[]),u.createElement(w,(0,r.Z)({appear:!0,in:p,nodeRef:R?k:void 0,onEnter:L,onEntered:U,onEntering:O,onExit:q,onExited:z,onExiting:$,addEndListener:function(t,n){var e=R?t:n;"auto"===A&&(_.current=setTimeout(e,j.current||0))},timeout:"auto"===A?null:A},T),(function(t,n){return u.cloneElement(e,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:d(.75),visibility:"exited"!==t||p?void 0:"hidden"},f[t],x,e.props.style),ref:H},n))}))}));y.muiSupportAuto=!0;const m=y},9700:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r=(0,e(3633).Z)()},8920:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var r=e(563),o=(e(2030),e(9700));function i(){return(0,r.useTheme)()||o.Z}},5653:(t,n,e)=>{"use strict";e.d(n,{n:()=>r,C:()=>o});var r=function(t){return t.scrollTop};function o(t,n){var e=t.timeout,r=t.style,o=void 0===r?{}:r;return{duration:o.transitionDuration||"number"==typeof e?e:e[n.mode]||0,delay:o.transitionDelay}}},4236:(t,n,e)=>{"use strict";function r(t,n){"function"==typeof t?t(n):t&&(t.current=n)}e.d(n,{Z:()=>r})},7294:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var r=e(2030),o=e(4236);function i(t,n){return r.useMemo((function(){return null==t&&null==n?null:function(e){(0,o.Z)(t,e),(0,o.Z)(n,e)}}),[t,n])}}}]);