import{a as L,e as t,bg as J,Z as M,as as G,$ as s,I as T,bs as H,T as K,bi as P,bj as X,bk as Z,bl as z,bm as Q,bn as U,bo as W,E as S,bp as Y,bq as p,br as ee,S as $,F as te,bt as re,b as ne,aR as v,b4 as f,k as ae,bX as x,j as ie,bK as de,a3 as ue,cK as ce,co as ge,cp as le,aJ as oe,D as O,B as se,n as I,N as me,b5 as y,ct as he}from"./index.e030e235.js";import{T as c}from"./item_type.be442da4.js";import{R as ve}from"./ResponsiveGrid.b373a626.js";const b=e=>{const d=L();return t(re,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(J,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var a;return d(((a=e.full_name_path)!=null?a:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(M,{get fallback(){return t(G,{get children(){return d("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===c.String},get children(){return t(T,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===c.String?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===c.Number},get children(){return t(T,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===c.Number?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,parseInt(a.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===c.Bool},get children(){return t(H,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===c.Bool?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===c.Text},get children(){return t(K,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===c.Text?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===c.Select},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===c.Select?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a)}:void 0},get children(){return[t(X,{get children(){return[t(Z,{get children(){return d("global.choose")}}),t(z,{}),t(Q,{})]}}),t(U,{get children(){return t(W,{get children(){return t(S,{get each(){var a;return(a=e.options)==null?void 0:a.split(",")},children:a=>t(Y,{value:a,get children(){return[t(p,{get children(){var i;return d(((i=e.options_prefix)!=null?i:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${a}`)}}),t(ee,{})]}})})}})}})]}})}})]}}),t($,{get when(){return e.help},get children(){return t(te,{get children(){return d(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function _(e,d){switch(e){case c.Bool:return d?d==="true":!1;case c.Number:return d?parseInt(d):0;default:return d||""}}const $e=()=>{const e=L(),{params:d,back:a,to:i}=ne(),{id:g}=d,[R,B]=v(()=>f.get("/admin/driver/list"),!0),[l,w]=ae({}),F=async()=>{const r=await B();y(r,w)},[N,j]=v(()=>f.get(`/admin/storage/get?id=${g}`),!0),[A,D]=v(()=>f.get(`/admin/driver/info?driver=${u.driver}`),!0);g?(async()=>{const r=await j();y(r,async n=>{o(n),m(JSON.parse(n.addition));const h=await D();y(h,V=>w({[u.driver]:V}))})})():F();const[u,o]=x({}),[C,m]=x({}),[q,E]=v(()=>(o("addition",JSON.stringify(C)),f.post(`/admin/storage/${g?"update":"create"}`,u))),k=ie(()=>{var n;const r=(n=l()[u.driver])==null?void 0:n.config.alert;if(console.log(r),r)return r.split("|")[0]});return t(he,{get loading(){return g?N()||A():R()},get children(){return[t(de,{mb:"$2",get children(){return e(`global.${g?"edit":"add"}`)}}),t(ue,{mb:"$2",spacing:"$2",get children(){return[t(b,{name:"driver",default:"",readonly:g!==void 0,required:!0,get type(){return c.Select},get options(){return g?u.driver:Object.keys(l()).join(",")},get value(){return u.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:r=>{for(const n of l()[r].common)o(n.name,_(n.type,n.default));m(ce(n=>{for(const h in n)delete n[h]}));for(const n of l()[r].additional)m(n.name,_(n.type,n.default));o("driver",r)}}),t($,{get when(){return k()},get children(){return t(ge,{get status(){return k()},w:"$full",get children(){return[t(le,{}),oe(()=>e(`drivers.config.${u.driver}.alert`))]}})}})]}}),t(ve,{get children(){return t($,{get when(){return l()[u.driver]},get children(){return[t(S,{get each(){return l()[u.driver].common},children:r=>t(b,O(r,{driver:"common",get value(){return u[r.name]},onChange:n=>{o(r.name,n)}}))}),t(S,{get each(){return l()[u.driver].additional},children:r=>t(b,O(r,{get driver(){return u.driver},get value(){return C[r.name]},onChange:n=>{m(r.name,n)}}))})]}})}}),t(se,{mt:"$2",get loading(){return q()},onClick:async()=>{l()[u.driver].config.need_ms&&(I.info(e("manage.add_storage-tips")),window.open(me("/@amore/messenger"),"_blank"));const r=await E();y(r,()=>{I.success(e("global.save_success")),a()},(n,h)=>{r.data.id&&i(`/@amore/storages/edit/${r.data.id}`)})},get children(){return e(`global.${g?"save":"add"}`)}})]}})};export{$e as default};