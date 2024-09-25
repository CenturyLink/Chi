import{V as d,N as b}from"./NAah3XrW.js";import{_ as m}from"./onyWiYp2.js";import{_ as h}from"./CAQzZ0uH.js";import{o as v,h as g,w as s,a as o,b as r}from"./CEIPSiTs.js";import{_}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,P=(e,t,l,n)=>{for(var a=n>1?void 0:n?x(t,l):t,c=e.length-1,i;c>=0;c--)(i=e[c])&&(a=(n?i(t,l,a):i(a))||a);return n&&a&&f(t,l,a),a};let p=class extends d{};p=P([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-pagination pages="12" current-page="3" results="240" size="xs"></chi-pagination>',htmlblueprint:`<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
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
</nav>`,vue:'<ChiPagination :pages="3" :results="240" :currentPage="2" :compact="true" :firstLast="true" size="xs" />'}})})],p);function w(e,t,l,n,a,c){const i=m,u=h;return v(),g(u,{title:"Results Label",id:"results-label-portal",tabs:e.exampleTabs,padding:"-p--0"},{"example-description":s(()=>t[0]||(t[0]=[o("p",{class:"-text"},"Add a label to indicate the total number of results.",-1)])),example:s(()=>t[1]||(t[1]=[o("div",{class:"chi-grid -no-gutter"},[o("div",{class:"chi-col -w--12"},[o("div",{class:"-p--3"},[o("chi-pagination",{pages:"12","current-page":"3",size:"xs",results:"240",compact:"","first-last":""})])])],-1)])),"code-webcomponent":s(()=>[r(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":s(()=>[r(i,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const y=_(p,[["render",w]]);export{y as default};
