var h=Object.defineProperty;var u=(t,e,o)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var d=(t,e,o)=>u(t,typeof e!="symbol"?e+"":e,o);import{V as f,N as _}from"./uJTUijt2.js";import{_ as g}from"./drvuhYu1.js";import{_ as b}from"./D8GK0F__.js";import{o as x,c as v,b as a,F as y,a as r,d as m}from"./B5CYXVwa.js";import{_ as w}from"./DlAUqK2U.js";import"./C-hgEc7b.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,N=(t,e,o,s)=>{for(var i=s>1?void 0:s?T(e,o):e,c=t.length-1,n;c>=0;c--)(n=t[c])&&(i=(s?n(e,o,i):n(i))||i);return s&&i&&S(e,o,i),i};let l=class extends f{constructor(){super(...arguments);d(this,"codeSnippets",{htmlblueprint:`<chi-button>
<chi-header>`,htmlblueprint1:`<chi-card>
<chi-card-header>
<chi-card-content>`})}};l=N([_({})],l);const z=r("p",{class:"-text"},'The prefix has a major role when you are creating a collection of components intended to be used across different projects. Web Components are not scoped because they are globally declared within the webpage, which means a "unique" prefix is needed to prevent collisions and can help to quickly identify the collection. Additionally, web components are required to contain a "-" dash within the tag name, so using the first section to namespace your components is a natural fit.',-1),C=r("p",{class:"-text"},[m("Tag prefix must be "),r("code",null,"chi"),m(":")],-1),O=r("p",{class:"-text"},'Components are not actions, they are conceptually "things". It is better to use nouns instead of verbs, such as "animation" instead of "animating". Here are some good examples of component names: "input", "tab", "nav", and "menu".',-1),P=r("p",{class:"-text"},"When several components are related and/or coupled, it is a good practice to use common naming with different modifiers, for example:",-1);function V(t,e,o,s,i,c){const n=g,p=b;return x(),v(y,null,[a(n,{title:"Naming",id:"naming",titleSize:"h2"}),a(n,{title:"HTML tag",id:"html-tag",titleSize:"h3"}),a(n,{title:"PREFIX",id:"prefix",titleSize:"h4"}),z,C,a(p,{id:"prefix",code:t.codeSnippets.htmlblueprint,lang:"html"},null,8,["code"]),a(n,{title:"NAME",id:"name",titleSize:"h4"}),O,a(n,{title:"MODIFIERS",id:"modifiers",titleSize:"h4"}),P,a(p,{id:"modifier",code:t.codeSnippets.htmlblueprint1,lang:"html"},null,8,["code"])],64)}const q=w(l,[["render",V]]);export{q as default};
