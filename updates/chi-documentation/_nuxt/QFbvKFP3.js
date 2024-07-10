var u=Object.defineProperty;var v=(c,e,i)=>e in c?u(c,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[e]=i;var r=(c,e,i)=>v(c,typeof e!="symbol"?e+"":e,i);import{V as b,N as x}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as f}from"./BLbnEGma.js";import{_ as z}from"./DKu8Jd2y.js";import{o as w,f as C,w as d,b as l,a as o,d as p}from"./B5CYXVwa.js";import{_ as B}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var S=Object.defineProperty,P=Object.getOwnPropertyDescriptor,N=(c,e,i,s)=>{for(var t=s>1?void 0:s?P(e,i):e,a=c.length-1,n;a>=0;a--)(n=c[a])&&(t=(s?n(e,i,t):n(t))||t);return s&&t&&S(e,i,t),t};let _=class extends b{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- sm-->
<div class="chi-accordion -sm" id="portal-example-size-sm">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- md-->
<div class="chi-accordion -md" id="portal-example-size-md">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>


<script>
  chi.accordion(document.getElementById('portal-example-size-sm'));
  chi.accordion(document.getElementById('portal-example-size-md'));
<\/script>`})}mounted(){chi.accordion(document.getElementById("portal-example-size-sm")),chi.accordion(document.getElementById("portal-example-size-md"))}};_=N([x({})],_);const $=o("p",{class:"-text"},[p("Accordion supports the following sizes: "),o("code",null,"sm"),p(", "),o("code",null,"md"),p(" (default).")],-1),y=o("p",{class:"-text--bold -pl--2"},"sm",-1),A=o("div",{class:"chi-accordion -sm",id:"portal-example-size-sm"},[o("div",{class:"chi-accordion__item"},[o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Content goes here")])])],-1),E=o("p",{class:"-text--bold -pl--2"},"md",-1),V=o("div",{class:"chi-accordion -md",id:"portal-example-size-md"},[o("div",{class:"chi-accordion__item"},[o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function I(c,e,i,s,t,a){const n=g,m=f,h=z;return w(),C(h,{title:"Sizes",id:"sizes_portal",tabs:c.exampleTabs,padding:"-p--3 -p-lg--6"},{"example-description":d(()=>[$]),example:d(()=>[y,A,E,V]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(m),l(n,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=B(_,[["render",I]]);export{K as default};
