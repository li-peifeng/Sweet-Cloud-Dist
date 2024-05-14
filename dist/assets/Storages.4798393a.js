import{d as h,c as e,a as H,am as R,af as o,b3 as v,b_ as V,aM as X,a8 as x,a5 as p,cB as l,cy as D,e as B,aU as _,b7 as c,E as i,aW as q,b8 as u,n as L,q as k,m as F,bX as G,S as P,bl as z,bm as E,bn as J,bo as N,bp as U,bq as j,br as K,J as d,bs as Q,bt as Y,bu as Z,bv as ee,a0 as re,a1 as C,cm as te,cw as ae,cx as ne,cz as T,cA as se}from"./index.3410edc0.js";import{s as le}from"./index.d667bb7f.js";import{D as oe}from"./DeletePopover.b886ab23.js";function M(r){const a=h(),{to:g}=B(),[m,b]=_(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,n]=_(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/@amore/storages/edit/${r.storage.id}`)},get children(){return a("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await n();q(s,()=>{r.refresh()})},get children(){return a(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return m()},onClick:async()=>{const s=await b();u(s,()=>{L.success(a("global.delete_success")),r.refresh()})}})]}function ce(r){const a=h();return e(p,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return H("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${R()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(V,{colorScheme:"info",get children(){return a(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[X(()=>a("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(M,r)}})]}})}function ie(r){const a=h();return e(D,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return a(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(M,r)}})}})]}})}const me=()=>{const r=h();le("manage.sidemenu.storages");const{to:a}=B(),[g,m]=_(()=>c.get("/admin/storage/list")),[b,S]=k([]),n=async()=>{const t=await m();u(t,w=>S(w.content))},[s,O]=k([]),[f,I]=k([]);(async()=>{const t=await c.get("/admin/driver/names");u(t,w=>O(w))})(),n();const W=async()=>{const t=await c.post("/admin/storage/load_all");u(t,()=>{L.success(r("storages.other.start_load_success"))})},y=F(()=>b().filter(t=>f().length===0?!0:f().includes(t.driver))),[$,A]=G("storages-layout","grid");return e(p,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:n,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{a("/@amore/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:W,get children(){return r("storages.other.load_all")}}),e(P,{get when(){return s().length>0},get children(){return e(z,{multiple:!0,get value(){return f()},onChange:I,get children(){return[e(E,{get children(){return[e(J,{get children(){return r("storages.other.filter_by_driver")}}),e(N,{}),e(U,{})]}}),e(j,{get children(){return e(K,{get children(){return e(d,{get each(){return s()},children:t=>e(Q,{value:t,get children(){return[e(Y,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{minW:80,get checked(){return $()==="table"},onChange:t=>{A(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(C,{get when(){return $()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return y()},children:t=>e(ce,{storage:t,refresh:n})})}})}}),e(C,{get when(){return $()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ae,{highlightOnHover:!0,dense:!0,get children(){return[e(ne,{get children(){return e(D,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return y()},children:t=>e(ie,{storage:t,refresh:n})})}})]}})}})}})]}})]}})};export{me as default};