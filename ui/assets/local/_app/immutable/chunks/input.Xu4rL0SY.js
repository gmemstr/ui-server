import{s as Ce,A as ne,e as C,t as J,a as X,b as T,d as R,f as K,g as B,h as Y,j as g,B as c,C as fe,W as se,k as M,l as E,X as ce,m as P,D as de,Y as Te,n as w,E as De,F as he,o as Fe,c as Ne,G as Re,H as z,v as Ae}from"./scheduler.LRpOgQOC.js";import{S as He,i as Pe,t as N,g as ie,b as A,e as ue,c as x,a as $,m as ee,d as le}from"./index.dE1eZLcR.js";import{t as me,g as Se}from"./tw-merge.k1eX69SP.js";import{I as ae}from"./icon.20MpH96w.js";import{c as Ve}from"./copy-to-clipboard.KUAMjSLO.js";import{I as Ue}from"./icon-button.3FlyvFHk.js";function be(t){let e,l,n;return l=new ae({props:{name:t[5]}}),{c(){e=C("span"),x(l.$$.fragment),this.h()},l(i){e=T(i,"SPAN",{class:!0});var r=R(e);$(l.$$.fragment,r),r.forEach(B),this.h()},h(){g(e,"class","icon-container svelte-1ty8r43")},m(i,r){M(i,e,r),ee(l,e,null),n=!0},p(i,r){const h={};r[0]&32&&(h.name=i[5]),l.$set(h)},i(i){n||(N(l.$$.fragment,i),n=!0)},o(i){A(l.$$.fragment,i),n=!1},d(i){i&&B(e),le(l)}}}function je(t){let e,l,n;return l=new Ue({props:{label:t[23],icon:"close"}}),l.$on("click",t[27]),{c(){e=C("div"),x(l.$$.fragment),this.h()},l(i){e=T(i,"DIV",{class:!0,"data-testid":!0});var r=R(e);$(l.$$.fragment,r),r.forEach(B),this.h()},h(){g(e,"class","clear-icon-container svelte-1ty8r43"),g(e,"data-testid","clear-input")},m(i,r){M(i,e,r),ee(l,e,null),n=!0},p(i,r){const h={};r[0]&8388608&&(h.label=i[23]),l.$set(h)},i(i){n||(N(l.$$.fragment,i),n=!0)},o(i){A(l.$$.fragment,i),n=!1},d(i){i&&B(e),le(l)}}}function Ge(t){let e,l,n;return l=new ae({props:{name:"lock"}}),{c(){e=C("div"),x(l.$$.fragment),this.h()},l(i){e=T(i,"DIV",{class:!0});var r=R(e);$(l.$$.fragment,r),r.forEach(B),this.h()},h(){g(e,"class","disabled-icon-container svelte-1ty8r43")},m(i,r){M(i,e,r),ee(l,e,null),n=!0},p:Ae,i(i){n||(N(l.$$.fragment,i),n=!0)},o(i){A(l.$$.fragment,i),n=!1},d(i){i&&B(e),le(l)}}}function Me(t){let e,l,n,i,r,h,o;const m=[We,Oe],I=[];function _(s,q){return s[25]?0:1}return n=_(t),i=I[n]=m[n](t),{c(){e=C("div"),l=C("button"),i.c(),this.h()},l(s){e=T(s,"DIV",{class:!0});var q=R(e);l=T(q,"BUTTON",{"aria-label":!0,class:!0});var y=R(l);i.l(y),y.forEach(B),q.forEach(B),this.h()},h(){g(l,"aria-label",t[22]),g(l,"class","svelte-1ty8r43"),g(e,"class","copy-icon-container svelte-1ty8r43")},m(s,q){M(s,e,q),E(e,l),I[n].m(l,null),r=!0,h||(o=P(l,"click",t[39]),h=!0)},p(s,q){let y=n;n=_(s),n!==y&&(ie(),A(I[y],1,1,()=>{I[y]=null}),ue(),i=I[n],i||(i=I[n]=m[n](s),i.c()),N(i,1),i.m(l,null)),(!r||q[0]&4194304)&&g(l,"aria-label",s[22])},i(s){r||(N(i),r=!0)},o(s){A(i),r=!1},d(s){s&&B(e),I[n].d(),h=!1,o()}}}function Oe(t){let e,l;return e=new ae({props:{name:"copy"}}),{c(){x(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,i){ee(e,n,i),l=!0},i(n){l||(N(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){le(e,n)}}}function We(t){let e,l;return e=new ae({props:{name:"checkmark"}}),{c(){x(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,i){ee(e,n,i),l=!0},i(n){l||(N(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){le(e,n)}}}function _e(t){let e,l,n=t[1].length+"",i,r,h;return{c(){e=C("span"),l=C("span"),i=J(n),r=J("/"),h=J(t[14]),this.h()},l(o){e=T(o,"SPAN",{class:!0});var m=R(e);l=T(m,"SPAN",{class:!0});var I=R(l);i=K(I,n),I.forEach(B),r=K(m,"/"),h=K(m,t[14]),m.forEach(B),this.h()},h(){g(l,"class","svelte-1ty8r43"),c(l,"ok",t[14]-t[1].length>5),c(l,"warn",t[14]-t[1].length<=5),c(l,"error",t[14]===t[1].length),g(e,"class","count svelte-1ty8r43")},m(o,m){M(o,e,m),E(e,l),E(l,i),E(e,r),E(e,h)},p(o,m){m[0]&2&&n!==(n=o[1].length+"")&&w(i,n),m[0]&16386&&c(l,"ok",o[14]-o[1].length>5),m[0]&16386&&c(l,"warn",o[14]-o[1].length<=5),m[0]&16386&&c(l,"error",o[14]===o[1].length),m[0]&16384&&w(h,o[14])},d(o){o&&B(e)}}}function ge(t){let e,l;return{c(){e=C("div"),l=J(t[7]),this.h()},l(n){e=T(n,"DIV",{class:!0});var i=R(e);l=K(i,t[7]),i.forEach(B),this.h()},h(){g(e,"class","suffix svelte-1ty8r43")},m(n,i){M(n,e,i),E(e,l)},p(n,i){i[0]&128&&w(l,n[7])},d(n){n&&B(e)}}}function Xe(t){let e,l,n,i,r,h,o,m,I,_,s,q,y,S,k,V,U,j,d,O,Q,b=t[5]&&be(t),W=[{class:"input"},{disabled:t[0]},{"data-lpignore":"true"},{maxlength:m=t[14]>0?t[14]:void 0},{placeholder:t[6]},{id:t[2]},{name:t[8]},{spellcheck:t[16]},{required:t[21]},{autocomplete:t[11]},t[30]],G={};for(let u=0;u<W.length;u+=1)G=ne(G,W[u]);const Z=[Me,Ge,je],D=[];function p(u,f){return u[9]?0:u[0]?1:u[10]&&u[1]?2:-1}~(_=p(t))&&(s=D[_]=Z[_](t));let v=t[14]&&!t[0]&&!t[15]&&_e(t),L=t[7]&&ge(t);return{c(){e=C("div"),l=C("label"),n=J(t[3]),i=X(),r=C("div"),b&&b.c(),h=X(),o=C("input"),I=X(),s&&s.c(),q=X(),v&&v.c(),y=X(),L&&L.c(),S=X(),k=C("span"),V=J(t[13]),this.h()},l(u){e=T(u,"DIV",{class:!0});var f=R(e);l=T(f,"LABEL",{for:!0,class:!0});var H=R(l);n=K(H,t[3]),H.forEach(B),i=Y(f),r=T(f,"DIV",{class:!0});var F=R(r);b&&b.l(F),h=Y(F),o=T(F,"INPUT",{class:!0,"data-lpignore":!0,maxlength:!0,placeholder:!0,id:!0,name:!0,spellcheck:!0,autocomplete:!0}),I=Y(F),s&&s.l(F),q=Y(F),v&&v.l(F),y=Y(F),L&&L.l(F),F.forEach(B),S=Y(f),k=T(f,"SPAN",{class:!0,role:!0});var te=R(k);V=K(te,t[13]),te.forEach(B),f.forEach(B),this.h()},h(){g(l,"for",t[2]),g(l,"class","svelte-1ty8r43"),c(l,"required",t[21]),c(l,"sr-only",t[4]),fe(o,G),c(o,"disabled",t[0]),c(o,"svelte-1ty8r43",!0),g(r,"class","input-container svelte-1ty8r43"),c(r,"disabled",t[0]),c(r,"error",t[20]),c(r,"unroundRight",t[17]??t[7]),c(r,"unroundLeft",t[18]),c(r,"noBorder",t[19]),c(r,"invalid",!t[12]),g(k,"class","hint-text inline-block svelte-1ty8r43"),g(k,"role",U=t[20]?"alert":null),c(k,"invalid",!t[12]),c(k,"error",t[20]),c(k,"hidden",!t[13]),g(e,"class",j=se(me("flex flex-col gap-1",t[24]))+" svelte-1ty8r43")},m(u,f){M(u,e,f),E(e,l),E(l,n),E(e,i),E(e,r),b&&b.m(r,null),E(r,h),E(r,o),o.autofocus&&o.focus(),ce(o,t[1]),E(r,I),~_&&D[_].m(r,null),E(r,q),v&&v.m(r,null),E(r,y),L&&L.m(r,null),E(e,S),E(e,k),E(k,V),d=!0,O||(Q=[P(o,"input",t[38]),P(o,"click",de(t[32])),P(o,"input",t[33]),P(o,"keydown",de(t[34])),P(o,"change",t[35]),P(o,"focus",t[36]),P(o,"blur",t[37]),Te(t[26].call(null,o))],O=!0)},p(u,f){(!d||f[0]&8)&&w(n,u[3]),(!d||f[0]&4)&&g(l,"for",u[2]),(!d||f[0]&2097152)&&c(l,"required",u[21]),(!d||f[0]&16)&&c(l,"sr-only",u[4]),u[5]?b?(b.p(u,f),f[0]&32&&N(b,1)):(b=be(u),b.c(),N(b,1),b.m(r,h)):b&&(ie(),A(b,1,1,()=>{b=null}),ue()),fe(o,G=Se(W,[{class:"input"},(!d||f[0]&1)&&{disabled:u[0]},{"data-lpignore":"true"},(!d||f[0]&16384&&m!==(m=u[14]>0?u[14]:void 0))&&{maxlength:m},(!d||f[0]&64)&&{placeholder:u[6]},(!d||f[0]&4)&&{id:u[2]},(!d||f[0]&256)&&{name:u[8]},(!d||f[0]&65536)&&{spellcheck:u[16]},(!d||f[0]&2097152)&&{required:u[21]},(!d||f[0]&2048)&&{autocomplete:u[11]},f[0]&1073741824&&u[30]])),f[0]&2&&o.value!==u[1]&&ce(o,u[1]),c(o,"disabled",u[0]),c(o,"svelte-1ty8r43",!0);let H=_;_=p(u),_===H?~_&&D[_].p(u,f):(s&&(ie(),A(D[H],1,1,()=>{D[H]=null}),ue()),~_?(s=D[_],s?s.p(u,f):(s=D[_]=Z[_](u),s.c()),N(s,1),s.m(r,q)):s=null),u[14]&&!u[0]&&!u[15]?v?v.p(u,f):(v=_e(u),v.c(),v.m(r,y)):v&&(v.d(1),v=null),u[7]?L?L.p(u,f):(L=ge(u),L.c(),L.m(r,null)):L&&(L.d(1),L=null),(!d||f[0]&1)&&c(r,"disabled",u[0]),(!d||f[0]&1048576)&&c(r,"error",u[20]),(!d||f[0]&131200)&&c(r,"unroundRight",u[17]??u[7]),(!d||f[0]&262144)&&c(r,"unroundLeft",u[18]),(!d||f[0]&524288)&&c(r,"noBorder",u[19]),(!d||f[0]&4096)&&c(r,"invalid",!u[12]),(!d||f[0]&8192)&&w(V,u[13]),(!d||f[0]&1048576&&U!==(U=u[20]?"alert":null))&&g(k,"role",U),(!d||f[0]&4096)&&c(k,"invalid",!u[12]),(!d||f[0]&1048576)&&c(k,"error",u[20]),(!d||f[0]&8192)&&c(k,"hidden",!u[13]),(!d||f[0]&16777216&&j!==(j=se(me("flex flex-col gap-1",u[24]))+" svelte-1ty8r43"))&&g(e,"class",j)},i(u){d||(N(b),N(s),d=!0)},o(u){A(b),A(s),d=!1},d(u){u&&B(e),b&&b.d(),~_&&D[_].d(),v&&v.d(),L&&L.d(),O=!1,De(Q)}}}function Ye(t,e,l){const n=["id","value","label","labelHidden","icon","placeholder","suffix","name","copyable","disabled","clearable","autocomplete","valid","hintText","maxLength","hideCount","spellcheck","unroundRight","unroundLeft","noBorder","autoFocus","error","required","copyButtonLabel","clearButtonLabel","class"];let i=he(e,n),r,{id:h}=e,{value:o}=e,{label:m}=e,{labelHidden:I=!1}=e,{icon:_=null}=e,{placeholder:s=""}=e,{suffix:q=""}=e,{name:y=h}=e,{copyable:S=!1}=e,{disabled:k=!1}=e,{clearable:V=!1}=e,{autocomplete:U="off"}=e,{valid:j=!0}=e,{hintText:d=""}=e,{maxLength:O=0}=e,{hideCount:Q=!1}=e,{spellcheck:b=null}=e,{unroundRight:W=!1}=e,{unroundLeft:G=!1}=e,{noBorder:Z=!1}=e,{autoFocus:D=!1}=e,{error:p=!1}=e,{required:v=!1}=e,{copyButtonLabel:L=""}=e,{clearButtonLabel:u=""}=e,{class:f=""}=e;function H(a){D&&a&&a.focus()}const F=Fe();function te(){l(1,o=""),F("clear",{})}const{copy:re,copied:oe}=Ve();Ne(t,oe,a=>l(25,r=a));function ke(a){z.call(this,t,a)}function ve(a){z.call(this,t,a)}function Le(a){z.call(this,t,a)}function Be(a){z.call(this,t,a)}function Ee(a){z.call(this,t,a)}function Ie(a){z.call(this,t,a)}function qe(){o=this.value,l(1,o)}const ye=a=>re(a,o);return t.$$set=a=>{e=ne(ne({},e),Re(a)),l(30,i=he(e,n)),"id"in a&&l(2,h=a.id),"value"in a&&l(1,o=a.value),"label"in a&&l(3,m=a.label),"labelHidden"in a&&l(4,I=a.labelHidden),"icon"in a&&l(5,_=a.icon),"placeholder"in a&&l(6,s=a.placeholder),"suffix"in a&&l(7,q=a.suffix),"name"in a&&l(8,y=a.name),"copyable"in a&&l(9,S=a.copyable),"disabled"in a&&l(0,k=a.disabled),"clearable"in a&&l(10,V=a.clearable),"autocomplete"in a&&l(11,U=a.autocomplete),"valid"in a&&l(12,j=a.valid),"hintText"in a&&l(13,d=a.hintText),"maxLength"in a&&l(14,O=a.maxLength),"hideCount"in a&&l(15,Q=a.hideCount),"spellcheck"in a&&l(16,b=a.spellcheck),"unroundRight"in a&&l(17,W=a.unroundRight),"unroundLeft"in a&&l(18,G=a.unroundLeft),"noBorder"in a&&l(19,Z=a.noBorder),"autoFocus"in a&&l(31,D=a.autoFocus),"error"in a&&l(20,p=a.error),"required"in a&&l(21,v=a.required),"copyButtonLabel"in a&&l(22,L=a.copyButtonLabel),"clearButtonLabel"in a&&l(23,u=a.clearButtonLabel),"class"in a&&l(24,f=a.class)},t.$$.update=()=>{t.$$.dirty[0]&513&&l(0,k=k||S)},[k,o,h,m,I,_,s,q,y,S,V,U,j,d,O,Q,b,W,G,Z,p,v,L,u,f,r,H,te,re,oe,i,D,ke,ve,Le,Be,Ee,Ie,qe,ye]}class we extends He{constructor(e){super(),Pe(this,e,Ye,Xe,Ce,{id:2,value:1,label:3,labelHidden:4,icon:5,placeholder:6,suffix:7,name:8,copyable:9,disabled:0,clearable:10,autocomplete:11,valid:12,hintText:13,maxLength:14,hideCount:15,spellcheck:16,unroundRight:17,unroundLeft:18,noBorder:19,autoFocus:31,error:20,required:21,copyButtonLabel:22,clearButtonLabel:23,class:24},null,[-1,-1])}}export{we as I};