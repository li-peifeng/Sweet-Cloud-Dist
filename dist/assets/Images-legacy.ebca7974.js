!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.608d7cd5.js","./Folder-legacy.8143a580.js","./index-legacy.65bd675f.js","./ImageWithError-legacy.9ab5d8f4.js","./icon-legacy.74c24be9.js","./helper-legacy.a8f58570.js","./GridItem-legacy.2d876d47.js","./Layout-legacy.ec00d9b9.js","./index-legacy.6938dd5a.js","./FolderTree-legacy.1f5cbf74.js","./index-legacy.fc931661.js","./video_box-legacy.a2ff1397.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.04d4d5f8.js","./index-legacy.8bbea438.js","./index-legacy.6bc90d8d.js"],(function(n){"use strict";var t,r,o,i,a,c,u,l,f,s,d,g,b,h,y,m,j,p,w,x,v,$,_,k,A,I,S,E,M,C,z,F;return{setters:[function(e){t=e.cq,r=e.e,o=e.af,i=e.av,a=e.k,c=e.j,u=e.aB,l=e.c2,f=e.a3,s=e.r,d=e.aD,g=e.cI,b=e.ar,h=e.S,y=e.bQ,m=e.ao,j=e.aq,p=e.a7,w=e.a,x=e.E,v=e.a0,$=e.ch,_=e.l,k=e.bD,A=e.bE},function(e){I=e.b},function(e){S=e.u},function(e){E=e.I},function(e){M=e.O,C=e.g},function(e){z=e.u},function(e){F=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var G=function(n){if((0,t().isHide)(n.obj)||n.obj.type!==M.IMAGE)return null;var w=S().setPathAs,x=r(i,{get color(){return o()},boxSize:"$12",get as(){return C(n.obj)}}),v=e(a(!1),2),$=v[0],_=v[1],k=c((function(){return u()&&($()||n.obj.selected)})),A=I({id:1}).show,F=l().rawLink,G=z();return r(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return r(f,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:"2px solid ".concat(o())}},onMouseEnter:function(){_(!0),w(n.obj.name,n.obj.is_dir,!0)},onMouseLeave:function(){_(!1)},onContextMenu:function(e){s((function(){d(!1),g(n.index,!0,!0)})),A(e,{props:n.obj})},get children(){return r(b,{w:"$full",pos:"relative",get children(){return[r(h,{get when(){return k()},get children(){return r(y,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){g(n.index,e.target.checked)}})}}),r(E,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return r(m,{size:"lg"})},fallbackErr:x,get src(){return F(n.obj)},loading:"lazy",get cursor(){return!u()||G()?"pointer":"default"},"on:click":function(){u()&&!G()?g(n.index,!n.obj.selected):j.emit("gallery",n.obj.name)}})]}})}})}})};n("default",(function(e){var n=w(),t=c((function(){return r($,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return r(x,{get each(){return v.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return r(F,{obj:e,get index(){return n()}})}})}})}));return r(f,{spacing:"$2",w:"$full",get children(){return[r(h,{get when(){return"top"===_.show_folder_in_image_view},get children(){return t()}}),r(h,{get when(){return e.images.length>0},get fallback(){return r(k,{m:"$2",get children(){return n("home.no_images")}})},get children(){return r(A,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return r(x,{get each(){return v.objs},children:function(e,n){return r(G,{obj:e,get index(){return n()}})}})}})}}),r(h,{get when(){return"bottom"===_.show_folder_in_image_view},get children(){return t()}})]}})}))}}}))}();