import{d as k,c as t,br as S,be as f,C as I,ck as y,E as u,J as D,H as v,a5 as w,aP as p,b2 as m,bV as F,ch as J,q as L,ci as N,S as O,b3 as h,n as o,bI as T,aa as q}from"./index.edd92069.js";import{s as B}from"./index.85e46c99.js";import{G}from"./index.1a394bb6.js";import{I as H}from"./SettingItem.43b9d681.js";import{R}from"./ResponsiveGrid.9522d7d4.js";import{a as P}from"./FolderTree.d168721d.js";import"./index.9603865c.js";import"./index.bce811c8.js";import"./item_type.be442da4.js";const V=e=>{const s=k();return t(y,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[t(S,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(f,{for:"path",display:"flex",alignItems:"center",get children(){return s("global.name")}}),t(I,{id:"name",get value(){return e.name},onChange:n=>e.onChange({...e,name:n.currentTarget.value})})]}}),t(S,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(f,{for:"path",display:"flex",alignItems:"center",get children(){return s("metas.path")}}),t(P,{id:"path",get value(){return e.path},onChange:n=>e.onChange({...e,path:n})})]}}),t(y,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return t(u,{colorScheme:"danger",onClick:async()=>{e.onDelete()},get children(){return s("global.delete")}})}})]}})},j=e=>{const s=k();return console.log(e.buckets),t(w,{alignItems:"start",w:"$full",get children(){return[t(f,{display:"flex",alignItems:"center",get children(){return s("settings.s3_buckets")}}),t(u,{onClick:()=>{e.setSettings(n=>n.key==="s3_buckets","value",JSON.stringify([...e.buckets,{name:"",path:""}])),console.log(e.buckets)},get children(){return s("global.add")}}),t(D,{get each(){return e.buckets},children:n=>t(V,v(n,{onChange:a=>{console.log(a),e.setSettings(r=>r.key==="s3_buckets","value",JSON.stringify(e.buckets.map(r=>r.name===n.name?a:r)))},onDelete:()=>{e.setSettings(a=>a.key==="s3_buckets","value",JSON.stringify(e.buckets.filter(a=>a.name!==n.name)))}}))})]}})},_=e=>{const s={...e.find(n=>n.key==="s3_buckets")};return s.value?JSON.parse(s.value):[]},Y=()=>{const e=k();B("manage.sidemenu.s3");const[s,n]=p(()=>m.get(`/admin/setting/list?group=${G.S3}`)),[a,r]=F([]),g=async()=>{const c=await n();h(c,r)};g();const[C,$]=p(()=>m.post("/admin/setting/save",J(a))),[x,b]=L(!1);return t(w,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(R,{get children(){return[t(N,{each:a,children:(c,d)=>t(O,{get when(){return c().key!="s3_buckets"},get children(){return t(H,v(c,{onChange:i=>{r(l=>c().key===l.key,"value",i)},onDelete:async()=>{b(!0);const i=await m.post(`/admin/setting/delete?key=${c().key}`);b(!1),h(i,()=>{o.success(e("global.delete_success")),g()})}}))}})}),t(T,{get children(){return e("settings.s3_restart_to_apply")}}),t(j,{get buckets(){return _(a)},setSettings:r})]}}),t(q,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:g,get loading(){return s()||x()},get children(){return e("global.refresh")}}),t(u,{get loading(){return C()},onClick:async()=>{const c=_(a),d=new Set;for(const l of c){if(l.name===""||l.path===""){o.error(e("settings.s3_buckets_empty"));return}if(d.has(l.name)){o.error(e("settings.s3_buckets_duplicate_name"));return}d.add(l.name)}const i=await $();h(i,()=>o.success(e("global.save_success")))},get children(){return e("global.save")}})]}})]}})};export{Y as default};