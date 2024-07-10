var k=Object.defineProperty;var g=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var a=(e,n,t)=>g(e,typeof n!="symbol"?n+"":n,t);import{g as v,o as r,f,w as d,a as l,c as p,h as m,b as u,d as _}from"./B5CYXVwa.js";import{V as w,N as T}from"./uJTUijt2.js";import{generateAllExampleFooters as y,generateExampleFooter as B}from"./J651Cs93.js";import{_ as C}from"./D8GK0F__.js";import{_ as L}from"./DKu8Jd2y.js";import{_ as P}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var x=Object.defineProperty,S=Object.getOwnPropertyDescriptor,$=(e,n,t,s)=>{for(var o=s>1?void 0:s?S(n,t):n,c=e.length-1,i;c>=0;c--)(i=e[c])&&(o=(s?i(n,t,o):i(o))||o);return s&&o&&x(n,t,o),o};let h=class extends w{constructor(){super(...arguments);a(this,"selectedTheme",v());a(this,"footers",y("back-link-language-dropdown-button"));a(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);a(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const t=document.getElementById("back-link-language-dropdown-button");t&&chi.dropdown(t),this._setCodeSnippets()}updated(){this._setCodeSnippets()}_setCodeSnippets(){const t=B(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main backlink="Back link" title="Page title">
  <!-- Page content goes here -->
  ${t}
</chi-main>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`,this.codeSnippets.htmlblueprint=`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${t}
</div>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`}};h=$([T({})],h);const E={backlink:"Back link",title:"Page title"},H=l("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),M={slot:"footer"},N=["innerHTML"],V=["innerHTML"],O=["innerHTML"],j=l("div",{class:"chi-tab__description"},[_("Use the "),l("code",null,'backlink=""'),_(" attribute to display a link above the title of the application layout.")],-1);function D(e,n,t,s,o,c){const i=C,b=L;return r(),f(b,{title:"Base with back link",id:"base_with_back_link",tabs:e.exampleTabs,padding:"0"},{example:d(()=>[l("chi-main",E,[H,l("div",M,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(r(),p("div",{key:0,innerHTML:e.footers.lumen},null,8,N)):m("",!0),e.selectedTheme==="centurylink"?(r(),p("div",{key:1,innerHTML:e.footers.centurylink},null,8,V)):m("",!0),e.selectedTheme==="brightspeed"?(r(),p("div",{key:2,innerHTML:e.footers.brightspeed},null,8,O)):m("",!0)])])]),"code-webcomponent":d(()=>[j,u(i,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[u(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const X=P(h,[["render",D]]);export{X as default};
