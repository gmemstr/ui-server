import{S as c,i as w,s as k,x as m,y as a,z as p,F as g,f,t as u,C as $,O as _,a as W,c as d,b as h,h as b}from"../../../../../../chunks/index-6c7cd618.js";import{p as y}from"../../../../../../chunks/stores-1b77fd24.js";import{w as x}from"../../../../../../chunks/workflow-run-ad761541.js";import{W as C}from"../../../../../../chunks/workers-list-c1724356.js";import{P}from"../../../../../../chunks/page-title-c9788d56.js";import"../../../../../../chunks/index-f4b3dcfa.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/workflow-service-5eb5ccce.js";import"../../../../../../chunks/settings-5d5db197.js";import"../../../../../../chunks/simplify-attributes-e9cbffa0.js";import"../../../../../../chunks/format-date-8d85ffcd.js";import"../../../../../../chunks/format-time-63ab2d37.js";import"../../../../../../chunks/is-b4c8f655.js";import"../../../../../../chunks/route-for-api-413b73f0.js";import"../../../../../../chunks/route-for-369a155d.js";import"../../../../../../chunks/auth-user-83dbbca6.js";import"../../../../../../chunks/persist-store-df034bc4.js";import"../../../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../../../chunks/notifications-2d1563d2.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/pollers-service-5e54dc42.js";import"../../../../../../chunks/is-http-f051b645.js";import"../../../../../../chunks/get-codec-860ba82a.js";import"../../../../../../chunks/data-converter-config-45762687.js";import"../../../../../../chunks/atob-ffa71835.js";import"../../../../../../chunks/icon-5a9d4a54.js";import"../../../../../../chunks/time-format-7c07dd17.js";import"../../../../../../chunks/empty-state-dbfa258b.js";function Q(s){let e,o;return e=new C({props:{taskQueue:s[1].taskQueue,workers:s[0]}}),{c(){m(e.$$.fragment)},l(r){a(e.$$.fragment,r)},m(r,n){p(e,r,n),o=!0},p:g,i(r){o||(f(e.$$.fragment,r),o=!0)},o(r){u(e.$$.fragment,r),o=!1},d(r){$(e,r)}}}function R(s,e,o){let r;_(s,x,i=>o(2,r=i));const{workers:n,workflow:t}=r;return[n,t]}class S extends c{constructor(e){super(),w(this,e,R,Q,k,{})}}function q(s){let e,o,r,n;return e=new P({props:{title:`Workers | ${s[1]}`,url:s[0].url.href}}),r=new S({}),{c(){m(e.$$.fragment),o=W(),m(r.$$.fragment)},l(t){a(e.$$.fragment,t),o=d(t),a(r.$$.fragment,t)},m(t,i){p(e,t,i),h(t,o,i),p(r,t,i),n=!0},p(t,[i]){const l={};i&1&&(l.url=t[0].url.href),e.$set(l)},i(t){n||(f(e.$$.fragment,t),f(r.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),u(r.$$.fragment,t),n=!1},d(t){$(e,t),t&&b(o),$(r,t)}}}function v(s,e,o){let r;_(s,y,t=>o(0,r=t));const n=r.params.workflow;return[r,n]}class ir extends c{constructor(e){super(),w(this,e,v,q,k,{})}}export{ir as default};