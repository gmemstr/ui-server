import{S as a,i as n,s as p,I as i,v as c}from"../../chunks/vendor-9a5c5afd.js";import{g as m}from"../../chunks/navigation-093db9e2.js";import{p as u}from"../../chunks/stores-3140227a.js";import{n as l}from"../../chunks/notifications-db2a548d.js";import{d as f}from"../../chunks/data-converter-config-d3c9f3cb.js";import"../../chunks/singletons-a6a7384f.js";const x=!1;function d(s,o,r){let e;return i(s,u,t=>r(0,e=t)),c(()=>{let{port:t}=e.params;f.set(t),m("/",{replaceState:!0}),l.add("success","Successfully set decoder")}),[]}class C extends a{constructor(o){super();n(this,o,d,null,p,{})}}export{C as default,x as ssr};