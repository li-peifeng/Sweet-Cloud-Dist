import{b9 as H,_ as N,a3 as W,d as J,e as q,r as P,cb as Q,c as o,S as T,as as _,G as M,K as X,D as O,a6 as R,ai as v,n as Y,bN as j,a9 as Z,bc as E,ah as G,ca as ee,b5 as U,cc as te,aN as ae,cd as oe,ce as ne,cf as re,g as se}from"./index.0796fe68.js";import{u as le,c as ce,d as ie}from"./index.8edf1b54.js";async function*de(a,l,p){const n=new Set;async function i(){const[g,c]=await Promise.race(n);return n.delete(g),c}for(const g of l){const c=(async()=>await p(g,l))().then(r=>[c,r]);n.add(c),n.size>=a&&(yield await i())}for(;n.size;)yield await i()}const ue={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},pe=async a=>{let l=[];const p=async(n,i)=>{await new Promise((c,r)=>{const d=s=>{console.error(s),r(s)};if(n.isFile)n.file(s=>{const u=new File([s],i+s.name,{type:s.type});l.push(u),console.log(u),c({})},d);else if(n.isDirectory){const s=n.createReader(),u=()=>{s.readEntries(async w=>{for(let m=0;m<w.length;m++)await p(w[m],i+n.name+"/");c({}),w.length>0&&u()},d)};u()}})};return await p(a,""),l},ge=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),me=async(a,l,p,n=!1)=>{let i=new Date().valueOf(),g=0;const c=new FormData;c.append("file",l);const r=await H.put("/fs/form",c,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data","Last-Modified":l.lastModified,Password:N()},onUploadProgress:d=>{if(d.total){const s=d.loaded/d.total*100|0;p("progress",s);const u=new Date().valueOf(),w=(u-i)/1e3;if(w>1){const y=(d.loaded-g)/w,h=(d.total-d.loaded)/y;p("speed",y),console.log(h),i=u,g=d.loaded}s===100&&p("status","backending")}}});if(r.code!==200)return new Error(r.message)},fe=async(a,l,p,n=!1)=>{let i=new Date().valueOf(),g=0;const c=await H.put("/fs/put",l,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":l.type||"application/octet-stream","Last-Modified":l.lastModified,Password:N()},onUploadProgress:r=>{if(r.total){const d=r.loaded/r.total*100|0;p("progress",d);const s=new Date().valueOf(),u=(s-i)/1e3;if(u>1){const m=(r.loaded-g)/u,F=(r.total-r.loaded)/m;p("speed",m),console.log(F),i=s,g=r.loaded}d===100&&p("status","backending")}}});if(c.code!==200)return new Error(c.message)},he=[{name:"\u6D41\u5F0F",upload:fe,provider:/.*/},{name:"\u8868\u5355",upload:me,provider:/.*/}],we=()=>he.filter(a=>a.provider.test(W.provider)),ke=a=>{const l=J();return o(R,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${v()}`}},get children(){return[o(U,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(_,{spacing:"$2",get children(){return[o(te,{get colorScheme(){return ue[a.status]},get children(){return l(`home.upload.${a.status}`)}}),o(U,{get children(){return[ae(()=>oe(a.speed)),"/s"]}})]}}),o(ne,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(re,{get color(){return v()},rounded:"$md"})}}),o(U,{color:"$danger10",get children(){return a.msg}})]}})},Fe=()=>{const a=J(),{pathname:l}=q(),{refresh:p}=le(),[n,i]=P(!1),[g,c]=P(!1),[r,d]=P(!1),[s,u]=Q({uploads:[]}),w=()=>s.uploads.every(({status:e})=>["success","error"].includes(e));let m,y;const F=async e=>{if(e.length!==0){c(!0);for(const t of e){const k=ge(t);u("uploads",f=>[...f,k])}for await(const t of de(3,e,V))console.log(t);p(void 0,!0)}},h=(e,t,k)=>{u("uploads",f=>f.path===e,t,k)},D=we(),[x,K]=P(D[0]),V=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;h(t,"status","uploading");const k=se(l(),t);try{const f=await x().upload(k,e,(S,C)=>{h(t,S,C)},r());f?(h(t,"status","error"),h(t,"msg",f.message)):(h(t,"status","success"),h(t,"progress",100))}catch(f){console.error(f),h(t,"status","error"),h(t,"msg",f.message)}};return o(R,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(T,{get when(){return!g()},get fallback(){return[o(_,{spacing:"$2",get children(){return[o(M,{colorScheme:"accent",onClick:()=>{u("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(s.uploads)},get children(){return a("home.upload.clear_done")}}),o(T,{get when(){return w()},get children(){return o(M,{onClick:()=>{c(!1)},get children(){return a("home.upload.back")}})}})]}}),o(X,{get each(){return s.uploads},children:e=>o(ke,e)})]},get children(){return[o(O,{type:"file",multiple:!0,ref(e){const t=m;typeof t=="function"?t(e):m=e},display:"none",onChange:e=>{var t;F(Array.from((t=e.target.files)!=null?t:[]))}}),o(O,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=y;typeof t=="function"?t(e):y=e},display:"none",onChange:e=>{var t;F(Array.from((t=e.target.files)!=null?t:[]))}}),o(R,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${n()?v():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),i(!0)},onDragLeave:()=>{i(!1)},onDrop:async e=>{var A,z,I,B;e.preventDefault(),e.stopPropagation(),i(!1);const t=[],k=Array.from((z=(A=e.dataTransfer)==null?void 0:A.items)!=null?z:[]),f=Array.from((B=(I=e.dataTransfer)==null?void 0:I.files)!=null?B:[]);let S=k.length;const C=[];for(let $=0;$<S;$++){const b=k[$].webkitGetAsEntry();b!=null&&b.isFile?t.push(f[$]):b!=null&&b.isDirectory&&C.push(b)}for(const $ of C){const L=await pe($);t.push(...L)}t.length===0&&Y.warning(a("home.upload.no_files_drag")),F(t)},spacing:"$4",h:"$56",get children(){return o(T,{get when(){return!n()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(Z,{w:"30%",get children(){return o(E,{get value(){return x().name},onChange:e=>{K(D.find(t=>t.name===e))},get options(){return D.map(e=>({label:e.name,value:e.name}))}})}}),o(_,{spacing:"$4",get children(){return[o(G,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ce,{})},onClick:()=>{y.click()}}),o(G,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(ie,{})},onClick:()=>{m.click()}})]}}),o(ee,{get checked(){return r()},onChange:()=>{d(!r())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{Fe as default};
