import{az as v,a as M,e,I as J,S as u,B as g,a8 as $,M as x,x as I,b6 as K,y as O,z as _,A as B,C as H,k as b,a4 as z,bB as L,bC as N,aP as U,bD as X,_ as j,bE as Q,w as W,q as Y,bF as Z,af as C,av as S,a_ as p,K as ee,aH as te,bv as ne,a3 as re,E as oe,p as ae,bG as le,b3 as ce}from"./index.ec7ff661.js";import{f as se,g as ue}from"./index.fed56d88.js";const E=le(),R=t=>{var a;const[o,r]=b("/");return(a=t.handle)==null||a.call(t,{setPath:r}),e(z,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(E.Provider,{get value(){var n,l,d,i;return{value:o,onChange:h=>{r(h),t.onChange(h)},autoOpen:(n=t.autoOpen)!=null?n:!1,forceRoot:(l=t.forceRoot)!=null?l:!1,showEmptyIcon:(d=t.showEmptyIcon)!=null?d:!1,showHiddenFolder:(i=t.showHiddenFolder)!=null?i:!0}},get children(){return e(T,{path:"/"})}})}})},T=t=>{const{isHidePath:o}=L(),[r,a]=b(),{value:n,onChange:l,forceRoot:d,autoOpen:i,showEmptyIcon:h,showHiddenFolder:D}=N(E),P=()=>{var c;return Boolean(h&&r()!==void 0&&!((c=r())!=null&&c.length))},[V,A]=U(()=>X(t.path,j(),d));let m=!1;const w=async()=>{var y;if((y=r())!=null&&y.length)return;const c=await A();ce(c,G=>{m=!0,a(G)},()=>{s()&&f()})},{isOpen:s,onToggle:f}=v(),F=()=>n()===t.path,k=Q(t.path);W(Y(n,async c=>{!i||k(c)&&(s()||f(),m||w())}));const q=()=>o(t.path)&&!k(n());return e(u,{get when(){return D||!q()},get children(){return e(z,{get children(){return[e($,{spacing:"$2",get children(){return[e(u,{get when(){return!V()},get fallback(){return e(Z,{size:"sm",get color(){return C()}})},get children(){return e(u,{get when(){return!P()},get fallback(){return e(S,{get color(){return C()},as:se})},get children(){return e(S,{get color(){return C()},as:ue,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{f(),s()&&w()}})}})}}),e(p,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return F()?"$info8":"transparent"},get _hover(){return{bgColor:F()?"$info8":ee()}},onClick:()=>{l(t.path)},get children(){return te(()=>t.path==="/",!0)()?"root":ne(t.path)}})]}}),e(u,{get when(){return s()},get children(){return e(re,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(oe,{get each(){return r()},children:c=>e(T,{get path(){return ae(t.path,c.name)}})})}})}})]}})}})},ge=t=>{var n;const o=M(),[r,a]=b((n=t.defaultValue)!=null?n:"");return e(H,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(x,{}),e(I,{get children(){return[e(O,{get children(){return o("home.toolbar.choose_dst_folder")}}),e(_,{get children(){return e(R,{onChange:a})}}),e(B,{display:"flex",gap:"$2",get children(){return[e(g,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(g,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,r())},get children(){return o("global.ok")}})]}})]}})]}})},fe=t=>{const{isOpen:o,onOpen:r,onClose:a}=v(),n=M();return[e($,{w:"$full",spacing:"$2",get children(){return[e(J,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?r:()=>{}},get placeholder(){return n(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(u,{get when(){return!t.onlyFolder},get children(){return e(g,{onClick:r,get children(){return n("global.choose")}})}})]}}),e(H,{size:"xl",get opened(){return o()},onClose:a,get children(){return[e(x,{}),e(I,{get children(){return[e(K,{}),e(O,{get children(){return n("global.choose_folder")}}),e(_,{get children(){return e(R,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(B,{get children(){return e(g,{onClick:a,get children(){return n("global.confirm")}})}})]}})]}})]};export{R as F,ge as M,fe as a};
