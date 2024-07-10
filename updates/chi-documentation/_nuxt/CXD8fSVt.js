var u=Object.defineProperty;var v=(o,e,t)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>v(o,typeof e!="symbol"?e+"":e,t);import{V as _,N as h}from"./uJTUijt2.js";import{_ as f}from"./D8GK0F__.js";import{_ as x}from"./DKu8Jd2y.js";import{o as P,f as w,w as m,a as n,b as d,d as s}from"./B5CYXVwa.js";import{_ as C}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var D=Object.defineProperty,S=Object.getOwnPropertyDescriptor,O=(o,e,t,l)=>{for(var r=l>1?void 0:l?S(e,t):e,p=o.length-1,a;p>=0;p--)(a=o[p])&&(r=(l?a(e,t,r):a(r))||r);return l&&r&&D(e,t,r),r};let i=class extends _{constructor(){super(...arguments);c(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);c(this,"codeSnippets",{webcomponent:`<chi-button id="example-modal-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-modal-draggable-popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-modal-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-modal-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,htmlblueprint:""})}togglePopover(){this.$refs.popover.toggle()}};i=O([h({})],i);const $={ref:"popover",title:"Draggable Popover",reference:"#example-modal-draggable-button",drag:"",modal:"",closable:""},y=n("div",{class:"chi-tab__description"},[s("Use the "),n("code",null,"reference"),s(" attribute with a CSS selector to properly reference an element.")],-1);function N(o,e,t,l,r,p){const a=f,b=x;return P(),w(b,{title:"Draggable popover",id:"draggable-portal",tabs:o.exampleTabs},{example:m(()=>[n("chi-button",{id:"example-modal-draggable-button",onClick:e[0]||(e[0]=(...g)=>o.togglePopover&&o.togglePopover(...g))},"Click me!"),n("chi-popover",$,"Popover content",512)]),"code-webcomponent":m(()=>[y,d(a,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":m(()=>[d(a,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=C(i,[["render",N]]);export{U as default};
