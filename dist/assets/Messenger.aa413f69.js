import{e,bK as i,an as w,a as y,n as R,k as b,aR as r,b4 as c,bX as k,d as C,a3 as o,E as T,aj as x,D as B,I as D,a8 as F,B as g,bB as H,aT as K,cK as L}from"./index.e030e235.js";const N=n=>e(i,{get children(){return n.content}}),W=n=>e(w,{get src(){return n.content}}),j={string:N,image:W},E=()=>{const n=y();R.info(n("manage.messenger-tips"));const[a,l]=b(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=k([]),s=async()=>{const t=await u();H(t,f=>{S(L($=>$.push(f)))})},v=async()=>{const t=await m();K(t)},I=setInterval(s,1e3);return C(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(T,{each:h,children:t=>e(x,B({get component(){return j[t.type]}},t))})]}}),e(D,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{E as Messenger,j as Shower,E as default};