var Z=Object.defineProperty;var k=(t,l,s)=>l in t?Z(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s;var L=(t,l,s)=>k(t,typeof l!="symbol"?l+"":l,s);import{V as _,N as x}from"./uJTUijt2.js";import{o as m,f as h,w as r,b as p,a as e,d as o,g as ee,r as b,c as J,h as w,F as ne}from"./B5CYXVwa.js";import{_ as f}from"./D8GK0F__.js";import{_ as $}from"./BLbnEGma.js";import{_ as g}from"./DKu8Jd2y.js";import{_ as v}from"./DlAUqK2U.js";import te from"./jpaRM_IG.js";import ie from"./DiR26H1b.js";import le from"./83Dynj4S.js";import ae from"./C8c2XCSu.js";import{s as se}from"./2EwpEKcw.js";import{_ as ce}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./C9_DePFx.js";var oe=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,re=(t,l,s,a)=>{for(var n=a>1?void 0:a?pe(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&oe(l,s,n),n};let E=class extends _{};E=re([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example-1">Label</chi-label>
<chi-number-input id="example-1"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="input-example-base">Label</label>
  <div class="chi-number-input">
    <input id="input-example-base" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('input-example-base'));<\/script>`}})})],E);const ue=e("p",{class:"-text"},[o("An initial value is optional. If an initial value is not provided, "),e("code",null,"0"),o(" will be taken as default.")],-1),de=e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-1"},"Label"),e("chi-number-input",{id:"example-1"})],-1);function me(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Base",id:"base",tabs:t.exampleTabs},{"example-description":r(()=>[ue]),example:r(()=>[de]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const be=v(E,[["render",me]]);var he=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,xe=(t,l,s,a)=>{for(var n=a>1?void 0:a?_e(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&he(l,s,n),n};let I=class extends _{};I=xe([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example-2">Label</chi-label>
<chi-number-input disabled id="example-2"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="input-example-disabled">Label</label>
  <div class="chi-number-input">
    <input id="input-example-disabled" type="number" class="chi-input" value="0" aria-label="Input Label" disabled>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('input-example-disabled'));<\/script>`}})})],I);const ve=e("p",{class:"-text"},[o("Use the "),e("code",null,"disabled"),o(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),o(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1),fe=e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-2"},"Label"),e("chi-number-input",{disabled:"",id:"example-2"})],-1);function $e(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{"example-description":r(()=>[ve]),example:r(()=>[fe]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ge=v(I,[["render",$e]]);var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Le=(t,l,s,a)=>{for(var n=a>1?void 0:a?we(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&ye(l,s,n),n};let S=class extends _{};S=Le([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="unique-id-mms1">Label</chi-label>
<chi-number-input id="unique-id-mms1" min="0" max="6" step="2" value="1"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="unique-id-mms1">Label</label>
  <div class="chi-number-input">
    <input id="unique-id-mms1" type="number" class="chi-input" min="0" max="6" step="2" value="1" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(
    document.getElementById('unique-id-mms1'),
    {autofix: true}
  );
<\/script>`}})})],S);const Ee=e("p",{class:"-text"},[o("Use the "),e("code",null,"min"),o(" and "),e("code",null,"max"),o(" attributes to define minimum and maximum values on number inputs. Use the "),e("code",null,"step"),o(" attribute to indicate the expected granularity."),e("br"),e("br"),o("This example only accepts values between "),e("code",null,"0"),o(" and "),e("code",null,"6"),o(", and as the "),e("code",null,"step"),o(" is "),e("code",null,"2"),o(" and initial "),e("code",null,"value"),o(" is "),e("code",null,"1"),o(", only odd values are valid. If you manually write any pair value, or a value greater than 5 or lesser than 1, the component will automatically correct the value.")],-1),Ie=e("div",{class:"chi-form__item"},[e("chi-label",{for:"unique-id-mms1"},"Label"),e("chi-number-input",{id:"unique-id-mms1",min:"0",max:"6",step:"2",value:"1"})],-1);function Se(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Min/Max/Step",id:"min-max-step",tabs:t.exampleTabs},{"example-description":r(()=>[Ee]),example:r(()=>[Ie]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=v(S,[["render",Se]]);var Pe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,ze=(t,l,s,a)=>{for(var n=a>1?void 0:a?Ce(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Pe(l,s,n),n};let q=class extends _{};q=ze([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="unique-id-re1" required>Label</chi-label>
<chi-number-input id="unique-id-re1" required></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="unique-id-re1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <div class="chi-number-input">
    <input id="unique-id-re1" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-re1'));<\/script>`}})})],q);const De=e("p",{class:"-text"},[o("Use the "),e("code",null,"required"),o(" boolean attribute to indicate which inputs must be completed before submitting a form. To render a required input, apply the "),e("code",null,"required"),o(" attribute to the input. It is also encouraged but not mandatory to apply a "),e("code",null,"required"),o(" attribute to the corresponding label of the input which will automatically render a red asterisk. "),e("strong",null,"Note:"),o(" For HTML Blueprint implementations, the "),e("code",null,"required"),o(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1),Oe=e("div",{class:"chi-form__item"},[e("chi-label",{for:"unique-id-re1",required:""},"Label"),e("chi-number-input",{id:"unique-id-re1",required:""})],-1);function Te(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Required",id:"required",tabs:t.exampleTabs},{"example-description":r(()=>[De]),example:r(()=>[Oe]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Be=v(q,[["render",Te]]);var Me=Object.defineProperty,je=Object.getOwnPropertyDescriptor,He=(t,l,s,a)=>{for(var n=a>1?void 0:a?je(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Me(l,s,n),n};let P=class extends _{};P=He([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-label__wrapper">
  <chi-label for="unique-id-he1">Label</chi-label>
  <div class="chi-label__help">
    <chi-button id="example__help-button" type="icon" size="xs" variant="flat" alternative-text="Help">
      <chi-icon icon="circle-info-outline"></chi-icon>
    </chi-button>
    <chi-popover id="example__help-popover" position="top" variant="text" arrow reference="#example__help-button">
      Helpful information goes here.
    </chi-popover>
  </div>
</div>
<chi-number-input id="unique-id-he1"></chi-number-input>

<script>
  document
    .querySelector("#example__help-button")
    .addEventListener("click", function () {
      var popoverElem = document.querySelector("#example__help-popover");

      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="unique-id-he1">Label</label>
    <div class="chi-label__help">
      <div class="chi-button -icon -flat -xs" id="example__help-button" data-target="#example__help-popover" aria-label="Help">
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
    <input id="unique-id-he1" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(document.getElementById('unique-id-he1'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}})})],P);const Ne=e("p",{class:"-text"},[o("Use "),e("code",null,"chi-label__help"),o(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1),Je={class:"chi-form__item"},We={class:"chi-label__wrapper"},Ue=e("chi-label",{for:"unique-id-he1"},"Label",-1),Re={class:"chi-label__help"},Ae=e("chi-icon",{icon:"circle-info-outline"},null,-1),Qe=[Ae],Ve={ref:"popover",id:"example__help-popover",position:"top",variant:"text",arrow:"",reference:"#example__help-button"},Fe=e("chi-number-input",{id:"unique-id-he1"},null,-1);function Ge(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Help",id:"help",tabs:t.exampleTabs},{"example-description":r(()=>[Ne]),example:r(()=>[e("div",Je,[e("div",We,[Ue,e("div",Re,[e("chi-button",{id:"example__help-button",type:"icon",size:"xs",variant:"flat","alternative-text":"Help",onClick:l[0]||(l[0]=y=>t.$refs.popover.toggle())},Qe),e("chi-popover",Ve,"Helpful information goes here.",512)])]),Fe])]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ke=v(P,[["render",Ge]]);var Xe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ze=(t,l,s,a)=>{for(var n=a>1?void 0:a?Ye(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Xe(l,s,n),n};let C=class extends _{};C=Ze([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="unique-id-me1">Label</chi-label>
<chi-number-input id="unique-id-me1" helper-message="Optional helper message"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="unique-id-me1">Label</label>
  <div class="chi-number-input">
    <input id="unique-id-me1" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-me1'));<\/script>`}})})],C);const ke=e("p",{class:"-text"},"Add a message below an input to store descriptions, validation feedback, and other helpful information.",-1),en=e("div",{class:"chi-form__item"},[e("chi-label",{for:"unique-id-me1"},"Label"),e("chi-number-input",{id:"unique-id-me1","helper-message":"Optional helper message"})],-1);function nn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Message",id:"message",tabs:t.exampleTabs},{"example-description":r(()=>[ke]),example:r(()=>[en]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const tn=v(C,[["render",nn]]);var ln=Object.defineProperty,an=Object.getOwnPropertyDescriptor,sn=(t,l,s,a)=>{for(var n=a>1?void 0:a?an(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&ln(l,s,n),n};let z=class extends _{};z=sn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="unique-id-er1">Quantity</chi-label>
<chi-number-input id="unique-id-er1" inputstyle="danger" helper-message="Please enter a quantity"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="unique-id-er1">Quantity</label>
  <div class="chi-number-input">
    <input id="unique-id-er1" type="number" class="chi-input -danger" value="0" aria-label="Quantity">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please enter a quantity
  </div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-er1'));<\/script>`}})})],z);const cn=e("p",{class:"-text"},[o("Use "),e("code",null,"danger"),o(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),on=e("div",{class:"chi-form__item"},[e("chi-label",{for:"unique-id-er1"},"Quantity"),e("chi-number-input",{id:"unique-id-er1",inputstyle:"danger","helper-message":"Please enter a quantity"})],-1);function pn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Error",id:"error",tabs:t.exampleTabs},{"example-description":r(()=>[cn]),example:r(()=>[on]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const rn=v(z,[["render",pn]]);var un=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,mn=(t,l,s,a)=>{for(var n=a>1?void 0:a?dn(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&un(l,s,n),n};let D=class extends _{};D=mn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label for="example-3-xs">Label</chi-label>
<chi-number-input size="xs" id="example-3-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example-3-sm">Label</chi-label>
<chi-number-input size="sm" id="example-3-sm"></chi-number-input>

<!-- md -->
<chi-label for="example-3-md">Label</chi-label>
<chi-number-input size="md" id="example-3-md"></chi-number-input>

<!-- lg -->
<chi-label for="example-3-lg">Label</chi-label>
<chi-number-input size="lg" id="example-3-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example-3-xl">Label</chi-label>
<chi-number-input size="xl" id="example-3-xl"></chi-number-input>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-xs">Label</label>
  <div class="chi-number-input -xs">
    <input id="input-example-xs" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-sm">Label</label>
  <div class="chi-number-input -sm">
    <input id="input-example-sm" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-sm'));<v/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-md">Label</label>
  <div class="chi-number-input -md">
    <input id="input-example-md" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-lg">Label</label>
  <div class="chi-number-input -lg">
    <input id="input-example-lg" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-xl">Label</label>
  <div class="chi-number-input -xl">
    <input id="input-example-xl" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-xl'));<\/script>`}})})],D);const bn=e("p",{class:"-text"},[o("Number inputs support the following sizes: "),e("code",null,"xs"),o(", "),e("code",null,"sm"),o(", "),e("code",null,"md"),o(", "),e("code",null,"lg"),o(", "),e("code",null,"xl"),o(". The default size is "),e("code",null,"md"),o(".")],-1),hn=e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-sizes-xs"},"Label"),e("chi-number-input",{size:"xs",id:"example-sizes-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-sizes-sm"},"Label"),e("chi-number-input",{size:"sm",id:"example-sizes-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-sizes-md"},"Label"),e("chi-number-input",{size:"md",id:"example-sizes-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-sizes-lg"},"Label"),e("chi-number-input",{size:"lg",id:"example-sizes-lg"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-sizes-xl"},"Label"),e("chi-number-input",{size:"xl",id:"example-sizes-xl"})])])],-1);function _n(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Sizes",id:"sizes_lumen_century_link",tabs:t.exampleTabs},{"example-description":r(()=>[bn]),example:r(()=>[hn]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xn=v(D,[["render",_n]]);var vn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,$n=(t,l,s,a)=>{for(var n=a>1?void 0:a?fn(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&vn(l,s,n),n};let O=class extends _{};O=$n([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example-4">Label</chi-label>
<chi-number-input expanded id="example-4"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded">Label</label>
  <div class="chi-number-input -expanded">
    <input id="input-example-expanded" class="chi-input" type="number" value="0" aria-label="Input Label">
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

<script>chi.numberInput(document.getElementById('input-example-expanded'));<\/script>`}})})],O);const gn=e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-4"},"Label"),e("chi-number-input",{expanded:"",id:"example-4"})],-1);function yn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Base",id:"base-expanded",tabs:t.exampleTabs},{example:r(()=>[gn]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const wn=v(O,[["render",yn]]);var Ln=Object.defineProperty,En=Object.getOwnPropertyDescriptor,In=(t,l,s,a)=>{for(var n=a>1?void 0:a?En(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Ln(l,s,n),n};let T=class extends _{};T=In([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="example-5">Label</chi-label>
<chi-number-input expanded disabled id="example-5"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-disabled">Label</label>
  <div class="chi-number-input -expanded">
    <input id="input-example-expanded-disabled" class="chi-input" type="number" value="0" aria-label="Input Label" disabled>
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

<script>chi.numberInput(document.getElementById('input-example-expanded-disabled'));<\/script>`}})})],T);const Sn=e("p",{class:"-text"},[o("Use the "),e("code",null,"disabled"),o(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),o(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1),qn=e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-5"},"Label"),e("chi-number-input",{expanded:"",disabled:"",id:"example-5"})],-1);function Pn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Disabled",id:"disabled-expanded",tabs:t.exampleTabs},{"example-description":r(()=>[Sn]),example:r(()=>[qn]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Cn=v(T,[["render",Pn]]);var zn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,On=(t,l,s,a)=>{for(var n=a>1?void 0:a?Dn(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&zn(l,s,n),n};let B=class extends _{};B=On([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="unique-id-emm1">Label</chi-label>
<chi-number-input expanded id="unique-id-emm1" min="0" max="6" "step="2" value="1"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="unique-id-emm1">Label</label>
  <div class="chi-number-input -expanded">
    <input id="unique-id-emm1" class="chi-input" type="number" min="0" max="6" "step="2" value="1" aria-label="Input Label">
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
    document.getElementById('unique-id-emm1'),
    {autofix: true}
  );
<\/script>`}})})],B);const Tn=e("p",{class:"-text"},[o("Use the "),e("code",null,"min"),o(" and "),e("code",null,"max"),o(" attributes to define minimum and maximum values on number inputs. Use the "),e("code",null,"step"),o(" attribute to indicate the expected granularity."),e("br"),e("br"),o("This example only accepts values between "),e("code",null,"0"),o(" and "),e("code",null,"6"),o(", and as the "),e("code",null,"step"),o(" is "),e("code",null,"2"),o(" and initial "),e("code",null,"value"),o(" is "),e("code",null,"1"),o(", only odd values are valid. If you manually write any pair value, or a value greater than 5 or lesser than 1, the component will automatically correct the value.")],-1),Bn=e("div",{class:"chi-form__item"},[e("chi-label",{for:"unique-id-emm1"},"Label"),e("chi-number-input",{expanded:"",min:"0",max:"6",step:"2",value:"1",id:"unique-id-emm1"})],-1);function Mn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Min/Max/Step",id:"min-max-step-expanded",tabs:t.exampleTabs},{"example-description":r(()=>[Tn]),example:r(()=>[Bn]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const jn=v(B,[["render",Mn]]);var Hn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Jn=(t,l,s,a)=>{for(var n=a>1?void 0:a?Nn(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Hn(l,s,n),n};let M=class extends _{};M=Jn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="unique-id-eer1">Quantity</chi-label>
<chi-number-input expanded id="unique-id-eer1" inputstyle="danger" helper-message="Please enter a quantity"></chi-number-input>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded">Label</label>
  <div class="chi-number-input -expanded">
    <input id="input-example-expanded" class="chi-input" type="number" value="0" aria-label="Input Label">
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

<script>chi.numberInput(document.getElementById('input-example-expanded'));<\/script>`}})})],M);const Wn=e("p",{class:"-text"},[o("Use "),e("code",null,"danger"),o(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),Un=e("div",{class:"chi-form__item"},[e("chi-label",{for:"unique-id-eer1"},"Quantity"),e("chi-number-input",{id:"unique-id-eer1",inputstyle:"danger",expanded:"","helper-message":"Please enter a quantity"})],-1);function Rn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Error",id:"error-expanded",tabs:t.exampleTabs},{"example-description":r(()=>[Wn]),example:r(()=>[Un]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const An=v(M,[["render",Rn]]);var Qn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Fn=(t,l,s,a)=>{for(var n=a>1?void 0:a?Vn(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Qn(l,s,n),n};let j=class extends _{};j=Fn([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label for="example-6-xs">Label</chi-label>
<chi-number-input expanded size="xs" id="example-6-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example-6-sm">Label</chi-label>
<chi-number-input expanded size="sm" id="example-6-sm"></chi-number-input>

<!-- md -->
<chi-label for="example-6-md">Label</chi-label>
<chi-number-input expanded size="md" id="example-6-md"></chi-number-input>

<!-- lg -->
<chi-label for="example-6-lg">Label</chi-label>
<chi-number-input expanded size="lg" id="example-6-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example-6-xl">Label</chi-label>
<chi-number-input expanded size="xl" id="example-6-xl"></chi-number-input>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-xs">Label</label>
  <div class="chi-number-input -expanded -xs">
    <input id="input-example-expanded-xs" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-sm">Label</label>
  <div class="chi-number-input -expanded -sm">
    <input id="input-example-expanded-sm" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-md">Label</label>
  <div class="chi-number-input -expanded -md">
    <input id="input-example-expanded-md" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-lg">Label</label>
  <div class="chi-number-input -expanded -lg">
    <input id="input-example-expanded-lg" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-xl">Label</label>
  <div class="chi-number-input -expanded -xl">
    <input id="input-example-expanded-xl" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-xl'));<\/script>`}})})],j);const Gn=e("p",{class:"-text"},[o("Expanded number inputs support the following sizes: "),e("code",null,"xs"),o(", "),e("code",null,"sm"),o(", "),e("code",null,"md"),o(", "),e("code",null,"lg"),o(", "),e("code",null,"xl"),o(". The default size is "),e("code",null,"md"),o(".")],-1),Kn=e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-expanded-sizes-xs"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"xs",id:"example-expanded-sizes-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-expanded-sizes-sm"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"sm",id:"example-expanded-sizes-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-expanded-sizes-md"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"md",id:"example-expanded-sizes-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-expanded-sizes-lg"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"lg",id:"example-expanded-sizes-lg"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-expanded-sizes-xl"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"xl",id:"example-expanded-sizes-xl"})])])],-1);function Xn(t,l,s,a,n,c){const i=f,u=$,d=g;return m(),h(d,{title:"Sizes",id:"sizes-expanded_lumen_century_link",tabs:t.exampleTabs},{"example-description":r(()=>[Gn]),example:r(()=>[Kn]),"code-webcomponent":r(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(u),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Yn=v(j,[["render",Xn]]);var Zn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,et=(t,l,s,a)=>{for(var n=a>1?void 0:a?kn(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&Zn(l,s,n),n};let H=class extends _{constructor(){super(...arguments);L(this,"selectedTheme",ee())}};H=et([x({components:{BaseExample:be,Disabled:ge,MinMaxStep:qe,Required:Be,Help:Ke,Message:tn,Error:rn,SizesLumenCenturyLink:xn,SizesPortal:te,BaseExpanded:wn,DisabledExpanded:Cn,MinMaxStepExpanded:jn,ErrorExpanded:An,SizesExpandedPortal:ie,SizesExpandedLumenCenturyLink:Yn}})],H);const nt=e("h2",null,"Examples",-1),tt=e("h2",null,"Expanded version",-1);function it(t,l,s,a,n,c){const i=b("BaseExample"),u=b("Disabled"),d=b("MinMaxStep"),y=b("Required"),W=b("Help"),U=b("Message"),R=b("Error"),A=b("SizesLumenCenturyLink"),Q=b("SizesPortal"),V=b("BaseExpanded"),F=b("DisabledExpanded"),G=b("MinMaxStepExpanded"),K=b("ErrorExpanded"),X=b("SizesExpandedLumenCenturyLink"),Y=b("SizesExpandedPortal");return m(),J("div",null,[nt,p(i),p(u),p(d),p(y),p(W),p(U),p(R),["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(m(),h(A,{key:0})):w("",!0),["portal","portalrebrand24"].includes(t.selectedTheme)?(m(),h(Q,{key:1})):w("",!0),tt,p(V),p(F),p(G),p(K),["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(m(),h(X,{key:2})):w("",!0),["portal","portalrebrand24"].includes(t.selectedTheme)?(m(),h(Y,{key:3})):w("",!0)])}const lt=v(H,[["render",it]]);var at=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ct=(t,l,s,a)=>{for(var n=a>1?void 0:a?st(l,s):l,c=t.length-1,i;c>=0;c--)(i=t[c])&&(n=(a?i(l,s,n):i(n))||n);return a&&n&&at(l,s,n),n};let N=class extends _{constructor(){super(...arguments);L(this,"pageTabs",se)}};N=ct([x({components:{Accessibility:ae,Examples:lt,Properties:le}})],N);const ot={class:"chi-grid__container -pt--3"},pt={class:"chi-tabs-panel -active",id:"examples"},rt={class:"chi-tabs-panel",id:"properties"},ut={class:"chi-tabs-panel",id:"accessibility"};function dt(t,l,s,a,n,c){const i=ce,u=b("Examples"),d=b("Properties"),y=b("Accessibility");return m(),J(ne,null,[p(i,{title:"Number input",description:"Number inputs are used to increase or decrease numeric values.",tabs:t.pageTabs},null,8,["tabs"]),e("div",ot,[e("div",pt,[p(u)]),e("div",rt,[p(d)]),e("div",ut,[p(y)])])],64)}const Qt=v(N,[["render",dt]]);export{Qt as default};
