import{_}from"./onyWiYp2.js";import{_ as p}from"./CAQzZ0uH.js";import{e as u,o as i,h,w as o,a as e,c as b,i as f,n as l,t as g,F as x,b as v}from"./CEIPSiTs.js";const N={class:"-p--3"},$={class:"chi-badge__content"},y=u({__name:"_userState",setup(w){const r=[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=[{icon:"icon-circle",text:"Online",className:"success"},{icon:"icon-circle-clock",text:"Away",className:"warning"},{icon:"icon-circle-minus",text:"Do not disturb",className:"danger"},{icon:"icon-circle",text:"Offline",className:"muted"},{icon:"icon-circle-outline",text:"Invisible",className:"muted"}],m=()=>c.map(({icon:n,text:s,className:a})=>`<!-- ${s} -->
<div class="chi-badge -flat -${a}">
  <div class="chi-badge__content">
    <i class="chi-icon ${n}" aria-hidden="true"></i>
    <span>${s}</span>
  </div>
</div>`).join(`
`);return(n,s)=>{const a=_,d=p;return i(),h(d,{title:"User states",id:"user_states",padding:"-p--0",tabs:r,showSnippetTabs:!1},{example:o(()=>[e("div",N,[(i(),b(x,null,f(c,t=>e("div",{class:l(["chi-badge",`-flat -m--1 -${t.className}`])},[e("div",$,[e("i",{class:l(`chi-icon ${t.icon}`),"aria-hidden":"true"},null,2),e("span",null,g(t.text),1)])],2)),64))])]),"code-htmlblueprint":o(()=>[v(a,{class:"html",lang:"html",code:m()},null,8,["code"])]),_:1})}}});export{y as _};
