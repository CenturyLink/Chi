import{_ as L}from"./DqffTiRd.js";import{_ as m}from"./Cs9k3wdq.js";import{_ as f}from"./B7eGrFrM.js";import{e as p,C as _,o as u,f as b,w as l,b as o,k as s,a as h,c as T,F as w}from"./8OrwJQBm.js";const C={searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}},x={tooltipMsg:"Tooltip message",icon:"atom",title:"Tranfer List - Modal Title",ariaLabel:"custom aria label"},c=[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}],$=a=>`list: [
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
  }`},v=(a=[],e=!1,t)=>`<!-- Vue component -->
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
}`,D=p({__name:"_base",setup(a){const e=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],t={vue:v(c),webcomponent:""};return(n,g)=>{const i=_("ChiTransferList"),r=m,d=f;return u(),b(d,{title:"Base",id:"base",tabs:e},{example:l(()=>[o(i,{transferListData:s(c),config:s(C)},null,8,["transferListData","config"])]),"code-vue":l(()=>[o(r,{lang:"html",code:t.vue},null,8,["code"])]),_:1})}}}),S={class:"-d--flex"},B=p({__name:"_modal",setup(a){const e=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],t={vue:v(c,!0),webcomponent:""};return(n,g)=>{const i=_("ChiTransferList"),r=m,d=f;return u(),b(d,{title:"Modal",id:"modal",tabs:e,additionalStyle:"position: static;"},{example:l(()=>[h("div",S,[o(i,{transferListData:s(c),config:n.config,modal:""},null,8,["transferListData","config"])])]),"code-vue":l(()=>[o(r,{lang:"html",code:t.vue},null,8,["code"])]),_:1})}}}),M={class:"-d--flex"},y=p({__name:"_modal-config",setup(a){const e=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],t={vue:v(c,!1,x),webcomponent:""};return(n,g)=>{const i=_("ChiTransferList"),r=m,d=f;return u(),b(d,{title:"Modal with custom config",id:"modal-config",tabs:e,additionalStyle:"position: static;"},{example:l(()=>[h("div",M,[o(i,{transferListData:s(c),config:s(C),modal:s(x)},null,8,["transferListData","config","modal"])])]),"code-vue":l(()=>[o(r,{lang:"html",code:t.vue},null,8,["code"])]),_:1})}}}),H=p({__name:"index",setup(a){return(e,t)=>{const n=L;return u(),T(w,null,[t[0]||(t[0]=h("h2",null,"Examples",-1)),o(n,null,{default:l(()=>[o(D),o(B),o(y)]),_:1})],64)}}});export{H as _};
