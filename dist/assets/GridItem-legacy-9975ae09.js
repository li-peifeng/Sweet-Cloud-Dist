System.register(["./index-legacy-e34080e6.js","./Folder-legacy-335b1090.js","./index-legacy-09fd2b42.js","./LinkWithBase-legacy-503c4ba7.js","./ImageWithError-legacy-a2ac76f7.js","./icon-legacy-38e9e4c5.js","./helper-legacy-62a1c44f.js"],(function(e,t){"use strict";var r,n,a,l,o,i,s,c,u,g,d,b,p,h,j,f,m,y,x,$,v,k,w,I,z,E,_,M,S;return{setters:[e=>{r=e.bz,n=e.c,a=e.ab,l=e.l,o=e.I,i=e.j,s=e.x,c=e.aE,u=e.e,g=e.Z,d=e.E,b=e.dh,p=e.ck,h=e.aG,j=e.ar,f=e.aq,m=e.S,y=e.ap,x=e.a_,$=e.a8},e=>{v=e.b},e=>{k=e.u},e=>{w=e.a},e=>{I=e.I},e=>{z=e.g,E=e.O},e=>{_=e.u,M=e.I,S=e.a}],execute:function(){e("G",(e=>{const{isHide:t}=r();if(t(e.obj))return null;const{setPathAs:A}=k(),C=n(o,{get color(){return a()},get boxSize(){return parseInt(l.grid_item_size)-30+"px"},get as(){return z(e.obj)}}),[D,G]=i(!1),P=s((()=>c()&&(D()||e.obj.selected))),{show:H}=v({id:1}),{pushHref:K,to:L}=u(),{isMouseSupported:W}=S(),O=_();return n($.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get"data-index"(){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:d()}},as:w,get href(){return e.obj.name},get cursor(){return W()||c()&&!O()?"default":"pointer"},get bgColor(){return s((()=>!!e.obj.selected))()?d():void 0},"on:dblclick":t=>{W()&&(t.ctrlKey||t.metaKey||t.shiftKey||L(K(e.obj.name)))},"on:click":t=>{if(W())return t.preventDefault();c()&&(t.preventDefault(),O()?L(K(e.obj.name)):b(e.index,!e.obj.selected))},onMouseEnter:()=>{G(!0),A(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{G(!1)},onContextMenu:t=>{p((()=>{h(!1),b(e.index,!0,!0)})),H(t,{props:e.obj})},get children(){return[n(j,{class:"item-thumbnail",get h(){return`${parseInt(l.grid_item_size)}px`},w:"$full","on:dblclick":t=>{W()&&e.obj.type===E.IMAGE&&(t.stopPropagation(),t.preventDefault(),f.emit("gallery",e.obj.name))},"on:click":t=>{W()||c()&&!O()||e.obj.type===E.IMAGE&&(t.stopPropagation(),t.preventDefault(),f.emit("gallery",e.obj.name))},pos:"relative",get children(){return[n(m,{get when(){return P()},get children(){return n(M,{pos:"absolute",left:"$1",top:"$1","on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(m,{get when(){return e.obj.thumb},fallback:C,get children(){return n(I,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(y,{size:"lg"})},fallbackErr:C,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),n(x,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})}))}}}));
