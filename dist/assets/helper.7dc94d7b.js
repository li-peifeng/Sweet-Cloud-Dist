import{cr as q,ca as F,r as $,l as w,z as P,cq as X,aM as N,dg as Y,aL as z,aO as G,dc as L,j as J,b0 as Q,a3 as k}from"./index.c51cc5b0.js";import{c as T}from"./index.2b4e41c8.js";import{b as U}from"./Folder.4a1c6ae1.js";/*! @viselect/vanilla v3.5.0 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla */var V=Object.defineProperty,Z=(r,e,t)=>e in r?V(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,u=(r,e,t)=>(Z(r,typeof e!="symbol"?e+"":e,t),t);class ee{constructor(){u(this,"_listeners",new Map),u(this,"on",this.addEventListener),u(this,"off",this.removeEventListener),u(this,"emit",this.dispatchEvent)}addEventListener(e,t){var s;const i=(s=this._listeners.get(e))!=null?s:new Set;return this._listeners.set(e,i),i.add(t),this}removeEventListener(e,t){var i;return(i=this._listeners.get(e))==null||i.delete(t),this}dispatchEvent(e,...t){var s;let i=!0;for(const o of(s=this._listeners.get(e))!=null?s:[])i=o(...t)!==!1&&i;return i}unbindAllListeners(){this._listeners.clear()}}const R=(r,e="px")=>typeof r=="number"?r+e:r;function b({style:r},e,t){if(typeof e=="object")for(const[i,s]of Object.entries(e))s!==void 0&&(r[i]=R(s));else t!==void 0&&(r[e]=R(t))}const B=r=>(e,t,i,s={})=>{e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]);for(const o of e)if(o)for(const n of t)o[r](n,i,{capture:!1,...s});return[e,t,i,s]},S=B("addEventListener"),y=B("removeEventListener"),A=r=>{var o;var e;const{clientX:t,clientY:i,target:s}=(o=(e=r.touches)==null?void 0:e[0])!=null?o:r;return{x:t,y:i,target:s}};function O(r,e,t="touch"){switch(t){case"center":{const i=e.left+e.width/2,s=e.top+e.height/2;return i>=r.left&&i<=r.right&&s>=r.top&&s<=r.bottom}case"cover":return e.left>=r.left&&e.top>=r.top&&e.right<=r.right&&e.bottom<=r.bottom;case"touch":return r.right>=e.left&&r.left<=e.right&&r.bottom>=e.top&&r.top<=e.bottom}}function x(r,e=document){const t=Array.isArray(r)?r:[r];let i=[];for(let s=0,o=t.length;s<o;s++){const n=t[s];typeof n=="string"?i=i.concat(Array.from(e.querySelectorAll(n))):n instanceof Element&&i.push(n)}return i}const te=()=>matchMedia("(hover: none), (pointer: coarse)").matches,se=()=>"safari"in window,ie=r=>{let e,t=-1,i=!1;return{next(...s){e=s,i||(i=!0,t=requestAnimationFrame(()=>{r(...e),i=!1}))},cancel(){cancelAnimationFrame(t),i=!1}}};function oe(r,e){for(const t of e){if(typeof t=="number")return r.button===t;if(typeof t=="object"){const i=t.button===r.button,s=t.modifiers.every(o=>{switch(o){case"alt":return r.altKey;case"ctrl":return r.ctrlKey||r.metaKey;case"shift":return r.shiftKey}});return i&&s}}return!1}const{abs:E,max:D,min:K,ceil:j}=Math;class H extends ee{constructor(e){var t,i,s,o,n;super(),u(this,"_options"),u(this,"_selection",{stored:[],selected:[],touched:[],changed:{added:[],removed:[]}}),u(this,"_area"),u(this,"_clippingElement"),u(this,"_targetElement"),u(this,"_targetRect"),u(this,"_selectables",[]),u(this,"_latestElement"),u(this,"_areaRect",new DOMRect),u(this,"_areaLocation",{y1:0,x2:0,y2:0,x1:0}),u(this,"_singleClick",!0),u(this,"_frame"),u(this,"_scrollAvailable",!0),u(this,"_scrollingActive",!1),u(this,"_scrollSpeed",{x:0,y:0}),u(this,"_scrollDelta",{x:0,y:0}),u(this,"disable",this._bindStartEvents.bind(this,!1)),u(this,"enable",this._bindStartEvents),this._options={selectionAreaClass:"selection-area",selectionContainerClass:void 0,selectables:[],document:window.document,startAreas:["html"],boundaries:["html"],container:"body",...e,behaviour:{overlap:"invert",intersect:"touch",triggers:[0],...e.behaviour,startThreshold:(t=e.behaviour)!=null&&t.startThreshold?typeof e.behaviour.startThreshold=="number"?e.behaviour.startThreshold:{x:10,y:10,...e.behaviour.startThreshold}:{x:10,y:10},scrolling:{speedDivider:10,manualSpeed:750,...(i=e.behaviour)==null?void 0:i.scrolling,startScrollMargins:{x:0,y:0,...(o=(s=e.behaviour)==null?void 0:s.scrolling)==null?void 0:o.startScrollMargins}}},features:{range:!0,touch:!0,...e.features,singleTap:{allow:!0,intersect:"native",...(n=e.features)==null?void 0:n.singleTap}}};for(const _ of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))typeof this[_]=="function"&&(this[_]=this[_].bind(this));const{document:l,selectionAreaClass:c,selectionContainerClass:d}=this._options;this._area=l.createElement("div"),this._clippingElement=l.createElement("div"),this._clippingElement.appendChild(this._area),this._area.classList.add(c),d&&this._clippingElement.classList.add(d),b(this._area,{willChange:"top, left, bottom, right, width, height",top:0,left:0,position:"fixed"}),b(this._clippingElement,{overflow:"hidden",position:"fixed",transform:"translate3d(0, 0, 0)",pointerEvents:"none",zIndex:"1"}),this._frame=ie(_=>{this._recalculateSelectionAreaRect(),this._updateElementSelection(),this._emitEvent("move",_),this._redrawSelectionArea()}),this.enable()}_bindStartEvents(e=!0){const{document:t,features:i}=this._options,s=e?S:y;s(t,"mousedown",this._onTapStart),i.touch&&s(t,"touchstart",this._onTapStart,{passive:!1})}_onTapStart(e,t=!1){var v;const{x:i,y:s,target:o}=A(e),{_options:n}=this,{document:l}=this._options,c=o.getBoundingClientRect();if(e instanceof MouseEvent&&!oe(e,n.behaviour.triggers))return;const d=x(n.startAreas,n.document),_=x(n.boundaries,n.document);this._targetElement=_.find(f=>O(f.getBoundingClientRect(),c));const m=e.composedPath();if(!this._targetElement||!d.find(f=>m.includes(f))||!_.find(f=>m.includes(f))||!t&&this._emitEvent("beforestart",e)===!1)return;this._areaLocation={x1:i,y1:s,x2:0,y2:0};const a=(v=l.scrollingElement)!=null?v:l.body;this._scrollDelta={x:a.scrollLeft,y:a.scrollTop},this._singleClick=!0,this.clearSelection(!1,!0),S(l,["touchmove","mousemove"],this._delayedTapMove,{passive:!1}),S(l,["mouseup","touchcancel","touchend"],this._onTapStop),S(l,"scroll",this._onScroll)}_onSingleTap(e){const{singleTap:{intersect:t},range:i}=this._options.features,s=A(e);let o;if(t==="native")o=s.target;else if(t==="touch"){this.resolveSelectables();const{x:l,y:c}=s;o=this._selectables.find(d=>{const{right:_,left:m,top:a,bottom:v}=d.getBoundingClientRect();return l<_&&l>m&&c<v&&c>a})}if(!o)return;for(this.resolveSelectables();!this._selectables.includes(o);){if(!o.parentElement)return;o=o.parentElement}const{stored:n}=this._selection;if(this._emitEvent("start",e),e.shiftKey&&i&&this._latestElement){const l=this._latestElement,[c,d]=l.compareDocumentPosition(o)&4?[o,l]:[l,o],_=[...this._selectables.filter(m=>m.compareDocumentPosition(c)&4&&m.compareDocumentPosition(d)&2),c,d];this.select(_),this._latestElement=l}else n.includes(o)&&(n.length===1||e.ctrlKey||n.every(l=>this._selection.stored.includes(l)))?this.deselect(o):(this.select(o),this._latestElement=o);this._emitEvent("stop",e)}_delayedTapMove(e){const{container:t,document:i,behaviour:{startThreshold:s}}=this._options,{x1:o,y1:n}=this._areaLocation,{x:l,y:c}=A(e);if(typeof s=="number"&&E(l+c-(o+n))>=s||typeof s=="object"&&E(l-o)>=s.x||E(c-n)>=s.y){if(y(i,["mousemove","touchmove"],this._delayedTapMove,{passive:!1}),this._emitEvent("beforedrag",e)===!1){y(i,["mouseup","touchcancel","touchend"],this._onTapStop);return}S(i,["mousemove","touchmove"],this._onTapMove,{passive:!1}),b(this._area,"display","block"),x(t,i)[0].appendChild(this._clippingElement),this.resolveSelectables(),this._singleClick=!1,this._targetRect=this._targetElement.getBoundingClientRect(),this._scrollAvailable=this._targetElement.scrollHeight!==this._targetElement.clientHeight||this._targetElement.scrollWidth!==this._targetElement.clientWidth,this._scrollAvailable&&(S(this._targetElement,"wheel",this._manualScroll,{passive:!1}),this._selectables=this._selectables.filter(d=>this._targetElement.contains(d))),this._setupSelectionArea(),this._emitEvent("start",e),this._onTapMove(e)}this._handleMoveEvent(e)}_setupSelectionArea(){const{_clippingElement:e,_targetElement:t,_area:i}=this,s=this._targetRect=t.getBoundingClientRect();this._scrollAvailable?(b(e,{top:s.top,left:s.left,width:s.width,height:s.height}),b(i,{marginTop:-s.top,marginLeft:-s.left})):(b(e,{top:0,left:0,width:"100%",height:"100%"}),b(i,{marginTop:0,marginLeft:0}))}_onTapMove(e){const{x:t,y:i}=A(e),{_scrollSpeed:s,_areaLocation:o,_options:n,_frame:l}=this,{speedDivider:c}=n.behaviour.scrolling,d=this._targetElement;if(o.x2=t,o.y2=i,this._scrollAvailable&&!this._scrollingActive&&(s.y||s.x)){this._scrollingActive=!0;const _=()=>{if(!s.x&&!s.y){this._scrollingActive=!1;return}const{scrollTop:m,scrollLeft:a}=d;s.y&&(d.scrollTop+=j(s.y/c),o.y1-=d.scrollTop-m),s.x&&(d.scrollLeft+=j(s.x/c),o.x1-=d.scrollLeft-a),l.next(e),requestAnimationFrame(_)};requestAnimationFrame(_)}else l.next(e);this._handleMoveEvent(e)}_handleMoveEvent(e){const{features:t}=this._options;(t.touch&&te()||this._scrollAvailable&&se())&&e.preventDefault()}_onScroll(){var o;const{_scrollDelta:e,_options:{document:t}}=this,{scrollTop:i,scrollLeft:s}=(o=t.scrollingElement)!=null?o:t.body;this._areaLocation.x1+=e.x-s,this._areaLocation.y1+=e.y-i,e.x=s,e.y=i,this._setupSelectionArea(),this._frame.next(null)}_manualScroll(e){const{manualSpeed:t}=this._options.behaviour.scrolling,i=e.deltaY?e.deltaY>0?1:-1:0,s=e.deltaX?e.deltaX>0?1:-1:0;this._scrollSpeed.y+=i*t,this._scrollSpeed.x+=s*t,this._onTapMove(e),e.preventDefault()}_recalculateSelectionAreaRect(){const{_scrollSpeed:e,_areaLocation:t,_areaRect:i,_targetElement:s,_options:o}=this,{scrollTop:n,scrollHeight:l,clientHeight:c,scrollLeft:d,scrollWidth:_,clientWidth:m}=s,a=this._targetRect,{x1:v,y1:f}=t;let{x2:p,y2:h}=t;const{behaviour:{scrolling:{startScrollMargins:g}}}=o;p<a.left+g.x?(e.x=d?-E(a.left-p+g.x):0,p=p<a.left?a.left:p):p>a.right-g.x?(e.x=_-d-m?E(a.left+a.width-p-g.x):0,p=p>a.right?a.right:p):e.x=0,h<a.top+g.y?(e.y=n?-E(a.top-h+g.y):0,h=h<a.top?a.top:h):h>a.bottom-g.y?(e.y=l-n-c?E(a.top+a.height-h-g.y):0,h=h>a.bottom?a.bottom:h):e.y=0;const C=K(v,p),M=K(f,h),I=D(v,p),W=D(f,h);i.x=C,i.y=M,i.width=I-C,i.height=W-M}_redrawSelectionArea(){const{x:e,y:t,width:i,height:s}=this._areaRect,{style:o}=this._area;o.left=`${e}px`,o.top=`${t}px`,o.width=`${i}px`,o.height=`${s}px`}_onTapStop(e,t){var i;const{document:s,features:o}=this._options,{_singleClick:n}=this;y(s,["mousemove","touchmove"],this._delayedTapMove),y(s,["touchmove","mousemove"],this._onTapMove),y(s,["mouseup","touchcancel","touchend"],this._onTapStop),y(s,"scroll",this._onScroll),this._keepSelection(),e&&n&&o.singleTap.allow?this._onSingleTap(e):!n&&!t&&(this._updateElementSelection(),this._emitEvent("stop",e)),this._scrollSpeed.x=0,this._scrollSpeed.y=0,y(this._targetElement,"wheel",this._manualScroll,{passive:!0}),this._clippingElement.remove(),(i=this._frame)==null||i.cancel(),b(this._area,"display","none")}_updateElementSelection(){const{_selectables:e,_options:t,_selection:i,_areaRect:s}=this,{stored:o,selected:n,touched:l}=i,{intersect:c,overlap:d}=t.behaviour,_=d==="invert",m=[],a=[],v=[];for(let p=0;p<e.length;p++){const h=e[p];if(O(s,h.getBoundingClientRect(),c)){if(n.includes(h))o.includes(h)&&!l.includes(h)&&l.push(h);else if(_&&o.includes(h)){v.push(h);continue}else a.push(h);m.push(h)}}_&&a.push(...o.filter(p=>!n.includes(p)));const f=d==="keep";for(let p=0;p<n.length;p++){const h=n[p];!m.includes(h)&&!(f&&o.includes(h))&&v.push(h)}i.selected=m,i.changed={added:a,removed:v},this._latestElement=void 0}_emitEvent(e,t){return this.emit(e,{event:t,store:this._selection,selection:this})}_keepSelection(){const{_options:e,_selection:t}=this,{selected:i,changed:s,touched:o,stored:n}=t,l=i.filter(c=>!n.includes(c));switch(e.behaviour.overlap){case"drop":{t.stored=[...l,...n.filter(c=>!o.includes(c))];break}case"invert":{t.stored=[...l,...n.filter(c=>!s.removed.includes(c))];break}case"keep":{t.stored=[...n,...i.filter(c=>!n.includes(c))];break}}}trigger(e,t=!0){this._onTapStart(e,t)}resolveSelectables(){this._selectables=x(this._options.selectables,this._options.document)}clearSelection(e=!0,t=!1){const{selected:i,stored:s,changed:o}=this._selection;o.added=[],o.removed.push(...i,...e?s:[]),t||(this._emitEvent("move",null),this._emitEvent("stop",null)),this._selection={stored:e?[]:s,selected:[],touched:[],changed:{added:[],removed:[]}}}getSelection(){return this._selection.stored}getSelectionArea(){return this._area}cancel(e=!1){this._onTapStop(null,!e)}destroy(){this.cancel(),this.disable(),this._clippingElement.remove(),super.unbindAllListeners()}select(e,t=!1){const{changed:i,selected:s,stored:o}=this._selection,n=x(e,this._options.document).filter(l=>!s.includes(l)&&!o.includes(l));return o.push(...n),s.push(...n),i.added.push(...n),i.removed=[],this._latestElement=void 0,t||(this._emitEvent("move",null),this._emitEvent("stop",null)),n}deselect(e,t=!1){const{selected:i,stored:s,changed:o}=this._selection,n=x(e,this._options.document).filter(l=>i.includes(l)||s.includes(l));n.length&&(this._selection.stored=s.filter(l=>!n.includes(l)),this._selection.selected=i.filter(l=>!n.includes(l)),this._selection.changed.added=[],this._selection.changed.removed.push(...n.filter(l=>!o.removed.includes(l))),this._latestElement=void 0,t||(this._emitEvent("move",null),this._emitEvent("stop",null)))}}u(H,"version","3.5.0");function ce(){const[r,e]=$(w.open_item_on_checkbox==="direct"),t=T("Alt",{preventDefault:!1}),i=T("Meta",{preventDefault:!1}),s=T("Control",{preventDefault:!1});return P(()=>{switch(w.open_item_on_checkbox){case"direct":{e(!0);break}case"disable_while_checked":{e(!N());break}case"with_ctrl":{e(X?i():s());break}case"with_alt":e(t())}}),r}function ae(){const r=()=>w.select_with_mouse==="disabled",e=()=>!Y&&!r()&&!z(),t=()=>{P(()=>{if(!e())return;const o=new H({selectionAreaClass:"viselect-selection-area",startAreas:[".viselect-container"],boundaries:[".viselect-container"],selectables:[".viselect-item"]});o.on("start",({event:n})=>{const l=n;o.clearSelection(!0,!0),o.select(".viselect-item.selected",!0),!l.ctrlKey&&!l.metaKey&&(G(!1),o.clearSelection())}),o.on("move",({store:{changed:{added:n,removed:l}}})=>{for(const c of n)L(Number(c.getAttribute("data-index")),!0);for(const c of l)L(Number(c.getAttribute("data-index")),!1)}),J(()=>o.destroy())})},{show:i}=U({id:1});return{isMouseSupported:e,registerSelectContainer:t,captureContentMenu:o=>{if(o.preventDefault(),N()&&!Q()){const l=o.target.closest(".viselect-item"),c=Number(l==null?void 0:l.getAttribute("data-index"));if(Number.isNaN(c)||!(()=>!!k.objs[c].selected)())return;o.stopPropagation(),i(o,{props:k.obj})}}}}const he=q(F,{baseStyle:{_before:{content:"",pos:"absolute",top:-10,right:-2,bottom:-10,left:-10}}});export{he as I,ae as a,ce as u};
