import{V as _,N as h}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as m}from"./DKu8Jd2y.js";import{o as w,f as g,w as r,b as d,a as e,d as a}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,C=(l,i,s,n)=>{for(var t=n>1?void 0:n?f(i,s):i,c=l.length-1,o;c>=0;c--)(o=l[c])&&(t=(n?o(i,s,t):o(t))||t);return n&&t&&x(i,s,t),t};let b=class extends _{};b=C([h({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- closable -->
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
</div>`}})})],b);const T=e("p",{class:"-text"},"To allow users to dismiss an alert.",-1),B=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",closable:""},"This is a closable warning alert",-1),P=e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"Warning",closable:""},"This is a closable warning alert",-1),N=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use attribute "),e("code",null,"closable"),a(" to render a close button that allows users to dismiss an alert."),e("br"),a("Use attribute "),e("code",null,"mutable"),a(" to remove alert once close buttons is clicked.")])],-1),V=e("div",{class:"chi-tab__description"},[e("span",null,[a("Use the class "),e("code",null,"-close"),a(" and insert a close button "),e("code",null,"chi-alert__close-button"),a(".")])],-1);function $(l,i,s,n,t,c){const o=u,p=m;return w(),g(p,{title:"Closable",titleSize:"h4",id:"bubble_closable_portal",padding:"-p--1",tabs:l.exampleTabs},{"example-description":r(()=>[T]),example:r(()=>[B,P]),"code-webcomponent":r(()=>[N,d(o,{lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[V,d(o,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const H=v(b,[["render",$]]);export{H as default};
