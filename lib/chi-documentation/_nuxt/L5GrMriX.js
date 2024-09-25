import{V as N,N as v}from"./NAah3XrW.js";import{_ as g}from"./onyWiYp2.js";import{_ as y}from"./CAQzZ0uH.js";import{o as m,h as P,w as c,a as e,d as p,c as h,i as w,n as D,t as i,F as x,b as f}from"./CEIPSiTs.js";import{_ as B}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var C=Object.defineProperty,M=Object.getOwnPropertyDescriptor,L=(l,t,n,o)=>{for(var a=o>1?void 0:o?M(t,n):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(a=(o?s(t,n,a):s(a))||a);return o&&a&&C(t,n,a),a};let u=class extends N{};u=L([v({data:()=>({rows:[{cell1:"Name 1",cell2:"name-1",cell3:"Dec 18, 2020 3:26 PM"},{cell1:"Name 2",cell2:"name-2",cell3:"Dec 18, 2020 2:38 AM"},{cell1:"Name 3",cell2:"name-3",cell3:"Nov 5, 2020 10:15 AM"}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<table class="chi-table -portal">
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
</table>`}})})],u);const $={class:"chi-table -portal"},T={href:"#"};function V(l,t,n,o,a,r){const s=g,_=y;return m(),P(_,{title:"Portal",id:"base-portal",tabs:l.exampleTabs},{"example-description":c(()=>t[0]||(t[0]=[e("p",{class:"-text"},[p("Enable portal styling by applying class "),e("code",null,"-portal"),p(". To display a row in active / selected state, apply class "),e("code",null,"-active"),p(" to the "),e("code",null,"tr"),p(".")],-1)])),example:c(()=>[e("table",$,[t[1]||(t[1]=e("thead",null,[e("tr",{class:"-sm"},[e("th",null,"Name"),e("th",null,"ID"),e("th",null,"Last Login")])],-1)),e("tbody",null,[(m(!0),h(x,null,w(l.rows,(d,b)=>(m(),h("tr",{class:D(["-lg",{"-active":b===2}]),key:b},[e("td",null,[e("a",T,i(d.cell1),1)]),e("td",null,i(d.cell2),1),e("td",null,i(d.cell3),1)],2))),128))])])]),"code-webcomponent":c(()=>[f(s,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[f(s,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const W=B(u,[["render",V]]);export{W as default};
