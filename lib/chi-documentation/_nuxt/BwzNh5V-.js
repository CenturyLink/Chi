var Z=Object.defineProperty;var k=(o,e,i)=>e in o?Z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var m=(o,e,i)=>k(o,typeof e!="symbol"?e+"":e,i);import{V as _,N as g}from"./NAah3XrW.js";import{o as h,h as x,w as c,a as t,d as l,b as a,c as T,F as y,i as O,t as E,P as ee,n as oe,j as te,m as b,l as pe}from"./CEIPSiTs.js";import{_ as w}from"./onyWiYp2.js";import{_ as P}from"./CAQzZ0uH.js";import{_ as f}from"./DlAUqK2U.js";import{_ as C}from"./CS2TcPBX.js";import ne from"./DfvWEdsY.js";import ie from"./BjFcIbBa.js";import re from"./Bkoq229k.js";import{_ as le}from"./CnZFJwg2.js";import se from"./CuSt-dCk.js";import ae from"./B4KxVocU.js";import{s as ce}from"./DtNz156Q.js";import{_ as de}from"./DFOICsuk.js";import"./BJfyOiY6.js";import"./B2BTeTyp.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var ve=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ue=(o,e,i,r)=>{for(var p=r>1?void 0:r?he(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&ve(e,i,p),p};let B=class extends _{};B=ue([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-popover variant="text" active>
  Popover content
</chi-popover>`,htmlblueprint:`<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`}})})],B);function me(o,e,i,r,p,s){const n=w,d=P;return h(),x(d,{title:"Base",id:"base",tabs:o.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[t("p",{class:"-text"},"Popover components are absolutely positioned. For this example we have forced a relative position.",-1)])),example:c(()=>e[1]||(e[1]=[t("div",{class:"-position--relative",style:{height:"53px"}},[t("chi-popover",{active:"",variant:"text","prevent-auto-hide":""},"Popover content")],-1)])),"code-webcomponent":c(()=>[e[2]||(e[2]=t("div",{class:"chi-tab__description"},[l("Remove the "),t("code",null,"active"),l(" attribute to hide the popover. Use the "),t("code",null,'variant="text"'),l(" attribute to display text content in a "),t("code",null,"<p>"),l(".")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[e[3]||(e[3]=t("div",{class:"chi-tab__description"},[l("Remove the "),t("code",null,"-active"),l(" class to hide the popover.")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const be=f(B,[["render",me]]);var _e=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,fe=(o,e,i,r)=>{for(var p=r>1?void 0:r?ge(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&_e(e,i,p),p};let L=class extends _{};L=fe([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-popover title="Popover title" variant="text" active>
  Popover content
</chi-popover>`,htmlblueprint:`<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover Title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`}})})],L);function xe(o,e,i,r,p,s){const n=w,d=P;return h(),x(d,{title:"Titled",id:"titled",tabs:o.exampleTabs},{example:c(()=>e[0]||(e[0]=[t("div",{class:"-position--relative",style:{height:"87px"}},[t("chi-popover",{active:"",title:"Popover title",variant:"text","prevent-auto-hide":""},"Popover content")],-1)])),"code-webcomponent":c(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description"},[l("Use the "),t("code",null,"title"),l(" attribute to display a title.")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[e[2]||(e[2]=t("div",{class:"chi-tab__description"},[l("Add "),t("code",null,"chi-popover__header"),l(" and "),t("code",null,"chi-popover__title"),l(" to display a title.")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const we=f(L,[["render",xe]]);var Pe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Te=(o,e,i,r)=>{for(var p=r>1?void 0:r?$e(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&Pe(e,i,p),p};let S=class extends _{};S=Te([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Top -->
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
</section>`}})})],S);const Ce={class:"chi-grid -no-gutter"},ye={class:"chi-col -w--6 -w-md--4 -w-xl--3"},Oe={class:"-text--h5 -mb--3"},Ee=["position"];function Be(o,e,i,r,p,s){const n=w,d=P;return h(),x(d,{title:"Arrow",id:"arrow",tabs:o.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[t("p",{class:"-text"},"Popovers support arrows to indicate the element they originate from. Arrows can be located anywhere around the Popover.",-1)])),example:c(()=>[t("div",Ce,[(h(),T(y,null,O(["Top","Right","Bottom","Left"],v=>t("div",ye,[t("h4",Oe,E(v),1),t("div",{class:"-position--relative",style:ee(v==="Bottom"?"height: 100px; top: -12px":"height: 100px;")},[t("chi-popover",{position:v.toLowerCase(),variant:"text",active:"",arrow:"","prevent-auto-hide":""},"Popover content",8,Ee)],4)])),64))])]),"code-webcomponent":c(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description"},[l("Add the attribute "),t("code",null,"arrow"),l(" and use the attribute "),t("code",null,"position"),l(" with the values: "),t("code",null,"top"),l(", "),t("code",null,"right"),l(", "),t("code",null,"bottom"),l(" and "),t("code",null,"left"),l(" to position the arrow in the proper place.")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[e[2]||(e[2]=t("div",{class:"chi-tab__description"},[l("Use the classes "),t("code",null,"chi-popover--top"),l(", "),t("code",null,"chi-popover--right"),l(", "),t("code",null,"chi-popover--bottom"),l(" and "),t("code",null,"chi-popover--left"),l(" to position the arrow in the proper place. If you use a position engine such as Popper.js (used by Chi), the attribute "),t("code",null,"x-placement"),l(" should be used instead of these classes. It accepts all the values Popper.js does. Popper.js sets this attribute automatically, so there is no need to include it on the code.")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Le=f(S,[["render",Be]]);var Se=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Ae=(o,e,i,r)=>{for(var p=r>1?void 0:r?De(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&Se(e,i,p),p};let D=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-3-button">Click me!</chi-button>

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
<script>chi.popover(document.getElementById('popover-1'));<\/script>`})}togglePopover(){this.$refs.popover.toggle()}};D=Ae([g({})],D);const He={ref:"popover",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#example-3-button"};function Ie(o,e,i,r,p,s){const n=w,d=C,v=P;return h(),x(v,{title:"Reference element",id:"reference-element",tabs:o.exampleTabs},{"example-description":c(()=>e[1]||(e[1]=[t("p",{class:"-text"},"A reference element can be set up for advanced positioning. The popover will be positioned relative to this element.",-1)])),example:c(()=>[t("chi-button",{id:"example-3-button",onClick:e[0]||(e[0]=(...u)=>o.togglePopover&&o.togglePopover(...u))},"Click me!"),t("chi-popover",He,"Popover content",512)]),"code-webcomponent":c(()=>[e[2]||(e[2]=t("div",{class:"chi-tab__description"},[l("Use the "),t("code",null,"reference"),l(" attribute with a CSS selector to properly reference an element.")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[a(d),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Me=f(D,[["render",Ie]]);var je=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ne=(o,e,i,r)=>{for(var p=r>1?void 0:r?Re(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&je(e,i,p),p};let A=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-draggable-popover" title="Draggable Popover" reference="#example-draggable-button" drag portal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,htmlblueprint:""})}togglePopover(){this.$refs.popover.toggle()}};A=Ne([g({})],A);const We={ref:"popover",title:"Draggable Popover",reference:"#example-draggable-button",drag:"",portal:"",closable:""};function Ue(o,e,i,r,p,s){const n=w,d=P;return h(),x(d,{title:"Draggable popover",id:"draggable-lumen-centurylink",tabs:o.exampleTabs},{example:c(()=>[t("chi-button",{id:"example-draggable-button",onClick:e[0]||(e[0]=(...v)=>o.togglePopover&&o.togglePopover(...v))},"Click me!"),t("chi-popover",We,"Popover content",512)]),"code-webcomponent":c(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description"},[l("Use the "),t("code",null,"reference"),l(" attribute with a CSS selector to properly reference an element.")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=f(A,[["render",Ue]]);var Fe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ve=(o,e,i,r)=>{for(var p=r>1?void 0:r?Je(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&Fe(e,i,p),p};let H=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="button-open-on-hover">Hover me!</chi-button>
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
<\/script>`})}show(){this.$refs.popover.show()}hide(){this.$refs.popover.hide()}toggle(){this.$refs.popover.toggle()}};H=Ve([g({})],H);const ze={class:"-position--relative"},Ye={ref:"popover",variant:"text",arrow:"",reference:"#button-open-on-hover"};function Ge(o,e,i,r,p,s){const n=w,d=P;return h(),x(d,{title:"Open on hover",id:"open-on-hover",tabs:o.exampleTabs},{example:c(()=>[t("div",ze,[t("chi-button",{id:"button-open-on-hover","on:chiMouseEnter":e[0]||(e[0]=(...v)=>o.show&&o.show(...v)),"on:chiMouseLeave":e[1]||(e[1]=(...v)=>o.hide&&o.hide(...v)),onClick:e[2]||(e[2]=(...v)=>o.toggle&&o.toggle(...v))},"Hover me!",32),t("chi-popover",Ye,"Popover content",512)])]),"code-webcomponent":c(()=>[e[3]||(e[3]=t("div",{class:"chi-tab__description"},[l("Use the available methods to show / hide popover when "),t("code",null,"chiMouseEnter"),l(", "),t("code",null,"chiMouseLeave"),l(" or any other event is triggered")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[e[4]||(e[4]=t("div",{class:"chi-tab__description"},[l("Use the available methods to show / hide popover when "),t("code",null,"mouseEnter"),l(", "),t("code",null,"mouseLeave"),l(" or any other event is triggered")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ke=f(H,[["render",Ge]]);var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ze=(o,e,i,r)=>{for(var p=r>1?void 0:r?Xe(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&Qe(e,i,p),p};let I=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="button-example-popover-closable-1">With title</chi-button>
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
<\/script>`})}togglePopover(){this.$refs.popover.toggle()}};I=Ze([g({})],I);const ke={ref:"popover",title:"Title",variant:"text",arrow:"",reference:"#button-example-popover-closable-1",closable:""};function eo(o,e,i,r,p,s){const n=w,d=C,v=P;return h(),x(v,{title:"Close button",id:"close-button",tabs:o.exampleTabs},{example:c(()=>[t("chi-button",{id:"button-example-popover-closable-1",onClick:e[0]||(e[0]=(...u)=>o.togglePopover&&o.togglePopover(...u))},"Click Me!"),t("chi-popover",ke,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",512)]),"code-webcomponent":c(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description"},[l("Use the attribute "),t("code",null,"closable"),l(" to render the Popover with a close button.")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[a(d),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const oo=f(I,[["render",eo]]);var to=Object.defineProperty,po=Object.getOwnPropertyDescriptor,no=(o,e,i,r)=>{for(var p=r>1?void 0:r?po(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&to(e,i,p),p};let M=class extends _{constructor(){super(...arguments);m(this,"positions",{top:[{label:"Top start",position:"top-start"},{label:"Top",position:"top"},{label:"Top end",position:"top-end"}],left:[{label:"Left start",position:"left-start"},{label:"Left",position:"left"},{label:"Left end",position:"left-end"}],right:[{label:"Right start",position:"right-start"},{label:"Right",position:"right"},{label:"Right end",position:"right-end"}],bottom:[{label:"Bottom start",position:"bottom-start"},{label:"Bottom",position:"bottom"},{label:"Bottom end",position:"bottom-end"}]});m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<!-- Top -->
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
<script>chi.popover(document.querySelectorAll('[data-popover-content]'));<\/script>`})}togglePopover(i){this.$refs[i][0].toggle()}getClasses(i){return["top","bottom"].includes(i)?"-w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap":i==="left"?"-w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap":i===""?"-d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center":"-w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap"}};M=no([g({})],M);const io={class:"chi-grid -no-gutter -px-xl--3"},ro={key:0,class:"-w--75 -text -text--muted -text--center -lh--2"},lo={class:"-p--1 -py-sm--3"},so=["onClick","id"],ao=["position","reference"];function co(o,e,i,r,p,s){const n=w,d=C,v=P;return h(),x(v,{title:"Positioning",id:"positioning",tabs:o.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[t("p",{class:"-text"},[l("Further positions can be used in this mode: "),t("code",null,"top"),l(", "),t("code",null,"right"),l(", "),t("code",null,"bottom"),l(", "),t("code",null,"left"),l(", "),t("code",null,"top-start"),l(", "),t("code",null,"top-end"),l(", "),t("code",null,"right-start"),l(", "),t("code",null,"right-end"),l(", "),t("code",null,"bottom-start"),l(", "),t("code",null,"bottom-end"),l(", "),t("code",null,"left-start"),l(", "),t("code",null,"left-end"),l(".")],-1)])),example:c(()=>[t("div",io,[(h(),T(y,null,O(["top","left","","right","bottom"],u=>t("div",{class:oe(["chi-col",o.getClasses(u)])},[u===""?(h(),T("div",ro,"Click buttons to see popover positions")):(h(!0),T(y,{key:1},O(o.positions[u],$=>(h(),T("div",lo,[t("chi-button",{onClick:q=>o.togglePopover(`popover-${$.position}`),id:`button-${$.position}`},E($.label),9,so),t("chi-popover",{ref_for:!0,ref:`popover-${$.position}`,position:$.position,title:"Popover title",variant:"text",arrow:"",reference:`#button-${$.position}`},"This popover is "+E($.position)+" positioned.",9,ao)]))),256))],2)),64))])]),"code-webcomponent":c(()=>[a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[a(d),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const vo=f(M,[["render",co]]);var ho=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,mo=(o,e,i,r)=>{for(var p=r>1?void 0:r?uo(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&ho(e,i,p),p};let j=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-5-button-show">Show</chi-button>
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
<\/script>`})}show(){this.$refs.popover.show()}hide(){this.$refs.popover.hide()}toggle(){this.$refs.popover.toggle()}};j=mo([g({})],j);const bo={ref:"popover",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#example-5-button-reference"};function _o(o,e,i,r,p,s){const n=w,d=C,v=P;return h(),x(v,{title:"Interaction",id:"interaction",tabs:o.exampleTabs},{"example-description":c(()=>e[3]||(e[3]=[t("p",{class:"-text"},[l("Read this handy introduction to"),t("a",{href:"/getting-started"},"HTML attributes and DOM properties"),l(".")],-1)])),example:c(()=>[t("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:e[0]||(e[0]=(...u)=>o.show&&o.show(...u))},"Show"),t("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:e[1]||(e[1]=(...u)=>o.hide&&o.hide(...u))},"Hide"),t("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:e[2]||(e[2]=(...u)=>o.toggle&&o.toggle(...u))},"Toggle"),e[4]||(e[4]=t("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"example-5-button-reference"},"Reference",-1)),t("chi-popover",bo,"Popover content",512)]),"code-webcomponent":c(()=>[e[5]||(e[5]=t("div",{class:"chi-tab__description"},[l("Modify the "),t("code",null,"active"),l(" attribute or property to make the popover show or hide. The "),t("code",null,"chi-popover"),l(" element also has three public methods to interact with it: "),t("code",null,"show()"),l(", "),t("code",null,"hide()"),l(", "),t("code",null,"toggle()"),l(".")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[a(d),e[6]||(e[6]=t("div",{class:"chi-tab__description"},[l("Use methods "),t("code",null,".show()"),l(", "),t("code",null,".hide()"),l(", and "),t("code",null,".toggle()"),l(" to control popover visibility.")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const go=f(j,[["render",_o]]);var fo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,wo=(o,e,i,r)=>{for(var p=r>1?void 0:r?xo(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&fo(e,i,p),p};let R=class extends _{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<!-- Auto hide -->
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
<\/script>`})}togglePopover(i){this.$refs[i].toggle()}};R=wo([g({})],R);const Po={ref:"popover-1",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#auto-hide-button-1"},$o={ref:"popover-2",position:"top",title:"Popover title",variant:"text",arrow:"","prevent-auto-hide":"",reference:"#auto-hide-button-2"};function To(o,e,i,r,p,s){const n=w,d=C,v=P;return h(),x(v,{titleSize:"h4",title:"Auto hide",id:"auto-hide",tabs:o.exampleTabs},{"example-description":c(()=>e[2]||(e[2]=[t("p",{class:"-text"},"Popovers automatically hide when clicking outside of it or when pressing the ESC key.",-1)])),example:c(()=>[t("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"auto-hide-button-1",onClick:e[0]||(e[0]=u=>o.togglePopover("popover-1"))},"Auto hide"),t("chi-popover",Po,"Click outside. I will disappear!",512),t("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"auto-hide-button-2",onClick:e[1]||(e[1]=u=>o.togglePopover("popover-2"))},"No auto hide"),t("chi-popover",$o,"Click outside. I will stay!",512)]),"code-webcomponent":c(()=>[e[3]||(e[3]=t("div",{class:"chi-tab__description"},[l("You can prevent automatic hiding behavior with the "),t("code",null,"prevent-auto-hide"),l(" attribute.")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[a(d),e[4]||(e[4]=t("div",{class:"chi-tab__description"},[l("You can prevent automatic hiding behavior by setting "),t("code",null,"preventAutoHide"),l(" to "),t("code",null,"true")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Co=f(R,[["render",To]]);var yo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,Eo=(o,e,i,r)=>{for(var p=r>1?void 0:r?Oo(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&yo(e,i,p),p};let N=class extends _{};N=Eo([g({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-popover position="top" title="Are you sure?" variant="text" active arrow>
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
</section>`}})})],N);function Bo(o,e,i,r,p,s){const n=w,d=P;return h(),x(d,{titleSize:"h4",title:"Destructive action confirmation",id:"destructive-action-confirmation",tabs:o.exampleTabs},{example:c(()=>e[0]||(e[0]=[t("div",{class:"-position--relative",style:{height:"146px"}},[t("chi-popover",{position:"top",title:"Are you sure?",variant:"text",active:"",arrow:"","prevent-auto-hide":""},[l("Are you sure you want to delete this?"),t("div",{slot:"chi-popover__footer"},[t("chi-button",{color:"danger"},"Delete")]),t("div",{slot:"chi-popover__footer"},[t("chi-button",null,"Cancel")])])],-1)])),"code-webcomponent":c(()=>[e[1]||(e[1]=t("div",{class:"chi-tab__description"},[l("Add buttons to Popovers by setting slot attribute to "),t("code",null,'slot="chi-popover__footer"'),l(".")],-1)),a(n,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[e[2]||(e[2]=t("div",{class:"chi-tab__description"},[l("Add buttons to Popovers by placing them in "),t("code",null,"chi-popover__footer"),l(".")],-1)),a(n,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Lo=f(N,[["render",Bo]]);var So=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Ao=(o,e,i,r)=>{for(var p=r>1?void 0:r?Do(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&So(e,i,p),p};let W=class extends _{constructor(){super(...arguments);m(this,"selectedTheme",te())}};W=Ao([g({components:{BaseExample:be,Titled:we,Arrow:Le,ReferenceElement:Me,InlineModalPortal:ne,DraggableLumenCenturyLink:qe,DraggablePortal:ie,OpenOnHover:Ke,CloseButton:oo,Positioning:vo,Interaction:go,AutoHide:Co,DestructiveActionConfirmation:Lo,TableFilteringPortal:re}})],W);const Ho={key:0},Io={key:1};function Mo(o,e,i,r,p,s){const n=b("BaseExample"),d=b("Titled"),v=b("Arrow"),u=b("ReferenceElement"),$=b("InlineModalPortal"),q=b("DraggablePortal"),F=b("DraggableLumenCenturyLink"),J=b("OpenOnHover"),V=b("CloseButton"),z=b("Positioning"),Y=b("Interaction"),G=b("AutoHide"),K=b("DestructiveActionConfirmation"),Q=b("TableFilteringPortal"),X=le;return h(),T(y,null,[e[2]||(e[2]=t("h2",null,"Examples",-1)),a(X,{fallback:"Loading examples..."},{default:c(()=>[a(n),a(d),a(v),a(u),["portal"].includes(o.selectedTheme)?(h(),T("div",Ho,[a($),a(q)])):(h(),T("div",Io,[a(F)])),a(J),a(V),a(z),a(Y),a(G),e[0]||(e[0]=t("h3",null,"Popover with custom content",-1)),e[1]||(e[1]=t("p",{class:"--text"},"Popovers can be used to display any kind of custom content (even other components).",-1)),a(K),["portal"].includes(o.selectedTheme)?(h(),x(Q,{key:2})):pe("",!0)]),_:1})],64)}const jo=f(W,[["render",Mo]]);var Ro=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Wo=(o,e,i,r)=>{for(var p=r>1?void 0:r?No(e,i):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(p=(r?n(e,i,p):n(p))||p);return r&&p&&Ro(e,i,p),p};let U=class extends _{constructor(){super(...arguments);m(this,"pageTabs",ce)}};U=Wo([g({components:{Accessibility:ae,Examples:jo,Properties:se}})],U);const Uo={class:"chi-grid__container -pt--3"},qo={class:"chi-tabs-panel -active",id:"examples"},Fo={class:"chi-tabs-panel",id:"properties"},Jo={class:"chi-tabs-panel",id:"accessibility"};function Vo(o,e,i,r,p,s){const n=de,d=b("Examples"),v=b("Properties"),u=b("Accessibility");return h(),T("div",null,[a(n,{title:"Popover",description:"Popovers provide a contextual space attached to an element in an upper z-index layer where you can include any kind of HTML code related to the trigger.",tabs:o.pageTabs},null,8,["tabs"]),t("div",Uo,[t("div",qo,[a(d)]),t("div",Fo,[a(v)]),t("div",Jo,[a(u)])])])}const Tt=f(U,[["render",Vo]]);export{Tt as default};
