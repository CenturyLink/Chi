import{_}from"./onyWiYp2.js";import{_ as h}from"./CS2TcPBX.js";import{_ as u}from"./CAQzZ0uH.js";import{e as v,r as b,g,o as x,h as f,w as i,a as o,d as s,b as a}from"./CEIPSiTs.js";const y=v({__name:"_sizes",setup(w){const e=b([]);g(()=>{e.value.forEach(t=>{t&&chi.accordion(t)})});const r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<!-- sm-->
<div class="chi-accordion -sm" id="portal-example-size-sm">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- md-->
<div class="chi-accordion -md" id="portal-example-size-md">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>


<script>
if (document.getElementById('portal-example-size-sm')) {
  chi.accordion(document.getElementById('portal-example-size-sm'));
}
if (document.getElementById('portal-example-size-md')) {
  chi.accordion(document.getElementById('portal-example-size-md'));
}
<\/script>`};return(t,c)=>{const l=_,m=h,p=u;return x(),f(p,{title:"Sizes",id:"sizes_portal",tabs:r,padding:"-p--3 -p-lg--6"},{"example-description":i(()=>c[0]||(c[0]=[o("p",{class:"-text"},[s("Accordion supports the following sizes: "),o("code",null,"sm"),s(", "),o("code",null,"md"),s(" (default).")],-1)])),example:i(()=>[c[3]||(c[3]=o("p",{class:"-text--bold -pl--2"},"sm",-1)),o("div",{class:"chi-accordion -sm",ref:n=>e.value.push(n)},c[1]||(c[1]=[o("div",{class:"chi-accordion__item"},[o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),c[4]||(c[4]=o("p",{class:"-text--bold -pl--2"},"md",-1)),o("div",{class:"chi-accordion -md",ref:n=>e.value.push(n)},c[2]||(c[2]=[o("div",{class:"chi-accordion__item"},[o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":i(()=>[a(l,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(m),a(l,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}});export{y as _};
