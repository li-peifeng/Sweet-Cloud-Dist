System.register(["./index-legacy.479435ca.js","./Folder-legacy.a4f41e78.js","./index-legacy.82ec6914.js","./LinkWithBase-legacy.32d9c645.js","./icon-legacy.0a4c7298.js","./helper-legacy.019ed9f2.js","./Layout-legacy.c472b061.js","./useTitle-legacy.43c4fcd1.js","./FolderTree-legacy.45ccd58d.js","./index-legacy.05b1e73f.js","./video_box-legacy.6520772f.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.dd95a14d.js","./index-legacy.4c2a0b44.js","./index-legacy.f5037f45.js"],(function(e,t){"use strict";var n,r,i,l,a,c,o,s,d,g,u,m,b,h,j,f,p,w,y,x,$,k,v,A,_,C,S,z,M,E,L,P,D,I,K,W,B;return{setters:[e=>{n=e.bz,r=e.e,i=e.c,l=e.al,a=e.E,c=e.aE,o=e.x,s=e.d9,d=e.ci,g=e.aG,u=e.S,m=e.I,b=e.ab,h=e.aq,j=e.a_,f=e.c6,p=e.cE,w=e.a8,y=e.l,x=e.d,$=e.j,k=e.k,v=e.da,A=e.db,_=e.dc,C=e.y,S=e.z,z=e.W,M=e.Z},e=>{E=e.b},e=>{L=e.u},e=>{P=e.a},e=>{D=e.g,I=e.O},e=>{K=e.u,W=e.I,B=e.a},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=[{name:"name",textAlign:"left",w:{"@initial":"75%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"25%","@md":"18%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"32%"}}],F=e=>{const{isHide:x}=n();if(x(e.obj))return null;const{setPathAs:$}=L(),{show:k}=E({id:1}),{pushHref:v,to:A}=r(),{isMouseSupported:_}=B(),C=K(),S=()=>y.list_item_filename_overflow;return i(w.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return i(l,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get"data-index"(){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:a()}},as:P,get href(){return e.obj.name},get cursor(){return _()||c()&&!C()?"default":"pointer"},get bgColor(){return o((()=>!!e.obj.selected))()?a():void 0},"on:dblclick":t=>{_()&&(t.ctrlKey||t.metaKey||t.shiftKey||A(v(e.obj.name)))},"on:click":t=>{if(_())return t.preventDefault();c()&&(t.preventDefault(),C()?A(v(e.obj.name)):s(e.index,!e.obj.selected))},onMouseEnter:()=>{$(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{d((()=>{g(!1),s(e.index,!0,!0)})),k(t,{props:e.obj})},get children(){return[i(l,{class:"name-box",spacing:"$1",get w(){return t[0].w},get children(){return[i(u,{get when(){return c()},get children(){return i(W,{"on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{s(e.index,t.target.checked)}})}}),i(m,{class:"icon",boxSize:"$6",get color(){return b()},get as(){return D(e.obj)},mr:"$1","on:click":t=>{e.obj.type===I.IMAGE&&(t.stopPropagation(),t.preventDefault(),h.emit("gallery",e.obj.name))}}),i(j,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===S()?"unset":"nowrap","overflow-x":"scrollable"===S()?"auto":"hidden",textOverflow:"ellipsis"===S()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),i(j,{class:"size",get w(){return t[1].w},get textAlign(){return t[1].textAlign},get children(){return f(e.obj.size)}}),i(j,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return t[2].w},get textAlign(){return t[2].textAlign},get children(){return p(e.obj.modified)}})]}})}})};e("default",(()=>{const e=x(),[n,r]=$(),[a,o]=$(!1);k((()=>{n()&&v(n(),a())}));const s=e=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:()=>{e.name===n()?o(!a()):d((()=>{r(e.name),o(!1)}))}}),{isMouseSupported:m,registerSelectContainer:b,captureContentMenu:h}=B();return b(),i(M,{"oncapture:contextmenu":h,get classList(){return{"viselect-container":m()}},class:"list",w:"$full",spacing:"$1",get children(){return[i(l,{class:"title",w:"$full",p:"$2",get children(){return[i(l,{get w(){return t[0].w},spacing:"$1",get children(){return[i(u,{get when(){return c()},get children(){return i(W,{get checked(){return A()},get indeterminate(){return _()},onChange:e=>{g(e.target.checked)}})}}),i(j,C((()=>s(t[0])),{get children(){return e(`home.obj.${t[0].name}`)}}))]}}),i(j,C({get w(){return t[1].w}},(()=>s(t[1])),{get children(){return e(`home.obj.${t[1].name}`)}})),i(j,C({get w(){return t[2].w}},(()=>s(t[2])),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${t[2].name}`)}}))]}}),i(S,{get each(){return z.objs},children:(e,t)=>i(F,{obj:e,get index(){return t()}})})]}})}))}}}));
