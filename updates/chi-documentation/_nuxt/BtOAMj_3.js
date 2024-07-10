import{V as b,N as d}from"./uJTUijt2.js";import{_ as h}from"./D8GK0F__.js";import{_}from"./DKu8Jd2y.js";import{o as y,f as x,w as c,b as m,a as t,d as l}from"./B5CYXVwa.js";import{_ as f}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,S=(o,a,s,r)=>{for(var e=r>1?void 0:r?P(a,s):a,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=(r?n(a,s,e):n(e))||e);return r&&e&&v(a,s,e),e};let p=class extends b{};p=S([d({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Primary -->
<chi-button color="primary">Primary</chi-button>
<!-- Secondary -->
<chi-button>Secondary</chi-button>
<!-- Tertiary -->
<chi-button size="xs">Tertiary</chi-button>`,htmlblueprint:`<!-- Primary -->
<button class="chi-button -primary">Primary</button>
<!-- Secondary -->
<button class="chi-button">Secondary</button>
<!-- Tertiary -->
<button class="chi-button -xs">Tertiary</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary" href="#" role="button">Link button</a>
<input class="chi-button -primary" type="button" value="Input button">
<input class="chi-button -primary" type="submit" value="Submit button">`}})})],p);const w=t("p",{class:"-text -mb--3 -text"},"Use the primary button example for high emphasis actions, secondary button example for medium emphasis actions, and tertiary button example for low emphasis actions.",-1),T=t("div",{class:"chi-form__item"},[t("div",{class:"-d--flex -align-items--center"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary"},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",null,"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{size:"xs"},"Tertiary")])])],-1),C=t("div",{class:"p--text chi-tab__description"},[l("Chi supports button classes on "),t("code",null,"<button>"),l(", "),t("code",null,"<a>"),l(" and "),t("code",null,"<input>"),l(" elements.")],-1);function B(o,a,s,r,e,i){const n=h,u=_;return y(),x(u,{titleSize:"h2",title:"Examples",id:"examples-portal",tabs:o.exampleTabs},{"example-description":c(()=>[w]),example:c(()=>[T]),"code-webcomponent":c(()=>[m(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[C,m(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const L=f(p,[["render",B]]);export{L as default};
