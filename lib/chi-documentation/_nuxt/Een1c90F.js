import{V as b,N as d}from"./NAah3XrW.js";import{_ as h}from"./onyWiYp2.js";import{_ as y}from"./CAQzZ0uH.js";import{o as x,h as f,w as l,a as t,b as m,d as p}from"./CEIPSiTs.js";import{_}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,S=(n,e,s,a)=>{for(var o=a>1?void 0:a?P(e,s):e,i=n.length-1,r;i>=0;i--)(r=n[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&v(e,s,o),o};let c=class extends b{};c=S([d({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Primary -->
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
<input class="chi-button -primary" type="submit" value="Submit button">`}})})],c);function w(n,e,s,a,o,i){const r=h,u=y;return x(),f(u,{titleSize:"h2",title:"Examples",id:"examples-portal",tabs:n.exampleTabs},{"example-description":l(()=>e[0]||(e[0]=[t("p",{class:"-text -mb--3 -text"},"Use the primary button example for high emphasis actions, secondary button example for medium emphasis actions, and tertiary button example for low emphasis actions.",-1)])),example:l(()=>e[1]||(e[1]=[t("div",{class:"chi-form__item"},[t("div",{class:"-d--flex -align-items--center"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary"},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",null,"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{size:"xs"},"Tertiary")])])],-1)])),"code-webcomponent":l(()=>[m(r,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[e[2]||(e[2]=t("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),t("code",null,"<button>"),p(", "),t("code",null,"<a>"),p(" and "),t("code",null,"<input>"),p(" elements.")],-1)),m(r,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const z=_(c,[["render",w]]);export{z as default};
