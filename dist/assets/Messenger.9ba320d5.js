import{e,bE as i,an as w,a as y,n as k,k as R,aL as r,a_ as c,bS as b,d as C,a3 as o,E as x,aj as L,D as N,I as T,a8 as B,B as g,bv as D,aN as E,cG as F}from"./index.6a6408c4.js";const H=n=>e(i,{get children(){return n.content}}),W=n=>e(w,{get src(){return n.content}}),_={string:H,image:W},z=()=>{const n=y();k.info(n("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=b([]),s=async()=>{const t=await u();D(t,f=>{S(F($=>$.push(f)))})},v=async()=>{const t=await m();E(t)},I=setInterval(s,1e3);return C(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(L,N({get component(){return _[t.type]}},t))})]}}),e(T,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{z as Messenger,_ as Shower,z as default};
