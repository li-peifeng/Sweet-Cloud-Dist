import{a as k,e as t,bn as S,ba as f,I,ci as y,B as u,E as D,D as v,a3 as w,aL as p,a_ as m,bS as F,cf as L,k as B,cg as J,S as N,a$ as h,n as o,bE as O,a8 as T}from"./index.267e2f31.js";import{q}from"./index.86f920e6.js";import{G}from"./index.6875fa82.js";import{I as R}from"./SettingItem.cd3b5109.js";import{R as E}from"./ResponsiveGrid.ec536f6a.js";import{a as H}from"./FolderTree.402845bb.js";import"./index.61328ed0.js";import"./index.fdf8eb79.js";import"./item_type.be442da4.js";const j=e=>{const s=k();return t(y,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[t(S,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(f,{for:"path",display:"flex",alignItems:"center",get children(){return s("global.name")}}),t(I,{id:"name",get value(){return e.name},onChange:n=>e.onChange({...e,name:n.currentTarget.value})})]}}),t(S,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(f,{for:"path",display:"flex",alignItems:"center",get children(){return s("metas.path")}}),t(H,{id:"path",get value(){return e.path},onChange:n=>e.onChange({...e,path:n})})]}}),t(y,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return t(u,{colorScheme:"danger",onClick:async()=>{e.onDelete()},get children(){return s("global.delete")}})}})]}})},M=e=>{const s=k();return console.log(e.buckets),t(w,{alignItems:"start",w:"$full",get children(){return[t(f,{display:"flex",alignItems:"center",get children(){return s("settings.s3_buckets")}}),t(u,{onClick:()=>{e.setSettings(n=>n.key==="s3_buckets","value",JSON.stringify([...e.buckets,{name:"",path:""}])),console.log(e.buckets)},get children(){return s("global.add")}}),t(D,{get each(){return e.buckets},children:n=>t(j,v(n,{onChange:a=>{console.log(a),e.setSettings(r=>r.key==="s3_buckets","value",JSON.stringify(e.buckets.map(r=>r.name===n.name?a:r)))},onDelete:()=>{e.setSettings(a=>a.key==="s3_buckets","value",JSON.stringify(e.buckets.filter(a=>a.name!==n.name)))}}))})]}})},_=e=>{const s={...e.find(n=>n.key==="s3_buckets")};return s.value?JSON.parse(s.value):[]},Y=()=>{const e=k();q("manage.sidemenu.s3");const[s,n]=p(()=>m.get(`/admin/setting/list?group=${G.S3}`)),[a,r]=F([]),g=async()=>{const c=await n();h(c,r)};g();const[$,C]=p(()=>m.post("/admin/setting/save",L(a))),[x,b]=B(!1);return t(w,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(E,{get children(){return[t(J,{each:a,children:(c,d)=>t(N,{get when(){return c().key!="s3_buckets"},get children(){return t(R,v(c,{onChange:i=>{r(l=>c().key===l.key,"value",i)},onDelete:async()=>{b(!0);const i=await m.post(`/admin/setting/delete?key=${c().key}`);b(!1),h(i,()=>{o.success(e("global.delete_success")),g()})}}))}})}),t(O,{get children(){return e("settings.s3_restart_to_apply")}}),t(M,{get buckets(){return _(a)},setSettings:r})]}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:g,get loading(){return s()||x()},get children(){return e("global.refresh")}}),t(u,{get loading(){return $()},onClick:async()=>{const c=_(a),d=new Set;for(const l of c){if(l.name===""||l.path===""){o.error(e("settings.s3_buckets_empty"));return}if(d.has(l.name)){o.error(e("settings.s3_buckets_duplicate_name"));return}d.add(l.name)}const i=await C();h(i,()=>o.success(e("global.save_success")))},get children(){return e("global.save")}})]}})]}})};export{Y as default};