import{V as N,N as v}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as y}from"./DKu8Jd2y.js";import{o as m,f as x,w as c,a as e,c as b,i as P,n as w,t as i,F as D,b as _,d as p}from"./B5CYXVwa.js";import{_ as B}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var C=Object.defineProperty,M=Object.getOwnPropertyDescriptor,L=(t,o,n,s)=>{for(var l=s>1?void 0:s?M(o,n):o,r=t.length-1,a;r>=0;r--)(a=t[r])&&(l=(s?a(o,n,l):a(l))||l);return s&&l&&C(o,n,l),l};let h=class extends N{};h=L([v({data:()=>({rows:[{cell1:"Name 1",cell2:"name-1",cell3:"Dec 18, 2020 3:26 PM"},{cell1:"Name 2",cell2:"name-2",cell3:"Dec 18, 2020 2:38 AM"},{cell1:"Name 3",cell2:"name-3",cell3:"Nov 5, 2020 10:15 AM"}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<table class="chi-table -portal">
    <thead>
        <tr class="-sm">
            <th>Name</th>
            <th>ID</th>
            <th>Last Login</th>
        </tr>
    </thead>
    <tbody>
        <tr class="-lg">
            <td><a href="#">Name 1</a></td>
            <td>name-1</td>
            <td>Dec 18, 2020 3:26 PM</td>
        </tr>
        <tr class="-lg">
            <td><a href="#">Name 2</a></td>
            <td>name-2</td>
            <td>Dec 18, 2020 2:38 AM</td>
        </tr>
        <tr class="-active -lg">
            <td><a href="#">Name 3</a></td>
            <td>name-3</td>
            <td>Nov 5, 2020 10:15 AM</td>
        </tr>
    </tbody>
</table>`}})})],h);const T=e("p",{class:"-text"},[p("Enable portal styling by applying class "),e("code",null,"-portal"),p(". To display a row in active / selected state, apply class "),e("code",null,"-active"),p(" to the "),e("code",null,"tr"),p(".")],-1),V={class:"chi-table -portal"},$=e("thead",null,[e("tr",{class:"-sm"},[e("th",null,"Name"),e("th",null,"ID"),e("th",null,"Last Login")])],-1),A={href:"#"};function O(t,o,n,s,l,r){const a=g,f=y;return m(),x(f,{title:"Portal",id:"base-portal",tabs:t.exampleTabs},{"example-description":c(()=>[T]),example:c(()=>[e("table",V,[$,e("tbody",null,[(m(!0),b(D,null,P(t.rows,(d,u)=>(m(),b("tr",{class:w(["-lg",{"-active":u===2}]),key:u},[e("td",null,[e("a",A,i(d.cell1),1)]),e("td",null,i(d.cell2),1),e("td",null,i(d.cell3),1)],2))),128))])])]),"code-webcomponent":c(()=>[_(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[_(a,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const G=B(h,[["render",O]]);export{G as default};
