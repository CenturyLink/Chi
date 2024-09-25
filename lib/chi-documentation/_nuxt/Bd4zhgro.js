var N=Object.defineProperty;var V=(t,e,r)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var z=(t,e,r)=>V(t,typeof e!="symbol"?e+"":e,r);import{V as v,N as g}from"./NAah3XrW.js";import{o as m,h,w as a,a as n,d as l,b as d,c as x,F as y,i as $,t as S,j as q,m as b}from"./CEIPSiTs.js";import{_ as f}from"./onyWiYp2.js";import{_ as w}from"./CAQzZ0uH.js";import{_}from"./DlAUqK2U.js";import G from"./D011K8Xg.js";import J from"./DDY2GzMZ.js";import{s as K}from"./DtNz156Q.js";import{_ as Q}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(t,e,r,o)=>{for(var i=o>1?void 0:o?X(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&R(e,r,i),i};let L=class extends v{};L=Y([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-spinner color="light" backdrop></chi-spinner>',htmlblueprint:`<div class="chi-backdrop -center">
  <div class="chi-backdrop__wrapper">
    <svg class="chi-spinner -icon--light" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`}})})],L);function Z(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Base",titleSize:"h4",padding:"-p--0",id:"base",tabs:t.exampleTabs},{example:a(()=>e[0]||(e[0]=[n("div",{style:{position:"relative",height:"25rem"}},[n("chi-spinner",{color:"light",backdrop:""})],-1)])),"code-webcomponent":a(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[l("To render a spinner, use the tag "),n("code",null,"<chi-spinner>"),l("."),n("br"),l("An optional backdrop can be added to focus the user's attention on a spinner. To set a backdrop, use the "),n("code",null,"backdrop"),l(" attribute.")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[e[2]||(e[2]=n("div",{class:"chi-tab__description"},[l("To render a spinner, use the class "),n("code",null,"chi-spinner"),l("."),n("br"),l("Wrap spinners in "),n("code",null,"chi-backdrop"),l(" to overlay content similar to a modal, and add "),n("code",null,"-center"),l(" class to position it in the middle of the page.")],-1)),d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ee=_(L,[["render",Z]]);var ne=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,te=(t,e,r,o)=>{for(var i=o>1?void 0:o?ie(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&ne(e,r,i),i};let C=class extends v{};C=te([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-spinner color="primary" backdrop="inverse"></chi-spinner>',htmlblueprint:`<div class="chi-backdrop -center -inverse">
  <div class="chi-backdrop__wrapper">
    <svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`}})})],C);function se(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Inverse",titleSize:"h4",padding:"-p--0",id:"inverse",tabs:t.exampleTabs},{example:a(()=>e[0]||(e[0]=[n("div",{style:{position:"relative",height:"25rem"}},[n("chi-spinner",{color:"primary",backdrop:"inverse"})],-1)])),"code-webcomponent":a(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[l("Set the "),n("code",null,"backdrop"),l(" value to "),n("code",null,"inverse"),l(" to render spinners on light backgrounds.")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[e[2]||(e[2]=n("div",{class:"chi-tab__description"},[l("Apply the class "),n("code",null,"-inverse"),l(" to render spinners on light backgrounds.")],-1)),d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const le=_(C,[["render",se]]);var oe=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ce=(t,e,r,o)=>{for(var i=o>1?void 0:o?re(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&oe(e,r,i),i};let P=class extends v{};P=ce([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs : 12x12px -->
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
</svg>`}})})],P);const pe={class:"chi-grid -align-items--end"},ae={class:"-p--2"},de=["size"],me={class:"-text -text--center"};function ue(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Sizes",titleSize:"h4",id:"sizes-lumen-centurylink",tabs:t.exampleTabs},{example:a(()=>[n("div",pe,[(m(),x(y,null,$(["xs","sm","sm--2","sm--3","md","lg","xl","xxl"],p=>n("div",ae,[n("chi-spinner",{class:"-m--1",size:p},null,8,de),n("p",me,S(p),1)])),64))])]),"code-webcomponent":a(()=>[e[0]||(e[0]=n("div",{class:"chi-tab__description"},[l("By default, spinners are rendered at 16x16px ("),n("code",null,"sm"),l("). Set "),n("code",null,"size"),l(" attribute to render spinners larger or smaller: "),n("code",null,"xs"),l(", "),n("code",null,"sm"),l(", "),n("code",null,"sm--2"),l(", "),n("code",null,"sm--3"),l(", "),n("code",null,"md"),l(", "),n("code",null,"lg"),l(", "),n("code",null,"xl"),l(", "),n("code",null,"xxl"),l(".")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[l("By default, spinners render at 16x16px ("),n("code",null,"-sm"),l("). Apply size classes to render spinners larger or smaller: "),n("code",null,"-xs"),l(", "),n("code",null,"-sm"),l(", "),n("code",null,"-sm--2"),l(", "),n("code",null,"-sm--3"),l(", "),n("code",null,"-md"),l(", "),n("code",null,"-lg"),l(", "),n("code",null,"-xl"),l(", "),n("code",null,"-xxl"),l(".")],-1)),d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const he=_(P,[["render",ue]]);var xe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ve=(t,e,r,o)=>{for(var i=o>1?void 0:o?be(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&xe(e,r,i),i};let T=class extends v{};T=ve([g({data:()=>({textInputs:[{text:"01",size:""},{text:"02",size:"sm"},{text:"03",size:"lg"}],exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Medium (Base) -->
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
</div>`}})})],T);const ge=["for"],_e=["id","size"];function fe(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Spinners in Text Inputs",titleSize:"h4",id:"spinner-texts",tabs:t.exampleTabs},{example:a(()=>[(m(!0),x(y,null,$(t.textInputs,p=>(m(),x("div",{class:"chi-form__item -mb--2",key:p.text,style:{"max-width":"20rem"}},[n("chi-label",{for:"spinner-input-"+p},"Label",8,ge),n("chi-text-input",{id:"spinner-input-"+p.text,spinner:"",size:p.size},null,8,_e)]))),128))]),"code-webcomponent":a(()=>[e[0]||(e[0]=n("div",{class:"chi-tab__description"},[l("Use the "),n("code",null,"spinner"),l(" attribute to render a spinner inside a text input. This lets users know when information is saving or loading.")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const we=_(T,[["render",fe]]);var ye=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Se=(t,e,r,o)=>{for(var i=o>1?void 0:o?$e(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&ye(e,r,i),i};let O=class extends v{};O=Se([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
</svg>`}})})],O);const Be={class:"chi-grid -no-gutter"},ze={class:"chi-col -w--12 -w-md--6 -p--1 -d--flex -justify-content--center"},Le={class:"-p--2 -text--center"},Ce=["color"],Pe={class:"chi-col -w--12 -w-md--6 -bg--black -p--1 -d--flex -justify-content--center"},Te={class:"-p--2 -text--center"},Oe=["color"];function ke(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Brand",padding:"-p--0",titleSize:"h4",id:"color-brand",tabs:t.exampleTabs},{"example-description":a(()=>e[0]||(e[0]=[n("p",{class:"-text"},"Brand spinner colors reinforce Lumen's brand. Use primary or dark for light themes and secondary or light for dark themes.",-1)])),example:a(()=>[n("div",Be,[n("div",ze,[(m(),x(y,null,$(["primary","dark"],p=>n("div",Le,[n("chi-spinner",{class:"-m--1",color:p,size:"md"},null,8,Ce)])),64))]),n("div",Pe,[(m(),x(y,null,$(["secondary","light"],p=>n("div",Te,[n("chi-spinner",{class:"-m--1",color:p,size:"md"},null,8,Oe)])),64))])])]),"code-webcomponent":a(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[l("Use the "),n("code",null,"color"),l(" attribute to change a spinners color.")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[e[2]||(e[2]=n("div",{class:"chi-tab__description"},[l("Use "),n("a",{href:"/utilities/color"},"icon color utilities"),l(" such as "),n("code",null,"-icon--primary"),l(" and "),n("code",null,"-icon--secondary"),l(" to change the color of any spinner.")],-1)),d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const je=_(O,[["render",ke]]);var De=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Ie=(t,e,r,o)=>{for(var i=o>1?void 0:o?Ee(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&De(e,r,i),i};let k=class extends v{};k=Ie([g({data:()=>({buttonInputs:[{text:"Button",buttonSize:"",spinnerSize:""},{text:"Small",buttonSize:"sm",spinnerSize:"xs"},{text:"Large",buttonSize:"lg",spinnerSize:"sm--2"}],exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button color="primary" variant="outline">
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
</button>`}})})],k);const Me=["size"],We=["size"];function He(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Spinners in Buttons",titleSize:"h4",id:"spinner-buttons-portal",tabs:t.exampleTabs},{example:a(()=>[(m(!0),x(y,null,$(t.buttonInputs,p=>(m(),x("chi-button",{class:"-mr--3",key:p.text,size:p.buttonSize},[n("span",null,S(p.text),1),n("chi-spinner",{color:"muted",size:p.spinnerSize},null,8,We)],8,Me))),128))]),"code-webcomponent":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=_(k,[["render",He]]);var Ae=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Ne=(t,e,r,o)=>{for(var i=o>1?void 0:o?Fe(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&Ae(e,r,i),i};let j=class extends v{};j=Ne([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-spinner color="success"></chi-spinner>
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
</svg>`}})})],j);const Ve={class:"chi-grid -no-gutter"},qe={class:"chi-col -w--12 -d--flex -flex--row -justify-content--center -flex--wrap"},Ge={class:"-p--2 -text--center"},Je=["color"];function Ke(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Semantic",padding:"-p--0",titleSize:"h4",id:"color-semantic",tabs:t.exampleTabs},{"example-description":a(()=>e[0]||(e[0]=[n("p",{class:"-text"},"Use semantic colors to communicate meaning to users. Use green (success) for positive, red (danger) for negative, yellow (warning) for needs attention, and grey (muted) for neutral. Semantic colors should never be used for decorative purposes.",-1)])),example:a(()=>[n("div",Ve,[n("div",qe,[(m(),x(y,null,$(["success","warning","danger","muted"],p=>n("div",Ge,[n("chi-spinner",{class:"-m--3",color:p,size:"md"},null,8,Je)])),64))])])]),"code-webcomponent":a(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[l("Use the "),n("code",null,"color"),l(" attribute to change a spinners color.")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[e[2]||(e[2]=n("div",{class:"chi-tab__description"},[l("Use "),n("a",{href:"/utilities/color"},"icon color utilities"),l(" such as "),n("code",null,"-icon--success"),l(" and "),n("code",null,"-icon--danger"),l(" to change the color of any spinner.")],-1)),d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Qe=_(j,[["render",Ke]]);var Re=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye=(t,e,r,o)=>{for(var i=o>1?void 0:o?Xe(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&Re(e,r,i),i};let D=class extends v{};D=Ye([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs : 12x12px -->
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
</svg>`}})})],D);const Ze={class:"chi-grid -align-items--end"},en={class:"-p--2"},nn=["size"],tn={class:"-text -text--center"};function sn(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Sizes",titleSize:"h4",id:"sizes-portal",tabs:t.exampleTabs},{example:a(()=>[n("div",Ze,[(m(),x(y,null,$(["xs","sm","sm--2","sm--3","md","lg","xl","xxl"],p=>n("div",en,[n("chi-spinner",{class:"-m--1",size:p,color:"primary"},null,8,nn),n("p",tn,S(p),1)])),64))])]),"code-webcomponent":a(()=>[e[0]||(e[0]=n("div",{class:"chi-tab__description"},[l("By default, spinners are rendered at 16x16px ("),n("code",null,"sm"),l("). Set "),n("code",null,"size"),l(" attribute to render spinners larger or smaller: "),n("code",null,"xs"),l(", "),n("code",null,"sm"),l(", "),n("code",null,"sm--2"),l(", "),n("code",null,"sm--3"),l(", "),n("code",null,"md"),l(", "),n("code",null,"lg"),l(", "),n("code",null,"xl"),l(", "),n("code",null,"xxl"),l(".")],-1)),d(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[l("By default, spinners render at 16x16px ("),n("code",null,"-sm"),l("). Apply size classes to render spinners larger or smaller: "),n("code",null,"-xs"),l(", "),n("code",null,"-sm"),l(", "),n("code",null,"-sm--2"),l(", "),n("code",null,"-sm--3"),l(", "),n("code",null,"-md"),l(", "),n("code",null,"-lg"),l(", "),n("code",null,"-xl"),l(", "),n("code",null,"-xxl"),l(".")],-1)),d(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ln=_(D,[["render",sn]]);var on=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,cn=(t,e,r,o)=>{for(var i=o>1?void 0:o?rn(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&on(e,r,i),i};let E=class extends v{};E=cn([g({data:()=>({buttonInputs:[{text:"Button",buttonSize:"",spinnerSize:""},{text:"Small",buttonSize:"sm",spinnerSize:"xs"},{text:"Large",buttonSize:"lg",spinnerSize:"sm--2"}],exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button>
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
</button>`}})})],E);const pn=["size"],an=["size"];function dn(t,e,r,o,i,c){const s=f,u=w;return m(),h(u,{title:"Spinners in Buttons",titleSize:"h4",id:"spinner-buttons-lumen-centurylink",tabs:t.exampleTabs},{example:a(()=>[(m(!0),x(y,null,$(t.buttonInputs,p=>(m(),x("chi-button",{class:"-mr--3",key:p.text,size:p.buttonSize},[n("span",null,S(p.text),1),n("chi-spinner",{color:"muted",size:p.spinnerSize},null,8,an)],8,pn))),128))]),"code-webcomponent":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[d(s,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const mn=_(E,[["render",dn]]);var un=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,xn=(t,e,r,o)=>{for(var i=o>1?void 0:o?hn(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&un(e,r,i),i};let I=class extends v{constructor(){super(...arguments);z(this,"selectedTheme",q())}};I=xn([g({components:{BaseExample:ee,Inverse:le,SizesLumenCenturyLink:he,SizesPortal:ln,SpinnerTexts:we,SpinnerButtonsPortal:Ue,SpinnerButtonsLumenCenturyLink:mn,ColorBrand:je,ColorSemantic:Qe}})],I);function bn(t,e,r,o,i,c){const s=b("BaseExample"),u=b("Inverse"),p=b("SpinnerButtonsPortal"),B=b("SpinnerButtonsLumenCenturyLink"),W=b("SpinnerTexts"),H=b("SizesLumenCenturyLink"),U=b("SizesPortal"),A=b("ColorBrand"),F=b("ColorSemantic");return m(),x("div",null,[e[0]||(e[0]=n("h2",null,"Examples",-1)),e[1]||(e[1]=n("h3",null,"Backdrop",-1)),d(s),d(u),e[2]||(e[2]=n("h3",null,"Contextual",-1)),["portal"].includes(t.selectedTheme)?(m(),h(p,{key:0})):(m(),h(B,{key:1})),d(W),["lumen","centurylink"].includes(t.selectedTheme)?(m(),h(H,{key:2})):(m(),h(U,{key:3})),e[3]||(e[3]=n("h3",null,"Colors",-1)),e[4]||(e[4]=n("p",{class:"-text"},"By default, spinners are rendered in the same color as the text color defined on their parent container. Easily change a spinners color using the examples below.",-1)),d(A),d(F)])}const vn=_(I,[["render",bn]]);var gn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,fn=(t,e,r,o)=>{for(var i=o>1?void 0:o?_n(e,r):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&gn(e,r,i),i};let M=class extends v{constructor(){super(...arguments);z(this,"pageTabs",K)}};M=fn([g({components:{Accessibility:J,Examples:vn,Properties:G}})],M);const wn={class:"chi-grid__container -pt--3"},yn={class:"chi-tabs-panel -active",id:"examples"},$n={class:"chi-tabs-panel",id:"properties"},Sn={class:"chi-tabs-panel",id:"accessibility"};function Bn(t,e,r,o,i,c){const s=Q,u=b("Examples"),p=b("Properties"),B=b("Accessibility");return m(),x("div",null,[d(s,{title:"Spinner",description:"Spinners are animated circles that let users know when information is saving or loading.",tabs:t.pageTabs},null,8,["tabs"]),n("div",wn,[n("div",yn,[d(u)]),n("div",$n,[d(p)]),n("div",Sn,[d(B)])])])}const Xn=_(M,[["render",Bn]]);export{Xn as default};
