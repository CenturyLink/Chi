var j=Object.defineProperty;var E=(t,o,n)=>o in t?j(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var m=(t,o,n)=>E(t,typeof o!="symbol"?o+"":o,n);import{V as b,N as u}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as O}from"./BLbnEGma.js";import{_ as z}from"./DKu8Jd2y.js";import{o as _,f as S,w as r,b as i,a as c,d as a,c as v,F as D,i as B,t as N,r as h}from"./B5CYXVwa.js";import{_ as $}from"./DlAUqK2U.js";import L from"./BvD3KTKb.js";import V from"./B3jPVl0x.js";import{s as A}from"./2EwpEKcw.js";import{_ as H}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var J=Object.defineProperty,M=Object.getOwnPropertyDescriptor,W=(t,o,n,p)=>{for(var e=p>1?void 0:p?M(o,n):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(e=(p?s(o,n,e):s(e))||e);return p&&e&&J(o,n,e),e};let y=class extends b{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:'<chi-copy-text text="This is an example text"></chi-copy-text>',htmlblueprint:""})}};y=W([u({})],y);const F=c("p",{class:"-text"},[a("The "),c("code",null,"text"),a(" attribute is required and its value contains the text that the user wants to copy. Click on the button to copy the text into the clipboard. ")],-1),q=c("span",{class:"-text"},"This is an example text",-1),U=c("chi-copy-text",{text:"This is an example text"},null,-1);function G(t,o,n,p,e,l){const s=g,x=O,d=z;return _(),S(d,{title:"Text",id:"text",tabs:t.exampleTabs,padding:"-p--2"},{"example-description":r(()=>[F]),example:r(()=>[q,U]),"code-webcomponent":r(()=>[i(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[i(x),i(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const I=$(y,[["render",G]]);var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,R=(t,o,n,p)=>{for(var e=p>1?void 0:p?Q(o,n):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(e=(p?s(o,n,e):s(e))||e);return p&&e&&K(o,n,e),e};let T=class extends b{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:'<chi-copy-text text="This is an example text" disabled></chi-copy-text>',htmlblueprint:""})}};T=R([u({})],T);const X=c("p",{class:"-text"},[a("Use the "),c("code",null,"disabled"),a(" attribute to disable the copy-text button.")],-1),Y=c("span",{class:"-text"},"This is an example text",-1),Z=c("chi-copy-text",{text:"This is an example text",disabled:""},null,-1);function k(t,o,n,p,e,l){const s=g,x=O,d=z;return _(),S(d,{title:"Disabled",id:"disabled",tabs:t.exampleTabs,padding:"-p--2"},{"example-description":r(()=>[X]),example:r(()=>[Y,Z]),"code-webcomponent":r(()=>[i(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[i(x),i(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ee=$(T,[["render",k]]);var te=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,se=(t,o,n,p)=>{for(var e=p>1?void 0:p?oe(o,n):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(e=(p?s(o,n,e):s(e))||e);return p&&e&&te(o,n,e),e};let w=class extends b{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"sizes",["xs","sm","sm--2","sm--3","md","lg","xl","xxl"]);m(this,"codeSnippets",{webcomponent:`<!-- -xs : 12x12px -->
<chi-copy-text text="text" size="xs"></chi-copy-text>
<!-- sm : 16x16px -->
<chi-copy-text text="text" size="sm"></chi-copy-text>
<!-- sm--2 : 20x20px -->
<chi-copy-text text="text" size="sm--2"></chi-copy-text>
<!-- sm--3 : 24x24px -->
<chi-copy-text text="text" size="sm--3"></chi-copy-text>
<!-- md : 32x32px -->
<chi-copy-text text="text" size="md"></chi-copy-text>
<!-- lg : 64x64px -->
<chi-copy-text text="text" size="lg"></chi-copy-text>
<!-- xl : 96x96px -->
<chi-copy-text text="text" size="xl"></chi-copy-text>
<!-- xxl : 128x128px -->
<chi-copy-text text="text" size="xxl"></chi-copy-text>`,htmlblueprint:""})}};w=se([u({})],w);const ne=c("p",{class:"-text"},[a("Copy text button supports the following sizes: "),c("code",null,"xs"),a(", "),c("code",null,"sm"),a(", "),c("code",null,"sm--2"),a(", "),c("code",null,"sm--3"),a(", "),c("code",null,"md"),a(", "),c("code",null,"lg"),a(", "),c("code",null,"xl"),a(", "),c("code",null,"xxl")],-1),pe={class:"chi-grid -align-items--end"},ce={class:"-m--1"},le=["size"],ie={class:"-text -text--center"};function ae(t,o,n,p,e,l){const s=g,x=O,d=z;return _(),S(d,{title:"Sizes",id:"sizes",tabs:t.exampleTabs},{"example-description":r(()=>[ne]),example:r(()=>[c("div",pe,[(_(!0),v(D,null,B(t.sizes,f=>(_(),v("div",ce,[c("chi-copy-text",{text:"text",size:f},null,8,le),c("p",ie,N(f),1)]))),256))])]),"code-webcomponent":r(()=>[i(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[i(x),i(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const re=$(w,[["render",ae]]);var xe=Object.defineProperty,de=Object.getOwnPropertyDescriptor,me=(t,o,n,p)=>{for(var e=p>1?void 0:p?de(o,n):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(e=(p?s(o,n,e):s(e))||e);return p&&e&&xe(o,n,e),e};let P=class extends b{};P=me([u({components:{Text:I,Disabled:ee,Sizes:re}})],P);const _e=c("h2",null,"Examples",-1);function he(t,o,n,p,e,l){const s=h("Text"),x=h("Disabled"),d=h("Sizes");return _(),v(D,null,[_e,i(s),i(x),i(d)],64)}const be=$(P,[["render",he]]);var ue=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,fe=(t,o,n,p)=>{for(var e=p>1?void 0:p?$e(o,n):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(e=(p?s(o,n,e):s(e))||e);return p&&e&&ue(o,n,e),e};let C=class extends b{constructor(){super(...arguments);m(this,"pageTabs",A)}};C=fe([u({components:{Accessibility:V,Examples:be,Properties:L}})],C);const ve={class:"chi-grid__container -pt--3"},ye={class:"chi-tabs-panel -active",id:"examples"},Te={class:"chi-tabs-panel",id:"properties"},we={class:"chi-tabs-panel",id:"accessibility"};function Pe(t,o,n,p,e,l){const s=H,x=h("Examples"),d=h("Properties"),f=h("Accessibility");return _(),v("div",null,[i(s,{title:"Copy Text",description:"Copy Text Button provides the ability to copy the text into the clipboard",tabs:t.pageTabs},null,8,["tabs"]),c("div",ve,[c("div",ye,[i(x)]),c("div",Te,[i(d)]),c("div",we,[i(f)])])])}const Ie=$(C,[["render",Pe]]);export{Ie as default};
