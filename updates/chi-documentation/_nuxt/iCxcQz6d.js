var u=Object.defineProperty;var b=(t,e,s)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>b(t,typeof e!="symbol"?e+"":e,s);import{V as x,N as f}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{o as i,f as v,w as p,a as h,c as d,i as $,n as C,t as T,F as B,b as S}from"./B5CYXVwa.js";import{_ as N}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,V=(t,e,s,r)=>{for(var o=r>1?void 0:r?P(e,s):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(r?n(e,s,o):n(o))||o);return r&&o&&O(e,s,o),o};let m=class extends x{constructor(){super(...arguments);l(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"weights",["thin","normal","semi-bold","bold","bolder","boldest"])}get codeSnippets(){return{htmlblueprint:this.generateHtml()}}generateHtml(){return this.weights.map(s=>`<p class="-text--${s}">This text will render as ${s}</p>`).join(`
`)}};m=V([f({})],m);const j=h("p",{class:"-text"},"Change text weight to thin, normal, semi-bold, bold, bolder, or boldest.",-1),D={class:"-m--3"};function H(t,e,s,r,o,a){const n=g,_=w;return i(),v(_,{padding:"-p--0",title:"Text weight",id:"text-weight",titleSize:"h2",tabs:t.exampleTabs,showSnippetTabs:!1},{"example-description":p(()=>[j]),example:p(()=>[h("div",D,[(i(!0),d(B,null,$(t.weights,c=>(i(),d("p",{class:C(["-text",`-text--${c}`])},"This text will render as "+T(c),3))),256))])]),"code-htmlblueprint":p(()=>[S(n,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const I=N(m,[["render",H]]);export{I as default};
