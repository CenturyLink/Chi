var z=Object.defineProperty;var k=(t,s,l)=>s in t?z(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l;var m=(t,s,l)=>k(t,typeof s!="symbol"?s+"":s,l);import{V as N,N as $}from"./uJTUijt2.js";import{m as S}from"./DAzwSQBh.js";import{_ as T}from"./drvuhYu1.js";import{_ as w}from"./D8GK0F__.js";import{_ as C}from"./DKu8Jd2y.js";import{o as i,f as V,w as x,b as f,a as e,c as r,i as _,t as p,d as o,F as h,n as B}from"./B5CYXVwa.js";import{_ as D}from"./DlAUqK2U.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,j=(t,s,l,u)=>{for(var n=u>1?void 0:u?P(s,l):s,d=t.length-1,c;d>=0;d--)(c=t[d])&&(n=(u?c(s,l,n):c(n))||n);return u&&n&&O(s,l,n),n};let g=class extends N{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"breakpoints",S);m(this,"sizeDescriptions",[{className:"xs",value:"x-small"},{className:"sm",value:"small"},{className:"md",value:"medium"},{className:"lg",value:"large"},{className:"xl",value:"x-large"}]);m(this,"classNames",["md--lg","xl--xs","lg--xl"])}get codeSnippets(){return{htmlblueprint:this.generateHtml()}}generateHtml(){return this.classNames.map(l=>`<p class="-text-${l}">-text--${l}</p>`).join(`
`)}};g=j([$({})],g);const H=e("p",{class:"-text"},[o("Text utility classes can be defined using the format "),e("code",null,"-text[-{breakpoint}]--{size}"),o(".")],-1),L=e("p",{class:"-text"},"Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library, any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.",-1),A={class:"-text"},E=e("li",null,[o("blank - leave blank to apply "),e("code",null,"text"),o(" to all breakpoints.")],-1),F=e("code",null,"margin",-1),q=e("code",null,"padding",-1),M={class:"-text"},G=e("code",null,"text",-1),I={class:"-text"},J=e("code",null,"text",-1),K={class:"-mb--3"};function Q(t,s,l,u,n,d){const c=T,v=w,y=C;return i(),V(y,{padding:"-p--0",title:"Sizes",id:"text-sizes",tabs:t.exampleTabs,showSnippetTabs:!1},{"example-description":x(()=>[H,f(c,{title:"{breakpoint}",id:"text-breakpoint",titleSize:"h4"}),L,e("ul",A,[E,(i(!0),r(h,null,_(t.breakpoints,({name:a,value:b})=>(i(),r("li",null,[e("code",null,p(a),1),o(" - use to apply "),F,o(" or "),q,o(" to "+p(b)+" breakpoints.",1)]))),256))]),f(c,{title:"{size}",id:"text-sizes-inner",titleSize:"h4"}),e("ul",M,[(i(!0),r(h,null,_(t.sizeDescriptions,({className:a,value:b})=>(i(),r("li",null,[e("code",null,p(a),1),o(" - use to apply an "),e("code",null,p(b),1),o(" size to "),G]))),256))]),e("ul",I,[(i(),r(h,null,_([6,5,4,3,2,1],a=>e("li",{key:a},[e("code",null,"h"+p(`${a}`),1),o(" - use to apply an "),e("code",null,"h"+p(`${a}`),1),o(" size to "),J])),64))])]),example:x(()=>[e("div",K,[(i(!0),r(h,null,_(t.classNames,a=>(i(),r("p",{class:B(["-text -m--3",`-text-${a}`])},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, dictum quis mauris vel, commodo condimentum odio. Praesent lacus metus, vehicula at orci ac, fringilla mollis mauris.",2))),256))])]),"code-htmlblueprint":x(()=>[f(v,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ae=D(g,[["render",Q]]);export{ae as default};
