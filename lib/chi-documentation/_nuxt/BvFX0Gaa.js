import{_ as p}from"./onyWiYp2.js";import{_ as v}from"./CS2TcPBX.js";import{_ as m}from"./CAQzZ0uH.js";import{e as u,f as b,g as x,o as A,h as g,w as o,a as c,b as n}from"./CEIPSiTs.js";const f={class:"chi-accordion -mt--2",ref:"expand-collapse-portal"},I=u({__name:"_expand_collapse_all",setup(C){const t=b("expand-collapse-portal"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<button class="chi-button" id="expand-all-portal">Expand all</button>
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
<\/script>`};let i;const l=()=>{i.expandAll()},r=()=>{i.collapseAll()};return x(()=>{t.value&&(i=chi.accordion(t.value))}),(w,d)=>{const e=p,_=v,h=m;return A(),g(h,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all_portal",tabs:s,padding:"-p--3 p-lg--6"},{example:o(()=>[c("button",{class:"chi-button -primary -outline",onClick:l,id:"expand-all-portal"},"Expand all"),c("button",{class:"chi-button -primary -outline -ml--1",onClick:r,id:"collapse-all-portal"},"Collapse all"),c("div",f,d[0]||(d[0]=[c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.2")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.2")])])])])])])])],-1)]),512)]),"code-webcomponent":o(()=>[n(e,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[n(_),n(e,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}});export{I as _};
