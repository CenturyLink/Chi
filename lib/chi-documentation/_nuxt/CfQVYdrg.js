var y=Object.defineProperty;var O=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>O(t,typeof e!="symbol"?e+"":e,s);import{V as m,N as _}from"./Bdokak_-.js";import w from"./DtMu_8ZI.js";import{o as v,c as $,a as l,d as o,F as h,f as C,b as c,v as d}from"./CRBsHPO5.js";import{_ as b}from"./DlAUqK2U.js";import{_ as D}from"./CIPiXAF4.js";import{s as L}from"./CioVcaN-.js";import{_ as I}from"./Q1fW3UX9.js";import"./Di-ELn2D.js";import"./CcrI_bxZ.js";import"./Cx7J_iiN.js";import"./Bxs95XXX.js";import"./CFe54mHR.js";var j=Object.defineProperty,A=Object.getOwnPropertyDescriptor,N=(t,e,s,r)=>{for(var n=r>1?void 0:r?A(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(n=(r?i(e,s,n):i(n))||n);return r&&n&&j(e,s,n),n};let u=class extends m{};u=N([_({})],u);function B(t,e,s,r,n,a){return v(),$(h,null,[e[0]||(e[0]=l("h2",null,"JavaScript",-1)),e[1]||(e[1]=l("h3",null,"Props",-1)),e[2]||(e[2]=l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Property")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Interface")]),l("th",null,[l("div",null,"Default")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"config")])]),l("td",null,[l("div",null,"To customize Transfer list details")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[o(`{
  checkbox?: `),l("code",null,"boolean"),o(`;
  columns: {
    from: {
      title: `),l("code",null,"string"),o(`;
      description?: `),l("code",null,"string"),o(`;
    };
    to: {
      title: `),l("code",null,"string"),o(`;
      description?: `),l("code",null,"string"),o(`;
    };
  };
  searchInput?: `),l("code",null,"boolean"),o(`;
}`)])]),l("td",null,[l("div",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"transferListData")])]),l("td",null,[l("div",null,"To provide Transfer list with data")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[l("code",null,"TransferListItem[]")])]),l("td",null,[l("div",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"modal")])]),l("td",null,[l("div",null,"To define transfer list as modal or add modal configuration")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[l("code",null,"TransferListModalConfig | boolean")])]),l("td",null,[l("div",null,"undefined")])])])])])],-1)),e[3]||(e[3]=l("h3",null,"Interfaces and types",-1)),e[4]||(e[4]=l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Name")]),l("th",null,[l("div",null,"Interface")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"TransferListItem")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[o(`interface TransferListItem {
  label: `),l("code",null,"string"),o(`;
  locked?: `),l("code",null,"boolean"),o(`;
  selected: `),l("code",null,"boolean"),o(`;
  value: `),l("code",null,"string"),o(`;
  wildcard?: `),l("code",null,"boolean"),o(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"TransferListModalConfig")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[o(`interface TransferListModalConfig {
  ariaLabel?: `),l("code",null,"boolean"),o(`;
  icon?: `),l("code",null,"string"),o(`;
  title?: `),l("code",null,"boolean"),o(`;
  tooltipMsg?: `),l("code",null,"string"),o(`;
}`)])])])])])])],-1))],64)}const V=b(u,[["render",B]]);var E=Object.defineProperty,M=Object.getOwnPropertyDescriptor,z=(t,e,s,r)=>{for(var n=r>1?void 0:r?M(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(n=(r?i(e,s,n):i(n))||n);return r&&n&&E(e,s,n),n};let p=class extends m{};p=z([_({})],p);function F(t,e,s,r,n,a){const i=D;return v(),C(i)}const S=b(p,[["render",F]]);var J=Object.defineProperty,q=Object.getOwnPropertyDescriptor,G=(t,e,s,r)=>{for(var n=r>1?void 0:r?q(e,s):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(n=(r?i(e,s,n):i(n))||n);return r&&n&&J(e,s,n),n};let f=class extends m{constructor(){super(...arguments);g(this,"pageTabs",L)}};f=G([_({components:{Accessibility:S,Examples:w,Properties:V}})],f);const H={class:"chi-grid__container -pt--3"},K={class:"chi-tabs-panel -active",id:"examples"},Q={class:"chi-tabs-panel",id:"properties"},R={class:"chi-tabs-panel",id:"accessibility"};function U(t,e,s,r,n,a){const i=I,x=d("Examples"),P=d("Properties"),T=d("Accessibility");return v(),$(h,null,[c(i,{title:"Transfer list",description:"Transfer list is used to organize and select items",tabs:t.pageTabs},null,8,["tabs"]),l("div",H,[l("div",K,[c(x)]),l("div",Q,[c(P)]),l("div",R,[c(T)])])],64)}const dl=b(f,[["render",U]]);export{dl as default};
