!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,c,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(l){a=!0,c=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw c}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./index-legacy.010cd2de.js","./File-legacy.dbeff9ae.js","./icon-legacy.c526c8b0.js","./index-legacy.0e8f6fbe.js","./useTitle-legacy.316fd3c8.js","./Layout-legacy.68caf0b7.js","./index-legacy.d64a074d.js","./FolderTree-legacy.17187694.js","./index-legacy.070bbd26.js"],(function(n){"use strict";var r,t,c,o,i,a,l,u,f,s,d,g;return{setters:[function(e){r=e.d,t=e.r,c=e.a7,o=e.aH,i=e.c,a=e.as,l=e.G,u=e.dz,f=e.dA,s=e.a3,d=e.dy},function(e){g=e.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=r(),y=e(t(!1),2),h=y[0],m=y[1],p=e(t(!1),2),b=p[0],j=p[1],v=c().currentObjLink,w=o().copyCurrentRawLink;return i(g,{get children(){return i(a,{spacing:"$2",get children(){return[i(l,{as:"a",colorScheme:"warning",get href(){return"itms-services://?action=download-manifest&url="+"".concat(u,"/i/").concat(f(encodeURIComponent(s.raw_url)+"/"+d(encodeURIComponent(s.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return n("home.preview.".concat(h()?"installing":"install"))}}),i(l,{as:"a",colorScheme:"danger",get href(){return"apple-magnifier://install?url="+encodeURIComponent(v(!0))},onClick:function(){j(!0)},get children(){return n("home.preview.".concat(b()?"tr-installing":"tr-install"))}}),i(l,{colorScheme:"success",onClick:function(){return w(!0)},get children(){return n("home.toolbar.copy_link")}}),i(l,{as:"a",colorScheme:"accent",get href(){return s.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}})}})}))}}}))}();
