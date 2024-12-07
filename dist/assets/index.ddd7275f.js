import{c as t,K as S,a6 as k,q as V,at as L,au as R,bM as i,a2 as $,a1 as B,e as f,d,R as y,U as x,Q as P,S as h,I as E,bN as _,r as M,bO as I,as as p,a9 as c,ar as N,Y as n,Z as r,bP as W,bQ as U,bR as z,bS as Y,bT as H,bU as j,bV as F,bW as X,bX as J,bY as Q,bZ as Z,b_ as q,aJ as K,aW as G,b9 as ee,a as w,ah as T,b$ as te,n as ne,bk as re,be as oe,bf as ae,bg as ie,bh as se,bi as le,c0 as ce,ay as ue,c1 as me,c2 as ge}from"./index.a77dc6ce.js";import{c as D,I as de,d as _e,e as he,f as Ee,g as pe,b as fe}from"./useTitle.f6db3f38.js";import{c as Ie,d as be,e as Ae}from"./index.a697627e.js";import{A as ve}from"./LinkWithBase.83327cd6.js";import{S as Le}from"./index.16c0cad5.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(s||{}),Re=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Re||{});const $e=e=>{const o=V(()=>{if(!L.is_admin(R())){if(e.role===void 0)return!1;if(e.role===i.GENERAL&&!L.is_general(R()))return!1}return!0});return t(B,{get fallback(){return t(Te,e)},get children(){return[t($,{get when(){return!o()},children:null}),t($,{get when(){return e.children},get children(){return t(De,e)}})]}})},Te=e=>{const{pathname:o}=f(),a=d(),u=()=>o()===e.to;return t(ve,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:y,get href(){return e.to},onClick:m=>{var v;if(C(),e.refresh){(v=m.stopPropagation)==null||v.call(m);let g=e.to;g.startsWith("http")||(g=x(g)),window.open(g,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return a(e.title)}})]}})},De=e=>{const{pathname:o}=f(),[a,u]=M(o().includes(e.to)),m=d();return t(c,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(p,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return m(e.title)}})]}}),t(E,{as:Ie,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return a()},get children(){return t(c,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(S,{get each(){return e.items},children:o=>t($e,o)})}});function Se(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>r(()=>import("./Common.9ee4a730.js"),["assets/Common.9ee4a730.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/SettingItem.11a0bf88.js","assets/item_type.be442da4.js","assets/index.a697627e.js","assets/ResponsiveGrid.eaa53266.js","assets/LinkWithBase.83327cd6.js","assets/index.16c0cad5.js"])),A=[{title:"manage.sidemenu.profile",icon:W,to:"/@manage",role:i.GUEST,component:n(()=>r(()=>import("./Profile.285d3f5d.js"),["assets/Profile.285d3f5d.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/LinkWithBase.83327cd6.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:U,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:z,to:"/@manage/settings/site",component:()=>t(l,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:Y,to:"/@manage/settings/style",component:()=>t(l,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:H,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:j,to:"/@manage/settings/global",component:()=>t(l,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:D,to:"/@manage/settings/sso",component:()=>t(l,{get group(){return s.SSO}})},{title:"manage.sidemenu.ldap",icon:D,to:"/@manage/settings/ldap",component:()=>t(l,{get group(){return s.LDAP}})},{title:"manage.sidemenu.s3",icon:F,to:"/@manage/settings/s3",component:n(()=>r(()=>import("./S3.0764fb02.js"),["assets/S3.0764fb02.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/SettingItem.11a0bf88.js","assets/item_type.be442da4.js","assets/index.a697627e.js","assets/ResponsiveGrid.eaa53266.js","assets/FolderTree.67443d9a.js","assets/index.841ee779.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/LinkWithBase.83327cd6.js","assets/index.16c0cad5.js"]))},{title:"manage.sidemenu.other",icon:X,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.2bc39e80.js"),["assets/Other.2bc39e80.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/SettingItem.11a0bf88.js","assets/item_type.be442da4.js","assets/index.a697627e.js","assets/LinkWithBase.83327cd6.js","assets/index.16c0cad5.js"]))}]},{title:"manage.sidemenu.tasks",icon:Se,to:"/@manage/tasks",role:i.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:de,to:"/@manage/tasks/aria2",role:i.GENERAL,component:n(()=>r(()=>import("./offline_download.518b5f0c.js"),["assets/offline_download.518b5f0c.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/Tasks.f6f66563.js","assets/Paginator.30630d09.js","assets/index.a697627e.js"]))},{title:"manage.sidemenu.upload",icon:J,to:"/@manage/tasks/upload",role:i.GENERAL,component:n(()=>r(()=>import("./Upload.5b399dcb.js"),["assets/Upload.5b399dcb.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/Tasks.f6f66563.js","assets/Paginator.30630d09.js","assets/index.a697627e.js"]))},{title:"manage.sidemenu.copy",icon:_e,to:"/@manage/tasks/copy",role:i.GENERAL,component:n(()=>r(()=>import("./Copy.e383401f.js"),["assets/Copy.e383401f.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/Tasks.f6f66563.js","assets/Paginator.30630d09.js","assets/index.a697627e.js"]))}]},{title:"manage.sidemenu.users",icon:Q,to:"/@manage/users",component:n(()=>r(()=>import("./Users.0f2f30f3.js"),["assets/Users.0f2f30f3.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/DeletePopover.af37b138.js","assets/Wether.698c0279.js"]))},{title:"manage.sidemenu.storages",icon:Z,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.3b568774.js"),["assets/Storages.3b568774.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/DeletePopover.af37b138.js"]))},{title:"manage.sidemenu.metas",icon:Le,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.a5b73272.js"),["assets/Metas.a5b73272.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/DeletePopover.af37b138.js","assets/Wether.698c0279.js"]))},{title:"manage.sidemenu.indexes",icon:q,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.b0876298.js"),["assets/indexes.b0876298.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/Common.9ee4a730.js","assets/useTitle.f6db3f38.js","assets/SettingItem.11a0bf88.js","assets/item_type.be442da4.js","assets/index.a697627e.js","assets/ResponsiveGrid.eaa53266.js","assets/LinkWithBase.83327cd6.js","assets/index.16c0cad5.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:be,component:n(()=>r(()=>import("./backup-restore.94638855.js"),["assets/backup-restore.94638855.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/useTitle.f6db3f38.js","assets/index.841ee779.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:he,to:"/",role:i.GUEST,refresh:!0}],{isOpen:Pe,onOpen:we,onClose:C}=K();G(()=>ee.get("/auth/logout"));const Ce=()=>{const e=d(),{to:o}=f();return t(c,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(p,{spacing:"$2",get children(){return[t(T,{"aria-label":"menu",get icon(){return t(Ae,{})},display:{"@sm":"none"},onClick:we,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(p,{spacing:"$1",get children(){return t(T,{"aria-label":"logout",get icon(){return t(Ee,{})},onClick:()=>{te(),ne.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(re,{get opened(){return Pe()},placement:"left",onClose:C,get children(){return[t(oe,{}),t(ae,{get children(){return[t(ie,{}),t(se,{color:"$info9",get children(){return e("manage.title")}}),t(le,{get children(){return t(b,{items:A})}})]}})]}})]}})},Oe=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.d7d74649.js"),["assets/AddOrEdit.d7d74649.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.eaa53266.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.d7d74649.js"),["assets/AddOrEdit.d7d74649.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.eaa53266.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.e0fc74fb.js"),["assets/AddOrEdit.e0fc74fb.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/FolderTree.67443d9a.js","assets/index.a697627e.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.e0fc74fb.js"),["assets/AddOrEdit.e0fc74fb.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/FolderTree.67443d9a.js","assets/index.a697627e.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.c5e76d76.js"),["assets/AddOrEdit.c5e76d76.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/FolderTree.67443d9a.js","assets/index.a697627e.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.c5e76d76.js"),["assets/AddOrEdit.c5e76d76.js","assets/index.a77dc6ce.js","assets/index.d8037024.css","assets/FolderTree.67443d9a.js","assets/index.a697627e.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.e6c5967e.js"),["assets/2fa.e6c5967e.js","assets/index.a77dc6ce.js","assets/index.d8037024.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.eda9ea13.js"),["assets/Messenger.eda9ea13.js","assets/index.a77dc6ce.js","assets/index.d8037024.css"]))}],ke=e=>(pe(e.title),t(ue,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),O=(e,o=[])=>(e.forEach(a=>{a.children?O(a.children,o):o.push({to:ce(a.to,"/@manage"),component:a.component||(()=>t(ke,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),Ve=O(A).concat(Oe),Be=()=>{const e=d();return fe(()=>e("manage.title")),t(c,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ce,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(c,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return t(b,{items:A})}}),t(c,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(me,{get children(){return t(S,{each:Ve,children:o=>t(ge,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));export{Re as F,s as G,Ue as i};
