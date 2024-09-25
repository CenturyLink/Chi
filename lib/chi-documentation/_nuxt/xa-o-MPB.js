import{_ as g}from"./onyWiYp2.js";import{_ as w}from"./CAQzZ0uH.js";import{e as v,o as e,h as x,w as a,a as c,c as o,i as m,k as u,F as p,b}from"./CEIPSiTs.js";const y={class:"chi-grid -mb--2 -show--example"},F=v({__name:"_column-wrapping",setup(C){const i=Array(2).fill("chi-col"),s=Array(4).fill("chi-col"),d=[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l=(r,n)=>`${r.map(()=>`  <div class="chi-col -w--${n}"></div>`).join(`
`)}`,h=()=>`<div class="chi-grid">

  <!-- first 12 column units -->
${l(s,"3")}

  <!-- ... and another row consisting of 12 more units -->
${l(i,"6")}

</div>`;return(r,n)=>{const _=g,f=w;return e(),x(f,{title:"Column Wrapping",id:"column-wrapping",tabs:d,showSnippetTabs:!1,padding:"-p--0",additionalStyle:"border: none;"},{"example-description":a(()=>n[0]||(n[0]=[c("p",{class:"-text"},"Grid containers can accommodate any number of columns, however, the grid system is restricted to a maximum of 12 column units per row. Overflowing the 12 column units will automatically wrap additional columns onto a new row. For example, the following layout is the result of having 24 column units in a single container:",-1)])),example:a(()=>[c("div",y,[(e(!0),o(p,null,m(u(s),t=>(e(),o("div",{class:"chi-col -w--3",key:t}))),128)),(e(!0),o(p,null,m(u(i),t=>(e(),o("div",{class:"chi-col -w--6",key:t}))),128))])]),"code-htmlblueprint":a(()=>[b(_,{class:"html",lang:"html",code:h()},null,8,["code"])]),_:1})}}});export{F as _};
