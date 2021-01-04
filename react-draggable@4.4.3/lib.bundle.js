var react_draggable;react_draggable=(()=>{"use strict";var e={628:(e,t,r)=>{var n=r(193);const o="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);o.nodeModules.imports||(o.nodeModules.imports={}),o.nodeModules.modules||(o.nodeModules.modules={}),o.nodeModules.modules["react-draggable"]||(o.nodeModules.modules["react-draggable"]=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(n))},668:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(30)),o=d(r(953)),a=d(r(403)),i=d(r(63)),u=r(825),l=r(849),s=r(280),c=d(r(783)),f=d(r(904));function d(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=j(t);if(r){var o=j(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return O(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),P(D(t=o.call(this,e)),"onDragStart",(function(e,r){if((0,f.default)("Draggable: onDragStart: %j",r),!1===t.props.onStart(e,(0,l.createDraggableData)(D(t),r)))return!1;t.setState({dragging:!0,dragged:!0})})),P(D(t),"onDrag",(function(e,r){if(!t.state.dragging)return!1;(0,f.default)("Draggable: onDrag: %j",r);var n,o,a=(0,l.createDraggableData)(D(t),r),i={x:a.x,y:a.y};if(t.props.bounds){var u=i.x,s=i.y;i.x+=t.state.slackX,i.y+=t.state.slackY;var c=(n=(0,l.getBoundPosition)(D(t),i.x,i.y),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(n,o)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],p=c[1];i.x=d,i.y=p,i.slackX=t.state.slackX+(u-i.x),i.slackY=t.state.slackY+(s-i.y),a.x=i.x,a.y=i.y,a.deltaX=i.x-t.state.x,a.deltaY=i.y-t.state.y}if(!1===t.props.onDrag(e,a))return!1;t.setState(i)})),P(D(t),"onDragStop",(function(e,r){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,l.createDraggableData)(D(t),r)))return!1;(0,f.default)("Draggable: onDragStop: %j",r);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;n.x=a,n.y=i}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:h({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return S(s,null,[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,f.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:h({},r)})}}]),S(s,[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){return this.props.nodeRef?this.props.nodeRef.current:a.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),o=t.defaultPosition,a=t.defaultClassName,s=t.defaultClassNameDragging,f=t.defaultClassNameDragged,d=t.position,p=t.positionOffset,g=(t.scale,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),b={},m=null,v=!Boolean(d)||this.state.dragging,S=d||o,w={x:(0,l.canDragX)(this)&&v?this.state.x:S.x,y:(0,l.canDragY)(this)&&v?this.state.y:S.y};this.state.isElementSVG?m=(0,u.createSVGTransform)(w,p):b=(0,u.createCSSTransform)(w,p);var O=(0,i.default)(r.props.className||"",a,(P(e={},s,this.state.dragging),P(e,f,this.state.dragged),e));return n.createElement(c.default,y({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(r),{className:O,style:h(h({},r.props.style),b),transform:m}))}}]),s}(n.Component);t.default=x,P(x,"displayName","Draggable"),P(x,"propTypes",h(h({},c.default.propTypes),{},{axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe})),P(x,"defaultProps",h(h({},c.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))},783:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(30)),o=c(r(953)),a=c(r(403)),i=r(825),u=r(849),l=r(280),s=c(r(904));function c(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={start:"touchstart",move:"touchmove",stop:"touchend"},D={start:"mousedown",move:"mousemove",stop:"mouseup"},j=D,P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(f,e);var t,r,o,l,c=(o=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(l){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function f(){var e;y(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(v(e=c.call.apply(c,[this].concat(r))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),w(v(e),"mounted",!1),w(v(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var r=e.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=r.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,i.matchesSelectorAndParentsTo)(t.target,e.props.handle,r)||e.props.cancel&&(0,i.matchesSelectorAndParentsTo)(t.target,e.props.cancel,r))){"touchstart"===t.type&&t.preventDefault();var o=(0,i.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,u.getControlPosition)(t,o,v(e));if(null!=a){var l=a.x,c=a.y,f=(0,u.createCoreData)(v(e),l,c);(0,s.default)("DraggableCore: handleDragStart: %j",f),(0,s.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:l,lastY:c}),(0,i.addEvent)(n,j.move,e.handleDrag),(0,i.addEvent)(n,j.stop,e.handleDragStop))}}})),w(v(e),"handleDrag",(function(t){var r=(0,u.getControlPosition)(t,e.state.touchIdentifier,v(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX,i=o-e.state.lastY,l=p((0,u.snapToGrid)(e.props.grid,a,i),2);if(a=l[0],i=l[1],!a&&!i)return;n=e.state.lastX+a,o=e.state.lastY+i}var c=(0,u.createCoreData)(v(e),n,o);if((0,s.default)("DraggableCore: handleDrag: %j",c),!1!==e.props.onDrag(t,c)&&!1!==e.mounted)e.setState({lastX:n,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(t){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),w(v(e),"handleDragStop",(function(t){if(e.state.dragging){var r=(0,u.getControlPosition)(t,e.state.touchIdentifier,v(e));if(null!=r){var n=r.x,o=r.y,a=(0,u.createCoreData)(v(e),n,o);if(!1===e.props.onStop(t,a)||!1===e.mounted)return!1;var l=e.findDOMNode();l&&e.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(l.ownerDocument),(0,s.default)("DraggableCore: handleDragStop: %j",a),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),l&&((0,s.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(l.ownerDocument,j.move,e.handleDrag),(0,i.removeEvent)(l.ownerDocument,j.stop,e.handleDragStop))}}})),w(v(e),"onMouseDown",(function(t){return j=D,e.handleDragStart(t)})),w(v(e),"onMouseUp",(function(t){return j=D,e.handleDragStop(t)})),w(v(e),"onTouchStart",(function(t){return j=O,e.handleDragStart(t)})),w(v(e),"onTouchEnd",(function(t){return j=O,e.handleDragStop(t)})),e}return t=f,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,i.addEvent)(e,O.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,i.removeEvent)(t,D.move,this.handleDrag),(0,i.removeEvent)(t,O.move,this.handleDrag),(0,i.removeEvent)(t,D.stop,this.handleDragStop),(0,i.removeEvent)(t,O.stop,this.handleDragStop),(0,i.removeEvent)(e,O.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){return this.props.nodeRef?this.props.nodeRef.current:a.default.findDOMNode(this)}},{key:"render",value:function(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&b(t.prototype,r),f}(n.Component);t.default=P,w(P,"displayName","DraggableCore"),w(P,"propTypes",{allowAnyClick:o.default.bool,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),w(P,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},193:(e,t,r)=>{var n=r(668),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},825:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,r){var n=e;do{if(f(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.addEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r}},t.removeEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null}},t.outerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderTopWidth))+(0,o.int)(r.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderLeftWidth))+(0,o.int)(r.borderRightWidth)},t.innerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingTop))-(0,o.int)(r.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingLeft))-(0,o.int)(r.paddingRight)},t.offsetXYFromParent=function(e,t,r){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-n.left)/r,y:(e.clientY+t.scrollTop-n.top)/r}},t.createCSSTransform=function(e,t){var r=d(e,t,"px");return s({},(0,a.browserPrefixToKey)("transform",a.default),r)},t.createSVGTransform=function(e,t){return d(e,t,"")},t.getTranslation=d,t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},t.addUserSelectStyles=function(e){if(e){var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&p(e.body,"react-draggable-transparent-selection")}},t.removeUserSelectStyles=function(e){if(e)try{if(e.body&&g(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}},t.addClassName=p,t.removeClassName=g;var o=r(280),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(650));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="";function f(e,t){return c||(c=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[c])&&e[c](t)}function d(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+r),u="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(u,")")+a}return a}function p(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function g(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},650:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPrefix=n,t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0;var r=["Moz","Webkit","O","ms"];function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var t=window.document.documentElement.style;if(e in t)return"";for(var n=0;n<r.length;n++)if(o(e,r[n])in t)return r[n];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var a=n();t.default=a},904:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},849:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];var i=e.props.bounds;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var u=a(e);if("string"==typeof i){var l,s=u.ownerDocument,c=s.defaultView;if(!((l="parent"===i?u.parentNode:s.querySelector(i))instanceof c.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=c.getComputedStyle(u),d=c.getComputedStyle(l);i={left:-u.offsetLeft+(0,n.int)(d.paddingLeft)+(0,n.int)(f.marginLeft),top:-u.offsetTop+(0,n.int)(d.paddingTop)+(0,n.int)(f.marginTop),right:(0,o.innerWidth)(l)-(0,o.outerWidth)(u)-u.offsetLeft+(0,n.int)(d.paddingRight)-(0,n.int)(f.marginRight),bottom:(0,o.innerHeight)(l)-(0,o.outerHeight)(u)-u.offsetTop+(0,n.int)(d.paddingBottom)-(0,n.int)(f.marginBottom)}}return(0,n.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom)),(0,n.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,n.isNum)(i.top)&&(r=Math.max(r,i.top)),[t,r]},t.snapToGrid=function(e,t,r){return[Math.round(t/e[0])*e[0],Math.round(r/e[1])*e[1]]},t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.getControlPosition=function(e,t,r){var n="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;var i=a(r),u=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,u,r.props.scale)},t.createCoreData=function(e,t,r){var o=e.state,i=!(0,n.isNum)(o.lastX),u=a(e);return i?{node:u,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:u,deltaX:t-o.lastX,deltaY:r-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:r}},t.createDraggableData=function(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}};var n=r(280),o=r(825);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},280:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.findInArray=function(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)},t.int=function(e){return parseInt(e,10)},t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))}},63:e=>{e.exports=CromwellStore.nodeModules.modules.classnames},953:e=>{e.exports=CromwellStore.nodeModules.modules["prop-types"]},30:e=>{e.exports=CromwellStore.nodeModules.modules.react},403:e=>{e.exports=CromwellStore.nodeModules.modules["react-dom"]}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(628)})().default;