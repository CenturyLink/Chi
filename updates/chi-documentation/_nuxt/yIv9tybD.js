var g=Object.defineProperty;var b=(e,o,t)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var s=(e,o,t)=>b(e,typeof o!="symbol"?o+"":o,t);import{g as v,o as r,f,w as d,a,c as p,h,b as _}from"./B5CYXVwa.js";import{V as T,N as w}from"./uJTUijt2.js";import{generateAllExampleFooters as y,generateExampleFooter as C}from"./J651Cs93.js";import{_ as P}from"./D8GK0F__.js";import{_ as B}from"./DKu8Jd2y.js";import{_ as S}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var $=Object.defineProperty,x=Object.getOwnPropertyDescriptor,E=(e,o,t,l)=>{for(var n=l>1?void 0:l?x(o,t):o,c=e.length-1,i;c>=0;c--)(i=e[c])&&(n=(l?i(o,t,n):i(n))||n);return l&&n&&$(o,t,n),n};let m=class extends T{constructor(){super(...arguments);s(this,"selectedTheme",v());s(this,"footers",y("alert-language-dropdown-button"));s(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);s(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const t=document.getElementById("alert-language-dropdown-button");t&&chi.dropdown(t),this._setCodeSnippets()}updated(){this._setCodeSnippets()}_setCodeSnippets(){const t=C(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${t}
</chi-main>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`,this.codeSnippets.htmlblueprint=`<div class="chi-main">
  <div class="chi-main__alert">
    <div class="chi-alert -info -close" role="alert">
      <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__text">This is a page level info alert</p>
      </div>
      <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  </div>
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page Title
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${t}
</div>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`}};m=E([w({})],m);const H={title:"Page Title"},L=a("div",{slot:"page-alert"},[a("chi-alert",{color:"info",icon:"circle-info",closable:""},"This is a page level info alert")],-1),M=a("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),k={slot:"footer"},N=["innerHTML"],V=["innerHTML"],A=["innerHTML"];function O(e,o,t,l,n,c){const i=P,u=B;return r(),f(u,{title:"Base with alert",id:"base_with_alert",tabs:e.exampleTabs,padding:"0"},{example:d(()=>[a("chi-main",H,[L,M,a("div",k,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(r(),p("div",{key:0,innerHTML:e.footers.lumen},null,8,N)):h("",!0),e.selectedTheme==="centurylink"?(r(),p("div",{key:1,innerHTML:e.footers.centurylink},null,8,V)):h("",!0),e.selectedTheme==="brightspeed"?(r(),p("div",{key:2,innerHTML:e.footers.brightspeed},null,8,A)):h("",!0)])])]),"code-webcomponent":d(()=>[_(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[_(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=S(m,[["render",O]]);export{U as default};
