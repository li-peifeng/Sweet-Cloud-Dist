System.register(["./index-legacy.479435ca.js","./useTitle-legacy.43c4fcd1.js","./DeletePopover-legacy.059e2532.js","./Wether-legacy.d2c4f7f7.js"],(function(e,t){"use strict";var r,n,c,l,a,i,d,g,s,u,o,h,m,p,f,w,y,$,b,j,k,v,C;return{setters:[e=>{r=e.d,n=e.e,c=e.aP,l=e.b2,a=e.j,i=e.cU,d=e.c,g=e.al,s=e.B,u=e.a1,o=e.cV,h=e.cW,m=e.cX,p=e.z,f=e.cY,w=e.cZ,y=e.c_,$=e.b3,b=e.n,j=e.Z},e=>{k=e.g},e=>{v=e.D},e=>{C=e.W}],execute:function(){e("default",(()=>{const e=r();k("manage.sidemenu.metas");const{to:t}=n(),[W,x]=c((()=>l.get("/admin/meta/list"))),[D,P]=a([]),S=async()=>{const e=await x();$(e,(e=>P(e.content)))};S();const[X,Z]=i((e=>l.post(`/admin/meta/delete?id=${e}`)));return d(j,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[d(g,{spacing:"$2",get children(){return[d(s,{colorScheme:"accent",get loading(){return W()},onClick:S,get children(){return e("global.refresh")}}),d(s,{onClick:()=>{t("/@amore/metas/add")},get children(){return e("global.add")}})]}}),d(u,{w:"$full",overflowX:"auto",get children(){return d(o,{highlightOnHover:!0,dense:!0,get children(){return[d(h,{get children(){return d(m,{get children(){return[d(p,{each:["path","password","write"],children:t=>d(f,{get children(){return e(`metas.${t}`)}})}),d(f,{get children(){return e("global.operations")}})]}})}}),d(w,{get children(){return d(p,{get each(){return D()},children:r=>d(m,{get children(){return[d(y,{get children(){return r.path}}),d(y,{get children(){return r.password}}),d(y,{get children(){return d(C,{get yes(){return r.write}})}}),d(y,{get children(){return d(g,{spacing:"$2",get children(){return[d(s,{onClick:()=>{t(`/@amore/metas/edit/${r.id}`)},get children(){return e("global.edit")}}),d(v,{get name(){return r.path},get loading(){return X()===r.id},onClick:async()=>{const t=await Z(r.id);$(t,(()=>{b.success(e("global.delete_success")),S()}))}})]}})}})]}})})}})]}})}})]}})}))}}}));
