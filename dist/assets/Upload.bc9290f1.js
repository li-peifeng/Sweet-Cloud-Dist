import{a_ as V,_ as W,a0 as q,a as G,b as K,k as P,bR as N,e as o,S as T,a8 as _,B as M,E as X,I as O,a3 as R,af as v,n as Y,bD as j,a4 as Z,b1 as E,ae as H,bQ as ee,aW as U,bS as te,aE as ae,bT as oe,bU as ne,bV as re,p as se}from"./index.12aadc99.js";import{u as le,b as ie,c as ce}from"./index.35bedcc5.js";async function*de(a,l,p){const n=new Set;async function c(){const[m,i]=await Promise.race(n);return n.delete(m),i}for(const m of l){const i=(async()=>await p(m,l))().then(r=>[i,r]);n.add(i),n.size>=a&&(yield await c())}for(;n.size;)yield await c()}const ue={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},pe=async a=>{let l=[];const p=async(n,c)=>{await new Promise((i,r)=>{const d=s=>{console.error(s),r(s)};if(n.isFile)n.file(s=>{const u=new File([s],c+s.name,{type:s.type});l.push(u),console.log(u),i({})},d);else if(n.isDirectory){const s=n.createReader(),u=()=>{s.readEntries(async w=>{for(let g=0;g<w.length;g++)await p(w[g],c+n.name+"/");i({}),w.length>0&&u()},d)};u()}})};return await p(a,""),l},me=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),ge=async(a,l,p,n=!1)=>{let c=new Date().valueOf(),m=0;const i=new FormData;i.append("file",l);const r=await V.put("/fs/form",i,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data","Last-Modified":l.lastModified,Password:W()},onUploadProgress:d=>{if(d.total){const s=d.loaded/d.total*100|0;p("progress",s);const u=new Date().valueOf(),w=(u-c)/1e3;if(w>1){const k=(d.loaded-m)/w,h=(d.total-d.loaded)/k;p("speed",k),console.log(h),c=u,m=d.loaded}s===100&&p("status","backending")}}});if(r.code!==200)return new Error(r.message)},fe=async(a,l,p,n=!1)=>{let c=new Date().valueOf(),m=0;const i=await V.put("/fs/put",l,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":l.type||"application/octet-stream","Last-Modified":l.lastModified,Password:W()},onUploadProgress:r=>{if(r.total){const d=r.loaded/r.total*100|0;p("progress",d);const s=new Date().valueOf(),u=(s-c)/1e3;if(u>1){const g=(r.loaded-m)/u,F=(r.total-r.loaded)/g;p("speed",g),console.log(F),c=s,m=r.loaded}d===100&&p("status","backending")}}});if(i.code!==200)return new Error(i.message)},he=[{name:"\u6D41\u5F0F",upload:fe,provider:/.*/},{name:"\u8868\u5355",upload:ge,provider:/.*/}],we=()=>he.filter(a=>a.provider.test(q.provider)),be=a=>{const l=G();return o(R,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${v()}`}},get children(){return[o(U,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(_,{spacing:"$2",get children(){return[o(te,{get colorScheme(){return ue[a.status]},get children(){return l(`home.upload.${a.status}`)}}),o(U,{get children(){return[ae(()=>oe(a.speed)),"/s"]}})]}}),o(ne,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(re,{get color(){return v()},rounded:"$md"})}}),o(U,{color:"$danger10",get children(){return a.msg}})]}})},Fe=()=>{const a=G(),{pathname:l}=K(),{refresh:p}=le(),[n,c]=P(!1),[m,i]=P(!1),[r,d]=P(!1),[s,u]=N({uploads:[]}),w=()=>s.uploads.every(({status:e})=>["success","error"].includes(e));let g,k;const F=async e=>{if(e.length!==0){i(!0);for(const t of e){const b=me(t);u("uploads",f=>[...f,b])}for await(const t of de(3,e,Q))console.log(t);p(void 0,!0)}},h=(e,t,b)=>{u("uploads",f=>f.path===e,t,b)},D=we(),[x,J]=P(D[0]),Q=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;h(t,"status","uploading");const b=se(l(),t);try{const f=await x().upload(b,e,(S,C)=>{h(t,S,C)},r());f?(h(t,"status","error"),h(t,"msg",f.message)):(h(t,"status","success"),h(t,"progress",100))}catch(f){console.error(f),h(t,"status","error"),h(t,"msg",f.message)}};return o(R,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(T,{get when(){return!m()},get fallback(){return[o(_,{spacing:"$2",get children(){return[o(M,{colorScheme:"accent",onClick:()=>{u("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(s.uploads)},get children(){return a("home.upload.clear_done")}}),o(T,{get when(){return w()},get children(){return o(M,{onClick:()=>{i(!1)},get children(){return a("home.upload.back")}})}})]}}),o(X,{get each(){return s.uploads},children:e=>o(be,e)})]},get children(){return[o(O,{type:"file",multiple:!0,ref(e){const t=g;typeof t=="function"?t(e):g=e},display:"none",onChange:e=>{var t;F(Array.from((t=e.target.files)!=null?t:[]))}}),o(O,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=k;typeof t=="function"?t(e):k=e},display:"none",onChange:e=>{var t;F(Array.from((t=e.target.files)!=null?t:[]))}}),o(R,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${n()?v():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),c(!0)},onDragLeave:()=>{c(!1)},onDrop:async e=>{var A,I,z,B;e.preventDefault(),e.stopPropagation(),c(!1);const t=[],b=Array.from((I=(A=e.dataTransfer)==null?void 0:A.items)!=null?I:[]),f=Array.from((B=(z=e.dataTransfer)==null?void 0:z.files)!=null?B:[]);let S=b.length;const C=[];for(let $=0;$<S;$++){const y=b[$].webkitGetAsEntry();y!=null&&y.isFile?t.push(f[$]):y!=null&&y.isDirectory&&C.push(y)}for(const $ of C){const L=await pe($);t.push(...L)}t.length===0&&Y.warning(a("home.upload.no_files_drag")),F(t)},spacing:"$4",h:"$56",get children(){return o(T,{get when(){return!n()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(Z,{w:"30%",get children(){return o(E,{get value(){return x().name},onChange:e=>{J(D.find(t=>t.name===e))},get options(){return D.map(e=>({label:e.name,value:e.name}))}})}}),o(_,{spacing:"$4",get children(){return[o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ie,{})},onClick:()=>{k.click()}}),o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(ce,{})},onClick:()=>{g.click()}})]}}),o(ee,{get checked(){return r()},onChange:()=>{d(!r())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{Fe as default};