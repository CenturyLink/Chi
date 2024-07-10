var S=Object.defineProperty;var g=(e,l,t)=>l in e?S(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t;var p=(e,l,t)=>g(e,typeof l!="symbol"?l+"":l,t);import{V as w,N as $}from"./uJTUijt2.js";import{_ as C}from"./D8GK0F__.js";import{_ as L}from"./DKu8Jd2y.js";import{o as r,f as P,w as d,c as _,i as h,a as s,n as B,t as u,F as x,b as f,d as a}from"./B5CYXVwa.js";import{_ as N}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,V=(e,l,t,c)=>{for(var o=c>1?void 0:c?T(l,t):l,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(c?i(l,t,o):i(o))||o);return c&&o&&O(l,t,o),o};let b=class extends w{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs - Select -</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm - Select -</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md - Select -</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg - Select -</option>
  </select>
</div>`});p(this,"sizes",["xs","sm","md","lg"])}};b=V([$({})],b);const y=s("p",{class:"-text"},[a("Selects support the following sizes: "),s("code",null,"-xs"),a(", "),s("code",null,"-sm"),a(", "),s("code",null,"-md"),a(", "),s("code",null,"-lg"),a(". The default size is "),s("code",null,"-md"),a(".")],-1),D={class:"-p--2"},j={class:"chi-form__item",style:{"max-width":"20rem"}},E=["for"],F=["id"],H={value:"",selected:"",disabled:"",hidden:""};function M(e,l,t,c,o,n){const i=C,v=L;return r(),P(v,{title:"Sizes",id:"sizes-portal",tabs:e.exampleTabs},{"example-description":d(()=>[y]),example:d(()=>[(r(!0),_(x,null,h(e.sizes,m=>(r(),_("div",D,[s("div",j,[s("label",{class:"chi-label",for:`example-size-${m}`},"Label",8,E),s("select",{class:B(`chi-select -${m}`),id:`example-size-${m}`},[s("option",H,"-"+u(m)+" - Select -",1),(r(),_(x,null,h([1,2,3],z=>s("option",null,"Option "+u(z),1)),64))],10,F)])]))),256))]),"code-webcomponent":d(()=>[f(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[f(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const X=N(b,[["render",M]]);export{X as default};
