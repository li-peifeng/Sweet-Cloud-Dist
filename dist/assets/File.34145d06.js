import{c as e,av as y,I as _,ai as D,a3 as o,a6 as l,bN as P,b5 as F,aN as v,cd as L,cI as A,d as f,q as d,cJ as $,a7 as I,aq as k,ag as x,G as m,am as C,K as S,an as V,co as T,S as g,aH as R,as as O,cs as j,Q as B,cK as M,Y as t,Z as n,e as z,ct as W,cL as H,r as U,bc as X,$ as q,a0 as G,ao as K}from"./index.61fdf374.js";import{g as N,O as c}from"./icon.03578936.js";import{k as J}from"./index.5ea7a59c.js";import{T as Q}from"./Layout.24a200e7.js";const Y=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(_,{get color(){return D()},boxSize:"$20",get as(){return N(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(P,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(F,{color:"$neutral10",size:"sm",get children(){return[v(()=>L(o.obj.size))," \xB7 ",v(()=>A(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),w=()=>{const r=f(),a=d(()=>$(o.obj.name)),{currentObjLink:u}=I();return e(g,{get when(){return a().length},get children(){return e(k,{get children(){return[e(x,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:J})},get children(){return r("home.preview.open_with")}}),e(C,{get children(){return e(S,{get each(){return a()},children:s=>e(V,{as:"a",target:"_blank",get href(){return T(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:u(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:u}=R();return e(Y,{get children(){return[e(O,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>u(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(w,{})}})]}})},Z=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=I(),u=d(()=>T(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(M,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return u()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:Q,onClick:()=>{window.open(u(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return B()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML \u6E32\u67D3",exts:["html"],component:t(()=>n(()=>import("./html.d8bd6642.js"),["assets/html.d8bd6642.js","assets/index.61fdf374.js","assets/index.cb5cceed.css"]))},{name:"\u5728\u7EBF\u963F\u91CC\u89C6\u9891",type:c.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.1d80fbc1.js"),["assets/aliyun_video.1d80fbc1.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js","assets/video_box.799344f8.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.c366ed34.js"]))},{name:"Markdown \u5728\u7EBF\u9884\u89C8",type:c.TEXT,component:t(()=>n(()=>import("./markdown.29efb491.js"),["assets/markdown.29efb491.js","assets/index.61fdf374.js","assets/index.cb5cceed.css"]))},{name:"Markdown \u81EA\u52A8\u6362\u884C",type:c.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.8ed215f5.js"),["assets/markdown_with_word_wrap.8ed215f5.js","assets/index.61fdf374.js","assets/index.cb5cceed.css"]))},{name:"\u6253\u5F00 URL",exts:["url"],component:t(()=>n(()=>import("./url.c7ecc112.js"),["assets/url.c7ecc112.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js"]))},{name:"TXT \u5728\u7EBF\u9884\u89C8",type:c.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.6d585360.js"),["assets/text-editor.6d585360.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/index.15999fd1.js"]))},{name:"\u5728\u7EBF\u56FE\u7247\u9884\u89C8",type:c.IMAGE,component:t(()=>n(()=>import("./image.6e8c6265.js"),["assets/image.6e8c6265.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/ImageWithError.9d0fa0dd.js"]))},{name:"\u5728\u7EBF\u89C6\u9891\u64AD\u653E",type:c.VIDEO,component:t(()=>n(()=>import("./video.3bd7b6ad.js"),["assets/video.3bd7b6ad.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js","assets/video_box.799344f8.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.c366ed34.js"]))},{name:"\u5728\u7EBF\u64AD\u653E\u97F3\u4E50",type:c.AUDIO,component:t(()=>n(()=>import("./audio.1001acea.js"),["assets/audio.1001acea.js","assets/audio.6d9b38d8.css","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js"]))},{name:"IPA \u6587\u4EF6",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.92ec1417.js"),["assets/ipa.92ec1417.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js"]))},{name:"PLIST \u6587\u4EF6",exts:["plist"],component:t(()=>n(()=>import("./plist.1419c4b1.js"),["assets/plist.1419c4b1.js","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js"]))},{name:"\u5728\u7EBF\u529E\u516C\u6587\u6863",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.717e45e1.js"),["assets/aliyun_office.717e45e1.js","assets/index.61fdf374.js","assets/index.cb5cceed.css"]))},{name:"\u64AD\u653E\u7EC8\u7AEF\u5F55\u5C4F",exts:["cast"],component:t(()=>n(()=>import("./asciinema.39f08b97.js"),["assets/asciinema.39f08b97.js","assets/asciinema.4b7983dd.css","assets/index.61fdf374.js","assets/index.cb5cceed.css"]))},{name:"Video360",type:c.VIDEO,component:t(()=>n(()=>import("./video360.8b186836.js"),["assets/video360.8b186836.js","assets/video360.f0192288.css","assets/index.61fdf374.js","assets/index.cb5cceed.css","assets/video_box.799344f8.js","assets/icon.03578936.js","assets/index.5ea7a59c.js","assets/useTitle.2f7cf153.js","assets/Layout.24a200e7.js","assets/index.b225f83f.js","assets/FolderTree.c5e60927.js","assets/index.3ecdc684.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))}],ne=r=>{var E;const{searchParams:a}=z(),u=c[(E=a.type)==null?void 0:E.toUpperCase()],s=[];return te.forEach(i=>{var b;i.provider&&!i.provider.test(r.provider)||(i.type===r.type||u&&i.type===u||i.exts==="*"||((b=i.exts)==null?void 0:b.includes(W(r.name).toLowerCase())))&&s.push({name:i.name,component:i.component})}),H(r.name).forEach(i=>{s.push({name:i.key,component:re(i.value)})}),s.push({name:"\u4E0B\u8F7D\u4FDD\u5B58\u6587\u4EF6",component:t(()=>n(()=>Promise.resolve().then(()=>Z),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,u]=U(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(O,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{u(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(w,{})]}}),e(q,{get fallback(){return e(G,{})},get children(){return e(K,{get component(){return a().component}})}})]}})}})},ce=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{Y as F,ce as a};