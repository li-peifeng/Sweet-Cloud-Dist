System.register(["./index-legacy.c362e6b6.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.e5f37cc1.js"],(function(e){"use strict";var r,t,n,a,i,d,o,u,g,l,c,s,m,v,h,p,y,f,b,w,$,C,_,x,S,k,T,O,N,j,q,I,B,J,D;return{setters:[e=>{r=e.d,t=e.c,n=e.bl,a=e.a1,i=e.ay,d=e.a2,o=e.D,u=e.bx,g=e.T,l=e.bn,c=e.db,s=e.S,m=e.F,v=e.by,h=e.e,p=e.aW,y=e.b9,f=e.r,b=e.cb,w=e.q,$=e.bN,C=e.a6,_=e.dc,x=e.cS,S=e.cT,k=e.aN,T=e.K,O=e.J,N=e.G,j=e.n,q=e.U,I=e.ba,B=e.aa},e=>{J=e.T},e=>{D=e.R}],execute:function(){const G=e=>{const h=r();return t(v,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(n,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return h(e.full_name_path??"common"===e.driver?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(a,{get fallback(){return t(i,{get children(){return h("settings.unknown_type")}})},get children(){return[t(d,{get when(){return e.type===J.String},get children(){return t(o,{get id(){return e.name},get type(){return"password"==e.name?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===J.String?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),t(d,{get when(){return e.type===J.Number},get children(){return t(o,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===J.Number?r=>e.onChange?.(parseInt(r.currentTarget.value)):void 0}})}}),t(d,{get when(){return e.type===J.Bool},get children(){return t(u,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===J.Bool?r=>e.onChange?.(r.currentTarget.checked):void 0}})}}),t(d,{get when(){return e.type===J.Text},get children(){return t(g,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===J.Text?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),t(d,{get when(){return e.type===J.Select},get children(){return t(l,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===J.Select?r=>e.onChange?.(r):void 0},get children(){return t(c,{get readonly(){return e.readonly},get searchable(){return e.type===J.Select&&e.searchable},get options(){return e.options.split(",").map((r=>({key:r,label:h((e.options_prefix??("common"===e.driver?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`))+`.${r}`)})))}})}})}})]}}),t(s,{get when(){return e.help},get children(){return t(m,{get children(){return h("common"===e.driver?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function R(e,r){switch(e){case J.Bool:return!!r&&"true"===r;case J.Number:return r?parseInt(r):0;default:return r||""}}e("default",(()=>{const e=r(),{params:n,back:a,to:i}=h(),{id:d}=n,[o,u]=p((()=>y.get("/admin/driver/list")),!0),[g,l]=f({}),[c,m]=p((()=>y.get(`/admin/storage/get?id=${d}`)),!0),[v,F]=p((()=>y.get(`/admin/driver/info?driver=${K.driver}`)),!0);d?(async()=>{const e=await m();I(e,(async e=>{U(e),W(JSON.parse(e.addition));const r=await F();I(r,(e=>l({[K.driver]:e})))}))})():(async()=>{const e=await u();I(e,l)})();const[K,U]=b({}),[V,W]=b({}),[z,A]=p((()=>(U("addition",JSON.stringify(V)),y.post("/admin/storage/"+(d?"update":"create"),K)))),E=w((()=>{const e=g()[K.driver]?.config.alert;if(console.log(e),e)return e.split("|")[0]}));return t(B,{get loading(){return d?c()||v():o()},get children(){return[t($,{mb:"$2",get children(){return e("global."+(d?"edit":"add"))}}),t(C,{mb:"$2",spacing:"$2",get children(){return[t(G,{name:"driver",default:"",readonly:void 0!==d,required:!0,searchable:!0,get type(){return J.Select},get options(){return d?K.driver:Object.keys(g()).join(",")},get value(){return K.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:e=>{for(const r of g()[e].common)U(r.name,R(r.type,r.default));W(_((e=>{for(const r in e)delete e[r]})));for(const r of g()[e].additional)W(r.name,R(r.type,r.default));U("driver",e)}}),t(s,{get when(){return E()},get children(){return t(x,{get status(){return E()},w:"$full",get children(){return[t(S,{}),k((()=>e(`drivers.config.${K.driver}.alert`)))]}})}})]}}),t(D,{get children(){return t(s,{get when(){return g()[K.driver]},get children(){return[t(T,{get each(){return g()[K.driver].common},children:e=>t(G,O(e,{driver:"common",get value(){return K[e.name]},onChange:r=>{U(e.name,r)}}))}),t(T,{get each(){return g()[K.driver].additional},children:e=>t(G,O(e,{get driver(){return K.driver},get value(){return V[e.name]},onChange:r=>{W(e.name,r)}}))})]}})}}),t(N,{mt:"$2",get loading(){return z()},onClick:async()=>{g()[K.driver].config.need_ms&&(j.info(e("manage.add_storage-tips")),window.open(q("/@amore/messenger"),"_blank"));const r=await A();I(r,(()=>{j.success(e("global.save_success")),a()}),((e,t)=>{r.data.id&&i(`/@amore/storages/edit/${r.data.id}`)}))},get children(){return e("global."+(d?"save":"add"))}})]}})}))}}}));