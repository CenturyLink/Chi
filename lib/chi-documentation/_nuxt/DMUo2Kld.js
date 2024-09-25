var z=Object.defineProperty;var F=(i,c,t)=>c in i?z(i,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[c]=t;var w=(i,c,t)=>F(i,typeof c!="symbol"?c+"":c,t);import{V as d,N as m}from"./NAah3XrW.js";import{_ as u}from"./onyWiYp2.js";import{_ as v}from"./CAQzZ0uH.js";import{o as _,h as k,w as a,a as e,b,d as h,m as r,c as L}from"./CEIPSiTs.js";import{_ as x}from"./DlAUqK2U.js";import{_ as M}from"./CS2TcPBX.js";import K from"./C8ugMnSw.js";import Q from"./DA035tSM.js";import{s as X}from"./DtNz156Q.js";import{_ as Y}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B2BTeTyp.js";import"./B52wz4YK.js";import"./DA9BgUq9.js";var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,ce=(i,c,t,s)=>{for(var l=s>1?void 0:s?ee(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&Z(c,t,l),l};let $=class extends d{};$=ce([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1">
    <label class="chi-checkbox__label" for="checkbox-ba1">Checkbox</label>
  </div>
</div>`}})})],$);function le(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Base",id:"base",tabs:i.exampleTabs},{example:a(()=>c[0]||(c[0]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-ba1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-ba1"},"Checkbox")])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ie=x($,[["render",le]]);var oe=Object.defineProperty,se=Object.getOwnPropertyDescriptor,te=(i,c,t,s)=>{for(var l=s>1?void 0:s?se(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&oe(c,t,l),l};let O=class extends d{};O=te([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ch1" checked>
    <label class="chi-checkbox__label" for="checkbox-ch1">Checkbox</label>
  </div>
</div>`}})})],O);function ne(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Checked",id:"checked",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Use the "),e("code",null,"checked"),h(" boolean attribute to set the default value of a checkbox to true.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-ch1",checked:""}),e("label",{class:"chi-checkbox__label",for:"checkbox-ch1"},"Checkbox")])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ae=x(O,[["render",ne]]);var be=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,he=(i,c,t,s)=>{for(var l=s>1?void 0:s?pe(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&be(c,t,l),l};let y=class extends d{constructor(){super(...arguments);w(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input -indeterminate" id="checkbox-ind1">
    <label class="chi-checkbox__label" for="checkbox-ind1">Checkbox</label>
  </div>
</div>

<!-- JavaScript -->
<script>
  var checkbox = document.getElementById('checkbox-ind1');

  checkbox.indeterminate = true;
<\/script>`})}mounted(){const t=document.getElementById("checkbox-ind1");t.indeterminate=!0}};y=he([m({})],y);function re(i,c,t,s,l,n){const o=u,p=M,f=v;return _(),k(f,{title:"Indeterminate",id:"indeterminate",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("A checkbox cannot be set to "),e("code",null,"indeterminate"),h(" state by an HTML attribute - it must be set by JavaScript. Use the class "),e("code",null,"-indeterminate"),h(" to achieve the corresponding style of the checkbox.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input -indeterminate",type:"checkbox",id:"checkbox-ind1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-ind1"},"Checkbox")])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(p),b(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const de=x(y,[["render",re]]);var me=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,xe=(i,c,t,s)=>{for(var l=s>1?void 0:s?_e(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&me(c,t,l),l};let C=class extends d{};C=xe([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-di1" disabled>
    <label class="chi-checkbox__label" for="checkbox-di1">Checkbox</label>
  </div>
</div>`}})})],C);function ue(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Disabled",id:"disabled",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Use the "),e("code",null,"disabled"),h(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),h(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-di1",disabled:""}),e("label",{class:"chi-checkbox__label",for:"checkbox-di1"},"Checkbox")])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ve=x(C,[["render",ue]]);var ke=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,we=(i,c,t,s)=>{for(var l=s>1?void 0:s?fe(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&ke(c,t,l),l};let P=class extends d{};P=we([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-re1" required>
    <label class="chi-checkbox__label" for="checkbox-re1">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
</div>`}})})],P);function ge(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Required",id:"required",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Use the "),e("code",null,"required"),h(" boolean attribute to indicate which checkboxes must be completed before submitting a form. This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-re1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-re1"},[h("I accept the Terms of Service"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")])])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=x(P,[["render",ge]]);var Oe=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,Ce=(i,c,t,s)=>{for(var l=s>1?void 0:s?ye(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&Oe(c,t,l),l};let S=class extends d{constructor(){super(...arguments);w(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox-he1">
    <label class="chi-checkbox__label" for="checkbox-he1">Checkbox</label>
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
  </div>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`})}mounted(){chi.popover(document.getElementById("example__help-button"))}};S=Ce([m({})],S);function Pe(i,c,t,s,l,n){const o=u,p=M,f=v;return _(),k(f,{title:"Help",id:"help",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Use "),e("code",null,"chi-label__help"),h(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-he1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-he1"},"Checkbox"),e("div",{class:"chi-label__help"},[e("button",{class:"chi-button -icon -xs -flat",id:"example__help-button","aria-label":"Help","data-target":"#example__help-popover"},[e("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"})]),e("section",{class:"chi-popover chi-popover--top",id:"example__help-popover","aria-modal":"true",role:"dialog"},[e("div",{class:"chi-popover__content"},[e("p",{class:"chi-popover__text"},"Helpful information goes here.")])])])])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(p),b(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Se=x(S,[["render",Pe]]);var Te=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Ee=(i,c,t,s)=>{for(var l=s>1?void 0:s?De(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&Te(c,t,l),l};let T=class extends d{};T=Ee([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-me1">
    <label class="chi-checkbox__label" for="checkbox-me1">Checkbox</label>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`}})})],T);function je(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Message",id:"message",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},"Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.",-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-me1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-me1"},"Checkbox")]),e("div",{class:"chi-label -status"},"Optional helper message")],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Be=x(T,[["render",je]]);var He=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,qe=(i,c,t,s)=>{for(var l=s>1?void 0:s?Ie(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&He(c,t,l),l};let D=class extends d{};D=qe([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-er1">
    <label class="chi-checkbox__label -danger" for="checkbox-er1">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
  <div class="chi-label -status -danger">Please accept the terms of service</div>
</div>`}})})],D);function Le(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Error",id:"error",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Use the "),e("code",null,"-danger"),h(" state to provide feedback to users when an input fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-er1"}),e("label",{class:"chi-checkbox__label -danger",for:"checkbox-er1"},[h("I accept the Terms of Service"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")])]),e("div",{class:"chi-label -status -danger"},"Please accept the terms of service")],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Me=x(D,[["render",Le]]);var We=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ne=(i,c,t,s)=>{for(var l=s>1?void 0:s?Re(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&We(c,t,l),l};let E=class extends d{};E=Ne([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-st1">
      <label class="chi-checkbox__label" for="checkbox-st1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-st2">
      <label class="chi-checkbox__label" for="checkbox-st2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],E);function Ae(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Stacked",id:"stacked",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Group checkboxes in "),e("code",null,"chi-form__item"),h(" for easy stacking.")],-1)])),example:a(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-st1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-st1"},"Option 1")])],-1),e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-st2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-st2"},"Option 2")])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ge=x(E,[["render",Ae]]);var Ue=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Je=(i,c,t,s)=>{for(var l=s>1?void 0:s?Ve(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&Ue(c,t,l),l};let j=class extends d{};j=Je([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
  <div class="chi-grid">
    <div class="chi-col -w--12 -mb--1">
      <legend class="chi-label">Select options</legend>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g1">
          <label class="chi-checkbox__label" for="checkbox-g1">Option 1</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g2">
          <label class="chi-checkbox__label" for="checkbox-g2">Option 2</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g3">
          <label class="chi-checkbox__label" for="checkbox-g3">Option 3</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g4">
          <label class="chi-checkbox__label" for="checkbox-g4">Option 4</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g5">
          <label class="chi-checkbox__label" for="checkbox-g5">Option 5</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g6">
          <label class="chi-checkbox__label" for="checkbox-g6">Option 6</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g7">
          <label class="chi-checkbox__label" for="checkbox-g7">Option 7</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g8">
          <label class="chi-checkbox__label" for="checkbox-g8">Option 8</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g9">
          <label class="chi-checkbox__label" for="checkbox-g9">Option 9</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g10">
          <label class="chi-checkbox__label" for="checkbox-g10">Option 10</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g11">
          <label class="chi-checkbox__label" for="checkbox-g11">Option 11</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g12">
          <label class="chi-checkbox__label" for="checkbox-g12">Option 12</label>
        </div>
      </div>
    </div>
  </div>
</fieldset>`}})})],j);function ze(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Grid",id:"grid",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Use "),e("code",null,"chi-grid"),h(" to render a group of checkboxes in a responsive grid. In the example below, the checkboxes display in 4 columns on medium screens and up, 2 columns on small screens, and 1 column on x-small screens.")],-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -mb--1"},[e("legend",{class:"chi-label"},"Select options")]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g1"},"Option 1")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g2"},"Option 2")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g3"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g3"},"Option 3")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g4"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g4"},"Option 4")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g5"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g5"},"Option 5")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g6"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g6"},"Option 6")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g7"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g7"},"Option 7")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g8"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g8"},"Option 8")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g9"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g9"},"Option 9")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g10"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g10"},"Option 10")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g11"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g11"},"Option 11")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g12"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g12"},"Option 12")])])])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Fe=x(j,[["render",ze]]);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Xe=(i,c,t,s)=>{for(var l=s>1?void 0:s?Qe(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&Ke(c,t,l),l};let B=class extends d{};B=Xe([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-in1">
      <label class="chi-checkbox__label" for="checkbox-in1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-in2">
      <label class="chi-checkbox__label" for="checkbox-in2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],B);function Ye(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Inline",id:"inline",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Apply the class "),e("code",null,"-inline"),h(" to "),e("code",null,"chi-form__item"),h(" to display two or more checkboxes in one row.")],-1)])),example:a(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("div",{class:"chi-form__item -inline"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-in1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-in1"},"Option 1")])],-1),e("div",{class:"chi-form__item -inline"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-in2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-in2"},"Option 2")])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ze=x(B,[["render",Ye]]);var ec=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,lc=(i,c,t,s)=>{for(var l=s>1?void 0:s?cc(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&ec(c,t,l),l};let H=class extends d{};H=lc([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li1">
        <label class="chi-checkbox__label" for="checkbox-li1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li2">
        <label class="chi-checkbox__label" for="checkbox-li2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li3">
        <label class="chi-checkbox__label" for="checkbox-li3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li4">
        <label class="chi-checkbox__label" for="checkbox-li4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li5">
        <label class="chi-checkbox__label" for="checkbox-li5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`}})})],H);function ic(i,c,t,s,l,n){const o=u,p=v;return _(),k(p,{title:"Checkbox List",id:"checkbox_list",tabs:i.exampleTabs},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},[h("Checkbox lists are used to wrap a series of checkboxes in a list. To render a series of checkboxes in a list, apply the class "),e("code",null,"-list"),h(" to "),e("code",null,"chi-form__item"),h(".")],-1)])),example:a(()=>c[1]||(c[1]=[e("legend",{class:"chi-label"},"Select options",-1),e("ul",{class:"chi-form__item -list",style:{"max-width":"20rem"}},[e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li1"},"Option 1")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li2"},"Option 2")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li3"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li3"},"Option 3")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li4"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li4"},"Option 4")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li5"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li5"},"Option 5")])])],-1)])),"code-webcomponent":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[b(o,{class:"html",lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const oc=x(H,[["render",ic]]);var sc=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,nc=(i,c,t,s)=>{for(var l=s>1?void 0:s?tc(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&sc(c,t,l),l};let I=class extends d{};I=nc([m({components:{BaseExample:ie,Checked:ae,Indeterminate:de,Disabled:ve,Required:$e,Help:Se,Message:Be,Error:Me,Stacked:Ge,Grid:Fe,Inline:Ze,CheckboxList:oc}})],I);function ac(i,c,t,s,l,n){const o=r("BaseExample"),p=r("Checked"),f=r("Indeterminate"),g=r("Disabled"),W=r("Required"),R=r("Help"),N=r("Message"),A=r("Error"),G=r("Stacked"),U=r("Grid"),V=r("Inline"),J=r("CheckboxList");return _(),L("div",null,[c[0]||(c[0]=e("h2",null,"Examples",-1)),b(o),b(p),b(f),b(g),b(W),b(R),b(N),b(A),c[1]||(c[1]=e("h2",null,"Layout Variations",-1)),b(G),b(U),b(V),b(J)])}const bc=x(I,[["render",ac]]);var pc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,rc=(i,c,t,s)=>{for(var l=s>1?void 0:s?hc(c,t):c,n=i.length-1,o;n>=0;n--)(o=i[n])&&(l=(s?o(c,t,l):o(l))||l);return s&&l&&pc(c,t,l),l};let q=class extends d{constructor(){super(...arguments);w(this,"pageTabs",X)}};q=rc([m({components:{Accessibility:Q,Examples:bc,Properties:K}})],q);const dc={class:"chi-grid__container -pt--3"},mc={class:"chi-tabs-panel -active",id:"examples"},_c={class:"chi-tabs-panel",id:"properties"},xc={class:"chi-tabs-panel",id:"accessibility"};function uc(i,c,t,s,l,n){const o=Y,p=r("Examples"),f=r("Properties"),g=r("Accessibility");return _(),L("div",null,[b(o,{title:"Checkbox",description:"Checkboxes are used to select one or several options in a list.",tabs:i.pageTabs},null,8,["tabs"]),e("div",dc,[e("div",mc,[b(p)]),e("div",_c,[b(f)]),e("div",xc,[b(g)])])])}const zc=x(q,[["render",uc]]);export{zc as default};
