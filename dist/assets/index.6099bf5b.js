import{e as A,aW as P,bB as B,_ as j,bC as $,i as D,f as E,a3 as G,g as L,bD as l,a5 as u,bE as z,bF as U,n as W,au as I,ar as w}from"./index.51a697c4.js";const T=(t,...n)=>{},S=new Map,q=(t,n)=>{S.set(t,n)},V=t=>{window.scroll({top:S.get(t)||0,behavior:"smooth"}),T("recoverScroll",t,S.get(t))};let H=!0,d;function N(t,n,r="replaceState"){let o=r==="location"?location.href:location.hash;if(!o.includes("?"))o=`${o}?${t}=${n}`;else if(!o.includes(t))o=`${o}&${t}=${n}`;else{const h=`(\\?|&|#)${t}([^&|^#]*)(&|$|#)`;o=o.replace(new RegExp(h),"$1"+t+"="+n+"$3")}r==="location"&&(location.href=o),r==="pushState"&&history.pushState({},"",o),r==="replaceState"&&history.replaceState({},"",o)}function O(t){for(var n=window.location.search.substring(1),r=n.split("&"),o=0;o<r.length;o++){var h=r[o].split("=");if(h[0]==t)return h[1]}return""}const b={};let i=1;const J=()=>i,x=()=>{const t=$();i=1,t.type==="pagination"&&N("page",1),console.log("resetGlobalPage",i)},K=()=>{const{pathname:t,to:n}=A(),[,r]=P(e=>B(e,j())),o=$();o.type==="pagination"&&O("page")&&(i=parseInt(O("page")));const[,h]=P(e=>{const s={index:e==null?void 0:e.index,size:e==null?void 0:e.size};return D(e==null?void 0:e.path,j(),s.index,s.size,e==null?void 0:e.force,new E.CancelToken(function(c){d=c}))}),m=(e,s=!0,a=!1)=>{a&&(e=L(t(),e)),s?b[e]=!0:delete b[e]};let g=!1;const R=(e,s,a)=>{d==null||d(),g=s!=null?s:!1,v(""),b[e]?p(e,i,void 0,void 0,a):y(e)},y=async e=>{l.setState(u.FetchingObj);const s=await r(e);z(s,a=>{var c;l.setObj(a),l.setProvider(a.provider),a.is_dir?(m(e),p(e,i)):(l.setReadme(a.readme),l.setHeader(a.header),l.setRelated((c=a.related)!=null?c:[]),l.setRawUrl(a.raw_url),l.setState(u.File))},v)},p=async(e,s,a,c=!1,_)=>{a||(a=o.size),a!==void 0&&o.type==="all"&&(a=void 0),i=s!=null?s:1,l.setState(c?u.FetchingMore:u.FetchingObjs);const C=await h({path:e,index:s,size:a,force:_});z(C,f=>{var M;c?U(f.content):(l.setObjs((M=f.content)!=null?M:[]),l.setTotal(f.total)),l.setReadme(f.readme),l.setHeader(f.header),l.setWrite(f.write),l.setProvider(f.provider),l.setState(u.Folder),c&&(s!=null?s:1)>1||V(e)},v)},v=(e,s)=>{if(s===403)l.setState(u.NeedPassword),g&&W.error(e);else{if(H&&e.endsWith("object not found")){H=!1,n(t().replace(I().base_path,""));return}l.setErr(e)}},F=(e,s,a=!1)=>{p(t(),e,s,a)};return{handlePathChange:R,setPathAs:m,refresh:(e,s)=>{R(t(),e,s)},pageChange:F,loadMore:()=>{F(i+1,void 0,!0)},allLoaded:()=>i>=Math.ceil(G.total/o.size)}};function X(t){return w({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 10h3l-4-4-4 4h3v4h2v-4z"/>'},t)}function Y(t){return w({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM13 13h3l-4-4-4 4h3v4h2v-4z"/>'},t)}function Z(t){return w({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"/>'},t)}export{Z as R,x as a,V as b,Y as c,X as d,N as e,J as g,q as r,K as u};