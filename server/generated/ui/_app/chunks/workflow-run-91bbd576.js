import{d as a,r as i,w as t}from"./index-f99f80f5.js";import{p as n}from"./stores-5114c64c.js";import{w as p}from"./with-loading-22689bcc.js";import{f as w}from"./workflow-service-45e7158c.js";import{g as d}from"./pollers-service-2c1e0e58.js";import{m as k}from"./route-for-0fcfcb54.js";const g=t(0),h=a([n],([r])=>r.params.namespace),b=a([n],([r])=>r.params.workflow),R=a([n],([r])=>r.params.run),I=a([h,b,R,g],([r,e,s,o])=>({namespace:r,workflowId:k(e!=null?e:""),runId:s,refresh:o})),W={workflow:null,workers:null},v=r=>I.subscribe(({namespace:e,workflowId:s,runId:o,refresh:q})=>{e&&s&&o?p(u,m,async()=>{const c=await w({namespace:e,workflowId:s,runId:o}),{taskQueue:f}=c,l=await d({queue:f,namespace:e});r({workflow:c,workers:l})}):(u.set(!0),m.set(!1))}),m=t(!0),u=t(!0),S=i(W,v);export{u as l,g as r,S as w};