import{V as k,N as v}from"./uJTUijt2.js";import{_ as x}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as r,f as y,w as h,a as e,c as _,i as N,n as L,t as p,F as D,b as m}from"./B5CYXVwa.js";import{_ as P}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=(l,a,n,o)=>{for(var t=o>1?void 0:o?w(a,n):a,i=l.length-1,c;i>=0;i--)(c=l[i])&&(t=(o?c(a,n,t):c(t))||t);return o&&t&&g(a,n,t),t};let b=class extends k{};b=S([v({data:()=>({rows:[{cell1:"Name 1",cell2:"name-1",cell3:"Dec 18, 2020 3:26 PM"},{cell1:"Name 2",cell2:"name-2",cell3:"Dec 18, 2020 2:38 AM"},{cell1:"Name 3",cell2:"name-3",cell3:"Nov 5, 2020 10:15 AM"}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<table class="chi-table -portal">
  <thead>
      <tr>
          <th>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1" />
              <label class="chi-checkbox__label" for="portal-chk-1">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </th>
          <th class="-sorted -ascending">
              <div>Name</div>
          </th>
          <th>ID</th>
          <th>Last Login</th>
      </tr>
  </thead>
  <tbody>
      <tr class="-active">
          <td>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1-01" checked="checked" />
              <label class="chi-checkbox__label" for="portal-chk-1-01">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </td>
          <td>Name 1</td>
          <td>name-1</td>
          <td>Dec 18, 2020 3:26 PM</td>
      </tr>
      <tr>
          <td>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1-02" />
              <label class="chi-checkbox__label" for="portal-chk-1-02">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </td>
          <td>Name 2</td>
          <td>name-2</td>
          <td>Dec 18, 2020 2:38 AM</td>
      </tr>
      <tr>
          <td>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1-03" />
              <label class="chi-checkbox__label" for="portal-chk-1-03">
                  <div class="-sr--only">Label</div>
              </label>
            </div>
          </td>
          <td>Name 3</td>
          <td>name-3</td>
          <td>Nov 5, 2020 10:15 AM</td>
      </tr>
  </tbody>
</table>`}})})],b);const C={class:"chi-table -portal"},M=e("thead",null,[e("tr",null,[e("th",null,[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",id:"portal-chk-1",type:"checkbox"}),e("label",{class:"chi-checkbox__label",for:"portal-chk-1"},[e("div",{class:"-sr--only"},"Label")])])]),e("th",{class:"-sorted -ascending"},[e("div",null,"Name")]),e("th",null,"ID"),e("th",null,"Last Login")])],-1),$={class:"chi-checkbox"},B=["checked","id"],A=["for"],O=e("div",{class:"-sr--only"},"Label",-1),V=[O];function T(l,a,n,o,t,i){const c=x,u=f;return r(),y(u,{title:"Selectable",id:"selectable-portal",tabs:l.exampleTabs},{example:h(()=>[e("table",C,[M,e("tbody",null,[(r(!0),_(D,null,N(l.rows,(d,s)=>(r(),_("tr",{key:s,class:L({"-active":s===0})},[e("td",null,[e("div",$,[e("input",{class:"chi-checkbox__input",type:"checkbox",checked:s===0,id:`portal-chk-1-0${s}`},null,8,B),e("label",{class:"chi-checkbox__label",for:`portal-chk-1-0${s}`},V,8,A)])]),e("td",null,p(d.cell1),1),e("td",null,p(d.cell2),1),e("td",null,p(d.cell3),1)],2))),128))])])]),"code-webcomponent":h(()=>[m(c,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[m(c,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=P(b,[["render",T]]);export{J as default};
