import{V as _,N as p}from"./uJTUijt2.js";import{_ as m}from"./D8GK0F__.js";import{_ as b}from"./DKu8Jd2y.js";import{o as v,f as S,w as n,b as d,a as e,d as i}from"./B5CYXVwa.js";import{_ as T}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var f=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=(c,t,o,a)=>{for(var s=a>1?void 0:a?z(t,o):t,r=c.length-1,l;r>=0;r--)(l=c[r])&&(s=(a?l(t,o,s):l(s))||s);return a&&s&&f(t,o,s),s};let h=class extends _{};h=x([p({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Small -->
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
</div>`}})})],h);const k=e("p",{class:"-text--bold -ml--2"},"sm",-1),w=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),B=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),P=e("p",{class:"-text--bold -ml--2"},"md (default)",-1),C=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),M=e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1),N=e("div",{class:"chi-tab__description"},[e("span",null,[i("Use the "),e("code",null,'size=""'),i(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),i(" and "),e("code",null,"md"),i(".")])],-1),V=e("div",{class:"chi-tab__description"},[e("span",null,[i("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),i(" and "),e("code",null,"-md"),i(".")])],-1);function $(c,t,o,a,s,r){const l=m,u=b;return v(),S(u,{title:"Sizes",titleSize:"h4",id:"bubble_sizes_portal",padding:"-p--1",tabs:c.exampleTabs},{example:n(()=>[k,w,B,P,C,M]),"code-webcomponent":n(()=>[N,d(l,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[V,d(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=T(h,[["render",$]]);export{W as default};
