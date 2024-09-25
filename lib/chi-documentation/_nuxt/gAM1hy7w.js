var u=Object.defineProperty;var _=(o,t,e)=>t in o?u(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>_(o,typeof t!="symbol"?t+"":t,e);import{V as b,N as f}from"./NAah3XrW.js";import{_ as v}from"./onyWiYp2.js";import{_ as w}from"./CS2TcPBX.js";import{_ as S}from"./CAQzZ0uH.js";import{o as C,h as x,w as r,a as l,b as s}from"./CEIPSiTs.js";import{_ as g}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var y=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(o,t,e,a)=>{for(var i=a>1?void 0:a?P(t,e):t,p=o.length-1,n;p>=0;p--)(n=o[p])&&(i=(a?n(t,e,i):n(i))||i);return a&&i&&y(t,e,i),i};let h=class extends b{constructor(){super(...arguments);c(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);c(this,"codeSnippets",{webcomponent:`<chi-button type="float" color="primary" size="lg" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<button class="chi-button -primary -lg -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});c(this,"tooltip")}mounted(){this.tooltip=chi.tooltip(this.$refs.chat)}beforeDestroy(){this.tooltip.dispose()}};h=$([f({})],h);const N={class:"chi-form__item"},T={class:"-d--flex"},B={class:"-pr--2"},F={color:"primary",type:"float",size:"lg","alternative-text":"Chat with Support",ref:"chat","data-tooltip":"Chat with Support"};function O(o,t,e,a,i,p){const n=v,m=w,d=S;return C(),x(d,{titleSize:"h3",title:"Floating icon buttons",id:"floating-icon-portal",tabs:o.exampleTabs},{example:r(()=>[l("div",N,[l("div",T,[l("div",B,[l("chi-button",F,t[0]||(t[0]=[l("chi-icon",{icon:"chat"},null,-1)]),512)])])])]),"code-webcomponent":r(()=>[s(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(m),s(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=g(h,[["render",O]]);export{W as default};
