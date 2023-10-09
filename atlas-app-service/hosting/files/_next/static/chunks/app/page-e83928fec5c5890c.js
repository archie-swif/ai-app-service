(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2324:function(e,t,n){Promise.resolve().then(n.bind(n,2787))},2787:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(7437),a=n(2265),o=n(2178),c=n(3239),i=JSON.parse('[{"role":"system","content":"You are a helpful movie database assistant. Use only information from the provided JSON documents containing details on movies. Each document contains a single movie, and information such as its title, release year, and cast."},{"role":"system","content":"Provide response texts with 500 symbols maximum"}]'),r=JSON.parse('{"temperature":0.5,"model":"gpt-4"}'),l=n(5983);function u(e){let{request:t,onResponse:n,searchContext:o=[],openai:c,model:u,name:d,temperature:m}=e,[p,f]=(0,a.useState)(""),[h,g]=(0,a.useState)("Hello! I'm a movie database assistant."),[v,y]=(0,a.useState)(i);async function x(e){e.preventDefault(),N(p)}function N(e){e&&""!==e.trim()&&(f(""),g("..."),S(e).then(e=>{g(e),n(d+": "+e)}))}async function S(e){try{let t=[...v,{role:"user",content:e}];console.log(t);let n=c.chat.completions.create({...r,model:u,messages:t,temperature:m}),s=await Promise.race([n,new Promise((e,t)=>{setTimeout(e,6e4,d+": *nods silently*")})]),a=s.choices[0].message;return t.push(a),y(t),a.content}catch(e){return console.error(e),"*confused*"}}return(0,a.useEffect)(()=>N(t),[t]),(0,a.useEffect)(()=>(function(e){let t=[...v,...o];y(t)})(0),[o]),(0,s.jsxs)("div",{className:"command-line",children:[(0,s.jsx)("span",{className:"prompt-icon",hidden:!!p,children:"☺"}),(0,s.jsx)("span",{className:"prompt-icon",hidden:!p,children:"$"}),(0,s.jsx)(l.Z,{rows:1,cols:50,autoCapitalize:"sentences",className:"command-input",placeholder:h,value:p,onChange:function(e){f(e.target.value)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||x(e)}})]})}let d=[{$search:{index:"plot_embedding_cosine",knnBeta:{vector:[],path:"plot_embedding",k:10}}},{$project:{_id:0,plot_embedding:0}}];function m(e){let{openai:t,mongoClient:n,onResponse:o}=e,[c,i]=(0,a.useState)(""),[r,u]=(0,a.useState)("Vector Search");async function m(e){let s=await t.embeddings.create({input:e,model:"text-embedding-ada-002"});return d[0].$search.knnBeta.vector=s.data[0].embedding,n.db("sample_mflix").collection("embedded_movies").aggregate(d)}async function p(e){e.preventDefault(),u("..."),i("");let t=await m(c);o(t);let n=t.map(e=>e.title).join("\n");u(n)}return(0,s.jsxs)("div",{className:"command-line",children:[(0,s.jsx)("span",{className:"prompt-icon",children:"░"}),(0,s.jsx)(l.Z,{rows:1,cols:50,autoCapitalize:"sentences",className:"command-input",autoFocus:!0,placeholder:r,value:c,onChange:function(e){i(e.target.value)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||p(e)}})]})}function p(e){let{saveKey:t}=e,[n,o]=(0,a.useState)("");async function c(e){e.preventDefault(),t(n)}return(0,s.jsxs)("div",{className:"command-line",children:[(0,s.jsx)("span",{className:"prompt-icon",children:"☼"}),(0,s.jsx)("form",{onSubmit:c,children:(0,s.jsx)("input",{size:100,type:"password",className:"command-input",autoFocus:!0,placeholder:"OpenAI Key -> Local Storage",onChange:function(e){o(e.target.value)}})})]})}function f(){let[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)([]),[r,l]=(0,a.useState)(),[d,f]=(0,a.useState)(),[h,g]=(0,a.useState)(!0),[v,y]=(0,a.useState)(!1),x=(0,a.useRef)();async function N(e){console.log(e);let t=e.map(e=>({role:"user",content:JSON.stringify(e)}));i(t)}async function S(e){console.log(e)}return(0,a.useEffect)(()=>{g(!1),x.current=localStorage.getItem("OPENAI_KEY")||""},[]),(0,a.useEffect)(()=>{let e=async()=>{let e=new c.gV({id:"ai-app-service-mxlkl"}),t=await e.logIn(c.cN.anonymous()),n=t.mongoClient("ai-app-service");l(n);let s=new o.ZP({apiKey:x.current||"",dangerouslyAllowBrowser:!0});f(s)};x&&e()},[v]),(0,s.jsx)("div",{className:"grid-container",children:(0,s.jsxs)("div",{className:"centered-div",hidden:h,children:[(0,s.jsx)("div",{hidden:!!x.current,children:(0,s.jsx)(p,{saveKey:e=>{y(!0),localStorage.setItem("OPENAI_KEY",e),x.current=e}})}),(0,s.jsxs)("div",{hidden:!x.current,children:[(0,s.jsx)(u,{name:"GPT",model:"gpt-3.5-turbo-16k",temperature:.5,request:e,searchContext:n,onResponse:S,openai:d}),(0,s.jsx)(m,{mongoClient:r,openai:d,onResponse:N})]})]})})}}},function(e){e.O(0,[649,981,971,596,744],function(){return e(e.s=2324)}),_N_E=e.O()}]);