import{u as bt,a as ze,c as e,I as Re,b as wt,d as b,e as O,s as te,n as B,f as rt,p as J,g as _t,h as kt,_ as ot,l as ne,o as Pe,i as _,P as vt,j as $t,k as yt,m as V,q as $,r as Ct,t as ve,v as xt,w as St,x as Mt,y as $e,M as W,z as q,A as N,B as G,S as w,C as ye,T as Ot,F as Ft,D as oe,E as C,G as K,H as ce,J as de,K as zt,L as Rt,N as Tt,O as He,Q as at,R as It,U as Bt,V as Lt,W as pe,X as fe,Y as be,Z as De,$ as Ce,a0 as we,a1 as M,a2 as z,a3 as Et,a4 as A,a5 as X,a6 as ue,a7 as At,a8 as Pt,a9 as Te,aa as U,ab as Ht,ac as xe,ad as Se,ae,af as je,ag as lt,ah as j,ai as se,aj as Ve,ak as re,al as Dt,am as jt,an as Ne,ao as E,ap as Vt,aq as Nt,ar as g,as as it,at as Ut,au as Wt,av as qt,aw as Gt,ax as Kt,ay as Xt,az as st,aA as Jt,aB as ct,aC as y,aD as Ie,aE as Yt,aF as Qt,aG as Zt,aH as Xe,aI as Je,aJ as en,aK as tn,aL as nn,aM as ut,aN as rn,aO as on,aP as L,aQ as an,aR as P,aS as ln,aT as sn,aU as cn,aV as un,aW as dn,aX as hn,aY as gn,aZ as mn,a_ as Me,a$ as pn,b0 as fn,b1 as Ye,b2 as bn,b3 as wn,b4 as _n,b5 as Qe,b6 as kn,b7 as vn,b8 as $n,b9 as yn,ba as Cn,bb as xn,bc as Sn,bd as Mn,be as On,bf as Ee,bg as Fn,bh as zn,bi as Rn,bj as Tn,bk as In,bl as Bn,bm as Ln,bn as En,bo as An,bp as Pn,bq as Hn,br as Dn,bs as jn,bt as Vn,bu as Nn}from"./index.edd92069.js";import{F as Un,a as Wn,u as qn,B as dt,b as ht,I as Gn,c as Kn}from"./index.85e46c99.js";import{u as T,r as Xn,a as Jn,R as Yn}from"./index.80644838.js";import{F as Qn,M as Ue}from"./FolderTree.d168721d.js";import{A as Zn,F as gt,B as er,T as tr,a as nr}from"./index.9603865c.js";const rr=()=>{const{toggleColorMode:t}=bt(),n=ze({size:"$8",component:Wn,p:"$0_5"},{size:"$8",component:Un,p:"$0_5"});return e(Re,{cursor:"pointer",get boxSize(){return n().size},get as(){return n().component},onClick:t,get p(){return n().p}})};function ke(t){return t==null||t===""}function or(t){return t==null}async function ar(t,n){let r="/downloads/dolcecasa";const o=await rt.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(ke(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const lr=()=>{const{rawLinks:t}=wt(),n=b(),{pathname:r}=O();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=te(),l=async(s,a)=>{var c;if(a.is_dir){const u=await kt(J(r(),s,a.name),ot());if(u.code!==200)return u.message;const d=[];for(const m of(c=u.data.content)!=null?c:[]){const k=await l(J(s,a.name),m);if(typeof k=="string")return k;d.push(...k)}return d}else return[{path:J(s,a.name),dir:s,url:_t(J(r(),s),a,"direct",!0),name:a.name}]},{aria2_rpc_url:i,aria2_rpc_secret:h}=ne;if(!i){B.warning(n("home.toolbar.aria2_not_set"));return}try{let s="/downloads/dolcecasa";s=await ar(i,h);let a=!1;B.info(`${n("home.package_download.fetching_struct")}`);for(const c of o){const u=await l("",c);if(typeof u!="object"||u.length===void 0)return B.error(`${n("home.package_download.fetching_struct_failed")}: ${u}`),u;for(let d=0;d<u.length;d++){if(ke(u[d].path)||or(u[d].dir)||ke(u[d].url)||ke(u[d].name)){B.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(u[d])}`);continue}a||(a=!0,B.info(`${n("home.package_download.downloading")}`));const m=await rt.post(i,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+h,[u[d].url],{out:u[d].name,dir:s+u[d].dir,"check-certificate":"false"}]});console.log(m)}}B.success(n("home.toolbar.send_aria2_success"))}catch(s){console.error(s),B.error(n("home.toolbar.aria2_set_error"))}}}},ir=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),sr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),_(t.removeEventListener.bind(t,"motioncomplete",n,r))},cr=t=>{let{initial:n=!0}=t;Pe(()=>n=!0);let r=!1,o=[],l=[],i=[];return _(()=>{i.concat(l).forEach(h=>h()),l=i=o=[]}),e(Mt.Provider,{value:{addCleanup:h=>l.push(h),addMount:h=>o.push(h),initial:()=>n},get children(){return e(vt.Provider,{value:void 0,get children(){return $t(()=>{const h=yt(()=>t.children),s=V(()=>ir(h())),[a,c]=$(),[u,d]=$();return Ct(ve(s,v=>{i.push(...l),l=[],xt(()=>{t.exitBeforeEnter?(c(),k(()=>!r&&m(v))):(m(v),k())})})),[a,u];function m(v){c(v),o.forEach(I=>I()),o=[]}function k(v){var le;const I=()=>{d(),i.forEach(ie=>ie()),i=[],v==null||v()},p=d((le=a())!=null?le:u());if(!p)return I();const x=St.get(p);if(!x||!x.getOptions().exit)return I();x.setActive("exit",r=!0),sr(p,()=>{r=!1,I()})}})}})}})},Be=t=>{var s;const[n,r]=$((s=t.defaultValue)!=null?s:""),o=b();let l;const i=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};$e(()=>{l&&(l.focus(),i()),_(()=>{l&&l.setSelectionRange(0,0)})});const h=()=>{var a;if(!n()){B.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(K,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(W,{}),e(q,{get children(){return[e(N,{get children(){return o(t.title)}}),e(G,{get children(){return[e(w,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(w,{get when(){return t.type==="text"},get fallback(){return e(ye,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i,onKeyDown:a=>{a.key==="Enter"&&h()}})},get children(){return e(Ot,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i})}}),e(w,{get when(){return t.tips},get children(){return e(Ft,{get children(){return t.tips}})}}),e(w,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(C,{get loading(){return t.loading},onClick:()=>h(),get children(){return o("global.ok")}})]}})]}})]}})},ur=()=>{const{pathname:t}=O(),n=V(()=>["",...t().split("/").filter(Boolean)]),r=b(),{setPathAs:o}=T(),l=V(()=>{const i={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(ne.position_of_header_navbar){case"only_navbar_sticky":return{...i,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...i,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(Lt,ce(l,{background:"$background",class:"nav",w:"$full",get children(){return e(de,{get each(){return n()},children:(i,h)=>{const s=V(()=>h()===n().length-1),a=n().slice(0,h()+1).join("/"),c=zt(a);let u=()=>i;return u()===""&&(u=()=>pe("home_icon")+r("manage.sidemenu.home")),e(Rt,{class:"nav-item",get children(){return[e(Tt,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:He(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return s()},get as(){return s()?void 0:at},get href(){return It(c)},onMouseEnter:()=>o(a),children:u}),e(w,{get when(){return!s()},get children(){return e(Bt,{class:"nav-separator"})}})]}})}})}}))},dr=fe(()=>be(()=>import("./Folder.eb732572.js").then(t=>t.F),["assets/Folder.eb732572.js","assets/Folder.b511ba9e.css","assets/index.edd92069.js","assets/index.c5a79659.css","assets/index.80644838.js","assets/Paginator.1e416188.js","assets/index.9603865c.js","assets/icon.4190ebb1.js","assets/index.85e46c99.js","assets/index.bce811c8.js"])),hr=fe(()=>be(()=>import("./File.e5422fd7.js").then(t=>t.a),["assets/File.e5422fd7.js","assets/index.edd92069.js","assets/index.c5a79659.css","assets/icon.4190ebb1.js","assets/index.85e46c99.js","assets/index.9603865c.js","assets/index.bce811c8.js"])),gr=fe(()=>be(()=>import("./Password.b2de63de.js"),["assets/Password.b2de63de.js","assets/index.edd92069.js","assets/index.c5a79659.css","assets/index.80644838.js","assets/index.9603865c.js"])),[mr,pr]=$();let Ze=!0;const fr=()=>{const t=ze("white","$neutral3"),{pathname:n}=O(),{handlePathChange:r}=T();let o=n();return $e(ve(n,l=>{qn(),Ze||Jn(),Ze=!1,Xn(o,window.scrollY),r(l),o=l})),e(X,{ref:l=>pr(l),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(De,{get fallback(){return e(Ce,{})},get children(){return e(we,{get children(){return[e(M,{get when(){return z.err},get children(){return e(Et,{get msg(){return z.err},disableColor:!0})}}),e(M,{get when(){return[A.FetchingObj,A.FetchingObjs].includes(z.state)},get children(){return e(Ce,{})}}),e(M,{get when(){return z.state===A.NeedPassword},get children(){return e(gr,{})}}),e(M,{get when(){return[A.Folder,A.FetchingMore].includes(z.state)},get children(){return e(dr,{})}}),e(M,{get when(){return z.state===A.File},get children(){return e(hr,{})}})]}})}})}})},mt=t=>{const n=pe("home_container");return e(we,{get fallback(){return e(ue,{w:"min(99%, 1920px)",get children(){return t.children}})},get children(){return e(M,{when:n==="hope_container",get children(){return e(At,{get children(){return t.children}})}})}})};function br(){const{to:t}=O(),n=Pt(),[r,o]=$(),[l,i]=$(),[h,s]=$(-999),a=()=>s(0),c=()=>{const d=mr(),m=l();if(!d||!m)return;const k=d.offsetLeft>50?16:0;m.clientWidth<d.offsetLeft-k?s(0):s(`calc(-100% + ${d.offsetLeft}px - ${k}px)`)};let u;return Pe(()=>{const d=r();d==null||d.setPath(n.pathname),u=requestAnimationFrame(c),window.addEventListener("resize",c),_(()=>window.removeEventListener("resize",c))}),$e(ve(()=>z.state,()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)})),$e(ve(()=>n.pathname,()=>{const d=r();d==null||d.setPath(n.pathname)})),e(ue,{get as(){return Te.div},initial:{x:-999},get animate(){return{x:h()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:c,ref:d=>i(d),get children(){return e(Qn,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:d=>t(d),handle:d=>o(d)})}})}function wr(){const t=V(()=>ne.show_sidebar!=="none");return e(w,{get when(){return t()},get children(){return e(br,{})}})}const _r=()=>e(mt,{get children(){return e(X,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(ur,{}),e(fr,{}),e(wr,{})]}})}}),kr=ae("<span> & </span>"),vr=()=>{const t=b();return e(X,{class:"footer",w:"$full",py:"$4",get children(){return e(U,{spacing:"$1",get children(){return[e(Ht,{href:"https://peifeng.li",external:!0,get children(){return t("home.footer.powered_by")}}),kr.cloneNode(!0),e(Zn,{as:at,get href(){return xe.is_guest(Se())?"/@tiamo":"/@amore"},get children(){return t(xe.is_guest(Se())?"home.footer.guest":"home.footer.manage")}})]}})}})},et={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},he="^\\s*",ge="\\s*$",Y="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Q="([0-9A-Fa-f])",Z="([0-9A-Fa-f]{2})",$r=new RegExp(`${he}rgb\\s*\\(${Y},${Y},${Y}\\)${ge}`),yr=new RegExp(`${he}rgba\\s*\\(${Y},${Y},${Y},${Y}\\)${ge}`),Cr=new RegExp(`${he}#${Q}${Q}${Q}${ge}`),xr=new RegExp(`${he}#${Z}${Z}${Z}${ge}`),Sr=new RegExp(`${he}#${Q}${Q}${Q}${Q}${ge}`),Mr=new RegExp(`${he}#${Z}${Z}${Z}${Z}${ge}`);function S(t){return parseInt(t,16)}function pt(t){try{let n;if(n=xr.exec(t))return[S(n[1]),S(n[2]),S(n[3]),1];if(n=$r.exec(t))return[D(n[1]),D(n[5]),D(n[9]),1];if(n=yr.exec(t))return[D(n[1]),D(n[5]),D(n[9]),Ae(n[13])];if(n=Cr.exec(t))return[S(n[1]+n[1]),S(n[2]+n[2]),S(n[3]+n[3]),1];if(n=Mr.exec(t))return[S(n[1]),S(n[2]),S(n[3]),Ae(S(n[4])/255)];if(n=Sr.exec(t))return[S(n[1]+n[1]),S(n[2]+n[2]),S(n[3]+n[3]),Ae(S(n[4]+n[4])/255)];if(t in et)return pt(et[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Or(t){return t>1?1:t<0?0:t}function tt(t,n,r,o){return`rgba(${D(t)}, ${D(n)}, ${D(r)}, ${Or(o)})`}function Oe(t,n){const[r,o,l,i=1]=Array.isArray(t)?t:pt(t);return n.alpha?tt(r,o,l,n.alpha):tt(r,o,l,i)}function Ae(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function D(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Fr={list:gt,grid:dt,image:ht},zr=()=>{const t=b();return e(Ne,{get children(){return[e(je,{as:lt,tips:"home_tolayouts",get color(){return j()},get bgColor(){return Oe(j(),{alpha:.05})},get _hover(){return{bgColor:Oe(j(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"xl",get icon(){return e(we,{get children(){return[e(M,{get when(){return se()==="list"},get children(){return e(gt,{})}}),e(M,{get when(){return se()==="grid"},get children(){return e(dt,{})}}),e(M,{get when(){return se()==="image"},get children(){return e(ht,{})}})]}})}}),e(Ve,{get children(){return e(de,{get each(){return Object.entries(Fr)},children:n=>e(re,{get color(){return j()},get icon(){return e(Dt,{get component(){return n[1]}})},onSelect:()=>{jt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})};function Rr(t){return E({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function Tr(t){return E({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function yo(t){return E({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Ir(t){return E({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function Br(t){return E({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function Lr(t){return E({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><circle cx="15" cy="15" r="4"/><path d="M18.5 18.5L21 21M4 6h16M4 12h4M4 18h4"/>'},t)}const Er=ae('<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-ipad-horizontal-search" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path><path d="M9 17h2"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>'),Ar=ae('<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-search" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"></path></svg>'),Pr=()=>{const t=pe("logo").split(`
`),n=ze(t[0],t.pop()),r=V(()=>{switch(ne.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(it,ce(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(mt,{get children(){return e(U,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(U,{class:"header-left",h:"52px",get children(){return e(Vt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(Nt,{})}})}}),e(U,{class:"header-right",spacing:"$2",get children(){return e(w,{get when(){return z.state===A.Folder},get children(){return[e(lt,{"aria-label":"Search",get color(){return j()},get bgColor(){return Oe(j(),{alpha:.05})},get _hover(){return{bgColor:Oe(j(),{alpha:.2})}},compact:!0,size:"xl",get icon(){return e(we,{get children(){return[e(M,{get when(){return se()==="list"},get children(){return e(Lr,{})}}),e(M,{get when(){return se()==="grid"},get children(){return Er.cloneNode(!0)}}),e(M,{get when(){return se()==="image"},get children(){return Ar.cloneNode(!0)}})]}})},onClick:()=>{g.emit("tool","search")}}),e(zr,{})]}})}})]}})}})}}))};function Hr(t){return E({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function Co(t){return E({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Dr(t){return E({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const ee={rename:{icon:Ut,color:"$accent9"},copy:{icon:Tr,color:"$success9"},move:{icon:Ir,color:"$warning9"},delete:{icon:Wt,color:"$danger9"},copy_link:{icon:Br,color:"$info9"},mkdir:{icon:qt,p:!0},recursive_move:{icon:Hr,p:!0},remove_empty_directory:{icon:Dr,p:!0},batch_rename:{icon:er,p:!0},new_file:{icon:Gt,p:!0},cancel_select:{icon:tr},download:{icon:Kt,color:"$primary9"}},Fe=t=>{const n=Xt.findIndex(o=>o===t.name);if(n!==-1&&!xe.can(Se(),n))return null;const r=b();return e(st,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(Re,ce({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:He()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$md",get p(){var o;return(o=ee[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=ee[t.name])==null?void 0:o.icon},get color(){var o;return(o=ee[t.name])==null?void 0:o.color}},t))}})},R=t=>{const n=b();return e(st,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(Re,ce({get color(){return j()},get _hover(){return{bgColor:j(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$9",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},jr=()=>{const t=b(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=Jt(),o="neutral";return e(Ne,{placement:"top",offset:10,get children(){return[e(je,{as:Fe,name:"copy_link"}),e(Ve,{get children(){return[e(re,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(re,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(re,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Vr=ae("<p></p>"),Nr=()=>{const t=b(),n="neutral",{batchDownloadSelected:r,sendToAria2:o}=lr();return e(Ne,{placement:"top",offset:10,get children(){return[e(je,{as:Fe,name:"download"}),e(Ve,{get children(){return[e(re,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(w,{get when(){return xe.is_admin(Se())||ct("package_download")},get children(){return e(re,{colorScheme:n,onSelect:()=>{g.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}})}}),e(re,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Ur=fe(()=>be(()=>import("./PackageDownload.04fdb5d1.js"),["assets/PackageDownload.04fdb5d1.js","assets/index.edd92069.js","assets/index.c5a79659.css"])),Wr=()=>{const t=b(),n=s=>{if(s==="package_download"){if(!ct("package_download"))return;o()}};g.on("tool",n),_(()=>{g.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=y(),[i,h]=$("pre_tips");return e(K,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(W,{}),e(q,{get children(){return[e(N,{get children(){return t("home.toolbar.package_download")}}),e(De,{get fallback(){return e(Ce,{})},get children(){return e(w,{get when(){return i()==="pre_tips"},get fallback(){return e(Ur,{onClose:l})},get children(){return[e(G,{get children(){const s=Vr.cloneNode(!0);return Ie(s,()=>t("home.toolbar.pre_package_download-tips")),s}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(C,{colorScheme:"info",onClick:()=>{h("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},qr=()=>{const t=V(()=>[A.Folder,A.FetchingMore].includes(z.state)&&Yt()&&Qt());return e(cr,{exitBeforeEnter:!0,get children(){return e(w,{get when(){return t()},get children(){return e(ue,{class:"center-toolbar",pos:"fixed",bottom:"$5",right:"50%",w:"max-content",color:"$neutral11",get as(){return Te.div},initial:{opacity:0,scale:0,x:"50% ",y:100},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:0,x:"50% ",y:100},transition:{duration:.2},get children(){return e(U,{p:"$2",get bgColor(){return ze("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(15px)"},get children(){return[e(de,{each:["rename","move","copy","delete"],children:n=>e(Fe,{name:n,onClick:()=>{g.emit("tool",n)}})}),e(jr,{}),e(Nr,{}),e(Fe,{name:"cancel_select",onClick:()=>{Zt(!1)}})]}})}})}})}})};function Gr(t){return E({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M15 5.5a4.394 4.394 0 01-4 4.5 2.955 2.955 0 00-.2-1A3.565 3.565 0 0014 5.5a3.507 3.507 0 00-7-.3A3.552 3.552 0 006 5a4.622 4.622 0 014.5-4A4.481 4.481 0 0115 5.5zM5.5 6a4.5 4.5 0 100 9.001 4.5 4.5 0 000-9z"/>'},t)}function nt(t){return E({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M14.88 4.78a3.489 3.489 0 00-.37-.9 3.24 3.24 0 00-.6-.79 3.78 3.78 0 00-1.21-.81 3.74 3.74 0 00-2.84 0 4 4 0 00-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 00-1.16-.75 3.74 3.74 0 00-2.84 0 3.78 3.78 0 00-1.21.81 3.55 3.55 0 00-.97 1.69 3.75 3.75 0 00-.12 1c0 .317.04.633.12.94a4 4 0 00.36.89 3.8 3.8 0 00.61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0015 5.78a3.747 3.747 0 00-.12-1zm-1 1.63a2.69 2.69 0 01-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 01-.44-.57 3 3 0 01-.27-.65 3.25 3.25 0 01-.08-.69A3.36 3.36 0 012.06 5a2.8 2.8 0 01.27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 01.89-.6 2.8 2.8 0 012.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 01.88-.59 2.8 2.8 0 012.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 01.35 1.34 2.6 2.6 0 01-.06.72h-.03z"/>'},t)}const Kr=()=>{const{isOpen:t,onToggle:n}=y({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=V(()=>t()?"$4":"$5"),o=V(()=>z.state===A.Folder),{refresh:l}=T();return e(ue,{class:"right-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(w,{get when(){return t()},get fallback(){return e(R,{class:"toolbar-toggle",tips:"more",as:nt,onClick:()=>{n()}})},get children(){return e(X,{class:"right-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Te.div},initial:{opacity:0,scale:0,y:300},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:0,y:300},transition:{duration:.2},get children(){return[e(X,{spacing:"$1",class:"right-toolbar-in",get children(){return[e(w,{get when(){return Xe(()=>!!o(),!0)()&&(Je("write")||z.write)},get children(){return[e(R,{as:en,tips:"upload",onClick:()=>{g.emit("tool","upload")}}),e(R,{get as(){return ee.new_file.icon},tips:"new_file",onClick:()=>{g.emit("tool","new_file")}}),e(R,{get as(){return ee.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{g.emit("tool","mkdir")}}),e(R,{get as(){return ee.recursive_move.icon},tips:"recursive_move",onClick:()=>{g.emit("tool","recursiveMove")}}),e(R,{get as(){return ee.batch_rename.icon},tips:"batch_rename",onClick:()=>{g.emit("tool","batchRename")}})]}}),e(w,{get when(){return Xe(()=>!!o(),!0)()&&Je("offline_download")},get children(){return e(R,{as:Gn,pl:"0",tips:"offline_download",onClick:()=>{g.emit("tool","offline_download")}})}}),e(w,{get when(){return tn()},get children(){return e(R,{as:nr,tips:"toggle_markdown_toc",onClick:()=>{nn(i=>!i)}})}}),e(R,{as:Yn,tips:"refresh",onClick:()=>{l(void 0,!0),ut.show({status:"success",description:"\u76EE\u5F55\u5237\u65B0\u6210\u529F",closable:!1})}}),e(R,{tips:"toggle_checkbox",as:Rr,onClick:rn}),e(R,{as:on,tips:"browser_setting",onClick:()=>{g.emit("tool","local_settings")}})]}}),e(R,{tips:"close",as:nt,onClick:n})]}})}})}})},Xr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(an),{pathname:i}=O(),{refresh:h}=T(),s=a=>{a==="copy"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Ue,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,te().map(u=>u.name));P(c,()=>{h(),r()})}})},Jr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(ln),{pathname:i}=O(),{refresh:h}=T(),s=a=>{a==="move"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Ue,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,te().map(u=>u.name));P(c,()=>{h(),r()})}})},Yr=ae("<p></p>"),Qr=()=>{const t=b(),{isOpen:n,onOpen:r,onClose:o}=y(),[l,i]=L(sn),{refresh:h}=T(),{pathname:s}=O(),a=c=>{c==="delete"&&r()};return g.on("tool",a),_(()=>{g.off("tool",a)}),e(K,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(N,{get children(){return t("home.toolbar.delete")}}),e(G,{get children(){const c=Yr.cloneNode(!0);return Ie(c,()=>t("home.toolbar.delete-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(C,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(s(),te().map(u=>u.name));P(c,()=>{h(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},Zr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),o=b(),[l,i]=L(cn),{pathname:h}=O(),{refresh:s}=T(),a=c=>{if(c==="rename"){if(!un()){B.warning(o("home.toolbar.only_one-tips"));return}n()}};return g.on("tool",a),_(()=>{g.off("tool",a)}),e(w,{get when(){return t()},get children(){return e(Be,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!te()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,u;return(u=(c=te()[0])==null?void 0:c.name)!=null?u:""},get loading(){return l()},onSubmit:async c=>{const u=await i(J(h(),te()[0].name),c);P(u,()=>{s(),r()})}})}})},eo=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(dn),{refresh:i}=T(),{pathname:h}=O(),s=a=>{a==="new_file"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Be,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(J(h(),a),ot());P(c,()=>{i(),r()})}})},to=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(hn),{pathname:i}=O(),{refresh:h}=T(),s=a=>{a==="mkdir"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Be,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(J(i(),a));P(c,()=>{h(),r()})}})},no=ae("<p></p>"),ro=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),{isOpen:o,onOpen:l,onClose:i}=y(),[h,s]=L(gn),{pathname:a}=O(),{refresh:c}=T(),u=m=>{m==="recursiveMove"&&n()};g.on("tool",u),_(()=>{g.off("tool",u)});const d=b();return[e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(N,{get children(){return d("home.toolbar.recursive_move")}}),e(G,{get children(){const m=no.cloneNode(!0);return Ie(m,()=>d("home.toolbar.recursive_move_directory-tips")),m}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>r(),colorScheme:"neutral",get children(){return d("global.cancel")}}),e(C,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return d("global.confirm")}})]}})]}})]}}),e(Ue,{get opened(){return o()},onClose:i,get loading(){return h()},onSubmit:async m=>{const k=await s(a(),m);P(k,()=>{c(),i()})}})]},oo=ae("<p></p>"),ao=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),{pathname:o}=O(),[l,i]=L(mn),{refresh:h}=T(),s=c=>{c==="removeEmptyDirectory"&&n()};g.on("tool",s),_(()=>{g.off("tool",s)});const a=b();return e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(N,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(G,{get children(){const c=oo.cloneNode(!0);return Ie(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(C,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(o());P(c,()=>{h(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},lo=t=>e(Te.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(U,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:He()}},get children(){return[e(Me,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(Me,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),io=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),{isOpen:o,onOpen:l,onClose:i}=y(),[h,s]=L(pn),{pathname:a}=O(),{refresh:c}=T(),[u,d]=$("1"),[m,k]=$(""),[v,I]=$(""),[p,x]=$("string"),[le,ie]=$([]),F=b(),We=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),qe=f=>{f==="batchRename"&&l()};g.on("tool",qe),_(()=>{g.off("tool",qe)});const Le=()=>{if(!m()||!v()){B.warning(F("global.empty_input"));return}const f=new RegExp(m(),"g");let me;if(u()==="1")me=z.objs.filter(H=>H.name.match(m())).map(H=>({src_name:H.name,new_name:H.name.replace(f,v())}));else{let H=v();me=z.objs.map(_e=>{let Ge="";const Ke=_e.name.lastIndexOf(".");Ke!==-1&&(Ge=_e.name.substring(Ke+1));const ft={src_name:_e.name,new_name:m()+H+"."+Ge};return H=(parseInt(H)+1).toString().padStart(H.length,"0"),ft})}ie(me),n(),i()};return[e(K,{blockScrollOnMount:!1,get opened(){return o()},onClose:i,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(w,{get when(){return u()==="1"},get children(){return e(N,{get children(){return F("home.toolbar.regular_rename")}})}}),e(w,{get when(){return u()==="2"},get children(){return e(N,{get children(){return F("home.toolbar.sequential_renaming_desc")}})}}),e(G,{get children(){return[e(fn,{defaultValue:"1",style:{margin:"20px 0"},onChange:f=>{d(f),f==="1"?x("string"):f==="2"&&x("number")},get children(){return e(U,{spacing:"$4",get children(){return[e(Ye,{value:"1",get children(){return F("home.toolbar.regex_rename")}}),e(Ye,{value:"2",get children(){return F("home.toolbar.sequential_renaming")}})]}})}}),e(X,{spacing:"$2",get children(){return[e(ye,{id:"modal-input1",type:"string",get value(){return m()},onInput:f=>{k(f.currentTarget.value)},onKeyDown:f=>{f.key==="Enter"&&Le()}}),e(ye,{id:"modal-input2",get type(){return p()},get value(){return v()},onInput:f=>{I(f.currentTarget.value)},onKeyDown:f=>{f.key==="Enter"&&Le()}})]}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>{d("1"),x("string"),i()},colorScheme:"neutral",get children(){return F("global.cancel")}}),e(C,{onClick:()=>Le(),get disabled(){return!m()||!v()},get children(){return F("global.ok")}})]}})]}})]}}),e(K,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(W,{}),e(q,{get children(){return[e(N,{get children(){return F("home.toolbar.regex_rename_preview")}}),e(G,{get children(){return e(X,{class:"list",w:"$full",spacing:"$1",get children(){return[e(U,{class:"title",w:"$full",p:"$2",get children(){return[e(Me,ce({w:{"@initial":"50%","@md":"50%"}},We,{get children(){return F("home.toolbar.regex_rename_preview_old_name")}})),e(Me,ce({w:{"@initial":"50%","@md":"50%"}},We,{get children(){return F("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(de,{get each(){return le()},children:(f,me)=>e(lo,{obj:f,get index(){return me()}})})]}})}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>{ie([]),d("1"),x("string"),r(),i()},colorScheme:"neutral",get children(){return F("global.cancel")}}),e(C,{onClick:()=>{ie([]),r(),l()},colorScheme:"neutral",get children(){return F("global.back")}}),e(C,{get loading(){return h()},onClick:async()=>{const f=await s(a(),le());P(f,()=>{ie([]),k(""),I(""),d("1"),x("string"),c(),i(),r()})},get disabled(){return le().length==0},get children(){return F("global.ok")}})]}})]}})]}})]},so=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],co=()=>{const t=b(),[n,r]=$([]),[o,l]=L(()=>bn.get("/public/offline_download_tools")),[i,h]=$(""),[s,a]=$("delete_on_upload_succeed");Pe(async()=>{const p=await l();wn(p,x=>{r(x),h(x[0])})});const{isOpen:c,onOpen:u,onClose:d}=y(),[m,k]=L(_n),{pathname:v}=O(),I=p=>{p==="offline_download"&&u()};return g.on("tool",I),_(()=>{g.off("tool",I)}),e(Be,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:d,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ue,{mb:"$2",get children(){return e(Qe,{get value(){return i()},onChange:p=>h(p),get options(){return n().map(p=>({value:p,label:p}))}})}})},get bottomSlot(){return e(ue,{mb:"$2",get children(){return e(Qe,{get value(){return s()},onChange:p=>a(p),get options(){return so.map(p=>({value:p,label:t(`home.toolbar.delete_policy.${p}`)}))}})}})},onSubmit:async p=>{const x=await k(v(),p.split(`
`),i(),s());P(x,()=>{d()})}})},uo=t=>{const n=b(),r=h=>{h===t.name&&l()};g.on("tool",r),_(()=>{g.off("tool",r)});const{isOpen:o,onOpen:l,onClose:i}=y();return e(K,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:i,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(W,{}),e(q,{get children(){return[e(kn,{}),e(N,{get children(){return n(t.title)}}),e(G,{get children(){return e(w,{get when(){return o()},get children(){return e(De,{get fallback(){return e(Ce,{})},get children(){return t.children}})}})}})]}})]}})};function ho(t){const n=b();return e(Dn,{get children(){return[e(On,{get children(){return n(`home.local_settings.${t.key}`)}}),e(we,{get fallback(){return e(ye,{get value(){return ne[t.key]},onInput:r=>{Ee(t.key,r.currentTarget.value)}})},get children(){return[e(M,{get when(){return t.type==="select"},get children(){return e(Fn,{get id(){return t.key},get defaultValue(){return ne[t.key]},onChange:r=>Ee(t.key,r),get children(){return[e(zn,{get children(){return[e(Rn,{get children(){return n("global.choose")}}),e(Tn,{}),e(In,{})]}}),e(Bn,{get children(){return e(Ln,{get children(){return e(de,{get each(){return t.options},children:r=>e(En,{value:r,get children(){return[e(An,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Pn,{})]}})})}})}})]}})}}),e(M,{get when(){return t.type==="boolean"},get children(){return e(Hn,{get defaultChecked(){return ne[t.key]==="true"},onChange:r=>{Ee(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const go=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),o=b(),l=i=>{i==="local_settings"&&n()};return g.on("tool",l),_(()=>{g.off("tool",l)}),e(Mn,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(vn,{}),e($n,{get children(){return[e(yn,{}),e(Cn,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(xn,{get children(){return[e(X,{spacing:"$2",get children(){return e(de,{each:Sn,children:i=>e(ho,i)})}}),e(it,{mt:"$4",get children(){return e(U,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(rr,{}),e(Re,{as:Gr,cursor:"pointer",boxSize:"$8",onClick:()=>{localStorage.removeItem("hope-ui-color-mode"),ut.show({status:"success",description:"\u8BBE\u7F6E\u6210\u529F\uFF0C\u5373\u5C06\u81EA\u52A8\u5237\u65B0",closable:!1}),setTimeout(function(){location.reload()},2500)}})]}})}})]}})]}})]}})},mo=fe(()=>be(()=>import("./Upload.c48c08ad.js"),["assets/Upload.c48c08ad.js","assets/index.edd92069.js","assets/index.c5a79659.css","assets/index.80644838.js"])),po=()=>[e(Xr,{}),e(Jr,{}),e(Zr,{}),e(Qr,{}),e(eo,{}),e(to,{}),e(ro,{}),e(ao,{}),e(io,{}),e(co,{}),e(Wr,{}),e(uo,{name:"upload",title:"home.toolbar.upload",get children(){return e(mo,{})}}),e(go,{})],fo=()=>e(Vn,{get children(){return[e(Kr,{}),e(qr,{}),e(po,{}),e(jn,{})]}}),bo=()=>{Kn(pe("site_title"));const t=pe("announcement");return t&&B.render(()=>e(Nn,{children:t})),[e(Pr,{}),e(fo,{}),e(_r,{}),e(vr,{})]},xo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));export{Co as I,xo as L,yo as T,Oe as c,ee as o,lr as u};
