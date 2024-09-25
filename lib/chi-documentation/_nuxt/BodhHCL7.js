import{_ as k}from"./onyWiYp2.js";import{_ as g}from"./CAQzZ0uH.js";import{e as v,j as b,y as f,v as y,o as a,h as w,w as s,a as i,k as n,c as d,l as r,d as h,b as _}from"./CEIPSiTs.js";import{generateAllExampleFooters as x,generateExampleFooter as B}from"./c7l3qiL8.js";const T={backlink:"Back link",title:"Page title"},$={slot:"footer"},E=["innerHTML"],L=["innerHTML"],M=["innerHTML"],o="back-link-language-dropdown-button",V=v({__name:"_back_link",setup(H){const e=b(),l=x(o);f(()=>{const t=document.getElementById(o);t&&chi.dropdown(t)});const m=y(()=>{const t=B(e,o);return{webcomponent:`<chi-main backlink="Back link" title="Page title">
  <!-- Page content goes here -->
  ${t}
</chi-main>

${e==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${o}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${t}
</div>

${e==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${o}'));<\/script>`}`}});return(t,c)=>{const p=k,u=g;return a(),w(u,{title:"Base with back link",id:"base_with_back_link",padding:"0"},{example:s(()=>[i("chi-main",T,[c[0]||(c[0]=i("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i("div",$,[["lumen","portal"].includes(n(e))?(a(),d("div",{key:0,innerHTML:n(l).lumen},null,8,E)):r("",!0),n(e)==="centurylink"?(a(),d("div",{key:1,innerHTML:n(l).centurylink},null,8,L)):r("",!0),n(e)==="brightspeed"?(a(),d("div",{key:2,innerHTML:n(l).brightspeed},null,8,M)):r("",!0)])])]),"code-webcomponent":s(()=>[c[1]||(c[1]=i("div",{class:"chi-tab__description"},[h("Use the "),i("code",null,'backlink=""'),h(" attribute to display a link above the title of the application layout.")],-1)),_(p,{lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[_(p,{class:"html",lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{V as _};
