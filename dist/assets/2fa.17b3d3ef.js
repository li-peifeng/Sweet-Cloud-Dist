import{e as v,aP as c,b2 as u,d as w,j as i,c as t,S as x,Z as S,bG as g,ao as _,x as $,a_ as k,ab as C,t as I,B as M,a2 as R,an as d,n as T,b3 as D,aR as F,cV as L}from"./index.d735fbfd.js";const A=()=>{const{back:n}=v(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,h]=i(),f=async()=>{if(d().otp){T.warning(a("users.2fa_already_enabled")),n();return}const e=await p();D(e,h)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();F(e,()=>{L({...d(),otp:!0}),n()})};return t(R,{get loading(){return l()},get children(){return t(x,{get when(){return r()},get children(){return t(S,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(_,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[$(()=>a("users.or_manual")),":"," ",t(k,{get color(){return C()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t(I,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(M,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{A as default};
