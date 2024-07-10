var v=Object.defineProperty;var u=(c,i,t)=>i in c?v(c,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[i]=t;var r=(c,i,t)=>u(c,typeof i!="symbol"?i+"":i,t);import{V as g,N as b}from"./uJTUijt2.js";import{_ as f}from"./D8GK0F__.js";import{_ as A}from"./BLbnEGma.js";import{_ as w}from"./DKu8Jd2y.js";import{o as T,f as x,w as l,a as o,b as _}from"./B5CYXVwa.js";import{_ as C}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var B=Object.defineProperty,y=Object.getOwnPropertyDescriptor,E=(c,i,t,d)=>{for(var n=d>1?void 0:d?y(i,t):i,a=c.length-1,e;a>=0;a--)(e=c[a])&&(n=(d?e(i,t,n):e(n))||n);return d&&n&&B(i,t,n),n};let m=class extends g{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<button class="chi-button" id="toggle-accordion-portal-1">Toggle item 1</button>
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
<\/script>`});r(this,"individualAccordions")}toggleOne(){this.individualAccordions.toggle(this.$refs["invividual-portal-accordion-item-1"])}toggleTwo(){this.individualAccordions.toggle(this.$refs["invividual-portal-accordion-item-2"])}mounted(){const t=document.getElementById("individual-portal-accordion-items");this.individualAccordions=chi.accordion(t)}};m=E([b({})],m);const O={class:"chi-accordion -mt--2",id:"individual-portal-accordion-items"},$={class:"chi-accordion__item -expanded"},P=o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})],-1),I={class:"chi-accordion__content"},M={class:"chi-accordion"},N={class:"chi-accordion__item",ref:"invividual-portal-accordion-item-1"},S=o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion item 1"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})],-1),V=o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Content of Accordion item 1")],-1),L=[S,V],j={class:"chi-accordion__item",ref:"invividual-portal-accordion-item-2"},D=o("button",{class:"chi-accordion__trigger"},[o("div",{class:"chi-accordion__title"},"Accordion item 2"),o("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})],-1),H=o("div",{class:"chi-accordion__content"},[o("p",{class:"chi-accordion__text"},"Content of Accordion item 2")],-1),k=[D,H];function J(c,i,t,d,n,a){const e=f,h=A,p=w;return T(),x(p,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods_portal",tabs:c.exampleTabs,padding:"-p--3 p-lg--6"},{example:l(()=>[o("button",{class:"chi-button -outline -primary",onClick:i[0]||(i[0]=(...s)=>c.toggleOne&&c.toggleOne(...s)),id:"toggle-accordion-portal-1"},"Toggle item 1"),o("button",{class:"chi-button -outline -primary -ml--1",onClick:i[1]||(i[1]=(...s)=>c.toggleTwo&&c.toggleTwo(...s)),id:"toggle-accordion-portal-2"},"Toggle item 2"),o("div",O,[o("div",$,[P,o("div",I,[o("div",M,[o("div",N,L,512),o("div",j,k,512)])])])])]),"code-webcomponent":l(()=>[_(e,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[_(h),_(e,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const oo=C(m,[["render",J]]);export{oo as default};
