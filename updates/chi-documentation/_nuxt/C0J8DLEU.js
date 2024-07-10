var z=Object.defineProperty;var F=(o,l,t)=>l in o?z(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t;var w=(o,l,t)=>F(o,typeof l!="symbol"?l+"":l,t);import{V as r,N as _}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as v}from"./DKu8Jd2y.js";import{o as m,f as k,w as n,b as h,a as e,d as p,r as d,c as L}from"./B5CYXVwa.js";import{_ as x}from"./DlAUqK2U.js";import{_ as M}from"./BLbnEGma.js";import K from"./Dz-Vj4Js.js";import Q from"./BuaNTDTY.js";import{s as X}from"./2EwpEKcw.js";import{_ as Y}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./By_bqUVL.js";import"./C9_DePFx.js";var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,ce=(o,l,t,s)=>{for(var c=s>1?void 0:s?ee(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&Z(l,t,c),c};let g=class extends r{};g=ce([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1">
    <label class="chi-checkbox__label" for="checkbox-ba1">Checkbox</label>
  </div>
</div>`}})})],g);const oe=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-ba1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-ba1"},"Checkbox")])],-1);function ie(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Base",id:"base",tabs:o.exampleTabs},{example:n(()=>[oe]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const le=x(g,[["render",ie]]);var se=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ae=(o,l,t,s)=>{for(var c=s>1?void 0:s?te(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&se(l,t,c),c};let O=class extends r{};O=ae([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ch1" checked>
    <label class="chi-checkbox__label" for="checkbox-ch1">Checkbox</label>
  </div>
</div>`}})})],O);const ne=e("p",{class:"-text"},[p("Use the "),e("code",null,"checked"),p(" boolean attribute to set the default value of a checkbox to true.")],-1),he=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-ch1",checked:""}),e("label",{class:"chi-checkbox__label",for:"checkbox-ch1"},"Checkbox")])],-1);function be(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Checked",id:"checked",tabs:o.exampleTabs},{"example-description":n(()=>[ne]),example:n(()=>[he]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pe=x(O,[["render",be]]);var de=Object.defineProperty,re=Object.getOwnPropertyDescriptor,_e=(o,l,t,s)=>{for(var c=s>1?void 0:s?re(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&de(l,t,c),c};let y=class extends r{constructor(){super(...arguments);w(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input -indeterminate" id="checkbox-ind1">
    <label class="chi-checkbox__label" for="checkbox-ind1">Checkbox</label>
  </div>
</div>

<!-- JavaScript -->
<script>
  var checkbox = document.getElementById('checkbox-ind1');

  checkbox.indeterminate = true;
<\/script>`})}mounted(){const t=document.getElementById("checkbox-ind1");t.indeterminate=!0}};y=_e([_({})],y);const me=e("p",{class:"-text"},[p("A checkbox cannot be set to "),e("code",null,"indeterminate"),p(" state by an HTML attribute - it must be set by JavaScript. Use the class "),e("code",null,"-indeterminate"),p(" to achieve the corresponding style of the checkbox.")],-1),xe=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input -indeterminate",type:"checkbox",id:"checkbox-ind1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-ind1"},"Checkbox")])],-1);function ue(o,l,t,s,c,a){const i=u,b=M,f=v;return m(),k(f,{title:"Indeterminate",id:"indeterminate",tabs:o.exampleTabs},{"example-description":n(()=>[me]),example:n(()=>[xe]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(b),h(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ve=x(y,[["render",ue]]);var ke=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,we=(o,l,t,s)=>{for(var c=s>1?void 0:s?fe(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&ke(l,t,c),c};let C=class extends r{};C=we([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-di1" disabled>
    <label class="chi-checkbox__label" for="checkbox-di1">Checkbox</label>
  </div>
</div>`}})})],C);const $e=e("p",{class:"-text"},[p("Use the "),e("code",null,"disabled"),p(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),p(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1),ge=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-di1",disabled:""}),e("label",{class:"chi-checkbox__label",for:"checkbox-di1"},"Checkbox")])],-1);function Oe(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Disabled",id:"disabled",tabs:o.exampleTabs},{"example-description":n(()=>[$e]),example:n(()=>[ge]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ye=x(C,[["render",Oe]]);var Ce=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Se=(o,l,t,s)=>{for(var c=s>1?void 0:s?Pe(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&Ce(l,t,c),c};let P=class extends r{};P=Se([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-re1" required>
    <label class="chi-checkbox__label" for="checkbox-re1">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
</div>`}})})],P);const Te=e("p",{class:"-text"},[p("Use the "),e("code",null,"required"),p(" boolean attribute to indicate which checkboxes must be completed before submitting a form. This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.")],-1),De=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-re1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-re1"},[p("I accept the Terms of Service"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")])])],-1);function Ee(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Required",id:"required",tabs:o.exampleTabs},{"example-description":n(()=>[Te]),example:n(()=>[De]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const je=x(P,[["render",Ee]]);var Be=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ie=(o,l,t,s)=>{for(var c=s>1?void 0:s?He(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&Be(l,t,c),c};let S=class extends r{constructor(){super(...arguments);w(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
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

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`})}mounted(){chi.popover(document.getElementById("example__help-button"))}};S=Ie([_({})],S);const qe=e("p",{class:"-text"},[p("Use "),e("code",null,"chi-label__help"),p(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1),Le=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-he1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-he1"},"Checkbox"),e("div",{class:"chi-label__help"},[e("button",{class:"chi-button -icon -xs -flat",id:"example__help-button","aria-label":"Help","data-target":"#example__help-popover"},[e("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"})]),e("section",{class:"chi-popover chi-popover--top",id:"example__help-popover","aria-modal":"true",role:"dialog"},[e("div",{class:"chi-popover__content"},[e("p",{class:"chi-popover__text"},"Helpful information goes here.")])])])])],-1);function Me(o,l,t,s,c,a){const i=u,b=M,f=v;return m(),k(f,{title:"Help",id:"help",tabs:o.exampleTabs},{"example-description":n(()=>[qe]),example:n(()=>[Le]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(b),h(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=x(S,[["render",Me]]);var Re=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ae=(o,l,t,s)=>{for(var c=s>1?void 0:s?Ne(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&Re(l,t,c),c};let T=class extends r{};T=Ae([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-me1">
    <label class="chi-checkbox__label" for="checkbox-me1">Checkbox</label>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`}})})],T);const Ge=e("p",{class:"-text"},"Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.",-1),Ue=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-me1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-me1"},"Checkbox")]),e("div",{class:"chi-label -status"},"Optional helper message")],-1);function Ve(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Message",id:"message",tabs:o.exampleTabs},{"example-description":n(()=>[Ge]),example:n(()=>[Ue]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Je=x(T,[["render",Ve]]);var ze=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Ke=(o,l,t,s)=>{for(var c=s>1?void 0:s?Fe(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&ze(l,t,c),c};let D=class extends r{};D=Ke([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-er1">
    <label class="chi-checkbox__label -danger" for="checkbox-er1">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
  <div class="chi-label -status -danger">Please accept the terms of service</div>
</div>`}})})],D);const Qe=e("p",{class:"-text"},[p("Use the "),e("code",null,"-danger"),p(" state to provide feedback to users when an input fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),Xe=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-er1"}),e("label",{class:"chi-checkbox__label -danger",for:"checkbox-er1"},[p("I accept the Terms of Service"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")])]),e("div",{class:"chi-label -status -danger"},"Please accept the terms of service")],-1);function Ye(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Error",id:"error",tabs:o.exampleTabs},{"example-description":n(()=>[Qe]),example:n(()=>[Xe]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ze=x(D,[["render",Ye]]);var ec=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,oc=(o,l,t,s)=>{for(var c=s>1?void 0:s?cc(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&ec(l,t,c),c};let E=class extends r{};E=oc([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
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
</fieldset>`}})})],E);const ic=e("p",{class:"-text"},[p("Group checkboxes in "),e("code",null,"chi-form__item"),p(" for easy stacking.")],-1),lc=e("legend",{class:"chi-label"},"Select options",-1),sc=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-st1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-st1"},"Option 1")])],-1),tc=e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-st2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-st2"},"Option 2")])],-1);function ac(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Stacked",id:"stacked",tabs:o.exampleTabs},{"example-description":n(()=>[ic]),example:n(()=>[lc,sc,tc]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nc=x(E,[["render",ac]]);var hc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,pc=(o,l,t,s)=>{for(var c=s>1?void 0:s?bc(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&hc(l,t,c),c};let j=class extends r{};j=pc([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
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
</fieldset>`}})})],j);const dc=e("p",{class:"-text"},[p("Use "),e("code",null,"chi-grid"),p(" to render a group of checkboxes in a responsive grid. In the example below, the checkboxes display in 4 columns on medium screens and up, 2 columns on small screens, and 1 column on x-small screens.")],-1),rc=e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -mb--1"},[e("legend",{class:"chi-label"},"Select options")]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g1"},"Option 1")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g2"},"Option 2")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g3"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g3"},"Option 3")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g4"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g4"},"Option 4")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g5"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g5"},"Option 5")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g6"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g6"},"Option 6")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g7"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g7"},"Option 7")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g8"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g8"},"Option 8")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g9"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g9"},"Option 9")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g10"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g10"},"Option 10")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g11"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g11"},"Option 11")])])]),e("div",{class:"chi-col -w--12 -w-md--3 -w-sm--6 -mb--1"},[e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-g12"}),e("label",{class:"chi-checkbox__label",for:"checkbox-g12"},"Option 12")])])])],-1);function _c(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Grid",id:"grid",tabs:o.exampleTabs},{"example-description":n(()=>[dc]),example:n(()=>[rc]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const mc=x(j,[["render",_c]]);var xc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,vc=(o,l,t,s)=>{for(var c=s>1?void 0:s?uc(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&xc(l,t,c),c};let B=class extends r{};B=vc([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
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
</fieldset>`}})})],B);const kc=e("p",{class:"-text"},[p("Apply the class "),e("code",null,"-inline"),p(" to "),e("code",null,"chi-form__item"),p(" to display two or more checkboxes in one row.")],-1),fc=e("legend",{class:"chi-label"},"Select options",-1),wc=e("div",{class:"chi-form__item -inline"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-in1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-in1"},"Option 1")])],-1),$c=e("div",{class:"chi-form__item -inline"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-in2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-in2"},"Option 2")])],-1);function gc(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Inline",id:"inline",tabs:o.exampleTabs},{"example-description":n(()=>[kc]),example:n(()=>[fc,wc,$c]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Oc=x(B,[["render",gc]]);var yc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,Pc=(o,l,t,s)=>{for(var c=s>1?void 0:s?Cc(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&yc(l,t,c),c};let H=class extends r{};H=Pc([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
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
</fieldset>`}})})],H);const Sc=e("p",{class:"-text"},[p("Checkbox lists are used to wrap a series of checkboxes in a list. To render a series of checkboxes in a list, apply the class "),e("code",null,"-list"),p(" to "),e("code",null,"chi-form__item"),p(".")],-1),Tc=e("legend",{class:"chi-label"},"Select options",-1),Dc=e("ul",{class:"chi-form__item -list",style:{"max-width":"20rem"}},[e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li1"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li1"},"Option 1")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li2"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li2"},"Option 2")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li3"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li3"},"Option 3")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li4"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li4"},"Option 4")])]),e("li",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox-li5"}),e("label",{class:"chi-checkbox__label",for:"checkbox-li5"},"Option 5")])])],-1);function Ec(o,l,t,s,c,a){const i=u,b=v;return m(),k(b,{title:"Checkbox List",id:"checkbox_list",tabs:o.exampleTabs},{"example-description":n(()=>[Sc]),example:n(()=>[Tc,Dc]),"code-webcomponent":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[h(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const jc=x(H,[["render",Ec]]);var Bc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,Ic=(o,l,t,s)=>{for(var c=s>1?void 0:s?Hc(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&Bc(l,t,c),c};let I=class extends r{};I=Ic([_({components:{BaseExample:le,Checked:pe,Indeterminate:ve,Disabled:ye,Required:je,Help:We,Message:Je,Error:Ze,Stacked:nc,Grid:mc,Inline:Oc,CheckboxList:jc}})],I);const qc=e("h2",null,"Examples",-1),Lc=e("h2",null,"Layout Variations",-1);function Mc(o,l,t,s,c,a){const i=d("BaseExample"),b=d("Checked"),f=d("Indeterminate"),$=d("Disabled"),W=d("Required"),R=d("Help"),N=d("Message"),A=d("Error"),G=d("Stacked"),U=d("Grid"),V=d("Inline"),J=d("CheckboxList");return m(),L("div",null,[qc,h(i),h(b),h(f),h($),h(W),h(R),h(N),h(A),Lc,h(G),h(U),h(V),h(J)])}const Wc=x(I,[["render",Mc]]);var Rc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,Ac=(o,l,t,s)=>{for(var c=s>1?void 0:s?Nc(l,t):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(c=(s?i(l,t,c):i(c))||c);return s&&c&&Rc(l,t,c),c};let q=class extends r{constructor(){super(...arguments);w(this,"pageTabs",X)}};q=Ac([_({components:{Accessibility:Q,Examples:Wc,Properties:K}})],q);const Gc={class:"chi-grid__container -pt--3"},Uc={class:"chi-tabs-panel -active",id:"examples"},Vc={class:"chi-tabs-panel",id:"properties"},Jc={class:"chi-tabs-panel",id:"accessibility"};function zc(o,l,t,s,c,a){const i=Y,b=d("Examples"),f=d("Properties"),$=d("Accessibility");return m(),L("div",null,[h(i,{title:"Checkbox",description:"Checkboxes are used to select one or several options in a list.",tabs:o.pageTabs},null,8,["tabs"]),e("div",Gc,[e("div",Uc,[h(b)]),e("div",Vc,[h(f)]),e("div",Jc,[h($)])])])}const Oo=x(q,[["render",zc]]);export{Oo as default};
