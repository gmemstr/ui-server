import{S as G,i as w,s as S,e as v,c as d,a as m,d as u,b as f,g as p,L as h,a1 as L,k as E,w as T,m as I,x as U,y as q,q as A,o as B,B as C,I as F,t as M,h as N,U as g,j,aM as D}from"../../../../../../../../chunks/vendor-9a5c5afd.js";import{b as H}from"../../../../../../../../chunks/route-for-f402e023.js";import{p as O}from"../../../../../../../../chunks/stores-3140227a.js";import{E as R}from"../../../../../../../../chunks/_event-details-e32500b5.js";import"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../../../../chunks/code-block-3e161d8f.js";const V=(o,t)=>{const n=o.id;for(const e of t){if(n===e.id)return e;for(const i of e.eventIds)if(n===i)return e}};function b(o,t,n){const e=o.slice();return e[3]=t[n][0],e[4]=t[n][1],e}function k(o){let t,n,e=[],i=new Map,r=[...o[1].events];const l=s=>s[3];for(let s=0;s<r.length;s+=1){let a=b(o,r,s),c=l(a);i.set(c,e[s]=y(c,a))}return{c(){t=v("nav"),n=v("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=d(s,"NAV",{class:!0});var a=m(t);n=d(a,"UL",{class:!0});var c=m(n);for(let _=0;_<e.length;_+=1)e[_].l(c);c.forEach(u),a.forEach(u),this.h()},h(){f(n,"class","flex gap-4 w-full items-start"),f(t,"class","flex flex-col mb-4")},m(s,a){p(s,t,a),h(t,n);for(let c=0;c<e.length;c+=1)e[c].m(n,null)},p(s,a){a&7&&(r=[...s[1].events],e=L(e,a,l,1,s,r,i,n,D,y,null,b))},d(s){s&&u(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function y(o,t){let n,e,i=t[4].eventType+"",r,l,s;return{key:o,first:null,c(){n=v("li"),e=v("a"),r=M(i),s=E(),this.h()},l(a){n=d(a,"LI",{});var c=m(n);e=d(c,"A",{"sveltekit:noscroll":!0,href:!0,class:!0});var _=m(e);r=N(_,i),_.forEach(u),s=I(c),c.forEach(u),this.h()},h(){f(e,"sveltekit:noscroll",""),f(e,"href",l=t[3]+t[2].url.search),f(e,"class","border-b-2 border-blue-600 svelte-kcbmue"),g(e,"active",t[3]===t[0].id),this.first=n},m(a,c){p(a,n,c),h(n,e),h(e,r),h(n,s)},p(a,c){t=a,c&2&&i!==(i=t[4].eventType+"")&&j(r,i),c&6&&l!==(l=t[3]+t[2].url.search)&&f(e,"href",l),c&3&&g(e,"active",t[3]===t[0].id)},d(a){a&&u(n)}}}function z(o){let t,n,e,i,r=o[1]&&k(o);return e=new R({props:{event:o[0]}}),{c(){t=v("section"),r&&r.c(),n=E(),T(e.$$.fragment),this.h()},l(l){t=d(l,"SECTION",{class:!0});var s=m(t);r&&r.l(s),n=I(s),U(e.$$.fragment,s),s.forEach(u),this.h()},h(){f(t,"class","overflow-y-scroll max-h-full")},m(l,s){p(l,t,s),r&&r.m(t,null),h(t,n),q(e,t,null),i=!0},p(l,[s]){l[1]?r?r.p(l,s):(r=k(l),r.c(),r.m(t,n)):r&&(r.d(1),r=null);const a={};s&1&&(a.event=l[0]),e.$set(a)},i(l){i||(A(e.$$.fragment,l),i=!0)},o(l){B(e.$$.fragment,l),i=!1},d(l){l&&u(t),r&&r.d(),C(e)}}}const J=(o,t,{matchingEvents:n},{view:e})=>!n.includes(o)||e==="compact"&&!t,$=async function({params:o,stuff:t,url:n}){const{eventId:e}=o,{events:i,eventGroups:r}=t,l=i.find(a=>a.id===e);if(!l)return{status:404};const s=V(l,r);return J(l,s,t,o)?(n.pathname=H(o),{status:302,redirect:String(n)}):{props:{event:l,eventGroup:s}}};function K(o,t,n){let e;F(o,O,l=>n(2,e=l));let{event:i}=t,{eventGroup:r}=t;return o.$$set=l=>{"event"in l&&n(0,i=l.event),"eventGroup"in l&&n(1,r=l.eventGroup)},[i,r,e]}class x extends G{constructor(t){super();w(this,t,K,z,S,{event:0,eventGroup:1})}}export{x as default,$ as load};