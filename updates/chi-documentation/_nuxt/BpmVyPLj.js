var ce=Object.defineProperty;var se=(t,s,n)=>s in t?ce(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;var y=(t,s,n)=>se(t,typeof s!="symbol"?s+"":s,n);import{V as p,N as b}from"./uJTUijt2.js";import{o as u,f as v,w as h,b as r,a as e,d as a,g as le,r as _,c as $,h as V,F as ae}from"./B5CYXVwa.js";import{_ as g}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{_ as m}from"./DlAUqK2U.js";import{_ as ne}from"./C-hgEc7b.js";import oe from"./I4b23YLZ.js";import re from"./De4BWY7v.js";import he from"./Ds4bvQbg.js";import de from"./DZjots1V.js";import{s as _e}from"./2EwpEKcw.js";import{_ as ue}from"./Be4hAolY.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var pe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,me=(t,s,n,l)=>{for(var i=l>1?void 0:l?be(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&pe(s,n,i),i};let x=class extends p{};x=me([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert color="danger" icon="circle-warning" center>
  This is a centered danger alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`}})})],x);const ve=e("p",{class:"-text"},[e("strong",null,"Note:"),a(" Use sparingly. Centered Bubble alerts should only be used to render brief messages on centered forms such as those found on Sign In and Sign Up screens. Centered alerts do not support titles.")],-1),ge=e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",center:""},"This is a centered danger alert",-1),fe=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the attribute "),e("code",null,"center"),a(" to center the content of a Bubble Alert.")])],-1),Te=e("div",{class:"chi-tab__description"},[e("span",null,[a("Apply the class "),e("code",null,"-center"),a(" to center the content of a Bubble Alert.")])],-1);function we(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Centered",titleSize:"h4",id:"bubble_centered_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[ve]),example:h(()=>[ge]),"code-webcomponent":h(()=>[fe,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Te,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=m(x,[["render",we]]);var ye=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,Ce=(t,s,n,l)=>{for(var i=l>1?void 0:l?xe(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&ye(s,n,i),i};let C=class extends p{};C=Ce([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
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
</div>`}})})],C);const Se=e("p",{class:"-text--bold -ml--2"},"sm",-1),Le=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),Be=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),ze=e("p",{class:"-text--bold -ml--2"},"md (default)",-1),Pe=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),ke=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1),De=e("p",{class:"-text--bold -ml--2"},"lg",-1),Oe=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg"},"This is a large success alert",-1),We=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success"},"This is a large success alert",-1),Me=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the "),e("code",null,'size=""'),a(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),a(", "),e("code",null,"md"),a(", and "),e("code",null,"lg"),a(".")])],-1),Ae=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),a(", "),e("code",null,"-md"),a(", and "),e("code",null,"-lg"),a(".")])],-1);function je(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Sizes",titleSize:"h4",id:"bubble_sizes_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[Se,Le,Be,ze,Pe,ke,De,Oe,We]),"code-webcomponent":h(()=>[Me,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Ae,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=m(C,[["render",je]]);var Ie=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Ne=(t,s,n,l)=>{for(var i=l>1?void 0:l?Ee(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Ie(s,n,i),i};let S=class extends p{};S=Ne([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- closable -->
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
</div>`}})})],S);const He=e("p",{class:"-text"},"To allow users to dismiss an alert.",-1),Ve=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",closable:""},"This is a closable warning alert",-1),Fe=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"Warning",closable:""},"This is a closable warning alert",-1),qe=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",size:"lg",title:"Warning",closable:""},"This is a large closable warning alert",-1),Ge=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use attribute "),e("code",null,"closable"),a(" to render a close button that allows users to dismiss an alert."),e("br"),a("Use attribute "),e("code",null,"mutable"),a(" to remove alert once close buttons is clicked.")])],-1),Je=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the class "),e("code",null,"-close"),a(" and insert a close button "),e("code",null,"chi-alert__close-button"),a(".")])],-1);function Ke(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Closable",titleSize:"h4",id:"bubble_closable_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[He]),example:h(()=>[Ve,Fe,qe]),"code-webcomponent":h(()=>[Ge,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Je,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Qe=m(S,[["render",Ke]]);var Re=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye=(t,s,n,l)=>{for(var i=l>1?void 0:l?Xe(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Re(s,n,i),i};let L=class extends p{};L=Ye([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert color="success" icon="circle-check" size="lg" title="Success" closable>
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
</div>`}})})],L);const Ze=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success",closable:""},[a("This is a large closable success alert"),e("div",{slot:"chi-alert__actions"},[e("chi-button",{color:"primary"},"Action")])],-1),ei=e("div",{class:"chi-tab__description"},[e("span",null,[a("Add buttons to an alert by defining "),e("code",null,'slot="chi-alert__actions"'),a(" on each "),e("code",null,"chi-button"),a(".")])],-1),ii=e("div",{class:"chi-tab__description"},[e("span",null,[a("While "),e("code",null,"chi-alert__actions"),a(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),e("code",null,"-lg"),a("."),e("br"),a("Large Alerts have extra "),e("code",null,"chi-alert"),a(" padding, a larger "),e("code",null,"chi-alert__icon"),a(", and a larger "),e("code",null,"chi-alert__close-button"),a(".")])],-1);function ti(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Actionable",titleSize:"h4",id:"bubble_actionable",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[Ze]),"code-webcomponent":h(()=>[ei,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[ii,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ci=m(L,[["render",ti]]);var si=Object.defineProperty,li=Object.getOwnPropertyDescriptor,ai=(t,s,n,l)=>{for(var i=l>1?void 0:l?li(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&si(s,n,i),i};let B=class extends p{};B=ai([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
</div>`}})})],B);const ni=e("chi-alert",{class:"-m--2",type:"banner",icon:"flag"},"This is a base alert",-1),oi=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",type:"banner"},"This is a success alert",-1),ri=e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",type:"banner"},"This is a danger alert",-1),hi=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",type:"banner"},"This is a warning alert",-1),di=e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",type:"banner"},"This is an info alert",-1),_i=e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",type:"banner"},"This is a muted alert",-1);function ui(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Default",titleSize:"h4",id:"banner_default_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[ni,oi,ri,hi,di,_i]),"code-webcomponent":h(()=>[r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pi=m(B,[["render",ui]]);var bi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,vi=(t,s,n,l)=>{for(var i=l>1?void 0:l?mi(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&bi(s,n,i),i};let z=class extends p{};z=vi([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert type="banner" icon="circle-warning" color="danger" center>
  This is a centered danger alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -banner -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`}})})],z);const gi=e("p",{class:"-text"},[e("strong",null,"Note:"),a(" Use sparingly. Centered Banner alerts should only be used to render brief messages. Centered alerts do not support titles.")],-1),fi=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-warning",color:"danger",center:""},"This is a centered danger alert",-1),Ti=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the attribute "),e("code",null,"center"),a(" to center the content of a Banner Alert.")])],-1),wi=e("div",{class:"chi-tab__description"},[e("span",null,[a("Apply the class "),e("code",null,"-center"),a(" to center the content of a Banner Alert.")])],-1);function $i(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Centered",titleSize:"h4",id:"banner_centered_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[gi]),example:h(()=>[fi]),"code-webcomponent":h(()=>[Ti,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[wi,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const yi=m(z,[["render",$i]]);var xi=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,Si=(t,s,n,l)=>{for(var i=l>1?void 0:l?Ci(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&xi(s,n,i),i};let P=class extends p{};P=Si([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
</div>`}})})],P);const Li=e("p",{class:"-text"},"The title will automatically get colored based on the alerts semantic color class. To override the title color, apply a text color utility class.",-1),Bi=e("chi-alert",{class:"-m--2",type:"banner",icon:"flag",title:"Base"},"This is a base alert",-1),zi=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),Pi=e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",title:"danger"},"This is a danger alert",-1),ki=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),Di=e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),Oi=e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1),Wi=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use "),e("code",null,'title=""'),a(" attribute to add a title to an Alert.")])],-1),Mi=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use "),e("code",null,"chi-alert__title"),a(" class to add a title to an Alert.")])],-1);function Ai(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Titled",titleSize:"h4",id:"banner_titled_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[Li]),example:h(()=>[Bi,zi,Pi,ki,Di,Oi]),"code-webcomponent":h(()=>[Wi,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Mi,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ji=m(P,[["render",Ai]]);var Ui=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Ei=(t,s,n,l)=>{for(var i=l>1?void 0:l?Ii(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Ui(s,n,i),i};let k=class extends p{};k=Ei([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
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
</div>`}})})],k);const Ni=e("p",{class:"-text--bold -ml--2"},"sm",-1),Hi=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"sm"},"This is a small success alert",-1),Vi=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"sm",title:"Success"},"This is a small success alert",-1),Fi=e("p",{class:"-text--bold -ml--2"},"md (default)",-1),qi=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success"},"This is a success alert",-1),Gi=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",title:"Success"},"This is a success alert",-1),Ji=e("p",{class:"-text--bold -ml--2"},"lg",-1),Ki=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"lg"},"This is a large success alert",-1),Qi=e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"lg",title:"Success"},"This is a large success alert",-1),Ri=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the "),e("code",null,'size=""'),a(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),a(", "),e("code",null,"md"),a(", and "),e("code",null,"lg"),a(".")])],-1),Xi=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),a(", "),e("code",null,"-md"),a(", and "),e("code",null,"-lg"),a(".")])],-1);function Yi(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Sizes",titleSize:"h4",id:"banner_sizes_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[Ni,Hi,Vi,Fi,qi,Gi,Ji,Ki,Qi]),"code-webcomponent":h(()=>[Ri,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Xi,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Zi=m(k,[["render",Yi]]);var et=Object.defineProperty,it=Object.getOwnPropertyDescriptor,tt=(t,s,n,l)=>{for(var i=l>1?void 0:l?it(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&et(s,n,i),i};let D=class extends p{};D=tt([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- closable -->
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
</div>`}})})],D);const ct=e("p",{class:"-text"},"To allow users to dismiss an alert.",-1),st=e("chi-alert",{class:"-m--2",type:"banner",icon:"warning",color:"warning",closable:""},"This is a closable warning alert",-1),lt=e("chi-alert",{class:"-m--2",type:"banner",color:"warning",icon:"warning",title:"Warning",closable:""},"This is a closable warning alert",-1),at=e("chi-alert",{class:"-m--2",type:"banner",color:"warning",icon:"warning",size:"lg",title:"Warning",closable:""},"This is a large closable warning alert",-1),nt=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use attribute "),e("code",null,"closable"),a(" to render a close button that allows users to dismiss an alert."),e("br"),a("Use attribute "),e("code",null,"mutable"),a(" to remove alert once close buttons is clicked.")])],-1),ot=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the class "),e("code",null,"-close"),a(" and insert a close button "),e("code",null,"chi-alert__close-button"),a(".")])],-1);function rt(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Closable",titleSize:"h4",id:"banner_closable_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[ct]),example:h(()=>[st,lt,at]),"code-webcomponent":h(()=>[nt,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[ot,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ht=m(D,[["render",rt]]);var dt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,ut=(t,s,n,l)=>{for(var i=l>1?void 0:l?_t(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&dt(s,n,i),i};let O=class extends p{};O=ut([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-alert type="banner" icon="flag" size="lg" title="Base" closable>
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
</div>`}})})],O);const pt={class:"-p--1 -bg--grey-20"},bt=e("chi-alert",{class:"-m--2",type:"banner",icon:"flag",size:"lg",title:"Base",closable:""},[a(" This is a large closable alert"),e("chi-button",{color:"primary",slot:"chi-alert__actions"},"Action")],-1),mt=e("div",{class:"chi-tab__description"},[e("span",null,[a("Add buttons to an alert by defining "),e("code",null,'slot="chi-alert__actions"'),a(" on each "),e("code",null,"chi-button"),a(".")])],-1),vt=e("div",{class:"chi-tab__description"},[e("span",null,[a("While "),e("code",null,"chi-alert__actions"),a(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),e("code",null,"-lg"),a("."),e("br"),a("Large Alerts have extra "),e("code",null,"chi-alert"),a(" padding, a larger "),e("code",null,"chi-alert__icon"),a(", and a larger "),e("code",null,"chi-alert__close-button"),a(".")])],-1);function gt(t,s,n,l,i,o){const c=ne,d=g,T=f;return u(),v(T,{title:"Actionable",titleSize:"h4",id:"banner_actionable_lumen_centurylink",padding:"-p--0",tabs:t.exampleTabs},{example:h(()=>[e("div",pt,[r(c,null,{default:h(()=>[bt]),_:1})])]),"code-webcomponent":h(()=>[mt,r(d,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[vt,r(d,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ft=m(O,[["render",gt]]);var Tt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,$t=(t,s,n,l)=>{for(var i=l>1?void 0:l?wt(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Tt(s,n,i),i};let W=class extends p{};W=$t([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
</div>`}})})],W);const yt=e("chi-alert",{class:"-m--2",type:"toast",icon:"flag"},"This is a base alert",-1),xt=e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-check",color:"success"},"This is a success alert",-1),Ct=e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-warning",color:"danger"},"This is a danger alert",-1),St=e("chi-alert",{class:"-m--2",type:"toast",icon:"warning",color:"warning"},"This is a warning alert",-1),Lt=e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-info",color:"info"},"This is an info alert",-1),Bt=e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-info",color:"muted"},"This is a muted alert",-1),zt=e("div",{class:"chi-tab__description"},[e("span",null,[a("To use a toast alert, set the "),e("code",null,"type"),a(" attribute to "),e("code",null,"toast"),a(".")])],-1),Pt=e("div",{class:"chi-tab__description"},[e("span",null,[a("To use a toast alert, apply the class "),e("code",null,"-toast"),a(".")])],-1);function kt(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Default",titleSize:"h4",id:"toast_default_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[yt,xt,Ct,St,Lt,Bt]),"code-webcomponent":h(()=>[zt,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Pt,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Dt=m(W,[["render",kt]]);var Ot=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Mt=(t,s,n,l)=>{for(var i=l>1?void 0:l?Wt(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Ot(s,n,i),i};let M=class extends p{};M=Mt([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
</div>`}})})],M);const At=e("chi-alert",{class:"-m--2",type:"toast",icon:"flag",title:"Base"},"This is a base alert",-1),jt=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),Ut=e("chi-alert",{class:"-m--2",type:"toast",color:"danger",icon:"circle-warning",title:"danger"},"This is a danger alert",-1),It=e("chi-alert",{class:"-m--2",type:"toast",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),Et=e("chi-alert",{class:"-m--2",type:"toast",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),Nt=e("chi-alert",{class:"-m--2",type:"toast",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1);function Ht(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Titled",titleSize:"h4",id:"toast_titled_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[At,jt,Ut,It,Et,Nt]),"code-webcomponent":h(()=>[r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Vt=m(M,[["render",Ht]]);var Ft=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Gt=(t,s,n,l)=>{for(var i=l>1?void 0:l?qt(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Ft(s,n,i),i};let A=class extends p{};A=Gt([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
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
</div>`}})})],A);const Jt=e("p",{class:"-text--bold -ml--2"},"sm",-1),Kt=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),Qt=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),Rt=e("p",{class:"-text--bold -ml--2"},"md (default)",-1),Xt=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check"},"This is a success alert",-1),Yt=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1),Zt=e("p",{class:"-text--bold -ml--2"},"lg",-1),ec=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"lg"},"This is a large success alert",-1),ic=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"lg",title:"Success"},"This is a large success alert",-1),tc=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the "),e("code",null,'size=""'),a(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),a(", "),e("code",null,"md"),a(", and "),e("code",null,"lg"),a(".")])],-1),cc=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),a(", "),e("code",null,"-md"),a(", and "),e("code",null,"-lg"),a(".")])],-1);function sc(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Sizes",titleSize:"h4",id:"toast_sizes_lumen_centurylink",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[Jt,Kt,Qt,Rt,Xt,Yt,Zt,ec,ic]),"code-webcomponent":h(()=>[tc,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[cc,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const lc=m(A,[["render",sc]]);var ac=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,oc=(t,s,n,l)=>{for(var i=l>1?void 0:l?nc(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&ac(s,n,i),i};let j=class extends p{};j=oc([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
</div>`}})})],j);const rc=e("chi-alert",{class:"-m--2",icon:"flag"},"This is a base alert",-1),hc=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),dc=e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning"},"This is a danger alert",-1),_c=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning"},"This is a warning alert",-1),uc=e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info"},"This is an info alert",-1),pc=e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info"},"This is a muted alert",-1),bc=e("div",{class:"chi-tab__description"},[e("span",null,[a("To render an alert use the tag "),e("code",null,"chi-alert"),a(". Use the color attribute to define a semantic color that corresponds to the meaning or value state of your alert. Supported colors include "),e("code",null,"success"),a(", "),e("code",null,"danger"),a(", "),e("code",null,"warning"),a(", "),e("code",null,"info"),a(", and "),e("code",null,"muted"),a(". If no color is defined, alerts will default to the base style which uses the body text color. This is useful for displaying neutral alerts with no specific value state.")])],-1),mc=e("div",{class:"chi-tab__description"},[e("span",null,[a("To render an alert, use the class "),e("code",null,"chi-alert"),a(". Apply a semantic color class that corresponds to the meaning or value state of your alert. Supported classes include "),e("code",null,"-success"),a(", "),e("code",null,"-danger"),a(", "),e("code",null,"-warning"),a(", "),e("code",null,"-info"),a(", and "),e("code",null,"-muted"),a(". If no class is defined, alerts will default to the base style which uses the body text color. This is useful for displaying neutral alerts with no specific value state.")])],-1);function vc(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Default",titleSize:"h4",id:"bubble_default",padding:"-p--1",tabs:t.exampleTabs},{example:h(()=>[rc,hc,dc,_c,uc,pc]),"code-webcomponent":h(()=>[bc,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[mc,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const gc=m(j,[["render",vc]]);var fc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,wc=(t,s,n,l)=>{for(var i=l>1?void 0:l?Tc(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&fc(s,n,i),i};let U=class extends p{};U=wc([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
</div>`}})})],U);const $c=e("p",{class:"-text"},"The title will automatically get colored based on the alerts semantic color class.",-1),yc=e("chi-alert",{class:"-m--2",icon:"flag",title:"Base"},"This is a base alert",-1),xc=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),Cc=e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",title:"danger"},"This is a danger alert",-1),Sc=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),Lc=e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),Bc=e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1),zc=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the "),e("code",null,'title=""'),a(" attribute to display a title above the alert text.")])],-1),Pc=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use "),e("code",null,"chi-alert__title"),a(" to add a title to an Alert. To override the title color, apply a text color utility class.")])],-1);function kc(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Titled",titleSize:"h4",id:"bubble_titled",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[$c]),example:h(()=>[yc,xc,Cc,Sc,Lc,Bc]),"code-webcomponent":h(()=>[zc,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Pc,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Dc=m(U,[["render",kc]]);var Oc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Mc=(t,s,n,l)=>{for(var i=l>1?void 0:l?Wc(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Oc(s,n,i),i};let I=class extends p{};I=Mc([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Base - No semantic color defined -->
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
      </div>`}})})],I);const Ac=e("p",{class:"-text"},"Use the spinner attribute to let users know when information is saving or loading.",-1),jc=e("chi-alert",{class:"-m--2",icon:"flag",spinner:""},"This is a spinner alert",-1),Uc=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",spinner:""},"This is a success alert",-1),Ic=e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-warning",spinner:""},"This is a danger alert",-1),Ec=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",spinner:""},"This is a warning alert",-1),Nc=e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",spinner:""},"This is an info alert",-1),Hc=e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",spinner:""},"This is a muted alert",-1),Vc=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the "),e("code",null,"spinner"),a(" attribute to display a spinner inside the alert.")])],-1),Fc=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use "),e("code",null,"spinner"),a(" to add a spinner to an Alert.")])],-1);function qc(t,s,n,l,i,o){const c=g,d=f;return u(),v(d,{title:"Spinner",titleSize:"h4",id:"bubble_spinner",padding:"-p--1",tabs:t.exampleTabs},{"example-description":h(()=>[Ac]),example:h(()=>[jc,Uc,Ic,Ec,Nc,Hc]),"code-webcomponent":h(()=>[Vc,r(c,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[Fc,r(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Gc=m(I,[["render",qc]]);var Jc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,Qc=(t,s,n,l)=>{for(var i=l>1?void 0:l?Kc(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&Jc(s,n,i),i};let E=class extends p{constructor(){super(...arguments);y(this,"selectedTheme",le())}};E=Qc([b({components:{BubbleDefault:gc,BubbleCenteredLumenCenturyLink:$e,BubbleTitled:Dc,BubbleSizesLumenCenturyLink:Ue,BubbleClosableLumenCenturyLink:Qe,BubbleActionable:ci,BannerDefaultLumenCenturyLink:pi,BannerCenteredLumenCenturyLink:yi,BannerTitledLumenCenturyLink:ji,BannerSizesLumenCenturyLink:Zi,BannerClosableLumenCenturyLink:ht,BannerActionableLumenCenturyLink:ft,ToastDefaultLumenCenturyLink:Dt,ToastTitledLumenCenturyLink:Vt,ToastSizesLumenCenturyLink:lc,BubbleSizesPortal:oe,BubbleClosablePortal:re,BubbleSpinner:Gc}})],E);const Rc=e("h2",null,"Examples",-1),Xc=e("h3",null,"Bubble",-1),Yc=e("p",{class:"-text"},"Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas. They are Chi's default Alert type.",-1),Zc={key:0},es=e("div",{class:"chi-divider -my--6 -bt--2"},null,-1),is=e("h3",null,"Banner",-1),ts=e("p",{class:"-text"},"Banner alerts are commonly presented above or below the Header component and are used for scenarios such as reminding new users to confirm their email address or notifying users when they are experiencing connectivity issues.",-1),cs=e("div",{class:"chi-divider -my--6 -bt--2"},null,-1),ss=e("h3",null,"Toast",-1),ls=e("p",{class:"-text"},"Toasts are unobtrusive alerts used to display brief, auto-expiring information.",-1),as={key:1};function ns(t,s,n,l,i,o){const c=_("BubbleDefault"),d=_("BubbleCenteredLumenCenturyLink"),T=_("BubbleTitled"),w=_("BubbleSpinner"),F=_("BubbleSizesLumenCenturyLink"),q=_("BubbleClosableLumenCenturyLink"),H=_("BubbleActionable"),G=_("BannerDefaultLumenCenturyLink"),J=_("BannerCenteredLumenCenturyLink"),K=_("BannerTitledLumenCenturyLink"),Q=_("BannerSizesLumenCenturyLink"),R=_("BannerClosableLumenCenturyLink"),X=_("BannerActionableLumenCenturyLink"),Y=_("ToastDefaultLumenCenturyLink"),Z=_("ToastTitledLumenCenturyLink"),ee=_("ToastSizesLumenCenturyLink"),ie=_("BubbleSizesPortal"),te=_("BubbleClosablePortal");return u(),$("div",null,[Rc,Xc,Yc,r(c),["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(u(),$("div",Zc,[r(d),r(T),r(w),r(F),r(q),r(H),es,is,ts,r(G),r(J),r(K),r(Q),r(R),r(X),cs,ss,ls,r(Y),r(Z),r(ee)])):V("",!0),["portal","portalrebrand24"].includes(t.selectedTheme)?(u(),$("div",as,[r(T),r(w),r(ie),r(te),r(H)])):V("",!0)])}const os=m(E,[["render",ns]]);var rs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,ds=(t,s,n,l)=>{for(var i=l>1?void 0:l?hs(s,n):s,o=t.length-1,c;o>=0;o--)(c=t[o])&&(i=(l?c(s,n,i):c(i))||i);return l&&i&&rs(s,n,i),i};let N=class extends p{constructor(){super(...arguments);y(this,"pageTabs",_e)}};N=ds([b({components:{Accessibility:de,Examples:os,Properties:he}})],N);const _s={class:"chi-grid__container -pt--3"},us={class:"chi-tabs-panel -active",id:"examples"},ps={class:"chi-tabs-panel",id:"properties"},bs={class:"chi-tabs-panel",id:"accessibility"};function ms(t,s,n,l,i,o){const c=ue,d=_("Examples"),T=_("Properties"),w=_("Accessibility");return u(),$(ae,null,[r(c,{title:"Alert",description:"Alert messages provide contextual feedback for user actions.",tabs:t.pageTabs},null,8,["tabs"]),e("div",_s,[e("div",us,[r(d)]),e("div",ps,[r(T)]),e("div",bs,[r(w)])])],64)}const Xs=m(N,[["render",ms]]);export{Xs as default};
