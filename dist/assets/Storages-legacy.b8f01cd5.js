System.register(["./index-legacy.c362e6b6.js","./useTitle-legacy.451b6304.js","./DeletePopover-legacy.f7b9150f.js"],(function(e){"use strict";var r,t,n,a,l,i,s,g,c,o,d,u,h,b,m,$,f,p,w,v,k,_,y,C,x,S,j,B,T,W,q,D,H,P,X,G,I,K,L,M,N,O,Y,Z;return{setters:[e=>{r=e.d,t=e.c,n=e.a,a=e.ai,l=e.as,i=e.b5,s=e.cc,g=e.aN,c=e.a9,o=e.a6,d=e.d2,u=e.c$,h=e.e,b=e.aW,m=e.b9,$=e.G,f=e.aY,p=e.ba,w=e.n,v=e.r,k=e.q,_=e.c9,y=e.S,C=e.bn,x=e.bo,S=e.bp,j=e.bq,B=e.br,T=e.bs,W=e.bt,q=e.K,D=e.bu,H=e.bv,P=e.bw,X=e.bx,G=e.a1,I=e.a2,K=e.cP,L=e.cZ,M=e.c_,N=e.d0,O=e.d1},e=>{Y=e.g},e=>{Z=e.D}],execute:function(){function z(e){const n=r(),{to:a}=h(),[l,i]=b((()=>m.post(`/admin/storage/delete?id=${e.storage.id}`))),[s,g]=b((()=>m.post(`/admin/storage/${e.storage.disabled?"enable":"disable"}?id=${e.storage.id}`)));return[t($,{onClick:()=>{a(`/@amore/storages/edit/${e.storage.id}`)},get children(){return n("global.edit")}}),t($,{get loading(){return s()},get colorScheme(){return e.storage.disabled?"success":"warning"},onClick:async()=>{const r=await g();f(r,(()=>{e.refresh()}))},get children(){return n("global."+(e.storage.disabled?"enable":"disable"))}}),t(Z,{get name(){return e.storage.mount_path},get loading(){return l()},onClick:async()=>{const r=await i();p(r,(()=>{w.success(n("global.delete_success")),e.refresh()}))}})]}function A(e){const d=r();return t(o,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return n("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${a()}`}},get children(){return[t(l,{spacing:"$2",get children(){return[t(i,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return e.storage.mount_path}}),t(s,{colorScheme:"info",get children(){return d(`drivers.drivers.${e.storage.driver}`)}})]}}),t(l,{get children(){return[t(i,{get children(){return[g((()=>d("storages.common.status"))),": "]}}),t(c,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return e.storage.status}})]}}),t(i,{css:{wordBreak:"break-all"},get children(){return e.storage.remark}}),t(l,{spacing:"$2",get children(){return t(z,e)}})]}})}function E(e){const n=r();return t(u,{get children(){return[t(d,{get children(){return e.storage.mount_path}}),t(d,{get children(){return n(`drivers.drivers.${e.storage.driver}`)}}),t(d,{get children(){return e.storage.order}}),t(d,{get children(){return e.storage.status}}),t(d,{get children(){return e.storage.remark}}),t(d,{get children(){return t(l,{spacing:"$2",get children(){return t(z,e)}})}})]}})}e("default",(()=>{const e=r();Y("manage.sidemenu.storages");const{to:n}=h(),[a,i]=b((()=>m.get("/admin/storage/list"))),[s,g]=v([]),d=async()=>{const e=await i();p(e,(e=>g(e.content)))},[f,Z]=v([]),[z,F]=v([]);(async()=>{const e=await m.get("/admin/driver/names");p(e,(e=>Z(e)))})(),d();const J=async()=>{const r=await m.post("/admin/storage/load_all");p(r,(()=>{w.success(e("storages.other.start_load_success"))}))},Q=k((()=>s().filter((e=>0===z().length||z().includes(e.driver))))),[R,U]=_("storages-layout","grid");return t(o,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[t(l,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[t($,{colorScheme:"accent",get loading(){return a()},onClick:d,get children(){return e("global.refresh")}}),t($,{onClick:()=>{n("/@amore/storages/add")},get children(){return e("global.add")}}),t($,{colorScheme:"warning",get loading(){return a()},onClick:J,get children(){return e("storages.other.load_all")}}),t(y,{get when(){return f().length>0},get children(){return t(C,{multiple:!0,get value(){return z()},onChange:F,get children(){return[t(x,{get children(){return[t(S,{get children(){return e("storages.other.filter_by_driver")}}),t(j,{}),t(B,{})]}}),t(T,{get children(){return t(W,{get children(){return t(q,{get each(){return f()},children:r=>t(D,{value:r,get children(){return[t(H,{get children(){return e(`drivers.drivers.${r}`)}}),t(P,{})]}})})}})}})]}})}}),t(X,{minW:80,get checked(){return"table"===R()},onChange:e=>{U(e.currentTarget.checked?"table":"grid")},get children(){return e("storages.other.table_layout")}})]}}),t(G,{get children(){return[t(I,{get when(){return"grid"===R()},get children(){return t(K,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return t(q,{get each(){return Q()},children:e=>t(A,{storage:e,refresh:d})})}})}}),t(I,{get when(){return"table"===R()},get children(){return t(c,{w:"$full",overflowX:"auto",get children(){return t(L,{highlightOnHover:!0,dense:!0,get children(){return[t(M,{get children(){return t(u,{get children(){return[t(q,{each:["mount_path","driver","order","status","remark"],children:r=>t(N,{get children(){return e(`storages.common.${r}`)}})}),t(N,{get children(){return e("global.operations")}})]}})}}),t(O,{get children(){return t(q,{get each(){return Q()},children:e=>t(E,{storage:e,refresh:d})})}})]}})}})}})]}})]}})}))}}}));