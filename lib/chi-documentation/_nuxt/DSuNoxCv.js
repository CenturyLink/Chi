var ce=Object.defineProperty;var le=(c,e,n)=>e in c?ce(c,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[e]=n;var x=(c,e,n)=>le(c,typeof e!="symbol"?e+"":e,n);import{V as _,N as b}from"./NAah3XrW.js";import{o as p,h as v,w as d,a as i,d as a,b as o,j as se,m as u,c as y,l as V,F as ae}from"./CEIPSiTs.js";import{_ as g}from"./onyWiYp2.js";import{_ as f}from"./CAQzZ0uH.js";import{_ as m}from"./DlAUqK2U.js";import{_ as ne}from"./CnZFJwg2.js";import re from"./D4c7oWtY.js";import oe from"./Dp9aNk0K.js";import de from"./MQfU9RFE.js";import he from"./_IlgMagN.js";import{s as ue}from"./DtNz156Q.js";import{_ as pe}from"./DFOICsuk.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var _e=Object.defineProperty,be=Object.getOwnPropertyDescriptor,me=(c,e,n,s)=>{for(var t=s>1?void 0:s?be(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&_e(e,n,t),t};let C=class extends _{};C=me([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert color="danger" icon="circle-warning" center>
  This is a centered danger alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`}})})],C);function ve(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Centered",titleSize:"h4",id:"bubble_centered_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},[i("strong",null,"Note:"),a(" Use sparingly. Centered Bubble alerts should only be used to render brief messages on centered forms such as those found on Sign In and Sign Up screens. Centered alerts do not support titles.")],-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",center:""},"This is a centered danger alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the attribute "),i("code",null,"center"),a(" to center the content of a Bubble Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Apply the class "),i("code",null,"-center"),a(" to center the content of a Bubble Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ge=m(C,[["render",ve]]);var fe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,we=(c,e,n,s)=>{for(var t=s>1?void 0:s?Te(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&fe(e,n,t),t};let S=class extends _{};S=we([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
<chi-alert color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Large -->
<chi-alert color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`,htmlblueprint:`<!-- Small -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Small Titled -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Medium -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Medium Titled -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Large -->
<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>
<!-- Large Titled -->
<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>`}})})],S);function ye(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Sizes",titleSize:"h4",id:"bubble_sizes_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("p",{class:"-text--bold -ml--2"},"sm",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),i("p",{class:"-text--bold -ml--2"},"md (default)",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1),i("p",{class:"-text--bold -ml--2"},"lg",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg"},"This is a large success alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success"},"This is a large success alert",-1)])),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the "),i("code",null,'size=""'),a(" attribute to customize the size of an alert. Supported sizes are "),i("code",null,"sm"),a(", "),i("code",null,"md"),a(", and "),i("code",null,"lg"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use size classes to customize the size of an alert. Supported size classes are "),i("code",null,"-sm"),a(", "),i("code",null,"-md"),a(", and "),i("code",null,"-lg"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xe=m(S,[["render",ye]]);var Ce=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,$e=(c,e,n,s)=>{for(var t=s>1?void 0:s?Se(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Ce(e,n,t),t};let $=class extends _{};$=$e([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- closable -->
<chi-alert color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- Large closable Titled -->
<chi-alert color="warning" icon="warning" size="lg" title="Warning" closable>
  This is a large closable warning alert
</chi-alert>`,htmlblueprint:`<!-- Closable -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- closable Titled -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Large closable Titled -->
<div class="chi-alert -warning -close -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a large closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`}})})],$);function Le(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Closable",titleSize:"h4",id:"bubble_closable_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},"To allow users to dismiss an alert.",-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",closable:""},"This is a closable warning alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"Warning",closable:""},"This is a closable warning alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",size:"lg",title:"Warning",closable:""},"This is a large closable warning alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use attribute "),i("code",null,"closable"),a(" to render a close button that allows users to dismiss an alert."),i("br"),a("Use attribute "),i("code",null,"mutable"),a(" to remove alert once close buttons is clicked.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the class "),i("code",null,"-close"),a(" and insert a close button "),i("code",null,"chi-alert__close-button"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Be=m($,[["render",Le]]);var ze=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,ke=(c,e,n,s)=>{for(var t=s>1?void 0:s?Pe(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&ze(e,n,t),t};let L=class extends _{};L=ke([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert color="success" icon="circle-check" size="lg" title="Success" closable>
  This is a large closable success alert
  <chi-button slot="chi-alert__actions" color="primary">Action</chi-button>
</chi-alert>`,htmlblueprint:`<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large closable success alert</p>
    <div class="chi-alert__actions">
      <button class="chi-button -primary">Action</button>
    </div>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`}})})],L);function De(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Actionable",titleSize:"h4",id:"bubble_actionable",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success",closable:""},[a("This is a large closable success alert"),i("div",{slot:"chi-alert__actions"},[i("chi-button",{color:"primary"},"Action")])],-1)])),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Add buttons to an alert by defining "),i("code",null,'slot="chi-alert__actions"'),a(" on each "),i("code",null,"chi-button"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("While "),i("code",null,"chi-alert__actions"),a(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),i("code",null,"-lg"),a("."),i("br"),a("Large Alerts have extra "),i("code",null,"chi-alert"),a(" padding, a larger "),i("code",null,"chi-alert__icon"),a(", and a larger "),i("code",null,"chi-alert__close-button"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Oe=m(L,[["render",De]]);var We=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Ae=(c,e,n,s)=>{for(var t=s>1?void 0:s?Me(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&We(e,n,t),t};let B=class extends _{};B=Ae([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="banner" icon="flag">
    This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="banner" icon="circle-check" color="success">
    This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="banner" icon="circle-warning" color="danger">
    This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="banner" icon="warning" color="warning">
    This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="banner" icon="circle-info" color="info">
    This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="banner" icon="circle-info" color="muted">
    This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -banner" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -banner -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -banner -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -banner -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -banner -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`}})})],B);function je(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Default",titleSize:"h4",id:"banner_default_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("chi-alert",{class:"-m--2",type:"banner",icon:"flag"},"This is a base alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",type:"banner"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",type:"banner"},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",type:"banner"},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",type:"banner"},"This is an info alert",-1),i("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",type:"banner"},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=m(B,[["render",je]]);var Ie=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Ne=(c,e,n,s)=>{for(var t=s>1?void 0:s?Ee(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Ie(e,n,t),t};let z=class extends _{};z=Ne([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert type="banner" icon="circle-warning" color="danger" center>
  This is a centered danger alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -banner -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`}})})],z);function He(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Centered",titleSize:"h4",id:"banner_centered_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},[i("strong",null,"Note:"),a(" Use sparingly. Centered Banner alerts should only be used to render brief messages. Centered alerts do not support titles.")],-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-warning",color:"danger",center:""},"This is a centered danger alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the attribute "),i("code",null,"center"),a(" to center the content of a Banner Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Apply the class "),i("code",null,"-center"),a(" to center the content of a Banner Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ve=m(z,[["render",He]]);var Fe=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ge=(c,e,n,s)=>{for(var t=s>1?void 0:s?qe(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Fe(e,n,t),t};let P=class extends _{};P=Ge([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="banner" icon="flag" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="banner" icon="circle-check" color="success" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="banner" icon="circle-warning" color="danger" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="banner" icon="warning" color="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="banner" icon="circle-info" color="info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="banner" icon="circle-info" color="muted" title="Muted">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -banner" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -banner -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -banner -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -banner -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -banner -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`}})})],P);function Je(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Titled",titleSize:"h4",id:"banner_titled_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},"The title will automatically get colored based on the alerts semantic color class. To override the title color, apply a text color utility class.",-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",type:"banner",icon:"flag",title:"Base"},"This is a base alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",title:"danger"},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),i("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use "),i("code",null,'title=""'),a(" attribute to add a title to an Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use "),i("code",null,"chi-alert__title"),a(" class to add a title to an Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ke=m(P,[["render",Je]]);var Qe=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Xe=(c,e,n,s)=>{for(var t=s>1?void 0:s?Re(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Qe(e,n,t),t};let k=class extends _{};k=Xe([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
<chi-alert type="banner" color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert type="banner" color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert type="banner" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert type="banner" color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Large -->
<chi-alert type="banner" color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert type="banner" color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`,htmlblueprint:`<!-- Small -->
<div class="chi-alert -banner -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Small Titled -->
<div class="chi-alert -banner -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Medium -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Medium Titled -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Large -->
<div class="chi-alert -banner -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>
<!-- Large Titled -->
<div class="chi-alert -banner -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>`}})})],k);function Ye(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Sizes",titleSize:"h4",id:"banner_sizes_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("p",{class:"-text--bold -ml--2"},"sm",-1),i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"sm"},"This is a small success alert",-1),i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"sm",title:"Success"},"This is a small success alert",-1),i("p",{class:"-text--bold -ml--2"},"md (default)",-1),i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",title:"Success"},"This is a success alert",-1),i("p",{class:"-text--bold -ml--2"},"lg",-1),i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"lg"},"This is a large success alert",-1),i("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"lg",title:"Success"},"This is a large success alert",-1)])),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the "),i("code",null,'size=""'),a(" attribute to customize the size of an alert. Supported sizes are "),i("code",null,"sm"),a(", "),i("code",null,"md"),a(", and "),i("code",null,"lg"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use size classes to customize the size of an alert. Supported size classes are "),i("code",null,"-sm"),a(", "),i("code",null,"-md"),a(", and "),i("code",null,"-lg"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ze=m(k,[["render",Ye]]);var ei=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,ti=(c,e,n,s)=>{for(var t=s>1?void 0:s?ii(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&ei(e,n,t),t};let D=class extends _{};D=ti([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- closable -->
<chi-alert type="banner" color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert type="banner" color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- Large closable Titled -->
<chi-alert type="banner" color="warning" icon="warning" size="lg" title="Warning" closable>
  This is a large closable warning alert
</chi-alert>`,htmlblueprint:`<!-- Closable Base -->
<div class="chi-alert -banner -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Closable Titled -->
<div class="chi-alert -banner -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Large Closable Titled -->
<div class="chi-alert -banner -warning -close -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`}})})],D);function ci(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Closable",titleSize:"h4",id:"banner_closable_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},"To allow users to dismiss an alert.",-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",type:"banner",icon:"warning",color:"warning",closable:""},"This is a closable warning alert",-1),i("chi-alert",{class:"-m--2",type:"banner",color:"warning",icon:"warning",title:"Warning",closable:""},"This is a closable warning alert",-1),i("chi-alert",{class:"-m--2",type:"banner",color:"warning",icon:"warning",size:"lg",title:"Warning",closable:""},"This is a large closable warning alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use attribute "),i("code",null,"closable"),a(" to render a close button that allows users to dismiss an alert."),i("br"),a("Use attribute "),i("code",null,"mutable"),a(" to remove alert once close buttons is clicked.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the class "),i("code",null,"-close"),a(" and insert a close button "),i("code",null,"chi-alert__close-button"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const li=m(D,[["render",ci]]);var si=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,ni=(c,e,n,s)=>{for(var t=s>1?void 0:s?ai(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&si(e,n,t),t};let O=class extends _{};O=ni([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert type="banner" icon="flag" size="lg" title="Base" closable>
  This is a large closable alert
  <chi-button slot="chi-alert__actions" color="primary">Action</chi-button>
</chi-alert>`,htmlblueprint:`<div class="chi-alert -banner -lg" role="alert">
<i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
<div class="chi-alert__content">
  <p class="chi-alert__title">Base</p>
  <p class="chi-alert__text">This is a large closable alert</p>
  <div class="chi-alert__actions">
    <button class="chi-button -primary">Action</button>
  </div>
</div>
<button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
  <div class="chi-button__content">
    <i class="chi-icon icon-x" aria-hidden="true"></i>
  </div>
</button>
</div>`}})})],O);const ri={class:"-p--1 -bg--grey-20"};function oi(c,e,n,s,t,r){const l=ne,h=g,T=f;return p(),v(T,{title:"Actionable",titleSize:"h4",id:"banner_actionable_lumen_centurylink",padding:"-p--0",tabs:c.exampleTabs},{example:d(()=>[i("div",ri,[o(l,null,{default:d(()=>e[0]||(e[0]=[i("chi-alert",{class:"-m--2",type:"banner",icon:"flag",size:"lg",title:"Base",closable:""},[a(" This is a large closable alert"),i("chi-button",{color:"primary",slot:"chi-alert__actions"},"Action")],-1)])),_:1})])]),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Add buttons to an alert by defining "),i("code",null,'slot="chi-alert__actions"'),a(" on each "),i("code",null,"chi-button"),a(".")])],-1)),o(h,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("While "),i("code",null,"chi-alert__actions"),a(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),i("code",null,"-lg"),a("."),i("br"),a("Large Alerts have extra "),i("code",null,"chi-alert"),a(" padding, a larger "),i("code",null,"chi-alert__icon"),a(", and a larger "),i("code",null,"chi-alert__close-button"),a(".")])],-1)),o(h,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const di=m(O,[["render",oi]]);var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,pi=(c,e,n,s)=>{for(var t=s>1?void 0:s?ui(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&hi(e,n,t),t};let W=class extends _{};W=pi([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="toast" icon="flag">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="toast" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="toast" color="danger" icon="circle-warning">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="toast" color="warning" icon="warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="toast" color="info" icon="circle-info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="toast" color="muted" icon="circle-info">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -toast" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Success -->
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Danger -->
<div class="chi-alert -toast -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Warning -->
<div class="chi-alert -toast -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Info -->
<div class="chi-alert -toast -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Muted -->
<div class="chi-alert -toast -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`}})})],W);function _i(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Default",titleSize:"h4",id:"toast_default_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("chi-alert",{class:"-m--2",type:"toast",icon:"flag"},"This is a base alert",-1),i("chi-alert",{class:"-m--2",type:"toast",icon:"circle-check",color:"success"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",type:"toast",icon:"circle-warning",color:"danger"},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",type:"toast",icon:"warning",color:"warning"},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",type:"toast",icon:"circle-info",color:"info"},"This is an info alert",-1),i("chi-alert",{class:"-m--2",type:"toast",icon:"circle-info",color:"muted"},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("To use a toast alert, set the "),i("code",null,"type"),a(" attribute to "),i("code",null,"toast"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("To use a toast alert, apply the class "),i("code",null,"-toast"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const bi=m(W,[["render",_i]]);var mi=Object.defineProperty,vi=Object.getOwnPropertyDescriptor,gi=(c,e,n,s)=>{for(var t=s>1?void 0:s?vi(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&mi(e,n,t),t};let M=class extends _{};M=gi([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="toast" icon="flag" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="toast" icon="circle-check" color="success" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="toast" color="danger" icon="circle-warning" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="toast" color="warning" icon="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="toast" color="info" icon="circle-info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="toast" color="muted" icon="circle-info" title="Muted">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -toast" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Success -->
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Danger -->
<div class="chi-alert -toast -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Warning -->
<div class="chi-alert -toast -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Info -->
<div class="chi-alert -toast -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Muted -->
<div class="chi-alert -toast -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`}})})],M);function fi(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Titled",titleSize:"h4",id:"toast_titled_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("chi-alert",{class:"-m--2",type:"toast",icon:"flag",title:"Base"},"This is a base alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"danger",icon:"circle-warning",title:"danger"},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ti=m(M,[["render",fi]]);var wi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,xi=(c,e,n,s)=>{for(var t=s>1?void 0:s?yi(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&wi(e,n,t),t};let A=class extends _{};A=xi([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
<chi-alert type="toast" color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert type="toast" color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert type="toast" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert type="toast" color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Large -->
<chi-alert type="toast" color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert type="toast" color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -toast -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`}})})],A);function Ci(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Sizes",titleSize:"h4",id:"toast_sizes_lumen_centurylink",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("p",{class:"-text--bold -ml--2"},"sm",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),i("p",{class:"-text--bold -ml--2"},"md (default)",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1),i("p",{class:"-text--bold -ml--2"},"lg",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"lg"},"This is a large success alert",-1),i("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"lg",title:"Success"},"This is a large success alert",-1)])),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the "),i("code",null,'size=""'),a(" attribute to customize the size of an alert. Supported sizes are "),i("code",null,"sm"),a(", "),i("code",null,"md"),a(", and "),i("code",null,"lg"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use size classes to customize the size of an alert. Supported size classes are "),i("code",null,"-sm"),a(", "),i("code",null,"-md"),a(", and "),i("code",null,"-lg"),a(".")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Si=m(A,[["render",Ci]]);var $i=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Bi=(c,e,n,s)=>{for(var t=s>1?void 0:s?Li(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&$i(e,n,t),t};let j=class extends _{};j=Bi([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert icon="flag">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-warning">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`}})})],j);function zi(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Default",titleSize:"h4",id:"bubble_default",padding:"-p--1",tabs:c.exampleTabs},{example:d(()=>e[0]||(e[0]=[i("chi-alert",{class:"-m--2",icon:"flag"},"This is a base alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning"},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning"},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",color:"info",icon:"circle-info"},"This is an info alert",-1),i("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info"},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[e[1]||(e[1]=i("div",{class:"chi-tab__description"},[i("span",null,[a("To render an alert use the tag "),i("code",null,"chi-alert"),a(". Use the color attribute to define a semantic color that corresponds to the meaning or value state of your alert. Supported colors include "),i("code",null,"success"),a(", "),i("code",null,"danger"),a(", "),i("code",null,"warning"),a(", "),i("code",null,"info"),a(", and "),i("code",null,"muted"),a(". If no color is defined, alerts will default to the base style which uses the body text color. This is useful for displaying neutral alerts with no specific value state.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("To render an alert, use the class "),i("code",null,"chi-alert"),a(". Apply a semantic color class that corresponds to the meaning or value state of your alert. Supported classes include "),i("code",null,"-success"),a(", "),i("code",null,"-danger"),a(", "),i("code",null,"-warning"),a(", "),i("code",null,"-info"),a(", and "),i("code",null,"-muted"),a(". If no class is defined, alerts will default to the base style which uses the body text color. This is useful for displaying neutral alerts with no specific value state.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pi=m(j,[["render",zi]]);var ki=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Oi=(c,e,n,s)=>{for(var t=s>1?void 0:s?Di(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&ki(e,n,t),t};let U=class extends _{};U=Oi([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert icon="flag" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-warning" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info" title="Muted">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`}})})],U);function Wi(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Titled",titleSize:"h4",id:"bubble_titled",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},"The title will automatically get colored based on the alerts semantic color class.",-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",icon:"flag",title:"Base"},"This is a base alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),i("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",title:"danger"},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),i("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the "),i("code",null,'title=""'),a(" attribute to display a title above the alert text.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use "),i("code",null,"chi-alert__title"),a(" to add a title to an Alert. To override the title color, apply a text color utility class.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Mi=m(U,[["render",Wi]]);var Ai=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Ui=(c,e,n,s)=>{for(var t=s>1?void 0:s?ji(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Ai(e,n,t),t};let I=class extends _{};I=Ui([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
  <chi-alert icon="flag" spinner>
    This is a base alert
  </chi-alert>
  <!-- Success -->
  <chi-alert color="success" icon="circle-check" spinner>
    This is a success alert
  </chi-alert>
  <!-- Danger -->
  <chi-alert color="danger" icon="circle-warning" spinner>
    This is a danger alert
  </chi-alert>
  <!-- Warning -->
  <chi-alert color="warning" icon="warning" spinner>
    This is a warning alert
  </chi-alert>
  <!-- Info -->
  <chi-alert color="info" icon="circle-info" spinner>
    This is an info alert
  </chi-alert>
  <!-- Muted -->
  <chi-alert color="muted" icon="circle-info" spinner>
    This is a muted alert
  </chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
      <div class="chi-alert" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Base</p>
          <p class="chi-alert__text">This is a base alert</p>
        </div>
      </div>
      <!-- Success -->
      <div class="chi-alert -success" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Success</p>
          <p class="chi-alert__text">This is a success alert</p>
        </div>
      </div>
      <!-- Danger -->
      <div class="chi-alert -danger" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Danger</p>
          <p class="chi-alert__text">This is a danger alert</p>
        </div>
      </div>
      <!-- Warning -->
      <div class="chi-alert -warning" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Warning</p>
          <p class="chi-alert__text">This is a warning alert</p>
        </div>
      </div>
      <!-- Info -->
      <div class="chi-alert -info" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Info</p>
          <p class="chi-alert__text">This is an info alert</p>
        </div>
      </div>
      <!-- Muted -->
      <div class="chi-alert -muted" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Muted</p>
          <p class="chi-alert__text">This is a muted alert</p>
        </div>
      </div>`}})})],I);function Ii(c,e,n,s,t,r){const l=g,h=f;return p(),v(h,{title:"Spinner",titleSize:"h4",id:"bubble_spinner",padding:"-p--1",tabs:c.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[i("p",{class:"-text"},"Use the spinner attribute to let users know when information is saving or loading.",-1)])),example:d(()=>e[1]||(e[1]=[i("chi-alert",{class:"-m--2",icon:"flag",spinner:""},"This is a spinner alert",-1),i("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",spinner:""},"This is a success alert",-1),i("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",spinner:""},"This is a danger alert",-1),i("chi-alert",{class:"-m--2",color:"warning",icon:"warning",spinner:""},"This is a warning alert",-1),i("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",spinner:""},"This is an info alert",-1),i("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",spinner:""},"This is a muted alert",-1)])),"code-webcomponent":d(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use the "),i("code",null,"spinner"),a(" attribute to display a spinner inside the alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[e[3]||(e[3]=i("div",{class:"chi-tab__description"},[i("span",null,[a("Use "),i("code",null,"spinner"),a(" to add a spinner to an Alert.")])],-1)),o(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ei=m(I,[["render",Ii]]);var Ni=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Vi=(c,e,n,s)=>{for(var t=s>1?void 0:s?Hi(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Ni(e,n,t),t};let E=class extends _{constructor(){super(...arguments);x(this,"selectedTheme",se())}};E=Vi([b({components:{BubbleDefault:Pi,BubbleCenteredLumenCenturyLink:ge,BubbleTitled:Mi,BubbleSizesLumenCenturyLink:xe,BubbleClosableLumenCenturyLink:Be,BubbleActionable:Oe,BannerDefaultLumenCenturyLink:Ue,BannerCenteredLumenCenturyLink:Ve,BannerTitledLumenCenturyLink:Ke,BannerSizesLumenCenturyLink:Ze,BannerClosableLumenCenturyLink:li,BannerActionableLumenCenturyLink:di,ToastDefaultLumenCenturyLink:bi,ToastTitledLumenCenturyLink:Ti,ToastSizesLumenCenturyLink:Si,BubbleSizesPortal:re,BubbleClosablePortal:oe,BubbleSpinner:Ei}})],E);const Fi={key:0},qi={key:1};function Gi(c,e,n,s,t,r){const l=u("BubbleDefault"),h=u("BubbleCenteredLumenCenturyLink"),T=u("BubbleTitled"),w=u("BubbleSpinner"),F=u("BubbleSizesLumenCenturyLink"),q=u("BubbleClosableLumenCenturyLink"),H=u("BubbleActionable"),G=u("BannerDefaultLumenCenturyLink"),J=u("BannerCenteredLumenCenturyLink"),K=u("BannerTitledLumenCenturyLink"),Q=u("BannerSizesLumenCenturyLink"),R=u("BannerClosableLumenCenturyLink"),X=u("BannerActionableLumenCenturyLink"),Y=u("ToastDefaultLumenCenturyLink"),Z=u("ToastTitledLumenCenturyLink"),ee=u("ToastSizesLumenCenturyLink"),ie=u("BubbleSizesPortal"),te=u("BubbleClosablePortal");return p(),y("div",null,[e[6]||(e[6]=i("h2",null,"Examples",-1)),e[7]||(e[7]=i("h3",null,"Bubble",-1)),e[8]||(e[8]=i("p",{class:"-text"},"Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas. They are Chi's default Alert type.",-1)),o(l),["lumen","centurylink"].includes(c.selectedTheme)?(p(),y("div",Fi,[o(h),o(T),o(w),o(F),o(q),o(H),e[0]||(e[0]=i("div",{class:"chi-divider -my--6 -bt--2"},null,-1)),e[1]||(e[1]=i("h3",null,"Banner",-1)),e[2]||(e[2]=i("p",{class:"-text"},"Banner alerts are commonly presented above or below the Header component and are used for scenarios such as reminding new users to confirm their email address or notifying users when they are experiencing connectivity issues.",-1)),o(G),o(J),o(K),o(Q),o(R),o(X),e[3]||(e[3]=i("div",{class:"chi-divider -my--6 -bt--2"},null,-1)),e[4]||(e[4]=i("h3",null,"Toast",-1)),e[5]||(e[5]=i("p",{class:"-text"},"Toasts are unobtrusive alerts used to display brief, auto-expiring information.",-1)),o(Y),o(Z),o(ee)])):V("",!0),["portal"].includes(c.selectedTheme)?(p(),y("div",qi,[o(T),o(w),o(ie),o(te),o(H)])):V("",!0)])}const Ji=m(E,[["render",Gi]]);var Ki=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Ri=(c,e,n,s)=>{for(var t=s>1?void 0:s?Qi(e,n):e,r=c.length-1,l;r>=0;r--)(l=c[r])&&(t=(s?l(e,n,t):l(t))||t);return s&&t&&Ki(e,n,t),t};let N=class extends _{constructor(){super(...arguments);x(this,"pageTabs",ue)}};N=Ri([b({components:{Accessibility:he,Examples:Ji,Properties:de}})],N);const Xi={class:"chi-grid__container -pt--3"},Yi={class:"chi-tabs-panel -active",id:"examples"},Zi={class:"chi-tabs-panel",id:"properties"},et={class:"chi-tabs-panel",id:"accessibility"};function it(c,e,n,s,t,r){const l=pe,h=u("Examples"),T=u("Properties"),w=u("Accessibility");return p(),y(ae,null,[o(l,{title:"Alert",description:"Alert messages provide contextual feedback for user actions.",tabs:c.pageTabs},null,8,["tabs"]),i("div",Xi,[i("div",Yi,[o(h)]),i("div",Zi,[o(T)]),i("div",et,[o(w)])])],64)}const At=m(N,[["render",it]]);export{At as default};
