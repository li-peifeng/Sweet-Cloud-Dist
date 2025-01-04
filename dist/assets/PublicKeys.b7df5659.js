import{d as _,j as b,aP as h,b2 as w,c as e,al as M,bG as A,a_ as i,bH as v,c$ as C,B as y,b3 as $,n as D,S as F,c5 as H,aC as O,w as q,M as K,m as L,b6 as R,q as j,r as E,br as x,be as S,t as G,T as V,v as W,Z as f,y as u,x as X}from"./index.d735fbfd.js";const Y=t=>{const n=t.getFullYear().toString(),d=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),g=t.getHours().toString().padStart(2,"0"),c=t.getMinutes().toString().padStart(2,"0"),a=t.getSeconds().toString().padStart(2,"0");return`${n}/${d}/${o} ${g}:${c}:${a}`},r=[{name:"title",textAlign:"left",w:"calc(45% - 110px)"},{name:"fingerprint",textAlign:"left",w:"calc(55% - 110px)"},{name:"last_used",textAlign:"right",w:"140px"},{name:"operation",textAlign:"right",w:"80px"}],Z=t=>{const n=_(),[d,o]=b(!1),[g,c]=t.isMine?h(()=>w.post(`/me/sshkey/delete?id=${t.id}`)):h(()=>w.post(`/admin/user/sshkey/delete?uid=${t.userId}&id=${t.id}`)),a={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};return e(F,{get when(){return!d()},get children(){return e(M,{w:"$full",p:"$2",get children(){return[e(A,{get w(){return r[0].w},size:"sm",get textAlign(){return r[0].textAlign},css:a,get children(){return t.title}}),e(i,{get w(){return r[1].w},size:"sm",get textAlign(){return r[1].textAlign},css:a,get children(){return t.fingerprint}}),e(i,{get w(){return r[2].w},size:"sm",get textAlign(){return r[2].textAlign},css:a,get children(){return Y(new Date(t.last_used_time))}}),e(v,{get w(){return r[3].w},gap:"$1",get children(){return[e(C,{}),e(y,{size:"sm",colorScheme:"danger",get loading(){return g()},onClick:async()=>{const l=await c();$(l,()=>{D.success(n("global.delete_success")),o(!0)})},get children(){return n("global.delete")}})]}})]}})}})},N=t=>{const n=_(),[d,o]=b([]),[g,c]=t.isMine?h(()=>w.get("/me/sshkey/list")):h(()=>w.get(`/admin/user/sshkey/list?uid=${t.userId}`)),[a,l]=H({title:"",key:""}),[I,P]=h(()=>w.post("/me/sshkey/add",a)),{isOpen:T,onOpen:z,onClose:k}=O(),p=async()=>{const s=await c();$(s,B=>{o(B.content)})};p();const m=s=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:s.textAlign});return e(f,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(v,{w:"$full",get children(){return[e(A,{get children(){return n("users.ssh_keys.heading")}}),e(F,{get when(){return t.isMine},get children(){return[e(C,{}),e(y,{get loading(){return g()},onClick:z,get children(){return n("global.add")}}),e(q,{get opened(){return T()},onClose:k,scrollBehavior:"inside",get children(){return[e(K,{}),e(L,{get children(){return[e(R,{}),e(j,{get children(){return n("users.ssh_keys.add_heading")}}),e(E,{get children(){return[e(x,{mb:"$4",get children(){return[e(S,{for:"add_title",get children(){return n("users.ssh_keys.title")}}),e(G,{id:"add_title",get value(){return a.title},onInput:s=>l("title",s.currentTarget.value)})]}}),e(x,{get children(){return[e(S,{for:"add_key",get children(){return n("users.ssh_keys.key")}}),e(V,{id:"add_key",get value(){return a.key},onInput:s=>l("key",s.currentTarget.value)})]}})]}}),e(W,{get children(){return e(y,{get loading(){return I()},onClick:async()=>{const s=await P();$(s,()=>{l("title",""),l("key",""),p(),k()})},get children(){return n("global.add")}})}})]}})]}})]}})]}}),e(f,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[e(M,{class:"title",w:"$full",p:"$2",get children(){return[e(i,u({get w(){return r[0].w}},()=>m(r[0]),{get children(){return n(`users.ssh_keys.${r[0].name}`)}})),e(i,u({get w(){return r[1].w}},()=>m(r[1]),{get children(){return n(`users.ssh_keys.${r[1].name}`)}})),e(i,u({get w(){return r[2].w}},()=>m(r[2]),{get children(){return n(`users.ssh_keys.${r[2].name}`)}})),e(i,u({get w(){return r[3].w}},()=>m(r[3]),{get children(){return n(`users.ssh_keys.${r[3].name}`)}}))]}}),X(()=>d().map(s=>e(Z,u(t,s))))]}})]}})};export{N as P};
