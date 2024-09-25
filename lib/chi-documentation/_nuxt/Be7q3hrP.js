var S=Object.defineProperty;var g=(l,e,t)=>e in l?S(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var p=(l,e,t)=>g(l,typeof e!="symbol"?e+"":e,t);import{V as w,N as $}from"./NAah3XrW.js";import{_ as C}from"./onyWiYp2.js";import{_ as L}from"./CAQzZ0uH.js";import{o as r,h as P,w as d,a as s,d as a,c as b,i as h,n as B,t as u,F as f,b as x}from"./CEIPSiTs.js";import{_ as N}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,V=(l,e,t,c)=>{for(var o=c>1?void 0:c?T(e,t):e,n=l.length-1,i;n>=0;n--)(i=l[n])&&(o=(c?i(e,t,o):i(o))||o);return c&&o&&O(e,t,o),o};let _=class extends w{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs - Select -</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm - Select -</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md - Select -</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg - Select -</option>
  </select>
</div>`});p(this,"sizes",["xs","sm","md","lg"])}};_=V([$({})],_);const y={class:"-p--2"},D={class:"chi-form__item",style:{"max-width":"20rem"}},j=["for"],E=["id"],F={value:"",selected:"",disabled:"",hidden:""};function H(l,e,t,c,o,n){const i=C,v=L;return r(),P(v,{title:"Sizes",id:"sizes-portal",tabs:l.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[s("p",{class:"-text"},[a("Selects support the following sizes: "),s("code",null,"-xs"),a(", "),s("code",null,"-sm"),a(", "),s("code",null,"-md"),a(", "),s("code",null,"-lg"),a(". The default size is "),s("code",null,"-md"),a(".")],-1)])),example:d(()=>[(r(!0),b(f,null,h(l.sizes,m=>(r(),b("div",y,[s("div",D,[s("label",{class:"chi-label",for:`example-size-${m}`},"Label",8,j),s("select",{class:B(`chi-select -${m}`),id:`example-size-${m}`},[s("option",F,"-"+u(m)+" - Select -",1),(r(),b(f,null,h([1,2,3],z=>s("option",null,"Option "+u(z),1)),64))],10,E)])]))),256))]),"code-webcomponent":d(()=>[x(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[x(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=N(_,[["render",H]]);export{U as default};
