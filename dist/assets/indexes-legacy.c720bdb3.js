System.register(["./index-legacy.1ef69201.js","./index-legacy.9cb3881f.js","./Common-legacy.fc79bd0d.js","./useTitle-legacy.2fda451e.js","./index-legacy.6a28e669.js","./LinkWithBase-legacy.b3cac472.js","./index-legacy.347b3386.js","./SettingItem-legacy.5b4e5096.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.22f950df.js"],(function(e){"use strict";var t,r,n,a,i,s,o,l,d,c,u,g,h,f,m,p,k,y,b,v,x,C,w,j,$,_,S,N,I,z,B,M,G,L,T;return{setters:[e=>{t=e.cj,r=e.az,n=e.d,a=e.r,i=e.aW,s=e.b9,o=e.j,l=e.d8,d=e.d9,c=e.aJ,u=e.c,g=e.bN,h=e.S,f=e.as,m=e.a,p=e.I,k=e.a6,y=e.b5,b=e.aN,v=e.cc,x=e.cH,C=e.G,w=e.H,j=e.M,$=e.A,_=e.bd,S=e.B,N=e.C,I=e.T,z=e.D,B=e.E,M=e.ba,G=e.aY},e=>{L=e.G},e=>{T=e.default},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){var D=r('<svg width=1em height=1em viewBox="0 0 24 24"><g fill=none stroke=currentColor stroke-linecap=round stroke-width=2><path stroke-dasharray=60 stroke-dashoffset=60 stroke-opacity=.3 d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill=freeze attributeName=stroke-dashoffset dur=1.3s values=60;0></animate></path><path stroke-dasharray=15 stroke-dashoffset=15 d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill=freeze attributeName=stroke-dashoffset dur=0.3s values=15;0></animate><animateTransform attributeName=transform dur=1.5s repeatCount=indefinite type=rotate values="0 12 12;360 12 12">'),E=r('<svg width=1em height=1em viewBox="0 0 24 24"><g stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2><path fill=currentColor fill-opacity=0 stroke-dasharray=60 stroke-dashoffset=60 d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill=freeze attributeName=stroke-dashoffset dur=0.5s values=60;0></animate><animate fill=freeze attributeName=fill-opacity begin=0.8s dur=0.15s values=0;0.3></animate></path><path fill=none stroke-dasharray=14 stroke-dashoffset=14 d="M8 12L11 15L16 10"><animate fill=freeze attributeName=stroke-dashoffset begin=0.6s dur=0.2s values=14;0>');function H(e){return r=D(),t(r,e,!0,!0),r;var r}function O(e){return r=E(),t(r,e,!0,!0),r;var r}e("default",(()=>{const e=n(),[t,r]=a(),[D,E]=i((()=>s.get("/admin/index/progress"))),W=async()=>{const e=await E();M(e,(e=>{r(e)}))},Z=setInterval(W,5e3);o((()=>clearInterval(Z))),W();const[A,J]=i(l),R=async()=>{const e=await J();G(e),W()},[X,Y]=i((()=>s.post("/admin/index/clear"))),q=async()=>{const e=await Y();G(e),W()},[F,K]=i((()=>s.post("/admin/index/stop"))),P=async()=>{const e=await K();G(e),W()};let Q,U;const[V,ee]=i(d),te=async()=>{let e=[];Q.value&&(e=Q.value.split("\n"));let t=20;U.value&&(t=parseInt(U.value));const r=await ee(e,t);G(r),W()},{isOpen:re,onOpen:ne,onClose:ae}=c();return u(k,{spacing:"$2",w:"$full",alignItems:"start",get children(){return[u(g,{get children(){return e("manage.sidemenu.settings")}}),u(T,{get group(){return L.INDEX}}),u(g,{get children(){return e("indexes.current")}}),u(h,{get when(){return t()},get children(){return u(f,{spacing:"$2",w:"fit-content",shadow:"$md",rounded:"$lg",get bg(){return m("","$neutral3")()},get children(){return[u(p,{boxSize:"$28",color:"$accent9",p:"$2",get as(){return t()?.is_done?O:H}}),u(k,{spacing:"$2",flex:"1",alignItems:"start",mr:"$2",get children(){return[u(y,{get children(){return[b((()=>e("indexes.obj_count"))),":",u(v,{colorScheme:"info",ml:"$2",get children(){return t()?.obj_count}})]}}),u(y,{get children(){return[b((()=>e("indexes.last_done_time"))),":",u(v,{colorScheme:"accent",ml:"$2",get children(){return b((()=>!!t().last_done_time))()?x(t().last_done_time):e("indexes.unknown")}})]}}),u(h,{get when(){return t()?.error},get children(){return u(y,{css:{wordBreak:"break-all"},get children(){return[b((()=>e("indexes.error"))),":",u(v,{colorScheme:"danger",ml:"$2",get children(){return t().error}})]}})}})]}})]}})}}),u(f,{spacing:"$2",get children(){return[u(C,{colorScheme:"accent",onClick:[W,void 0],get loading(){return D()},get children(){return e("global.refresh")}}),u(C,{colorScheme:"danger",onClick:[q,void 0],get loading(){return X()},get children(){return e("indexes.clear")}}),u(C,{colorScheme:"warning",onClick:[P,void 0],get loading(){return F()},get children(){return e("indexes.stop")}}),u(C,{onClick:[R,void 0],get loading(){return A()},get children(){return e("indexes."+(t()?.is_done?"rebuild":"build"))}})]}}),u(C,{onClick:ne,get children(){return e("indexes.update")}}),u(w,{get opened(){return re()},onClose:ae,get children(){return[u(j,{}),u($,{get children(){return[u(_,{}),u(S,{get children(){return e("indexes.update")}}),u(N,{get children(){return[u(g,{get children(){return e("indexes.paths_to_update")}}),u(I,{ref(e){"function"==typeof Q?Q(e):Q=e}}),u(g,{get children(){return e("indexes.max_depth")}}),u(z,{value:20,type:"number",ref(e){"function"==typeof U?U(e):U=e}})]}}),u(B,{get children(){return u(C,{onClick:[te,void 0],get loading(){return V()},get children(){return e("indexes.update")}})}})]}})]}})]}})}))}}}));