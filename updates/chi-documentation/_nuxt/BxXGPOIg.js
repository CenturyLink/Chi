import{V as d,N as _}from"./uJTUijt2.js";import{_ as b}from"./D8GK0F__.js";import{_ as h}from"./DKu8Jd2y.js";import{o as m,f as v,w as o,b as p,a as s}from"./B5CYXVwa.js";import{_ as g}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,P=(t,i,l,n)=>{for(var e=n>1?void 0:n?x(i,l):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,l,e):a(e))||e);return n&&e&&f(i,l,e),e};let r=class extends d{};r=P([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-pagination pages="12" current-page="3" results="240" size="xs"></chi-pagination>',htmlblueprint:`<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 Results</span>
      </div>
    </div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__label">
        <strong>3</strong>
        <span>of</span>
        <strong>12</strong>
      </div>
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>`,vue:'<ChiPagination :pages="3" :results="240" :currentPage="2" :compact="true" :firstLast="true" size="xs" />'}})})],r);const w=s("p",{class:"-text"},"Add a label to indicate the total number of results.",-1),C=s("div",{class:"chi-grid -no-gutter"},[s("div",{class:"chi-col -w--12"},[s("div",{class:"-p--3"},[s("chi-pagination",{pages:"12","current-page":"3",size:"xs",results:"240",compact:"","first-last":""})])])],-1);function L(t,i,l,n,e,c){const a=b,u=h;return m(),v(u,{title:"Results Label",id:"results-label-portal",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":o(()=>[w]),example:o(()=>[C]),"code-webcomponent":o(()=>[p(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":o(()=>[p(a,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[p(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const T=g(r,[["render",L]]);export{T as default};
