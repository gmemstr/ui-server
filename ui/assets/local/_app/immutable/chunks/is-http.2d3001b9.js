import{w as a}from"./index.9d257dd4.js";import{p as s}from"./persist-store.9745fc1a.js";const i=s("endpoint",null,!0),u=s("passAccessToken",!1,!0),l=s("includeCredentials",!1,!0),e=a("notRequested");function p(){e.set("error")}function d(){e.set("success")}const n=t=>t.substring(0,8)==="https://",r=t=>t.substring(0,7)==="http://",f=t=>r(t)||n(t);export{f as a,d as b,i as c,l as i,e as l,u as p,p as s,n as v};