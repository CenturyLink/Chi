var _=Object.defineProperty;var h=(o,t,e)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var l=(o,t,e)=>h(o,typeof t!="symbol"?t+"":t,e);import{V as b,N as f}from"./uJTUijt2.js";import{_ as x}from"./D8GK0F__.js";import{_ as v}from"./BLbnEGma.js";import{_ as w}from"./DKu8Jd2y.js";import{o as B,f as P,w as s,a as p,b as r}from"./B5CYXVwa.js";import{_ as S}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var $=Object.defineProperty,y=Object.getOwnPropertyDescriptor,C=(o,t,e,c)=>{for(var n=c>1?void 0:c?y(t,e):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(n=(c?i(t,e,n):i(n))||n);return c&&n&&$(t,e,n),n};let d=class extends b{constructor(){super(...arguments);l(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"codeSnippets",{webcomponent:`<chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});l(this,"tooltip")}mounted(){this.tooltip=chi.tooltip(this.$refs.edit)}beforeDestroy(){this.tooltip.dispose()}};d=C([f({})],d);const g=p("p",{class:"-text"},"For interfaces with limited space, an Icon button can be used for common actions such as editing, deleting, closing, etc.",-1),E={class:"-d--flex"},I={class:"-ml--2",variant:"flat",type:"icon","alternative-text":"Edit",ref:"edit","data-tooltip":"Edit"},N=p("chi-icon",{icon:"edit"},null,-1),T=[N];function O(o,t,e,c,n,a){const i=x,m=v,u=w;return B(),P(u,{titleSize:"h2",title:"Icon buttons",id:"icon-buttons-portal",tabs:o.exampleTabs},{"example-description":s(()=>[g]),example:s(()=>[p("div",E,[p("chi-button",I,T,512)])]),"code-webcomponent":s(()=>[r(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(m),r(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const G=S(d,[["render",O]]);export{G as default};
