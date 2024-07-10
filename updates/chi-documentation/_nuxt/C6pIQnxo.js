var g=Object.defineProperty;var b=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>b(e,typeof t!="symbol"?t+"":t,o);import{g as f,o as c,f as w,w as a,a as i,c as d,h,b as _}from"./B5CYXVwa.js";import{V as x,N as y}from"./uJTUijt2.js";import{generateAllExampleFooters as T,generateExampleFooter as P}from"./J651Cs93.js";import{_ as H}from"./D8GK0F__.js";import{_ as C}from"./DKu8Jd2y.js";import{_ as E}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var S=Object.defineProperty,B=Object.getOwnPropertyDescriptor,$=(e,t,o,p)=>{for(var n=p>1?void 0:p?B(t,o):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(n=(p?l(t,o,n):l(n))||n);return p&&n&&S(t,o,n),n};let m=class extends x{constructor(){super(...arguments);r(this,"selectedTheme",f());r(this,"footers",T("help-icon-language-dropdown-button"));r(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const o=document.getElementById("help-icon-language-dropdown-button");o&&chi.dropdown(o),this._setCodeSnippets()}updated(){this._setCodeSnippets()}togglePopover(){this.$refs.popover.toggle()}_setCodeSnippets(){const o=P(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main title="Page title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <!-- Page content goes here -->
  ${o}
</chi-main>

<script>${this.selectedTheme==="centurylink"?"":`
  chi.dropdown(document.getElementById('language-dropdown-button'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,this.codeSnippets.htmlblueprint=`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page title
          <div class="chi-button -icon -flat -sm" id="example__help-button"  data-position="right-start" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
            </div>
          </div>
          <section class="chi-popover chi-popover--right-start" id="example__help-popover" aria-modal="true" role="dialog">
            <div class="chi-popover__content">
              <p class="chi-popover__text">Popover content.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${o}
</div>

<script>${this.selectedTheme==="centurylink"?"":`
  chi.dropdown(document.getElementById('language-dropdown-button'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}};m=$([y({})],m);const L={title:"Page title"},k={slot:"help-icon"},I=i("chi-icon",{icon:"circle-question-outline"},null,-1),M=[I],q={slot:"help-icon"},N={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#help-icon__help-button"},V=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1),O={slot:"footer"},j=["innerHTML"],D=["innerHTML"],z=["innerHTML"];function F(e,t,o,p,n,s){const l=H,u=C;return c(),w(u,{title:"Base with help icon",id:"base_with_help_icon",tabs:e.exampleTabs,padding:"0"},{example:a(()=>[i("chi-main",L,[i("div",k,[i("chi-button",{id:"help-icon__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:t[0]||(t[0]=(...v)=>e.togglePopover&&e.togglePopover(...v))},M)]),i("div",q,[i("chi-popover",N,"Popover content.",512)]),V,i("div",O,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(e.selectedTheme)?(c(),d("div",{key:0,innerHTML:e.footers.lumen},null,8,j)):h("",!0),e.selectedTheme==="centurylink"?(c(),d("div",{key:1,innerHTML:e.footers.centurylink},null,8,D)):h("",!0),e.selectedTheme==="brightspeed"?(c(),d("div",{key:2,innerHTML:e.footers.brightspeed},null,8,z)):h("",!0)])])]),"code-webcomponent":a(()=>[_(l,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[_(l,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const te=E(m,[["render",F]]);export{te as default};
