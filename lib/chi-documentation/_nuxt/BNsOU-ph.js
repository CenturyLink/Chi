import{_ as u}from"./onyWiYp2.js";import{_ as h}from"./CAQzZ0uH.js";import{e as g,o as a,h as v,w as r,a as c,c as o,i as x,n as p,t as b,F as f,b as $}from"./CEIPSiTs.js";const N={class:"-p--3"},w={class:"chi-badge__content"},k=["innerHTML"],L=g({__name:"_applicationState",setup(B){const m=[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l=[{icon:"icon-circle",text:"Running",className:"success"},{svgIcon:`<svg class="chi-spinner -sm" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>`,text:"Processing",className:""},{icon:"icon-warning",text:"Unavailable",className:"warning"},{icon:"icon-circle",text:"Stopped",className:"danger"},{icon:"icon-circle",text:"Terminated",className:"muted"},{icon:"icon-circle-outline",text:"Unknown",className:"muted"}],d=(n,s)=>n||`<i class="chi-icon ${s}" aria-hidden="true"></i>`,_=()=>l.map(({icon:n,text:s,className:t,svgIcon:i})=>`<!-- ${s} -->
<div class="chi-badge -flat${t&&" -"}${t}">
  <div class="chi-badge__content">
    ${d(i,n)}
    <span>${s}</span>
  </div>
</div>`).join(`
`);return(n,s)=>{const t=u,i=h;return a(),v(i,{title:"Application states",id:"application_states",padding:"-p--0",tabs:m,showSnippetTabs:!1},{example:r(()=>[c("div",N,[(a(),o(f,null,x(l,e=>c("div",{class:p(["chi-badge",`-flat -m--1${e.className&&" -"}${e.className}`])},[c("div",w,[e.svgIcon?(a(),o("div",{key:1,innerHTML:e.svgIcon},null,8,k)):(a(),o("i",{key:0,class:p(`chi-icon ${e.icon}`),"aria-hidden":"true"},null,2)),c("span",null,b(e.text),1)])],2)),64))])]),"code-htmlblueprint":r(()=>[$(t,{class:"html",lang:"html",code:_()},null,8,["code"])]),_:1})}}});export{L as _};
