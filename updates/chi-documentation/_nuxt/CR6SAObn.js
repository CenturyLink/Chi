var M=Object.defineProperty;var U=(t,i,l)=>i in t?M(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l;var k=(t,i,l)=>U(t,typeof i!="symbol"?i+"":i,l);import{V as _,N as m}from"./uJTUijt2.js";import{o as b,f as x,w as u,a as e,c as h,F as P,i as y,n as v,b as s,d as g,t as G,g as q,r as d}from"./B5CYXVwa.js";import{_ as $}from"./D8GK0F__.js";import{_ as C}from"./DKu8Jd2y.js";import{_ as f}from"./DlAUqK2U.js";import I from"./BEZ9DTUO.js";import K from"./CbKsOHFF.js";import{_ as Q}from"./C-hgEc7b.js";import X from"./CW74umhA.js";import Y from"./Bwa8J02f.js";import{s as Z}from"./2EwpEKcw.js";import{_ as tt}from"./Be4hAolY.js";import"./drvuhYu1.js";import"./DzNOVulI.js";import"./B_oH-UUM.js";import"./rFYUroou.js";import"./DKJ8YExh.js";import"./BxXGPOIg.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var at=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,it=(t,i,l,o)=>{for(var a=o>1?void 0:o?nt(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&at(i,l,a),a};let w=class extends _{};w=it([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="5" :currentPage="3" :inverse="true" />`}})})],w);const et={class:"chi-grid -no-gutter"},ot={class:"chi-col -w--12 -w-md--6"},lt=["inverse"],ct=e("div",{class:"chi-tab__description"},[e("span",null,[g("Use the class "),e("code",null,"chi-pagination"),g(" to render a pagination component.")])],-1);function st(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Base",id:"base-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{example:u(()=>[e("div",et,[(b(),h(P,null,y([1,2],r=>e("div",ot,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"5","current-page":"3",inverse:r===2},null,8,lt)],2)])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[ct,s(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ut=f(w,[["render",st]]);var rt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,pt=(t,i,l,o)=>{for(var a=o>1?void 0:o?bt(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&rt(i,l,a),a};let z=class extends _{};z=pt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="5" :currentPage="5" :inverse="true" />`}})})],z);const ht={class:"chi-grid -no-gutter"},dt={class:"chi-col -w--12 -w-md--6"},gt=["inverse"],vt=["inverse"],_t=e("div",{class:"chi-tab__description"},[e("span",null,[e("code",null,"chi-pagination"),g(" automatically disables previous / next pages if current page is first or last")])],-1),mt=e("div",{class:"chi-tab__description"},[e("span",null,[e("code",null,"ChiPagination"),g(" automatically disables previous / next pages if current page is first or last")])],-1),ft=e("div",{class:"chi-tab__description"},[e("span",null,[g("Add the attribute "),e("code",null,"disabled"),g(" to any button to render in a disabled state.")])],-1);function Pt(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Disabled",id:"disabled-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{example:u(()=>[e("div",ht,[(b(),h(P,null,y([1,2],r=>e("div",dt,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("p",{class:v(["-text--bold",r===2?"-text--white":""])},"Disabled previous button",2),e("chi-pagination",{pages:"5","current-page":"1",inverse:r===2},null,8,gt),e("p",{class:v(["-text--bold",r===2?"-text--white":""])},"Disabled next button",2),e("chi-pagination",{pages:"5","current-page":"5",inverse:r===2},null,8,vt)],2)])),64))])]),"code-webcomponent":u(()=>[_t,s(n,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[mt,s(n,{lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[ft,s(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const yt=f(z,[["render",Pt]]);var xt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Ct=(t,i,l,o)=>{for(var a=o>1?void 0:o?$t(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&xt(i,l,a),a};let F=class extends _{};F=Ct([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :currentPage="3" :inverse="true" />`}})})],F);const Lt=e("p",{class:"-text"},"When the number of pages exceeds the recommended 7 page limit, an ellipsis is used to truncate the remaining pages.",-1),kt={class:"chi-grid -no-gutter"},wt={class:"chi-col -w--12"},zt=["inverse"];function Ft(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Truncation",id:"truncation-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":u(()=>[Lt]),example:u(()=>[e("div",kt,[(b(),h(P,null,y([1,2],r=>e("div",wt,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3",inverse:r===2},null,8,zt)],2)])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const St=f(F,[["render",Ft]]);var Tt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Dt=(t,i,l,o)=>{for(var a=o>1?void 0:o?Ot(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&Tt(i,l,a),a};let S=class extends _{};S=Dt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :currentPage="6" :inverse="true" />`}})})],S);const Nt=e("p",{class:"-text"},"Use double truncation when the current page is separated by 5 or more pages from the first and last page.",-1),jt={class:"chi-grid -no-gutter"},Bt={class:"chi-col -w--12"},At=["inverse"];function Et(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Double Truncation",id:"double-truncation-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":u(()=>[Nt]),example:u(()=>[e("div",jt,[(b(),h(P,null,y([1,2],r=>e("div",Bt,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"6",inverse:r===2},null,8,At)],2)])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Vt=f(S,[["render",Et]]);var Rt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Ht=(t,i,l,o)=>{for(var a=o>1?void 0:o?Wt(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&Rt(i,l,a),a};let T=class extends _{};T=Ht([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :currentPage="3" :results="240" :inverse="true" />`}})})],T);const Jt=e("p",{class:"-text"},"Add a label to indicate the total number of results.",-1),Mt={class:"chi-grid -no-gutter"},Ut={class:"chi-col -w--12"},Gt=["inverse"];function qt(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Results Label",id:"results-label-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":u(()=>[Jt]),example:u(()=>[e("div",Mt,[(b(),h(P,null,y([1,2],r=>e("div",Ut,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3",results:"240",inverse:r===2},null,8,Gt)],2)])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const It=f(T,[["render",qt]]);var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Xt=(t,i,l,o)=>{for(var a=o>1?void 0:o?Qt(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&Kt(i,l,a),a};let O=class extends _{};O=Xt([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :inverse="true" />`}})})],O);const Yt=e("p",{class:"-text"},"Allow users to configure the number of result items per page.",-1),Zt={class:"chi-grid -no-gutter"},ta={class:"chi-col -w--12"},aa=["inverse"];function na(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Page Size",id:"page-size-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":u(()=>[Yt]),example:u(()=>[e("div",Zt,[(b(),h(P,null,y([1,2],r=>e("div",ta,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3","page-size":"",results:"240",inverse:r===2},null,8,aa)],2)])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ia=f(O,[["render",na]]);var ea=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,la=(t,i,l,o)=>{for(var a=o>1?void 0:o?oa(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&ea(i,l,a),a};let D=class extends _{};D=la([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="12" :results="240" :currentPage="3" :pageSize="true" :pageJumper="true" />`}})})],D);const ca=e("p",{class:"-text"},"Add a page jumper to allow users to jump to a specific page of results.",-1),sa={class:"chi-grid -no-gutter"},ua={class:"chi-col -w--12"},ra=["inverse"];function ba(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Page Jumper",id:"page-jumper-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":u(()=>[ca]),example:u(()=>[e("div",sa,[(b(),h(P,null,y([1,2],r=>e("div",ua,[e("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("chi-pagination",{pages:"12","current-page":"3",results:"240","page-size":"","page-jumper":"",inverse:r===2},null,8,ra)],2)])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pa=f(D,[["render",ba]]);var ha=Object.defineProperty,da=Object.getOwnPropertyDescriptor,ga=(t,i,l,o)=>{for(var a=o>1?void 0:o?da(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&ha(i,l,a),a};let N=class extends _{constructor(){super(...arguments);k(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);k(this,"codeSnippets",{webcomponent:`<!-- For light backgrounds -->
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
<ChiPagination :pages="5" :currentPage="3" size="xl" :inverse="true" />`});k(this,"sizes",["xs","sm","md","lg","xl"])}};N=ga([m({})],N);const va=e("p",{class:"-text"},[g("Pagination supports the following sizes: "),e("code",null,"xs"),g(", "),e("code",null,"sm"),g(", "),e("code",null,"md"),g(" (default), "),e("code",null,"lg"),g(", and "),e("code",null,"xl"),g(".")],-1),_a={class:"chi-grid -no-gutter"},ma={class:"chi-col -w--12 -w-md--6"},fa=["inverse","size"];function Pa(t,i,l,o,a,c){const n=$,p=C;return b(),x(p,{title:"Additional Sizes",id:"additional-sizes-lumen-centurylink",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":u(()=>[va]),example:u(()=>[e("div",_a,[(b(),h(P,null,y([1,2],r=>e("div",ma,[(b(!0),h(P,null,y(t.sizes,L=>(b(),h("div",{class:v(["-p--3",r===2?"-bg--black":""])},[e("p",{class:v(["-text--bold",r===2?"-text--white":""])},"-"+G(L),3),e("chi-pagination",{pages:"5","current-page":"3",inverse:r===2,size:L},null,8,fa)],2))),256))])),64))])]),"code-webcomponent":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":u(()=>[s(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ya=f(N,[["render",Pa]]);var xa=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,Ca=(t,i,l,o)=>{for(var a=o>1?void 0:o?$a(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&xa(i,l,a),a};let j=class extends _{constructor(){super(...arguments);k(this,"selectedTheme",q())}};j=Ca([m({components:{BaseLumenCenturyLink:ut,DisabledLumenCenturyLink:yt,TruncationLumenCenturyLink:St,DoubleTruncationLumenCenturyLink:Vt,ResultsLabelLumenCenturyLink:It,PageSizeLumenCenturyLink:ia,PageJumperLumenCenturyLink:pa,Compact:I,AdditionalSizesLumenCenturyLink:ya,Portal:K}})],j);const La=e("h2",null,"Examples",-1),ka={key:0},wa={key:1};function za(t,i,l,o,a,c){const n=d("BaseLumenCenturyLink"),p=d("DisabledLumenCenturyLink"),r=d("TruncationLumenCenturyLink"),L=d("DoubleTruncationLumenCenturyLink"),A=d("ResultsLabelLumenCenturyLink"),E=d("PageSizeLumenCenturyLink"),V=d("PageJumperLumenCenturyLink"),R=d("Compact"),W=d("AdditionalSizesLumenCenturyLink"),H=d("Portal"),J=Q;return b(),h("div",null,[La,s(J,{placeholder:"loading..."},{default:u(()=>[["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(b(),h("div",ka,[s(n),s(p),s(r),s(L),s(A),s(E),s(V),s(R),s(W)])):(b(),h("div",wa,[s(H)]))]),_:1})])}const Fa=f(j,[["render",za]]);var Sa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Oa=(t,i,l,o)=>{for(var a=o>1?void 0:o?Ta(i,l):i,c=t.length-1,n;c>=0;c--)(n=t[c])&&(a=(o?n(i,l,a):n(a))||a);return o&&a&&Sa(i,l,a),a};let B=class extends _{constructor(){super(...arguments);k(this,"pageTabs",Z)}};B=Oa([m({components:{Accessibility:Y,Examples:Fa,Properties:X}})],B);const Da={class:"chi-grid__container -pt--3"},Na={class:"chi-tabs-panel -active",id:"examples"},ja={class:"chi-tabs-panel",id:"properties"},Ba={class:"chi-tabs-panel",id:"accessibility"};function Aa(t,i,l,o,a,c){const n=tt,p=d("Examples"),r=d("Properties"),L=d("Accessibility");return b(),h("div",null,[s(n,{title:"Pagination",description:"Use pagination to separate long sets of data so that it is easier for a user to consume information.",tabs:t.pageTabs},null,8,["tabs"]),e("div",Da,[e("div",Na,[s(p)]),e("div",ja,[s(r)]),e("div",Ba,[s(L)])])])}const vn=f(B,[["render",Aa]]);export{vn as default};
