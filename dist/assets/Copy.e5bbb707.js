import{d as a,c as o}from"./index.fd01cb2f.js";import{g as s}from"./useTitle.4ac8e211.js";import{b as r,T as p}from"./helper.08b75045.js";import"./Paginator.881c3028.js";import"./index.d6f79f8b.js";const u=()=>{const e=a();return s("manage.sidemenu.copy"),o(p,{type:"copy",canRetry:!0,get nameAnalyzer(){return{regex:/^copy \[(.+)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,title:t=>t[3],attrs:{[e("tasks.attr.copy.src")]:t=>r(t[1],t[2]),[e("tasks.attr.copy.dst")]:t=>r(t[4],t[5])}}}})};export{u as default};
