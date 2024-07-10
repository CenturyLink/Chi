var d=Object.defineProperty;var u=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var l=(o,t,e)=>u(o,typeof t!="symbol"?t+"":t,e);import{V as b,N as f}from"./uJTUijt2.js";import{_ as v}from"./D8GK0F__.js";import{_ as w}from"./BLbnEGma.js";import{_ as x}from"./DKu8Jd2y.js";import{o as S,f as C,w as r,a as c,b as s}from"./B5CYXVwa.js";import{_ as g}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var y=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(o,t,e,a)=>{for(var i=a>1?void 0:a?P(t,e):t,p=o.length-1,n;p>=0;p--)(n=o[p])&&(i=(a?n(t,e,i):n(i))||i);return a&&i&&y(t,e,i),i};let h=class extends b{constructor(){super(...arguments);l(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"codeSnippets",{webcomponent:`<chi-button type="float" color="primary" size="lg" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<button class="chi-button -primary -lg -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});l(this,"tooltip")}mounted(){this.tooltip=chi.tooltip(this.$refs.chat)}beforeDestroy(){this.tooltip.dispose()}};h=$([f({})],h);const N={class:"chi-form__item"},T={class:"-d--flex"},B={class:"-pr--2"},F={color:"primary",type:"float",size:"lg","alternative-text":"Chat with Support",ref:"chat","data-tooltip":"Chat with Support"},O=c("chi-icon",{icon:"chat"},null,-1),V=[O];function z(o,t,e,a,i,p){const n=v,m=w,_=x;return S(),C(_,{titleSize:"h3",title:"Floating icon buttons",id:"floating-icon-portal",tabs:o.exampleTabs},{example:r(()=>[c("div",N,[c("div",T,[c("div",B,[c("chi-button",F,V,512)])])])]),"code-webcomponent":r(()=>[s(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(m),s(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=g(h,[["render",z]]);export{K as default};
