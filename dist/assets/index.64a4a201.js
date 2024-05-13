import{c as t,J as S,a5 as k,m as V,ah as $,ai as D,bL as _,a1 as T,a0 as B,e as f,d,Q as y,R as x,O as P,S as h,I as E,bM as g,q as M,bN as I,af as p,a8 as l,at as W,X as n,Y as r,bO as z,aH as H,a as O,al as b,bP as N,n as U,bi as Y,bc as j,bd as F,be as X,bf as q,bg as J,bQ as Q,ax as K,bR as Z,bS as G}from"./index.c8acd414.js";import{d as ee,e as te,f as ne,g as re,h as oe,i as ie,j as R,k as ae,l as se,I as le,m as ce,n as ue,o as me,p as de,q as ge,r as _e,s as he,c as Ee}from"./index.759e677f.js";import{A as pe,c as fe,d as Ie,e as ve}from"./index.d7c96965.js";import{S as Ae}from"./index.1b32c162.js";var a=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(a||{}),Le=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Le||{});const $e=e=>{const o=V(()=>{if(!$.is_admin(D())){if(e.role===void 0)return!1;if(e.role===_.GENERAL&&!$.is_general(D()))return!1}return!0});return t(B,{get fallback(){return t(De,e)},get children(){return[t(T,{get when(){return!o()},children:null}),t(T,{get when(){return e.children},get children(){return t(Te,e)}})]}})},De=e=>{const{pathname:o}=f(),i=d(),c=()=>o()===e.to;return t(pe,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:y,get href(){return e.to},onClick:u=>{var L;if(w(),e.refresh){(L=u.stopPropagation)==null||L.call(u);let m=e.to;m.startsWith("http")||(m=x(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(g,{get children(){return i(e.title)}})]}})},Te=e=>{const{pathname:o}=f(),[i,c]=M(o().includes(e.to)),u=d();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(p,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(g,{get children(){return u(e.title)}})]}}),t(E,{as:fe,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return i()},get children(){return t(l,{pl:"$2",get children(){return t(v,{get items(){return e.children}})}})}})]}})},v=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(S,{get each(){return e.items},children:o=>t($e,o)})}});function be(e){return W({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.3fd6b563.js"),["assets/Common.3fd6b563.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/SettingItem.f06a7a9f.js","assets/item_type.be442da4.js","assets/index.d7c96965.js","assets/ResponsiveGrid.509aaf36.js","assets/index.1b32c162.js"])),A=[{title:"manage.sidemenu.profile",icon:ee,to:"/@amore",role:_.GUEST,component:n(()=>r(()=>import("./Profile.32fa383f.js"),["assets/Profile.32fa383f.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/index.d7c96965.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:te,to:"/@amore/settings",children:[{title:"manage.sidemenu.site",icon:ne,to:"/@amore/settings/site",component:()=>t(s,{get group(){return a.SITE}})},{title:"manage.sidemenu.style",icon:re,to:"/@amore/settings/style",component:()=>t(s,{get group(){return a.STYLE}})},{title:"manage.sidemenu.preview",icon:oe,to:"/@amore/settings/preview",component:()=>t(s,{get group(){return a.PREVIEW}})},{title:"manage.sidemenu.global",icon:ie,to:"/@amore/settings/global",component:()=>t(s,{get group(){return a.GLOBAL}})},{title:"manage.sidemenu.sso",icon:R,to:"/@amore/settings/sso",component:()=>t(s,{get group(){return a.SSO}})},{title:"manage.sidemenu.ldap",icon:R,to:"/@amore/settings/ldap",component:()=>t(s,{get group(){return a.LDAP}})},{title:"manage.sidemenu.s3",icon:ae,to:"/@amore/settings/s3",component:n(()=>r(()=>import("./S3.c2ef093f.js"),["assets/S3.c2ef093f.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/SettingItem.f06a7a9f.js","assets/item_type.be442da4.js","assets/index.d7c96965.js","assets/ResponsiveGrid.509aaf36.js","assets/FolderTree.db0d4a57.js","assets/index.1f738bd2.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.1b32c162.js"]))},{title:"manage.sidemenu.other",icon:se,to:"/@amore/settings/other",component:n(()=>r(()=>import("./Other.1c9b5f03.js"),["assets/Other.1c9b5f03.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/SettingItem.f06a7a9f.js","assets/item_type.be442da4.js","assets/index.d7c96965.js","assets/index.1b32c162.js"]))}]},{title:"manage.sidemenu.tasks",icon:be,to:"/@amore/tasks",children:[{title:"manage.sidemenu.offline_download",icon:le,to:"/@amore/tasks/aria2",component:n(()=>r(()=>import("./offline_download.a12a47f7.js"),["assets/offline_download.a12a47f7.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/Tasks.ce638101.js","assets/Paginator.991a18e8.js","assets/index.d7c96965.js"]))},{title:"manage.sidemenu.upload",icon:ce,to:"/@amore/tasks/upload",component:n(()=>r(()=>import("./Upload.d51f3778.js"),["assets/Upload.d51f3778.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/Tasks.ce638101.js","assets/Paginator.991a18e8.js","assets/index.d7c96965.js"]))},{title:"manage.sidemenu.copy",icon:ue,to:"/@amore/tasks/copy",component:n(()=>r(()=>import("./Copy.ef7bc7c3.js"),["assets/Copy.ef7bc7c3.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/Tasks.ce638101.js","assets/Paginator.991a18e8.js","assets/index.d7c96965.js"]))}]},{title:"manage.sidemenu.users",icon:me,to:"/@amore/users",component:n(()=>r(()=>import("./Users.b4b68d9a.js"),["assets/Users.b4b68d9a.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/DeletePopover.67c9a3bb.js","assets/Wether.a265c2ef.js"]))},{title:"manage.sidemenu.storages",icon:z,to:"/@amore/storages",component:n(()=>r(()=>import("./Storages.16acc707.js"),["assets/Storages.16acc707.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/DeletePopover.67c9a3bb.js"]))},{title:"manage.sidemenu.metas",icon:Ae,to:"/@amore/metas",component:n(()=>r(()=>import("./Metas.b741e1ab.js"),["assets/Metas.b741e1ab.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/DeletePopover.67c9a3bb.js","assets/Wether.a265c2ef.js"]))},{title:"manage.sidemenu.indexes",icon:de,to:"/@amore/indexes",component:n(()=>r(()=>import("./indexes.39cca39f.js"),["assets/indexes.39cca39f.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/Common.3fd6b563.js","assets/index.759e677f.js","assets/SettingItem.f06a7a9f.js","assets/item_type.be442da4.js","assets/index.d7c96965.js","assets/ResponsiveGrid.509aaf36.js","assets/index.1b32c162.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@amore/backup-restore",icon:Ie,component:n(()=>r(()=>import("./backup-restore.96376618.js"),["assets/backup-restore.96376618.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/index.759e677f.js","assets/index.1f738bd2.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:ge,to:"/",role:_.GUEST,refresh:!0}],{isOpen:Re,onOpen:Se,onClose:w}=H(),Pe=()=>{const e=d(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(p,{spacing:"$2",get children(){return[t(b,{"aria-label":"menu",get icon(){return t(ve,{})},display:{"@sm":"none"},onClick:Se,size:"sm"}),t(g,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@amore")},get children(){return e("manage.title")}})]}}),t(p,{spacing:"$1",get children(){return t(b,{"aria-label":"logout",get icon(){return t(_e,{})},onClick:()=>{N(),U.success(e("manage.logout_success")),o(`/@tiamo?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Y,{get opened(){return Re()},placement:"left",onClose:w,get children(){return[t(j,{}),t(F,{get children(){return[t(X,{}),t(q,{color:"$info9",get children(){return e("manage.title")}}),t(J,{get children(){return t(v,{items:A})}})]}})]}})]}})},Oe=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.ccdc601f.js"),["assets/AddOrEdit.ccdc601f.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.509aaf36.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.ccdc601f.js"),["assets/AddOrEdit.ccdc601f.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.509aaf36.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.22dea198.js"),["assets/AddOrEdit.22dea198.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/FolderTree.db0d4a57.js","assets/index.d7c96965.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.22dea198.js"),["assets/AddOrEdit.22dea198.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/FolderTree.db0d4a57.js","assets/index.d7c96965.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.73ee4e2d.js"),["assets/AddOrEdit.73ee4e2d.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/FolderTree.db0d4a57.js","assets/index.d7c96965.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.73ee4e2d.js"),["assets/AddOrEdit.73ee4e2d.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css","assets/FolderTree.db0d4a57.js","assets/index.d7c96965.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.c6af965b.js"),["assets/2fa.c6af965b.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.47b371da.js"),["assets/Messenger.47b371da.js","assets/index.c8acd414.js","assets/index.92ddb4b6.css"]))}],we=e=>(he(e.title),t(K,{h:"$full",get children(){return t(g,{get children(){return e.title}})}})),C=(e,o=[])=>(e.forEach(i=>{i.children?C(i.children,o):o.push({to:Q(i.to,"/@amore"),component:i.component||(()=>t(we,{get title(){return i.title},get to(){return i.to||"empty"}}))})}),o),Ce=C(A).concat(Oe),ke=()=>{const e=d();return Ee(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Pe,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return t(v,{items:A})}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Z,{get children(){return t(S,{each:Ce,children:o=>t(G,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Me=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{Le as F,a as G,Me as i};
