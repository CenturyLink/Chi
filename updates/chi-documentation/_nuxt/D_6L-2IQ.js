import{V as d,N as _}from"./uJTUijt2.js";import{_ as b}from"./D8GK0F__.js";import{_ as u}from"./DKu8Jd2y.js";import{o as f,f as w,w as n,b as r,a as p,d as h}from"./B5CYXVwa.js";import{_ as x}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,C=(t,c,s,l)=>{for(var e=l>1?void 0:l?v(c,s):c,a=t.length-1,o;a>=0;a--)(o=t[a])&&(e=(l?o(c,s,e):o(e))||e);return l&&e&&g(c,s,e),e};let i=class extends d{};i=C([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-switch id="toggle-portal-ch1" label="Label" checked></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch -xs" for="toggle-portal-ch1">
    <input type="checkbox" class="chi-switch__input" id="toggle-portal-ch1" checked>
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],i);const k=p("p",{class:"-text"},[h("Use the "),p("code",null,"checked"),h(" boolean attribute to set the default value of a toggle switch to true.")],-1),P=p("div",{class:"chi-form__item"},[p("chi-switch",{id:"toggle-portal-ch1",size:"xs",label:"Label",checked:""})],-1);function N(t,c,s,l,e,a){const o=b,m=u;return f(),w(m,{titleSize:"h4",title:"Checked",id:"checked-portal",tabs:t.exampleTabs},{"example-description":n(()=>[k]),example:n(()=>[P]),"code-webcomponent":n(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const z=x(i,[["render",N]]);export{z as default};
