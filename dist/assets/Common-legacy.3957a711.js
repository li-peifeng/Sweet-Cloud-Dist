System.register(["./index-legacy.c362e6b6.js","./useTitle-legacy.451b6304.js","./SettingItem-legacy.4c480e44.js","./ResponsiveGrid-legacy.e5f37cc1.js","./index-legacy.da2a6a23.js","./index-legacy.023aa375.js","./LinkWithBase-legacy.4fdddd59.js","./index-legacy.61010dc8.js","./item_type-legacy.d1f1c701.js"],(function(e){"use strict";var t,s,n,c,a,i,l,r,g,d,o,u,y,h,p,m,b,j;return{setters:[e=>{t=e.d,s=e.e,n=e.aW,c=e.b9,a=e.cb,i=e.cN,l=e.r,r=e.c,g=e.cO,d=e.J,o=e.ba,u=e.n,y=e.as,h=e.G,p=e.a6},e=>{m=e.g},e=>{b=e.I},e=>{j=e.R},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){e("default",(e=>{const f=t(),{pathname:k}=s();m(`manage.sidemenu.${k().split("/").pop()}`);const[v,$]=n((()=>c.get(`/admin/setting/list?group=${e.group}`))),[x,w]=a([]),C=async()=>{const e=await $();o(e,w)};C();const[I,S]=n((()=>c.post("/admin/setting/save",i(x)))),[_,G]=l(!1);return r(p,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[r(j,{get children(){return r(g,{each:x,children:(e,t)=>r(b,d(e,{onChange:t=>{w((t=>e().key===t.key),"value",t)},onDelete:async()=>{G(!0);const t=await c.post(`/admin/setting/delete?key=${e().key}`);G(!1),o(t,(()=>{u.success(f("global.delete_success")),C()}))}}))})}}),r(y,{spacing:"$2",get children(){return[r(h,{colorScheme:"accent",onClick:C,get loading(){return v()||_()},get children(){return f("global.refresh")}}),r(h,{get loading(){return I()},onClick:async()=>{const e=await S();o(e,(()=>u.success(f("global.save_success"))))},get children(){return f("global.save")}})]}})]}})}))}}}));
