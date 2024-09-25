import{V as u,N as m}from"./NAah3XrW.js";import{_ as g}from"./onyWiYp2.js";import{_ as h}from"./CAQzZ0uH.js";import{o as b,h as v,w as c,a as p,b as r}from"./CEIPSiTs.js";import{_}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,P=(t,e,n,o)=>{for(var a=o>1?void 0:o?x(e,n):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(a=(o?i(e,n,a):i(a))||a);return o&&a&&f(e,n,a),a};let l=class extends u{};l=P([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="3" current-page="2" size="xs" compact first-last></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="3" current-page="2" size="xs" compact inverse></chi-pagination>`,htmlblueprint:`<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__label">
        <strong>2</strong>
        <span>of</span>
        <strong>3</strong>
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
</nav>`,vue:'<ChiPagination :pages="3" :currentPage="2" :compact="true" :firstLast="true" size="xs" />'}})})],l);function C(t,e,n,o,a,s){const i=g,d=h;return b(),v(d,{title:"Base",id:"base-compact-portal",tabs:t.exampleTabs,padding:"-p--0",titleSize:"h4"},{example:c(()=>e[0]||(e[0]=[p("div",{class:"chi-grid -no-gutter"},[p("div",{class:"chi-col -w--12"},[p("div",{class:"-p--3"},[p("chi-pagination",{pages:"3","current-page":"2",size:"xs",compact:"","first-last":""})])])],-1)])),"code-webcomponent":c(()=>[r(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":c(()=>[r(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":c(()=>[r(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const T=_(l,[["render",C]]);export{T as default};
