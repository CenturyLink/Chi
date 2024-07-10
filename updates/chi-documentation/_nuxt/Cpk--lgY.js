var D=Object.defineProperty;var E=(l,t,s)=>t in l?D(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s;var T=(l,t,s)=>E(l,typeof t!="symbol"?t+"":t,s);import{V as m,N as u}from"./uJTUijt2.js";import{_ as v}from"./D8GK0F__.js";import{_ as $}from"./DKu8Jd2y.js";import{o as _,f as x,w as p,b as c,a as n,d as r,r as d,c as z,F as q}from"./B5CYXVwa.js";import{_ as h}from"./DlAUqK2U.js";import{_ as j}from"./BLbnEGma.js";import H from"./D6KB3bfV.js";import A from"./Cwo8J13V.js";import{s as R}from"./2EwpEKcw.js";import{_ as M}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var N=Object.defineProperty,I=Object.getOwnPropertyDescriptor,V=(l,t,s,i)=>{for(var e=i>1?void 0:i?I(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&N(t,s,e),e};let L=class extends m{};L=V([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"<chi-label>Label</chi-label>",htmlblueprint:'<label class="chi-label">Label</label>'}})})],L);const W=n("chi-label",{for:"input-1"},"Label",-1),Y=n("input",{class:"-sr--only",id:"input-1-control"},null,-1);function U(l,t,s,i,e,a){const o=v,b=$;return _(),x(b,{title:"Base",id:"base",tabs:l.exampleTabs},{example:p(()=>[W,Y]),"code-webcomponent":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const F=h(L,[["render",U]]);var J=Object.defineProperty,G=Object.getOwnPropertyDescriptor,K=(l,t,s,i)=>{for(var e=i>1?void 0:i?G(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&J(t,s,e),e};let g=class extends m{};g=K([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Required -->
<chi-label required>Label</chi-label>

<!-- Optional -->
<chi-label optional>Label</chi-label>`,htmlblueprint:`<!-- Required -->
<label class="chi-label">
  Label
  <abbr class="chi-label__required" aria-label="Required field">*</abbr>
</label>

<!-- Optional -->
<label class="chi-label">
  Label
  <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
</label>`}})})],g);const Q=n("p",{class:"-text"},[r("Use attribute "),n("code",null,"required"),r(" or "),n("code",null,"optional"),r(" if you need to indicate required / optional fields.")],-1),X=n("chi-label",{for:"input-2",required:""},"Label",-1),Z=n("input",{class:"-sr--only",id:"input-2-control"},null,-1),k=n("chi-label",{for:"input-3",optional:""},"Label",-1),ee=n("input",{class:"-sr--only",id:"input-3-control"},null,-1);function le(l,t,s,i,e,a){const o=v,b=$;return _(),x(b,{title:"Required / Optional",id:"required",tabs:l.exampleTabs},{"example-description":p(()=>[Q]),example:p(()=>[X,Z,k,ee]),"code-webcomponent":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const te=h(g,[["render",le]]);var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,ie=(l,t,s,i)=>{for(var e=i>1?void 0:i?ne(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&oe(t,s,e),e};let O=class extends m{};O=ie([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label size="xs">Label</chi-label>

<!-- sm -->
<chi-label size="sm">Label</chi-label>

<!-- md -->
<chi-label size="md">Label</chi-label>

<!-- lg -->
<chi-label size="lg">Label</chi-label>

<!-- xl -->
<chi-label size="xl">Label</chi-label>`,htmlblueprint:`<!-- xs -->
<label class="chi-label -xs">Label</label>

<!-- sm -->
<label class="chi-label -sm">Label</label>

<!-- md -->
<label class="chi-label -md">Label</label>

<!-- lg -->
<label class="chi-label -lg">Label</label>

<!-- xl -->
<label class="chi-label -xl">Label</label>`}})})],O);const se=n("p",{class:"-text"},[r("Label supports the following sizes: "),n("code",null,"xs"),r(", "),n("code",null,"sm"),r(", "),n("code",null,"md"),r(", "),n("code",null,"lg"),r(", "),n("code",null,"xl"),r(". The default size is "),n("code",null,"md"),r(".")],-1),ae=n("chi-label",{for:"input-0",size:"xs"},"Label",-1),ce=n("input",{class:"-sr--only",id:"input-0"},null,-1),pe=n("chi-label",{for:"input-1",size:"sm"},"Label",-1),re=n("input",{class:"-sr--only",id:"input-1"},null,-1),be=n("chi-label",{for:"input-2",size:"md"},"Label",-1),de=n("input",{class:"-sr--only",id:"input-2"},null,-1),me=n("chi-label",{for:"input-3",size:"lg"},"Label",-1),ue=n("input",{class:"-sr--only",id:"input-3"},null,-1),_e=n("chi-label",{for:"input-4",size:"xl"},"Label",-1),he=n("input",{class:"-sr--only",id:"input-4"},null,-1);function fe(l,t,s,i,e,a){const o=v,b=$;return _(),x(b,{title:"Sizes",id:"sizes",tabs:l.exampleTabs},{"example-description":p(()=>[se]),example:p(()=>[ae,ce,pe,re,be,de,me,ue,_e,he]),"code-webcomponent":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ve=h(O,[["render",fe]]);var $e=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,we=(l,t,s,i)=>{for(var e=i>1?void 0:i?xe(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&$e(t,s,e),e};let P=class extends m{};P=we([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="number-input">Label</chi-label>
<chi-number-input id="number-input"></chi-number-input>

<chi-label for="chi-date-picker">Label</chi-label>
<chi-date-picker id="chi-date-picker"></chi-date-picker>`,htmlblueprint:`<div class="chi-form__item">
  <label for="number-input" class="chi-label">Label</label>
  <div class="chi-number-input">
    <input id="number-input" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<div class="chi-form__item">
  <label class="chi-label" for="datepicker-1">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-1" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date -icon--muted" aria-hidden="true"></i>
  </div>
</div>`}})})],P);const Le=n("p",{class:"-text"},"Label is important for accessibility of form elements.",-1),ge=n("div",{style:{"max-width":"17rem"}},[n("chi-label",{for:"number-input"},"Label"),n("chi-number-input",{id:"number-input"}),n("chi-label",{class:"-mt--1",for:"chi-date-picker"},"Label"),n("chi-date-picker",{id:"chi-date-picker"})],-1),Oe=n("div",{class:"chi-tab__description"},[r("Associate "),n("code",null,"chi-label"),r(" with supported form-control web components")],-1);function Pe(l,t,s,i,e,a){const o=v,b=$;return _(),x(b,{title:"Associate label with form elements",id:"associate",tabs:l.exampleTabs},{"example-description":p(()=>[Le]),example:p(()=>[ge]),"code-webcomponent":p(()=>[Oe,c(o,{lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ce=h(P,[["render",Pe]]);var ye=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Te=(l,t,s,i)=>{for(var e=i>1?void 0:i?Se(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&ye(t,s,e),e};let C=class extends m{};C=Te([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-label info-icon info-icon-message="Changed helpful information">Label</chi-label>',htmlblueprint:`<div class="chi-label__wrapper">
  <label class="chi-label">Label</label>
  <div class="chi-label__help">
    <div class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
      <div class="chi-button__content">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </div>
    </div>
    <section class="chi-popover chi-popover--bottom" id="example__help-popover" aria-modal="true" role="dialog">
      <div class="chi-popover__content">
        <p class="chi-popover__text">Helpful information goes here.</p>
      </div>
    </section>
  </div>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`}})})],C);const ze=n("p",{class:"-text"},[r("Use attribute "),n("code",null,"infoIcon"),r(" and "),n("code",null,"infoIconMessage"),r(" to include a help icon that displays helpful information in a popover.")],-1),Be=n("chi-label",{for:"input-2","info-icon":"","info-icon-message":"Changed helpful information"},"Label",-1),De=n("input",{class:"-sr--only",id:"input-4-control"},null,-1);function Ee(l,t,s,i,e,a){const o=v,b=j,f=$;return _(),x(f,{title:"Help",id:"help",tabs:l.exampleTabs},{"example-description":p(()=>[ze]),example:p(()=>[Be,De]),"code-webcomponent":p(()=>[c(o,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[c(b),c(o,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=h(C,[["render",Ee]]);var je=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ae=(l,t,s,i)=>{for(var e=i>1?void 0:i?He(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&je(t,s,e),e};let y=class extends m{};y=Ae([u({components:{BaseExample:F,Required:te,Sizes:ve,Associate:Ce,Help:qe}})],y);const Re=n("h2",null,"Examples",-1);function Me(l,t,s,i,e,a){const o=d("BaseExample"),b=d("Required"),f=d("Sizes"),w=d("Associate"),B=d("Help");return _(),z(q,null,[Re,c(o),c(b),c(f),c(w),c(B)],64)}const Ne=h(y,[["render",Me]]);var Ie=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,We=(l,t,s,i)=>{for(var e=i>1?void 0:i?Ve(t,s):t,a=l.length-1,o;a>=0;a--)(o=l[a])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&Ie(t,s,e),e};let S=class extends m{constructor(){super(...arguments);T(this,"pageTabs",R)}};S=We([u({components:{Accessibility:A,Examples:Ne,Properties:H}})],S);const Ye={class:"chi-grid__container -pt--3"},Ue={class:"chi-tabs-panel -active",id:"examples"},Fe={class:"chi-tabs-panel",id:"properties"},Je={class:"chi-tabs-panel",id:"accessibility"};function Ge(l,t,s,i,e,a){const o=M,b=d("Examples"),f=d("Properties"),w=d("Accessibility");return _(),z("div",null,[c(o,{title:"Label",description:"Use Label together with form control elements like input, select, checkbox, etc.",tabs:l.pageTabs},null,8,["tabs"]),n("div",Ye,[n("div",Ue,[c(b)]),n("div",Fe,[c(f)]),n("div",Je,[c(w)])])])}const vl=h(S,[["render",Ge]]);export{vl as default};
