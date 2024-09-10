System.register(["./index-legacy.479435ca.js","./useTitle-legacy.43c4fcd1.js","./index-legacy.dc3c8bad.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(e,t){"use strict";var n,r,s,a,c,o,i,l,u,d,g,m,f,p,y,b,h,_,w;return{setters:[e=>{n=e.j,r=e.d,s=e.aP,a=e.b2,c=e.c,o=e.al,i=e.B,l=e.br,u=e.bH,d=e.be,g=e.bq,m=e.t,f=e.Z,p=e.z,y=e.a_,b=e.bx,h=e.n},e=>{_=e.g},e=>{w=e.c},()=>{}],execute:function(){const t={success:{icon:"✅",color:"$success9"},error:{icon:"❌",color:"$danger9"},info:{icon:"ℹ️",color:"$info9"}},$=e=>c(o,{w:"$full",spacing:"$1",get children(){return[c(y,{get children(){return t[e.type].icon}}),c(y,{get color(){return t[e.type].color},get children(){return e.msg}})]}});e("default",(()=>{const[e,t]=n(!1),[y,k]=n(""),S=r();let j;_("manage.sidemenu.backup-restore");const[v,x]=n([]),U=(e,t)=>{x((n=>[...n,{type:t,msg:e}])),j.scrollTop=j.scrollHeight},[O,B]=s((()=>a.get("/admin/setting/list"))),[E,L]=s((()=>a.get("/admin/user/list"))),[R,T]=s((()=>a.get("/admin/meta/list"))),[A,J]=s((()=>a.get("/admin/storage/list")));function N(e,t){if(""==t)return e;const n=w.AES.encrypt(JSON.stringify(e),t).toString();return w.enc.Base64.stringify(w.enc.Utf8.parse(n))}function C(e,t,n,r){if(!r)return e;const s=w.enc.Base64.parse(e).toString(w.enc.Utf8);return n?w.AES.decrypt(s,t).toString(w.enc.Utf8):JSON.parse(w.AES.decrypt(s,t).toString(w.enc.Utf8))}const D=async()=>{U(S("br.start_backup"),"info");const e={encrypted:"",settings:[],users:[],storages:[],metas:[]};""!=y()&&(e.encrypted=N("encrypted",y()));for(const t of[{name:"settings",fn:B,page:!1},{name:"users",fn:L,page:!0},{name:"storages",fn:J,page:!0},{name:"metas",fn:T,page:!0}]){const n=await t.fn();b(n,(n=>{if(U(S("br.success_backup_item",{item:S(`manage.sidemenu.${t.name}`)}),"success"),t.page){for(let e=0;e<n.content.length;e++){const t=n.content[e];for(const e in t)t[e]=N(t[e],y())}e[t.name]=n.content}else{for(let e=0;e<n.length;e++){const t=n[e];for(const e in t)t[e]=N(t[e],y())}e[t.name]=n}}),(e=>{U(S("br.failed_backup_item",{item:S(`manage.sidemenu.${t.name}`)})+":"+e,"error")}))}!function(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=e,s.click(),URL.revokeObjectURL(r)}("alist_backup_"+(new Date).toLocaleString()+".json",e),U(S("br.finish_backup"),"info")},[H,I]=s((e=>a.post("/admin/setting/save",e))),[q,z]=s((e=>a.post("/admin/user/create",e))),[F,P]=s((e=>a.post("/admin/storage/create",e))),[Y,Z]=s((e=>a.post("/admin/meta/create",e))),[G,K]=s((e=>a.post("/admin/user/update",e))),[M,Q]=s((e=>a.post("/admin/storage/update",e))),[V,W]=s((e=>a.post("/admin/meta/update",e)));async function X(e,t,n,r,s,a){const c=(await t()).data.content;for(const o in e){const t=e[o],i=t[s],l="add"==(c.find((e=>e[s]===i))?"update":"add")?n:r;await b(await l(t),(()=>{U(S("br.success_restore_item",{item:S(a)})+`-[${i}]`,"success")}),(e=>{U(S("br.failed_restore_item",{item:S(a)})+`-[${i}]:`+e,"error")}))}}return c(f,{spacing:"$2",w:"$full",get children(){return[c(o,{spacing:"$2",w:"$full",get children(){return[c(i,{get loading(){return O()||E()||R()||A()},onClick:()=>{D()},colorScheme:"accent",get children(){return S("br.backup")}}),c(i,{get loading(){return H()||q()||F()||Y()||G()||M()||V()},onClick:()=>{(async()=>{U(S("br.start_restore"),"info");const t=document.createElement("input");t.type="file",t.accept="application/json",t.onchange=async t=>{const n=t.target.files;if(!n||0===n.length)return void h.warning(S("br.no_file"));const r=n[0],s=new FileReader;s.onload=async()=>{const t=JSON.parse(s.result),n=Boolean(t.encrypted);if(n&&'"encrypted"'!==C(t.encrypted,y(),!0,!0))return void U(S("br.wrong_encrypt_password"),"error");const r=Object.values(t);for(let e=r.length-4;e<r.length;e++){const t=r[e];console.log(t);for(let e=0;e<t.length;e++){const r=t[e];for(const e in r)r[e]=C(r[e],y(),!1,n)}}if(e()&&await D(),t.settings&&b(await I(t.settings.filter((e=>!["version","index_progress"].includes(e.key)))),(()=>{U(S("br.success_restore_item",{item:S("manage.sidemenu.settings")}),"success")}),(e=>{U(S("br.failed_restore_item",{item:S("manage.sidemenu.settings")})+":"+e,"error")})),e())await X(t.users,L,z,K,"username","manage.sidemenu.users"),await X(t.storages,J,P,Q,"mount_path","manage.sidemenu.storages"),await X(t.metas,T,Z,W,"path","manage.sidemenu.metas");else for(const e of[{name:"users",fn:z,data:t.users,key:"username"},{name:"storages",fn:P,data:t.storages,key:"mount_path"},{name:"metas",fn:Z,data:t.metas,key:"path"}])for(const t of e.data||[])t.id=0,b(await e.fn(t),(()=>{U(S("br.success_restore_item",{item:S(`manage.sidemenu.${e.name}`)})+`-[${t[e.key]}]`,"success")}),(n=>{U(S("br.failed_restore_item",{item:S(`manage.sidemenu.${e.name}`)})+` [ ${t[e.key]} ] :`+n,"error")}));U(S("br.finish_restore"),"info")},s.readAsText(r)},t.click()})()},get children(){return S("br.restore")}})]}}),c(l,{w:"$full",display:"flex",flexDirection:"column",get children(){return c(u,{w:"$full",direction:"column",gap:"$1",get children(){return[c(d,{get children(){return S("br.override")}}),c(g,{id:"restore-override",get checked(){return e()},onChange:e=>t(e.currentTarget.checked)}),c(d,{get children(){return S("br.encrypt_password")}}),c(m,{id:"password",type:"password",get placeholder(){return S("br.encrypt_password_placeholder")},onInput:e=>k(e.currentTarget.value)})]}})}}),c(f,{p:"$2",ref(e){"function"==typeof j?j(e):j=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return c(p,{get each(){return v()},children:e=>c($,e)})}})]}})}))}}}));