var f=Object.defineProperty;var B=(t,o,n)=>o in t?f(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var a=(t,o,n)=>B(t,typeof o!="symbol"?o+"":o,n);import{V as g,N as x}from"./NAah3XrW.js";import{_ as w}from"./onyWiYp2.js";import{_ as S}from"./CAQzZ0uH.js";import{o as u,h as V,w as r,c,i as d,a as b,t as C,F as h,n as P,b as v}from"./CEIPSiTs.js";import{_ as $}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var z=Object.defineProperty,y=Object.getOwnPropertyDescriptor,N=(t,o,n,l)=>{for(var e=l>1?void 0:l?y(o,n):o,i=t.length-1,s;i>=0;i--)(s=t[i])&&(e=(l?s(o,n,e):s(e))||e);return l&&e&&z(o,n,e),e};let p=class extends g{constructor(){super(...arguments);a(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);a(this,"sizes",["xs","sm","md","lg"]);a(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>`})}};p=N([x({})],p);const O={class:"-text--bold"},D={class:"-d--flex -flex--wrap"},T={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}};function j(t,o,n,l,e,i){const s=w,_=S;return u(),V(_,{titleSize:"h4",title:"Vertical",id:"vertical-portal",tabs:t.exampleTabs},{example:r(()=>[(u(!0),c(h,null,d(t.sizes,m=>(u(),c("div",null,[b("p",O,"-"+C(m),1),b("div",D,[b("div",T,[(u(!0),c(h,null,d(Array(3).fill(0),E=>(u(),c("button",{class:P(`chi-button -${m}`)},"Button",2))),256))])])]))),256))]),"code-webcomponent":r(()=>[v(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[v(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=$(p,[["render",j]]);export{K as default};
