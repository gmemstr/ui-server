import{r as Xe}from"../chunks/index.g5YcAAdQ.js";import{e as Qe,g as Le}from"../chunks/route-for.qyPdvGjv.js";import{s as Ve,h as C,b as V,j as q,k as O,f as h,d as j,m as v,i as B,p as Ye,L as Se,o as Ze,n as _,N as De,v as pe,c as Ee,T as xe,t as se,l as oe,q as Oe}from"../chunks/scheduler.DZa-jdu7.js";import{S as Ue,i as ye,c as D,a as E,m as P,t as d,b as g,d as Q,f as Pe,g as be,e as ke}from"../chunks/index.CUEbpWiv.js";import{p as Me}from"../chunks/stores.YNXuWUoI.js";import{P as et}from"../chunks/page-title.DJ_bSvKb.js";import{g as tt}from"../chunks/entry.KnDkSfj0.js";import{A as rt}from"../chunks/add-search-attributes.CZJmFAnL.js";import{A as Ce}from"../chunks/alert.DrB0jXqN.js";import{B as je}from"../chunks/button.Do4luqyw.js";import{C as nt}from"../chunks/code-block.BchYSPaM.js";import{I as lt}from"../chunks/icon.C0Tk12cs.js";import{t as ue}from"../chunks/translate.BBe5dcco.js";import{t as at,v as st}from"../chunks/toaster.CyHyu9oh.js";import{I as We}from"../chunks/input.C1KiyaNE.js";import{L as ot}from"../chunks/label.By2pxx_p.js";import{L as Ke}from"../chunks/link.2KzGm6-O.js";import{T as ut}from"../chunks/tooltip.CrC1KHqK.js";import{g as ft}from"../chunks/pollers-service.Y00kVqFo.js";import{e as it,g as ct,h as mt}from"../chunks/workflows.jLVC5zXG.js";import{c as pt}from"../chunks/search-attributes.qjECPg-H.js";import{p as Fe}from"../chunks/format-time.DYlkplr6.js";import{u as Re}from"../chunks/update-query-parameters.Cphkvhqi.js";import{w as dt}from"../chunks/workflow-create-disabled.Do_xTxga.js";const $t=async function({params:n,parent:t}){if((await t()).settings.startWorkflowDisabled){const{namespace:e}=n;Xe(302,Qe({namespace:e}))}},tr=Object.freeze(Object.defineProperty({__proto__:null,load:$t},Symbol.toStringTag,{value:"Module"}));function gt(n){let t,r,e,a,l,o,i;return r=new lt({props:{name:"upload"}}),{c(){t=C("label"),D(r.$$.fragment),e=V(),a=C("input"),this.h()},l(u){t=q(u,"LABEL",{for:!0,class:!0});var m=O(t);E(r.$$.fragment,m),m.forEach(h),e=j(u),a=q(u,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),this.h()},h(){v(t,"for",n[0]),v(t,"class","file-upload-label svelte-nqh6y4"),v(a,"id",n[0]),v(a,"class","hidden"),v(a,"type","file"),v(a,"accept",n[1])},m(u,m){B(u,t,m),P(r,t,null),B(u,e,m),B(u,a,m),l=!0,o||(i=Ye(a,"change",n[2]),o=!0)},p(u,[m]){(!l||m&1)&&v(t,"for",u[0]),(!l||m&1)&&v(a,"id",u[0]),(!l||m&2)&&v(a,"accept",u[1])},i(u){l||(d(r.$$.fragment,u),l=!0)},o(u){g(r.$$.fragment,u),l=!1},d(u){u&&(h(t),h(e),h(a)),Q(r),o=!1,i()}}}function _t(n,t,r){let{id:e}=t,{accept:a=".json"}=t,{onUpload:l}=t;const o=async i=>{var u;const m=i.target,c=(u=m==null?void 0:m.files)===null||u===void 0?void 0:u[0],$=new FileReader;c&&($.readAsText(c),$.onload=()=>{var w,b;try{const z=(b=(w=$==null?void 0:$.result)===null||w===void 0?void 0:w.toString())!==null&&b!==void 0?b:"";l(z)}catch{at.push({variant:"error",message:ue("common.upload-error")})}})};return n.$$set=i=>{"id"in i&&r(0,e=i.id),"accept"in i&&r(1,a=i.accept),"onUpload"in i&&r(3,l=i.onUpload)},[e,a,o,l]}class wt extends Ue{constructor(t){super(),ye(this,t,_t,gt,Ve,{id:0,accept:1,onUpload:3})}}function ht(n){let t=ue("workflows.back-to-workflows")+"",r;return{c(){r=se(t)},l(e){r=oe(e,t)},m(e,a){B(e,r,a)},p:pe,d(e){e&&h(r)}}}function bt(n){let t;return{c(){t=se("Random UUID")},l(r){t=oe(r,"Random UUID")},m(r,e){B(r,t,e)},d(r){r&&h(t)}}}function Ne(n){let t,r;return t=new Ce({props:{intent:n[7]>0?"success":"warning",title:n[7]?"Task Queue is Active":"Task Queue is Inactive",$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){D(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p(e,a){const l={};a[0]&128&&(l.intent=e[7]>0?"success":"warning"),a[0]&128&&(l.title=e[7]?"Task Queue is Active":"Task Queue is Inactive"),a[0]&2178|a[1]&16&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){Q(t,e)}}}function kt(n){let t;return{c(){t=se("View Task Queue")},l(r){t=oe(r,"View Task Queue")},m(r,e){B(r,t,e)},d(r){r&&h(t)}}}function vt(n){let t,r,e,a,l=Fe("Worker",n[7])+"",o,i,u,m;return u=new Ke({props:{href:Le({namespace:n[11],queue:n[1]}),newTab:!0,$$slots:{default:[kt]},$$scope:{ctx:n}}}),{c(){t=C("div"),r=C("p"),e=se(n[7]),a=V(),o=se(l),i=V(),D(u.$$.fragment),this.h()},l(c){t=q(c,"DIV",{class:!0});var $=O(t);r=q($,"P",{});var w=O(r);e=oe(w,n[7]),a=j(w),o=oe(w,l),w.forEach(h),i=j($),E(u.$$.fragment,$),$.forEach(h),this.h()},h(){v(t,"class","flex w-full items-center justify-between")},m(c,$){B(c,t,$),_(t,r),_(r,e),_(r,a),_(r,o),_(t,i),P(u,t,null),m=!0},p(c,$){(!m||$[0]&128)&&Oe(e,c[7]),(!m||$[0]&128)&&l!==(l=Fe("Worker",c[7])+"")&&Oe(o,l);const w={};$[0]&2050&&(w.href=Le({namespace:c[11],queue:c[1]})),$[1]&16&&(w.$$scope={dirty:$,ctx:c}),u.$set(w)},i(c){m||(d(u.$$.fragment,c),m=!0)},o(c){g(u.$$.fragment,c),m=!1},d(c){c&&h(t),Q(u)}}}function It(n){let t,r;return t=new wt({props:{id:"start-workflow-input-file-upload",onUpload:n[17]}}),{c(){D(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p:pe,i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){Q(t,e)}}}function Be(n){let t,r;return t=new nt({props:{id:"workflow-input",minHeight:120,content:n[3],editable:!0,copyable:!1}}),t.$on("change",n[13]),{c(){D(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p(e,a){const l={};a[0]&8&&(l.content=e[3]),t.$set(l)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){Q(t,e)}}}function ze(n){let t,r;return t=new Ce({props:{intent:"error",title:ue("common.input-valid-json")}}),{c(){D(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p:pe,i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){Q(t,e)}}}function He(n){let t,r,e;function a(o){n[26](o)}let l={};return n[9]!==void 0&&(l.attributesToAdd=n[9]),t=new rt({props:l}),Se.push(()=>Pe(t,"attributesToAdd",a)),{c(){D(t.$$.fragment)},l(o){E(t.$$.fragment,o)},m(o,i){P(t,o,i),e=!0},p(o,i){const u={};!r&&i[0]&512&&(r=!0,u.attributesToAdd=o[9],De(()=>r=!1)),t.$set(u)},i(o){e||(d(t.$$.fragment,o),e=!0)},o(o){g(t.$$.fragment,o),e=!1},d(o){Q(t,o)}}}function Tt(n){let t=ue("common.more-options")+"",r;return{c(){r=se(t)},l(e){r=oe(e,t)},m(e,a){B(e,r,a)},p:pe,d(e){e&&h(r)}}}function At(n){let t=ue("workflows.start-workflow")+"",r;return{c(){r=se(t)},l(e){r=oe(e,t)},m(e,a){B(e,r,a)},p:pe,d(e){e&&h(r)}}}function Je(n){let t,r;return t=new Ce({props:{intent:"error",title:n[6]}}),{c(){D(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p(e,a){const l={};a[0]&64&&(l.title=e[6]),t.$set(l)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){Q(t,e)}}}function St(n){let t,r,e,a,l,o,i="Start a Workflow",u,m,c,$,w,b,z,H,U,fe,ne,le,W,J,de,x,y,M,X,ee,K,$e,ve=n[5],ie,ge,ce,G,F,_e,R,f,N;e=new Ke({props:{href:`${Qe({namespace:n[11]})}?${n[12]}`,"data-testid":"back-to-workflows",icon:"chevron-left",$$slots:{default:[ht]},$$scope:{ctx:n}}});function Y(s){n[20](s)}let Ie={id:"workflowId",required:!0,label:"Workflow ID",class:"w-full grow"};n[0]!==void 0&&(Ie.value=n[0]),c=new We({props:Ie}),Se.push(()=>Pe(c,"value",Y)),c.$on("blur",n[21]),b=new je({props:{class:"mt-0 md:mt-6",variant:"secondary",leadingIcon:"retry",$$slots:{default:[bt]},$$scope:{ctx:n}}}),b.$on("click",n[15]);function Te(s){n[22](s)}let Ae={id:"taskQueue",required:!0,label:"Task Queue",class:"grow"};n[1]!==void 0&&(Ae.value=n[1]),U=new We({props:Ae}),Se.push(()=>Pe(U,"value",Te)),U.$on("blur",n[23]);let I=n[7]!==void 0&&Ne(n);function Ge(s){n[24](s)}let qe={id:"workflowType",required:!0,label:"Workflow Type"};n[2]!==void 0&&(qe.value=n[2]),W=new We({props:qe}),Se.push(()=>Pe(W,"value",Ge)),W.$on("blur",n[25]),X=new ot({props:{for:"workflow-input",label:ue("workflows.input")}}),K=new ut({props:{text:ue("common.upload-json"),left:!0,$$slots:{default:[It]},$$scope:{ctx:n}}});let L=Be(n),T=!n[4]&&ze(),A=n[8]&&He(n);F=new je({props:{variant:"ghost",trailingIcon:n[8]?"chevron-up":"chevron-down",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),F.$on("click",n[27]),R=new je({props:{disabled:!n[10],"data-testid":"start-workflow-button",$$slots:{default:[At]},$$scope:{ctx:n}}}),R.$on("click",n[14]);let S=n[6]&&Je(n);return{c(){t=C("div"),r=C("div"),D(e.$$.fragment),a=V(),l=C("div"),o=C("h1"),o.textContent=i,u=V(),m=C("div"),D(c.$$.fragment),w=V(),D(b.$$.fragment),z=V(),H=C("div"),D(U.$$.fragment),ne=V(),I&&I.c(),le=V(),D(W.$$.fragment),de=V(),x=C("div"),y=C("div"),M=C("div"),D(X.$$.fragment),ee=V(),D(K.$$.fragment),$e=V(),L.c(),ie=V(),T&&T.c(),ge=V(),A&&A.c(),ce=V(),G=C("div"),D(F.$$.fragment),_e=V(),D(R.$$.fragment),f=V(),S&&S.c(),this.h()},l(s){t=q(s,"DIV",{class:!0});var p=O(t);r=q(p,"DIV",{class:!0});var me=O(r);E(e.$$.fragment,me),me.forEach(h),a=j(p),l=q(p,"DIV",{class:!0});var k=O(l);o=q(k,"H1",{class:!0,"data-testid":!0,"data-svelte-h":!0}),Ze(o)!=="svelte-8dv4qj"&&(o.textContent=i),u=j(k),m=q(k,"DIV",{class:!0});var ae=O(m);E(c.$$.fragment,ae),w=j(ae),E(b.$$.fragment,ae),ae.forEach(h),z=j(k),H=q(k,"DIV",{class:!0});var we=O(H);E(U.$$.fragment,we),we.forEach(h),ne=j(k),I&&I.l(k),le=j(k),E(W.$$.fragment,k),de=j(k),x=q(k,"DIV",{class:!0});var he=O(x);y=q(he,"DIV",{class:!0});var Z=O(y);M=q(Z,"DIV",{class:!0});var te=O(M);E(X.$$.fragment,te),ee=j(te),E(K.$$.fragment,te),te.forEach(h),$e=j(Z),L.l(Z),ie=j(Z),T&&T.l(Z),Z.forEach(h),he.forEach(h),ge=j(k),A&&A.l(k),ce=j(k),G=q(k,"DIV",{class:!0});var re=O(G);E(F.$$.fragment,re),_e=j(re),E(R.$$.fragment,re),re.forEach(h),f=j(k),S&&S.l(k),k.forEach(h),p.forEach(h),this.h()},h(){v(r,"class","mb-6 flex w-full items-start"),v(o,"class","mb-4 overflow-hidden"),v(o,"data-testid","start-workflow"),v(m,"class","flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-4"),v(H,"class","flex w-full items-center justify-between gap-4"),v(M,"class","flex w-full items-end justify-between"),v(y,"class","flex w-full flex-col gap-2"),v(x,"class","flex w-full flex-col items-end justify-between gap-4 md:flex-row"),v(G,"class","mt-4 flex w-full justify-between"),v(l,"class","flex w-full flex-col gap-4 lg:w-2/3 2xl:w-1/2"),v(t,"class","flex w-full flex-col items-center pb-24")},m(s,p){B(s,t,p),_(t,r),P(e,r,null),_(t,a),_(t,l),_(l,o),_(l,u),_(l,m),P(c,m,null),_(m,w),P(b,m,null),_(l,z),_(l,H),P(U,H,null),_(l,ne),I&&I.m(l,null),_(l,le),P(W,l,null),_(l,de),_(l,x),_(x,y),_(y,M),P(X,M,null),_(M,ee),P(K,M,null),_(y,$e),L.m(y,null),_(y,ie),T&&T.m(y,null),_(l,ge),A&&A.m(l,null),_(l,ce),_(l,G),P(F,G,null),_(G,_e),P(R,G,null),_(l,f),S&&S.m(l,null),N=!0},p(s,p){const me={};p[0]&6144&&(me.href=`${Qe({namespace:s[11]})}?${s[12]}`),p[1]&16&&(me.$$scope={dirty:p,ctx:s}),e.$set(me);const k={};!$&&p[0]&1&&($=!0,k.value=s[0],De(()=>$=!1)),c.$set(k);const ae={};p[1]&16&&(ae.$$scope={dirty:p,ctx:s}),b.$set(ae);const we={};!fe&&p[0]&2&&(fe=!0,we.value=s[1],De(()=>fe=!1)),U.$set(we),s[7]!==void 0?I?(I.p(s,p),p[0]&128&&d(I,1)):(I=Ne(s),I.c(),d(I,1),I.m(l,le)):I&&(be(),g(I,1,1,()=>{I=null}),ke());const he={};!J&&p[0]&4&&(J=!0,he.value=s[2],De(()=>J=!1)),W.$set(he);const Z={};p[1]&16&&(Z.$$scope={dirty:p,ctx:s}),K.$set(Z),p[0]&32&&Ve(ve,ve=s[5])?(be(),g(L,1,1,pe),ke(),L=Be(s),L.c(),d(L,1),L.m(y,ie)):L.p(s,p),s[4]?T&&(be(),g(T,1,1,()=>{T=null}),ke()):T?(T.p(s,p),p[0]&16&&d(T,1)):(T=ze(),T.c(),d(T,1),T.m(y,null)),s[8]?A?(A.p(s,p),p[0]&256&&d(A,1)):(A=He(s),A.c(),d(A,1),A.m(l,ce)):A&&(be(),g(A,1,1,()=>{A=null}),ke());const te={};p[0]&256&&(te.trailingIcon=s[8]?"chevron-up":"chevron-down"),p[1]&16&&(te.$$scope={dirty:p,ctx:s}),F.$set(te);const re={};p[0]&1024&&(re.disabled=!s[10]),p[1]&16&&(re.$$scope={dirty:p,ctx:s}),R.$set(re),s[6]?S?(S.p(s,p),p[0]&64&&d(S,1)):(S=Je(s),S.c(),d(S,1),S.m(l,null)):S&&(be(),g(S,1,1,()=>{S=null}),ke())},i(s){N||(d(e.$$.fragment,s),d(c.$$.fragment,s),d(b.$$.fragment,s),d(U.$$.fragment,s),d(I),d(W.$$.fragment,s),d(X.$$.fragment,s),d(K.$$.fragment,s),d(L),d(T),d(A),d(F.$$.fragment,s),d(R.$$.fragment,s),d(S),N=!0)},o(s){g(e.$$.fragment,s),g(c.$$.fragment,s),g(b.$$.fragment,s),g(U.$$.fragment,s),g(I),g(W.$$.fragment,s),g(X.$$.fragment,s),g(K.$$.fragment,s),g(L),g(T),g(A),g(F.$$.fragment,s),g(R.$$.fragment,s),g(S),N=!1},d(s){s&&h(t),Q(e),Q(c),Q(b),Q(U),I&&I.d(),Q(W),Q(X),Q(K),L.d(s),T&&T.d(),A&&A.d(),Q(F),Q(R),S&&S.d()}}}function Dt(n,t,r){let e,a,l,o,i,u,m;Ee(n,Me,f=>r(19,i=f)),Ee(n,pt,f=>r(31,u=f)),Ee(n,it,f=>r(12,m=f));let c="",$="",w="",b="",z=0,H="",U="",fe="",ne="",le,W=!1,J=[];xe(()=>{r(0,c=i.url.searchParams.get("workflowId")||""),r(1,$=i.url.searchParams.get("taskQueue")||""),r(2,w=i.url.searchParams.get("workflowType")||""),H=i.url.searchParams.get("workflowId")||"",U=i.url.searchParams.get("workflowType")||"",(H||U)&&X(H,U)});const de=f=>{r(3,b=f.detail)},x=async()=>{try{r(6,ne=""),await mt({namespace:e,workflowId:c,taskQueue:$,workflowType:w,input:b,searchAttributes:J}),tt(Qe({namespace:e}))}catch(f){r(6,ne=(f==null?void 0:f.message)||"Error start Workflow")}},y=()=>{r(0,c=st()),Re({parameter:"workflowId",value:c,url:i.url,allowEmpty:!0})},M=async f=>{if(f){const{pollers:N}=await ft({namespace:e,queue:f});r(7,le=N.length)}},X=async(f,N)=>{const Y=await ct({namespace:e,workflowId:f,workflowType:N});if(fe=Y.input,r(3,b=fe),r(5,z=Date.now()),Y!=null&&Y.searchAttributes){const Ie=Object.keys(u);Object.entries(Y.searchAttributes).forEach(([Te,Ae])=>{Ie.includes(Te)&&r(9,J=[...J,{attribute:Te,value:String(Ae)}])}),r(8,W=!0)}},ee=(f,N)=>{const Y=f.target.value;Re({parameter:N,value:Y,url:i.url,allowEmpty:!0})},K=f=>{r(3,b=f),r(5,z=Date.now())},$e=f=>{try{return JSON.parse(f),!0}catch{return!1}};function ve(f){c=f,r(0,c)}const ie=f=>ee(f,"workflowId");function ge(f){$=f,r(1,$)}const ce=f=>ee(f,"taskQueue");function G(f){w=f,r(2,w)}const F=f=>ee(f,"workflowType");function _e(f){J=f,r(9,J)}const R=()=>r(8,W=!W);return n.$$.update=()=>{n.$$.dirty[0]&524288&&r(11,{namespace:e}=i.params,e),n.$$.dirty[0]&524288&&r(18,a=i.url.searchParams.get("taskQueue")),n.$$.dirty[0]&8&&r(4,l=!b||$e(b)),n.$$.dirty[0]&524311&&r(10,o=!!c&&!!$&&!!w&&!!l&&!dt(i)),n.$$.dirty[0]&262144&&M(a)},[c,$,w,b,l,z,ne,le,W,J,o,e,m,de,x,y,ee,K,a,i,ve,ie,ge,ce,G,F,_e,R]}class Et extends Ue{constructor(t){super(),ye(this,t,Dt,St,Ve,{},null,[-1,-1])}}function Pt(n){let t,r,e,a;return t=new et({props:{title:"Start Workflow",url:n[0].url.href}}),e=new Et({}),{c(){D(t.$$.fragment),r=V(),D(e.$$.fragment)},l(l){E(t.$$.fragment,l),r=j(l),E(e.$$.fragment,l)},m(l,o){P(t,l,o),B(l,r,o),P(e,l,o),a=!0},p(l,[o]){const i={};o&1&&(i.url=l[0].url.href),t.$set(i)},i(l){a||(d(t.$$.fragment,l),d(e.$$.fragment,l),a=!0)},o(l){g(t.$$.fragment,l),g(e.$$.fragment,l),a=!1},d(l){l&&h(r),Q(t,l),Q(e,l)}}}function Qt(n,t,r){let e;return Ee(n,Me,a=>r(0,e=a)),[e]}class rr extends Ue{constructor(t){super(),ye(this,t,Qt,Pt,Ve,{})}}export{rr as component,tr as universal};