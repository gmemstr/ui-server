import{S as c,i as w,s as k,x as m,y as a,z as p,F as g,f,t as u,C as $,O as _,a as W,c as d,b as h,h as b}from"../../../../../../chunks/index-a7390e4f.js";import{p as y}from"../../../../../../chunks/stores-77f5a84f.js";import{w as x}from"../../../../../../chunks/workflow-run-85ecd4eb.js";import{W as C}from"../../../../../../chunks/workers-list-da681a59.js";import{P}from"../../../../../../chunks/page-title-803d169a.js";import"../../../../../../chunks/index-523d4e79.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/workflow-service-db97a79b.js";import"../../../../../../chunks/settings-73de400d.js";import"../../../../../../chunks/simplify-attributes-055c76f2.js";import"../../../../../../chunks/format-date-c1755997.js";import"../../../../../../chunks/format-time-d031c2bc.js";import"../../../../../../chunks/is-44021919.js";import"../../../../../../chunks/route-for-api-6aaa2188.js";import"../../../../../../chunks/route-for-ec0d3387.js";import"../../../../../../chunks/auth-user-ff2d5f64.js";import"../../../../../../chunks/persist-store-e90e9771.js";import"../../../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../../../chunks/notifications-c6db3b68.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/pollers-service-4f6bb656.js";import"../../../../../../chunks/is-http-23096744.js";import"../../../../../../chunks/get-codec-3c5a1e4e.js";import"../../../../../../chunks/data-converter-config-f8bd6697.js";import"../../../../../../chunks/atob-7f23bde9.js";import"../../../../../../chunks/icon-01236aa5.js";import"../../../../../../chunks/time-format-59a74e1e.js";import"../../../../../../chunks/empty-state-b93e948b.js";function Q(s){let e,o;return e=new C({props:{taskQueue:s[1].taskQueue,workers:s[0]}}),{c(){m(e.$$.fragment)},l(r){a(e.$$.fragment,r)},m(r,n){p(e,r,n),o=!0},p:g,i(r){o||(f(e.$$.fragment,r),o=!0)},o(r){u(e.$$.fragment,r),o=!1},d(r){$(e,r)}}}function R(s,e,o){let r;_(s,x,i=>o(2,r=i));const{workers:n,workflow:t}=r;return[n,t]}class S extends c{constructor(e){super(),w(this,e,R,Q,k,{})}}function q(s){let e,o,r,n;return e=new P({props:{title:`Workers | ${s[1]}`,url:s[0].url.href}}),r=new S({}),{c(){m(e.$$.fragment),o=W(),m(r.$$.fragment)},l(t){a(e.$$.fragment,t),o=d(t),a(r.$$.fragment,t)},m(t,i){p(e,t,i),h(t,o,i),p(r,t,i),n=!0},p(t,[i]){const l={};i&1&&(l.url=t[0].url.href),e.$set(l)},i(t){n||(f(e.$$.fragment,t),f(r.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),u(r.$$.fragment,t),n=!1},d(t){$(e,t),t&&b(o),$(r,t)}}}function v(s,e,o){let r;_(s,y,t=>o(0,r=t));const n=r.params.workflow;return[r,n]}class ir extends c{constructor(e){super(),w(this,e,v,q,k,{})}}export{ir as default};