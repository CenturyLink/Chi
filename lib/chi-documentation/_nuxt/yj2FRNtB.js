var oe=Object.defineProperty;var se=(t,e,o)=>e in t?oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var w=(t,e,o)=>se(t,typeof e!="symbol"?e+"":e,o);import{V as h,N as u}from"./NAah3XrW.js";import{o as m,h as _,w as r,a,b as c,d,c as $,F as V,i as re,j as ce,m as b,l as pe}from"./CEIPSiTs.js";import{_ as f}from"./onyWiYp2.js";import{_ as v}from"./CAQzZ0uH.js";import{_ as x}from"./DlAUqK2U.js";import de from"./DQPtY2PK.js";import{_ as me}from"./CS2TcPBX.js";import be from"./CkEC1dVM.js";import _e from"./C05oAox9.js";import{s as he}from"./DtNz156Q.js";import{_ as ue}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B2BTeTyp.js";import"./_tbI9m6B.js";import"./DA9BgUq9.js";var xe=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,ve=(t,e,o,n)=>{for(var l=n>1?void 0:n?fe(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&xe(e,o,l),l};let P=class extends h{};P=ve([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__base">Label</chi-label>
  <chi-textarea id="example__base"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <textarea class="chi-input" id="example__base"></textarea>
</div>`}})})],P);function ge(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Base",id:"base",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__base"},"Label"),a("chi-textarea",{id:"example__base"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const we=x(P,[["render",ge]]);var $e=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Pe=(t,e,o,n)=>{for(var l=n>1?void 0:n?Le(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&$e(e,o,l),l};let S=class extends h{};S=Pe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__disabled">Label</chi-label>
  <chi-textarea id="example__disabled" disabled>Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <textarea class="chi-input" id="example__disabled" disabled>Sample text</textarea>
</div>`}})})],S);function Se(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use the "),a("code",null,"disabled"),d(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),a("strong",null,"Note:"),d(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__disabled"},"Label"),a("chi-textarea",{id:"example__disabled",disabled:""},"Sample text")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ye=x(S,[["render",Se]]);var Ce=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,Te=(t,e,o,n)=>{for(var l=n>1?void 0:n?Oe(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Ce(e,o,l),l};let y=class extends h{};y=Te([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__readonly">Label</chi-label>
  <chi-textarea id="example__readonly" readonly>Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__readonly">Label</label>
  <textarea class="chi-input" id="example__readonly" readonly>Sample text</textarea>
</div>`}})})],y);function De(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Readonly",id:"readonly",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use the "),a("code",null,"readonly"),d(" boolean attribute to prevent users from changing an input value. Unlike disabled inputs, readonly inputs are submitted with the form and can still receive browsing events such as mouse clicks and focus. "),a("strong",null,"Note:"),d(" The required attribute can not be used on inputs with a readonly attribute specified.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__readonly"},"Label"),a("chi-textarea",{id:"example__readonly",readonly:""},"Sample text")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const je=x(y,[["render",De]]);var Be=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,qe=(t,e,o,n)=>{for(var l=n>1?void 0:n?Ee(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Be(e,o,l),l};let C=class extends h{};C=qe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__placeholder">Label</chi-label>
  <chi-textarea id="example__placeholder" placeholder="Placeholder"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__placeholder">Label</label>
  <textarea class="chi-input" id="example__placeholder" placeholder="Placeholder"></textarea>
</div>`}})})],C);function Ie(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Placeholder",id:"placeholder",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use the "),a("code",null,"placeholder"),d(" attribute to provide users with an example of the type of data that can be entered into an input. "),a("strong",null,"Note:"),d(" Placeholder text is not persistent and visually disappears when a value is entered.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__placeholder"},"Label"),a("chi-textarea",{id:"example__placeholder",placeholder:"Placeholder"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const He=x(C,[["render",Ie]]);var Me=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Re=(t,e,o,n)=>{for(var l=n>1?void 0:n?Ae(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Me(e,o,l),l};let O=class extends h{};O=Re([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__required" required>Label</chi-label>
  <chi-textarea id="example__required" required></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <textarea class="chi-input" id="example__required" required></textarea>
</div>`}})})],O);function ze(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Required",id:"required",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use the "),a("code",null,"required"),d(" boolean attribute to indicate which inputs must be completed before submitting a form. This is useful for capturing important information and reducing the risk of form errors. To render a required textarea, apply the "),a("code",null,"required"),d(" attribute to the textarea. It is also encouraged but not mandatory to apply a "),a("code",null,"required"),d(" attribute to the corresponding label of the textarea which will automatically render a red asterisk. "),a("strong",null,"Note:"),d(" For HTML Blueprint implementations, the "),a("code",null,"required"),d(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__required",required:""},"Label"),a("chi-textarea",{id:"example__required",required:""})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=x(O,[["render",ze]]);var Ne=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Ve=(t,e,o,n)=>{for(var l=n>1?void 0:n?Ue(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Ne(e,o,l),l};let T=class extends h{};T=Ve([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__optional" optional>Label</chi-label>
  <chi-textarea id="example__optional"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__optional">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <textarea class="chi-input" id="example__optional"></textarea>
</div>`}})})],T);function Ge(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Optional",id:"optional",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("When the vast majority of inputs in a form are required, "),a("code",null,"optional"),d(" can be used to help emphasize the few that are not. This is useful for textareas that are not relevant to all users, such as an Additional Comments textarea in a create support ticket form. If the user does not have additional comments, applying "),a("code",null,"optional"),d(" to "),a("code",null,"chi-label"),d(" will help convey the labels corresponding textarea is not required and can be skipped. "),a("strong",null,"Note:"),d(" For HTML Blueprint implementations, the "),a("code",null,"optional"),d(" boolean attribute is not supported on the label. Please use the alternate method specified below for rendering optional text within the label.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__optional",optional:""},"Label"),a("chi-textarea",{id:"example__optional"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Fe=x(T,[["render",Ge]]);var Je=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Qe=(t,e,o,n)=>{for(var l=n>1?void 0:n?Ke(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Je(e,o,l),l};let D=class extends h{};D=Qe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__help" info-icon info-icon-message="Helpful information goes here.">Label</chi-label>
  <chi-textarea id="example__help"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__help">Label</label>
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
  <textarea class="chi-input" id="example__help"></textarea>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`}})})],D);function Xe(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Help",id:"help",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use "),a("code",null,"chi-label"),d("'s attributes "),a("code",null,"infoIcon"),d(" and "),a("code",null,"infoIconMessage"),d(" to include a help icon that displays helpful information in a popover.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__help","info-icon":"","info-icon-message":"Helpful information goes here."},"Label"),a("chi-textarea",{id:"example__help"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ye=x(D,[["render",Xe]]);var Ze=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,el=(t,e,o,n)=>{for(var l=n>1?void 0:n?ke(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Ze(e,o,l),l};let j=class extends h{};j=el([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__message">Label</chi-label>
  <chi-textarea id="example__message"></chi-textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <textarea class="chi-input" id="example__message"></textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`}})})],j);function ll(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Message",id:"message",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},"Add a message below a textarea to store descriptions, validation feedback, and other helpful information.",-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__message"},"Label"),a("chi-textarea",{id:"example__message"}),a("div",{class:"chi-label -status"},"Optional helper message")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const tl=x(j,[["render",ll]]);var al=Object.defineProperty,il=Object.getOwnPropertyDescriptor,nl=(t,e,o,n)=>{for(var l=n>1?void 0:n?il(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&al(e,o,l),l};let B=class extends h{};B=nl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
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
</div>`}})})],B);function ol(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Error",id:"error",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use the "),a("code",null,"danger"),d(" state to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__danger",required:""},"Describe the issue"),a("chi-textarea",{id:"example__danger",state:"danger",required:""}),a("div",{class:"chi-label -status -danger"},"Please describe the issue")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const sl=x(B,[["render",ol]]);var rl=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,pl=(t,e,o,n)=>{for(var l=n>1?void 0:n?cl(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&rl(e,o,l),l};let E=class extends h{};E=pl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row -align-items--start">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-textarea id="example__inline-label"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item -row -align-items--start">
  <label class="chi-label" for="example__inline-label">Label</label>
  <textarea class="chi-input" id="example__inline-label"></textarea>
</div>`}})})],E);function dl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Inline Label",id:"inline-label",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Apply the class "),a("code",null,"-row"),d(" to "),a("code",null,"chi-form__item"),d(" to render labels and textareas inline.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item -row -align-items--start"},[a("chi-label",{for:"example__inline-label"},"Label"),a("chi-textarea",{id:"example__inline-label"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ml=x(E,[["render",dl]]);var bl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,hl=(t,e,o,n)=>{for(var l=n>1?void 0:n?_l(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&bl(e,o,l),l};let q=class extends h{};q=hl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row -align-items--start">
  <chi-label class="-w--50" for="example__inline-label-percent">Label width 50%</chi-label>
  <div class="-w--50">
    <chi-textarea id="example__inline-label-percent"></chi-textarea>
  </div>
</div>`,htmlblueprint:`<div class="chi-form__item -row -align-items--start">
  <label class="chi-label -w--50" for="example__inline-label-percent">Label</label>
  <div class="-w--50">
    <textarea class="chi-input" id="example__inline-label-percent"></textarea>
  </div>
</div>`}})})],q);function ul(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Inline Label - width controlled using percent",id:"inline-label-percent",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"chi-form__item -row -align-items--start"},[a("chi-label",{class:"-w--50",for:"example__inline-label-percent"},"Label width 50%"),a("div",{class:"-w--50"},[a("chi-textarea",{id:"example__inline-label-percent"})])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xl=x(q,[["render",ul]]);var fl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,gl=(t,e,o,n)=>{for(var l=n>1?void 0:n?vl(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&fl(e,o,l),l};let I=class extends h{};I=gl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <chi-label class="chi-col -w--3" for="example__inline-label-grid">Label width 3 columns</chi-label>
  <chi-textarea class="chi-col -w--9" id="example__inline-label-grid"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <label class="chi-label chi-col -w--3" for="example__inline-label-grid">Label</label>
  <textarea class="chi-input chi-col -w--9" id="example__inline-label-grid"></textarea>
</div>`}})})],I);function wl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Inline Label - width controlled using grid",id:"inline-label-grid",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"chi-form__item -row chi-grid -no-gutter -align-items--start"},[a("chi-label",{class:"chi-col -w--3",for:"example__inline-label-grid"},"Label width 3 columns"),a("div",{class:"chi-col -w--9"},[a("chi-textarea",{id:"example__inline-label-grid"})])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $l=x(I,[["render",wl]]);var Ll=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,Sl=(t,e,o,n)=>{for(var l=n>1?void 0:n?Pl(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Ll(e,o,l),l};let H=class extends h{};H=Sl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="-d--flex">
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
</div>`}})})],H);function yl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Inline Textareas",id:"inline-textareas",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"-d--flex"},[a("div",{class:"chi-form__item -inline -flex--grow1"},[a("chi-label",{for:"example__inline-input01"},"Label"),a("chi-textarea",{id:"example__inline-input01"})]),a("div",{class:"chi-form__item -inline -flex--grow1"},[a("chi-label",{for:"example__inline-input02"},"Label"),a("chi-textarea",{id:"example__inline-input02"})])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Cl=x(H,[["render",yl]]);var Ol=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Dl=(t,e,o,n)=>{for(var l=n>1?void 0:n?Tl(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Ol(e,o,l),l};let M=class extends h{};M=Dl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left">Label</chi-label>
  <chi-textarea id="example__icon-left" icon-left="map-marker" icon-left-color="muted">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left">Label</label>
  <div class="chi-input__wrapper -icon--left">
    <textarea class="chi-input" id="example__icon-left">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
  </div>
</div>`}})})],M);function jl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Left Aligned",id:"left-aligned",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__icon-left"},"Label"),a("chi-textarea",{id:"example__icon-left","icon-left":"map-marker","icon-left-color":"muted"},"Sample text")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Bl=x(M,[["render",jl]]);var El=Object.defineProperty,ql=Object.getOwnPropertyDescriptor,Il=(t,e,o,n)=>{for(var l=n>1?void 0:n?ql(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&El(e,o,l),l};let A=class extends h{};A=Il([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-right">Label</chi-label>
  <chi-textarea id="example__icon-right" icon-right="check" icon-right-color="success">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-right">Label</label>
  <div class="chi-input__wrapper -icon--right">
    <textarea class="chi-input" id="example__icon-right">Sample text</textarea>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`}})})],A);function Hl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Right Aligned",id:"right-aligned",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__icon-right"},"Label"),a("chi-textarea",{id:"example__icon-right","icon-right":"check","icon-right-color":"success"},"Sample text")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ml=x(A,[["render",Hl]]);var Al=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,zl=(t,e,o,n)=>{for(var l=n>1?void 0:n?Rl(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Al(e,o,l),l};let R=class extends h{};R=zl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left-right">Label</chi-label>
  <chi-textarea id="example__icon-left-right" icon-left="map-marker" icon-right="check" icon-left-color="muted" icon-right-color="success">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left-right">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <textarea class="chi-input" id="example__icon-left-right">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`}})})],R);function Wl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{titleSize:"h4",title:"Left + Right Aligned",id:"left-right-aligned",tabs:t.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__icon-left-right"},"Label"),a("chi-textarea",{id:"example__icon-left-right","icon-left":"map-marker","icon-right":"check","icon-left-color":"muted","icon-right-color":"success"},"Sample text")])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Nl=x(R,[["render",Wl]]);var Ul=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,Gl=(t,e,o,n)=>{for(var l=n>1?void 0:n?Vl(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&Ul(e,o,l),l};let z=class extends h{};z=Gl([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
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
</div>`}})})],z);const Fl={class:"chi-grid"},Jl={class:"chi-col -w--12 -w-sm--8 -w-md--6"},Kl={class:"chi-grid"},Ql={class:"chi-col -w--12 -mb--2"},Xl={class:"chi-form__item"},Yl=["for"],Zl=["size","id"];function kl(t,e,o,n,l,s){const i=f,p=v;return m(),_(p,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Textareas support the following sizes: "),a("code",null,"xs"),d(", "),a("code",null,"sm"),d(", "),a("code",null,"md"),d(", "),a("code",null,"lg"),d(", and "),a("code",null,"xl"),d(". The default size is "),a("code",null,"md"),d(".")],-1)])),example:r(()=>[a("div",Fl,[a("div",Jl,[a("div",Kl,[(m(),$(V,null,re(["xs","sm","md","lg","xl"],g=>a("div",Ql,[a("div",Xl,[a("chi-label",{for:`example__${g}`},"Label",8,Yl),a("chi-textarea",{size:g,id:`example__${g}`},"Sample text",8,Zl)])])),64))])])])]),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const et=x(z,[["render",kl]]);var lt=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,at=(t,e,o,n)=>{for(var l=n>1?void 0:n?tt(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&lt(e,o,l),l};let W=class extends h{constructor(){super(...arguments);w(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:`<div class="chi-form__item">
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
<\/script>`})}};W=at([u({})],W);function it(t,e,o,n,l,s){const i=f,p=me,g=v;return m(),_(g,{title:"Copy text button",id:"copy-text",tabs:t.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[a("p",{class:"-text"},[d("Use the "),a("code",null,"copy-text"),d(" attribute to show a copy icon that provides the user the ability to copy the input value into the clipboard.")],-1)])),example:r(()=>e[1]||(e[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__copy-text-button"},"Label"),a("chi-textarea",{"copy-text":"",value:"Sample Text",id:"example__copy-text-button"})])])],-1)])),"code-webcomponent":r(()=>[c(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(p),c(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nt=x(W,[["render",it]]);var ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,rt=(t,e,o,n)=>{for(var l=n>1?void 0:n?st(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&ot(e,o,l),l};let N=class extends h{constructor(){super(...arguments);w(this,"selectedTheme",ce())}};N=rt([u({components:{BaseExample:we,CopyTextButton:nt,Disabled:ye,Readonly:je,Placeholder:He,Required:We,Optional:Fe,Help:Ye,Message:tl,Error:sl,InlineLabel:ml,InlineLabelPercent:xl,InlineLabelGrid:$l,InlineTextareas:Cl,LeftAligned:Bl,RightAligned:Ml,LeftRightAligned:Nl,SizesLumenCenturyLink:et,SizesPortal:de}})],N);const ct={key:0};function pt(t,e,o,n,l,s){const i=b("BaseExample"),p=b("Disabled"),g=b("Readonly"),L=b("Placeholder"),G=b("Required"),F=b("Optional"),J=b("Help"),K=b("Message"),Q=b("CopyTextButton"),X=b("Error"),Y=b("InlineLabel"),Z=b("InlineLabelPercent"),k=b("InlineLabelGrid"),ee=b("InlineTextareas"),le=b("LeftAligned"),te=b("RightAligned"),ae=b("LeftRightAligned"),ie=b("SizesLumenCenturyLink"),ne=b("SizesPortal");return m(),$(V,null,[e[1]||(e[1]=a("h2",null,"Examples",-1)),c(i),c(p),c(g),c(L),c(G),c(F),c(J),c(K),c(Q),c(X),e[2]||(e[2]=a("h3",null,"Layout Variations",-1)),c(Y),c(Z),c(k),c(ee),["lumen","centurylink"].includes(t.selectedTheme)?(m(),$("div",ct,[e[0]||(e[0]=a("h3",null,"Icons",-1)),c(le),c(te),c(ae)])):pe("",!0),["lumen","centurylink"].includes(t.selectedTheme)?(m(),_(ie,{key:1})):(m(),_(ne,{key:2}))],64)}const dt=x(N,[["render",pt]]);var mt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,_t=(t,e,o,n)=>{for(var l=n>1?void 0:n?bt(e,o):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(l=(n?i(e,o,l):i(l))||l);return n&&l&&mt(e,o,l),l};let U=class extends h{constructor(){super(...arguments);w(this,"pageTabs",he)}};U=_t([u({components:{Accessibility:_e,Examples:dt,Properties:be}})],U);const ht={class:"chi-grid__container -pt--3"},ut={class:"chi-tabs-panel -active",id:"examples"},xt={class:"chi-tabs-panel",id:"properties"},ft={class:"chi-tabs-panel",id:"accessibility"};function vt(t,e,o,n,l,s){const i=ue,p=b("Examples"),g=b("Properties"),L=b("Accessibility");return m(),$("div",null,[c(i,{title:"Textarea",description:"Textareas are used to input multi-line text data",tabs:t.pageTabs},null,8,["tabs"]),a("div",ht,[a("div",ut,[c(p)]),a("div",xt,[c(g)]),a("div",ft,[c(L)])])])}const ta=x(U,[["render",vt]]);export{ta as default};
