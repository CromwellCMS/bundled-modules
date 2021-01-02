module.exports._cromwell_core=(()=>{"use strict";var e={329:(e,t,o)=>{o.r(t);var r={};o.r(r),o.d(r,{BasePageNames:()=>a,BasePagePaths:()=>i,DBTableNames:()=>u,ECommonComponentNames:()=>d,GraphQLPaths:()=>c,apiV1BaseRoute:()=>f,currentApiVersion:()=>s,getBlockInstance:()=>U,getCmsSettings:()=>O,getPageCustomConfig:()=>b,getStore:()=>y,getStoreItem:()=>C,getThemeCustomConfig:()=>B,getThemeCustomConfigProp:()=>M,getThemeMainConfig:()=>S,isServer:()=>g,loadCommonComponent:()=>A,logFor:()=>P,logLevelMoreThan:()=>v,logLevels:()=>p,saveCommonComponent:()=>L,serviceLocator:()=>m,setStoreItem:()=>h});const n=require("tslib");var a,i,l;(l=a||(a={})).Index="index",l.Product="product",l.Blog="blog",l.ProductCategory="product_category",function(e){e.Index="/",e.Product="/product",e.Blog="/blog",e.ProductCategory="/category"}(i||(i={}));var d,c={Generic:{getOneBySlug:"getBySlug",getOneById:"getById",getMany:"getAll",getManyPaged:"getPaged",create:"create",update:"update",delete:"delete"},Post:{getOneBySlug:"post",getOneById:"getPostById",getMany:"posts",create:"createPost",update:"updatePost",delete:"deletePost"},Product:{getOneBySlug:"product",getOneById:"getProductById",getMany:"products",create:"createProduct",update:"updateProduct",delete:"deleteProduct",getFromCategory:"getProductsFromCategory"},ProductCategory:{getOneBySlug:"productCategory",getOneById:"getProductCategoryById",getMany:"productCategories",create:"createProductCategory",update:"updateProductCategory",delete:"deleteProductCategory"},Attribute:{getOneBySlug:"",getOneById:"getAttribute",getMany:"getAttributes",create:"createAttribute",update:"updateAttribute",delete:"deleteAttribute"},ProductReview:{getOneBySlug:"",getOneById:"getProductReview",getMany:"getProductReviews",create:"createProductReview",update:"updateProductReview",delete:"deleteProductReview",getFromProduct:"getProductReviewsOfProduct"}},u={Post:"post",Product:"product",ProductCategory:"product_category",Attribute:"attribute",ProductReview:"product_review",Generic:"_Generic"},g=function(){return"undefined"==typeof window},s="1.0.0",f="api/v1",m={getApiUrl:function(){var e,t=O();if(!t)throw new Error("core:serviceLocator:getApiUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain;if(!t.apiPort)throw new Error("core:serviceLocator:getApiUrl !apiPort");return o+"://localhost:"+t.apiPort},getApiWsUrl:function(){var e=O();if(!e)throw new Error("core:serviceLocator:getApiUrl !cmsConfig");if(e.domain&&"localhost"!==e.domain)return"ws://"+e.domain;if(!e.apiPort)throw new Error("core:serviceLocator:getApiWsUrl !apiPort");return"ws://localhost:"+e.apiPort},getManagerUrl:function(){var e,t=O();if(!t)throw new Error("core:serviceLocator:getManagerUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain;if(!t.managerPort)throw new Error("core:serviceLocator:getApiUrl !apiPort");return o+"://localhost:"+t.managerPort},getManagerWsUrl:function(){var e=O();if(!e)throw new Error("core:serviceLocator:getManagerWS !cmsConfig");if(!e.managerPort)throw new Error("core:serviceLocator:getApiUrl !apiPort");return"ws://localhost:"+e.managerPort},getFrontendUrl:function(){var e,t=O();if(!t)throw new Error("core:serviceLocator:getFrontendUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain;if(!t.frontendPort)throw new Error("core:serviceLocator:getFrontendUrl !frontendPort");return o+"://localhost:"+t.frontendPort},getAdminPanelUrl:function(){var e,t=O();if(!t)throw new Error("core:serviceLocator:getAdminPanelUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain+"/admin";if(!t.adminPanelPort)throw new Error("core:serviceLocator:getAdminPanelUrl !adminPanelPort");return o+"://localhost:"+t.adminPanelPort}};!function(e){e.ProductCard="ProductCard",e.Post="Post"}(d||(d={}));var p=["none","errors-only","errors-warnings","minimal","detailed","all"],v=function(e){var t,o,r=null!==(o=null===(t=C("environment"))||void 0===t?void 0:t.logLevel)&&void 0!==o?o:"errors-only",n=p.indexOf(r),a=p.indexOf(e);return n>=0&&a>=0&&n>=a},P=function(e,t,o){v(e)&&(o?o(t):console.log(t))},w={};g()?global.CromwellStore||(global.CromwellStore=w):window.CromwellStore||(window.CromwellStore=w);var y=function(){return g()?global.CromwellStore:window.CromwellStore},C=function(e){return y()[e]},h=function(e,t){y()[e]=t},b=function(){var e;return null===(e=y().pageConfig)||void 0===e?void 0:e.pageCustomConfig},S=function(){var e;return null===(e=y())||void 0===e?void 0:e.themeMainConfig},O=function(){var e;return null===(e=y())||void 0===e?void 0:e.cmsSettings},B=function(){var e;return null===(e=y())||void 0===e?void 0:e.themeCustomConfig},M=function(e){var t=function(e,o){if(e&&e[o[0]]){if(1===o.length)return e[o[0]];var r=(0,n.__spreadArrays)(o);return r.shift(),t(e[o[0]],r)}};return t(B(),e.split("/"))},A=function(e){var t=y().components;return t?t[e]:void 0},L=function(e,t){var o=y().components;o||(o={},y().components=o),o[e]=t},U=function(e){var t=y().blockInstances;if(t)return t[e]};const I="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);I.nodeModules.imports||(I.nodeModules.imports={}),I.nodeModules.modules||(I.nodeModules.modules={}),I.nodeModules.modules["@cromwell/core"]||(I.nodeModules.modules["@cromwell/core"]=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(r))}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(329)})();