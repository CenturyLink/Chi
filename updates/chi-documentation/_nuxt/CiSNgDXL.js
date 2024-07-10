import{V as x,N as b}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as d,f as v,w as p,a as e,c as z,i as g,F as w,b as r,d as s}from"./B5CYXVwa.js";import{_ as L}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var S=Object.defineProperty,P=Object.getOwnPropertyDescriptor,T=(l,a,o,c)=>{for(var i=c>1?void 0:c?P(a,o):a,m=l.length-1,t;m>=0;m--)(t=l[m])&&(i=(c?t(a,o,i):t(i))||i);return c&&i&&S(a,o,i),i};let n=class extends x{};n=T([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__size-xs">Label</chi-label>
  <chi-text-input size="xs" id="example__size-xs"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-sm">Label</chi-label>
  <chi-text-input size="sm" id="example__size-sm"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-md">Label</chi-label>
  <chi-text-input size="md" id="example__size-md"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-lg">Label</chi-label>
  <chi-text-input size="lg" id="example__size-lg"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -xs" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -sm" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <input type="text" class="chi-input -md" id="example__size-md">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <input type="text" class="chi-input -lg" id="example__size-lg">
</div>`}})})],n);const $=e("p",{class:"-text"},[s("Text inputs supports the following sizes: "),e("code",null,"xs"),s(", "),e("code",null,"sm"),s(", "),e("code",null,"md"),s(", "),e("code",null,"lg"),s(". The default size is "),e("code",null,"md"),s(".")],-1),C={class:"chi-grid"},y={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},B={class:"chi-grid"},N={class:"chi-col -w--12 -mb--2"},V={class:"chi-form__item"},O=["for"],j=["size","id"];function D(l,a,o,c,i,m){const t=u,h=f;return d(),v(h,{title:"Sizes",id:"sizes-portal",tabs:l.exampleTabs},{"example-description":p(()=>[$]),example:p(()=>[e("div",C,[e("div",y,[e("div",B,[(d(),z(w,null,g(["xs","sm","md","lg"],_=>e("div",N,[e("div",V,[e("chi-label",{for:`example__size-${_}`},"Label",8,O),e("chi-text-input",{size:_,value:"Sample Text",id:`example__size-${_}`},null,8,j)])])),64))])])])]),"code-webcomponent":p(()=>[r(t,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[r(t,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=L(n,[["render",D]]);export{J as default};
