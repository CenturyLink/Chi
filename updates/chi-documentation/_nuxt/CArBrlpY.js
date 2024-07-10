var m=Object.defineProperty;var v=(i,o,e)=>o in i?m(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e;var r=(i,o,e)=>v(i,typeof o!="symbol"?o+"":o,e);import{V as u,N as b}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as x}from"./BLbnEGma.js";import{_ as w}from"./DKu8Jd2y.js";import{o as f,f as C,w as d,b as _,a as c}from"./B5CYXVwa.js";import{_ as B}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var A=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(i,o,e,a)=>{for(var n=a>1?void 0:a?P(o,e):o,s=i.length-1,t;s>=0;s--)(t=i[s])&&(n=(a?t(o,e,n):t(n))||n);return a&&n&&A(o,e,n),n};let l=class extends u{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-portal-base">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 1</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 2</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 3</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 4</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  </div>

  <script>
  const accordionBase = document.getElementById('example-portal-base');

  chi.accordion(accordionBase);
  <//script>`})}mounted(){const e=document.getElementById("example-portal-base");chi.accordion(e)}};l=$([b({})],l);const N=c("div",{class:"chi-accordion",id:"example-portal-base"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 3"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 4"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function O(i,o,e,a,n,s){const t=g,h=x,p=w;return f(),C(p,{title:"Base",id:"base_portal",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{example:d(()=>[N]),"code-webcomponent":d(()=>[_(t,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[_(h),_(t,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=B(l,[["render",O]]);export{W as default};
