var y=Object.defineProperty;var $=(t,s,o)=>s in t?y(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o;var h=(t,s,o)=>$(t,typeof s!="symbol"?s+"":s,o);import{V as w,N as z}from"./uJTUijt2.js";import{m as L}from"./DAzwSQBh.js";import{_ as C}from"./drvuhYu1.js";import{_ as H}from"./D8GK0F__.js";import{_ as N}from"./DKu8Jd2y.js";import{o as r,f as S,w as _,b as d,a as e,c,i as b,t as m,d as l,F as f,n as T}from"./B5CYXVwa.js";import{_ as B}from"./DlAUqK2U.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";var O=Object.defineProperty,V=Object.getOwnPropertyDescriptor,P=(t,s,o,p)=>{for(var n=p>1?void 0:p?V(s,o):s,u=t.length-1,a;u>=0;u--)(a=t[u])&&(n=(p?a(s,o,n):a(n))||n);return p&&n&&O(s,o,n),n};let x=class extends w{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"breakpoints",L);h(this,"classNames",["md--2","lg--4","sm--5","xl--7"])}get codeSnippets(){return{htmlblueprint:this.generateHtml()}}generateHtml(){return this.classNames.map(o=>`<p class="-text -lh-${o}">-lh-${o}</p>`).join(`
`)}};x=P([z({})],x);const j=e("p",{class:"-text"},[l("Line height sizes can be defined using the format "),e("code",null,"-lh[-{breakpoint}]--{size}"),l(".")],-1),D=e("p",{class:"-text"},"Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library, any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.",-1),A={class:"-text"},E=e("li",null,[l("blank - leave blank to apply "),e("code",null,"text"),l(" to all breakpoints.")],-1),F=e("code",null,"line-height",-1),M={class:"-text"},q=e("li",null,[e("code",null,"0"),l(" - use to set "),e("code",null,"line-height"),l(" and set to "),e("code",null,"0")],-1),G=e("code",null,"line-height",-1),I={class:"-mb--3"},J={class:"-m--3 -show--example"};function K(t,s,o,p,n,u){const a=C,g=H,v=N;return r(),S(v,{padding:"-p--0",title:"Line heights",id:"text-line-heights",tabs:t.exampleTabs,showSnippetTabs:!1},{"example-description":_(()=>[j,d(a,{title:"{breakpoint}",id:"text-breakpoint",titleSize:"h4"}),D,e("ul",A,[E,(r(!0),c(f,null,b(t.breakpoints,({name:i,value:k})=>(r(),c("li",null,[e("code",null,m(i),1),l(" - use to apply "),F,l(" to "+m(k)+" breakpoints.",1)]))),256))]),d(a,{title:"{size}",id:"text-sizes-inner",titleSize:"h4"}),e("ul",M,[q,(r(),c(f,null,b(9,i=>e("li",{key:i},[e("code",null,m(`${i}`),1),l(" - use to set "),G,l(" to "),e("code",null,"$base-unit * "+m(`${i}`),1)])),64))])]),example:_(()=>[e("div",I,[e("div",J,[(r(!0),c(f,null,b(t.classNames,i=>(r(),c("p",{class:T(["-text -pl--1",`-lh-${i}`])},"-lh-"+m(i),3))),256))])])]),"code-htmlblueprint":_(()=>[d(g,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const le=B(x,[["render",K]]);export{le as default};
