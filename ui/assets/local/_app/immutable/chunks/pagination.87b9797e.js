import{W as j,S as Je,b as Xe,a as Ze,N as ce,A as Nt,Y as At,C as he,D as pe,E as Ie,U as St,a6 as Et,Z as jt,j as k,g as A,F as we,K as ht,O as Ee,G as ne,H as oe,I as ie,J as re,e as tt,f as W,z as Re,h as Ne,a7 as Kt,k as b,m as V,p as D,q as F,u as I,n as ee,$ as lt,c as Z,d as Q,X as De,R as fe,L as w,am as Tt,T as ue,r as pt,a5 as st,ac as Vt,o as Dt,s as Ft,w as x,x as $,y as be}from"./index.04ac50dc.js";import{p as Qe}from"./stores.23fb64f9.js";import{d as Mt,w as He}from"./index.9d257dd4.js";import{i as zt,g as Bt}from"./navigation.d83e6ca5.js";import{S as Ot,a as Ut}from"./simple-select.1305beb7.js";const Wt={keepFocus:!0,noScroll:!0},Fe=async({parameter:e,value:t,url:a,goto:s=Bt,allowEmpty:l=!1})=>{var n,o;const u=String(t);if(t?a.searchParams.set(e,u):l?a.searchParams.set(e,""):a.searchParams.delete(e),a.href!==window.location.href){const r=`/namespaces/${(o=(n=j(Qe))==null?void 0:n.params)==null?void 0:o.namespace}/workflows`;a.pathname===r&&await zt(m=>m.pathname===r),s(a,Wt)}return t},Ae=100,je=["100","250","500"],Se="per-page",at=je[je.length-1],Me=(e,t)=>Math.floor(e/t)+1,It=(e,t,a)=>isNaN(e)||e<=1?0:e>wt(t,a)?a.length-t:Math.floor(t*(e-1)),Ct=(e,t,a)=>{const s=Me(e,t);return It(s,t,a)},nt=(e,t)=>Math.min(e-1,t-1),wt=(e,t)=>Math.ceil(t.length/e),Le=(e,t)=>isNaN(e)||e<0?0:e<t.length?e:t.length-1,qe=(e,t)=>e>=t.length||e<0,Ht=(e=[],t=Ae,a=0)=>{t=Pt(t);const s=Ct(Ge(a),t,e),l=He(t),u=He(s),n=He(void 0),o=_=>{l.set(Ge(_))},f=()=>{u.update(_=>{const c=_+j(l);return qe(c,e)?_:Le(c,e)})},r=()=>{u.update(_=>{const c=_-j(l);return Le(c,e)})},m=_=>{const c=j(l),v=It(Number(_),c,e),T=e.slice(v,v+c).length;return j(n)>T-1&&n.set(T-1),u.set(v)},z=_=>{const c=Me(Number(_),j(l));m(c)},N=_=>{for(let c=0;c<e.length;c++)if(_(e[c]))return c},P=_=>{const c=N(_);return Me(c,j(l))},O=_=>{const c=e.slice(j(u),j(u)+j(l)).length,v=nt(c,j(l));_<=v&&n.set(_)},d=()=>{const _=e.slice(j(u),j(u)+j(l)).length,c=nt(_,j(l));j(n)===void 0?n.set(0):j(n)<c&&n.set(j(n)+1)},U=()=>{const _=j(n)>=1?j(n)-1:0;n.set(_)},{subscribe:R}=Mt([u,l,n],([_,c,v])=>({items:e.slice(_,_+c),initialItem:e[0],hasPrevious:!qe(_-c,e),hasNext:!qe(_+c,e),startingIndex:_,endingIndex:Le(_+c-1,e),length:e.length,pageSize:c,currentPage:Me(_,c),totalPages:wt(c,e),activeRowIndex:v}));return{subscribe:R,adjustPageSize:o,next:f,previous:r,jumpToPage:m,jumpToIndex:z,findIndex:N,findPage:P,nextRow:d,previousRow:U,setActiveRowIndex:O}},Pt=(e=Ae)=>{const t=Ge(e);return isNaN(t)||!t?Ae:t},Ge=(e=0)=>{const t=Number(e);return isNaN(t)||!t?0:Math.abs(t)};function ot(e,t,a){const s=e.slice();return s[13]=t[a],s}function it(e){let t,a;return t=new Ut({props:{value:e[13]}}),{c(){he(t.$$.fragment)},l(s){pe(t.$$.fragment,s)},m(s,l){Ie(t,s,l),a=!0},p(s,l){const u={};l&1&&(u.value=s[13]),t.$set(u)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){we(t,s)}}}function Lt(e){let t,a,s=e[0].map(rt),l=[];for(let n=0;n<s.length;n+=1)l[n]=it(ot(e,s,n));const u=n=>A(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=tt()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);t=tt()},m(n,o){for(let f=0;f<l.length;f+=1)l[f].m(n,o);W(n,t,o),a=!0},p(n,o){if(o&1){s=n[0].map(rt);let f;for(f=0;f<s.length;f+=1){const r=ot(n,s,f);l[f]?(l[f].p(r,o),k(l[f],1)):(l[f]=it(r),l[f].c(),k(l[f],1),l[f].m(t.parentNode,t))}for(Re(),f=s.length;f<l.length;f+=1)u(f);Ne()}},i(n){if(!a){for(let o=0;o<s.length;o+=1)k(l[o]);a=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)A(l[o]);a=!1},d(n){Kt(l,n),n&&b(t)}}}function qt(e){let t;const a=e[8].default,s=ne(a,e,e[10],null),l=s||Lt(e);return{c(){l&&l.c()},l(u){l&&l.l(u)},m(u,n){l&&l.m(u,n),t=!0},p(u,n){s?s.p&&(!t||n&1024)&&oe(s,a,u,u[10],t?re(a,u[10],n,null):ie(u[10]),null):l&&l.p&&(!t||n&1)&&l.p(u,t?n:-1)},i(u){t||(k(l,u),t=!0)},o(u){A(l,u),t=!1},d(u){l&&l.d(u)}}}function Gt(e){let t,a,s;const l=[{id:e[2]},e[4],{class:"border-[1px] border-gray-900 outline-none"}];function u(o){e[9](o)}let n={$$slots:{default:[qt]},$$scope:{ctx:e}};for(let o=0;o<l.length;o+=1)n=ce(n,l[o]);return e[1]!==void 0&&(n.value=e[1]),t=new Ot({props:n}),Nt.push(()=>At(t,"value",u)),t.$on("change",e[3]),{c(){he(t.$$.fragment)},l(o){pe(t.$$.fragment,o)},m(o,f){Ie(t,o,f),s=!0},p(o,[f]){const r=f&20?St(l,[f&4&&{id:o[2]},f&16&&Et(o[4]),l[2]]):{};f&1025&&(r.$$scope={dirty:f,ctx:o}),!a&&f&2&&(a=!0,r.value=o[1],jt(()=>a=!1)),t.$set(r)},i(o){s||(k(t.$$.fragment,o),s=!0)},o(o){A(t.$$.fragment,o),s=!1},d(o){we(t,o)}}}const rt=e=>e.toString();function Jt(e,t,a){let s;ht(e,Qe,d=>a(11,s=d));let{$$slots:l={},$$scope:u}=t,{label:n=null}=t,{value:o}=t,{options:f=[]}=t,{parameter:r=null}=t;const m=`${r||n}-filter`;let N=r&&s.url.searchParams.get(r)||o&&o.toString();const P=()=>{Fe({parameter:r,value:N,url:s.url}).then(d=>a(5,o=d))};function O(d){N=d,a(1,N)}return e.$$set=d=>{a(4,t=ce(ce({},t),Ee(d))),"label"in d&&a(6,n=d.label),"value"in d&&a(5,o=d.value),"options"in d&&a(0,f=d.options),"parameter"in d&&a(7,r=d.parameter),"$$scope"in d&&a(10,u=d.$$scope)},t=Ee(t),[f,N,m,P,t,o,n,r,l,O,u]}class kt extends Je{constructor(t){super(),Xe(this,t,Jt,Gt,Ze,{label:6,value:5,options:0,parameter:7})}}const Xt=({width:e,height:t,screenWidth:a,breakpoint:s=1279})=>e&&t&&a>s?`position: absolute; right: ${e+20}px; top: -${t+14}px`:"";function Zt(e){let t,a;return{c(){t=V("div"),this.h()},l(s){t=D(s,"DIV",{class:!0}),F(t).forEach(b),this.h()},h(){I(t,"class",a="background-animate w-full rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 "+e[0].class+" svelte-1hpjfio")},m(s,l){W(s,t,l)},p(s,[l]){l&1&&a!==(a="background-animate w-full rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 "+s[0].class+" svelte-1hpjfio")&&I(t,"class",a)},i:ee,o:ee,d(s){s&&b(t)}}}function Qt(e,t,a){return e.$$set=s=>{a(0,t=ce(ce({},t),Ee(s)))},t=Ee(t),[t]}class Rt extends Je{constructor(t){super(),Xe(this,t,Qt,Zt,Ze,{})}}const Yt=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),ft=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex}),yt=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),ut=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex}),xt=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),ct=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex}),$t=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),_t=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex}),el=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),mt=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex}),tl=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),gt=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex}),ll=e=>({visibleItems:e&64,initialItem:e&64,activeRowIndex:e&64,setActiveRowIndex:e&16}),dt=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem,activeRowIndex:e[6].activeRowIndex,setActiveRowIndex:e[4].setActiveRowIndex});function vt(e){let t,a;return t=new kt({props:{label:"Per Page",parameter:Se,value:e[5],options:je}}),{c(){he(t.$$.fragment)},l(s){pe(t.$$.fragment,s)},m(s,l){Ie(t,s,l),a=!0},p(s,l){const u={};l&32&&(u.value=s[5]),t.$set(u)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){we(t,s)}}}function sl(e){let t=(e[6].length?e[6].startingIndex+1:0)+"",a,s,l=e[6].endingIndex+1+"",u,n,o=e[6].length+"",f;return{c(){a=x(t),s=x("–"),u=x(l),n=x(" of "),f=x(o)},l(r){a=$(r,t),s=$(r,"–"),u=$(r,l),n=$(r," of "),f=$(r,o)},m(r,m){W(r,a,m),W(r,s,m),W(r,u,m),W(r,n,m),W(r,f,m)},p(r,m){m&64&&t!==(t=(r[6].length?r[6].startingIndex+1:0)+"")&&be(a,t),m&64&&l!==(l=r[6].endingIndex+1+"")&&be(u,l),m&64&&o!==(o=r[6].length+"")&&be(f,o)},i:ee,o:ee,d(r){r&&b(a),r&&b(s),r&&b(u),r&&b(n),r&&b(f)}}}function al(e){let t,a;return t=new Rt({props:{class:"block h-5 w-24"}}),{c(){he(t.$$.fragment)},l(s){pe(t.$$.fragment,s)},m(s,l){Ie(t,s,l),a=!0},p:ee,i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){we(t,s)}}}function nl(e){let t,a,s,l,u,n,o,f,r,m,z,N,P,O,d;const U=[al,sl],R=[];function _(c,v){return c[1]?0:1}return o=_(e),f=R[o]=U[o](e),{c(){t=V("div"),a=V("button"),s=V("span"),u=Z(),n=V("p"),f.c(),r=Z(),m=V("button"),z=V("span"),this.h()},l(c){t=D(c,"DIV",{class:!0});var v=F(t);a=D(v,"BUTTON",{class:!0,"aria-label":!0});var T=F(a);s=D(T,"SPAN",{class:!0}),F(s).forEach(b),T.forEach(b),u=Q(v),n=D(v,"P",{});var Y=F(n);f.l(Y),Y.forEach(b),r=Q(v),m=D(v,"BUTTON",{class:!0,"aria-label":!0});var K=F(m);z=D(K,"SPAN",{class:!0}),F(z).forEach(b),K.forEach(b),v.forEach(b),this.h()},h(){I(s,"class","arrow arrow-left svelte-1780ds3"),fe(s,"arrow-left-disabled",!e[6].hasPrevious),I(a,"class","caret svelte-1780ds3"),a.disabled=l=!e[6].hasPrevious,I(a,"aria-label","previous"),I(z,"class","arrow arrow-right svelte-1780ds3"),fe(z,"arrow-right-disabled",!e[6].hasNext),I(m,"class","caret svelte-1780ds3"),m.disabled=N=!e[6].hasNext,I(m,"aria-label","next"),I(t,"class","flex items-center justify-center gap-3")},m(c,v){W(c,t,v),w(t,a),w(a,s),w(t,u),w(t,n),R[o].m(n,null),w(t,r),w(t,m),w(m,z),P=!0,O||(d=[ue(a,"click",e[24]),ue(m,"click",e[25])],O=!0)},p(c,v){(!P||v&64)&&fe(s,"arrow-left-disabled",!c[6].hasPrevious),(!P||v&64&&l!==(l=!c[6].hasPrevious))&&(a.disabled=l);let T=o;o=_(c),o===T?R[o].p(c,v):(Re(),A(R[T],1,1,()=>{R[T]=null}),Ne(),f=R[o],f?f.p(c,v):(f=R[o]=U[o](c),f.c()),k(f,1),f.m(n,null)),(!P||v&64)&&fe(z,"arrow-right-disabled",!c[6].hasNext),(!P||v&64&&N!==(N=!c[6].hasNext))&&(m.disabled=N)},i(c){P||(k(f),P=!0)},o(c){A(f),P=!1},d(c){c&&b(t),R[o].d(),O=!1,pt(d)}}}function bt(e){let t,a;return t=new kt({props:{label:"Per Page",parameter:Se,value:e[5],options:je}}),{c(){he(t.$$.fragment)},l(s){pe(t.$$.fragment,s)},m(s,l){Ie(t,s,l),a=!0},p(s,l){const u={};l&32&&(u.value=s[5]),t.$set(u)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){we(t,s)}}}function ol(e){let t=(e[6].length?e[6].startingIndex+1:0)+"",a,s,l=e[6].endingIndex+1+"",u,n,o=e[6].length+"",f;return{c(){a=x(t),s=x("–"),u=x(l),n=x(" of "),f=x(o)},l(r){a=$(r,t),s=$(r,"–"),u=$(r,l),n=$(r," of "),f=$(r,o)},m(r,m){W(r,a,m),W(r,s,m),W(r,u,m),W(r,n,m),W(r,f,m)},p(r,m){m&64&&t!==(t=(r[6].length?r[6].startingIndex+1:0)+"")&&be(a,t),m&64&&l!==(l=r[6].endingIndex+1+"")&&be(u,l),m&64&&o!==(o=r[6].length+"")&&be(f,o)},i:ee,o:ee,d(r){r&&b(a),r&&b(s),r&&b(u),r&&b(n),r&&b(f)}}}function il(e){let t,a;return t=new Rt({props:{class:"block h-5 w-24"}}),{c(){he(t.$$.fragment)},l(s){pe(t.$$.fragment,s)},m(s,l){Ie(t,s,l),a=!0},p:ee,i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){we(t,s)}}}function rl(e){let t,a,s,l,u,n,o,f,r,m,z,N,P,O,d,U,R,_,c,v,T,Y,K,B,te,M,y,_e,Pe,me,ge,h,ke,Ke;lt(e[23]);const p=e[22]["action-top-left"],C=ne(p,e,e[21],dt),ze=e[22]["action-top-center"],H=ne(ze,e,e[21],gt);let S=!e[0]&&vt(e);const Be=e[22]["pagination-top"],Te=ne(Be,e,e[21],mt),L=Te||nl(e),Oe=e[22]["action-top-right"],q=ne(Oe,e,e[21],_t),Ue=e[22].default,G=ne(Ue,e,e[21],ct),We=e[22]["action-bottom-left"],J=ne(We,e,e[21],ut);let E=!e[0]&&bt(e);const Ye=[il,ol],le=[];function ye(i,g){return i[1]?0:1}K=ye(e),B=le[K]=Ye[K](e);const Ce=e[22]["action-bottom-right"],X=ne(Ce,e,e[21],ft);return{c(){t=V("div"),a=V("div"),C&&C.c(),s=Z(),l=V("nav"),H&&H.c(),u=Z(),S&&S.c(),n=Z(),L&&L.c(),o=Z(),q&&q.c(),z=Z(),G&&G.c(),N=Z(),P=V("nav"),J&&J.c(),O=Z(),d=V("div"),E&&E.c(),U=Z(),R=V("div"),_=V("button"),c=V("span"),T=Z(),Y=V("p"),B.c(),te=Z(),M=V("button"),y=V("span"),Pe=Z(),X&&X.c(),this.h()},l(i){t=D(i,"DIV",{class:!0});var g=F(t);a=D(g,"DIV",{class:!0});var se=F(a);C&&C.l(se),s=Q(se),l=D(se,"NAV",{style:!0,class:!0,"aria-label":!0});var ae=F(l);H&&H.l(ae),u=Q(ae),S&&S.l(ae),n=Q(ae),L&&L.l(ae),o=Q(ae),q&&q.l(ae),ae.forEach(b),se.forEach(b),z=Q(g),G&&G.l(g),N=Q(g),P=D(g,"NAV",{class:!0,"aria-label":!0});var Ve=F(P);J&&J.l(Ve),O=Q(Ve),d=D(Ve,"DIV",{class:!0});var de=F(d);E&&E.l(de),U=Q(de),R=D(de,"DIV",{class:!0});var ve=F(R);_=D(ve,"BUTTON",{class:!0,"aria-label":!0});var xe=F(_);c=D(xe,"SPAN",{class:!0}),F(c).forEach(b),xe.forEach(b),T=Q(ve),Y=D(ve,"P",{});var $e=F(Y);B.l($e),$e.forEach(b),te=Q(ve),M=D(ve,"BUTTON",{class:!0,"aria-label":!0});var et=F(M);y=D(et,"SPAN",{class:!0}),F(y).forEach(b),et.forEach(b),ve.forEach(b),Pe=Q(de),X&&X.l(de),de.forEach(b),Ve.forEach(b),g.forEach(b),this.h()},h(){I(l,"style",e[7]),I(l,"class","flex flex-col justify-end gap-4 md:flex-row"),I(l,"aria-label",f=e[12]["aria-label"]),lt(()=>e[26].call(l)),I(a,"class",m=De(`flex flex-col items-center gap-4 lg:flex-row ${e[11]["action-top-left"]?"justify-between":"justify-end"}`)+" svelte-1780ds3"),I(c,"class","arrow arrow-left svelte-1780ds3"),fe(c,"arrow-left-disabled",!e[6].hasPrevious),I(_,"class","caret svelte-1780ds3"),_.disabled=v=!e[6].hasPrevious,I(_,"aria-label","previous"),I(y,"class","arrow arrow-right svelte-1780ds3"),fe(y,"arrow-right-disabled",!e[6].hasNext),I(M,"class","caret svelte-1780ds3"),M.disabled=_e=!e[6].hasNext,I(M,"aria-label","next"),I(R,"class","flex items-center justify-center gap-3"),I(d,"class","flex gap-4"),I(P,"class",me=De(`flex ${e[11]["action-bottom-left"]?"justify-between":"justify-end"}`)+" svelte-1780ds3"),I(P,"aria-label",ge=e[12]["aria-label"]),I(t,"class","pagination relative mb-8 flex flex-col gap-4")},m(i,g){W(i,t,g),w(t,a),C&&C.m(a,null),w(a,s),w(a,l),H&&H.m(l,null),w(l,u),S&&S.m(l,null),w(l,n),L&&L.m(l,null),w(l,o),q&&q.m(l,null),r=Tt(l,e[26].bind(l)),w(t,z),G&&G.m(t,null),w(t,N),w(t,P),J&&J.m(P,null),w(P,O),w(P,d),E&&E.m(d,null),w(d,U),w(d,R),w(R,_),w(_,c),w(R,T),w(R,Y),le[K].m(Y,null),w(R,te),w(R,M),w(M,y),w(d,Pe),X&&X.m(d,null),h=!0,ke||(Ke=[ue(window,"resize",e[9]),ue(window,"keydown",e[10]),ue(window,"resize",e[23]),ue(_,"click",e[27]),ue(M,"click",e[28])],ke=!0)},p(i,[g]){C&&C.p&&(!h||g&2097232)&&oe(C,p,i,i[21],h?re(p,i[21],g,ll):ie(i[21]),dt),H&&H.p&&(!h||g&2097232)&&oe(H,ze,i,i[21],h?re(ze,i[21],g,tl):ie(i[21]),gt),i[0]?S&&(Re(),A(S,1,1,()=>{S=null}),Ne()):S?(S.p(i,g),g&1&&k(S,1)):(S=vt(i),S.c(),k(S,1),S.m(l,n)),Te?Te.p&&(!h||g&2097232)&&oe(Te,Be,i,i[21],h?re(Be,i[21],g,el):ie(i[21]),mt):L&&L.p&&(!h||g&82)&&L.p(i,h?g:-1),q&&q.p&&(!h||g&2097232)&&oe(q,Oe,i,i[21],h?re(Oe,i[21],g,$t):ie(i[21]),_t),(!h||g&128)&&I(l,"style",i[7]),(!h||g&4096&&f!==(f=i[12]["aria-label"]))&&I(l,"aria-label",f),(!h||g&2048&&m!==(m=De(`flex flex-col items-center gap-4 lg:flex-row ${i[11]["action-top-left"]?"justify-between":"justify-end"}`)+" svelte-1780ds3"))&&I(a,"class",m),G&&G.p&&(!h||g&2097232)&&oe(G,Ue,i,i[21],h?re(Ue,i[21],g,xt):ie(i[21]),ct),J&&J.p&&(!h||g&2097232)&&oe(J,We,i,i[21],h?re(We,i[21],g,yt):ie(i[21]),ut),i[0]?E&&(Re(),A(E,1,1,()=>{E=null}),Ne()):E?(E.p(i,g),g&1&&k(E,1)):(E=bt(i),E.c(),k(E,1),E.m(d,U)),(!h||g&64)&&fe(c,"arrow-left-disabled",!i[6].hasPrevious),(!h||g&64&&v!==(v=!i[6].hasPrevious))&&(_.disabled=v);let se=K;K=ye(i),K===se?le[K].p(i,g):(Re(),A(le[se],1,1,()=>{le[se]=null}),Ne(),B=le[K],B?B.p(i,g):(B=le[K]=Ye[K](i),B.c()),k(B,1),B.m(Y,null)),(!h||g&64)&&fe(y,"arrow-right-disabled",!i[6].hasNext),(!h||g&64&&_e!==(_e=!i[6].hasNext))&&(M.disabled=_e),X&&X.p&&(!h||g&2097232)&&oe(X,Ce,i,i[21],h?re(Ce,i[21],g,Yt):ie(i[21]),ft),(!h||g&2048&&me!==(me=De(`flex ${i[11]["action-bottom-left"]?"justify-between":"justify-end"}`)+" svelte-1780ds3"))&&I(P,"class",me),(!h||g&4096&&ge!==(ge=i[12]["aria-label"]))&&I(P,"aria-label",ge)},i(i){h||(k(C,i),k(H,i),k(S),k(L,i),k(q,i),k(G,i),k(J,i),k(E),k(B),k(X,i),h=!0)},o(i){A(C,i),A(H,i),A(S),A(L,i),A(q,i),A(G,i),A(J,i),A(E),A(B),A(X,i),h=!1},d(i){i&&b(t),C&&C.d(i),H&&H.d(i),S&&S.d(),L&&L.d(i),q&&q.d(i),r(),G&&G.d(i),J&&J.d(i),E&&E.d(),le[K].d(),X&&X.d(i),ke=!1,pt(Ke)}}}function fl(e,t,a){let s,l,u,n;const o=["items","floatId","startingIndex","currentPageKey","itemsPerPage","updating"];let f=st(t,o),r,m=ee,z=()=>(m(),m=Ft(l,p=>a(6,r=p)),l),N;ht(e,Qe,p=>a(20,N=p)),e.$$.on_destroy.push(()=>m());let{$$slots:P={},$$scope:O}=t;const d=Vt(P);var U;let{items:R}=t,{floatId:_=void 0}=t,{startingIndex:c=0}=t,{currentPageKey:v="page"}=t,{itemsPerPage:T=null}=t,{updating:Y=!1}=t,K,B,te;Dt(()=>{y(),c>0&&M()});const M=()=>{Fe({parameter:v,value:r.currentPage,url:N.url})},y=()=>{var p;_&&a(18,B=(p=document.getElementById(_))===null||p===void 0?void 0:p.clientWidth)};async function _e(p){switch(p.code){case"ArrowRight":case"KeyL":r.hasNext&&(l.next(),M());break;case"ArrowLeft":case"KeyH":r.hasPrevious&&(l.previous(),M());break;case"ArrowUp":case"KeyK":l.previousRow();break;case"ArrowDown":case"KeyJ":l.nextRow();break}}function Pe(){a(2,K=window.innerWidth)}const me=()=>{l.previous(),M()},ge=()=>{l.next(),M()};function h(){te=this.clientHeight,a(3,te)}const ke=()=>l.previous(),Ke=()=>l.next();return e.$$set=p=>{t=ce(ce({},t),Ee(p)),a(12,f=st(t,o)),"items"in p&&a(13,R=p.items),"floatId"in p&&a(14,_=p.floatId),"startingIndex"in p&&a(15,c=p.startingIndex),"currentPageKey"in p&&a(16,v=p.currentPageKey),"itemsPerPage"in p&&a(0,T=p.itemsPerPage),"updating"in p&&a(1,Y=p.updating),"$$scope"in p&&a(21,O=p.$$scope)},e.$$.update=()=>{e.$$.dirty&1048577&&a(5,s=T!==null?String(T):String(Pt(N.url.searchParams.get(Se))).toString()),e.$$.dirty&1048608&&(parseInt(s,10)>parseInt(at,10)?Fe({parameter:Se,value:at,url:N.url}):je.includes(s)||Fe({parameter:Se,value:Ae,url:N.url})),e.$$.dirty&40992&&z(a(4,l=Ht(R,s,c))),e.$$.dirty&1245248&&a(19,u=a(17,U=N.url.searchParams.get(v))!==null&&U!==void 0?U:r.currentPage),e.$$.dirty&524304&&l.jumpToPage(u),e.$$.dirty&262156&&a(7,n=Xt({width:B,height:te,screenWidth:K}))},[T,Y,K,te,l,s,r,n,M,y,_e,d,f,R,_,c,v,U,B,u,N,O,P,Pe,me,ge,h,ke,Ke]}class dl extends Je{constructor(t){super(),Xe(this,t,fl,rl,Ze,{items:13,floatId:14,startingIndex:15,currentPageKey:16,itemsPerPage:0,updating:1})}}export{kt as F,dl as P,Fe as u};