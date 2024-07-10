var g=Object.defineProperty;var v=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var a=(e,n,t)=>v(e,typeof n!="symbol"?n+"":n,t);import{g as k,o as r,f,w as d,a as i,c as p,h as u,b,d as m}from"./B5CYXVwa.js";import{V as y,N as w}from"./uJTUijt2.js";import{generateAllExampleFooters as T,generateExampleFooter as B}from"./J651Cs93.js";import{_ as P}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{_ as C}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var L=Object.defineProperty,x=Object.getOwnPropertyDescriptor,$=(e,n,t,l)=>{for(var o=l>1?void 0:l?x(n,t):n,c=e.length-1,s;c>=0;c--)(s=e[c])&&(o=(l?s(n,t,o):s(o))||o);return l&&o&&L(n,t,o),o};let h=class extends y{constructor(){super(...arguments);a(this,"selectedTheme",k());a(this,"footers",T("back-link-subtitle-buttons-page-level-actions-language-dropdown-button"));a(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);a(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const t=document.getElementById("back-link-subtitle-buttons-page-level-actions-language-dropdown-button");t&&chi.dropdown(t),this._setCodeSnippets()}updated(){this._setCodeSnippets()}_setCodeSnippets(){const t=B(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
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
    <div class="-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1">
      <button class="chi-button -primary -outline -bg--white">Cancel</button>
      <button class="chi-button -primary -ml--1">Submit</button>
    </div>
  </div>
  ${t}
</div>

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`}};h=$([w({})],h);const E={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},H=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),M=i("div",{slot:"page-level__actions"},[i("button",{class:"chi-button -primary -outline -bg--white"},"Cancel"),i("button",{class:"chi-button -primary -ml--1"},"Submit")],-1),N={slot:"footer"},V=["innerHTML"],A=["innerHTML"],j=["innerHTML"],O=i("div",{class:"chi-tab__description"},[m("Add page-level actions at the bottom of the application layout by defining "),i("code",null,'slot="page-level__actions"'),m(" on each "),i("code",null,"chi-button"),m(".")],-1);function D(e,n,t,l,o,c){const s=P,_=S;return r(),f(_,{title:"Base with back link, subtitle, buttons and page-level actions",id:"base_with_back_link_subtitle_buttons_page_level_actions",tabs:e.exampleTabs,padding:"0"},{example:d(()=>[i("chi-main",E,[H,M,i("div",N,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(r(),p("div",{key:0,innerHTML:e.footers.lumen},null,8,V)):u("",!0),e.selectedTheme==="centurylink"?(r(),p("div",{key:1,innerHTML:e.footers.centurylink},null,8,A)):u("",!0),e.selectedTheme==="brightspeed"?(r(),p("div",{key:2,innerHTML:e.footers.brightspeed},null,8,j)):u("",!0)])])]),"code-webcomponent":d(()=>[O,b(s,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[b(s,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=C(h,[["render",D]]);export{Y as default};
