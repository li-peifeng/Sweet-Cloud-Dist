System.register(["./index-legacy-e34080e6.js"],(function(e,n){"use strict";var t,r,a,s,c,g,i,l,o,u,d,m,h,p,v,$,f,y,w,x;return{setters:[e=>{t=e.c,r=e.bG,a=e.ao,s=e.d,c=e.n,g=e.j,i=e.aP,l=e.b2,o=e.c5,u=e.o,d=e.Z,m=e.z,h=e.ah,p=e.y,v=e.t,$=e.al,f=e.B,y=e.bx,w=e.aR,x=e.dg}],execute:function(){const n=e("Shower",{string:e=>t(r,{get children(){return e.content}}),image:e=>t(a,{get src(){return e.content}})}),I=()=>{const e=s();c.info(e("manage.messenger-tips"));const[a,I]=g(""),[b,S]=i((()=>l.post("/admin/message/get"))),[j,k]=i((()=>l.post("/admin/message/send",{message:a()}))),[z,C]=o([]),B=async()=>{const e=await S();y(e,(e=>{C(x((n=>n.push(e))))}))},G=async()=>{const e=await k();w(e)},M=setInterval(B,1e3);return u((()=>clearInterval(M))),t(d,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[t(d,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[t(r,{size:"xl",get children(){return e("manage.received_msgs")}}),t(m,{each:z,children:e=>t(h,p({get component(){return n[e.type]}},e))})]}}),t(v,{w:"$full",get value(){return a()},onInput:e=>I(e.currentTarget.value)}),t($,{spacing:"$2",get children(){return[t(f,{colorScheme:"accent",get loading(){return b()},onClick:B,get children(){return e("manage.receive")}}),t(f,{get loading(){return j()},onClick:G,get children(){return e("manage.send")}})]}})]}})};e({Messenger:I,default:I})}}}));
