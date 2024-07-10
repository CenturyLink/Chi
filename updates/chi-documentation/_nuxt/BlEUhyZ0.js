var g=Object.defineProperty;var k=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var l=(e,n,t)=>k(e,typeof n!="symbol"?n+"":n,t);import{g as f,o as r,f as v,w as d,a as i,c as p,h as m,b,d as u}from"./B5CYXVwa.js";import{V as w,N as y}from"./uJTUijt2.js";import{generateAllExampleFooters as T,generateExampleFooter as B}from"./J651Cs93.js";import{_ as P}from"./D8GK0F__.js";import{_ as S}from"./DKu8Jd2y.js";import{_ as C}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var L=Object.defineProperty,$=Object.getOwnPropertyDescriptor,x=(e,n,t,a)=>{for(var o=a>1?void 0:a?$(n,t):n,c=e.length-1,s;c>=0;c--)(s=e[c])&&(o=(a?s(n,t,o):s(o))||o);return a&&o&&L(n,t,o),o};let h=class extends w{constructor(){super(...arguments);l(this,"selectedTheme",f());l(this,"footers",T("back-link-subtitle-buttons-language-dropdown-button"));l(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);l(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const t=document.getElementById("back-link-subtitle-buttons-language-dropdown-button");t&&chi.dropdown(t),this._setCodeSnippets()}updated(){this._setCodeSnippets()}_setCodeSnippets(){const t=B(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
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

${this.selectedTheme==="centurylink"?"":"<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>"}`}};h=x([y({})],h);const E={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},H=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),M=i("div",{slot:"header-actions"},[i("button",{class:"chi-button -primary"},"Primary")],-1),N={slot:"footer"},V=["innerHTML"],O=["innerHTML"],j=["innerHTML"],D=i("div",{class:"chi-tab__description"},[u("Add buttons in the header of the application layout by defining "),i("code",null,'slot="header-actions"'),u(" on each "),i("code",null,"chi-button"),u(".")],-1);function I(e,n,t,a,o,c){const s=P,_=S;return r(),v(_,{title:"Base with back link, subtitle and buttons",id:"base_with_back_link_subtitle_buttons",tabs:e.exampleTabs,padding:"0"},{example:d(()=>[i("chi-main",E,[H,M,i("div",N,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(r(),p("div",{key:0,innerHTML:e.footers.lumen},null,8,V)):m("",!0),e.selectedTheme==="centurylink"?(r(),p("div",{key:1,innerHTML:e.footers.centurylink},null,8,O)):m("",!0),e.selectedTheme==="brightspeed"?(r(),p("div",{key:2,innerHTML:e.footers.brightspeed},null,8,j)):m("",!0)])])]),"code-webcomponent":d(()=>[D,b(s,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[b(s,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=C(h,[["render",I]]);export{Y as default};
