import{bK as q,ay as E,R as L,b as U,bG as c,bL as h,d as Q,e,av as z,a_ as $,bF as X,bM as Y,bN as Z,bO as ee,W as F,a as te,j as ne,k as p,bP as oe,aL as v,a3 as se,bE as x,an as re,bD as ae,S as b,I as R,bQ as ie,aW as le,a8 as ce,B as O,ar as ue,bv as T,n as S,a$ as ge}from"./index.3e42a26a.js";import{r as de,b as pe,s as he}from"./index.42fbd35e.js";import{s as me,g as we,a as fe}from"./webauthn-json.browser-ponyfill.1c672167.js";const be="https://github.com/alist-org/alist";function Se(i){return q(`${i}-${be}`)}const $e=()=>{const i=E("sso_login_enabled"),k=L("sso_login_platform"),n=E("sso_compatibility_mode"),{searchParams:l,to:m}=U(),s=l.token;s!=null&&s!=""&&(c(s),m(decodeURIComponent(l.redirect||h||"/"),!0));function u(a){const o=a.data;o.token&&(c(o.token),m(decodeURIComponent(l.redirect||h||"/"),!0))}if(window.addEventListener("message",u),Q(()=>{window.removeEventListener("message",u)}),i){const a=()=>{const g=$.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=g;return}window.open(g,"authPopup","width=500,height=600")};let o;switch(k){case"Github":o=ee;break;case"Microsoft":o=de;break;case"Google":o=Z;break;case"Dingtalk":o=Y;break;default:o=X}return e(z,{cursor:"pointer",boxSize:"$8",as:o,p:"$0_5",onclick:a})}},ye=()=>{const i=L("logo").split(`
`),k=F(i[0],i.pop()),n=te(),l=ne(()=>`${L("site_title")}`);pe(l);const m=F("white","$neutral1"),[s,u]=p(localStorage.getItem("username")||""),[a,o]=p(localStorage.getItem("password")||""),[g,P]=p(""),[w,D]=p(!1),[f,G]=oe("remember-pwd","false"),[M,N]=v(async()=>$.post("/auth/login/hash",{username:s(),password:Se(a()),otp_code:g()})),[,j]=v((t,r,d)=>$.post("/authn/webauthn_finish_login?username="+d,JSON.stringify(r),{headers:{session:t}})),[,A]=v(t=>$.get("/authn/webauthn_begin_login?username="+t)),{searchParams:I,to:_}=U(),B=E("webauthn_login_enabled"),K=async()=>{D(!w())},y=async()=>{if(w()){if(!me()){S.error(n("users.webauthn_not_supported"));return}c(),f()==="true"?localStorage.setItem("username",s()):localStorage.removeItem("username");const t=await A(s());ge(t,async r=>{const d=we(r.options),H=await fe(d),J=await j(r.session,H,s());T(J,V=>{S.success(n("login.success")),c(V.token),_(decodeURIComponent(I.redirect||h||"/"),!0)})})}else{f()==="true"?(localStorage.setItem("username",s()),localStorage.setItem("password",a())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await N();T(t,r=>{S.success(n("login.success")),c(r.token),_(decodeURIComponent(I.redirect||h||"/"),!0)},(r,d)=>{!C()&&d===402?W(!0):S.error(r)})}},[C,W]=p(!1);return e(ue,{zIndex:"1",w:"$full",h:"100vh",get children(){return e(se,{get bgColor(){return m()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(x,{alignItems:"center",justifyContent:"space-around",get children(){return[e(re,{mr:"$2",boxSize:"$12",get src(){return k()}}),e(ae,{color:"$info9",fontSize:"$2xl",get children(){return l()}})]}}),e(b,{get when(){return!C()},get fallback(){return e(R,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return g()},onInput:t=>P(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&y()}})},get children(){return[e(R,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return s()},onInput:t=>u(t.currentTarget.value)}),e(b,{get when(){return!w()},get children(){return e(R,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return a()},onInput:t=>o(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&y()}})}}),e(x,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(ie,{get checked(){return f()==="true"},onChange:()=>G(f()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(le,{get children(){return n("\u6CA1\u6388\u6743\u8BD5\u8BD5\u6E38\u5BA2\u767B\u5F55\u5427")}})]}})]}}),e(ce,{w:"$full",spacing:"$2",get children(){return[e(b,{get when(){return!w()},get children(){return[e(O,{w:"$full",colorScheme:"danger",onClick:()=>{c(),_(decodeURIComponent(I.redirect||h||"/"),!0)},get children(){return n("login.use_guest")}}),e(O,{colorScheme:"warning",w:"$full",onClick:()=>{C()?P(""):(u(""),o(""))},get children(){return n("login.clear")}})]}}),e(O,{colorScheme:"success",w:"$full",get loading(){return M()},onClick:y,get children(){return n("login.login")}})]}}),e(x,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e($e,{}),e(b,{when:B,get children(){return e(z,{cursor:"pointer",boxSize:"$8",as:he,p:"$0_5",onclick:K})}})]}})]}})}})};export{ye as default};
