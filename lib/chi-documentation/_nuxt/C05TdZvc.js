var f=Object.defineProperty;var x=(o,t,i)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var u=(o,t,i)=>x(o,typeof t!="symbol"?t+"":t,i);import{V as g,N as B}from"./NAah3XrW.js";import{_ as w}from"./onyWiYp2.js";import{_ as z}from"./CAQzZ0uH.js";import{o as b,h as y,w as r,a as n,d as a,c as m,i as S,t as $,n as h,F as C,b as _}from"./CEIPSiTs.js";import{_ as P}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,T=(o,t,i,c)=>{for(var s=c>1?void 0:c?N(t,i):t,l=o.length-1,e;l>=0;l--)(e=o[l])&&(s=(c?e(t,i,s):e(s))||s);return c&&s&&H(t,i,s),s};let p=class extends g{constructor(){super(...arguments);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"sizes",["xs","sm","md","lg"]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`})}};p=T([B({})],p);const V={class:"-p--0 -d--flex -flex--column"},O={class:"-text--bold -pl--1 -mb--0"},D={class:"chi-button-group -m--1"};function j(o,t,i,c,s,l){const e=w,v=z;return b(),y(v,{titleSize:"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-portal",tabs:o.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[n("p",{class:"-text"},[a("Hybrid buttons support the following sizes: "),n("code",null,"xs"),a(", "),n("code",null,"sm"),a(", "),n("code",null,"md"),a(", "),n("code",null,"lg"),a(". The default size is "),n("code",null,"md"),a(".")],-1)])),example:r(()=>[(b(!0),m(C,null,S(o.sizes,d=>(b(),m("div",V,[n("p",O,"-"+$(d),1),n("div",D,[n("button",{class:h(`chi-button -${d}`)},"Button",2),n("button",{class:h(`chi-button -${d} -icon`),"aria-label":"Button action"},t[1]||(t[1]=[n("div",{class:"chi-button__content"},[n("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1)]),2)])]))),256))]),"code-webcomponent":r(()=>[_(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[_(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=P(p,[["render",j]]);export{K as default};
