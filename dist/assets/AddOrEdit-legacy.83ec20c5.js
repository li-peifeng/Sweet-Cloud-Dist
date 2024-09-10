System.register(["./index-legacy.479435ca.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.3759bdd2.js"],(function(e,r){"use strict";var t,n,a,i,d,o,u,g,l,c,s,m,v,h,p,y,f,b,w,$,C,_,x,S,k,O,T,j,N,q,B,I,G,J;return{setters:[e=>{t=e.d,n=e.c,a=e.be,i=e.U,d=e.ar,o=e.V,u=e.t,g=e.bq,l=e.T,c=e.bg,s=e.d7,m=e.S,v=e.F,h=e.br,p=e.e,y=e.aP,f=e.b2,b=e.j,w=e.c4,$=e.x,C=e.bG,_=e.Z,x=e.d8,S=e.cO,k=e.cP,O=e.z,T=e.y,j=e.B,N=e.n,q=e.G,B=e.b3,I=e.a2},e=>{G=e.T},e=>{J=e.R}],execute:function(){const r=e=>{const r=t();return n(h,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[n(a,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(e.full_name_path??"common"===e.driver?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),n(i,{get fallback(){return n(d,{get children(){return r("settings.unknown_type")}})},get children(){return[n(o,{get when(){return e.type===G.String},get children(){return n(u,{get id(){return e.name},get type(){return"password"==e.name?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===G.String?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),n(o,{get when(){return e.type===G.Number},get children(){return n(u,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===G.Number?r=>e.onChange?.(parseInt(r.currentTarget.value)):void 0}})}}),n(o,{get when(){return e.type===G.Bool},get children(){return n(g,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===G.Bool?r=>e.onChange?.(r.currentTarget.checked):void 0}})}}),n(o,{get when(){return e.type===G.Text},get children(){return n(l,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===G.Text?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),n(o,{get when(){return e.type===G.Select},get children(){return n(c,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===G.Select?r=>e.onChange?.(r):void 0},get children(){return n(s,{get readonly(){return e.readonly},get searchable(){return e.type===G.Select&&e.searchable},get options(){return e.options.split(",").map((t=>({key:t,label:r((e.options_prefix??("common"===e.driver?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`))+`.${t}`)})))}})}})}})]}}),n(m,{get when(){return e.help},get children(){return n(v,{get children(){return r("common"===e.driver?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function P(e,r){switch(e){case G.Bool:return!!r&&"true"===r;case G.Number:return r?parseInt(r):0;default:return r||""}}e("default",(()=>{const e=t(),{params:a,back:i,to:d}=p(),{id:o}=a,[u,g]=y((()=>f.get("/admin/driver/list")),!0),[l,c]=b({}),[s,v]=y((()=>f.get(`/admin/storage/get?id=${o}`)),!0),[h,R]=y((()=>f.get(`/admin/driver/info?driver=${V.driver}`)),!0);o?(async()=>{const e=await v();B(e,(async e=>{z(e),F(JSON.parse(e.addition));const r=await R();B(r,(e=>c({[V.driver]:e})))}))})():(async()=>{const e=await g();B(e,c)})();const[V,z]=w({}),[D,F]=w({}),[U,Z]=y((()=>(z("addition",JSON.stringify(D)),f.post("/admin/storage/"+(o?"update":"create"),V)))),A=$((()=>{const e=l()[V.driver]?.config.alert;if(console.log(e),e)return e.split("|")[0]}));return n(I,{get loading(){return o?s()||h():u()},get children(){return[n(C,{mb:"$2",get children(){return e("global."+(o?"edit":"add"))}}),n(_,{mb:"$2",spacing:"$2",get children(){return[n(r,{name:"driver",default:"",readonly:void 0!==o,required:!0,searchable:!0,get type(){return G.Select},get options(){return o?V.driver:Object.keys(l()).join(",")},get value(){return V.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:e=>{for(const r of l()[e].common)z(r.name,P(r.type,r.default));F(x((e=>{for(const r in e)delete e[r]})));for(const r of l()[e].additional)F(r.name,P(r.type,r.default));z("driver",e)}}),n(m,{get when(){return A()},get children(){return n(S,{get status(){return A()},w:"$full",get children(){return[n(k,{}),$((()=>e(`drivers.config.${V.driver}.alert`)))]}})}})]}}),n(J,{get children(){return n(m,{get when(){return l()[V.driver]},get children(){return[n(O,{get each(){return l()[V.driver].common},children:e=>n(r,T(e,{driver:"common",get value(){return V[e.name]},onChange:r=>{z(e.name,r)}}))}),n(O,{get each(){return l()[V.driver].additional},children:e=>n(r,T(e,{get driver(){return V.driver},get value(){return D[e.name]},onChange:r=>{F(e.name,r)}}))})]}})}}),n(j,{mt:"$2",get loading(){return U()},onClick:async()=>{l()[V.driver].config.need_ms&&(N.info(e("manage.add_storage-tips")),window.open(q("/@amore/messenger"),"_blank"));const r=await Z();B(r,(()=>{N.success(e("global.save_success")),i()}),((e,t)=>{r.data.id&&d(`/@amore/storages/edit/${r.data.id}`)}))},get children(){return e("global."+(o?"save":"add"))}})]}})}))}}}));
