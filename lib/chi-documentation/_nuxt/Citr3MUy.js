var h=Object.defineProperty;var g=(l,e,t)=>e in l?h(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var r=(l,e,t)=>g(l,typeof e!="symbol"?e+"":e,t);import{V as v,N as w}from"./NAah3XrW.js";import{_ as x}from"./onyWiYp2.js";import{_ as O}from"./CS2TcPBX.js";import{_ as $}from"./CAQzZ0uH.js";import{o as m,h as P,w as c,a as n,c as f,i as C,n as F,F as L,b as d}from"./CEIPSiTs.js";import{_ as B}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var N=Object.defineProperty,S=Object.getOwnPropertyDescriptor,V=(l,e,t,i)=>{for(var o=i>1?void 0:i?S(e,t):e,s=l.length-1,a;s>=0;s--)(a=l[s])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&N(e,t,o),o};let b=class extends v{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div id="floating-label-md" class="chi-input__wrapper -floating-label">
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

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`});r(this,"sizes",["md","lg"])}mounted(){this.sizes.forEach(t=>{chi.floatingLabel(this.$refs[`label-${t}`])})}};b=V([w({})],b);const y={class:"chi-col -w--12 -p--2"},E=["id"],T=["for"];function j(l,e,t,i,o,s){const a=x,u=O,_=$;return m(),P(_,{title:"Floating labels",id:"floating-labels-portal",tabs:l.exampleTabs},{"example-description":c(()=>e[0]||(e[0]=[n("p",{class:"-text"},"Floating labels are a solution to keep the placeholder visible when no label is attached to the select.",-1)])),example:c(()=>[(m(!0),f(L,null,C(l.sizes,p=>(m(),f("div",y,[n("div",{class:"chi-input__wrapper -floating-label",style:{"max-width":"20rem"},ref_for:!0,ref:`label-${p}`},[n("select",{class:F(`chi-select -${p}`),id:`floating-label-select-${p}`},e[1]||(e[1]=[n("option",null,null,-1),n("option",null,"Option 1",-1),n("option",null,"Option 2",-1),n("option",null,"Option 3",-1)]),10,E),n("label",{for:`floating-label-select-${p}`},"Placeholder text",8,T)],512)]))),256))]),"code-webcomponent":c(()=>[d(a,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[d(u),d(a,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const R=B(b,[["render",j]]);export{R as default};
