System.register(["./index-legacy.1ef69201.js","./icon-legacy.26c14c41.js","./video_box-legacy.61272e6a.js","./hls-legacy.c8ce8628.js","./index-legacy.6a28e669.js","./useTitle-legacy.2fda451e.js","./Layout-legacy.8413b40a.js","./index-legacy.cc9b7e49.js","./FolderTree-legacy.f586ca7b.js","./index-legacy.347b3386.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(e){"use strict";var t,s,i,l,a,n,o,r,c,u,d,p,y,h,m,f,g,w,b,v,_,k,x,j,P,S,z,F,L,I,W,C,T,q;return{setters:[e=>{t=e.e,s=e.a7,i=e.dm,l=e.a3,a=e.aI,n=e.dn,o=e.cs,r=e.aK,c=e.ck,u=e.dp,d=e.aW,p=e.b9,y=e._,h=e.o,m=e.ba,f=e.n,g=e.j,w=e.r,b=e.c,v=e.a9,_=e.S,k=e.ay,x=e.az,j=e.g,P=e.dq},e=>{S=e.O,z=e.A},e=>{F=e.A,L=e.a,I=e.V},e=>{W=e.H,C=e.a,T=e.b},e=>{q=e.m},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){var O=x("<span>");e("default",(()=>{const{pathname:e,searchParams:x}=t(),{proxyLink:A}=s(),N=i();let V=l.objs.filter((e=>e.type===S.VIDEO));0===V.length&&(V=[l.obj]);let D,E={id:e(),container:"#video-player",title:l.obj.name,volume:.5,autoplay:a("video_autoplay"),autoSize:!1,autoMini:!0,controls:[],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!1,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[F],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const s=new W;s.loadSource(t),s.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(n().toLowerCase())?n().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const H=l.related.filter((e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1})),M=l.related.find((e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1}));if(0!=H.length){let Y=!1;const Z=H[0];"ass"===o(Z.name).toLowerCase()?(Y=!0,E.plugins?.push(C({subUrl:A(Z,!0)}))):E.subtitle={url:A(Z,!0),type:o(Z.name)};const ee=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(e){e.tooltip=e.switch?"Hide":"Show",te(!e.switch);const t=E.settings?.find((e=>"setting_subtitle"===e.id));return t&&(t.tooltip=e.tooltip),!e.switch}}];function te(e){"ass"==(Y?"ass":"webvtt")?(D.subtitle.show=!1,D.emit("artplayer-plugin-ass:visible",e)):(D.subtitle.show=e,D.emit("artplayer-plugin-ass:visible",!1))}H.forEach(((e,t)=>{var s;ee.push({default:0===t,html:(s=O(),s.style.setProperty("max-width","200px"),s.style.setProperty("overflow","hidden"),s.style.setProperty("text-overflow","ellipsis"),s.style.setProperty("word-break","break-all"),s.style.setProperty("white-space","normal"),s.style.setProperty("display","-webkit-box"),s.style.setProperty("-webkit-line-clamp","2"),s.style.setProperty("-webkit-box-orient","vertical"),s.style.setProperty("font-size","12px"),r(s,(()=>e.name)),c((()=>u(s,"title",e.name))),s),name:e.name,url:A(e,!0)})})),E.settings?.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:z({size:24}),selector:ee,onSelect:function(e){"ass"===o(e.name).toLowerCase()?(Y=!0,this.emit("artplayer-plugin-ass:switch",e.url),te(!0)):(Y=!1,this.subtitle.switch(e.url,{name:e.name}),this.once("subtitleLoad",te.bind(this,!0)));const t=ee.find((e=>"setting_subtitle_display"===e.id));return t&&!t.switch&&t.$html?.click?.(),t?.tooltip}})}M&&E.plugins?.push(T({danmuku:A(M,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"}));const[R,U]=d((()=>p.post("/fs/other",{path:e(),password:y(),method:"video_preview"})));let $,B;async function K(){const e=await U();m(e,(async e=>{const t=e.video_preview_play_info.live_transcoding_task_list.filter((e=>e.url));if(0===t.length)return void f.error("No transcoding video found");const s=t.map(((e,s)=>({html:e.template_id,url:e.url,default:s===t.length-1})));E.quality=s,D.quality=s,B=D.currentTime;let i=D.playing;await D.switchUrl(s[s.length-1].url),i||D.pause(),setTimeout((()=>{D.seek=B}),1e3)}))}h((async()=>{const e=await U();X(200!==e.code),m(e,(e=>{const t=e.video_preview_play_info.live_transcoding_task_list.filter((e=>e.url));if(0===t.length)return void f.error("No transcoding video found");let s;switch(E.url=t[t.length-1].url,E.quality=t.map(((e,s)=>({html:e.template_id,url:e.url,default:s===t.length-1}))),D=new L(E),x.auto_fullscreen){case"true":s=!0;case"false":s=!1;default:s=!1}D.on("ready",(()=>{D.fullscreen=s})),D.on("video:ended",(()=>{G()&&(()=>{const e=V.findIndex((e=>e.name===l.obj.name));e<V.length-1&&N(j(P(location.pathname),V[e+1].name)+"?auto_fullscreen="+D.fullscreen)})()})),$=window.setInterval(K,84e4)}))})),g((()=>{D?.destroy(),window.clearInterval($)}));const[G,J]=w(),[Q,X]=w(!1);return b(I,{onAutoNextChange:J,get children(){return[b(v,{w:"$full",h:"60vh",id:"video-player"}),b(_,{get when(){return Q()},get children(){return b(k,{w:"100%",h:"60vh",bgColor:"black",get children(){return b(q,{size:"4rem"})}})}})]}})}))}}}));