!function(){function e(){return e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,r){var i=t(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?e:r):o.value}},e.apply(this,arguments)}function t(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function a(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(s){a=!0,i=s}finally{try{l||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw o}}}}function d(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}System.register(["./index-legacy.010cd2de.js","./index-legacy.6edf4edb.js","./Folder-legacy.46138227.js"],(function(t){"use strict";var i,s,u,d,v,y,b,g,E,S,w,x,A,k,O,T;return{setters:[function(e){i=e.cs,s=e.cb,u=e.r,d=e.l,v=e.z,y=e.cr,b=e.aM,g=e.dn,E=e.aL,S=e.aO,w=e.dj,x=e.j,A=e.b0,k=e.a3},function(e){O=e.c},function(e){T=e.b}],execute:function(){t({a:function(){var e=function(){return!(g||"disabled"===d.select_with_mouse||E())},t=T({id:1}).show;return{isMouseSupported:e,registerSelectContainer:function(){v((function(){if(e()){var t=new Y({selectionAreaClass:"viselect-selection-area",startAreas:[".viselect-container"],boundaries:[".viselect-container"],selectables:[".viselect-item"]});t.on("start",(function(e){var n=e.event;t.clearSelection(!0,!0),t.select(".viselect-item.selected",!0),n.ctrlKey||n.metaKey||(S(!1),t.clearSelection())})),t.on("move",(function(e){var t,n=e.store.changed,r=n.added,i=n.removed,o=f(r);try{for(o.s();!(t=o.n()).done;){var l=t.value;w(Number(l.getAttribute("data-index")),!0)}}catch(u){o.e(u)}finally{o.f()}var a,s=f(i);try{for(s.s();!(a=s.n()).done;){var c=a.value;w(Number(c.getAttribute("data-index")),!1)}}catch(u){s.e(u)}finally{s.f()}})),x((function(){return t.destroy()}))}}))},captureContentMenu:function(e){if(e.preventDefault(),b()&&!A()){var n=e.target.closest(".viselect-item"),r=Number(null==n?void 0:n.getAttribute("data-index"));if(Number.isNaN(r)||!k.objs[r].selected)return;e.stopPropagation(),t(e,{props:k.obj})}}}},u:function(){var e=h(u("direct"===d.open_item_on_checkbox),2),t=e[0],n=e[1],r=O("Alt",{preventDefault:!1}),i=O("Meta",{preventDefault:!1}),o=O("Control",{preventDefault:!1});return v((function(){switch(d.open_item_on_checkbox){case"direct":n(!0);break;case"disable_while_checked":n(!b());break;case"with_ctrl":n(y?i():o());break;case"with_alt":n(r())}})),t}});/*! @viselect/vanilla v3.5.0 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla */var j=Object.defineProperty,M=function(e,t,n){return function(e,t,n){t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=_(t)?t+"":t,n),n},L=function(){function e(){p(this,e),M(this,"_listeners",new Map),M(this,"on",this.addEventListener),M(this,"off",this.removeEventListener),M(this,"emit",this.dispatchEvent)}return m(e,[{key:"addEventListener",value:function(e,t){var n,r=null!==(n=this._listeners.get(e))&&void 0!==n?n:new Set;return this._listeners.set(e,r),r.add(t),this}},{key:"removeEventListener",value:function(e,t){var n;return null==(n=this._listeners.get(e))||n.delete(t),this}},{key:"dispatchEvent",value:function(e){for(var t,n=!0,r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var l,a=f(null!==(t=this._listeners.get(e))&&void 0!==t?t:[]);try{for(a.s();!(l=a.n()).done;){var s=l.value;n=!1!==s.apply(void 0,i)&&n}}catch(c){a.e(c)}finally{a.f()}return n}},{key:"unbindAllListeners",value:function(){this._listeners.clear()}}]),e}(),P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return"number"==typeof e?e+t:e};function C(e,t,n){var r=e.style;if("object"==_(t))for(var i=0,o=Object.entries(t);i<o.length;i++){var l=h(o[i],2),a=l[0],s=l[1];void 0!==s&&(r[a]=P(s))}else void 0!==n&&(r[t]=P(n))}var R=function(e){return function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t instanceof HTMLCollection||t instanceof NodeList?t=Array.from(t):Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);var o,l=f(t);try{for(l.s();!(o=l.n()).done;){var a=o.value;if(a){var s,u=f(n);try{for(u.s();!(s=u.n()).done;){var h=s.value;a[e](h,r,c({capture:!1},i))}}catch(d){u.e(d)}finally{u.f()}}}}catch(d){l.e(d)}finally{l.f()}return[t,n,r,i]}},D=R("addEventListener"),I=R("removeEventListener"),B=function(e){var t,n,r=null!==(t=null==(n=e.touches)?void 0:n[0])&&void 0!==t?t:e;return{x:r.clientX,y:r.clientY,target:r.target}};function K(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"touch";switch(n){case"center":var r=t.left+t.width/2,i=t.top+t.height/2;return r>=e.left&&r<=e.right&&i>=e.top&&i<=e.bottom;case"cover":return t.left>=e.left&&t.top>=e.top&&t.right<=e.right&&t.bottom<=e.bottom;case"touch":return e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}}function N(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=Array.isArray(e)?e:[e],r=[],i=0,o=n.length;i<o;i++){var l=n[i];"string"==typeof l?r=r.concat(Array.from(t.querySelectorAll(l))):l instanceof Element&&r.push(l)}return r}function F(e,t){var n,r=f(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;if("number"==typeof i)return e.button===i;if("object"==_(i)){var o=i.button===e.button,l=i.modifiers.every((function(t){switch(t){case"alt":return e.altKey;case"ctrl":return e.ctrlKey||e.metaKey;case"shift":return e.shiftKey}}));return o&&l}}}catch(a){r.e(a)}finally{r.f()}return!1}var H=Math.abs,q=Math.max,W=Math.min,X=Math.ceil,Y=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}(s,t);var i=r(s);function s(e){var t,n,r,l,u,h;p(this,s),t=i.call(this),M(o(t),"_options"),M(o(t),"_selection",{stored:[],selected:[],touched:[],changed:{added:[],removed:[]}}),M(o(t),"_area"),M(o(t),"_clippingElement"),M(o(t),"_targetElement"),M(o(t),"_targetRect"),M(o(t),"_selectables",[]),M(o(t),"_latestElement"),M(o(t),"_areaRect",new DOMRect),M(o(t),"_areaLocation",{y1:0,x2:0,y2:0,x1:0}),M(o(t),"_singleClick",!0),M(o(t),"_frame"),M(o(t),"_scrollAvailable",!0),M(o(t),"_scrollingActive",!1),M(o(t),"_scrollSpeed",{x:0,y:0}),M(o(t),"_scrollDelta",{x:0,y:0}),M(o(t),"disable",t._bindStartEvents.bind(o(t),!1)),M(o(t),"enable",t._bindStartEvents),t._options=c(c({selectionAreaClass:"selection-area",selectionContainerClass:void 0,selectables:[],document:window.document,startAreas:["html"],boundaries:["html"],container:"body"},e),{},{behaviour:c(c({overlap:"invert",intersect:"touch",triggers:[0]},e.behaviour),{},{startThreshold:null!=(n=e.behaviour)&&n.startThreshold?"number"==typeof e.behaviour.startThreshold?e.behaviour.startThreshold:c({x:10,y:10},e.behaviour.startThreshold):{x:10,y:10},scrolling:c(c({speedDivider:10,manualSpeed:750},null==(r=e.behaviour)?void 0:r.scrolling),{},{startScrollMargins:c({x:0,y:0},null==(u=null==(l=e.behaviour)?void 0:l.scrolling)?void 0:u.startScrollMargins)})}),features:c(c({range:!0,touch:!0},e.features),{},{singleTap:c({allow:!0,intersect:"native"},null==(h=e.features)?void 0:h.singleTap)})});var d,v=f(Object.getOwnPropertyNames(Object.getPrototypeOf(o(t))));try{for(v.s();!(d=v.n()).done;){var y=d.value;"function"==typeof t[y]&&(t[y]=t[y].bind(o(t)))}}catch(E){v.e(E)}finally{v.f()}var m=t._options,_=m.document,b=m.selectionAreaClass,g=m.selectionContainerClass;return t._area=_.createElement("div"),t._clippingElement=_.createElement("div"),t._clippingElement.appendChild(t._area),t._area.classList.add(b),g&&t._clippingElement.classList.add(g),C(t._area,{willChange:"top, left, bottom, right, width, height",top:0,left:0,position:"fixed"}),C(t._clippingElement,{overflow:"hidden",position:"fixed",transform:"translate3d(0, 0, 0)",pointerEvents:"none",zIndex:"1"}),t._frame=function(e){var t,n=-1,r=!1;return{next:function(){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];t=o,r||(r=!0,n=requestAnimationFrame((function(){e.apply(void 0,a(t)),r=!1})))},cancel:function(){cancelAnimationFrame(n),r=!1}}}((function(e){t._recalculateSelectionAreaRect(),t._updateElementSelection(),t._emitEvent("move",e),t._redrawSelectionArea()})),t.enable(),t}return m(s,[{key:"_bindStartEvents",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._options,n=t.document,r=t.features,i=e?D:I;i(n,"mousedown",this._onTapStart),r.touch&&i(n,"touchstart",this._onTapStart,{passive:!1})}},{key:"_onTapStart",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=B(e),i=r.x,o=r.y,l=r.target,a=this._options,s=this._options.document,c=l.getBoundingClientRect();if(!(e instanceof MouseEvent)||F(e,a.behaviour.triggers)){var u=N(a.startAreas,a.document),h=N(a.boundaries,a.document);this._targetElement=h.find((function(e){return K(e.getBoundingClientRect(),c)}));var f=e.composedPath();if(this._targetElement&&u.find((function(e){return f.includes(e)}))&&h.find((function(e){return f.includes(e)}))&&(n||!1!==this._emitEvent("beforestart",e))){this._areaLocation={x1:i,y1:o,x2:0,y2:0};var d=null!==(t=s.scrollingElement)&&void 0!==t?t:s.body;this._scrollDelta={x:d.scrollLeft,y:d.scrollTop},this._singleClick=!0,this.clearSelection(!1,!0),D(s,["touchmove","mousemove"],this._delayedTapMove,{passive:!1}),D(s,["mouseup","touchcancel","touchend"],this._onTapStop),D(s,"scroll",this._onScroll)}}}},{key:"_onSingleTap",value:function(e){var t,n=this,r=this._options.features,i=r.singleTap.intersect,o=r.range,l=B(e);if("native"===i)t=l.target;else if("touch"===i){this.resolveSelectables();var s=l.x,c=l.y;t=this._selectables.find((function(e){var t=e.getBoundingClientRect(),n=t.right,r=t.left,i=t.top,o=t.bottom;return s<n&&s>r&&c<o&&c>i}))}if(t){for(this.resolveSelectables();!this._selectables.includes(t);){if(!t.parentElement)return;t=t.parentElement}var u=this._selection.stored;if(this._emitEvent("start",e),e.shiftKey&&o&&this._latestElement){var f=this._latestElement,d=h(4&f.compareDocumentPosition(t)?[t,f]:[f,t],2),v=d[0],p=d[1],y=[].concat(a(this._selectables.filter((function(e){return 4&e.compareDocumentPosition(v)&&2&e.compareDocumentPosition(p)}))),[v,p]);this.select(y),this._latestElement=f}else u.includes(t)&&(1===u.length||e.ctrlKey||u.every((function(e){return n._selection.stored.includes(e)})))?this.deselect(t):(this.select(t),this._latestElement=t);this._emitEvent("stop",e)}}},{key:"_delayedTapMove",value:function(e){var t=this,n=this._options,r=n.container,i=n.document,o=n.behaviour.startThreshold,l=this._areaLocation,a=l.x1,s=l.y1,c=B(e),u=c.x,h=c.y;if("number"==typeof o&&H(u+h-(a+s))>=o||"object"==_(o)&&H(u-a)>=o.x||H(h-s)>=o.y){if(I(i,["mousemove","touchmove"],this._delayedTapMove,{passive:!1}),!1===this._emitEvent("beforedrag",e))return void I(i,["mouseup","touchcancel","touchend"],this._onTapStop);D(i,["mousemove","touchmove"],this._onTapMove,{passive:!1}),C(this._area,"display","block"),N(r,i)[0].appendChild(this._clippingElement),this.resolveSelectables(),this._singleClick=!1,this._targetRect=this._targetElement.getBoundingClientRect(),this._scrollAvailable=this._targetElement.scrollHeight!==this._targetElement.clientHeight||this._targetElement.scrollWidth!==this._targetElement.clientWidth,this._scrollAvailable&&(D(this._targetElement,"wheel",this._manualScroll,{passive:!1}),this._selectables=this._selectables.filter((function(e){return t._targetElement.contains(e)}))),this._setupSelectionArea(),this._emitEvent("start",e),this._onTapMove(e)}this._handleMoveEvent(e)}},{key:"_setupSelectionArea",value:function(){var e=this._clippingElement,t=this._targetElement,n=this._area,r=this._targetRect=t.getBoundingClientRect();this._scrollAvailable?(C(e,{top:r.top,left:r.left,width:r.width,height:r.height}),C(n,{marginTop:-r.top,marginLeft:-r.left})):(C(e,{top:0,left:0,width:"100%",height:"100%"}),C(n,{marginTop:0,marginLeft:0}))}},{key:"_onTapMove",value:function(e){var t=this,n=B(e),r=n.x,i=n.y,o=this._scrollSpeed,l=this._areaLocation,a=this._options,s=this._frame,c=a.behaviour.scrolling.speedDivider,u=this._targetElement;if(l.x2=r,l.y2=i,this._scrollAvailable&&!this._scrollingActive&&(o.y||o.x)){this._scrollingActive=!0;requestAnimationFrame((function n(){if(o.x||o.y){var r=u.scrollTop,i=u.scrollLeft;o.y&&(u.scrollTop+=X(o.y/c),l.y1-=u.scrollTop-r),o.x&&(u.scrollLeft+=X(o.x/c),l.x1-=u.scrollLeft-i),s.next(e),requestAnimationFrame(n)}else t._scrollingActive=!1}))}else s.next(e);this._handleMoveEvent(e)}},{key:"_handleMoveEvent",value:function(e){(this._options.features.touch&&matchMedia("(hover: none), (pointer: coarse)").matches||this._scrollAvailable&&"safari"in window)&&e.preventDefault()}},{key:"_onScroll",value:function(){var e,t=this._scrollDelta,n=this._options.document,r=null!==(e=n.scrollingElement)&&void 0!==e?e:n.body,i=r.scrollTop,o=r.scrollLeft;this._areaLocation.x1+=t.x-o,this._areaLocation.y1+=t.y-i,t.x=o,t.y=i,this._setupSelectionArea(),this._frame.next(null)}},{key:"_manualScroll",value:function(e){var t=this._options.behaviour.scrolling.manualSpeed,n=e.deltaY?e.deltaY>0?1:-1:0,r=e.deltaX?e.deltaX>0?1:-1:0;this._scrollSpeed.y+=n*t,this._scrollSpeed.x+=r*t,this._onTapMove(e),e.preventDefault()}},{key:"_recalculateSelectionAreaRect",value:function(){var e=this._scrollSpeed,t=this._areaLocation,n=this._areaRect,r=this._targetElement,i=this._options,o=r.scrollTop,l=r.scrollHeight,a=r.clientHeight,s=r.scrollLeft,c=r.scrollWidth,u=r.clientWidth,h=this._targetRect,f=t.x1,d=t.y1,v=t.x2,p=t.y2,y=i.behaviour.scrolling.startScrollMargins;v<h.left+y.x?(e.x=s?-H(h.left-v+y.x):0,v=v<h.left?h.left:v):v>h.right-y.x?(e.x=c-s-u?H(h.left+h.width-v-y.x):0,v=v>h.right?h.right:v):e.x=0,p<h.top+y.y?(e.y=o?-H(h.top-p+y.y):0,p=p<h.top?h.top:p):p>h.bottom-y.y?(e.y=l-o-a?H(h.top+h.height-p-y.y):0,p=p>h.bottom?h.bottom:p):e.y=0;var m=W(f,v),_=W(d,p),b=q(f,v),g=q(d,p);n.x=m,n.y=_,n.width=b-m,n.height=g-_}},{key:"_redrawSelectionArea",value:function(){var e=this._areaRect,t=e.x,n=e.y,r=e.width,i=e.height,o=this._area.style;o.left="".concat(t,"px"),o.top="".concat(n,"px"),o.width="".concat(r,"px"),o.height="".concat(i,"px")}},{key:"_onTapStop",value:function(e,t){var n,r=this._options,i=r.document,o=r.features,l=this._singleClick;I(i,["mousemove","touchmove"],this._delayedTapMove),I(i,["touchmove","mousemove"],this._onTapMove),I(i,["mouseup","touchcancel","touchend"],this._onTapStop),I(i,"scroll",this._onScroll),this._keepSelection(),e&&l&&o.singleTap.allow?this._onSingleTap(e):!l&&!t&&(this._updateElementSelection(),this._emitEvent("stop",e)),this._scrollSpeed.x=0,this._scrollSpeed.y=0,I(this._targetElement,"wheel",this._manualScroll,{passive:!0}),this._clippingElement.remove(),null==(n=this._frame)||n.cancel(),C(this._area,"display","none")}},{key:"_updateElementSelection",value:function(){for(var e=this._selectables,t=this._options,n=this._selection,r=this._areaRect,i=n.stored,o=n.selected,l=n.touched,s=t.behaviour,c=s.intersect,u=s.overlap,h="invert"===u,f=[],d=[],v=[],p=0;p<e.length;p++){var y=e[p];if(K(r,y.getBoundingClientRect(),c)){if(o.includes(y))i.includes(y)&&!l.includes(y)&&l.push(y);else{if(h&&i.includes(y)){v.push(y);continue}d.push(y)}f.push(y)}}h&&d.push.apply(d,a(i.filter((function(e){return!o.includes(e)}))));for(var m="keep"===u,_=0;_<o.length;_++){var b=o[_];!f.includes(b)&&(!m||!i.includes(b))&&v.push(b)}n.selected=f,n.changed={added:d,removed:v},this._latestElement=void 0}},{key:"_emitEvent",value:function(e,t){return this.emit(e,{event:t,store:this._selection,selection:this})}},{key:"_keepSelection",value:function(){var e=this._options,t=this._selection,n=t.selected,r=t.changed,i=t.touched,o=t.stored,l=n.filter((function(e){return!o.includes(e)}));switch(e.behaviour.overlap){case"drop":t.stored=[].concat(a(l),a(o.filter((function(e){return!i.includes(e)}))));break;case"invert":t.stored=[].concat(a(l),a(o.filter((function(e){return!r.removed.includes(e)}))));break;case"keep":t.stored=[].concat(a(o),a(n.filter((function(e){return!o.includes(e)}))))}}},{key:"trigger",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._onTapStart(e,t)}},{key:"resolveSelectables",value:function(){this._selectables=N(this._options.selectables,this._options.document)}},{key:"clearSelection",value:function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this._selection,i=r.selected,o=r.stored,l=r.changed;l.added=[],(e=l.removed).push.apply(e,a(i).concat(a(t?o:[]))),n||(this._emitEvent("move",null),this._emitEvent("stop",null)),this._selection={stored:t?[]:o,selected:[],touched:[],changed:{added:[],removed:[]}}}},{key:"getSelection",value:function(){return this._selection.stored}},{key:"getSelectionArea",value:function(){return this._area}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._onTapStop(null,!e)}},{key:"destroy",value:function(){this.cancel(),this.disable(),this._clippingElement.remove(),e(l(s.prototype),"unbindAllListeners",this).call(this)}},{key:"select",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this._selection,i=r.changed,o=r.selected,l=r.stored,s=N(e,this._options.document).filter((function(e){return!o.includes(e)&&!l.includes(e)}));return l.push.apply(l,a(s)),o.push.apply(o,a(s)),(t=i.added).push.apply(t,a(s)),i.removed=[],this._latestElement=void 0,n||(this._emitEvent("move",null),this._emitEvent("stop",null)),s}},{key:"deselect",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this._selection,i=r.selected,o=r.stored,l=r.changed,s=N(e,this._options.document).filter((function(e){return i.includes(e)||o.includes(e)}));s.length&&(this._selection.stored=o.filter((function(e){return!s.includes(e)})),this._selection.selected=i.filter((function(e){return!s.includes(e)})),this._selection.changed.added=[],(t=this._selection.changed.removed).push.apply(t,a(s.filter((function(e){return!l.removed.includes(e)})))),this._latestElement=void 0,n||(this._emitEvent("move",null),this._emitEvent("stop",null)))}}]),s}(L);M(Y,"version","3.5.0");t("I",i(s,{baseStyle:{_before:{content:"",pos:"absolute",top:-10,right:-2,bottom:-10,left:-10}}}))}}}))}();
