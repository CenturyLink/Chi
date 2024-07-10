var k=Object.defineProperty;var w=(c,e,l)=>e in c?k(c,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[e]=l;var a=(c,e,l)=>w(c,typeof e!="symbol"?e+"":e,l);import{g as u,o as h,f,w as r,a as i,c as n,h as v,b as g}from"./B5CYXVwa.js";import{V as b,N as W}from"./uJTUijt2.js";import{generateAllExampleFooters as x,generateExampleFooter as C}from"./J651Cs93.js";import{_ as V}from"./D8GK0F__.js";import{_ as L}from"./DKu8Jd2y.js";import{_ as z}from"./DlAUqK2U.js";import"./DAzwSQBh.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var T=Object.defineProperty,y=Object.getOwnPropertyDescriptor,P=(c,e,l,t)=>{for(var s=t>1?void 0:t?y(e,l):e,o=c.length-1,d;o>=0;o--)(d=c[o])&&(s=(t?d(e,l,s):d(s))||s);return t&&s&&T(e,l,s),s};let _=class extends b{constructor(){super(...arguments);a(this,"selectedTheme",u());a(this,"footers",x("dashboard-alert-language-dropdown-button"));a(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);a(this,"codeSnippets",{webcomponent:"",htmlblueprint:""})}mounted(){const l=document.getElementById("dashboard-alert-language-dropdown-button");l&&chi.dropdown(l),this._setCodeSnippets()}updated(){this._setCodeSnippets()}togglePopover(){this.$refs.popover.toggle()}_setCodeSnippets(){const l=C(this.selectedTheme);this.codeSnippets.webcomponent=`<chi-main title="Page Title" format="fixed-width" header-background>
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <chi-button color="primary" size="sm" slot="header-actions">Button</chi-button>
  <div class="chi-css-grid -grid-rows--176">
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -highlight -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">
          <ul class="chi-css-grid -gap--05 -no-style -m--0">
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
  </div>
  ${l}
</chi-main>

<script>${this.selectedTheme==="centurylink"?"":`
  chi.dropdown(document.getElementById('language-dropdown-button'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,this.codeSnippets.htmlblueprint=`<div class="chi-main -fixed-width -header-background">
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
          <div class="chi-button -icon -flat -sm" id="example__help-button" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
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
    <div class="chi-main__header-end">
      <button class="chi-button -primary -sm">Button</button>
    </div>
  </div>
  <div class="chi-main__content">
    <div class="chi-css-grid -grid-rows--176">
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -highlight -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">
            <ul class="chi-css-grid -gap--05 -no-style -m--0">
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__background">
    <div class="chi-main__background-image">
    </div>
  </div>
  ${l}
</div>

<script>${this.selectedTheme==="centurylink"?"":`
  chi.dropdown(document.getElementById('language-dropdown-button'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}};_=P([W({})],_);const B={title:"Page Title",format:"fixed-width","header-background":""},E=i("div",{class:"chi-css-grid -grid-rows--176"},[i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -highlight -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},[i("ul",{class:"chi-css-grid -gap--05 -no-style -m--0"},[i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")])])])])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here"),i("div",{slot:"page-alert"},[i("chi-alert",{color:"info",icon:"circle-info",closable:""},"This is a page level info alert")])])])],-1),S={slot:"help-icon"},H=i("chi-icon",{icon:"circle-question-outline"},null,-1),$=[H],D={slot:"help-icon"},M={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#dashboard-alert__help-button"},q=i("div",{slot:"header-actions"},[i("chi-button",{color:"primary",size:"sm"},"Button")],-1),N={slot:"footer"},A=["innerHTML"],I=["innerHTML"],O=["innerHTML"];function j(c,e,l,t,s,o){const d=V,p=L;return h(),f(p,{title:"Dashboard with page-level alert",id:"dashboard_with_alert",tabs:c.exampleTabs,padding:"0"},{example:r(()=>[i("chi-main",B,[E,i("div",S,[i("chi-button",{id:"dashboard-alert__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:e[0]||(e[0]=(...m)=>c.togglePopover&&c.togglePopover(...m))},$)]),i("div",D,[i("chi-popover",M,"Popover content.",512)]),q,i("div",N,[["lumen","portal","lumenrebrand24","portalrebrand24"].includes(c.selectedTheme)?(h(),n("div",{key:0,innerHTML:c.footers.lumen},null,8,A)):v("",!0),c.selectedTheme==="centurylink"?(h(),n("div",{key:1,innerHTML:c.footers.centurylink},null,8,I)):v("",!0),c.selectedTheme==="brightspeed"?(h(),n("div",{key:2,innerHTML:c.footers.brightspeed},null,8,O)):v("",!0)])])]),"code-webcomponent":r(()=>[g(d,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[g(d,{class:"html",lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ei=z(_,[["render",j]]);export{ei as default};
