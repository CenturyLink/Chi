var _=Object.defineProperty;var f=(o,t,i)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var l=(o,t,i)=>f(o,typeof t!="symbol"?t+"":t,i);import{V as x,N as v}from"./NAah3XrW.js";import{_ as z}from"./onyWiYp2.js";import{_ as y}from"./CAQzZ0uH.js";import{o as p,h as g,w as r,a as n,d as m,c as d,i as S,t as w,F as $,b as h}from"./CEIPSiTs.js";import{_ as T}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,E=(o,t,i,s)=>{for(var a=s>1?void 0:s?C(t,i):t,u=o.length-1,c;u>=0;u--)(c=o[u])&&(a=(s?c(t,i,a):c(a))||a);return s&&a&&P(t,i,a),a};let b=class extends x{constructor(){super(...arguments);l(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"sizes",["xs","sm","md","lg"]);l(this,"codeSnippets",{webcomponent:`<!-- xs -->
<chi-button color="primary" size="xs">Button</chi-button>
<chi-button size="xs">Button</chi-button>
<chi-button type="icon" variant="flat" size="xs" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- sm -->
<chi-button color="primary" size="sm">Button</chi-button>
<chi-button size="sm">Button</chi-button>
<chi-button type="icon" variant="flat" size="sm" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- md -->
<chi-button color="primary" size="md">Button</chi-button>
<chi-button size="md">Button</chi-button>
<chi-button type="icon" variant="flat" size="md" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- lg -->
<chi-button color="primary" size="lg">Button</chi-button>
<chi-button size="lg">Button</chi-button>
<chi-button type="icon" variant="flat" size="lg" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<!-- xs -->
<button class="chi-button -primary -xs">Button</button>
<button class="chi-button -xs">Button</button>
<button class="chi-button -flat -xs -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- sm -->
<button class="chi-button -primary -sm">Button</button>
<button class="chi-button -sm">Button</button>
<button class="chi-button -flat -sm -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- md -->
<button class="chi-button -primary -md">Button</button>
<button class="chi-button -md">Button</button>
<button class="chi-button -flat -md -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- lg -->
<button class="chi-button -primary -lg">Button</button>
<button class="chi-button -lg">Button</button>
<button class="chi-button -flat -lg -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});l(this,"tooltipTexts",[])}mounted(){this.sizes.forEach(i=>{this.tooltipTexts.push(chi.tooltip(this.$refs[`Button-${i}`]))})}beforeDestroy(){this.tooltipTexts.forEach(i=>{i[0].dispose()})}};b=E([v({})],b);const N={class:"-text--bold -pl--2"},V={class:"chi-col -w--12 -pb--2 -mr--0 -d--flex"},D={class:"-pr--2"},O=["size"],L={class:"-pr--2"},j=["size"],q={class:"-pr--2"},A=["size"];function F(o,t,i,s,a,u){const c=z,B=y;return p(),g(B,{titleSize:"h2",title:"Sizes",id:"sizes-portal",tabs:o.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[n("p",{class:"-text -mb--3 -text"},[m("Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), and Large (lg). The default size is "),n("code",null,"md"),m(".")],-1)])),example:r(()=>[(p(!0),d($,null,S(o.sizes,e=>(p(),d("div",null,[n("p",N,w(e),1),n("div",V,[n("div",D,[n("chi-button",{size:e,color:"primary"},"Button",8,O)]),n("div",L,[n("chi-button",{size:e},"Button",8,j)]),n("div",q,[n("chi-button",{size:e,variant:"flat",type:"icon","alternative-text":"Button action",ref_for:!0,ref:`Button-${e}`,"data-tooltip":"Button action","data-position":"bottom"},t[1]||(t[1]=[n("chi-icon",{icon:"atom"},null,-1)]),8,A)])])]))),256))]),"code-webcomponent":r(()=>[h(c,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[h(c,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const X=T(b,[["render",F]]);export{X as default};
