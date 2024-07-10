import{V as h,N as d}from"./uJTUijt2.js";import{_}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as u,f as g,w as r,b as s,a}from"./B5CYXVwa.js";import{_ as b}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,w=(t,l,c,o)=>{for(var e=o>1?void 0:o?v(l,c):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(o?i(l,c,e):i(e))||e);return o&&e&&x(l,c,e),e};let p=class extends h{};p=w([d({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__portal-icon-left-right-aligned">Label</chi-label>
  <chi-text-input icon-left="search" icon-right="check" value="Sample Text" id="example__portal-icon-left-right-aligned"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__portal-icon-left-right-aligned">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <input type="text" class="chi-input" value="Sample text" id="example__portal-icon-left-right-aligned">
    <i class="chi-icon icon-search" aria-hidden="true"></i>
    <i class="chi-icon icon-check" aria-hidden="true"></i>
  </div>
</div>`}})})],p);const L=a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[a("div",{class:"chi-form__item"},[a("chi-label",{for:"example__portal-icon-left-right-aligned"},"Label"),a("chi-text-input",{"icon-left":"search","icon-right":"check",value:"Sample Text",id:"example__portal-icon-left-right-aligned"})])])],-1);function P(t,l,c,o,e,n){const i=_,m=f;return u(),g(m,{title:"Left + Right Aligned",id:"left-right-aligned-portal",tabs:t.exampleTabs},{example:r(()=>[L]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const V=b(p,[["render",P]]);export{V as default};
