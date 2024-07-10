import{V as b,N as u}from"./uJTUijt2.js";import{_ as h}from"./D8GK0F__.js";import{_}from"./DKu8Jd2y.js";import{o as f,f as x,w as s,b as d,a as e,d as c}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,O=(o,l,n,r)=>{for(var t=r>1?void 0:r?w(l,n):l,i=o.length-1,a;i>=0;i--)(a=o[i])&&(t=(r?a(l,n,t):a(t))||t);return r&&t&&g(l,n,t),t};let p=class extends b{};p=O([u({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-portal-er1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select -danger" id="example-portal-er1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning -icon--danger" aria-hidden="true"></i>
    Please select an option
  </div>
</div>`}})})],p);const P=e("p",{class:"-text"},[c("Use the "),e("code",null,"-danger"),c(" state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1),q=e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-er1"},[c("Label"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("select",{class:"chi-select -danger",id:"example-er1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")]),e("div",{class:"chi-label -status -danger"},[e("i",{class:"chi-icon icon-circle-warning -icon--danger","aria-hidden":"true"}),c("Please select an option")])],-1);function C(o,l,n,r,t,i){const a=h,m=_;return f(),x(m,{title:"Error",id:"error-portal",tabs:o.exampleTabs},{"example-description":s(()=>[P]),example:s(()=>[q]),"code-webcomponent":s(()=>[d(a,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[d(a,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const j=v(p,[["render",C]]);export{j as default};
