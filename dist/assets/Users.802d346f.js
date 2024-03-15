import{a as _,b as C,aR as v,b4 as u,k as x,cu as p,e,a8 as h,B as o,a4 as T,cv as B,cw as R,cx as b,E as m,cy as f,cz as F,cA as s,b5 as g,n as $,a3 as P,bY as z,ay as A,aA as D,aa as H}from"./index.d9e98605.js";import{t as I}from"./index.f1c4c1df.js";import{D as L}from"./DeletePopover.7bd973c2.js";import{W as M}from"./Wether.b901367a.js";const W=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(z,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},E=t=>{const n=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:A,children:(a,d)=>e(D,{get label(){return n(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(H.can(t.user,d()))}})}})})}})},j=()=>{const t=_();I("manage.sidemenu.users");const{to:n}=C(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=x([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[y,w]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[S,U]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(P,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{n("/@amore/users/add")},get children(){return t("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(R,{get children(){return e(b,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(f,{get children(){return t(`users.${r}`)}})}),e(f,{get children(){return t("global.operations")}})]}})}}),e(F,{get children(){return e(m,{get each(){return d()},children:r=>e(b,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(W,{get role(){return r.role}})}}),e(s,{get children(){return e(E,{user:r})}}),e(s,{get children(){return e(M,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{n(`/@amore/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(L,{get name(){return r.username},get loading(){return y()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(t("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return S()===r.id},onClick:async()=>{const c=await U(r.id);g(c,()=>{$.success(t("users.cancel_2fa_success")),l()})},get children(){return t("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{j as default};
