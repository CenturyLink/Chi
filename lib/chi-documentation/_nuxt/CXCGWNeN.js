import{V as u,N as m}from"./NAah3XrW.js";import{_ as h}from"./onyWiYp2.js";import{_ as y}from"./CAQzZ0uH.js";import{o as f,h as x,w as n,a as t,d as b,b as c}from"./CEIPSiTs.js";import{_}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,S=(a,e,r,i)=>{for(var o=i>1?void 0:i?P(e,r):e,l=a.length-1,s;l>=0;l--)(s=a[l])&&(o=(i?s(e,r,o):s(o))||o);return i&&o&&v(e,r,o),o};let d=class extends u{};d=S([m({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Primary -->
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
<button class="chi-button -xs -disabled">Tertiary</button>`}})})],d);function T(a,e,r,i,o,l){const s=h,p=y;return f(),x(p,{titleSize:"h2",title:"Disabled",id:"disabled-portal",tabs:a.exampleTabs},{"example-description":n(()=>e[0]||(e[0]=[t("p",{class:"-text"},[b("Make buttons appear inactive by adding the "),t("code",null,"disabled"),b(" boolean attribute or "),t("code",null,"-disabled"),b(" class.")],-1)])),example:n(()=>e[1]||(e[1]=[t("div",{class:"-d--flex -align-items--center"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",disabled:""},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",{disabled:""},"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{size:"xs",disabled:""},"Tertiary")])],-1)])),"code-webcomponent":n(()=>[c(s,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[c(s,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const z=_(d,[["render",T]]);export{z as default};
