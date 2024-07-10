var Z=Object.defineProperty;var k=(e,n,i)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var m=(e,n,i)=>k(e,typeof n!="symbol"?n+"":n,i);import{V as _,N as g}from"./uJTUijt2.js";import{o as h,f as x,w as a,b as c,a as o,d as s,c as T,F as y,i as O,t as E,a0 as ee,n as oe,g as te,r as b,h as ne}from"./B5CYXVwa.js";import{_ as w}from"./D8GK0F__.js";import{_ as P}from"./DKu8Jd2y.js";import{_ as f}from"./DlAUqK2U.js";import{_ as C}from"./BLbnEGma.js";import pe from"./DzM5X7jg.js";import ie from"./CXD8fSVt.js";import re from"./5Eb4nkdC.js";import{_ as se}from"./C-hgEc7b.js";import le from"./DFAT2G3J.js";import ce from"./JOCEhK5m.js";import{s as ae}from"./2EwpEKcw.js";import{_ as de}from"./Be4hAolY.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var ve=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ue=(e,n,i,r)=>{for(var t=r>1?void 0:r?he(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&ve(n,i,t),t};let B=class extends _{};B=ue([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-popover variant="text" active>
  Popover content
</chi-popover>`,htmlblueprint:`<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`}})})],B);const me=o("p",{class:"-text"},"Popover components are absolutely positioned. For this example we have forced a relative position.",-1),be=o("div",{class:"-position--relative",style:{height:"53px"}},[o("chi-popover",{active:"",variant:"text","prevent-auto-hide":""},"Popover content")],-1),_e=o("div",{class:"chi-tab__description"},[s("Remove the "),o("code",null,"active"),s(" attribute to hide the popover. Use the "),o("code",null,'variant="text"'),s(" attribute to display text content in a "),o("code",null,"<p>"),s(".")],-1),ge=o("div",{class:"chi-tab__description"},[s("Remove the "),o("code",null,"-active"),s(" class to hide the popover.")],-1);function fe(e,n,i,r,t,l){const p=w,d=P;return h(),x(d,{title:"Base",id:"base",tabs:e.exampleTabs},{"example-description":a(()=>[me]),example:a(()=>[be]),"code-webcomponent":a(()=>[_e,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[ge,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xe=f(B,[["render",fe]]);var we=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,$e=(e,n,i,r)=>{for(var t=r>1?void 0:r?Pe(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&we(n,i,t),t};let L=class extends _{};L=$e([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-popover title="Popover title" variant="text" active>
  Popover content
</chi-popover>`,htmlblueprint:`<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover Title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`}})})],L);const Te=o("div",{class:"-position--relative",style:{height:"87px"}},[o("chi-popover",{active:"",title:"Popover title",variant:"text","prevent-auto-hide":""},"Popover content")],-1),Ce=o("div",{class:"chi-tab__description"},[s("Use the "),o("code",null,"title"),s(" attribute to display a title.")],-1),ye=o("div",{class:"chi-tab__description"},[s("Add "),o("code",null,"chi-popover__header"),s(" and "),o("code",null,"chi-popover__title"),s(" to display a title.")],-1);function Oe(e,n,i,r,t,l){const p=w,d=P;return h(),x(d,{title:"Titled",id:"titled",tabs:e.exampleTabs},{example:a(()=>[Te]),"code-webcomponent":a(()=>[Ce,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[ye,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ee=f(L,[["render",Oe]]);var Be=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Se=(e,n,i,r)=>{for(var t=r>1?void 0:r?Le(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&Be(n,i,t),t};let S=class extends _{};S=Se([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Top -->
<chi-popover position="top" variant="text" active arrow>
  Popover content
</chi-popover>

<!-- Right -->
<chi-popover position="right" variant="text" active arrow>
  Popover content
</chi-popover>

<!-- Bottom -->
<chi-popover position="bottom" variant="text" active arrow>
  Popover content
</chi-popover>

<!-- Left -->
<chi-popover position="left" variant="text" active arrow>
  Popover content
</chi-popover>`,htmlblueprint:`<!-- Top -->
<section class="chi-popover chi-popover--top -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>

<!-- Right -->
<section class="chi-popover chi-popover--right -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>

<!-- Bottom -->
<section class="chi-popover chi-popover--bottom -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>

<!-- Left -->
<section class="chi-popover chi-popover--left -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>`}})})],S);const De=o("p",{class:"-text"},"Popovers support arrows to indicate the element they originate from. Arrows can be located anywhere around the Popover.",-1),Ae={class:"chi-grid -no-gutter"},He={class:"chi-col -w--6 -w-md--4 -w-xl--3"},Ie={class:"-text--h5 -mb--3"},Me=["position"],je=o("div",{class:"chi-tab__description"},[s("Add the attribute "),o("code",null,"arrow"),s(" and use the attribute "),o("code",null,"position"),s(" with the values: "),o("code",null,"top"),s(", "),o("code",null,"right"),s(", "),o("code",null,"bottom"),s(" and "),o("code",null,"left"),s(" to position the arrow in the proper place.")],-1),Re=o("div",{class:"chi-tab__description"},[s("Use the classes "),o("code",null,"chi-popover--top"),s(", "),o("code",null,"chi-popover--right"),s(", "),o("code",null,"chi-popover--bottom"),s(" and "),o("code",null,"chi-popover--left"),s(" to position the arrow in the proper place. If you use a position engine such as Popper.js (used by Chi), the attribute "),o("code",null,"x-placement"),s(" should be used instead of these classes. It accepts all the values Popper.js does. Popper.js sets this attribute automatically, so there is no need to include it on the code.")],-1);function Ne(e,n,i,r,t,l){const p=w,d=P;return h(),x(d,{title:"Arrow",id:"arrow",tabs:e.exampleTabs},{"example-description":a(()=>[De]),example:a(()=>[o("div",Ae,[(h(),T(y,null,O(["Top","Right","Bottom","Left"],v=>o("div",He,[o("h4",Ie,E(v),1),o("div",{class:"-position--relative",style:ee(v==="Bottom"?"height: 100px; top: -12px":"height: 100px;")},[o("chi-popover",{position:v.toLowerCase(),variant:"text",active:"",arrow:"","prevent-auto-hide":""},"Popover content",8,Me)],4)])),64))])]),"code-webcomponent":a(()=>[je,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[Re,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=f(S,[["render",Ne]]);var Ue=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Fe=(e,n,i,r)=>{for(var t=r>1?void 0:r?qe(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&Ue(n,i,t),t};let D=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-3-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-3-popover" position="top" title="Popover title" variant="text" arrow reference="#example-3-button" position="top" active></chi-popover>

<script>
  document.querySelector("#example-3-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-3-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<!-- Method 1 - Data Target -->
<button class="chi-button" id="popover-1b" data-target="#popover-in-html">Popover</button>
<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<section class="chi-popover" id="popover-in-html" aria-modal="true" role="dialog" aria-label="Popover title">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>
<script>chi.popover(document.getElementById('popover-1b'));<\/script>

<!-- Method 2 - Data Content -->
<button id='popover-1' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Popover content</p></div>'>Popover</button>
<script>chi.popover(document.getElementById('popover-1'));<\/script>`})}togglePopover(){this.$refs.popover.toggle()}};D=Fe([g({})],D);const Je=o("p",{class:"-text"},"A reference element can be set up for advanced positioning. The popover will be positioned relative to this element.",-1),Ve={ref:"popover",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#example-3-button"},ze=o("div",{class:"chi-tab__description"},[s("Use the "),o("code",null,"reference"),s(" attribute with a CSS selector to properly reference an element.")],-1);function Ye(e,n,i,r,t,l){const p=w,d=C,v=P;return h(),x(v,{title:"Reference element",id:"reference-element",tabs:e.exampleTabs},{"example-description":a(()=>[Je]),example:a(()=>[o("chi-button",{id:"example-3-button",onClick:n[0]||(n[0]=(...u)=>e.togglePopover&&e.togglePopover(...u))},"Click me!"),o("chi-popover",Ve,"Popover content",512)]),"code-webcomponent":a(()=>[ze,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[c(d),c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ge=f(D,[["render",Ye]]);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Xe=(e,n,i,r)=>{for(var t=r>1?void 0:r?Qe(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&Ke(n,i,t),t};let A=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-draggable-popover" title="Draggable Popover" reference="#example-draggable-button" drag portal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,htmlblueprint:""})}togglePopover(){this.$refs.popover.toggle()}};A=Xe([g({})],A);const Ze={ref:"popover",title:"Draggable Popover",reference:"#example-draggable-button",drag:"",portal:"",closable:""},ke=o("div",{class:"chi-tab__description"},[s("Use the "),o("code",null,"reference"),s(" attribute with a CSS selector to properly reference an element.")],-1);function eo(e,n,i,r,t,l){const p=w,d=P;return h(),x(d,{title:"Draggable popover",id:"draggable-lumen-centurylink",tabs:e.exampleTabs},{example:a(()=>[o("chi-button",{id:"example-draggable-button",onClick:n[0]||(n[0]=(...v)=>e.togglePopover&&e.togglePopover(...v))},"Click me!"),o("chi-popover",Ze,"Popover content",512)]),"code-webcomponent":a(()=>[ke,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const oo=f(A,[["render",eo]]);var to=Object.defineProperty,no=Object.getOwnPropertyDescriptor,po=(e,n,i,r)=>{for(var t=r>1?void 0:r?no(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&to(n,i,t),t};let H=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="button-open-on-hover">Hover me!</chi-button>
<chi-popover id="popover-open-on-hover" variant="text" arrow="arrow" reference="#button-open-on-hover">Popover content</chi-popover>
<script>
  const buttonOpenOnHover = document.getElementById("button-open-on-hover");
  const popoverOpenOnHover = document.getElementById("popover-open-on-hover");
  let hoverAnimationTimeout;

  buttonOpenOnHover.addEventListener('chiMouseEnter', function() {
    hoverAnimationTimeout = setTimeout(() => {
      popoverOpenOnHover.show();
    }, 300);
  });

  buttonOpenOnHover.addEventListener('chiMouseLeave', function() {
    if (hoverAnimationTimeout) {
      clearTimeout(hoverAnimationTimeout);
    }
    popoverOpenOnHover.hide();
  });

  buttonOpenOnHover.addEventListener('click', function() {
    popoverOpenOnHover.toggle();
  });
<\/script>`,htmlblueprint:`<button class="chi-button" id="button-open-on-hover" data-target="#popover-open-on-hover">Hover me!</button>
<section class="chi-popover" id="popover-open-on-hover" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>

<script>
  const buttonOpenOnHover = document.getElementById('button-open-on-hover');
  const popover = chi.popover(buttonOpenOnHover);
  let hoverAnimationTimeout;

  buttonOpenOnHover.addEventListener("mouseenter", function() {
    hoverAnimationTimeout = setTimeout(() => {
      popover.show();
    }, 300);
  });

  buttonOpenOnHover.addEventListener("mouseleave", function() {
    if (hoverAnimationTimeout) {
      clearTimeout(hoverAnimationTimeout);
    }
    popover.hide();
  });

  buttonOpenOnHover.addEventListener("click", function() {
    popover.toggle();
  });
<\/script>`})}show(){this.$refs.popover.show()}hide(){this.$refs.popover.hide()}toggle(){this.$refs.popover.toggle()}};H=po([g({})],H);const io={class:"-position--relative"},ro={ref:"popover",variant:"text",arrow:"",reference:"#button-open-on-hover"},so=o("div",{class:"chi-tab__description"},[s("Use the available methods to show / hide popover when "),o("code",null,"chiMouseEnter"),s(", "),o("code",null,"chiMouseLeave"),s(" or any other event is triggered")],-1),lo=o("div",{class:"chi-tab__description"},[s("Use the available methods to show / hide popover when "),o("code",null,"mouseEnter"),s(", "),o("code",null,"mouseLeave"),s(" or any other event is triggered")],-1);function co(e,n,i,r,t,l){const p=w,d=P;return h(),x(d,{title:"Open on hover",id:"open-on-hover",tabs:e.exampleTabs},{example:a(()=>[o("div",io,[o("chi-button",{id:"button-open-on-hover","on:chiMouseEnter":n[0]||(n[0]=(...v)=>e.show&&e.show(...v)),"on:chiMouseLeave":n[1]||(n[1]=(...v)=>e.hide&&e.hide(...v)),onClick:n[2]||(n[2]=(...v)=>e.toggle&&e.toggle(...v))},"Hover me!",32),o("chi-popover",ro,"Popover content",512)])]),"code-webcomponent":a(()=>[so,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[lo,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ao=f(H,[["render",co]]);var vo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,uo=(e,n,i,r)=>{for(var t=r>1?void 0:r?ho(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&vo(n,i,t),t};let I=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="button-example-popover-closable-1">With title</chi-button>
<chi-popover id="popover-example-popover-closable-1" title="Title" variant="text" arrow reference="#button-example-popover-closable-1" closable>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</chi-popover>

<script>
  const button = document.getElementById("button-example-popover-closable-1");
  const popover = document.getElementById("popover-example-popover-closable-1");

  button.addEventListener("click", function() {
      popover.toggle();
  });
<\/script>`,htmlblueprint:`<button class="chi-button" id="button-example-popover-closable-html" data-target="#popover-example-popover-closable-html">Popover</button>
<section class="chi-popover -closable" id="popover-example-popover-closable-html" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" id="close-popover-button" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</section>

<script>
  const popoverTrigger = document.getElementById("button-example-popover-closable-html");
  const popoverInstance = chi.popover(popoverTrigger);
  const closeButton = document.getElementById("close-popover-button");

  closeButton.addEventListener("click", function () {
    popoverInstance.hide();
  });
<\/script>`})}togglePopover(){this.$refs.popover.toggle()}};I=uo([g({})],I);const mo={ref:"popover",title:"Title",variant:"text",arrow:"",reference:"#button-example-popover-closable-1",closable:""},bo=o("div",{class:"chi-tab__description"},[s("Use the attribute "),o("code",null,"closable"),s(" to render the Popover with a close button.")],-1);function _o(e,n,i,r,t,l){const p=w,d=C,v=P;return h(),x(v,{title:"Close button",id:"close-button",tabs:e.exampleTabs},{example:a(()=>[o("chi-button",{id:"button-example-popover-closable-1",onClick:n[0]||(n[0]=(...u)=>e.togglePopover&&e.togglePopover(...u))},"Click Me!"),o("chi-popover",mo,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",512)]),"code-webcomponent":a(()=>[bo,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[c(d),c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const go=f(I,[["render",_o]]);var fo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,wo=(e,n,i,r)=>{for(var t=r>1?void 0:r?xo(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&fo(n,i,t),t};let M=class extends _{constructor(){super(...arguments);m(this,"positions",{top:[{label:"Top start",position:"top-start"},{label:"Top",position:"top"},{label:"Top end",position:"top-end"}],left:[{label:"Left start",position:"left-start"},{label:"Left",position:"left"},{label:"Left end",position:"left-end"}],right:[{label:"Right start",position:"right-start"},{label:"Right",position:"right"},{label:"Right end",position:"right-end"}],bottom:[{label:"Bottom start",position:"bottom-start"},{label:"Bottom",position:"bottom"},{label:"Bottom end",position:"bottom-end"}]});m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<!-- Top -->
<chi-button id="example-4-t-button">Top popover</chi-button>
<chi-popover id="example-4-t-popover" position="top" title="Popover title" variant="text" arrow reference="#example-4-t-button">
  This popover is top positioned.
</chi-popover>

<!-- Top Start -->
<chi-button id="example-4-ts-button">Top start popover</chi-button>
<chi-popover id="example-4-ts-popover" position="top-start" title="Popover title" variant="text" arrow reference="#example-4-ts-button">
  This popover is top-start positioned.
</chi-popover>

<!-- Top End -->
<chi-button id="example-4-te-button">Top end popover</chi-button>
<chi-popover id="example-4-te-popover" position="top-end" title="Popover title" variant="text" arrow reference="#example-4-te-button">
  This popover is top-end positioned.
</chi-popover>

<!-- Right -->
<chi-button id="example-4-r-button">Right popover</chi-button>
<chi-popover id="example-4-r-popover" position="right" title="Popover title" variant="text" arrow reference="#example-4-r-button">
  This popover is right positioned.
</chi-popover>

<!-- Right Start -->
<chi-button id="example-4-rs-button">Right start popover</chi-button>
<chi-popover id="example-4-rs-popover" position="right-start" title="Popover title" variant="text" arrow reference="#example-4-rs-button">
  This popover is right-start positioned.
</chi-popover>

<!-- Right End -->
<chi-button id="example-4-re-button">Right end popover</chi-button>
<chi-popover id="example-4-re-popover" position="right-end" title="Popover title" variant="text" arrow reference="#example-4-re-button">
  This popover is right-end positioned.
</chi-popover>

<!-- Bottom -->
<chi-button id="example-4-b-button">Bottom popover</chi-button>
<chi-popover id="example-4-b-popover" position="bottom" title="Popover title" variant="text" arrow reference="#example-4-b-button">
  This popover is bottom positioned.
</chi-popover>

<!-- Bottom Start -->
<chi-button id="example-4-bs-button">Bottom start popover</chi-button>
<chi-popover id="example-4-bs-popover" position="bottom-start" title="Popover title" variant="text" arrow reference="#example-4-bs-button">
  This popover is bottom-start positioned.
</chi-popover>

<!-- Bottom End -->
<chi-button id="example-4-be-button">Bottom end popover</chi-button>
<chi-popover id="example-4-be-popover" position="bottom-end" title="Popover title" variant="text" arrow reference="#example-4-be-button">
  This popover is bottom-end positioned.
</chi-popover>

<!-- Left -->
<chi-button id="example-4-l-button">Left popover</chi-button>
<chi-popover id="example-4-l-popover" position="left" title="Popover title" variant="text" arrow reference="#example-4-l-button">
  This popover is left positioned.
</chi-popover>

<!-- Left Start -->
<chi-button id="example-4-ls-button">Left start popover</chi-button>
<chi-popover id="example-4-ls-popover" position="left-start" title="Popover title" variant="text" arrow reference="#example-4-ls-button">
  This popover is left-start positioned.
</chi-popover>

<!-- Left End -->
<chi-button id="example-4-le-button">Left end popover</chi-button>
<chi-popover id="example-4-le-popover" position="left-end" title="Popover title" variant="text" arrow reference="#example-4-le-button">
  This popover is left-end positioned.
</chi-popover>`,htmlblueprint:`<!-- Top -->
<button data-position='top' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top positioned.</p></div>' class="chi-button">Top popover</button>

<!-- Top Start -->
<button data-position='top-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top start positioned.</p></div>' class="chi-button">Top start popover</button>

<!-- Top End -->
<button data-position='top-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top end positioned.</p></div>' class="chi-button">Top end popover</button>

<!-- Right -->
<button class="chi-button" data-position='right' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right positioned.</p></div>'>Right popover</button>

<!-- Right Start -->
<button class="chi-button" data-position='right-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right start positioned.</p></div>'>Right start popover</button class="chi-button">

<!-- Right End -->
<button class="chi-button" data-position='right-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right end positioned.</p></div>'>Right end popover</button class="chi-button">

<!-- Bottom -->
<button class="chi-button" data-position='bottom' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom positioned.</p></div>'>Bottom popover</button>

<!-- Bottom Start -->
<button class="chi-button" data-position='bottom-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom start positioned.</p></div>'>Bottom start popover</button class="chi-button">

<!-- Bottom End -->
<button class="chi-button" data-position='bottom-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom end positioned.</p></div>'>Bottom end popover</button class="chi-button">

<!-- Left -->
<button class="chi-button" data-position='left' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left positioned.</p></div>'>Left popover</button>

<!-- Left Start -->
<button class="chi-button" data-position='left-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left start positioned.</p></div>'>Left start popover</button>

<!-- Left End -->
<button class="chi-button" data-position='left-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left end positioned.</p></div>'>Left end popover</button>

<!-- JavaScript -->
<script>chi.popover(document.querySelectorAll('[data-popover-content]'));<\/script>`})}togglePopover(i){this.$refs[i][0].toggle()}getClasses(i){return["top","bottom"].includes(i)?"-w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap":i==="left"?"-w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap":i===""?"-d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center":"-w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap"}};M=wo([g({})],M);const Po=o("p",{class:"-text"},[s("Further positions can be used in this mode: "),o("code",null,"top"),s(", "),o("code",null,"right"),s(", "),o("code",null,"bottom"),s(", "),o("code",null,"left"),s(", "),o("code",null,"top-start"),s(", "),o("code",null,"top-end"),s(", "),o("code",null,"right-start"),s(", "),o("code",null,"right-end"),s(", "),o("code",null,"bottom-start"),s(", "),o("code",null,"bottom-end"),s(", "),o("code",null,"left-start"),s(", "),o("code",null,"left-end"),s(".")],-1),$o={class:"chi-grid -no-gutter -px-xl--3"},To={key:0,class:"-w--75 -text -text--muted -text--center -lh--2"},Co={class:"-p--1 -py-sm--3"},yo=["onClick","id"],Oo=["position","reference"];function Eo(e,n,i,r,t,l){const p=w,d=C,v=P;return h(),x(v,{title:"Positioning",id:"positioning",tabs:e.exampleTabs},{"example-description":a(()=>[Po]),example:a(()=>[o("div",$o,[(h(),T(y,null,O(["top","left","","right","bottom"],u=>o("div",{class:oe(["chi-col",e.getClasses(u)])},[u===""?(h(),T("div",To,"Click buttons to see popover positions")):(h(!0),T(y,{key:1},O(e.positions[u],$=>(h(),T("div",Co,[o("chi-button",{onClick:q=>e.togglePopover(`popover-${$.position}`),id:`button-${$.position}`},E($.label),9,yo),o("chi-popover",{ref_for:!0,ref:`popover-${$.position}`,position:$.position,title:"Popover title",variant:"text",arrow:"",reference:`#button-${$.position}`},"This popover is "+E($.position)+" positioned.",9,Oo)]))),256))],2)),64))])]),"code-webcomponent":a(()=>[c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[c(d),c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Bo=f(M,[["render",Eo]]);var Lo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Do=(e,n,i,r)=>{for(var t=r>1?void 0:r?So(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&Lo(n,i,t),t};let j=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-5-button-show">Show</chi-button>
<chi-button id="example-5-button-hide">Hide</chi-button>
<chi-button id="example-5-button-toggle">Toggle</chi-button>
<chi-button id="example-5-button-reference">Reference</chi-button>

<chi-popover id="example-5-popover" position="top" title="Popover title" variant="text" arrow reference="#example-5-button-reference">
  Popover content
</chi-popover>

<script>
  var popover5 = document.getElementById('example-5-popover');

  var bShow = document.getElementById('example-5-button-show');
  bShow.addEventListener('click', function(){
    popover5.show();
    // or popover5.active = true;
  });

  var bHide = document.getElementById('example-5-button-hide');
  bHide.addEventListener('click', function () {
    popover5.hide();
    // or popover5.active = false;
  });

  var bToggle = document.getElementById('example-5-button-toggle');
  bToggle.addEventListener('click', function(){
    popover5.toggle();
    // or popover5.active = !popover5.active;
  });
<\/script>`,htmlblueprint:`<button id='show-popover-3' class="chi-button">Show</button>
<button id='hide-popover-3' class="chi-button">Hide</button>
<button id='toggle-popover-3' class="chi-button">Toggle</button>
<button id='popover-3' class="chi-button" data-popover-content='<div class="chi-popover__content">Foo</div>'>Popover</button>
<script>
  var popover = chi.popover(
    document.getElementById('popover-3'),
    {
      trigger: 'manual',
      preventAutoHide: true
    }
  );
  document.getElementById('show-popover-3').addEventListener('click', function(e) {
    popover.show()
  });
  document.getElementById('hide-popover-3').addEventListener('click', function(e) {
    popover.hide()
  });
  document.getElementById('toggle-popover-3').addEventListener('click', function(e) {
    popover.toggle()
  });
<\/script>`})}show(){this.$refs.popover.show()}hide(){this.$refs.popover.hide()}toggle(){this.$refs.popover.toggle()}};j=Do([g({})],j);const Ao=o("p",{class:"-text"},[s("Read this handy introduction to"),o("a",{href:"/getting-started"},"HTML attributes and DOM properties"),s(".")],-1),Ho=o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"example-5-button-reference"},"Reference",-1),Io={ref:"popover",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#example-5-button-reference"},Mo=o("div",{class:"chi-tab__description"},[s("Modify the "),o("code",null,"active"),s(" attribute or property to make the popover show or hide. The "),o("code",null,"chi-popover"),s(" element also has three public methods to interact with it: "),o("code",null,"show()"),s(", "),o("code",null,"hide()"),s(", "),o("code",null,"toggle()"),s(".")],-1),jo=o("div",{class:"chi-tab__description"},[s("Use methods "),o("code",null,".show()"),s(", "),o("code",null,".hide()"),s(", and "),o("code",null,".toggle()"),s(" to control popover visibility.")],-1);function Ro(e,n,i,r,t,l){const p=w,d=C,v=P;return h(),x(v,{title:"Interaction",id:"interaction",tabs:e.exampleTabs},{"example-description":a(()=>[Ao]),example:a(()=>[o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:n[0]||(n[0]=(...u)=>e.show&&e.show(...u))},"Show"),o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:n[1]||(n[1]=(...u)=>e.hide&&e.hide(...u))},"Hide"),o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:n[2]||(n[2]=(...u)=>e.toggle&&e.toggle(...u))},"Toggle"),Ho,o("chi-popover",Io,"Popover content",512)]),"code-webcomponent":a(()=>[Mo,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[c(d),jo,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const No=f(j,[["render",Ro]]);var Wo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,qo=(e,n,i,r)=>{for(var t=r>1?void 0:r?Uo(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&Wo(n,i,t),t};let R=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<!-- Auto hide -->
<chi-popover id="example-6-popover-auto-hide-popover" position="top" title="Popover title" variant="text" arrow reference="#example-6-auto-hide-button">
  Click outside. I will disappear!
</chi-popover>

<!-- No auto hide -->
<chi-popover id="example-6-popover-no-auto-hide-popover" position="top" title="Popover title" variant="text" arrow prevent-auto-hide reference="#example-6-no-auto-hide-button">
  Click outside. I will stay!
</chi-popover>`,htmlblueprint:`<!-- Auto hide -->
<button id='popover-6' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Click outside. I will disappear!</p></div>'>Auto hide</button>
<script>chi.popover(document.getElementById('popover-6'),
  {
    preventAutoHide: false
  });
<\/script>

<!-- No auto hide -->
<button id='popover-6' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Click outside. I will stay!</p></div>'>No auto hide</button>
<script>chi.popover(document.getElementById('popover-6'),
  {
    preventAutoHide: true
  });
<\/script>`})}togglePopover(i){this.$refs[i].toggle()}};R=qo([g({})],R);const Fo=o("p",{class:"-text"},"Popovers automatically hide when clicking outside of it or when pressing the ESC key.",-1),Jo={ref:"popover-1",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#auto-hide-button-1"},Vo={ref:"popover-2",position:"top",title:"Popover title",variant:"text",arrow:"","prevent-auto-hide":"",reference:"#auto-hide-button-2"},zo=o("div",{class:"chi-tab__description"},[s("You can prevent automatic hiding behavior with the "),o("code",null,"prevent-auto-hide"),s(" attribute.")],-1),Yo=o("div",{class:"chi-tab__description"},[s("You can prevent automatic hiding behavior by setting "),o("code",null,"preventAutoHide"),s(" to "),o("code",null,"true")],-1);function Go(e,n,i,r,t,l){const p=w,d=C,v=P;return h(),x(v,{titleSize:"h4",title:"Auto hide",id:"auto-hide",tabs:e.exampleTabs},{"example-description":a(()=>[Fo]),example:a(()=>[o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"auto-hide-button-1",onClick:n[0]||(n[0]=u=>e.togglePopover("popover-1"))},"Auto hide"),o("chi-popover",Jo,"Click outside. I will disappear!",512),o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"auto-hide-button-2",onClick:n[1]||(n[1]=u=>e.togglePopover("popover-2"))},"No auto hide"),o("chi-popover",Vo,"Click outside. I will stay!",512)]),"code-webcomponent":a(()=>[zo,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[c(d),Yo,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ko=f(R,[["render",Go]]);var Qo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Zo=(e,n,i,r)=>{for(var t=r>1?void 0:r?Xo(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&Qo(n,i,t),t};let N=class extends _{};N=Zo([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-popover position="top" title="Are you sure?" variant="text" active arrow>
  Are you sure you want to delete this?
  <chi-button slot="chi-popover__footer" color="danger">Delete</chi-button>
  <chi-button slot="chi-popover__footer">Cancel</chi-button>
</chi-popover>`,htmlblueprint:`<section class="chi-popover chi-popover--top -active" aria-label="Are you sure?" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Are you sure?</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Are you sure you want to delete this?</p>
  </div>
  <div class="chi-popover__footer">
    <button class="chi-button -danger">Delete</button>
    <button class="chi-button">Cancel</button>
  </div>
  <div class="chi-popover__arrow"></div>
</section>`}})})],N);const ko=o("div",{class:"-position--relative",style:{height:"146px"}},[o("chi-popover",{position:"top",title:"Are you sure?",variant:"text",active:"",arrow:"","prevent-auto-hide":""},[s("Are you sure you want to delete this?"),o("div",{slot:"chi-popover__footer"},[o("chi-button",{color:"danger"},"Delete")]),o("div",{slot:"chi-popover__footer"},[o("chi-button",null,"Cancel")])])],-1),et=o("div",{class:"chi-tab__description"},[s("Add buttons to Popovers by setting slot attribute to "),o("code",null,'slot="chi-popover__footer"'),s(".")],-1),ot=o("div",{class:"chi-tab__description"},[s("Add buttons to Popovers by placing them in "),o("code",null,"chi-popover__footer"),s(".")],-1);function tt(e,n,i,r,t,l){const p=w,d=P;return h(),x(d,{titleSize:"h4",title:"Destructive action confirmation",id:"destructive-action-confirmation",tabs:e.exampleTabs},{example:a(()=>[ko]),"code-webcomponent":a(()=>[et,c(p,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[ot,c(p,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nt=f(N,[["render",tt]]);var pt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,rt=(e,n,i,r)=>{for(var t=r>1?void 0:r?it(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&pt(n,i,t),t};let W=class extends _{constructor(){super(...arguments);m(this,"selectedTheme",te())}};W=rt([g({components:{BaseExample:xe,Titled:Ee,Arrow:We,ReferenceElement:Ge,InlineModalPortal:pe,DraggableLumenCenturyLink:oo,DraggablePortal:ie,OpenOnHover:ao,CloseButton:go,Positioning:Bo,Interaction:No,AutoHide:Ko,DestructiveActionConfirmation:nt,TableFilteringPortal:re}})],W);const st=o("h2",null,"Examples",-1),lt={key:0},ct={key:1},at=o("h3",null,"Popover with custom content",-1),dt=o("p",{class:"--text"},"Popovers can be used to display any kind of custom content (even other components).",-1);function vt(e,n,i,r,t,l){const p=b("BaseExample"),d=b("Titled"),v=b("Arrow"),u=b("ReferenceElement"),$=b("InlineModalPortal"),q=b("DraggablePortal"),F=b("DraggableLumenCenturyLink"),J=b("OpenOnHover"),V=b("CloseButton"),z=b("Positioning"),Y=b("Interaction"),G=b("AutoHide"),K=b("DestructiveActionConfirmation"),Q=b("TableFilteringPortal"),X=se;return h(),T(y,null,[st,c(X,{fallback:"Loading examples..."},{default:a(()=>[c(p),c(d),c(v),c(u),["portal","portalrebrand24"].includes(e.selectedTheme)?(h(),T("div",lt,[c($),c(q)])):(h(),T("div",ct,[c(F)])),c(J),c(V),c(z),c(Y),c(G),at,dt,c(K),["portal","portalrebrand24"].includes(e.selectedTheme)?(h(),x(Q,{key:2})):ne("",!0)]),_:1})],64)}const ht=f(W,[["render",vt]]);var ut=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,bt=(e,n,i,r)=>{for(var t=r>1?void 0:r?mt(n,i):n,l=e.length-1,p;l>=0;l--)(p=e[l])&&(t=(r?p(n,i,t):p(t))||t);return r&&t&&ut(n,i,t),t};let U=class extends _{constructor(){super(...arguments);m(this,"pageTabs",ae)}};U=bt([g({components:{Accessibility:ce,Examples:ht,Properties:le}})],U);const _t={class:"chi-grid__container -pt--3"},gt={class:"chi-tabs-panel -active",id:"examples"},ft={class:"chi-tabs-panel",id:"properties"},xt={class:"chi-tabs-panel",id:"accessibility"};function wt(e,n,i,r,t,l){const p=de,d=b("Examples"),v=b("Properties"),u=b("Accessibility");return h(),T("div",null,[c(p,{title:"Popover",description:"Popovers provide a contextual space attached to an element in an upper z-index layer where you can include any kind of HTML code related to the trigger.",tabs:e.pageTabs},null,8,["tabs"]),o("div",_t,[o("div",gt,[c(d)]),o("div",ft,[c(v)]),o("div",xt,[c(u)])])])}const en=f(U,[["render",wt]]);export{en as default};
