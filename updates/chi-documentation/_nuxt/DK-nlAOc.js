var m=Object.defineProperty;var v=(i,o,n)=>o in i?m(i,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[o]=n;var d=(i,o,n)=>v(i,typeof o!="symbol"?o+"":o,n);import{V as u,N as b}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as x}from"./BLbnEGma.js";import{_ as C}from"./DKu8Jd2y.js";import{o as w,f,w as s,b as _,a as c}from"./B5CYXVwa.js";import{_ as A}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var P=Object.defineProperty,B=Object.getOwnPropertyDescriptor,$=(i,o,n,a)=>{for(var e=a>1?void 0:a?B(o,n):o,r=i.length-1,t;r>=0;r--)(t=i[r])&&(e=(a?t(o,n,e):t(e))||e);return a&&e&&P(o,n,e),e};let l=class extends u{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-accordion -card" id="example-portal-card">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 2</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 3</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 4</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionCard = document.getElementById('example-portal-card');

  chi.accordion(accordionCard);
<\/script>`})}mounted(){const n=document.getElementById("example-portal-card");chi.accordion(n)}};l=$([b({})],l);const N=c("div",{class:"chi-accordion -card",id:"example-portal-card"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 3")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 4")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function O(i,o,n,a,e,r){const t=g,h=x,p=C;return w(),f(p,{title:"Card",id:"card_portal",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{example:s(()=>[N]),"code-webcomponent":s(()=>[_(t,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[_(h),_(t,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=A(l,[["render",O]]);export{W as default};
