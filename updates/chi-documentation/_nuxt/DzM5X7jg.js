import{V as m,N as _}from"./uJTUijt2.js";import{_ as v}from"./D8GK0F__.js";import{_ as u}from"./DKu8Jd2y.js";import{o as b,f,w as s,b as c,a as l,d}from"./B5CYXVwa.js";import{_ as P}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,M=(o,a,i,n)=>{for(var e=n>1?void 0:n?w(a,i):a,r=o.length-1,t;r>=0;r--)(t=o[r])&&(e=(n?t(a,i,e):t(e))||e);return n&&e&&x(a,i,e),e};let p=class extends m{};p=M([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-popover title="Popover title" modal closable active>Popover content</chi-popover>',htmlblueprint:`<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
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
</section>`}})})],p);const g=l("p",{class:"-text"},"Use Inline Modals to imitate the style of a Modal and the behavior of a Popover. This is useful for advanced filtering in Data Tables.",-1),C=l("div",{class:"-position--relative",style:{height:"106px"}},[l("chi-popover",{modal:"",closable:"",title:"Popover title",active:"","prevent-auto-hide":""},"Popover content")],-1),O=l("div",{class:"chi-tab__description"},[d("Use the "),l("code",null,"modal"),d(" attribute to style a Popover as an inline Modal.")],-1);function T(o,a,i,n,e,r){const t=v,h=u;return b(),f(h,{title:"Inline Modal",id:"inline-modal-portal",tabs:o.exampleTabs},{"example-description":s(()=>[g]),example:s(()=>[C]),"code-webcomponent":s(()=>[O,c(t,{lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[c(t,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=P(p,[["render",T]]);export{U as default};
