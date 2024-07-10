var _=Object.defineProperty;var h=(e,a,c)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[a]=c;var r=(e,a,c)=>h(e,typeof a!="symbol"?a+"":a,c);import{V as m,N as v}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as T,f as w,w as o,b as p,a as t}from"./B5CYXVwa.js";import{_ as x}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,L=(e,a,c,s)=>{for(var i=s>1?void 0:s?C(a,c):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(i=(s?n(a,c,i):n(i))||i);return s&&i&&P(a,c,i),i};let d=class extends m{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-card">
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
<\/script>`})}mounted(){chi.tab(document.querySelectorAll(".chi-tabs-panel .chi-tabs"))}};d=L([v({})],d);const O=t("p",{class:"-text"},"Use portal themed cards with tabs for organizing Enterprise Portal card content into separate but related views.",-1),S=t("div",{class:"chi-card"},[t("div",{class:"chi-card__tabs"},[t("ul",{class:"chi-tabs"},[t("li",{class:"-active"},[t("a",{href:"#tab1"},"Active Tab")]),t("li",null,[t("a",{href:"#tab2"},"Tab Link")]),t("li",null,[t("a",{href:"#tab3"},"Tab Link")])])]),t("div",{class:"chi-card__content chi-tabs-panel -active",id:"tab1",role:"tabpanel"},[t("div",{class:"chi-card__caption"},"Tab 1 content")]),t("div",{class:"chi-card__content chi-tabs-panel",id:"tab2",role:"tabpanel"},[t("div",{class:"chi-card__caption"},"Tab 2 content")]),t("div",{class:"chi-card__content chi-tabs-panel",id:"tab3",role:"tabpanel"},[t("div",{class:"chi-card__caption"},"Tab 3 content")])],-1);function W(e,a,c,s,i,l){const n=u,b=f;return T(),w(b,{title:"With tabs",id:"with_tabs_portal",tabs:e.exampleTabs},{"example-description":o(()=>[O]),example:o(()=>[S]),"code-webcomponent":o(()=>[p(n,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[p(n,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const q=x(d,[["render",W]]);export{q as default};
