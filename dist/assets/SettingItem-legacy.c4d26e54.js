!function(){function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy.4a473c52.js","./index-legacy.ce4356ff.js","./item_type-legacy.d1f1c701.js","./index-legacy.df065ff6.js"],(function(r){"use strict";var n,t,u,l,i,c,a,o,g,d,f,h,v,b,y,s,p,m,O,k,w,C,j,x,D,E,S,T;return{setters:[function(e){n=e.d,t=e.c,u=e.S,l=e.be,i=e.aH,c=e.I,a=e.a0,o=e.as,g=e.a1,d=e.C,f=e.bq,h=e.T,v=e.bg,b=e.bh,y=e.bi,s=e.bj,p=e.bk,m=e.bl,O=e.bm,k=e.J,w=e.bn,C=e.bo,j=e.bp,x=e.F,D=e.br},function(e){E=e.F},function(e){S=e.T},function(e){T=e.l}],execute:function(){r("I",(function(r){var A=n();return t(D,{get w(){var e;return null!==(e=r.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[t(u,{get when(){return!r.hideLabel},get children(){var n,a;return t(l,(n={},"for",(a={}).for=a.for||{},a.for.get=function(){return r.key},e(n,"display","flex"),e(n,"alignItems","center"),"children",a.children=a.children||{},a.children.get=function(){return[i((function(){return A("settings.".concat(r.key))})),t(u,{get when(){return r.flag===E.DEPRECATED},get children(){return t(c,{ml:"$2",as:T,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},function(e,r){for(var n in r)(l=r[n]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(r),u=0;u<t.length;u++){var l,i=t[u];(l=r[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(n,a),n))}}),t(a,{get fallback(){return t(o,{get children(){return A("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[S.String,S.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===S.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===S.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===S.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===S.Select},get children(){return t(v,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===E.READONLY},get children(){return[t(b,{get children(){return[t(y,{get children(){return A("global.choose")}}),t(s,{}),t(p,{})]}}),t(m,{get children(){return t(O,{get children(){return t(k,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(w,{value:e,get children(){return[t(C,{get children(){return A("settings.".concat(r.key,"s.").concat(e))}}),t(j,{})]}})}})}})}})]}})}})]}}),t(x,{get children(){return i((function(){return!!r.help}),!0)()?A("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();