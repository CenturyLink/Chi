var S=Object.defineProperty;var P=(e,t,a)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>P(e,typeof t!="symbol"?t+"":t,a);import{V as m,N as b}from"./NAah3XrW.js";import{_ as D}from"./onyWiYp2.js";import{_ as T}from"./CAQzZ0uH.js";import{m as f,o as v,h as C,w as p,b as c,a as u,c as L,F as k}from"./CEIPSiTs.js";import{_ as h}from"./DlAUqK2U.js";import M from"./iXUtIfa-.js";import O from"./CWQvgeJn.js";import{s as E}from"./DtNz156Q.js";import{_ as B}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var j=Object.defineProperty,y=Object.getOwnPropertyDescriptor,V=(e,t,a,s)=>{for(var l=s>1?void 0:s?y(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(l=(s?o(t,a,l):o(l))||l);return s&&l&&j(t,a,l),l};let _=class extends m{constructor(){super(...arguments);i(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);i(this,"transferListData",[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}]);i(this,"config",{searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}});i(this,"codeSnippets",{vue:`<!-- Vue component -->
<ChiTransferList
  :transferListData="list"
  :config="config"
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
  list: [
    {
      value: 'first',
      label: 'First',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'second',
      label: 'Second',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'third',
      label: 'Third',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fourth',
      label: 'Fourth',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fifth',
      label: 'Fifth',
      selected: true,
      locked: false,
      wildcard: false,
    },
    {
      value: 'sixth',
      label: 'Sixth',
      selected: true,
      locked: false,
      wildcard: true,
    },
    {
      value: 'seventh',
      label: 'Seventh',
      selected: true,
      locked: false,
      wildcard: true,
    },
  ]
}`,webcomponent:""})}};_=V([b({})],_);function I(e,t,a,s,l,r){const o=f("ChiTransferList"),d=D,n=T;return v(),C(n,{title:"Base",id:"base",tabs:e.exampleTabs},{example:p(()=>[c(o,{transferListData:e.transferListData,config:e.config},null,8,["transferListData","config"])]),"code-vue":p(()=>[c(d,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),_:1},8,["tabs"])}const N=h(_,[["render",I]]);var A=Object.defineProperty,H=Object.getOwnPropertyDescriptor,W=(e,t,a,s)=>{for(var l=s>1?void 0:s?H(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(l=(s?o(t,a,l):o(l))||l);return s&&l&&A(t,a,l),l};let w=class extends m{constructor(){super(...arguments);i(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);i(this,"transferListData",[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}]);i(this,"config",{searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}});i(this,"codeSnippets",{vue:`<!-- Vue component -->
<ChiTransferList
  :transferListData="list"
  :config="config"
  modal
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
  list: [
    {
      value: 'first',
      label: 'First',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'second',
      label: 'Second',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'third',
      label: 'Third',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fourth',
      label: 'Fourth',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fifth',
      label: 'Fifth',
      selected: true,
      locked: false,
      wildcard: false,
    },
    {
      value: 'sixth',
      label: 'Sixth',
      selected: true,
      locked: false,
      wildcard: true,
    },
    {
      value: 'seventh',
      label: 'Seventh',
      selected: true,
      locked: false,
      wildcard: true,
    },
  ]
}`,webcomponent:""})}};w=W([b({})],w);const z={class:"-d--flex"};function q(e,t,a,s,l,r){const o=f("ChiTransferList"),d=D,n=T;return v(),C(n,{title:"Modal",id:"modal",tabs:e.exampleTabs,additionalStyle:"position: static;"},{example:p(()=>[u("div",z,[c(o,{transferListData:e.transferListData,config:e.config,modal:""},null,8,["transferListData","config"])])]),"code-vue":p(()=>[c(d,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),_:1},8,["tabs"])}const G=h(w,[["render",q]]);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(e,t,a,s)=>{for(var l=s>1?void 0:s?K(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(l=(s?o(t,a,l):o(l))||l);return s&&l&&J(t,a,l),l};let x=class extends m{constructor(){super(...arguments);i(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);i(this,"transferListData",[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}]);i(this,"config",{searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}});i(this,"modal",{tooltipMsg:"Tooltip message",icon:"atom",title:"Tranfer List - Modal Title",ariaLabel:"custom aria label"});i(this,"codeSnippets",{vue:`<!-- Vue component -->
<ChiTransferList
  :transferListData="list"
  :config="config"
  :modal="modal"
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
  list: [
    {
      value: 'first',
      label: 'First',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'second',
      label: 'Second',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'third',
      label: 'Third',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fourth',
      label: 'Fourth',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fifth',
      label: 'Fifth',
      selected: true,
      locked: false,
      wildcard: false,
    },
    {
      value: 'sixth',
      label: 'Sixth',
      selected: true,
      locked: false,
      wildcard: true,
    },
    {
      value: 'seventh',
      label: 'Seventh',
      selected: true,
      locked: false,
      wildcard: true,
    },
  ],
  modal: {
    tooltipMsg: 'Custom tooltip msg',
    icon: 'atom',
    title: 'My awesome title',
    ariaLabel: 'custom aria label',
  };
}`,webcomponent:""})}};x=Q([b({})],x);const R={class:"-d--flex"};function U(e,t,a,s,l,r){const o=f("ChiTransferList"),d=D,n=T;return v(),C(n,{title:"Modal with custom config",id:"modal",tabs:e.exampleTabs,additionalStyle:"position: static;"},{example:p(()=>[u("div",R,[c(o,{transferListData:e.transferListData,config:e.config,modal:e.modal},null,8,["transferListData","config","modal"])])]),"code-vue":p(()=>[c(d,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),_:1},8,["tabs"])}const X=h(x,[["render",U]]);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,ee=(e,t,a,s)=>{for(var l=s>1?void 0:s?Z(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(l=(s?o(t,a,l):o(l))||l);return s&&l&&Y(t,a,l),l};let g=class extends m{};g=ee([b({components:{BaseExample:N,ModalExample:G,ModalConfigExample:X}})],g);function le(e,t,a,s,l,r){const o=f("BaseExample"),d=f("ModalExample"),n=f("ModalConfigExample");return v(),L(k,null,[t[0]||(t[0]=u("h2",null,"Examples",-1)),u("div",null,[c(o),c(d),c(n)])],64)}const te=h(g,[["render",le]]);var ae=Object.defineProperty,se=Object.getOwnPropertyDescriptor,oe=(e,t,a,s)=>{for(var l=s>1?void 0:s?se(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(l=(s?o(t,a,l):o(l))||l);return s&&l&&ae(t,a,l),l};let $=class extends m{constructor(){super(...arguments);i(this,"pageTabs",E)}};$=oe([b({components:{Accessibility:O,Examples:te,Properties:M}})],$);const re={class:"chi-grid__container -pt--3"},ie={class:"chi-tabs-panel -active",id:"examples"},ce={class:"chi-tabs-panel",id:"properties"},de={class:"chi-tabs-panel",id:"accessibility"};function ne(e,t,a,s,l,r){const o=B,d=f("Examples"),n=f("Properties"),F=f("Accessibility");return v(),L(k,null,[c(o,{title:"Transfer list",description:"Transfer list is used to organize and select items",tabs:e.pageTabs},null,8,["tabs"]),u("div",re,[u("div",ie,[c(d)]),u("div",ce,[c(n)]),u("div",de,[c(F)])])],64)}const Se=h($,[["render",ne]]);export{Se as default};
