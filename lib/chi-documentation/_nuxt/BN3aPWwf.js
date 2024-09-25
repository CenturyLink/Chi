import{_ as u}from"./onyWiYp2.js";import{_ as g}from"./CAQzZ0uH.js";import{e as v,j as f,y as b,v as T,o as c,h as y,w as s,a as n,k as i,c as r,l as d,b as _}from"./CEIPSiTs.js";import{generateAllExampleFooters as w,generateExampleFooter as k}from"./c7l3qiL8.js";const x={title:"Page Title"},B={slot:"footer"},$=["innerHTML"],E=["innerHTML"],L=["innerHTML"],o="alert-language-dropdown-button",N=v({__name:"_alert",setup(M){const e=f(),a=w(o);b(()=>{const t=document.getElementById(o);t&&chi.dropdown(t)});const m=T(()=>{const t=k(e,o);return{webcomponent:`<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${t}
</chi-main>

${e==="centurylink"?"":`<script>chi.dropdown(document.getElementById(${o}));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${t}
</div>

${e==="centurylink"?"":`<script>chi.dropdown(document.getElementById(${o}));<\/script>`}`}});return(t,l)=>{const h=u,p=g;return c(),y(p,{title:"Base with alert",id:"base_with_alert",padding:"0"},{example:s(()=>[n("chi-main",x,[l[0]||(l[0]=n("div",{slot:"page-alert"},[n("chi-alert",{color:"info",icon:"circle-info",closable:""},"This is a page level info alert")],-1)),l[1]||(l[1]=n("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),n("div",B,[["lumen","portal"].includes(i(e))?(c(),r("div",{key:0,innerHTML:i(a).lumen},null,8,$)):d("",!0),i(e)==="centurylink"?(c(),r("div",{key:1,innerHTML:i(a).centurylink},null,8,E)):d("",!0),i(e)==="brightspeed"?(c(),r("div",{key:2,innerHTML:i(a).brightspeed},null,8,L)):d("",!0)])])]),"code-webcomponent":s(()=>[_(h,{class:"html",lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[_(h,{class:"html",lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{N as _};
