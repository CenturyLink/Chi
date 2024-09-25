var M=Object.defineProperty;var U=(a,t,l)=>t in a?M(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;var k=(a,t,l)=>U(a,typeof t!="symbol"?t+"":t,l);import{V as _,N as m}from"./NAah3XrW.js";import{o as b,h as x,w as u,a as e,c as g,F as P,i as y,n as v,b as c,d as h,t as G,j as q,m as d}from"./CEIPSiTs.js";import{_ as $}from"./onyWiYp2.js";import{_ as C}from"./CAQzZ0uH.js";import{_ as f}from"./DlAUqK2U.js";import I from"./0p2h5d7l.js";import K from"./BF7t1pjw.js";import{_ as Q}from"./CnZFJwg2.js";import X from"./BUdsWOCJ.js";import Y from"./vnwkMfYJ.js";import{s as Z}from"./DtNz156Q.js";import{_ as tt}from"./DFOICsuk.js";import"./BJfyOiY6.js";import"./BkPTKHpD.js";import"./De_NUJlA.js";import"./BYaINJ70.js";import"./Co7q8K-e.js";import"./BiCGgWI6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,nt=(a,t,l,o)=>{for(var i=o>1?void 0:o?it(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&at(t,l,i),i};let w=class extends _{};w=nt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="5" :currentPage="3" :inverse="true" />`}})})],w);const et={class:"chi-grid -no-gutter"},ot={class:"chi-col -w--12 -w-md--6"},lt=["inverse"];function st(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Base",id:"base-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{example:u(()=>[e("div",et,[(b(),g(P,null,y([1,2],r=>e("div",ot,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"5","current-page":"3",inverse:r===2},null,8,lt)],2)])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[e("span",null,[h("Use the class "),e("code",null,"chi-pagination"),h(" to render a pagination component.")])],-1)),c(n,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ct=f(w,[["render",st]]);var ut=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,bt=(a,t,l,o)=>{for(var i=o>1?void 0:o?rt(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&ut(t,l,i),i};let z=class extends _{};z=bt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="5" :currentPage="5" :inverse="true" />`}})})],z);const pt={class:"chi-grid -no-gutter"},gt={class:"chi-col -w--12 -w-md--6"},dt=["inverse"],ht=["inverse"];function vt(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Disabled",id:"disabled-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{example:u(()=>[e("div",pt,[(b(),g(P,null,y([1,2],r=>e("div",gt,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("p",{class:v(["-text--bold",r===2?"-text--white":""])},"Disabled previous button",2),e("chi-pagination",{pages:"5","current-page":"1",inverse:r===2},null,8,dt),e("p",{class:v(["-text--bold",r===2?"-text--white":""])},"Disabled next button",2),e("chi-pagination",{pages:"5","current-page":"5",inverse:r===2},null,8,ht)],2)])),64))])]),"code-webcomponent":u(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[e("span",null,[e("code",null,"chi-pagination"),h(" automatically disables previous / next pages if current page is first or last")])],-1)),c(n,{lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[e("span",null,[e("code",null,"ChiPagination"),h(" automatically disables previous / next pages if current page is first or last")])],-1)),c(n,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[t[2]||(t[2]=e("div",{class:"chi-tab__description"},[e("span",null,[h("Add the attribute "),e("code",null,"disabled"),h(" to any button to render in a disabled state.")])],-1)),c(n,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _t=f(z,[["render",vt]]);var mt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Pt=(a,t,l,o)=>{for(var i=o>1?void 0:o?ft(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&mt(t,l,i),i};let F=class extends _{};F=Pt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :currentPage="3" :inverse="true" />`}})})],F);const yt={class:"chi-grid -no-gutter"},xt={class:"chi-col -w--12"},$t=["inverse"];function Ct(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Truncation",id:"truncation-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{"example-description":u(()=>t[0]||(t[0]=[e("p",{class:"-text"},"When the number of pages exceeds the recommended 7 page limit, an ellipsis is used to truncate the remaining pages.",-1)])),example:u(()=>[e("div",yt,[(b(),g(P,null,y([1,2],r=>e("div",xt,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3",inverse:r===2},null,8,$t)],2)])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Lt=f(F,[["render",Ct]]);var kt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,zt=(a,t,l,o)=>{for(var i=o>1?void 0:o?wt(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&kt(t,l,i),i};let S=class extends _{};S=zt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :currentPage="6" :inverse="true" />`}})})],S);const Ft={class:"chi-grid -no-gutter"},St={class:"chi-col -w--12"},Tt=["inverse"];function Ot(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Double Truncation",id:"double-truncation-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{"example-description":u(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Use double truncation when the current page is separated by 5 or more pages from the first and last page.",-1)])),example:u(()=>[e("div",Ft,[(b(),g(P,null,y([1,2],r=>e("div",St,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"6",inverse:r===2},null,8,Tt)],2)])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Dt=f(S,[["render",Ot]]);var jt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Bt=(a,t,l,o)=>{for(var i=o>1?void 0:o?Nt(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&jt(t,l,i),i};let T=class extends _{};T=Bt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :currentPage="3" :results="240" :inverse="true" />`}})})],T);const At={class:"chi-grid -no-gutter"},Et={class:"chi-col -w--12"},Vt=["inverse"];function Rt(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Results Label",id:"results-label-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{"example-description":u(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Add a label to indicate the total number of results.",-1)])),example:u(()=>[e("div",At,[(b(),g(P,null,y([1,2],r=>e("div",Et,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3",results:"240",inverse:r===2},null,8,Vt)],2)])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Wt=f(T,[["render",Rt]]);var Ht=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Mt=(a,t,l,o)=>{for(var i=o>1?void 0:o?Jt(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&Ht(t,l,i),i};let O=class extends _{};O=Mt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :inverse="true" />`}})})],O);const Ut={class:"chi-grid -no-gutter"},Gt={class:"chi-col -w--12"},qt=["inverse"];function It(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Page Size",id:"page-size-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{"example-description":u(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Allow users to configure the number of result items per page.",-1)])),example:u(()=>[e("div",Ut,[(b(),g(P,null,y([1,2],r=>e("div",Gt,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3","page-size":"",results:"240",inverse:r===2},null,8,qt)],2)])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Kt=f(O,[["render",It]]);var Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Yt=(a,t,l,o)=>{for(var i=o>1?void 0:o?Xt(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&Qt(t,l,i),i};let D=class extends _{};D=Yt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :pageJumper="true" />`}})})],D);const Zt={class:"chi-grid -no-gutter"},ta={class:"chi-col -w--12"},aa=["inverse"];function ia(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Page Jumper",id:"page-jumper-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{"example-description":u(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Add a page jumper to allow users to jump to a specific page of results.",-1)])),example:u(()=>[e("div",Zt,[(b(),g(P,null,y([1,2],r=>e("div",ta,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3",results:"240","page-size":"","page-jumper":"",inverse:r===2},null,8,aa)],2)])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const na=f(D,[["render",ia]]);var ea=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,la=(a,t,l,o)=>{for(var i=o>1?void 0:o?oa(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&ea(t,l,i),i};let j=class extends _{constructor(){super(...arguments);k(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);k(this,"codeSnippets",{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="5" :currentPage="3" size="xl" :inverse="true" />`});k(this,"sizes",["xs","sm","md","lg","xl"])}};j=la([m({})],j);const sa={class:"chi-grid -no-gutter"},ca={class:"chi-col -w--12 -w-md--6"},ua=["inverse","size"];function ra(a,t,l,o,i,s){const n=$,p=C;return b(),x(p,{title:"Additional Sizes",id:"additional-sizes-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{"example-description":u(()=>t[0]||(t[0]=[e("p",{class:"-text"},[h("Pagination supports the following sizes: "),e("code",null,"xs"),h(", "),e("code",null,"sm"),h(", "),e("code",null,"md"),h(" (default), "),e("code",null,"lg"),h(", and "),e("code",null,"xl"),h(".")],-1)])),example:u(()=>[e("div",sa,[(b(),g(P,null,y([1,2],r=>e("div",ca,[(b(!0),g(P,null,y(a.sizes,L=>(b(),g("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("p",{class:v(["-text--bold",r===2?"-text--white":""])},"-"+G(L),3),e("chi-pagination",{pages:"5","current-page":"3",inverse:r===2,size:L},null,8,ua)],2))),256))])),64))])]),"code-webcomponent":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[c(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ba=f(j,[["render",ra]]);var pa=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,da=(a,t,l,o)=>{for(var i=o>1?void 0:o?ga(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&pa(t,l,i),i};let N=class extends _{constructor(){super(...arguments);k(this,"selectedTheme",q())}};N=da([m({components:{BaseLumenCenturyLink:ct,DisabledLumenCenturyLink:_t,TruncationLumenCenturyLink:Lt,DoubleTruncationLumenCenturyLink:Dt,ResultsLabelLumenCenturyLink:Wt,PageSizeLumenCenturyLink:Kt,PageJumperLumenCenturyLink:na,Compact:I,AdditionalSizesLumenCenturyLink:ba,Portal:K}})],N);const ha={key:0},va={key:1};function _a(a,t,l,o,i,s){const n=d("BaseLumenCenturyLink"),p=d("DisabledLumenCenturyLink"),r=d("TruncationLumenCenturyLink"),L=d("DoubleTruncationLumenCenturyLink"),A=d("ResultsLabelLumenCenturyLink"),E=d("PageSizeLumenCenturyLink"),V=d("PageJumperLumenCenturyLink"),R=d("Compact"),W=d("AdditionalSizesLumenCenturyLink"),H=d("Portal"),J=Q;return b(),g("div",null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),c(J,{placeholder:"loading..."},{default:u(()=>[["lumen","centurylink"].includes(a.selectedTheme)?(b(),g("div",ha,[c(n),c(p),c(r),c(L),c(A),c(E),c(V),c(R),c(W)])):(b(),g("div",va,[c(H)]))]),_:1})])}const ma=f(N,[["render",_a]]);var fa=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,ya=(a,t,l,o)=>{for(var i=o>1?void 0:o?Pa(t,l):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(t,l,i):n(i))||i);return o&&i&&fa(t,l,i),i};let B=class extends _{constructor(){super(...arguments);k(this,"pageTabs",Z)}};B=ya([m({components:{Accessibility:Y,Examples:ma,Properties:X}})],B);const xa={class:"chi-grid__container -pt--3"},$a={class:"chi-tabs-panel -active",id:"examples"},Ca={class:"chi-tabs-panel",id:"properties"},La={class:"chi-tabs-panel",id:"accessibility"};function ka(a,t,l,o,i,s){const n=tt,p=d("Examples"),r=d("Properties"),L=d("Accessibility");return b(),g("div",null,[c(n,{title:"Pagination",description:"Use pagination to separate long sets of data so that it is easier for a user to consume information.",tabs:a.pageTabs},null,8,["tabs"]),e("div",xa,[e("div",$a,[c(p)]),e("div",Ca,[c(r)]),e("div",La,[c(L)])])])}const ei=f(B,[["render",ka]]);export{ei as default};
