import{c as e,av as y,I as _,ai as D,a3 as o,a6 as l,bN as F,b5 as P,aN as v,ce as L,cJ as A,d as f,q as d,cK as $,a7 as T,aq as k,ag as x,G as m,am as C,K as S,an as j,cp as w,S as g,aH as R,as as I,ct as V,Q as B,cL as M,Y as t,Z as n,e as z,cu as W,cM as H,r as U,bc as X,$ as q,a0 as G,ao as K}from"./index.179c902f.js";import{g as N,O as i}from"./icon.116b68c7.js";import{k as J}from"./index.173c1d7a.js";import{T as Q}from"./Layout.d6133b6c.js";const Y=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(_,{get color(){return D()},boxSize:"$20",get as(){return N(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(F,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(P,{color:"$neutral10",size:"sm",get children(){return[v(()=>L(o.obj.size))," \xB7 ",v(()=>A(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),O=()=>{const r=f(),u=d(()=>$(o.obj.name)),{currentObjLink:a}=T();return e(g,{get when(){return u().length},get children(){return e(k,{get children(){return[e(x,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:J})},get children(){return r("home.preview.open_with")}}),e(C,{get children(){return e(S,{get each(){return u()},children:s=>e(j,{as:"a",target:"_blank",get href(){return w(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const u=f(),{copyCurrentRawLink:a}=R();return e(Y,{get children(){return[e(I,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>a(!0),get children(){return u("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return u("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(O,{})}})]}})},Z=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:u}=T(),a=d(()=>w(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:u(!0),ts:!0}));return e(M,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return a()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:Q,onClick:()=>{window.open(a(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return B()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML \u6E32\u67D3",exts:["html"],component:t(()=>n(()=>import("./html.70658e98.js"),["assets/html.70658e98.js","assets/index.179c902f.js","assets/index.43114733.css"]))},{name:"\u5728\u7EBF\u963F\u91CC\u89C6\u9891",type:i.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.a8312bb8.js"),["assets/aliyun_video.a8312bb8.js","assets/index.179c902f.js","assets/index.43114733.css","assets/icon.116b68c7.js","assets/index.173c1d7a.js","assets/useTitle.c1441161.js","assets/Layout.d6133b6c.js","assets/index.cddaa29e.js","assets/FolderTree.7b92737b.js","assets/index.7ffbfad4.js","assets/video_box.7f3d9a60.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.ecd00d48.js"]))},{name:"Markdown \u5728\u7EBF\u9884\u89C8",type:i.TEXT,component:t(()=>n(()=>import("./markdown.39272e49.js"),["assets/markdown.39272e49.js","assets/index.179c902f.js","assets/index.43114733.css"]))},{name:"Markdown \u81EA\u52A8\u6362\u884C",type:i.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.121c640c.js"),["assets/markdown_with_word_wrap.121c640c.js","assets/index.179c902f.js","assets/index.43114733.css"]))},{name:"\u6253\u5F00 URL",exts:["url"],component:t(()=>n(()=>import("./url.7b621df8.js"),["assets/url.7b621df8.js","assets/index.179c902f.js","assets/index.43114733.css","assets/icon.116b68c7.js","assets/index.173c1d7a.js","assets/useTitle.c1441161.js","assets/Layout.d6133b6c.js","assets/index.cddaa29e.js","assets/FolderTree.7b92737b.js","assets/index.7ffbfad4.js"]))},{name:"TXT \u5728\u7EBF\u9884\u89C8",type:i.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.9c9752d7.js"),["assets/text-editor.9c9752d7.js","assets/index.179c902f.js","assets/index.43114733.css","assets/index.797c3f77.js"]))},{name:"\u5728\u7EBF\u56FE\u7247\u9884\u89C8",type:i.IMAGE,component:t(()=>n(()=>import("./image.67e0ed3b.js"),["assets/image.67e0ed3b.js","assets/index.179c902f.js","assets/index.43114733.css","assets/ImageWithError.9fcd33d0.js"]))},{name:"\u5728\u7EBF\u89C6\u9891\u64AD\u653E",type:i.VIDEO,component:t(()=>n(()=>import("./video.becc7673.js"),["assets/video.becc7673.js","assets/index.179c902f.js","assets/index.43114733.css","assets/icon.116b68c7.js","assets/index.173c1d7a.js","assets/useTitle.c1441161.js","assets/Layout.d6133b6c.js","assets/index.cddaa29e.js","assets/FolderTree.7b92737b.js","assets/index.7ffbfad4.js","assets/video_box.7f3d9a60.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.ecd00d48.js"]))},{name:"\u5728\u7EBF\u64AD\u653E\u97F3\u4E50",type:i.AUDIO,component:t(()=>n(()=>import("./audio.fbe9e4dc.js"),["assets/audio.fbe9e4dc.js","assets/audio.6d9b38d8.css","assets/index.179c902f.js","assets/index.43114733.css","assets/icon.116b68c7.js","assets/index.173c1d7a.js","assets/useTitle.c1441161.js","assets/Layout.d6133b6c.js","assets/index.cddaa29e.js","assets/FolderTree.7b92737b.js","assets/index.7ffbfad4.js"]))},{name:"IPA \u6587\u4EF6",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.d06a7a1c.js"),["assets/ipa.d06a7a1c.js","assets/index.179c902f.js","assets/index.43114733.css","assets/icon.116b68c7.js","assets/index.173c1d7a.js","assets/useTitle.c1441161.js","assets/Layout.d6133b6c.js","assets/index.cddaa29e.js","assets/FolderTree.7b92737b.js","assets/index.7ffbfad4.js"]))},{name:"PLIST \u6587\u4EF6",exts:["plist"],component:t(()=>n(()=>import("./plist.70f364af.js"),["assets/plist.70f364af.js","assets/index.179c902f.js","assets/index.43114733.css","assets/icon.116b68c7.js","assets/index.173c1d7a.js","assets/useTitle.c1441161.js","assets/Layout.d6133b6c.js","assets/index.cddaa29e.js","assets/FolderTree.7b92737b.js","assets/index.7ffbfad4.js"]))},{name:"\u5728\u7EBF\u529E\u516C\u6587\u6863",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.3b705551.js"),["assets/aliyun_office.3b705551.js","assets/index.179c902f.js","assets/index.43114733.css"]))},{name:"\u64AD\u653E\u7EC8\u7AEF\u5F55\u5C4F",exts:["cast"],component:t(()=>n(()=>import("./asciinema.06bc107e.js"),["assets/asciinema.06bc107e.js","assets/asciinema.4b7983dd.css","assets/index.179c902f.js","assets/index.43114733.css"]))}],ne=r=>{var E;const{searchParams:u}=z(),a=i[(E=u.type)==null?void 0:E.toUpperCase()],s=[];return te.forEach(c=>{var b;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||a&&c.type===a||c.exts==="*"||((b=c.exts)==null?void 0:b.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),H(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"\u4E0B\u8F7D\u4FDD\u5B58\u6587\u4EF6",component:t(()=>n(()=>Promise.resolve().then(()=>Z),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[u,a]=U(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(I,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return u().name},onChange:s=>{a(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(O,{})]}}),e(q,{get fallback(){return e(G,{})},get children(){return e(K,{get component(){return u().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{Y as F,ie as a};