import{bG as C,e as v,c as n,as as g,Q as w,aL as m,aN as A,dd as b,w as j,aO as k,S as y,I,ai as O,ax as M,b5 as a,cd as z,cI as L,af as P,l as _,d as B,r as x,z as D,de as K,df as W,dg as E,J as f,K as H,a3 as T,a6 as F}from"./index.0796fe68.js";import{b as G}from"./Folder.814d602e.js";import{u as R}from"./index.8edf1b54.js";import{a as J}from"./LinkWithBase.7e26a6b0.js";import{g as N,O as Q}from"./icon.f6d34b56.js";import{u as U,I as S,a as $}from"./helper.b5b0dd19.js";import"./Layout.6895ba0a.js";import"./useTitle.ef99e565.js";import"./FolderTree.5d50ece5.js";import"./index.a998bc95.js";import"./video_box.f6870bb5.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.04f7e410.js";import"./index.cbee7b00.js";import"./index.3da47d91.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"75%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"25%","@md":"18%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"32%"}}],V=e=>{const{isHide:o}=C();if(o(e.obj))return null;const{setPathAs:h}=R(),{show:u}=G({id:1}),{pushHref:s,to:i}=v(),{isMouseSupported:l}=$(),d=U(),c=()=>_.list_item_filename_overflow;return n(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:J,get href(){return e.obj.name},get cursor(){return!l()&&(!m()||d())?"pointer":"default"},get bgColor(){return A(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(s(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!m()){if(t.preventDefault(),d()){i(s(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{j(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(g,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return m()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(I,{class:"icon",boxSize:"$6",get color(){return O()},get as(){return N(e.obj)},mr:"$1","on:click":t=>{e.obj.type===Q.IMAGE&&(t.stopPropagation(),t.preventDefault(),M.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return z(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return L(e.obj.modified)}})]}})}})},de=()=>{const e=B(),[o,h]=x(),[u,s]=x(!1);D(()=>{o()&&K(o(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===o()?s(!u()):j(()=>{h(t.name),s(!1)})}}),{isMouseSupported:l,registerSelectContainer:d,captureContentMenu:c}=$();return d(),n(F,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(g,{class:"title",w:"$full",p:"$2",get children(){return[n(g,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return m()},get children(){return n(S,{get checked(){return W()},get indeterminate(){return E()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(H,{get each(){return T.objs},children:(t,p)=>n(V,{obj:t,get index(){return p()}})})]}})};export{de as default};