var B=Object.defineProperty;var f=(t,o,i)=>o in t?B(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i;var l=(t,o,i)=>f(t,typeof o!="symbol"?o+"":o,i);import{V as x,N as v}from"./uJTUijt2.js";import{_ as z}from"./D8GK0F__.js";import{_ as y}from"./DKu8Jd2y.js";import{o as p,f as g,w as r,c as h,i as S,a as n,t as w,F as T,b as m,d}from"./B5CYXVwa.js";import{_ as $}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,E=(t,o,i,e)=>{for(var a=e>1?void 0:e?C(o,i):o,u=t.length-1,c;u>=0;u--)(c=t[u])&&(a=(e?c(o,i,a):c(a))||a);return e&&a&&P(o,i,a),a};let b=class extends x{constructor(){super(...arguments);l(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"sizes",["xs","sm","md","lg"]);l(this,"codeSnippets",{webcomponent:`<!-- xs -->
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
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});l(this,"tooltipTexts",[])}mounted(){this.sizes.forEach(i=>{this.tooltipTexts.push(chi.tooltip(this.$refs[`Button-${i}`]))})}beforeDestroy(){this.tooltipTexts.forEach(i=>{i[0].dispose()})}};b=E([v({})],b);const N=n("p",{class:"-text -mb--3 -text"},[d("Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), and Large (lg). The default size is "),n("code",null,"md"),d(".")],-1),V={class:"-text--bold -pl--2"},D={class:"chi-col -w--12 -pb--2 -mr--0 -d--flex"},O={class:"-pr--2"},L=["size"],j={class:"-pr--2"},q=["size"],A={class:"-pr--2"},F=["size"],I=n("chi-icon",{icon:"atom"},null,-1),M=[I];function H(t,o,i,e,a,u){const c=z,_=y;return p(),g(_,{titleSize:"h2",title:"Sizes",id:"sizes-portal",tabs:t.exampleTabs},{"example-description":r(()=>[N]),example:r(()=>[(p(!0),h(T,null,S(t.sizes,s=>(p(),h("div",null,[n("p",V,w(s),1),n("div",D,[n("div",O,[n("chi-button",{size:s,color:"primary"},"Button",8,L)]),n("div",j,[n("chi-button",{size:s},"Button",8,q)]),n("div",A,[n("chi-button",{size:s,variant:"flat",type:"icon","alternative-text":"Button action",ref_for:!0,ref:`Button-${s}`,"data-tooltip":"Button action","data-position":"bottom"},M,8,F)])])]))),256))]),"code-webcomponent":r(()=>[m(c,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[m(c,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const k=$(b,[["render",H]]);export{k as default};
