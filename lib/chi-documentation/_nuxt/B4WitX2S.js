import{_ as b}from"./onyWiYp2.js";import{_ as y}from"./CAQzZ0uH.js";import{e as f,j as k,v as w,y as T,o as a,h as x,w as l,a as o,k as n,c as d,l as r,d as u,b as _}from"./CEIPSiTs.js";import{generateAllExampleFooters as B,generateExampleFooter as $}from"./c7l3qiL8.js";const E={title:"Page title"},H={slot:"footer"},L=["innerHTML"],M=["innerHTML"],P=["innerHTML"],i="base-language-dropdown-button",j=f({__name:"_base",setup(C){const t=k(),c=B(i),m=w(()=>{const e=$(t,i);return{webcomponent:h(e),htmlblueprint:g(e)}});T(()=>{const e=document.getElementById(i);e&&chi.dropdown(e)});const h=e=>`<chi-main title="Page title">
  <!-- Page content goes here -->
  ${e}
</chi-main>

${t==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${i}'));<\/script>`}`,g=e=>`<div class="chi-main">
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
  ${e}
</div>

${t==="centurylink"?"":`<script>chi.dropdown(document.getElementById('${i}'));<\/script>`}`;return(e,s)=>{const p=b,v=y;return a(),x(v,{title:"Base",id:"base",padding:"0"},{example:l(()=>[o("chi-main",E,[s[0]||(s[0]=o("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),o("div",H,[["lumen","portal"].includes(n(t))?(a(),d("div",{key:0,innerHTML:n(c).lumen},null,8,L)):r("",!0),n(t)==="centurylink"?(a(),d("div",{key:1,innerHTML:n(c).centurylink},null,8,M)):r("",!0),n(t)==="brightspeed"?(a(),d("div",{key:2,innerHTML:n(c).brightspeed},null,8,P)):r("",!0)])])]),"code-webcomponent":l(()=>[s[1]||(s[1]=o("div",{class:"chi-tab__description"},[u("Use the "),o("code",null,'title=""'),u(" attribute to display a title above the application layout.")],-1)),_(p,{lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[_(p,{class:"html",lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{j as _};
