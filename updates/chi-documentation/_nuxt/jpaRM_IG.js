import{V as d,N as h}from"./uJTUijt2.js";import{_ as x}from"./D8GK0F__.js";import{_}from"./BLbnEGma.js";import{_ as f}from"./DKu8Jd2y.js";import{o as v,f as z,w as c,b as o,a as e,d as a}from"./B5CYXVwa.js";import{_ as g}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var L=Object.defineProperty,I=Object.getOwnPropertyDescriptor,y=(i,s,p,n)=>{for(var l=n>1?void 0:n?I(s,p):s,m=i.length-1,t;m>=0;m--)(t=i[m])&&(l=(n?t(s,p,l):t(l))||l);return n&&l&&L(s,p,l),l};let r=class extends d{};r=y([h({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label for="example-3-xs">Label</chi-label>
<chi-number-input size="xs" id="example-3-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example-3-sm">Label</chi-label>
<chi-number-input size="sm" id="example-3-sm"></chi-number-input>

<!-- md -->
<chi-label for="example-3-md">Label</chi-label>
<chi-number-input size="md" id="example-3-md"></chi-number-input>

<!-- lg -->
<chi-label for="example-3-lg">Label</chi-label>
<chi-number-input size="lg" id="example-3-lg"></chi-number-input>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-xs">Label</label>
  <div class="chi-number-input -xs">
    <input id="input-example-xs" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-sm">Label</label>
  <div class="chi-number-input -sm">
    <input id="input-example-sm" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-md">Label</label>
  <div class="chi-number-input -md">
    <input id="input-example-md" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-lg">Label</label>
  <div class="chi-number-input -lg">
    <input id="input-example-lg" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-lg'));<\/script>`}})})],r);const w=e("p",{class:"-text"},[a("Number inputs support the following sizes: "),e("code",null,"xs"),a(", "),e("code",null,"sm"),a(", "),e("code",null,"md"),a(", "),e("code",null,"lg"),a(". The default size is "),e("code",null,"md"),a(".")],-1),B=e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-sizes-xs"},"Label"),e("chi-number-input",{size:"xs",id:"example-portal-sizes-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-sizes-sm"},"Label"),e("chi-number-input",{size:"sm",id:"example-portal-sizes-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-sizes-md"},"Label"),e("chi-number-input",{size:"md",id:"example-portal-sizes-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-sizes-lg"},"Label"),e("chi-number-input",{size:"lg",id:"example-portal-sizes-lg"})])])],-1);function S(i,s,p,n,l,m){const t=x,u=_,b=f;return v(),z(b,{title:"Sizes",id:"sizes_portal",tabs:i.exampleTabs},{"example-description":c(()=>[w]),example:c(()=>[B]),"code-webcomponent":c(()=>[o(t,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[o(u),o(t,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=g(r,[["render",S]]);export{J as default};
