import{bA as y,e as t,af as b,av as v,k as C,j as $,aB as d,c9 as _,a3 as p,r as M,aD as S,cJ as m,ar as L,S as l,bU as O,ao as E,aq as f,a7 as A,a as G,E as j,a0 as x,cj as H,l as w,bH as W,bI as z}from"./index.4232af5b.js";import{b as F}from"./Folder.acdbcea2.js";import{u as K}from"./index.be4f74f5.js";import{I as B}from"./ImageWithError.b1cbffc7.js";import{O as P,g as T}from"./icon.f31d9d7a.js";import{u as U,a as k}from"./helper.b9cab67b.js";import{G as q}from"./GridItem.9c5401a1.js";import"./Layout.3f393a90.js";import"./index.98cf95b7.js";import"./FolderTree.a2be7eb2.js";import"./index.82c1d5fb.js";import"./Paginator.d1229123.js";import"./index.eb385221.js";import"./index.815947bd.js";const D=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==P.IMAGE)return null;const{setPathAs:o}=K(),u=t(v,{get color(){return b()},boxSize:"$12",get as(){return T(e.obj)}}),[g,i]=C(!1),r=$(()=>d()&&(g()||e.obj.selected)),{show:a}=F({id:1}),{rawLink:I}=_(),{isMouseSupported:s}=k(),h=U();return t(A.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(p,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{M(()=>{S(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(L,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(O,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(B,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(E,{size:"lg"})},fallbackErr:u,get src(){return I(e.obj)},loading:"lazy",get cursor(){return!s()&&(!d()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!d()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},ie=e=>{const c=G(),o=$(()=>t(H,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(j,{get each(){return x.objs.filter(r=>r.is_dir)},children:(r,a)=>t(q,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:g,captureContentMenu:i}=k();return g(),t(p,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(W,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(z,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(j,{get each(){return x.objs},children:(r,a)=>t(D,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{ie as default};
