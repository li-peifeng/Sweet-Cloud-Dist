import{b7 as J,_ as q,a2 as Y,d as G,e as Z,q as P,bZ as K,c as o,S as T,af as _,E as L,J as N,C as O,a5 as R,am as v,n as Q,bM as j,a8 as X,ba as E,al as H,bY as ee,b3 as U,b_ as te,aM as ae,b$ as oe,c0 as ne,c1 as re,p as se}from"./index.c8acd414.js";import{u as le,c as ce,d as ie}from"./index.90e9110c.js";async function*de(a,l,p){const n=new Set;async function i(){const[m,c]=await Promise.race(n);return n.delete(m),c}for(const m of l){const c=(async()=>await p(m,l))().then(r=>[c,r]);n.add(c),n.size>=a&&(yield await i())}for(;n.size;)yield await i()}const ue={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},pe=async a=>{let l=[];const p=async(n,i)=>{await new Promise((c,r)=>{const d=s=>{console.error(s),r(s)};if(n.isFile)n.file(s=>{const u=new File([s],i+s.name,{type:s.type});l.push(u),console.log(u),c({})},d);else if(n.isDirectory){const s=n.createReader(),u=()=>{s.readEntries(async w=>{for(let g=0;g<w.length;g++)await p(w[g],i+n.name+"/");c({}),w.length>0&&u()},d)};u()}})};return await p(a,""),l},me=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),ge=async(a,l,p,n=!1)=>{let i=new Date().valueOf(),m=0;const c=new FormData;c.append("file",l);const r=await J.put("/fs/form",c,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data","Last-Modified":l.lastModified,Password:q()},onUploadProgress:d=>{if(d.total){const s=d.loaded/d.total*100|0;p("progress",s);const u=new Date().valueOf(),w=(u-i)/1e3;if(w>1){const k=(d.loaded-m)/w,h=(d.total-d.loaded)/k;p("speed",k),console.log(h),i=u,m=d.loaded}s===100&&p("status","backending")}}});if(r.code!==200)return new Error(r.message)},fe=async(a,l,p,n=!1)=>{let i=new Date().valueOf(),m=0;const c=await J.put("/fs/put",l,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":l.type||"application/octet-stream","Last-Modified":l.lastModified,Password:q()},onUploadProgress:r=>{if(r.total){const d=r.loaded/r.total*100|0;p("progress",d);const s=new Date().valueOf(),u=(s-i)/1e3;if(u>1){const g=(r.loaded-m)/u,$=(r.total-r.loaded)/g;p("speed",g),console.log($),i=s,m=r.loaded}d===100&&p("status","backending")}}});if(c.code!==200)return new Error(c.message)},he=[{name:"\u6D41\u5F0F",upload:fe,provider:/.*/},{name:"\u8868\u5355",upload:ge,provider:/.*/}],we=()=>he.filter(a=>a.provider.test(Y.provider)),be=a=>{const l=G();return o(R,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${v()}`}},get children(){return[o(U,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(_,{spacing:"$2",get children(){return[o(te,{get colorScheme(){return ue[a.status]},get children(){return l(`home.upload.${a.status}`)}}),o(U,{get children(){return[ae(()=>oe(a.speed)),"/s"]}})]}}),o(ne,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(re,{get color(){return v()},rounded:"$md"})}}),o(U,{color:"$danger10",get children(){return a.msg}})]}})},$e=()=>{const a=G(),{pathname:l}=Z(),{refresh:p}=le(),[n,i]=P(!1),[m,c]=P(!1),[r,d]=P(!1),[s,u]=K({uploads:[]}),w=()=>s.uploads.every(({status:e})=>["success","error"].includes(e));let g,k;const $=async e=>{if(e.length!==0){c(!0);for(const t of e){const b=me(t);u("uploads",f=>[...f,b])}for await(const t of de(3,e,W))console.log(t);p(void 0,!0)}},h=(e,t,b)=>{u("uploads",f=>f.path===e,t,b)},D=we(),[x,V]=P(D[0]),W=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;h(t,"status","uploading");const b=se(l(),t);try{const f=await x().upload(b,e,(S,C)=>{h(t,S,C)},r());f?(h(t,"status","error"),h(t,"msg",f.message)):(h(t,"status","success"),h(t,"progress",100))}catch(f){console.error(f),h(t,"status","error"),h(t,"msg",f.message)}};return o(R,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(T,{get when(){return!m()},get fallback(){return[o(_,{spacing:"$2",get children(){return[o(L,{colorScheme:"accent",onClick:()=>{u("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(s.uploads)},get children(){return a("home.upload.clear_done")}}),o(T,{get when(){return w()},get children(){return o(L,{onClick:()=>{c(!1)},get children(){return a("home.upload.back")}})}})]}}),o(N,{get each(){return s.uploads},children:e=>o(be,e)})]},get children(){return[o(O,{type:"file",multiple:!0,ref(e){const t=g;typeof t=="function"?t(e):g=e},display:"none",onChange:e=>{var t;$(Array.from((t=e.target.files)!=null?t:[]))}}),o(O,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=k;typeof t=="function"?t(e):k=e},display:"none",onChange:e=>{var t;$(Array.from((t=e.target.files)!=null?t:[]))}}),o(R,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${n()?v():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),i(!0)},onDragLeave:()=>{i(!1)},onDrop:async e=>{var A,z,I,M;e.preventDefault(),e.stopPropagation(),i(!1);const t=[],b=Array.from((z=(A=e.dataTransfer)==null?void 0:A.items)!=null?z:[]),f=Array.from((M=(I=e.dataTransfer)==null?void 0:I.files)!=null?M:[]);let S=b.length;const C=[];for(let F=0;F<S;F++){const y=b[F].webkitGetAsEntry();y!=null&&y.isFile?t.push(f[F]):y!=null&&y.isDirectory&&C.push(y)}for(const F of C){const B=await pe(F);t.push(...B)}t.length===0&&Q.warning(a("home.upload.no_files_drag")),$(t)},spacing:"$4",h:"$56",get children(){return o(T,{get when(){return!n()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(X,{w:"30%",get children(){return o(E,{get value(){return x().name},onChange:e=>{V(D.find(t=>t.name===e))},get options(){return D.map(e=>({label:e.name,value:e.name}))}})}}),o(_,{spacing:"$4",get children(){return[o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ce,{})},onClick:()=>{k.click()}}),o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(ie,{})},onClick:()=>{g.click()}})]}}),o(ee,{get checked(){return r()},onChange:()=>{d(!r())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{$e as default};
