import{d as h,c as e,a as W,ah as P,aa as o,a_ as v,bW as V,aH as j,a6 as x,a5 as p,cz as l,cw as D,e as L,aP as _,b2 as i,E as c,aR as q,b3 as u,n as O,q as k,m as A,bT as F,S as G,bg as X,bh as z,bi as E,bj as J,bk as N,bl as K,bm as Q,J as d,bn as U,bo as Y,bp as Z,bq as ee,a0 as re,a1 as T,cj as te,cu as ae,cv as ne,cx as C,cy as se}from"./index.6fffe14f.js";import{s as le}from"./index.ca6a0c3d.js";import{D as oe}from"./DeletePopover.467a21e4.js";function B(r){const a=h(),{to:g}=L(),[m,b]=_(()=>i.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,n]=_(()=>i.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(c,{onClick:()=>{g(`/@amore/storages/edit/${r.storage.id}`)},get children(){return a("global.edit")}}),e(c,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await n();q(s,()=>{r.refresh()})},get children(){return a(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return m()},onClick:async()=>{const s=await b();u(s,()=>{O.success(a("global.delete_success")),r.refresh()})}})]}function ie(r){const a=h();return e(p,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return W("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${P()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(V,{colorScheme:"info",get children(){return a(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[j(()=>a("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(B,r)}})]}})}function ce(r){const a=h();return e(D,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return a(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(B,r)}})}})]}})}const me=()=>{const r=h();le("manage.sidemenu.storages");const{to:a}=L(),[g,m]=_(()=>i.get("/admin/storage/list")),[b,S]=k([]),n=async()=>{const t=await m();u(t,w=>S(w.content))},[s,M]=k([]),[f,I]=k([]);(async()=>{const t=await i.get("/admin/driver/names");u(t,w=>M(w))})(),n();const H=async()=>{const t=await i.post("/admin/storage/load_all");u(t,()=>{O.success(r("storages.other.start_load_success"))})},y=A(()=>b().filter(t=>f().length===0?!0:f().includes(t.driver))),[$,R]=F("storages-layout","grid");return e(p,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(c,{colorScheme:"accent",get loading(){return g()},onClick:n,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{a("/@amore/storages/add")},get children(){return r("global.add")}}),e(c,{colorScheme:"warning",get loading(){return g()},onClick:H,get children(){return r("storages.other.load_all")}}),e(G,{get when(){return s().length>0},get children(){return e(X,{multiple:!0,get value(){return f()},onChange:I,get children(){return[e(z,{get children(){return[e(E,{get children(){return r("storages.other.filter_by_driver")}}),e(J,{}),e(N,{})]}}),e(K,{get children(){return e(Q,{get children(){return e(d,{get each(){return s()},children:t=>e(U,{value:t,get children(){return[e(Y,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{minW:80,get checked(){return $()==="table"},onChange:t=>{R(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(T,{get when(){return $()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return y()},children:t=>e(ie,{storage:t,refresh:n})})}})}}),e(T,{get when(){return $()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ae,{highlightOnHover:!0,dense:!0,get children(){return[e(ne,{get children(){return e(D,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(C,{get children(){return r(`storages.common.${t}`)}})}),e(C,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return y()},children:t=>e(ce,{storage:t,refresh:n})})}})]}})}})}})]}})]}})};export{me as default};