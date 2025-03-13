import{_ as b}from"./tNdMX7O9.js";import{_ as g}from"./BzQNDISb.js";import{_ as x}from"./C0Zb0D1T.js";import{e as u,f as _,o as d,w as t,a as o,b as n,d as e,c as P,i as k,t as B,P as I,F as A,g as y,r as R,n as S,h as L,l as D,k as H,j as $}from"./BpVBcII5.js";import{_ as E}from"./4ajXz9EY.js";import{_ as M}from"./DRosC_DY.js";const F={class:"-position--relative",style:{height:"57px"}},N=u({__name:"_base",setup(m){const r={webcomponent:`<chi-popover variant="text" active>
  Popover content
</chi-popover>`,htmlblueprint:`<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`};return(s,i)=>{const a=b,l=g,c=x;return d(),_(c,{title:"Base",id:"base"},{"example-description":t(()=>i[0]||(i[0]=[o("p",{class:"-text"},"Popover components are absolutely positioned. For this example we have forced a relative position.",-1)])),example:t(()=>[o("div",F,[n(a,null,{default:t(()=>i[1]||(i[1]=[o("chi-popover",{active:"",variant:"text","prevent-auto-hide":""},"Popover content",-1)])),_:1})])]),"code-webcomponent":t(()=>[i[2]||(i[2]=o("div",{class:"chi-tab__description"},[e("Remove the "),o("code",null,"active"),e(" attribute to hide the popover. Use the "),o("code",null,'variant="text"'),e(" attribute to display text content in a "),o("code",null,"<p>"),e(".")],-1)),n(l,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[i[3]||(i[3]=o("div",{class:"chi-tab__description"},[e("Remove the "),o("code",null,"-active"),e(" class to hide the popover.")],-1)),n(l,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),q={class:"-position--relative",style:{height:"87px"}},U=u({__name:"_titled",setup(m){const r={webcomponent:`<chi-popover title="Popover title" variant="text" active>
  Popover content
</chi-popover>`,htmlblueprint:`<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover Title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`};return(s,i)=>{const a=b,l=g,c=x;return d(),_(c,{title:"Titled",id:"titled"},{example:t(()=>[o("div",q,[n(a,null,{default:t(()=>i[0]||(i[0]=[o("chi-popover",{active:"",title:"Popover title",variant:"text","prevent-auto-hide":""},"Popover content",-1)])),_:1})])]),"code-webcomponent":t(()=>[i[1]||(i[1]=o("div",{class:"chi-tab__description"},[e("Use the "),o("code",null,"title"),e(" attribute to display a title.")],-1)),n(l,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[i[2]||(i[2]=o("div",{class:"chi-tab__description"},[e("Add "),o("code",null,"chi-popover__header"),e(" and "),o("code",null,"chi-popover__title"),e(" to display a title.")],-1)),n(l,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),J={class:"chi-grid -no-gutter"},j={class:"chi-col -w--6 -w-md--4 -w-xl--3"},z={class:"-text--h5 -mb--3"},V=["position"],W=u({__name:"_arrow",setup(m){const r={webcomponent:`<!-- Top -->
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
</section>`};return(s,i)=>{const a=b,l=g,c=x;return d(),_(c,{title:"Arrow",id:"arrow"},{"example-description":t(()=>i[0]||(i[0]=[o("p",{class:"-text"},"Popovers support arrows to indicate the element they originate from. Arrows can be located anywhere around the Popover.",-1)])),example:t(()=>[o("div",J,[(d(),P(A,null,k(["Top","Right","Bottom","Left"],p=>o("div",j,[o("h4",z,B(p),1),o("div",{class:"-position--relative",style:I(p==="Bottom"?"height: 100px; top: -12px":"height: 100px;")},[n(a,null,{default:t(()=>[o("chi-popover",{position:p.toLowerCase(),variant:"text",active:"",arrow:"","prevent-auto-hide":""},"Popover content",8,V)]),_:2},1024)],4)])),64))])]),"code-webcomponent":t(()=>[i[1]||(i[1]=o("div",{class:"chi-tab__description"},[e("Add the attribute "),o("code",null,"arrow"),e(" and use the attribute "),o("code",null,"position"),e(" with the values: "),o("code",null,"top"),e(", "),o("code",null,"right"),e(", "),o("code",null,"bottom"),e(" and "),o("code",null,"left"),e(" to position the arrow in the proper place.")],-1)),n(l,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[i[2]||(i[2]=o("div",{class:"chi-tab__description"},[e("Use the classes "),o("code",null,"chi-popover--top"),e(", "),o("code",null,"chi-popover--right"),e(", "),o("code",null,"chi-popover--bottom"),e(" and "),o("code",null,"chi-popover--left"),e(" to position the arrow in the proper place. If you use a position engine such as Popper.js (used by Chi), the attribute "),o("code",null,"x-placement"),e(" should be used instead of these classes. It accepts all the values Popper.js does. Popper.js sets this attribute automatically, so there is no need to include it on the code.")],-1)),n(l,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),Y={ref:"popover",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#example-3-button"},G=u({__name:"_reference-element",setup(m){const r={webcomponent:`<chi-button id="example-3-button">Click me!</chi-button>

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
<script>chi.popover(document.getElementById('popover-1'));<\/script>`},s=y("popover"),i=()=>{var a;return(a=s.value)==null?void 0:a.toggle()};return(a,l)=>{const c=b,p=g,v=E,h=x;return d(),_(h,{title:"Reference element",id:"reference-element"},{"example-description":t(()=>l[0]||(l[0]=[o("p",{class:"-text"},"A reference element can be set up for advanced positioning. The popover will be positioned relative to this element.",-1)])),example:t(()=>[o("chi-button",{id:"example-3-button",onClick:i},"Click me!"),n(c,null,{default:t(()=>[o("chi-popover",Y,"Popover content",512)]),_:1})]),"code-webcomponent":t(()=>[l[1]||(l[1]=o("div",{class:"chi-tab__description"},[e("Use the "),o("code",null,"reference"),e(" attribute with a CSS selector to properly reference an element.")],-1)),n(p,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(v),n(p,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),K={class:"-position--relative",style:{height:"106px"}},Q=u({__name:"_inline-modal",setup(m){const r={webcomponent:'<chi-popover title="Popover title" modal closable active>Popover content</chi-popover>',htmlblueprint:`<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<section class="chi-popover -modal -active" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`};return(s,i)=>{const a=b,l=g,c=x;return d(),_(c,{title:"Inline Modal",id:"inline-modal-portal"},{"example-description":t(()=>i[0]||(i[0]=[o("p",{class:"-text"},"Use Inline Modals to imitate the style of a Modal and the behavior of a Popover. This is useful for advanced filtering in Data Tables.",-1)])),example:t(()=>[o("div",K,[n(a,null,{default:t(()=>i[1]||(i[1]=[o("chi-popover",{modal:"",closable:"",title:"Popover title",active:"","prevent-auto-hide":""},"Popover content",-1)])),_:1})])]),"code-webcomponent":t(()=>[i[2]||(i[2]=o("div",{class:"chi-tab__description"},[e("Use the "),o("code",null,"modal"),e(" attribute to style a Popover as an inline Modal.")],-1)),n(l,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(l,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),X={ref:"popover",title:"Draggable Popover",reference:"#example-draggable-button",drag:"",closable:""},Z=u({__name:"_draggable_lumen_centurylink",setup(m){const r=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:`<chi-button id="example-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-draggable-popover" title="Draggable Popover" reference="#example-draggable-button" drag closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,htmlblueprint:""},i=y("popover"),a=()=>{var l;return(l=i.value)==null?void 0:l.toggle()};return(l,c)=>{const p=b,v=g,h=x;return d(),_(h,{title:"Draggable popover",id:"draggable-lumen-centurylink",tabs:r},{example:t(()=>[o("chi-button",{id:"example-draggable-button",onClick:a},"Click me!"),n(p,null,{default:t(()=>[o("chi-popover",X,"Popover content",512)]),_:1})]),"code-webcomponent":t(()=>[c[0]||(c[0]=o("div",{class:"chi-tab__description"},[e("Use the "),o("code",null,"reference"),e(" attribute with a CSS selector to properly reference an element.")],-1)),n(v,{lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(v,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),oo={ref:"popover",title:"Draggable Popover",reference:"#example-modal-draggable-button",drag:"",modal:"",closable:""},eo=u({__name:"_draggable",setup(m){const r=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:`<chi-button id="example-modal-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-modal-draggable-popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-modal-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-modal-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,htmlblueprint:""},i=y("popover"),a=()=>{var l;return(l=i.value)==null?void 0:l.toggle()};return(l,c)=>{const p=b,v=g,h=x;return d(),_(h,{title:"Draggable popover",id:"draggable-portal",tabs:r},{example:t(()=>[o("chi-button",{id:"example-modal-draggable-button",onClick:a},"Click me!"),n(p,null,{default:t(()=>[o("chi-popover",oo,"Popover content",512)]),_:1})]),"code-webcomponent":t(()=>[c[0]||(c[0]=o("div",{class:"chi-tab__description"},[e("Use the "),o("code",null,"reference"),e(" attribute with a CSS selector to properly reference an element.")],-1)),n(v,{lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(v,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),to={class:"-position--relative"},io={ref:"popover",variant:"text",arrow:"",reference:"#button-open-on-hover"},no=u({__name:"_open-on-hover",setup(m){const r=y("popover"),s={webcomponent:`<chi-button id="button-open-on-hover">Hover me!</chi-button>
<chi-popover id="popover-open-on-hover" variant="text" arrow reference="#button-open-on-hover">Popover content</chi-popover>
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
<\/script>`},i=()=>{var c;return(c=r.value)==null?void 0:c.show()},a=()=>{var c;return(c=r.value)==null?void 0:c.hide()},l=()=>{var c;return(c=r.value)==null?void 0:c.toggle()};return(c,p)=>{const v=b,h=g,f=E,w=x;return d(),_(w,{title:"Open on hover",id:"open-on-hover"},{example:t(()=>[o("div",to,[o("chi-button",{id:"button-open-on-hover","on:chiMouseEnter":i,"on:chiMouseLeave":a,onClick:l},"Hover me!",32),n(v,null,{default:t(()=>[o("chi-popover",io,"Popover content",512)]),_:1})])]),"code-webcomponent":t(()=>[p[0]||(p[0]=o("div",{class:"chi-tab__description"},[e("Use the available methods to show / hide popover when "),o("code",null,"chiMouseEnter"),e(", "),o("code",null,"chiMouseLeave"),e(" or any other event is triggered")],-1)),n(h,{lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(f,null,{default:t(()=>p[1]||(p[1]=[o("br",null,null,-1),o("span",{class:"-text--grey"},[e("Use the available methods to show / hide popover when "),o("code",null,"mouseEnter"),e(", "),o("code",null,"mouseLeave"),e(" or any other event is triggered.")],-1)])),_:1}),n(h,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),co={ref:"popover",title:"Title",variant:"text",arrow:"",reference:"#button-example-popover-closable-1",closable:""},po=u({__name:"_close-button",setup(m){const r={webcomponent:`<chi-button id="button-example-popover-closable-1">With title</chi-button>
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
<\/script>`},s=y("popover"),i=()=>{var a;return(a=s.value)==null?void 0:a.toggle()};return(a,l)=>{const c=b,p=g,v=E,h=x;return d(),_(h,{title:"Close button",id:"close-button"},{example:t(()=>[o("chi-button",{id:"button-example-popover-closable-1",onClick:i},"Click Me!"),n(c,null,{default:t(()=>[o("chi-popover",co,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",512)]),_:1})]),"code-webcomponent":t(()=>[l[0]||(l[0]=o("div",{class:"chi-tab__description"},[e("Use the attribute "),o("code",null,"closable"),e(" to render the Popover with a close button.")],-1)),n(p,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(v),n(p,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),ro={class:"chi-grid -no-gutter -px-xl--10"},lo={key:0,class:"-w--75 -text -text--muted -text--center -lh--2"},ao=["onClick","id"],so=["position","reference"],vo=u({__name:"_positioning",setup(m){const r=R({}),s=c=>{var p,v;return(v=(p=r.value)==null?void 0:p[c])==null?void 0:v.toggle()},i={top:[{label:"Top start",position:"top-start"},{label:"Top",position:"top"},{label:"Top end",position:"top-end"}],left:[{label:"Left start",position:"left-start"},{label:"Left",position:"left"},{label:"Left end",position:"left-end"}],right:[{label:"Right start",position:"right-start"},{label:"Right",position:"right"},{label:"Right end",position:"right-end"}],bottom:[{label:"Bottom start",position:"bottom-start"},{label:"Bottom",position:"bottom"},{label:"Bottom end",position:"bottom-end"}]},a={webcomponent:`<!-- Top -->
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
<button
  class="chi-button"
  data-position='top'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top positioned.</p></div>'
>Top popover</button>

<!-- Top Start -->
<button
  data-position='top-start'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top start positioned.</p></div>'
  class="chi-button"
>Top start popover</button>

<!-- Top End -->
<button
  data-position='top-end'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top end positioned.</p></div>'
  class="chi-button"
>Top end popover</button>

<!-- Right -->
<button
  class="chi-button"
  data-position='right'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right positioned.</p></div>'
>Right popover</button>

<!-- Right Start -->
<button
class="chi-button"
  data-position='right-start'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right start positioned.</p></div>'
>Right start popover</button>

<!-- Right End -->
<button
  class="chi-button"
  data-position='right-end'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right end positioned.</p></div>'
>Right end popover</button>

<!-- Bottom -->
<button
  class="chi-button"
  data-position='bottom'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom positioned.</p></div>'
>Bottom popover</button>

<!-- Bottom Start -->
<button
  class="chi-button"
  data-position='bottom-start'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom start positioned.</p></div>'
>Bottom start popover</button>

<!-- Bottom End -->
<button
  class="chi-button"
  data-position='bottom-end'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom end positioned.</p></div>'
>Bottom end popover</button>

<!-- Left -->
<button
  class="chi-button"
  data-position='left'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left positioned.</p></div>'
>Left popover</button>

<!-- Left Start -->
<button
  class="chi-button"
  data-position='left-start'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left start positioned.</p></div>'
>Left start popover</button>

<!-- Left End -->
<button
  class="chi-button"
  data-position='left-end'
  data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left end positioned.</p></div>'
>Left end popover</button>

<!-- JavaScript -->
<script>chi.popover(document.querySelectorAll('[data-popover-content]'));<\/script>`},l=c=>["top","bottom"].includes(c)?"-w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap":c==="left"?"-w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap":c===""?"-d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center":"-w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap";return(c,p)=>{const v=b,h=g,f=E,w=x;return d(),_(w,{title:"Positioning",id:"positioning"},{"example-description":t(()=>p[0]||(p[0]=[o("p",{class:"-text"},[e("Further positions can be used in this mode: "),o("code",null,"top"),e(", "),o("code",null,"right"),e(", "),o("code",null,"bottom"),e(", "),o("code",null,"left"),e(", "),o("code",null,"top-start"),e(", "),o("code",null,"top-end"),e(", "),o("code",null,"right-start"),e(", "),o("code",null,"right-end"),e(", "),o("code",null,"bottom-start"),e(", "),o("code",null,"bottom-end"),e(", "),o("code",null,"left-start"),e(", "),o("code",null,"left-end"),e(".")],-1)])),example:t(()=>[o("div",ro,[(d(),P(A,null,k(["top","left","","right","bottom"],T=>o("div",{class:S(["chi-col",l(T)])},[T===""?(d(),P("div",lo,"Click buttons to see popover positions")):(d(!0),P(A,{key:1},k(i[T],C=>(d(),P("div",{class:S(["-p--1",{"-py-sm--3":!["top","bottom"].includes(T)}])},[o("chi-button",{onClick:O=>s(`popover-${C.position}`),id:`button-${C.position}`},B(C.label),9,ao),n(v,null,{default:t(()=>[o("chi-popover",{ref_for:!0,ref:O=>r.value[`popover-${C.position}`]=O,position:C.position,title:"Popover title",variant:"text",arrow:"",reference:`#button-${C.position}`},"This popover is "+B(C.position)+" positioned.",9,so)]),_:2},1024)],2))),256))],2)),64))])]),"code-webcomponent":t(()=>[n(h,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(f),n(h,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),ho={class:"-text"},uo={ref:"popover",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#example-5-button-reference"},_o=u({__name:"_interaction",setup(m){const r=y("popover"),s=()=>{var c;return(c=r.value)==null?void 0:c.show()},i=()=>{var c;return(c=r.value)==null?void 0:c.hide()},a=()=>{var c;return(c=r.value)==null?void 0:c.toggle()},l={webcomponent:`<chi-button id="example-5-button-show">Show</chi-button>
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
<\/script>`};return(c,p)=>{const v=M,h=b,f=g,w=E,T=x;return d(),_(T,{title:"Interaction",id:"interaction","title-size":"h2"},{"example-description":t(()=>[o("p",ho,[p[1]||(p[1]=e("Read this handy introduction to ")),n(v,{to:"/getting-started"},{default:t(()=>p[0]||(p[0]=[e("HTML attributes and DOM properties")])),_:1}),p[2]||(p[2]=e("."))])]),example:t(()=>[n(h,null,{default:t(()=>[o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:s},"Show"),o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:i},"Hide"),o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",onClick:a},"Toggle"),p[3]||(p[3]=o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"example-5-button-reference"},"Reference",-1)),o("chi-popover",uo,"Popover content",512)]),_:1})]),"code-webcomponent":t(()=>[p[4]||(p[4]=o("div",{class:"chi-tab__description"},[e("Modify the "),o("code",null,"active"),e(" attribute or property to make the popover show or hide. The "),o("code",null,"chi-popover"),e(" element also has three public methods to interact with it: "),o("code",null,"show()"),e(", "),o("code",null,"hide()"),e(", "),o("code",null,"toggle()"),e(".")],-1)),n(f,{lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(w),p[5]||(p[5]=o("div",{class:"chi-tab__description"},[e("Use methods "),o("code",null,".show()"),e(", "),o("code",null,".hide()"),e(", and "),o("code",null,".toggle()"),e(" to control popover visibility.")],-1)),n(f,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),mo={ref:"popover-1",position:"top",title:"Popover title",variant:"text",arrow:"",reference:"#auto-hide-button-1"},bo={ref:"popover-2",position:"top",title:"Popover title",variant:"text",arrow:"","prevent-auto-hide":"",reference:"#auto-hide-button-2"},go=u({__name:"_auto-hide",setup(m){const r=y("popover-1"),s=y("popover-2"),i=()=>{var c;return(c=s.value)==null?void 0:c.toggle()},a=()=>{var c;return(c=r.value)==null?void 0:c.toggle()},l={webcomponent:`<!-- Auto hide -->
<chi-popover id="example-6-popover-auto-hide-popover" position="top" title="Popover title" variant="text" arrow reference="#example-6-auto-hide-button">
  Click outside. I will disappear!
</chi-popover>

<!-- No auto hide -->
<chi-popover id="example-6-popover-no-auto-hide-popover" position="top" title="Popover title" variant="text" arrow prevent-auto-hide reference="#example-6-no-auto-hide-button">
  Click outside. I will stay!
</chi-popover>`,htmlblueprint:`<!-- Auto hide -->
<button id='example-6-popover-auto-hide-popover' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Click outside. I will disappear!</p></div>'>Auto hide</button>
<script>chi.popover(document.getElementById('example-6-popover-auto-hide-popover'),
  {
    preventAutoHide: false
  });
<\/script>

<!-- No auto hide -->
<button id='example-6-popover-no-auto-hide-popover' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Click outside. I will stay!</p></div>'>No auto hide</button>
<script>chi.popover(document.getElementById('example-6-popover-no-auto-hide-popover'),
  {
    preventAutoHide: true
  });
<\/script>`};return(c,p)=>{const v=b,h=g,f=E,w=x;return d(),_(w,{titleSize:"h4",title:"Auto hide",id:"auto-hide"},{"example-description":t(()=>p[0]||(p[0]=[o("p",{class:"-text"},"Popovers automatically hide when clicking outside of it or when pressing the ESC key.",-1)])),example:t(()=>[n(v,null,{default:t(()=>[o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"auto-hide-button-1",onClick:a},"Auto hide"),o("chi-popover",mo,"Click outside. I will disappear!",512),o("chi-button",{class:"-mr--2 -mb--2 -mb-md--0",id:"auto-hide-button-2",onClick:i},"No auto hide"),o("chi-popover",bo,"Click outside. I will stay!",512)]),_:1})]),"code-webcomponent":t(()=>[p[1]||(p[1]=o("div",{class:"chi-tab__description"},[e("You can prevent automatic hiding behavior with the "),o("code",null,"prevent-auto-hide"),e(" attribute.")],-1)),n(h,{lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(f),p[2]||(p[2]=o("div",{class:"chi-tab__description"},[e("You can prevent automatic hiding behavior by setting "),o("code",null,"preventAutoHide"),e(" to "),o("code",null,"true")],-1)),n(h,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),xo={class:"-position--relative",style:{height:"180px"}},fo=u({__name:"_destructive-action-confirmation",setup(m){const r={webcomponent:`<chi-popover position="top" title="Delete instance-1" variant="text" active arrow>
  Are you sure you want to delete instance-1?
  <chi-button slot="chi-popover__footer" color="danger">Delete</chi-button>
  <chi-button slot="chi-popover__footer">Cancel</chi-button>
</chi-popover>`,htmlblueprint:`<section
  class="chi-popover chi-popover--top -active"
  aria-label="Delete instance-1"
  aria-modal="true"
  role="dialog"
>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Delete instance-1?</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Are you sure you want to delete instance-1?</p>
  </div>
  <div class="chi-popover__footer">
    <button class="chi-button -danger">Delete</button>
    <button class="chi-button">Cancel</button>
  </div>
  <div class="chi-popover__arrow"></div>
</section>`};return(s,i)=>{const a=b,l=g,c=x;return d(),_(c,{title:"Destructive action confirmation",id:"destructive-action-confirmation"},{example:t(()=>[o("div",xo,[n(a,null,{default:t(()=>i[0]||(i[0]=[o("chi-popover",{position:"top",title:"Delete instance-1",variant:"text",active:"",arrow:"","prevent-auto-hide":""},[e("Are you sure you want to delete instance-1?"),o("div",{slot:"chi-popover__footer"},[o("chi-button",{color:"danger"},"Delete")]),o("div",{slot:"chi-popover__footer"},[o("chi-button",{class:"-ml--1"},"Cancel")])],-1)])),_:1})])]),"code-webcomponent":t(()=>[i[1]||(i[1]=o("div",{class:"chi-tab__description"},[e("Add buttons to Popovers by setting slot attribute to "),o("code",null,'slot="chi-popover__footer"'),e(".")],-1)),n(l,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[i[2]||(i[2]=o("div",{class:"chi-tab__description"},[e("Add buttons to Popovers by placing them in "),o("code",null,"chi-popover__footer"),e(".")],-1)),n(l,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),wo={class:"-position--relative",style:{height:"640px"}},yo={position:"top",title:"Filter",variant:"custom",modal:"",drag:"",closable:"",active:"","prevent-auto-hide":""},Po={class:"chi-accordion__trigger"},Co={class:"chi-accordion__title"},To={class:"chi-button -flat -icon -xs -py--0",ref:"tooltipButton","data-tooltip":"Clear all filters",slot:"chi-popover__footer"},Eo=u({__name:"_table-filtering",setup(m){const r=y("accordion"),s=y("tooltipButton"),i=R(null);L(()=>{r.value&&(i.value=chi.accordion(r.value),console.log("accrdion setup",i.value))}),L(()=>{s.value&&chi.tooltip(s.value)});const a=()=>{var c;return(c=i.value)==null?void 0:c.expandAll()},l={webcomponent:`<chi-popover position="top" title="Filter" variant="custom" modal drag closable active prevent-auto-hide>
  <button class="chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal" id="example-expand-all">Expand All</button>
  <div class="chi-accordion -sm" id="example-base">
    <div class="chi-accordion__item -expanded">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 1</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 2</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 3</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 4</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 5</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 6</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 7</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 8</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 9</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 10</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 11</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
  </div>
  <button class="chi-button -flat -icon -xs -py--0" slot="chi-popover__footer" data-tooltip="Clear all filters">
    <div class="chi-button__content -flex--column -align-items--center">
      <i class="chi-icon icon-reset -sm--2 -mr--0"></i>
      <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
    </div>
  </button>
  <div class="chi-divider -vertical" slot="chi-popover__footer"></div>
  <chi-button slot="chi-popover__footer">Cancel</chi-button>
  <chi-button slot="chi-popover__footer" color="primary">Apply</chi-button>
</chi-popover>

<script>
  const accordionBase = document.getElementById('example-base');
  const expandAll = document.getElementById("example-expand-all");

  const expandAccordion = chi.accordion(accordionBase);

  expandAll.addEventListener("click", () => {
    expandAccordion.expandAll();
  });

  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`,htmlblueprint:`<section class="chi-popover -active -closable -draggable -modal" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <button class="chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal" id="example-expand-all">Expand All</button>
    <div class="chi-accordion -sm" id="example-base">
      <div class="chi-accordion__item -expanded">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 1</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 2</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 3</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 4</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-popover__footer">
    <button class="chi-button -flat -icon -xs -py--0" data-tooltip="Clear all filters">
      <div class="chi-button__content -flex--column -align-items--center">
        <i class="chi-icon icon-reset -sm--2 -mr--0"></i>
        <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
      </div>
    </button>
    <div class="chi-divider -vertical"></div>
    <button class="chi-button">Cancel</button>
    <button class="chi-button -primary">Apply</button>
  </div>
</section>

<script>
  const accordionBase = document.getElementById('example-base');
  const expandAll = document.getElementById("example-expand-all");

  const expandAccordion = chi.accordion(accordionBase);

  expandAll.addEventListener("click", () => {
    expandAccordion.expandAll();
  });

  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`};return(c,p)=>{const v=b,h=g,f=x;return d(),_(f,{title:"Table filtering",id:"table-filtering-portal"},{example:t(()=>[o("div",wo,[n(v,null,{default:t(()=>[o("chi-popover",yo,[o("button",{class:"chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal",onClick:a},"Expand All"),o("div",{class:"chi-accordion -sm",ref_key:"accordion",ref:i},[(d(),P(A,null,k(11,w=>o("div",{class:S(["chi-accordion__item",w===1?"-expanded":""])},[o("button",Po,[o("div",Co,"Accordion "+B(w),1),p[0]||(p[0]=o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),p[1]||(p[1]=o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Filter content goes here")],-1))],2)),64))],512),o("button",To,p[2]||(p[2]=[o("div",{class:"chi-button__content -flex--column -align-items--center"},[o("i",{class:"chi-icon icon-reset -sm--2 -mr--0"}),o("span",{class:"-text--uppercase -text--primary -text--2xs"},"Clear")],-1)]),512),p[3]||(p[3]=o("div",{class:"chi-divider -vertical",slot:"chi-popover__footer"},null,-1)),p[4]||(p[4]=o("chi-button",{slot:"chi-popover__footer"},"Cancel",-1)),p[5]||(p[5]=o("chi-button",{slot:"chi-popover__footer",color:"primary"},"Apply",-1))])]),_:1})])]),"code-webcomponent":t(()=>[n(h,{lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[n(h,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),Ao={key:0},ko={key:1},Io=u({__name:"index",setup(m){const r=D();return(s,i)=>(d(),P(A,null,[i[0]||(i[0]=o("h2",null,"Examples",-1)),n(N),n(U),n(W),n(G),["portal"].includes($(r))?(d(),P("div",Ao,[n(Q),n(eo)])):(d(),P("div",ko,[n(Z)])),n(no),n(po),n(vo),n(_o),n(go),i[1]||(i[1]=o("h2",null,"Popover with custom content",-1)),i[2]||(i[2]=o("p",{class:"--text"},"Popovers can be used to display any kind of custom content (even other components).",-1)),n(fo),["portal"].includes($(r))?(d(),_(Eo,{key:2})):H("",!0)],64))}});export{Io as _};
