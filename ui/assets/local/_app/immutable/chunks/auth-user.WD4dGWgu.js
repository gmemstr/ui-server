import{z as n}from"./scheduler.pu1Jb5n4.js";import{p as i}from"./persist-store.G-M4yoXc.js";const s=i("AuthUser",{}),m=()=>n(s),p=t=>{const{accessToken:e,idToken:r,name:o,email:a,picture:c}=t;if(!e)throw new Error("No access token");s.set({accessToken:e,idToken:r,name:o,email:a,picture:c})},U=()=>{s.set({})};export{s as a,U as c,m as g,p as s};