(self.webpackChunk_material_ui_core=self.webpackChunk_material_ui_core||[]).push([[3564],{3564:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});const n=i(7148).yJ},9700:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n=(0,i(3633).Z)()},8920:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var n=i(563),r=(i(2030),i(9700));function u(){return(0,n.useTheme)()||r.Z}},3457:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var n=i(2122),r=i(2030),u=i(563);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,u.useTheme)(),d=(0,u.getThemeProps)({theme:i,name:"MuiUseMediaQuery",props:{}}),a="function"==typeof e?e(i):e;a=a.replace(/^@media( ?)/m,"");var o="undefined"!=typeof window&&void 0!==window.matchMedia,s=(0,n.Z)({},d,t),c=s.defaultMatches,f=void 0!==c&&c,h=s.matchMedia,v=void 0===h?o?window.matchMedia:null:h,l=s.noSsr,m=void 0!==l&&l,p=s.ssrMatchMedia,w=void 0===p?null:p,Z=r.useState((function(){return m&&o?v(a).matches:w?w(a).matches:f})),M=Z[0],x=Z[1];return r.useEffect((function(){var e=!0;if(o){var t=v(a),i=function(){e&&x(t.matches)};return i(),t.addListener(i),function(){e=!1,t.removeListener(i)}}}),[a,v,o]),M}},7148:(e,t,i)=>{"use strict";i.d(t,{yJ:()=>h,Vf:()=>v,ZP:()=>m});var n=i(2122),r=i(7375),u=i(2030),d=(i(8953),i(8192),i(563)),a=i(7635),o=i.n(a),s=i(8920),c=i(157),f=i(3457),h=function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i?c.X.indexOf(e)<=c.X.indexOf(t):c.X.indexOf(e)<c.X.indexOf(t)},v=function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i?c.X.indexOf(t)<=c.X.indexOf(e):c.X.indexOf(t)<c.X.indexOf(e)},l="undefined"==typeof window?u.useEffect:u.useLayoutEffect;const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var i=e.withTheme,a=void 0!==i&&i,c=e.noSSR,h=void 0!==c&&c,v=e.initialWidth;function m(e){var i=(0,s.Z)(),o=e.theme||i,c=(0,d.getThemeProps)({theme:o,name:"MuiWithWidth",props:(0,n.Z)({},e)}),m=c.initialWidth,p=c.width,w=(0,r.Z)(c,["initialWidth","width"]),Z=u.useState(!1),M=Z[0],x=Z[1];l((function(){x(!0)}),[]);var y=o.breakpoints.keys.slice().reverse().reduce((function(e,t){var i=(0,f.Z)(o.breakpoints.up(t));return!e&&i?t:e}),null),O=(0,n.Z)({width:p||(M||h?y:void 0)||m||v},a?{theme:o}:{},w);return void 0===O.width?null:u.createElement(t,O)}return o()(m,t),m}}}}]);