import{_ as d}from"./Cr4Krhex.js";import{_ as m}from"./Zvpnuh4B.js";import{e as p,f as b,o,w as t,b as l,a as e,d as a,c as u,i as x,F as g,l as v,j as k}from"./BnvmtQYM.js";const y=p({__name:"_base",setup(_){const i={webcomponent:'<chi-switch id="toggle-base" label="Label"></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-base">
    <input type="checkbox" class="chi-switch__input" id="toggle-base">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Base",id:"base"},{example:t(()=>s[0]||(s[0]=[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-base",label:"Label"})],-1)])),"code-webcomponent":t(()=>[l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),L=p({__name:"_checked",setup(_){const i={webcomponent:'<chi-switch id="toggle-checked" label="Label" checked></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-checked">
    <input type="checkbox" class="chi-switch__input" id="toggle-checked" checked>
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Checked",id:"checked"},{"example-description":t(()=>s[0]||(s[0]=[e("p",{class:"-text"},[a("Use the "),e("code",null,"checked"),a(" boolean attribute to set the default value of a toggle switch to true.")],-1)])),example:t(()=>s[1]||(s[1]=[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-checked",label:"Label",checked:""})],-1)])),"code-webcomponent":t(()=>[l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),C=p({__name:"_disabled",setup(_){const i={webcomponent:'<chi-switch id="toggle-disabled" label="Label" disabled></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-disabled">
    <input type="checkbox" class="chi-switch__input" name="toggle-disabled" value="toggle-disabled" disabled>
    <span id="toggle-disabled" class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Disabled",id:"disabled"},{"example-description":t(()=>s[0]||(s[0]=[e("p",{class:"-text"},[a("Use the "),e("code",null,"disabled"),a(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),a(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:t(()=>s[1]||(s[1]=[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-disabled",label:"Label",disabled:""})],-1)])),"code-webcomponent":t(()=>[l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),S=p({__name:"_stacked",setup(_){const i={webcomponent:`<div class="chi-form__item">
  <chi-switch id="toggle-stacked-1" label="Label"></chi-switch>
</div>
<div class="chi-form__item">
  <chi-switch id="toggle-stacked-2" label="Label"></chi-switch>
</div>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item">
    <label class="chi-switch" for="toggle-stacked-1">
      <input type="checkbox" class="chi-switch__input" id="toggle-stacked-1">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item">
    <label class="chi-switch" for="toggle-stacked-2">
      <input type="checkbox" class="chi-switch__input" id="toggle-stacked-2">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
</fieldset>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Stacked",id:"stacked"},{example:t(()=>s[0]||(s[0]=[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-stacked-1",label:"Label"})],-1),e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-stacked-2",label:"Label"})],-1)])),"code-webcomponent":t(()=>[l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),z=p({__name:"_inline",setup(_){const i={webcomponent:`<div class="chi-form__item -inline">
  <chi-switch id="toggle-inline-1" label="Label"></chi-switch>
</div>
<div class="chi-form__item -inline">
  <chi-switch id="toggle-inline-2" label="Label"></chi-switch>
</div>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item -inline">
    <label class="chi-switch" for="toggle-inline-1">
      <input type="checkbox" class="chi-switch__input" id="toggle-inline-1">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item -inline">
    <label class="chi-switch -xs" for="toggle-inline-2">
      <input type="checkbox" class="chi-switch__input" id="toggle-inline-2">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
</fieldset>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Inline",id:"inline"},{example:t(()=>s[0]||(s[0]=[e("div",{class:"-d--flex"},[e("div",{class:"chi-form__item -inline"},[e("chi-switch",{id:"toggle-inline-1",label:"Label"})]),e("div",{class:"chi-form__item -inline"},[e("chi-switch",{id:"toggle-inline-2",label:"Label"})])],-1)])),"code-webcomponent":t(()=>[s[1]||(s[1]=e("div",{class:"chi-tab__description"},[e("span",{class:"-text--grey"},[a("Apply the "),e("code",null,"-inline"),a(" class to "),e("code",null,"chi-form__item"),a(" for displaying toggle switches inline.")])],-1)),l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[s[2]||(s[2]=e("div",{class:"chi-tab__description"},[e("span",{class:"-text--grey"},[a("Apply the "),e("code",null,"-inline"),a(" class to "),e("code",null,"chi-form__item"),a(" for displaying toggle switches inline.")])],-1)),l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),$={class:"chi-form__item -list",style:{"max-width":"20rem"}},E={class:"chi-form__item"},T=["for"],B=["id"],A=p({__name:"_switch-list",setup(_){const i=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h=["toggle-list-1","toggle-list-2","toggle-list-3","toggle-list-4","toggle-list-5"],s={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle-list-1">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle-list-1">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle-list-2">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle-list-2">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle-list-3">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle-list-3">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle-list-4">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle-list-4">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item" for="toggle-list-5">
      <label class="chi-switch">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle-list-5">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
  </ul>
</fieldset>`};return(c,n)=>{const r=d,f=m;return o(),b(f,{title:"Switch List",id:"switch-list",tabs:i},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[a("Switch lists are used to wrap a series of switches in a list. To render, apply the class "),e("code",null,"-list"),a(" to "),e("code",null,"chi-form__item"),a(".")],-1)])),example:t(()=>[n[3]||(n[3]=e("legend",{class:"chi-label"},"Select options",-1)),e("ul",$,[(o(),u(g,null,x(h,w=>e("li",E,[e("label",{class:"chi-switch",for:`${w}`},[n[1]||(n[1]=e("span",{class:"chi-switch__label"},"Label",-1)),e("input",{class:"chi-switch__input",type:"checkbox",id:`${w}`},null,8,B),n[2]||(n[2]=e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})],-1))],8,T)])),64))])]),"code-webcomponent":t(()=>[l(r,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(r,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),N=p({__name:"_switch-left",setup(_){const i=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-left-label">
    <span class="chi-switch__label">Label</span>
    <input type="checkbox" class="chi-switch__input" id="toggle-left-label">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
  </label>
</div>`};return(s,c)=>{const n=d,r=m;return o(),b(r,{title:"Switch with Left Label",id:"switch-left-label",tabs:i},{example:t(()=>c[0]||(c[0]=[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch",for:"toggle-left-label"},[e("span",{class:"chi-switch__label"},"Label"),e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-left-label"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})])])],-1)])),"code-webcomponent":t(()=>[l(n,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(n,{class:"html",lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),U=p({__name:"_switch-hidden",setup(_){const i={webcomponent:`<div class="chi-form__item">
  <chi-switch id="toggle-hidden-label" label="Label" hide-label></chi-switch>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch -label--hide" for="toggle-hidden-label">
    <input type="checkbox" class="chi-switch__input" id="toggle-hidden-label">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Switch with Hidden Label",id:"switch-hidden-label"},{example:t(()=>s[0]||(s[0]=[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-hidden-label",label:"Label","hide-label":""})],-1)])),"code-webcomponent":t(()=>[s[1]||(s[1]=e("div",{class:"p--text chi-tab__description"},[a("Apply the "),e("code",null,"hide-label"),a(" attribute to "),e("code",null,"chi-switch"),a(" to render a switch without a label. Use this method for rendering switches in close proximity to other text that clearly describes its purpose.")],-1)),l(c,{lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[s[2]||(s[2]=e("div",{class:"p--text chi-tab__description"},[a("Apply the class "),e("code",null,"-label--hide"),a(" to "),e("code",null,"chi-switch"),a(" to render a switch without a label. Use this method for rendering switches in close proximity to other text that clearly describes its purpose.")],-1)),l(c,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),V=p({__name:"_sizes-lumen-centurylink",setup(_){const i={webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-switch id="toggle-xs" label="Label" size="xs"></chi-switch>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-switch id="toggle-sm" label="Label" size="sm"></chi-switch>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-switch -xs" for="toggle-xs">
    <input type="checkbox" class="chi-switch__input" id="toggle-xs">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-switch -sm" for="toggle-sm">
    <input type="checkbox" class="chi-switch__input" id="toggle-sm">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Sizes",id:"sizes-lumen-centurylink","title-size":"h2"},{"example-description":t(()=>s[0]||(s[0]=[e("div",{class:"p-text -mb--3 -text"},[a("Toggle switch supports different sizes: "),e("code",null,"xs"),a(", "),e("code",null,"sm"),a(". The default size is "),e("code",null,"sm"),a(".")],-1)])),example:t(()=>s[1]||(s[1]=[e("div",{class:"-p--2"},[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-xs",label:"Label",size:"xs"})])],-1),e("div",{class:"-p--2"},[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle-sm",label:"Label",size:"sm"})])],-1)])),"code-webcomponent":t(()=>[l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),H=p({__name:"_sizes",setup(_){const i={webcomponent:`<!-- sm -->
<div class="chi-form__item">
  <chi-switch id="toggle16" label="Label" size="sm"></chi-switch>
</div>`,htmlblueprint:`<!-- sm -->
<div class="chi-form__item">
  <label class="chi-switch -sm" for="toggle16">
    <input type="checkbox" class="chi-switch__input" id="toggle16">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`};return(h,s)=>{const c=d,n=m;return o(),b(n,{title:"Sizes",id:"sizes","title-size":"h2"},{"example-description":t(()=>s[0]||(s[0]=[e("div",{class:"p-text -mb--3 -text"},[a("Toggle switch supports one size: "),e("code",null,"sm"),a(".")],-1)])),example:t(()=>s[1]||(s[1]=[e("div",{class:"-p--2"},[e("div",{class:"chi-form__item"},[e("chi-switch",{id:"toggle16",label:"Label",size:"sm"})])],-1)])),"code-webcomponent":t(()=>[l(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[l(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),D={key:0},F={key:1},q=p({__name:"index",setup(_){const i=v();return(h,s)=>(o(),u(g,null,[s[0]||(s[0]=e("h2",null,"Examples",-1)),l(y),l(L),l(C),s[1]||(s[1]=e("h2",null,"Layout Variations",-1)),l(S),l(z),l(A),l(N),l(U),["lumen","centurylink"].includes(k(i))?(o(),u("div",D,[l(V)])):(o(),u("div",F,[l(H)]))],64))}});export{q as _};
