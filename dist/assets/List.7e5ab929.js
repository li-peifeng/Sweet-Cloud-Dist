import{bB as C,e as A,c as n,aa as m,O as w,aE as g,aH as p,cJ as b,v as x,aG as k,S as y,bU as S,I as M,ah as O,ar as I,a_ as a,bX as L,cb as P,a9 as _,l as z,d as B,q as j,y as H,cK as D,cL as E,cM as K,H as f,J as W,a2 as T,a5 as F}from"./index.edd92069.js";import{b as G}from"./Folder.eb732572.js";import{u as J}from"./index.80644838.js";import{m as R}from"./index.9603865c.js";import{g as U,O as q}from"./icon.4190ebb1.js";import{u as V,a as $}from"./helper.694333ce.js";import"./Layout.7307798e.js";import"./index.85e46c99.js";import"./FolderTree.d168721d.js";import"./Paginator.1e416188.js";import"./index.bce811c8.js";import"./index.f562ebb7.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],X=e=>{const{isHide:s}=C();if(s(e.obj))return null;const{setPathAs:h}=J(),{show:u}=G({id:1}),{pushHref:o,to:i}=A(),{isMouseSupported:l}=$(),d=V(),c=()=>z.list_item_filename_overflow;return n(_.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(m,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:R,get href(){return e.obj.name},get cursor(){return!l()&&(!g()||d())?"pointer":"default"},get bgColor(){return p(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(o(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!g()){if(t.preventDefault(),d()){i(o(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{x(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(m,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return g()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(M,{class:"icon",boxSize:"$6",get color(){return O()},get as(){return U(e.obj)},mr:"$1","on:click":t=>{e.obj.type===q.IMAGE&&(t.stopPropagation(),t.preventDefault(),I.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return L(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return P(e.obj.modified)}})]}})}})},le=()=>{const e=B(),[s,h]=j(),[u,o]=j(!1);H(()=>{s()&&D(s(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===s()?o(!u()):x(()=>{h(t.name),o(!1)})}}),{isMouseSupported:l,registerSelectContainer:d,captureContentMenu:c}=$();return d(),n(F,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(m,{class:"title",w:"$full",p:"$2",get children(){return[n(m,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return g()},get children(){return n(S,{get checked(){return E()},get indeterminate(){return K()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(W,{get each(){return T.objs},children:(t,v)=>n(X,{obj:t,get index(){return v()}})})]}})};export{le as default};