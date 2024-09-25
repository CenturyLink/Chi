var v=Object.defineProperty;var B=(t,o,n)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var i=(t,o,n)=>B(t,typeof o!="symbol"?o+"":o,n);import{V as g,N as x}from"./NAah3XrW.js";import{_ as z}from"./onyWiYp2.js";import{_ as w}from"./CAQzZ0uH.js";import{o as u,h as S,w as r,c,i as d,a as b,t as C,F as h,n as P,b as _}from"./CEIPSiTs.js";import{_ as $}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,O=(t,o,n,l)=>{for(var s=l>1?void 0:l?N(o,n):o,a=t.length-1,e;a>=0;a--)(e=t[a])&&(s=(l?e(o,n,s):e(s))||s);return l&&s&&H(o,n,s),s};let p=class extends g{constructor(){super(...arguments);i(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);i(this,"sizes",["xs","sm","md","lg"]);i(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>`})}};p=O([x({})],p);const V={class:"-text--bold"},y={class:"-d--flex -flex--wrap"},D={class:"chi-button-group"};function T(t,o,n,l,s,a){const e=z,f=w;return u(),S(f,{titleSize:"h4",title:"Horizontal",id:"horizontal-portal",tabs:t.exampleTabs},{example:r(()=>[(u(!0),c(h,null,d(t.sizes,m=>(u(),c("div",null,[b("p",V,"-"+C(m),1),b("div",y,[b("div",D,[(u(!0),c(h,null,d(Array(3).fill(0),j=>(u(),c("button",{class:P(`chi-button -${m}`)},"Button",2))),256))])])]))),256))]),"code-webcomponent":r(()=>[_(e,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(e,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=$(p,[["render",T]]);export{K as default};
