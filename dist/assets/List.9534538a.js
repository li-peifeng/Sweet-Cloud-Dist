import{bG as C,e as v,c as n,as as g,Q as w,aL as m,aN as A,dj as b,w as x,aO as k,S as y,I,ai as O,ax as M,b5 as a,ce as z,cJ as L,af as P,l as _,d as B,r as j,z as D,dk as K,dl as W,dm as E,J as f,K as H,a3 as T,a6 as F}from"./index.179c902f.js";import{b as G}from"./Folder.b55b6e07.js";import{u as J}from"./index.cddaa29e.js";import{a as R}from"./LinkWithBase.85207d10.js";import{g as N,O as Q}from"./icon.116b68c7.js";import{u as U,I as S,a as $}from"./helper.db48ff4d.js";import"./Layout.d6133b6c.js";import"./useTitle.c1441161.js";import"./FolderTree.7b92737b.js";import"./index.173c1d7a.js";import"./video_box.7f3d9a60.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.25a3f5c8.js";import"./index.7ffbfad4.js";import"./index.797c3f77.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"75%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"25%","@md":"18%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"32%"}}],V=e=>{const{isHide:o}=C();if(o(e.obj))return null;const{setPathAs:h}=J(),{show:u}=G({id:1}),{pushHref:s,to:i}=v(),{isMouseSupported:l}=$(),d=U(),c=()=>_.list_item_filename_overflow;return n(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:R,get href(){return e.obj.name},get cursor(){return!l()&&(!m()||d())?"pointer":"default"},get bgColor(){return A(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(s(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!m()){if(t.preventDefault(),d()){i(s(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{x(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(g,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return m()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(I,{class:"icon",boxSize:"$6",get color(){return O()},get as(){return N(e.obj)},mr:"$1","on:click":t=>{e.obj.type===Q.IMAGE&&(t.stopPropagation(),t.preventDefault(),M.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return z(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return L(e.obj.modified)}})]}})}})},de=()=>{const e=B(),[o,h]=j(),[u,s]=j(!1);D(()=>{o()&&K(o(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===o()?s(!u()):x(()=>{h(t.name),s(!1)})}}),{isMouseSupported:l,registerSelectContainer:d,captureContentMenu:c}=$();return d(),n(F,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(g,{class:"title",w:"$full",p:"$2",get children(){return[n(g,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return m()},get children(){return n(S,{get checked(){return W()},get indeterminate(){return E()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(H,{get each(){return T.objs},children:(t,p)=>n(V,{obj:t,get index(){return p()}})})]}})};export{de as default};