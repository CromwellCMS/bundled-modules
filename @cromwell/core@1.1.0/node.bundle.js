module.exports._cromwell_core=(()=>{"use strict";var e={652:(e,t,o)=>{o.r(t);var r={};o.r(r),o.d(r,{BasePageNames:()=>a,BasePagePaths:()=>i,DBTableNames:()=>c,ECommonComponentNames:()=>l,GraphQLPaths:()=>d,apiV1BaseRoute:()=>s,currentApiVersion:()=>g,getBlockInstance:()=>L,getCmsSettings:()=>S,getPageCustomConfig:()=>h,getStore:()=>w,getStoreItem:()=>y,getThemeCustomConfig:()=>O,getThemeCustomConfigProp:()=>B,getThemeMainConfig:()=>b,isServer:()=>u,loadCommonComponent:()=>M,logFor:()=>v,logLevelMoreThan:()=>p,logLevels:()=>m,saveCommonComponent:()=>A,serviceLocator:()=>f,setStoreItem:()=>C});const n=require("tslib");var a,i;!function(e){e.Index="index",e.Product="product",e.Blog="blog",e.ProductCategory="product_category"}(a||(a={})),function(e){e.Index="/",e.Product="/product",e.Blog="/blog",e.ProductCategory="/category"}(i||(i={}));var l,d={Generic:{getOneBySlug:"getBySlug",getOneById:"getById",getMany:"getAll",getManyPaged:"getPaged",create:"create",update:"update",delete:"delete"},Post:{getOneBySlug:"post",getOneById:"getPostById",getMany:"posts",create:"createPost",update:"updatePost",delete:"deletePost"},Product:{getOneBySlug:"product",getOneById:"getProductById",getMany:"products",create:"createProduct",update:"updateProduct",delete:"deleteProduct",getFromCategory:"getProductsFromCategory"},ProductCategory:{getOneBySlug:"productCategory",getOneById:"getProductCategoryById",getMany:"productCategories",create:"createProductCategory",update:"updateProductCategory",delete:"deleteProductCategory"},Attribute:{getOneBySlug:"",getOneById:"getAttribute",getMany:"getAttributes",create:"createAttribute",update:"updateAttribute",delete:"deleteAttribute"},ProductReview:{getOneBySlug:"",getOneById:"getProductReview",getMany:"getProductReviews",create:"createProductReview",update:"updateProductReview",delete:"deleteProductReview",getFromProduct:"getProductReviewsOfProduct"}},c={Post:"post",Product:"product",ProductCategory:"product_category",Attribute:"attribute",ProductReview:"product_review",Generic:"_Generic"},u=function(){return"undefined"==typeof window},g="1.0.0",s="api/v1",f={getApiUrl:function(){var e,t=S();if(!t)throw new Error("core:serviceLocator:getApiUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain;if(!t.apiPort)throw new Error("core:serviceLocator:getApiUrl !apiPort");return o+"://localhost:"+t.apiPort},getApiWsUrl:function(){var e=S();if(!e)throw new Error("core:serviceLocator:getApiUrl !cmsConfig");if(e.domain&&"localhost"!==e.domain)return"ws://"+e.domain;if(!e.apiPort)throw new Error("core:serviceLocator:getApiWsUrl !apiPort");return"ws://localhost:"+e.apiPort},getManagerUrl:function(){var e,t=S();if(!t)throw new Error("core:serviceLocator:getManagerUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain;if(!t.managerPort)throw new Error("core:serviceLocator:getApiUrl !apiPort");return o+"://localhost:"+t.managerPort},getManagerWsUrl:function(){var e=S();if(!e)throw new Error("core:serviceLocator:getManagerWS !cmsConfig");if(!e.managerPort)throw new Error("core:serviceLocator:getApiUrl !apiPort");return"ws://localhost:"+e.managerPort},getFrontendUrl:function(){var e,t=S();if(!t)throw new Error("core:serviceLocator:getFrontendUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain;if(!t.frontendPort)throw new Error("core:serviceLocator:getFrontendUrl !frontendPort");return o+"://localhost:"+t.frontendPort},getAdminPanelUrl:function(){var e,t=S();if(!t)throw new Error("core:serviceLocator:getAdminPanelUrl !cmsConfig");var o=null!==(e=t.protocol)&&void 0!==e?e:"http";if(t.domain&&"localhost"!==t.domain)return o+"://"+t.domain+"/admin";if(!t.adminPanelPort)throw new Error("core:serviceLocator:getAdminPanelUrl !adminPanelPort");return o+"://localhost:"+t.adminPanelPort}};!function(e){e.ProductCard="ProductCard",e.Post="Post"}(l||(l={}));var m=["none","errors-only","errors-warnings","minimal","detailed","all"],p=function(e){var t,o,r=null!==(o=null===(t=y("environment"))||void 0===t?void 0:t.logLevel)&&void 0!==o?o:"errors-only",n=m.indexOf(r),a=m.indexOf(e);return n>=0&&a>=0&&n>=a},v=function(e,t,o){p(e)&&(o?o(t):console.log(t))},P={};u()?global.CromwellStore||(global.CromwellStore=P):window.CromwellStore||(window.CromwellStore=P);var w=function(){return u()?global.CromwellStore:window.CromwellStore},y=function(e){return w()[e]},C=function(e,t){w()[e]=t},h=function(){var e;return null===(e=w().pageConfig)||void 0===e?void 0:e.pageCustomConfig},b=function(){var e;return null===(e=w())||void 0===e?void 0:e.themeMainConfig},S=function(){var e;return null===(e=w())||void 0===e?void 0:e.cmsSettings},O=function(){var e;return null===(e=w())||void 0===e?void 0:e.themeCustomConfig},B=function(e){var t=function(e,o){if(e&&e[o[0]]){if(1===o.length)return e[o[0]];var r=(0,n.__spreadArrays)(o);return r.shift(),t(e[o[0]],r)}};return t(O(),e.split("/"))},M=function(e){var t=w().components;return t?t[e]:void 0},A=function(e,t){var o=w().components;o||(o={},w().components=o),o[e]=t},L=function(e){var t=w().blockInstances;if(t)return t[e]};const U="undefined"==typeof window?(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore):(window.CromwellStore||(window.CromwellStore={}),window.CromwellStore);U.nodeModules.imports||(U.nodeModules.imports={}),U.nodeModules.modules||(U.nodeModules.modules={}),U.nodeModules.modules["@cromwell/core"]||(U.nodeModules.modules["@cromwell/core"]=((e,t)=>{if(e&&"object"==typeof e&&"default"in e&&("object"==typeof e.default||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e})(r))}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(652)})();