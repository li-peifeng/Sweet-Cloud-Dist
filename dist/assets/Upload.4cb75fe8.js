import{d as e,c as o}from"./index.51a697c4.js";import{g as r}from"./useTitle.1ea3b0df.js";import{b as p,T as s}from"./helper.f080ec06.js";import"./Paginator.ed7ca0d2.js";import"./index.6feae5f8.js";const i=()=>{const a=e();return r("manage.sidemenu.upload"),o(s,{type:"upload",get nameAnalyzer(){return{regex:/^upload (.+) to \[(.+)]\((.+)\)$/,title:t=>t[1],attrs:{[a("tasks.attr.upload.path")]:t=>p(t[2],t[3])}}}})};export{i as default};