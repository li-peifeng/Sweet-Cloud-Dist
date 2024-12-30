import{d as I,c as t,bl as J,a1 as M,ay as V,a2 as o,D as b,bx as H,T as K,bn as P,dh as U,S as $,F as W,by as Y,e as Z,aW as v,b9 as f,r as z,cc as x,q as Q,bN as X,a6 as p,di as ee,cY as te,cZ as ne,aN as re,K as k,J as O,G as ae,n as _,U as ie,ba as y,aa as de}from"./index.80253ddb.js";import{T as d}from"./item_type.ee87ae79.js";import{R as ue}from"./ResponsiveGrid.baf0cce5.js";const w=e=>{const u=I();return t(Y,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(J,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var i;return u(((i=e.full_name_path)!=null?i:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(M,{get fallback(){return t(V,{get children(){return u("settings.unknown_type")}})},get children(){return[t(o,{get when(){return e.type===d.String},get children(){return t(b,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===d.String?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i.currentTarget.value)}:void 0}})}}),t(o,{get when(){return e.type===d.Number},get children(){return t(b,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===d.Number?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,parseInt(i.currentTarget.value))}:void 0}})}}),t(o,{get when(){return e.type===d.Float},get children(){return t(b,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===d.Float?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,parseFloat(i.currentTarget.value))}:void 0}})}}),t(o,{get when(){return e.type===d.Bool},get children(){return t(H,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===d.Bool?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i.currentTarget.checked)}:void 0}})}}),t(o,{get when(){return e.type===d.Text},get children(){return t(K,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===d.Text?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i.currentTarget.value)}:void 0}})}}),t(o,{get when(){return e.type===d.Select},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===d.Select?i=>{var r;return(r=e.onChange)==null?void 0:r.call(e,i)}:void 0},get children(){return t(U,{get readonly(){return e.readonly},get searchable(){return e.type===d.Select&&e.searchable},get options(){return e.options.split(",").map(i=>{var r;return{key:i,label:u(((r=e.options_prefix)!=null?r:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${i}`)}})}})}})}})]}}),t($,{get when(){return e.help},get children(){return t(W,{get children(){return u(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function F(e,u){switch(e){case d.Bool:return u?u==="true":!1;case d.Number:return u?parseInt(u):0;default:return u||""}}const se=()=>{const e=I(),{params:u,back:i,to:r}=Z(),{id:l}=u,[N,L]=v(()=>f.get("/admin/driver/list"),!0),[c,S]=z({}),R=async()=>{const n=await L();y(n,S)},[A,B]=v(()=>f.get(`/admin/storage/get?id=${l}`),!0),[D,q]=v(()=>f.get(`/admin/driver/info?driver=${g.driver}`),!0);l?(async()=>{const n=await B();y(n,async a=>{s(a),m(JSON.parse(a.addition));const h=await q();y(h,G=>S({[g.driver]:G}))})})():R();const[g,s]=x({}),[C,m]=x({}),[j,E]=v(()=>(s("addition",JSON.stringify(C)),f.post(`/admin/storage/${l?"update":"create"}`,g))),T=Q(()=>{var a;const n=(a=c()[g.driver])==null?void 0:a.config.alert;if(console.log(n),n)return n.split("|")[0]});return t(de,{get loading(){return l?A()||D():N()},get children(){return[t(X,{mb:"$2",get children(){return e(`global.${l?"edit":"add"}`)}}),t(p,{mb:"$2",spacing:"$2",get children(){return[t(w,{name:"driver",default:"",readonly:l!==void 0,required:!0,searchable:!0,get type(){return d.Select},get options(){return l?g.driver:Object.keys(c()).join(",")},get value(){return g.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:n=>{for(const a of c()[n].common)s(a.name,F(a.type,a.default));m(ee(a=>{for(const h in a)delete a[h]}));for(const a of c()[n].additional)m(a.name,F(a.type,a.default));s("driver",n)}}),t($,{get when(){return T()},get children(){return t(te,{get status(){return T()},w:"$full",get children(){return[t(ne,{}),re(()=>e(`drivers.config.${g.driver}.alert`))]}})}})]}}),t(ue,{get children(){return t($,{get when(){return c()[g.driver]},get children(){return[t(k,{get each(){return c()[g.driver].common},children:n=>t(w,O(n,{driver:"common",get value(){return g[n.name]},onChange:a=>{s(n.name,a)}}))}),t(k,{get each(){return c()[g.driver].additional},children:n=>t(w,O(n,{get driver(){return g.driver},get value(){return C[n.name]},onChange:a=>{m(n.name,a)}}))})]}})}}),t(ae,{mt:"$2",get loading(){return j()},onClick:async()=>{c()[g.driver].config.need_ms&&(_.info(e("manage.add_storage-tips")),window.open(ie("/@manage/messenger"),"_blank"));const n=await E();y(n,()=>{_.success(e("global.save_success")),i()},(a,h)=>{n.data.id&&r(`/@manage/storages/edit/${n.data.id}`)})},get children(){return e(`global.${l?"save":"add"}`)}})]}})};export{se as default};
