!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,c=[],o=!0,u=!1;try{for(e=e.call(n);!(o=(r=e.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(a){u=!0,i=a}finally{try{o||null==e.return||e.return()}finally{if(u)throw i}}return c}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.010cd2de.js","./File-legacy.dbeff9ae.js","./icon-legacy.c526c8b0.js","./index-legacy.0e8f6fbe.js","./useTitle-legacy.316fd3c8.js","./Layout-legacy.68caf0b7.js","./index-legacy.d64a074d.js","./FolderTree-legacy.17187694.js","./index-legacy.070bbd26.js"],(function(t){"use strict";var e,r,i,c,o,u;return{setters:[function(n){e=n.d,r=n.r,i=n.c,c=n.G,o=n.a3},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),a=n(r(!1),2),l=a[0],f=a[1];return i(u,{get children(){return i(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
