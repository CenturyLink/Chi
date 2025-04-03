import{_ as v}from"./LNeokCJg.js";import{_ as x}from"./rD-gEhvI.js";import{e as h,f as b,o as c,w as p,b as d,a as s,c as o,i as $,n as m,t as f,F as N}from"./-E9oTzhC.js";const w={class:"-p--3"},T={class:"chi-badge__content"},k=h({__name:"_userState",setup(g){const r=[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a=[{icon:"icon-circle",text:"Online",className:"success"},{icon:"icon-circle-clock",text:"Away",className:"warning"},{icon:"icon-circle-minus",text:"Do not disturb",className:"danger"},{icon:"icon-circle",text:"Offline",className:"muted"},{icon:"icon-circle-outline",text:"Invisible",className:"muted"}],u=()=>a.map(({icon:_,text:e,className:n})=>`<!-- ${e} -->
<div class="chi-badge -flat -${n}">
  <div class="chi-badge__content">
    <i class="chi-icon ${_}" aria-hidden="true"></i>
    <span>${e}</span>
  </div>
</div>`).join(`
`);return(_,e)=>{const n=v,i=x;return c(),b(i,{title:"User states",id:"user_states",padding:"-p--0","title-size":"h2",tabs:r,showSnippetTabs:!1},{example:p(()=>[s("div",w,[(c(),o(N,null,$(a,t=>s("div",{class:m(["chi-badge",`-flat -m--1 -${t.className}`])},[s("div",T,[s("i",{class:m(`chi-icon ${t.icon}`),"aria-hidden":"true"},null,2),s("span",null,f(t.text),1)])],2)),64))])]),"code-htmlblueprint":p(()=>[d(n,{class:"html",lang:"html",code:u()},null,8,["code"])]),_:1})}}}),y={class:"-p--3"},B={class:"chi-badge__content"},C=["innerHTML"],H=h({__name:"_applicationState",setup(g){const r=[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a=[{icon:"icon-circle",text:"Running",className:"success"},{svgIcon:`<svg class="chi-spinner -sm" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>`,text:"Processing",className:""},{icon:"icon-warning",text:"Unavailable",className:"warning"},{icon:"icon-circle",text:"Stopped",className:"danger"},{icon:"icon-circle",text:"Terminated",className:"muted"},{icon:"icon-circle-outline",text:"Unknown",className:"muted"}],u=(e,n)=>e||`<i class="chi-icon ${n}" aria-hidden="true"></i>`,_=()=>a.map(({icon:e,text:n,className:i,svgIcon:t})=>`<!-- ${n} -->
<div class="chi-badge -flat${i&&" -"}${i}">
  <div class="chi-badge__content">
    ${u(t,e)}
    <span>${n}</span>
  </div>
</div>`).join(`
`);return(e,n)=>{const i=v,t=x;return c(),b(t,{title:"Application states",id:"application_states",padding:"-p--0","title-size":"h2",tabs:r,showSnippetTabs:!1},{example:p(()=>[s("div",y,[(c(),o(N,null,$(a,l=>s("div",{class:m(["chi-badge",`-flat -m--1${l.className&&" -"}${l.className}`])},[s("div",B,[l.svgIcon?(c(),o("div",{key:1,innerHTML:l.svgIcon},null,8,C)):(c(),o("i",{key:0,class:m(`chi-icon ${l.icon}`),"aria-hidden":"true"},null,2)),s("span",null,f(l.text),1)])],2)),64))])]),"code-htmlblueprint":p(()=>[d(i,{class:"html",lang:"html",code:_()},null,8,["code"])]),_:1})}}}),L={class:"chi-grid__container -pt--3"},z=h({__name:"index",setup(g){return(r,a)=>(c(),o("div",L,[d(k),d(H)]))}});export{z as _};
