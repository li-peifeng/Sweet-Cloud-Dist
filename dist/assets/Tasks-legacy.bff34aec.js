System.register(["./index-legacy.479435ca.js","./Paginator-legacy.dd95a14d.js"],(function(e,t){"use strict";var r,n,a,c,l,s,o,i,d,u,g,h,$,y,k,p,w,f,m,b,C,x,S;return{setters:[e=>{r=e.d,n=e.aP,a=e.b2,c=e.j,l=e.c,s=e.cM,o=e.a,i=e.Z,d=e.bG,u=e.a_,g=e.S,h=e.c7,$=e.c8,y=e.B,k=e.b3,p=e.n,w=e.c5,f=e.z,m=e.o,b=e.x,C=e.al,x=e.y},e=>{S=e.P}],execute:function(){const t={7:"danger",2:"success",4:"neutral"},_=e=>{const n=r();return l(w,{get colorScheme(){return t[e.state]??"info"},get children(){return n(`tasks.state.${e.state}`)}})},z=e=>{const t=r(),w="undone"===e.done?"cancel":"delete",f="done"===e.done&&7===e.state,[m,b]=n((()=>a.post(`/admin/task/${e.type}/${w}?tid=${e.id}`))),[C,x]=n((()=>a.post(`/admin/task/${e.type}/retry?tid=${e.id}`))),[S,z]=c(!1);return l(g,{get when(){return!S()},get children(){return l(s,{get bgColor(){return o("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[l(i,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[l(d,{size:"sm",css:{wordBreak:"break-all"},get children(){return e.name}}),l(_,{get state(){return e.state}}),l(u,{css:{wordBreak:"break-all"},get children(){return e.status}}),l(g,{get when(){return e.error},get children(){return l(u,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return e.error}})}}),l(h,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},get children(){return l($,{color:"$info8",rounded:"$md"})}})]}}),l(s,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[l(g,{get when(){return e.canRetry},get children(){return l(y,{disabled:!f,display:f?"block":"none",get loading(){return C()},onClick:async()=>{const e=await x();k(e,(()=>{p.info(t("tasks.retry")),z(!0)}))},get children(){return t("tasks.retry")}})}}),l(y,{colorScheme:"danger",get loading(){return m()},onClick:async()=>{const e=await b();k(e,(()=>{p.success(t("global.delete_success")),z(!0)}))},get children(){return t(`global.${w}`)}})]}})]}})}})},v=e=>{const t=r(),[s,o]=n((()=>a.get(`/admin/task/${e.type}/${e.done}`))),[u,h]=c([]),$=async()=>{const e=await o();k(e,(e=>h(e?.sort(((e,t)=>e.id>t.id?1:-1))??[])))};if($(),"undone"===e.done){const e=setInterval($,2e3);m((()=>clearInterval(e)))}const[p,w]=n((()=>a.post(`/admin/task/${e.type}/clear_done`))),[_,v]=n((()=>a.post(`/admin/task/${e.type}/clear_succeeded`))),[I,j]=n((()=>a.post(`/admin/task/${e.type}/retry_failed`))),[B,P]=c(1),R=b((()=>{const e=20*(B()-1),t=e+20;return u().slice(e,t)}));return l(i,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(d,{size:"lg",get children(){return t(`tasks.${e.done}`)}}),l(g,{get when(){return"done"===e.done},get children(){return l(C,{gap:"$2",flexWrap:"wrap",get children(){return[l(y,{colorScheme:"accent",get loading(){return s()},onClick:$,get children(){return t("global.refresh")}}),l(y,{get loading(){return I()},onClick:async()=>{const e=await j();k(e,(()=>$()))},get children(){return t("tasks.retry_failed")}}),l(y,{colorScheme:"danger",get loading(){return p()},onClick:async()=>{const e=await w();k(e,(()=>$()))},get children(){return t("global.clear")}}),l(y,{colorScheme:"success",get loading(){return _()},onClick:async()=>{const e=await v();k(e,(()=>$()))},get children(){return t("tasks.clear_succeeded")}})]}})}}),l(i,{w:"$full",spacing:"$2",get children(){return l(f,{get each(){return R()},children:t=>l(z,x(t,e))})}}),l(S,{get total(){return u().length},defaultPageSize:20,onChange:e=>{P(e)}})]}})};e("T",(e=>{const t=r();return l(i,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[l(d,{size:"xl",get children(){return t(`tasks.${e.type}`)}}),l(i,{w:"$full",spacing:"$2",get children(){return l(f,{each:["undone","done"],children:t=>l(v,{get type(){return e.type},done:t,get canRetry(){return e.canRetry}})})}})]}})}))}}}));
