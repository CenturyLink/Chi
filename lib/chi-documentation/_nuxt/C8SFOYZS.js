var Z=Object.defineProperty;var k=(t,e,s)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var z=(t,e,s)=>k(t,typeof e!="symbol"?e+"":e,s);import{V as h,N as x}from"./NAah3XrW.js";import{o as u,h as _,w as r,a as n,d as p,b as c,j as ee,m as b,c as J,l as y,F as ne}from"./CEIPSiTs.js";import{_ as f}from"./onyWiYp2.js";import{_ as g}from"./CS2TcPBX.js";import{_ as $}from"./CAQzZ0uH.js";import{_ as v}from"./DlAUqK2U.js";import le from"./tQ81wRb6.js";import te from"./GjJqDYI5.js";import ie from"./DsoOJkw-.js";import ae from"./yvxLnGxS.js";import{s as se}from"./DtNz156Q.js";import{_ as oe}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./DA9BgUq9.js";var pe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,re=(t,e,s,a)=>{for(var l=a>1?void 0:a?ce(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&pe(e,s,l),l};let L=class extends h{};L=re([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__base">Label</chi-label>
<chi-number-input id="example__base"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <div class="chi-number-input">
    <input id="example__base" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__base'));<\/script>`}})})],L);function de(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Base",id:"base",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("An initial value is optional. If an initial value is not provided, "),n("code",null,"0"),p(" will be taken as default.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__base"},"Label"),n("chi-number-input",{id:"example__base"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const me=v(L,[["render",de]]);var ue=Object.defineProperty,be=Object.getOwnPropertyDescriptor,_e=(t,e,s,a)=>{for(var l=a>1?void 0:a?be(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&ue(e,s,l),l};let I=class extends h{};I=_e([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__disabled">Label</chi-label>
<chi-number-input disabled id="example__disabled"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <div class="chi-number-input">
    <input id="example__disabled" type="number" class="chi-input" value="0" aria-label="Input Label" disabled>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__disabled'));<\/script>`}})})],I);function he(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use the "),n("code",null,"disabled"),p(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),n("strong",null,"Note:"),p(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__disabled"},"Label"),n("chi-number-input",{disabled:"",id:"example__disabled"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xe=v(I,[["render",he]]);var ve=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,ge=(t,e,s,a)=>{for(var l=a>1?void 0:a?fe(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&ve(e,s,l),l};let E=class extends h{};E=ge([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__mms">Label</chi-label>
<chi-number-input id="example__mms" min="0" max="6" step="2" value="1"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
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
<\/script>`}})})],E);function $e(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Min/Max/Step",id:"min-max-step",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use the "),n("code",null,"min"),p(" and "),n("code",null,"max"),p(" attributes to define minimum and maximum values on number inputs. Use the "),n("code",null,"step"),p(" attribute to indicate the expected granularity."),n("br"),n("br"),p("This example only accepts values between "),n("code",null,"0"),p(" and "),n("code",null,"6"),p(", and as the "),n("code",null,"step"),p(" is "),n("code",null,"2"),p(" and initial "),n("code",null,"value"),p(" is "),n("code",null,"1"),p(", only odd values are valid. If you manually write any pair value, or a value greater than 5 or lesser than 1, the component will automatically correct the value.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__mms"},"Label"),n("chi-number-input",{id:"example__mms",min:"0",max:"6",step:"2",value:"1"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ye=v(E,[["render",$e]]);var we=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Le=(t,e,s,a)=>{for(var l=a>1?void 0:a?ze(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&we(e,s,l),l};let S=class extends h{};S=Le([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__required" required>Label</chi-label>
<chi-number-input id="example__required" required></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
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

<script>chi.numberInput(document.getElementById('example__required'));<\/script>`}})})],S);function Ie(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Required",id:"required",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use the "),n("code",null,"required"),p(" boolean attribute to indicate which inputs must be completed before submitting a form. To render a required input, apply the "),n("code",null,"required"),p(" attribute to the input. It is also encouraged but not mandatory to apply a "),n("code",null,"required"),p(" attribute to the corresponding label of the input which will automatically render a red asterisk. "),n("strong",null,"Note:"),p(" For HTML Blueprint implementations, the "),n("code",null,"required"),p(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__required",required:""},"Label"),n("chi-number-input",{id:"example__required",required:""})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ee=v(S,[["render",Ie]]);var Se=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Ce=(t,e,s,a)=>{for(var l=a>1?void 0:a?Pe(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&Se(e,s,l),l};let P=class extends h{};P=Ce([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__help" info-icon info-icon-message="Helpful information goes here.">Label</chi-label>
  <chi-number-input id="example__help"></chi-number-input>
</div>
`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__help-input">Label</label>
    <div class="chi-label__help">
      <div class="chi-button -icon -flat -xs" id="example__help-icon" data-target="#example__help-popover" aria-label="Help">
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
    <input id="example__help-input" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(document.getElementById('example__help-input'));
  chi.popover(document.getElementById('example__help-icon'));
<\/script>`}})})],P);function De(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Help",id:"help",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use "),n("code",null,"chi-label"),p("'s attributes "),n("code",null,"infoIcon"),p(" and "),n("code",null,"infoIconMessage"),p(" to include a help icon that displays helpful information in a popover.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__help","info-icon":"","info-icon-message":"Helpful information goes here."},"Label"),n("chi-number-input",{id:"example__help"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Oe=v(P,[["render",De]]);var Te=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Me=(t,e,s,a)=>{for(var l=a>1?void 0:a?Be(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&Te(e,s,l),l};let C=class extends h{};C=Me([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__message">Label</chi-label>
<chi-number-input id="example__message" helper-message="Optional helper message"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <div class="chi-number-input">
    <input id="example__message" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>

<script>chi.numberInput(document.getElementById('example__message'));<\/script>`}})})],C);function qe(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Message",id:"message",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},"Add a message below an input to store descriptions, validation feedback, and other helpful information.",-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__message"},"Label"),n("chi-number-input",{id:"example__message","helper-message":"Optional helper message"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const je=v(C,[["render",qe]]);var Ne=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Je=(t,e,s,a)=>{for(var l=a>1?void 0:a?He(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&Ne(e,s,l),l};let D=class extends h{};D=Je([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__error">Quantity</chi-label>
<chi-number-input id="example__error" inputstyle="danger" helper-message="Please enter a quantity"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
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

<script>chi.numberInput(document.getElementById('example__error'));<\/script>`}})})],D);function We(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Error",id:"error",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use "),n("code",null,"danger"),p(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__error"},"Quantity"),n("chi-number-input",{id:"example__error",inputstyle:"danger","helper-message":"Please enter a quantity"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=v(D,[["render",We]]);var Re=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Ve=(t,e,s,a)=>{for(var l=a>1?void 0:a?Qe(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&Re(e,s,l),l};let O=class extends h{};O=Ve([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label for="example__size-xs">Label</chi-label>
<chi-number-input size="xs" id="example__size-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example__size-sm">Label</chi-label>
<chi-number-input size="sm" id="example__size-sm"></chi-number-input>

<!-- md -->
<chi-label for="example__size-md">Label</chi-label>
<chi-number-input size="md" id="example__size-md"></chi-number-input>

<!-- lg -->
<chi-label for="example__size-lg">Label</chi-label>
<chi-number-input size="lg" id="example__size-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example__size-xl">Label</chi-label>
<chi-number-input size="xl" id="example__size-xl"></chi-number-input>`,htmlblueprint:`<!-- xs -->
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
<script>chi.numberInput(document.getElementById('example__size-xl'));<\/script>`}})})],O);function Ae(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Sizes",id:"sizes_lumen_century_link",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Number inputs support the following sizes: "),n("code",null,"xs"),p(", "),n("code",null,"sm"),p(", "),n("code",null,"md"),p(", "),n("code",null,"lg"),p(", "),n("code",null,"xl"),p(". The default size is "),n("code",null,"md"),p(".")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"-d--flex -flex--column"},[n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__size-xs"},"Label"),n("chi-number-input",{size:"xs",id:"example__size-xs"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__size-sm"},"Label"),n("chi-number-input",{size:"sm",id:"example__size-sm"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__size-md"},"Label"),n("chi-number-input",{size:"md",id:"example__size-md"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__size-lg"},"Label"),n("chi-number-input",{size:"lg",id:"example__size-lg"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__size-xl"},"Label"),n("chi-number-input",{size:"xl",id:"example__size-xl"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Fe=v(O,[["render",Ae]]);var Ge=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Xe=(t,e,s,a)=>{for(var l=a>1?void 0:a?Ke(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&Ge(e,s,l),l};let T=class extends h{};T=Xe([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__base-expanded">Label</chi-label>
<chi-number-input expanded id="example__base-expanded"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base-expanded">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__base-expanded" class="chi-input" type="number" value="0" aria-label="Input Label">
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

<script>chi.numberInput(document.getElementById('example__base-expanded'));<\/script>`}})})],T);function Ye(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Base",id:"base-expanded",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__base-expanded"},"Label"),n("chi-number-input",{expanded:"",id:"example__base-expanded"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ze=v(T,[["render",Ye]]);var ke=Object.defineProperty,en=Object.getOwnPropertyDescriptor,nn=(t,e,s,a)=>{for(var l=a>1?void 0:a?en(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&ke(e,s,l),l};let B=class extends h{};B=nn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__expanded-disabled">Label</chi-label>
<chi-number-input expanded disabled id="example__expanded-disabled"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
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

<script>chi.numberInput(document.getElementById('example__expanded-disabled'));<\/script>`}})})],B);function ln(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Disabled",id:"disabled-expanded",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use the "),n("code",null,"disabled"),p(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),n("strong",null,"Note:"),p(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-disabled"},"Label"),n("chi-number-input",{expanded:"",disabled:"",id:"example__expanded-disabled"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const tn=v(B,[["render",ln]]);var an=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,on=(t,e,s,a)=>{for(var l=a>1?void 0:a?sn(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&an(e,s,l),l};let M=class extends h{};M=on([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__expanded-mms">Label</chi-label>
<chi-number-input expanded id="example__expanded-mms" min="0" max="6" "step="2" value="1"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
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
<\/script>`}})})],M);function pn(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Min/Max/Step",id:"min-max-step-expanded",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use the "),n("code",null,"min"),p(" and "),n("code",null,"max"),p(" attributes to define minimum and maximum values on number inputs. Use the "),n("code",null,"step"),p(" attribute to indicate the expected granularity."),n("br"),n("br"),p("This example only accepts values between "),n("code",null,"0"),p(" and "),n("code",null,"6"),p(", and as the "),n("code",null,"step"),p(" is "),n("code",null,"2"),p(" and initial "),n("code",null,"value"),p(" is "),n("code",null,"1"),p(", only odd values are valid. If you manually write any pair value, or a value greater than 5 or lesser than 1, the component will automatically correct the value.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-mms"},"Label"),n("chi-number-input",{expanded:"",min:"0",max:"6",step:"2",value:"1",id:"example__expanded-mms"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const cn=v(M,[["render",pn]]);var rn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,mn=(t,e,s,a)=>{for(var l=a>1?void 0:a?dn(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&rn(e,s,l),l};let q=class extends h{};q=mn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example__expanded-error">Quantity</chi-label>
<chi-number-input expanded id="example__expanded-error" inputstyle="danger" helper-message="Please enter a quantity"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-error">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__expanded-error" class="chi-input" type="number" value="0" aria-label="Input Label">
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

<script>chi.numberInput(document.getElementById('example__expanded-error'));<\/script>`}})})],q);function un(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Error",id:"error-expanded",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Use "),n("code",null,"danger"),p(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-error"},"Quantity"),n("chi-number-input",{id:"example__expanded-error",inputstyle:"danger",expanded:"","helper-message":"Please enter a quantity"})],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const bn=v(q,[["render",un]]);var _n=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,xn=(t,e,s,a)=>{for(var l=a>1?void 0:a?hn(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&_n(e,s,l),l};let j=class extends h{};j=xn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label for="example__expanded-size-xs">Label</chi-label>
<chi-number-input expanded size="xs" id="example__expanded-size-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example__expanded-size-sm">Label</chi-label>
<chi-number-input expanded size="sm" id="example__expanded-size-sm"></chi-number-input>

<!-- md -->
<chi-label for="example__expanded-size-md">Label</chi-label>
<chi-number-input expanded size="md" id="example__expanded-size-md"></chi-number-input>

<!-- lg -->
<chi-label for="example__expanded-size-lg">Label</chi-label>
<chi-number-input expanded size="lg" id="example__expanded-size-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example__expanded-size-xl">Label</chi-label>
<chi-number-input expanded size="xl" id="example__expanded-size-xl"></chi-number-input>`,htmlblueprint:`<!-- xs -->
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
<script>chi.numberInput(document.getElementById('example__expanded-size-xl'));<\/script>`}})})],j);function vn(t,e,s,a,l,o){const i=f,d=g,m=$;return u(),_(m,{title:"Sizes",id:"sizes-expanded_lumen_century_link",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[n("p",{class:"-text"},[p("Expanded number inputs support the following sizes: "),n("code",null,"xs"),p(", "),n("code",null,"sm"),p(", "),n("code",null,"md"),p(", "),n("code",null,"lg"),p(", "),n("code",null,"xl"),p(". The default size is "),n("code",null,"md"),p(".")],-1)])),example:r(()=>e[1]||(e[1]=[n("div",{class:"-d--flex -flex--column"},[n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-size-xs"},"Label"),n("chi-number-input",{class:"-mr--2",expanded:"",size:"xs",id:"example__expanded-size-xs"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-size-sm"},"Label"),n("chi-number-input",{class:"-mr--2",expanded:"",size:"sm",id:"example__expanded-size-sm"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-size-md"},"Label"),n("chi-number-input",{class:"-mr--2",expanded:"",size:"md",id:"example__expanded-size-md"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-size-lg"},"Label"),n("chi-number-input",{class:"-mr--2",expanded:"",size:"lg",id:"example__expanded-size-lg"})])]),n("div",{class:"-py--2"},[n("div",{class:"chi-form__item"},[n("chi-label",{for:"example__expanded-size-xl"},"Label"),n("chi-number-input",{class:"-mr--2",expanded:"",size:"xl",id:"example__expanded-size-xl"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const fn=v(j,[["render",vn]]);var gn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,yn=(t,e,s,a)=>{for(var l=a>1?void 0:a?$n(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&gn(e,s,l),l};let N=class extends h{constructor(){super(...arguments);z(this,"selectedTheme",ee())}};N=yn([x({components:{BaseExample:me,Disabled:xe,MinMaxStep:ye,Required:Ee,Help:Oe,Message:je,Error:Ue,SizesLumenCenturyLink:Fe,SizesPortal:le,BaseExpanded:Ze,DisabledExpanded:tn,MinMaxStepExpanded:cn,ErrorExpanded:bn,SizesExpandedPortal:te,SizesExpandedLumenCenturyLink:fn}})],N);function wn(t,e,s,a,l,o){const i=b("BaseExample"),d=b("Disabled"),m=b("MinMaxStep"),w=b("Required"),W=b("Help"),U=b("Message"),R=b("Error"),Q=b("SizesLumenCenturyLink"),V=b("SizesPortal"),A=b("BaseExpanded"),F=b("DisabledExpanded"),G=b("MinMaxStepExpanded"),K=b("ErrorExpanded"),X=b("SizesExpandedLumenCenturyLink"),Y=b("SizesExpandedPortal");return u(),J("div",null,[e[0]||(e[0]=n("h2",null,"Examples",-1)),c(i),c(d),c(m),c(w),c(W),c(U),c(R),["lumen","centurylink"].includes(t.selectedTheme)?(u(),_(Q,{key:0})):y("",!0),["portal"].includes(t.selectedTheme)?(u(),_(V,{key:1})):y("",!0),e[1]||(e[1]=n("h2",null,"Expanded version",-1)),c(A),c(F),c(G),c(K),["lumen","centurylink"].includes(t.selectedTheme)?(u(),_(X,{key:2})):y("",!0),["portal"].includes(t.selectedTheme)?(u(),_(Y,{key:3})):y("",!0)])}const zn=v(N,[["render",wn]]);var Ln=Object.defineProperty,In=Object.getOwnPropertyDescriptor,En=(t,e,s,a)=>{for(var l=a>1?void 0:a?In(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&Ln(e,s,l),l};let H=class extends h{constructor(){super(...arguments);z(this,"pageTabs",se)}};H=En([x({components:{Accessibility:ae,Examples:zn,Properties:ie}})],H);const Sn={class:"chi-grid__container -pt--3"},Pn={class:"chi-tabs-panel -active",id:"examples"},Cn={class:"chi-tabs-panel",id:"properties"},Dn={class:"chi-tabs-panel",id:"accessibility"};function On(t,e,s,a,l,o){const i=oe,d=b("Examples"),m=b("Properties"),w=b("Accessibility");return u(),J(ne,null,[c(i,{title:"Number input",description:"Number inputs are used to increase or decrease numeric values.",tabs:t.pageTabs},null,8,["tabs"]),n("div",Sn,[n("div",Pn,[c(d)]),n("div",Cn,[c(m)]),n("div",Dn,[c(w)])])],64)}const dl=v(H,[["render",On]]);export{dl as default};
