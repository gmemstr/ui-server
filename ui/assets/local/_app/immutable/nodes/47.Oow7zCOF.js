import{s as Se,e as $,a as w,t as N,b as g,d as k,g as d,h as x,f as V,i as ae,j as h,k as E,l as c,n as Z,v as Qe,y as Be,c as Fe}from"../chunks/scheduler.IHo1m08M.js";import{S as Te,i as Ue,c as J,a as K,m as M,t as b,g as je,b as C,e as Ae,d as O}from"../chunks/index.uEw0cz3N.js";import{p as He}from"../chunks/stores.mrKOWnsb.js";import{P as qe}from"../chunks/page-title.waH5MUD4.js";import{t as y}from"../chunks/translate.HrioCK44.js";import{e as Ee}from"../chunks/each.Z6OXf_o8.js";import{B as Le}from"../chunks/button.OBaUU2za.js";import{C as ze}from"../chunks/index.S5aNt1qf.js";import{L as he}from"../chunks/link.7Uuravfn.js";import{h as Ge,i as Ie,a as ce}from"../chunks/route-for.SDauOzyO.js";function Ne(n,e,a){const t=n.slice();return t[2]=e[a],t}function Je(n){let e=y("nexus.back-to-endpoints")+"",a;return{c(){a=N(e)},l(t){a=V(t,e)},m(t,l){E(t,a,l)},p:Qe,d(t){t&&d(a)}}}function Ke(n){let e=y("common.edit")+"",a;return{c(){a=N(e)},l(t){a=V(t,e)},m(t,l){E(t,a,l)},p:Qe,d(t){t&&d(a)}}}function Me(n){let e,a=n[0].spec.target.worker.namespace+"",t;return{c(){e=$("i"),t=N(a)},l(l){e=g(l,"I",{});var s=k(e);t=V(s,a),s.forEach(d)},m(l,s){E(l,e,s),c(e,t)},p(l,s){s&1&&a!==(a=l[0].spec.target.worker.namespace+"")&&Z(t,a)},d(l){l&&d(e)}}}function Oe(n){let e,a=n[0].spec.target.worker.taskQueue+"",t;return{c(){e=$("i"),t=N(a)},l(l){e=g(l,"I",{});var s=k(e);t=V(s,a),s.forEach(d)},m(l,s){E(l,e,s),c(e,t)},p(l,s){s&1&&a!==(a=l[0].spec.target.worker.taskQueue+"")&&Z(t,a)},d(l){l&&d(e)}}}function Ve(n){var B;let e,a="Allowed Caller Namespaces",t,l,s,p=Ee((B=n[0].spec)==null?void 0:B.allowedCallerNamespaces),r=[];for(let i=0;i<p.length;i+=1)r[i]=Pe(Ne(n,p,i));const D=i=>C(r[i],1,1,()=>{r[i]=null});return{c(){e=$("h2"),e.textContent=a,t=w(),l=$("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=g(i,"H2",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-q5llbk"&&(e.textContent=a),t=x(i),l=g(i,"DIV",{class:!0});var u=k(l);for(let v=0;v<r.length;v+=1)r[v].l(u);u.forEach(d),this.h()},h(){h(e,"class","text-xl"),h(l,"class","flex flex-wrap items-center gap-4")},m(i,u){E(i,e,u),E(i,t,u),E(i,l,u);for(let v=0;v<r.length;v+=1)r[v]&&r[v].m(l,null);s=!0},p(i,u){var v;if(u&1){p=Ee((v=i[0].spec)==null?void 0:v.allowedCallerNamespaces);let m;for(m=0;m<p.length;m+=1){const R=Ne(i,p,m);r[m]?(r[m].p(R,u),b(r[m],1)):(r[m]=Pe(R),r[m].c(),b(r[m],1),r[m].m(l,null))}for(je(),m=p.length;m<r.length;m+=1)D(m);Ae()}},i(i){if(!s){for(let u=0;u<p.length;u+=1)b(r[u]);s=!0}},o(i){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)C(r[u]);s=!1},d(i){i&&(d(e),d(t),d(l)),Be(r,i)}}}function Re(n){let e=n[2]+"",a;return{c(){a=N(e)},l(t){a=V(t,e)},m(t,l){E(t,a,l)},p(t,l){l&1&&e!==(e=t[2]+"")&&Z(a,e)},d(t){t&&d(a)}}}function Pe(n){let e,a;return e=new he({props:{href:ce({namespace:n[2]}),$$slots:{default:[Re]},$$scope:{ctx:n}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),a=!0},p(t,l){const s={};l&1&&(s.href=ce({namespace:t[2]})),l&33&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){O(e,t)}}}function We(n){var be,Ce;let e,a,t,l,s,p,r,D=n[0].spec.name+"",B,i,u,v,m,R,ee=n[0].id+"",le,fe,P,F,ve="Target",pe,S,Q,H,ke="Namespace",ue,T,de,U,q,we="Task Queue",me,j,_e,L,xe="Description",$e,W,te=(((be=n[0].spec)==null?void 0:be.descriptionString)||"No description provided")+"",ne,ge,z;t=new he({props:{href:Ge(),icon:"chevron-left",$$slots:{default:[Je]},$$scope:{ctx:n}}}),u=new Le({props:{href:Ie(n[0].id),disabled:n[1],$$slots:{default:[Ke]},$$scope:{ctx:n}}}),T=new he({props:{href:ce({namespace:n[0].spec.target.worker.namespace}),$$slots:{default:[Me]},$$scope:{ctx:n}}}),j=new ze({props:{copyIconTitle:y("common.copy-icon-title"),copySuccessIconTitle:y("common.copy-success-icon-title"),content:n[0].spec.target.worker.taskQueue,$$slots:{default:[Oe]},$$scope:{ctx:n}}});let _=((Ce=n[0].spec)==null?void 0:Ce.allowedCallerNamespaces)&&Ve(n);return{c(){e=$("div"),a=$("div"),J(t.$$.fragment),l=w(),s=$("div"),p=$("div"),r=$("h1"),B=N(D),i=w(),J(u.$$.fragment),v=w(),m=$("p"),R=N("UUID: "),le=N(ee),fe=w(),P=$("div"),F=$("p"),F.textContent=ve,pe=w(),S=$("div"),Q=$("div"),H=$("span"),H.textContent=ke,ue=w(),J(T.$$.fragment),de=w(),U=$("div"),q=$("span"),q.textContent=we,me=w(),J(j.$$.fragment),_e=w(),L=$("h2"),L.textContent=xe,$e=w(),W=$("p"),ne=N(te),ge=w(),_&&_.c(),this.h()},l(f){e=g(f,"DIV",{class:!0});var o=k(e);a=g(o,"DIV",{class:!0});var se=k(a);K(t.$$.fragment,se),se.forEach(d),l=x(o),s=g(o,"DIV",{class:!0});var I=k(s);p=g(I,"DIV",{class:!0});var A=k(p);r=g(A,"H1",{"data-testid":!0,class:!0});var X=k(r);B=V(X,D),X.forEach(d),i=x(A),K(u.$$.fragment,A),A.forEach(d),v=x(I),m=g(I,"P",{});var Y=k(m);R=V(Y,"UUID: "),le=V(Y,ee),Y.forEach(d),I.forEach(d),fe=x(o),P=g(o,"DIV",{class:!0});var G=k(P);F=g(G,"P",{class:!0,"data-svelte-h":!0}),ae(F)!=="svelte-byk4oj"&&(F.textContent=ve),pe=x(G),S=g(G,"DIV",{class:!0});var re=k(S);Q=g(re,"DIV",{class:!0});var oe=k(Q);H=g(oe,"SPAN",{class:!0,"data-svelte-h":!0}),ae(H)!=="svelte-10wol87"&&(H.textContent=ke),ue=x(oe),K(T.$$.fragment,oe),oe.forEach(d),de=x(re),U=g(re,"DIV",{class:!0});var ie=k(U);q=g(ie,"SPAN",{class:!0,"data-svelte-h":!0}),ae(q)!=="svelte-1sd3nvg"&&(q.textContent=we),me=x(ie),K(j.$$.fragment,ie),ie.forEach(d),re.forEach(d),G.forEach(d),_e=x(o),L=g(o,"H2",{class:!0,"data-svelte-h":!0}),ae(L)!=="svelte-zwdi8x"&&(L.textContent=xe),$e=x(o),W=g(o,"P",{class:!0});var De=k(W);ne=V(De,te),De.forEach(d),ge=x(o),_&&_.l(o),o.forEach(d),this.h()},h(){h(a,"class","relative flex flex-col gap-4 text-sm"),h(r,"data-testid","namespace-selector-title"),h(r,"class","text-2xl"),h(p,"class","flex items-center justify-between"),h(s,"class","flex flex-col gap-1"),h(F,"class","text-lg"),h(H,"class","font-medium"),h(Q,"class","flex items-center gap-2"),h(q,"class","font-medium"),h(U,"class","flex items-center gap-2"),h(S,"class","flex flex-col gap-4 lg:flex-row"),h(P,"class","surface-primary max-w-fit rounded-lg border-2 border-secondary p-4"),h(L,"class","text-xl"),h(W,"class","w-full whitespace-pre-wrap xl:w-1/2"),h(e,"class","flex flex-col gap-8")},m(f,o){E(f,e,o),c(e,a),M(t,a,null),c(e,l),c(e,s),c(s,p),c(p,r),c(r,B),c(p,i),M(u,p,null),c(s,v),c(s,m),c(m,R),c(m,le),c(e,fe),c(e,P),c(P,F),c(P,pe),c(P,S),c(S,Q),c(Q,H),c(Q,ue),M(T,Q,null),c(S,de),c(S,U),c(U,q),c(U,me),M(j,U,null),c(e,_e),c(e,L),c(e,$e),c(e,W),c(W,ne),c(e,ge),_&&_.m(e,null),z=!0},p(f,[o]){var Y,G;const se={};o&32&&(se.$$scope={dirty:o,ctx:f}),t.$set(se),(!z||o&1)&&D!==(D=f[0].spec.name+"")&&Z(B,D);const I={};o&1&&(I.href=Ie(f[0].id)),o&2&&(I.disabled=f[1]),o&32&&(I.$$scope={dirty:o,ctx:f}),u.$set(I),(!z||o&1)&&ee!==(ee=f[0].id+"")&&Z(le,ee);const A={};o&1&&(A.href=ce({namespace:f[0].spec.target.worker.namespace})),o&33&&(A.$$scope={dirty:o,ctx:f}),T.$set(A);const X={};o&1&&(X.content=f[0].spec.target.worker.taskQueue),o&33&&(X.$$scope={dirty:o,ctx:f}),j.$set(X),(!z||o&1)&&te!==(te=(((Y=f[0].spec)==null?void 0:Y.descriptionString)||"No description provided")+"")&&Z(ne,te),(G=f[0].spec)!=null&&G.allowedCallerNamespaces?_?(_.p(f,o),o&1&&b(_,1)):(_=Ve(f),_.c(),b(_,1),_.m(e,null)):_&&(je(),C(_,1,1,()=>{_=null}),Ae())},i(f){z||(b(t.$$.fragment,f),b(u.$$.fragment,f),b(T.$$.fragment,f),b(j.$$.fragment,f),b(_),z=!0)},o(f){C(t.$$.fragment,f),C(u.$$.fragment,f),C(T.$$.fragment,f),C(j.$$.fragment,f),C(_),z=!1},d(f){f&&d(e),O(t),O(u),O(T),O(j),_&&_.d()}}}function Xe(n,e,a){let{endpoint:t}=e,{editDisabled:l=!1}=e;return n.$$set=s=>{"endpoint"in s&&a(0,t=s.endpoint),"editDisabled"in s&&a(1,l=s.editDisabled)},[t,l]}class Ye extends Te{constructor(e){super(),Ue(this,e,Xe,We,Se,{endpoint:0,editDisabled:1})}}function Ze(n){let e,a,t,l;return e=new qe({props:{title:y("nexus.nexus-endpoint",{id:n[1].params.id}),url:n[1].url.href}}),t=new Ye({props:{endpoint:n[0]}}),{c(){J(e.$$.fragment),a=w(),J(t.$$.fragment)},l(s){K(e.$$.fragment,s),a=x(s),K(t.$$.fragment,s)},m(s,p){M(e,s,p),E(s,a,p),M(t,s,p),l=!0},p(s,[p]){const r={};p&2&&(r.title=y("nexus.nexus-endpoint",{id:s[1].params.id})),p&2&&(r.url=s[1].url.href),e.$set(r);const D={};p&1&&(D.endpoint=s[0]),t.$set(D)},i(s){l||(b(e.$$.fragment,s),b(t.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),C(t.$$.fragment,s),l=!1},d(s){s&&d(a),O(e,s),O(t,s)}}}function ye(n,e,a){let t,l;Fe(n,He,p=>a(1,l=p));let{data:s}=e;return n.$$set=p=>{"data"in p&&a(2,s=p.data)},n.$$.update=()=>{n.$$.dirty&4&&a(0,{endpoint:t}=s,t)},[t,l,s]}class ft extends Te{constructor(e){super(),Ue(this,e,ye,Ze,Se,{data:2})}}export{ft as component};