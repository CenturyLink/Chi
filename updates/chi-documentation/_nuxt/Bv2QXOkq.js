var f=Object.defineProperty;var B=(t,o,n)=>o in t?f(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var i=(t,o,n)=>B(t,typeof o!="symbol"?o+"":o,n);import{V as x,N as g}from"./uJTUijt2.js";import{_ as w}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{o as u,f as V,w as r,c as a,i as d,a as b,t as C,F as h,n as P,b as _}from"./B5CYXVwa.js";import{_ as z}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var $=Object.defineProperty,y=Object.getOwnPropertyDescriptor,N=(t,o,n,l)=>{for(var e=l>1?void 0:l?y(o,n):o,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(o,n,e):s(e))||e);return l&&e&&$(o,n,e),e};let p=class extends x{constructor(){super(...arguments);i(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);i(this,"sizes",["xs","sm","md","lg"]);i(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`})}};p=N([g({})],p);const O={class:"-text--bold"},D={class:"-d--flex -flex--wrap"},T={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}};function j(t,o,n,l,e,c){const s=w,v=S;return u(),V(v,{titleSize:"h4",title:"Vertical",id:"vertical-portal",tabs:t.exampleTabs},{example:r(()=>[(u(!0),a(h,null,d(t.sizes,m=>(u(),a("div",null,[b("p",O,"-"+C(m),1),b("div",D,[b("div",T,[(u(!0),a(h,null,d(Array(3).fill(0),E=>(u(),a("button",{class:P(`chi-button -${m}`)},"Button",2))),256))])])]))),256))]),"code-webcomponent":r(()=>[_(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=z(p,[["render",j]]);export{K as default};
