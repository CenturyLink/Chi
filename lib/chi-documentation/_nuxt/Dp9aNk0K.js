import{V as u,N as h}from"./NAah3XrW.js";import{_ as m}from"./onyWiYp2.js";import{_}from"./CAQzZ0uH.js";import{o as w,h as g,w as r,a as l,d as i,b as p}from"./CEIPSiTs.js";import{_ as v}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,C=(a,e,s,n)=>{for(var t=n>1?void 0:n?x(e,s):e,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&f(e,s,t),t};let b=class extends u{};b=C([h({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- closable -->
<chi-alert color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
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
</div>`}})})],b);function T(a,e,s,n,t,c){const o=m,d=_;return w(),g(d,{title:"Closable",titleSize:"h4",id:"bubble_closable_portal",padding:"-p--1",tabs:a.exampleTabs},{"example-description":r(()=>e[0]||(e[0]=[l("p",{class:"-text"},"To allow users to dismiss an alert.",-1)])),example:r(()=>e[1]||(e[1]=[l("chi-alert",{class:"-m--2",color:"warning",icon:"warning",closable:""},"This is a closable warning alert",-1),l("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"Warning",closable:""},"This is a closable warning alert",-1)])),"code-webcomponent":r(()=>[e[2]||(e[2]=l("div",{class:"chi-tab__description"},[l("span",null,[i("Use attribute "),l("code",null,"closable"),i(" to render a close button that allows users to dismiss an alert."),l("br"),i("Use attribute "),l("code",null,"mutable"),i(" to remove alert once close buttons is clicked.")])],-1)),p(o,{lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[e[3]||(e[3]=l("div",{class:"chi-tab__description"},[l("span",null,[i("Use the class "),l("code",null,"-close"),i(" and insert a close button "),l("code",null,"chi-alert__close-button"),i(".")])],-1)),p(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const j=v(b,[["render",T]]);export{j as default};
