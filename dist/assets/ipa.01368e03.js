import{d as m,q as n,c9 as p,c as e,aa as u,E as r,c_ as g,c$ as d,a2 as a,cZ as f}from"./index.bc70a00f.js";import{F as h}from"./File.8e8c4f48.js";import"./icon.952970ee.js";import"./index.d190f2e0.js";import"./index.9acdfaf2.js";import"./Layout.e5f7450d.js";import"./index.15ffa8a9.js";import"./FolderTree.50349b33.js";import"./index.95c588e3.js";const R=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};