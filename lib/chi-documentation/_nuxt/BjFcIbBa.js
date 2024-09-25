var u=Object.defineProperty;var v=(o,e,t)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var m=(o,e,t)=>v(o,typeof e!="symbol"?e+"":e,t);import{V as f,N as h}from"./NAah3XrW.js";import{_}from"./onyWiYp2.js";import{_ as P}from"./CAQzZ0uH.js";import{o as x,h as w,w as i,a as n,d,b as s}from"./CEIPSiTs.js";import{_ as C}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var D=Object.defineProperty,S=Object.getOwnPropertyDescriptor,$=(o,e,t,l)=>{for(var r=l>1?void 0:l?S(e,t):e,p=o.length-1,a;p>=0;p--)(a=o[p])&&(r=(l?a(e,t,r):a(r))||r);return l&&r&&D(e,t,r),r};let c=class extends f{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button id="example-modal-draggable-button">Click me!</chi-button>

<!-- put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<chi-popover id="example-modal-draggable-popover" title="Draggable Popover" reference="#example-modal-draggable-button" drag modal closable>Popover content</chi-popover>

<script>
  document.querySelector("#example-modal-draggable-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example-modal-draggable-popover");

      popoverElem.toggle();
  });
<\/script>`,htmlblueprint:""})}togglePopover(){this.$refs.popover.toggle()}};c=$([h({})],c);const O={ref:"popover",title:"Draggable Popover",reference:"#example-modal-draggable-button",drag:"",modal:"",closable:""};function y(o,e,t,l,r,p){const a=_,b=P;return x(),w(b,{title:"Draggable popover",id:"draggable-portal",tabs:o.exampleTabs},{example:i(()=>[n("chi-button",{id:"example-modal-draggable-button",onClick:e[0]||(e[0]=(...g)=>o.togglePopover&&o.togglePopover(...g))},"Click me!"),n("chi-popover",O,"Popover content",512)]),"code-webcomponent":i(()=>[e[1]||(e[1]=n("div",{class:"chi-tab__description"},[d("Use the "),n("code",null,"reference"),d(" attribute with a CSS selector to properly reference an element.")],-1)),s(a,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[s(a,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const H=C(c,[["render",y]]);export{H as default};
