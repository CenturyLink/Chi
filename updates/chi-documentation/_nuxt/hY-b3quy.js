var K=Object.defineProperty;var Q=(l,o,i)=>o in l?K(l,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[o]=i;var u=(l,o,i)=>Q(l,typeof o!="symbol"?o+"":o,i);import{V as h,N as f}from"./uJTUijt2.js";import{o as m,f as O,w as c,b as p,a as e,d as r,c as $,F as L,i as S,n as F,t as M,g as X,r as b}from"./B5CYXVwa.js";import{_ as g}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{_ as v}from"./DlAUqK2U.js";import{_ as R}from"./BLbnEGma.js";import Y from"./Ch7wfLyV.js";import Z from"./ab1pznNA.js";import k from"./Bun6SA6J.js";import ee from"./DgtBmb6y.js";import te from"./ClO6ygow.js";import{s as le}from"./2EwpEKcw.js";import{_ as oe}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./By_bqUVL.js";import"./C9_DePFx.js";var ne=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ie=(l,o,i,s)=>{for(var t=s>1?void 0:s?se(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&ne(o,i,t),t};let P=class extends h{};P=ie([f({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-ba1">Label</label>
  <select class="chi-select" id="example-ba1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`}})})],P);const ae=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-ba1"},"Label"),e("select",{class:"chi-select",id:"example-ba1"},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1);function pe(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Base",id:"base",tabs:l.exampleTabs},{example:c(()=>[ae]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ce=v(P,[["render",pe]]);var re=Object.defineProperty,de=Object.getOwnPropertyDescriptor,me=(l,o,i,s)=>{for(var t=s>1?void 0:s?de(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&re(o,i,t),t};let C=class extends h{};C=me([f({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-di1">Label</label>
  <select class="chi-select" id="example-di1" disabled>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`}})})],C);const be=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-di1"},"Label"),e("select",{class:"chi-select",id:"example-di1",disabled:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1);function ue(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Disabled",id:"disabled",tabs:l.exampleTabs},{example:c(()=>[be]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _e=v(C,[["render",ue]]);var he=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,ve=(l,o,i,s)=>{for(var t=s>1?void 0:s?fe(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&he(o,i,t),t};let y=class extends h{};y=ve([f({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-re1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select" id="example-re1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`}})})],y);const xe=e("p",{class:"-text"},[r("Use the "),e("code",null,"required"),r(" boolean attribute to indicate which select must be completed before submitting a form.")],-1),$e=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-re1"},[r("Label"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("select",{class:"chi-select",id:"example-re1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1);function Oe(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Required",id:"required",tabs:l.exampleTabs},{"example-description":c(()=>[xe]),example:c(()=>[$e]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ge=v(y,[["render",Oe]]);var we=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Se=(l,o,i,s)=>{for(var t=s>1?void 0:s?Le(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&we(o,i,t),t};let T=class extends h{};T=Se([f({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-op1">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <select class="chi-select" id="example-op1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`}})})],T);const Pe=e("p",{class:"-text"},[r("Use "),e("code",null,"optional"),r(" to help emphasize that a select is not required and can be skipped.")],-1),Ce=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-op1"},[r("Label"),e("abbr",{class:"chi-label__optional","aria-label":"Optional field"},"(optional)")]),e("select",{class:"chi-select",id:"example-op1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1);function ye(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Optional",id:"optional",tabs:l.exampleTabs},{"example-description":c(()=>[Pe]),example:c(()=>[Ce]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Te=v(T,[["render",ye]]);var De=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,qe=(l,o,i,s)=>{for(var t=s>1?void 0:s?Ee(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&De(o,i,t),t};let D=class extends h{constructor(){super(...arguments);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example-he1">Label</label>
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
  <select class="chi-select" id="example-he1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`});u(this,"popover")}mounted(){this.popover=chi.popover(this.$refs.helpButton)}beforeDestroy(){this.popover.dispose()}};D=qe([f({})],D);const ze=e("p",{class:"-text"},[r("Use "),e("code",null,"chi-label__help"),r(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1),Be={class:"chi-form__item",style:{"max-width":"20rem"}},je={class:"chi-label__wrapper"},He=e("label",{class:"chi-label",for:"example-he1"},"Label",-1),Me={class:"chi-label__help"},Fe={class:"chi-button -icon -xs -flat",ref:"helpButton","aria-label":"Help","data-target":"#example__help-popover"},Re=e("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"},null,-1),We=[Re],Ne=e("section",{class:"chi-popover chi-popover--top -animated",id:"example__help-popover","aria-modal":"true",role:"dialog","aria-hidden":"true","x-placement":"top"},[e("div",{class:"chi-popover__content"},[e("p",{class:"chi-popover__text"},"Helpful information goes here.")])],-1),Ae=e("select",{class:"chi-select",id:"example-he1"},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")],-1);function Ve(l,o,i,s,t,a){const n=g,d=R,_=w;return m(),O(_,{title:"Help",id:"help",tabs:l.exampleTabs},{"example-description":c(()=>[ze]),example:c(()=>[e("div",Be,[e("div",je,[He,e("div",Me,[e("button",Fe,We,512),Ne])]),Ae])]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(d),p(n,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=v(D,[["render",Ve]]);var Je=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Ge=(l,o,i,s)=>{for(var t=s>1?void 0:s?Ie(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&Je(o,i,t),t};let E=class extends h{};E=Ge([f({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-me1">Label</label>
  <select class="chi-select" id="example-me1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status">Optional helper message</div>
</div>`}})})],E);const Ke=e("p",{class:"-text"},"Add a message below a select to store descriptions, validation feedback, and other helpful information.",-1),Qe=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-me1"},"Label"),e("select",{class:"chi-select",id:"example-me1"},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")]),e("div",{class:"chi-label -status"},"Optional helper message")],-1);function Xe(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Message",id:"message",tabs:l.exampleTabs},{"example-description":c(()=>[Ke]),example:c(()=>[Qe]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ye=v(E,[["render",Xe]]);var Ze=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,et=(l,o,i,s)=>{for(var t=s>1?void 0:s?ke(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&Ze(o,i,t),t};let q=class extends h{};q=et([f({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-er1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select -danger" id="example-er1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status -danger">Please select an option</div>
</div>`}})})],q);const tt=e("p",{class:"-text"},[r("Use the "),e("code",null,"-danger"),r(" state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),lt=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-er1"},[r("Label"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("select",{class:"chi-select -danger",id:"example-er1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")]),e("div",{class:"chi-label -status -danger"},"Please select an option")],-1);function ot(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Error",id:"error-lumen-centurylink",tabs:l.exampleTabs},{"example-description":c(()=>[tt]),example:c(()=>[lt]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nt=v(q,[["render",ot]]);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,at=(l,o,i,s)=>{for(var t=s>1?void 0:s?it(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&st(o,i,t),t};let z=class extends h{constructor(){super(...arguments);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs - Select -</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm - Select -</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md - Select -</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg - Select -</option>
  </select>
</div>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xl">Label</label>
  <select class="chi-select -xl" id="example-size-xl">
    <option>-xl - Select -</option>
  </select>
</div>`});u(this,"sizes",["xs","sm","md","lg","xl"])}};z=at([f({})],z);const pt=e("p",{class:"-text"},[r("Selects support the following sizes: "),e("code",null,"-xs"),r(", "),e("code",null,"-sm"),r(", "),e("code",null,"-md"),r(", "),e("code",null,"-lg"),r(", "),e("code",null,"-xl"),r(". The default size is "),e("code",null,"-md"),r(".")],-1),ct={class:"-p--2"},rt={class:"chi-form__item",style:{"max-width":"20rem"}},dt=["for"],mt=["id"],bt={value:"",selected:"",disabled:"",hidden:""};function ut(l,o,i,s,t,a){const n=g,d=w;return m(),O(d,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:l.exampleTabs},{"example-description":c(()=>[pt]),example:c(()=>[(m(!0),$(L,null,S(l.sizes,_=>(m(),$("div",ct,[e("div",rt,[e("label",{class:"chi-label",for:`example-size-${_}`},"Label",8,dt),e("select",{class:F(`chi-select -${_}`),id:`example-size-${_}`},[e("option",bt,"-"+M(_)+" - Select -",1),(m(),$(L,null,S([1,2,3],x=>e("option",null,"Option "+M(x),1)),64))],10,mt)])]))),256))]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _t=v(z,[["render",ut]]);var ht=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,vt=(l,o,i,s)=>{for(var t=s>1?void 0:s?ft(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&ht(o,i,t),t};let B=class extends h{constructor(){super(...arguments);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div id="floating-label-lg" class="chi-input__wrapper -floating-label">
  <select class="chi-select -lg" id="floating-label-select-lg">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-select-lg">Placeholder text</label>
</div>

<div id="floating-label-xl" class="chi-input__wrapper -floating-label">
  <select class="chi-select -xl" id="floating-label-select-xl">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-select-xl">Placeholder text</label>
</div>

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`});u(this,"floatingLabels",[]);u(this,"sizes",["lg","xl"])}mounted(){this.sizes.forEach(i=>{this.floatingLabels.push(chi.floatingLabel(this.$refs[`label-${i}`]))})}beforeDestroy(){this.floatingLabels.forEach(i=>{i[0].dispose()})}};B=vt([f({})],B);const xt=e("p",{class:"-text"},[r("Floating labels are a solution to keep the placeholder visible when no label is attached to the select. Chi only supports floating labels on "),e("code",null,"-lg"),r(" and "),e("code",null,"-xl"),r(" selects.")],-1),$t={class:"chi-col -w--12 -p--2"},Ot=["id"],gt=e("option",null,null,-1),wt=e("option",null,"Option 1",-1),Lt=e("option",null,"Option 2",-1),St=e("option",null,"Option 3",-1),Pt=[gt,wt,Lt,St],Ct=["for"];function yt(l,o,i,s,t,a){const n=g,d=R,_=w;return m(),O(_,{title:"Floating labels",id:"floating-labels-lumen-centurylink",tabs:l.exampleTabs},{"example-description":c(()=>[xt]),example:c(()=>[(m(!0),$(L,null,S(l.sizes,x=>(m(),$("div",$t,[e("div",{class:"chi-input__wrapper -floating-label",style:{"max-width":"20rem"},ref_for:!0,ref:`label-${x}`},[e("select",{class:F(`chi-select -${x}`),id:`floating-label-select-${x}`},Pt,10,Ot),e("label",{for:`floating-label-select-${x}`},"Placeholder text",8,Ct)],512)]))),256))]),"code-webcomponent":c(()=>[p(n,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(d),p(n,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Tt=v(B,[["render",yt]]);var Dt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,qt=(l,o,i,s)=>{for(var t=s>1?void 0:s?Et(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&Dt(o,i,t),t};let j=class extends h{constructor(){super(...arguments);u(this,"selectedTheme",X())}};j=qt([f({components:{BaseExample:ce,Disabled:_e,Required:ge,Optional:Te,Help:Ue,Message:Ye,ErrorLumenCenturyLink:nt,ErrorPortal:Y,SizesLumenCenturyLink:_t,SizesPortal:Z,FloatingLabelsLumenCenturyLink:Tt,FloatingLabelsPortal:k}})],j);const zt=e("h2",null,"Examples",-1),Bt=e("p",{class:"-text"},[r("To render a select, apply the class "),e("code",null,"chi-select"),r(" to a "),e("code",null,"select"),r(".")],-1),jt={key:0},Ht={key:1};function Mt(l,o,i,s,t,a){const n=b("BaseExample"),d=b("Disabled"),_=b("Required"),x=b("Optional"),W=b("Help"),N=b("Message"),A=b("ErrorLumenCenturyLink"),V=b("SizesLumenCenturyLink"),U=b("FloatingLabelsLumenCenturyLink"),J=b("ErrorPortal"),I=b("SizesPortal"),G=b("FloatingLabelsPortal");return m(),$("div",null,[zt,Bt,p(n),p(d),p(_),p(x),p(W),p(N),["lumen","centurylink","lumenrebrand24"].includes(l.selectedTheme)?(m(),$("div",jt,[p(A),p(V),p(U)])):(m(),$("div",Ht,[p(J),p(I),p(G)]))])}const Ft=v(j,[["render",Mt]]);var Rt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Nt=(l,o,i,s)=>{for(var t=s>1?void 0:s?Wt(o,i):o,a=l.length-1,n;a>=0;a--)(n=l[a])&&(t=(s?n(o,i,t):n(t))||t);return s&&t&&Rt(o,i,t),t};let H=class extends h{constructor(){super(...arguments);u(this,"pageTabs",le)}};H=Nt([f({components:{Accessibility:te,Examples:Ft,Properties:ee}})],H);const At={class:"chi-grid__container -pt--3"},Vt={class:"chi-tabs-panel -active",id:"examples"},Ut={class:"chi-tabs-panel",id:"properties"},Jt={class:"chi-tabs-panel",id:"accessibility"};function It(l,o,i,s,t,a){const n=oe,d=b("Examples"),_=b("Properties"),x=b("Accessibility");return m(),$("div",null,[p(n,{title:"Select",description:"Selects are used to select a single item in a list of many options.",tabs:l.pageTabs},null,8,["tabs"]),e("div",At,[e("div",Vt,[p(d)]),e("div",Ut,[p(_)]),e("div",Jt,[p(x)])])])}const gl=v(H,[["render",It]]);export{gl as default};
