import{_ as b}from"./Di-ELn2D.js";import{_ as w}from"./Cx7J_iiN.js";import{e as k,g as I,j as f,z as y,y as x,o as d,f as $,w as v,a as i,k as e,c as r,l as _,b as h,d as g,F as j}from"./CRBsHPO5.js";import{a as q,F as S}from"./BYS4_xFx.js";const D=p=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${p}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${q.map(({href:c,name:t},o)=>`<a class="chi-dropdown__menu-item${o===0?" -active":""}" href="${c}">${t}</a>`).join(`
              `)}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${S.map(({href:c,title:t})=>`<li><a href="${c}">${t}</a></li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,R=()=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-footer__links">
            <ul>
              ${S.map(({href:p,title:c})=>`<li><a href="${p}">${c}</a></li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,F=p=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${p}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${q.map(({href:c,name:t},o)=>`<a class="chi-dropdown__menu-item${o===0?" -active":""}" href="${c}">${t}</a>`).join(`
              `)}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${S.map(({href:c,title:t})=>`<li><a href="${c}">${t}</a></li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,m=(p="lumen",c="language-dropdown-button")=>{switch(p){case"brightspeed":return F(c);case"centurylink":return R();default:return D(c)}},L=(p="language-dropdown-button")=>({lumen:m("lumen",p),centurylink:m("centurylink",p),brightspeed:m("brightspeed",p)}),A={title:"Page title"},U={slot:"help-icon"},N={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#help-icon__help-button"},O={slot:"footer"},G=["innerHTML"],K=["innerHTML"],J=["innerHTML"],T="help-icon-language-dropdown-button",Q=k({__name:"_help_icon",setup(p){const c=I("popover"),t=f(),o=L(T);y(()=>{const l=document.getElementById(T);l&&chi.dropdown(l)});const s=()=>{c.value.toggle()},n=x(()=>{const l=m(t,T);return{webcomponent:`<chi-main title="Page title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <!-- Page content goes here -->
  ${l}
</chi-main>

<script>${t==="centurylink"?"":`
  chi.dropdown(document.getElementById('${T}'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-main">
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
  ${l}
</div>

<script>${t==="centurylink"?"":`
  chi.dropdown(document.getElementById('${T}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(l,a)=>{const u=b,W=w;return d(),$(W,{title:"Base with help icon",id:"base_with_help_icon",padding:"0"},{example:v(()=>[i("chi-main",A,[i("div",U,[i("chi-button",{id:"help-icon__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:s},a[0]||(a[0]=[i("chi-icon",{icon:"circle-question-outline"},null,-1)])),i("chi-popover",N,"Popover content.",512)]),a[1]||(a[1]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",O,[["lumen","portal"].includes(e(t))?(d(),r("div",{key:0,innerHTML:e(o).lumen},null,8,G)):_("",!0),e(t)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(o).centurylink},null,8,K)):_("",!0),e(t)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(o).brightspeed},null,8,J)):_("",!0)])])]),"code-webcomponent":v(()=>[h(u,{class:"html",lang:"html",code:n.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(u,{class:"html",lang:"html",code:n.value.htmlblueprint},null,8,["code"])]),_:1})}}}),X={title:"Page Title"},Y={slot:"footer"},Z=["innerHTML"],ii=["innerHTML"],ci=["innerHTML"],C="alert-language-dropdown-button",ei=k({__name:"_alert",setup(p){const c=f(),t=L(C);y(()=>{const s=document.getElementById(C);s&&chi.dropdown(s)});const o=x(()=>{const s=m(c,C);return{webcomponent:`<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${s}
</chi-main>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById(${C}));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${s}
</div>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById(${C}));<\/script>`}`}});return(s,n)=>{const l=b,a=w;return d(),$(a,{title:"Base with alert",id:"base_with_alert",padding:"0"},{example:v(()=>[i("chi-main",X,[n[0]||(n[0]=i("div",{slot:"page-alert"},[i("chi-alert",{color:"info",icon:"circle-info",closable:""},"This is a page level info alert")],-1)),n[1]||(n[1]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",Y,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,Z)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,ii)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,ci)):_("",!0)])])]),"code-webcomponent":v(()=>[h(l,{class:"html",lang:"html",code:o.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(l,{class:"html",lang:"html",code:o.value.htmlblueprint},null,8,["code"])]),_:1})}}}),ti={title:"Page title"},li={slot:"footer"},si=["innerHTML"],ni=["innerHTML"],di=["innerHTML"],P="base-language-dropdown-button",ai=k({__name:"_base",setup(p){const c=f(),t=L(P),o=x(()=>{const l=m(c,P);return{webcomponent:s(l),htmlblueprint:n(l)}});y(()=>{const l=document.getElementById(P);l&&chi.dropdown(l)});const s=l=>`<chi-main title="Page title">
  <!-- Page content goes here -->
  ${l}
</chi-main>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${P}'));<\/script>`}`,n=l=>`<div class="chi-main">
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
  ${l}
</div>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${P}'));<\/script>`}`;return(l,a)=>{const u=b,W=w;return d(),$(W,{title:"Base",id:"base",padding:"0"},{example:v(()=>[i("chi-main",ti,[a[0]||(a[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",li,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,si)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,ni)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,di)):_("",!0)])])]),"code-webcomponent":v(()=>[a[1]||(a[1]=i("div",{class:"chi-tab__description"},[g("Use the "),i("code",null,'title=""'),g(" attribute to display a title above the application layout.")],-1)),h(u,{lang:"html",code:o.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(u,{class:"html",lang:"html",code:o.value.htmlblueprint},null,8,["code"])]),_:1})}}}),oi={backlink:"Back link",title:"Page title"},ri={slot:"footer"},hi=["innerHTML"],vi=["innerHTML"],_i=["innerHTML"],H="back-link-language-dropdown-button",pi=k({__name:"_back_link",setup(p){const c=f(),t=L(H);y(()=>{const s=document.getElementById(H);s&&chi.dropdown(s)});const o=x(()=>{const s=m(c,H);return{webcomponent:`<chi-main backlink="Back link" title="Page title">
  <!-- Page content goes here -->
  ${s}
</chi-main>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${H}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${s}
</div>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${H}'));<\/script>`}`}});return(s,n)=>{const l=b,a=w;return d(),$(a,{title:"Base with back link",id:"base_with_back_link",padding:"0"},{example:v(()=>[i("chi-main",oi,[n[0]||(n[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",ri,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,hi)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,vi)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,_i)):_("",!0)])])]),"code-webcomponent":v(()=>[n[1]||(n[1]=i("div",{class:"chi-tab__description"},[g("Use the "),i("code",null,'backlink=""'),g(" attribute to display a link above the title of the application layout.")],-1)),h(l,{lang:"html",code:o.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(l,{class:"html",lang:"html",code:o.value.htmlblueprint},null,8,["code"])]),_:1})}}}),gi={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},mi={slot:"footer"},ui=["innerHTML"],ki=["innerHTML"],bi=["innerHTML"],V="back-link-subtitle-language-dropdown-button",wi=k({__name:"_back_link_subtitle",setup(p){const c=f(),t=L(V);y(()=>{const s=document.getElementById(V);s&&chi.dropdown(s)});const o=x(()=>{const s=m(c,V);return{webcomponent:`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  ${s}
</chi-main>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${V}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${s}
</div>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${V}'));<\/script>`}`}});return(s,n)=>{const l=b,a=w;return d(),$(a,{title:"Base with back link and subtitle",id:"base_with_back_link_subtitle",padding:"0"},{example:v(()=>[i("chi-main",gi,[n[0]||(n[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",mi,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,ui)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,ki)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,bi)):_("",!0)])])]),"code-webcomponent":v(()=>[n[1]||(n[1]=i("div",{class:"chi-tab__description"},[g("Use the "),i("code",null,'subtitle=""'),g(" attribute to display a subtitle next to the title of the application layout.")],-1)),h(l,{lang:"html",code:o.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(l,{class:"html",lang:"html",code:o.value.htmlblueprint},null,8,["code"])]),_:1})}}}),fi={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},yi={slot:"footer"},xi=["innerHTML"],$i=["innerHTML"],Li=["innerHTML"],E="back-link-subtitle-buttons-language-dropdown-button",Wi=k({__name:"_back_link_subtitle_buttons",setup(p){const c=f(),t=L(E);y(()=>{const s=document.getElementById(E);s&&chi.dropdown(s)});const o=x(()=>{const s=m(c,E);return{webcomponent:`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- Page content goes here -->
  ${s}
</chi-main>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${E}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${s}
</div>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${E}'));<\/script>`}`}});return(s,n)=>{const l=b,a=w;return d(),$(a,{title:"Base with back link, subtitle and buttons",id:"base_with_back_link_subtitle_buttons",padding:"0"},{example:v(()=>[i("chi-main",fi,[n[0]||(n[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),n[1]||(n[1]=i("div",{slot:"header-actions"},[i("button",{class:"chi-button -primary"},"Primary")],-1)),i("div",yi,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,xi)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,$i)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,Li)):_("",!0)])])]),"code-webcomponent":v(()=>[n[2]||(n[2]=i("div",{class:"chi-tab__description"},[g("Add buttons in the header of the application layout by defining "),i("code",null,'slot="header-actions"'),g(" on each "),i("code",null,"chi-button"),g(".")],-1)),h(l,{lang:"html",code:o.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(l,{class:"html",lang:"html",code:o.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Ti={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},Ci={slot:"footer"},Pi=["innerHTML"],Hi=["innerHTML"],Vi=["innerHTML"],B="back-link-subtitle-buttons-page-level-actions-language-dropdown-button",Ei=k({__name:"_back_link_subtitle_buttons_page_level_actions",setup(p){const c=f(),t=L(B);y(()=>{const s=document.getElementById(B);s&&chi.dropdown(s)});const o=x(()=>{const s=m(c,B);return{webcomponent:`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
  ${s}
</chi-main>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${B}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${s}
</div>

${c==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${B}'));<\/script>`}`}});return(s,n)=>{const l=b,a=w;return d(),$(a,{title:"Base with back link, subtitle, buttons and page-level actions",id:"base_with_back_link_subtitle_buttons_page_level_actions",padding:"0"},{example:v(()=>[i("chi-main",Ti,[n[0]||(n[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),n[1]||(n[1]=i("div",{slot:"page-level__actions"},[i("button",{class:"chi-button -primary -outline -bg--white"},"Cancel"),i("button",{class:"chi-button -primary -ml--1"},"Submit")],-1)),i("div",Ci,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,Pi)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,Hi)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,Vi)):_("",!0)])])]),"code-webcomponent":v(()=>[n[2]||(n[2]=i("div",{class:"chi-tab__description"},[g("Add page-level actions at the bottom of the application layout by defining "),i("code",null,'slot="page-level__actions"'),g(" on each "),i("code",null,"chi-button"),g(".")],-1)),h(l,{lang:"html",code:o.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(l,{class:"html",lang:"html",code:o.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Bi={title:"Page title",format:"fixed-width","header-background":""},Mi={slot:"help-icon"},zi={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#dashboard__help-button"},Ii={slot:"footer"},Si=["innerHTML"],qi=["innerHTML"],ji=["innerHTML"],M="dashboard-language-dropdown-button",Di=k({__name:"_dashboard",setup(p){const c=f(),t=L(M),o=I("popover");y(()=>{const l=document.getElementById(M);l&&chi.dropdown(l)});const s=()=>{o.value.toggle()},n=x(()=>{const l=m(c,M);return{webcomponent:`<chi-main title="Page title" format="fixed-width" header-background>
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

<script>${c==="centurylink"?"":`
  chi.dropdown(document.getElementById('${M}'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-main -fixed-width -header-background">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page title
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

<script>${c==="centurylink"?"":`
  chi.dropdown(document.getElementById('${M}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(l,a)=>{const u=b,W=w;return d(),$(W,{title:"Dashboard with header background",id:"dashboard",padding:"0"},{example:v(()=>[i("chi-main",Bi,[i("div",{slot:"help-icon"},[i("chi-button",{id:"dashboard__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:s},a[0]||(a[0]=[i("chi-icon",{icon:"circle-question-outline"},null,-1)]))]),i("div",Mi,[i("chi-popover",zi,"Popover content.",512)]),a[1]||(a[1]=i("div",{slot:"header-actions"},[i("chi-button",{color:"primary",size:"sm"},"Button")],-1)),a[2]||(a[2]=i("div",{class:"chi-css-grid -grid-rows--176"},[i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -highlight -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},[i("ul",{class:"chi-css-grid -gap--05 -no-style -m--0"},[i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")])])])])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])])],-1)),i("div",Ii,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,Si)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,qi)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,ji)):_("",!0)])])]),"code-webcomponent":v(()=>[h(u,{class:"html",lang:"html",code:n.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(u,{class:"html",lang:"html",code:n.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Ri={title:"Page Title",format:"fixed-width","header-background":""},Fi={slot:"help-icon"},Ai={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#dashboard-alert__help-button"},Ui={slot:"footer"},Ni=["innerHTML"],Oi=["innerHTML"],Gi=["innerHTML"],z="dashboard-alert-language-dropdown-button",Ki=k({__name:"_dashboard_alert",setup(p){const c=f(),t=L(z),o=I("popover");y(()=>{const l=document.getElementById(z);l&&chi.dropdown(l)});const s=()=>{o.value.toggle()},n=x(()=>{const l=m(c,z);return{webcomponent:`<chi-main title="Page Title" format="fixed-width" header-background>
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

<script>${c==="centurylink"?"":`
  chi.dropdown(document.getElementById('${z}'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-main -fixed-width -header-background">
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

<script>${c==="centurylink"?"":`
  chi.dropdown(document.getElementById('${z}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(l,a)=>{const u=b,W=w;return d(),$(W,{title:"Dashboard with page-level alert",id:"dashboard_with_alert",padding:"0"},{example:v(()=>[i("chi-main",Ri,[a[1]||(a[1]=i("div",{class:"chi-css-grid -grid-rows--176"},[i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -highlight -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},[i("ul",{class:"chi-css-grid -gap--05 -no-style -m--0"},[i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")])])])])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here"),i("div",{slot:"page-alert"},[i("chi-alert",{color:"info",icon:"circle-info",closable:""},"This is a page level info alert")])])])],-1)),i("div",{slot:"help-icon"},[i("chi-button",{id:"dashboard-alert__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:s},a[0]||(a[0]=[i("chi-icon",{icon:"circle-question-outline"},null,-1)]))]),i("div",Fi,[i("chi-popover",Ai,"Popover content.",512)]),a[2]||(a[2]=i("div",{slot:"header-actions"},[i("chi-button",{color:"primary",size:"sm"},"Button")],-1)),i("div",Ui,[["lumen","portal"].includes(e(c))?(d(),r("div",{key:0,innerHTML:e(t).lumen},null,8,Ni)):_("",!0),e(c)==="centurylink"?(d(),r("div",{key:1,innerHTML:e(t).centurylink},null,8,Oi)):_("",!0),e(c)==="brightspeed"?(d(),r("div",{key:2,innerHTML:e(t).brightspeed},null,8,Gi)):_("",!0)])])]),"code-webcomponent":v(()=>[h(u,{class:"html",lang:"html",code:n.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":v(()=>[h(u,{class:"html",lang:"html",code:n.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Zi=k({__name:"index",setup(p){return(c,t)=>(d(),r(j,null,[t[0]||(t[0]=i("h2",null,"Examples",-1)),t[1]||(t[1]=i("p",{class:"-text"},[g("To render application layout, use the tag "),i("code",null,"chi-main"),g(".")],-1)),h(ai),h(Q),h(ei),h(pi),h(wi),h(Wi),h(Ei),h(Di),h(Ki)],64))}});export{Zi as _};
