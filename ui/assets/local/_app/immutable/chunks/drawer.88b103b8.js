import{S as Z,i as j,s as G,K as z,k as D,q as W,a as L,l as C,m as E,r as X,h as v,c as P,n as b,b as y,F as B,u as Y,g,v as Q,d as p,f as R,L as V,M as H,N as S,af as x,ag as $,e as A,Z as N,a1 as T,ah as ee,a2 as w,y as te,z as se,D as I,A as le,T as F,H as ae,U as ie,a8 as J,B as ne,J as oe}from"./index.df672b57.js";import{f as K}from"./index.c28627e1.js";import{c as fe,f as re}from"./menu.92e83157.js";import{I as ue}from"./icon-button.3b074f8f.js";const ce=t=>({}),M=t=>({});function O(t){let e,l;const a=t[4].subtitle,s=z(a,t,t[3],M);return{c(){e=D("h3"),s&&s.c(),this.h()},l(n){e=C(n,"H3",{class:!0});var r=E(e);s&&s.l(r),r.forEach(v),this.h()},h(){b(e,"class","font-primary text-xs font-normal")},m(n,r){y(n,e,r),s&&s.m(e,null),l=!0},p(n,r){s&&s.p&&(!l||r&8)&&V(s,a,n,n[3],l?S(a,n[3],r,ce):H(n[3]),M)},i(n){l||(g(s,n),l=!0)},o(n){p(s,n),l=!1},d(n){n&&v(e),s&&s.d(n)}}}function de(t){let e,l,a,s,n,r,d,i=t[2].subtitle&&O(t);const _=t[4].default,c=z(_,t,t[3],null);return{c(){e=D("div"),l=D("h1"),a=W(t[0]),s=L(),i&&i.c(),n=L(),r=D("div"),c&&c.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var u=E(e);l=C(u,"H1",{class:!0});var o=E(l);a=X(o,t[0]),o.forEach(v),s=P(u),i&&i.l(u),u.forEach(v),n=P(f),r=C(f,"DIV",{class:!0});var m=E(r);c&&c.l(m),m.forEach(v),this.h()},h(){b(l,"class","svelte-1028h9z"),b(e,"class","title-wrapper "+t[1]+" svelte-1028h9z"),b(r,"class","content "+t[1]+" svelte-1028h9z")},m(f,u){y(f,e,u),B(e,l),B(l,a),B(e,s),i&&i.m(e,null),y(f,n,u),y(f,r,u),c&&c.m(r,null),d=!0},p(f,[u]){(!d||u&1)&&Y(a,f[0]),f[2].subtitle?i?(i.p(f,u),u&4&&g(i,1)):(i=O(f),i.c(),g(i,1),i.m(e,null)):i&&(Q(),p(i,1,1,()=>{i=null}),R()),c&&c.p&&(!d||u&8)&&V(c,_,f,f[3],d?S(_,f[3],u,null):H(f[3]),null)},i(f){d||(g(i),g(c,f),d=!0)},o(f){p(i),p(c,f),d=!1},d(f){f&&v(e),i&&i.d(),f&&v(n),f&&v(r),c&&c.d(f)}}}function _e(t,e,l){let{$$slots:a={},$$scope:s}=e;const n=x(a);let{title:r=""}=e,d=$("drawer-pos");return t.$$set=i=>{"title"in i&&l(0,r=i.title),"$$scope"in i&&l(3,s=i.$$scope)},[r,d,n,s,a]}class pe extends Z{constructor(e){super(),j(this,e,_e,de,G,{title:0})}}function U(t){let e,l,a,s,n,r,d,i,_,c,f;s=new ue({props:{"data-testid":"drawer-close-button",label:t[5],class:"stuff",icon:"close","aria-expanded":t[0],"aria-controls":"navigation-drawer"}}),s.$on("click",function(){w(t[3])&&t[3].apply(this,arguments)});const u=t[10].default,o=z(u,t,t[9],null);return{c(){e=D("aside"),l=D("div"),a=D("div"),te(s.$$.fragment),r=L(),o&&o.c(),this.h()},l(m){e=C(m,"ASIDE",{class:!0,id:!0,role:!0});var h=E(e);l=C(h,"DIV",{class:!0});var k=E(l);a=C(k,"DIV",{class:!0});var q=E(a);se(s.$$.fragment,q),q.forEach(v),r=P(k),o&&o.l(k),k.forEach(v),h.forEach(v),this.h()},h(){b(a,"class",n="close-button-wrapper "+t[1]+" svelte-s88nv2"),b(l,"class","relative h-full"),I(l,"pt-10",t[6]),b(e,"class",d="drawer "+t[1]+" "+t[8].class+" svelte-s88nv2"),b(e,"id",t[4]),b(e,"role","region"),I(e,"dark",t[2]),I(e,"max-w-fit",t[1]==="right")},m(m,h){y(m,e,h),B(e,l),B(l,a),le(s,a,null),B(l,r),o&&o.m(l,null),_=!0,c||(f=[F(fe.call(null,e)),ae(e,"click-outside",function(){w(t[3])&&t[3].apply(this,arguments)}),F(re.call(null,e,!0))],c=!0)},p(m,h){t=m;const k={};h&32&&(k.label=t[5]),h&1&&(k["aria-expanded"]=t[0]),s.$set(k),(!_||h&2&&n!==(n="close-button-wrapper "+t[1]+" svelte-s88nv2"))&&b(a,"class",n),o&&o.p&&(!_||h&512)&&V(o,u,t,t[9],_?S(u,t[9],h,null):H(t[9]),null),(!_||h&64)&&I(l,"pt-10",t[6]),(!_||h&258&&d!==(d="drawer "+t[1]+" "+t[8].class+" svelte-s88nv2"))&&b(e,"class",d),(!_||h&16)&&b(e,"id",t[4]),(!_||h&262)&&I(e,"dark",t[2]),(!_||h&258)&&I(e,"max-w-fit",t[1]==="right")},i(m){_||(g(s.$$.fragment,m),g(o,m),ie(()=>{i||(i=J(e,K,t[7],!0)),i.run(1)}),_=!0)},o(m){p(s.$$.fragment,m),p(o,m),i||(i=J(e,K,t[7],!1)),i.run(0),_=!1},d(m){m&&v(e),ne(s),o&&o.d(m),m&&i&&i.end(),c=!1,oe(f)}}}function me(t){let e,l,a=t[0]&&U(t);return{c(){a&&a.c(),e=A()},l(s){a&&a.l(s),e=A()},m(s,n){a&&a.m(s,n),y(s,e,n),l=!0},p(s,[n]){s[0]?a?(a.p(s,n),n&1&&g(a,1)):(a=U(s),a.c(),g(a,1),a.m(e.parentNode,e)):a&&(Q(),p(a,1,1,()=>{a=null}),R())},i(s){l||(g(a),l=!0)},o(s){p(a),l=!1},d(s){a&&a.d(s),s&&v(e)}}}function he(t,e,l){let a,{$$slots:s={},$$scope:n}=e,{open:r=!1}=e,{position:d="bottom"}=e,{dark:i=!0}=e,{onClick:_}=e,{id:c="navigation-drawer"}=e,{closeButtonLabel:f}=e,{closePadding:u=!0}=e;return t.$$set=o=>{l(8,e=N(N({},e),T(o))),"open"in o&&l(0,r=o.open),"position"in o&&l(1,d=o.position),"dark"in o&&l(2,i=o.dark),"onClick"in o&&l(3,_=o.onClick),"id"in o&&l(4,c=o.id),"closeButtonLabel"in o&&l(5,f=o.closeButtonLabel),"closePadding"in o&&l(6,u=o.closePadding),"$$scope"in o&&l(9,n=o.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&l(7,a={duration:500,...d==="bottom"?{y:200}:{x:200}}),t.$$.dirty&2&&ee("drawer-pos",d)},e=T(e),[r,d,i,_,c,f,u,a,e,n,s]}class De extends Z{constructor(e){super(),j(this,e,he,me,G,{open:0,position:1,dark:2,onClick:3,id:4,closeButtonLabel:5,closePadding:6})}}export{De as D,pe as a};