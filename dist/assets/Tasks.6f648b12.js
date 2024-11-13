import{d as k,aW as l,b9 as o,r as P,c as r,cQ as B,a as N,a6 as h,bN as m,b5 as _,S as w,ce as V,cf as q,G as s,ba as i,n as v,cc as z,K as I,j as G,q as J,as as K,J as Q}from"./index.a8804101.js";import{P as X}from"./Paginator.f56704ac.js";var d;(function(e){e[e.Pending=0]="Pending",e[e.Running=1]="Running",e[e.Succeeded=2]="Succeeded",e[e.Canceling=3]="Canceling",e[e.Canceled=4]="Canceled",e[e.Errored=5]="Errored",e[e.Failing=6]="Failing",e[e.Failed=7]="Failed",e[e.WaitingRetry=8]="WaitingRetry",e[e.BeforeRetry=9]="BeforeRetry"})(d||(d={}));const A={[d.Failed]:"danger",[d.Succeeded]:"success",[d.Canceled]:"neutral"},O=e=>{if(e.role<0)return null;const t=["info","neutral","accent"];return r(z,{get colorScheme(){return t[e.role]},get children(){return e.name}})},U=e=>{const t=k();return r(z,{get colorScheme(){var c;return(c=A[e.state])!=null?c:"info"},get children(){return t(`tasks.state.${e.state}`)}})},Y=e=>{const t=k(),c=e.done==="undone"?"cancel":"delete",$=e.done==="done"&&e.state===d.Failed,[y,C]=l(()=>o.post(`/task/${e.type}/${c}?tid=${e.id}`)),[a,b]=l(()=>o.post(`/task/${e.type}/retry?tid=${e.id}`)),[R,f]=P(!1);return r(w,{get when(){return!R()},get children(){return r(B,{get bgColor(){return N("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[r(h,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[r(m,{size:"sm",css:{wordBreak:"break-all"},get children(){return e.name}}),r(O,{get name(){return e.creator},get role(){return e.creator_role}}),r(U,{get state(){return e.state}}),r(_,{css:{wordBreak:"break-all"},get children(){return e.status}}),r(w,{get when(){return e.error},get children(){return r(_,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return e.error}})}}),r(V,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},get children(){return r(q,{color:"$info8",rounded:"$md"})}})]}}),r(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[r(w,{get when(){return e.canRetry},get children(){return r(s,{disabled:!$,display:$?"block":"none",get loading(){return a()},onClick:async()=>{const g=await b();i(g,()=>{v.info(t("tasks.retry")),f(!0)})},get children(){return t("tasks.retry")}})}}),r(s,{colorScheme:"danger",get loading(){return y()},onClick:async()=>{const g=await C();i(g,()=>{v.success(t("global.delete_success")),f(!0)})},get children(){return t(`global.${c}`)}})]}})]}})}})},Z=e=>{const t=k(),[c,$]=l(()=>o.get(`/task/${e.type}/${e.done}`)),[y,C]=P([]),a=async()=>{const n=await $();i(n,u=>{var x;return C((x=u==null?void 0:u.sort((j,H)=>j.id>H.id?1:-1))!=null?x:[])})};if(a(),e.done==="undone"){const n=setInterval(a,2e3);G(()=>clearInterval(n))}const[b,R]=l(()=>o.post(`/task/${e.type}/clear_done`)),[f,g]=l(()=>o.post(`/task/${e.type}/clear_succeeded`)),[L,W]=l(()=>o.post(`/task/${e.type}/retry_failed`)),[D,M]=P(1),F=20,S=J(()=>{const n=(D()-1)*F,u=n+F;return y().slice(n,u)});return r(h,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[r(m,{size:"lg",get children(){return t(`tasks.${e.done}`)}}),r(w,{get when(){return e.done==="done"},get children(){return r(K,{gap:"$2",flexWrap:"wrap",get children(){return[r(s,{colorScheme:"accent",get loading(){return c()},onClick:a,get children(){return t("global.refresh")}}),r(s,{get loading(){return L()},onClick:async()=>{const n=await W();i(n,()=>a())},get children(){return t("tasks.retry_failed")}}),r(s,{colorScheme:"danger",get loading(){return b()},onClick:async()=>{const n=await R();i(n,()=>a())},get children(){return t("global.clear")}}),r(s,{colorScheme:"success",get loading(){return f()},onClick:async()=>{const n=await g();i(n,()=>a())},get children(){return t("tasks.clear_succeeded")}})]}})}}),r(h,{w:"$full",spacing:"$2",get children(){return r(I,{get each(){return S()},children:n=>r(Y,Q(n,e))})}}),r(X,{get total(){return y().length},defaultPageSize:F,onChange:n=>{M(n)}})]}})},E=e=>{const t=k();return r(h,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[r(m,{size:"xl",get children(){return t(`tasks.${e.type}`)}}),r(h,{w:"$full",spacing:"$2",get children(){return r(I,{each:["undone","done"],children:c=>r(Z,{get type(){return e.type},done:c,get canRetry(){return e.canRetry}})})}})]}})};export{E as T};
