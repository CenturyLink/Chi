var N=Object.defineProperty;var V=(t,i,o)=>i in t?N(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o;var z=(t,i,o)=>V(t,typeof i!="symbol"?i+"":i,o);import{V as b,N as v}from"./uJTUijt2.js";import{o as h,f as u,w as a,b as d,a as e,d as l,c as _,F as $,i as y,t as S,g as q,r as x}from"./B5CYXVwa.js";import{_ as f}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{_ as g}from"./DlAUqK2U.js";import G from"./RQfaRY4I.js";import J from"./BfBPlx1V.js";import{s as K}from"./2EwpEKcw.js";import{_ as Q}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(t,i,o,c)=>{for(var n=c>1?void 0:c?X(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&R(i,o,n),n};let L=class extends b{};L=Y([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-spinner color="light" backdrop></chi-spinner>',htmlblueprint:`<div class="chi-backdrop -center">
  <div class="chi-backdrop__wrapper">
    <svg class="chi-spinner -icon--light" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`}})})],L);const Z=e("div",{style:{position:"relative",height:"25rem"}},[e("chi-spinner",{color:"light",backdrop:""})],-1),ee=e("div",{class:"chi-tab__description"},[l("To render a spinner, use the tag "),e("code",null,"<chi-spinner>"),l("."),e("br"),l("An optional backdrop can be added to focus the user's attention on a spinner. To set a backdrop, use the "),e("code",null,"backdrop"),l(" attribute.")],-1),ne=e("div",{class:"chi-tab__description"},[l("To render a spinner, use the class "),e("code",null,"chi-spinner"),l("."),e("br"),l("Wrap spinners in "),e("code",null,"chi-backdrop"),l(" to overlay content similar to a modal, and add "),e("code",null,"-center"),l(" class to position it in the middle of the page.")],-1);function te(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Base",titleSize:"h4",padding:"-p--0",id:"base",tabs:t.exampleTabs},{example:a(()=>[Z]),"code-webcomponent":a(()=>[ee,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[ne,d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ie=g(L,[["render",te]]);var se=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ce=(t,i,o,c)=>{for(var n=c>1?void 0:c?le(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&se(i,o,n),n};let C=class extends b{};C=ce([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-spinner color="primary" backdrop="inverse"></chi-spinner>',htmlblueprint:`<div class="chi-backdrop -center -inverse">
  <div class="chi-backdrop__wrapper">
    <svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`}})})],C);const oe=e("div",{style:{position:"relative",height:"25rem"}},[e("chi-spinner",{color:"primary",backdrop:"inverse"})],-1),re=e("div",{class:"chi-tab__description"},[l("Set the "),e("code",null,"backdrop"),l(" value to "),e("code",null,"inverse"),l(" to render spinners on light backgrounds.")],-1),pe=e("div",{class:"chi-tab__description"},[l("Apply the class "),e("code",null,"-inverse"),l(" to render spinners on light backgrounds.")],-1);function ae(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Inverse",titleSize:"h4",padding:"-p--0",id:"inverse",tabs:t.exampleTabs},{example:a(()=>[oe]),"code-webcomponent":a(()=>[re,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[pe,d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const de=g(C,[["render",ae]]);var he=Object.defineProperty,me=Object.getOwnPropertyDescriptor,ue=(t,i,o,c)=>{for(var n=c>1?void 0:c?me(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&he(i,o,n),n};let P=class extends b{};P=ue([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs : 12x12px -->
<chi-spinner size="xs"></chi-spinner>
<!-- sm : 16x16px -->
<chi-spinner size="sm"></chi-spinner>
<!-- sm--2 : 20x20px -->
<chi-spinner size="sm--2"></chi-spinner>
<!-- sm--3 : 24x24px -->
<chi-spinner size="sm--3"></chi-spinner>
<!-- md : 32x32px -->
<chi-spinner size="md"></chi-spinner>
<!-- lg : 64x64px -->
<chi-spinner size="lg"></chi-spinner>
<!-- xl : 96x96px -->
<chi-spinner size="xl"></chi-spinner>
<!-- xxl : 128x128px -->
<chi-spinner size="xxl"></chi-spinner>`,htmlblueprint:`<!-- -xs : 12x12px -->
<svg class="chi-spinner -xs" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm : 16x16px -->
<svg class="chi-spinner -sm" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm--2 : 20x20px -->
<svg class="chi-spinner -sm--2" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm--3 : 24x24px -->
<svg class="chi-spinner -sm--3" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -md : 32x32px -->
<svg class="chi-spinner -md" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -lg : 64x64px -->
<svg class="chi-spinner -lg" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -xl : 96x96px -->
<svg class="chi-spinner -xl" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
</div>
<!-- -xxl : 128x128px -->
<svg class="chi-spinner -xxl" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`}})})],P);const _e={class:"chi-grid -align-items--end"},xe={class:"-p--2"},be=["size"],ve={class:"-text -text--center"},ge=e("div",{class:"chi-tab__description"},[l("By default, spinners are rendered at 16x16px ("),e("code",null,"sm"),l("). Set "),e("code",null,"size"),l(" attribute to render spinners larger or smaller: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"sm--2"),l(", "),e("code",null,"sm--3"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(", "),e("code",null,"xl"),l(", "),e("code",null,"xxl"),l(".")],-1),fe=e("div",{class:"chi-tab__description"},[l("By default, spinners render at 16x16px ("),e("code",null,"-sm"),l("). Apply size classes to render spinners larger or smaller: "),e("code",null,"-xs"),l(", "),e("code",null,"-sm"),l(", "),e("code",null,"-sm--2"),l(", "),e("code",null,"-sm--3"),l(", "),e("code",null,"-md"),l(", "),e("code",null,"-lg"),l(", "),e("code",null,"-xl"),l(", "),e("code",null,"-xxl"),l(".")],-1);function we(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Sizes",titleSize:"h4",id:"sizes-lumen-centurylink",tabs:t.exampleTabs},{example:a(()=>[e("div",_e,[(h(),_($,null,y(["xs","sm","sm--2","sm--3","md","lg","xl","xxl"],p=>e("div",xe,[e("chi-spinner",{class:"-m--1",size:p},null,8,be),e("p",ve,S(p),1)])),64))])]),"code-webcomponent":a(()=>[ge,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[fe,d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=g(P,[["render",we]]);var ye=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Be=(t,i,o,c)=>{for(var n=c>1?void 0:c?Se(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&ye(i,o,n),n};let T=class extends b{};T=Be([v({data:()=>({textInputs:[{text:"01",size:""},{text:"02",size:"sm"},{text:"03",size:"lg"}],exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Medium (Base) -->
<div class="chi-form__item">
  <chi-label for="spinner-input-01">Label</chi-label>
  <chi-text-input id="spinner-input-01" spinner></chi-text-input>
</div>
<!-- Small -->
<div class="chi-form__item">
  <chi-label for="spinner-input-02">Label</chi-label>
  <chi-text-input id="spinner-input-02" spinner size="sm"></chi-text-input>
</div>
<!-- Large -->
<div class="chi-form__item">
  <chi-label for="spinner-input-03">Label</chi-label>
  <chi-text-input id="spinner-input-03" spinner size="lg"></chi-text-input>
</div>`,htmlblueprint:`<!-- Medium (Base) -->
<div class="chi-form__item">
  <label class="chi-label" for="spinner-input-01">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input" placeholder="Placeholder" value="Sample text" id="spinner-input-01">
    <svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>
<!-- Small -->
<div class="chi-form__item">
  <label class="chi-label" for="spinner-input-02">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input -sm" placeholder="Placeholder" value="Sample text" id="spinner-input-02">
    <svg class="chi-spinner -icon--muted -xs" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>
<!-- Large -->
<div class="chi-form__item">
  <label class="chi-label" for="spinner-input-03">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input -lg" placeholder="Placeholder" value="Sample text" id="spinner-input-03">
    <svg class="chi-spinner -icon--muted -sm--2" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
    </div>
  </div>
</div>`}})})],T);const ze=["for"],Le=["id","size"],Ce=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"spinner"),l(" attribute to render a spinner inside a text input. This lets users know when information is saving or loading.")],-1);function Pe(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Spinners in Text Inputs",titleSize:"h4",id:"spinner-texts",tabs:t.exampleTabs},{example:a(()=>[(h(!0),_($,null,y(t.textInputs,p=>(h(),_("div",{class:"chi-form__item -mb--2",key:p.text,style:{"max-width":"20rem"}},[e("chi-label",{for:"spinner-input-"+p},"Label",8,ze),e("chi-text-input",{id:"spinner-input-"+p.text,spinner:"",size:p.size},null,8,Le)]))),128))]),"code-webcomponent":a(()=>[Ce,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Te=g(T,[["render",Pe]]);var Oe=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,je=(t,i,o,c)=>{for(var n=c>1?void 0:c?ke(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&Oe(i,o,n),n};let O=class extends b{};O=je([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-spinner color="primary"></chi-spinner>
<chi-spinner color="dark"></chi-spinner>
<!-- For dark backgrounds -->
<chi-spinner color="secondary"></chi-spinner>
<chi-spinner color="light"></chi-spinner>`,htmlblueprint:`<!-- For light backgrounds -->
<svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--dark" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- For dark backgrounds -->
<svg class="chi-spinner -icon--secondary" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--light" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`}})})],O);const De=e("p",{class:"-text"},"Brand spinner colors reinforce Lumen's brand. Use primary or dark for light themes and secondary or light for dark themes.",-1),Ee={class:"chi-grid -no-gutter"},Ie={class:"chi-col -w--12 -w-md--6 -p--1 -d--flex -justify-content--center"},Me={class:"-p--2 -text--center"},We=["color"],He={class:"chi-col -w--12 -w-md--6 -bg--black -p--1 -d--flex -justify-content--center"},Ue={class:"-p--2 -text--center"},Ae=["color"],Fe=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"color"),l(" attribute to change a spinners color.")],-1),Ne=e("div",{class:"chi-tab__description"},[l("Use "),e("a",{href:"/utilities/color"},"icon color utilities"),l(" such as "),e("code",null,"-icon--primary"),l(" and "),e("code",null,"-icon--secondary"),l(" to change the color of any spinner.")],-1);function Ve(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Brand",padding:"-p--0",titleSize:"h4",id:"color-brand",tabs:t.exampleTabs},{"example-description":a(()=>[De]),example:a(()=>[e("div",Ee,[e("div",Ie,[(h(),_($,null,y(["primary","dark"],p=>e("div",Me,[e("chi-spinner",{class:"-m--1",color:p,size:"md"},null,8,We)])),64))]),e("div",He,[(h(),_($,null,y(["secondary","light"],p=>e("div",Ue,[e("chi-spinner",{class:"-m--1",color:p,size:"md"},null,8,Ae)])),64))])])]),"code-webcomponent":a(()=>[Fe,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[Ne,d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=g(O,[["render",Ve]]);var Ge=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ke=(t,i,o,c)=>{for(var n=c>1?void 0:c?Je(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&Ge(i,o,n),n};let k=class extends b{};k=Ke([v({data:()=>({buttonInputs:[{text:"Button",buttonSize:"",spinnerSize:""},{text:"Small",buttonSize:"sm",spinnerSize:"xs"},{text:"Large",buttonSize:"lg",spinnerSize:"sm--2"}],exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button color="primary" variant="outline">
  <span>Button</span>
  <chi-spinner color="primary"></chi-spinner>
</chi-button>
<chi-button size="sm" color="primary" variant="outline">
  <span>Small</span>
  <chi-spinner color="primary" size="xs"></chi-spinner>
</chi-button>
<chi-button size="lg" color="primary" variant="outline">
  <span>Large</span>
  <chi-spinner color="primary" size="sm--2"></chi-spinner>
</chi-button>`,htmlblueprint:`<button class="chi-button -primary -outline">
  <div class="chi-button__content">
    <span>Button</span>
    <svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>
<button class="chi-button -primary -outline">
  <div class="chi-button__content">
    <span>Small</span>
    <svg class="chi-spinner -icon--primary -xs" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>
<button class="chi-button -primary -outline">
  <div class="chi-button__content">
    <span>Large</span>
    <svg class="chi-spinner -icon--primary -sm--2" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>`}})})],k);const Qe=["size"],Re=["size"];function Xe(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Spinners in Buttons",titleSize:"h4",id:"spinner-buttons-portal",tabs:t.exampleTabs},{example:a(()=>[(h(!0),_($,null,y(t.buttonInputs,p=>(h(),_("chi-button",{class:"-mr--3",key:p.text,size:p.buttonSize},[e("span",null,S(p.text),1),e("chi-spinner",{color:"muted",size:p.spinnerSize},null,8,Re)],8,Qe))),128))]),"code-webcomponent":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ye=g(k,[["render",Xe]]);var Ze=Object.defineProperty,en=Object.getOwnPropertyDescriptor,nn=(t,i,o,c)=>{for(var n=c>1?void 0:c?en(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&Ze(i,o,n),n};let j=class extends b{};j=nn([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-spinner color="success"></chi-spinner>
<chi-spinner color="warning"></chi-spinner>
<chi-spinner color="danger"></chi-spinner>
<chi-spinner color="muted"></chi-spinner>`,htmlblueprint:`<svg class="chi-spinner -icon--success" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--warning" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--danger" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`}})})],j);const tn=e("p",{class:"-text"},"Use semantic colors to communicate meaning to users. Use green (success) for positive, red (danger) for negative, yellow (warning) for needs attention, and grey (muted) for neutral. Semantic colors should never be used for decorative purposes.",-1),sn={class:"chi-grid -no-gutter"},ln={class:"chi-col -w--12 -d--flex -flex--row -justify-content--center -flex--wrap"},cn={class:"-p--2 -text--center"},on=["color"],rn=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"color"),l(" attribute to change a spinners color.")],-1),pn=e("div",{class:"chi-tab__description"},[l("Use "),e("a",{href:"/utilities/color"},"icon color utilities"),l(" such as "),e("code",null,"-icon--success"),l(" and "),e("code",null,"-icon--danger"),l(" to change the color of any spinner.")],-1);function an(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Semantic",padding:"-p--0",titleSize:"h4",id:"color-semantic",tabs:t.exampleTabs},{"example-description":a(()=>[tn]),example:a(()=>[e("div",sn,[e("div",ln,[(h(),_($,null,y(["success","warning","danger","muted"],p=>e("div",cn,[e("chi-spinner",{class:"-m--3",color:p,size:"md"},null,8,on)])),64))])])]),"code-webcomponent":a(()=>[rn,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[pn,d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const dn=g(j,[["render",an]]);var hn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,un=(t,i,o,c)=>{for(var n=c>1?void 0:c?mn(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&hn(i,o,n),n};let D=class extends b{};D=un([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs : 12x12px -->
<chi-spinner color='primary' size="xs"></chi-spinner>
<!-- sm : 16x16px -->
<chi-spinner color='primary' size="sm"></chi-spinner>
<!-- sm--2 : 20x20px -->
<chi-spinner color='primary' size="sm--2"></chi-spinner>
<!-- sm--3 : 24x24px -->
<chi-spinner color='primary' size="sm--3"></chi-spinner>
<!-- md : 32x32px -->
<chi-spinner color='primary' size="md"></chi-spinner>
<!-- lg : 64x64px -->
<chi-spinner color='primary' size="lg"></chi-spinner>
<!-- xl : 96x96px -->
<chi-spinner color='primary' size="xl"></chi-spinner>
<!-- xxl : 128x128px -->
<chi-spinner color='primary' size="xxl"></chi-spinner>`,htmlblueprint:`<!-- -xs : 12x12px -->
<svg class="chi-spinner -icon--primary -xs" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm : 16x16px -->
<svg class="chi-spinner -icon--primary -sm" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm--2 : 20x20px -->
<svg class="chi-spinner -icon--primary -sm--2" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm--3 : 24x24px -->
<svg class="chi-spinner -icon--primary -sm--3" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -md : 32x32px -->
<svg class="chi-spinner -icon--primary -md" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -lg : 64x64px -->
<svg class="chi-spinner -icon--primary -lg" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -xl : 96x96px -->
<svg class="chi-spinner -icon--primary -xl" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
</div>
<!-- -xxl : 128x128px -->
<svg class="chi-spinner -icon--primary -xxl" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`}})})],D);const _n={class:"chi-grid -align-items--end"},xn={class:"-p--2"},bn=["size"],vn={class:"-text -text--center"},gn=e("div",{class:"chi-tab__description"},[l("By default, spinners are rendered at 16x16px ("),e("code",null,"sm"),l("). Set "),e("code",null,"size"),l(" attribute to render spinners larger or smaller: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"sm--2"),l(", "),e("code",null,"sm--3"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(", "),e("code",null,"xl"),l(", "),e("code",null,"xxl"),l(".")],-1),fn=e("div",{class:"chi-tab__description"},[l("By default, spinners render at 16x16px ("),e("code",null,"-sm"),l("). Apply size classes to render spinners larger or smaller: "),e("code",null,"-xs"),l(", "),e("code",null,"-sm"),l(", "),e("code",null,"-sm--2"),l(", "),e("code",null,"-sm--3"),l(", "),e("code",null,"-md"),l(", "),e("code",null,"-lg"),l(", "),e("code",null,"-xl"),l(", "),e("code",null,"-xxl"),l(".")],-1);function wn(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Sizes",titleSize:"h4",id:"sizes-portal",tabs:t.exampleTabs},{example:a(()=>[e("div",_n,[(h(),_($,null,y(["xs","sm","sm--2","sm--3","md","lg","xl","xxl"],p=>e("div",xn,[e("chi-spinner",{class:"-m--1",size:p,color:"primary"},null,8,bn),e("p",vn,S(p),1)])),64))])]),"code-webcomponent":a(()=>[gn,d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[fn,d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $n=g(D,[["render",wn]]);var yn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,Bn=(t,i,o,c)=>{for(var n=c>1?void 0:c?Sn(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&yn(i,o,n),n};let E=class extends b{};E=Bn([v({data:()=>({buttonInputs:[{text:"Button",buttonSize:"",spinnerSize:""},{text:"Small",buttonSize:"sm",spinnerSize:"xs"},{text:"Large",buttonSize:"lg",spinnerSize:"sm--2"}],exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button>
  <span>Button</span>
  <chi-spinner color="muted"></chi-spinner>
</chi-button>
<chi-button size="sm">
  <span>Small</span>
  <chi-spinner color="muted" size="xs"></chi-spinner>
</chi-button>
<chi-button size="lg">
  <span>Large</span>
  <chi-spinner color="muted" size="sm--2"></chi-spinner>
</chi-button>`,htmlblueprint:`<button class="chi-button">
  <div class="chi-button__content">
    <span>Button</span>
    <svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>
<button class="chi-button">
  <div class="chi-button__content">
    <span>Small</span>
    <svg class="chi-spinner -icon--muted -xs" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>
<button class="chi-button">
  <div class="chi-button__content">
    <span>Large</span>
    <svg class="chi-spinner -icon--muted -sm--2" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>`}})})],E);const zn=["size"],Ln=["size"];function Cn(t,i,o,c,n,r){const s=f,m=w;return h(),u(m,{title:"Spinners in Buttons",titleSize:"h4",id:"spinner-buttons-lumen-centurylink",tabs:t.exampleTabs},{example:a(()=>[(h(!0),_($,null,y(t.buttonInputs,p=>(h(),_("chi-button",{class:"-mr--3",key:p.text,size:p.buttonSize},[e("span",null,S(p.text),1),e("chi-spinner",{color:"muted",size:p.spinnerSize},null,8,Ln)],8,zn))),128))]),"code-webcomponent":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pn=g(E,[["render",Cn]]);var Tn=Object.defineProperty,On=Object.getOwnPropertyDescriptor,kn=(t,i,o,c)=>{for(var n=c>1?void 0:c?On(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&Tn(i,o,n),n};let I=class extends b{constructor(){super(...arguments);z(this,"selectedTheme",q())}};I=kn([v({components:{BaseExample:ie,Inverse:de,SizesLumenCenturyLink:$e,SizesPortal:$n,SpinnerTexts:Te,SpinnerButtonsPortal:Ye,SpinnerButtonsLumenCenturyLink:Pn,ColorBrand:qe,ColorSemantic:dn}})],I);const jn=e("h2",null,"Examples",-1),Dn=e("h3",null,"Backdrop",-1),En=e("h3",null,"Contextual",-1),In=e("h3",null,"Colors",-1),Mn=e("p",{class:"-text"},"By default, spinners are rendered in the same color as the text color defined on their parent container. Easily change a spinners color using the examples below.",-1);function Wn(t,i,o,c,n,r){const s=x("BaseExample"),m=x("Inverse"),p=x("SpinnerButtonsPortal"),B=x("SpinnerButtonsLumenCenturyLink"),W=x("SpinnerTexts"),H=x("SizesLumenCenturyLink"),U=x("SizesPortal"),A=x("ColorBrand"),F=x("ColorSemantic");return h(),_("div",null,[jn,Dn,d(s),d(m),En,["portal","portalrebrand24"].includes(t.selectedTheme)?(h(),u(p,{key:0})):(h(),u(B,{key:1})),d(W),["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(h(),u(H,{key:2})):(h(),u(U,{key:3})),In,Mn,d(A),d(F)])}const Hn=g(I,[["render",Wn]]);var Un=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Fn=(t,i,o,c)=>{for(var n=c>1?void 0:c?An(i,o):i,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(c?s(i,o,n):s(n))||n);return c&&n&&Un(i,o,n),n};let M=class extends b{constructor(){super(...arguments);z(this,"pageTabs",K)}};M=Fn([v({components:{Accessibility:J,Examples:Hn,Properties:G}})],M);const Nn={class:"chi-grid__container -pt--3"},Vn={class:"chi-tabs-panel -active",id:"examples"},qn={class:"chi-tabs-panel",id:"properties"},Gn={class:"chi-tabs-panel",id:"accessibility"};function Jn(t,i,o,c,n,r){const s=Q,m=x("Examples"),p=x("Properties"),B=x("Accessibility");return h(),_("div",null,[d(s,{title:"Spinner",description:"Spinners are animated circles that let users know when information is saving or loading.",tabs:t.pageTabs},null,8,["tabs"]),e("div",Nn,[e("div",Vn,[d(m)]),e("div",qn,[d(p)]),e("div",Gn,[d(B)])])])}const gt=g(M,[["render",Jn]]);export{gt as default};
