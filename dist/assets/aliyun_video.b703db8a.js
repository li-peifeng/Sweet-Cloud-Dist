import{b as H,c9 as q,cT as R,a0 as c,ay as D,cU as C,ca as m,aA as E,c3 as U,cV as $,aO as J,b1 as G,_ as K,o as Q,b2 as z,n as A,d as X,k as M,e as p,a4 as Y,S as Z,ar as ee,ac as te,p as j,cW as L}from"./index.4232af5b.js";import{O as se,A as re}from"./icon.f31d9d7a.js";import{A as oe,H as le,a as ne,b as ae,c as ie,V as ue}from"./video_box.eb9e8de3.js";import{s as ce}from"./index.82c1d5fb.js";import"./index.98cf95b7.js";import"./Layout.3f393a90.js";import"./index.be4f74f5.js";import"./FolderTree.a2be7eb2.js";import"./index.eb385221.js";import"./_commonjs-dynamic-modules.30ae7933.js";const pe=te("<span></span>"),_e=()=>{var _,P,S;const{pathname:w,searchParams:W}=H(),{proxyLink:h}=q(),y=R();let u=c.objs.filter(e=>e.type===se.VIDEO);u.length===0&&(u=[c.obj]);const g=()=>{const e=u.findIndex(o=>o.name===c.obj.name);e<u.length-1&&y(j(L(location.pathname),u[e+1].name)+"?auto_fullscreen="+r.fullscreen)},F=()=>{const e=u.findIndex(o=>o.name===c.obj.name);e>0&&y(j(L(location.pathname),u[e-1].name)+"?auto_fullscreen="+r.fullscreen)};let r,i={id:w(),container:"#video-player",title:c.obj.name,volume:.5,autoplay:D("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){F()}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){g()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[oe],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,o){const n=new le;n.loadSource(o),n.attachMedia(e),e.src||(e.src=o)}},lang:["en","zh-cn","zh-tw"].includes(C().toLowerCase())?C().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const f=c.related.filter(e=>{for(const o of[".srt",".ass",".vtt"])if(e.name.endsWith(o))return!0;return!1}),b=c.related.find(e=>{for(const o of[".xml"])if(e.name.endsWith(o))return!0;return!1});if(f.length!=0){let a=function(t){switch(e?"ass":"webvtt"){case"ass":r.subtitle.show=!1,r.emit("artplayer-plugin-ass:visible",t);break;case"webvtt":default:r.subtitle.show=t,r.emit("artplayer-plugin-ass:visible",!1);break}},e=!1;const o=f[0];m(o.name).toLowerCase()==="ass"?(e=!0,(_=i.plugins)==null||_.push(ne({subUrl:h(o,!0)}))):i.subtitle={url:h(o,!0),type:m(o.name)};const n=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var s;t.tooltip=t.switch?"Hide":"Show",a(!t.switch);const l=(s=i.settings)==null?void 0:s.find(d=>d.id==="setting_subtitle");return l&&(l.tooltip=t.tooltip),!t.switch}}];f.forEach((t,l)=>{n.push({default:l===0,html:(()=>{const s=pe.cloneNode(!0);return s.style.setProperty("max-width","200px"),s.style.setProperty("overflow","hidden"),s.style.setProperty("text-overflow","ellipsis"),s.style.setProperty("word-break","break-all"),s.style.setProperty("white-space","normal"),s.style.setProperty("display","-webkit-box"),s.style.setProperty("-webkit-line-clamp","2"),s.style.setProperty("-webkit-box-orient","vertical"),s.style.setProperty("font-size","12px"),E(s,()=>t.name),U(()=>$(s,"title",t.name)),s})(),name:t.name,url:h(t,!0)})}),(P=i.settings)==null||P.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:re({size:24}),selector:n,onSelect:function(t){var s,d;m(t.name).toLowerCase()==="ass"?(e=!0,this.emit("artplayer-plugin-ass:switch",t.url),a(!0)):(e=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",a.bind(this,!0)));const l=n.find(B=>B.id==="setting_subtitle_display");return l&&!l.switch&&((d=(s=l.$html)==null?void 0:s.click)==null||d.call(s)),l==null?void 0:l.tooltip}})}b&&((S=i.plugins)==null||S.push(ae({danmuku:h(b,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[he,v]=J(()=>G.post("/fs/other",{path:w(),password:K(),method:"video_preview"}));Q(async()=>{const e=await v();T(e.code!==200),z(e,o=>{const n=o.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(n.length===0){A.error("No transcoding video found");return}i.url=n[n.length-1].url,i.quality=n.map((t,l)=>({html:t.template_id,url:t.url,default:l===n.length-1})),r=new ie(i);let a;switch(W.auto_fullscreen){case"true":a=!0;case"false":a=!1;default:a=!1}r.on("ready",()=>{r.fullscreen=a}),r.on("video:ended",()=>{!N()||g()}),k=window.setInterval(I,1e3*60*14)})});let k,x;async function I(){const e=await v();z(e,async o=>{const n=o.video_preview_play_info.live_transcoding_task_list.filter(l=>l.url);if(n.length===0){A.error("No transcoding video found");return}const a=n.map((l,s)=>({html:l.template_id,url:l.url,default:s===n.length-1}));i.quality=a,r.quality=a,x=r.currentTime;let t=r.playing;await r.switchUrl(a[a.length-1].url),t||r.pause(),setTimeout(()=>{r.seek=x},1e3)})}X(()=>{r==null||r.destroy(),window.clearInterval(k)});const[N,V]=M(),[O,T]=M(!1);return p(ue,{onAutoNextChange:V,get children(){return[p(Y,{w:"$full",h:"60vh",id:"video-player"}),p(Z,{get when(){return O()},get children(){return p(ee,{w:"100%",h:"60vh",bgColor:"black",get children(){return p(ce,{size:"4rem"})}})}})]}})};export{_e as default};
