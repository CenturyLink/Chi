var p=Object.defineProperty;var _=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>_(e,typeof t!="symbol"?t+"":t,a);import{g as m,o as u,f as b,w as d,a as s,n as v,b as g}from"./B5CYXVwa.js";import{V as f,N as y}from"./uJTUijt2.js";import{s as x}from"./DAzwSQBh.js";import{_ as L}from"./D8GK0F__.js";import{_ as C}from"./DKu8Jd2y.js";import{_ as w}from"./DlAUqK2U.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var T=Object.defineProperty,$=Object.getOwnPropertyDescriptor,N=(e,t,a,o)=>{for(var r=o>1?void 0:o?$(t,a):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(o?n(t,a,r):n(r))||r);return o&&r&&T(t,a,r),r};let c=class extends f{constructor(){super(...arguments);l(this,"exampleTabs",[{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"ariaLabels",{lumen:"Lumen",centurylink:"CenturyLink",portal:"Lumen Enterprise Portal",brightspeed:"Brightspeed",colt:"Colt"});l(this,"theme",m())}get logo(){return x[this.theme]}get ariaLabel(){return this.ariaLabels[this.theme]}get logoClassName(){return this.theme==="centurylink"?"-centurylink -black":""}get codeSnippets(){return{htmlblueprint:`<div class="chi-app -bg--grey-10">
  <header class="chi-header">
    <div class="chi-header__content -justify-content--center">
      <div class="chi-header__brand">
        <a class="chi-brand ${this.logoClassName}" href="#" aria-label="${this.ariaLabel}">
          ${this.logo}
        </a>
      </div>
    </div>
  </header>
  <div class="chi-app__body -d--flex -justify-content--center -px--2 -py--4">
    <div class="-w--100 -mw--480">
      <div class="chi-card -b--0 -bg--none">
        <div class="chi-card__content -text--center">
          <h1 class="-m--2">404</h1>
          <h2 class="-text--h3">Page not found</h2>
          <p class="-text -pb--2">We're Sorry! The page you requested is currently unavailable.</p>
        </div>
      </div>
    </div>
  </div>
</div>`}}};c=N([y({})],c);const P={class:"-p--3 -bg--grey-20"},j={class:"chi-app -bg--grey-10"},S={class:"chi-header"},B={class:"chi-header__content -justify-content--center"},E={class:"chi-header__brand"},O=["aria-label","innerHTML"],V=s("div",{class:"chi-app__body -px--2 -py--4 -d--flex -justify-content--center"},[s("div",{class:"-w--100 -mw--480"},[s("div",{class:"chi-card -b--0 -bg--none"},[s("div",{class:"chi-card__content -text--center"},[s("h1",{class:"-m--2"},"404"),s("h2",{class:"-text--h3"},"Page not found"),s("p",{class:"-text -pb--2"},"We're Sorry! The page you requested is currently unavailable.")])])])],-1);function H(e,t,a,o,r,i){const n=L,h=C;return u(),b(h,{id:"error_404",padding:"-p--0",tabs:e.exampleTabs,showSnippetTabs:!1,showTitle:!1},{example:d(()=>[s("div",P,[s("div",j,[s("header",S,[s("div",B,[s("div",E,[s("a",{class:v(["chi-brand",e.logoClassName]),href:"#","aria-label":e.ariaLabel,innerHTML:e.logo},null,10,O)])])]),V])])]),"code-htmlblueprint":d(()=>[g(n,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=w(c,[["render",H]]);export{K as default};
