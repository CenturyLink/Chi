import{V as b,N as x}from"./NAah3XrW.js";import{_ as u}from"./onyWiYp2.js";import{_ as f}from"./CAQzZ0uH.js";import{o as d,h as v,w as p,a as e,d as a,c as z,i as g,F as w,b as r}from"./CEIPSiTs.js";import{_ as L}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var S=Object.defineProperty,$=Object.getOwnPropertyDescriptor,P=(l,s,o,c)=>{for(var i=c>1?void 0:c?$(s,o):s,m=l.length-1,t;m>=0;m--)(t=l[m])&&(i=(c?t(s,o,i):t(i))||i);return c&&i&&S(s,o,i),i};let n=class extends b{};n=P([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-label for="example__size-xs">Label</chi-label>
  <chi-text-input size="xs" id="example__size-xs"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-sm">Label</chi-label>
  <chi-text-input size="sm" id="example__size-sm"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-md">Label</chi-label>
  <chi-text-input size="md" id="example__size-md"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-lg">Label</chi-label>
  <chi-text-input size="lg" id="example__size-lg"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -xs" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -sm" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <input type="text" class="chi-input -md" id="example__size-md">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <input type="text" class="chi-input -lg" id="example__size-lg">
</div>`}})})],n);const T={class:"chi-grid"},C={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},y={class:"chi-grid"},B={class:"chi-col -w--12 -mb--2"},N={class:"chi-form__item"},V=["for"],O=["size","id"];function j(l,s,o,c,i,m){const t=u,h=f;return d(),v(h,{title:"Sizes",id:"sizes-portal",tabs:l.exampleTabs},{"example-description":p(()=>s[0]||(s[0]=[e("p",{class:"-text"},[a("Text inputs supports the following sizes: "),e("code",null,"xs"),a(", "),e("code",null,"sm"),a(", "),e("code",null,"md"),a(", "),e("code",null,"lg"),a(". The default size is "),e("code",null,"md"),a(".")],-1)])),example:p(()=>[e("div",T,[e("div",C,[e("div",y,[(d(),z(w,null,g(["xs","sm","md","lg"],_=>e("div",B,[e("div",N,[e("chi-label",{for:`example__size-${_}`},"Label",8,V),e("chi-text-input",{size:_,value:"Sample Text",id:`example__size-${_}`},null,8,O)])])),64))])])])]),"code-webcomponent":p(()=>[r(t,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[r(t,{class:"html",lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const I=L(n,[["render",j]]);export{I as default};
