var b=Object.defineProperty;var h=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>h(o,typeof t!="symbol"?t+"":t,e);import{V as _,N as f}from"./NAah3XrW.js";import{_ as v}from"./onyWiYp2.js";import{_ as x}from"./CS2TcPBX.js";import{_ as w}from"./CAQzZ0uH.js";import{o as B,h as P,w as s,a as p,b as r}from"./CEIPSiTs.js";import{_ as S}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var $=Object.defineProperty,y=Object.getOwnPropertyDescriptor,C=(o,t,e,c)=>{for(var i=c>1?void 0:c?y(t,e):t,l=o.length-1,n;l>=0;l--)(n=o[l])&&(i=(c?n(t,e,i):n(i))||i);return c&&i&&$(t,e,i),i};let d=class extends _{constructor(){super(...arguments);a(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);a(this,"codeSnippets",{webcomponent:`<chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});a(this,"tooltip")}mounted(){this.tooltip=chi.tooltip(this.$refs.edit)}beforeDestroy(){this.tooltip.dispose()}};d=C([f({})],d);const g={class:"-d--flex"},E={class:"-ml--2",variant:"flat",type:"icon","alternative-text":"Edit",ref:"edit","data-tooltip":"Edit"};function I(o,t,e,c,i,l){const n=v,m=x,u=w;return B(),P(u,{titleSize:"h2",title:"Icon buttons",id:"icon-buttons-portal",tabs:o.exampleTabs},{"example-description":s(()=>t[0]||(t[0]=[p("p",{class:"-text"},"For interfaces with limited space, an Icon button can be used for common actions such as editing, deleting, closing, etc.",-1)])),example:s(()=>[p("div",g,[p("chi-button",E,t[1]||(t[1]=[p("chi-icon",{icon:"edit"},null,-1)]),512)])]),"code-webcomponent":s(()=>[r(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(m),r(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const L=S(d,[["render",I]]);export{L as default};
