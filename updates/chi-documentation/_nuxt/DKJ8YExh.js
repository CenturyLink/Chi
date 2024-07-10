import{V as u,N as m}from"./uJTUijt2.js";import{_ as h}from"./D8GK0F__.js";import{_ as g}from"./DKu8Jd2y.js";import{o as _,f as b,w as s,b as r,a as p}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,P=(t,o,n,i)=>{for(var a=i>1?void 0:i?x(o,n):o,c=t.length-1,e;c>=0;c--)(e=t[c])&&(a=(i?e(o,n,a):e(a))||a);return i&&a&&f(o,n,a),a};let l=class extends u{};l=P([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
</nav>`,vue:'<ChiPagination :pages="3" :currentPage="2" :compact="true" :firstLast="true" size="xs" />'}})})],l);const C=p("div",{class:"chi-grid -no-gutter"},[p("div",{class:"chi-col -w--12"},[p("div",{class:"-p--3"},[p("chi-pagination",{pages:"3","current-page":"2",size:"xs",compact:"","first-last":""})])])],-1);function w(t,o,n,i,a,c){const e=h,d=g;return _(),b(d,{title:"Base",id:"base-compact-portal",tabs:t.exampleTabs,padding:"-p--0",titleSize:"h4"},{example:s(()=>[C]),"code-webcomponent":s(()=>[r(e,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":s(()=>[r(e,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(e,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const j=v(l,[["render",w]]);export{j as default};
