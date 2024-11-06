var T=Object.defineProperty;var k=(e,l,a)=>l in e?T(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;var i=(e,l,a)=>k(e,typeof l!="symbol"?l+"":l,a);import{V as m,N as v}from"./Bdokak_-.js";import{_ as D}from"./Di-ELn2D.js";import{_ as C}from"./Cx7J_iiN.js";import{v as f,o as b,f as $,w as u,b as c,a as p,c as L,F}from"./CRBsHPO5.js";import{_ as h}from"./DlAUqK2U.js";import"./CcrI_bxZ.js";import"./Bxs95XXX.js";import"./CioVcaN-.js";var S=Object.defineProperty,M=Object.getOwnPropertyDescriptor,E=(e,l,a,s)=>{for(var t=s>1?void 0:s?M(l,a):l,r=e.length-1,o;r>=0;r--)(o=e[r])&&(t=(s?o(l,a,t):o(t))||t);return s&&t&&S(l,a,t),t};let w=class extends m{constructor(){super(...arguments);i(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);i(this,"transferListData",[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}]);i(this,"config",{searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}});i(this,"codeSnippets",{vue:`<!-- Vue component -->
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
}`,webcomponent:""})}};w=E([v({})],w);function O(e,l,a,s,t,r){const o=f("ChiTransferList"),d=D,n=C;return b(),$(n,{title:"Base",id:"base",tabs:e.exampleTabs},{example:u(()=>[c(o,{transferListData:e.transferListData,config:e.config},null,8,["transferListData","config"])]),"code-vue":u(()=>[c(d,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),_:1},8,["tabs"])}const P=h(w,[["render",O]]);var B=Object.defineProperty,V=Object.getOwnPropertyDescriptor,j=(e,l,a,s)=>{for(var t=s>1?void 0:s?V(l,a):l,r=e.length-1,o;r>=0;r--)(o=e[r])&&(t=(s?o(l,a,t):o(t))||t);return s&&t&&B(l,a,t),t};let _=class extends m{constructor(){super(...arguments);i(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);i(this,"transferListData",[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}]);i(this,"config",{searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}});i(this,"codeSnippets",{vue:`<!-- Vue component -->
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
}`,webcomponent:""})}};_=j([v({})],_);const y={class:"-d--flex"};function I(e,l,a,s,t,r){const o=f("ChiTransferList"),d=D,n=C;return b(),$(n,{title:"Modal",id:"modal",tabs:e.exampleTabs,additionalStyle:"position: static;"},{example:u(()=>[p("div",y,[c(o,{transferListData:e.transferListData,config:e.config,modal:""},null,8,["transferListData","config"])])]),"code-vue":u(()=>[c(d,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),_:1},8,["tabs"])}const N=h(_,[["render",I]]);var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,q=(e,l,a,s)=>{for(var t=s>1?void 0:s?W(l,a):l,r=e.length-1,o;r>=0;r--)(o=e[r])&&(t=(s?o(l,a,t):o(t))||t);return s&&t&&H(l,a,t),t};let x=class extends m{constructor(){super(...arguments);i(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);i(this,"transferListData",[{value:"first",label:"First",selected:!1,locked:!1,wildcard:!1},{value:"second",label:"Second",selected:!1,locked:!1,wildcard:!1},{value:"third",label:"Third",selected:!0,locked:!0,wildcard:!1},{value:"fourth",label:"Fourth",selected:!0,locked:!0,wildcard:!1},{value:"fifth",label:"Fifth",selected:!0,locked:!1,wildcard:!1},{value:"sixth",label:"Sixth",selected:!0,locked:!1,wildcard:!0},{value:"seventh",label:"Seventh",selected:!0,locked:!1,wildcard:!0}]);i(this,"config",{searchInput:!0,checkbox:!1,columns:{from:{title:"From",description:"Description from"},to:{title:"To",description:"Description to"}}});i(this,"modal",{tooltipMsg:"Tooltip message",icon:"atom",title:"Tranfer List - Modal Title",ariaLabel:"custom aria label"});i(this,"codeSnippets",{vue:`<!-- Vue component -->
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
}`,webcomponent:""})}};x=q([v({})],x);const z={class:"-d--flex"};function A(e,l,a,s,t,r){const o=f("ChiTransferList"),d=D,n=C;return b(),$(n,{title:"Modal with custom config",id:"modal",tabs:e.exampleTabs,additionalStyle:"position: static;"},{example:u(()=>[p("div",z,[c(o,{transferListData:e.transferListData,config:e.config,modal:e.modal},null,8,["transferListData","config","modal"])])]),"code-vue":u(()=>[c(d,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),_:1},8,["tabs"])}const G=h(x,[["render",A]]);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(e,l,a,s)=>{for(var t=s>1?void 0:s?K(l,a):l,r=e.length-1,o;r>=0;r--)(o=e[r])&&(t=(s?o(l,a,t):o(t))||t);return s&&t&&J(l,a,t),t};let g=class extends m{};g=Q([v({components:{BaseExample:P,ModalExample:N,ModalConfigExample:G}})],g);function R(e,l,a,s,t,r){const o=f("BaseExample"),d=f("ModalExample"),n=f("ModalConfigExample");return b(),L(F,null,[l[0]||(l[0]=p("h2",null,"Examples",-1)),p("div",null,[c(o),c(d),c(n)])],64)}const de=h(g,[["render",R]]);export{de as default};
