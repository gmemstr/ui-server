import{S as O,i as Q,s as X,e as E,t as Z,c as S,a as j,h as x,d,b as g,g as M,M as w,j as $,w as H,x as W,y as Y,q as m,o as I,B as J,T as A,k as U,m as V,R as C,Y as z,aa as B,n as D,p as P,G as ee,N as te,C as T,V as q,W as L}from"./index-c85ade65.js";import{c as ne}from"./copy-to-clipboard-b8e3d18c.js";import{I as K}from"./index-c8da0ebb.js";function R(i){let e,t;return{c(){e=E("label"),t=Z(i[2]),this.h()},l(l){e=S(l,"LABEL",{for:!0,class:!0});var a=j(e);t=x(a,i[2]),a.forEach(d),this.h()},h(){g(e,"for",i[1]),g(e,"class","svelte-19gnvcy")},m(l,a){M(l,e,a),w(e,t)},p(l,a){a&4&&$(t,l[2]),a&2&&g(e,"for",l[1])},d(l){l&&d(e)}}}function F(i){let e,t,l;return t=new K({props:{name:i[3],scale:.9,stroke:"currentcolor"}}),{c(){e=E("span"),H(t.$$.fragment),this.h()},l(a){e=S(a,"SPAN",{class:!0});var n=j(e);W(t.$$.fragment,n),n.forEach(d),this.h()},h(){g(e,"class","icon-container svelte-19gnvcy")},m(a,n){M(a,e,n),Y(t,e,null),l=!0},p(a,n){const v={};n&8&&(v.name=a[3]),t.$set(v)},i(a){l||(m(t.$$.fragment,a),l=!0)},o(a){I(t.$$.fragment,a),l=!1},d(a){a&&d(e),J(t)}}}function G(i){let e,t,l,a,n;return t=new K({props:{name:i[10]?"checkMark":"copy",stroke:"currentcolor"}}),{c(){e=E("div"),H(t.$$.fragment),this.h()},l(v){e=S(v,"DIV",{class:!0});var f=j(e);W(t.$$.fragment,f),f.forEach(d),this.h()},h(){g(e,"class","copy-icon-container svelte-19gnvcy")},m(v,f){M(v,e,f),Y(t,e,null),l=!0,a||(n=A(e,"click",i[11]),a=!0)},p(v,f){const b={};f&1024&&(b.name=v[10]?"checkMark":"copy"),t.$set(b)},i(v){l||(m(t.$$.fragment,v),l=!0)},o(v){I(t.$$.fragment,v),l=!1},d(v){v&&d(e),J(t),a=!1,n()}}}function le(i){let e,t,l,a,n,v,f,b,h,_,p,k,N,y=i[2]&&R(i),s=i[3]!==""&&F(i),u=i[6]&&G(i);return{c(){e=E("div"),y&&y.c(),t=U(),l=E("div"),s&&s.c(),a=U(),n=E("input"),b=U(),u&&u.c(),this.h()},l(c){e=S(c,"DIV",{class:!0});var r=j(e);y&&y.l(r),t=V(r),l=S(r,"DIV",{class:!0});var o=j(l);s&&s.l(o),a=V(o),n=S(o,"INPUT",{class:!0,"data-lpignore":!0,placeholder:!0,id:!0,name:!0,autocomplete:!0}),b=V(o),u&&u.l(o),o.forEach(d),r.forEach(d),this.h()},h(){g(n,"class","m-2 block w-full bg-white focus:outline-none svelte-19gnvcy"),n.disabled=v=i[7]||i[6],g(n,"data-lpignore","true"),g(n,"placeholder",i[4]),g(n,"id",i[1]),g(n,"name",i[5]),g(n,"autocomplete",f=i[9]?"on":"off"),C(n,"copyable",i[6]),g(l,"class",h="input-container w-full "+i[8]+" svelte-19gnvcy"),C(l,"copyable",i[6]),g(e,"class",_=z(i[13].class)+" svelte-19gnvcy")},m(c,r){M(c,e,r),y&&y.m(e,null),w(e,t),w(e,l),s&&s.m(l,null),w(l,a),w(l,n),B(n,i[0]),w(l,b),u&&u.m(l,null),p=!0,k||(N=[A(n,"input",i[16]),A(n,"input",i[14]),A(n,"change",i[15])],k=!0)},p(c,[r]){c[2]?y?y.p(c,r):(y=R(c),y.c(),y.m(e,t)):y&&(y.d(1),y=null),c[3]!==""?s?(s.p(c,r),r&8&&m(s,1)):(s=F(c),s.c(),m(s,1),s.m(l,a)):s&&(D(),I(s,1,1,()=>{s=null}),P()),(!p||r&192&&v!==(v=c[7]||c[6]))&&(n.disabled=v),(!p||r&16)&&g(n,"placeholder",c[4]),(!p||r&2)&&g(n,"id",c[1]),(!p||r&32)&&g(n,"name",c[5]),(!p||r&512&&f!==(f=c[9]?"on":"off"))&&g(n,"autocomplete",f),r&1&&n.value!==c[0]&&B(n,c[0]),r&64&&C(n,"copyable",c[6]),c[6]?u?(u.p(c,r),r&64&&m(u,1)):(u=G(c),u.c(),m(u,1),u.m(l,null)):u&&(D(),I(u,1,1,()=>{u=null}),P()),(!p||r&256&&h!==(h="input-container w-full "+c[8]+" svelte-19gnvcy"))&&g(l,"class",h),r&320&&C(l,"copyable",c[6]),(!p||r&8192&&_!==(_=z(c[13].class)+" svelte-19gnvcy"))&&g(e,"class",_)},i(c){p||(m(s),m(u),p=!0)},o(c){I(s),I(u),p=!1},d(c){c&&d(e),y&&y.d(),s&&s.d(),u&&u.d(),k=!1,ee(N)}}}function ie(i,e,t){let l,{id:a}=e,{value:n}=e,{label:v=""}=e,{icon:f=""}=e,{placeholder:b=""}=e,{name:h=a}=e,{copyable:_=!1}=e,{disabled:p=!1}=e,{theme:k="light"}=e,{autocomplete:N=!1}=e;const{copy:y,copied:s}=ne(n);te(i,s,o=>t(10,l=o));function u(o){L.call(this,i,o)}function c(o){L.call(this,i,o)}function r(){n=this.value,t(0,n)}return i.$$set=o=>{t(13,e=T(T({},e),q(o))),"id"in o&&t(1,a=o.id),"value"in o&&t(0,n=o.value),"label"in o&&t(2,v=o.label),"icon"in o&&t(3,f=o.icon),"placeholder"in o&&t(4,b=o.placeholder),"name"in o&&t(5,h=o.name),"copyable"in o&&t(6,_=o.copyable),"disabled"in o&&t(7,p=o.disabled),"theme"in o&&t(8,k=o.theme),"autocomplete"in o&&t(9,N=o.autocomplete)},e=q(e),[n,a,v,f,b,h,_,p,k,N,l,y,s,e,u,c,r]}class re extends O{constructor(e){super(),Q(this,e,ie,le,X,{id:1,value:0,label:2,icon:3,placeholder:4,name:5,copyable:6,disabled:7,theme:8,autocomplete:9})}}export{re as I};