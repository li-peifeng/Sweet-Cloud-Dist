import{d as _,e as C,aW as v,b9 as u,r as F,cY as p,c as e,as as h,G as o,a9 as T,cZ as x,c_ as B,c$ as f,K as m,d0 as b,d1 as P,d2 as s,ba as g,n as $,a6 as R,cc as W,aF as D,aG as G,at as H}from"./index.61fdf374.js";import{g as I}from"./useTitle.2f7cf153.js";import{D as L}from"./DeletePopover.21ff7a07.js";import{W as M}from"./Wether.2e54837c.js";const z=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(W,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},K=t=>{const n=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:D,children:(a,d)=>e(G,{get label(){return n(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(H.can(t.user,d()))}})}})})}})},Z=()=>{const t=_();I("manage.sidemenu.users");const{to:n}=C(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=F([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[S,U]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[w,y]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(R,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{n("/@amore/users/add")},get children(){return t("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(x,{highlightOnHover:!0,dense:!0,get children(){return[e(B,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return t(`users.${r}`)}})}),e(b,{get children(){return t("global.operations")}})]}})}}),e(P,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(z,{get role(){return r.role}})}}),e(s,{get children(){return e(K,{user:r})}}),e(s,{get children(){return e(M,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{n(`/@amore/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(L,{get name(){return r.username},get loading(){return S()===r.id},onClick:async()=>{const c=await U(r.id);g(c,()=>{$.success(t("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return w()===r.id},onClick:async()=>{const c=await y(r.id);g(c,()=>{$.success(t("users.cancel_2fa_success")),l()})},get children(){return t("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{Z as default};