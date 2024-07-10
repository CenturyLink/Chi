var y=Object.defineProperty;var z=(a,t,s)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var d=(a,t,s)=>z(a,typeof t!="symbol"?t+"":t,s);import{V as h,N as f}from"./uJTUijt2.js";import D from"./C902Eojm.js";import j from"./y62DYmDw.js";import{_ as w}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{o as b,f as O,w as p,b as n,a as r,d as o,c as $,F as A,i as E,t as N,n as V,r as u}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import{s as L}from"./2EwpEKcw.js";import{_ as H}from"./Be4hAolY.js";import"./By_bqUVL.js";import"./JA9l-2c8.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./C9_DePFx.js";var M=Object.defineProperty,W=Object.getOwnPropertyDescriptor,F=(a,t,s,c)=>{for(var e=c>1?void 0:c?W(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(c?l(t,s,e):l(e))||e);return c&&e&&M(t,s,e),e};let x=class extends h{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<nav class="chi-breadcrumb" aria-label="Breadcrumb">
  <ol>
      <li class="chi-breadcrumb__item">
        <a href="#">Parent</a>
      </li>
      <li class="chi-breadcrumb__item">
        <a href="#">Child 1</a>
      </li>
      <li class="chi-breadcrumb__item -active">
        <a href="#" aria-current="page">Child 2</a>
      </li>
  </ol>
</nav>`})}};x=F([f({})],x);const q=r("nav",{class:"chi-breadcrumb","aria-label":"Breadcrumb"},[r("ol",null,[r("li",{class:"chi-breadcrumb__item"},[r("a",{href:"#"},"Parent")]),r("li",{class:"chi-breadcrumb__item"},[r("a",{href:"#"},"Child 1")]),r("li",{class:"chi-breadcrumb__item -active"},[r("a",{href:"#","aria-current":"page"},"Child 2")])])],-1);function G(a,t,s,c,e,i){const l=w,m=S;return b(),O(m,{title:"Base",id:"base",tabs:a.exampleTabs},{example:p(()=>[q]),"code-webcomponent":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const I=v(x,[["render",G]]);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(a,t,s,c)=>{for(var e=c>1?void 0:c?K(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(c?l(t,s,e):l(e))||e);return c&&e&&J(t,s,e),e};let C=class extends h{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<nav class="chi-breadcrumb -alt" aria-label="Breadcrumb">
  <ol>
      <li class="chi-breadcrumb__item">
        <a href="#">Parent</a>
      </li>
      <li class="chi-breadcrumb__item">
        <a href="#">Child 1</a>
      </li>
      <li class="chi-breadcrumb__item -active">
        <a href="#" aria-current="page">Child 2</a>
      </li>
  </ol>
</nav>`})}};C=Q([f({})],C);const R=r("p",{class:"-text"},[o("Apply the "),r("code",null,"-alt"),o(" class to render breadcrumbs with an alternate separator.")],-1),U=r("nav",{class:"chi-breadcrumb -alt","aria-label":"Breadcrumb"},[r("ol",null,[r("li",{class:"chi-breadcrumb__item"},[r("a",{href:"#"},"Parent")]),r("li",{class:"chi-breadcrumb__item"},[r("a",{href:"#"},"Child 1")]),r("li",{class:"chi-breadcrumb__item -active"},[r("a",{href:"#","aria-current":"page"},"Child 2")])])],-1);function X(a,t,s,c,e,i){const l=w,m=S;return b(),O(m,{title:"Alternate Separator",id:"alternate-separator",tabs:a.exampleTabs},{"example-description":p(()=>[R]),example:p(()=>[U]),"code-webcomponent":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=v(C,[["render",X]]);var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,ee=(a,t,s,c)=>{for(var e=c>1?void 0:c?k(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(c?l(t,s,e):l(e))||e);return c&&e&&Z(t,s,e),e};let P=class extends h{constructor(){super(...arguments);d(this,"sizes",["xs","sm","md","lg","xl"]);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
<nav class="chi-breadcrumb -xs" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- sm -->
<nav class="chi-breadcrumb -sm" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- md -->
<nav class="chi-breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- lg -->
<nav class="chi-breadcrumb -lg" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- xl -->
<nav class="chi-breadcrumb -xl" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>`})}};P=ee([f({})],P);const ae=r("p",{class:"-text"},[o("Breadcrumbs support the following sizes: "),r("code",null,"-xs"),o(", "),r("code",null,"-sm"),o(", "),r("code",null,"-md"),o(", "),r("code",null,"-lg"),o(", and "),r("code",null,"-xl"),o(". The default size is "),r("code",null,"-md"),o(".")],-1),re={class:"-text--bold"},te=r("ol",null,[r("li",{class:"chi-breadcrumb__item"},[r("a",{href:"#"},"Parent")]),r("li",{class:"chi-breadcrumb__item"},[r("a",{href:"#"},"Child 1")]),r("li",{class:"chi-breadcrumb__item -active"},[r("a",{href:"#","aria-current":"page"},"Child 2")])],-1),le=[te];function se(a,t,s,c,e,i){const l=w,m=S;return b(),O(m,{title:"Additional Sizes",id:"additional-sizes",tabs:a.exampleTabs},{"example-description":p(()=>[ae]),example:p(()=>[(b(!0),$(A,null,E(a.sizes,_=>(b(),$("div",null,[r("p",re,"-"+N(_),1),r("nav",{class:V(["chi-breadcrumb -mb--2",`-${_}`]),"aria-label":"Breadcrumb"},le,2)]))),256))]),"code-webcomponent":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[n(l,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ce=v(P,[["render",se]]);var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,oe=(a,t,s,c)=>{for(var e=c>1?void 0:c?ne(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(c?l(t,s,e):l(e))||e);return c&&e&&ie(t,s,e),e};let B=class extends h{};B=oe([f({components:{BreadcrumBase:I,AlternateSeparator:Y,AdditionalSizes:ce}})],B);const pe=r("h2",null,"Examples",-1),me=r("p",{class:"-text"},[o("To render a breadcrumb, use the class "),r("code",null,"chi-breadcrumb"),o(".")],-1);function de(a,t,s,c,e,i){const l=u("BreadcrumBase"),m=u("AlternateSeparator"),_=u("AdditionalSizes");return b(),$(A,null,[pe,me,n(l),n(m),n(_)],64)}const be=v(B,[["render",de]]);var _e=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,he=(a,t,s,c)=>{for(var e=c>1?void 0:c?ue(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(c?l(t,s,e):l(e))||e);return c&&e&&_e(t,s,e),e};let g=class extends h{constructor(){super(...arguments);d(this,"pageTabs",L)}};g=he([f({components:{Accessibility:j,Properties:D,Examples:be}})],g);const fe={class:"chi-grid__container -pt--3"},ve={class:"chi-tabs-panel -active",id:"examples"},$e={class:"chi-tabs-panel",id:"properties"},xe={class:"chi-tabs-panel",id:"accessibility"};function Ce(a,t,s,c,e,i){const l=H,m=u("Examples"),_=u("Properties"),T=u("Accessibility");return b(),$(A,null,[n(l,{title:"Breadcrumb",description:"Breadcrumbs are used to help users identify where they are in a sites page hierarchy.",tabs:a.pageTabs},null,8,["tabs"]),r("div",fe,[r("div",ve,[n(m)]),r("div",$e,[n(_)]),r("div",xe,[n(T)])])],64)}const Fe=v(g,[["render",Ce]]);export{Fe as default};
