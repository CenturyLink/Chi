var k=Object.defineProperty;var N=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var c=(e,t,n)=>N(e,typeof t!="symbol"?t+"":t,n);import{V as T,N as $}from"./uJTUijt2.js";import{m as w}from"./DAzwSQBh.js";import{_ as j}from"./drvuhYu1.js";import{_ as C}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{o as i,f as A,w as h,b,a as s,c as m,i as g,t as u,d as a,F as f,n as B}from"./B5CYXVwa.js";import{_ as O}from"./DlAUqK2U.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";var V=Object.defineProperty,z=Object.getOwnPropertyDescriptor,P=(e,t,n,o)=>{for(var l=o>1?void 0:o?z(t,n):t,d=e.length-1,r;d>=0;d--)(r=e[d])&&(l=(o?r(t,n,l):r(l))||l);return o&&l&&V(t,n,l),l};let x=class extends T{constructor(){super(...arguments);c(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);c(this,"breakpoints",w);c(this,"classNames",[{className:"md--justify",value:"justified from md and larger"},{className:"lg--left",value:"left aligned from lg and larger"},{className:"sm--center",value:"center aligned from sm and larger"},{className:"xl--right",value:"right aligned from xl and larger"}]);c(this,"alignments",["justify","center","left","right"])}get codeSnippets(){return{htmlblueprint:this.generateHtml()}}generateHtml(){return this.classNames.map(({className:n,value:o})=>`<p class="-text-${n}">This text will render as ${o} breakpoints</p>`).join(`
`)}};x=P([$({})],x);const D=s("p",{class:"-text"},[a("Text utility classes can be align using the format "),s("code",null,"-text[-{breakpoint}]--{alignment}"),a(".")],-1),H=s("p",{class:"-text"},"Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library, any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.",-1),R={class:"-text"},E=s("li",null,[a("blank - leave blank to apply "),s("code",null,"alignment"),a(" to all breakpoints.")],-1),F=s("code",null,"alignment",-1),L={class:"-text"},M=s("code",null,"text",-1),q={class:"-mb--3"},G={class:"-m--3"};function I(e,t,n,o,l,d){const r=j,v=C,y=S;return i(),A(y,{padding:"-p--0",title:"Text alignment",id:"text-alignment-responsiveness",tabs:e.exampleTabs,showSnippetTabs:!1},{"example-description":h(()=>[D,b(r,{title:"{breakpoint}",id:"text-breakpoint",titleSize:"h4"}),H,s("ul",R,[E,(i(!0),m(f,null,g(e.breakpoints,({name:p,value:_})=>(i(),m("li",null,[s("code",null,u(p),1),a(" - use to apply "),F,a(" to "+u(_)+" breakpoints.",1)]))),256))]),b(r,{title:"{alignment}",id:"text-sizes-inner",titleSize:"h4"}),s("ul",L,[(i(!0),m(f,null,g(e.alignments,p=>(i(),m("li",null,[s("code",null,u(p),1),a(" - use to set "),s("code",null,u(p),1),a(" the "),M]))),256))])]),example:h(()=>[s("div",q,[s("div",G,[(i(!0),m(f,null,g(e.classNames,({className:p,value:_})=>(i(),m("p",{class:B(["-text",`-text-${p}`])},"This text will render as "+u(_)+" breakpoints",3))),256))])])]),"code-htmlblueprint":h(()=>[b(v,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ne=O(x,[["render",I]]);export{ne as default};
