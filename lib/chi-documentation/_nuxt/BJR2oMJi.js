var h=Object.defineProperty;var _=(e,a,i)=>a in e?h(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;var r=(e,a,i)=>_(e,typeof a!="symbol"?a+"":a,i);import{V as m,N as v}from"./NAah3XrW.js";import{_ as u}from"./onyWiYp2.js";import{_ as f}from"./CAQzZ0uH.js";import{o as T,h as w,w as o,a as t,b as p}from"./CEIPSiTs.js";import{_ as x}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,L=(e,a,i,s)=>{for(var c=s>1?void 0:s?C(a,i):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(c=(s?n(a,i,c):n(c))||c);return s&&c&&P(a,i,c),c};let d=class extends m{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-card">
  <div class="chi-card__tabs">
    <ul class="chi-tabs">
      <li class="-active"><a href="#tab1">Active Tab</a></li>
      <li><a href="#tab2">Tab Link</a></li>
      <li><a href="#tab3">Tab Link</a></li>
    </ul>
  </div>
  <div class="chi-card__content chi-tabs-panel -active" id="tab1" role="tabpanel">
    <div class="chi-card__caption">Tab 1 content</div>
  </div>
  <div class="chi-card__content chi-tabs-panel" id="tab2" role="tabpanel">
    <div class="chi-card__caption">Tab 2 content</div>
  </div>
  <div class="chi-card__content chi-tabs-panel" id="tab3" role="tabpanel">
    <div class="chi-card__caption">Tab 3 content</div>
  </div>
</div>

<script>
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      chi.tab(document.querySelectorAll('.chi-tabs-panel .chi-tabs'));
    }
  );
<\/script>`})}mounted(){chi.tab(document.querySelectorAll(".chi-tabs-panel .chi-tabs"))}};d=L([v({})],d);function $(e,a,i,s,c,l){const n=u,b=f;return T(),w(b,{title:"With tabs",id:"with_tabs_portal",tabs:e.exampleTabs},{"example-description":o(()=>a[0]||(a[0]=[t("p",{class:"-text"},"Use portal themed cards with tabs for organizing Enterprise Portal card content into separate but related views.",-1)])),example:o(()=>a[1]||(a[1]=[t("div",{class:"chi-card"},[t("div",{class:"chi-card__tabs"},[t("ul",{class:"chi-tabs"},[t("li",{class:"-active"},[t("a",{href:"#tab1"},"Active Tab")]),t("li",null,[t("a",{href:"#tab2"},"Tab Link")]),t("li",null,[t("a",{href:"#tab3"},"Tab Link")])])]),t("div",{class:"chi-card__content chi-tabs-panel -active",id:"tab1",role:"tabpanel"},[t("div",{class:"chi-card__caption"},"Tab 1 content")]),t("div",{class:"chi-card__content chi-tabs-panel",id:"tab2",role:"tabpanel"},[t("div",{class:"chi-card__caption"},"Tab 2 content")]),t("div",{class:"chi-card__content chi-tabs-panel",id:"tab3",role:"tabpanel"},[t("div",{class:"chi-card__caption"},"Tab 3 content")])],-1)])),"code-webcomponent":o(()=>[p(n,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[p(n,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const E=x(d,[["render",$]]);export{E as default};
