import{r as f}from"./index.b1f5b21f.js";import{r as a,a as m}from"./route-for-api.af07b9a4.js";import{f as p}from"./namespaces-service.6f8ef312.js";import{f as d}from"./settings-service.6ba5de49.js";import{s as h,g as k}from"./auth-user.4a1a7dbb.js";import{B as l}from"./prod-browser.becde89a.js";import{a as g}from"./atob.568d13ab.js";import{p as y}from"./parse-with-big-int.441ec82f.js";import{f as w}from"./route-for.46f8ec0b.js";/* empty css            */const A=async(n,t=fetch)=>{if(n.runtimeEnvironment.isCloud)return;const o=a("cluster");return await m(o,{request:t}).then(r=>r)},T=async(n,t=fetch)=>{if(n.runtimeEnvironment.isCloud)return;const o=a("systemInfo");return await m(o,{request:t}).then(r=>r)},c="user",_=(n=l)=>{if(!n)return{};const t=document.cookie.split(";");let o=0,r=t.find(s=>s.includes(c+o)),i="";for(;r;){const[s,e]=r.split("=");i+=e,o++,r=t.find(u=>u.includes(c+o))}if(i)try{const s=g(i),e=y(s);return{accessToken:e==null?void 0:e.AccessToken,idToken:e==null?void 0:e.IDToken,name:e==null?void 0:e.Name,picture:e==null?void 0:e.Picture,email:e==null?void 0:e.Email}}catch(s){console.error(s)}return{}},I=(n=l)=>{if(!n)return;const t=document.cookie.split(";");let o=0,r=t.find(i=>i.includes(c+o));for(;r;){const[i]=r.split("=");document.cookie=`${i}=; max-age=-1; path=/`,o++,r=t.find(s=>s.includes(c+o))}},S=(n,t)=>!n.auth.enabled||Boolean(t==null?void 0:t.accessToken),b=async function({fetch:n}){const t=await d(n),o=_();o!=null&&o.accessToken&&(h(o),I());const r=k();if(!S(t,r))throw f(302,w());p(t,n);const i=await A(t,n),s=await T(t,n);return{user:r,settings:t,cluster:i,systemInfo:s}},j=Object.freeze(Object.defineProperty({__proto__:null,load:b},Symbol.toStringTag,{value:"Module"}));export{j as _,b as l};