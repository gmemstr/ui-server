import{S as N,b as j,a as z,C as h,D as g,E as k,j as m,g as b,F as D,N as B,O as q,m as F,c as v,p as G,q as H,d as A,k as L,u as J,f as I,L as O,P,w as R,x as V,z as K,h as Q,y as T,G as U,H as W,I as X,J as Y}from"./index.f15f06ee.js";import{B as Z}from"./button.453fbc0a.js";import{I as y}from"./icon.6a988f87.js";import{M as p,a as w,b as $}from"./menu.78c81a02.js";function C(s){let e,a;return e=new y({props:{name:s[2]}}),{c(){h(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,t){k(e,n,t),a=!0},p(n,t){const i={};t&4&&(i.name=n[2]),e.$set(i)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),a=!1},d(n){D(e,n)}}}function x(s){let e,a,n,t=s[2]&&C(s);return{c(){t&&t.c(),e=v(),a=R(s[0])},l(i){t&&t.l(i),e=A(i),a=V(i,s[0])},m(i,o){t&&t.m(i,o),I(i,e,o),I(i,a,o),n=!0},p(i,o){i[2]?t?(t.p(i,o),o&4&&m(t,1)):(t=C(i),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(K(),b(t,1,1,()=>{t=null}),Q()),(!n||o&1)&&T(a,i[0])},i(i){n||(m(t),n=!0)},o(i){b(t),n=!1},d(i){t&&t.d(i),i&&L(e),i&&L(a)}}}function ee(s){let e;const a=s[11].default,n=U(a,s,s[13],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,i){n&&n.m(t,i),e=!0},p(t,i){n&&n.p&&(!e||i&8192)&&W(n,a,t,t[13],e?Y(a,t[13],i,null):X(t[13]),null)},i(t){e||(m(n,t),e=!0)},o(t){b(n,t),e=!1},d(t){n&&n.d(t)}}}function te(s){let e,a,n,t,i,o,_;return a=new Z({props:{href:s[8],variant:s[4],thin:s[5],unroundRight:!0,disabled:s[6]||s[9],id:s[3]+"-primary-button",$$slots:{default:[x]},$$scope:{ctx:s}}}),a.$on("click",s[12]),t=new w({props:{id:s[3]+"-menu-button",label:s[1],controls:s[3]+"-menu",variant:"primary",unroundLeft:!0,disabled:s[6],hasIndicator:!0}}),o=new $({props:{id:s[3]+"-menu",position:s[7],class:"w-full",$$slots:{default:[ee]},$$scope:{ctx:s}}}),{c(){e=F("div"),h(a.$$.fragment),n=v(),h(t.$$.fragment),i=v(),h(o.$$.fragment),this.h()},l(l){e=G(l,"DIV",{class:!0});var f=H(e);g(a.$$.fragment,f),n=A(f),g(t.$$.fragment,f),f.forEach(L),i=A(l),g(o.$$.fragment,l),this.h()},h(){J(e,"class","split-button svelte-1pybp5c")},m(l,f){I(l,e,f),k(a,e,null),O(e,n),k(t,e,null),I(l,i,f),k(o,l,f),_=!0},p(l,f){const r={};f&256&&(r.href=l[8]),f&16&&(r.variant=l[4]),f&32&&(r.thin=l[5]),f&576&&(r.disabled=l[6]||l[9]),f&8&&(r.id=l[3]+"-primary-button"),f&8197&&(r.$$scope={dirty:f,ctx:l}),a.$set(r);const c={};f&8&&(c.id=l[3]+"-menu-button"),f&2&&(c.label=l[1]),f&8&&(c.controls=l[3]+"-menu"),f&64&&(c.disabled=l[6]),t.$set(c);const d={};f&8&&(d.id=l[3]+"-menu"),f&128&&(d.position=l[7]),f&8192&&(d.$$scope={dirty:f,ctx:l}),o.$set(d)},i(l){_||(m(a.$$.fragment,l),m(t.$$.fragment,l),m(o.$$.fragment,l),_=!0)},o(l){b(a.$$.fragment,l),b(t.$$.fragment,l),b(o.$$.fragment,l),_=!1},d(l){l&&L(e),D(a),D(t),l&&L(i),D(o,l)}}}function ne(s){let e,a;return e=new p({props:{class:s[10].class,$$slots:{default:[te]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,t){k(e,n,t),a=!0},p(n,[t]){const i={};t&1024&&(i.class=n[10].class),t&9215&&(i.$$scope={dirty:t,ctx:n}),e.$set(i)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),a=!1},d(n){D(e,n)}}}function ae(s,e,a){let{$$slots:n={},$$scope:t}=e,{label:i}=e,{menuLabel:o}=e,{icon:_=void 0}=e,{id:l}=e,{variant:f="primary"}=e,{thin:r=!1}=e,{disabled:c=!1}=e,{position:d="left"}=e,{href:M=""}=e,{primaryActionDisabled:S=!1}=e;function E(u){P.call(this,s,u)}return s.$$set=u=>{a(10,e=B(B({},e),q(u))),"label"in u&&a(0,i=u.label),"menuLabel"in u&&a(1,o=u.menuLabel),"icon"in u&&a(2,_=u.icon),"id"in u&&a(3,l=u.id),"variant"in u&&a(4,f=u.variant),"thin"in u&&a(5,r=u.thin),"disabled"in u&&a(6,c=u.disabled),"position"in u&&a(7,d=u.position),"href"in u&&a(8,M=u.href),"primaryActionDisabled"in u&&a(9,S=u.primaryActionDisabled),"$$scope"in u&&a(13,t=u.$$scope)},e=q(e),[i,o,_,l,f,r,c,d,M,S,e,n,E,t]}class ue extends N{constructor(e){super(),j(this,e,ae,ne,z,{label:0,menuLabel:1,icon:2,id:3,variant:4,thin:5,disabled:6,position:7,href:8,primaryActionDisabled:9})}}export{ue as S};