var C=Object.defineProperty;var D=(a,e,r)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var $=(a,e,r)=>D(a,typeof e!="symbol"?e+"":e,r);import{V as v,N as b}from"./NAah3XrW.js";import{_ as S}from"./onyWiYp2.js";import{_ as w}from"./CAQzZ0uH.js";import{o as u,h as P,w as p,a as t,b as n,d as m,m as d,c as y}from"./CEIPSiTs.js";import{_ as g}from"./DlAUqK2U.js";import T from"./M5SEwC-y.js";import E from"./DUQ3iASc.js";import{s as j}from"./DtNz156Q.js";import{_ as W}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var N=Object.defineProperty,V=Object.getOwnPropertyDescriptor,A=(a,e,r,o)=>{for(var s=o>1?void 0:o?V(e,r):e,i=a.length-1,l;i>=0;i--)(l=a[i])&&(s=(o?l(e,r,s):l(s))||s);return o&&s&&N(e,r,s),s};let h=class extends v{};h=A([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- 0% -->
<div class="chi-label">0%</div>
<chi-progress value="0" max="100"></chi-progress>

<!-- 50% -->
<div class="chi-label">50%</div>
<chi-progress value="50" max="100"></chi-progress>

<!-- 100% -->
<div class="chi-label">100%</div>
<chi-progress value="100" max="100"></chi-progress>`,htmlblueprint:`<!-- 0% -->
<div class="chi-label" id="example-1">0%</div>
<progress aria-labelledby="example-1" value="0" max="100"></progress>

<!-- 50% -->
<div class="chi-label" id="example-2">50%</div>
<progress aria-labelledby="example-2" value="50" max="100"></progress>

<!-- 100% -->
<div class="chi-label" id="example-3">100%</div>
<progress aria-labelledby="example-3" value="100" max="100"></progress>`}})})],h);function H(a,e,r,o,s,i){const l=S,c=w;return u(),P(c,{title:"Base",id:"base",tabs:a.exampleTabs},{example:p(()=>e[0]||(e[0]=[t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"0%"),t("chi-progress",{value:"0",max:"100"})],-1),t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"50%"),t("chi-progress",{value:"50",max:"100"})],-1),t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"100%"),t("chi-progress",{value:"100",max:"100"})],-1)])),"code-webcomponent":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description"},[m("To render a progress element, use the "),t("code",null,"progress"),m(" HTML5 tag. Set the value attribute to indicate the current progress.")],-1)),n(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const L=g(h,[["render",H]]);var M=Object.defineProperty,U=Object.getOwnPropertyDescriptor,q=(a,e,r,o)=>{for(var s=o>1?void 0:o?U(e,r):e,i=a.length-1,l;i>=0;i--)(l=a[i])&&(s=(o?l(e,r,s):l(s))||s);return o&&s&&M(e,r,s),s};let _=class extends v{};_=q([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Success -->
<div class="chi-label">Success</div>
<chi-progress value="75" max="100" state="success"></chi-progress>

<!-- Warning -->
<div class="chi-label">Warning</div>
<chi-progress value="50" max="100" state="warning"></chi-progress>

<!-- Danger -->
<div class="chi-label">Danger</div>
<chi-progress value="25" max="100" state="danger"></chi-progress>`,htmlblueprint:`<!-- Success -->
<div class="chi-label" id="example-5">Success</div>
<progress aria-labelledby="example-5" class="-success" value="75" max="100"></progress>

<!-- Warning -->
<div class="chi-label" id="example-6">Warning</div>
<progress aria-labelledby="example-6" class="-warning" value="50" max="100"></progress>

<!-- Danger -->
<div class="chi-label" id="example-7">Danger</div>
<progress aria-labelledby="example-7" class="-danger" value="25" max="100"></progress>`}})})],_);function z(a,e,r,o,s,i){const l=S,c=w;return u(),P(c,{title:"Semantic States",id:"semantic_states",tabs:a.exampleTabs},{"example-description":p(()=>e[0]||(e[0]=[t("p",{class:"-text"},[m("Use semantic colors to communicate meaning to users. Use green ("),t("code",null,"-success"),m(") for positive, blue (base state) for informative, red ("),t("code",null,"-danger"),m(") for negative, and yellow ("),t("code",null,"-warning"),m(") for needs attention.")],-1)])),example:p(()=>e[1]||(e[1]=[t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"Success"),t("chi-progress",{value:"75",max:"100",state:"success"})],-1),t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"Warning"),t("chi-progress",{value:"50",max:"100",state:"warning"})],-1),t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"Danger"),t("chi-progress",{value:"25",max:"100",state:"danger"})],-1)])),"code-webcomponent":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const F=g(_,[["render",z]]);var G=Object.defineProperty,I=Object.getOwnPropertyDescriptor,J=(a,e,r,o)=>{for(var s=o>1?void 0:o?I(e,r):e,i=a.length-1,l;i>=0;i--)(l=a[i])&&(s=(o?l(e,r,s):l(s))||s);return o&&s&&G(e,r,s),s};let x=class extends v{};x=J([b({components:{BaseExample:L,SemanticStates:F}})],x);function K(a,e,r,o,s,i){const l=d("BaseExample"),c=d("SemanticStates");return u(),y("div",null,[e[0]||(e[0]=t("h2",null,"Examples",-1)),n(l),n(c)])}const Q=g(x,[["render",K]]);var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(a,e,r,o)=>{for(var s=o>1?void 0:o?X(e,r):e,i=a.length-1,l;i>=0;i--)(l=a[i])&&(s=(o?l(e,r,s):l(s))||s);return o&&s&&R(e,r,s),s};let f=class extends v{constructor(){super(...arguments);$(this,"pageTabs",j)}};f=Y([b({components:{Accessibility:E,Examples:Q,Properties:T}})],f);const Z={class:"chi-grid__container -pt--3"},k={class:"chi-tabs-panel -active",id:"examples"},ee={class:"chi-tabs-panel",id:"properties"},se={class:"chi-tabs-panel",id:"accessibility"};function ae(a,e,r,o,s,i){const l=W,c=d("Examples"),O=d("Properties"),B=d("Accessibility");return u(),y("div",null,[n(l,{title:"Progress",description:"Use progress to display the status of a task or process.",tabs:a.pageTabs},null,8,["tabs"]),t("div",Z,[t("div",k,[n(c)]),t("div",ee,[n(O)]),t("div",se,[n(B)])])])}const $e=g(f,[["render",ae]]);export{$e as default};
