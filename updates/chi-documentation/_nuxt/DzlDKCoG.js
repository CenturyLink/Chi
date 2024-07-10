import{V as f,N as x}from"./uJTUijt2.js";import{_ as N}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{o as p,f as g,w as c,a as e,c as u,i as D,t as m,F as P,b,d as s}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var S=Object.defineProperty,M=Object.getOwnPropertyDescriptor,C=(t,a,d,n)=>{for(var l=n>1?void 0:n?M(a,d):a,r=t.length-1,o;r>=0;r--)(o=t[r])&&(l=(n?o(a,d,l):o(l))||l);return n&&l&&S(a,d,l),l};let h=class extends f{};h=C([x({data:()=>({rows:[{cell1:"Name 1",cell2:"name-1",cell3:"Dec 18, 2020 3:26 PM"},{cell1:"Name 2",cell2:"name-2",cell3:"Dec 18, 2020 2:38 AM"},{cell1:"Name 3",cell2:"name-3",cell3:"Nov 5, 2020 10:15 AM"}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<section class="chi-table -portal -fixed--header" style="height: 150px">
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        <div>Name</div>
                    </th>
                    <th>
                        <div>ID</div>
                    </th>
                    <th>
                        <div>Last Login</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name 1</td>
                    <td>name-1</td>
                    <td>Dec 18, 2020 3:26 PM</td>
                </tr>
                <tr>
                    <td>Name 2</td>
                    <td>name-2</td>
                    <td>Dec 18, 2020 2:38 AM</td>
                </tr>
                <tr>
                    <td>Name 3</td>
                    <td>name-3</td>
                    <td>Nov 5, 2020 10:15 AM</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>`}})})],h);const L=e("p",{class:"-text"},[s("If the "),e("code",null,"section"),s(" height is smaller than the "),e("code",null,"table"),s(" height, the "),e("code",null,"table"),s(" header will be fixed positioned and content will scroll. Tables must be wrapped in a "),e("code",null,'<section class="chi-table -fixed--header">')],-1),B={class:"chi-table -portal -fixed--header",style:{height:"150px"}},T=e("thead",null,[e("tr",null,[e("th",null,[e("div",null,"Name")]),e("th",null,[e("div",null,"ID")]),e("th",null,[e("div",null,"Last Login")])])],-1);function V(t,a,d,n,l,r){const o=N,_=w;return p(),g(_,{title:"Scrollable",id:"scrollable-portal",tabs:t.exampleTabs},{"example-description":c(()=>[L]),example:c(()=>[e("section",B,[e("div",null,[e("table",null,[T,e("tbody",null,[(p(!0),u(P,null,D(t.rows,(i,v)=>(p(),u("tr",{key:v},[e("td",null,m(i.cell1),1),e("td",null,m(i.cell2),1),e("td",null,m(i.cell3),1)]))),128))])])])])]),"code-webcomponent":c(()=>[b(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[b(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const q=y(h,[["render",V]]);export{q as default};
