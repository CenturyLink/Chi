import{_ as k}from"./Kk1AK2EI.js";import{_}from"./DZscRdb4.js";import{_ as p}from"./DAVNcaGE.js";import{e as m,f as b,o as d,w as i,b as o,a as e,d as s,y as f,c as x,i as w,F as u}from"./pInVwq2A.js";import{_ as v}from"./h9qxsaIy.js";const g=m({__name:"_base",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__base" label="Checkbox"></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__base">
    <label class="chi-checkbox__label" for="example__base">Checkbox</label>
  </div>
</div>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Base",id:"base"},{example:i(()=>c[0]||(c[0]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__base",label:"Checkbox"})],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),y=m({__name:"_checked",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__checked" label="Checkbox" checked></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__checked" checked>
    <label class="chi-checkbox__label" for="example__checked">Checkbox</label>
  </div>
</div>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Checked",id:"checked"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"checked"),s(" boolean attribute to set the default value of a checkbox to true.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__checked",label:"Checkbox",checked:""})],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),O=m({__name:"_indeterminate",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__indeterminate" label="Checkbox" indeterminate></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input -indeterminate" id="example__indeterminate">
    <label class="chi-checkbox__label" for="example__indeterminate">Checkbox</label>
  </div>
</div>

<!-- JavaScript -->
<script>
  var checkbox = document.getElementById('example__indeterminate');
  
  checkbox.indeterminate = true;
<\/script>`};return f(()=>{const n=document.getElementById("example__indeterminate");n&&(n.indeterminate=!0)}),(n,c)=>{const l=_,a=v,r=p;return d(),b(r,{title:"Indeterminate",id:"indeterminate"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("A checkbox cannot be set to "),e("code",null,"indeterminate"),s(" state by an HTML attribute - it must be set by JavaScript. Use the class "),e("code",null,"-indeterminate"),s(" to achieve the corresponding style of the checkbox.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__indeterminate",label:"Checkbox",indeterminate:""})],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(a),o(l,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),C=m({__name:"_disabled",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__disabled" label="Checkbox" disabled></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__disabled" disabled>
    <label class="chi-checkbox__label" for="example__disabled">Checkbox</label>
  </div>
</div>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Disabled",id:"disabled"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"disabled"),s(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),s(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__disabled",label:"Checkbox",disabled:""})],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),S=m({__name:"_required",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__required" label="I accept the Terms of Service" required></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__required" required>
    <label class="chi-checkbox__label" for="example__required">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
</div>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Required",id:"required"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"required"),s(" boolean attribute to indicate which checkboxes must be completed before submitting a form. This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__required",label:"I accept the Terms of Service",required:""})],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),q=m({__name:"_help",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox 
    id="example__help" 
    label="Checkbox" 
    info-icon 
    info-icon-message="Helpful information goes here."
  ></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="example__help">
    <label class="chi-checkbox__label" for="example__help">Checkbox</label>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help_button" aria-label="Help" data-target="#example__help_popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example__help_popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
</div>

<script>chi.popover(document.getElementById('example__help_button'));<\/script>`};return(n,c)=>{const l=_,a=v,r=p;return d(),b(r,{title:"Help",id:"help"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use attribute "),e("code",null,"infoIcon"),s(" and "),e("code",null,"infoIconMessage"),s(" to include a help icon that displays helpful information in a popover.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__help",label:"Checkbox",infoIcon:"",infoIconMessage:"Helpful information goes here."})],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(a),o(l,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),E=m({__name:"_message",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__message" label="Checkbox"></chi-checkbox>
  <div class="chi-label -status">Optional helper message</div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__message">
    <label class="chi-checkbox__label" for="example__message">Checkbox</label>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Message",id:"message"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},"Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.",-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__message",label:"Checkbox"}),e("div",{class:"chi-label -status"},"Optional helper message")],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),I=m({__name:"_error",setup(h){const t={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__error" state="danger" label="I accept the Terms of Service" required></chi-checkbox>
  <div class="chi-label -status -danger">
    <chi-icon icon="circle-warning"></chi-icon>
    Please accept the terms of service
  </div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__error">
    <label class="chi-checkbox__label -danger" for="example__error">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please accept the terms of service
  </div>
</div>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Error",id:"error"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"-danger"),s(" state to provide feedback to users when an input fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__error",state:"danger",label:"I accept the Terms of Service",required:""}),e("div",{class:"chi-label -status -danger"},[e("chi-icon",{icon:"circle-warning"}),s("Please accept the terms of service")])],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),$=m({__name:"_stacked",setup(h){const t=[{label:"Option 1"},{label:"Option 2"}],n={webcomponent:`<chi-form-wrapper
  type="checkbox"
  label="Select options"
  id="form-wrapper-checkbox-stacked"
  helper-message="Optional helper message"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-checkbox-stacked").options = [
  { label: "Option 1" },
  { label: "Option 2" },
];
<\/script>
`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="example__stacked1">
      <label class="chi-checkbox__label" for="example__stacked1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="example__stacked2">
      <label class="chi-checkbox__label" for="example__stacked2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(c,l)=>{const a=_,r=p;return d(),b(r,{title:"Stacked",id:"stacked"},{"example-description":i(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"chi-form-wrapper"),s(" component for easy stacking.")],-1)])),example:i(()=>[e("chi-form-wrapper",{type:"checkbox",label:"Select options",options:t})]),"code-webcomponent":i(()=>[o(a,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l[1]||(l[1]=e("div",{class:"chi-tab__description"},[s("Group checkboxes in "),e("code",null,"chi-form__item"),s(" for easy stacking.")],-1)),o(a,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),T={class:"chi-grid"},B={class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},U={class:"chi-form__item"},H=["id","label"],N=m({__name:"_grid",setup(h){const t={webcomponent:`<fieldset>
  <div class="chi-grid">
    <div class="chi-col -w--12 -mb--1">
      <legend class="chi-label">Select options</legend>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid1" label="Option 1"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid2" label="Option 2"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid3" label="Option 3"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid4" label="Option 4"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid5" label="Option 5"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid6" label="Option 6"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid7" label="Option 7"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid8" label="Option 8"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid9" label="Option 9"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid10" label="Option 10"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid11" label="Option 11"></chi-checkbox>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="example__grid12" label="Option 12"></chi-checkbox>
      </div>
    </div>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <div class="chi-grid">
    <div class="chi-col -w--12 -mb--1">
      <legend class="chi-label">Select options</legend>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid1">
          <label class="chi-checkbox__label" for="example__grid1">Option 1</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid2">
          <label class="chi-checkbox__label" for="example__grid2">Option 2</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid3">
          <label class="chi-checkbox__label" for="example__grid3">Option 3</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid4">
          <label class="chi-checkbox__label" for="example__grid4">Option 4</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid5">
          <label class="chi-checkbox__label" for="example__grid5">Option 5</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid6">
          <label class="chi-checkbox__label" for="example__grid6">Option 6</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid7">
          <label class="chi-checkbox__label" for="example__grid7">Option 7</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid8">
          <label class="chi-checkbox__label" for="example__grid8">Option 8</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid9">
          <label class="chi-checkbox__label" for="example__grid9">Option 9</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid10">
          <label class="chi-checkbox__label" for="example__grid10">Option 10</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid11">
          <label class="chi-checkbox__label" for="example__grid11">Option 11</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="example__grid12">
          <label class="chi-checkbox__label" for="example__grid12">Option 12</label>
        </div>
      </div>
    </div>
  </div>
</fieldset>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Grid",id:"grid"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"chi-grid"),s(" to render a group of checkboxes in a responsive grid. In the example below, the checkboxes display in 4 columns on medium screens and up, 2 columns on small screens, and 1 column on x-small screens.")],-1)])),example:i(()=>[e("div",T,[c[1]||(c[1]=e("div",{class:"chi-col -w--12 -mb--1"},[e("legend",{class:"chi-label"},"Select options")],-1)),(d(),x(u,null,w(12,r=>e("div",B,[e("div",U,[e("chi-checkbox",{id:"checkbox-grid"+r,label:"Option "+r},null,8,H)])])),64))])]),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),M=m({__name:"_inline",setup(h){const t=[{label:"Option 1"},{label:"Option 2"}],n={webcomponent:`<chi-form-wrapper
  type="checkbox"
  label="Select options"
  id="form-wrapper-checkbox-inline"
  layout="inline"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-checkbox-inline").options = [
  { label: "Option 1" },
  { label: "Option 2" },
];
<\/script>
`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="example__inline1">
      <label class="chi-checkbox__label" for="example__inline1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="example__inline2">
      <label class="chi-checkbox__label" for="example__inline2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(c,l)=>{const a=_,r=p;return d(),b(r,{title:"Inline",id:"inline"},{"example-description":i(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"chi-form-wrapper"),s(" component with "),e("code",null,'layout="inline"'),s(" to display two or more checkboxes in one row.")],-1)])),example:i(()=>[e("chi-form-wrapper",{type:"checkbox",label:"Select options",options:t,layout:"inline"})]),"code-webcomponent":i(()=>[o(a,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l[1]||(l[1]=e("div",{class:"chi-tab__description"},[s("Apply the class "),e("code",null,"-inline"),s(" to "),e("code",null,"chi-form__item"),s(" to display two or more checkboxes in one row.")],-1)),o(a,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),P=m({__name:"_checkbox_list",setup(h){const t={webcomponent:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <chi-checkbox id="example__list1" label="Option 1"></chi-checkbox>
    </li>
    <li class="chi-form__item">
      <chi-checkbox id="example__list2" label="Option 2"></chi-checkbox>
    </li>
    <li class="chi-form__item">
      <chi-checkbox id="example__list3" label="Option 3"></chi-checkbox>
    </li>
    <li class="chi-form__item">
      <chi-checkbox id="example__list4" label="Option 4"></chi-checkbox>
    </li>
    <li class="chi-form__item">
      <chi-checkbox id="example__list5" label="Option 5"></chi-checkbox>
    </li>
  </ul>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="example__list1">
        <label class="chi-checkbox__label" for="example__list1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="example__list2">
        <label class="chi-checkbox__label" for="example__list2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="example__list3">
        <label class="chi-checkbox__label" for="example__list3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="example__list4">
        <label class="chi-checkbox__label" for="example__list4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="example__list5">
        <label class="chi-checkbox__label" for="example__list5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`};return(n,c)=>{const l=_,a=p;return d(),b(a,{title:"Checkbox List",id:"checkbox_list"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Checkbox lists are used to wrap a series of checkboxes in a list. To render a series of checkboxes in a list, apply the class "),e("code",null,"-list"),s(" to "),e("code",null,"chi-form__item"),s(".")],-1)])),example:i(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("ul",{class:"chi-form__item -list",style:{"max-width":"20rem"}},[e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list1",label:"Option 1"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list2",label:"Option 2"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list3",label:"Option 3"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list4",label:"Option 4"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list5",label:"Option 5"})])],-1)])),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),D=m({__name:"index",setup(h){return(t,n)=>{const c=k;return d(),x(u,null,[n[0]||(n[0]=e("h2",null,"Examples",-1)),o(g),o(y),o(O),o(C),o(S),o(c,null,{default:i(()=>[o(q)]),_:1}),o(E),o(I),n[1]||(n[1]=e("h2",null,"Layout Variations",-1)),o($),o(N),o(M),o(P)],64)}}});export{D as _};
