import{_ as h}from"./onyWiYp2.js";import{_ as v}from"./CS2TcPBX.js";import{_ as b}from"./CAQzZ0uH.js";import{e as f,f as A,r as w,g as T,o as s,h as B,w as n,a as o,c as C,i as E,t as l,F as y,b as e}from"./CEIPSiTs.js";const x={class:"chi-accordion -mt--2",ref:"individual-portal-accordion-items"},k={class:"chi-accordion__item -expanded"},I={class:"chi-accordion__content"},L={class:"chi-accordion"},O={class:"chi-accordion__trigger"},S={class:"chi-accordion__title"},N={class:"chi-accordion__content"},F={class:"chi-accordion__text"},J=f({__name:"_methods",setup(H){const d=A("individual-portal-accordion-items"),_=w([]);T(()=>{d.value&&chi.accordion(d.value)});const m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<button class="chi-button" id="toggle-accordion-portal-1">Toggle item 1</button>
<button class="chi-button" id="toggle-accordion-portal-2">Toggle item 2</button>

<div class="chi-accordion" id="individual-portal-accordion-items">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item" id="invividual-portal-accordion-item-1">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
          </div>
        </div>
        <div class="chi-accordion__item" id="invividual-portal-accordion-item-2">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const individualAccordions = chi.accordion(document.getElementById("individual-portal-accordion-items"));
  const toggleAccordionOne = document.getElementById("toggle-portal-accordion-1");
  const toggleAccordionTwo = document.getElementById("toggle-portal-accordion-2");

  toggleAccordionOne.addEventListener("click", () => {
    individualAccordions.toggle(document.getElementById("invividual-portal-accordion-item-1"));
  });

  toggleAccordionTwo.addEventListener("click", () => {
    individualAccordions.toggle(document.getElementById("invividual-portal-accordion-item-2"));
  });
<\/script>`};return(t,i)=>{const r=h,g=v,u=b;return s(),B(u,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods_portal",tabs:m,padding:"-p--3 p-lg--6"},{example:n(()=>[o("button",{class:"chi-button -outline -primary",onClick:i[0]||(i[0]=(...c)=>t.toggleOne&&t.toggleOne(...c)),id:"toggle-accordion-portal-1"},"Toggle item 1"),o("button",{class:"chi-button -outline -primary -ml--1",onClick:i[1]||(i[1]=(...c)=>t.toggleTwo&&t.toggleTwo(...c)),id:"toggle-accordion-portal-2"},"Toggle item 2"),o("div",x,[o("div",k,[i[3]||(i[3]=o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})],-1)),o("div",I,[o("div",L,[(s(),C(y,null,E(2,c=>o("div",{class:"chi-accordion__item",ref_for:!0,ref:p=>_.value[c]=p},[o("button",O,[i[2]||(i[2]=o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1)),o("div",S,"Accordion item "+l(c),1)]),o("div",N,[o("p",F,"Content of Accordion item "+l(c),1)])],512)),64))])])])],512)]),"code-webcomponent":n(()=>[e(r,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(g),e(r,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}});export{J as _};
