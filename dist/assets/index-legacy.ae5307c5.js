System.register(["./index-legacy.479435ca.js","./useTitle-legacy.43c4fcd1.js","./index-legacy.05b1e73f.js","./LinkWithBase-legacy.32d9c645.js","./index-legacy.4c2a0b44.js"],(function(e,t){"use strict";var n,o,r,i,a,c,l,s,d,g,m,u,p,h,f,b,v,y,$,E,j,A,S,C,w,k,I,L,O,x,P,T,R,_,D,G,z,N,U,B,V,W,Y,M,H,X,F,J,K,Q,Z,q,ee,te,ne,oe,re,ie,ae,ce,le,se,de,ge,me;return{setters:[e=>{n=e.c,o=e.z,r=e.Z,i=e.x,a=e.am,c=e.an,l=e.bF,s=e.V,d=e.U,g=e.e,m=e.d,u=e.L,p=e.G,h=e.E,f=e.S,b=e.I,v=e.bG,y=e.j,$=e.bH,E=e.al,j=e.a1,A=e.ak,S=e.N,C=e.O,w=e.bI,k=e.bJ,I=e.bK,L=e.bL,O=e.bM,x=e.bN,P=e.bO,T=e.bP,R=e.bQ,_=e.bR,D=e.bS,G=e.bT,z=e.aC,N=e.aP,U=e.b2,B=e.a,V=e.aa,W=e.bU,Y=e.n,M=e.bd,H=e.b7,X=e.b8,F=e.b9,J=e.ba,K=e.bb,Q=e.bV,Z=e.ar,q=e.bW,ee=e.bX},e=>{te=e.c,ne=e.I,oe=e.d,re=e.e,ie=e.f,ae=e.g,ce=e.b},e=>{le=e.c,se=e.d,de=e.e},e=>{ge=e.A},e=>{me=e.S}],execute:function(){var ue=e("G",(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(ue||{})),pe=e("F",(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(pe||{}));const he=e=>{const t=i((()=>{if(!a.is_admin(c())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!a.is_general(c()))return!1}return!0}));return n(d,{get fallback(){return n(fe,e)},get children(){return[n(s,{get when(){return!t()},children:null}),n(s,{get when(){return e.children},get children(){return n(be,e)}})]}})},fe=e=>{const{pathname:t}=g(),o=m(),r=()=>t()===e.to;return n(ge,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:u,get href(){return e.to},onClick:t=>{if(Ae(),e.refresh){t.stopPropagation?.();let n=e.to;n.startsWith("http")||(n=p(n)),window.open(n,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:r()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return r()?"$info4":""},get color(){return r()?"$info11":""},get external(){return e.external},get children(){return[n(f,{get when(){return e.icon},get children(){return n(b,{mr:"$2",get as(){return e.icon}})}}),n(v,{get children(){return o(e.title)}})]}})},be=e=>{const{pathname:t}=g(),[o,r]=y(t().includes(e.to)),i=m();return n(j,{w:"$full",get children(){return[n($,{justifyContent:"space-between",onClick:()=>{r(!o())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[n(E,{get children(){return[n(f,{get when(){return e.icon},get children(){return n(b,{mr:"$2",get as(){return e.icon}})}}),n(v,{get children(){return i(e.title)}})]}}),n(b,{as:le,get transform(){return o()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),n(f,{get when(){return o()},get children(){return n(j,{pl:"$2",get children(){return n(ve,{get items(){return e.children}})}})}})]}})},ve=e=>n(r,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return n(o,{get each(){return e.items},children:e=>n(he,e)})}}),ye=S((()=>C((()=>t.import("./Common-legacy.684e8162.js")),void 0))),$e=[{title:"manage.sidemenu.profile",icon:w,to:"/@amore",role:l.GUEST,component:S((()=>C((()=>t.import("./Profile-legacy.8bda7587.js")),void 0)))},{title:"manage.sidemenu.settings",icon:k,to:"/@amore/settings",children:[{title:"manage.sidemenu.site",icon:I,to:"/@amore/settings/site",component:()=>n(ye,{get group(){return ue.SITE}})},{title:"manage.sidemenu.style",icon:L,to:"/@amore/settings/style",component:()=>n(ye,{get group(){return ue.STYLE}})},{title:"manage.sidemenu.preview",icon:O,to:"/@amore/settings/preview",component:()=>n(ye,{get group(){return ue.PREVIEW}})},{title:"manage.sidemenu.global",icon:x,to:"/@amore/settings/global",component:()=>n(ye,{get group(){return ue.GLOBAL}})},{title:"manage.sidemenu.sso",icon:te,to:"/@amore/settings/sso",component:()=>n(ye,{get group(){return ue.SSO}})},{title:"manage.sidemenu.ldap",icon:te,to:"/@amore/settings/ldap",component:()=>n(ye,{get group(){return ue.LDAP}})},{title:"manage.sidemenu.s3",icon:P,to:"/@amore/settings/s3",component:S((()=>C((()=>t.import("./S3-legacy.a04a7cff.js")),void 0)))},{title:"manage.sidemenu.other",icon:T,to:"/@amore/settings/other",component:S((()=>C((()=>t.import("./Other-legacy.ff72191a.js")),void 0)))}]},{title:"manage.sidemenu.tasks",icon:function(e){return A({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@amore/tasks",children:[{title:"manage.sidemenu.offline_download",icon:ne,to:"/@amore/tasks/aria2",component:S((()=>C((()=>t.import("./offline_download-legacy.31f565de.js")),void 0)))},{title:"manage.sidemenu.upload",icon:R,to:"/@amore/tasks/upload",component:S((()=>C((()=>t.import("./Upload-legacy.f826deb4.js")),void 0)))},{title:"manage.sidemenu.copy",icon:oe,to:"/@amore/tasks/copy",component:S((()=>C((()=>t.import("./Copy-legacy.47309125.js")),void 0)))}]},{title:"manage.sidemenu.users",icon:_,to:"/@amore/users",component:S((()=>C((()=>t.import("./Users-legacy.67be3c79.js")),void 0)))},{title:"manage.sidemenu.storages",icon:D,to:"/@amore/storages",component:S((()=>C((()=>t.import("./Storages-legacy.50c18809.js")),void 0)))},{title:"manage.sidemenu.metas",icon:me,to:"/@amore/metas",component:S((()=>C((()=>t.import("./Metas-legacy.200024b0.js")),void 0)))},{title:"manage.sidemenu.indexes",icon:G,to:"/@amore/indexes",component:S((()=>C((()=>t.import("./indexes-legacy.1d895ae6.js")),void 0)))},{title:"manage.sidemenu.backup-restore",to:"/@amore/backup-restore",icon:se,component:S((()=>C((()=>t.import("./backup-restore-legacy.f5399af6.js")),void 0)))},{title:"manage.sidemenu.home",icon:re,to:"/",role:l.GUEST,refresh:!0}],{isOpen:Ee,onOpen:je,onClose:Ae}=z();N((()=>U.get("/auth/logout")));const Se=()=>{const e=m(),{to:t}=g();return n(j,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return B("$background","$neutral2")()},get children(){return[n($,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[n(E,{spacing:"$2",get children(){return[n(V,{"aria-label":"menu",get icon(){return n(de,{})},display:{"@sm":"none"},onClick:je,size:"sm"}),n(v,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{t("/@amore")},get children(){return e("manage.title")}})]}}),n(E,{spacing:"$1",get children(){return n(V,{"aria-label":"logout",get icon(){return n(ie,{})},onClick:()=>{W(),Y.success(e("manage.logout_success")),t(`/@tiamo?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),n(M,{get opened(){return Ee()},placement:"left",onClose:Ae,get children(){return[n(H,{}),n(X,{get children(){return[n(F,{}),n(J,{color:"$info9",get children(){return e("manage.title")}}),n(K,{get children(){return n(ve,{items:$e})}})]}})]}})]}})},Ce=[{to:"/storages/add",component:S((()=>C((()=>t.import("./AddOrEdit-legacy.83ec20c5.js")),void 0)))},{to:"/storages/edit/:id",component:S((()=>C((()=>t.import("./AddOrEdit-legacy.83ec20c5.js")),void 0)))},{to:"/users/add",component:S((()=>C((()=>t.import("./AddOrEdit-legacy.48d79d4f.js")),void 0)))},{to:"/users/edit/:id",component:S((()=>C((()=>t.import("./AddOrEdit-legacy.48d79d4f.js")),void 0)))},{to:"/metas/add",component:S((()=>C((()=>t.import("./AddOrEdit-legacy.8f2aef1a.js")),void 0)))},{to:"/metas/edit/:id",component:S((()=>C((()=>t.import("./AddOrEdit-legacy.8f2aef1a.js")),void 0)))},{to:"/2fa",component:S((()=>C((()=>t.import("./2fa-legacy.c2b9f4d3.js")),void 0)))},{to:"/messenger",component:S((()=>C((()=>t.import("./Messenger-legacy.369d21d9.js")),void 0)))}],we=e=>(ae(e.title),n(Z,{h:"$full",get children(){return n(v,{get children(){return e.title}})}})),ke=(e,t=[])=>(e.forEach((e=>{e.children?ke(e.children,t):t.push({to:Q(e.to,"/@amore"),component:e.component||(()=>n(we,{get title(){return e.title},get to(){return e.to||"empty"}}))})})),t),Ie=ke($e).concat(Ce),Le=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const e=m();return ce((()=>e("manage.title"))),n(j,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[n(Se,{}),n($,{w:"$full",h:"calc(100vh - 64px)",get children(){return[n(j,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return B("$background","$neutral2")()},overflowY:"auto",get children(){return n(ve,{items:$e})}}),n(j,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return n(q,{get children(){return n(o,{each:Ie,children:e=>n(ee,{get path(){return e.to},get component(){return e.component}})})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));e("i",Le)}}}));