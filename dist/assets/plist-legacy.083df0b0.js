!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,c=[],a=!0,o=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(u){o=!0,i=u}finally{try{a||null==e.return||e.return()}finally{if(o)throw i}}return c}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.5dac1f7b.js","./File-legacy.12b30a5a.js","./icon-legacy.d03451e2.js","./index-legacy.31178290.js","./index-legacy.fe9fb9fb.js","./Layout-legacy.3b58b5c2.js","./index-legacy.21dff451.js","./FolderTree-legacy.887fa1ad.js","./index-legacy.cdcb6dfc.js"],(function(t){"use strict";var e,r,i,c,a,o;return{setters:[function(n){e=n.d,r=n.q,i=n.c,c=n.E,a=n.a2},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return i(o,{get children(){return i(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();