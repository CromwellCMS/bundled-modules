var domhandler;domhandler=(()=>{var t={725:(t,e,n)=>{"use strict";var o=n(753);const r="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);r.nodeModules.imports||(r.nodeModules.imports={}),r.nodeModules.modules||(r.nodeModules.modules={}),r.nodeModules.modules.domhandler||(r.nodeModules.modules.domhandler=((t,e)=>{if(t&&"object"==typeof t&&"default"in t&&("object"==typeof t.default||"function"==typeof t.default)){if(1===Object.keys(t).length)return t.default;if("default"in t.default&&Object.keys(t).length===Object.keys(t.default).length)return t.default;if(Object.keys(t).length===Object.keys(t.default).length+1)return t.default}return t})(o))},753:(t,e,n)=>{var o=n(937),r=/\s+/g,a=n(790),i=n(407);function l(t,e,n){"object"==typeof t?(n=e,e=t,t=null):"function"==typeof e&&(n=e,e=s),this._callback=t,this._options=e||s,this._elementCB=n,this.dom=[],this._done=!1,this._tagStack=[],this._parser=this._parser||null}var s={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1};l.prototype.onparserinit=function(t){this._parser=t},l.prototype.onreset=function(){l.call(this,this._callback,this._options,this._elementCB)},l.prototype.onend=function(){this._done||(this._done=!0,this._parser=null,this._handleCallback(null))},l.prototype._handleCallback=l.prototype.onerror=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},l.prototype.onclosetag=function(){var t=this._tagStack.pop();this._options.withEndIndices&&t&&(t.endIndex=this._parser.endIndex),this._elementCB&&this._elementCB(t)},l.prototype._createDomElement=function(t){if(!this._options.withDomLvl1)return t;var e;for(var n in e="tag"===t.type?Object.create(i):Object.create(a),t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},l.prototype._addDomElement=function(t){var e=this._tagStack[this._tagStack.length-1],n=e?e.children:this.dom,o=n[n.length-1];t.next=null,this._options.withStartIndices&&(t.startIndex=this._parser.startIndex),this._options.withEndIndices&&(t.endIndex=this._parser.endIndex),o?(t.prev=o,o.next=t):t.prev=null,n.push(t),t.parent=e||null},l.prototype.onopentag=function(t,e){var n={type:"script"===t?o.Script:"style"===t?o.Style:o.Tag,name:t,attribs:e,children:[]},r=this._createDomElement(n);this._addDomElement(r),this._tagStack.push(r)},l.prototype.ontext=function(t){var e,n=this._options.normalizeWhitespace||this._options.ignoreWhitespace;if(!this._tagStack.length&&this.dom.length&&(e=this.dom[this.dom.length-1]).type===o.Text)n?e.data=(e.data+t).replace(r," "):e.data+=t;else if(this._tagStack.length&&(e=this._tagStack[this._tagStack.length-1])&&(e=e.children[e.children.length-1])&&e.type===o.Text)n?e.data=(e.data+t).replace(r," "):e.data+=t;else{n&&(t=t.replace(r," "));var a=this._createDomElement({data:t,type:o.Text});this._addDomElement(a)}},l.prototype.oncomment=function(t){var e=this._tagStack[this._tagStack.length-1];if(e&&e.type===o.Comment)e.data+=t;else{var n={data:t,type:o.Comment},r=this._createDomElement(n);this._addDomElement(r),this._tagStack.push(r)}},l.prototype.oncdatastart=function(){var t={children:[{data:"",type:o.Text}],type:o.CDATA},e=this._createDomElement(t);this._addDomElement(e),this._tagStack.push(e)},l.prototype.oncommentend=l.prototype.oncdataend=function(){this._tagStack.pop()},l.prototype.onprocessinginstruction=function(t,e){var n=this._createDomElement({name:t,data:e,type:o.Directive});this._addDomElement(n)},t.exports=l},407:(t,e,n)=>{var o=n(790),r=t.exports=Object.create(o),a={tagName:"name"};Object.keys(a).forEach((function(t){var e=a[t];Object.defineProperty(r,t,{get:function(){return this[e]||null},set:function(t){return this[e]=t,t}})}))},790:t=>{var e=t.exports={get firstChild(){var t=this.children;return t&&t[0]||null},get lastChild(){var t=this.children;return t&&t[t.length-1]||null},get nodeType(){return o[this.type]||o.element}},n={tagName:"name",childNodes:"children",parentNode:"parent",previousSibling:"prev",nextSibling:"next",nodeValue:"data"},o={element:1,text:3,cdata:4,comment:8};Object.keys(n).forEach((function(t){var o=n[t];Object.defineProperty(e,t,{get:function(){return this[o]||null},set:function(t){return this[o]=t,t}})}))},937:t=>{"use strict";t.exports=CromwellStore.nodeModules.modules.domelementtype}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(725)})().default;