import{V as h,N as b}from"./uJTUijt2.js";import{_ as f}from"./D8GK0F__.js";import{_ as u}from"./DKu8Jd2y.js";import{o as d,f as v,w as r,a as e,c as S,i as g,F as w,b as n,d as s}from"./B5CYXVwa.js";import{_ as z}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var L=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(a,i,o,c)=>{for(var l=c>1?void 0:c?P(i,o):i,m=a.length-1,t;m>=0;m--)(t=a[m])&&(l=(c?t(i,o,l):t(l))||l);return c&&l&&L(i,o,l),l};let p=class extends h{};p=$([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__xs">Label</chi-label>
  <chi-textarea size="sm" id="example__xs">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__sm">Label</chi-label>
  <chi-textarea size="sm" id="example__sm">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__md">Label</chi-label>
  <chi-textarea size="md" id="example__md">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__lg">Label</chi-label>
  <chi-textarea size="lg" id="example__lg">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__xs">Label</label>
  <textarea class="chi-input -xs" id="example__xs">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__sm">Label</label>
  <textarea class="chi-input -sm" id="example__sm">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__md">Label</label>
  <textarea class="chi-input -md" id="example__md">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__lg">Label</label>
  <textarea class="chi-input -lg" id="example__lg">Sample text</textarea>
</div>`}})})],p);const C=e("p",{class:"-text"},[s("Textareas support the following sizes: "),e("code",null,"xs"),s(", "),e("code",null,"sm"),s(", "),e("code",null,"md"),s(", "),e("code",null,"lg"),s(". The default size is "),e("code",null,"md"),s(".")],-1),T={class:"chi-grid"},B={class:"chi-col -w--12 -w-sm--8 -w-md--6"},N={class:"chi-grid"},V={class:"chi-col -w--12 -mb--2"},O={class:"chi-form__item"},j=["for"],D=["size","id"];function E(a,i,o,c,l,m){const t=f,x=u;return d(),v(x,{title:"Sizes",id:"sizes-portal",tabs:a.exampleTabs},{"example-description":r(()=>[C]),example:r(()=>[e("div",T,[e("div",B,[e("div",N,[(d(),S(w,null,g(["xs","sm","md","lg"],_=>e("div",V,[e("div",O,[e("chi-label",{for:`example__${_}`},"Label",8,j),e("chi-textarea",{size:_,id:`example__${_}`},"Sample text",8,D)])])),64))])])])]),"code-webcomponent":r(()=>[n(t,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(t,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=z(p,[["render",E]]);export{J as default};
