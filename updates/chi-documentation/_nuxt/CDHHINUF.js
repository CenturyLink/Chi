import{V as h,N as b}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as v}from"./BLbnEGma.js";import{_ as f}from"./DKu8Jd2y.js";import{o as x,f as g,w as r,b as d,a as e,d as l}from"./B5CYXVwa.js";import{_ as w}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var C=Object.defineProperty,P=Object.getOwnPropertyDescriptor,D=(t,i,a,n)=>{for(var o=n>1?void 0:n?P(i,a):i,s=t.length-1,c;s>=0;s--)(c=t[s])&&(o=(n?c(i,a,o):c(o))||o);return n&&o&&C(i,a,o),o};let p=class extends h{};p=D([b({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <div class="chi-accordion__title">Accordion 1</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`}})})],p);const N=e("p",{class:"-text"},[l("Make Accordions appear inactive by adding the class "),e("code",null,"-disabled"),l(" or the attribute "),e("code",null,"disabled"),l(" to Accordion trigger")],-1),$=e("div",{class:"chi-accordion"},[e("div",{class:"chi-accordion__item"},[e("button",{class:"chi-accordion__trigger -disabled"},[e("div",{class:"chi-accordion__title"},"Accordion 1"),e("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),e("div",{class:"chi-accordion__content"},[e("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function V(t,i,a,n,o,s){const c=u,_=v,m=f;return x(),g(m,{title:"Disabled",id:"disabled_portal",tabs:t.exampleTabs,padding:"-p--3 p-lg--6"},{"example-description":r(()=>[N]),example:r(()=>[$]),"code-webcomponent":r(()=>[d(c,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[d(_),d(c,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const L=w(p,[["render",V]]);export{L as default};
