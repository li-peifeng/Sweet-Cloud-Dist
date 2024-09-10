System.register(["./index-legacy.1ef69201.js","./useTitle-legacy.2fda451e.js","./index-legacy.9cb3881f.js","./SettingItem-legacy.5b4e5096.js","./ResponsiveGrid-legacy.22f950df.js","./FolderTree-legacy.f586ca7b.js","./index-legacy.daa09369.js","./index-legacy.6a28e669.js","./LinkWithBase-legacy.b3cac472.js","./index-legacy.347b3386.js","./item_type-legacy.d1f1c701.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(e){"use strict";var t,n,r,s,a,c,l,i,g,o,u,d,y,h,m,f,b,k,p,_,v,x,S,j,w,$,C;return{setters:[e=>{t=e.d,n=e.c,r=e.by,s=e.bl,a=e.D,c=e.cP,l=e.G,i=e.K,g=e.J,o=e.a6,u=e.aW,d=e.b9,y=e.cb,h=e.cM,m=e.r,f=e.cN,b=e.S,k=e.ba,p=e.n,_=e.bN,v=e.as},e=>{x=e.g},e=>{S=e.G},e=>{j=e.I},e=>{w=e.R},e=>{$=e.a},e=>{C=e.c},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const I=e=>{const i=t();return n(c,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[n(r,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[n(s,{for:"path",display:"flex",alignItems:"center",get children(){return i("global.name")}}),n(a,{id:"name",get value(){return e.name},onChange:t=>e.onChange({...e,name:t.currentTarget.value})})]}}),n(r,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[n(s,{for:"path",display:"flex",alignItems:"center",get children(){return i("metas.path")}}),n($,{id:"path",get value(){return e.path},onChange:t=>e.onChange({...e,path:t})})]}}),n(c,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return n(l,{colorScheme:"danger",onClick:async()=>{e.onDelete()},get children(){return i("global.delete")}})}})]}})},D=e=>{const r=t();return console.log(e.buckets),n(o,{alignItems:"start",w:"$full",get children(){return[n(s,{display:"flex",alignItems:"center",get children(){return r("settings.s3_buckets")}}),n(l,{onClick:()=>{e.setSettings((e=>"s3_buckets"===e.key),"value",JSON.stringify([...e.buckets,{name:"",path:""}])),console.log(e.buckets)},get children(){return r("global.add")}}),n(i,{get each(){return e.buckets},children:t=>n(I,g(t,{onChange:n=>{console.log(n),e.setSettings((e=>"s3_buckets"===e.key),"value",JSON.stringify(e.buckets.map((e=>e.name===t.name?n:e))))},onDelete:()=>{e.setSettings((e=>"s3_buckets"===e.key),"value",JSON.stringify(e.buckets.filter((e=>e.name!==t.name))))}}))})]}})},N=e=>{const t={...e.find((e=>"s3_buckets"===e.key))};return t.value?JSON.parse(t.value):[]};e("default",(()=>{const e=t();x("manage.sidemenu.s3");const[r,s]=u((()=>d.get(`/admin/setting/list?group=${S.S3}`))),[a,c]=y([]),i=async()=>{const e=await s();k(e,c)};i();const[$,I]=u((()=>d.post("/admin/setting/save",h(a)))),[J,O]=m(!1);return n(o,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[n(w,{get children(){return[n(f,{each:a,children:(t,r)=>n(b,{get when(){return"s3_buckets"!=t().key},get children(){return n(j,g(t,{onChange:e=>{c((e=>t().key===e.key),"value",e)},onDelete:async()=>{O(!0);const n=await d.post(`/admin/setting/delete?key=${t().key}`);O(!1),k(n,(()=>{p.success(e("global.delete_success")),i()}))}}))}})}),n(l,{onClick:()=>{const e=C.lib.WordArray.random(15),t=C.lib.WordArray.random(30),n=C.enc.Base64.stringify(e).replace(/[\r\n]/g,""),r=C.enc.Base64.stringify(t).replace(/[\r\n]/g,"");c((e=>"s3_access_key_id"===e.key),"value",n),c((e=>"s3_secret_access_key"===e.key),"value",r)},get children(){return e("settings.s3_generate")}}),n(_,{get children(){return e("settings.s3_restart_to_apply")}}),n(D,{get buckets(){return N(a)},setSettings:c})]}}),n(v,{spacing:"$2",get children(){return[n(l,{colorScheme:"accent",onClick:i,get loading(){return r()||J()},get children(){return e("global.refresh")}}),n(l,{get loading(){return $()},onClick:async()=>{const t=N(a),n=new Set;for(const s of t){if(""===s.name||""===s.path)return void p.error(e("settings.s3_buckets_empty"));if(n.has(s.name))return void p.error(e("settings.s3_buckets_duplicate_name"));n.add(s.name)}const r=await I();k(r,(()=>p.success(e("global.save_success"))))},get children(){return e("global.save")}})]}})]}})}))}}}));
