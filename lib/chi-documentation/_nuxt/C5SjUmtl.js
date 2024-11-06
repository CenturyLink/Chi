import{_ as k}from"./CcrI_bxZ.js";import{_ as m}from"./Di-ELn2D.js";import{_ as p}from"./Cx7J_iiN.js";import{e as _,o as d,f as b,w as i,a as e,b as l,d as s,z as x,c as u,i as f,F as w}from"./CRBsHPO5.js";import{_ as v}from"./D1M_ALV-.js";const g=_({__name:"_base",setup(h){const o={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__base" label="Checkbox"></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__base">
    <label class="chi-checkbox__label" for="example__base">Checkbox</label>
  </div>
</div>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Base",id:"base"},{example:i(()=>c[0]||(c[0]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__base",label:"Checkbox"})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),y=_({__name:"_checked",setup(h){const o={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__checked" label="Checkbox" checked></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__checked" checked>
    <label class="chi-checkbox__label" for="example__checked">Checkbox</label>
  </div>
</div>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Checked",id:"checked"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"checked"),s(" boolean attribute to set the default value of a checkbox to true.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__checked",label:"Checkbox",checked:""})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),O=_({__name:"_indeterminate",setup(h){const o={webcomponent:`<div class="chi-form__item">
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
<\/script>`};return x(()=>{const n=document.getElementById("example__indeterminate");n&&(n.indeterminate=!0)}),(n,c)=>{const t=m,a=v,r=p;return d(),b(r,{title:"Indeterminate",id:"indeterminate"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("A checkbox cannot be set to "),e("code",null,"indeterminate"),s(" state by an HTML attribute - it must be set by JavaScript. Use the class "),e("code",null,"-indeterminate"),s(" to achieve the corresponding style of the checkbox.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__indeterminate",label:"Checkbox",indeterminate:""})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(a),l(t,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),C=_({__name:"_disabled",setup(h){const o={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__disabled" label="Checkbox" disabled></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__disabled" disabled>
    <label class="chi-checkbox__label" for="example__disabled">Checkbox</label>
  </div>
</div>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Disabled",id:"disabled"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"disabled"),s(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),s(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__disabled",label:"Checkbox",disabled:""})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),S=_({__name:"_required",setup(h){const o={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__required" label="I accept the Terms of Service" required></chi-checkbox>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__required" required>
    <label class="chi-checkbox__label" for="example__required">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
</div>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Required",id:"required"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"required"),s(" boolean attribute to indicate which checkboxes must be completed before submitting a form. This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__required",label:"I accept the Terms of Service",required:""})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),q=_({__name:"_help",setup(h){const o={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__help" label="Checkbox">
    <div class="chi-label__help" slot="chi-checkbox__help">
      <chi-button id="example__help_button" type="icon" size="xs" variant="flat" alternative-text="Help">
        <chi-icon icon="circle-info-outline"></chi-icon>
      </chi-button>
    </div>
  </chi-checkbox>
</div>
<chi-popover id="example__help_popover" position="top" variant="text" arrow="arrow" reference="#example__help_button">
  Helpful information goes here.
</chi-popover>

<script>
  document.querySelector("#example__help_button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help_popover");
      popoverElem.toggle();
    });
<//script>`,htmlblueprint:`<div class="chi-form__item">
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

<script>chi.popover(document.getElementById('example__help_button'));<\/script>`};return x(()=>{chi.popover(document.getElementById("example__help_button"));const n=document.querySelector("#example__help_button");n&&n.addEventListener("click",function(){const c=document.querySelector("#example__help_popover");c&&c.toggle()})}),(n,c)=>{const t=m,a=v,r=p;return d(),b(r,{title:"Help",id:"help"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"chi-label__help"),s(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__help",label:"Checkbox"},[e("div",{class:"chi-label__help",slot:"chi-checkbox__help"},[e("chi-button",{id:"example__help_button",type:"icon",size:"xs",variant:"flat","alternative-text":"Help"},[e("chi-icon",{icon:"circle-info-outline"})])])]),e("chi-popover",{id:"example__help_popover",position:"top",variant:"text",arrow:"arrow",reference:"#example__help_button"},"Helpful information goes here.")],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(a),l(t,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),E=_({__name:"_message",setup(h){const o={webcomponent:`<div class="chi-form__item">
  <chi-checkbox id="example__message" label="Checkbox"></chi-checkbox>
  <div class="chi-label -status">Optional helper message</div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="example__message">
    <label class="chi-checkbox__label" for="example__message">Checkbox</label>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Message",id:"message"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},"Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.",-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__message",label:"Checkbox"}),e("div",{class:"chi-label -status"},"Optional helper message")],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),$=_({__name:"_error",setup(h){const o={webcomponent:`<div class="chi-form__item">
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
</div>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Error",id:"error"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"-danger"),s(" state to provide feedback to users when an input fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__error",state:"danger",label:"I accept the Terms of Service",required:""}),e("div",{class:"chi-label -status -danger"},[e("chi-icon",{icon:"circle-warning"}),s("Please accept the terms of service")])],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),I=_({__name:"_stacked",setup(h){const o={webcomponent:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item -mb--1">
    <chi-checkbox id="example__stacked1" label="Option 1"></chi-checkbox>
  </div>
  <div class="chi-form__item">
    <chi-checkbox id="example__stacked2" label="Option 2"></chi-checkbox>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Stacked",id:"stacked"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Group checkboxes in "),e("code",null,"chi-form__item"),s(" for easy stacking.")],-1)])),example:i(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("div",{class:"chi-form__item -mb--1"},[e("chi-checkbox",{id:"example__stacked1",label:"Option 1"})],-1),e("div",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__stacked2",label:"Option 2"})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),T={class:"chi-grid"},B={class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},H={class:"chi-form__item"},U=["id","label"],L=_({__name:"_grid",setup(h){const o={webcomponent:`<fieldset>
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
</fieldset>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Grid",id:"grid"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"chi-grid"),s(" to render a group of checkboxes in a responsive grid. In the example below, the checkboxes display in 4 columns on medium screens and up, 2 columns on small screens, and 1 column on x-small screens.")],-1)])),example:i(()=>[e("div",T,[c[1]||(c[1]=e("div",{class:"chi-col -w--12 -mb--1"},[e("legend",{class:"chi-label"},"Select options")],-1)),(d(),u(w,null,f(12,r=>e("div",B,[e("div",H,[e("chi-checkbox",{id:"checkbox-grid"+r,label:"Option "+r},null,8,U)])])),64))])]),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),N=_({__name:"_inline",setup(h){const o={webcomponent:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item -inline">
    <chi-checkbox id="example__inline1" label="Option 1"></chi-checkbox>
  </div>
  <div class="chi-form__item -inline">
    <chi-checkbox id="example__inline2" label="Option 2"></chi-checkbox>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Inline",id:"inline"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Apply the class "),e("code",null,"-inline"),s(" to "),e("code",null,"chi-form__item"),s(" to display two or more checkboxes in one row.")],-1)])),example:i(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("div",{class:"chi-form__item -inline"},[e("chi-checkbox",{id:"example__inline1",label:"Option 1"})],-1),e("div",{class:"chi-form__item -inline"},[e("chi-checkbox",{id:"example__inline2",label:"Option 2"})],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),P=_({__name:"_checkbox_list",setup(h){const o={webcomponent:`<fieldset>
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
</fieldset>`};return(n,c)=>{const t=m,a=p;return d(),b(a,{title:"Checkbox List",id:"checkbox_list"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Checkbox lists are used to wrap a series of checkboxes in a list. To render a series of checkboxes in a list, apply the class "),e("code",null,"-list"),s(" to "),e("code",null,"chi-form__item"),s(".")],-1)])),example:i(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("ul",{class:"chi-form__item -list",style:{"max-width":"20rem"}},[e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list1",label:"Option 1"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list2",label:"Option 2"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list3",label:"Option 3"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list4",label:"Option 4"})]),e("li",{class:"chi-form__item"},[e("chi-checkbox",{id:"example__list5",label:"Option 5"})])],-1)])),"code-webcomponent":i(()=>[l(t,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[l(t,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),R=_({__name:"index",setup(h){return(o,n)=>{const c=k;return d(),u("div",null,[n[0]||(n[0]=e("h2",null,"Examples",-1)),l(g),l(y),l(O),l(C),l(S),l(c,null,{default:i(()=>[l(q)]),_:1}),l(E),l($),n[1]||(n[1]=e("h2",null,"Layout Variations",-1)),l(I),l(L),l(N),l(P)])}}});export{R as _};
