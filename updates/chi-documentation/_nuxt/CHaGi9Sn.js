var C=Object.defineProperty;var D=(s,a,l)=>a in s?C(s,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[a]=l;var $=(s,a,l)=>D(s,typeof a!="symbol"?a+"":a,l);import{V as _,N as v}from"./uJTUijt2.js";import{_ as S}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{o as u,f as P,w as p,b as n,a as t,d,r as m,c as y}from"./B5CYXVwa.js";import{_ as b}from"./DlAUqK2U.js";import T from"./B4XUTSM3.js";import E from"./C2SviwtV.js";import{s as j}from"./2EwpEKcw.js";import{_ as W}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var N=Object.defineProperty,V=Object.getOwnPropertyDescriptor,A=(s,a,l,r)=>{for(var e=r>1?void 0:r?V(a,l):a,c=s.length-1,o;c>=0;c--)(o=s[c])&&(e=(r?o(a,l,e):o(e))||e);return r&&e&&N(a,l,e),e};let h=class extends _{};h=A([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- 0% -->
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
<progress aria-labelledby="example-3" value="100" max="100"></progress>`}})})],h);const H=t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"0%"),t("chi-progress",{value:"0",max:"100"})],-1),L=t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"50%"),t("chi-progress",{value:"50",max:"100"})],-1),M=t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"100%"),t("chi-progress",{value:"100",max:"100"})],-1),U=t("div",{class:"chi-tab__description"},[d("To render a progress element, use the "),t("code",null,"progress"),d(" HTML5 tag. Set the value attribute to indicate the current progress.")],-1);function q(s,a,l,r,e,c){const o=S,i=w;return u(),P(i,{title:"Base",id:"base",tabs:s.exampleTabs},{example:p(()=>[H,L,M]),"code-webcomponent":p(()=>[n(o,{class:"html",lang:"html",code:s.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[U,n(o,{lang:"html",code:s.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const z=b(h,[["render",q]]);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,I=(s,a,l,r)=>{for(var e=r>1?void 0:r?G(a,l):a,c=s.length-1,o;c>=0;c--)(o=s[c])&&(e=(r?o(a,l,e):o(e))||e);return r&&e&&F(a,l,e),e};let g=class extends _{};g=I([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Success -->
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
<progress aria-labelledby="example-7" class="-danger" value="25" max="100"></progress>`}})})],g);const J=t("p",{class:"-text"},[d("Use semantic colors to communicate meaning to users. Use green ("),t("code",null,"-success"),d(") for positive, blue (base state) for informative, red ("),t("code",null,"-danger"),d(") for negative, and yellow ("),t("code",null,"-warning"),d(") for needs attention.")],-1),K=t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"Success"),t("chi-progress",{value:"75",max:"100",state:"success"})],-1),Q=t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"Warning"),t("chi-progress",{value:"50",max:"100",state:"warning"})],-1),R=t("div",{class:"-py--2"},[t("div",{class:"chi-label"},"Danger"),t("chi-progress",{value:"25",max:"100",state:"danger"})],-1);function X(s,a,l,r,e,c){const o=S,i=w;return u(),P(i,{title:"Semantic States",id:"semantic_states",tabs:s.exampleTabs},{"example-description":p(()=>[J]),example:p(()=>[K,Q,R]),"code-webcomponent":p(()=>[n(o,{class:"html",lang:"html",code:s.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[n(o,{class:"html",lang:"html",code:s.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=b(g,[["render",X]]);var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,ee=(s,a,l,r)=>{for(var e=r>1?void 0:r?k(a,l):a,c=s.length-1,o;c>=0;c--)(o=s[c])&&(e=(r?o(a,l,e):o(e))||e);return r&&e&&Z(a,l,e),e};let x=class extends _{};x=ee([v({components:{BaseExample:z,SemanticStates:Y}})],x);const se=t("h2",null,"Examples",-1);function ae(s,a,l,r,e,c){const o=m("BaseExample"),i=m("SemanticStates");return u(),y("div",null,[se,n(o),n(i)])}const te=b(x,[["render",ae]]);var oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,re=(s,a,l,r)=>{for(var e=r>1?void 0:r?le(a,l):a,c=s.length-1,o;c>=0;c--)(o=s[c])&&(e=(r?o(a,l,e):o(e))||e);return r&&e&&oe(a,l,e),e};let f=class extends _{constructor(){super(...arguments);$(this,"pageTabs",j)}};f=re([v({components:{Accessibility:E,Examples:te,Properties:T}})],f);const ce={class:"chi-grid__container -pt--3"},ne={class:"chi-tabs-panel -active",id:"examples"},ie={class:"chi-tabs-panel",id:"properties"},pe={class:"chi-tabs-panel",id:"accessibility"};function de(s,a,l,r,e,c){const o=W,i=m("Examples"),O=m("Properties"),B=m("Accessibility");return u(),y("div",null,[n(o,{title:"Progress",description:"Use progress to display the status of a task or process.",tabs:s.pageTabs},null,8,["tabs"]),t("div",ce,[t("div",ne,[n(i)]),t("div",ie,[n(O)]),t("div",pe,[n(B)])])])}const Te=b(f,[["render",de]]);export{Te as default};
