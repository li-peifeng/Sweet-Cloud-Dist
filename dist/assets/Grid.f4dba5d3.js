import{c as t,l as a,J as m,a2 as p,cm as s}from"./index.d8345142.js";import{G as u}from"./GridItem.f6397e60.js";import"./Folder.97345716.js";import{a as c}from"./helper.61ec9e64.js";import"./index.a78f808e.js";import"./index.47affdfc.js";import"./ImageWithError.08f4912c.js";import"./icon.cea7be18.js";import"./index.b24fbaa2.js";import"./Layout.c39b2a8e.js";import"./FolderTree.a6f4ec4c.js";import"./index.acc641f8.js";import"./Paginator.5af083e4.js";import"./index.96a03c9a.js";const L=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(a.grid_item_size)+20}px,1fr))`},get children(){return t(m,{get each(){return p.objs},children:(i,n)=>t(u,{obj:i,get index(){return n()}})})}})};export{L as default};
