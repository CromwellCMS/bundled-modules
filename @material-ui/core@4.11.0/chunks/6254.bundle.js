(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[6254],{6254:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n(6037).Z},676:(t,e,n)=>{"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:()=>r})},9968:(t,e,n)=>{"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,{Z:()=>r})},8970:(t,e,n)=>{"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,{Z:()=>r})},8481:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(9968),i=n(2961),o=n(8970);function u(t,e){return(0,r.Z)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||(0,i.Z)(t,e)||(0,o.Z)()}},2961:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(676);function i(t,e){if(t){if("string"==typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}},6037:(t,e,n)=>{"use strict";n.d(e,{Z:()=>y});var r=n(2122),i=n(8481),o=n(7375),u=n(2030),a=n(8926),s=n.n(a),c=(n(8953),n(5411)),l=n(2543),d=n(3366),f=n(5653),m=n(8920),h=n(7294),p=u.forwardRef((function(t,e){var n=t.children,a=t.classes,l=t.className,p=t.collapsedHeight,y=void 0===p?"0px":p,v=t.component,g=void 0===v?"div":v,Z=t.disableStrictModeCompat,E=void 0!==Z&&Z,b=t.in,x=t.onEnter,w=t.onEntered,C=t.onEntering,S=t.onExit,A=t.onExited,T=t.onExiting,D=t.style,H=t.timeout,_=void 0===H?d.x9.standard:H,M=t.TransitionComponent,R=void 0===M?c.Transition:M,I=(0,o.Z)(t,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),N=(0,m.Z)(),j=u.useRef(),k=u.useRef(null),O=u.useRef(),L="number"==typeof y?"".concat(y,"px"):y;u.useEffect((function(){return function(){clearTimeout(j.current)}}),[]);var U=N.unstable_strictMode&&!E,$=u.useRef(null),q=(0,h.Z)(e,U?$:void 0),z=function(t){return function(e,n){if(t){var r=U?[$.current,e]:[e,n],o=(0,i.Z)(r,2),u=o[0],a=o[1];void 0===a?t(u):t(u,a)}}},B=z((function(t,e){t.style.height=L,x&&x(t,e)})),F=z((function(t,e){var n=k.current?k.current.clientHeight:0,r=(0,f.C)({style:D,timeout:_},{mode:"enter"}).duration;if("auto"===_){var i=N.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(i,"ms"),O.current=i}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style.height="".concat(n,"px"),C&&C(t,e)})),G=z((function(t,e){t.style.height="auto",w&&w(t,e)})),J=z((function(t){var e=k.current?k.current.clientHeight:0;t.style.height="".concat(e,"px"),S&&S(t)})),K=z(A),P=z((function(t){var e=k.current?k.current.clientHeight:0,n=(0,f.C)({style:D,timeout:_},{mode:"exit"}).duration;if("auto"===_){var r=N.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(r,"ms"),O.current=r}else t.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");t.style.height=L,T&&T(t)}));return u.createElement(R,(0,r.Z)({in:b,onEnter:B,onEntered:G,onEntering:F,onExit:J,onExited:K,onExiting:P,addEndListener:function(t,e){var n=U?t:e;"auto"===_&&(j.current=setTimeout(n,O.current||0))},nodeRef:U?$:void 0,timeout:"auto"===_?null:_},I),(function(t,e){return u.createElement(g,(0,r.Z)({className:s()(a.container,l,{entered:a.entered,exited:!b&&"0px"===L&&a.hidden}[t]),style:(0,r.Z)({minHeight:L},D),ref:q},e),u.createElement("div",{className:a.wrapper,ref:k},u.createElement("div",{className:a.wrapperInner},n)))}))}));p.muiSupportAuto=!0;const y=(0,l.Z)((function(t){return{container:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(p)},9700:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(3633).Z)()},8920:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(563),i=(n(2030),n(9700));function o(){return(0,r.useTheme)()||i.Z}},2543:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(2122),i=n(563),o=n(9700);const u=function(t,e){return(0,i.withStyles)(t,(0,r.Z)({defaultTheme:o.Z},e))}},5653:(t,e,n)=>{"use strict";n.d(e,{n:()=>r,C:()=>i});var r=function(t){return t.scrollTop};function i(t,e){var n=t.timeout,r=t.style,i=void 0===r?{}:r;return{duration:i.transitionDuration||"number"==typeof n?n:n[e.mode]||0,delay:i.transitionDelay}}},4236:(t,e,n)=>{"use strict";function r(t,e){"function"==typeof t?t(e):t&&(t.current=e)}n.d(e,{Z:()=>r})},7294:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(2030),i=n(4236);function o(t,e){return r.useMemo((function(){return null==t&&null==e?null:function(n){(0,i.Z)(t,n),(0,i.Z)(e,n)}}),[t,e])}}}]);