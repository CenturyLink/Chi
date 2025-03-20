import{_ as u}from"./Cr4Krhex.js";import{_ as g}from"./Zvpnuh4B.js";import{e as d,f as p,o as n,w as s,a as e,b as l,d as c,l as _,c as x,k as y,j as f}from"./BnvmtQYM.js";import{_ as w}from"./DD5d-mQ_.js";import{_ as S}from"./DKkADrKB.js";const C=d({__name:"_base",setup(m){const i={webcomponent:`<!-- 0% -->
<div class="chi-label">0%</div>
<chi-progress value="0" max="100"></chi-progress>

<!-- 50% -->
<div class="chi-label">50%</div>
<chi-progress value="50" max="100"></chi-progress>

<!-- 100% -->
<div class="chi-label">100%</div>
<chi-progress value="100" max="100"></chi-progress>`,htmlblueprint:`<!-- 0% -->
<div class="chi-label" id="example-1">0%</div>
<progress aria-labelledby="example-1" value="0" max="100"></progress>

<!-- 50% -->
<div class="chi-label" id="example-2">50%</div>
<progress aria-labelledby="example-2" value="50" max="100"></progress>

<!-- 100% -->
<div class="chi-label" id="example-3">100%</div>
<progress aria-labelledby="example-3" value="100" max="100"></progress>`};return(t,a)=>{const o=u,r=g;return n(),p(r,{title:"Base",id:"base"},{example:s(()=>a[0]||(a[0]=[e("div",{class:"-py--2"},[e("div",{class:"chi-label"},"0%"),e("chi-progress",{value:"0",max:"100"})],-1),e("div",{class:"-py--2"},[e("div",{class:"chi-label"},"50%"),e("chi-progress",{value:"50",max:"100"})],-1),e("div",{class:"-py--2"},[e("div",{class:"chi-label"},"100%"),e("chi-progress",{value:"100",max:"100"})],-1)])),"code-webcomponent":s(()=>[l(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[a[1]||(a[1]=e("div",{class:"chi-tab__description"},[c("To render a progress element, use the "),e("code",null,"progress"),c(" HTML5 tag. Set the value attribute to indicate the current progress.")],-1)),l(o,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),k=d({__name:"_contextual",setup(m){const i=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger" class="chi-button chi-modal__trigger" data-target="#modal">
  Launch center modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <div class="chi-modal__content">
        <div class="chi-label" id="example-2">50%</div>
        <progress aria-labelledby="example-2" value="50" max="100"></progress>
      </div>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger'));<\/script>`};return(a,o)=>{const r=w,b=u,v=S,h=g;return n(),p(h,{title:"Contextual",id:"contextual",tabs:i,padding:"-p--0"},{"example-description":s(()=>[l(r,{id:"progress-in-modals",title:"Progress in Modals",titleSize:"h4"})]),example:s(()=>o[0]||(o[0]=[e("div",{class:"chi-backdrop -position--relative -py--6"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",id:"modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("div",{class:"chi-modal__content"},[e("div",{class:"chi-label",id:"example-2"},"50%"),e("progress",{class:"-info","aria-labelledby":"example-2",value:"50",max:"100"})])])])],-1)])),"code-webcomponent":s(()=>[l(b,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[l(v),l(b,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),T=d({__name:"_semantic_states",setup(m){const i={webcomponent:`<!-- Success -->
<div class="chi-label">Success</div>
<chi-progress value="75" max="100" state="success"></chi-progress>

<!-- Warning -->
<div class="chi-label">Warning</div>
<chi-progress value="50" max="100" state="warning"></chi-progress>

<!-- Danger -->
<div class="chi-label">Danger</div>
<chi-progress value="25" max="100" state="danger"></chi-progress>`,htmlblueprint:`<!-- Success -->
<div class="chi-label" id="example-5">Success</div>
<progress aria-labelledby="example-5" class="-success" value="75" max="100"></progress>

<!-- Warning -->
<div class="chi-label" id="example-6">Warning</div>
<progress aria-labelledby="example-6" class="-warning" value="50" max="100"></progress>

<!-- Danger -->
<div class="chi-label" id="example-7">Danger</div>
<progress aria-labelledby="example-7" class="-danger" value="25" max="100"></progress>`};return(t,a)=>{const o=u,r=g;return n(),p(r,{title:"Semantic States",id:"semantic_states"},{"example-description":s(()=>a[0]||(a[0]=[e("p",{class:"-text"},[c("Use semantic colors to communicate meaning to users. Use green ("),e("code",null,"-success"),c(") for positive, blue (base state) for informative, red ("),e("code",null,"-danger"),c(") for negative, and yellow ("),e("code",null,"-warning"),c(") for needs attention.")],-1)])),example:s(()=>a[1]||(a[1]=[e("div",{class:"-py--2"},[e("div",{class:"chi-label"},"Success"),e("chi-progress",{value:"75",max:"100",state:"success"})],-1),e("div",{class:"-py--2"},[e("div",{class:"chi-label"},"Warning"),e("chi-progress",{value:"50",max:"100",state:"warning"})],-1),e("div",{class:"-py--2"},[e("div",{class:"chi-label"},"Danger"),e("chi-progress",{value:"25",max:"100",state:"danger"})],-1)])),"code-webcomponent":s(()=>[l(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":s(()=>[l(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),D=d({__name:"index",setup(m){const i=_();return(t,a)=>(n(),x("div",null,[a[0]||(a[0]=e("h2",null,"Examples",-1)),l(C),l(k),["lumen","centurylink"].includes(f(i))?(n(),p(T,{key:0})):y("",!0)]))}});export{D as _};
