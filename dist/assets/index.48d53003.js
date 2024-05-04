import{c as t,J as S,a5 as k,m as V,ac as $,ad as b,bH as _,a1 as D,a0 as B,e as f,d,Q as y,R as x,O as C,S as h,I as E,bI as g,q as M,bJ as I,aa as p,a6 as l,ao as W,X as n,Y as r,bK as z,aC as H,a as O,ag as T,bL as N,n as U,bd as Y,b7 as j,b8 as F,b9 as J,ba as X,bb as q,bM as K,as as Q,bN as Z,bO as G}from"./index.bc70a00f.js";import{d as ee,e as te,f as ne,g as re,h as oe,i as ae,j as R,k as ie,l as se,I as le,m as ce,n as ue,o as me,p as de,q as ge,r as _e,s as he,c as Ee}from"./index.d190f2e0.js";import{A as pe,c as fe,d as Ie,e as ve}from"./index.9acdfaf2.js";import{S as Ae}from"./index.95c588e3.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Le=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Le||{});const $e=e=>{const o=V(()=>{if(!$.is_admin(b())){if(e.role===void 0)return!1;if(e.role===_.GENERAL&&!$.is_general(b()))return!1}return!0});return t(B,{get fallback(){return t(be,e)},get children(){return[t(D,{get when(){return!o()},children:null}),t(D,{get when(){return e.children},get children(){return t(De,e)}})]}})},be=e=>{const{pathname:o}=f(),a=d(),c=()=>o()===e.to;return t(pe,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:y,get href(){return e.to},onClick:u=>{var L;if(P(),e.refresh){(L=u.stopPropagation)==null||L.call(u);let m=e.to;m.startsWith("http")||(m=x(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(g,{get children(){return a(e.title)}})]}})},De=e=>{const{pathname:o}=f(),[a,c]=M(o().includes(e.to)),u=d();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(p,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(g,{get children(){return u(e.title)}})]}}),t(E,{as:fe,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(v,{get items(){return e.children}})}})}})]}})},v=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(S,{get each(){return e.items},children:o=>t($e,o)})}});function Te(e){return W({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.f8e288c5.js"),["assets/Common.f8e288c5.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/SettingItem.d7fd03bf.js","assets/item_type.be442da4.js","assets/index.9acdfaf2.js","assets/ResponsiveGrid.d322475e.js","assets/index.95c588e3.js"])),A=[{title:"manage.sidemenu.profile",icon:ee,to:"/@amore",role:_.GUEST,component:n(()=>r(()=>import("./Profile.532b8433.js"),["assets/Profile.532b8433.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/index.9acdfaf2.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:te,to:"/@amore/settings",children:[{title:"manage.sidemenu.site",icon:ne,to:"/@amore/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:re,to:"/@amore/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:oe,to:"/@amore/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:ae,to:"/@amore/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:R,to:"/@amore/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:R,to:"/@amore/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:ie,to:"/@amore/settings/s3",component:n(()=>r(()=>import("./S3.078a7dd2.js"),["assets/S3.078a7dd2.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/SettingItem.d7fd03bf.js","assets/item_type.be442da4.js","assets/index.9acdfaf2.js","assets/ResponsiveGrid.d322475e.js","assets/FolderTree.50349b33.js","assets/index.700d8ecb.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.95c588e3.js"]))},{title:"manage.sidemenu.other",icon:se,to:"/@amore/settings/other",component:n(()=>r(()=>import("./Other.eab40362.js"),["assets/Other.eab40362.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/SettingItem.d7fd03bf.js","assets/item_type.be442da4.js","assets/index.9acdfaf2.js","assets/index.95c588e3.js"]))}]},{title:"manage.sidemenu.tasks",icon:Te,to:"/@amore/tasks",children:[{title:"manage.sidemenu.offline_download",icon:le,to:"/@amore/tasks/aria2",component:n(()=>r(()=>import("./offline_download.9bff123b.js"),["assets/offline_download.9bff123b.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/Tasks.bcf9a146.js","assets/Paginator.e1608e4d.js","assets/index.9acdfaf2.js"]))},{title:"manage.sidemenu.upload",icon:ce,to:"/@amore/tasks/upload",component:n(()=>r(()=>import("./Upload.cb278855.js"),["assets/Upload.cb278855.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/Tasks.bcf9a146.js","assets/Paginator.e1608e4d.js","assets/index.9acdfaf2.js"]))},{title:"manage.sidemenu.copy",icon:ue,to:"/@amore/tasks/copy",component:n(()=>r(()=>import("./Copy.f007fac4.js"),["assets/Copy.f007fac4.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/Tasks.bcf9a146.js","assets/Paginator.e1608e4d.js","assets/index.9acdfaf2.js"]))}]},{title:"manage.sidemenu.users",icon:me,to:"/@amore/users",component:n(()=>r(()=>import("./Users.8bc4e036.js"),["assets/Users.8bc4e036.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/DeletePopover.8a591802.js","assets/Wether.98860dc7.js"]))},{title:"manage.sidemenu.storages",icon:z,to:"/@amore/storages",component:n(()=>r(()=>import("./Storages.7a4ba0bf.js"),["assets/Storages.7a4ba0bf.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/DeletePopover.8a591802.js"]))},{title:"manage.sidemenu.metas",icon:Ae,to:"/@amore/metas",component:n(()=>r(()=>import("./Metas.0b9969c0.js"),["assets/Metas.0b9969c0.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/DeletePopover.8a591802.js","assets/Wether.98860dc7.js"]))},{title:"manage.sidemenu.indexes",icon:de,to:"/@amore/indexes",component:n(()=>r(()=>import("./indexes.c5415529.js"),["assets/indexes.c5415529.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/Common.f8e288c5.js","assets/index.d190f2e0.js","assets/SettingItem.d7fd03bf.js","assets/item_type.be442da4.js","assets/index.9acdfaf2.js","assets/ResponsiveGrid.d322475e.js","assets/index.95c588e3.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@amore/backup-restore",icon:Ie,component:n(()=>r(()=>import("./backup-restore.bf4cccaf.js"),["assets/backup-restore.bf4cccaf.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/index.d190f2e0.js","assets/index.700d8ecb.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:ge,to:"/",role:_.GUEST,refresh:!0}],{isOpen:Re,onOpen:Se,onClose:P}=H(),Ce=()=>{const e=d(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(p,{spacing:"$2",get children(){return[t(T,{"aria-label":"menu",get icon(){return t(ve,{})},display:{"@sm":"none"},onClick:Se,size:"sm"}),t(g,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@amore")},get children(){return e("manage.title")}})]}}),t(p,{spacing:"$1",get children(){return t(T,{"aria-label":"logout",get icon(){return t(_e,{})},onClick:()=>{N(),U.success(e("manage.logout_success")),o(`/@tiamo?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Y,{get opened(){return Re()},placement:"left",onClose:P,get children(){return[t(j,{}),t(F,{get children(){return[t(J,{}),t(X,{color:"$info9",get children(){return e("manage.title")}}),t(q,{get children(){return t(v,{items:A})}})]}})]}})]}})},Oe=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.33896b53.js"),["assets/AddOrEdit.33896b53.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.d322475e.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.33896b53.js"),["assets/AddOrEdit.33896b53.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.d322475e.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.c0dbc9d6.js"),["assets/AddOrEdit.c0dbc9d6.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/FolderTree.50349b33.js","assets/index.9acdfaf2.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.c0dbc9d6.js"),["assets/AddOrEdit.c0dbc9d6.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/FolderTree.50349b33.js","assets/index.9acdfaf2.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.b9c5d7bc.js"),["assets/AddOrEdit.b9c5d7bc.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/FolderTree.50349b33.js","assets/index.9acdfaf2.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.b9c5d7bc.js"),["assets/AddOrEdit.b9c5d7bc.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css","assets/FolderTree.50349b33.js","assets/index.9acdfaf2.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.304f1d9f.js"),["assets/2fa.304f1d9f.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.c23648d2.js"),["assets/Messenger.c23648d2.js","assets/index.bc70a00f.js","assets/index.92ddb4b6.css"]))}],Pe=e=>(he(e.title),t(Q,{h:"$full",get children(){return t(g,{get children(){return e.title}})}})),w=(e,o=[])=>(e.forEach(a=>{a.children?w(a.children,o):o.push({to:K(a.to,"/@amore"),component:a.component||(()=>t(Pe,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),we=w(A).concat(Oe),ke=()=>{const e=d();return Ee(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ce,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return t(v,{items:A})}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Z,{get children(){return t(S,{each:we,children:o=>t(G,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Me=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{Le as F,i as G,Me as i};