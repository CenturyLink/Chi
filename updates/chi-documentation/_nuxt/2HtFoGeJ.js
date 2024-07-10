import{V as w,N as f}from"./uJTUijt2.js";import{_ as T}from"./D8GK0F__.js";import{_ as x}from"./DKu8Jd2y.js";import{o as a,f as L,w as u,a as t,c as p,i as h,F as m,t as c,b as g}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var H=Object.defineProperty,P=Object.getOwnPropertyDescriptor,C=(e,d,r,n)=>{for(var o=n>1?void 0:n?P(d,r):d,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(d,r,o):s(o))||o);return n&&o&&H(d,r,o),o};let _=class extends w{};_=C([f({data:()=>({rows:[{cell1:"Location 1",cell2:"3",cell3:"98%",cell4:"—",cell5:"—",cell6:"98%"},{cell1:"Location 2",cell2:"1",cell3:"98%",cell4:"3",cell5:"67%",cell6:"98%"},{cell1:"Location 3",cell2:"—",cell3:"—",cell4:"2",cell5:"66%",cell6:"66%"},{cell1:"Location 4",cell2:"—",cell3:"—",cell4:"1",cell5:"66%",cell6:"66%"}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<table class="chi-table -portal">
    <colgroup>
        <col />
    </colgroup>
    <colgroup span="2"></colgroup>
    <colgroup span="2"></colgroup>
    <colgroup>
        <col />
    </colgroup>
    <thead>
        <tr>
            <th class="-sorted -descending">
                <div>Location</div>
            </th>
            <th colspan="2" scope="colgroup">High Utilization</th>
            <th colspan="2" scope="colgroup">Elevated Utilization</th>
            <th class="-sorted -descending">
                <div>Highest %</div>
            </th>
        </tr>
        <tr>
            <td class="-th" scope="col"></td>
            <th class="-sorted -descending" scope="col">
                <div>Total</div>
            </th>
            <th class="-sorted -descending" scope="col">
                <div>%</div>
            </th>
            <th class="-sorted -descending" scope="col">
                <div>Total</div>
            </th>
            <th class="-sorted -descending" scope="col">
                <div>%</div>
            </th>
            <td class="-th" scope="col"></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="-text--normal" scope="row">Location 1</td>
            <td>3</td>
            <td>98%</td>
            <td>—</td>
            <td>—</td>
            <td>98%</td>
        </tr>
        <tr>
            <td class="-text--normal" scope="row">Location 2</td>
            <td>1</td>
            <td>98%</td>
            <td>3</td>
            <td>67%</td>
            <td>98%</td>
        </tr>
        <tr>
            <td class="-text--normal" scope="row">Location 3</td>
            <td>—</td>
            <td>—</td>
            <td>2</td>
            <td>66%</td>
            <td>66%</td>
        </tr>
        <tr>
            <td class="-text--normal" scope="row">Location 4</td>
            <td>—</td>
            <td>—</td>
            <td>1</td>
            <td>66%</td>
            <td>66%</td>
        </tr>
    </tbody>
</table>`}})})],_);const B={class:"chi-table -portal"},$=t("colgroup",null,[t("col")],-1),z=t("colgroup",null,[t("col")],-1),E=t("tr",null,[t("th",{class:"-sorted -descending"},[t("div",null,"Location")]),t("th",{colspan:"2",scope:"colgroup"},"High Utilization"),t("th",{colspan:"2",scope:"colgroup"},"Elevated Utilization"),t("th",{class:"-sorted -descending"},[t("div",null,"Highest %")])],-1),N=t("td",{class:"-th",scope:"col"},null,-1),O=t("td",{class:"-th",scope:"col"},null,-1),S={class:"-text--normal",scope:"row"};function U(e,d,r,n,o,i){const s=T,b=x;return a(),L(b,{title:"Two tier table header",id:"two-tier-header-portal",tabs:e.exampleTabs},{example:u(()=>[t("table",B,[$,(a(),p(m,null,h(2,l=>t("colgroup",{span:"2",key:l})),64)),z,t("thead",null,[E,t("tr",null,[N,(a(),p(m,null,h(4,l=>t("th",{class:"-sorted -descending",scope:"col",key:l},[t("div",null,c(l%2===0?"%":"Total"),1)])),64)),O])]),t("tbody",null,[(a(!0),p(m,null,h(e.rows,(l,v)=>(a(),p("tr",{key:v},[t("td",S,c(l.cell1),1),t("td",null,c(l.cell2),1),t("td",null,c(l.cell3),1),t("td",null,c(l.cell4),1),t("td",null,c(l.cell5),1),t("td",null,c(l.cell6),1)]))),128))])])]),"code-webcomponent":u(()=>[g(s,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[g(s,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const G=y(_,[["render",U]]);export{G as default};
