System.register(["./index-legacy-e34080e6.js","./Paginator-legacy-8c951324.js"],(function(e,t){"use strict";var r,n,a,l,c,s,o,i,d,g,u,h,p,m,w,$,f,k,x,y,v,_,b,S,z,A,C,T,P,B,F,R,j,D,I,O,E,G;return{setters:[e=>{r=e.an,n=e.d,a=e.aP,l=e.b2,c=e.j,s=e.c,o=e.al,i=e.c4,d=e.bG,g=e.S,u=e.ar,h=e.c8,p=e.c9,m=e.a_,w=e.bH,$=e.c$,f=e.B,k=e.b3,x=e.n,y=e.x,v=e.Z,_=e.cT,b=e.d1,S=e.z,z=e.d2,A=e.c6,C=e.o,T=e.k,P=e.t,B=e.y,F=e.ck,R=e.cc,j=e.aD,D=e.cf,I=e.d3,O=e.d4,E=e.as},e=>{G=e.P}],execute:function(){const t={7:"danger",2:"success",4:"neutral"},L=e=>{if(e.role<0)return null;const t=["info","neutral","accent"];return s(A,{get colorScheme(){return t[e.role]},css:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},get children(){return e.name}})},W=e=>{const r=n();return s(A,{get colorScheme(){return t[e.state]??"info"},get children(){return r(`tasks.state.${e.state}`)}})},M=[{name:"name",textAlign:"left",w:2===r().role?"calc(100% - 660px)":"calc(100% - 560px)"},{name:"creator",textAlign:"center",w:2===r().role?"100px":"0"},{name:"state",textAlign:"center",w:"100px"},{name:"progress",textAlign:"left",w:"140px"},{name:"speed",textAlign:"center",w:"100px"},{name:"operation",textAlign:"right",w:"220px"}],H=e=>Math.floor(e).toString().padStart(2,"0"),K=e=>{const t=n(),A="undone"===e.done?"cancel":"delete",C="done"===e.done&&7===e.state,[T,P]=a((()=>l.post(`/task/${e.type}/${A}?tid=${e.id}`))),[B,F]=a((()=>l.post(`/task/${e.type}/retry?tid=${e.id}`))),[R,j]=c(!1),D=e.name.match(e.nameAnalyzer.regex),I=null===D?e.name:e.nameAnalyzer.title(D),O=null===e.start_time?-1:new Date(e.start_time).getTime(),E=null===e.end_time?(new Date).getTime():new Date(e.end_time).getTime();let G="-";const K=(e,t)=>{let r=t/e,n="bytes/s";return r>1024&&(r/=1024,n="KB/s"),r>1024&&(r/=1024,n="MB/s"),r>1024&&(r/=1024,n="GB/s"),`${r.toFixed(2)} ${n}`};if(e.done){if(e.start_time!==e.end_time&&e.progress>0&&-1!==O){const t=(E-O)/1e3,r=e.total_bytes*e.progress/100;G=K(t,r)}}else if(void 0!==e.prevProgress&&void 0!==e.prevFetchTime){const t=(e.curFetchTime-e.prevFetchTime)/1e3,r=(e.progress-e.prevProgress)*e.total_bytes/100;G=K(t,r)}return s(g,{get when(){return!R()},get children(){return[s(o,{w:"$full",p:"$2",get children(){return[s(o,{get w(){return M[0].w},spacing:"$1",get children(){return[s(i,{"on:click":e=>{e.stopPropagation()},get checked(){return e.local.selected},onChange:t=>{e.setLocal({selected:t.target.checked,expanded:e.local.expanded})}}),s(d,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:I})]}}),s(g,{get when(){return 2===r().role},get children(){return s(u,{get w(){return M[1].w},get children(){return s(L,{get name(){return e.creator},get role(){return e.creator_role}})}})}}),s(u,{get w(){return M[2].w},get children(){return s(W,{get state(){return e.state}})}}),s(h,{get w(){return M[3].w},trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},mr:"$1",get children(){return s(p,{color:"$info8",rounded:"$md"})}}),s(u,{get w(){return M[1].w},get children(){return s(m,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:G})}}),s(w,{get w(){return M[5].w},gap:"$1",get children(){return[s($,{}),s(g,{get when(){return e.canRetry},get children(){return s(f,{size:"sm",disabled:!C,display:C?"block":"none",get loading(){return B()},onClick:async()=>{const e=await F();k(e,(()=>{x.info(t("tasks.retry")),j(!0)}))},get children(){return t("tasks.retry")}})}}),s(f,{size:"sm",colorScheme:"danger",get loading(){return T()},onClick:async()=>{const e=await P();k(e,(()=>{x.success(t("global.delete_success")),j(!0)}))},get children(){return t(`global.${A}`)}}),s(f,{size:"sm",colorScheme:"neutral",onClick:()=>{e.setLocal({selected:e.local.selected,expanded:!e.local.expanded})},get children(){return y((()=>!!e.local.expanded))()?t("tasks.fold"):t("tasks.expand")}})]}})]}}),s(g,{get when(){return e.local.expanded},get children(){return s(v,{css:{wordBreak:"break-all",fontSize:"0.8em"},w:"$full",pl:"$2",pr:"$2",get children(){return[s(_,{templateColumns:"min-content 1fr",w:"$full",columnGap:"$4",mb:"$2",get children(){return[s(g,{when:-1!==O,get children(){return[s(b,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return t("tasks.attr.time_elapsed")}}),s(b,{color:"$neutral9",get children(){return(e=>{const t=e/1e3%60,r=e/1e3/60%60;return`${H(e/1e3/3600)}:${H(r)}:${H(t)}`})(E-O)}})]}}),s(g,{when:null!==D,get children(){return s(S,{get each(){return Object.entries(e.nameAnalyzer.attrs)},children:e=>[s(b,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return e[0]}}),s(b,{color:"$neutral9",get children(){return e[1](D)}})]})}}),s(b,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return t("tasks.attr.status")}}),s(b,{color:"$neutral9",get children(){return e.status}}),s(g,{get when(){return e.error},get children(){return[s(b,{color:"$danger9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return t("tasks.attr.err")}}),s(b,{color:"$danger9",get children(){return e.error}})]}})]}}),s(z,{})]}})}})]}})},X=e=>{const t=n(),[u,h]=a((()=>l.get(`/task/${e.type}/${e.done}`))),[p,_]=c([]),[b,S]=c("name"),[z,A]=c(!1),R={name:(e,t)=>e.name>t.name?1:-1,creator:(e,t)=>e.creator===t.creator?e.id>t.id?1:-1:e.creator>t.creator?1:-1,state:(e,t)=>e.state===t.state?e.id>t.id?1:-1:e.state>t.state?1:-1,progress:(e,t)=>e.progress===t.progress?e.id>t.id?1:-1:e.progress<t.progress?1:-1},j=y((()=>(e,t)=>(z()?-1:1)*R[b()](e,t))),D=async()=>{const e=await h();k(e,(e=>{const t=(new Date).getTime(),r={},n={},a={},l={},c={};for(const s of p())r[s.id]=s.curFetchTime,n[s.id]=s.prevFetchTime,a[s.id]=s.progress,l[s.id]=s.prevProgress,c[s.id]=s.local;_(e?.map((e=>{let s,o;e.progress===a[e.id]?(s=n[e.id],o=l[e.id]):(s=r[e.id],o=a[e.id]);const i=c[e.id]??{selected:!1,expanded:!1};return{...e,curFetchTime:t,prevFetchTime:s,prevProgress:o,local:i}})).sort(j())??[])}))};if(D(),"undone"===e.done){const e=setInterval(D,2e3);C((()=>clearInterval(e)))}const[I,O]=a((()=>l.post(`/task/${e.type}/clear_done`))),[E,L]=a((()=>l.post(`/task/${e.type}/clear_succeeded`))),[W,H]=a((()=>l.post(`/task/${e.type}/retry_failed`))),[X,Z]=c(""),[q,J]=c(new RegExp("")),[N,Q]=c(!1);T((()=>{try{J(new RegExp(X())),Q(!1)}catch(e){Q(!0)}}));const[U,V]=c(2!==r().role),Y=y((()=>{const e=q(),t=U();return n=>e.test(n.name)&&(!t||n.creator===r().username)})),ee=y((()=>p().filter(Y()))),te=y((()=>ee().map((e=>e.local.selected)).every(Boolean))),re=y((()=>ee().map((e=>e.local.selected)).some(Boolean)&&!te())),ne=y((()=>ee().map((e=>e.local.expanded)).every(Boolean))),ae=()=>ee().filter((e=>e.local.selected)).map((e=>e.id)),[le,ce]=a((()=>l.post(`/task/${e.type}/retry_some`,ae()))),[se,oe]=a((()=>l.post(`/task/${e.type}/${ue}_some`,ae()))),ie=e=>{Object.entries(e).forEach((([e,t])=>{x.error(`${e}: ${t}`)}))},[de,ge]=c(1),ue="undone"===e.done?"cancel":"delete",he=y((()=>{const e=20*(de()-1),t=e+20;return ee().slice(e,t)})),pe=e=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign}),me=e=>({cursor:"pointer",onClick:()=>{b()===e.name?A(!z()):F((()=>{S(e.name),A(!1)})),D()}});return s(v,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[s(d,{size:"lg",get children(){return t(`tasks.${e.done}`)}}),s(o,{gap:"$2",flexWrap:"wrap",get children(){return[s(g,{get when(){return"done"===e.done},get children(){return[s(f,{colorScheme:"accent",get loading(){return u()},onClick:D,get children(){return t("global.refresh")}}),s(f,{get loading(){return W()},onClick:async()=>{const e=await H();k(e,(()=>D()))},get children(){return t("tasks.retry_failed")}}),s(f,{colorScheme:"danger",get loading(){return I()},onClick:async()=>{const e=await O();k(e,(()=>D()))},get children(){return t("global.clear")}}),s(f,{colorScheme:"success",get loading(){return E()},onClick:async()=>{const e=await L();k(e,(()=>D()))},get children(){return t("tasks.clear_succeeded")}})]}}),s(g,{get when(){return e.canRetry},get children(){return s(f,{colorScheme:"primary",get loading(){return le()},onClick:async()=>{const e=await ce();k(e,(e=>{ie(e),D()}))},get children(){return t("tasks.retry_selected")}})}}),s(f,{colorScheme:"warning",get loading(){return se()},onClick:async()=>{const e=await oe();k(e,(e=>{ie(e),D()}))},get children(){return t(`tasks.${ue}_selected`)}}),s(P,{width:"auto",get placeholder(){return t("tasks.filter")},get value(){return X()},onInput:e=>Z(e.target.value),get invalid(){return N()}}),s(g,{get when(){return 2===r().role},get children(){return s(i,{get checked(){return U()},onChange:e=>V(e.target.checked),get children(){return t("tasks.show_only_mine")}})}})]}}),s(v,{w:{"@initial":"1024px","@lg":"$full"},overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[s(o,{class:"title",w:"$full",p:"$2",get children(){return[s(o,{get w(){return M[0].w},spacing:"$1",get children(){return[s(i,{get disabled(){return 0===ee().length},get checked(){return te()},get indeterminate(){return re()},onChange:e=>{return t=e.target.checked,_(p().map((e=>(Y()(e)&&(e.local.selected=t),e))));var t}}),s(m,B((()=>pe(M[0])),(()=>me(M[0])),{get children(){return t(`tasks.attr.${M[0].name}`)}}))]}}),s(g,{get when(){return 2===r().role},get children(){return s(m,B({get w(){return M[1].w}},(()=>pe(M[1])),(()=>me(M[1])),{get children(){return t(`tasks.attr.${M[1].name}`)}}))}}),s(m,B({get w(){return M[2].w}},(()=>pe(M[2])),(()=>me(M[2])),{get children(){return t(`tasks.attr.${M[2].name}`)}})),s(m,B({get w(){return M[3].w}},(()=>pe(M[3])),(()=>me(M[3])),{get children(){return t(`tasks.attr.${M[3].name}`)}})),s(m,B({get w(){return M[4].w}},(()=>pe(M[4])),{get children(){return t(`tasks.attr.${M[4].name}`)}})),s(w,{get w(){return M[5].w},gap:"$2",get children(){return[s($,{}),s(m,B((()=>pe(M[5])),{get children(){return t(`tasks.attr.${M[5].name}`)}})),s(f,{size:"xs",colorScheme:"neutral",onClick:()=>{return e=!ne(),_(p().map((t=>(Y()(t)&&(t.local.expanded=e),t))));var e},get disabled(){return 0===ee().length},get children(){return y((()=>!!ne()))()?t("tasks.fold_all"):t("tasks.expand_all")}})]}})]}}),y((()=>he().map((t=>s(K,B(t,e,{get setLocal(){return e=t.id,t=>_(p().map((r=>(r.id===e&&(r.local=t),r))));var e}}))))))]}}),s(G,{get total(){return ee().length},defaultPageSize:20,onChange:e=>{ge(e)}})]}})};e("T",(e=>{const t=n();return s(v,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[s(d,{size:"xl",get children(){return t(`tasks.${e.type}`)}}),s(v,{w:"$full",spacing:"$2",get children(){return s(S,{each:["undone","done"],children:t=>s(X,{get type(){return e.type},done:t,get canRetry(){return e.canRetry},get nameAnalyzer(){return e.nameAnalyzer}})})}})]}})}));var Z=E("<a>"),q=E("<p>"),J=E("<a target=_blank>");const N=e("b",((e,t)=>{const n=("/"===e?"":e)+t,a="/"===r().base_path?"":r().base_path,l=n.startsWith(a),[s,o]=c(!1);return l?((d=Z()).$$mouseout=()=>o(!1),d.$$mouseover=()=>o(!0),j(d,n),D((e=>{var t=s()?"text-decoration: underline":"",r=n.slice(a.length);return e.e=I(d,t,e.e),r!==e.t&&O(d,"href",e.t=r),e}),{e:void 0,t:void 0}),d):(i=q(),j(i,n),i);var i,d}));e("g",(()=>{const e=n(),[t,r]=c(!1);return{regex:/^download (.+) to \((.+)\)$/,title:e=>e[1],attrs:{[e("tasks.attr.offline_download.url")]:e=>{return(n=J()).$$mouseout=()=>r(!1),n.$$mouseover=()=>r(!0),j(n,(()=>e[1])),D((r=>{var a=t()?"text-decoration: underline":"",l=e[1];return r.e=I(n,a,r.e),l!==r.t&&O(n,"href",r.t=l),r}),{e:void 0,t:void 0}),n;var n},[e("tasks.attr.offline_download.path")]:e=>N("",e[2])}}})),e("a",(()=>{const e=n();return{regex:/^transfer ((?:.*\/)?(.+)) to \[(.+)]$/,title:e=>e[2],attrs:{[e("tasks.attr.offline_download.transfer_src")]:e=>{return t=q(),j(t,(()=>e[1])),t;var t},[e("tasks.attr.offline_download.transfer_dst")]:e=>N("",e[3])}}})),R(["mouseover","mouseout"])}}}));
