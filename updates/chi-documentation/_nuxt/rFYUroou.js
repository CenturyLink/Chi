import{V as h,N as b}from"./uJTUijt2.js";import{_ as v}from"./D8GK0F__.js";import{_}from"./DKu8Jd2y.js";import{o as d,f as m,w as s,a as r,c as f,i as L,n as P,F as C,b as l}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var F=Object.defineProperty,k=Object.getOwnPropertyDescriptor,x=(t,n,o,e)=>{for(var a=e>1?void 0:e?k(n,o):n,c=t.length-1,i;c>=0;c--)(i=t[c])&&(a=(e?i(n,o,a):i(a))||a);return e&&a&&F(n,o,a),a};let p=class extends h{};p=x([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="3" current-page="2" compact="compact" page-jumper first-last></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="3" current-page="2" compact page-jumper first-last inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="First page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-page-first" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
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
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Last page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-page-last" aria-hidden="true"></i>
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
      <div class="chi-pagination__jumper">
        <input type="text" class="chi-input" id="compact-jumper-input-2" aria-label="Page 2" value="2">
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
          <button class="chi-button -icon -flat -light" aria-label="Last page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-page-last" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :firstLast="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :firstLast="true" :inverse="true" />`}})})],p);const w={class:"chi-grid -no-gutter"},B={class:"chi-col -w--12 -w-md--6"},j=["inverse"];function N(t,n,o,e,a,c){const i=v,g=_;return d(),m(g,{title:"First and Last page buttons",id:"compact-first-last-page-buttons-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0",titleSize:"h4"},{example:s(()=>[r("div",w,[(d(),f(C,null,L([1,2],u=>r("div",B,[r("div",{class:P(["-p--3",u===2?"-bg--black":""])},[r("chi-pagination",{pages:"3","current-page":"2",compact:"","page-jumper":"","first-last":"",inverse:u===2},null,8,j)],2)])),64))])]),"code-webcomponent":s(()=>[l(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":s(()=>[l(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[l(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const H=y(p,[["render",N]]);export{H as default};
