var $e=Object.defineProperty;var ye=(n,t,c)=>t in n?$e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[t]=c;var x=(n,t,c)=>ye(n,typeof t!="symbol"?t+"":t,c);import{V as u,N as w}from"./NAah3XrW.js";import{_ as b}from"./onyWiYp2.js";import{_ as S}from"./CS2TcPBX.js";import{_ as v}from"./CAQzZ0uH.js";import{o as m,h as g,w as d,a as e,b as l,d as r,c as y,F as C,i as P,n as ne,t as D,r as k,y as ie,j as Se,m as h}from"./CEIPSiTs.js";import{_}from"./DlAUqK2U.js";import{_ as oe}from"./CnZFJwg2.js";import Ce from"./CX8y1ndC.js";import Te from"./tvvBacX7.js";import{s as Le}from"./DtNz156Q.js";import{_ as ke}from"./DFOICsuk.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var Pe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Oe=(n,t,c,s)=>{for(var o=s>1?void 0:s?De(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Pe(t,c,o),o};let O=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-dropdown">
  <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`})}mounted(){chi.dropdown(document.getElementById("dropdown-1"))}};O=Oe([w({})],O);function Be(n,t,c,s,o,a){const i=b,p=S,f=v;return m(),g(f,{title:"Base",id:"base",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Trigger and dropdown enclosed in the same div.",-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-1"},"Dropdown, click me"),e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(i,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const je=_(O,[["render",Be]]);var Ee=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Me=(n,t,c,s)=>{for(var o=s>1?void 0:s?He(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Ee(t,c,o),o};let B=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"buttons",[{text:"Primary",color:"primary"},{text:"Primary outline",color:"primary",variant:"outline"},{text:"Primary flat",color:"primary",variant:"flat"},{text:"Flat",variant:"flat"},{text:"Disabled",disabled:!0}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){this.codeSnippets.webcomponent=this.buttons.map(this.getWebComponentSnippet).join(`

`),this.codeSnippets.htmlblueprint=[...this.buttons.map(this.getHTMLSnippet),"<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>"].join(`

`)}getDropdownItemsSnippet(c=2,s=!1){return[1,2,3,4].map(o=>" ".repeat(c)+`<a class='chi-dropdown__menu-item' href='#'${s?' slot="menu"':""}>Item ${o}</a>`)}getWebComponentSnippet(c){const s=c.disabled?"<chi-dropdown position='bottom' button='Disabled' disabled>":`<chi-dropdown position='bottom' button='${c.text}'`+(c.color?` color='${c.color}'`:"")+(c.variant?` variant='${c.variant}'>`:">");return[`<!-- ${c.text} button -->`,s,...this.getDropdownItemsSnippet(2,!0),"</chi-dropdown>"].join(`
`)}getHTMLSnippet(c){const s=[c.color,c.variant].filter(Boolean).map(a=>" -"+a).join(""),o=c.disabled?`  <button id="dropdown-styles-4" class="chi-button chi-dropdown__trigger" disabled>${c.text}</button>`:`<button id="dropdown-styles-${c.text.replace(" ","-").toLowerCase()}" class="chi-button chi-dropdown__trigger${s}">${c.text}</button>`;return[`<!-- ${c.text} button -->`,'<div class="chi-dropdown">',o,'  <div class="chi-dropdown__menu">',...this.getDropdownItemsSnippet(4),"  </div>","</div>"].join(`
`)}};B=Me([w({})],B);const Re={class:"-d--flex"},Ae=["button","color","variant","disabled"],We={slot:"menu"};function Ne(n,t,c,s,o,a){const i=oe,p=b,f=S,I=v;return m(),g(I,{title:"Additional Styles",id:"additional-styles",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("The web component accepts the properties "),e("code",null,"color"),r(", "),e("code",null,"variant"),r(","),e("code",null,"size"),r(", "),e("code",null,"uppercase"),r(" and "),e("code",null,"disabled"),r(" to modify the underlying chi-button element behavior and style.")],-1)])),example:d(()=>[e("div",Re,[l(i,null,{default:d(()=>[(m(!0),y(C,null,P(n.buttons,($,L)=>(m(),y("chi-dropdown",{position:"bottom",key:$.text,button:$.text,color:$.color,variant:$.variant,disabled:$.disabled,class:ne(L&&"-ml--2")},[e("div",We,[(m(),y(C,null,P([1,2,3,4],T=>e("a",{class:"chi-dropdown__menu-item",key:`${$.text}-${T}`,href:"#"},[e("span",null,"Item "+D(T),1)])),64))])],10,Ae))),128))]),_:1})])]),"code-webcomponent":d(()=>[l(p,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(f),l(p,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ve=_(B,[["render",Ne]]);var Fe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,qe=(n,t,c,s)=>{for(var o=s>1?void 0:s?Je(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Fe(t,c,o),o};let j=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<button id="dropdown-2" class="chi-button chi-dropdown__trigger" data-target="#dropdown-2-menu">Dropdown component</button>
<p class="-text">There is no need for proximity between elements.</p>
<div class="chi-dropdown__menu" id="dropdown-2-menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<script>chi.dropdown(document.getElementById('dropdown-2'));<\/script>`})}mounted(){chi.dropdown(document.getElementById("dropdown-2"))}};j=qe([w({})],j);function ze(n,t,c,s,o,a){const i=b,p=S,f=v;return m(),g(f,{title:"Data-target",id:"data_target",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Dropdown referenced by a "),e("code",null,"data-target"),r(" attribute in the activator.")],-1)])),example:d(()=>t[1]||(t[1]=[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-2","data-target":"#dropdown-2-menu"},"Dropdown component",-1),e("p",{class:"-text"},"There is no need for proximity between elements.",-1),e("div",{class:"chi-dropdown__menu",id:"dropdown-2-menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(i,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ue=_(j,[["render",ze]]);var Ge=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Qe=(n,t,c,s)=>{for(var o=s>1?void 0:s?Ke(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Ge(t,c,o),o};let E=class extends u{};E=Qe([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown chi-dropdown__hover">
  <button class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>`}})})],E);function Xe(n,t,c,s,o,a){const i=b,p=S,f=v;return m(),g(f,{title:"Hover",id:"base",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Dropdown on hover is only supported when trigger and dropdown elements are enclosed in the same div. Use the "),e("code",null,"chi-dropdown__hover"),r(" class to achieve this.")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-dropdown chi-dropdown__hover"},[e("button",{class:"chi-button chi-dropdown__trigger"},"Dropdown component"),e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(i,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ye=_(E,[["render",Xe]]);var Ze=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=(n,t,c,s)=>{for(var o=s>1?void 0:s?et(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Ze(t,c,o),o};let H=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-dropdown">
  <button id="dropdown-animate" class="chi-button chi-dropdown__trigger -animate">Animated dropdown trigger</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-animate'));<\/script>`})}mounted(){chi.dropdown(document.getElementById("dropdown-animate"))}};H=tt([w({})],H);function ot(n,t,c,s,o,a){const i=b,p=S,f=v;return m(),g(f,{title:"Animate",id:"animated",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Triggers can be animated by applying the "),e("code",null,"-animate"),r(" class.")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger -animate",id:"dropdown-animate"},"Animated dropdown trigger"),e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(i,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nt=_(H,[["render",ot]]);var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ct=(n,t,c,s)=>{for(var o=s>1?void 0:s?st(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&it(t,c,o),o};let M=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- Top start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-top-start" data-position="top-start">Top start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Top -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-top" data-position="top">Top</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Top end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-top-end" data-position="top-end">Top end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Left start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-left-start" data-position="left-start">Left start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Left -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-left" data-position="left">Left</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Left end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-left-end" data-position="left-end">Left end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Right start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-right-start" data-position="right-start">Right start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Right -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-right" data-position="right">Right</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Right end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-right-end" data-position="right-end">Right end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Bottom start -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-bottom-start" data-position="bottom-start">Bottom start</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Bottom -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-bottom" data-position="bottom">Bottom</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>
<!-- Bottom end -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger" id="dropdown-bottom-end" data-position="bottom-end">Bottom end</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<!-- JavaScript -->
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-dropdown__trigger'));<\/script>`})}mounted(){chi.dropdown(document.querySelectorAll(".chi-dropdown .chi-dropdown__trigger"))}};M=ct([w({})],M);function at(n,t,c,s,o,a){const i=b,p=S,f=v;return m(),g(f,{title:"Positioning",id:"positioning",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Dropdown is prepared to work with positioning libraries like Popper.js. That is why we support the data-position attribute. Chevron orientation will change depending on its value. Valid values are "),e("code",null,"default"),r(", "),e("code",null,"initial"),r(", "),e("code",null,"top"),r(", "),e("code",null,"right"),r(", "),e("code",null,"bottom"),r(", "),e("code",null,"left"),r(", "),e("code",null,"top-start"),r(", "),e("code",null,"top-end"),r(", "),e("code",null,"right-start"),r(", "),e("code",null,"right-end"),r(", "),e("code",null,"bottom-start"),r(", "),e("code",null,"bottom-end"),r(", "),e("code",null,"left-start"),r(", "),e("code",null,"left-end"),r(".")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-grid -no-gutter -px-xl--3"},[e("div",{class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},[e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-top-start","data-position":"top-start"},"Top start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-top","data-position":"top"},"Top"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-top-end","data-position":"top-end"},"Top end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])]),e("div",{class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap"},[e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left-start","data-position":"left-start"},"Left start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left","data-position":"left"},"Left"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left-end","data-position":"left-end"},"Left end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])]),e("div",{class:"chi-col -d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center"},[e("div",{class:"-w--75 -text -text--muted -text--center -lh--2"},"Click buttons to see Dropdown positions")]),e("div",{class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap"},[e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-right-start","data-position":"right-start"},"Right start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-right","data-position":"right"},"Right"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-right-end","data-position":"right-end"},"Right end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])]),e("div",{class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},[e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-bottom-start","data-position":"bottom-start"},"Bottom start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-bottom","data-position":"bottom"},"Bottom"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-bottom-end","data-position":"bottom-end"},"Bottom end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(i,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const dt=_(M,[["render",at]]);var lt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,pt=(n,t,c,s)=>{for(var o=s>1?void 0:s?rt(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&lt(t,c,o),o};let R=class extends u{};R=pt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#">Disabled item</a>
  <a class="chi-dropdown__menu-item -hover" href="#">Hovered item</a>
</div>`}})})],R);function mt(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Menu item states",id:"states",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Menu items support the following states: "),e("code",null,"initial"),r(", "),e("code",null,"active"),r(", "),e("code",null,"disabled"),r(" and "),e("code",null,"hover"),r(".")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item"),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},"Active item"),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#exampleLink"},"Disabled item"),e("a",{class:"chi-dropdown__menu-item -hover",href:"#exampleLink"},"Hovered item")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ht=_(R,[["render",mt]]);var _t=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,wt=(n,t,c,s)=>{for(var o=s>1?void 0:s?ut(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&_t(t,c,o),o};let A=class extends u{};A=wt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu -list">
  <a class="chi-dropdown__menu-item" href="#">
    <span class="chi-dropdown__menu-item_title">Item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    <span class="chi-dropdown__menu-item_title">Active item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    <span class="chi-dropdown__menu-item_title">Disabled item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -hover" href="#">
    <span class="chi-dropdown__menu-item_title">Hovered item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
</div>`}})})],A);function bt(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Description",id:"description",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active -list"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Active item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Disabled item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -hover",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Hovered item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const vt=_(A,[["render",bt]]);var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,xt=(n,t,c,s)=>{for(var o=s>1?void 0:s?gt(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&ft(t,c,o),o};let W=class extends u{};W=xt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`}})})],W);function It(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Divider",id:"divider",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Several menu items can be arranged together by using a divider. Use the "),e("code",null,"chi-divider"),r(" component.")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $t=_(W,[["render",It]]);var yt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Ct=(n,t,c,s)=>{for(var o=s>1?void 0:s?St(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&yt(t,c,o),o};let N=class extends u{};N=Ct([w({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],leftIconCodeSnippets:{webcomponent:`<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-file-outline" aria-hidden="true"></i>
    New
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">
    <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
    Save
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-file-outline" aria-hidden="true"></i>
    Send
  </a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">
    <i class="chi-icon icon-cart" aria-hidden="true"></i>
    Buy
  </a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-users" aria-hidden="true"></i>
    Share
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-logout" aria-hidden="true"></i>
    Logout
  </a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-file-outline" aria-hidden="true"></i>New
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>Save
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-mail" aria-hidden="true"></i>Send
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    <i class="chi-icon icon-cart" aria-hidden="true"></i>Buy
  </a>
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-users" aria-hidden="true"></i>Share
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-logout" aria-hidden="true"></i>Logout
  </a>
</div>`},rightIconCodeSnippets:{webcomponent:`<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    New <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">
    Save <i class="chi-icon icon-arrow-to-bottom -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Send <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">
    Buy <i class="chi-icon icon-cart -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Share <i class="chi-icon icon-users -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Logout <i class="chi-icon icon-logout -icon--right" aria-hidden="true"></i>
  </a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">
    New <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    Save <i class="chi-icon icon-arrow-to-bottom -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    Send <i class="chi-icon icon-mail -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    Buy <i class="chi-icon icon-cart -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item" href="#">
    Share <i class="chi-icon icon-users -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    Logout <i class="chi-icon icon-logout -icon--right" aria-hidden="true"></i>
  </a>
</div>`}})})],N);function Tt(n,t,c,s,o,a){const i=b,p=v;return m(),y(C,null,[t[2]||(t[2]=e("h3",null,"Icons",-1)),t[3]||(t[3]=e("p",{class:"-text"},"Dropdown component has been developed to support Chi icons in the menu items.",-1)),l(p,{title:"Left Aligned","title-size":"h4",id:"icons-left",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-file-outline","aria-hidden":"true"}),r("New")]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"http://www.centurylink.com"},[e("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"}),r("Save")]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-mail","aria-hidden":"true"}),r("Send")]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},[e("i",{class:"chi-icon icon-cart","aria-hidden":"true"}),r("Buy")]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-users","aria-hidden":"true"}),r("Share")]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-logout","aria-hidden":"true"}),r("Logout")])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.leftIconCodeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.leftIconCodeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"]),l(p,{title:"Right Aligned","title-size":"h4",id:"icons-right",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("New"),e("i",{class:"chi-icon icon-file-outline -icon--right","aria-hidden":"true"})]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"http://www.centurylink.com"},[r("Save"),e("i",{class:"chi-icon icon-arrow-to-bottom -icon--right","aria-hidden":"true"})]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("Send"),e("i",{class:"chi-icon icon-mail -icon--right","aria-hidden":"true"})]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},[r("Buy"),e("i",{class:"chi-icon icon-cart -icon--right","aria-hidden":"true"})]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("Share"),e("i",{class:"chi-icon icon-users -icon--right","aria-hidden":"true"})]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("Logout"),e("i",{class:"chi-icon icon-logout -icon--right","aria-hidden":"true"})])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.rightIconCodeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.rightIconCodeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])],64)}const Lt=_(N,[["render",Tt]]);var kt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Dt=(n,t,c,s)=>{for(var o=s>1?void 0:s?Pt(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&kt(t,c,o),o};let V=class extends u{};V=Dt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -sm" type="search" placeholder="Search" aria-label="search input" />
    <button class="chi-button -icon -flat -sm" aria-label="Search">
      <div class="chi-button__content"><i class="chi-icon icon-search" aria-hidden="true"></i></div>
    </button>
  </div>
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`}})})],V);function Ot(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Search box",id:"search_box",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},"This search box is a special kind of text input prepared to be located on top of the menu-item. It has slightly smaller padding at the sides.",-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-input__wrapper -icon--right"},[e("input",{class:"chi-input chi-search__input -sm",type:"search",placeholder:"Search","aria-label":"search input"}),e("button",{class:"chi-button -icon -flat -sm","aria-label":"Search"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-search","aria-hidden":"true"})])])]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Bt=_(V,[["render",Ot]]);var jt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Ht=(n,t,c,s)=>{for(var o=s>1?void 0:s?Et(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&jt(t,c,o),o};let F=class extends u{};F=Ht([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox1">
      <label class="chi-checkbox__label" for="checkbox1">Item 1</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox2" disabled>
      <label class="chi-checkbox__label" for="checkbox2">Item 2</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox3" checked>
      <label class="chi-checkbox__label" for="checkbox3">Item 3</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox4">
      <label class="chi-checkbox__label" for="checkbox4">Item 4</label>
    </div>
  </div>
</div>`}}),computed:{additionalClasses(){return{"background-color":"#eee"}}}})],F);function Mt(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Base",titleSize:"h4",id:"checkboxes_base",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox1"}),e("label",{class:"chi-checkbox__label",for:"checkbox1"},"Item 1")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox2",disabled:""}),e("label",{class:"chi-checkbox__label",for:"checkbox2"},"Item 2")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox3",checked:""}),e("label",{class:"chi-checkbox__label",for:"checkbox3"},"Item 3")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox4"}),e("label",{class:"chi-checkbox__label",for:"checkbox4"},"Item 4")])])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Rt=_(F,[["render",Mt]]);var At=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Nt=(n,t,c,s)=>{for(var o=s>1?void 0:s?Wt(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&At(t,c,o),o};let J=class extends u{};J=Nt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox1">
    <label class="chi-checkbox__label" for="checkbox1">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 1
    </label>
  </div>
</div>
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox2" disabled>
    <label class="chi-checkbox__label" for="checkbox2">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 2
    </label>
  </div>
</div>
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox3" checked>
    <label class="chi-checkbox__label" for="checkbox3">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 3
    </label>
  </div>
</div>
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox4">
    <label class="chi-checkbox__label" for="checkbox4">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 4
    </label>
  </div>
</div>
</div>`}})})],J);function Vt(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"With Icons",titleSize:"h4",id:"checkboxes_icons",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--10 -w-sm--6 -w-md--7 -w-lg--5 -w-xl--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox1b"}),e("label",{class:"chi-checkbox__label",for:"checkbox1b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 1")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox2b",disabled:""}),e("label",{class:"chi-checkbox__label",for:"checkbox2b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 2")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox3b",checked:""}),e("label",{class:"chi-checkbox__label",for:"checkbox3b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 3")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox4b"}),e("label",{class:"chi-checkbox__label",for:"checkbox4b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 4")])])])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ft=_(J,[["render",Vt]]);var Jt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,zt=(n,t,c,s)=>{for(var o=s>1?void 0:s?qt(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Jt(t,c,o),o};let q=class extends u{};q=zt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <fieldset>
    <legend class="chi-dropdown__menu-item">Select an option</legend>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio1">
        <label class="chi-radio__label" for="radio1">Radio Button 1</label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio2" disabled>
        <label class="chi-radio__label" for="radio2">Disabled Radio Button 2</label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio3">
        <label class="chi-radio__label" for="radio3">Radio Button 3</label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio4">
        <label class="chi-radio__label" for="radio4">Radio Button 4</label>
      </div>
    </div>
  </fieldset>
</div>`}})})],q);function Ut(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Radio Buttons",id:"radio_buttons",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("fieldset",null,[e("legend",{class:"chi-dropdown__menu-item"},"Select an option"),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio1"}),e("label",{class:"chi-radio__label",for:"radio1"},"Radio Button 1")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio2",disabled:""}),e("label",{class:"chi-radio__label",for:"radio2"},"Disabled Radio Button 2")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio3"}),e("label",{class:"chi-radio__label",for:"radio3"},"Radio Button 3")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio4"}),e("label",{class:"chi-radio__label",for:"radio4"},"Radio Button 4")])])])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Gt=_(q,[["render",Ut]]);var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Xt=(n,t,c,s)=>{for(var o=s>1?void 0:s?Qt(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Kt(t,c,o),o};let z=class extends u{};z=Xt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <div class="chi-dropdown__menu-item">
    <span class="-text -mr--2">200GB</span>
    <input class="chi-input" type="range" aria-label="Range description">
    <span class="-text -ml--2">5TB</span>
  </div>
  <div class="chi-divider"></div>
  <legend class="chi-dropdown__menu-item">Select range</legend>
  <div class="chi-dropdown__menu-item">
    <input class="chi-input" type="range" aria-label="Range description">
  </div>
</div>`}})})],z);function Yt(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Range Input",id:"range_input",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-dropdown__menu-item"},[e("span",{class:"-text -mr--2"},"200GB"),e("input",{class:"chi-input",type:"range","aria-label":"Range description"}),e("span",{class:"-text -ml--2"},"5TB")]),e("div",{class:"chi-divider"}),e("legend",{class:"chi-dropdown__menu-item"},"Select range"),e("div",{class:"chi-dropdown__menu-item"},[e("input",{class:"chi-input",type:"range","aria-label":"Range description"})])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Zt=_(z,[["render",Yt]]);var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,oo=(n,t,c,s)=>{for(var o=s>1?void 0:s?to(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&eo(t,c,o),o};let U=class extends u{};U=oo([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <fieldset>
    <legend class="chi-dropdown__menu-item">Configure options</legend>
    <div class="chi-dropdown__menu-item">
      <div class="chi-form__item">
        <label class="chi-switch -xs" for="toggle-mail">
          <input type="checkbox" class="chi-switch__input" id="toggle-mail">
          <span class="chi-switch__content">
            <span class="chi-switch__thumb"></span>
          </span>
          <span class="chi-switch__label">Email notifications</span>
        </label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-form__item">
        <label class="chi-switch -xs" for="toggle-tlf">
          <input type="checkbox" class="chi-switch__input" id="toggle-tlf">
          <span class="chi-switch__content">
            <span class="chi-switch__thumb"></span>
          </span>
          <span class="chi-switch__label">Phone notifications</span>
        </label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-form__item">
        <label class="chi-switch -xs" for="toggle-app">
          <input type="checkbox" class="chi-switch__input" id="toggle-mail">
          <span class="chi-switch__content">
            <span class="chi-switch__thumb"></span>
          </span>
          <span class="chi-switch__label">Email notifications</span>
        </label>
      </div>
    </div>
  </fieldset>
</div>`}})})],U);function no(n,t,c,s,o,a){const i=b,p=S,f=v;return m(),g(f,{title:"Toggle Switch",id:"toggle_switch",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>t[0]||(t[0]=[e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("legend",{class:"chi-dropdown__menu-item"},"Configure options"),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-mail"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-mail"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Email notifications")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-tlf"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-tlf"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Phone notifications")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-app"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-app"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"App notifications")])])])])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(i,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const io=_(U,[["render",no]]);var so=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ao=(n,t,c,s)=>{for(var o=s>1?void 0:s?co(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&so(t,c,o),o};let G=class extends u{};G=ao([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <span class="chi-dropdown__menu-item">Text 1</span>
  <span class="chi-dropdown__menu-item">Text 2</span>
  <span class="chi-dropdown__menu-item">Text 3</span>
  <span class="chi-dropdown__menu-item">Text 4</span>
</div>`}})})],G);function lo(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Plain Text",id:"plain_text",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Use a "),e("code",null,"span"),r(" tag to include text without rendering as a link.")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("span",{class:"chi-dropdown__menu-item"},"Text 1"),e("span",{class:"chi-dropdown__menu-item"},"Text 2"),e("span",{class:"chi-dropdown__menu-item"},"Text 3"),e("span",{class:"chi-dropdown__menu-item"},"Text 4")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ro=_(G,[["render",lo]]);var po=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,ho=(n,t,c,s)=>{for(var o=s>1?void 0:s?mo(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&po(t,c,o),o};let K=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">
    <div class="-flex--ellipsis" data-tooltip="Item 3 with truncated longer text">Item 3 with truncated longer text</div>
  </a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<!-- Tooltip for truncated text -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`})}mounted(){chi.tooltip(document.getElementById("example-truncated-menu-item"))}};K=ho([w({})],K);function _o(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Truncate long menu-items",titleSize:"h4",id:"truncate_long_menu_items",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Wrap the menu-item content in a div with the class "),e("code",null,"-flex--ellipsis"),r(" to truncate long strings.")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-dropdown__menu -active",style:{width:"10rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",id:"example-truncated-menu-item",href:"#exampleLink","data-tooltip":"Item 3 with truncated longer text"},[e("div",{class:"-flex--ellipsis"},"Item 3 with truncated longer text")]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const uo=_(K,[["render",_o]]);var wo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,vo=(n,t,c,s)=>{for(var o=s>1?void 0:s?bo(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&wo(t,c,o),o};let Q=class extends u{};Q=vo([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`}})})],Q);function fo(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Flexible height",titleSize:"h4",id:"flexible_height",tabs:n.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Add the class "),e("code",null,"-h--auto"),r(" to set menu item height to auto.")],-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-dropdown__menu -active",style:{width:"10rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("div",{class:"chi-dropdown__menu-item -h--auto -py--1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2")],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const go=_(Q,[["render",fo]]);var xo=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,$o=(n,t,c,s)=>{for(var o=s>1?void 0:s?Io(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&xo(t,c,o),o};let X=class extends u{};X=$o([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-dropdown visible-items="3" button="Dropdown, click me">
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 5</a>
      </chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
      <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
      <div class="chi-dropdown__menu" style="overflow-y: auto; max-height: 7rem">
        <a class="chi-dropdown__menu-item" href="#">Item 1</a>
        <a class="chi-dropdown__menu-item" href="#">Item 2</a>
        <a class="chi-dropdown__menu-item" href="#">Item 3</a>
        <a class="chi-dropdown__menu-item" href="#">Item 4</a>
        <a class="chi-dropdown__menu-item" href="#">Item 5</a>
      </div>
    </div>`}})})],X);function yo(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Visible Items",id:"visible_items",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Shows only given number of items.",-1)])),example:d(()=>t[1]||(t[1]=[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left-end"},"Visible items"),e("div",{class:"chi-dropdown__menu",style:{"overflow-y":"auto","max-height":"7rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 5")])],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const So=_(X,[["render",yo]]),Co={setup(){const n=k(null),t=k(["Item 1","Item 2","Item 3","Item 4"]),c=k(t.value[0]);function s(i){c.value=i.target.text,n.value&&n.value.hide()}const o=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:`<chi-dropdown button="Dropdown, click me" retain-selection>
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button id="example__dropdown-retain-selection" style="width: 180px;"
  class="chi-button chi-dropdown__trigger -d--flex -justify-content--between">Dropdown, click me</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item">Item 1</a>
    <a class="chi-dropdown__menu-item">Item 2</a>
    <a class="chi-dropdown__menu-item">Item 3</a>
    <a class="chi-dropdown__menu-item">Item 4</a>
  </div>
</div>

<script>
  chi.dropdown(document.getElementById('example__dropdown-retain-selection'));
  <!-- Include your custom logic here to retain dropdown selection -->
<\/script>`};return ie(()=>{chi.dropdown(document.getElementById("example__dropdown-retain-selection"))}),{dropdownElement:n,items:t,selectedItem:c,onChange:s,exampleTabs:o,codeSnippets:a}}},To={class:"chi-dropdown",ref:"dropdownElement"},Lo={class:"chi-button chi-dropdown__trigger -d--flex -justify-content--between",id:"example__dropdown-retain-selection",style:{width:"180px"}},ko={class:"chi-dropdown__menu"};function Po(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Retain selection",id:"retain_selection",tabs:s.exampleTabs},{"example-description":d(()=>t[1]||(t[1]=[e("p",{class:"-text"},[r("There is an available property, "),e("code",null,"retain-selection"),r(", which allows retaining the selected item in the dropdown as active and see the selected item when the dropdown is closed.")],-1)])),example:d(()=>[e("div",To,[e("button",Lo,D(s.selectedItem),1),e("div",ko,[(m(!0),y(C,null,P(s.items,f=>(m(),y("a",{class:ne(["chi-dropdown__menu-item",{"-active":s.selectedItem===f}]),key:f,onClick:t[0]||(t[0]=(...I)=>s.onChange&&s.onChange(...I))},D(f),3))),128))])],512)]),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:s.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:s.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Do=_(Co,[["render",Po]]),Oo={setup(){const n=Se(),t=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:`<chi-dropdown icon="more-vert" icon-tooltip-message="More options">
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button id="example__dropdown-icon" class="chi-button chi-dropdown__trigger chi-dropdown__icon"
  aria-label="More options" data-tooltip="More options">
    <div class="chi-button__content">
      <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
    </div>
  </button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item">Item 1</a>
    <a class="chi-dropdown__menu-item">Item 2</a>
    <a class="chi-dropdown__menu-item">Item 3</a>
    <a class="chi-dropdown__menu-item">Item 4</a>
  </div>
</div>

<script>
  chi.dropdown(document.getElementById('example__dropdown-icon'));
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`};return ie(()=>{chi.dropdown(document.getElementById("example__dropdown-icon")),chi.tooltip(document.querySelectorAll("[data-tooltip]"))}),{exampleTabs:t,codeSnippets:c,selectedTheme:n}}},Bo={class:"chi-dropdown"},jo=["variant"];function Eo(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Icon",id:"icon_trigger",tabs:s.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("There is an available property, "),e("code",null,"icon"),r(", which allows adding an icon as the dropdown trigger.")],-1)])),example:d(()=>[e("div",Bo,[e("button",{class:"chi-button chi-dropdown__trigger chi-dropdown__icon",id:"example__dropdown-icon","aria-label":"More options","icon-tooltip-message":"More options",variant:s.selectedTheme==="portal"?"flat":""},t[1]||(t[1]=[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})],-1)]),8,jo),t[2]||(t[2]=e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item"},"Item 1"),e("a",{class:"chi-dropdown__menu-item"},"Item 2"),e("a",{class:"chi-dropdown__menu-item"},"Item 3"),e("a",{class:"chi-dropdown__menu-item"},"Item 4")],-1))])]),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:s.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(i,{class:"html",lang:"html",code:s.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ho=_(Oo,[["render",Eo]]);var Mo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Ao=(n,t,c,s)=>{for(var o=s>1?void 0:s?Ro(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Mo(t,c,o),o};let Y=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);x(this,"codeSnippets",{webcomponent:`<!-- Select mode single -->
<chi-dropdown button="- Select single -" select-mode> <!-- or select-mode="single" -->
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>

<!-- Select mode multi -->
<chi-dropdown button="- Select multi -" select-mode="multi">
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`
`})}};Y=Ao([w({})],Y);function Wo(n,t,c,s,o,a){const i=b,p=v;return m(),g(p,{title:"Select mode",id:"select_mode",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("The "),e("code",null,"select-mode"),r(" property enables the looks and feels of the "),e("code",null,"select"),r(" component, with the advantage of having the options to be shown with styles following the brand guidelines and independent from the operating systems or browsers.")],-1),e("p",{class:"-text"},[r("With value "),e("code",null,"single"),r(", only one option can be selected. With value "),e("code",null,"multi"),r(" any number of options can be selected, and clicking a selected option will unselect it.")],-1)])),example:d(()=>t[1]||(t[1]=[e("chi-dropdown",{"select-mode":"single",button:"- Select single -"},[e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 4")],-1),e("chi-dropdown",{class:"-mt--2","select-mode":"multi",button:"- Select multi -"},[e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 4")],-1)])),"code-webcomponent":d(()=>[l(i,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>t[2]||(t[2]=[])),_:1},8,["tabs"])}const No=_(Y,[["render",Wo]]);var Vo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Jo=(n,t,c,s)=>{for(var o=s>1?void 0:s?Fo(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Vo(t,c,o),o};let Z=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:`<chi-dropdown
  position='bottom'
  button='Dropdown with error'
  state='danger'
  helper-message='Helpful info for the user'
>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger -b--danger -fluid">
    Dropdown with error
  </button>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Helpful info for the user
  </div>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>`})}};Z=Jo([w({})],Z);const qo={class:"-d--flex"};function zo(n,t,c,s,o,a){const i=oe,p=b,f=S,I=v;return m(),g(I,{title:"Error and helper message",id:"error-helper-message",tabs:n.exampleTabs},{"example-description":d(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Use the state "),e("code",null,"danger"),r(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger states must include an error message explaining the failure and/or how to correct it. Other allowed states are "),e("code",null,"warning"),r(", "),e("code",null,"info"),r(" and "),e("code",null,"success"),r(".")],-1)])),example:d(()=>[e("div",qo,[l(i,null,{default:d(()=>t[1]||(t[1]=[e("chi-dropdown",{position:"bottom",button:"Dropdown with error",state:"danger","helper-message":"Helpful info for the user"},[e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 4")],-1)])),_:1})])]),"code-webcomponent":d(()=>[l(p,{class:"html",lang:"html",code:n.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(f),l(p,{lang:"html",code:n.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Uo=_(Z,[["render",zo]]);var Go=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Qo=(n,t,c,s)=>{for(var o=s>1?void 0:s?Ko(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Go(t,c,o),o};let ee=class extends u{};ee=Qo([w({components:{Animated:nt,BaseExample:je,AdditionalStyles:Ve,CheckboxesBase:Rt,CheckboxesIcons:Ft,DataTarget:Ue,Description:vt,Divider:$t,FlexibleHeight:go,Hover:Ye,Icons:Lt,PlainText:ro,Positioning:dt,RadioButtons:Gt,RangeInput:Zt,SearchBox:Bt,States:ht,ToggleSwitch:io,TruncateLongMenuItems:uo,VisibleItems:So,RetainSelection:Do,IconTrigger:Ho,SelectMode:No,HelperMessage:Uo}})],ee);function Xo(n,t,c,s,o,a){const i=h("BaseExample"),p=h("AdditionalStyles"),f=h("HelperMessage"),I=h("DataTarget"),$=h("Hover"),L=h("Animated"),T=h("Positioning"),se=h("States"),ce=h("Description"),ae=h("Divider"),de=h("Icons"),le=h("SearchBox"),re=h("VisibleItems"),pe=h("RetainSelection"),me=h("SelectMode"),he=oe,_e=h("IconTrigger"),ue=h("CheckboxesBase"),we=h("CheckboxesIcons"),be=h("RadioButtons"),ve=h("RangeInput"),fe=h("ToggleSwitch"),ge=h("PlainText"),xe=h("TruncateLongMenuItems"),Ie=h("FlexibleHeight");return m(),y("div",null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),t[1]||(t[1]=e("p",{class:"-text"},[r("A dropdown must be associated with an activator, commonly a button, which, at the time of being clicked, expands the dropdown. Activator and dropdown should be contained in a div with a "),e("code",null,"chi-dropdown"),r(" class, or otherwise, the activator must reference the dropdown with a "),e("code",null,"data-target"),r(" attribute. Use the "),e("code",null,"chi-dropdown__trigger"),r(" class on your activator button to make the chevron appear.")],-1)),l(i),l(p),l(f),l(I),l($),l(L),l(T),t[2]||(t[2]=e("h3",null,"Menu",-1)),l(se),l(ce),l(ae),l(de),l(le),l(re),l(pe),l(he,null,{default:d(()=>[l(me)]),_:1}),l(_e),t[3]||(t[3]=e("h3",null,"Checkboxes",-1)),l(ue),l(we),l(be),l(ve),l(fe),l(ge),t[4]||(t[4]=e("h3",null,"Helpers",-1)),l(xe),l(Ie)])}const Yo=_(ee,[["render",Xo]]);var Zo=Object.defineProperty,en=Object.getOwnPropertyDescriptor,tn=(n,t,c,s)=>{for(var o=s>1?void 0:s?en(t,c):t,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(s?i(t,c,o):i(o))||o);return s&&o&&Zo(t,c,o),o};let te=class extends u{constructor(){super(...arguments);x(this,"pageTabs",Le)}};te=tn([w({components:{Accessibility:Te,Examples:Yo,Properties:Ce}})],te);const on={class:"chi-grid__container -pt--3"},nn={class:"chi-tabs-panel -active",id:"examples"},sn={class:"chi-tabs-panel",id:"properties"},cn={class:"chi-tabs-panel",id:"accessibility"};function an(n,t,c,s,o,a){const i=ke,p=h("Examples"),f=h("Properties"),I=h("Accessibility");return m(),y(C,null,[l(i,{title:"Dropdown",description:"Dropdowns contain and give access to a list of buttons or other elements hidden by default. They are commonly used for menus in web applications.",tabs:n.pageTabs},null,8,["tabs"]),e("div",on,[e("div",nn,[l(p)]),e("div",sn,[l(f)]),e("div",cn,[l(I)])])],64)}const Un=_(te,[["render",an]]);export{Un as default};
