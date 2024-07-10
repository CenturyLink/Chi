import{V as _,N as d}from"./uJTUijt2.js";import{_ as b}from"./D8GK0F__.js";import{_ as u}from"./DKu8Jd2y.js";import{o as f,f as w,w as n,b as m,a as e,d as p}from"./B5CYXVwa.js";import{_ as x}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,z=(t,c,o,l)=>{for(var s=l>1?void 0:l?v(c,o):c,a=t.length-1,i;a>=0;a--)(i=t[a])&&(s=(l?i(c,o,s):i(s))||s);return l&&s&&g(c,o,s),s};let h=class extends _{};h=z([d({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-switch id="toggle15" label="Label" size="xs"></chi-switch>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-switch id="toggle16" label="Label" size="sm"></chi-switch>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-switch -xs" for="toggle15">
    <input type="checkbox" class="chi-switch__input" id="toggle15">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-switch -sm" for="toggle16">
    <input type="checkbox" class="chi-switch__input" id="toggle16">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],h);const L=e("div",{class:"p-text -mb--3 -text"},[p("Toggle switch supports different sizes: "),e("code",null,"xs"),p(", "),e("code",null,"sm"),p(". The default size is "),e("code",null,"xs"),p(".")],-1),P=e("div",{class:"-p--2"},[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle15",label:"Label",size:"xs"})])],-1),S=e("div",{class:"-p--2"},[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle16",label:"Label",size:"sm"})])],-1);function C(t,c,o,l,s,a){const i=b,r=u;return f(),w(r,{title:"Sizes",id:"sizes-portal",tabs:t.exampleTabs},{"example-description":n(()=>[L]),example:n(()=>[P,S]),"code-webcomponent":n(()=>[m(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[m(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const E=x(h,[["render",C]]);export{E as default};
