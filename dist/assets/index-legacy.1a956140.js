System.register(["./index-legacy.479435ca.js","./useTitle-legacy.43c4fcd1.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(e,t){"use strict";var r,n,o,s,a,l,c,i,u,g,d,h,p,m,w,b,f,$,_,k,y,I,S,v,C,x,j,z,U,E,R,P,T,D,G,K,L,B,Z,q,H;return{setters:[e=>{r=e.bZ,n=e.aB,o=e.K,s=e.e,a=e.bU,l=e.b_,c=e.o,i=e.c,u=e.I,g=e.b2,d=e.b$,h=e.c0,p=e.c1,m=e.a,w=e.d,b=e.x,f=e.j,$=e.c2,_=e.aP,k=e.Z,y=e.bH,I=e.ao,S=e.bG,v=e.S,C=e.t,x=e.c3,j=e.a_,z=e.L,U=e.al,E=e.B,R=e.ar,P=e.bx,T=e.n,D=e.b3},e=>{G=e.c,K=e.h,L=e.b,B=e.i},e=>{Z=e.s,q=e.g,H=e.a}],execute:function(){const t=()=>{const e=n("sso_login_enabled"),t=o("sso_login_platform"),r=n("sso_compatibility_mode"),{searchParams:m,to:w}=s(),b=m.token;function f(e){const t=e.data;t.token&&(a(t.token),w(decodeURIComponent(m.redirect||l||"/"),!0))}if(null!=b&&""!=b&&(a(b),w(decodeURIComponent(m.redirect||l||"/"),!0)),window.addEventListener("message",f),c((()=>{window.removeEventListener("message",f)})),e){const e=()=>{const e=g.getUri()+"/auth/sso?method=sso_get_token";r?window.location.href=e:window.open(e,"authPopup","width=500,height=600")};let n;switch(t){case"Github":n=K;break;case"Microsoft":n=p;break;case"Google":n=h;break;case"Dingtalk":n=d;break;default:n=G}return i(u,{cursor:"pointer",boxSize:"$8",as:n,p:"$0_5",onclick:e})}};e("default",(()=>{const e=o("logo").split("\n"),c=m(e[0],e.pop()),d=w(),h=b((()=>`${o("site_title")}`));L(h);const p=m("white","$neutral1"),[G,K]=f(localStorage.getItem("username")||""),[J,M]=f(localStorage.getItem("password")||""),[N,O]=f(""),[A,F]=f(!1),[Q,V]=$("remember-pwd","false"),[W,X]=f(!1),[Y,ee]=_((async()=>{return W()?g.post("/auth/login/ldap",{username:G(),password:J(),otp_code:N()}):g.post("/auth/login/hash",{username:G(),password:(e=J(),r(`${e}-https://github.com/alist-org/alist`)),otp_code:N()});var e})),[,te]=_(((e,t,r)=>g.post("/authn/webauthn_finish_login?username="+r,JSON.stringify(t),{headers:{session:e}}))),[,re]=_((e=>g.get("/authn/webauthn_begin_login?username="+e))),{searchParams:ne,to:oe}=s(),se=n("webauthn_login_enabled"),ae=async()=>{F(!A())},le=async()=>{if(A()){if(!Z())return void T.error(d("users.webauthn_not_supported"));a(),"true"===Q()?localStorage.setItem("username",G()):localStorage.removeItem("username");const e=await re(G());D(e,(async e=>{try{const t=q(e.options),r=await H(t),n=await te(e.session,r,G());P(n,(e=>{T.success(d("login.success")),a(e.token),oe(decodeURIComponent(ne.redirect||l||"/"),!0)}))}catch(t){t instanceof Error&&T.error(t.message)}}))}else{"true"===Q()?(localStorage.setItem("username",G()),localStorage.setItem("password",J())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const e=await ee();P(e,(e=>{T.success(d("login.success")),a(e.token),oe(decodeURIComponent(ne.redirect||l||"/"),!0)}),((e,t)=>{ce()||402!==t?T.error(e):ie(!0)}))}},[ce,ie]=f(!1),ue=n("ldap_login_enabled"),ge=o("ldap_login_tips");return ue&&X(!0),i(R,{zIndex:"1",w:"$full",h:"100vh",get children(){return i(k,{get bgColor(){return p()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[i(y,{alignItems:"center",justifyContent:"space-around",get children(){return[i(I,{mr:"$2",boxSize:"$12",get src(){return c()}}),i(S,{color:"$info9",fontSize:"$2xl",get children(){return h()}})]}}),i(v,{get when(){return!ce()},get fallback(){return i(C,{id:"totp",name:"otp",get placeholder(){return d("login.otp-tips")},get value(){return N()},onInput:e=>O(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&le()}})},get children(){return[i(C,{name:"username",get placeholder(){return d("login.username-tips")},get value(){return G()},onInput:e=>K(e.currentTarget.value)}),i(v,{get when(){return!A()},get children(){return i(C,{name:"password",get placeholder(){return d("login.password-tips")},type:"password",get value(){return J()},onInput:e=>M(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&le()}})}}),i(y,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[i(x,{get checked(){return"true"===Q()},onChange:()=>V("true"===Q()?"false":"true"),get children(){return d("login.remember")}}),i(j,{color:"$success9",as:z,href:"https://peifeng.li/request-account-authorization",children:"获取账户访问授权"})]}})]}}),i(U,{w:"$full",spacing:"$2",get children(){return[i(v,{get when(){return!A()},get children(){return[i(E,{w:"$full",colorScheme:"danger",onClick:()=>{a(),oe(decodeURIComponent(ne.redirect||l||"/"),!0)},get children(){return d("login.use_guest")}}),i(E,{colorScheme:"warning",w:"$full",onClick:()=>{ce()?O(""):(K(""),M(""))},get children(){return d("login.clear")}})]}}),i(E,{colorScheme:"success",w:"$full",get loading(){return Y()},onClick:le,get children(){return d("login.login")}})]}}),i(v,{when:ue,get children(){return i(x,{w:"$full",get checked(){return!0===W()},onChange:()=>X(!W()),children:ge})}}),i(y,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[i(t,{}),i(v,{when:se,get children(){return i(u,{cursor:"pointer",boxSize:"$8",as:B,p:"$0_5",onclick:ae})}})]}})]}})}})}))}}}));
