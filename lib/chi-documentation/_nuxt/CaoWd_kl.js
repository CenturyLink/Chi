import{_ as r}from"./C055cWll.js";import{_ as m}from"./DvtYg461.js";import{e as c,f as b,w as l,o as _,a as e,b as t,d as s,g as w,c as u,i as x,F as f}from"./BX7DqjWX.js";import{_ as y}from"./HHge0g2Y.js";import{_ as S}from"./BQOZES6b.js";const q=c({__name:"_base",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__base_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__base_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Base",id:"base"},{example:l(()=>i[0]||(i[0]=[e("fieldset",null,[e("legend",{class:"chi-label"},"Select an option"),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__base_opt_1",label:"Option 1",name:"example__base-radios"})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__base_opt_2",label:"Option 2",name:"example__base-radios"})])],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),k=c({__name:"_checked",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__checked_opt_1" label="Option 1" name="radios" checked></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__checked_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Checked",id:"checked"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"checked"),s(" boolean attribute to set the default value of a radio button input to true.")],-1)])),example:l(()=>i[1]||(i[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},"Select an option"),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__checked_opt_1",label:"Option 1",name:"example__checked-radios",checked:""})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__checked_opt_2",label:"Option 2",name:"example__checked-radios"})])],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),C=c({__name:"_disabled",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__disabled_opt_1" label="Option 1" name="radios" disabled></chi-radio-button>
  </div>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__disabled_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__disabled_opt_3" label="Option 3" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Disabled",id:"disabled"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"disabled"),s(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.")],-1)])),example:l(()=>i[1]||(i[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},"Select an option"),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__disabled_opt_1",label:"Option 1",name:"example__disabled-radios",disabled:""})]),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__disabled_opt_2",label:"Option 2",name:"example__disabled-radios"})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__disabled_opt_3",label:"Option 3",name:"example__disabled-radios"})])],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),$=c({__name:"_required",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__required_opt_1" label="Option 1" name="radios" required></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__required_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Required",id:"required"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"required"),s(" boolean attribute to indicate which radio buttons must be completed before submitting a form.")],-1)])),example:l(()=>i[1]||(i[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},[s("Select an option"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__required_opt_1",label:"Option 1",name:"example__required-radios",required:""})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__required_opt_2",label:"Option 2",name:"example__required-radios"})])],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),E=c({__name:"_optional",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__optional_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__optional_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Optional",id:"optional"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"optional"),s(" to help emphasize a group of radio button options are not required and can be skipped.")],-1)])),example:l(()=>i[1]||(i[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},[s("Select an option"),e("abbr",{class:"chi-label__optional","aria-label":"Optional field"},"(optional)")]),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__optional_opt_1",label:"Option 1",name:"example__optional-radios"})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__optional_opt_2",label:"Option 2",name:"example__optional-radios"})])],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),B={class:"chi-label__wrapper"},R={class:"chi-label__help"},H={ref:"popover",id:"example__help-popover",variant:"text",arrow:"",reference:"#example__help-button",position:"top"},z=c({__name:"_help",setup(p){const a=w("popover"),d=()=>{var o;return(o=a.value)==null?void 0:o.toggle()},i={webcomponent:`<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <chi-button id="example__help-button" type="icon" variant="flat" size="xs" aria-label="Help">
        <chi-icon icon="circle-info-outline" size="xs" aria-hidden="true"></chi-icon>
      </chi-button>
      <chi-popover id="example__help-popover" variant="text" arrow reference="#example__help-button" position="top">
        Helpful information goes here
      </chi-popover>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__help_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__help_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>

<script>
  var helpButton = document.getElementById("example__help-button");

  helpButton.addEventListener("click", () => {
    var popover = document.getElementById("example__help-popover");

    popover.toggle();
  });
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

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`};return(o,n)=>{const h=y,v=r,g=S,O=m;return _(),b(O,{title:"Help",id:"help"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"chi-label__help"),s(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1)])),example:l(()=>[t(h,null,{default:l(()=>[e("fieldset",null,[e("div",B,[n[2]||(n[2]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",R,[e("chi-button",{id:"example__help-button",type:"icon",variant:"flat",size:"xs","aria-label":"Help",onClick:d},n[1]||(n[1]=[e("chi-icon",{icon:"circle-info-outline",size:"xs","aria-hidden":"true"},null,-1)])),e("chi-popover",H,"Helpful information goes here",512)])]),n[3]||(n[3]=e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__help_opt_1",label:"Option 1",name:"example__help-radios"})],-1)),n[4]||(n[4]=e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__help_opt_2",label:"Option 2",name:"example__help-radios"})],-1))])]),_:1})]),"code-webcomponent":l(()=>[t(v,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(g),t(v,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),U=c({__name:"_error",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__error_opt_1" label="Option 1" name="radios" state="danger" required></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__error_opt_2" label="Option 2" name="radios" state="danger"></chi-radio-button>
  </div>
  <div class="chi-label -status -danger">
    <chi-icon icon="circle-warning" aria-hidden="true"></chi-icon>
    Please select an option
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Error",id:"error"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"-danger"),s(" state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:l(()=>i[1]||(i[1]=[e("fieldset",null,[e("legend",{class:"chi-label"},[s("Select an option"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("div",{class:"chi-form__item -mb--1"},[e("chi-radio-button",{id:"example__error_opt_1",label:"Option 1",name:"example__error-radios",state:"danger",required:""})]),e("div",{class:"chi-form__item"},[e("chi-radio-button",{id:"example__error_opt_2",label:"Option 2",name:"example__error-radios",state:"danger"})]),e("div",{class:"chi-label -status -danger"},[e("chi-icon",{icon:"circle-warning","aria-hidden":"true"}),s("Please select an option")])],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),I={class:"chi-form__item -inline"},L=["id","label"],N=c({__name:"_inline",setup(p){const a={webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -inline">
    <chi-radio-button id="example__inline_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item -inline">
    <chi-radio-button id="example__inline_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Inline",id:"inline"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Apply "),e("code",null,"-inline"),s(" to display two or more radio buttons in one row.")],-1)])),example:l(()=>[e("fieldset",null,[i[1]||(i[1]=e("legend",{class:"chi-label"},"Select an option",-1)),(_(),u(f,null,x(2,h=>e("li",I,[e("chi-radio-button",{id:`example__inline_opt_${h}`,label:`Option ${h}`,name:"example__inline-radios"},null,8,L)])),64))])]),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),T={class:"chi-form__item -list",style:{"max-width":"20rem"}},V={class:"chi-form__item"},P=["id","label"],A=c({__name:"_radio-button-list",setup(p){const a={webcomponent:`<fieldset>
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
</fieldset>`};return(d,i)=>{const o=r,n=m;return _(),b(n,{title:"Radio Button List",id:"radio-button-list","title-size":"h2"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[s("Radio button lists are used to wrap a series of radio buttons in a list. To render a series of radio buttons in a list, apply the class "),e("code",null,"-list"),s(" to "),e("code",null,"chi-form__item"),s(".")],-1)])),example:l(()=>[e("fieldset",null,[i[1]||(i[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("ul",T,[(_(),u(f,null,x(5,h=>e("li",V,[e("chi-radio-button",{id:`example__list_opt_${h}`,label:`Option ${h}`,name:"radio-button-list"},null,8,P)])),64))])])]),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),K=c({__name:"index",setup(p){return(a,d)=>(_(),u(f,null,[d[0]||(d[0]=e("h2",null,"Examples",-1)),t(q),t(k),t(C),t($),t(E),t(z),t(U),d[1]||(d[1]=e("h2",null,"Layout Variations",-1)),t(N),t(A)],64))}});export{K as _};
