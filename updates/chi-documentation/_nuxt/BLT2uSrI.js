var p=Object.defineProperty;var m=(o,i,n)=>i in o?p(o,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[i]=n;var s=(o,i,n)=>m(o,typeof i!="symbol"?i+"":i,n);import{V as u,N as g}from"./uJTUijt2.js";import{_ as b}from"./D8GK0F__.js";import{_ as x}from"./BLbnEGma.js";import{_ as w}from"./DKu8Jd2y.js";import{o as C,f,w as r,b as _,a as c}from"./B5CYXVwa.js";import{_ as A}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var N=Object.defineProperty,P=Object.getOwnPropertyDescriptor,B=(o,i,n,d)=>{for(var t=d>1?void 0:d?P(i,n):i,a=o.length-1,e;a>=0;a--)(e=o[a])&&(t=(d?e(i,n,t):e(t))||t);return d&&t&&N(i,n,t),t};let l=class extends u{constructor(){super(...arguments);s(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);s(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-portal-nested">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Click me to expand Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 1.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                  <div class="chi-accordion">
                    <div class="chi-accordion__item">
                      <button class="chi-accordion__trigger">
                        <div class="chi-accordion__title">Accordion 1.1.1</div>
                        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                      </button>
                      <div class="chi-accordion__content">
                        <p class="chi-accordion__text">Content goes here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 1.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 2.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const accordionNested = document.getElementById('example-portal-nested');

  chi.accordion(accordionNested);
<//script>`})}mounted(){const n=document.getElementById("example-portal-nested");chi.accordion(n)}};l=B([g({})],l);const $=c("div",{class:"chi-accordion",id:"example-portal-nested"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Click me to expand Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1.1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 2.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])])])])])],-1);function O(o,i,n,d,t,a){const e=b,h=x,v=w;return C(),f(v,{title:"Nested",id:"nested_portal",tabs:o.exampleTabs,padding:"-p--3 -p-lg--6"},{example:r(()=>[$]),"code-webcomponent":r(()=>[_(e,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(h),_(e,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=A(l,[["render",O]]);export{W as default};
