System.register(["./index-legacy.479435ca.js","./index-legacy.ae5307c5.js","./item_type-legacy.d1f1c701.js","./index-legacy.05b1e73f.js"],(function(e,r){"use strict";var t,n,u,g,l,i,a,c,d,h,o,s,y,b,f,p,k,v,m,x,C,w,D,O,E,T,$,A;return{setters:[e=>{t=e.d,n=e.c,u=e.S,g=e.be,l=e.x,i=e.I,a=e.U,c=e.ar,d=e.V,h=e.t,o=e.bq,s=e.T,y=e.bg,b=e.bh,f=e.bi,p=e.bj,k=e.bk,v=e.bl,m=e.bm,x=e.z,C=e.bn,w=e.bo,D=e.bp,O=e.F,E=e.br},e=>{T=e.F},e=>{$=e.T},e=>{A=e.l}],execute:function(){e("I",(e=>{const r=t();return n(E,{get w(){return e.w??"100%"},display:"flex",flexDirection:"column",get children(){return[n(u,{get when(){return!e.hideLabel},get children(){return n(g,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[l((()=>r(`settings.${e.key}`))),n(u,{get when(){return e.flag===T.DEPRECATED},get children(){return n(i,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{e.onDelete?.()}})}})]}})}}),n(a,{get fallback(){return n(c,{get children(){return r("settings_other.unknown_type")}})},get children(){return[n(d,{get when(){return[$.String,$.Number].includes(e.type)},get children(){return n(h,{get type(){return e.type===$.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:r=>e.onChange?.(r.currentTarget.value),get readOnly(){return e.flag===T.READONLY}})}}),n(d,{get when(){return e.type===$.Bool},get children(){return n(o,{get id(){return e.key},get defaultChecked(){return"true"===e.value},onChange:r=>e.onChange?.(r.currentTarget.checked?"true":"false"),get readOnly(){return e.flag===T.READONLY}})}}),n(d,{get when(){return e.type===$.Text},get children(){return n(s,{get id(){return e.key},get value(){return e.value},onChange:r=>e.onChange?.(r.currentTarget.value),get readOnly(){return e.flag===T.READONLY}})}}),n(d,{get when(){return e.type===$.Select},get children(){return n(y,{get id(){return e.key},get defaultValue(){return e.value},onChange:r=>e.onChange?.(r),get readOnly(){return e.flag===T.READONLY},get children(){return[n(b,{get children(){return[n(f,{get children(){return r("global.choose")}}),n(p,{}),n(k,{})]}}),n(v,{get children(){return n(m,{get children(){return n(x,{get each(){return e.options?.split(",")},children:t=>n(C,{value:t,get children(){return[n(w,{get children(){return r(`settings.${e.key}s.${t}`)}}),n(D,{})]}})})}})}})]}})}})]}}),n(O,{get children(){return l((()=>!!e.help))()?r(`settings.${e.key}-tips`):""}})]}})}))}}}));
