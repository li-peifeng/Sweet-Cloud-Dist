!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){a=!0,c=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.608d7cd5.js","./File-legacy.5c558782.js","./icon-legacy.74c24be9.js","./index-legacy.6938dd5a.js","./index-legacy.fc931661.js","./Layout-legacy.ec00d9b9.js","./index-legacy.65bd675f.js","./FolderTree-legacy.1f5cbf74.js","./index-legacy.8bbea438.js"],(function(e){"use strict";var t,r,c,i,o,a,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.k,c=n.c2,i=n.e,o=n.a8,a=n.B,l=n.cX,u=n.cY,f=n.a0,s=n.cW},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],p=n(r(!1),2),h=p[0],b=p[1],j=c().currentObjLink;return i(d,{get children(){return i(o,{spacing:"$2",get children(){return[i(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),i(a,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(h()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();