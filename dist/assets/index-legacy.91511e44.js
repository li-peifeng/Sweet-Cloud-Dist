System.register(["./index-legacy.1ef69201.js"],(function(e){"use strict";var t,n,r,u,i,l,o,s;return{setters:[e=>{t=e.j,n=e.dh,r=e.di,u=e.z,i=e.v,l=e.q,o=e.r,s=e.k}],execute:function(){e({a:function(e,t,n={}){if(!e.length)return;e=e.map((e=>e.toUpperCase()));const{preventDefault:r=!0}=n,l=p(),o=v();let s=!1;u(i(o,n.requireReset?n=>{if(!n.length)return s=!1;if(s)return;const u=l();n.length<e.length?g(n,e.slice(0,n.length))?r&&u&&u.preventDefault():s=!0:(s=!0,g(n,e)&&(r&&u&&u.preventDefault(),t(u)))}:n=>{const u=n.at(-1);if(!u)return;const i=l();if(r&&u.length<e.length)f(u,e.slice(0,e.length-1))&&i&&i.preventDefault();else if(f(u,e)){const u=n.at(-2);u&&!f(u,e.slice(0,e.length-1))||(r&&i&&i.preventDefault(),t(i))}}))},c:function(e,t={}){e=e.toUpperCase();const{preventDefault:n=!0}=t,r=p(),u=y();return l((()=>u()===e&&(n&&r()?.preventDefault(),!0)))}});var f=(e,t)=>e===t||e.length===t.length&&e.every(((e,n)=>e===t[n])),c=t;function a(e,t,n,r){return e.addEventListener(t,n,r),c(e.removeEventListener.bind(e,t,n,r))}function h(e,u=r()){let i,l,o=0;return()=>(o++,t((()=>{o--,queueMicrotask((()=>{!o&&l&&(l(),l=i=void 0)}))})),l||n((t=>i=e(l=t)),u),i)}function g(e,t){for(let n=e.length-1;n>=0;n--){const r=t.slice(0,n+1);if(!f(e[n],r))return!1}return!0}var p=h((()=>{const[e,t]=o(null);return a(window,"keydown",(e=>{t(e),setTimeout((()=>t(null)))})),e})),d=h((()=>{const[e,t]=o([]),n=()=>t([]),r=p();return a(window,"keydown",(n=>{if(n.repeat||"string"!=typeof n.key)return;const r=n.key.toUpperCase(),u=e();if(u.includes(r))return;const i=[...u,r];0===u.length&&"ALT"!==r&&"CONTROL"!==r&&"META"!==r&&"SHIFT"!==r&&(n.shiftKey&&i.unshift("SHIFT"),n.altKey&&i.unshift("ALT"),n.ctrlKey&&i.unshift("CONTROL"),n.metaKey&&i.unshift("META")),t(i)})),a(window,"keyup",(e=>{if("string"!=typeof e.key)return;const n=e.key.toUpperCase();t((e=>e.filter((e=>e!==n))))})),a(window,"blur",n),a(window,"contextmenu",(e=>{e.defaultPrevented||n()})),e[0]=e,e[1]={event:r},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e})),y=h((()=>{const e=d();let t=s(e);return l((()=>{const n=e(),r=t;return t=n,0===r.length&&1===n.length?n[0]:null}))})),v=h((()=>{const e=d();return l((t=>0===e().length?[]:[...t,e()]),[])}))}}}));
