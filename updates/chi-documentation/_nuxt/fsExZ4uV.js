var he=Object.defineProperty;var be=(l,n,a)=>n in l?he(l,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[n]=a;var w=(l,n,a)=>be(l,typeof n!="symbol"?n+"":n,a);import{V as b,N as u}from"./uJTUijt2.js";import{o as m,f as h,w as s,b as p,a as t,d as r,c as $,F as G,i as J,n as ue,g as xe,r as _}from"./B5CYXVwa.js";import{_ as v}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{_ as x}from"./DlAUqK2U.js";import ve from"./D_96r6SB.js";import fe from"./vC7mwRs5.js";import ge from"./CiSNgDXL.js";import{_ as we}from"./BLbnEGma.js";import{_ as $e}from"./C-hgEc7b.js";import Le from"./BhqeZnBO.js";import ye from"./B9LVpTG_.js";import{s as Pe}from"./2EwpEKcw.js";import{_ as Ce}from"./Be4hAolY.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./B2eUzt0t.js";import"./C9_DePFx.js";var Te=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Oe=(l,n,a,o)=>{for(var e=o>1?void 0:o?Se(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Te(n,a,e),e};let y=class extends b{};y=Oe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__base">Label</chi-label>
  <chi-text-input id="example__base"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <input type="text" class="chi-input" id="example__base">
</div>`}})})],y);const De=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__base"},"Label"),t("chi-text-input",{id:"example__base"})])])],-1);function je(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Base",id:"base",tabs:l.exampleTabs},{example:s(()=>[De]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ee=x(y,[["render",je]]);var Be=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Ie=(l,n,a,o)=>{for(var e=o>1?void 0:o?ze(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Be(n,a,e),e};let P=class extends b{};P=Ie([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__disabled">Label</chi-label>
  <chi-text-input id="example__disabled" value="Sample Text" disabled></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <input type="text" class="chi-input" id="example__disabled" value="Sample Text" disabled>
</div>`}})})],P);const qe=t("p",{class:"-text"},[r("Use the "),t("code",null,"disabled"),r(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),t("strong",null,"Note:"),r(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1),He=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__disabled"},"Label"),t("chi-text-input",{id:"example__disabled",value:"Sample Text",disabled:""})])])],-1);function Ae(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Disabled",id:"disabled",tabs:l.exampleTabs},{"example-description":s(()=>[qe]),example:s(()=>[He]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Me=x(P,[["render",Ae]]);var Re=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Ne=(l,n,a,o)=>{for(var e=o>1?void 0:o?We(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Re(n,a,e),e};let C=class extends b{};C=Ne([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__readonly">Label</chi-label>
  <chi-text-input id="example__readonly" value="Sample Text" readonly></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__readonly">Label</label>
  <input type="text" class="chi-input" id="example__readonly" value="Sample Text" readonly>
</div>`}})})],C);const Fe=t("p",{class:"-text"},[r("Use the "),t("code",null,"readonly"),r(" boolean attribute to prevent users from changing an input value. Unlike disabled inputs, readonly inputs are submitted with the form and can still receive browsing events such as mouse clicks and focus. "),t("strong",null,"Note:"),r(" The required attribute can not be used on inputs with a readonly attribute specified.")],-1),Ue=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__readonly"},"Label"),t("chi-text-input",{id:"example__readonly",value:"Sample Text",readonly:""})])])],-1);function Ve(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Readonly",id:"readonly",tabs:l.exampleTabs},{"example-description":s(()=>[Fe]),example:s(()=>[Ue]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ge=x(C,[["render",Ve]]);var Je=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Qe=(l,n,a,o)=>{for(var e=o>1?void 0:o?Ke(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Je(n,a,e),e};let T=class extends b{};T=Qe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__placeholder">Label</chi-label>
  <chi-text-input id="example__placeholder" placeholder="Placeholder"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__placeholder">Label</label>
  <input type="text" class="chi-input" id="example__placeholder" placeholder="Placeholder">
</div>`}})})],T);const Xe=t("p",{class:"-text"},[r("Use the "),t("code",null,"placeholder"),r(" attribute to provide users with an example of the type of data that can be entered into an input. "),t("strong",null,"Note:"),r(" Placeholder text is not persistent and visually disappears when a value is entered.")],-1),Ye=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__placeholder"},"Label"),t("chi-text-input",{id:"example__placeholder",placeholder:"Placeholder"})])])],-1);function Ze(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Placeholder",id:"placeholder",tabs:l.exampleTabs},{"example-description":s(()=>[Xe]),example:s(()=>[Ye]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ke=x(T,[["render",Ze]]);var el=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,tl=(l,n,a,o)=>{for(var e=o>1?void 0:o?ll(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&el(n,a,e),e};let S=class extends b{};S=tl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__spinner">Label</chi-label>
  <chi-text-input id="example__spinner" spinner></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__spinner">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input" id="example__spinner">
    <svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`}})})],S);const il=t("p",{class:"-text"},[r("Use the "),t("code",null,"spinner"),r(" attribute to let users know when information is saving or loading.")],-1),nl=t("div",{class:"chi-grid"},[t("div",{class:"chi-form__item -mb--2",style:{"max-width":"20rem"}},[t("chi-label",{for:"example__spinner"},"Label"),t("chi-text-input",{spinner:"",id:"example__spinner"})])],-1);function ol(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Spinner",id:"spinner",tabs:l.exampleTabs},{"example-description":s(()=>[il]),example:s(()=>[nl]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const al=x(S,[["render",ol]]);var cl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,pl=(l,n,a,o)=>{for(var e=o>1?void 0:o?sl(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&cl(n,a,e),e};let O=class extends b{};O=pl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__required" required>Label</chi-label>
  <chi-text-input id="example__required" required></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <input type="text" class="chi-input" id="example__required" required>
</div>`}})})],O);const rl=t("p",{class:"-text"},[r("Use the "),t("code",null,"required"),r(" boolean attribute to indicate which inputs must be completed before submitting a form. This is useful for capturing important information and reducing the risk of form errors. To render a required input, apply the "),t("code",null,"required"),r(" attribute to the input. It is also encouraged but not mandatory to apply a "),t("code",null,"required"),r(" attribute to the corresponding label of the input which will automatically render a red asterisk. "),t("strong",null,"Note:"),r(" For HTML Blueprint implementations, the "),t("code",null,"required"),r(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1),dl=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__required",required:""},"Label"),t("chi-text-input",{id:"example__required",required:""})])])],-1);function ml(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Required",id:"required",tabs:l.exampleTabs},{"example-description":s(()=>[rl]),example:s(()=>[dl]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _l=x(O,[["render",ml]]);var hl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,ul=(l,n,a,o)=>{for(var e=o>1?void 0:o?bl(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&hl(n,a,e),e};let D=class extends b{};D=ul([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__optional" optional>Label</chi-label>
  <chi-text-input id="example__optional"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__optional">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <input type="text" class="chi-input" id="example__optional">
</div>`}})})],D);const xl=t("p",{class:"-text"},[r("When the vast majority of inputs in a form are required, "),t("code",null,"optional"),r(" can be used to help emphasize the few that are not. This is useful for inputs that are not relevant to all users, such as an Address Line 2 text input in a Billing or Shipping address form. If the user does not have an apartment, suite, or unit number, applying "),t("code",null,"optional"),r(" to "),t("code",null,"chi-label"),r(" will help convey the labels corresponding input is not required and can be skipped. "),t("strong",null,"Note:"),r(" For HTML Blueprint implementations, the "),t("code",null,"optional"),r(" boolean attribute is not supported on the label. Please use the alternate method specified below for rendering optional text within the label.")],-1),vl=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__optional",optional:""},"Label"),t("chi-text-input",{id:"example__optional"})])])],-1);function fl(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Optional",id:"optional",tabs:l.exampleTabs},{"example-description":s(()=>[xl]),example:s(()=>[vl]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const gl=x(D,[["render",fl]]);var wl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,Ll=(l,n,a,o)=>{for(var e=o>1?void 0:o?$l(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&wl(n,a,e),e};let j=class extends b{};j=Ll([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
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
  <chi-text-input id="example__label-with-icon"></chi-text-input>
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
  <input class="chi-input" id="example__label-with-icon" type="text">
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`}})})],j);const yl=t("p",{class:"-text"},[r("Use "),t("code",null,"chi-label__help"),r(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1),Pl={class:"chi-grid"},Cl={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},Tl={class:"chi-form__item"},Sl={class:"chi-label__wrapper"},Ol=t("chi-label",{for:"example__label-with-icon"},"Label",-1),Dl={class:"chi-label__help"},jl=t("chi-icon",{icon:"circle-info-outline"},null,-1),El=[jl],Bl={ref:"popover",position:"top",variant:"text",arrow:"",reference:"#example__help-button"},zl=t("chi-text-input",{id:"example__label-with-icon"},null,-1);function Il(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Help",id:"help",tabs:l.exampleTabs},{"example-description":s(()=>[yl]),example:s(()=>[t("div",Pl,[t("div",Cl,[t("div",Tl,[t("div",Sl,[Ol,t("div",Dl,[t("chi-button",{id:"example__help-button",type:"icon",size:"xs",variant:"flat","alternative-text":"Help",onClick:n[0]||(n[0]=g=>l.$refs.popover.toggle())},El),t("chi-popover",Bl,"Helpful information goes here.",512)])]),zl])])])]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ql=x(j,[["render",Il]]);var Hl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,Ml=(l,n,a,o)=>{for(var e=o>1?void 0:o?Al(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Hl(n,a,e),e};let E=class extends b{};E=Ml([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__message">Label</chi-label>
  <chi-text-input id="example__message"></chi-text-input>
  <div class="chi-label -status">Optional helper message</div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <input class="chi-input" id="example__message" type="text">
  <div class="chi-label -status">Optional helper message</div>
</div>`}})})],E);const Rl=t("p",{class:"-text"},"Add a message below an input to store descriptions, validation feedback, and other helpful information.",-1),Wl=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__message"},"Label"),t("chi-text-input",{id:"example__message"}),t("div",{class:"chi-label -status"},"Optional helper message")])])],-1);function Nl(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Message",id:"message",tabs:l.exampleTabs},{"example-description":s(()=>[Rl]),example:s(()=>[Wl]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Fl=x(E,[["render",Nl]]);var Ul=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,Gl=(l,n,a,o)=>{for(var e=o>1?void 0:o?Vl(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Ul(n,a,e),e};let B=class extends b{};B=Gl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__danger">Name</chi-label>
  <chi-text-input id="example__danger" state="danger" helper-message="Please enter a name"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__danger">Name</label>
  <input type="text" class="chi-input -danger" id="example__danger">
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please enter a name
  </div>
</div>`}})})],B);const Jl=t("p",{class:"-text"},[r("Use the "),t("code",null,"danger"),r(" state to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),Kl=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__danger"},"Name"),t("chi-text-input",{id:"example__danger",state:"danger","helper-message":"Please enter a name"})])])],-1);function Ql(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Error",id:"error-lumen-centurylink",tabs:l.exampleTabs},{"example-description":s(()=>[Jl]),example:s(()=>[Kl]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Xl=x(B,[["render",Ql]]);var Yl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,kl=(l,n,a,o)=>{for(var e=o>1?void 0:o?Zl(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Yl(n,a,e),e};let z=class extends b{};z=kl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-text-input id="example__inline-label"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item -row">
  <label class="chi-label" for="example__inline-label">Label</label>
  <input class="chi-input" type="text" id="example__inline-label">
</div>`}})})],z);const et=t("p",{class:"-text"},[r("Apply the class "),t("code",null,"-row"),r(" to "),t("code",null,"chi-form__item"),r(" to render labels and inputs inline.")],-1),lt=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item -row"},[t("chi-label",{for:"example__inline-label"},"Label"),t("chi-text-input",{id:"example__inline-label"})])])],-1);function tt(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Inline Label",id:"inline-label",tabs:l.exampleTabs},{"example-description":s(()=>[et]),example:s(()=>[lt]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const it=x(z,[["render",tt]]);var nt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,at=(l,n,a,o)=>{for(var e=o>1?void 0:o?ot(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&nt(n,a,e),e};let I=class extends b{};I=at([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row">
  <chi-label class="-w--50" for="example__inline-label-percent">Label width 50%</chi-label>
  <div class="-w--50">
    <chi-text-input id="example__inline-label-percent"></chi-text-input>
  </div>
</div>`,htmlblueprint:`<div class="chi-form__item -row">
  <label class="chi-label -w--50" for="example__inline-label-percent">Label</label>
  <div class="-w--50">
    <input class="chi-input" type="text" id="example__inline-label-percent">
  </div>
</div>`}})})],I);const ct=t("div",{class:"chi-form__item -row"},[t("chi-label",{class:"-w--50",for:"example__inline-label-percent"},"Label width 50%"),t("div",{class:"-w--50"},[t("chi-text-input",{id:"example__inline-label-percent"})])],-1);function st(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Inline Label - width controlled using percent",id:"inline-label-percent",tabs:l.exampleTabs},{example:s(()=>[ct]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pt=x(I,[["render",st]]);var rt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,mt=(l,n,a,o)=>{for(var e=o>1?void 0:o?dt(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&rt(n,a,e),e};let q=class extends b{};q=mt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row chi-grid -no-gutter">
  <chi-label class="chi-col -w--3" for="example__inline-label-grid">Label width 3 columns</chi-label>
  <chi-text-input class="chi-col -w--9" id="example__inline-label-grid"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item -row chi-grid -no-gutter">
  <label class="chi-label chi-col -w--3" for="example__inline-label-grid">Label</label>
  <input class="chi-input chi-col -w--9" type="text" id="example__inline-label-grid">
</div>`}})})],q);const _t=t("div",{class:"chi-form__item -row chi-grid -no-gutter"},[t("chi-label",{class:"chi-col -w--3",for:"example__inline-label-grid"},"Label width 3 columns"),t("div",{class:"chi-col -w--9"},[t("chi-text-input",{id:"example__inline-label-grid"})])],-1);function ht(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Inline Label - width controlled using grid",id:"inline-label-grid",tabs:l.exampleTabs},{example:s(()=>[_t]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const bt=x(q,[["render",ht]]);var ut=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,vt=(l,n,a,o)=>{for(var e=o>1?void 0:o?xt(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&ut(n,a,e),e};let H=class extends b{};H=vt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input01">Label</chi-label>
    <chi-text-input id="example__inline-input01"></chi-text-input>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input02">Label</chi-label>
    <chi-text-input id="example__inline-input02"></chi-text-input>
  </div>
</div>`,htmlblueprint:`<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input01">Label</label>
    <input class="chi-input" type="text" id="example__inline-input01">
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input02">Label</label>
    <input class="chi-input" type="text" id="example__inline-input02">
  </div>
</div>`}})})],H);const ft=t("div",{class:"-d--flex"},[t("div",{class:"chi-form__item -inline -flex--grow1"},[t("chi-label",{for:"example__inline-input01"},"Label"),t("chi-text-input",{id:"example__inline-input01"})]),t("div",{class:"chi-form__item -inline -flex--grow1"},[t("chi-label",{for:"example__inline-input02"},"Label"),t("chi-text-input",{id:"example__inline-input02"})])],-1);function gt(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Inline Inputs",id:"inline-inputs",tabs:l.exampleTabs},{example:s(()=>[ft]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const wt=x(H,[["render",gt]]);var $t=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,yt=(l,n,a,o)=>{for(var e=o>1?void 0:o?Lt(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&$t(n,a,e),e};let A=class extends b{constructor(){super(...arguments);w(this,"sizes",["md","lg","xl"]);w(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-input__wrapper -floating-label">
  <input class="chi-input -md" type="text" id="floating-label-md">
  <label for="floating-label-md">Placeholder text</label>
</div>

<div class="chi-input__wrapper -floating-label">
  <input class="chi-input -lg" type="text" id="floating-label-lg">
  <label for="floating-label-lg">Placeholder text</label>
</div>

<div class="chi-input__wrapper -floating-label">
  <input class="chi-input -xl" type="text" id="floating-label-xl">
  <label for="floating-label-xl">Placeholder text</label>
</div>

<script>
  chi.floatingLabel(document.querySelectorAll('.-floating-label'));
<\/script>`})}mounted(){this.sizes.forEach(a=>{chi.floatingLabel(this.$refs[`floating-label-${a}`])})}};A=yt([u({})],A);const Pt=t("p",{class:"-text"},[r("Use floating labels to keep the placeholder visible when no label is attached to the input. "),t("strong",null,"Note:"),r(" Chi only supports floating labels on "),t("code",null,"-md"),r(", "),t("code",null,"-lg"),r(" and "),t("code",null,"-xl"),r(" inputs.")],-1),Ct={class:"chi-grid"},Tt={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},St={class:"chi-grid"},Ot={class:"chi-col -w--12 -mb--2"},Dt=["id"],jt=["for"];function Et(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Floating Label",id:"floating-label",tabs:l.exampleTabs},{"example-description":s(()=>[Pt]),example:s(()=>[t("div",Ct,[t("div",Tt,[t("div",St,[(m(!0),$(G,null,J(l.sizes,g=>(m(),$("div",Ot,[t("div",{class:"chi-input__wrapper -floating-label",ref_for:!0,ref:`floating-label-${g}`},[t("input",{type:"text",class:ue(`chi-input -${g}`),id:`floating-label-${g}`},null,10,Dt),t("label",{for:`floating-label-${g}`},"Placeholder text",8,jt)],512)]))),256))])])])]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Bt=x(A,[["render",Et]]);var zt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,qt=(l,n,a,o)=>{for(var e=o>1?void 0:o?It(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&zt(n,a,e),e};let M=class extends b{};M=qt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left-aligned">Label</chi-label>
  <chi-text-input icon-left="search" value="Sample Text" id="example__icon-left-aligned"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left-aligned">Label</label>
  <div class="chi-input__wrapper -icon--left">
    <input type="text" class="chi-input" value="Sample text" id="example__icon-left-aligned">
    <i class="chi-icon icon-search" aria-hidden="true"></i>
    </div>
  </div>
</div>`}})})],M);const Ht=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__icon-left-aligned"},"Label"),t("chi-text-input",{"icon-left":"search",value:"Sample Text",id:"example__icon-left-aligned"})])])],-1);function At(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Left Aligned",id:"left-aligned",tabs:l.exampleTabs},{example:s(()=>[Ht]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Mt=x(M,[["render",At]]);var Rt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Nt=(l,n,a,o)=>{for(var e=o>1?void 0:o?Wt(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Rt(n,a,e),e};let R=class extends b{};R=Nt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-right-aligned">Label</chi-label>
  <chi-text-input icon-right="search" value="Sample Text" id="example__icon-right-aligned"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-right-aligned">Label</label>
  <div class="chi-input__wrapper -icon--right">
    <input type="text" class="chi-input" value="Sample text" id="example__icon-right-aligned">
    <i class="chi-icon icon-search" aria-hidden="true"></i>
  </div>
</div>`}})})],R);const Ft=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__icon-right-aligned"},"Label"),t("chi-text-input",{"icon-right":"search",value:"Sample Text",id:"example__icon-right-aligned"})])])],-1);function Ut(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Right Aligned",id:"right-aligned",tabs:l.exampleTabs},{example:s(()=>[Ft]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Vt=x(R,[["render",Ut]]);var Gt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Kt=(l,n,a,o)=>{for(var e=o>1?void 0:o?Jt(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Gt(n,a,e),e};let W=class extends b{};W=Kt([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left-right-aligned">Label</chi-label>
  <chi-text-input icon-left="search" icon-right="check" icon-right-color="success" value="Sample Text" id="example__icon-left-right-aligned"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left-right-aligned">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <input type="text" class="chi-input" value="Sample text" id="example__icon-left-right-aligned">
    <i class="chi-icon icon-search" aria-hidden="true"></i>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`}})})],W);const Qt=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__icon-left-right-aligned"},"Label"),t("chi-text-input",{"icon-left":"search","icon-right":"check","icon-right-color":"success",value:"Sample Text",id:"example__icon-left-right-aligned"})])])],-1);function Xt(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Left + Right Aligned",id:"left-right-aligned-centurylink",tabs:l.exampleTabs},{example:s(()=>[Qt]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Yt=x(W,[["render",Xt]]);var Zt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,ei=(l,n,a,o)=>{for(var e=o>1?void 0:o?kt(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Zt(n,a,e),e};let N=class extends b{};N=ei([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__size-xs">Label</chi-label>
  <chi-text-input size="xs" id="example__size-xs"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-sm">Label</chi-label>
  <chi-text-input size="sm" id="example__size-sm"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-md">Label</chi-label>
  <chi-text-input size="md" id="example__size-md"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-lg">Label</chi-label>
  <chi-text-input size="lg" id="example__size-lg"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-xl">Label</chi-label>
  <chi-text-input size="xl" id="example__size-xl"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -xs" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -sm" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <input type="text" class="chi-input -md" id="example__size-md">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <input type="text" class="chi-input -lg" id="example__size-lg">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xl">Label</label>
  <input type="text" class="chi-input -xl" id="example__size-xl">
</div>`}})})],N);const li=t("p",{class:"-text"},[r("Text inputs supports the following sizes: "),t("code",null,"xs"),r(", "),t("code",null,"sm"),r(", "),t("code",null,"md"),r(", "),t("code",null,"lg"),r(", and "),t("code",null,"xl"),r(". The default size is "),t("code",null,"md"),r(".")],-1),ti={class:"chi-grid"},ii={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},ni={class:"chi-grid"},oi={class:"chi-col -w--12 -mb--2"},ai={class:"chi-form__item"},ci=["for"],si=["size","id"];function pi(l,n,a,o,e,c){const i=v,d=f;return m(),h(d,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:l.exampleTabs},{"example-description":s(()=>[li]),example:s(()=>[t("div",ti,[t("div",ii,[t("div",ni,[(m(),$(G,null,J(["xs","sm","md","lg","xl"],g=>t("div",oi,[t("div",ai,[t("chi-label",{for:`example__size-${g}`},"Label",8,ci),t("chi-text-input",{size:g,value:"Sample Text",id:`example__size-${g}`},null,8,si)])])),64))])])])]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ri=x(N,[["render",pi]]);var di=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,_i=(l,n,a,o)=>{for(var e=o>1?void 0:o?mi(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&di(n,a,e),e};let F=class extends b{constructor(){super(...arguments);w(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__copy-text-button">Label</chi-label>
  <chi-text-input value="Sample Text" id="example__copy-text-button" copy-text></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__copy-text-button">Label</label>
  <div class="-d--flex -align-items--center">
    <div class="chi-input__wrapper -flex--grow1">
      <input type="text" class="chi-input" value="Sample text" id="example__copy-text-button">
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
<\/script>`})}};F=_i([u({})],F);const hi=t("p",{class:"-text"},[r("Use the "),t("code",null,"copy-text"),r(" attribute to show a copy icon that provides the user the ability to copy the input value into the clipboard.")],-1),bi=t("div",{class:"chi-grid"},[t("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[t("div",{class:"chi-form__item"},[t("chi-label",{for:"example__copy-text-button"},"Label"),t("chi-text-input",{"copy-text":"",value:"Sample Text",id:"example__copy-text-button"})])])],-1);function ui(l,n,a,o,e,c){const i=v,d=we,g=f;return m(),h(g,{title:"Copy text button",id:"copy-text",tabs:l.exampleTabs},{"example-description":s(()=>[hi]),example:s(()=>[bi]),"code-webcomponent":s(()=>[p(i,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[p(d),p(i,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xi=x(F,[["render",ui]]);var vi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,gi=(l,n,a,o)=>{for(var e=o>1?void 0:o?fi(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&vi(n,a,e),e};let U=class extends b{constructor(){super(...arguments);w(this,"selectedTheme",xe())}};U=gi([u({components:{BaseExample:Ee,Disabled:Me,Readonly:Ge,Placeholder:ke,Spinner:al,Required:_l,Optional:gl,Help:ql,Message:Fl,ErrorLumenCenturyLink:Xl,ErrorPortal:ve,InlineLabel:it,InlineLabelPercent:pt,InlineLabelGrid:bt,InlineInputs:wt,FloatingLabel:Bt,LeftAligned:Mt,RightAligned:Vt,LeftRightAlignedCenturyLink:Yt,LeftRightAlignedPortal:fe,SizesLumenCenturyLink:ri,SizesPortal:ge,CopyTextButton:xi}})],U);const wi=t("h2",null,"Examples",-1),$i=t("h2",null,"Layout Variations",-1),Li=t("h2",null,"Icons",-1),yi={key:2},Pi={key:3};function Ci(l,n,a,o,e,c){const i=_("BaseExample"),d=_("Disabled"),g=_("Readonly"),L=_("Placeholder"),K=_("Spinner"),Q=_("Required"),X=_("Optional"),Y=_("Help"),Z=_("Message"),k=_("CopyTextButton"),ee=_("ErrorLumenCenturyLink"),le=_("ErrorPortal"),te=_("InlineLabel"),ie=_("InlineLabelPercent"),ne=_("InlineLabelGrid"),oe=_("InlineInputs"),ae=_("FloatingLabel"),ce=_("LeftAligned"),se=_("RightAligned"),pe=_("LeftRightAlignedCenturyLink"),re=_("SizesLumenCenturyLink"),de=_("LeftRightAlignedPortal"),me=_("SizesPortal"),_e=$e;return m(),h(_e,null,{default:s(()=>[wi,p(i),p(d),p(g),p(L),p(K),p(Q),p(X),p(Y),p(Z),p(k),["lumen","centurylink","lumenrebrand24"].includes(l.selectedTheme)?(m(),h(ee,{key:0})):(m(),h(le,{key:1})),$i,p(te),p(ie),p(ne),p(oe),p(ae),Li,p(ce),p(se),["lumen","centurylink","lumenrebrand24"].includes(l.selectedTheme)?(m(),$("div",yi,[p(pe),p(re)])):(m(),$("div",Pi,[p(de),p(me)]))]),_:1})}const Ti=x(U,[["render",Ci]]);var Si=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Di=(l,n,a,o)=>{for(var e=o>1?void 0:o?Oi(n,a):n,c=l.length-1,i;c>=0;c--)(i=l[c])&&(e=(o?i(n,a,e):i(e))||e);return o&&e&&Si(n,a,e),e};let V=class extends b{constructor(){super(...arguments);w(this,"pageTabs",Pe)}};V=Di([u({components:{Accessibility:ye,Examples:Ti,Properties:Le}})],V);const ji={class:"chi-grid__container -pt--3"},Ei={class:"chi-tabs-panel -active",id:"examples"},Bi={class:"chi-tabs-panel",id:"properties"},zi={class:"chi-tabs-panel",id:"accessibility"};function Ii(l,n,a,o,e,c){const i=Ce,d=_("Examples"),g=_("Properties"),L=_("Accessibility");return m(),$("div",null,[p(i,{title:"Text input",description:"Text inputs are used for inputting single line text data.",tabs:l.pageTabs},null,8,["tabs"]),t("div",ji,[t("div",Ei,[p(d)]),t("div",Bi,[p(g)]),t("div",zi,[p(L)])])])}const Ln=x(V,[["render",Ii]]);export{Ln as default};
