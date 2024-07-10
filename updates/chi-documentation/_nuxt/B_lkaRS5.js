var Ie=Object.defineProperty;var ye=(o,i,s)=>i in o?Ie(o,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[i]=s;var x=(o,i,s)=>ye(o,typeof i!="symbol"?i+"":i,s);import{V as u,N as w}from"./uJTUijt2.js";import{_ as b}from"./D8GK0F__.js";import{_ as S}from"./BLbnEGma.js";import{_ as v}from"./DKu8Jd2y.js";import{o as m,f as g,w as d,b as l,a as e,c as y,F as T,i as P,n as ne,t as D,d as r,v as k,x as ie,g as Se,r as h}from"./B5CYXVwa.js";import{_}from"./DlAUqK2U.js";import{_ as oe}from"./C-hgEc7b.js";import Ce from"./BTgaXgbm.js";import Te from"./BsSx_usm.js";import{s as Le}from"./2EwpEKcw.js";import{_ as ke}from"./Be4hAolY.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var Pe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Oe=(o,i,s,c)=>{for(var t=c>1?void 0:c?De(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Pe(i,s,t),t};let O=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-dropdown">
  <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`})}mounted(){chi.dropdown(document.getElementById("dropdown-1"))}};O=Oe([w({})],O);const Be=e("p",{class:"-text"},"Trigger and dropdown enclosed in the same div.",-1),je=e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-1"},"Dropdown, click me"),e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")])],-1);function Ee(o,i,s,c,t,a){const n=b,p=S,f=v;return m(),g(f,{title:"Base",id:"base",tabs:o.exampleTabs},{"example-description":d(()=>[Be]),example:d(()=>[je]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const He=_(O,[["render",Ee]]);var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ae=(o,i,s,c)=>{for(var t=c>1?void 0:c?Re(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Me(i,s,t),t};let B=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"buttons",[{text:"Primary",color:"primary"},{text:"Primary outline",color:"primary",variant:"outline"},{text:"Primary flat",color:"primary",variant:"flat"},{text:"Flat",variant:"flat"},{text:"Disabled",disabled:!0}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){this.codeSnippets.webcomponent=this.buttons.map(this.getWebComponentSnippet).join(`

`),this.codeSnippets.htmlblueprint=[...this.buttons.map(this.getHTMLSnippet),"<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>"].join(`

`)}getDropdownItemsSnippet(s=2,c=!1){return[1,2,3,4].map(t=>" ".repeat(s)+`<a class='chi-dropdown__menu-item' href='#'${c?' slot="menu"':""}>Item ${t}</a>`)}getWebComponentSnippet(s){const c=s.disabled?"<chi-dropdown position='bottom' button='Disabled' disabled>":`<chi-dropdown position='bottom' button='${s.text}'`+(s.color?` color='${s.color}'`:"")+(s.variant?` variant='${s.variant}'>`:">");return[`<!-- ${s.text} button -->`,c,...this.getDropdownItemsSnippet(2,!0),"</chi-dropdown>"].join(`
`)}getHTMLSnippet(s){const c=[s.color,s.variant].filter(Boolean).map(a=>" -"+a).join(""),t=s.disabled?`  <button id="dropdown-styles-4" class="chi-button chi-dropdown__trigger" disabled>${s.text}</button>`:`<button id="dropdown-styles-${s.text.replace(" ","-").toLowerCase()}" class="chi-button chi-dropdown__trigger${c}">${s.text}</button>`;return[`<!-- ${s.text} button -->`,'<div class="chi-dropdown">',t,'  <div class="chi-dropdown__menu">',...this.getDropdownItemsSnippet(4),"  </div>","</div>"].join(`
`)}};B=Ae([w({})],B);const We=e("p",{class:"-text"},[r("The web component accepts the properties "),e("code",null,"color"),r(", "),e("code",null,"variant"),r(","),e("code",null,"size"),r(", "),e("code",null,"uppercase"),r(" and "),e("code",null,"disabled"),r(" to modify the underlying chi-button element behavior and style.")],-1),Ne={class:"-d--flex"},Ve=["button","color","variant","disabled"],Fe={slot:"menu"};function Je(o,i,s,c,t,a){const n=oe,p=b,f=S,$=v;return m(),g($,{title:"Additional Styles",id:"additional-styles",tabs:o.exampleTabs},{"example-description":d(()=>[We]),example:d(()=>[e("div",Ne,[l(n,null,{default:d(()=>[(m(!0),y(T,null,P(o.buttons,(I,L)=>(m(),y("chi-dropdown",{position:"bottom",key:I.text,button:I.text,color:I.color,variant:I.variant,disabled:I.disabled,class:ne(L&&"-ml--2")},[e("div",Fe,[(m(),y(T,null,P([1,2,3,4],C=>e("a",{class:"chi-dropdown__menu-item",key:`${I.text}-${C}`,href:"#"},[e("span",null,"Item "+D(C),1)])),64))])],10,Ve))),128))]),_:1})])]),"code-webcomponent":d(()=>[l(p,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(f),l(p,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=_(B,[["render",Je]]);var ze=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Ge=(o,i,s,c)=>{for(var t=c>1?void 0:c?Ue(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&ze(i,s,t),t};let j=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<button id="dropdown-2" class="chi-button chi-dropdown__trigger" data-target="#dropdown-2-menu">Dropdown component</button>
<p class="-text">There is no need for proximity between elements.</p>
<div class="chi-dropdown__menu" id="dropdown-2-menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<script>chi.dropdown(document.getElementById('dropdown-2'));<\/script>`})}mounted(){chi.dropdown(document.getElementById("dropdown-2"))}};j=Ge([w({})],j);const Ke=e("p",{class:"-text"},[r("Dropdown referenced by a "),e("code",null,"data-target"),r(" attribute in the activator.")],-1),Qe=e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-2","data-target":"#dropdown-2-menu"},"Dropdown component",-1),Xe=e("p",{class:"-text"},"There is no need for proximity between elements.",-1),Ye=e("div",{class:"chi-dropdown__menu",id:"dropdown-2-menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")],-1);function Ze(o,i,s,c,t,a){const n=b,p=S,f=v;return m(),g(f,{title:"Data-target",id:"data_target",tabs:o.exampleTabs},{"example-description":d(()=>[Ke]),example:d(()=>[Qe,Xe,Ye]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const et=_(j,[["render",Ze]]);var tt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,nt=(o,i,s,c)=>{for(var t=c>1?void 0:c?ot(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&tt(i,s,t),t};let E=class extends u{};E=nt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown chi-dropdown__hover">
  <button class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>`}})})],E);const it=e("p",{class:"-text"},[r("Dropdown on hover is only supported when trigger and dropdown elements are enclosed in the same div. Use the "),e("code",null,"chi-dropdown__hover"),r(" class to achieve this.")],-1),ct=e("div",{class:"chi-dropdown chi-dropdown__hover"},[e("button",{class:"chi-button chi-dropdown__trigger"},"Dropdown component"),e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])],-1);function st(o,i,s,c,t,a){const n=b,p=S,f=v;return m(),g(f,{title:"Hover",id:"base",tabs:o.exampleTabs},{"example-description":d(()=>[it]),example:d(()=>[ct]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const at=_(E,[["render",st]]);var dt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,rt=(o,i,s,c)=>{for(var t=c>1?void 0:c?lt(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&dt(i,s,t),t};let H=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-dropdown">
  <button id="dropdown-animate" class="chi-button chi-dropdown__trigger -animate">Animated dropdown trigger</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-animate'));<\/script>`})}mounted(){chi.dropdown(document.getElementById("dropdown-animate"))}};H=rt([w({})],H);const pt=e("p",{class:"-text"},[r("Triggers can be animated by applying the "),e("code",null,"-animate"),r(" class.")],-1),mt=e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger -animate",id:"dropdown-animate"},"Animated dropdown trigger"),e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])],-1);function ht(o,i,s,c,t,a){const n=b,p=S,f=v;return m(),g(f,{title:"Animate",id:"animated",tabs:o.exampleTabs},{"example-description":d(()=>[pt]),example:d(()=>[mt]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _t=_(H,[["render",ht]]);var ut=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,bt=(o,i,s,c)=>{for(var t=c>1?void 0:c?wt(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&ut(i,s,t),t};let M=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- Top start -->
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
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-dropdown__trigger'));<\/script>`})}mounted(){chi.dropdown(document.querySelectorAll(".chi-dropdown .chi-dropdown__trigger"))}};M=bt([w({})],M);const vt=e("p",{class:"-text"},[r("Dropdown is prepared to work with positioning libraries like Popper.js. That is why we support the data-position attribute. Chevron orientation will change depending on its value. Valid values are "),e("code",null,"default"),r(", "),e("code",null,"initial"),r(", "),e("code",null,"top"),r(", "),e("code",null,"right"),r(", "),e("code",null,"bottom"),r(", "),e("code",null,"left"),r(", "),e("code",null,"top-start"),r(", "),e("code",null,"top-end"),r(", "),e("code",null,"right-start"),r(", "),e("code",null,"right-end"),r(", "),e("code",null,"bottom-start"),r(", "),e("code",null,"bottom-end"),r(", "),e("code",null,"left-start"),r(", "),e("code",null,"left-end"),r(".")],-1),ft=e("div",{class:"chi-grid -no-gutter -px-xl--3"},[e("div",{class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},[e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-top-start","data-position":"top-start"},"Top start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-top","data-position":"top"},"Top"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-top-end","data-position":"top-end"},"Top end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])]),e("div",{class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap"},[e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left-start","data-position":"left-start"},"Left start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left","data-position":"left"},"Left"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left-end","data-position":"left-end"},"Left end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])]),e("div",{class:"chi-col -d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center"},[e("div",{class:"-w--75 -text -text--muted -text--center -lh--2"},"Click buttons to see Dropdown positions")]),e("div",{class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap"},[e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-right-start","data-position":"right-start"},"Right start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-right","data-position":"right"},"Right"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1 -py-sm--3"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-right-end","data-position":"right-end"},"Right end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])]),e("div",{class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},[e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-bottom-start","data-position":"bottom-start"},"Bottom start"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-bottom","data-position":"bottom"},"Bottom"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])]),e("div",{class:"-p--1"},[e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-bottom-end","data-position":"bottom-end"},"Bottom end"),e("div",{class:"chi-dropdown__menu",style:{width:"15rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3")])])])])],-1);function gt(o,i,s,c,t,a){const n=b,p=S,f=v;return m(),g(f,{title:"Positioning",id:"positioning",tabs:o.exampleTabs},{"example-description":d(()=>[vt]),example:d(()=>[ft]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xt=_(M,[["render",gt]]);var $t=Object.defineProperty,It=Object.getOwnPropertyDescriptor,yt=(o,i,s,c)=>{for(var t=c>1?void 0:c?It(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&$t(i,s,t),t};let R=class extends u{};R=yt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#">Disabled item</a>
  <a class="chi-dropdown__menu-item -hover" href="#">Hovered item</a>
</div>`}})})],R);const St=e("p",{class:"-text"},[r("Menu items support the following states: "),e("code",null,"initial"),r(", "),e("code",null,"active"),r(", "),e("code",null,"disabled"),r(" and "),e("code",null,"hover"),r(".")],-1),Ct=e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item"),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},"Active item"),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#exampleLink"},"Disabled item"),e("a",{class:"chi-dropdown__menu-item -hover",href:"#exampleLink"},"Hovered item")])],-1);function Tt(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Menu item states",id:"states",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>[St]),example:d(()=>[Ct]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Lt=_(R,[["render",Tt]]);var kt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Dt=(o,i,s,c)=>{for(var t=c>1?void 0:c?Pt(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&kt(i,s,t),t};let A=class extends u{};A=Dt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu -list">
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
</div>`}})})],A);const Ot=e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active -list"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Active item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Disabled item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -hover",href:"#exampleLink"},[e("span",{class:"chi-dropdown__menu-item_title"},"Hovered item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")])])],-1);function Bt(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Description",id:"description",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[Ot]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const jt=_(A,[["render",Bt]]);var Et=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Mt=(o,i,s,c)=>{for(var t=c>1?void 0:c?Ht(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Et(i,s,t),t};let W=class extends u{};W=Mt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`}})})],W);const Rt=e("p",{class:"-text"},[r("Several menu items can be arranged together by using a divider. Use the "),e("code",null,"chi-divider"),r(" component.")],-1),At=e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")])],-1);function Wt(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Divider",id:"divider",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>[Rt]),example:d(()=>[At]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Nt=_(W,[["render",Wt]]);var Vt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Jt=(o,i,s,c)=>{for(var t=c>1?void 0:c?Ft(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Vt(i,s,t),t};let N=class extends u{};N=Jt([w({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],leftIconCodeSnippets:{webcomponent:`<chi-dropdown active>
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
</div>`}})})],N);const qt=e("h3",null,"Icons",-1),zt=e("p",{class:"-text"},"Dropdown component has been developed to support Chi icons in the menu items.",-1),Ut=e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-file-outline","aria-hidden":"true"}),r("New")]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"http://www.centurylink.com"},[e("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"}),r("Save")]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-mail","aria-hidden":"true"}),r("Send")]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},[e("i",{class:"chi-icon icon-cart","aria-hidden":"true"}),r("Buy")]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-users","aria-hidden":"true"}),r("Share")]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[e("i",{class:"chi-icon icon-logout","aria-hidden":"true"}),r("Logout")])])],-1),Gt=e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("New"),e("i",{class:"chi-icon icon-file-outline -icon--right","aria-hidden":"true"})]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"http://www.centurylink.com"},[r("Save"),e("i",{class:"chi-icon icon-arrow-to-bottom -icon--right","aria-hidden":"true"})]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("Send"),e("i",{class:"chi-icon icon-mail -icon--right","aria-hidden":"true"})]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink"},[r("Buy"),e("i",{class:"chi-icon icon-cart -icon--right","aria-hidden":"true"})]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("Share"),e("i",{class:"chi-icon icon-users -icon--right","aria-hidden":"true"})]),e("div",{class:"chi-divider"}),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},[r("Logout"),e("i",{class:"chi-icon icon-logout -icon--right","aria-hidden":"true"})])])],-1);function Kt(o,i,s,c,t,a){const n=b,p=v;return m(),y(T,null,[qt,zt,l(p,{title:"Left Aligned","title-size":"h4",id:"icons-left",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[Ut]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.leftIconCodeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.leftIconCodeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"]),l(p,{title:"Right Aligned","title-size":"h4",id:"icons-right",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[Gt]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.rightIconCodeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.rightIconCodeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])],64)}const Qt=_(N,[["render",Kt]]);var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Zt=(o,i,s,c)=>{for(var t=c>1?void 0:c?Yt(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Xt(i,s,t),t};let V=class extends u{};V=Zt([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`}})})],V);const eo=e("p",{class:"-text"},"This search box is a special kind of text input prepared to be located on top of the menu-item. It has slightly smaller padding at the sides.",-1),to=e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-input__wrapper -icon--right"},[e("input",{class:"chi-input chi-search__input -sm",type:"search",placeholder:"Search","aria-label":"search input"}),e("button",{class:"chi-button -icon -flat -sm","aria-label":"Search"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-search","aria-hidden":"true"})])])]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")])],-1);function oo(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Search box",id:"search_box",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>[eo]),example:d(()=>[to]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const no=_(V,[["render",oo]]);var io=Object.defineProperty,co=Object.getOwnPropertyDescriptor,so=(o,i,s,c)=>{for(var t=c>1?void 0:c?co(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&io(i,s,t),t};let F=class extends u{};F=so([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`}}),computed:{additionalClasses(){return{"background-color":"#eee"}}}})],F);const ao=e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox1"}),e("label",{class:"chi-checkbox__label",for:"checkbox1"},"Item 1")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox2",disabled:""}),e("label",{class:"chi-checkbox__label",for:"checkbox2"},"Item 2")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox3",checked:""}),e("label",{class:"chi-checkbox__label",for:"checkbox3"},"Item 3")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox4"}),e("label",{class:"chi-checkbox__label",for:"checkbox4"},"Item 4")])])])],-1);function lo(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Base",titleSize:"h4",id:"checkboxes_base",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[ao]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ro=_(F,[["render",lo]]);var po=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,ho=(o,i,s,c)=>{for(var t=c>1?void 0:c?mo(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&po(i,s,t),t};let J=class extends u{};J=ho([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`}})})],J);const _o=e("div",{class:"chi-col -w--10 -w-sm--6 -w-md--7 -w-lg--5 -w-xl--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox1b"}),e("label",{class:"chi-checkbox__label",for:"checkbox1b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 1")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox2b",disabled:""}),e("label",{class:"chi-checkbox__label",for:"checkbox2b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 2")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox3b",checked:""}),e("label",{class:"chi-checkbox__label",for:"checkbox3b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 3")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",type:"checkbox",id:"checkbox4b"}),e("label",{class:"chi-checkbox__label",for:"checkbox4b"},[e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"}),r("Item 4")])])])])],-1);function uo(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"With Icons",titleSize:"h4",id:"checkboxes_icons",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[_o]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const wo=_(J,[["render",uo]]);var bo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,fo=(o,i,s,c)=>{for(var t=c>1?void 0:c?vo(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&bo(i,s,t),t};let q=class extends u{};q=fo([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`}})})],q);const go=e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("fieldset",null,[e("legend",{class:"chi-dropdown__menu-item"},"Select an option"),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio1"}),e("label",{class:"chi-radio__label",for:"radio1"},"Radio Button 1")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio2",disabled:""}),e("label",{class:"chi-radio__label",for:"radio2"},"Disabled Radio Button 2")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio3"}),e("label",{class:"chi-radio__label",for:"radio3"},"Radio Button 3")])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio4"}),e("label",{class:"chi-radio__label",for:"radio4"},"Radio Button 4")])])])])],-1);function xo(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Radio Buttons",id:"radio_buttons",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[go]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $o=_(q,[["render",xo]]);var Io=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,So=(o,i,s,c)=>{for(var t=c>1?void 0:c?yo(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Io(i,s,t),t};let z=class extends u{};z=So([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`}})})],z);const Co=e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("div",{class:"chi-dropdown__menu-item"},[e("span",{class:"-text -mr--2"},"200GB"),e("input",{class:"chi-input",type:"range","aria-label":"Range description"}),e("span",{class:"-text -ml--2"},"5TB")]),e("div",{class:"chi-divider"}),e("legend",{class:"chi-dropdown__menu-item"},"Select range"),e("div",{class:"chi-dropdown__menu-item"},[e("input",{class:"chi-input",type:"range","aria-label":"Range description"})])])],-1);function To(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Range Input",id:"range_input",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[Co]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Lo=_(z,[["render",To]]);var ko=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Do=(o,i,s,c)=>{for(var t=c>1?void 0:c?Po(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&ko(i,s,t),t};let U=class extends u{};U=Do([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`}})})],U);const Oo=e("div",{class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},[e("div",{class:"chi-dropdown__menu -active"},[e("legend",{class:"chi-dropdown__menu-item"},"Configure options"),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-mail"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-mail"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Email notifications")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-tlf"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-tlf"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Phone notifications")])])]),e("div",{class:"chi-dropdown__menu-item"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-app"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-app"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"App notifications")])])])])],-1);function Bo(o,i,s,c,t,a){const n=b,p=S,f=v;return m(),g(f,{title:"Toggle Switch",id:"toggle_switch",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{example:d(()=>[Oo]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(p),l(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const jo=_(U,[["render",Bo]]);var Eo=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,Mo=(o,i,s,c)=>{for(var t=c>1?void 0:c?Ho(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Eo(i,s,t),t};let G=class extends u{};G=Mo([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <span class="chi-dropdown__menu-item">Text 1</span>
  <span class="chi-dropdown__menu-item">Text 2</span>
  <span class="chi-dropdown__menu-item">Text 3</span>
  <span class="chi-dropdown__menu-item">Text 4</span>
</div>`}})})],G);const Ro=e("p",{class:"-text"},[r("Use a "),e("code",null,"span"),r(" tag to include text without rendering as a link.")],-1),Ao=e("div",{class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},[e("div",{class:"chi-dropdown__menu -active"},[e("span",{class:"chi-dropdown__menu-item"},"Text 1"),e("span",{class:"chi-dropdown__menu-item"},"Text 2"),e("span",{class:"chi-dropdown__menu-item"},"Text 3"),e("span",{class:"chi-dropdown__menu-item"},"Text 4")])],-1);function Wo(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Plain Text",id:"plain_text",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>[Ro]),example:d(()=>[Ao]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const No=_(G,[["render",Wo]]);var Vo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Jo=(o,i,s,c)=>{for(var t=c>1?void 0:c?Fo(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Vo(i,s,t),t};let K=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">
    <div class="-flex--ellipsis" data-tooltip="Item 3 with truncated longer text">Item 3 with truncated longer text</div>
  </a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<!-- Tooltip for truncated text -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`})}mounted(){chi.tooltip(document.getElementById("example-truncated-menu-item"))}};K=Jo([w({})],K);const qo=e("p",{class:"-text"},[r("Wrap the menu-item content in a div with the class "),e("code",null,"-flex--ellipsis"),r(" to truncate long strings.")],-1),zo=e("div",{class:"chi-dropdown__menu -active",style:{width:"10rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",id:"example-truncated-menu-item",href:"#exampleLink","data-tooltip":"Item 3 with truncated longer text"},[e("div",{class:"-flex--ellipsis"},"Item 3 with truncated longer text")]),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4")],-1);function Uo(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Truncate long menu-items",titleSize:"h4",id:"truncate_long_menu_items",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>[qo]),example:d(()=>[zo]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Go=_(K,[["render",Uo]]);var Ko=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Xo=(o,i,s,c)=>{for(var t=c>1?void 0:c?Qo(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Ko(i,s,t),t};let Q=class extends u{};Q=Xo([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`}})})],Q);const Yo=e("p",{class:"-text"},[r("Add the class "),e("code",null,"-h--auto"),r(" to set menu item height to auto.")],-1),Zo=e("div",{class:"chi-dropdown__menu -active",style:{width:"10rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("div",{class:"chi-dropdown__menu-item -h--auto -py--1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2")],-1);function en(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Flexible height",titleSize:"h4",id:"flexible_height",tabs:o.exampleTabs,additionalClasses:"-bg--grey-20"},{"example-description":d(()=>[Yo]),example:d(()=>[Zo]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const tn=_(Q,[["render",en]]);var on=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,cn=(o,i,s,c)=>{for(var t=c>1?void 0:c?nn(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&on(i,s,t),t};let X=class extends u{};X=cn([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-dropdown visible-items="3" button="Dropdown, click me">
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
    </div>`}})})],X);const sn=e("p",{class:"-text"},"Shows only given number of items.",-1),an=e("div",{class:"chi-dropdown"},[e("button",{class:"chi-button chi-dropdown__trigger",id:"dropdown-left-end"},"Visible items"),e("div",{class:"chi-dropdown__menu",style:{"overflow-y":"auto","max-height":"7rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4"),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 5")])],-1);function dn(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Visible Items",id:"visible_items",tabs:o.exampleTabs},{"example-description":d(()=>[sn]),example:d(()=>[an]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ln=_(X,[["render",dn]]),rn={setup(){const o=k(null),i=k(["Item 1","Item 2","Item 3","Item 4"]),s=k(i.value[0]);function c(n){s.value=n.target.text,o.value&&o.value.hide()}const t=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:`<chi-dropdown button="Dropdown, click me" retain-selection>
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
<\/script>`};return ie(()=>{chi.dropdown(document.getElementById("example__dropdown-retain-selection"))}),{dropdownElement:o,items:i,selectedItem:s,onChange:c,exampleTabs:t,codeSnippets:a}}},pn=e("p",{class:"-text"},[r("There is an available property, "),e("code",null,"retain-selection"),r(", which allows retaining the selected item in the dropdown as active and see the selected item when the dropdown is closed.")],-1),mn={class:"chi-dropdown",ref:"dropdownElement"},hn={class:"chi-button chi-dropdown__trigger -d--flex -justify-content--between",id:"example__dropdown-retain-selection",style:{width:"180px"}},_n={class:"chi-dropdown__menu"};function un(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Retain selection",id:"retain_selection",tabs:c.exampleTabs},{"example-description":d(()=>[pn]),example:d(()=>[e("div",mn,[e("button",hn,D(c.selectedItem),1),e("div",_n,[(m(!0),y(T,null,P(c.items,f=>(m(),y("a",{class:ne(["chi-dropdown__menu-item",{"-active":c.selectedItem===f}]),key:f,onClick:i[0]||(i[0]=(...$)=>c.onChange&&c.onChange(...$))},D(f),3))),128))])],512)]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const wn=_(rn,[["render",un]]),bn={setup(){const o=Se(),i=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:`<chi-dropdown icon="more-vert" icon-tooltip-message="More options">
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
<\/script>`};return ie(()=>{chi.dropdown(document.getElementById("example__dropdown-icon")),chi.tooltip(document.querySelectorAll("[data-tooltip]"))}),{exampleTabs:i,codeSnippets:s,selectedTheme:o}}},vn=e("p",{class:"-text"},[r("There is an available property, "),e("code",null,"icon"),r(", which allows adding an icon as the dropdown trigger.")],-1),fn={class:"chi-dropdown"},gn=["variant"],xn=e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})],-1),$n=[xn],In=e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item"},"Item 1"),e("a",{class:"chi-dropdown__menu-item"},"Item 2"),e("a",{class:"chi-dropdown__menu-item"},"Item 3"),e("a",{class:"chi-dropdown__menu-item"},"Item 4")],-1);function yn(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Icon",id:"icon_trigger",tabs:c.exampleTabs},{"example-description":d(()=>[vn]),example:d(()=>[e("div",fn,[e("button",{class:"chi-button chi-dropdown__trigger chi-dropdown__icon",id:"example__dropdown-icon","aria-label":"More options","icon-tooltip-message":"More options",variant:c.selectedTheme==="portal"?"flat":""},$n,8,gn),In])]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(n,{class:"html",lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Sn=_(bn,[["render",yn]]);var Cn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Ln=(o,i,s,c)=>{for(var t=c>1?void 0:c?Tn(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Cn(i,s,t),t};let Y=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}]);x(this,"codeSnippets",{webcomponent:`<!-- Select mode single -->
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
`})}};Y=Ln([w({})],Y);const kn=e("p",{class:"-text"},[r("The "),e("code",null,"select-mode"),r(" property enables the looks and feels of the "),e("code",null,"select"),r(" component, with the advantage of having the options to be shown with styles following the brand guidelines and independent from the operating systems or browsers.")],-1),Pn=e("p",{class:"-text"},[r("With value "),e("code",null,"single"),r(", only one option can be selected. With value "),e("code",null,"multi"),r(" any number of options can be selected, and clicking a selected option will unselect it.")],-1),Dn=e("chi-dropdown",{"select-mode":"single",button:"- Select single -"},[e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 4")],-1),On=e("chi-dropdown",{class:"-mt--2","select-mode":"multi",button:"- Select multi -"},[e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",slot:"menu"},"Item 4")],-1);function Bn(o,i,s,c,t,a){const n=b,p=v;return m(),g(p,{title:"Select mode",id:"select_mode",tabs:o.exampleTabs},{"example-description":d(()=>[kn,Pn]),example:d(()=>[Dn,On]),"code-webcomponent":d(()=>[l(n,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[]),_:1},8,["tabs"])}const jn=_(Y,[["render",Bn]]);var En=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Mn=(o,i,s,c)=>{for(var t=c>1?void 0:c?Hn(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&En(i,s,t),t};let Z=class extends u{constructor(){super(...arguments);x(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);x(this,"codeSnippets",{webcomponent:`<chi-dropdown
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
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>`})}};Z=Mn([w({})],Z);const Rn=e("p",{class:"-text"},[r("Use the state "),e("code",null,"danger"),r(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger states must include an error message explaining the failure and/or how to correct it. Other allowed states are "),e("code",null,"warning"),r(", "),e("code",null,"info"),r(" and "),e("code",null,"success"),r(".")],-1),An={class:"-d--flex"},Wn=e("chi-dropdown",{position:"bottom",button:"Dropdown with error",state:"danger","helper-message":"Helpful info for the user"},[e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 1"),e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 2"),e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 3"),e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item 4")],-1);function Nn(o,i,s,c,t,a){const n=oe,p=b,f=S,$=v;return m(),g($,{title:"Error and helper message",id:"error-helper-message",tabs:o.exampleTabs},{"example-description":d(()=>[Rn]),example:d(()=>[e("div",An,[l(n,null,{default:d(()=>[Wn]),_:1})])]),"code-webcomponent":d(()=>[l(p,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(f),l(p,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Vn=_(Z,[["render",Nn]]);var Fn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,qn=(o,i,s,c)=>{for(var t=c>1?void 0:c?Jn(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Fn(i,s,t),t};let ee=class extends u{};ee=qn([w({components:{Animated:_t,BaseExample:He,AdditionalStyles:qe,CheckboxesBase:ro,CheckboxesIcons:wo,DataTarget:et,Description:jt,Divider:Nt,FlexibleHeight:tn,Hover:at,Icons:Qt,PlainText:No,Positioning:xt,RadioButtons:$o,RangeInput:Lo,SearchBox:no,States:Lt,ToggleSwitch:jo,TruncateLongMenuItems:Go,VisibleItems:ln,RetainSelection:wn,IconTrigger:Sn,SelectMode:jn,HelperMessage:Vn}})],ee);const zn=e("h2",null,"Examples",-1),Un=e("p",{class:"-text"},[r("A dropdown must be associated with an activator, commonly a button, which, at the time of being clicked, expands the dropdown. Activator and dropdown should be contained in a div with a "),e("code",null,"chi-dropdown"),r(" class, or otherwise, the activator must reference the dropdown with a "),e("code",null,"data-target"),r(" attribute. Use the "),e("code",null,"chi-dropdown__trigger"),r(" class on your activator button to make the chevron appear.")],-1),Gn=e("h3",null,"Menu",-1),Kn=e("h3",null,"Checkboxes",-1),Qn=e("h3",null,"Helpers",-1);function Xn(o,i,s,c,t,a){const n=h("BaseExample"),p=h("AdditionalStyles"),f=h("HelperMessage"),$=h("DataTarget"),I=h("Hover"),L=h("Animated"),C=h("Positioning"),ce=h("States"),se=h("Description"),ae=h("Divider"),de=h("Icons"),le=h("SearchBox"),re=h("VisibleItems"),pe=h("RetainSelection"),me=h("SelectMode"),he=oe,_e=h("IconTrigger"),ue=h("CheckboxesBase"),we=h("CheckboxesIcons"),be=h("RadioButtons"),ve=h("RangeInput"),fe=h("ToggleSwitch"),ge=h("PlainText"),xe=h("TruncateLongMenuItems"),$e=h("FlexibleHeight");return m(),y("div",null,[zn,Un,l(n),l(p),l(f),l($),l(I),l(L),l(C),Gn,l(ce),l(se),l(ae),l(de),l(le),l(re),l(pe),l(he,null,{default:d(()=>[l(me)]),_:1}),l(_e),Kn,l(ue),l(we),l(be),l(ve),l(fe),l(ge),Qn,l(xe),l($e)])}const Yn=_(ee,[["render",Xn]]);var Zn=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=(o,i,s,c)=>{for(var t=c>1?void 0:c?ei(i,s):i,a=o.length-1,n;a>=0;a--)(n=o[a])&&(t=(c?n(i,s,t):n(t))||t);return c&&t&&Zn(i,s,t),t};let te=class extends u{constructor(){super(...arguments);x(this,"pageTabs",Le)}};te=ti([w({components:{Accessibility:Te,Examples:Yn,Properties:Ce}})],te);const oi={class:"chi-grid__container -pt--3"},ni={class:"chi-tabs-panel -active",id:"examples"},ii={class:"chi-tabs-panel",id:"properties"},ci={class:"chi-tabs-panel",id:"accessibility"};function si(o,i,s,c,t,a){const n=ke,p=h("Examples"),f=h("Properties"),$=h("Accessibility");return m(),y("div",null,[l(n,{title:"Dropdown",description:"Dropdowns contain and give access to a list of buttons or other elements hidden by default. They are commonly used for menus in web applications.",tabs:o.pageTabs},null,8,["tabs"]),e("div",oi,[e("div",ni,[l(p)]),e("div",ii,[l(f)]),e("div",ci,[l($)])])])}const zi=_(te,[["render",si]]);export{zi as default};
