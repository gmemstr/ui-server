import{S as f,b as u,a as l,C as p,D as d,E as g,n as _,j as h,g as $,F as w,K as F,o as N}from"../chunks/index.efded970.js";import{g as s}from"../chunks/navigation.ad8df258.js";import{L as b}from"../chunks/loading.605ec698.js";import{e as x}from"../chunks/workflow-service.6af3df25.js";import{l as y}from"../chunks/namespaces.2d966c62.js";import{r as S,l as m}from"../chunks/route-for.012affdb.js";function k(r){let e,a;return e=new b({}),{c(){p(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,n){g(e,t,n),a=!0},p:_,i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}function z(r,e,a){let t;F(r,y,o=>a(1,t=o));let{data:n}=e,{defaultNamespace:i}=n;const c=t&&t!=="default"?t:i;return N(async()=>{try{const{authorized:o}=await x(c);o?s(S({namespace:c})):s(m())}catch{s(m())}}),r.$$set=o=>{"data"in o&&a(0,n=o.data)},[n]}class A extends f{constructor(e){super(),u(this,e,z,k,l,{data:0})}}export{A as default};