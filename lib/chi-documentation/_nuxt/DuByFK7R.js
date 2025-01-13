import{_ as L}from"./HHge0g2Y.js";import{_ as m}from"./C055cWll.js";import{_ as f}from"./DvtYg461.js";import{e as p,s as _,o as u,f as b,w as s,b as o,k as l,a as h,c as T,F as w}from"./BX7DqjWX.js";const v={searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}},C={tooltipMsg:"Tooltip message",icon:"atom",title:"Tranfer List - Modal Title",ariaLabel:"custom aria label"},c=[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}],$=a=>`list: [
`+a.map(e=>`    {
      value: '${e.value}',
      label: '${e.label}',
      selected: ${e.selected},
      locked: ${e.locked},
      wildcard: ${e.wildcard},
    }`).join(`,
`)+`,
  ]`,k=a=>{var e;return!a||!((e=Object.keys(a))!=null&&e.length)?"":`
  modal: {
`+Object.entries(a).map(([t,n])=>`    ${t}: '${n}',`).join(`
`)+`
  }`},g=(a=[],e=!1,t)=>`<!-- Vue component -->
<ChiTransferList
  :transferListData="list"
  :config="config"${e?`
  modal`:""}${t?`
  :modal="modal"`:""}
/>

<!-- Config and Data -->
data: {
  config: {
    searchInput: true,
    checkbox: false,
    columns: {
      from: {
        title: 'From',
        description: 'Description from',
      },
      to: {
        title: 'To',
        description: 'Description to',
      },
    },
  },
  ${$(a)}${k(t)}
}`,D=p({__name:"_base",setup(a){const e=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],t={vue:g(c),webcomponent:""};return(n,x)=>{const i=_("ChiTransferList"),r=m,d=f;return u(),b(d,{title:"Base",id:"base",tabs:e},{example:s(()=>[o(i,{transferListData:l(c),config:l(v)},null,8,["transferListData","config"])]),"code-vue":s(()=>[o(r,{lang:"html",code:t.vue},null,8,["code"])]),_:1})}}}),S={class:"-d--flex"},B=p({__name:"_modal",setup(a){const e=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],t={vue:g(c,!0),webcomponent:""};return(n,x)=>{const i=_("ChiTransferList"),r=m,d=f;return u(),b(d,{title:"Modal",id:"modal",tabs:e,additionalStyle:"position: static;"},{example:s(()=>[h("div",S,[o(i,{transferListData:l(c),config:l(v),modal:""},null,8,["transferListData","config"])])]),"code-vue":s(()=>[o(r,{lang:"html",code:t.vue},null,8,["code"])]),_:1})}}}),M={class:"-d--flex"},y=p({__name:"_modal-config",setup(a){const e=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],t={vue:g(c,!1,C),webcomponent:""};return(n,x)=>{const i=_("ChiTransferList"),r=m,d=f;return u(),b(d,{title:"Modal with custom config",id:"modal-config",tabs:e,additionalStyle:"position: static;"},{example:s(()=>[h("div",M,[o(i,{transferListData:l(c),config:l(v),modal:l(C)},null,8,["transferListData","config","modal"])])]),"code-vue":s(()=>[o(r,{lang:"html",code:t.vue},null,8,["code"])]),_:1})}}}),H=p({__name:"index",setup(a){return(e,t)=>{const n=L;return u(),T(w,null,[t[0]||(t[0]=h("h2",null,"Examples",-1)),o(n,null,{default:s(()=>[o(D),o(B),o(y)]),_:1})],64)}}});export{H as _};
