module.exports.domutils=(()=>{var e={431:(e,t,n)=>{"use strict";n.r(t);var r=n(417);const i="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);i.nodeModules.imports||(i.nodeModules.imports={}),i.nodeModules.modules||(i.nodeModules.modules={}),i.nodeModules.modules.domutils||(i.nodeModules.modules.domutils=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(r))},417:(e,t,n)=>{var r=e.exports;[n(346),n(10),n(765),n(43),n(905),n(975)].forEach((function(e){Object.keys(e).forEach((function(t){r[t]=e[t].bind(r)}))}))},975:(e,t)=>{t.removeSubsets=function(e){for(var t,n,r,i=e.length;--i>-1;){for(t=n=e[i],e[i]=null,r=!0;n;){if(e.indexOf(n)>-1){r=!1,e.splice(i,1);break}n=n.parent}r&&(e[i]=t)}return e};var n=t.compareDocumentPosition=function(e,t){var n,r,i,o,u,a,l=[],f=[];if(e===t)return 0;for(n=e;n;)l.unshift(n),n=n.parent;for(n=t;n;)f.unshift(n),n=n.parent;for(a=0;l[a]===f[a];)a++;return 0===a?1:(i=(r=l[a-1]).children,o=l[a],u=f[a],i.indexOf(o)>i.indexOf(u)?r===t?20:4:r===e?10:2)};t.uniqueSort=function(e){var t,r,i=e.length;for(e=e.slice();--i>-1;)t=e[i],(r=e.indexOf(t))>-1&&r<i&&e.splice(i,1);return e.sort((function(e,t){var r=n(e,t);return 2&r?-1:4&r?1:0})),e}},905:(e,t,n)=>{var r=n(403),i=t.isTag=r.isTag;t.testElement=function(e,t){for(var n in e)if(e.hasOwnProperty(n))if("tag_name"===n){if(!i(t)||!e.tag_name(t.name))return!1}else if("tag_type"===n){if(!e.tag_type(t.type))return!1}else if("tag_contains"===n){if(i(t)||!e.tag_contains(t.data))return!1}else if(!t.attribs||!e[n](t.attribs[n]))return!1;return!0};var o={tag_name:function(e){return"function"==typeof e?function(t){return i(t)&&e(t.name)}:"*"===e?i:function(t){return i(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof e?function(t){return!i(t)&&e(t.data)}:function(t){return!i(t)&&t.data===e}}};function u(e,t){return"function"==typeof t?function(n){return n.attribs&&t(n.attribs[e])}:function(n){return n.attribs&&n.attribs[e]===t}}function a(e,t){return function(n){return e(n)||t(n)}}t.getElements=function(e,t,n,r){var i=Object.keys(e).map((function(t){var n=e[t];return t in o?o[t](n):u(t,n)}));return 0===i.length?[]:this.filter(i.reduce(a),t,n,r)},t.getElementById=function(e,t,n){return Array.isArray(t)||(t=[t]),this.findOne(u("id",e),t,!1!==n)},t.getElementsByTagName=function(e,t,n,r){return this.filter(o.tag_name(e),t,n,r)},t.getElementsByTagType=function(e,t,n,r){return this.filter(o.tag_type(e),t,n,r)}},765:(e,t)=>{t.removeElement=function(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var t=e.parent.children;t.splice(t.lastIndexOf(e),1)}},t.replaceElement=function(e,t){var n=t.prev=e.prev;n&&(n.next=t);var r=t.next=e.next;r&&(r.prev=t);var i=t.parent=e.parent;if(i){var o=i.children;o[o.lastIndexOf(e)]=t}},t.appendChild=function(e,t){if(t.parent=e,1!==e.children.push(t)){var n=e.children[e.children.length-2];n.next=t,t.prev=n,t.next=null}},t.append=function(e,t){var n=e.parent,r=e.next;if(t.next=r,t.prev=e,e.next=t,t.parent=n,r){if(r.prev=t,n){var i=n.children;i.splice(i.lastIndexOf(r),0,t)}}else n&&n.children.push(t)},t.prepend=function(e,t){var n=e.parent;if(n){var r=n.children;r.splice(r.lastIndexOf(e),0,t)}e.prev&&(e.prev.next=t),t.parent=n,t.prev=e.prev,t.next=e,e.prev=t}},43:(e,t,n)=>{var r=n(403).isTag;function i(e,t,n,r){for(var o,u=[],a=0,l=t.length;a<l&&!(e(t[a])&&(u.push(t[a]),--r<=0))&&(o=t[a].children,!(n&&o&&o.length>0&&(o=i(e,o,n,r),u=u.concat(o),(r-=o.length)<=0)));a++);return u}e.exports={filter:function(e,t,n,r){return Array.isArray(t)||(t=[t]),"number"==typeof r&&isFinite(r)||(r=1/0),i(e,t,!1!==n,r)},find:i,findOneChild:function(e,t){for(var n=0,r=t.length;n<r;n++)if(e(t[n]))return t[n];return null},findOne:function e(t,n){for(var i=null,o=0,u=n.length;o<u&&!i;o++)r(n[o])&&(t(n[o])?i=n[o]:n[o].children.length>0&&(i=e(t,n[o].children)));return i},existsOne:function e(t,n){for(var i=0,o=n.length;i<o;i++)if(r(n[i])&&(t(n[i])||n[i].children.length>0&&e(t,n[i].children)))return!0;return!1},findAll:function(e,t){for(var n=[],i=t.slice();i.length;){var o=i.shift();r(o)&&(o.children&&o.children.length>0&&i.unshift.apply(i,o.children),e(o)&&n.push(o))}return n}}},346:(e,t,n)=>{var r=n(403),i=n(194),o=r.isTag;e.exports={getInnerHTML:function(e,t){return e.children?e.children.map((function(e){return i(e,t)})).join(""):""},getOuterHTML:i,getText:function e(t){return Array.isArray(t)?t.map(e).join(""):o(t)?"br"===t.name?"\n":e(t.children):t.type===r.CDATA?e(t.children):t.type===r.Text?t.data:""}}},10:(e,t)=>{var n=t.getChildren=function(e){return e.children},r=t.getParent=function(e){return e.parent};t.getSiblings=function(e){var t=r(e);return t?n(t):[e]},t.getAttributeValue=function(e,t){return e.attribs&&e.attribs[t]},t.hasAttrib=function(e,t){return!!e.attribs&&hasOwnProperty.call(e.attribs,t)},t.getName=function(e){return e.name}},194:e=>{"use strict";e.exports=require("dom-serializer")},403:e=>{"use strict";e.exports=require("domelementtype")}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(431)})();