var D=Object.defineProperty;var E=(t,e,a)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var T=(t,e,a)=>E(t,typeof e!="symbol"?e+"":e,a);import{V as d,N as u}from"./NAah3XrW.js";import{_ as v}from"./onyWiYp2.js";import{_ as x}from"./CAQzZ0uH.js";import{o as h,h as $,w as c,a as o,b as p,d as r,m,c as z,F as q}from"./CEIPSiTs.js";import{_}from"./DlAUqK2U.js";import{_ as j}from"./CS2TcPBX.js";import H from"./D2OgsbLj.js";import A from"./oH-VQyuW.js";import{s as R}from"./DtNz156Q.js";import{_ as M}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B2BTeTyp.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var N=Object.defineProperty,I=Object.getOwnPropertyDescriptor,V=(t,e,a,i)=>{for(var l=i>1?void 0:i?I(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&N(e,a,l),l};let L=class extends d{};L=V([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"<chi-label>Label</chi-label>",htmlblueprint:'<label class="chi-label">Label</label>'}})})],L);function W(t,e,a,i,l,s){const n=v,b=x;return h(),$(b,{title:"Base",id:"base",tabs:t.exampleTabs},{example:c(()=>e[0]||(e[0]=[o("chi-label",{for:"input-1"},"Label",-1),o("input",{class:"-sr--only",id:"input-1-control"},null,-1)])),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=_(L,[["render",W]]);var U=Object.defineProperty,F=Object.getOwnPropertyDescriptor,J=(t,e,a,i)=>{for(var l=i>1?void 0:i?F(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&U(e,a,l),l};let g=class extends d{};g=J([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Required -->
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
</label>`}})})],g);function G(t,e,a,i,l,s){const n=v,b=x;return h(),$(b,{title:"Required / Optional",id:"required",tabs:t.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[o("p",{class:"-text"},[r("Use attribute "),o("code",null,"required"),r(" or "),o("code",null,"optional"),r(" if you need to indicate required / optional fields.")],-1)])),example:c(()=>e[1]||(e[1]=[o("chi-label",{for:"input-2",required:""},"Label",-1),o("input",{class:"-sr--only",id:"input-2-control"},null,-1),o("chi-label",{for:"input-3",optional:""},"Label",-1),o("input",{class:"-sr--only",id:"input-3-control"},null,-1)])),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=_(g,[["render",G]]);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Z=(t,e,a,i)=>{for(var l=i>1?void 0:i?X(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&Q(e,a,l),l};let O=class extends d{};O=Z([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
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
<label class="chi-label -xl">Label</label>`}})})],O);function k(t,e,a,i,l,s){const n=v,b=x;return h(),$(b,{title:"Sizes",id:"sizes",tabs:t.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[o("p",{class:"-text"},[r("Label supports the following sizes: "),o("code",null,"xs"),r(", "),o("code",null,"sm"),r(", "),o("code",null,"md"),r(", "),o("code",null,"lg"),r(", "),o("code",null,"xl"),r(". The default size is "),o("code",null,"md"),r(".")],-1)])),example:c(()=>e[1]||(e[1]=[o("chi-label",{for:"input-0",size:"xs"},"Label",-1),o("input",{class:"-sr--only",id:"input-0"},null,-1),o("chi-label",{for:"input-1",size:"sm"},"Label",-1),o("input",{class:"-sr--only",id:"input-1"},null,-1),o("chi-label",{for:"input-2",size:"md"},"Label",-1),o("input",{class:"-sr--only",id:"input-2"},null,-1),o("chi-label",{for:"input-3",size:"lg"},"Label",-1),o("input",{class:"-sr--only",id:"input-3"},null,-1),o("chi-label",{for:"input-4",size:"xl"},"Label",-1),o("input",{class:"-sr--only",id:"input-4"},null,-1)])),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ee=_(O,[["render",k]]);var le=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ne=(t,e,a,i)=>{for(var l=i>1?void 0:i?te(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&le(e,a,l),l};let P=class extends d{};P=ne([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-label for="number-input">Label</chi-label>
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
</div>`}})})],P);function oe(t,e,a,i,l,s){const n=v,b=x;return h(),$(b,{title:"Associate label with form elements",id:"associate",tabs:t.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[o("p",{class:"-text"},"Label is important for accessibility of form elements.",-1)])),example:c(()=>e[1]||(e[1]=[o("div",{style:{"max-width":"17rem"}},[o("chi-label",{for:"number-input"},"Label"),o("chi-number-input",{id:"number-input"}),o("chi-label",{class:"-mt--1",for:"chi-date-picker"},"Label"),o("chi-date-picker",{id:"chi-date-picker"})],-1)])),"code-webcomponent":c(()=>[e[2]||(e[2]=o("div",{class:"chi-tab__description"},[r("Associate "),o("code",null,"chi-label"),r(" with supported form-control web components")],-1)),p(n,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ie=_(P,[["render",oe]]);var ae=Object.defineProperty,se=Object.getOwnPropertyDescriptor,pe=(t,e,a,i)=>{for(var l=i>1?void 0:i?se(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&ae(e,a,l),l};let C=class extends d{};C=pe([u({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-label info-icon info-icon-message="Changed helpful information">Label</chi-label>',htmlblueprint:`<div class="chi-label__wrapper">
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

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`}})})],C);function ce(t,e,a,i,l,s){const n=v,b=j,f=x;return h(),$(f,{title:"Help",id:"help",tabs:t.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[o("p",{class:"-text"},[r("Use attribute "),o("code",null,"infoIcon"),r(" and "),o("code",null,"infoIconMessage"),r(" to include a help icon that displays helpful information in a popover.")],-1)])),example:c(()=>e[1]||(e[1]=[o("chi-label",{for:"input-2","info-icon":"","info-icon-message":"Changed helpful information"},"Label",-1),o("input",{class:"-sr--only",id:"input-4-control"},null,-1)])),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(b),p(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const re=_(C,[["render",ce]]);var be=Object.defineProperty,me=Object.getOwnPropertyDescriptor,de=(t,e,a,i)=>{for(var l=i>1?void 0:i?me(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&be(e,a,l),l};let y=class extends d{};y=de([u({components:{BaseExample:Y,Required:K,Sizes:ee,Associate:ie,Help:re}})],y);function ue(t,e,a,i,l,s){const n=m("BaseExample"),b=m("Required"),f=m("Sizes"),w=m("Associate"),B=m("Help");return h(),z(q,null,[e[0]||(e[0]=o("h2",null,"Examples",-1)),p(n),p(b),p(f),p(w),p(B)],64)}const he=_(y,[["render",ue]]);var _e=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,ve=(t,e,a,i)=>{for(var l=i>1?void 0:i?fe(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(l=(i?n(e,a,l):n(l))||l);return i&&l&&_e(e,a,l),l};let S=class extends d{constructor(){super(...arguments);T(this,"pageTabs",R)}};S=ve([u({components:{Accessibility:A,Examples:he,Properties:H}})],S);const xe={class:"chi-grid__container -pt--3"},$e={class:"chi-tabs-panel -active",id:"examples"},we={class:"chi-tabs-panel",id:"properties"},Le={class:"chi-tabs-panel",id:"accessibility"};function ge(t,e,a,i,l,s){const n=M,b=m("Examples"),f=m("Properties"),w=m("Accessibility");return h(),z("div",null,[p(n,{title:"Label",description:"Use Label together with form control elements like input, select, checkbox, etc.",tabs:t.pageTabs},null,8,["tabs"]),o("div",xe,[o("div",$e,[p(b)]),o("div",we,[p(f)]),o("div",Le,[p(w)])])])}const Je=_(S,[["render",ge]]);export{Je as default};
