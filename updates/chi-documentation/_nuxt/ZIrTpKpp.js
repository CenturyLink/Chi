var f=Object.defineProperty;var g=(o,e,c)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[e]=c;var m=(o,e,c)=>g(o,typeof e!="symbol"?e+"":e,c);import{g as y,o as l,f as S,k as B,w as $,a as t,c as _,i as v,b as x,n as h,a0 as u,t as d,F as w}from"./B5CYXVwa.js";import{V as z,N}from"./uJTUijt2.js";import{d as O}from"./DAzwSQBh.js";import{_ as P}from"./drvuhYu1.js";import{_ as V}from"./DKu8Jd2y.js";import{_ as k}from"./DlAUqK2U.js";import"./2EwpEKcw.js";var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,j=(o,e,c,n)=>{for(var i=n>1?void 0:n?T(e,c):e,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(n?a(e,c,i):a(i))||i);return n&&i&&D(e,c,i),i};let p=class extends z{constructor(){super(...arguments);m(this,"theme",y())}get color(){return O[this.theme]}};p=j([N({})],p);const E={class:"chi-grid"},F={class:"chi-col -w-sm--12 -w-md--6 -w-lg--6 -mb--3"},A={class:"palette-container"},L={class:"chi-col -w--12"},q={class:"-text--bold"},G={class:"chi-col -w--6 -text--sm"},H={class:"-bg--none -text--inherit -p--0"},I={class:"chi-col -w--6 -text--right -text--sm"},J={class:"a11y"},K={class:"chi-grid"},M={class:"chi-col -w--12"},Q={class:"palette-container"},R={class:"chi-col -w--12"},U={class:"-text--bold"},W={class:"chi-col -w--6 -text--sm"},X={class:"-bg--none -text--inherit -p--0"},Y={class:"chi-col -w--6 -text--right -text--sm"},Z={class:"a11y"};function C(o,e,c,n,i,r){const a=P,b=V;return l(),S(b,{title:"Brand",id:"brand",titleSize:"h3",padding:"-p--0",showSnippetTabs:!1,additionalStyle:"border: 0;"},B({_:2},[o.color?{name:"example",fn:$(()=>[t("div",E,[(l(!0),_(w,null,v(o.color.brand.main,s=>(l(),_("div",F,[x(a,{title:s.title,id:s.id,titleSize:"h4"},null,8,["title","id"]),t("div",A,[t("div",{class:h(["palette -p--2 chi-grid -no-gutter -text -pt--10",s.class||"-text--body"]),style:u(`background-color:${s.code};`)},[t("div",L,[t("div",q,d(s.text),1)]),t("div",G,[t("code",H,d(s.code),1)]),t("div",I,[t("div",J,d(s.a11y),1)])],6)])]))),256))]),t("div",K,[t("div",M,[x(a,{title:"Supporting Colors",id:"supporting-colors",titleSize:"h4"})]),(l(!0),_(w,null,v(o.color.brand.supporting,s=>(l(),_("div",{class:h(["chi-col -w-sm--12 -w-md--6 -mb--3",s.wrapperClass||"-w-lg--3"])},[t("div",Q,[t("div",{class:h(["palette -p--2 chi-grid -no-gutter -text -text--black",s.class]),style:u(`background-color:${s.code};`)},[t("div",R,[t("div",U,d(s.text),1)]),t("div",W,[t("code",X,d(s.code),1)]),t("div",Y,[t("div",Z,d(s.a11y),1)])],6)])],2))),256))])]),key:"0"}:void 0]),1024)}const lt=k(p,[["render",C]]);export{lt as default};
