import{_ as g}from"./onyWiYp2.js";import{_ as b}from"./CAQzZ0uH.js";import{e as k,j as v,y as f,v as y,o as a,h as w,w as c,a as i,k as n,c as d,l as r,d as _,b as h}from"./CEIPSiTs.js";import{generateAllExampleFooters as x,generateExampleFooter as B}from"./c7l3qiL8.js";const T={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},P={slot:"footer"},$=["innerHTML"],E=["innerHTML"],L=["innerHTML"],o="back-link-subtitle-language-dropdown-button",V=k({__name:"_back_link_subtitle",setup(M){const e=v(),l=x(o);f(()=>{const t=document.getElementById(o);t&&chi.dropdown(t)});const m=y(()=>{const t=B(e,o);return{webcomponent:`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  ${t}
</chi-main>

${e==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${o}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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

${e==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${o}'));<\/script>`}`}});return(t,s)=>{const u=g,p=b;return a(),w(p,{title:"Base with back link and subtitle",id:"base_with_back_link_subtitle",padding:"0"},{example:c(()=>[i("chi-main",T,[s[0]||(s[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",P,[["lumen","portal"].includes(n(e))?(a(),d("div",{key:0,innerHTML:n(l).lumen},null,8,$)):r("",!0),n(e)==="centurylink"?(a(),d("div",{key:1,innerHTML:n(l).centurylink},null,8,E)):r("",!0),n(e)==="brightspeed"?(a(),d("div",{key:2,innerHTML:n(l).brightspeed},null,8,L)):r("",!0)])])]),"code-webcomponent":c(()=>[s[1]||(s[1]=i("div",{class:"chi-tab__description"},[_("Use the "),i("code",null,'subtitle=""'),_(" attribute to display a subtitle next to the title of the application layout.")],-1)),h(u,{lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[h(u,{class:"html",lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{V as _};
