import{_ as z}from"./HHge0g2Y.js";import{_ as b}from"./C055cWll.js";import{_}from"./BQOZES6b.js";import{_ as h}from"./DvtYg461.js";import{e as p,f as m,w as n,o,a as e,b as t,d as l,j as g,c as y,k as x,l as v,F as I}from"./BX7DqjWX.js";import{_ as L}from"./B0-iP7s4.js";const w=p({__name:"_base",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__base">Label</chi-label>
  <chi-number-input id="example__base"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <div class="chi-number-input">
    <input id="example__base" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__base'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Base",id:"base"},{example:n(()=>i[0]||(i[0]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__base"},"Label"),e("chi-number-input",{id:"example__base"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),E=p({__name:"_disabled",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__disabled">Label</chi-label>
  <chi-number-input disabled id="example__disabled"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <div class="chi-number-input">
    <input id="example__disabled" type="number" class="chi-input" value="0" aria-label="Input Label" disabled>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__disabled'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Disabled",id:"disabled"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use the "),e("code",null,"disabled"),l(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),l(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__disabled"},"Label"),e("chi-number-input",{disabled:"",id:"example__disabled"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),B=p({__name:"_min-max-step",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__mms">Label</chi-label>
  <chi-number-input id="example__mms" min="1" max="6" step="2" value="1"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__mms">Label</label>
  <div class="chi-number-input">
    <input id="example__mms" type="number" class="chi-input" min="0" max="6" step="2" value="1" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(
    document.getElementById('example__mms'),
    {autofix: true}
  );
<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Min/Max/Step",id:"min-max-step"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use the "),e("code",null,"min"),l(" and "),e("code",null,"max"),l(" attributes to define minimum and maximum values on number inputs. Use the "),e("code",null,"step"),l(" attribute to indicate the expected granularity."),e("br"),e("br"),l("This example only accepts values between "),e("code",null,"0"),l(" and "),e("code",null,"6"),l(", and as the "),e("code",null,"step"),l(" is "),e("code",null,"2"),l(" and initial "),e("code",null,"value"),l(" is "),e("code",null,"1"),l(", only odd values are valid. Use the "),e("code",null,"chiNumberInvalid"),l(" event described in the events section to check if the entered value is valid.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__mms"},"Label"),e("chi-number-input",{id:"example__mms",min:"0",max:"6",step:"2",value:"1"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),S=p({__name:"_required",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__required" required>Label</chi-label>
  <chi-number-input id="example__required" required></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <div class="chi-number-input">
    <input id="example__required" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__required'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Required",id:"required"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use the "),e("code",null,"required"),l(" boolean attribute to indicate which inputs must be completed before submitting a form. To render a required input, apply the "),e("code",null,"required"),l(" attribute to the input. It is also encouraged but not mandatory to apply a "),e("code",null,"required"),l(" attribute to the corresponding label of the input which will automatically render a red asterisk. "),e("strong",null,"Note:"),l(" For HTML Blueprint implementations, the "),e("code",null,"required"),l(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__required",required:""},"Label"),e("chi-number-input",{id:"example__required",required:""})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),C=p({__name:"_help",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__help" info-icon info-icon-message="Helpful information goes here.">Label</chi-label>
  <chi-number-input id="example__help"></chi-number-input>
</div>
`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__help">Label</label>
    <div class="chi-label__help">
      <div
        class="chi-button -icon -flat -xs"
        id="example__help-icon"
        data-target="#example__help-popover"
        aria-label="Help"
      >
        <div class="chi-button__content">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </div>
      </div>
      <section class="chi-popover chi-popover--top" id="example__help-popover" aria-modal="true" role="dialog">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <div class="chi-number-input">
    <input id="example__help" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(document.getElementById('example__help'));
  chi.popover(document.getElementById('example__help-icon'));
<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Help",id:"help"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use "),e("code",null,"chi-label"),l("'s attributes "),e("code",null,"infoIcon"),l(" and "),e("code",null,"infoIconMessage"),l(" to include a help icon that displays helpful information in a popover.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__help","info-icon":"","info-icon-message":"Helpful information goes here."},"Label"),e("chi-number-input",{id:"example__help"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),q=p({__name:"_message",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__message">Label</chi-label>
  <chi-number-input id="example__message" helper-message="Optional helper message"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <div class="chi-number-input">
    <input id="example__message" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>

<script>chi.numberInput(document.getElementById('example__message'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Message",id:"message"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},"Add a message below an input to store descriptions, validation feedback, and other helpful information.",-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__message"},"Label"),e("chi-number-input",{id:"example__message","helper-message":"Optional helper message"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),D=p({__name:"_error",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__error">Quantity</chi-label>
  <chi-number-input id="example__error" inputstyle="danger" helper-message="Please enter a quantity"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__error">Quantity</label>
  <div class="chi-number-input">
    <input id="example__error" type="number" class="chi-input -danger" value="0" aria-label="Quantity">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please enter a quantity
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__error'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Error",id:"error"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use "),e("code",null,"danger"),l(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__error"},"Quantity"),e("chi-number-input",{id:"example__error",inputstyle:"danger","helper-message":"Please enter a quantity"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),N=p({__name:"_sizes_lumen_century_link",setup(r){const a={webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-label for="example__size-xs">Label</chi-label>
  <chi-number-input size="xs" id="example__size-xs"></chi-number-input>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-label for="example__size-sm">Label</chi-label>
  <chi-number-input size="sm" id="example__size-sm"></chi-number-input>
</div>

<!-- md -->
<div class="chi-form__item">
  <chi-label for="example__size-md">Label</chi-label>
  <chi-number-input size="md" id="example__size-md"></chi-number-input>
</div>

<!-- lg -->
<div class="chi-form__item">
  <chi-label for="example__size-lg">Label</chi-label>
  <chi-number-input size="lg" id="example__size-lg"></chi-number-input>
</div>

<!-- xl -->
<div class="chi-form__item">
  <chi-label for="example__size-xl">Label</chi-label>
  <chi-number-input size="xl" id="example__size-xl"></chi-number-input>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xs">Label</label>
  <div class="chi-number-input -xs">
    <input id="example__size-xs" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <div class="chi-number-input -sm">
    <input id="example__size-sm" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-sm'));<v/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <div class="chi-number-input -md">
    <input id="example__size-md" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <div class="chi-number-input -lg">
    <input id="example__size-lg" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xl">Label</label>
  <div class="chi-number-input -xl">
    <input id="example__size-xl" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-xl'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Sizes",id:"sizes_lumen_century_link"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Number inputs support the following sizes: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(", "),e("code",null,"xl"),l(". The default size is "),e("code",null,"md"),l(".")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__size-xs"},"Label"),e("chi-number-input",{size:"xs",id:"example__size-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__size-sm"},"Label"),e("chi-number-input",{size:"sm",id:"example__size-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__size-md"},"Label"),e("chi-number-input",{size:"md",id:"example__size-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__size-lg"},"Label"),e("chi-number-input",{size:"lg",id:"example__size-lg"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__size-xl"},"Label"),e("chi-number-input",{size:"xl",id:"example__size-xl"})])])],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),k=p({__name:"_sizes",setup(r){const a={webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-label for="example__size-xs">Label</chi-label>
  <chi-number-input size="xs" id="example__size-xs"></chi-number-input>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-label for="example__size-sm">Label</chi-label>
  <chi-number-input size="sm" id="example__size-sm"></chi-number-input>
</div>

<!-- md -->
<div class="chi-form__item">
  <chi-label for="example__size-md">Label</chi-label>
  <chi-number-input size="md" id="example__size-md"></chi-number-input>
</div>

<!-- lg -->
<div class="chi-form__item">
  <chi-label for="example__size-lg">Label</chi-label>
  <chi-number-input size="lg" id="example__size-lg"></chi-number-input>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xs">Label</label>
  <div class="chi-number-input -xs">
    <input id="example__size-xs" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <div class="chi-number-input -sm">
    <input id="example__size-sm" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <div class="chi-number-input -md">
    <input id="example__size-md" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <div class="chi-number-input -lg">
    <input id="example__size-lg" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-lg'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Sizes",id:"sizes_portal"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Number inputs support the following sizes: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(". The default size is "),e("code",null,"md"),l(".")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-size-xs"},"Label"),e("chi-number-input",{size:"xs",id:"example__portal-size-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-size-sm"},"Label"),e("chi-number-input",{size:"sm",id:"example__portal-size-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-size-md"},"Label"),e("chi-number-input",{size:"md",id:"example__portal-size-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-size-lg"},"Label"),e("chi-number-input",{size:"lg",id:"example__portal-size-lg"})])])],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),$=p({__name:"_base-expanded",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__expanded-base">Label</chi-label>
  <chi-number-input expanded id="example__expanded-base"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-base">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__expanded-base" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__expanded-base'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Base",id:"base-expanded"},{example:n(()=>i[0]||(i[0]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__base-expanded"},"Label"),e("chi-number-input",{expanded:"",id:"example__base-expanded"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),J=p({__name:"_disabled-expanded",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__expanded-disabled">Label</chi-label>
  <chi-number-input expanded disabled id="example__expanded-disabled"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-disabled">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__expanded-disabled" class="chi-input" type="number" value="0" aria-label="Input Label" disabled>
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__expanded-disabled'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Disabled",id:"disabled-expanded"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use the "),e("code",null,"disabled"),l(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),l(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-disabled"},"Label"),e("chi-number-input",{expanded:"",disabled:"",id:"example__expanded-disabled"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),T={class:"-text"},U=p({__name:"_min-max-step-expanded",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__expanded-mms">Label</chi-label>
  <chi-number-input expanded id="example__expanded-mms" min="1" max="6" step="2" value="1"></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-mms">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__expanded-mms" class="chi-input" type="number" min="0" max="6" "step="2" value="1" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>
  chi.numberInput(
    document.getElementById('example__expanded-mms'),
    {autofix: true}
  );
<\/script>`};return(u,i)=>{const s=L,c=b,d=_,f=h;return o(),m(f,{title:"Min/Max/Step",id:"min-max-step-expanded"},{"example-description":n(()=>[e("p",T,[i[1]||(i[1]=l("Use the ")),i[2]||(i[2]=e("code",null,"min",-1)),i[3]||(i[3]=l(" and ")),i[4]||(i[4]=e("code",null,"max",-1)),i[5]||(i[5]=l(" attributes to define minimum and maximum values on number inputs. Use the ")),i[6]||(i[6]=e("code",null,"step",-1)),i[7]||(i[7]=l(" attribute to indicate the expected granularity.")),i[8]||(i[8]=e("br",null,null,-1)),i[9]||(i[9]=e("br",null,null,-1)),i[10]||(i[10]=l("This example only accepts values between ")),i[11]||(i[11]=e("code",null,"0",-1)),i[12]||(i[12]=l(" and ")),i[13]||(i[13]=e("code",null,"6",-1)),i[14]||(i[14]=l(", and as the ")),i[15]||(i[15]=e("code",null,"step",-1)),i[16]||(i[16]=l(" is ")),i[17]||(i[17]=e("code",null,"2",-1)),i[18]||(i[18]=l(" and initial ")),i[19]||(i[19]=e("code",null,"value",-1)),i[20]||(i[20]=l(" is ")),i[21]||(i[21]=e("code",null,"1",-1)),i[22]||(i[22]=l(", only odd values are valid. Use the ")),i[23]||(i[23]=e("code",null,"chiNumberInvalid",-1)),i[24]||(i[24]=l(" event described in the ")),t(s,{to:"/components/forms/number-input/#events"},{default:n(()=>i[0]||(i[0]=[l("events")])),_:1}),i[25]||(i[25]=l(" section to check if the entered value is valid."))])]),example:n(()=>i[26]||(i[26]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-mms"},"Label"),e("chi-number-input",{expanded:"",min:"0",max:"6",step:"2",value:"1",id:"example__expanded-mms"})],-1)])),"code-webcomponent":n(()=>[t(c,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(d),t(c,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),M=p({__name:"_error-expanded",setup(r){const a={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__expanded-error">Quantity</chi-label>
  <chi-number-input
    expanded
    id="example__expanded-error"
    inputstyle="danger"
    helper-message="Please enter a quantity"
  ></chi-number-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-error">Label</label>
  <div class="chi-number-input -expanded">
    <input
      id="example__expanded-error"
      class="chi-input"
      type="number"
      value="0"
      aria-label="Input Label"
    />
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please enter a quantity
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__expanded-error'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Error",id:"error-expanded"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Use "),e("code",null,"danger"),l(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-error"},"Quantity"),e("chi-number-input",{id:"example__expanded-error",inputstyle:"danger",expanded:"","helper-message":"Please enter a quantity"})],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),P=p({__name:"_sizes-expanded_lumen_century_link",setup(r){const a={webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-xs">Label</chi-label>
  <chi-number-input expanded size="xs" id="example__expanded-size-xs"></chi-number-input>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-sm">Label</chi-label>
  <chi-number-input expanded size="sm" id="example__expanded-size-sm"></chi-number-input>
</div>

<!-- md -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-md">Label</chi-label>
  <chi-number-input expanded size="md" id="example__expanded-size-md"></chi-number-input>
</div>

<!-- lg -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-lg">Label</chi-label>
  <chi-number-input expanded size="lg" id="example__expanded-size-lg"></chi-number-input>
</div>

<!-- xl -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-xl">Label</chi-label>
  <chi-number-input expanded size="xl" id="example__expanded-size-xl"></chi-number-input>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-xs">Label</label>
  <div class="chi-number-input -expanded -xs">
    <input id="example__expanded-size-xs" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-sm">Label</label>
  <div class="chi-number-input -expanded -sm">
    <input id="example__expanded-size-sm" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-md">Label</label>
  <div class="chi-number-input -expanded -md">
    <input id="example__expanded-size-md" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-lg">Label</label>
  <div class="chi-number-input -expanded -lg">
    <input id="example__expanded-size-lg" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-xl">Label</label>
  <div class="chi-number-input -expanded -xl">
    <input id="example__expanded-size-xl" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-xl'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Sizes",id:"sizes-expanded_lumen_century_link"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Expanded number inputs support the following sizes: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(", "),e("code",null,"xl"),l(". The default size is "),e("code",null,"md"),l(".")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-size-xs"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"xs",id:"example__expanded-size-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-size-sm"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"sm",id:"example__expanded-size-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-size-md"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"md",id:"example__expanded-size-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-size-lg"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"lg",id:"example__expanded-size-lg"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__expanded-size-xl"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"xl",id:"example__expanded-size-xl"})])])],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),H=p({__name:"_sizes-expanded",setup(r){const a={webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-xs">Label</chi-label>
  <chi-number-input expanded size="xs" id="example__expanded-size-xs"></chi-number-input>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-sm">Label</chi-label>
  <chi-number-input expanded size="sm" id="example__expanded-size-sm"></chi-number-input>
</div>

<!-- md -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-md">Label</chi-label>
  <chi-number-input expanded size="md" id="example__expanded-size-md"></chi-number-input>
</div>

<!-- lg -->
<div class="chi-form__item">
  <chi-label for="example__expanded-size-lg">Label</chi-label>
  <chi-number-input expanded size="lg" id="example__expanded-size-lg"></chi-number-input>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-xs">Label</label>
  <div class="chi-number-input -expanded -xs">
    <input id="example__expanded-size-xs" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-sm">Label</label>
  <div class="chi-number-input -expanded -sm">
    <input id="example__expanded-size-sm" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-md">Label</label>
  <div class="chi-number-input -expanded -md">
    <input id="example__expanded-size-md" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-lg">Label</label>
  <div class="chi-number-input -expanded -lg">
    <input id="example__expanded-size-lg" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-lg'));<\/script>`};return(u,i)=>{const s=b,c=_,d=h;return o(),m(d,{title:"Sizes",id:"sizes-expanded_portal"},{"example-description":n(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Expanded number inputs support the following sizes: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(". The default size is "),e("code",null,"md"),l(".")],-1)])),example:n(()=>i[1]||(i[1]=[e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-expanded-size-xs"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"xs",id:"example__portal-expanded-size-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-expanded-size-sm"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"sm",id:"example__portal-expanded-size-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-expanded-size-md"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"md",id:"example__portal-expanded-size-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__portal-expanded-size-lg"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"lg",id:"example__portal-expanded-size-lg"})])])],-1)])),"code-webcomponent":n(()=>[t(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[t(c),t(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),A=p({__name:"index",setup(r){const a=g();return(u,i)=>{const s=z;return o(),y(I,null,[i[0]||(i[0]=e("h2",null,"Examples",-1)),t(w),t(E),t(B),t(s,null,{default:n(()=>[t(S),t(C)]),_:1}),t(q),t(D),["lumen","centurylink"].includes(x(a))?(o(),m(N,{key:0})):v("",!0),["portal"].includes(x(a))?(o(),m(k,{key:1})):v("",!0),i[1]||(i[1]=e("h2",null,"Expanded version",-1)),t($),t(J),t(U),t(M),t(s,null,{default:n(()=>[["lumen","centurylink"].includes(x(a))?(o(),m(P,{key:0})):v("",!0)]),_:1}),["portal"].includes(x(a))?(o(),m(H,{key:2})):v("",!0)],64)}}});export{A as _};
