import{V as u,N as m}from"./uJTUijt2.js";import{_ as h}from"./D8GK0F__.js";import{_}from"./DKu8Jd2y.js";import{o as y,f as x,w as l,b,a as t,d as c}from"./B5CYXVwa.js";import{_ as f}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,S=(o,s,i,n)=>{for(var e=n>1?void 0:n?P(s,i):s,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(n?a(s,i,e):a(e))||e);return n&&e&&v(s,i,e),e};let d=class extends u{};d=S([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Primary -->
<chi-button color="primary" disabled>Primary</chi-button>
<!-- Secondary -->
<chi-button disabled>Secondary</chi-button>
<!-- Tertiary -->
<chi-button size="xs" disabled>Tertiary</chi-button>`,htmlblueprint:`<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Primary</button>
<button class="chi-button" disabled>Secondary</button>
<button class="chi-button -xs" disabled>Tertiary</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Primary</button>
<button class="chi-button -disabled">Secondary</button>
<button class="chi-button -xs -disabled">Tertiary</button>`}})})],d);const T=t("p",{class:"-text"},[c("Make buttons appear inactive by adding the "),t("code",null,"disabled"),c(" boolean attribute or "),t("code",null,"-disabled"),c(" class.")],-1),w=t("div",{class:"-d--flex -align-items--center"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",disabled:""},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",{disabled:""},"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{size:"xs",disabled:""},"Tertiary")])],-1);function D(o,s,i,n,e,r){const a=h,p=_;return y(),x(p,{titleSize:"h2",title:"Disabled",id:"disabled-portal",tabs:o.exampleTabs},{"example-description":l(()=>[T]),example:l(()=>[w]),"code-webcomponent":l(()=>[b(a,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[b(a,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const M=f(d,[["render",D]]);export{M as default};
