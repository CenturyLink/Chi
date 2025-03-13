import{_ as u}from"./BzQNDISb.js";import{_ as d}from"./C0Zb0D1T.js";import{e as l,f as g,o as p,w as n,b as a,a as i,c as b}from"./BpVBcII5.js";const _=l({__name:"_base",setup(r){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:`<!-- For light backgrounds -->
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
</nav>`,vue:'<ChiPagination :pages="3" :currentPage="2" :compact="true" :firstLast="true" size="xs" />'};return(h,e)=>{const o=u,c=d;return p(),g(c,{title:"Base",id:"base-compact-portal",tabs:s,padding:"-p--0",titleSize:"h4"},{example:n(()=>e[0]||(e[0]=[i("div",{class:"chi-grid -no-gutter"},[i("div",{class:"chi-col -w--12"},[i("div",{class:"-p--3"},[i("chi-pagination",{pages:"3","current-page":"2",size:"xs",compact:"","first-last":""})])])],-1)])),"code-webcomponent":n(()=>[a(o,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-vue":n(()=>[a(o,{class:"html",lang:"html",code:t.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(o,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),m=l({__name:"_results-label",setup(r){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:'<chi-pagination pages="12" current-page="3" results="240" size="xs"></chi-pagination>',htmlblueprint:`<nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
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
</nav>`,vue:'<ChiPagination :pages="3" :results="240" :currentPage="2" :compact="true" :firstLast="true" size="xs" />'};return(h,e)=>{const o=u,c=d;return p(),g(c,{title:"Results Label",id:"results-label-portal",tabs:s,padding:"-p--0"},{"example-description":n(()=>e[0]||(e[0]=[i("p",{class:"-text"},"Add a label to indicate the total number of results.",-1)])),example:n(()=>e[1]||(e[1]=[i("div",{class:"chi-grid -no-gutter"},[i("div",{class:"chi-col -w--12"},[i("div",{class:"-p--3"},[i("chi-pagination",{pages:"12","current-page":"3",size:"xs",results:"240",compact:"","first-last":""})])])],-1)])),"code-webcomponent":n(()=>[a(o,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-vue":n(()=>[a(o,{class:"html",lang:"html",code:t.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(o,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),w=l({__name:"index",setup(r){return(s,t)=>(p(),b("div",null,[t[0]||(t[0]=i("h3",null,"Compact",-1)),a(_),a(m)]))}});export{w as _};
