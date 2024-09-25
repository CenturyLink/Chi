import{_ as h}from"./onyWiYp2.js";import{_ as g}from"./CAQzZ0uH.js";import{e as v,j as k,y,v as f,o as a,h as w,w as c,a as e,k as o,c as d,l as r,d as u,b as _}from"./CEIPSiTs.js";import{generateAllExampleFooters as x,generateExampleFooter as B}from"./c7l3qiL8.js";const T={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},P={slot:"footer"},C=["innerHTML"],$=["innerHTML"],E=["innerHTML"],l="back-link-subtitle-buttons-page-level-actions-language-dropdown-button",N=v({__name:"_back_link_subtitle_buttons_page_level_actions",setup(L){const t=k(),s=x(l);y(()=>{const n=document.getElementById(l);n&&chi.dropdown(n)});const m=f(()=>{const n=B(t,l);return{webcomponent:`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
  ${n}
</chi-main>

${t==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${l}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${n}
</div>

${t==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${l}'));<\/script>`}`}});return(n,i)=>{const p=h,b=g;return a(),w(b,{title:"Base with back link, subtitle, buttons and page-level actions",id:"base_with_back_link_subtitle_buttons_page_level_actions",padding:"0"},{example:c(()=>[e("chi-main",T,[i[0]||(i[0]=e("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i[1]||(i[1]=e("div",{slot:"page-level__actions"},[e("button",{class:"chi-button -primary -outline -bg--white"},"Cancel"),e("button",{class:"chi-button -primary -ml--1"},"Submit")],-1)),e("div",P,[["lumen","portal"].includes(o(t))?(a(),d("div",{key:0,innerHTML:o(s).lumen},null,8,C)):r("",!0),o(t)==="centurylink"?(a(),d("div",{key:1,innerHTML:o(s).centurylink},null,8,$)):r("",!0),o(t)==="brightspeed"?(a(),d("div",{key:2,innerHTML:o(s).brightspeed},null,8,E)):r("",!0)])])]),"code-webcomponent":c(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[u("Add page-level actions at the bottom of the application layout by defining "),e("code",null,'slot="page-level__actions"'),u(" on each "),e("code",null,"chi-button"),u(".")],-1)),_(p,{lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[_(p,{class:"html",lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{N as _};
