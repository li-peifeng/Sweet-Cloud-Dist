import{d as e,c as o}from"./index.5ea0d3e3.js";import{g as r}from"./useTitle.b82c036e.js";import{b as p,T as s}from"./helper.450db184.js";import"./Paginator.e3c1fa38.js";import"./index.6ba37532.js";const i=()=>{const a=e();return r("manage.sidemenu.upload"),o(s,{type:"upload",get nameAnalyzer(){return{regex:/^upload (.+) to \[(.+)]\((.+)\)$/,title:t=>t[1],attrs:{[a("tasks.attr.upload.path")]:t=>p(t[2],t[3])}}}})};export{i as default};