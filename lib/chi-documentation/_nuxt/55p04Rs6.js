import{_ as k}from"./Kk1AK2EI.js";import{_ as f}from"./DZscRdb4.js";import{_ as y}from"./h9qxsaIy.js";import{_ as g}from"./DAVNcaGE.js";import{e as b,f as x,o as l,w as t,b as n,a as e,c as _,i as w,t as I,F as u,j as E,n as S,d as c,g as L,h as R,k as B}from"./pInVwq2A.js";const H={position:"bottom",button:"Dropdown, click me"},j=b({__name:"_base",setup(v){const d={webcomponent:`<chi-dropdown position="bottom" button="Dropdown, click me">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`};return(p,o)=>{const a=k,s=f,r=y,i=g;return l(),x(i,{title:"Base",id:"base"},{example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",H,[(l(),_(u,null,w(4,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=h=>h.preventDefault())},"Item "+I(m),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(r,null,{default:t(()=>o[1]||(o[1]=[e("span",{class:"-text--grey"},"Trigger and dropdown enclosed in the same div.",-1)])),_:1}),n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),M={class:"-d--flex"},z=["button","color","variant","disabled"],W=b({__name:"_additional_styles",setup(v){const d=[{text:"Primary",color:"primary"},{text:"Primary outline",color:"primary",variant:"outline"},{text:"Primary flat",color:"primary",variant:"flat"},{text:"Flat",variant:"flat"},{text:"Disabled",disabled:!0}],p=(i=2,m=!1)=>[1,2,3,4].map(h=>" ".repeat(i)+`<a class='chi-dropdown__menu-item' href='#'${m?' slot="menu"':""}>Item ${h}</a>`),o=i=>{const m=i.disabled?"<chi-dropdown position='bottom' button='Disabled' disabled>":`<chi-dropdown position='bottom' button='${i.text}'`+(i.color?` color='${i.color}'`:"")+(i.variant?` variant='${i.variant}'>`:">");return[`<!-- ${i.text} button -->`,m,...p(2,!0),"</chi-dropdown>"].join(`
`)},a=i=>{const m=[i.color,i.variant].filter(Boolean).map(C=>" -"+C).join(""),h=i.disabled?`  <button id="dropdown-styles-4" class="chi-button chi-dropdown__trigger" disabled>${i.text}</button>`:`  <button id="dropdown-styles-${i.text.replace(" ","-").toLowerCase()}" class="chi-button chi-dropdown__trigger${m}">${i.text}</button>`;return[`<!-- ${i.text} button -->`,'<div class="chi-dropdown">',h,'  <div class="chi-dropdown__menu">',...p(4),"  </div>","</div>"].join(`
`)},s=d.map(i=>o(i)).join(`

`),r=[...d.map(i=>a(i)),"<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>"].join(`

`);return(i,m)=>{const h=k,C=f,D=y,A=g;return l(),x(A,{title:"Additional Styles",id:"additional-styles"},{"example-description":t(()=>m[1]||(m[1]=[e("p",{class:"-text"},[c("The web component accepts the properties "),e("code",null,"color"),c(", "),e("code",null,"variant"),c(", "),e("code",null,"size"),c(", "),e("code",null,"uppercase"),c(" and "),e("code",null,"disabled"),c(" to modify the underlying chi-button element behavior and style.")],-1)])),example:t(()=>[e("div",M,[n(h,null,{default:t(()=>[(l(),_(u,null,w(d,($,O)=>e("chi-dropdown",{position:"bottom",button:$.text,color:$.color,variant:$.variant,disabled:$.disabled,class:S(O&&"-ml--2")},[(l(),_(u,null,w(4,T=>e("a",{class:"chi-dropdown__menu-item",key:`${$.text}-${T}`,slot:"menu",href:"#",onClick:m[0]||(m[0]=N=>N.preventDefault())},"Item "+I(T),1)),64))],10,z)),64))]),_:1})])]),"code-webcomponent":t(()=>[n(C,{class:"html",lang:"html",code:E(s)},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(D),n(C,{lang:"html",code:E(r)},null,8,["code"])]),_:1})}}}),J={class:"chi-button chi-dropdown__trigger",ref:"dropdown-2","data-target":"#dropdown-2-menu"},P={class:"chi-dropdown__menu",id:"dropdown-2-menu"},q={class:"chi-dropdown__menu-item",href:"#exampleLink"},V=b({__name:"_data_target",setup(v){const d=L("dropdown-2");R(()=>{d.value&&chi.dropdown(d.value)});const p=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={htmlblueprint:`<button id="dropdown-2" class="chi-button chi-dropdown__trigger" data-target="#dropdown-2-menu">Dropdown component</button>
<p class="-text">There is no need for proximity between elements.</p>
<div class="chi-dropdown__menu" id="dropdown-2-menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<script>chi.dropdown(document.getElementById('dropdown-2'));<\/script>`};return(a,s)=>{const r=y,i=f,m=g;return l(),x(m,{title:"Data-target",id:"data_target",tabs:p},{"example-description":t(()=>s[0]||(s[0]=[e("p",{class:"-text"},[c("Dropdown referenced by a "),e("code",null,"data-target"),c(" attribute in the activator.")],-1)])),example:t(()=>[e("button",J,"Dropdown component",512),s[1]||(s[1]=e("p",{class:"-text"},"There is no need for proximity between elements.",-1)),e("div",P,[(l(),_(u,null,w(4,h=>e("a",q,"Item "+I(h),1)),64))])]),"code-htmlblueprint":t(()=>[n(r),n(i,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),U={hover:"",position:"bottom",button:"Dropdown component"},F=b({__name:"_hover",setup(v){const d={webcomponent:`<chi-dropdown hover position="bottom" button="Dropdown component">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown chi-dropdown__hover">
  <button class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Hover",id:"dropdown-hover-example"},{example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",U,[(l(),_(u,null,w(3,i=>e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu",onClick:o[0]||(o[0]=m=>m.preventDefault())},"Item "+I(i),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[o[1]||(o[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Dropdown on hover is only supported when trigger and dropdown elements are enclosed in the same div. Use the "),e("code",null,"chi-dropdown__hover"),c(" class to achieve this.")])],-1)),n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),G={position:"bottom",button:"Animated dropdown trigger","animate-chevron":""},K=b({__name:"_animate",setup(v){const d={webcomponent:`<chi-dropdown position="bottom" button="Animated dropdown trigger" animate-chevron>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button id="dropdown-animate" class="chi-button chi-dropdown__trigger -animate">Animated dropdown trigger</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-animate'));<\/script>`};return(p,o)=>{const a=k,s=f,r=y,i=g;return l(),x(i,{title:"Animate",id:"animated"},{example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",G,[(l(),_(u,null,w(3,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=h=>h.preventDefault())},"Item "+I(m),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(r,null,{default:t(()=>o[1]||(o[1]=[e("span",null,[c("Triggers can be animated by applying the "),e("code",null,"-animate"),c(" class.")],-1)])),_:1}),n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Q={class:"chi-grid -no-gutter -px-xl--3",id:"dropdown-example-positioning"},X={class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},Y={class:"-p--1"},Z=["position","button"],ee={class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap"},oe={class:"-p--1 -py-sm--3"},te=["position","button"],ne={class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap"},ie={class:"-p--1 -py-sm--3"},se=["position","button"],ce={class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},de={class:"-p--1"},le=["position","button"],ae=b({__name:"_positioning",setup(v){const d={webcomponent:`<!-- Top start -->
<chi-dropdown position="top-start" button="Top start">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Top -->
<chi-dropdown position="top" button="Top">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Top end -->
<chi-dropdown position="top-end" button="Top end">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Left start -->
<chi-dropdown position="left-start" button="Left start">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Left -->
<chi-dropdown position="left" button="Left">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Left end -->
<chi-dropdown position="left-end" button="Left end">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Right start -->
<chi-dropdown position="right-start" button="Right start">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Right -->
<chi-dropdown position="right" button="Right">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Right end -->
<chi-dropdown position="right-end" button="Right end">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Bottom start -->
<chi-dropdown position="bottom-start" button="Bottom start">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Bottom -->
<chi-dropdown position="bottom" button="Bottom">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>
<!-- Bottom end -->
<chi-dropdown position="bottom-end" button="Bottom end">
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Dropdown item 3</a>
</chi-dropdown>`,htmlblueprint:`<!-- Top start -->
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
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-dropdown__trigger'));<\/script>`};return(p,o)=>{const a=f,s=y,r=g;return l(),x(r,{title:"Positioning",id:"positioning"},{example:t(()=>[e("div",Q,[e("div",X,[(l(),_(u,null,w(["Top start","Top","Top end"],i=>e("div",Y,[e("chi-dropdown",{position:i.replace(" ","-").toLowerCase(),button:i},[(l(),_(u,null,w(3,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=h=>h.preventDefault())},"Dropdown item "+I(m),1)),64))],8,Z)])),64))]),e("div",ee,[(l(),_(u,null,w(["Left start","Left","Left end"],i=>e("div",oe,[e("chi-dropdown",{position:i.replace(" ","-").toLowerCase(),button:i},[(l(),_(u,null,w(3,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[1]||(o[1]=h=>h.preventDefault())},"Dropdown item "+I(m),1)),64))],8,te)])),64))]),o[4]||(o[4]=e("div",{class:"chi-col -d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center"},[e("div",{class:"-w--75 -text -text--muted -text--center -lh--2"},"Click buttons to see Dropdown positions")],-1)),e("div",ne,[(l(),_(u,null,w(["Right start","Right","Right end"],i=>e("div",ie,[e("chi-dropdown",{position:i.replace(" ","-").toLowerCase(),button:i},[(l(),_(u,null,w(3,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[2]||(o[2]=h=>h.preventDefault())},"Dropdown item "+I(m),1)),64))],8,se)])),64))]),e("div",ce,[(l(),_(u,null,w(["Bottom start","Bottom","Bottom end"],i=>e("div",de,[e("chi-dropdown",{position:i.replace(" ","-").toLowerCase(),button:i},[(l(),_(u,null,w(3,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[3]||(o[3]=h=>h.preventDefault())},"Dropdown item "+I(m),1)),64))],8,le)])),64))])])]),"code-webcomponent":t(()=>[o[5]||(o[5]=e("div",{class:"chi-tab__description"},[c("We support the position attribute. Chevron orientation will change depending on its value. Valid values are "),e("code",null,"default"),c(", "),e("code",null,"initial"),c(", "),e("code",null,"top"),c(", "),e("code",null,"right"),c(", "),e("code",null,"bottom"),c(", "),e("code",null,"left"),c(", "),e("code",null,"top-start"),c(", "),e("code",null,"top-end"),c(", "),e("code",null,"right-start"),c(", "),e("code",null,"right-end"),c(", "),e("code",null,"bottom-start"),c(", "),e("code",null,"bottom-end"),c(", "),e("code",null,"left-start"),c(", "),e("code",null,"left-end"),c(".")],-1)),n(a,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,null,{default:t(()=>o[6]||(o[6]=[e("span",null,[c("Dropdown is prepared to work with positioning libraries like Popper.js. That is why we support the data-position attribute. Chevron orientation will change depending on its value. Valid values are "),e("code",null,"default"),c(", "),e("code",null,"initial"),c(", "),e("code",null,"top"),c(", "),e("code",null,"right"),c(", "),e("code",null,"bottom"),c(", "),e("code",null,"left"),c(", "),e("code",null,"top-start"),c(", "),e("code",null,"top-end"),c(", "),e("code",null,"right-start"),c(", "),e("code",null,"right-end"),c(", "),e("code",null,"bottom-start"),c(", "),e("code",null,"bottom-end"),c(", "),e("code",null,"left-start"),c(", "),e("code",null,"left-end"),c(".")],-1)])),_:1}),n(a,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),re={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},me={active:"","prevent-auto-hide":""},pe=b({__name:"_states",setup(v){const d={webcomponent:`<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">Disabled Item</a>
  <a class="chi-dropdown__menu-item -hover" href="#" slot="menu">Hovered Item</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#">Disabled item</a>
  <a class="chi-dropdown__menu-item -hover" href="#">Hovered item</a>
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Menu item states",id:"states",additionalClasses:"-bg--grey-20"},{"example-description":t(()=>o[4]||(o[4]=[e("p",{class:"-text"},[c("Menu items support the following states: "),e("code",null,"initial"),c(", "),e("code",null,"active"),c(", "),e("code",null,"disabled"),c(" and "),e("code",null,"hover"),c(".")],-1)])),example:t(()=>[e("div",re,[n(a,null,{default:t(()=>[e("chi-dropdown",me,[e("a",{class:"chi-dropdown__menu-item",href:"#",onClick:o[0]||(o[0]=i=>i.preventDefault()),slot:"menu"},"Item"),e("a",{class:"chi-dropdown__menu-item -active",href:"#",onClick:o[1]||(o[1]=i=>i.preventDefault()),slot:"menu"},"Active item"),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#",onClick:o[2]||(o[2]=i=>i.preventDefault()),slot:"menu"},"Disabled Item"),e("a",{class:"chi-dropdown__menu-item -hover",href:"#",onClick:o[3]||(o[3]=i=>i.preventDefault()),slot:"menu"},"Hovered Item")])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),he={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},_e={active:"","prevent-auto-hide":"",description:""},ue=b({__name:"_description",setup(v){const d={webcomponent:`<chi-dropdown active description>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <span class="chi-dropdown__menu-item_title" slot="menu">Item</span>
    <span class="chi-dropdown__menu-item_text" slot="menu">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">
    <span class="chi-dropdown__menu-item_title" slot="menu">Active Item</span>
    <span class="chi-dropdown__menu-item_text" slot="menu">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">
    <span class="chi-dropdown__menu-item_title" slot="menu">Disabled Item</span>
    <span class="chi-dropdown__menu-item_text" slot="menu">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -hover" href="#" slot="menu">
    <span class="chi-dropdown__menu-item_title" slot="menu">Hovered Item</span>
    <span class="chi-dropdown__menu-item_text" slot="menu">Item description</span>
  </a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu -list">
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
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Description",id:"description",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",he,[n(a,null,{default:t(()=>[e("chi-dropdown",_e,[e("a",{class:"chi-dropdown__menu-item",href:"#",onClick:o[0]||(o[0]=i=>i.preventDefault()),slot:"menu"},o[4]||(o[4]=[e("span",{class:"chi-dropdown__menu-item_title"},"Item",-1),e("span",{class:"chi-dropdown__menu-item_text"},"Item description",-1)])),e("a",{class:"chi-dropdown__menu-item -active",href:"#",onClick:o[1]||(o[1]=i=>i.preventDefault()),slot:"menu"},o[5]||(o[5]=[e("span",{class:"chi-dropdown__menu-item_title"},"Active item",-1),e("span",{class:"chi-dropdown__menu-item_text"},"Item description",-1)])),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#",onClick:o[2]||(o[2]=i=>i.preventDefault()),slot:"menu"},o[6]||(o[6]=[e("span",{class:"chi-dropdown__menu-item_title"},"Disabled item",-1),e("span",{class:"chi-dropdown__menu-item_text"},"Item description",-1)])),e("a",{class:"chi-dropdown__menu-item -hover",href:"#",onClick:o[3]||(o[3]=i=>i.preventDefault()),slot:"menu"},o[7]||(o[7]=[e("span",{class:"chi-dropdown__menu-item_title"},"Hovered item",-1),e("span",{class:"chi-dropdown__menu-item_text"},"Item description",-1)]))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),we={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},be={active:"","prevent-auto-hide":""},ve={key:0,class:"chi-divider",slot:"menu"},fe=b({__name:"_divider",setup(v){const d={webcomponent:`<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Divider",id:"divider",additionalClasses:"-bg--grey-20"},{"example-description":t(()=>o[1]||(o[1]=[e("p",{class:"-text"},[c("Several menu items can be arranged together by using a divider. Use the "),e("code",null,"chi-divider"),c(" component.")],-1)])),example:t(()=>[e("div",we,[n(a,null,{default:t(()=>[e("chi-dropdown",be,[(l(),_(u,null,w(4,i=>(l(),_(u,null,[e("a",{class:"chi-dropdown__menu-item",href:"#",onClick:o[0]||(o[0]=m=>m.preventDefault()),slot:"menu"},"Item "+I(i),1),i===3?(l(),_("div",ve)):B("",!0)],64))),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),ge={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},xe={active:"","prevent-auto-hide":""},Ie=["icon"],ke={key:0,class:"chi-divider",slot:"menu"},ye={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},Ce={active:"","prevent-auto-hide":""},De={key:0,class:"chi-divider",slot:"menu"},$e=b({__name:"_icons",setup(v){const d=[{icon:"file-outline",text:"New"},{icon:"arrow-to-bottom",text:"Save",disabled:!0,divider:!0},{icon:"file-outline",text:"Send"},{icon:"cart",text:"Buy",active:!0},{icon:"users",text:"Share",divider:!0},{icon:"logout",text:"Logout"}],p={webcomponent:`<chi-dropdown active>
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
</div>`},o={webcomponent:`<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    New
    <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">
    Save
    <i class="chi-icon icon-arrow-to-bottom -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Send
    <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">
    Buy
    <i class="chi-icon icon-cart -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Share
    <i class="chi-icon icon-users -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Logout
    <i class="chi-icon icon-logout -icon--right" aria-hidden="true"></i>
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
</div>`};return(a,s)=>{const r=k,i=f,m=g;return l(),_(u,null,[s[2]||(s[2]=e("h3",null,"Icons",-1)),s[3]||(s[3]=e("p",{class:"-text"},"Dropdown component has been developed to support Chi icons in the menu items.",-1)),n(m,{title:"Left Aligned","title-size":"h4",id:"icons-left",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",ge,[n(r,null,{default:t(()=>[e("chi-dropdown",xe,[(l(),_(u,null,w(d,(h,C)=>(l(),_(u,null,[e("a",{class:S(["chi-dropdown__menu-item",{"-disabled":h.disabled,"-active":h.active}]),slot:"menu",href:"#",onClick:s[0]||(s[0]=D=>D.preventDefault())},[e("chi-icon",{icon:h.icon},null,8,Ie),c(I(h.text),1)],2),h.divider?(l(),_("div",ke)):B("",!0)],64))),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(i,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(i,{class:"html",lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1}),n(m,{title:"Right Aligned","title-size":"h4",id:"icons-right",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",ye,[n(r,null,{default:t(()=>[e("chi-dropdown",Ce,[(l(),_(u,null,w(d,(h,C)=>(l(),_(u,null,[e("a",{class:S(["chi-dropdown__menu-item",{"-disabled":h.disabled,"-active":h.active}]),slot:"menu",href:"#",onClick:s[1]||(s[1]=D=>D.preventDefault())},[c(I(h.text),1),e("i",{class:S(["chi-icon -icon--right",`icon-${h.icon}`]),"aria-hidden":"true"},null,2)],2),h.divider?(l(),_("div",De)):B("",!0)],64))),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(i,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(i,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})],64)}}}),Se={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},Be={active:"","prevent-auto-hide":""},Te=b({__name:"_search_box",setup(v){const d={webcomponent:`<chi-dropdown active>
  <chi-search-input size="sm" placeholder="Search" slot="menu-header"></chi-search-input>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <div class="chi-dropdown__menu-header -mb--1">
    <div class="chi-input__wrapper -icon--right">
      <input class="chi-input chi-search__input -sm" type="search" placeholder="Search" aria-label="search input" />
      <button class="chi-button -icon -flat -sm -bg--none" aria-label="Search">
        <div class="chi-button__content">
          <i class="chi-icon icon-search" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  </div>
  <div class="chi-dropdown__menu-items-wrapper">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>
`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Search input",id:"search_box",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",Se,[n(a,null,{default:t(()=>[e("chi-dropdown",Be,[o[1]||(o[1]=e("chi-search-input",{size:"sm",placeholder:"Search",slot:"menu-header"},null,-1)),(l(),_(u,null,w(4,i=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=m=>m.preventDefault())},"Item "+I(i),1)),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ee={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},Le={active:"","prevent-auto-hide":""},Re={class:"chi-dropdown__menu-item",slot:"menu"},Ae=["id","label","disabled","checked"],Oe=b({__name:"_checkboxes_base",setup(v){const d={webcomponent:`<chi-dropdown active>
  <div class="chi-dropdown__menu-item" slot="menu">
    <chi-checkbox id="checkbox1" label="Item 1"></chi-checkbox>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <chi-checkbox id="checkbox2" label="Item 2" disabled></chi-checkbox>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <chi-checkbox id="checkbox3" label="Item 3" checked></chi-checkbox>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <chi-checkbox id="checkbox4" label="Item 4"></chi-checkbox>
  </div>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox-1">
      <label class="chi-checkbox__label" for="checkbox-1">Item 1</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox-2" disabled>
      <label class="chi-checkbox__label" for="checkbox-2">Item 2</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox-3" checked>
      <label class="chi-checkbox__label" for="checkbox-3">Item 3</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox-4">
      <label class="chi-checkbox__label" for="checkbox-4">Item 4</label>
    </div>
  </div>
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Base",titleSize:"h4",id:"checkbox-es_base",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",Ee,[n(a,null,{default:t(()=>[e("chi-dropdown",Le,[(l(),_(u,null,w(4,i=>e("div",Re,[e("chi-checkbox",{id:`checkbox-${i}`,label:`Item ${i}`,disabled:i===2,checked:i===3},null,8,Ae)])),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ne={class:"chi-col -w--10 -w-sm--6 -w-md--7 -w-lg--5 -w-xl--3"},He={active:"","prevent-auto-hide":""},je={class:"chi-dropdown__menu-item",slot:"menu"},Me={class:"chi-checkbox"},ze=["id","disabled","checked"],We=["for"],Je=b({__name:"_checkboxes_icons",setup(v){const d={webcomponent:`<chi-dropdown active>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox1">
      <label class="chi-checkbox__label" for="checkbox1">
        <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
        Item 1
      </label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox2" disabled>
      <label class="chi-checkbox__label" for="checkbox2">
        <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
        Item 2
      </label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox3" checked>
      <label class="chi-checkbox__label" for="checkbox3">
        <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
        Item 3
      </label>
    </div>
  <div class="chi-dropdown__menu-item" slot="menu">
   <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox4">
      <label class="chi-checkbox__label" for="checkbox4">
        <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
        Item 4
      </label>
    </div>
  </div>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"With Icons",titleSize:"h4",id:"checkboxes_icons",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",Ne,[n(a,null,{default:t(()=>[e("chi-dropdown",He,[(l(),_(u,null,w(4,i=>e("div",je,[e("div",Me,[e("input",{class:"chi-checkbox__input",type:"checkbox",id:`checkbox${i}`,disabled:i===2,checked:i===3},null,8,ze),e("label",{class:"chi-checkbox__label",for:`checkbox${i}`},[o[0]||(o[0]=e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"},null,-1)),c("Item "+I(i),1)],8,We)])])),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Pe={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},qe=b({__name:"_radio_buttons",setup(v){const d={webcomponent:`<chi-dropdown active>
  <legend class="chi-dropdown__menu-item" slot="menu">Select an option</legend>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio1" />
      <label class="chi-radio__label" for="radio1">Radio Button 1</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio2" disabled />
      <label class="chi-radio__label" for="radio2">Disabled Radio Button 2</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio3" />
      <label class="chi-radio__label" for="radio3">Radio Button 3</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio4" />
      <label class="chi-radio__label" for="radio4">Radio Button 4</label>
    </div>
  </div>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Radio Buttons",id:"radio_buttons",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",Pe,[n(a,null,{default:t(()=>o[0]||(o[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("legend",{class:"chi-dropdown__menu-item",slot:"menu"},"Select an option"),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio1"}),e("label",{class:"chi-radio__label",for:"radio1"},"Radio Button 1")])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio2",disabled:""}),e("label",{class:"chi-radio__label",for:"radio2"},"Disabled Radio Button 2")])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio3"}),e("label",{class:"chi-radio__label",for:"radio3"},"Radio Button 3")])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio4"}),e("label",{class:"chi-radio__label",for:"radio4"},"Radio Button 4")])])],-1)])),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ve={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},Ue=b({__name:"_range_input",setup(v){const d={webcomponent:`<chi-dropdown active>
  <div class="chi-dropdown__menu-item" slot="menu">
    <span class="-text -mr--2">200GB</span>
    <input class="chi-input" type="range" aria-label="Range description" />
    <span class="-text -ml--2">5TB</span>
  </div>
  <div class="chi-divider" slot="menu"></div>
  <legend class="chi-dropdown__menu-item" slot="menu">Select range</legend>
  <div class="chi-dropdown__menu-item" slot="menu">
    <input class="chi-input" type="range" aria-label="Range description" />
  </div>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Range Input",id:"range_input",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",Ve,[n(a,null,{default:t(()=>o[0]||(o[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("span",{class:"-text -mr--2"},"200GB"),e("input",{class:"chi-input",type:"range","aria-label":"Range description"}),e("span",{class:"-text -ml--2"},"5TB")]),e("div",{class:"chi-divider",slot:"menu"}),e("legend",{class:"chi-dropdown__menu-item",slot:"menu"},"Select range"),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("input",{class:"chi-input",type:"range","aria-label":"Range description"})])],-1)])),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Fe={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},Ge=b({__name:"_toggle_switch",setup(v){const d={webcomponent:`<chi-dropdown active>
  <legend class="chi-dropdown__menu-item" slot="menu">Configure options</legend>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-form__item">
      <label class="chi-switch -xs" for="toggle-mail">
        <input class="chi-switch__input" type="checkbox" id="toggle-mail" />
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
        <span class="chi-switch__label">Email notifications</span>
      </label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-form__item">
      <label class="chi-switch -xs" for="toggle-tlf">
        <input class="chi-switch__input" type="checkbox" id="toggle-tlf" />
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
        <span class="chi-switch__label">Phone notifications</span>
      </label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item" slot="menu">
    <div class="chi-form__item">
      <label class="chi-switch -xs" for="toggle-app">
        <input class="chi-switch__input" type="checkbox" id="toggle-app" />
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
        <span class="chi-switch__label">App notifications</span>
      </label>
    </div>
  </div>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
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
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Toggle Switch",id:"toggle_switch",additionalClasses:"-bg--grey-20"},{example:t(()=>[e("div",Fe,[n(a,null,{default:t(()=>o[0]||(o[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("legend",{class:"chi-dropdown__menu-item",slot:"menu"},"Configure options"),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-mail"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-mail"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Email notifications")])])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-tlf"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-tlf"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Phone notifications")])])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-app"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-app"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"App notifications")])])])],-1)])),_:1})])]),"code-htmlblueprint":t(()=>[n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),"code-webcomponent":t(()=>[n(s,{lang:"html",code:d.webcomponent},null,8,["code"])]),_:1})}}}),Ke={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},Qe={active:"","prevent-auto-hide":""},Xe={class:"chi-dropdown__menu-item",slot:"menu"},Ye=b({__name:"_plain_text",setup(v){const d={webcomponent:`<chi-dropdown active>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 1</span>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 2</span>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 3</span>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 4</span>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <span class="chi-dropdown__menu-item">Text 1</span>
  <span class="chi-dropdown__menu-item">Text 2</span>
  <span class="chi-dropdown__menu-item">Text 3</span>
  <span class="chi-dropdown__menu-item">Text 4</span>
</div>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Plain Text",id:"plain_text",additionalClasses:"-bg--grey-20"},{"example-description":t(()=>o[0]||(o[0]=[e("p",{class:"-text"},[c("Use a "),e("code",null,"span"),c(" tag to include text without rendering as a link.")],-1)])),example:t(()=>[e("div",Ke,[n(a,null,{default:t(()=>[e("chi-dropdown",Qe,[(l(),_(u,null,w(4,i=>e("span",Xe,"Text "+I(i),1)),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ze={class:"chi-dropdown__menu -active",style:{width:"10rem"}},eo={class:"chi-dropdown__menu-item",ref:"example-truncated-menu-item",href:"#exampleLink","data-tooltip":"Item 3 with truncated longer text"},oo=b({__name:"_truncate_long_menu_items",setup(v){const d=L("example-truncated-menu-item");R(()=>{d.value&&chi.tooltip(d.value)});const p=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">
    <div class="-flex--ellipsis" data-tooltip="Item 3 with truncated longer text">
      Item 3 with truncated longer text
    </div>
  </a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<!-- Tooltip for truncated text -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(a,s)=>{const r=f,i=g;return l(),x(i,{title:"Truncate long menu-items",titleSize:"h4",id:"truncate_long_menu_items",additionalClasses:"-bg--grey-20",tabs:p},{"example-description":t(()=>s[0]||(s[0]=[e("p",{class:"-text"},[c("Wrap the menu-item content in a div with the class "),e("code",null,"-flex--ellipsis"),c(" to truncate long strings.")],-1)])),example:t(()=>[e("div",Ze,[s[2]||(s[2]=e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1",-1)),s[3]||(s[3]=e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2",-1)),e("a",eo,s[1]||(s[1]=[e("div",{class:"-flex--ellipsis"},"Item 3 with truncated longer text",-1)]),512),s[4]||(s[4]=e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4",-1))])]),"code-htmlblueprint":t(()=>[n(r,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),to=b({__name:"_flexible_height",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],p={htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`};return(o,a)=>{const s=f,r=g;return l(),x(r,{title:"Flexible height",titleSize:"h4",id:"flexible_height",additionalClasses:"-bg--grey-20",tabs:d},{"example-description":t(()=>a[0]||(a[0]=[e("p",{class:"-text"},[c("Add the class "),e("code",null,"-h--auto"),c(" to set menu item height to auto.")],-1)])),example:t(()=>a[1]||(a[1]=[e("div",{class:"chi-dropdown__menu -active",style:{width:"10rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("div",{class:"chi-dropdown__menu-item -h--auto -py--1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2")],-1)])),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),no={button:"Dropdown, click me","visible-items":"3"},io=b({__name:"_visible_items",setup(v){const d={webcomponent:`<chi-dropdown visible-items="3" button="Dropdown, click me">
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
</div>`};return(p,o)=>{const a=k,s=f,r=y,i=g;return l(),x(i,{title:"Visible Items",id:"visible_items"},{"example-description":t(()=>o[1]||(o[1]=[e("p",{class:"-text"},"Shows only given number of items.",-1)])),example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",no,[(l(),_(u,null,w(5,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=h=>h.preventDefault())},"Item "+I(m),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(r,null,{default:t(()=>o[2]||(o[2]=[e("div",{class:"-text"},[c("Max-height can be adjusted according to the needs, using styles. Trigger and dropdown enclosed in the same "),e("code",null,"div"),c(".")],-1)])),_:1}),n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),so={button:"Dropdown, click me","retain-selection":""},co=b({__name:"_retain_selection",setup(v){const d={webcomponent:`<chi-dropdown button="Dropdown, click me" retain-selection>
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
<\/script>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Retain selection",id:"retain_selection"},{"example-description":t(()=>o[1]||(o[1]=[e("p",{class:"-text"},[c("There is an available property, "),e("code",null,"retain-selection"),c(", which allows retaining the selected item in the dropdown as active and see the selected item when the dropdown is closed.")],-1)])),example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",so,[(l(),_(u,null,w(4,i=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=m=>m.preventDefault())},"Item "+I(i),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),lo={icon:"more-vert","icon-tooltip-message":"More options"},ao=b({__name:"_icon_trigger",setup(v){const d={webcomponent:`<chi-dropdown icon="more-vert" icon-tooltip-message="More options">
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button
    id="example__dropdown-icon"
    class="chi-button chi-dropdown__trigger chi-dropdown__icon"
    aria-label="More options"
    data-tooltip="More options"
  >
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
<\/script>`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Icon",id:"icon_trigger"},{"example-description":t(()=>o[1]||(o[1]=[e("p",{class:"-text"},[c("There is an available property, "),e("code",null,"icon"),c(", which allows adding an icon as the dropdown trigger.")],-1)])),example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",lo,[(l(),_(u,null,w(4,i=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=m=>m.preventDefault())},"Item "+I(i),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),ro={"select-mode":"single",button:"- Select single -"},mo={class:"-mt--2","select-mode":"multi",button:"- Select multi -"},po=b({__name:"_select_mode",setup(v){const d=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],p={webcomponent:`<!-- Select mode single -->
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
`};return(o,a)=>{const s=k,r=f,i=g;return l(),x(i,{title:"Select mode",id:"select_mode",tabs:d},{"example-description":t(()=>a[2]||(a[2]=[e("p",{class:"-text"},[c("The "),e("code",null,"select-mode"),c(" property enables the looks and feels of the "),e("code",null,"select"),c(" component, with the advantage of having the options to be shown with styles following the brand guidelines and independent from the operating systems or browsers.")],-1),e("p",{class:"-text"},[c("With value "),e("code",null,"single"),c(", only one option can be selected. With value "),e("code",null,"multi"),c(" any number of options can be selected, and clicking a selected option will unselect it.")],-1)])),example:t(()=>[n(s,null,{default:t(()=>[e("chi-dropdown",ro,[(l(),_(u,null,w(4,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:a[0]||(a[0]=h=>h.preventDefault())},"Item "+I(m),1)),64))]),e("chi-dropdown",mo,[(l(),_(u,null,w(4,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:a[1]||(a[1]=h=>h.preventDefault())},"Item "+I(m),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(r,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>a[3]||(a[3]=[])),_:1})}}}),ho={class:"-d--flex"},_o={position:"bottom",button:"Dropdown with error",state:"danger","helper-message":"Helpful info for the user"},uo=b({__name:"_helper_message",setup(v){const d={webcomponent:`<chi-dropdown
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
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>`};return(p,o)=>{const a=k,s=f,r=y,i=g;return l(),x(i,{title:"Error and helper message",id:"error-helper-message"},{"example-description":t(()=>o[1]||(o[1]=[e("p",{class:"-text"},[c("Use the state "),e("code",null,"danger"),c(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger states must include an error message explaining the failure and/or how to correct it. Other allowed states are "),e("code",null,"warning"),c(", "),e("code",null,"info"),c(" and "),e("code",null,"success"),c(".")],-1)])),example:t(()=>[e("div",ho,[n(a,null,{default:t(()=>[e("chi-dropdown",_o,[(l(),_(u,null,w(4,m=>e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu",onClick:o[0]||(o[0]=h=>h.preventDefault())},"Item "+I(m),1)),64))])]),_:1})])]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(r),n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),wo={button:"Dropdown, click me","visible-items":"3"},bo=b({__name:"_search_input",setup(v){const d={webcomponent:`<chi-dropdown button="Dropdown, click me" visible-items="3">
  <chi-search-input size="sm" placeholder="Search" slot="menu-header"></chi-search-input>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 5</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown">
  <button id="example__dropdown-with-search" class="chi-button chi-dropdown__trigger">Dropdown, click me</button>
  <div class="chi-dropdown__menu">
    <div class="chi-dropdown__menu-header -mb--1">
      <div class="chi-input__wrapper -icon--right">
        <input class="chi-input chi-search__input -sm" type="search" placeholder="Search" aria-label="search input" />
        <button class="chi-button -icon -flat -sm -bg--none" aria-label="Search">
          <div class="chi-button__content">
            <i class="chi-icon icon-search" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="chi-dropdown__menu-items-wrapper" style="overflow-y: auto; max-height: 7rem">
      <a class="chi-dropdown__menu-item" href="#">Item 1</a>
      <a class="chi-dropdown__menu-item" href="#">Item 2</a>
      <a class="chi-dropdown__menu-item" href="#">Item 3</a>
      <a class="chi-dropdown__menu-item" href="#">Item 4</a>
      <a class="chi-dropdown__menu-item" href="#">Item 5</a>
    </div>
  </div>
</div>

<script>chi.dropdown(document.getElementById('example__dropdown-with-search'));<\/script>
`};return(p,o)=>{const a=k,s=f,r=g;return l(),x(r,{title:"Search input",id:"dropdown-search-input"},{example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",wo,[o[1]||(o[1]=e("chi-search-input",{size:"sm",placeholder:"Search",slot:"menu-header"},null,-1)),(l(),_(u,null,w(5,i=>e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu",onClick:o[0]||(o[0]=m=>m.preventDefault())},"Item "+I(i),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[o[2]||(o[2]=e("div",{class:"chi-tab__description"},[e("span",{class:"-text--grey"},[c("There are two extra slots available for the dropdown menu: "),e("code",null,"menu-header"),c(" and "),e("code",null,"menu-footer"),c(", which places the items inside those slots, accordingly inside the header and footer of dropdown menu.")])],-1)),n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),vo={position:"bottom",button:"Dropdown, click me",fluid:""},fo=b({__name:"_fluid",setup(v){const d={webcomponent:`<chi-dropdown position="bottom" button="Dropdown, click me" fluid>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown -fluid">
  <button id="dropdown-1" class="chi-button chi-dropdown__trigger -fluid">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>

<script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`};return(p,o)=>{const a=k,s=f,r=y,i=g;return l(),x(i,{title:"Fluid",id:"fluid"},{"example-description":t(()=>o[1]||(o[1]=[e("p",{class:"-text"},"Use fluid to render Dropdowns that span the full width of the parent container.",-1)])),example:t(()=>[n(a,null,{default:t(()=>[e("chi-dropdown",vo,[(l(),_(u,null,w(4,m=>e("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#",onClick:o[0]||(o[0]=h=>h.preventDefault())},"Item "+I(m),1)),64))])]),_:1})]),"code-webcomponent":t(()=>[n(s,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(r),n(s,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Co=b({__name:"index",setup(v){return(d,p)=>(l(),_("div",null,[p[0]||(p[0]=e("h2",null,"Examples",-1)),p[1]||(p[1]=e("p",{class:"-text"},[c("A dropdown must be associated with an activator, commonly a button, which, at the time of being clicked, expands the dropdown. Activator and dropdown should be contained in a div with a "),e("code",null,"chi-dropdown"),c(" class, or otherwise, the activator must reference the dropdown with a "),e("code",null,"data-target"),c(" attribute. Use the "),e("code",null,"chi-dropdown__trigger"),c(" class on your activator button to make the chevron appear.")],-1)),n(j),n(W),n(uo),n(V),n(F),n(K),n(fo),n(ae),n(io),n(bo),n(co),n(po),n(ao),p[2]||(p[2]=e("h2",null,"Menu",-1)),n(pe),n(ue),n(fe),n($e),n(Te),p[3]||(p[3]=e("h3",null,"Checkboxes",-1)),n(Oe),n(Je),n(qe),n(Ue),n(Ge),n(Ye),p[4]||(p[4]=e("h3",null,"Helpers",-1)),n(oo),n(to)]))}});export{Co as _};
