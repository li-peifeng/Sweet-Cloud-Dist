!function(){function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,u,i=[],o=!0,l=!1;try{for(n=n.call(r);!(o=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);o=!0);}catch(c){l=!0,u=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw u}}return i}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}System.register(["./index-legacy.608d7cd5.js"],(function(t){"use strict";var n,e,u,i,o,l,c,a,f;return{setters:[function(r){n=r.cO,e=r.e,u=r.cp,i=r.k,o=r.cP,l=r.c7,c=r.S,a=r.cQ,f=r.cc}],execute:function(){function d(t){var n=r(i("utf-8"),2),u=n[0],d=n[1],s=o(t.children),g=s.isString,h=s.text;return e(f,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(l.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return h(u())}}),e(c,{when:!g,get children(){return e(a,{get encoding(){return u()},setEncoding:d})}})]}})}t("default",(function(){var t=r(n(),1)[0];return e(u,{get loading(){return t.loading},get children(){return e(d,{get children(){var r;return null===(r=t())||void 0===r?void 0:r.content}})}})}))}}}))}();