import{b as B}from"./decode-payload.c080df9d.js";import{c as p}from"./has.8da86d13.js";import{K as Q,n as d}from"./index.d29c66be.js";import{s as R}from"./settings.a68ca666.js";import{s as U}from"./simplify-attributes.28929a11.js";import{r as l,a as f,b as $,i as q,c as N}from"./route-for-api.93962e9b.js";import{t as _}from"./list-workflow-query.b569745d.js";import{s as y}from"./parse-with-big-int.02af2f95.js";import{B as j}from"./route-for.ca9daa69.js";import{v as D}from"./toaster.fda31b2d.js";const L=(o=R)=>!Q(o).disableWriteActions,K=(o=[])=>o.map(t=>{const n=U(t,!0),r=t.activityId;return{...n,id:r}}),G=o=>p(o)||p(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:B(e)}),{})},x=o=>{var I,g,T,b,W,A;const t=G(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,a=o.workflowExecutionInfo.closeTime,c=o.workflowExecutionInfo.executionTime,u=o.workflowExecutionInfo.status,w=o.workflowExecutionInfo.status==="Running",h=o.workflowExecutionInfo.historyLength,E=o.workflowExecutionInfo.historySizeBytes,s=`/workflows/${r}/${e}`,k=((g=(I=o==null?void 0:o.executionConfig)==null?void 0:I.taskQueue)==null?void 0:g.name)||((T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.taskQueue),m=(b=o==null?void 0:o.workflowExecutionInfo)==null?void 0:b.parentNamespaceId,S=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.parentExecution,v=o.workflowExecutionInfo.stateTransitionCount,C=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,O=K(o.pendingActivities),z=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:a,executionTime:c,status:u,historyEvents:h,historySizeBytes:E,searchAttributes:t,url:s,taskQueue:k,pendingActivities:O,pendingChildren:z,parentNamespaceId:m,parent:S,stateTransitionCount:v,isRunning:w,defaultWorkflowTaskTimeout:C,get canBeTerminated(){return w&&L()}}},F=o=>(o.executions||[]).map(t=>x({workflowExecutionInfo:t})),H=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),P=(o,t=j)=>t?H(o):o,io=async(o,t,n=fetch)=>{let r=0,e=0;try{const i=l("workflows.count",{namespace:o});if(t){const a=f(i,{params:{query:t},onError:d,handleError:d,request:n}),c=f(i,{params:{query:""},onError:d,handleError:d,request:n}),[u,w]=await Promise.all([a,c]);e=parseInt(u==null?void 0:u.count),r=parseInt(w==null?void 0:w.count)}else{const a=await f(i,{params:{},onError:d,handleError:d,request:n});r=parseInt(a==null?void 0:a.count)}}catch{}return{count:e,totalCount:r}},J=async(o,t,n=fetch,r=!1)=>{const e=t.query||_(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const a=r?"workflows.archived":"workflows";let c="";const u=s=>{var k,m;$(s),(k=s==null?void 0:s.body)!=null&&k.message||s!=null&&s.status?c=((m=s==null?void 0:s.body)==null?void 0:m.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:c="Error fetching workflows: Server failed to respond"},w=l(a,{namespace:o}),{executions:h,nextPageToken:E}=await f(w,{params:{query:i},onError:u,handleError:u,request:n})??{executions:[],nextPageToken:""};return{workflows:F({executions:h}),nextPageToken:String(E),error:c}},co=async(o,t=fetch)=>{var u;const{namespace:n,workflowId:r}=o,i=l("workflows",{namespace:n}),{executions:a}=await f(i,{params:{query:`WorkflowId="${r}"`,pageSize:"1"},request:t})??{executions:[]},c=(u=F({executions:a}))==null?void 0:u[0];return{runId:c==null?void 0:c.runId}},ao=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=c=>{(q(c)||N(c))&&(e=!1)},a=l(r,{namespace:o});return await f(a,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},so=async(o,t,n=fetch)=>J(o,t,n,!0);async function fo(o,t=fetch){const n=l("workflow",o);return f(n,{request:t}).then(x)}async function uo({workflow:o,namespace:t,reason:n,identity:r}){const e=l("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await f(e,{options:{method:"POST",body:y({reason:n,...r&&{identity:r}})},notifyOnError:!1})}async function lo({namespace:o,workflowId:t,runId:n},r=fetch){const e=l("workflow.cancel",{namespace:o,workflowId:t,runId:n});return f(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function wo({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e}){const i=l("workflow.signal",{namespace:o,workflowId:t,runId:n});return f(i,{notifyOnError:!1,options:{method:"POST",body:y({signalName:r,input:{payloads:e?[{metadata:{encoding:P("json/plain")},data:P(e)}]:null}})}})}async function ko({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const a=l("workflow.reset",{namespace:o,workflowId:t,runId:n}),c={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:D(),reason:e};return f(a,{notifyOnError:!1,options:{method:"POST",body:y(c)}})}async function mo(o,t=fetch){const n=e=>{console.error(e)},r=l("workflow",o);return f(r,{request:t,onError:n,handleError:n}).then(x)}export{J as a,io as b,lo as c,ao as d,so as e,fo as f,mo as g,co as h,ko as r,wo as s,uo as t,L as w};