!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.010cd2de.js","./useTitle-legacy.316fd3c8.js","./helper-legacy.9412139d.js","./Paginator-legacy.c65e775e.js","./index-legacy.0e8f6fbe.js"],(function(t){"use strict";var n,r,c,u,a;return{setters:[function(e){n=e.d,r=e.c},function(e){c=e.g},function(e){u=e.b,a=e.T},function(){},function(){}],execute:function(){t("default",(function(){var t=n();return c("manage.sidemenu.copy"),r(a,{type:"copy",canRetry:!0,get nameAnalyzer(){var n;return{regex:/^copy \[(.+)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,title:function(e){return e[3]},attrs:(n={},e(n,t("tasks.attr.copy.src"),(function(e){return u(e[1],e[2])})),e(n,t("tasks.attr.copy.dst"),(function(e){return u(e[4],e[5])})),n)}}})}))}}}))}();
