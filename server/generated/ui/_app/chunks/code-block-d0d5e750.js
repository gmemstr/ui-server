import{S as X,i as Y,s as Z,l as M,f as C,r as Q,u as O,w as R,x as E,d as m,A as x,e as k,t as j,c as y,a as v,g as T,b as N,K as g,h as I,k as V,n as A,V as $,ac as ee,Q as J,O as U,ad as te,j as z,m as F,o as G,v as L,ae as re}from"./vendor-6d2fcc6d.js";function ne(a){let e,t,r,n,i,c,b=a[5](JSON.stringify(a[2]))+"",l,o,d,_,h,S,D,P,f=a[1]&&W(a);const q=[ie,oe],p=[];function B(s,u){return s[0]?0:1}return _=B(a),h=p[_]=q[_](a),{c(){e=k("div"),t=k("div"),r=V(),f&&f.c(),n=V(),i=k("pre"),c=k("code"),l=j(b),o=V(),d=k("button"),h.c(),this.h()},l(s){e=y(s,"DIV",{class:!0});var u=v(e);t=y(u,"DIV",{id:!0}),v(t).forEach(m),r=A(u),f&&f.l(u),n=A(u),i=y(u,"PRE",{class:!0});var w=v(i);c=y(w,"CODE",{class:!0});var H=v(c);l=T(H,b),H.forEach(m),w.forEach(m),o=A(u),d=y(u,"BUTTON",{});var K=v(d);h.l(K),K.forEach(m),u.forEach(m),this.h()},h(){N(t,"id","clipboard"),N(c,"class","language-json"),N(i,"class","p-4"),N(e,"class","relative w-full")},m(s,u){C(s,e,u),g(e,t),g(e,r),f&&f.m(e,null),g(e,n),g(e,i),g(i,c),g(c,l),g(e,o),g(e,d),p[_].m(d,null),S=!0,D||(P=$(d,"click",a[4]),D=!0)},p(s,u){s[1]?f?f.p(s,u):(f=W(s),f.c(),f.m(e,n)):f&&(f.d(1),f=null),(!S||u&4)&&b!==(b=s[5](JSON.stringify(s[2]))+"")&&I(l,b);let w=_;_=B(s),_===w?p[_].p(s,u):(Q(),O(p[w],1,1,()=>{p[w]=null}),R(),h=p[_],h?h.p(s,u):(h=p[_]=q[_](s),h.c()),E(h,1),h.m(d,null))},i(s){S||(E(h),S=!0)},o(s){O(h),S=!1},d(s){s&&m(e),f&&f.d(),p[_].d(),D=!1,P()}}}function le(a){let e,t=a[5](JSON.stringify(a[2]))+"",r;return{c(){e=k("code"),r=j(t),this.h()},l(n){e=y(n,"CODE",{class:!0,style:!0});var i=v(e);r=T(i,t),i.forEach(m),this.h()},h(){N(e,"class","language-json"),ee(e,"white-space","nowrap")},m(n,i){C(n,e,i),g(e,r)},p(n,i){i&4&&t!==(t=n[5](JSON.stringify(n[2]))+"")&&I(r,t)},i:J,o:J,d(n){n&&m(e)}}}function W(a){let e,t;return{c(){e=k("h3"),t=j(a[1]),this.h()},l(r){e=y(r,"H3",{class:!0});var n=v(e);t=T(n,a[1]),n.forEach(m),this.h()},h(){N(e,"class","text-lg mb-2 w-full")},m(r,n){C(r,e,n),g(e,t)},p(r,n){n&2&&I(t,r[1])},d(r){r&&m(e)}}}function oe(a){let e,t;return e=new U({props:{src:te,class:"w-8 h-8 text-purple-900 bg-gray-300 border-2 border-gray-200 absolute right-0 top-0 hidden group-hover:block hover:bg-gray-400 hover:border-gray-400"}}),{c(){z(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,n){G(e,r,n),t=!0},p:J,i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function ie(a){let e,t;return e=new U({props:{src:re,class:"w-8 h-8 text-purple-900 bg-gray-300 border-2 border-gray-200 absolute right-0 top-0 hidden group-hover:block hover:bg-gray-400 hover:border-gray-400"}}),{c(){z(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,n){G(e,r,n),t=!0},p:J,i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){O(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function ae(a){let e,t,r,n;const i=[le,ne],c=[];function b(l,o){return l[3]?0:l[2]||l[2]===null?1:-1}return~(e=b(a))&&(t=c[e]=i[e](a)),{c(){t&&t.c(),r=M()},l(l){t&&t.l(l),r=M()},m(l,o){~e&&c[e].m(l,o),C(l,r,o),n=!0},p(l,[o]){let d=e;e=b(l),e===d?~e&&c[e].p(l,o):(t&&(Q(),O(c[d],1,1,()=>{c[d]=null}),R()),~e?(t=c[e],t?t.p(l,o):(t=c[e]=i[e](l),t.c()),E(t,1),t.m(r.parentNode,r)):t=null)},i(l){n||(E(t),n=!0)},o(l){O(t),n=!1},d(l){~e&&c[e].d(l),l&&m(r)}}}function se(a,e,t){let{heading:r=""}=e,{content:n}=e,{copied:i=!1}=e,{inline:c=!1}=e;const b=()=>navigator.clipboard.writeText(n).then(()=>{t(0,i=!i),setTimeout(()=>t(0,i=!1),2e3)}).catch(o=>console.error(o)),l=o=>{const d=JSON.parse(o);return JSON.stringify(d,void 0,2)};return x(()=>window.Prism.highlightAll()),a.$$set=o=>{"heading"in o&&t(1,r=o.heading),"content"in o&&t(2,n=o.content),"copied"in o&&t(0,i=o.copied),"inline"in o&&t(3,c=o.inline)},[i,r,n,c,b,l]}class fe extends X{constructor(e){super();Y(this,e,se,ae,Z,{heading:1,content:2,copied:0,inline:3})}}export{fe as C};