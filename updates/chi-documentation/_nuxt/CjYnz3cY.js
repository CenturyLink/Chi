var B=Object.defineProperty;var f=(t,o,n)=>o in t?B(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var c=(t,o,n)=>f(t,typeof o!="symbol"?o+"":o,n);import{V as x,N as g}from"./uJTUijt2.js";import{_ as z}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{o as u,f as S,w as r,c as i,i as d,a as b,t as C,F as h,n as P,b as _}from"./B5CYXVwa.js";import{_ as $}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,O=(t,o,n,l)=>{for(var s=l>1?void 0:l?N(o,n):o,a=t.length-1,e;a>=0;a--)(e=t[a])&&(s=(l?e(o,n,s):e(s))||s);return l&&s&&H(o,n,s),s};let p=class extends x{constructor(){super(...arguments);c(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);c(this,"sizes",["xs","sm","md","lg"]);c(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`})}};p=O([g({})],p);const V={class:"-text--bold"},y={class:"-d--flex -flex--wrap"},D={class:"chi-button-group"};function T(t,o,n,l,s,a){const e=z,v=w;return u(),S(v,{titleSize:"h4",title:"Horizontal",id:"horizontal-portal",tabs:t.exampleTabs},{example:r(()=>[(u(!0),i(h,null,d(t.sizes,m=>(u(),i("div",null,[b("p",V,"-"+C(m),1),b("div",y,[b("div",D,[(u(!0),i(h,null,d(Array(3).fill(0),j=>(u(),i("button",{class:P(`chi-button -${m}`)},"Button",2))),256))])])]))),256))]),"code-webcomponent":r(()=>[_(e,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(e,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=$(p,[["render",T]]);export{K as default};
