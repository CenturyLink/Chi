import{_ as d}from"./BzQNDISb.js";import{_ as g}from"./C0Zb0D1T.js";import{e as r,f as h,o as e,w as n,b as a,a as i,c as p,i as b,n as v,F as _}from"./BpVBcII5.js";const k={class:"chi-grid -no-gutter"},y={class:"chi-col -w--12 -w-md--6"},P=["inverse"],x=r({__name:"_base_lumen_centurylink",setup(u){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="3" :currentPage="2" :compact="true" :inverse="true" />`};return(m,f)=>{const c=d,l=g;return e(),h(l,{title:"Base",id:"base-compact-lumen-centurylink",tabs:s,padding:"-p--0",titleSize:"h4"},{example:n(()=>[i("div",k,[(e(),p(_,null,b([1,2],o=>i("div",y,[i("div",{class:v(["-p--3",o===2?"-bg--black":""])},[i("chi-pagination",{pages:"3","current-page":"2",compact:"",inverse:o===2},null,8,P)],2)])),64))])]),"code-webcomponent":n(()=>[a(c,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-vue":n(()=>[a(c,{class:"html",lang:"html",code:t.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(c,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),F={class:"chi-grid -no-gutter"},w={class:"chi-col -w--12 -w-md--6"},C=["inverse"],j=r({__name:"_page-jumper_lumen_centurylink",setup(u){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :inverse="true" />`};return(m,f)=>{const c=d,l=g;return e(),h(l,{title:"Page Jumper",id:"compact-page-jumper-lumen-centurylink",tabs:s,padding:"-p--0",titleSize:"h4"},{example:n(()=>[i("div",F,[(e(),p(_,null,b([1,2],o=>i("div",w,[i("div",{class:v(["-p--3",o===2?"-bg--black":""])},[i("chi-pagination",{pages:"3","current-page":"2",compact:"","page-jumper":"",inverse:o===2},null,8,C)],2)])),64))])]),"code-webcomponent":n(()=>[a(c,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-vue":n(()=>[a(c,{class:"html",lang:"html",code:t.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(c,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),$={class:"chi-grid -no-gutter"},L={class:"chi-col -w--12 -w-md--6"},N=["inverse"],B=r({__name:"_first-last-page-buttons_lumen_centurylink",setup(u){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="3" :currentPage="2" :compact="true" :pageJumper="true" :firstLast="true" :inverse="true" />`};return(m,f)=>{const c=d,l=g;return e(),h(l,{title:"First and Last page buttons",id:"compact-first-last-page-buttons-lumen-centurylink",tabs:s,padding:"-p--0",titleSize:"h4"},{example:n(()=>[i("div",$,[(e(),p(_,null,b([1,2],o=>i("div",L,[i("div",{class:v(["-p--3",o===2?"-bg--black":""])},[i("chi-pagination",{pages:"3","current-page":"2",compact:"","page-jumper":"","first-last":"",inverse:o===2},null,8,N)],2)])),64))])]),"code-webcomponent":n(()=>[a(c,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-vue":n(()=>[a(c,{class:"html",lang:"html",code:t.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(c,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),V=r({__name:"index",setup(u){return(s,t)=>(e(),p("div",null,[t[0]||(t[0]=i("h3",null,"Compact",-1)),a(x),a(j),a(B)]))}});export{V as _};
