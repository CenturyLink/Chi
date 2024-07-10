var f=Object.defineProperty;var w=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>w(e,typeof t!="symbol"?t+"":t,o);import{V as v,N as C}from"./uJTUijt2.js";import{_ as b}from"./D8GK0F__.js";import{_ as x}from"./DKu8Jd2y.js";import{o as s,f as y,w as p,a as g,c as m,i as d,F as h,b as $}from"./B5CYXVwa.js";import{_ as H}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var B=Object.defineProperty,L=Object.getOwnPropertyDescriptor,O=(e,t,o,r)=>{for(var n=r>1?void 0:r?L(t,o):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&B(t,o,n),n};let u=class extends v{constructor(){super(...arguments);a(this,"grid2Columns",Array(2).fill("chi-col"));a(this,"grid4Columns",Array(4).fill("chi-col"));a(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}])}get codeSnippets(){return{htmlblueprint3Cols:this.generateHtml()}}generateHtml(){return`<div class="chi-grid">

  <!-- first 12 column units -->
${this.generateHtmlList(this.grid4Columns,"3")}

  <!-- ... and another row consisting of 12 more units -->
${this.generateHtmlList(this.grid2Columns,"6")}

</div>`}generateHtmlList(o,r){return`${o.map(()=>`  <div class="chi-col -w--${r}"></div>`).join(`
`)}`}};u=O([C({})],u);const N=g("p",{class:"-text"},"Grid containers can accommodate any number of columns, however, the grid system is restricted to a maximum of 12 column units per row. Overflowing the 12 column units will automatically wrap additional columns onto a new row. For example, the following layout is the result of having 24 column units in a single container:",-1),P={class:"chi-grid -mb--2 -show--example"};function S(e,t,o,r,n,l){const i=b,_=x;return s(),y(_,{title:"Column Wrapping",id:"column-wrapping",tabs:e.exampleTabs,showSnippetTabs:!1,padding:"-p--0",additionalStyle:"border: none;"},{"example-description":p(()=>[N]),example:p(()=>[g("div",P,[(s(!0),m(h,null,d(e.grid4Columns,c=>(s(),m("div",{class:"chi-col -w--3",key:c}))),128)),(s(!0),m(h,null,d(e.grid2Columns,c=>(s(),m("div",{class:"chi-col -w--6",key:c}))),128))])]),"code-htmlblueprint":p(()=>[$(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint3Cols},null,8,["code"])]),_:1},8,["tabs"])}const k=H(u,[["render",S]]);export{k as default};
