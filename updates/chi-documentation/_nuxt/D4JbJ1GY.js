var m=Object.defineProperty;var u=(o,i,n)=>i in o?m(o,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[i]=n;var l=(o,i,n)=>u(o,typeof i!="symbol"?i+"":i,n);import{V as b,N as A}from"./uJTUijt2.js";import{_ as x}from"./D8GK0F__.js";import{_ as g}from"./BLbnEGma.js";import{_ as C}from"./DKu8Jd2y.js";import{o as f,f as w,w as r,a as c,b as _}from"./B5CYXVwa.js";import{_ as E}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var B=Object.defineProperty,y=Object.getOwnPropertyDescriptor,P=(o,i,n,d)=>{for(var t=d>1?void 0:d?y(i,n):i,e=o.length-1,a;e>=0;e--)(a=o[e])&&(t=(d?a(i,n,t):a(t))||t);return d&&t&&B(i,n,t),t};let p=class extends b{constructor(){super(...arguments);l(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<button class="chi-button" id="expand-all-portal">Expand all</button>
<button class="chi-button" id="collapse-all-portal">Collapse all</button>

<div class="chi-accordion" id="expand-collapse-portal">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 1.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 1.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 2.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 2.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.2</p>
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
  const expandCollapseAccordion = chi.accordion(document.getElementById("expand-collapse-portal"));
  const expandAll = document.getElementById("expand-all-portal");
  const collapseAll = document.getElementById("collapse-all-portal");

  expandAll.addEventListener("click", () => {
    expandCollapseAccordion.expandAll();
  });

  collapseAll.addEventListener("click", () => {
    expandCollapseAccordion.collapseAll();
  });
<\/script>`});l(this,"accordion")}expandAll(){this.accordion.expandAll()}collapseAll(){this.accordion.collapseAll()}mounted(){const n=document.getElementById("expand-collapse-portal");this.accordion=chi.accordion(n)}};p=P([A({})],p);const $=c("div",{class:"chi-accordion -mt--2",id:"expand-collapse-portal"},[c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.2")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.2")])])])])])])])])],-1);function N(o,i,n,d,t,e){const a=x,h=g,v=C;return f(),w(v,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all_portal",tabs:o.exampleTabs,padding:"-p--3 p-lg--6"},{example:r(()=>[c("button",{class:"chi-button -primary -outline",onClick:i[0]||(i[0]=(...s)=>o.expandAll&&o.expandAll(...s)),id:"expand-all-portal"},"Expand all"),c("button",{class:"chi-button -primary -outline -ml--1",onClick:i[1]||(i[1]=(...s)=>o.collapseAll&&o.collapseAll(...s)),id:"collapse-all-portal"},"Collapse all"),$]),"code-webcomponent":r(()=>[_(a,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(h),_(a,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=E(p,[["render",N]]);export{W as default};
