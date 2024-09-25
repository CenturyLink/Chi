import{V as v,N as h}from"./NAah3XrW.js";import{_ as b}from"./onyWiYp2.js";import{_ as u}from"./CAQzZ0uH.js";import{o as _,h as f,w as p,a as i,d as c,b as d}from"./CEIPSiTs.js";import{_ as P}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,M=(t,e,n,l)=>{for(var o=l>1?void 0:l?w(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(l?a(e,n,o):a(o))||o);return l&&o&&x(e,n,o),o};let s=class extends v{};s=M([h({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-popover title="Popover title" modal closable active>Popover content</chi-popover>',htmlblueprint:`<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
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
</section>`}})})],s);function g(t,e,n,l,o,r){const a=b,m=u;return _(),f(m,{title:"Inline Modal",id:"inline-modal-portal",tabs:t.exampleTabs},{"example-description":p(()=>e[0]||(e[0]=[i("p",{class:"-text"},"Use Inline Modals to imitate the style of a Modal and the behavior of a Popover. This is useful for advanced filtering in Data Tables.",-1)])),example:p(()=>e[1]||(e[1]=[i("div",{class:"-position--relative",style:{height:"106px"}},[i("chi-popover",{modal:"",closable:"",title:"Popover title",active:"","prevent-auto-hide":""},"Popover content")],-1)])),"code-webcomponent":p(()=>[e[2]||(e[2]=i("div",{class:"chi-tab__description"},[c("Use the "),i("code",null,"modal"),c(" attribute to style a Popover as an inline Modal.")],-1)),d(a,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[d(a,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const B=P(s,[["render",g]]);export{B as default};
