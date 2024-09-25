var m=Object.defineProperty;var b=(o,i,t)=>i in o?m(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t;var s=(o,i,t)=>b(o,typeof i!="symbol"?i+"":i,t);import{V as x,N as g}from"./NAah3XrW.js";import{_ as f}from"./onyWiYp2.js";import{_ as A}from"./CAQzZ0uH.js";import{o as l,h as y,w as h,a as c,c as p,i as w,n as F,t as C,F as B,b as v}from"./CEIPSiTs.js";import{_ as E}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,S=(o,i,t,a)=>{for(var e=a>1?void 0:a?$(i,t):i,r=o.length-1,n;r>=0;r--)(n=o[r])&&(e=(a?n(i,t,e):n(e))||e);return a&&e&&P(i,t,e),e};let _=class extends x{constructor(){super(...arguments);s(this,"accordionIndexes");s(this,"exampleTabs");s(this,"codeSnippets",{webcomponent:`<chi-popover position="top" title="Filter" variant="custom" modal drag closable active prevent-auto-hide>
  <button class="chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal" id="example-expand-all">Expand All</button>
  <div class="chi-accordion -sm" id="example-base">
    <div class="chi-accordion__item -expanded">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 1</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 2</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 3</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 4</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 5</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 6</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 7</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 8</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 9</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 10</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 11</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
  </div>
  <button class="chi-button -flat -icon -xs -py--0" slot="chi-popover__footer" data-tooltip="Clear all filters">
    <div class="chi-button__content -flex--column -align-items--center">
      <i class="chi-icon icon-reset -sm--2 -mr--0"></i>
      <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
    </div>
  </button>
  <div class="chi-divider -vertical" slot="chi-popover__footer"></div>
  <chi-button slot="chi-popover__footer">Cancel</chi-button>
  <chi-button slot="chi-popover__footer" color="primary">Apply</chi-button>
</chi-popover>

<script>
  const accordionBase = document.getElementById('example-base');
  const expandAll = document.getElementById("example-expand-all");

  const expandAccordion = chi.accordion(accordionBase);

  expandAll.addEventListener("click", () => {
    expandAccordion.expandAll();
  });

  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`,htmlblueprint:`<section class="chi-popover -active -closable -draggable -modal" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <button class="chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal" id="example-expand-all">Expand All</button>
    <div class="chi-accordion -sm" id="example-base">
      <div class="chi-accordion__item -expanded">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 1</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 2</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 3</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 4</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-popover__footer">
    <button class="chi-button -flat -icon -xs -py--0" data-tooltip="Clear all filters">
      <div class="chi-button__content -flex--column -align-items--center">
        <i class="chi-icon icon-reset -sm--2 -mr--0"></i>
        <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
      </div>
    </button>
    <div class="chi-divider -vertical"></div>
    <button class="chi-button">Cancel</button>
    <button class="chi-button -primary">Apply</button>
  </div>
</section>

<script>
  const accordionBase = document.getElementById('example-base');
  const expandAll = document.getElementById("example-expand-all");

  const expandAccordion = chi.accordion(accordionBase);

  expandAll.addEventListener("click", () => {
    expandAccordion.expandAll();
  });

  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`});s(this,"accordion")}mounted(){this.accordion=chi.accordion(this.$refs.accordion),chi.tooltip(this.$refs.tooltipButton)}expandAll(){var t;(t=this.accordion)==null||t.expandAll()}};_=S([g({})],_);const T={class:"-position--relative",style:{height:"640px"}},I={position:"top",title:"Filter",variant:"custom",modal:"",drag:"",closable:"",active:"","prevent-auto-hide":""},N={class:"chi-accordion -sm",ref:"accordion"},O={class:"chi-accordion__trigger"},V={class:"chi-accordion__title"},D={slot:"chi-popover__footer"},L={class:"chi-button -flat -icon -xs -py--0",ref:"tooltipButton","data-tooltip":"Clear all filters"};function j(o,i,t,a,e,r){const n=f,u=A;return l(),y(u,{titleSize:"h4",title:"Table filtering",id:"table-filtering-portal",tabs:o.exampleTabs},{example:h(()=>[c("div",T,[c("chi-popover",I,[c("button",{class:"chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal",onClick:i[0]||(i[0]=(...d)=>o.expandAll&&o.expandAll(...d))},"Expand All"),c("div",N,[(l(!0),p(B,null,w(o.accordionIndexes,d=>(l(),p("div",{class:F(["chi-accordion__item",d==="1"?"-expanded":""])},[c("button",O,[c("div",V,"Accordion "+C(d),1),i[1]||(i[1]=c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i[2]||(i[2]=c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Filter content goes here")],-1))],2))),256))],512),c("div",D,[c("button",L,i[3]||(i[3]=[c("div",{class:"chi-button__content -flex--column -align-items--center"},[c("i",{class:"chi-icon icon-reset -sm--2 -mr--0"}),c("span",{class:"-text--uppercase -text--primary -text--2xs"},"Clear")],-1)]),512)]),i[4]||(i[4]=c("div",{slot:"chi-popover__footer"},[c("div",{class:"chi-divider -vertical"}),c("chi-button",null,"Cancel"),c("chi-button",{color:"primary"},"Apply")],-1))])])]),"code-webcomponent":h(()=>[v(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[v(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=E(_,[["render",j]]);export{U as default};
