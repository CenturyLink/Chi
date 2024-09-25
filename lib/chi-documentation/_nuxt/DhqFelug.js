import{_}from"./onyWiYp2.js";import{_ as g}from"./CAQzZ0uH.js";import{e as f,o as a,h as v,w as n,a as t,c as r,i as m,F as c,n as C,t as x,b as y}from"./CEIPSiTs.js";const B={class:"-p--1"},$={class:"chi-table -bordered"},P=f({__name:"_table-cell",setup(q){const u=[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i=[1,2,3,4,5],o=["baseline","top","middle","bottom"],d=()=>o.map(l=>`      <td class="-vertical-align--${l}">${l}</td>`).join(`
`),p={htmlblueprint:`<table class="chi-table">
  <thead>
    <tr>
`+i.map(()=>"      <th>Column</th>").join(`
`)+`
    </tr>
  </thead>
  <tbody>
    <tr>
`+d()+`<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.</td>
    </tr>
  </tbody>
</table>
`};return(l,e)=>{const b=_,h=g;return a(),v(h,{padding:"-p--2",title:"Table cell elements",id:"vertical-align-table-cell",tabs:u,showSnippetTabs:!1},{"example-description":n(()=>e[0]||(e[0]=[t("p",{class:"-text"},"Use the vertical-align utility to change the vertical alignment of table cell elements.",-1)])),example:n(()=>[t("div",B,[t("table",$,[t("thead",null,[t("tr",null,[(a(),r(c,null,m(i,s=>t("th",null,"Column")),64))])]),t("tbody",null,[t("tr",null,[(a(),r(c,null,m(o,s=>t("td",{class:C(`-vertical-align--${s}`)},x(s),3)),64)),e[1]||(e[1]=t("td",{class:"-w--30"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.",-1))])])])])]),"code-htmlblueprint":n(()=>[y(b,{class:"html",lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}});export{P as _};
