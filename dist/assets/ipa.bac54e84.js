import{d as m,r as n,a7 as p,c as e,as as u,G as r,du as g,dv as d,a3 as a,dt as f}from"./index.dde646ed.js";import{F as h}from"./File.66f2b5b8.js";import"./icon.5a95e95a.js";import"./index.69c9985e.js";import"./useTitle.636d0da4.js";import"./Layout.d3ea70f4.js";import"./index.43b7db08.js";import"./FolderTree.d2cc6f7a.js";import"./index.8403a487.js";const R=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};