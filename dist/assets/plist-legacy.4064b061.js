!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,a,i=[],o=!0,u=!1;try{for(e=e.call(n);!(o=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==e.return||e.return()}finally{if(u)throw a}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.35aaad8d.js","./File-legacy.7a494722.js","./icon-legacy.acfa798b.js","./index-legacy.822dd194.js","./index-legacy.71a25f74.js","./Layout-legacy.39877597.js","./index-legacy.d0698e98.js","./FolderTree-legacy.f10aa77d.js","./index-legacy.f1b3093c.js"],(function(t){"use strict";var e,r,a,i,o,u;return{setters:[function(n){e=n.a,r=n.k,a=n.e,i=n.B,o=n.a0},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),c=n(r(!1),2),l=c[0],f=c[1];return a(u,{get children(){return a(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();