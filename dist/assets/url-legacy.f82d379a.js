!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(l){c=!0,i=l}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.6da7ff4f.js","./File-legacy.7f2e00fd.js","./icon-legacy.1b09277f.js","./index-legacy.778830f0.js","./useTitle-legacy.598555b9.js","./Layout-legacy.05e62e5c.js","./index-legacy.49e61b65.js","./FolderTree-legacy.73e9e362.js","./index-legacy.992a95b3.js"],(function(e){"use strict";var t,r,i,o,u,c,l,a;return{setters:[function(n){t=n.dk,r=n.z,i=n.d,o=n.c,u=n.G,c=n.aa,l=n.dl},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=l(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var d=i();return o(c,{get loading(){return e.loading},get children(){return o(a,{get children(){return o(u,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
