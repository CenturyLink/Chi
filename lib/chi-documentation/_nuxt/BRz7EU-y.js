import{_ as I}from"./DyIhxqzR.js";import{_ as v}from"./COVoLJ_Y.js";import{_ as k}from"./BlEjq2Oq.js";import{_ as f}from"./B7NIkgJJ.js";import{e as w,o as l,f as g,w as o,b as t,a as e,c as p,j as u,t as x,F as _,d as i,n as S,k as T,g as L,h as E,i as D}from"./DbZ0H-_C.js";const N={position:"bottom",button:"Dropdown, click me"},H={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},j=w({__name:"_base",setup(b){const d={webcomponent:`<chi-dropdown position="bottom" button="Dropdown, click me">
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

<script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`};return(m,s)=>{const a=I,n=v,r=k,c=f;return l(),g(c,{title:"Base",id:"base"},{example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",N,[(l(),p(_,null,u(4,h=>e("a",H,"Item "+x(h),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(r,null,{default:o(()=>s[0]||(s[0]=[e("span",{class:"-text--grey"},"Trigger and dropdown enclosed in the same div.",-1)])),_:1}),t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),M={class:"-d--flex"},z=["button","color","variant","disabled"],W=w({__name:"_additional_styles",setup(b){const d=[{text:"Primary",color:"primary"},{text:"Primary outline",color:"primary",variant:"outline"},{text:"Primary flat",color:"primary",variant:"flat"},{text:"Flat",variant:"flat"},{text:"Disabled",disabled:!0}],m=(c=2,h=!1)=>[1,2,3,4].map(y=>" ".repeat(c)+`<a class='chi-dropdown__menu-item' href='#'${h?' slot="menu"':""}>Item ${y}</a>`),s=c=>{const h=c.disabled?"<chi-dropdown position='bottom' button='Disabled' disabled>":`<chi-dropdown position='bottom' button='${c.text}'`+(c.color?` color='${c.color}'`:"")+(c.variant?` variant='${c.variant}'>`:">");return[`<!-- ${c.text} button -->`,h,...m(2,!0),"</chi-dropdown>"].join(`
`)},a=c=>{const h=[c.color,c.variant].filter(Boolean).map(C=>" -"+C).join(""),y=c.disabled?`  <button id="dropdown-styles-4" class="chi-button chi-dropdown__trigger" disabled>${c.text}</button>`:`  <button id="dropdown-styles-${c.text.replace(" ","-").toLowerCase()}" class="chi-button chi-dropdown__trigger${h}">${c.text}</button>`;return[`<!-- ${c.text} button -->`,'<div class="chi-dropdown">',y,'  <div class="chi-dropdown__menu">',...m(4),"  </div>","</div>"].join(`
`)},n=d.map(c=>s(c)).join(`

`),r=[...d.map(c=>a(c)),"<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>"].join(`

`);return(c,h)=>{const y=I,C=v,R=k,A=f;return l(),g(A,{title:"Additional Styles",id:"additional-styles"},{"example-description":o(()=>h[0]||(h[0]=[e("p",{class:"-text"},[i("The web component accepts the properties "),e("code",null,"color"),i(", "),e("code",null,"variant"),i(", "),e("code",null,"size"),i(", "),e("code",null,"uppercase"),i(" and "),e("code",null,"disabled"),i(" to modify the underlying chi-button element behavior and style.")],-1)])),example:o(()=>[e("div",M,[t(y,null,{default:o(()=>[(l(),p(_,null,u(d,($,O)=>e("chi-dropdown",{position:"bottom",button:$.text,color:$.color,variant:$.variant,disabled:$.disabled,class:S(O&&"-ml--2")},[(l(),p(_,null,u(4,B=>e("a",{class:"chi-dropdown__menu-item",key:`${$.text}-${B}`,slot:"menu",href:"#"},"Item "+x(B),1)),64))],10,z)),64))]),_:1})])]),"code-webcomponent":o(()=>[t(C,{class:"html",lang:"html",code:T(n)},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(R),t(C,{lang:"html",code:T(r)},null,8,["code"])]),_:1})}}}),J={class:"chi-button chi-dropdown__trigger",ref:"dropdown-2","data-target":"#dropdown-2-menu"},P={class:"chi-dropdown__menu",id:"dropdown-2-menu"},q={class:"chi-dropdown__menu-item",href:"#exampleLink"},V=w({__name:"_data_target",setup(b){const d=L("dropdown-2");E(()=>{d.value&&chi.dropdown(d.value)});const m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={htmlblueprint:`<button id="dropdown-2" class="chi-button chi-dropdown__trigger" data-target="#dropdown-2-menu">Dropdown component</button>
<p class="-text">There is no need for proximity between elements.</p>
<div class="chi-dropdown__menu" id="dropdown-2-menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<script>chi.dropdown(document.getElementById('dropdown-2'));<\/script>`};return(a,n)=>{const r=k,c=v,h=f;return l(),g(h,{title:"Data-target",id:"data_target",tabs:m},{"example-description":o(()=>n[0]||(n[0]=[e("p",{class:"-text"},[i("Dropdown referenced by a "),e("code",null,"data-target"),i(" attribute in the activator.")],-1)])),example:o(()=>[e("button",J,"Dropdown component",512),n[1]||(n[1]=e("p",{class:"-text"},"There is no need for proximity between elements.",-1)),e("div",P,[(l(),p(_,null,u(4,y=>e("a",q,"Item "+x(y),1)),64))])]),"code-htmlblueprint":o(()=>[t(r),t(c,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),U={hover:"",position:"bottom",button:"Dropdown component"},F={class:"chi-dropdown__menu-item",href:"#",slot:"menu"},G=w({__name:"_hover",setup(b){const d={webcomponent:`<chi-dropdown hover position="bottom" button="Dropdown component">
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Hover",id:"dropdown-hover-example"},{example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",U,[(l(),p(_,null,u(3,c=>e("a",F,"Item "+x(c),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[s[0]||(s[0]=e("div",{class:"chi-tab__description"},[e("span",null,[i("Dropdown on hover is only supported when trigger and dropdown elements are enclosed in the same div. Use the "),e("code",null,"chi-dropdown__hover"),i(" class to achieve this.")])],-1)),t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),K={position:"bottom",button:"Animated dropdown trigger","animate-chevron":""},Q={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},X=w({__name:"_animate",setup(b){const d={webcomponent:`<chi-dropdown position="bottom" button="Animated dropdown trigger" animate-chevron>
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

<script>chi.dropdown(document.getElementById('dropdown-animate'));<\/script>`};return(m,s)=>{const a=I,n=v,r=k,c=f;return l(),g(c,{title:"Animate",id:"animated"},{example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",K,[(l(),p(_,null,u(3,h=>e("a",Q,"Item "+x(h),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(r,null,{default:o(()=>s[0]||(s[0]=[e("span",null,[i("Triggers can be animated by applying the "),e("code",null,"-animate"),i(" class.")],-1)])),_:1}),t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Y={class:"chi-grid -no-gutter -px-xl--3",id:"dropdown-example-positioning"},Z={class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},ee={class:"-p--1"},oe=["position","button"],te={class:"chi-dropdown__menu-item",slot:"menu"},ne={class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap"},ie={class:"-p--1 -py-sm--3"},ce=["position","button"],se={class:"chi-dropdown__menu-item",slot:"menu"},de={class:"chi-col -w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap"},le={class:"-p--1 -py-sm--3"},ae=["position","button"],re={class:"chi-dropdown__menu-item",slot:"menu"},me={class:"chi-col -w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap"},pe={class:"-p--1"},he=["position","button"],_e={class:"chi-dropdown__menu-item",slot:"menu"},ue=w({__name:"_positioning",setup(b){const d={webcomponent:`<!-- Top start -->
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
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-dropdown__trigger'));<\/script>`};return(m,s)=>{const a=v,n=k,r=f;return l(),g(r,{title:"Positioning",id:"positioning"},{example:o(()=>[e("div",Y,[e("div",Z,[(l(),p(_,null,u(["Top start","Top","Top end"],c=>e("div",ee,[e("chi-dropdown",{position:c.replace(" ","-").toLowerCase(),button:c},[(l(),p(_,null,u(3,h=>e("a",te,"Dropdown item "+x(h),1)),64))],8,oe)])),64))]),e("div",ne,[(l(),p(_,null,u(["Left start","Left","Left end"],c=>e("div",ie,[e("chi-dropdown",{position:c.replace(" ","-").toLowerCase(),button:c},[(l(),p(_,null,u(3,h=>e("a",se,"Dropdown item "+x(h),1)),64))],8,ce)])),64))]),s[0]||(s[0]=e("div",{class:"chi-col -d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center"},[e("div",{class:"-w--75 -text -text--muted -text--center -lh--2"},"Click buttons to see Dropdown positions")],-1)),e("div",de,[(l(),p(_,null,u(["Right start","Right","Right end"],c=>e("div",le,[e("chi-dropdown",{position:c.replace(" ","-").toLowerCase(),button:c},[(l(),p(_,null,u(3,h=>e("a",re,"Dropdown item "+x(h),1)),64))],8,ae)])),64))]),e("div",me,[(l(),p(_,null,u(["Bottom start","Bottom","Bottom end"],c=>e("div",pe,[e("chi-dropdown",{position:c.replace(" ","-").toLowerCase(),button:c},[(l(),p(_,null,u(3,h=>e("a",_e,"Dropdown item "+x(h),1)),64))],8,he)])),64))])])]),"code-webcomponent":o(()=>[s[1]||(s[1]=e("div",{class:"chi-tab__description"},[i("We support the position attribute. Chevron orientation will change depending on its value. Valid values are "),e("code",null,"default"),i(", "),e("code",null,"initial"),i(", "),e("code",null,"top"),i(", "),e("code",null,"right"),i(", "),e("code",null,"bottom"),i(", "),e("code",null,"left"),i(", "),e("code",null,"top-start"),i(", "),e("code",null,"top-end"),i(", "),e("code",null,"right-start"),i(", "),e("code",null,"right-end"),i(", "),e("code",null,"bottom-start"),i(", "),e("code",null,"bottom-end"),i(", "),e("code",null,"left-start"),i(", "),e("code",null,"left-end"),i(".")],-1)),t(a,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,null,{default:o(()=>s[2]||(s[2]=[e("span",null,[i("Dropdown is prepared to work with positioning libraries like Popper.js. That is why we support the data-position attribute. Chevron orientation will change depending on its value. Valid values are "),e("code",null,"default"),i(", "),e("code",null,"initial"),i(", "),e("code",null,"top"),i(", "),e("code",null,"right"),i(", "),e("code",null,"bottom"),i(", "),e("code",null,"left"),i(", "),e("code",null,"top-start"),i(", "),e("code",null,"top-end"),i(", "),e("code",null,"right-start"),i(", "),e("code",null,"right-end"),i(", "),e("code",null,"bottom-start"),i(", "),e("code",null,"bottom-end"),i(", "),e("code",null,"left-start"),i(", "),e("code",null,"left-end"),i(".")],-1)])),_:1}),t(a,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),we={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},be=w({__name:"_states",setup(b){const d={webcomponent:`<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">Disabled Item</a>
  <a class="chi-dropdown__menu-item -hover" href="#" slot="menu">Hovered Item</a>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#">Disabled item</a>
  <a class="chi-dropdown__menu-item -hover" href="#">Hovered item</a>
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Menu item states",id:"states",additionalClasses:"-bg--grey-20"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},[i("Menu items support the following states: "),e("code",null,"initial"),i(", "),e("code",null,"active"),i(", "),e("code",null,"disabled"),i(" and "),e("code",null,"hover"),i(".")],-1)])),example:o(()=>[e("div",we,[t(a,null,{default:o(()=>s[1]||(s[1]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("a",{class:"chi-dropdown__menu-item",href:"#",slot:"menu"},"Item"),e("a",{class:"chi-dropdown__menu-item -active",href:"#",slot:"menu"},"Active item"),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#",slot:"menu"},"Disabled Item"),e("a",{class:"chi-dropdown__menu-item -hover",href:"#",slot:"menu"},"Hovered Item")],-1)])),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),ve={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},fe=w({__name:"_description",setup(b){const d={webcomponent:`<chi-dropdown active description>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Description",id:"description",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",ve,[t(a,null,{default:o(()=>s[0]||(s[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":"",description:""},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink",slot:"menu"},[e("span",{class:"chi-dropdown__menu-item_title"},"Item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -active",href:"#exampleLink",slot:"menu"},[e("span",{class:"chi-dropdown__menu-item_title"},"Active item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -disabled",href:"#exampleLink",slot:"menu"},[e("span",{class:"chi-dropdown__menu-item_title"},"Disabled item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")]),e("a",{class:"chi-dropdown__menu-item -hover",href:"#exampleLink",slot:"menu"},[e("span",{class:"chi-dropdown__menu-item_title"},"Hovered item"),e("span",{class:"chi-dropdown__menu-item_text"},"Item description")])],-1)])),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),ge={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},xe={active:"","prevent-auto-hide":""},Ie={class:"chi-dropdown__menu-item",href:"#exampleLink",slot:"menu"},ye={key:0,class:"chi-divider",slot:"menu"},ke=w({__name:"_divider",setup(b){const d={webcomponent:`<chi-dropdown active>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Divider",id:"divider",additionalClasses:"-bg--grey-20"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},[i("Several menu items can be arranged together by using a divider. Use the "),e("code",null,"chi-divider"),i(" component.")],-1)])),example:o(()=>[e("div",ge,[t(a,null,{default:o(()=>[e("chi-dropdown",xe,[(l(),p(_,null,u(4,c=>(l(),p(_,null,[e("a",Ie,"Item "+x(c),1),c===3?(l(),p("div",ye)):D("",!0)],64))),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ce={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},$e={active:"","prevent-auto-hide":""},Se=["icon"],De={key:0,class:"chi-divider",slot:"menu"},Be={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},Te={active:"","prevent-auto-hide":""},Le={key:0,class:"chi-divider",slot:"menu"},Ee=w({__name:"_icons",setup(b){const d=[{icon:"file-outline",text:"New"},{icon:"arrow-to-bottom",text:"Save",disabled:!0,divider:!0},{icon:"file-outline",text:"Send"},{icon:"cart",text:"Buy",active:!0},{icon:"users",text:"Share",divider:!0},{icon:"logout",text:"Logout"}],m={webcomponent:`<chi-dropdown active>
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
</div>`},s={webcomponent:`<chi-dropdown active>
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
</div>`};return(a,n)=>{const r=I,c=v,h=f;return l(),p(_,null,[n[0]||(n[0]=e("h3",null,"Icons",-1)),n[1]||(n[1]=e("p",{class:"-text"},"Dropdown component has been developed to support Chi icons in the menu items.",-1)),t(h,{title:"Left Aligned","title-size":"h4",id:"icons-left",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Ce,[t(r,null,{default:o(()=>[e("chi-dropdown",$e,[(l(),p(_,null,u(d,(y,C)=>(l(),p(_,null,[e("a",{class:S(["chi-dropdown__menu-item",{"-disabled":y.disabled,"-active":y.active}]),slot:"menu",href:"#"},[e("chi-icon",{icon:y.icon},null,8,Se),i(x(y.text),1)],2),y.divider?(l(),p("div",De)):D("",!0)],64))),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(c,{class:"html",lang:"html",code:m.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(c,{class:"html",lang:"html",code:m.htmlblueprint},null,8,["code"])]),_:1}),t(h,{title:"Right Aligned","title-size":"h4",id:"icons-right",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Be,[t(r,null,{default:o(()=>[e("chi-dropdown",Te,[(l(),p(_,null,u(d,(y,C)=>(l(),p(_,null,[e("a",{class:S(["chi-dropdown__menu-item",{"-disabled":y.disabled,"-active":y.active}]),slot:"menu",href:"#"},[i(x(y.text),1),e("i",{class:S(["chi-icon -icon--right",`icon-${y.icon}`]),"aria-hidden":"true"},null,2)],2),y.divider?(l(),p("div",Le)):D("",!0)],64))),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(c,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(c,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})],64)}}}),Re={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},Ae={active:"","prevent-auto-hide":""},Oe={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},Ne=w({__name:"_search_box",setup(b){const d={webcomponent:`<chi-dropdown active>
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
`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Search input",id:"search_box",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Re,[t(a,null,{default:o(()=>[e("chi-dropdown",Ae,[s[0]||(s[0]=e("chi-search-input",{size:"sm",placeholder:"Search",slot:"menu-header"},null,-1)),(l(),p(_,null,u(4,c=>e("a",Oe,"Item "+x(c),1)),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),He={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},je={active:"","prevent-auto-hide":""},Me={class:"chi-dropdown__menu-item",slot:"menu"},ze=["id","label","disabled","checked"],We=w({__name:"_checkboxes_base",setup(b){const d={webcomponent:`<chi-dropdown active>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Base",titleSize:"h4",id:"checkbox-es_base",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",He,[t(a,null,{default:o(()=>[e("chi-dropdown",je,[(l(),p(_,null,u(4,c=>e("div",Me,[e("chi-checkbox",{id:`checkbox-${c}`,label:`Item ${c}`,disabled:c===2,checked:c===3},null,8,ze)])),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Je={class:"chi-col -w--10 -w-sm--6 -w-md--7 -w-lg--5 -w-xl--3"},Pe={active:"","prevent-auto-hide":""},qe={class:"chi-dropdown__menu-item",slot:"menu"},Ve={class:"chi-checkbox"},Ue=["id","disabled","checked"],Fe=["for"],Ge=w({__name:"_checkboxes_icons",setup(b){const d={webcomponent:`<chi-dropdown active>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"With Icons",titleSize:"h4",id:"checkboxes_icons",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Je,[t(a,null,{default:o(()=>[e("chi-dropdown",Pe,[(l(),p(_,null,u(4,c=>e("div",qe,[e("div",Ve,[e("input",{class:"chi-checkbox__input",type:"checkbox",id:`checkbox${c}`,disabled:c===2,checked:c===3},null,8,Ue),e("label",{class:"chi-checkbox__label",for:`checkbox${c}`},[s[0]||(s[0]=e("i",{class:"chi-icon icon-logo-centurylink","aria-hidden":"true"},null,-1)),i("Item "+x(c),1)],8,Fe)])])),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ke={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},Qe=w({__name:"_radio_buttons",setup(b){const d={webcomponent:`<chi-dropdown active>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Radio Buttons",id:"radio_buttons",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Ke,[t(a,null,{default:o(()=>s[0]||(s[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("legend",{class:"chi-dropdown__menu-item",slot:"menu"},"Select an option"),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio1"}),e("label",{class:"chi-radio__label",for:"radio1"},"Radio Button 1")])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio2",disabled:""}),e("label",{class:"chi-radio__label",for:"radio2"},"Disabled Radio Button 2")])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio3"}),e("label",{class:"chi-radio__label",for:"radio3"},"Radio Button 3")])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-radio"},[e("input",{class:"chi-radio__input",type:"radio",name:"radios",id:"radio4"}),e("label",{class:"chi-radio__label",for:"radio4"},"Radio Button 4")])])],-1)])),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Xe={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},Ye=w({__name:"_range_input",setup(b){const d={webcomponent:`<chi-dropdown active>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Range Input",id:"range_input",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Xe,[t(a,null,{default:o(()=>s[0]||(s[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("span",{class:"-text -mr--2"},"200GB"),e("input",{class:"chi-input",type:"range","aria-label":"Range description"}),e("span",{class:"-text -ml--2"},"5TB")]),e("div",{class:"chi-divider",slot:"menu"}),e("legend",{class:"chi-dropdown__menu-item",slot:"menu"},"Select range"),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("input",{class:"chi-input",type:"range","aria-label":"Range description"})])],-1)])),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ze={class:"chi-col -w--12 -w-sm--7 -w-md--8 -w-lg--6 -w-xl--4"},eo=w({__name:"_toggle_switch",setup(b){const d={webcomponent:`<chi-dropdown active>
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
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Toggle Switch",id:"toggle_switch",additionalClasses:"-bg--grey-20"},{example:o(()=>[e("div",Ze,[t(a,null,{default:o(()=>s[0]||(s[0]=[e("chi-dropdown",{active:"","prevent-auto-hide":""},[e("legend",{class:"chi-dropdown__menu-item",slot:"menu"},"Configure options"),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-mail"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-mail"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Email notifications")])])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-tlf"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-tlf"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"Phone notifications")])])]),e("div",{class:"chi-dropdown__menu-item",slot:"menu"},[e("div",{class:"chi-form__item"},[e("label",{class:"chi-switch -xs",for:"toggle-app"},[e("input",{class:"chi-switch__input",type:"checkbox",id:"toggle-app"}),e("span",{class:"chi-switch__content"},[e("span",{class:"chi-switch__thumb"})]),e("span",{class:"chi-switch__label"},"App notifications")])])])],-1)])),_:1})])]),"code-htmlblueprint":o(()=>[t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),"code-webcomponent":o(()=>[t(n,{lang:"html",code:d.webcomponent},null,8,["code"])]),_:1})}}}),oo={class:"chi-col -w--7 -w-sm--4 -w-md--5 -w-lg--3"},to={active:"","prevent-auto-hide":""},no={class:"chi-dropdown__menu-item",slot:"menu"},io=w({__name:"_plain_text",setup(b){const d={webcomponent:`<chi-dropdown active>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 1</span>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 2</span>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 3</span>
  <span class="chi-dropdown__menu-item" href="#" slot="menu">Text 4</span>
</chi-dropdown>`,htmlblueprint:`<div class="chi-dropdown__menu">
  <span class="chi-dropdown__menu-item">Text 1</span>
  <span class="chi-dropdown__menu-item">Text 2</span>
  <span class="chi-dropdown__menu-item">Text 3</span>
  <span class="chi-dropdown__menu-item">Text 4</span>
</div>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Plain Text",id:"plain_text",additionalClasses:"-bg--grey-20"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},[i("Use a "),e("code",null,"span"),i(" tag to include text without rendering as a link.")],-1)])),example:o(()=>[e("div",oo,[t(a,null,{default:o(()=>[e("chi-dropdown",to,[(l(),p(_,null,u(4,c=>e("span",no,"Text "+x(c),1)),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),co={class:"chi-dropdown__menu -active",style:{width:"10rem"}},so={class:"chi-dropdown__menu-item",ref:"example-truncated-menu-item",href:"#exampleLink","data-tooltip":"Item 3 with truncated longer text"},lo=w({__name:"_truncate_long_menu_items",setup(b){const d=L("example-truncated-menu-item");E(()=>{d.value&&chi.tooltip(d.value)});const m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={htmlblueprint:`<div class="chi-dropdown__menu">
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
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(a,n)=>{const r=v,c=f;return l(),g(c,{title:"Truncate long menu-items",titleSize:"h4",id:"truncate_long_menu_items",additionalClasses:"-bg--grey-20",tabs:m},{"example-description":o(()=>n[0]||(n[0]=[e("p",{class:"-text"},[i("Wrap the menu-item content in a div with the class "),e("code",null,"-flex--ellipsis"),i(" to truncate long strings.")],-1)])),example:o(()=>[e("div",co,[n[2]||(n[2]=e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1",-1)),n[3]||(n[3]=e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2",-1)),e("a",so,n[1]||(n[1]=[e("div",{class:"-flex--ellipsis"},"Item 3 with truncated longer text",-1)]),512),n[4]||(n[4]=e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 4",-1))])]),"code-htmlblueprint":o(()=>[t(r,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),ao=w({__name:"_flexible_height",setup(b){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],m={htmlblueprint:`<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`};return(s,a)=>{const n=v,r=f;return l(),g(r,{title:"Flexible height",titleSize:"h4",id:"flexible_height",additionalClasses:"-bg--grey-20",tabs:d},{"example-description":o(()=>a[0]||(a[0]=[e("p",{class:"-text"},[i("Add the class "),e("code",null,"-h--auto"),i(" to set menu item height to auto.")],-1)])),example:o(()=>a[1]||(a[1]=[e("div",{class:"chi-dropdown__menu -active",style:{width:"10rem"}},[e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 1"),e("div",{class:"chi-dropdown__menu-item -h--auto -py--1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."),e("a",{class:"chi-dropdown__menu-item",href:"#exampleLink"},"Item 2")],-1)])),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:m.htmlblueprint},null,8,["code"])]),_:1})}}}),ro={button:"Dropdown, click me","visible-items":"3"},mo={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},po=w({__name:"_visible_items",setup(b){const d={webcomponent:`<chi-dropdown visible-items="3" button="Dropdown, click me">
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
</div>`};return(m,s)=>{const a=I,n=v,r=k,c=f;return l(),g(c,{title:"Visible Items",id:"visible_items"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},"Shows only given number of items.",-1)])),example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",ro,[(l(),p(_,null,u(5,h=>e("a",mo,"Item "+x(h),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(r,null,{default:o(()=>s[1]||(s[1]=[e("div",{class:"-text"},[i("Max-height can be adjusted according to the needs, using styles. Trigger and dropdown enclosed in the same "),e("code",null,"div"),i(".")],-1)])),_:1}),t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),ho={button:"Dropdown, click me","retain-selection":""},_o={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},uo=w({__name:"_retain_selection",setup(b){const d={webcomponent:`<chi-dropdown button="Dropdown, click me" retain-selection>
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
<\/script>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Retain selection",id:"retain_selection"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},[i("There is an available property, "),e("code",null,"retain-selection"),i(", which allows retaining the selected item in the dropdown as active and see the selected item when the dropdown is closed.")],-1)])),example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",ho,[(l(),p(_,null,u(4,c=>e("a",_o,"Item "+x(c),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),wo={icon:"more-vert","icon-tooltip-message":"More options"},bo={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},vo=w({__name:"_icon_trigger",setup(b){const d={webcomponent:`<chi-dropdown icon="more-vert" icon-tooltip-message="More options">
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
<\/script>`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Icon",id:"icon_trigger"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},[i("There is an available property, "),e("code",null,"icon"),i(", which allows adding an icon as the dropdown trigger.")],-1)])),example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",wo,[(l(),p(_,null,u(4,c=>e("a",bo,"Item "+x(c),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{class:"html",lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),fo={"select-mode":"single",button:"- Select single -"},go={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},xo={class:"-mt--2","select-mode":"multi",button:"- Select multi -"},Io={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},yo=w({__name:"_select_mode",setup(b){const d=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],m={webcomponent:`<!-- Select mode single -->
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
`};return(s,a)=>{const n=I,r=v,c=f;return l(),g(c,{title:"Select mode",id:"select_mode",tabs:d},{"example-description":o(()=>a[0]||(a[0]=[e("p",{class:"-text"},[i("The "),e("code",null,"select-mode"),i(" property enables the looks and feels of the "),e("code",null,"select"),i(" component, with the advantage of having the options to be shown with styles following the brand guidelines and independent from the operating systems or browsers.")],-1),e("p",{class:"-text"},[i("With value "),e("code",null,"single"),i(", only one option can be selected. With value "),e("code",null,"multi"),i(" any number of options can be selected, and clicking a selected option will unselect it.")],-1)])),example:o(()=>[t(n,null,{default:o(()=>[e("chi-dropdown",fo,[(l(),p(_,null,u(4,h=>e("a",go,"Item "+x(h),1)),64))]),e("chi-dropdown",xo,[(l(),p(_,null,u(4,h=>e("a",Io,"Item "+x(h),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(r,{class:"html",lang:"html",code:m.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>a[1]||(a[1]=[])),_:1})}}}),ko={class:"-d--flex"},Co={position:"bottom",button:"Dropdown with error",state:"danger","helper-message":"Helpful info for the user"},$o={class:"chi-dropdown__menu-item",href:"#",slot:"menu"},So=w({__name:"_helper_message",setup(b){const d={webcomponent:`<chi-dropdown
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
<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>`};return(m,s)=>{const a=I,n=v,r=k,c=f;return l(),g(c,{title:"Error and helper message",id:"error-helper-message"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},[i("Use the state "),e("code",null,"danger"),i(" to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger states must include an error message explaining the failure and/or how to correct it. Other allowed states are "),e("code",null,"warning"),i(", "),e("code",null,"info"),i(" and "),e("code",null,"success"),i(".")],-1)])),example:o(()=>[e("div",ko,[t(a,null,{default:o(()=>[e("chi-dropdown",Co,[(l(),p(_,null,u(4,h=>e("a",$o,"Item "+x(h),1)),64))])]),_:1})])]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(r),t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Do={button:"Dropdown, click me","visible-items":"3"},Bo={class:"chi-dropdown__menu-item",href:"#",slot:"menu"},To=w({__name:"_search_input",setup(b){const d={webcomponent:`<chi-dropdown button="Dropdown, click me" visible-items="3">
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
`};return(m,s)=>{const a=I,n=v,r=f;return l(),g(r,{title:"Search input",id:"dropdown-search-input"},{example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",Do,[s[0]||(s[0]=e("chi-search-input",{size:"sm",placeholder:"Search",slot:"menu-header"},null,-1)),(l(),p(_,null,u(5,c=>e("a",Bo,"Item "+x(c),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[s[1]||(s[1]=e("div",{class:"chi-tab__description"},[e("span",{class:"-text--grey"},[i("There are two extra slots available for the dropdown menu: "),e("code",null,"menu-header"),i(" and "),e("code",null,"menu-footer"),i(", which places the items inside those slots, accordingly inside the header and footer of dropdown menu.")])],-1)),t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Lo={position:"bottom",button:"Dropdown, click me",fluid:""},Eo={class:"chi-dropdown__menu-item",slot:"menu",href:"#"},Ro=w({__name:"_fluid",setup(b){const d={webcomponent:`<chi-dropdown position="bottom" button="Dropdown, click me" fluid>
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

<script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`};return(m,s)=>{const a=I,n=v,r=k,c=f;return l(),g(c,{title:"Fluid",id:"fluid"},{"example-description":o(()=>s[0]||(s[0]=[e("p",{class:"-text"},"Use fluid to render Dropdowns that span the full width of the parent container.",-1)])),example:o(()=>[t(a,null,{default:o(()=>[e("chi-dropdown",Lo,[(l(),p(_,null,u(4,h=>e("a",Eo,"Item "+x(h),1)),64))])]),_:1})]),"code-webcomponent":o(()=>[t(n,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[t(r),t(n,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Mo=w({__name:"index",setup(b){return(d,m)=>(l(),p("div",null,[m[0]||(m[0]=e("h2",null,"Examples",-1)),m[1]||(m[1]=e("p",{class:"-text"},[i("A dropdown must be associated with an activator, commonly a button, which, at the time of being clicked, expands the dropdown. Activator and dropdown should be contained in a div with a "),e("code",null,"chi-dropdown"),i(" class, or otherwise, the activator must reference the dropdown with a "),e("code",null,"data-target"),i(" attribute. Use the "),e("code",null,"chi-dropdown__trigger"),i(" class on your activator button to make the chevron appear.")],-1)),t(j),t(W),t(So),t(V),t(G),t(X),t(Ro),t(ue),t(po),t(To),t(uo),t(yo),t(vo),m[2]||(m[2]=e("h2",null,"Menu",-1)),t(be),t(fe),t(ke),t(Ee),t(Ne),m[3]||(m[3]=e("h3",null,"Checkboxes",-1)),t(We),t(Ge),t(Qe),t(Ye),t(eo),t(io),m[4]||(m[4]=e("h3",null,"Helpers",-1)),t(lo),t(ao)]))}});export{Mo as _};
