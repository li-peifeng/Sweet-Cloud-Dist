import{bB as y,e as t,af as b,ax as C,k as _,j as $,aD as d,c9 as v,a3 as p,r as M,aF as S,cJ as m,aq as L,S as l,bU as O,ao as E,ap as f,a7 as F,a as G,E as j,a0 as x,cj as W,l as w,bI as z,bJ as A}from"./index.db1e60aa.js";import{b as H}from"./Folder.48107c55.js";import{u as K}from"./index.27e4df2d.js";import{I as B}from"./ImageWithError.2c6157f5.js";import{O as J,g as P}from"./icon.72d5d85a.js";import{u as T,a as k}from"./helper.f181e835.js";import{G as U}from"./GridItem.a15f52c5.js";import"./Layout.9e474888.js";import"./index.3ad130df.js";import"./FolderTree.c93f5d73.js";import"./index.7ec66d8f.js";import"./Paginator.78da5f6c.js";import"./index.74f196d6.js";import"./index.89889096.js";const q=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==J.IMAGE)return null;const{setPathAs:o}=K(),u=t(C,{get color(){return b()},boxSize:"$12",get as(){return P(e.obj)}}),[g,i]=_(!1),r=$(()=>d()&&(g()||e.obj.selected)),{show:a}=H({id:1}),{rawLink:I}=v(),{isMouseSupported:s}=k(),h=T();return t(F.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(p,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{M(()=>{S(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(L,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(O,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(B,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(E,{size:"lg"})},fallbackErr:u,get src(){return I(e.obj)},loading:"lazy",get cursor(){return!s()&&(!d()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!d()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},ie=e=>{const c=G(),o=$(()=>t(W,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(j,{get each(){return x.objs.filter(r=>r.is_dir)},children:(r,a)=>t(U,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:g,captureContentMenu:i}=k();return g(),t(p,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(z,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(A,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(j,{get each(){return x.objs},children:(r,a)=>t(q,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{ie as default};
