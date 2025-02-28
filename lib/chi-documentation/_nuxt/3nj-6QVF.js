import{_ as U}from"./DqffTiRd.js";import{e as f,g as j,l as y,x as T,_ as m,$ as L,v as w,o as l,f as x,w as _,a as i,k as c,c as n,i as d,b as u,d as k,F as A}from"./8OrwJQBm.js";import{_ as W}from"./Cs9k3wdq.js";import{_ as C}from"./B7eGrFrM.js";import{F as O,a as N,p as D,C as G}from"./6MLX6UF4.js";const K=h=>" ".repeat(2*h),Y=h=>h.map((e,t)=>`
${K(7)}<a class="chi-dropdown__menu-item${t===0?" -active":""}" href="${e.href}">${e.name}</a>`).join(""),J=h=>`<footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a 
              class="chi-button -icon -flat -light -sm chi-dropdown__trigger" 
              id="${h}" 
              data-position="top-start" 
              aria-label="Select your preferred language"
            >
              <div class="chi-button__content">
                <i class="chi-flag-icon icon-us" aria-hidden="true"></i>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">${Y(N)}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${O.map(({href:e,title:t,target:s})=>`<li>
                <a href="${e}"${s?` target="${s}"`:""}>${t}</a>
              </li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,F=(h,e)=>`<footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-footer__links">
            <ul>
              ${h.map(({href:t,title:s,target:o})=>`<li>
                <a href="${t}"${o?` target="${o}"`:""}>${s}</a>
              </li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">${e==="colt"?"© 2024 Colt Technology Services Group Limited":"© 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners."}</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,Q=h=>`<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${h}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${N.map(({href:e,name:t},s)=>`<a class="chi-dropdown__menu-item${s===0?" -active":""}" href="${e}">${t}</a>`).join(`
              `)}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${O.map(({href:e,title:t,target:s})=>`<li>
                <a href="${e}"${s?` target="${s}"`:""}>${t}</a>
              </li>`).join(`
              `)}
            </ul>
            <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,b=(h="lumen",e="language-dropdown-button")=>{switch(h){case"brightspeed":return Q(e);case"centurylink":return F(G,h);case"colt":return F(D,h);default:return J(e)}},H=(h="language-dropdown-button")=>({lumen:b("lumen",h),centurylink:b("centurylink",h),brightspeed:b("brightspeed",h),colt:b("colt",h)}),g=h=>{const e=document.getElementById(h);e&&chi.dropdown(e)},X={title:"Page Title"},Z={class:"-d--inline-flex",slot:"help-icon"},ii={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#help-icon__help-button"},ei={slot:"footer"},ci=["innerHTML"],ti=["innerHTML"],li=["innerHTML"],si=["innerHTML"],M="help-icon-language-dropdown-button",ni=f({__name:"_help_icon",setup(h){const e=j("popover"),t=y(),s=H(M);T(async()=>{await m(),g(M)}),L(t,async r=>{await m(),g(M)});const o=()=>{e.value.toggle()},a=w(()=>{const r=b(t.value,M);return{webcomponent:`<chi-main title="Page Title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <!-- Page content goes here -->
  ${r}
</chi-main>

<script>${t.value==="centurylink"||t.value==="colt"?"":`
  chi.dropdown(document.getElementById('${M}'));`}
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
          Page Title
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
  ${r}
</div>

<script>${t.value==="centurylink"||t.value==="colt"?"":`
  chi.dropdown(document.getElementById('${M}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(r,v)=>{const p=W,$=C;return l(),x($,{title:"Base with help icon",id:"base_with_help_icon",padding:"0"},{example:_(()=>[i("chi-main",X,[i("div",Z,[i("chi-button",{id:"help-icon__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:o},v[0]||(v[0]=[i("chi-icon",{icon:"circle-question-outline"},null,-1)])),i("chi-popover",ii,"Popover content.",512)]),v[1]||(v[1]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",ei,[["lumen","portal"].includes(c(t))?(l(),n("div",{key:0,innerHTML:c(s).lumen},null,8,ci)):d("",!0),c(t)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(s).centurylink},null,8,ti)):d("",!0),c(t)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(s).brightspeed},null,8,li)):d("",!0),c(t)==="colt"?(l(),n("div",{key:3,innerHTML:c(s).colt},null,8,si)):d("",!0)])])]),"code-webcomponent":_(()=>[u(p,{class:"html",lang:"html",code:a.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(p,{class:"html",lang:"html",code:a.value.htmlblueprint},null,8,["code"])]),_:1})}}}),ai={title:"Page Title"},oi={slot:"footer"},di=["innerHTML"],ri=["innerHTML"],hi=["innerHTML"],vi=["innerHTML"],P="alert-language-dropdown-button",_i=f({__name:"_alert",setup(h){const e=y(),t=H(P);T(async()=>{await m(),g(P)}),L(e,async o=>{await m(),g(P)});const s=w(()=>{const o=b(e.value,P);return{webcomponent:`<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${o}
</chi-main>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById(${P}));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${o}
</div>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById(${P}));<\/script>`}`}});return(o,a)=>{const r=W,v=C;return l(),x(v,{title:"Base with alert",id:"base_with_alert",padding:"0"},{example:_(()=>[i("chi-main",ai,[a[0]||(a[0]=i("div",{slot:"page-alert"},[i("chi-alert",{color:"info",icon:"circle-info",closable:""},"This is a page level info alert")],-1)),a[1]||(a[1]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",oi,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,di)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,ri)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,hi)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,vi)):d("",!0)])])]),"code-webcomponent":_(()=>[a[2]||(a[2]=i("div",{class:"chi-tab__description"},[k("Use the "),i("code",null,'title=""'),k(" attribute to display a title above the application layout.")],-1)),u(r,{class:"html",lang:"html",code:s.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(r,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])]),_:1})}}}),ui={title:"Page Title"},pi={slot:"footer"},mi=["innerHTML"],gi=["innerHTML"],ki=["innerHTML"],bi=["innerHTML"],V="base-language-dropdown-button",wi=f({__name:"_base",setup(h){const e=y(),t=H(V),s=w(()=>{const r=b(e.value,V);return{webcomponent:o(r),htmlblueprint:a(r)}});T(async()=>{await m(),g(V)}),L(e,async r=>{await m(),g(V)});const o=r=>`<chi-main title="Page Title">
  <!-- Page content goes here -->
  ${r}
</chi-main>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${V}'));<\/script>`}`,a=r=>`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page Title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${r}
</div>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${V}'));<\/script>`}`;return(r,v)=>{const p=W,$=C;return l(),x($,{title:"Base",id:"base",padding:"0"},{example:_(()=>[i("chi-main",ui,[v[0]||(v[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",pi,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,mi)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,gi)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,ki)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,bi)):d("",!0)])])]),"code-webcomponent":_(()=>[v[1]||(v[1]=i("div",{class:"chi-tab__description"},[k("Use the "),i("code",null,'title=""'),k(" attribute to display a title above the application layout.")],-1)),u(p,{lang:"html",code:s.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(p,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])]),_:1})}}}),fi={backlink:"Back link",title:"Page Title"},yi={slot:"footer"},xi=["innerHTML"],$i=["innerHTML"],Ti=["innerHTML"],Li=["innerHTML"],z="back-link-language-dropdown-button",Wi=f({__name:"_back_link",setup(h){const e=y(),t=H(z);T(async()=>{await m(),g(z)}),L(e,async o=>{await m(),g(z)});const s=w(()=>{const o=b(e.value,z);return{webcomponent:`<chi-main backlink="Back link" title="Page Title">
  <!-- Page content goes here -->
  ${o}
</chi-main>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${z}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page Title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${o}
</div>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${z}'));<\/script>`}`}});return(o,a)=>{const r=W,v=C;return l(),x(v,{title:"Base with back link",id:"base_with_back_link",padding:"0"},{example:_(()=>[i("chi-main",fi,[a[0]||(a[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",yi,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,xi)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,$i)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,Ti)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,Li)):d("",!0)])])]),"code-webcomponent":_(()=>[a[1]||(a[1]=i("div",{class:"chi-tab__description"},[k("Use the "),i("code",null,'backlink=""'),k(" attribute to display a link above the title of the application layout.")],-1)),u(r,{lang:"html",code:s.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(r,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Ci={backlink:"Back link",title:"Page Title",subtitle:"Page subtitle"},Hi={slot:"footer"},Mi=["innerHTML"],Pi=["innerHTML"],Vi=["innerHTML"],zi=["innerHTML"],E="back-link-subtitle-language-dropdown-button",Ei=f({__name:"_back_link_subtitle",setup(h){const e=y(),t=H(E);T(async()=>{await m(),g(E)}),L(e,async o=>{await m(),g(E)});const s=w(()=>{const o=b(e.value,E);return{webcomponent:`<chi-main backlink="Back link" title="Page Title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  ${o}
</chi-main>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${E}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page Title</div>
        <div class="chi-main__title-subheading">Page subtitle</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${o}
</div>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${E}'));<\/script>`}`}});return(o,a)=>{const r=W,v=C;return l(),x(v,{title:"Base with back link and subtitle",id:"base_with_back_link_subtitle",padding:"0"},{example:_(()=>[i("chi-main",Ci,[a[0]||(a[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",Hi,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,Mi)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,Pi)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,Vi)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,zi)):d("",!0)])])]),"code-webcomponent":_(()=>[a[1]||(a[1]=i("div",{class:"chi-tab__description"},[k("Use the "),i("code",null,'subtitle=""'),k(" attribute to display a subtitle next to the title of the application layout.")],-1)),u(r,{lang:"html",code:s.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(r,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Bi={backlink:"Back link",title:"Page Title",subtitle:"Page subtitle"},Ii={slot:"footer"},Si=["innerHTML"],Ri=["innerHTML"],qi=["innerHTML"],ji=["innerHTML"],B="back-link-subtitle-buttons-language-dropdown-button",Fi=f({__name:"_back_link_subtitle_buttons",setup(h){const e=y(),t=H(B);T(async()=>{await m(),g(B)}),L(e,async o=>{await m(),g(B)});const s=w(()=>{const o=b(e.value,B);return{webcomponent:`<chi-main backlink="Back link" title="Page Title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- Page content goes here -->
  ${o}
</chi-main>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${B}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page Title</div>
        <div class="chi-main__title-subheading">Page subtitle</div>
      </div>
    </div>
    <div class="chi-main__header-end">
      <button class="chi-button -primary">Primary</button>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${o}
</div>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${B}'));<\/script>`}`}});return(o,a)=>{const r=W,v=C;return l(),x(v,{title:"Base with back link, subtitle and buttons",id:"base_with_back_link_subtitle_buttons",padding:"0"},{example:_(()=>[i("chi-main",Bi,[a[0]||(a[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),a[1]||(a[1]=i("div",{slot:"header-actions"},[i("button",{class:"chi-button -primary"},"Primary")],-1)),i("div",Ii,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,Si)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,Ri)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,qi)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,ji)):d("",!0)])])]),"code-webcomponent":_(()=>[a[2]||(a[2]=i("div",{class:"chi-tab__description"},[k("Add buttons in the header of the application layout by defining "),i("code",null,'slot="header-actions"'),k(" on each "),i("code",null,"chi-button"),k(".")],-1)),u(r,{lang:"html",code:s.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(r,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Oi={backlink:"Back link",title:"Page Title",subtitle:"Page subtitle"},Ni={slot:"footer"},Ui=["innerHTML"],Ai=["innerHTML"],Di=["innerHTML"],Gi=["innerHTML"],I="back-link-subtitle-buttons-page-level-actions-language-dropdown-button",Ki=f({__name:"_back_link_subtitle_buttons_page_level_actions",setup(h){const e=y(),t=H(I);T(async()=>{await m(),g(I)}),L(e,async o=>{await m(),g(I)});const s=w(()=>{const o=b(e.value,I);return{webcomponent:`<chi-main backlink="Back link" title="Page Title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
  ${o}
</chi-main>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${I}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page Title</div>
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
  ${o}
</div>${e.value==="centurylink"||e.value==="colt"?"":`

<script>chi.dropdown(document.getElementById('${I}'));<\/script>`}`}});return(o,a)=>{const r=W,v=C;return l(),x(v,{title:"Base with back link, subtitle, buttons and page-level actions",id:"base_with_back_link_subtitle_buttons_page_level_actions",padding:"0"},{example:_(()=>[i("chi-main",Oi,[a[0]||(a[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),a[1]||(a[1]=i("div",{slot:"page-level__actions"},[i("button",{class:"chi-button -primary -outline"},"Cancel"),i("button",{class:"chi-button -primary -ml--1"},"Submit")],-1)),i("div",Ni,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,Ui)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,Ai)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,Di)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,Gi)):d("",!0)])])]),"code-webcomponent":_(()=>[a[2]||(a[2]=i("div",{class:"chi-tab__description"},[k("Add page-level actions at the bottom of the application layout by defining "),i("code",null,'slot="page-level__actions"'),k(" on each "),i("code",null,"chi-button"),k(".")],-1)),u(r,{lang:"html",code:s.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u(r,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Yi={title:"Page Title",format:"fixed-width","header-background":""},Ji={class:"-d--inline-flex",slot:"help-icon"},Qi={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#dashboard__help-button"},Xi={slot:"header-actions"},Zi={key:0,size:"xs",slot:"header-actions"},ie={key:1,color:"primary",size:"sm"},ee={slot:"footer"},ce=["innerHTML"],te=["innerHTML"],le=["innerHTML"],se=["innerHTML"],S="dashboard-language-dropdown-button",ne=f({__name:"_dashboard",setup(h){const e=y(),t=H(S),s=j("popover"),o=w(()=>e.value==="lumen"||e.value==="centurylink"?"Dashboard with header background":"Home page with header background");T(async()=>{await m(),g(S)}),L(e,async v=>{await m(),g(S)});const a=()=>{s.value.toggle()},r=w(()=>{const v=b(e.value,S);return{webcomponent:`<chi-main title="Page Title" format="fixed-width" header-background>
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  ${e.value==="portal"||e.value==="colt"||e.value==="brightspeed"?`<chi-button size="xs" slot="header-actions">
    <chi-icon icon="settings"></chi-icon>
    <span>Customize</span>
  </chi-button>`:'<chi-button color="primary" size="sm" slot="header-actions">Button</chi-button>'}
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
  ${v}
</chi-main>

<script>${["centurylink","colt","brightspeed"].includes(e)?"":`
  chi.dropdown(document.getElementById('${S}'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-main -fixed-width -header-background">
  <div class="chi-main__background">
    <div class="chi-main__background-image">
    </div>
  </div>
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page Title
          <div class="chi-button -icon -flat -sm" id="example__help-button" data-position="right-start" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
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
      ${e.value==="portal"||e.value==="colt"||e.value==="brightspeed"?`<button class="chi-button -xs">
        <div class="chi-button__content">
          <i class="chi-icon icon-settings"></i>
          <span>Customize</span>
        </div>
      </button>`:'<button class="chi-button -primary -sm">Button</button>'}
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
  ${v}
</div>

<script>${["centurylink","colt","brightspeed"].includes(e)?"":`
  chi.dropdown(document.getElementById('${S}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(v,p)=>{const $=W,q=C;return l(),x(q,{title:o.value,id:"dashboard",padding:"0"},{example:_(()=>[i("chi-main",Yi,[i("div",{class:"-d--inline-flex",slot:"help-icon"},[i("chi-button",{id:"dashboard__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:a},p[0]||(p[0]=[i("chi-icon",{icon:"circle-question-outline"},null,-1)]))]),i("div",Ji,[i("chi-popover",Qi,"Popover content.",512)]),i("div",Xi,[["portal","colt","brightspeed"].includes(c(e))?(l(),n("chi-button",Zi,p[1]||(p[1]=[i("chi-icon",{icon:"settings"},null,-1),i("span",null,"Customize",-1)]))):(l(),n("chi-button",ie,"Button"))]),p[2]||(p[2]=i("div",{class:"chi-css-grid -grid-rows--176"},[i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -highlight -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},[i("ul",{class:"chi-css-grid -gap--05 -no-style -m--0"},[i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")])])])])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])])],-1)),i("div",ee,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,ce)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,te)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,le)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,se)):d("",!0)])])]),"code-webcomponent":_(()=>[u($,{class:"html",lang:"html",code:r.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u($,{class:"html",lang:"html",code:r.value.htmlblueprint},null,8,["code"])]),_:1},8,["title"])}}}),ae={title:"Page Title",format:"fixed-width","header-background":""},oe=["size"],de={class:"-d--inline-flex",slot:"help-icon"},re={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#dashboard-alert__help-button"},he={slot:"header-actions"},ve={key:0,size:"xs",slot:"header-actions"},_e={key:1,color:"primary",size:"sm"},ue={slot:"footer"},pe=["innerHTML"],me=["innerHTML"],ge=["innerHTML"],ke=["innerHTML"],R="dashboard-alert-language-dropdown-button",be=f({__name:"_dashboard_alert",setup(h){const e=y(),t=H(R),s=j("popover"),o=w(()=>e.value==="lumen"||e.value==="centurylink"?"Dashboard with page-level alert":"Home page with page-level alert");T(async()=>{await m(),g(R)}),L(e,async v=>{await m(),g(R)});const a=()=>{s.value.toggle()},r=w(()=>{const v=b(e.value,R);return{webcomponent:`<chi-main title="Page Title" format="fixed-width" header-background>
  <chi-alert 
    color="info" 
    icon="circle-info"${e.value==="portal"||e.value==="colt"||e.value==="brightspeed"?' size="sm"':""} 
    slot="page-alert" 
    closable
  >
    This is a page level info alert
  </chi-alert>
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  ${e.value==="portal"||e.value==="colt"||e.value==="brightspeed"?`<chi-button size="xs" slot="header-actions">
    <chi-icon icon="settings"></chi-icon>
    <span>Customize</span>
  </chi-button>`:'<chi-button color="primary" size="sm" slot="header-actions">Button</chi-button>'}
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
  ${v}
</chi-main>

<script>${["portal","colt","brightspeed"].includes(e)?"":`
  chi.dropdown(document.getElementById('${R}'));`}
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,htmlblueprint:`<div class="chi-main -fixed-width -header-background">
  <div class="chi-main__background">
    <div class="chi-main__background-image">
    </div>
  </div>
  <div class="chi-main__alert">
    <div class="chi-alert -info${e.value==="portal"||e.value==="colt"||e.value==="brightspeed"?" -sm":""} -close" role="alert">
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
          <div class="chi-button -icon -flat -sm" id="example__help-button" data-position="right-start" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
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
      ${e.value==="portal"||e.value==="colt"||e.value==="brightspeed"?`<button class="chi-button -xs">
        <div class="chi-button__content">
          <i class="chi-icon icon-settings"></i>
          <span>Customize</span>
        </div>
      </button>`:'<button class="chi-button -primary -sm">Button</button>'}
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
  ${v}
</div>

<script>${["portal","colt","brightspeed"].includes(e)?"":`
  chi.dropdown(document.getElementById('${R}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(v,p)=>{const $=W,q=C;return l(),x(q,{title:o.value,id:"dashboard_with_alert",padding:"0"},{example:_(()=>[i("chi-main",ae,[i("chi-alert",{color:"info",icon:"circle-info",size:["portal","colt","brightspeed"].includes(c(e))?"sm":"md",slot:"page-alert",closable:""},p[0]||(p[0]=[i("span",null,"This is a page level info alert",-1)]),8,oe),p[3]||(p[3]=i("div",{class:"chi-css-grid -grid-rows--176"},[i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -highlight -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},[i("ul",{class:"chi-css-grid -gap--05 -no-style -m--0"},[i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")]),i("li",{class:"chi-css-col -col-sm--6"},[i("chi-link",{href:"#"},"Widget Link")])])])])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4 -row--2"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])]),i("div",{class:"chi-css-col -col-lg--6 -col-xl--4"},[i("div",{class:"chi-card -widget -h--100"},[i("div",{class:"chi-card__header"},[i("div",{class:"chi-card__title"},"Widget"),i("chi-link",{size:"md",href:"#",cta:"cta"},"View")]),i("div",{class:"chi-card__content"},"Content here")])])],-1)),i("div",{class:"-d--inline-flex",slot:"help-icon"},[i("chi-button",{id:"dashboard-alert__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:a},p[1]||(p[1]=[i("chi-icon",{icon:"circle-question-outline"},null,-1)]))]),i("div",de,[i("chi-popover",re,"Popover content.",512)]),i("div",he,[["portal","colt","brightspeed"].includes(c(e))?(l(),n("chi-button",ve,p[2]||(p[2]=[i("chi-icon",{icon:"settings"},null,-1),i("span",null,"Customize",-1)]))):(l(),n("chi-button",_e,"Button"))]),i("div",ue,[["lumen","portal"].includes(c(e))?(l(),n("div",{key:0,innerHTML:c(t).lumen},null,8,pe)):d("",!0),c(e)==="centurylink"?(l(),n("div",{key:1,innerHTML:c(t).centurylink},null,8,me)):d("",!0),c(e)==="brightspeed"?(l(),n("div",{key:2,innerHTML:c(t).brightspeed},null,8,ge)):d("",!0),c(e)==="colt"?(l(),n("div",{key:3,innerHTML:c(t).colt},null,8,ke)):d("",!0)])])]),"code-webcomponent":_(()=>[u($,{class:"html",lang:"html",code:r.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":_(()=>[u($,{class:"html",lang:"html",code:r.value.htmlblueprint},null,8,["code"])]),_:1},8,["title"])}}}),Te=f({__name:"index",setup(h){const e=y();return(t,s)=>{const o=U;return l(),n(A,null,[s[0]||(s[0]=i("h2",null,"Examples",-1)),s[1]||(s[1]=i("p",{class:"-text"},[k("To render application layout, use the tag "),i("code",null,"chi-main"),k(".")],-1)),u(o,null,{default:_(()=>[u(wi),["lumen","centurylink","colt"].includes(c(e))?(l(),x(_i,{key:0})):d("",!0),u(ni),u(Wi),u(Ei),u(Fi),u(Ki),u(ne),u(be)]),_:1})],64)}}});export{Te as _};
