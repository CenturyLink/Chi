var oe=Object.defineProperty;var ce=(t,i,o)=>i in t?oe(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o;var g=(t,i,o)=>ce(t,typeof i!="symbol"?i+"":i,o);import{V as b,N as u}from"./uJTUijt2.js";import{o as m,f as h,w as s,b as r,a as l,d,c as $,F as V,i as se,g as re,r as _,h as pe}from"./B5CYXVwa.js";import{_ as v}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{_ as x}from"./DlAUqK2U.js";import de from"./BTnyps3G.js";import{_ as me}from"./BLbnEGma.js";import _e from"./CCUWhPRy.js";import he from"./CMb__O_B.js";import{s as be}from"./2EwpEKcw.js";import{_ as ue}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./B2eUzt0t.js";import"./C9_DePFx.js";var xe=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,fe=(t,i,o,n)=>{for(var e=n>1?void 0:n?ve(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&xe(i,o,e),e};let P=class extends b{};P=fe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__base">Label</chi-label>
  <chi-textarea id="example__base"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <textarea class="chi-input" id="example__base"></textarea>
</div>`}})})],P);const we=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__base"},"Label"),l("chi-textarea",{id:"example__base"})])])],-1);function ge(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Base",id:"base",tabs:t.exampleTabs},{example:s(()=>[we]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=x(P,[["render",ge]]);var Le=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Se=(t,i,o,n)=>{for(var e=n>1?void 0:n?Pe(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Le(i,o,e),e};let S=class extends b{};S=Se([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__disabled">Label</chi-label>
  <chi-textarea id="example__disabled" disabled>Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <textarea class="chi-input" id="example__disabled" disabled>Sample text</textarea>
</div>`}})})],S);const ye=l("p",{class:"-text"},[d("Use the "),l("code",null,"disabled"),d(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),l("strong",null,"Note:"),d(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1),Ce=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__disabled"},"Label"),l("chi-textarea",{id:"example__disabled",disabled:""},"Sample text")])])],-1);function Oe(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{"example-description":s(()=>[ye]),example:s(()=>[Ce]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Te=x(S,[["render",Oe]]);var De=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Ee=(t,i,o,n)=>{for(var e=n>1?void 0:n?je(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&De(i,o,e),e};let y=class extends b{};y=Ee([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__readonly">Label</chi-label>
  <chi-textarea id="example__readonly" readonly>Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__readonly">Label</label>
  <textarea class="chi-input" id="example__readonly" readonly>Sample text</textarea>
</div>`}})})],y);const Be=l("p",{class:"-text"},[d("Use the "),l("code",null,"readonly"),d(" boolean attribute to prevent users from changing an input value. Unlike disabled inputs, readonly inputs are submitted with the form and can still receive browsing events such as mouse clicks and focus. "),l("strong",null,"Note:"),d(" The required attribute can not be used on inputs with a readonly attribute specified.")],-1),qe=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__readonly"},"Label"),l("chi-textarea",{id:"example__readonly",readonly:""},"Sample text")])])],-1);function He(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Readonly",id:"readonly",tabs:t.exampleTabs},{"example-description":s(()=>[Be]),example:s(()=>[qe]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ie=x(y,[["render",He]]);var ze=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Me=(t,i,o,n)=>{for(var e=n>1?void 0:n?Ae(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&ze(i,o,e),e};let C=class extends b{};C=Me([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__placeholder">Label</chi-label>
  <chi-textarea id="example__placeholder" placeholder="Placeholder"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__placeholder">Label</label>
  <textarea class="chi-input" id="example__placeholder" placeholder="Placeholder"></textarea>
</div>`}})})],C);const Re=l("p",{class:"-text"},[d("Use the "),l("code",null,"placeholder"),d(" attribute to provide users with an example of the type of data that can be entered into an input. "),l("strong",null,"Note:"),d(" Placeholder text is not persistent and visually disappears when a value is entered.")],-1),We=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__placeholder"},"Label"),l("chi-textarea",{id:"example__placeholder",placeholder:"Placeholder"})])])],-1);function Ne(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Placeholder",id:"placeholder",tabs:t.exampleTabs},{"example-description":s(()=>[Re]),example:s(()=>[We]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=x(C,[["render",Ne]]);var Ve=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Fe=(t,i,o,n)=>{for(var e=n>1?void 0:n?Ge(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Ve(i,o,e),e};let O=class extends b{};O=Fe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__required" required>Label</chi-label>
  <chi-textarea id="example__required" required></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <textarea class="chi-input" id="example__required" required></textarea>
</div>`}})})],O);const Je=l("p",{class:"-text"},[d("Use the "),l("code",null,"required"),d(" boolean attribute to indicate which inputs must be completed before submitting a form. This is useful for capturing important information and reducing the risk of form errors. To render a required textarea, apply the "),l("code",null,"required"),d(" attribute to the textarea. It is also encouraged but not mandatory to apply a "),l("code",null,"required"),d(" attribute to the corresponding label of the textarea which will automatically render a red asterisk. "),l("strong",null,"Note:"),d(" For HTML Blueprint implementations, the "),l("code",null,"required"),d(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1),Ke=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__required",required:""},"Label"),l("chi-textarea",{id:"example__required",required:""})])])],-1);function Qe(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Required",id:"required",tabs:t.exampleTabs},{"example-description":s(()=>[Je]),example:s(()=>[Ke]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Xe=x(O,[["render",Qe]]);var Ye=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,ke=(t,i,o,n)=>{for(var e=n>1?void 0:n?Ze(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Ye(i,o,e),e};let T=class extends b{};T=ke([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__optional" optional>Label</chi-label>
  <chi-textarea id="example__optional"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__optional">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <textarea class="chi-input" id="example__optional"></textarea>
</div>`}})})],T);const et=l("p",{class:"-text"},[d("When the vast majority of inputs in a form are required, "),l("code",null,"optional"),d(" can be used to help emphasize the few that are not. This is useful for textareas that are not relevant to all users, such as an Additional Comments textarea in a create support ticket form. If the user does not have additional comments, applying "),l("code",null,"optional"),d(" to "),l("code",null,"chi-label"),d(" will help convey the labels corresponding textarea is not required and can be skipped. "),l("strong",null,"Note:"),d(" For HTML Blueprint implementations, the "),l("code",null,"optional"),d(" boolean attribute is not supported on the label. Please use the alternate method specified below for rendering optional text within the label.")],-1),tt=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__optional",optional:""},"Label"),l("chi-textarea",{id:"example__optional"})])])],-1);function lt(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Optional",id:"optional",tabs:t.exampleTabs},{"example-description":s(()=>[et]),example:s(()=>[tt]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const at=x(T,[["render",lt]]);var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,ot=(t,i,o,n)=>{for(var e=n>1?void 0:n?nt(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&it(i,o,e),e};let D=class extends b{};D=ot([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <chi-label for="example__label-with-icon">Label</chi-label>
    <div class="chi-label__help">
      <chi-button id="example__help-button" type="icon" size="xs" variant="flat" alternative-text="Help">
        <chi-icon icon="circle-info-outline"></chi-icon>
      </chi-button>
      <chi-popover id="example__help-popover" position="top" variant="text" arrow reference="#example__help-button">
        Helpful information goes here.
      </chi-popover>
    </div>
  </div>
  <chi-textarea id="example__label-with-icon"></chi-textarea>
</div>

<script>
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__label-with-icon">Label</label>
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
  <textarea class="chi-input" id="example__label-with-icon"></textarea>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`}})})],D);const ct=l("p",{class:"-text"},[d("Use "),l("code",null,"chi-label__help"),d(" to include a help icon that displays helpful information about a textarea in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1),st={class:"chi-grid"},rt={class:"chi-col -w--12 -w-sm--8 -w-md--6"},pt={class:"chi-form__item"},dt={class:"chi-label__wrapper"},mt=l("chi-label",{for:"example__label-with-icon"},"Label",-1),_t={class:"chi-label__help"},ht=l("chi-icon",{icon:"circle-info-outline"},null,-1),bt=[ht],ut={ref:"popover",position:"top",variant:"text",arrow:"",reference:"#example__help-button"},xt=l("chi-textarea",{id:"example__label-with-icon"},null,-1);function vt(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Help",id:"help",tabs:t.exampleTabs},{"example-description":s(()=>[ct]),example:s(()=>[l("div",st,[l("div",rt,[l("div",pt,[l("div",dt,[mt,l("div",_t,[l("chi-button",{id:"example__help-button",type:"icon",size:"xs",variant:"flat","alternative-text":"Help",onClick:i[0]||(i[0]=w=>t.$refs.popover.toggle())},bt),l("chi-popover",ut,"Helpful information goes here.",512)])]),xt])])])]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ft=x(D,[["render",vt]]);var wt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,$t=(t,i,o,n)=>{for(var e=n>1?void 0:n?gt(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&wt(i,o,e),e};let j=class extends b{};j=$t([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__message">Label</chi-label>
  <chi-textarea id="example__message"></chi-textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <textarea class="chi-input" id="example__message"></textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`}})})],j);const Lt=l("p",{class:"-text"},"Add a message below a textarea to store descriptions, validation feedback, and other helpful information.",-1),Pt=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__message"},"Label"),l("chi-textarea",{id:"example__message"}),l("div",{class:"chi-label -status"},"Optional helper message")])])],-1);function St(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Message",id:"message",tabs:t.exampleTabs},{"example-description":s(()=>[Lt]),example:s(()=>[Pt]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const yt=x(j,[["render",St]]);var Ct=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Tt=(t,i,o,n)=>{for(var e=n>1?void 0:n?Ot(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Ct(i,o,e),e};let E=class extends b{};E=Tt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__danger" required>Describe the issue</chi-label>
  <chi-textarea id="example__danger" state="danger" required></chi-textarea>
  <div class="chi-label -status -danger">Please describe the issue</div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__danger">
    Describe the issue
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <textarea class="chi-input -danger" id="example__danger" required></textarea>
  <div class="chi-label -status -danger">Please describe the issue</div>
</div>`}})})],E);const Dt=l("p",{class:"-text"},[d("Use the "),l("code",null,"danger"),d(" state to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),jt=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__danger",required:""},"Describe the issue"),l("chi-textarea",{id:"example__danger",state:"danger",required:""}),l("div",{class:"chi-label -status -danger"},"Please describe the issue")])])],-1);function Et(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Error",id:"error",tabs:t.exampleTabs},{"example-description":s(()=>[Dt]),example:s(()=>[jt]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Bt=x(E,[["render",Et]]);var qt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,It=(t,i,o,n)=>{for(var e=n>1?void 0:n?Ht(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&qt(i,o,e),e};let B=class extends b{};B=It([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row -align-items--start">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-textarea id="example__inline-label"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item -row -align-items--start">
  <label class="chi-label" for="example__inline-label">Label</label>
  <textarea class="chi-input" id="example__inline-label"></textarea>
</div>`}})})],B);const zt=l("p",{class:"-text"},[d("Apply the class "),l("code",null,"-row"),d(" to "),l("code",null,"chi-form__item"),d(" to render labels and textareas inline.")],-1),At=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item -row -align-items--start"},[l("chi-label",{for:"example__inline-label"},"Label"),l("chi-textarea",{id:"example__inline-label"})])])],-1);function Mt(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Inline Label",id:"inline-label",tabs:t.exampleTabs},{"example-description":s(()=>[zt]),example:s(()=>[At]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Rt=x(B,[["render",Mt]]);var Wt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Ut=(t,i,o,n)=>{for(var e=n>1?void 0:n?Nt(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Wt(i,o,e),e};let q=class extends b{};q=Ut([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row -align-items--start">
  <chi-label class="-w--50" for="example__inline-label-percent">Label width 50%</chi-label>
  <div class="-w--50">
    <chi-textarea id="example__inline-label-percent"></chi-textarea>
  </div>
</div>`,htmlblueprint:`<div class="chi-form__item -row -align-items--start">
  <label class="chi-label -w--50" for="example__inline-label-percent">Label</label>
  <div class="-w--50">
    <textarea class="chi-input" id="example__inline-label-percent"></textarea>
  </div>
</div>`}})})],q);const Vt=l("div",{class:"chi-form__item -row -align-items--start"},[l("chi-label",{class:"-w--50",for:"example__inline-label-percent"},"Label width 50%"),l("div",{class:"-w--50"},[l("chi-textarea",{id:"example__inline-label-percent"})])],-1);function Gt(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Inline Label - width controlled using percent",id:"inline-label-percent",tabs:t.exampleTabs},{example:s(()=>[Vt]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ft=x(q,[["render",Gt]]);var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Qt=(t,i,o,n)=>{for(var e=n>1?void 0:n?Kt(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Jt(i,o,e),e};let H=class extends b{};H=Qt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <chi-label class="chi-col -w--3" for="example__inline-label-grid">Label width 3 columns</chi-label>
  <chi-textarea class="chi-col -w--9" id="example__inline-label-grid"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <label class="chi-label chi-col -w--3" for="example__inline-label-grid">Label</label>
  <textarea class="chi-input chi-col -w--9" id="example__inline-label-grid"></textarea>
</div>`}})})],H);const Xt=l("div",{class:"chi-form__item -row chi-grid -no-gutter -align-items--start"},[l("chi-label",{class:"chi-col -w--3",for:"example__inline-label-grid"},"Label width 3 columns"),l("div",{class:"chi-col -w--9"},[l("chi-textarea",{id:"example__inline-label-grid"})])],-1);function Yt(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Inline Label - width controlled using grid",id:"inline-label-grid",tabs:t.exampleTabs},{example:s(()=>[Xt]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Zt=x(H,[["render",Yt]]);var kt=Object.defineProperty,el=Object.getOwnPropertyDescriptor,tl=(t,i,o,n)=>{for(var e=n>1?void 0:n?el(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&kt(i,o,e),e};let I=class extends b{};I=tl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input01">Label</chi-label>
    <chi-textarea id="example__inline-input01"></chi-textarea>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input02">Label</chi-label>
    <chi-textarea id="example__inline-input02"></chi-textarea>
  </div>
</div>`,htmlblueprint:`<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input01">Label</label>
    <textarea class="chi-input" id="example__inline-input01"></textarea>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input02">Label</label>
    <textarea class="chi-input" id="example__inline-input02"></textarea>
  </div>
</div>`}})})],I);const ll=l("div",{class:"-d--flex"},[l("div",{class:"chi-form__item -inline -flex--grow1"},[l("chi-label",{for:"example__inline-input01"},"Label"),l("chi-textarea",{id:"example__inline-input01"})]),l("div",{class:"chi-form__item -inline -flex--grow1"},[l("chi-label",{for:"example__inline-input02"},"Label"),l("chi-textarea",{id:"example__inline-input02"})])],-1);function al(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Inline Textareas",id:"inline-textareas",tabs:t.exampleTabs},{example:s(()=>[ll]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const il=x(I,[["render",al]]);var nl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,cl=(t,i,o,n)=>{for(var e=n>1?void 0:n?ol(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&nl(i,o,e),e};let z=class extends b{};z=cl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left">Label</chi-label>
  <chi-textarea id="example__icon-left" icon-left="map-marker" icon-left-color="muted">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left">Label</label>
  <div class="chi-input__wrapper -icon--left">
    <textarea class="chi-input" id="example__icon-left">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
  </div>
</div>`}})})],z);const sl=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__icon-left"},"Label"),l("chi-textarea",{id:"example__icon-left","icon-left":"map-marker","icon-left-color":"muted"},"Sample text")])])],-1);function rl(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Left Aligned",id:"left-aligned",tabs:t.exampleTabs},{example:s(()=>[sl]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pl=x(z,[["render",rl]]);var dl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,_l=(t,i,o,n)=>{for(var e=n>1?void 0:n?ml(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&dl(i,o,e),e};let A=class extends b{};A=_l([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-right">Label</chi-label>
  <chi-textarea id="example__icon-right" icon-right="check" icon-right-color="success">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-right">Label</label>
  <div class="chi-input__wrapper -icon--right">
    <textarea class="chi-input" id="example__icon-right">Sample text</textarea>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`}})})],A);const hl=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__icon-right"},"Label"),l("chi-textarea",{id:"example__icon-right","icon-right":"check","icon-right-color":"success"},"Sample text")])])],-1);function bl(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Right Aligned",id:"right-aligned",tabs:t.exampleTabs},{example:s(()=>[hl]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ul=x(A,[["render",bl]]);var xl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,fl=(t,i,o,n)=>{for(var e=n>1?void 0:n?vl(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&xl(i,o,e),e};let M=class extends b{};M=fl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left-right">Label</chi-label>
  <chi-textarea id="example__icon-left-right" icon-left="map-marker" icon-right="check" icon-left-color="muted" icon-right-color="success">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left-right">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <textarea class="chi-input" id="example__icon-left-right">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`}})})],M);const wl=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__icon-left-right"},"Label"),l("chi-textarea",{id:"example__icon-left-right","icon-left":"map-marker","icon-right":"check","icon-left-color":"muted","icon-right-color":"success"},"Sample text")])])],-1);function gl(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{titleSize:"h4",title:"Left + Right Aligned",id:"left-right-aligned",tabs:t.exampleTabs},{example:s(()=>[wl]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $l=x(M,[["render",gl]]);var Ll=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,Sl=(t,i,o,n)=>{for(var e=n>1?void 0:n?Pl(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Ll(i,o,e),e};let R=class extends b{};R=Sl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__xs">Label</chi-label>
  <chi-textarea size="sm" id="example__xs">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__sm">Label</chi-label>
  <chi-textarea size="sm" id="example__sm">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__md">Label</chi-label>
  <chi-textarea size="md" id="example__md">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__lg">Label</chi-label>
  <chi-textarea size="lg" id="example__lg">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__xl">Label</chi-label>
  <chi-textarea size="xl" id="example__xl">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__xs">Label</label>
  <textarea class="chi-input -xs" id="example__xs">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__sm">Label</label>
  <textarea class="chi-input -sm" id="example__sm">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__md">Label</label>
  <textarea class="chi-input -md" id="example__md">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__lg">Label</label>
  <textarea class="chi-input -lg" id="example__lg">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__xl">Label</label>
  <textarea class="chi-input -xl" id="example__xl">Sample text</textarea>
</div>`}})})],R);const yl=l("p",{class:"-text"},[d("Textareas support the following sizes: "),l("code",null,"xs"),d(", "),l("code",null,"sm"),d(", "),l("code",null,"md"),d(", "),l("code",null,"lg"),d(", and "),l("code",null,"xl"),d(". The default size is "),l("code",null,"md"),d(".")],-1),Cl={class:"chi-grid"},Ol={class:"chi-col -w--12 -w-sm--8 -w-md--6"},Tl={class:"chi-grid"},Dl={class:"chi-col -w--12 -mb--2"},jl={class:"chi-form__item"},El=["for"],Bl=["size","id"];function ql(t,i,o,n,e,c){const a=v,p=f;return m(),h(p,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:t.exampleTabs},{"example-description":s(()=>[yl]),example:s(()=>[l("div",Cl,[l("div",Ol,[l("div",Tl,[(m(),$(V,null,se(["xs","sm","md","lg","xl"],w=>l("div",Dl,[l("div",jl,[l("chi-label",{for:`example__${w}`},"Label",8,El),l("chi-textarea",{size:w,id:`example__${w}`},"Sample text",8,Bl)])])),64))])])])]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Hl=x(R,[["render",ql]]);var Il=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Al=(t,i,o,n)=>{for(var e=n>1?void 0:n?zl(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Il(i,o,e),e};let W=class extends b{constructor(){super(...arguments);g(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);g(this,"codeSnippets",{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__copy-text-button">Label</chi-label>
  <chi-textarea value="Sample Text" id="example__copy-text-button" copy-text></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__copy-text-button">Label</label>
  <div class="-d--flex -align-items--start">
    <div class="chi-input__wrapper -flex--grow1">
      <textarea type="text" class="chi-input" value="Sample text" id="example__copy-text-button" />
    </div>

    <button id="example_copy-text-button" class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Copy to clipboard">
      <div class="chi-button__content">
        <i class="chi-icon icon-copy -sm" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>
  document.getElementById('example_copy-text-button').addEventListener('click', () => {
    navigator.clipboard?.writeText(
      document.getElementById('example__copy-text-button').getAttribute('value')
    );
  });

  <!-- Tooltip -->
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`})}};W=Al([u({})],W);const Ml=l("p",{class:"-text"},[d("Use the "),l("code",null,"copy-text"),d(" attribute to show a copy icon that provides the user the ability to copy the input value into the clipboard.")],-1),Rl=l("div",{class:"chi-grid"},[l("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[l("div",{class:"chi-form__item"},[l("chi-label",{for:"example__copy-text-button"},"Label"),l("chi-textarea",{"copy-text":"",value:"Sample Text",id:"example__copy-text-button"})])])],-1);function Wl(t,i,o,n,e,c){const a=v,p=me,w=f;return m(),h(w,{title:"Copy text button",id:"copy-text",tabs:t.exampleTabs},{"example-description":s(()=>[Ml]),example:s(()=>[Rl]),"code-webcomponent":s(()=>[r(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[r(p),r(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Nl=x(W,[["render",Wl]]);var Ul=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,Gl=(t,i,o,n)=>{for(var e=n>1?void 0:n?Vl(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Ul(i,o,e),e};let N=class extends b{constructor(){super(...arguments);g(this,"selectedTheme",re())}};N=Gl([u({components:{BaseExample:$e,CopyTextButton:Nl,Disabled:Te,Readonly:Ie,Placeholder:Ue,Required:Xe,Optional:at,Help:ft,Message:yt,Error:Bt,InlineLabel:Rt,InlineLabelPercent:Ft,InlineLabelGrid:Zt,InlineTextareas:il,LeftAligned:pl,RightAligned:ul,LeftRightAligned:$l,SizesLumenCenturyLink:Hl,SizesPortal:de}})],N);const Fl=l("h2",null,"Examples",-1),Jl=l("h3",null,"Layout Variations",-1),Kl={key:0},Ql=l("h3",null,"Icons",-1);function Xl(t,i,o,n,e,c){const a=_("BaseExample"),p=_("Disabled"),w=_("Readonly"),L=_("Placeholder"),G=_("Required"),F=_("Optional"),J=_("Help"),K=_("Message"),Q=_("CopyTextButton"),X=_("Error"),Y=_("InlineLabel"),Z=_("InlineLabelPercent"),k=_("InlineLabelGrid"),ee=_("InlineTextareas"),te=_("LeftAligned"),le=_("RightAligned"),ae=_("LeftRightAligned"),ie=_("SizesLumenCenturyLink"),ne=_("SizesPortal");return m(),$(V,null,[Fl,r(a),r(p),r(w),r(L),r(G),r(F),r(J),r(K),r(Q),r(X),Jl,r(Y),r(Z),r(k),r(ee),["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(m(),$("div",Kl,[Ql,r(te),r(le),r(ae)])):pe("",!0),["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(m(),h(ie,{key:1})):(m(),h(ne,{key:2}))],64)}const Yl=x(N,[["render",Xl]]);var Zl=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,ea=(t,i,o,n)=>{for(var e=n>1?void 0:n?kl(i,o):i,c=t.length-1,a;c>=0;c--)(a=t[c])&&(e=(n?a(i,o,e):a(e))||e);return n&&e&&Zl(i,o,e),e};let U=class extends b{constructor(){super(...arguments);g(this,"pageTabs",be)}};U=ea([u({components:{Accessibility:he,Examples:Yl,Properties:_e}})],U);const ta={class:"chi-grid__container -pt--3"},la={class:"chi-tabs-panel -active",id:"examples"},aa={class:"chi-tabs-panel",id:"properties"},ia={class:"chi-tabs-panel",id:"accessibility"};function na(t,i,o,n,e,c){const a=ue,p=_("Examples"),w=_("Properties"),L=_("Accessibility");return m(),$("div",null,[r(a,{title:"Textarea",description:"Textareas are used to input multi-line text data",tabs:t.pageTabs},null,8,["tabs"]),l("div",ta,[l("div",la,[r(p)]),l("div",aa,[r(w)]),l("div",ia,[r(L)])])])}const Na=x(U,[["render",na]]);export{Na as default};
