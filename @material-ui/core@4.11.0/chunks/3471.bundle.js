(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[3471],{8769:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(2030),i=(r(8953),r(8192),"undefined"!=typeof window?n.useLayoutEffect:n.useEffect);const a=function(e){var t=e.children,r=e.defer,a=void 0!==r&&r,o=e.fallback,c=void 0===o?null:o,u=n.useState(!1),s=u[0],l=u[1];return i((function(){a||l(!0)}),[a]),n.useEffect((function(){a&&l(!0)}),[a]),n.createElement(n.Fragment,null,s?t:c)}},3471:(e,t,r)=>{"use strict";r.d(t,{Z:()=>X});var n=r(7375),i=r(2122),a=r(2030),o=(r(8953),r(9403)),c=(r(8192),r(563)),u=r(9636),s=r(626),l=r(5192),f=r(3366),d=r(8920),p=r(5653),h=r(8769),v=r(6156),m=r(8926),g=r.n(m),w=r(2543),y=r(3871),b=a.forwardRef((function(e,t){var r=e.anchor,o=e.classes,c=e.className,s=e.width,l=(0,n.Z)(e,["anchor","classes","className","width"]);return a.createElement("div",(0,i.Z)({className:g()(o.root,o["anchor".concat((0,y.Z)(r))],c),ref:t,style:(0,v.Z)({},(0,u.wE)(r)?"width":"height",s)},l))}));const E=(0,w.Z)((function(e){return{root:{position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},anchorLeft:{right:"auto"},anchorRight:{left:"auto",right:0},anchorTop:{bottom:"auto",right:0},anchorBottom:{top:"auto",bottom:0,right:0}}}),{name:"PrivateSwipeArea"})(b);var T=null;function P(e,t){return"right"===e?document.body.offsetWidth-t[0].pageX:t[0].pageX}function Z(e,t){return"bottom"===e?window.innerHeight-t[0].clientY:t[0].clientY}function S(e,t){return e?t.clientWidth:t.clientHeight}function k(e,t,r,n){return Math.min(Math.max(r?t-e:n+t-e,0),n)}var x="undefined"!=typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),H={enter:f.x9.enteringScreen,exit:f.x9.leavingScreen},M="undefined"!=typeof window?a.useLayoutEffect:a.useEffect;const X=a.forwardRef((function(e,t){var r=(0,d.Z)(),f=(0,c.getThemeProps)({name:"MuiSwipeableDrawer",props:(0,i.Z)({},e),theme:r}),v=f.anchor,m=void 0===v?"left":v,g=f.disableBackdropTransition,w=void 0!==g&&g,y=f.disableDiscovery,b=void 0!==y&&y,X=f.disableSwipeToOpen,Y=void 0===X?x:X,L=f.hideBackdrop,C=f.hysteresis,D=void 0===C?.52:C,R=f.minFlingVelocity,W=void 0===R?450:R,B=f.ModalProps,A=(B=void 0===B?{}:B).BackdropProps,O=(0,n.Z)(B,["BackdropProps"]),_=f.onClose,F=f.onOpen,N=f.open,V=f.PaperProps,z=void 0===V?{}:V,I=f.SwipeAreaProps,j=f.swipeAreaWidth,q=void 0===j?20:j,G=f.transitionDuration,J=void 0===G?H:G,K=f.variant,Q=void 0===K?"temporary":K,U=(0,n.Z)(f,["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"]),$=a.useState(!1),ee=$[0],te=$[1],re=a.useRef({isSwiping:null}),ne=a.useRef(),ie=a.useRef(),ae=a.useRef(),oe=a.useRef(!1),ce=a.useRef();M((function(){ce.current=null}),[N]);var ue=a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mode,i=void 0===n?null:n,a=t.changeTransition,o=void 0===a||a,c=(0,u.ni)(r,m),s=-1!==["right","bottom"].indexOf(c)?1:-1,l=(0,u.wE)(m),f=l?"translate(".concat(s*e,"px, 0)"):"translate(0, ".concat(s*e,"px)"),d=ae.current.style;d.webkitTransform=f,d.transform=f;var h="";if(i&&(h=r.transitions.create("all",(0,p.C)({timeout:J},{mode:i}))),o&&(d.webkitTransition=h,d.transition=h),!w&&!L){var v=ie.current.style;v.opacity=1-e/S(l,ae.current),o&&(v.webkitTransition=h,v.transition=h)}}),[m,w,L,r,J]),se=(0,l.Z)((function(e){if(oe.current)if(T=null,oe.current=!1,te(!1),re.current.isSwiping){re.current.isSwiping=null;var t,n=(0,u.ni)(r,m),i=(0,u.wE)(m);t=i?P(n,e.changedTouches):Z(n,e.changedTouches);var a=i?re.current.startX:re.current.startY,o=S(i,ae.current),c=k(t,a,N,o),s=c/o;Math.abs(re.current.velocity)>W&&(ce.current=1e3*Math.abs((o-c)/re.current.velocity)),N?re.current.velocity>W||s>D?_():ue(0,{mode:"exit"}):re.current.velocity<-W||1-s>D?F():ue(S(i,ae.current),{mode:"enter"})}else re.current.isSwiping=null})),le=(0,l.Z)((function(e){if(ae.current&&oe.current&&(null==T||T===re.current)){var t=(0,u.ni)(r,m),n=(0,u.wE)(m),i=P(t,e.touches),a=Z(t,e.touches);if(N&&ae.current.contains(e.target)&&null==T){var o=function(e){var t=e.start,r=e.current,n=e.anchor,i={x:"scrollLeft",y:"scrollTop"},a={x:"scrollWidth",y:"scrollHeight"},o={x:"clientWidth",y:"clientHeight"};return e.domTreeShapes.some((function(e){var c=r>=t;"top"!==n&&"left"!==n||(c=!c);var u="left"===n||"right"===n?"x":"y",s=e[i[u]],l=s>0,f=s+e[o[u]]<e[a[u]];return c&&f||!c&&l?e:null}))}({domTreeShapes:function(e,t){for(var r=[];e&&e!==t;){var n=window.getComputedStyle(e);"absolute"===n.getPropertyValue("position")||"hidden"===n.getPropertyValue("overflow-x")?r=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push(e),e=e.parentElement}return r}(e.target,ae.current),start:n?re.current.startX:re.current.startY,current:n?i:a,anchor:m});if(o)return void(T=o);T=re.current}if(null==re.current.isSwiping){var c=Math.abs(i-re.current.startX),s=Math.abs(a-re.current.startY);c>s&&e.cancelable&&e.preventDefault();var l=n?c>s&&c>3:s>c&&s>3;if(!0===l||(n?s>3:c>3)){if(re.current.isSwiping=l,!l)return void se(e);re.current.startX=i,re.current.startY=a,b||N||(n?re.current.startX-=q:re.current.startY-=q)}}if(re.current.isSwiping){var f=S(n,ae.current),d=n?re.current.startX:re.current.startY;N&&!re.current.paperHit&&(d=Math.min(d,f));var p=k(n?i:a,d,N,f);if(N)if(re.current.paperHit)0===p&&(re.current.startX=i,re.current.startY=a);else{if(!(n?i<f:a<f))return;re.current.paperHit=!0,re.current.startX=i,re.current.startY=a}null===re.current.lastTranslate&&(re.current.lastTranslate=p,re.current.lastTime=performance.now()+1);var h=(p-re.current.lastTranslate)/(performance.now()-re.current.lastTime)*1e3;re.current.velocity=.4*re.current.velocity+.6*h,re.current.lastTranslate=p,re.current.lastTime=performance.now(),e.cancelable&&e.preventDefault(),ue(p)}}})),fe=(0,l.Z)((function(e){if(!e.defaultPrevented&&!e.muiHandled&&(!N||ie.current.contains(e.target)||ae.current.contains(e.target))){var t=(0,u.ni)(r,m),n=(0,u.wE)(m),i=P(t,e.touches),a=Z(t,e.touches);if(!N){if(Y||e.target!==ne.current)return;if(n){if(i>q)return}else if(a>q)return}e.muiHandled=!0,T=null,re.current.startX=i,re.current.startY=a,te(!0),!N&&ae.current&&ue(S(n,ae.current)+(b?20:-q),{changeTransition:!1}),re.current.velocity=0,re.current.lastTime=null,re.current.lastTranslate=null,re.current.paperHit=!1,oe.current=!0}}));a.useEffect((function(){if("temporary"===Q){var e=(0,s.Z)(ae.current);return e.addEventListener("touchstart",fe),e.addEventListener("touchmove",le,{passive:!1}),e.addEventListener("touchend",se),function(){e.removeEventListener("touchstart",fe),e.removeEventListener("touchmove",le,{passive:!1}),e.removeEventListener("touchend",se)}}}),[Q,fe,le,se]),a.useEffect((function(){return function(){T===re.current&&(T=null)}}),[]),a.useEffect((function(){N||te(!1)}),[N]);var de=a.useCallback((function(e){ie.current=o.findDOMNode(e)}),[]);return a.createElement(a.Fragment,null,a.createElement(u.ZP,(0,i.Z)({open:!("temporary"!==Q||!ee)||N,variant:Q,ModalProps:(0,i.Z)({BackdropProps:(0,i.Z)({},A,{ref:de})},O),PaperProps:(0,i.Z)({},z,{style:(0,i.Z)({pointerEvents:"temporary"!==Q||N?"":"none"},z.style),ref:ae}),anchor:m,transitionDuration:ce.current||J,onClose:_,ref:t},U)),!Y&&"temporary"===Q&&a.createElement(h.Z,null,a.createElement(E,(0,i.Z)({anchor:m,ref:ne,width:q},I))))}))}}]);