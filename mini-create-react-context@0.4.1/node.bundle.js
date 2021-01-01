module.exports.mini_create_react_context=(()=>{"use strict";var e={957:(e,t,o)=>{o.r(t);var n={};o.r(n),o.d(n,{default:()=>f});const r=require("react");var i=o.n(r);function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}const l=require("prop-types");var a=o.n(l);require("tiny-warning");var s=1073741823,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function d(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(o,n){e=o,t.forEach((function(t){return t(e,n)}))}}}const f=i().createContext||function(e,t){var o,n,i="__create-react-context-"+(c["__global_unique_id__"]=(c.__global_unique_id__||0)+1)+"__",l=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).emitter=d(t.props.value),t}u(o,e);var n=o.prototype;return n.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},n.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var o,n=this.props.value,r=e.value;((i=n)===(u=r)?0!==i||1/i==1/u:i!=i&&u!=u)?o=0:(o="function"==typeof t?t(n,r):s,0!=(o|=0)&&this.emitter.set(e.value,o))}var i,u},n.render=function(){return this.props.children},o}(r.Component);l.childContextTypes=((o={})[i]=a().object.isRequired,o);var f=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,o){0!=((0|e.observedBits)&o)&&e.setState({value:e.getValue()})},e}u(o,t);var n=o.prototype;return n.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?s:t},n.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?s:e},n.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.getValue=function(){return this.context[i]?this.context[i].get():e},n.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},o}(r.Component);return f.contextTypes=((n={})[i]=a().object,n),{Provider:l,Consumer:f}},p="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);p.nodeModules.imports||(p.nodeModules.imports={}),p.nodeModules.modules||(p.nodeModules.modules={}),p.nodeModules.modules["mini-create-react-context"]||(p.nodeModules.modules["mini-create-react-context"]=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(n))}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}return o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(957)})();