var u=Object.defineProperty;var g=(e,t,o)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var c=(e,t,o)=>g(e,typeof t!="symbol"?t+"":t,o);import{V as x,N as v}from"./uJTUijt2.js";import{_ as w}from"./D8GK0F__.js";import{_ as O}from"./BLbnEGma.js";import{_ as $}from"./DKu8Jd2y.js";import{o as d,f as P,w as r,c as b,i as C,a as n,n as F,F as L,b as _}from"./B5CYXVwa.js";import{_ as B}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var N=Object.defineProperty,S=Object.getOwnPropertyDescriptor,V=(e,t,o,i)=>{for(var l=i>1?void 0:i?S(t,o):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(l=(i?a(t,o,l):a(l))||l);return i&&l&&N(t,o,l),l};let m=class extends x{constructor(){super(...arguments);c(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);c(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div id="floating-label-md" class="chi-input__wrapper -floating-label">
  <select class="chi-select -md" id="floating-label-portal-select-md">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-portal-select-md">Placeholder text</label>
</div>

<div id="floating-label-lg" class="chi-input__wrapper -floating-label">
  <select class="chi-select -lg" id="floating-label-portal-select-lg">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-portal-select-lg">Placeholder text</label>
</div>

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`});c(this,"sizes",["md","lg"])}mounted(){this.sizes.forEach(o=>{chi.floatingLabel(this.$refs[`label-${o}`])})}};m=V([v({})],m);const y=n("p",{class:"-text"},"Floating labels are a solution to keep the placeholder visible when no label is attached to the select.",-1),E={class:"chi-col -w--12 -p--2"},T=["id"],j=n("option",null,null,-1),D=n("option",null,"Option 1",-1),q=n("option",null,"Option 2",-1),z=n("option",null,"Option 3",-1),A=[j,D,q,z],H=["for"];function J(e,t,o,i,l,s){const a=w,h=O,f=$;return d(),P(f,{title:"Floating labels",id:"floating-labels-portal",tabs:e.exampleTabs},{"example-description":r(()=>[y]),example:r(()=>[(d(!0),b(L,null,C(e.sizes,p=>(d(),b("div",E,[n("div",{class:"chi-input__wrapper -floating-label",style:{"max-width":"20rem"},ref_for:!0,ref:`label-${p}`},[n("select",{class:F(`chi-select -${p}`),id:`floating-label-select-${p}`},A,10,T),n("label",{for:`floating-label-select-${p}`},"Placeholder text",8,H)],512)]))),256))]),"code-webcomponent":r(()=>[_(a,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(h),_(a,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ee=B(m,[["render",J]]);export{ee as default};
