import{s as M,p as N,z as q,e as j,a as C,b as B,d as F,h as D,g as A,E,D as d,k as K,l as I,m as G,u as J,q as O,r as Q,H as P,A as R,t as U,f as V,n as W}from"./scheduler.C_j45nO4.js";import{S as X,i as Y,t as k,g as Z,b as L,e as y,c as p,a as w,m as x,d as $}from"./index.BKHW76yc.js";import{g as ee}from"./spread.rEx3vLA9.js";import{g as te}from"./entry.JdAoFZz8.js";import{I as le}from"./icon.2LqLrRo5.js";import{t as S}from"./tw-merge.NbP7EmZe.js";function z(s){let e,l;return e=new le({props:{width:20,height:20,class:"mt-0.5",name:s[4]}}),{c(){p(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,c){x(e,n,c),l=!0},p(n,c){const m={};c&16&&(m.name=n[4]),e.$set(m)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){L(e.$$.fragment,n),l=!1},d(n){$(e,n)}}}function H(s){let e;return{c(){e=U(s[5])},l(l){e=V(l,s[5])},m(l,n){K(l,e,n)},p(l,n){n&32&&W(e,l[5])},d(l){l&&A(e)}}}function ae(s){let e,l,n,c,m,_,g,o,h,b,i=s[4]&&z(s),r=s[5]&&H(s);const v=s[10].default,u=N(v,s,s[9],null);let a=[{href:s[1]},{target:c=s[3]?"_blank":null},{rel:m=s[3]?"noreferrer":null},{class:_=S("link",s[4]?"inline-flex":"inline",s[0])},{tabindex:g=s[1]?null:0},s[8]],T={};for(let t=0;t<a.length;t+=1)T=q(T,a[t]);return{c(){e=j("a"),i&&i.c(),l=C(),r&&r.c(),n=C(),u&&u.c(),this.h()},l(t){e=B(t,"A",{href:!0,target:!0,rel:!0,class:!0,tabindex:!0});var f=F(e);i&&i.l(f),l=D(f),r&&r.l(f),n=D(f),u&&u.l(f),f.forEach(A),this.h()},h(){E(e,T),d(e,"active",s[2]),d(e,"inverse",s[6]),d(e,"svelte-1xo1ry6",!0)},m(t,f){K(t,e,f),i&&i.m(e,null),I(e,l),r&&r.m(e,null),I(e,n),u&&u.m(e,null),o=!0,h||(b=G(e,"click",s[7]),h=!0)},p(t,[f]){t[4]?i?(i.p(t,f),f&16&&k(i,1)):(i=z(t),i.c(),k(i,1),i.m(e,l)):i&&(Z(),L(i,1,1,()=>{i=null}),y()),t[5]?r?r.p(t,f):(r=H(t),r.c(),r.m(e,n)):r&&(r.d(1),r=null),u&&u.p&&(!o||f&512)&&J(u,v,t,t[9],o?Q(v,t[9],f,null):O(t[9]),null),E(e,T=ee(a,[(!o||f&2)&&{href:t[1]},(!o||f&8&&c!==(c=t[3]?"_blank":null))&&{target:c},(!o||f&8&&m!==(m=t[3]?"noreferrer":null))&&{rel:m},(!o||f&17&&_!==(_=S("link",t[4]?"inline-flex":"inline",t[0])))&&{class:_},(!o||f&2&&g!==(g=t[1]?null:0))&&{tabindex:g},f&256&&t[8]])),d(e,"active",t[2]),d(e,"inverse",t[6]),d(e,"svelte-1xo1ry6",!0)},i(t){o||(k(i),k(u,t),o=!0)},o(t){L(i),L(u,t),o=!1},d(t){t&&A(e),i&&i.d(),r&&r.d(),u&&u.d(t),h=!1,b()}}}function se(s,e,l){const n=["class","href","active","newTab","icon","text","inverse"];let c=P(e,n),{$$slots:m={},$$scope:_}=e,{class:g=""}=e,{href:o}=e,{active:h=!1}=e,{newTab:b=!1}=e,{icon:i=null}=e,{text:r=""}=e,{inverse:v=!1}=e;const u=a=>{a.button===1||b||a.metaKey||(a.preventDefault(),a.stopPropagation(),te(o))};return s.$$set=a=>{e=q(q({},e),R(a)),l(8,c=P(e,n)),"class"in a&&l(0,g=a.class),"href"in a&&l(1,o=a.href),"active"in a&&l(2,h=a.active),"newTab"in a&&l(3,b=a.newTab),"icon"in a&&l(4,i=a.icon),"text"in a&&l(5,r=a.text),"inverse"in a&&l(6,v=a.inverse),"$$scope"in a&&l(9,_=a.$$scope)},[g,o,h,b,i,r,v,u,c,_,m]}class ce extends X{constructor(e){super(),Y(this,e,se,ae,M,{class:0,href:1,active:2,newTab:3,icon:4,text:5,inverse:6})}}export{ce as L};