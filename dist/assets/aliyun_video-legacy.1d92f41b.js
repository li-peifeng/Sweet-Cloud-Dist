System.register(["./index-legacy.479435ca.js","./icon-legacy.0a4c7298.js","./video_box-legacy.6520772f.js","./hls-legacy.cf6282cc.js","./index-legacy.05b1e73f.js","./useTitle-legacy.43c4fcd1.js","./Layout-legacy.c472b061.js","./index-legacy.82ec6914.js","./FolderTree-legacy.45ccd58d.js","./index-legacy.4c2a0b44.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(e,t){"use strict";var s,i,l,n,a,o,r,c,u,d,p,h,y,m,f,g,w,b,v,_,k,x,j,P,S,F,L,z,W,C,I,T,O,q;return{setters:[e=>{s=e.e,i=e.$,l=e.dl,n=e.W,a=e.aB,o=e.dm,r=e.cp,c=e.aD,u=e.cd,d=e.dn,p=e.aP,h=e.b2,y=e._,m=e.a7,f=e.b3,g=e.n,w=e.o,b=e.j,v=e.c,_=e.a1,k=e.S,x=e.ar,j=e.as,P=e.g,S=e.dp},e=>{F=e.O,L=e.A},e=>{z=e.A,W=e.a,C=e.V},e=>{I=e.H,T=e.a,O=e.b},e=>{q=e.m},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){var t=j("<span>");e("default",(()=>{const{pathname:e,searchParams:j}=s(),{proxyLink:A}=i(),D=l();let N=n.objs.filter((e=>e.type===F.VIDEO));0===N.length&&(N=[n.obj]);let V,$={id:e(),container:"#video-player",title:n.obj.name,volume:.5,autoplay:a("video_autoplay"),autoSize:!1,autoMini:!0,controls:[],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!1,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[z],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const s=new I;s.loadSource(t),s.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(o().toLowerCase())?o().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const B=n.related.filter((e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1})),E=n.related.find((e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1}));if(0!=B.length){let e=function(e){"ass"==(s?"ass":"webvtt")?(V.subtitle.show=!1,V.emit("artplayer-plugin-ass:visible",e)):(V.subtitle.show=e,V.emit("artplayer-plugin-ass:visible",!1))},s=!1;const i=B[0];"ass"===r(i.name).toLowerCase()?(s=!0,$.plugins?.push(T({subUrl:A(i,!0)}))):$.subtitle={url:A(i,!0),type:r(i.name)};const l=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){t.tooltip=t.switch?"Hide":"Show",e(!t.switch);const s=$.settings?.find((e=>"setting_subtitle"===e.id));return s&&(s.tooltip=t.tooltip),!t.switch}}];B.forEach(((e,s)=>{var i;l.push({default:0===s,html:(i=t(),i.style.setProperty("max-width","200px"),i.style.setProperty("overflow","hidden"),i.style.setProperty("text-overflow","ellipsis"),i.style.setProperty("word-break","break-all"),i.style.setProperty("white-space","normal"),i.style.setProperty("display","-webkit-box"),i.style.setProperty("-webkit-line-clamp","2"),i.style.setProperty("-webkit-box-orient","vertical"),i.style.setProperty("font-size","12px"),c(i,(()=>e.name)),u((()=>d(i,"title",e.name))),i),name:e.name,url:A(e,!0)})})),$.settings?.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:L({size:24}),selector:l,onSelect:function(t){"ass"===r(t.name).toLowerCase()?(s=!0,this.emit("artplayer-plugin-ass:switch",t.url),e(!0)):(s=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",e.bind(this,!0)));const i=l.find((e=>"setting_subtitle_display"===e.id));return i&&!i.switch&&i.$html?.click?.(),i?.tooltip}})}E&&$.plugins?.push(O({danmuku:A(E,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"}));const[H,M]=p((()=>h.post("/fs/other",{path:e(),password:y(),method:"video_preview"})));let R,U;async function G(){const e=await M();f(e,(async e=>{const t=e.video_preview_play_info.live_transcoding_task_list.filter((e=>e.url));if(0===t.length)return void g.error("No transcoding video found");const s=t.map(((e,s)=>({html:e.template_id,url:e.url,default:s===t.length-1})));$.quality=s,V.quality=s,U=V.currentTime;let i=V.playing;await V.switchUrl(s[s.length-1].url),i||V.pause(),setTimeout((()=>{V.seek=U}),1e3)}))}m((async()=>{const e=await M();X(200!==e.code),f(e,(e=>{const t=e.video_preview_play_info.live_transcoding_task_list.filter((e=>e.url));if(0===t.length)return void g.error("No transcoding video found");let s;switch($.url=t[t.length-1].url,$.quality=t.map(((e,s)=>({html:e.template_id,url:e.url,default:s===t.length-1}))),V=new W($),j.auto_fullscreen){case"true":s=!0;case"false":s=!1;default:s=!1}V.on("ready",(()=>{V.fullscreen=s})),V.on("video:ended",(()=>{J()&&(()=>{const e=N.findIndex((e=>e.name===n.obj.name));e<N.length-1&&D(P(S(location.pathname),N[e+1].name)+"?auto_fullscreen="+V.fullscreen)})()})),R=window.setInterval(G,84e4)}))})),w((()=>{V?.destroy(),window.clearInterval(R)}));const[J,K]=b(),[Q,X]=b(!1);return v(C,{onAutoNextChange:K,get children(){return[v(_,{w:"$full",h:"60vh",id:"video-player"}),v(k,{get when(){return Q()},get children(){return v(x,{w:"100%",h:"60vh",bgColor:"black",get children(){return v(q,{size:"4rem"})}})}})]}})}))}}}));