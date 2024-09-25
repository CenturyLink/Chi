import{_ as g}from"./onyWiYp2.js";import{_ as f}from"./CAQzZ0uH.js";import{e as b,f as x,j as y,y as w,v as k,o as l,h as E,w as r,a as e,k as n,c as s,l as p,b as m}from"./CEIPSiTs.js";import{generateAllExampleFooters as P,generateExampleFooter as T}from"./c7l3qiL8.js";const B={title:"Page title"},H={slot:"help-icon"},L={ref:"popover",position:"right-start",variant:"text",arrow:"",reference:"#help-icon__help-button"},$={slot:"footer"},M=["innerHTML"],C=["innerHTML"],q=["innerHTML"],i="help-icon-language-dropdown-button",z=b({__name:"_help_icon",setup(I){const _=x("popover"),t=y(),a=P(i);w(()=>{const o=document.getElementById(i);o&&chi.dropdown(o)});const u=()=>{_.value.toggle()},d=k(()=>{const o=T(t,i);return{webcomponent:`<chi-main title="Page title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <!-- Page content goes here -->
  ${o}
</chi-main>

<script>${t==="centurylink"?"":`
  chi.dropdown(document.getElementById('${i}'));`}
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
  ${o}
</div>

<script>${t==="centurylink"?"":`
  chi.dropdown(document.getElementById('${i}'));`}
  chi.popover(document.getElementById('example__help-button'));
<\/script>`}});return(o,c)=>{const h=g,v=f;return l(),E(v,{title:"Base with help icon",id:"base_with_help_icon",padding:"0"},{example:r(()=>[e("chi-main",B,[e("div",H,[e("chi-button",{id:"help-icon__help-button",type:"icon",size:"sm",variant:"flat","alternative-text":"Help",onClick:u},c[0]||(c[0]=[e("chi-icon",{icon:"circle-question-outline"},null,-1)])),e("chi-popover",L,"Popover content.",512)]),c[1]||(c[1]=e("div",{class:"-d--flex -align-items--center -justify-content--center",style:{height:"10rem"}},"Page content goes here",-1)),e("div",$,[["lumen","portal"].includes(n(t))?(l(),s("div",{key:0,innerHTML:n(a).lumen},null,8,M)):p("",!0),n(t)==="centurylink"?(l(),s("div",{key:1,innerHTML:n(a).centurylink},null,8,C)):p("",!0),n(t)==="brightspeed"?(l(),s("div",{key:2,innerHTML:n(a).brightspeed},null,8,q)):p("",!0)])])]),"code-webcomponent":r(()=>[m(h,{class:"html",lang:"html",code:d.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[m(h,{class:"html",lang:"html",code:d.value.htmlblueprint},null,8,["code"])]),_:1})}}});export{z as _};
