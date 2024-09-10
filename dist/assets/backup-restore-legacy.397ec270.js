System.register(["./index-legacy.1ef69201.js","./useTitle-legacy.2fda451e.js","./index-legacy.daa09369.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(e){"use strict";var t,n,r,s,a,c,o,i,l,u,d,g,m,f,p,y,b,h,_;return{setters:[e=>{t=e.r,n=e.d,r=e.aW,s=e.b9,a=e.c,c=e.as,o=e.G,i=e.by,l=e.bO,u=e.bl,d=e.bx,g=e.D,m=e.a6,f=e.K,p=e.b5,y=e.bE,b=e.n},e=>{h=e.g},e=>{_=e.c},()=>{}],execute:function(){const w={success:{icon:"✅",color:"$success9"},error:{icon:"❌",color:"$danger9"},info:{icon:"ℹ️",color:"$info9"}},$=e=>a(c,{w:"$full",spacing:"$1",get children(){return[a(p,{get children(){return w[e.type].icon}}),a(p,{get color(){return w[e.type].color},get children(){return e.msg}})]}});e("default",(()=>{const[e,p]=t(!1),[w,k]=t(""),S=n();let v;h("manage.sidemenu.backup-restore");const[j,x]=t([]),O=(e,t)=>{x((n=>[...n,{type:t,msg:e}])),v.scrollTop=v.scrollHeight},[U,E]=r((()=>s.get("/admin/setting/list"))),[L,R]=r((()=>s.get("/admin/user/list"))),[T,A]=r((()=>s.get("/admin/meta/list"))),[B,J]=r((()=>s.get("/admin/storage/list")));function N(e,t){if(""==t)return e;const n=_.AES.encrypt(JSON.stringify(e),t).toString();return _.enc.Base64.stringify(_.enc.Utf8.parse(n))}function C(e,t,n,r){if(!r)return e;const s=_.enc.Base64.parse(e).toString(_.enc.Utf8);return n?_.AES.decrypt(s,t).toString(_.enc.Utf8):JSON.parse(_.AES.decrypt(s,t).toString(_.enc.Utf8))}const D=async()=>{O(S("br.start_backup"),"info");const e={encrypted:"",settings:[],users:[],storages:[],metas:[]};""!=w()&&(e.encrypted=N("encrypted",w()));for(const t of[{name:"settings",fn:E,page:!1},{name:"users",fn:R,page:!0},{name:"storages",fn:J,page:!0},{name:"metas",fn:A,page:!0}]){const n=await t.fn();y(n,(n=>{if(O(S("br.success_backup_item",{item:S(`manage.sidemenu.${t.name}`)}),"success"),t.page){for(let e=0;e<n.content.length;e++){const t=n.content[e];for(const e in t)t[e]=N(t[e],w())}e[t.name]=n.content}else{for(let e=0;e<n.length;e++){const t=n[e];for(const e in t)t[e]=N(t[e],w())}e[t.name]=n}}),(e=>{O(S("br.failed_backup_item",{item:S(`manage.sidemenu.${t.name}`)})+":"+e,"error")}))}!function(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=e,s.click(),URL.revokeObjectURL(r)}("alist_backup_"+(new Date).toLocaleString()+".json",e),O(S("br.finish_backup"),"info")},[I,F]=r((e=>s.post("/admin/setting/save",e))),[G,H]=r((e=>s.post("/admin/user/create",e))),[K,W]=r((e=>s.post("/admin/storage/create",e))),[Y,q]=r((e=>s.post("/admin/meta/create",e))),[z,M]=r((e=>s.post("/admin/user/update",e))),[P,Q]=r((e=>s.post("/admin/storage/update",e))),[V,X]=r((e=>s.post("/admin/meta/update",e)));async function Z(e,t,n,r,s,a){const c=(await t()).data.content;for(const o in e){const t=e[o],i=t[s],l="add"==(c.find((e=>e[s]===i))?"update":"add")?n:r;await y(await l(t),(()=>{O(S("br.success_restore_item",{item:S(a)})+"-"+`[${i}]`,"success")}),(e=>{O(S("br.failed_restore_item",{item:S(a)})+"-"+`[${i}]:`+e,"error")}))}}return a(m,{spacing:"$2",w:"$full",get children(){return[a(c,{spacing:"$2",w:"$full",get children(){return[a(o,{get loading(){return U()||L()||T()||B()},onClick:()=>{D()},colorScheme:"accent",get children(){return S("br.backup")}}),a(o,{get loading(){return I()||G()||K()||Y()||z()||P()||V()},onClick:()=>{(async()=>{O(S("br.start_restore"),"info");const t=document.createElement("input");t.type="file",t.accept="application/json",t.onchange=async t=>{const n=t.target.files;if(!n||0===n.length)return void b.warning(S("br.no_file"));const r=n[0],s=new FileReader;s.onload=async()=>{const t=JSON.parse(s.result),n=Boolean(t.encrypted);if(n&&'"encrypted"'!==C(t.encrypted,w(),!0,!0))return void O(S("br.wrong_encrypt_password"),"error");const r=Object.values(t);for(let e=r.length-4;e<r.length;e++){const t=r[e];console.log(t);for(let e=0;e<t.length;e++){const r=t[e];for(const e in r)r[e]=C(r[e],w(),!1,n)}}if(e()&&await D(),t.settings&&y(await F(t.settings.filter((e=>!["version","index_progress"].includes(e.key)))),(()=>{O(S("br.success_restore_item",{item:S("manage.sidemenu.settings")}),"success")}),(e=>{O(S("br.failed_restore_item",{item:S("manage.sidemenu.settings")})+":"+e,"error")})),e())await Z(t.users,R,H,M,"username","manage.sidemenu.users"),await Z(t.storages,J,W,Q,"mount_path","manage.sidemenu.storages"),await Z(t.metas,A,q,X,"path","manage.sidemenu.metas");else for(const e of[{name:"users",fn:H,data:t.users,key:"username"},{name:"storages",fn:W,data:t.storages,key:"mount_path"},{name:"metas",fn:q,data:t.metas,key:"path"}])for(const t of e.data||[])t.id=0,y(await e.fn(t),(()=>{O(S("br.success_restore_item",{item:S(`manage.sidemenu.${e.name}`)})+"-"+`[${t[e.key]}]`,"success")}),(n=>{O(S("br.failed_restore_item",{item:S(`manage.sidemenu.${e.name}`)})+` [ ${t[e.key]} ] :`+n,"error")}));O(S("br.finish_restore"),"info")},s.readAsText(r)},t.click()})()},get children(){return S("br.restore")}})]}}),a(i,{w:"$full",display:"flex",flexDirection:"column",get children(){return a(l,{w:"$full",direction:"column",gap:"$1",get children(){return[a(u,{get children(){return S("br.override")}}),a(d,{id:"restore-override",get checked(){return e()},onChange:e=>p(e.currentTarget.checked)}),a(u,{get children(){return S("br.encrypt_password")}}),a(g,{id:"password",type:"password",get placeholder(){return S("br.encrypt_password_placeholder")},onInput:e=>k(e.currentTarget.value)})]}})}}),a(m,{p:"$2",ref(e){"function"==typeof v?v(e):v=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return a(f,{get each(){return j()},children:e=>a($,e)})}})]}})}))}}}));
