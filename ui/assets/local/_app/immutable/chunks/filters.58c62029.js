import{j as t,w as s}from"./singletons.e689afb6.js";import{p as a}from"./stores.936680e1.js";import{p as i}from"./persist-store.1d82f959.js";import{ac as o}from"./index.4e2fcbc7.js";const n=t([a],([e])=>e.url.searchParams.get("query")),u=t([a],([e])=>e.url.searchParams.get("category")),c=t([n,u],([e,r])=>({query:e,category:r})),p=e=>c.subscribe(({query:r})=>{!r&&o(l).length&&e([])}),d=i("searchInputView",!1,!0),l=s([],p),g=e=>c.subscribe(({category:r})=>{!r&&o(m)&&e(null)}),m=s(void 0,g);export{m as e,d as s,l as w};