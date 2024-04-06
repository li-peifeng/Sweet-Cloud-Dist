import{d as W,aP as p,b2 as i,q as m,c as e,ck as L,a5 as q,bI as v,E as o,b3 as y,n as c,S as u,e as ee,ad as n,cl as b,i as re,ac as g,aB as $,cm as te,cn as ne,co as se,cp as ae,aa as h,a_ as E,cq as R,br as S,be as I,C as P,F as U,aH as M,cr as ie,J as A,ay as oe,bW as ce,bz as ue}from"./index.5b66ff2f.js";import{s as le}from"./index.6b0f9c50.js";import{L as de}from"./index.0c9c85e1.js";import{s as H,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";const pe=r=>{const w=W(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[k,a]=m(!1);return e(u,{get when(){return!k()},get children(){return e(L,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(q,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(v,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(L,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const C=await d();y(C,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},me=r=>e(ce,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),$e=()=>{const r=W();le("manage.sidemenu.profile");const{searchParams:w,to:l}=ee(),[d,k]=m(n().username),[a,C]=m(""),[F,D]=m(""),J=$("sso_compatibility_mode"),[T,N]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[O,j]=p(()=>i.get("/authn/getcredentials")),[,z]=p(()=>i.get("/authn/webauthn_begin_registration")),[G,V]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),_=async t=>{if(a()&&a()!==F()){c.warning(r("users.confirm_password_not_same"));return}const s=await N(t);y(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@tiamo?redirect=${encodeURIComponent(location.pathname)}`))})},x=w.sso_id;x&&(b({...n(),sso_id:x}),_(!0));function B(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),_(!0))}window.addEventListener("message",B),re(()=>{window.removeEventListener("message",B)});const[X,K]=m([]),Q=async()=>{const t=await j();ue(t,K)};return H()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Q(),e(q,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(te,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(ne,{mr:"$2_5"}),e(se,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ae,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(E,{get children(){return r("global.have_account")}}),e(E,{color:"$info9",as:de,get href(){return`/@tiamo?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(v,{get children(){return r("users.update_profile")}}),e(R,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(S,{get children(){return[e(I,{for:"username",get children(){return r("users.change_username")}}),e(P,{id:"username",get value(){return d()},onInput:t=>{k(t.currentTarget.value)}})]}})}}),e(R,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(S,{get children(){return[e(I,{for:"password",get children(){return r("users.change_password")}}),e(P,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{C(t.currentTarget.value)}}),e(U,{get children(){return r("users.change_password-tips")}})]}}),e(S,{get children(){return[e(I,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(P,{id:"confirm-password",type:"password",placeholder:"********",get value(){return F()},onInput:t=>{D(t.currentTarget.value)}}),e(U,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return T()},onClick:[_,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@amore/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return M(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(v,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(J){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return T()},onClick:()=>{b({...n(),sso_id:""}),_(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return M(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(v,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(ie,{get loading(){return O()},get children(){return e(A,{get each(){return X()},children:t=>e(pe,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return G()},onClick:async()=>{if(!H()){c.error(r("users.webauthn_not_supported"));return}const t=await z();y(t,async s=>{const Y=ge(s.options),Z=s.session;try{const f=await he(Y);y(await V(Z,f),()=>{c.success(r("users.add_webauthn_success"))})}catch(f){f instanceof Error&&c.error(f.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(A,{each:oe,children:(t,s)=>e(me,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}})]}})};export{$e as default};