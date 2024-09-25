import{_ as b}from"./onyWiYp2.js";import{_ as g}from"./CAQzZ0uH.js";import{e as k,j as v,y,v as f,o as a,h as w,w as c,a as e,k as o,c as r,l as d,d as m,b as h}from"./CEIPSiTs.js";import{generateAllExampleFooters as B,generateExampleFooter as P}from"./c7l3qiL8.js";const T={backlink:"Back link",title:"Page title",subtitle:"Page subtitle"},x={slot:"footer"},$=["innerHTML"],E=["innerHTML"],L=["innerHTML"],s="back-link-subtitle-buttons-language-dropdown-button",V=k({__name:"_back_link_subtitle_buttons",setup(M){const t=v(),l=B(s);y(()=>{const n=document.getElementById(s);n&&chi.dropdown(n)});const u=f(()=>{const n=P(t,s);return{webcomponent:`<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- Page content goes here -->
  ${n}
</chi-main>

${t==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${s}'));<\/script>`}`,htmlblueprint:`<div class="chi-main">
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
  ${n}
</div>

${t==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${s}'));<\/script>`}`}});return(n,i)=>{const p=b,_=g;return a(),w(_,{title:"Base with back link, subtitle and buttons",id:"base_with_back_link_subtitle_buttons",padding:"0"},{example:c(()=>[e("chi-main",T,[i[0]||(i[0]=e("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),i[1]||(i[1]=e("div",{slot:"header-actions"},[e("button",{class:"chi-button -primary"},"Primary")],-1)),e("div",x,[["lumen","portal"].includes(o(t))?(a(),r("div",{key:0,innerHTML:o(l).lumen},null,8,$)):d("",!0),o(t)==="centurylink"?(a(),r("div",{key:1,innerHTML:o(l).centurylink},null,8,E)):d("",!0),o(t)==="brightspeed"?(a(),r("div",{key:2,innerHTML:o(l).brightspeed},null,8,L)):d("",!0)])])]),"code-webcomponent":c(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[m("Add buttons in the header of the application layout by defining "),e("code",null,'slot="header-actions"'),m(" on each "),e("code",null,"chi-button"),m(".")],-1)),h(p,{lang:"html",code:u.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":c(()=>[h(p,{class:"html",lang:"html",code:u.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{V as _};
