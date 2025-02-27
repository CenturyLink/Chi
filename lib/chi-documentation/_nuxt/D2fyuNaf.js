import{_}from"./COVoLJ_Y.js";import{_ as b}from"./B7NIkgJJ.js";import{e as d,o as r,f as v,w as i,a as e,b as n,d as s,c as k,j as O,F as f,t as y,i as $}from"./DbZ0H-_C.js";import{_ as I}from"./BlEjq2Oq.js";const L=d({__name:"_base",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Select options" id="base-picker"></chi-picker>

<script>
  document.getElementById('base-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mba" type="checkbox" id="unique-id-mba1">
    <label for="unique-id-mba1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mba" type="checkbox" id="unique-id-mba2">
    <label for="unique-id-mba2">Option 2</label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{titleSize:"h4",title:"Base",id:"base",padding:"-p--4"},{example:i(()=>[e("chi-picker",{label:"Select options",options:o})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),U=d({__name:"_checked",setup(m){const o=[{label:"Option 1",checked:!0},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Select options" id="checked-picker"></chi-picker>

<script>
  document.getElementById('checked-picker').options = [
    { label: 'Option 1', checked: true },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mch" type="checkbox" id="unique-id-mch1" checked>
    <label for="unique-id-mch1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mch" type="checkbox" id="unique-id-mch2">
    <label for="unique-id-mch2">Option 2</label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{titleSize:"h4",title:"Checked",id:"checked",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"checked"),s(" property to set the default value of a picker input to true.")],-1)])),example:i(()=>[e("chi-picker",{label:"Select options",options:o})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),E=d({__name:"_disabled",setup(m){const o=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3",disabled:!0}],t={webcomponent:`<chi-picker label="Select options" id="disabled-picker"></chi-picker>

<script>
  document.getElementById('disabled-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3', disabled: true},
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi1">
    <label for="unique-id-mdi1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi2">
    <label for="unique-id-mdi2">Option 2</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi3" disabled>
    <label for="unique-id-mdi3">Option 3</label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{titleSize:"h4",title:"Disabled",id:"disabled",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"disabled"),s(" property to prevent users from interacting with a picker input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.")],-1)])),example:i(()=>[e("chi-picker",{label:"Select options",options:o})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),C=d({__name:"_required",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Select options" id="required-picker" required></chi-picker>

<script>
  document.getElementById('required-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre1" required>
    <label for="unique-id-mre1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre2">
    <label for="unique-id-mre2">Option 2</label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{titleSize:"h4",title:"Required",id:"required",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"required"),s(" boolean attribute to indicate which pickers must be completed before submitting a form.")],-1)])),example:i(()=>[e("chi-picker",{label:"Select options",options:o,required:""})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),P=d({__name:"_optional",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Select options" id="optional-picker" optional></chi-picker>

<script>
  document.getElementById('optional-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mop" type="checkbox" id="unique-id-mop1">
    <label for="unique-id-mop1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mop" type="checkbox" id="unique-id-mop2">
    <label for="unique-id-mop2">Option 2</label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{titleSize:"h4",title:"Optional",id:"optional",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"optional"),s(" to help emphasize pickers that are not required and can be skipped.")],-1)])),example:i(()=>[e("chi-picker",{label:"Select options",options:o,optional:""})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),D=d({__name:"_help",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker
  label="Select options"
  id="help-picker"
  info-icon
  info-icon-message="Helpful information goes here."
></chi-picker>

<script>
  document.getElementById('help-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select options</legend>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example__help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mhe" type="checkbox" id="unique-id-mhe1">
    <label for="unique-id-mhe1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mhe" type="checkbox" id="unique-id-mhe2">
    <label for="unique-id-mhe2">Option 2</label>
  </div>
</fieldset>

<script>
  chi.popover(document.getElementById('example__help-button'));
<\/script>`};return(h,c)=>{const a=_,p=I,l=b;return r(),v(l,{titleSize:"h4",title:"Help",id:"help",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"info-icon"),s(" and "),e("code",null,"info-icon-message"),s(" properties to include a help icon that displays helpful information about an input in a popover.")],-1)])),example:i(()=>[e("chi-picker",{label:"Select options",options:o,"info-icon":"","info-icon-message":"Helpful information goes here."})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(p,null,{default:i(()=>c[1]||(c[1]=[e("p",{class:"-mb--0"},[s("Use "),e("code",null,"chi-label__help"),s(" to include a help icon. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1)])),_:1}),n(a,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),N=d({__name:"_pill",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Legend" id="pill-picker" pill></chi-picker>

<script>
document.getElementById('pill-picker').options = [
  { label: 'Option 1' },
  { label: 'Option 2' }
];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="-d--flex">
    <div class="chi-picker -pill -sm">
      <input class="chi-picker__input" type="radio" name="unique-name-sba" id="unique-id-pill-1" checked />
      <label for="unique-id-pill-1">Option 1</label>
    </div>
    <div class="chi-picker -pill -sm">
      <input class="chi-picker__input" type="radio" name="unique-name-sba" id="unique-id-pill-2" />
      <label for="unique-id-pill-2">Option 2</label>
    </div>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Pill",id:"pill",titleSize:"h2",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"pill"),s(" property to render picker with a more pronounced border-radius.")],-1),e("p",{class:"-text"},[s("Picker pills support the following sizes: "),e("code",null,"-sm"),s(", "),e("code",null,"-xs"),s(".")],-1)])),example:i(()=>[e("chi-picker",{label:"Legend",pill:"",options:o})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[c[1]||(c[1]=e("div",{class:"chi-tab__description"},[s("Use the "),e("code",null,"-pill"),s(" modifier class")],-1)),n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),V=d({__name:"_error",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker
  label="Select options"
  id="error-picker"
  helper-message="Please select an option"
  state="danger"
></chi-picker>

<script>
  document.getElementById('error-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mer" type="checkbox" id="unique-id-mer1" required>
    <label for="unique-id-mer1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mer" type="checkbox" id="unique-id-mer2">
    <label for="unique-id-mer2">Option 2</label>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select an option
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{titleSize:"h4",title:"Error",id:"error",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"helper-message"),s(" along with "),e("code",null,"danger"),s(" state properties to provide feedback to users when an input fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:i(()=>[e("chi-picker",{label:"Select options",options:o,"helper-message":"Please select an option",state:"danger"})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[c[1]||(c[1]=e("div",{class:"chi-tab__description"},[s("Use the "),e("code",null,"-danger"),s(" state to provide feedback to users.")],-1)),n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),B={class:"-pb--2 -px--4"},H={class:"-my--3"},R=["options","size","show-input"],W={key:0,slot:"content-end-option-1"},T={key:1,slot:"content-end-option-2"},x="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.",F=d({__name:"_sizes",setup(m){const o=[{title:"Base",options:[{label:"Option 1",checked:!0},{label:"Option 2"}]},{title:"With input",showInput:!0,options:[{label:"Option 1",checked:!0},{label:"Option 2"}]},{title:"Description",showInput:!0,options:[{label:"Option 1",checked:!0,description:x},{label:"Option 2",description:x}]},{title:"Description with price",showInput:!0,contentEnd:!0,options:[{label:"Option 1",checked:!0,id:"option-1",description:x},{label:"Option 2",id:"option-2",description:x}]}],t=["md","lg"],h=l=>`<!-- ${l} -->
<!-- base -->
<chi-picker label="Select an option" id="${l}-picker"></chi-picker>

<!-- with input -->
<chi-picker label="Select an option" id="${l}-input-picker" show-input></chi-picker>

<!-- with input and description -->
<chi-picker label="Select an option" id="${l}-input-description-picker" show-input></chi-picker>

<!-- with input, description and price -->
<chi-picker label="Select an option" id="${l}-input-description-price-picker" show-input>
  <div slot="content-end-option-1">
    <div class="chi-picker__label">
      $0.00
      <span class="-text--normal">/mo</span>
    </div>
  </div>
  <div slot="content-end-option-2">
    <div class="chi-picker__label">
      $19.95
      <span class="-text--normal">/mo</span>
    </div>
  </div>
</chi-picker>`,c=()=>t.reduce((l,u)=>l+`
  <!-- ${u} -->
  document.getElementById('${u}-picker').options = [{ label: 'Option 1', checked: true }, { label: 'Option 2' }];
  document.getElementById('${u}-input-picker').options = [{ label: 'Option 1', checked: true }, { label: 'Option 2' }];
  document.getElementById('${u}-input-description-picker').options = [
    {
      label: 'Option 1',
      checked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    },
    {
      label: 'Option 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    }
  ];
  document.getElementById('md-input-description-price-picker').options = [
    {
      label: 'Option 1',
      checked: true,
      id: 'option-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    },
    {
      label: 'Option 2',
      id: 'option-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    }
  ];
`,`
<script>`)+"<\/script>",a=l=>`<!-- ${l} -->

<!-- Base -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-base" id="unique-id-${l}-base-1" checked>
    <label for="unique-id-${l}-base-1">Option 1</label>
  </div>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-base" id="unique-id-${l}-base-2">
    <label for="unique-id-${l}-base-2">Option 2</label>
  </div>
</fieldset>

<!-- With input -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-icon" id="unique-id-${l}-icon-1" checked>
    <label for="unique-id-${l}-icon-1">
      <div class="chi-form__item -row">
        <span class="chi-picker__radio"></span>
        <span class="chi-picker__label">Option 1</span>
      </div>
    </label>
  </div>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-icon" id="unique-id-${l}-icon-2">
    <label for="unique-id-${l}-icon-2">
      <div class="chi-form__item -row">
        <span class="chi-picker__radio"></span>
        <span class="chi-picker__label">Option 2</span>
      </div>
    </label>
  </div>
</fieldset>

<!-- Description -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-description" id="unique-id-${l}-description-1" checked>
    <label for="unique-id-${l}-description-1">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__radio"></span>
          <span class="chi-picker__label">Option 1</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-description" id="unique-id-${l}-description-2">
    <label for="unique-id-${l}-description-2">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__radio"></span>
          <span class="chi-picker__label">Option 2</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
</fieldset>

<!-- Description with Price -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-description-price" id="unique-id-${l}-description-price-1" checked>
    <label for="unique-id-${l}-description-price-1">
      <div class="chi-picker__content">
        <div class="chi-picker__content--start -w--100 -w-sm--65">
          <div class="chi-form__item -row">
            <span class="chi-picker__radio"></span>
            <span class="chi-picker__label">Option 1</span>
          </div>
          <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex.</div>
        </div>
        <div class="chi-picker__content--end">
          <div class="chi-picker__label">
            $0.00<span class="-text--normal">/mo</span>
          </div>
        </div>
      </div>
    </label>
  </div>
  <div class="chi-picker -${l}">
    <input class="chi-picker__input" type="radio" name="unique-name-${l}-description-price" id="unique-id-${l}-description-price-2">
    <label for="unique-id-${l}-description-price-2">
      <div class="chi-picker__content">
        <div class="chi-picker__content--start -w--100 -w-sm--65">
          <div class="chi-form__item -row">
            <span class="chi-picker__radio"></span>
            <span class="chi-picker__label">Option 2</span>
          </div>
          <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex.</div>
        </div>
        <div class="chi-picker__content--end">
          <div class="chi-picker__label">
            $0.00<span class="-text--normal">/mo</span>
          </div>
        </div>
      </div>
    </label>
  </div>
</fieldset>

`,p={webcomponent:t.reduce((l,u)=>l+h(u),"")+c(),htmlblueprint:t.reduce((l,u)=>l+a(u),"")};return(l,u)=>{const q=_,S=b;return r(),v(S,{titleSize:"h2",title:"Sizes",id:"sizes",padding:"-p--3"},{"example-description":i(()=>u[0]||(u[0]=[e("p",{class:"-text"},[s("Pickers support the following sizes: "),e("code",null,"md"),s(", "),e("code",null,"lg"),s(". The default size is "),e("code",null,"md"),s(".")],-1)])),example:i(()=>[(r(),k(f,null,O(["md","lg"],w=>(r(),k(f,null,[e("h4",null,y(w),1),u[3]||(u[3]=e("div",{class:"chi-divider"},null,-1)),(r(),k(f,null,O(o,g=>e("div",B,[e("h5",H,y(g.title),1),e("chi-picker",{label:"Select an option",options:g.options,size:w,"show-input":g.showInput},[g.contentEnd?(r(),k("div",W,u[1]||(u[1]=[e("div",{class:"chi-picker__label"},[s("$0.00"),e("span",{class:"-text--normal"},"/mo")],-1)]))):$("",!0),g.contentEnd?(r(),k("div",T,u[2]||(u[2]=[e("div",{class:"chi-picker__label"},[s("$19.95"),e("span",{class:"-text--normal"},"/mo")],-1)]))):$("",!0)],8,R)])),64))],64))),64))]),"code-webcomponent":i(()=>[n(q,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(q,{class:"html",lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),j=d({__name:"_single-select",setup(m){const o=[{label:"Option 1"},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Legend" id="single-select-picker" type="radio"></chi-picker>

<script>
  document.getElementById('single-select-picker').options = [
    { label: 'Option 1' },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sba" type="radio" id="unique-id-sba1" />
    <label for="unique-id-sba1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sba" type="radio" id="unique-id-sba2" />
    <label for="unique-id-sba2">Option 2</label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Single-select pickers",id:"single-select-pickers",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,'type="radio"'),s(" for single-select pickers when only one option can be chosen.")],-1)])),example:i(()=>[e("chi-picker",{label:"Legend",type:"radio",options:o})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),A=d({__name:"_checkbox",setup(m){const o=[{label:"Option 1",checked:!0},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Legend" id="checkbox-picker" show-input></chi-picker>

<script>
  document.getElementById('checkbox-picker').options = [
    { label: 'Option 1', checked: true },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sch" type="checkbox" id="unique-id-sch1" />
    <label for="unique-id-sch1">
      <div class="chi-form__item -row">
        <span class="chi-picker__checkbox"></span>
        <span class="chi-picker__label">Option 1</span>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sch" type="checkbox" id="unique-id-sch2" />
    <label for="unique-id-sch2">
      <div class="chi-form__item -row">
        <span class="chi-picker__checkbox"></span>
        <span class="chi-picker__label">Option 2</span>
      </div>
    </label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Checkbox",id:"checkbox",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"show-input"),s(" property to show the input. Default input type is "),e("code",null,"checkbox"),s(".")],-1)])),example:i(()=>[e("chi-picker",{label:"Legend",options:o,"show-input":""})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),J=d({__name:"_checkbox-description",setup(m){const o=[{label:"Option 1",checked:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue."},{label:"Option 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue."}],t={webcomponent:`<chi-picker label="Legend" id="checkbox-description-picker"></chi-picker>

<script>
  document.getElementById('checkbox-description-picker').options = [
    {
      label: 'Option 1',
      checked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    },
    {
      label: 'Option 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-scd" type="checkbox" id="unique-id-scd1" />
    <label for="unique-id-scd1">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__checkbox"></span>
          <span class="chi-picker__label">Option 1</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-scd" type="checkbox" id="unique-id-scd2" />
    <label for="unique-id-scd2">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__checkbox"></span>
          <span class="chi-picker__label">Option 2</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Checkbox and description",id:"checkbox-description",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"description"),s(" option property to provide the user more information about the option.")],-1)])),example:i(()=>[e("chi-picker",{label:"Legend",options:o,"show-input":""})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),M=d({__name:"_radio-button",setup(m){const o=[{label:"Option 1",checked:!0},{label:"Option 2"}],t={webcomponent:`<chi-picker label="Legend" id="radio-picker" type="radio" show-input></chi-picker>

<script>
  document.getElementById('radio-picker').options = [
    { label: 'Option 1', checked: true },
    { label: 'Option 2' }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sra" type="radio" id="unique-id-sra1" />
    <label for="unique-id-sra1">
      <div class="chi-form__item -row">
        <span class="chi-picker__radio"></span>
        <span class="chi-picker__label">Option 1</span>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sra" type="radio" id="unique-id-sra2" />
    <label for="unique-id-sra2">
      <div class="chi-form__item -row">
        <span class="chi-picker__radio"></span>
        <span class="chi-picker__label">Option 2</span>
      </div>
    </label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Radio button",id:"radio-button",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"show-input"),s(" with "),e("code",null,'type="radio"'),s(" to show a radio input.")],-1)])),example:i(()=>[e("chi-picker",{label:"Legend",type:"radio",options:o,"show-input":""})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),G=d({__name:"_radio-button-description",setup(m){const o=[{label:"Option 1",checked:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue."},{label:"Option 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue."}],t={webcomponent:`<chi-picker label="Legend" id="radio-description-picker" show-input type="radio"></chi-picker>

<script>
  document.getElementById('radio-description-picker').options = [
    {
      label: 'Option 1',
      checked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    },
    {
      label: 'Option 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-srd" type="radio" id="unique-id-srd1" />
    <label for="unique-id-srd1">
        <div class="chi-picker__content--start">
          <div class="chi-form__item -row">
            <span class="chi-picker__radio"></span>
            <span class="chi-picker__label">Option 1</span>
          </div>
          <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
        </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-srd" type="radio" id="unique-id-srd2" />
    <label for="unique-id-srd2">
      <div class="chi-picker__content--start">
        <div class="chi-form__item -row">
          <span class="chi-picker__radio"></span>
          <span class="chi-picker__label">Option 2</span>
        </div>
        <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
      </div>
    </label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Radio button and description",id:"radio-button-description",padding:"-p--4"},{example:i(()=>[e("chi-picker",{label:"Legend",options:o,"show-input":"",type:"radio"})]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),K=d({__name:"_radio-button-description-price",setup(m){const o=[{label:"Option 1",checked:!0,id:"option-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue."},{label:"Option 2",id:"option-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue."}],t={webcomponent:`<chi-picker label="Legend" id="radio-description-price-picker" show-input type="radio">
  <div slot="content-end-option-1">
    <div class="chi-picker__label">
      $0.00
      <span class="-text--normal">/mo</span>
    </div>
  </div>
  <div slot="content-end-option-2">
    <div class="chi-picker__label">
      $19.95
      <span class="-text--normal">/mo</span>
    </div>
  </div>
</chi-picker>

<script>
  document.getElementById('radio-description-price-picker').options = [
    {
      label: 'Option 1',
      checked: true,
      id: 'option-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    },
    {
      label: 'Option 2',
      id: 'option-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.',
    }
  ];
<\/script>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-prdp" type="radio" id="unique-id-prdp1" />
    <label for="unique-id-prdp1">
      <div class="chi-picker__content">
        <div class="chi-picker__content--start -w--100 -w-sm--65">
          <div class="chi-form__item -row">
            <span class="chi-picker__radio"></span>
            <span class="chi-picker__label">Option 1</span>
          </div>
          <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
        </div>
        <div class="chi-picker__content--end">
          <div class="chi-picker__label">
            $0.00
            <span class="-text--normal">/mo</span>
          </div>
        </div>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-prdp" type="radio" id="unique-id-prdp2" />
    <label for="unique-id-prdp2">
      <div class="chi-picker__content">
        <div class="chi-picker__content--start -w--100 -w-sm--6">
          <div class="chi-form__item -row">
            <span class="chi-picker__radio"></span>
            <span class="chi-picker__label">Option 2</span>
          </div>
          <div class="chi-picker__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula placerat iaculis. Ut rutrum pulvinar velit vitae molestie. Phasellus accumsan pharetra ex. Nulla iaculis velit sed velit vehicula dictum. Donec ut ultrices tortor. Vivamus sit amet lorem augue.</div>
        </div>
        <div class="chi-picker__content--end">
          <div class="chi-picker__label">
            $19.95
            <span class="-text--normal">/mo</span>
          </div>
        </div>
      </div>
    </label>
  </div>
</fieldset>`};return(h,c)=>{const a=_,p=b;return r(),v(p,{title:"Radio button with description and price",id:"radio-button-description-price",padding:"-p--4"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use "),e("code",null,"id"),s(" option property to define the slot name positioned at the right-hand side of the option to show custom content.")],-1)])),example:i(()=>[e("chi-picker",{label:"Legend",options:o,"show-input":"",type:"radio"},c[1]||(c[1]=[e("div",{slot:"content-end-option-1"},[e("div",{class:"chi-picker__label"},[s("$0.00"),e("span",{class:"-text--normal"},"/mo")])],-1),e("div",{slot:"content-end-option-2"},[e("div",{class:"chi-picker__label"},[s("$19.95"),e("span",{class:"-text--normal"},"/mo")])],-1)]))]),"code-webcomponent":i(()=>[n(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[n(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),z=d({__name:"index",setup(m){return(o,t)=>(r(),k("div",null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),t[1]||(t[1]=e("h3",null,"Multi-select pickers",-1)),t[2]||(t[2]=e("p",{class:"-text"},"Use multi-select pickers when more than one option can be chosen.",-1)),n(L),n(U),n(E),n(C),n(P),n(D),n(V),n(j),n(N),t[3]||(t[3]=e("h2",null,"Content Variations",-1)),n(A),n(J),n(M),n(G),n(K),n(F)]))}});export{z as _};
