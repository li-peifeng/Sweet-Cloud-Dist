System.register(["./index-legacy.1ef69201.js"],(function(e){"use strict";var t,r,n,o,a,c,i,s;return{setters:[e=>{t=e.e,r=e.aW,n=e.b9,o=e._,a=e.c,c=e.a9,i=e.aa,s=e.ba}],execute:function(){e("default",(()=>{const{pathname:e}=t(),[u,f]=r((()=>n.post("/fs/other",{path:e(),password:o(),method:"doc_preview"})));return(async()=>{const e=await f();s(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),a(i,{get loading(){return u()},get children(){return a(c,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
