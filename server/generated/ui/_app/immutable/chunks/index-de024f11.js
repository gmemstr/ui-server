function x(){}const J=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function Et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ut(t){return t()}function ot(){return Object.create(null)}function A(t){t.forEach(ut)}function D(t){return typeof t=="function"}function Yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Zt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function Ct(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function te(t){let e;return ft(t,n=>e=n)(),e}function ee(t,e,n){t.$$.on_destroy.push(ft(e,n))}function ne(t,e,n,i){if(t){const s=dt(t,e,n,i);return t[0](s)}}function dt(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,c){if(s){const r=dt(e,n,i,c);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function oe(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function le(t){const e={};for(const n in t)e[n]=!0;return e}function ae(t){return t==null?"":t}function ue(t,e,n){return t.set(n),e}const St=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function fe(t){return t&&D(t.destroy)?t.destroy:x}const _t=typeof window<"u";let K=_t?()=>window.performance.now():()=>Date.now(),tt=_t?t=>requestAnimationFrame(t):x;const j=new Set;function ht(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&tt(ht)}function Q(t){let e;return j.size===0&&tt(ht),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let U=!1;function At(){U=!0}function jt(){U=!1}function Nt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:Nt(1,s,u=>e[n[u]].claim_order,a))-1;i[o]=n[d]+1;const f=d+1;n[f]=o,s=Math.max(f,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(r[o],d)}}function pt(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ot(t){const e=et("style");return Pt(mt(t),e),e.sheet}function Pt(t,e){pt(t.head||t,e)}function Rt(t,e){if(U){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function de(t,e,n){U&&!n?Rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode.removeChild(t)}function _e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function he(t,e){const n={};for(const i in t)St(t,i)&&e.indexOf(i)===-1&&(n[i]=t[i]);return n}function qt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function pe(){return nt(" ")}function me(){return nt("")}function lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ye(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ge(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function be(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Dt(t,i,e[i])}function zt(t){return Array.from(t.childNodes)}function Tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function gt(t,e,n,i,s=!1){Tt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function bt(t,e,n,i){return gt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function we(t,e,n){return bt(t,e,n,et)}function xe(t,e,n){return bt(t,e,n,qt)}function Bt(t,e){return gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function $e(t){return Bt(t," ")}function ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e==null?"":e}function Ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ce(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Se(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let L;function Lt(){if(L===void 0){L=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{L=!0}}return L}function Ae(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=et("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Lt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=lt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=lt(i.contentWindow,"resize",e)}),pt(t,i),()=>{(s||c&&i.contentWindow)&&c(),yt(i)}}function je(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}const H=new Map;let G=0;function Wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function It(t,e){const n={stylesheet:Ot(e),rules:{}};return H.set(t,n),n}function P(t,e,n,i,s,c,r,l=0){const o=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);a+=p*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Wt(d)}_${l}`,u=mt(t),{stylesheet:_,rules:h}=H.get(u)||It(u,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,G+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),G-=s,G||Ft())}function Ft(){tt(()=>{G||(H.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),H.clear())})}function Me(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:c=0,duration:r=300,easing:l=J,start:o=K()+c,end:a=o+r,tick:d=x,css:f}=n(t,{from:e,to:s},i);let u=!0,_=!1,h;function m(){f&&(h=P(t,0,1,r,c,l,f)),c||(_=!0)}function p(){f&&R(t,h),u=!1}return Q(g=>{if(!_&&g>=o&&(_=!0),_&&g>=a&&(d(1,0),p()),!u)return!1;if(_){const b=g-o,w=0+1*l(b/r);d(w,1-w)}return!0}),m(),d(0,1),p}function Oe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ht(t,s)}}function Ht(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function E(t){q=t}function C(){if(!q)throw new Error("Function called outside component initialization");return q}function Pe(t){C().$$.on_mount.push(t)}function Re(t){C().$$.after_update.push(t)}function qe(t){C().$$.on_destroy.push(t)}function De(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=wt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ze(t,e){return C().$$.context.set(t,e),e}function Te(t){return C().$$.context.get(t)}function Be(t){return C().$$.context.has(t)}function Le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const O=[],at=[],I=[],Y=[],xt=Promise.resolve();let Z=!1;function $t(){Z||(Z=!0,xt.then(it))}function We(){return $t(),xt}function N(t){I.push(t)}function Ie(t){Y.push(t)}const X=new Set;let W=0;function it(){const t=q;do{for(;W<O.length;){const e=O[W];W++,E(e),Gt(e.$$)}for(E(null),O.length=0,W=0;at.length;)at.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];X.has(n)||(X.add(n),n())}I.length=0}while(O.length);for(;Y.length;)Y.pop()();Z=!1,X.clear(),E(t)}function Gt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let M;function st(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function S(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const F=new Set;let v;function Jt(){v={r:0,c:[],p:v}}function Kt(){v.r||A(v.c),v=v.p}function rt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),v.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ct={duration:0};function Fe(t,e,n){let i=e(t,n),s=!1,c,r,l=0;function o(){c&&R(t,c)}function a(){const{delay:f=0,duration:u=300,easing:_=J,tick:h=x,css:m}=i||ct;m&&(c=P(t,0,1,u,f,_,m,l++)),h(0,1);const p=K()+f,g=p+u;r&&r.abort(),s=!0,N(()=>S(t,!0,"start")),r=Q(b=>{if(s){if(b>=g)return h(1,0),S(t,!0,"end"),o(),s=!1;if(b>=p){const w=_((b-p)/u);h(w,1-w)}}return s})}let d=!1;return{start(){d||(d=!0,R(t),D(i)?(i=i(),st().then(a)):a())},invalidate(){d=!1},end(){s&&(o(),s=!1)}}}function He(t,e,n){let i=e(t,n),s=!0,c;const r=v;r.r+=1;function l(){const{delay:o=0,duration:a=300,easing:d=J,tick:f=x,css:u}=i||ct;u&&(c=P(t,1,0,a,o,d,u));const _=K()+o,h=_+a;N(()=>S(t,!1,"start")),Q(m=>{if(s){if(m>=h)return f(0,1),S(t,!1,"end"),--r.r||A(r.c),!1;if(m>=_){const p=d((m-_)/a);f(1-p,p)}}return s})}return D(i)?st().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),s&&(c&&R(t,c),s=!1)}}}function Ge(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,l=null,o=null;function a(){o&&R(t,o)}function d(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function f(u){const{delay:_=0,duration:h=300,easing:m=J,tick:p=x,css:g}=s||ct,b={start:K()+_,b:u};u||(b.group=v,v.r+=1),r||l?l=b:(g&&(a(),o=P(t,c,u,h,_,m,g)),u&&p(0,1),r=d(b,h),N(()=>S(t,u,"start")),Q(w=>{if(l&&w>l.start&&(r=d(l,h),l=null,S(t,r.b,"start"),g&&(a(),o=P(t,c,r.b,r.duration,0,m,s.css))),r){if(w>=r.end)p(c=r.b,1-c),S(t,r.b,"end"),l||(r.b?a():--r.group.r||A(r.group.c)),r=null;else if(w>=r.start){const z=w-r.start;c=r.a+r.d*m(z/r.duration),p(c,1-c)}}return!!(r||l)}))}return{run(u){D(s)?st().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=l=null}}}function Je(t,e){const n=e.token={};function i(s,c,r,l){if(e.token!==n)return;e.resolved=l;let o=e.ctx;r!==void 0&&(o=o.slice(),o[r]=l);const a=s&&(e.current=s)(o);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==c&&f&&(Jt(),kt(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Kt())}):e.block.d(1),a.c(),rt(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[c]=a),d&&it()}if(Et(t)){const s=C();if(t.then(c=>{E(s),i(e.then,1,e.value,c),E(null)},c=>{if(E(s),i(e.catch,2,e.error,c),E(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ke(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ue(t,e){t.d(1),e.delete(t.key)}function Qt(t,e){kt(t,1,1,()=>{e.delete(t.key)})}function Ve(t,e){t.f(),Qt(t,e)}function Xe(t,e,n,i,s,c,r,l,o,a,d,f){let u=t.length,_=c.length,h=u;const m={};for(;h--;)m[t[h].key]=h;const p=[],g=new Map,b=new Map;for(h=_;h--;){const y=f(s,c,h),$=n(y);let k=r.get($);k?i&&k.p(y,e):(k=a($,y),k.c()),g.set($,p[h]=k),$ in m&&b.set($,Math.abs(h-m[$]))}const w=new Set,z=new Set;function V(y){rt(y,1),y.m(l,d),r.set(y.key,y),d=y.first,_--}for(;u&&_;){const y=p[_-1],$=t[u-1],k=y.key,T=$.key;y===$?(d=y.first,u--,_--):g.has(T)?!r.has(k)||w.has(k)?V(y):z.has(T)?u--:b.get(k)>b.get(T)?(z.add(k),V(y)):(w.add(T),u--):(o($,r),u--)}for(;u--;){const y=t[u];g.has(y.key)||o(y,r)}for(;_;)V(p[_-1]);return p}function Ye(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ze(t){return typeof t=="object"&&t!==null?t:{}}function tn(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function en(t){t&&t.c()}function nn(t,e){t&&t.l(e)}function Ut(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||N(()=>{const o=c.map(ut).filter(D);r?r.push(...o):A(o),t.$$.on_mount=[]}),l.forEach(N)}function Vt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(O.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function sn(t,e,n,i,s,c,r,l=[-1]){const o=q;E(t);const a=t.$$={fragment:null,ctx:null,props:c,update:x,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ot(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,..._)=>{const h=_.length?_[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&Xt(t,f)),u}):[],a.update(),d=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){At();const f=zt(e.target);a.fragment&&a.fragment.l(f),f.forEach(yt)}else a.fragment&&a.fragment.c();e.intro&&rt(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),jt(),it()}E(o)}class rn{$destroy(){Vt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{at as $,Ze as A,Vt as B,vt as C,We as D,x as E,ft as F,A as G,D as H,ne as I,se as J,re as K,ie as L,Rt as M,ee as N,De as O,Te as P,be as Q,je as R,rn as S,lt as T,ge as U,ce as V,Le as W,Je as X,ve as Y,fe as Z,Ke as _,pe as a,_e as a0,ae as a1,oe as a2,ue as a3,Qe as a4,Zt as a5,te as a6,tn as a7,Ie as a8,qt as a9,xe as aa,Xe as ab,Oe as ac,Ht as ad,Me as ae,N as af,Fe as ag,He as ah,Ve as ai,Ne as aj,J as ak,le as al,Be as am,qe as an,Qt as ao,he as ap,Ae as aq,Ue as ar,ye as as,Ce as at,Se as au,Ge as av,de as b,$e as c,Kt as d,me as e,rt as f,Jt as g,yt as h,sn as i,ze as j,Re as k,et as l,we as m,zt as n,Pe as o,Dt as p,Ee as q,nt as r,Yt as s,kt as t,Bt as u,ke as v,en as w,nn as x,Ut as y,Ye as z};