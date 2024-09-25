import{V as p,N as m}from"./NAah3XrW.js";import{_}from"./onyWiYp2.js";import{_ as b}from"./CAQzZ0uH.js";import{o as v,h as S,w as n,a as e,d as i,b as h}from"./CEIPSiTs.js";import{_ as T}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var f=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=(l,s,r,a)=>{for(var c=a>1?void 0:a?z(s,r):s,o=l.length-1,t;o>=0;o--)(t=l[o])&&(c=(a?t(s,r,c):t(c))||c);return a&&c&&f(s,r,c),c};let d=class extends p{};d=x([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
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
</div>`}})})],d);function k(l,s,r,a,c,o){const t=_,u=b;return v(),S(u,{title:"Sizes",titleSize:"h4",id:"bubble_sizes_portal",padding:"-p--1",tabs:l.exampleTabs},{example:n(()=>s[0]||(s[0]=[e("p",{class:"-text--bold -ml--2"},"sm",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),e("p",{class:"-text--bold -ml--2"},"md (default)",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1)])),"code-webcomponent":n(()=>[s[1]||(s[1]=e("div",{class:"chi-tab__description"},[e("span",null,[i("Use the "),e("code",null,'size=""'),i(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),i(" and "),e("code",null,"md"),i(".")])],-1)),h(t,{lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s[2]||(s[2]=e("div",{class:"chi-tab__description"},[e("span",null,[i("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),i(" and "),e("code",null,"-md"),i(".")])],-1)),h(t,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const g=T(d,[["render",k]]);export{g as default};
