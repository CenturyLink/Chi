import{_ as k}from"./FxC9qxjO.js";import{e as v,o as c,f as m,w as a,a as t,c as r,j as h,n as g,F as d,b as i,d as b,t as C,l as w,k as F}from"./6XaUQmon.js";import{_ as f}from"./jyPcLEqD.js";import{_ as P}from"./DpVkMKUP.js";import{_ as z}from"./CzD2P-bi.js";import{_ as $}from"./Dl9ALra5.js";const N={class:"chi-grid -no-gutter"},T={class:"chi-col -w--12 -w-md--6"},S=["inverse"],j=v({__name:"_base_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="5" current-page="3"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="5" current-page="3" inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
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
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="5" :currentPage="3" />

<!-- For dark backgrounds -->
<ChiPagination :pages="5" :currentPage="3" :inverse="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Base",id:"base-lumen-centurylink",tabs:s,padding:"-p--0"},{example:a(()=>[t("div",N,[(c(),r(d,null,h([1,2],l=>t("div",T,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("chi-pagination",{pages:"5","current-page":"3",inverse:l===2},null,8,S)],2)])),64))])]),"code-webcomponent":a(()=>[i(e,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(e,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[o[0]||(o[0]=t("div",{class:"chi-tab__description"},[t("span",null,[b("Use the class "),t("code",null,"chi-pagination"),b(" to render a pagination component.")])],-1)),i(e,{lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),B={class:"chi-grid -no-gutter"},V={class:"chi-col -w--12 -w-md--6"},E=["inverse"],L=["inverse"],A=v({__name:"_disabled_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="5" current-page="1"></chi-pagination>
<chi-pagination pages="5" current-page="5"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="5" current-page="1" inverse></chi-pagination>
<chi-pagination pages="5" current-page="5" inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="Previous page" aria-disabled="true" type="button" disabled>
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -active" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light -disabled" aria-label="Previous page" aria-disabled="true" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light -active" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="5" :currentPage="1" />
<ChiPagination :pages="5" :currentPage="5" />

<!-- For dark backgrounds -->
<ChiPagination :pages="5" :currentPage="1" :inverse="true" />
<ChiPagination :pages="5" :currentPage="5" :inverse="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Disabled",id:"disabled-lumen-centurylink",tabs:s,padding:"-p--0"},{example:a(()=>[t("div",B,[(c(),r(d,null,h([1,2],l=>t("div",V,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("p",{class:g(["-text--bold",l===2?"-text--white":""])},"Disabled previous button",2),t("chi-pagination",{pages:"5","current-page":"1",inverse:l===2},null,8,E),t("p",{class:g(["-text--bold",l===2?"-text--white":""])},"Disabled next button",2),t("chi-pagination",{pages:"5","current-page":"5",inverse:l===2},null,8,L)],2)])),64))])]),"code-webcomponent":a(()=>[o[0]||(o[0]=t("div",{class:"chi-tab__description"},[t("span",null,[t("code",null,"chi-pagination"),b(" automatically disables previous / next pages if current page is first or last")])],-1)),i(e,{lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[o[1]||(o[1]=t("div",{class:"chi-tab__description"},[t("span",null,[t("code",null,"ChiPagination"),b(" automatically disables previous / next pages if current page is first or last")])],-1)),i(e,{lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[o[2]||(o[2]=t("div",{class:"chi-tab__description"},[t("span",null,[b("Add the attribute "),t("code",null,"disabled"),b(" to any button to render in a disabled state.")])],-1)),i(e,{lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"chi-grid -no-gutter"},H={class:"chi-col -w--12"},M=["inverse"],D=v({__name:"_truncation_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="12" current-page="3"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="12" current-page="3" inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
        <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
        <button class="chi-button -flat" aria-label="Page 12" type="button">12</button>
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat -light" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="12" :currentPage="3" />

<!-- For dark backgrounds -->
<ChiPagination :pages="12" :currentPage="3" :inverse="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Truncation",id:"truncation-lumen-centurylink",tabs:s,padding:"-p--0"},{"example-description":a(()=>o[0]||(o[0]=[t("p",{class:"-text"},"When the number of pages exceeds the recommended 7 page limit, an ellipsis is used to truncate the remaining pages.",-1)])),example:a(()=>[t("div",W,[(c(),r(d,null,h([1,2],l=>t("div",H,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("chi-pagination",{pages:"12","current-page":"3",inverse:l===2},null,8,M)],2)])),64))])]),"code-webcomponent":a(()=>[i(e,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(e,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[i(e,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),R={class:"chi-grid -no-gutter"},J={class:"chi-col -w--12"},G=["inverse"],U=v({__name:"_double-truncation_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="12" current-page="6"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="12" current-page="6" inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
        <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
        <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -flat -active" aria-label="Page 6" type="button">6</button>
        <button class="chi-button -flat" aria-label="Page 7" type="button">7</button>
        <button class="chi-button -flat" aria-label="Page 8" type="button">8</button>
        <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
        <button class="chi-button -flat" aria-label="Page 12" type="button">12</button>
        <button class="chi-button -icon -flat" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
          <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -flat -light -active" aria-label="Page 6" type="button">6</button>
          <button class="chi-button -flat -light" aria-label="Page 7" type="button">7</button>
          <button class="chi-button -flat -light" aria-label="Page 8" type="button">8</button>
          <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat -light" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="12" :currentPage="6" />

<!-- For dark backgrounds -->
<ChiPagination :pages="12" :currentPage="6" :inverse="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Double Truncation",id:"double-truncation-lumen-centurylink",tabs:s,padding:"-p--0"},{"example-description":a(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Use double truncation when the current page is separated by 5 or more pages from the first and last page.",-1)])),example:a(()=>[t("div",R,[(c(),r(d,null,h([1,2],l=>t("div",J,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("chi-pagination",{pages:"12","current-page":"6",inverse:l===2},null,8,G)],2)])),64))])]),"code-webcomponent":a(()=>[i(e,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(e,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[i(e,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),O={class:"chi-grid -no-gutter"},q={class:"chi-col -w--12"},I=["inverse"],K=v({__name:"_results-label_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="12" current-page="3" results="240"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="12" current-page="3" results="240" inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 Results</span>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat" aria-label="Next page" type="button">
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
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 Results</span>
      </div>
    </div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
        <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
        <button class="chi-button -flat -light" aria-label="Page 12" type="button">12</button>
        <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="12" :currentPage="3" :results="240" />

<!-- For dark backgrounds -->
<ChiPagination :pages="12" :currentPage="3" :results="240" :inverse="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Results Label",id:"results-label-lumen-centurylink",tabs:s,padding:"-p--0"},{"example-description":a(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Add a label to indicate the total number of results.",-1)])),example:a(()=>[t("div",O,[(c(),r(d,null,h([1,2],l=>t("div",q,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("chi-pagination",{pages:"12","current-page":"3",results:"240",inverse:l===2},null,8,I)],2)])),64))])]),"code-webcomponent":a(()=>[i(e,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(e,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[i(e,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),Q={class:"chi-grid -no-gutter"},X={class:"chi-col -w--12"},Y=["inverse"],Z=v({__name:"_page-size_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="12" results="240" current-page="3" page-size></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="12" results="240" current-page="3" page-size inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__results-label">240 Results</span>
      </div>
      <div class="chi-pagination__page-size">
        <select class="chi-input" aria-label="Number of result items per page">
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="all">All</option>
        </select>
        <span class="chi-pagination__label">per page</span>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat" aria-label="Next page" type="button">
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
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start">
        <div class="chi-pagination__results">
          <span class="chi-pagination__results-label">240 Results</span>
        </div>
        <div class="chi-pagination__page-size">
          <select class="chi-input" aria-label="Number of result items per page">
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="all">All</option>
          </select>
          <span class="chi-pagination__label">per page</span>
        </div>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat -light" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :inverse="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Page Size",id:"page-size-lumen-centurylink",tabs:s,padding:"-p--0"},{"example-description":a(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Allow users to configure the number of result items per page.",-1)])),example:a(()=>[t("div",Q,[(c(),r(d,null,h([1,2],l=>t("div",X,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("chi-pagination",{pages:"12","current-page":"3","page-size":"",results:"240",inverse:l===2},null,8,Y)],2)])),64))])]),"code-webcomponent":a(()=>[i(e,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(e,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[i(e,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),tt={class:"chi-grid -no-gutter"},at={class:"chi-col -w--12"},it=["inverse"],nt=v({__name:"_page-jumper_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="12" results="240" current-page="3" page-size page-jumper></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="12" results="240" current-page="3" page-size page-jumper inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start">
      <div class="chi-pagination__results">
        <span class="chi-pagination__label">240 results</span>
      </div>
      <div class="chi-pagination__page-size">
        <select class="chi-input" aria-label="Number of result items per page">
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="all">All</option>
        </select>
        <span class="chi-pagination__label">per page</span>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end">
        <div class="chi-pagination__jumper">
          <label class="chi-pagination__label" for="jumper-input-1">Go to page:</label>
          <input class="chi-input" type="text" id="jumper-input-1">
        </div>
      </div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start">
        <div class="chi-pagination__results">
          <span class="chi-pagination__label">240 results</span>
        </div>
        <div class="chi-pagination__page-size">
          <select class="chi-input" aria-label="Number of result items per page">
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="all">All</option>
          </select>
        <span class="chi-pagination__label">per page</span>
        </div>
      </div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <div class="chi-button -flat -light" aria-hidden="true" disabled>...</div>
          <button class="chi-button -flat -light" aria-label="Page 12" type="button">12</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end">
        <div class="chi-pagination__jumper">
          <label class="chi-pagination__label" for="jumper-input-2">Go to page:</label>
          <input class="chi-input" type="text" id="jumper-input-2">
        </div>
      </div>
    </div>
  </nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :pageJumper="true" />

<!-- For dark backgrounds -->
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :pageJumper="true" />`};return(p,o)=>{const e=f,u=P;return c(),m(u,{title:"Page Jumper",id:"page-jumper-lumen-centurylink",tabs:s,padding:"-p--0"},{"example-description":a(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Add a page jumper to allow users to jump to a specific page of results.",-1)])),example:a(()=>[t("div",tt,[(c(),r(d,null,h([1,2],l=>t("div",at,[t("div",{class:g(["-p--3",l===2?"-bg--black":""])},[t("chi-pagination",{pages:"12","current-page":"3",results:"240","page-size":"","page-jumper":"",inverse:l===2},null,8,it)],2)])),64))])]),"code-webcomponent":a(()=>[i(e,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(e,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[i(e,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),et={class:"chi-grid -no-gutter"},ot=["inverse","size"],lt=v({__name:"_additional-sizes_lumen_centurylink",setup(_){const s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<!-- For light backgrounds -->
<chi-pagination pages="5" current-page="3" size="xs"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="sm"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="md"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="lg"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="xl"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="5" current-page="3" size="xs" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="sm" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="md" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="lg" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="xl" inverse></chi-pagination>`,htmlblueprint:`<!-- For light backgrounds -->
<!-- xs -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xs" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -xs" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -xs" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -xs -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -xs" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -xs" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -xs" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- sm -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -sm" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -sm" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -sm" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -sm -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -sm" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -sm" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -sm" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- md -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -md" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -md" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -md" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -md -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -md" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -md" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -md" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- lg -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -lg" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -lg" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -lg" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -lg -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -lg" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -lg" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -lg" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- xl -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -xl" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -xl" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -xl" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -xl -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -xl" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -xl" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -xl" aria-label="Next page" type="button">
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
<!-- xs -->
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light -xs" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light -xs" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light -xs" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -xs -active" aria-label="Page 2" type="button">3</button>
        <button class="chi-button -flat -light -xs" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light -xs" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -light -xs" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- sm -->
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light -sm" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light -sm" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light -sm" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -sm -active" aria-label="Page 2" type="button">3</button>
        <button class="chi-button -flat -light -sm" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light -sm" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -light -sm" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- md -->
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
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

<!-- lg -->
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light -lg" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light -lg" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light -lg" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -lg -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -light -lg" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light -lg" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -light -lg" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>

<!-- xl -->
<nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -light -xl" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -light -xl" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -light -xl" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -light -xl -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -light -xl" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -light -xl" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -light -xl" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-pagination__end"></div>
  </div>
</nav>`,vue:`<!-- For light backgrounds -->
<ChiPagination :pages="5" :currentPage="3" size="xs" />
<ChiPagination :pages="5" :currentPage="3" size="sm" />
<ChiPagination :pages="5" :currentPage="3" size="md" />
<ChiPagination :pages="5" :currentPage="3" size="lg" />
<ChiPagination :pages="5" :currentPage="3" size="xl" />

<!-- For dark backgrounds -->
<ChiPagination :pages="5" :currentPage="3" size="xs" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="sm" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="md" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="lg" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="xl" :inverse="true" />`},p=["xs","sm","md","lg","xl"];return(o,e)=>{const u=f,l=P;return c(),m(l,{title:"Additional Sizes",id:"additional-sizes-lumen-centurylink",tabs:s,padding:"-p--0"},{"example-description":a(()=>e[0]||(e[0]=[t("p",{class:"-text"},[b("Pagination supports the following sizes: "),t("code",null,"xs"),b(", "),t("code",null,"sm"),b(", "),t("code",null,"md"),b(" (default), "),t("code",null,"lg"),b(", and "),t("code",null,"xl"),b(".")],-1)])),example:a(()=>[t("div",et,[(c(),r(d,null,h([1,2],y=>t("div",{class:g(["chi-col -w--12 -w-md--6 -p--3",y===2?"-bg--black":""])},[(c(),r(d,null,h(p,x=>t("div",null,[t("p",{class:g(["-text--bold",y===2?"-text--white":""])},"-"+C(x),3),t("chi-pagination",{pages:"5","current-page":"3",inverse:y===2,size:x},null,8,ot)])),64))],2)),64))])]),"code-webcomponent":a(()=>[i(u,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-vue":a(()=>[i(u,{class:"html",lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[i(u,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),ct={key:0},st={key:1},dt=v({__name:"index",setup(_){const s=w();return(n,p)=>{const o=k;return c(),r("div",null,[p[0]||(p[0]=t("h2",null,"Examples",-1)),i(o,{placeholder:"loading..."},{default:a(()=>[["lumen","centurylink"].includes(F(s))?(c(),r("div",ct,[i(j),i(A),i(D),i(U),i(K),i(Z),i(nt),i(z),i(lt)])):(c(),r("div",st,[i($)]))]),_:1})])}}});export{dt as _};
