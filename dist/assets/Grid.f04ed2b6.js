import{c as t,l as a,J as m,a2 as p,cj as s}from"./index.edd92069.js";import{G as u}from"./GridItem.93d38be8.js";import"./Folder.eb732572.js";import{a as c}from"./helper.694333ce.js";import"./index.80644838.js";import"./index.9603865c.js";import"./ImageWithError.7a824bae.js";import"./icon.4190ebb1.js";import"./index.85e46c99.js";import"./Layout.7307798e.js";import"./FolderTree.d168721d.js";import"./index.bce811c8.js";import"./Paginator.1e416188.js";import"./index.f562ebb7.js";const L=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(a.grid_item_size)+20}px,1fr))`},get children(){return t(m,{get each(){return p.objs},children:(i,n)=>t(u,{obj:i,get index(){return n()}})})}})};export{L as default};