import{V as h,N as v}from"./NAah3XrW.js";import{_ as b}from"./onyWiYp2.js";import{_}from"./CAQzZ0uH.js";import{o as d,h as m,w as s,a as r,c as f,i as C,n as k,F as P,b as l}from"./CEIPSiTs.js";import{_ as w}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,B=(t,a,e,o)=>{for(var i=o>1?void 0:o?x(a,e):a,c=t.length-1,n;c>=0;c--)(n=t[c])&&(i=(o?n(a,e,i):n(i))||i);return o&&i&&y(a,e,i),i};let p=class extends h{};p=B([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="3" current-page="2" compact></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="3" current-page="2" compact inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
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
        <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- For dark backgrounds -->
<nav class="chi-pagination -compact -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
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
        <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :inverse="true" />`}})})],p);const F={class:"chi-grid -no-gutter"},L={class:"chi-col -w--12 -w-md--6"},N=["inverse"];function $(t,a,e,o,i,c){const n=b,g=_;return d(),m(g,{title:"Base",id:"base-compact-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0",titleSize:"h4"},{example:s(()=>[r("div",F,[(d(),f(P,null,C([1,2],u=>r("div",L,[r("div",{class:k(["-p--3",u===2?"-bg--black":""])},[r("chi-pagination",{pages:"3","current-page":"2",compact:"",inverse:u===2},null,8,N)],2)])),64))])]),"code-webcomponent":s(()=>[l(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":s(()=>[l(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[l(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const M=w(p,[["render",$]]);export{M as default};
