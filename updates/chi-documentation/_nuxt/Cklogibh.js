var x=Object.defineProperty;var f=(t,o,s)=>o in t?x(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s;var u=(t,o,s)=>f(t,typeof o!="symbol"?o+"":o,s);import{V as g,N as B}from"./uJTUijt2.js";import{_ as w}from"./D8GK0F__.js";import{_ as z}from"./DKu8Jd2y.js";import{o as b,f as y,w as r,c as m,i as S,a as n,t as C,n as h,F as P,b as _,d as c}from"./B5CYXVwa.js";import{_ as $}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,T=(t,o,s,a)=>{for(var e=a>1?void 0:a?N(o,s):o,l=t.length-1,i;l>=0;l--)(i=t[l])&&(e=(a?i(o,s,e):i(e))||e);return a&&e&&H(o,s,e),e};let p=class extends g{constructor(){super(...arguments);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"sizes",["xs","sm","md","lg"]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`})}};p=T([B({})],p);const V=n("p",{class:"-text"},[c("Hybrid buttons support the following sizes: "),n("code",null,"xs"),c(", "),n("code",null,"sm"),c(", "),n("code",null,"md"),c(", "),n("code",null,"lg"),c(". The default size is "),n("code",null,"md"),c(".")],-1),O={class:"-p--0 -d--flex -flex--column"},D={class:"-text--bold -pl--1 -mb--0"},j={class:"chi-button-group -m--1"},E=n("div",{class:"chi-button__content"},[n("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1),F=[E];function L(t,o,s,a,e,l){const i=w,v=z;return b(),y(v,{titleSize:"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-portal",tabs:t.exampleTabs},{"example-description":r(()=>[V]),example:r(()=>[(b(!0),m(P,null,S(t.sizes,d=>(b(),m("div",O,[n("p",D,"-"+C(d),1),n("div",j,[n("button",{class:h(`chi-button -${d}`)},"Button",2),n("button",{class:h(`chi-button -${d} -icon`),"aria-label":"Button action"},F,2)])]))),256))]),"code-webcomponent":r(()=>[_(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=$(p,[["render",L]]);export{U as default};
