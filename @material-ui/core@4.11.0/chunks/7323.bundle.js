(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[7323],{7323:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n(4095).Z},4095:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2030),u=n(9403),c=(n(8953),n(626)),s=n(7294);n(8192);const o=function(e){var t=e.children,n=e.disableAutoFocus,o=void 0!==n&&n,i=e.disableEnforceFocus,f=void 0!==i&&i,a=e.disableRestoreFocus,l=void 0!==a&&a,d=e.getDoc,v=e.isEnabled,E=e.open,m=r.useRef(),b=r.useRef(null),Z=r.useRef(null),k=r.useRef(),h=r.useRef(null),w=r.useCallback((function(e){h.current=u.findDOMNode(e)}),[]),R=(0,s.Z)(t.ref,w),p=r.useRef();return r.useEffect((function(){p.current=E}),[E]),!p.current&&E&&"undefined"!=typeof window&&(k.current=d().activeElement),r.useEffect((function(){if(E){var e=(0,c.Z)(h.current);o||!h.current||h.current.contains(e.activeElement)||(h.current.hasAttribute("tabIndex")||h.current.setAttribute("tabIndex",-1),h.current.focus());var t=function(){e.hasFocus()&&!f&&v()&&!m.current?h.current&&!h.current.contains(e.activeElement)&&h.current.focus():m.current=!1},n=function(t){!f&&v()&&9===t.keyCode&&e.activeElement===h.current&&(m.current=!0,t.shiftKey?Z.current.focus():b.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var r=setInterval((function(){t()}),50);return function(){clearInterval(r),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),l||(k.current&&k.current.focus&&k.current.focus(),k.current=null)}}}),[o,f,l,v,E]),r.createElement(r.Fragment,null,r.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelStart"}),r.cloneElement(t,{ref:R}),r.createElement("div",{tabIndex:0,ref:Z,"data-test":"sentinelEnd"}))}},626:(e,t,n)=>{"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:()=>r})},4236:(e,t,n)=>{"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},7294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(2030),u=n(4236);function c(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){(0,u.Z)(e,n),(0,u.Z)(t,n)}}),[e,t])}}}]);