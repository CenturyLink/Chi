var f=Object.defineProperty;var _=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>_(o,typeof e!="symbol"?e+"":e,t);import{V as d,N as h}from"./uJTUijt2.js";import{_ as b}from"./drvuhYu1.js";import{_ as v}from"./D8GK0F__.js";import{o as x,c as y,b as m,F as w,a as n,d as c}from"./B5CYXVwa.js";import{_ as C}from"./DlAUqK2U.js";import"./C-hgEc7b.js";var T=Object.defineProperty,$=Object.getOwnPropertyDescriptor,N=(o,e,t,l)=>{for(var s=l>1?void 0:l?$(e,t):e,i=o.length-1,r;i>=0;i--)(r=o[i])&&(s=(l?r(e,t,s):r(s))||s);return l&&s&&T(e,t,s),s};let p=class extends d{constructor(){super(...arguments);a(this,"codeSnippets",{htmlblueprint:`@import 'components/icons/webfont-font-face';
:host(chi-icon) {
@import '../../global/styles/common';
@extend %root-typography;
@import 'components/icons/icons';
@import 'components/icons/webfont-icons';

display: inline-block;
}`})}};p=N([h({})],p);const S=n("ul",{class:"-text"},[n("li",null,"Components MIGHT have a *.scss file that will import the necessary files from the project"),n("li",null,[c("All rules but font-face ones MUST be wrapped inside a "),n("code",null,":host"),c(" rule to override a possible Chi default stylesheet")]),n("li",null,[c("The default display for Custom Elements is "),n("code",null,"inline"),c(" so the developer MUST take care of this.")])],-1);function V(o,e,t,l,s,i){const r=b,u=v;return x(),y(w,null,[m(r,{title:"Rules",id:"rules",titleSize:"h3"}),S,m(u,{id:"rules",code:o.codeSnippets.htmlblueprint},null,8,["code"])],64)}const D=C(p,[["render",V]]);export{D as default};
