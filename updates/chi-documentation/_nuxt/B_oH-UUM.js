import{V as h,N as m}from"./uJTUijt2.js";import{_ as v}from"./D8GK0F__.js";import{_}from"./DKu8Jd2y.js";import{o as d,f as b,w as s,a as r,c as f,i as P,n as C,F as k,b as p}from"./B5CYXVwa.js";import{_ as x}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var y=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=(t,n,o,e)=>{for(var i=e>1?void 0:e?j(n,o):n,c=t.length-1,a;c>=0;c--)(a=t[c])&&(i=(e?a(n,o,i):a(i))||i);return e&&i&&y(n,o,i),i};let l=class extends h{};l=w([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="3" current-page="2" compact page-jumper></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="3" current-page="2" compact page-jumper inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
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
      <div class="chi-pagination__jumper">
        <input type="text" class="chi-input" id="compact-jumper-input-2" aria-label="Page 2" value="2">
        <div class="chi-pagination__label">
          <span>of</span>
          <strong>3</strong>
        </div>
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
        <button class="chi-button -icon -flat -light -md" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__jumper">
        <input type="text" class="chi-input" id="compact-jumper-input-2" aria-label="Page 2" value="2">
        <div class="chi-pagination__label">
          <span>of</span>
          <strong>3</strong>
        </div>
      </div>
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light -md" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :inverse="true" />`}})})],l);const F={class:"chi-grid -no-gutter"},L={class:"chi-col -w--12 -w-md--6"},J=["inverse"];function N(t,n,o,e,i,c){const a=v,g=_;return d(),b(g,{title:"Page Jumper",id:"compact-page-jumper-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0",titleSize:"h4"},{example:s(()=>[r("div",F,[(d(),f(k,null,P([1,2],u=>r("div",L,[r("div",{class:C(["-p--3",u===2?"-bg--black":""])},[r("chi-pagination",{pages:"3","current-page":"2",compact:"","page-jumper":"",inverse:u===2},null,8,J)],2)])),64))])]),"code-webcomponent":s(()=>[p(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":s(()=>[p(a,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const H=x(l,[["render",N]]);export{H as default};
