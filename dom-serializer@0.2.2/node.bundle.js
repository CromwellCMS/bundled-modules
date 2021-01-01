module.exports.dom_serializer=(()=>{var e={853:(e,t,n)=>{"use strict";n.r(t);var r=n(138);const a="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);a.nodeModules.imports||(a.nodeModules.imports={}),a.nodeModules.modules||(a.nodeModules.modules={}),a.nodeModules.modules["dom-serializer"]||(a.nodeModules.modules["dom-serializer"]=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(r))},237:e=>{"use strict";e.exports=JSON.parse('{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}')},138:(e,t,n)=>{var r=n(403),a=n(846),i=n(237);i.elementNames.__proto__=null,i.attributeNames.__proto__=null;var o={__proto__:null,style:!0,script:!0,xmp:!0,iframe:!0,noembed:!0,noframes:!0,plaintext:!0,noscript:!0},l={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},s=e.exports=function(e,t){Array.isArray(e)||e.cheerio||(e=[e]),t=t||{};for(var n="",a=0;a<e.length;a++){var i=e[a];"root"===i.type?n+=s(i.children,t):r.isTag(i)?n+=u(i,t):i.type===r.Directive?n+=d(i):i.type===r.Comment?n+=c(i):i.type===r.CDATA?n+=p(i):n+=m(i,t)}return n},f=["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"];function u(e,t){"foreign"===t.xmlMode&&(e.name=i.elementNames[e.name]||e.name,e.parent&&f.indexOf(e.parent.name)>=0&&(t=Object.assign({},t,{xmlMode:!1}))),!t.xmlMode&&["svg","math"].indexOf(e.name)>=0&&(t=Object.assign({},t,{xmlMode:"foreign"}));var n="<"+e.name,r=function(e,t){if(e){var n,r="";for(var o in e)n=e[o],r&&(r+=" "),"foreign"===t.xmlMode&&(o=i.attributeNames[o]||o),r+=o,(null!==n&&""!==n||t.xmlMode)&&(r+='="'+(t.decodeEntities?a.encodeXML(n):n.replace(/\"/g,"&quot;"))+'"');return r}}(e.attribs,t);return r&&(n+=" "+r),!t.xmlMode||e.children&&0!==e.children.length?(n+=">",e.children&&(n+=s(e.children,t)),l[e.name]&&!t.xmlMode||(n+="</"+e.name+">")):n+="/>",n}function d(e){return"<"+e.data+">"}function m(e,t){var n=e.data||"";return!t.decodeEntities||e.parent&&e.parent.name in o||(n=a.encodeXML(n)),n}function p(e){return"<![CDATA["+e.children[0].data+"]]>"}function c(e){return"\x3c!--"+e.data+"--\x3e"}},403:e=>{"use strict";e.exports=require("domelementtype")},846:e=>{"use strict";e.exports=require("entities")}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(853)})();