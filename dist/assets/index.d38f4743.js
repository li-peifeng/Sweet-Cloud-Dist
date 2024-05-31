import{c as t,K as S,a6 as V,q as k,ai as $,aj as L,bN as _,a2 as T,a1 as B,e as f,d,R as y,U as x,Q as P,S as h,I as E,bO as g,r as M,bP as I,ag as p,a9 as l,aw as W,Y as n,Z as r,bQ as U,bR as z,bS as Y,bT as N,bU as j,bV as H,bW as F,bX as X,bY as K,bZ as Q,b_ as Z,b$ as q,aK as J,a as w,am as D,c0 as G,n as ee,bl as te,bf as ne,bg as re,bh as oe,bi as ae,bj as ie,c1 as se,aA as le,c2 as ce,c3 as ue}from"./index.acee4acf.js";import{c as R,I as me,d as de,e as ge,f as _e,g as he,b as Ee}from"./useTitle.18dd8466.js";import{A as pe,c as fe,d as Ie,e as be}from"./index.0f261cec.js";import{S as ve}from"./index.3c420a85.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Ae=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Ae||{});const $e=e=>{const o=k(()=>{if(!$.is_admin(L())){if(e.role===void 0)return!1;if(e.role===_.GENERAL&&!$.is_general(L()))return!1}return!0});return t(B,{get fallback(){return t(Le,e)},get children(){return[t(T,{get when(){return!o()},children:null}),t(T,{get when(){return e.children},get children(){return t(Te,e)}})]}})},Le=e=>{const{pathname:o}=f(),a=d(),c=()=>o()===e.to;return t(pe,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:y,get href(){return e.to},onClick:u=>{var A;if(C(),e.refresh){(A=u.stopPropagation)==null||A.call(u);let m=e.to;m.startsWith("http")||(m=x(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(g,{get children(){return a(e.title)}})]}})},Te=e=>{const{pathname:o}=f(),[a,c]=M(o().includes(e.to)),u=d();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(p,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(g,{get children(){return u(e.title)}})]}}),t(E,{as:fe,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(V,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(S,{get each(){return e.items},children:o=>t($e,o)})}});function De(e){return W({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.c6f230dd.js"),["assets/Common.c6f230dd.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/SettingItem.4cee6c98.js","assets/item_type.be442da4.js","assets/index.0f261cec.js","assets/ResponsiveGrid.0765079e.js","assets/index.3c420a85.js"])),v=[{title:"manage.sidemenu.profile",icon:U,to:"/@amore",role:_.GUEST,component:n(()=>r(()=>import("./Profile.1eccfbae.js"),["assets/Profile.1eccfbae.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/index.0f261cec.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:z,to:"/@amore/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/@amore/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:N,to:"/@amore/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:j,to:"/@amore/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:H,to:"/@amore/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:R,to:"/@amore/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:R,to:"/@amore/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:F,to:"/@amore/settings/s3",component:n(()=>r(()=>import("./S3.cd310b8c.js"),["assets/S3.cd310b8c.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/SettingItem.4cee6c98.js","assets/item_type.be442da4.js","assets/index.0f261cec.js","assets/ResponsiveGrid.0765079e.js","assets/FolderTree.1ddc0b43.js","assets/index.4698b54f.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.3c420a85.js"]))},{title:"manage.sidemenu.other",icon:X,to:"/@amore/settings/other",component:n(()=>r(()=>import("./Other.a61ac9be.js"),["assets/Other.a61ac9be.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/SettingItem.4cee6c98.js","assets/item_type.be442da4.js","assets/index.0f261cec.js","assets/index.3c420a85.js"]))}]},{title:"manage.sidemenu.tasks",icon:De,to:"/@amore/tasks",children:[{title:"manage.sidemenu.offline_download",icon:me,to:"/@amore/tasks/aria2",component:n(()=>r(()=>import("./offline_download.1043cc4c.js"),["assets/offline_download.1043cc4c.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/Tasks.1c0baea7.js","assets/Paginator.42d12ed3.js","assets/index.0f261cec.js"]))},{title:"manage.sidemenu.upload",icon:K,to:"/@amore/tasks/upload",component:n(()=>r(()=>import("./Upload.df15ab55.js"),["assets/Upload.df15ab55.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/Tasks.1c0baea7.js","assets/Paginator.42d12ed3.js","assets/index.0f261cec.js"]))},{title:"manage.sidemenu.copy",icon:de,to:"/@amore/tasks/copy",component:n(()=>r(()=>import("./Copy.da54d85c.js"),["assets/Copy.da54d85c.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/Tasks.1c0baea7.js","assets/Paginator.42d12ed3.js","assets/index.0f261cec.js"]))}]},{title:"manage.sidemenu.users",icon:Q,to:"/@amore/users",component:n(()=>r(()=>import("./Users.d5f3de96.js"),["assets/Users.d5f3de96.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/DeletePopover.6fbe3b20.js","assets/Wether.7634dc66.js"]))},{title:"manage.sidemenu.storages",icon:Z,to:"/@amore/storages",component:n(()=>r(()=>import("./Storages.9aea4a99.js"),["assets/Storages.9aea4a99.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/DeletePopover.6fbe3b20.js"]))},{title:"manage.sidemenu.metas",icon:ve,to:"/@amore/metas",component:n(()=>r(()=>import("./Metas.7d5faa48.js"),["assets/Metas.7d5faa48.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/DeletePopover.6fbe3b20.js","assets/Wether.7634dc66.js"]))},{title:"manage.sidemenu.indexes",icon:q,to:"/@amore/indexes",component:n(()=>r(()=>import("./indexes.c6d6f4ad.js"),["assets/indexes.c6d6f4ad.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/Common.c6f230dd.js","assets/useTitle.18dd8466.js","assets/SettingItem.4cee6c98.js","assets/item_type.be442da4.js","assets/index.0f261cec.js","assets/ResponsiveGrid.0765079e.js","assets/index.3c420a85.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@amore/backup-restore",icon:Ie,component:n(()=>r(()=>import("./backup-restore.a70ec4e5.js"),["assets/backup-restore.a70ec4e5.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/useTitle.18dd8466.js","assets/index.4698b54f.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:ge,to:"/",role:_.GUEST,refresh:!0}],{isOpen:Re,onOpen:Se,onClose:C}=J(),Pe=()=>{const e=d(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(p,{spacing:"$2",get children(){return[t(D,{"aria-label":"menu",get icon(){return t(be,{})},display:{"@sm":"none"},onClick:Se,size:"sm"}),t(g,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@amore")},get children(){return e("manage.title")}})]}}),t(p,{spacing:"$1",get children(){return t(D,{"aria-label":"logout",get icon(){return t(_e,{})},onClick:()=>{G(),ee.success(e("manage.logout_success")),o(`/@tiamo?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(te,{get opened(){return Re()},placement:"left",onClose:C,get children(){return[t(ne,{}),t(re,{get children(){return[t(oe,{}),t(ae,{color:"$info9",get children(){return e("manage.title")}}),t(ie,{get children(){return t(b,{items:v})}})]}})]}})]}})},we=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.aa21fae8.js"),["assets/AddOrEdit.aa21fae8.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.0765079e.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.aa21fae8.js"),["assets/AddOrEdit.aa21fae8.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.0765079e.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.b25f5edc.js"),["assets/AddOrEdit.b25f5edc.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/FolderTree.1ddc0b43.js","assets/index.0f261cec.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.b25f5edc.js"),["assets/AddOrEdit.b25f5edc.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/FolderTree.1ddc0b43.js","assets/index.0f261cec.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.d76d2138.js"),["assets/AddOrEdit.d76d2138.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/FolderTree.1ddc0b43.js","assets/index.0f261cec.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.d76d2138.js"),["assets/AddOrEdit.d76d2138.js","assets/index.acee4acf.js","assets/index.bf275d9b.css","assets/FolderTree.1ddc0b43.js","assets/index.0f261cec.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.3413714b.js"),["assets/2fa.3413714b.js","assets/index.acee4acf.js","assets/index.bf275d9b.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.8e305b8b.js"),["assets/Messenger.8e305b8b.js","assets/index.acee4acf.js","assets/index.bf275d9b.css"]))}],Ce=e=>(he(e.title),t(le,{h:"$full",get children(){return t(g,{get children(){return e.title}})}})),O=(e,o=[])=>(e.forEach(a=>{a.children?O(a.children,o):o.push({to:se(a.to,"/@amore"),component:a.component||(()=>t(Ce,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),Oe=O(v).concat(we),Ve=()=>{const e=d();return Ee(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Pe,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return t(b,{items:v})}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(ce,{get children(){return t(S,{each:Oe,children:o=>t(ue,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Me=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Ae as F,i as G,Me as i};