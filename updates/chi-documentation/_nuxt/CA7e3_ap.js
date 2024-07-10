var g=Object.defineProperty;var k=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var l=(e,n,t)=>k(e,typeof n!="symbol"?n+"":n,t);import{g as v,o as d,f,w as r,a,c as p,h as m,b as u,d as _}from"./B5CYXVwa.js";import{V as w,N as T}from"./uJTUijt2.js";import{generateAllExampleFooters as y,generateExampleFooter as B}from"./J651Cs93.js";import{_ as P}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{_ as x}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var C=Object.defineProperty,L=Object.getOwnPropertyDescriptor,$=(e,n,t,s)=>{for(var i=s>1?void 0:s?L(n,t):n,c=e.length-1,o;c>=0;c--)(o=e[c])&&(i=(s?o(n,t,i):o(i))||i);return s&&i&&C(n,t,i),i};let h=class extends w{constructor(){super(...arguments);l(this,"selectedTheme",v());l(this,"footers",y("back-link-subtitle-language-dropdown-button"));l(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const t=document.getElementById("back-link-subtitle-language-dropdown-button");t&&chi.dropdown(t),this._setCodeSnippets()}updated(){this._setCodeSnippets()}_setCodeSnippets(){const t=B(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  ${t}
</chi-main>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`,this.codeSnippets.htmlblueprint=`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
        <div class="chi-main__title-subheading">Page subtitle</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${t}
</div>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`}};h=$([T({})],h);const E={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},H=a("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),M={slot:"footer"},N=["innerHTML"],V=["innerHTML"],O=["innerHTML"],j=a("div",{class:"chi-tab__description"},[_("Use the "),a("code",null,'subtitle=""'),_(" attribute to display a subtitle next to the title of the application layout.")],-1);function D(e,n,t,s,i,c){const o=P,b=S;return d(),f(b,{title:"Base with back link and subtitle",id:"base_with_back_link_subtitle",tabs:e.exampleTabs,padding:"0"},{example:r(()=>[a("chi-main",E,[H,a("div",M,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(d(),p("div",{key:0,innerHTML:e.footers.lumen},null,8,N)):m("",!0),e.selectedTheme==="centurylink"?(d(),p("div",{key:1,innerHTML:e.footers.centurylink},null,8,V)):m("",!0),e.selectedTheme==="brightspeed"?(d(),p("div",{key:2,innerHTML:e.footers.brightspeed},null,8,O)):m("",!0)])])]),"code-webcomponent":r(()=>[j,u(o,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(o,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const X=x(h,[["render",D]]);export{X as default};
