var g=Object.defineProperty;var f=(e,t,l)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var m=(e,t,l)=>f(e,typeof t!="symbol"?t+"":t,l);import{V as v,N as C}from"./uJTUijt2.js";import{_ as x}from"./D8GK0F__.js";import{_ as P}from"./DKu8Jd2y.js";import{o,f as T,w as p,a,c as u,i as b,F as h,n as $,t as w,b as y}from"./B5CYXVwa.js";import{_ as N}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var V=Object.defineProperty,B=Object.getOwnPropertyDescriptor,E=(e,t,l,n)=>{for(var s=n>1?void 0:n?B(t,l):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,l,s):i(s))||s);return n&&s&&V(t,l,s),s};let d=class extends v{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"columns",[1,2,3,4,5]);m(this,"aligns",["baseline","top","middle","bottom"])}get codeSnippets(){return{htmlblueprint:`<table class="chi-table">
  <thead>
    <tr>
`+this.generateColumnHtml()+`
    </tr>
  </thead>
  <tbody>
    <tr>
`+this.generateAlignsHtml()+`<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.</td>
    </tr>
  </tbody>
</table>
`}}generateAlignsHtml(){return this.aligns.map(l=>`      <td class="-vertical-align--${l}">${l}</td>`).join(`
`)}generateColumnHtml(){return this.columns.map(()=>"      <th>Column</th>").join(`
`)}};d=E([C({})],d);const H=a("p",{class:"-text"},"Use the vertical-align utility to change the vertical alignment of table cell elements.",-1),j={class:"-p--1"},q={class:"chi-table -bordered"},L=a("td",{class:"-w--30"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.",-1);function O(e,t,l,n,s,r){const i=x,_=P;return o(),T(_,{padding:"-p--2",title:"Table cell elements",id:"vertical-align-table-cell",tabs:e.exampleTabs,showSnippetTabs:!1},{"example-description":p(()=>[H]),example:p(()=>[a("div",j,[a("table",q,[a("thead",null,[a("tr",null,[(o(!0),u(h,null,b(e.columns,c=>(o(),u("th",null,"Column"))),256))])]),a("tbody",null,[a("tr",null,[(o(!0),u(h,null,b(e.aligns,c=>(o(),u("td",{class:$(`-vertical-align--${c}`)},w(c),3))),256)),L])])])])]),"code-htmlblueprint":p(()=>[y(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=N(d,[["render",O]]);export{K as default};
