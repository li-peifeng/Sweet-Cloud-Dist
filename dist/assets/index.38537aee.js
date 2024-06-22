import{c4 as ee,aI as _,X as k,e as G,b$ as d,c5 as w,j as te,c as e,I as N,b9 as f,c6 as ne,c7 as oe,c8 as re,a as F,d as se,q as ae,r as g,c9 as ie,aW as R,a6 as ce,bO as L,av as le,bN as ue,S as h,D as O,ca as P,b5 as ge,R as de,as as pe,G as T,ay as he,bE as B,n as m,ba as me}from"./index.0cd33397.js";import{c as fe,h as we,b as be,i as Se}from"./useTitle.b60eb5a3.js";import{s as $e,g as ke,a as _e}from"./webauthn-json.browser-ponyfill.1c672167.js";const Ie="https://github.com/alist-org/alist";function ye(c){return ee(`${c}-${Ie}`)}const Ce=()=>{const c=_("sso_login_enabled"),I=k("sso_login_platform"),n=_("sso_compatibility_mode"),{searchParams:l,to:b}=G(),r=l.token;r!=null&&r!=""&&(d(r),b(decodeURIComponent(l.redirect||w||"/"),!0));function p(s){const o=s.data;o.token&&(d(o.token),b(decodeURIComponent(l.redirect||w||"/"),!0))}if(window.addEventListener("message",p),te(()=>{window.removeEventListener("message",p)}),c){const s=()=>{const u=f.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=u;return}window.open(u,"authPopup","width=500,height=600")};let o;switch(I){case"Github":o=we;break;case"Microsoft":o=re;break;case"Google":o=oe;break;case"Dingtalk":o=ne;break;default:o=fe}return e(N,{cursor:"pointer",boxSize:"$8",as:o,p:"$0_5",onclick:s})}},Re=()=>{const c=k("logo").split(`
`),I=F(c[0],c.pop()),n=se(),l=ae(()=>`${k("site_title")}`);be(l);const b=F("white","$neutral1"),[r,p]=g(localStorage.getItem("username")||""),[s,o]=g(localStorage.getItem("password")||""),[u,U]=g(""),[S,j]=g(!1),[$,A]=ie("remember-pwd","false"),[y,z]=g(!1),[M,q]=R(async()=>y()?f.post("/auth/login/ldap",{username:r(),password:s(),otp_code:u()}):f.post("/auth/login/hash",{username:r(),password:ye(s()),otp_code:u()})),[,H]=R((t,a,i)=>f.post("/authn/webauthn_finish_login?username="+i,JSON.stringify(a),{headers:{session:t}})),[,J]=R(t=>f.get("/authn/webauthn_begin_login?username="+t)),{searchParams:C,to:v}=G(),K=_("webauthn_login_enabled"),V=async()=>{j(!S())},x=async()=>{if(S()){if(!$e()){m.error(n("users.webauthn_not_supported"));return}d(),$()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const t=await J(r());me(t,async a=>{try{const i=ke(a.options),Q=await _e(i),Y=await H(a.session,Q,r());B(Y,Z=>{m.success(n("login.success")),d(Z.token),v(decodeURIComponent(C.redirect||w||"/"),!0)})}catch(i){i instanceof Error&&m.error(i.message)}})}else{$()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",s())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await q();B(t,a=>{m.success(n("login.success")),d(a.token),v(decodeURIComponent(C.redirect||w||"/"),!0)},(a,i)=>{!E()&&i===402?W(!0):m.error(a)})}},[E,W]=g(!1),D=_("ldap_login_enabled"),X=k("ldap_login_tips");return D&&z(!0),e(he,{zIndex:"1",w:"$full",h:"100vh",get children(){return e(ce,{get bgColor(){return b()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(L,{alignItems:"center",justifyContent:"space-around",get children(){return[e(le,{mr:"$2",boxSize:"$12",get src(){return I()}}),e(ue,{color:"$info9",fontSize:"$2xl",get children(){return l()}})]}}),e(h,{get when(){return!E()},get fallback(){return e(O,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return u()},onInput:t=>U(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&x()}})},get children(){return[e(O,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:t=>p(t.currentTarget.value)}),e(h,{get when(){return!S()},get children(){return e(O,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return s()},onInput:t=>o(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&x()}})}}),e(L,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(P,{get checked(){return $()==="true"},onChange:()=>A($()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(ge,{color:"$info9",as:de,href:"https://peifeng.li/Request-account-authorization",children:"\u83B7\u53D6\u8D26\u6237\u8BBF\u95EE\u6388\u6743"})]}})]}}),e(pe,{w:"$full",spacing:"$2",get children(){return[e(h,{get when(){return!S()},get children(){return[e(T,{w:"$full",colorScheme:"danger",onClick:()=>{d(),v(decodeURIComponent(C.redirect||w||"/"),!0)},get children(){return n("login.use_guest")}}),e(T,{colorScheme:"warning",w:"$full",onClick:()=>{E()?U(""):(p(""),o(""))},get children(){return n("login.clear")}})]}}),e(T,{colorScheme:"success",w:"$full",get loading(){return M()},onClick:x,get children(){return n("login.login")}})]}}),e(h,{when:D,get children(){return e(P,{w:"$full",get checked(){return y()===!0},onChange:()=>z(!y()),children:X})}}),e(L,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(Ce,{}),e(h,{when:K,get children(){return e(N,{cursor:"pointer",boxSize:"$8",as:Se,p:"$0_5",onclick:V})}})]}})]}})}})};export{Re as default};
