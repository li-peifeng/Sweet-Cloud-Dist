import{d as _,e as C,aP as v,b2 as g,j as B,d5 as p,c as e,al as h,B as o,a1 as T,d6 as P,d7 as x,d8 as f,z as m,d9 as b,da as z,db as s,b3 as u,n as $,Z as F,c6 as R,ay as D,az as H,am as I}from"./index.d735fbfd.js";import{g as L}from"./useTitle.20ba0f26.js";import{D as M}from"./DeletePopover.a90bb81a.js";import{W}from"./Wether.c975e526.js";const j=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(R,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},O=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:D,children:(a,d)=>e(H,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(I.can(n.user,d()))}})}})})}})},A=()=>{const n=_();L("manage.sidemenu.users");const{to:t}=C(),[i,a]=v(()=>g.get("/admin/user/list")),[d,k]=B([]),l=async()=>{const r=await a();u(r,c=>k(c.content))};l();const[y,S]=p(r=>g.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>g.post(`/admin/user/cancel_2fa?id=${r}`));return e(F,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(P,{highlightOnHover:!0,dense:!0,get children(){return[e(x,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return n(`users.${r}`)}})}),e(b,{get children(){return n("global.operations")}})]}})}}),e(z,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(j,{get role(){return r.role}})}}),e(s,{get children(){return e(O,{user:r})}}),e(s,{get children(){return e(W,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(M,{get name(){return r.username},get loading(){return y()===r.id},onClick:async()=>{const c=await S(r.id);u(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);u(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{A as default};
