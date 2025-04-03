import{_ as m}from"./LNeokCJg.js";import{_ as b}from"./rD-gEhvI.js";import{e as c,f as h,o as d,w as i,b as o,a as e,d as n,g as w,c as f,i as y,F as x}from"./-E9oTzhC.js";import{_ as O}from"./CXpDRGsh.js";import{_ as S}from"./B1sWQIZ5.js";const q=c({__name:"_base",setup(_){const s=[{label:"Option 1",name:"radios-base"},{label:"Option 2",name:"radios-base"}],a={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  id="form-wrapper-radio-base"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-base").options = [
  { label: "Option 1", name: "radios" },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__base_opt_1">
      <label class="chi-radio__label" for="example__base_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__base_opt_2">
      <label class="chi-radio__label" for="example__base_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(p,t)=>{const l=m,r=b;return d(),h(r,{title:"Base",id:"base"},{example:i(()=>[e("chi-form-wrapper",{type:"radio",label:"Select an option",options:s})]),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),C=c({__name:"_checked",setup(_){const s=[{label:"Option 1",name:"radios-checked",checked:!0},{label:"Option 2",name:"radios-checked"}],a={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  id="form-wrapper-radio-checked"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-checked").options = [
  { label: "Option 1", name: "radios", checked: true },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__checked_opt_1" checked>
      <label class="chi-radio__label" for="example__checked_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__checked_opt_2">
      <label class="chi-radio__label" for="example__checked_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(p,t)=>{const l=m,r=b;return d(),h(r,{title:"Checked",id:"checked"},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use the "),e("code",null,"checked"),n(" boolean attribute to set the value of a radio button input to true.")],-1)])),example:i(()=>[e("chi-form-wrapper",{type:"radio",label:"Select an option",options:s})]),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),k=c({__name:"_disabled",setup(_){const s=[{label:"Option 1",name:"radios-disabled",disabled:!0},{label:"Option 2",name:"radios-disabled"},{label:"Option 3",name:"radios-disabled"}],a={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  id="form-wrapper-radio-disabled"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-disabled").options = [
  { label: "Option 1", name: "radios", disabled: true },
  { label: "Option 2", name: "radios" },
  { label: "Option 3", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled_opt_1" disabled>
      <label class="chi-radio__label" for="example__disabled_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled_opt_2">
      <label class="chi-radio__label" for="example__disabled_opt_2">Option 2</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled_opt_3">
      <label class="chi-radio__label" for="example__disabled_opt_3">Option 3</label>
    </div>
  </div>
</fieldset>`};return(p,t)=>{const l=m,r=b;return d(),h(r,{title:"Disabled",id:"disabled"},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use the "),e("code",null,"disabled"),n(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.")],-1)])),example:i(()=>[e("chi-form-wrapper",{type:"radio",label:"Select an option",options:s})]),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),E=c({__name:"_required",setup(_){const s={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  required
  id="form-wrapper-radio-required"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-required").options = [
  { label: "Option 1", name: "radios" },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__required_opt_1" required>
      <label class="chi-radio__label" for="example__required_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__required_opt_2">
      <label class="chi-radio__label" for="example__required_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(a,p)=>{const t=m,l=b;return d(),h(l,{title:"Required",id:"required"},{"example-description":i(()=>p[0]||(p[0]=[e("p",{class:"-text"},[n("Use the "),e("code",null,"required"),n(" property to indicate which radio buttons must be completed before submitting a form.")],-1)])),example:i(()=>p[1]||(p[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},[n("Select an option"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__required_opt_1",label:"Option 1",name:"example__required-radios",required:""})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__required_opt_2",label:"Option 2",name:"example__required-radios"})])],-1)])),"code-webcomponent":i(()=>[o(t,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(t,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),$=c({__name:"_optional",setup(_){const s={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  optional
  id="form-wrapper-radio-optional"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-optional").options = [
  { label: "Option 1", name: "radios" },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__optional_opt_1">
      <label class="chi-radio__label" for="example__optional_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__optional_opt_2">
      <label class="chi-radio__label" for="example__optional_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(a,p)=>{const t=m,l=b;return d(),h(l,{title:"Optional",id:"optional"},{"example-description":i(()=>p[0]||(p[0]=[e("p",{class:"-text"},[n("Use "),e("code",null,"optional"),n(" property to help emphasize a group of radio button options are not required and can be skipped.")],-1)])),example:i(()=>p[1]||(p[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},[n("Select an option"),e("abbr",{class:"chi-label__optional","aria-label":"Optional field"},"(optional)")]),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__optional_opt_1",label:"Option 1",name:"example__optional-radios"})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__optional_opt_2",label:"Option 2",name:"example__optional-radios"})])],-1)])),"code-webcomponent":i(()=>[o(t,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(t,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),B={class:"chi-label__wrapper"},I={class:"chi-label__help"},R={ref:"popover",id:"example__help-popover",variant:"text",arrow:"",reference:"#example__help-button",position:"top"},H=c({__name:"_help",setup(_){const s=w("popover"),a=()=>{var t;return(t=s.value)==null?void 0:t.toggle()},p={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  info-icon
  info-icon-message="Helpful information goes here"
  id="form-wrapper-radio-help"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-help").options = [
  { label: "Option 1", name: "radios" },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example___help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example___help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__help_opt_1">
      <label class="chi-radio__label" for="example__help_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__help_opt_2">
      <label class="chi-radio__label" for="example__help_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`};return(t,l)=>{const r=O,u=m,v=S,g=b;return d(),h(g,{title:"Help",id:"help"},{"example-description":i(()=>l[0]||(l[0]=[e("p",{class:"-text"},[n("Use "),e("code",null,"info-icon"),n(" and "),e("code",null,"info-icon-message"),n(" to include a help icon that displays helpful information in a popover.")],-1)])),example:i(()=>[o(r,null,{default:i(()=>[e("fieldset",null,[e("div",B,[l[2]||(l[2]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",I,[e("chi-button",{id:"example__help-button",type:"icon",variant:"flat",size:"xs","aria-label":"Help",onClick:a},l[1]||(l[1]=[e("chi-icon",{icon:"circle-info-outline",size:"xs","aria-hidden":"true"},null,-1)])),e("chi-popover",R,"Helpful information goes here",512)])]),l[3]||(l[3]=e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__help_opt_1",label:"Option 1",name:"example__help-radios"})],-1)),l[4]||(l[4]=e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__help_opt_2",label:"Option 2",name:"example__help-radios"})],-1))])]),_:1})]),"code-webcomponent":i(()=>[o(u,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(v),o(u,{lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),U=c({__name:"_error",setup(_){const s=[{label:"Option 1",name:"radios-error"},{label:"Option 2",name:"radios-error"}],a={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  state="danger"
  helper-message="Please select an option"
  id="form-wrapper-radio-error"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-error").options = [
  { label: "Option 1", name: "radios" },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="example__error_opt_1" required>
      <label class="chi-radio__label" for="example__error_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="example__error_opt_2">
      <label class="chi-radio__label" for="example__error_opt_2">Option 2</label>
    </div>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select an option
  </div>
</fieldset>`};return(p,t)=>{const l=m,r=b;return d(),h(r,{title:"Error",id:"error"},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Set "),e("code",null,"danger"),n(" value to "),e("code",null,"state"),n(" property and set the "),e("code",null,"helper-message"),n(" to provide feedback to users when a selection has not been made. Once a selection has been made, the properties must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:i(()=>[e("chi-form-wrapper",{type:"radio",label:"Select an option",state:"danger","helper-message":"Please select an option",options:s})]),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),z=c({__name:"_inline",setup(_){const s=[{label:"Option 1",name:"radios-inline"},{label:"Option 2",name:"radios-inline"}],a={webcomponent:`<chi-form-wrapper
  type="radio"
  label="Select an option"
  layout="inline"
  id="form-wrapper-radio-inline"
></chi-form-wrapper>

<script>
document.getElementById("form-wrapper-radio-inline").options = [
  { label: "Option 1", name: "radios" },
  { label: "Option 2", name: "radios" },
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline_opt_1">
      <label class="chi-radio__label" for="example__inline_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline_opt_2" disabled>
      <label class="chi-radio__label" for="example__inline_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(p,t)=>{const l=m,r=b;return d(),h(r,{title:"Inline",id:"inline"},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Display two or more radio buttons in one row, by setting the "),e("code",null,"layout"),n(" property to "),e("code",null,"inline"),n(".")],-1)])),example:i(()=>[e("chi-form-wrapper",{type:"radio",label:"Select an option",layout:"inline",options:s})]),"code-webcomponent":i(()=>[o(l,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(l,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),N={class:"chi-form__item -list",style:{"max-width":"20rem"}},T={class:"chi-form__item"},V=["id","label"],D=c({__name:"_radio-button-list",setup(_){const s={webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_1" label="Option 1" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_2" label="Option 2" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_3" label="Option 3" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_4" label="Option 4" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_5" label="Option 5" name="radio-button-list"></chi-radio-button>
    </li>
  </ul>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_1">
        <label class="chi-radio__label" for="example__list_opt_1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_2">
        <label class="chi-radio__label" for="example__list_opt_2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_3">
        <label class="chi-radio__label" for="example__list_opt_3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_4">
        <label class="chi-radio__label" for="example__list_opt_4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_5">
        <label class="chi-radio__label" for="example__list_opt_5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`};return(a,p)=>{const t=m,l=b;return d(),h(l,{title:"Radio Button List",id:"radio-button-list","title-size":"h2"},{"example-description":i(()=>p[0]||(p[0]=[e("p",{class:"-text"},[n("Radio button lists are used to wrap a series of radio buttons in a list. To render a series of radio buttons in a list, apply the class "),e("code",null,"-list"),n(" to "),e("code",null,"chi-form__item"),n(".")],-1)])),example:i(()=>[e("fieldset",null,[p[1]||(p[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("ul",N,[(d(),f(x,null,y(5,r=>e("li",T,[e("chi-radio-button",{id:`example__list_opt_${r}`,label:`Option ${r}`,name:"radio-button-list"},null,8,V)])),64))])])]),"code-webcomponent":i(()=>[o(t,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[o(t,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),A=c({__name:"index",setup(_){return(s,a)=>(d(),f(x,null,[a[0]||(a[0]=e("h2",null,"Examples",-1)),o(q),o(C),o(k),o(E),o($),o(H),o(U),a[1]||(a[1]=e("h2",null,"Layout Variations",-1)),o(z),o(D)],64))}});export{A as _};
