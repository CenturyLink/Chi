import{V as _,N as m}from"./uJTUijt2.js";import{_ as d}from"./D8GK0F__.js";import{_ as b}from"./DKu8Jd2y.js";import{o as u,f,w as n,b as r,a as o}from"./B5CYXVwa.js";import{_ as w}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,x=(t,l,c,a)=>{for(var e=a>1?void 0:a?v(l,c):l,i=t.length-1,s;i>=0;i--)(s=t[i])&&(e=(a?s(l,c,e):s(e))||e);return a&&e&&g(l,c,e),e};let p=class extends _{};p=x([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-switch id="portal-toggle3" size="xs" label="Label"></chi-switch>
</div>
<div class="chi-form__item">
  <chi-switch id="portal-toggle4" size="xs" label="Label"></chi-switch>
</div>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item">
    <label class="chi-switch -xs" for="portal-toggle3">
      <input type="checkbox" class="chi-switch__input" id="portal-toggle3">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item">
    <label class="chi-switch -xs" for="portal-toggle4">
      <input type="checkbox" class="chi-switch__input" id="portal-toggle4">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
</fieldset>`}})})],p);const S=o("div",{class:"chi-form__item"},[o("chi-switch",{id:"portal-toggle3",size:"xs",label:"Label"})],-1),C=o("div",{class:"chi-form__item"},[o("chi-switch",{id:"portal-toggle4",size:"xs",label:"Label"})],-1);function L(t,l,c,a,e,i){const s=d,h=b;return u(),f(h,{titleSize:"h4",title:"Stacked",id:"stacked-portal",tabs:t.exampleTabs},{example:n(()=>[S,C]),"code-webcomponent":n(()=>[r(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[r(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const T=w(p,[["render",L]]);export{T as default};
