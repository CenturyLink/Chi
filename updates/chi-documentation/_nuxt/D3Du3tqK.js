var g=Object.defineProperty;var v=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var a=(e,n,t)=>v(e,typeof n!="symbol"?n+"":n,t);import{g as f,o as d,f as T,w as c,a as l,c as p,h as m,b as u,d as _}from"./B5CYXVwa.js";import{V as w,N as y}from"./uJTUijt2.js";import{generateAllExampleFooters as B,generateExampleFooter as C}from"./J651Cs93.js";import{_ as P}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{_ as $}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var x=Object.defineProperty,E=Object.getOwnPropertyDescriptor,H=(e,n,t,s)=>{for(var o=s>1?void 0:s?E(n,t):n,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(s?i(n,t,o):i(o))||o);return s&&o&&x(n,t,o),o};let h=class extends w{constructor(){super(...arguments);a(this,"selectedTheme",f());a(this,"footers",B("language-dropdown-button"));a(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);a(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const t=document.getElementById("base-language-dropdown-button");t&&chi.dropdown(t),this._setCodeSnippets()}updated(){this._setCodeSnippets()}_setCodeSnippets(){const t=C(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main title="Page title">
  <!-- Page content goes here -->
  ${t}
</chi-main>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`,this.codeSnippets.htmlblueprint=`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
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

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`}};h=H([y({})],h);const L={title:"Page title"},M=l("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),N={slot:"footer"},V=["innerHTML"],k=["innerHTML"],O=["innerHTML"],j=l("div",{class:"chi-tab__description"},[_("Use the "),l("code",null,'title=""'),_(" attribute to display a title above the application layout.")],-1);function D(e,n,t,s,o,r){const i=P,b=S;return d(),T(b,{title:"Base",id:"base",tabs:e.exampleTabs,padding:"0"},{example:c(()=>[l("chi-main",L,[M,l("div",N,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(d(),p("div",{key:0,innerHTML:e.footers.lumen},null,8,V)):m("",!0),e.selectedTheme==="centurylink"?(d(),p("div",{key:1,innerHTML:e.footers.centurylink},null,8,k)):m("",!0),e.selectedTheme==="brightspeed"?(d(),p("div",{key:2,innerHTML:e.footers.brightspeed},null,8,O)):m("",!0)])])]),"code-webcomponent":c(()=>[j,u(i,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[u(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const X=$(h,[["render",D]]);export{X as default};
