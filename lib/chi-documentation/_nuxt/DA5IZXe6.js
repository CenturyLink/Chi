import{_ as C}from"./DZscRdb4.js";import{_ as $}from"./h9qxsaIy.js";import{_ as E}from"./DAVNcaGE.js";import{e as f,g as v,h as y,f as B,o as A,w as l,b as t,a as c,d as x,r as V,c as I,i as q,j as S,F as R,k as N,t as W,l as F}from"./pInVwq2A.js";function r(n,o=!1,d=3){const e="  ".repeat(d),_=`<div class="chi-accordion__title">${n}</div>`,m='<i class="chi-icon icon-chevron-down" aria-hidden="true"></i>';return o?`${_}
${e}${m}`:`${m}
${e}${_}`}const U=["portal"],L=f({__name:"_base",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("example-base");y(()=>{d.value&&(d.value.accordions=[{title:"Accordion 1",text:"Content goes here"},{title:"Accordion 2",text:"Content goes here",expanded:!0},{title:"Accordion 3",text:"Content goes here"},{title:"Accordion 4",text:"Content goes here"}])});const e={webcomponent:`<chi-accordion id="example-base"${o.portal?" portal":""}></chi-accordion>
  
<script>
  const accordionBase = document.getElementById('example-base');

  accordionBase.accordions = [
    { title: 'Accordion 1', text: 'Content goes here' },
    { title: 'Accordion 2', text: 'Content goes here', expanded: true },
    { title: 'Accordion 3', text: 'Content goes here' },
    { title: 'Accordion 4', text: 'Content goes here' }
  ];
<\/script>`,htmlblueprint:`<div class="chi-accordion" id="example-base">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion 1",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      ${r("Accordion 2",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion 3",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion 4",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionBase = document.getElementById('example-base');

  if (accordionBase) {
    chi.accordion(accordionBase);
  }
<\/script>`};return(_,m)=>{const p=C,s=$,h=E;return A(),B(h,{title:"Base",padding:"-p--3 -p-lg--6",id:"base"},{example:l(()=>[c("chi-accordion",{ref:"example-base",portal:n.portal},null,8,U)]),"code-webcomponent":l(()=>[t(p,{class:"html",lang:"html",code:e.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(s),t(p,{lang:"html",code:e.htmlblueprint},null,8,["code"])]),_:1})}}}),M=["portal"],G=f({__name:"_card",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("example-card");y(()=>{d.value&&(d.value.accordions=[{title:"Accordion 1",text:"Content goes here"},{title:"Accordion 2",text:"Content goes here",expanded:!0},{title:"Accordion 3",text:"Content goes here"},{title:"Accordion 4",text:"Content goes here"}])});const e={webcomponent:`<chi-accordion id="example-card" card${o.portal?" portal":""}></chi-accordion>

<script>
  const accordionCard = document.getElementById('example-card');

  accordionCard.accordions = [
    { title: 'Accordion 1', text: 'Content goes here' },
    { title: 'Accordion 2', text: 'Content goes here', expanded: true },
    { title: 'Accordion 3', text: 'Content goes here' },
    { title: 'Accordion 4', text: 'Content goes here' }
  ];
<\/script>`,htmlblueprint:`<div class="chi-accordion -card" id="example-card">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion 1",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      ${r("Accordion 2",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion 3",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion 4",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionCard = document.getElementById('example-card');

  if (accordionCard) {
    chi.accordion(accordionCard);
  }
<\/script>`};return(_,m)=>{const p=C,s=$,h=E;return A(),B(h,{title:"Card",id:"card",padding:"-p--3 -p-lg--6"},{example:l(()=>[c("chi-accordion",{ref:"example-card",portal:n.portal,card:""},null,8,M)]),"code-webcomponent":l(()=>[t(p,{class:"html",lang:"html",code:e.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(s),t(p,{lang:"html",code:e.htmlblueprint},null,8,["code"])]),_:1})}}}),K=["portal"],P={slot:"main-accordion-content"},Q=["portal"],X={slot:"parent-accordion-1-content"},Y=["portal"],Z={slot:"child-accordion-content"},oo=["portal"],co={slot:"parent-accordion-2-content"},to=["portal"],O=f({__name:"_nested",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("main-accordion"),e=v("parent-accordion"),_=v("child-accordion-1"),m=v("child-accordion-2"),p=v("grandchild-accordion"),s=(i,a)=>{i!=null&&i.value&&(i.value.accordions=a)};y(()=>{s(d,[{title:"Click me to expand Accordion",template:"main-accordion-content"}]),s(e,[{title:"Accordion 1",template:"parent-accordion-1-content"},{title:"Accordion 2",template:"parent-accordion-2-content"}]),s(_,[{title:"Accordion 1.1",template:"child-accordion-content"},{title:"Accordion 1.2",text:"Content of Accordion item 1.2"}]),s(p,[{title:"Accordion 1.1.1",text:"Content of Accordion item 1.1.1"}]),s(m,[{title:"Accordion 2.1",text:"Content of Accordion item 2.1"}])});const h=o.portal?" portal":"",b={webcomponent:`<chi-accordion id="main-accordion"${h}>
  <div slot="main-accordion-content">
    <chi-accordion id="parent-accordion"${h}>
      <div slot="parent-accordion-1-content">
        <p class="chi-accordion__text">Content of Accordion item 1</p>
        <chi-accordion id="child-accordion-1"${h}>
          <div slot="child-accordion-content">
            <p class="chi-accordion__text -mb--2">Content of Accordion item 1.1</p>
            <chi-accordion id="grandchild-accordion"${h}></chi-accordion>
          </div>
        </chi-accordion>
      </div>
      <div slot="parent-accordion-2-content">
        <p class="chi-accordion__text">Content of Accordion item 2</p>
        <chi-accordion id="child-accordion-2"${h}></chi-accordion>
      </div>
    </chi-accordion>
  </div>
</chi-accordion>

<script>
  const mainAccordion = document.getElementById('main-accordion');
  const parentAccordion = document.getElementById('parent-accordion');
  const childAccordionOne = document.getElementById('child-accordion-1');
  const childAccordionTwo = document.getElementById('child-accordion-2');
  const grandchildAccordion = document.getElementById('grandchild-accordion');

  mainAccordion.accordions = [{ title: 'Click me to expand Accordion', template: 'main-accordion-content' }];
  parentAccordion.accordions = [
    { title: 'Accordion 1', template: 'parent-accordion-1-content' },
    { title: 'Accordion 2', template: 'parent-accordion-2-content' },
  ];
  childAccordionOne.accordions = [
    { title: 'Accordion 1.1', template: 'child-accordion-content' },
    { title: 'Accordion 1.2', text: 'Content of Accordion item 1.2' },
  ];
  grandchildAccordion.accordions = [{ title: 'Accordion 1.1.1', text: 'Content of Accordion item 1.1.1' }];
  childAccordionTwo.accordions = [{ title: 'Accordion 2.1', text: 'Content of Accordion item 2.1' }];
<\/script>`,htmlblueprint:`<div class="chi-accordion" id="example-nested">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Click me to expand Accordion",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            ${r("Accordion 1",o.portal,6)}
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion 1.1",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                  <div class="chi-accordion">
                    <div class="chi-accordion__item">
                      <button class="chi-accordion__trigger">
                        ${r("Accordion 1.1.1",o.portal,12)}
                      </button>
                      <div class="chi-accordion__content">
                        <p class="chi-accordion__text">Content of Accordion item 1.1.1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion 1.2",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
           ${r("Accordion 2",o.portal,6)}
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion 2.1",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const accordionNested = document.getElementById('example-nested');

if (accordionNested) {
  chi.accordion(accordionNested);
}
<//script>`};return(i,a)=>{const g=C,u=$,w=E;return A(),B(w,{title:"Nested",id:"nested",padding:"-p--3 -p-lg--6"},{example:l(()=>[c("chi-accordion",{ref:"main-accordion",portal:n.portal},[c("div",P,[c("chi-accordion",{ref:"parent-accordion",portal:n.portal},[c("div",X,[a[1]||(a[1]=c("p",{class:"chi-accordion__text"},"Content of Accordion item 1",-1)),c("chi-accordion",{ref:"child-accordion-1",portal:n.portal},[c("div",Z,[a[0]||(a[0]=c("p",{class:"chi-accordion__text -mb--2"},"Content of Accordion item 1.1",-1)),c("chi-accordion",{ref:"grandchild-accordion",portal:n.portal},null,8,oo)])],8,Y)]),c("div",co,[a[2]||(a[2]=c("p",{class:"chi-accordion__text"},"Content of Accordion item 2",-1)),c("chi-accordion",{ref:"child-accordion-2",portal:n.portal},null,8,to)])],8,Q)])],8,K)]),"code-webcomponent":l(()=>[t(g,{lang:"html",code:b.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(u),t(g,{lang:"html",code:b.htmlblueprint},null,8,["code"])]),_:1})}}}),no=["portal"],io={slot:"parent-accordion-content"},eo=["portal"],D=f({__name:"_methods",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("parent-accordion"),e=v("child-accordion");y(()=>{d.value&&(d.value.accordions=[{title:"Accordion",template:"parent-accordion-content",expanded:!0}]),e.value&&(e.value.accordions=[{title:"Accordion 1",text:"Content of Accordion item 1"},{title:"Accordion 2",text:"Content of Accordion item 2"}])});const _=p=>e.value.toggle(p),m={webcomponent:`<chi-button id="toggle-accordion-1"> Toggle item 1 </chi-button>
<chi-button id="toggle-accordion-2" class="-ml--1"> Toggle item 2 </chi-button>
  
<chi-accordion id="parent-accordion" class="-d--block -mt--2"${o.portal?" portal":""}>
  <div slot="parent-accordion-content">
    <chi-accordion id="child-accordion"${o.portal?" portal":""}></chi-accordion>
  </div>
</chi-accordion>

<script>
  const parentAccordion = document.getElementById('parent-accordion');
  const childAccordion = document.getElementById('child-accordion');
  const toggleAccordionOne = document.getElementById("toggle-accordion-1");
  const toggleAccordionTwo = document.getElementById("toggle-accordion-2");

  parentAccordion.accordions = [{ title: 'Accordion', template: 'parent-accordion-content', expanded: true }];
  childAccordion.accordions = [
    { title: 'Accordion 1', text: 'Content of Accordion item 1' },
    { title: 'Accordion 2', text: 'Content of Accordion item 2' },
   ];

  toggleAccordionOne.addEventListener("click", () => childAccordion.toggle(0));
  toggleAccordionTwo.addEventListener("click", () => childAccordion.toggle(1));
<\/script>`,htmlblueprint:`<button class="chi-button" id="toggle-accordion-1">Toggle item 1</button>
<button class="chi-button" id="toggle-accordion-2">Toggle item 2</button>

<div class="chi-accordion" id="individual-accordion-items">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      ${r("Accordion",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item" id="invividual-accordion-item-1">
          <button class="chi-accordion__trigger">
            ${r("Accordion item 1",o.portal,6)}
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
          </div>
        </div>
        <div class="chi-accordion__item" id="invividual-accordion-item-2">
          <button class="chi-accordion__trigger">
            ${r("Accordion item 2",o.portal,6)}
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
  const individualAccordions = chi.accordion(document.getElementById("individual-accordion-items"));
  const toggleAccordionOne = document.getElementById("toggle-accordion-1");
  const toggleAccordionTwo = document.getElementById("toggle-accordion-2");

  toggleAccordionOne.addEventListener("click", () => {
    individualAccordions.toggle(document.getElementById("invividual-accordion-item-1"));
  });

  toggleAccordionTwo.addEventListener("click", () => {
    individualAccordions.toggle(document.getElementById("invividual-accordion-item-2"));
  });
<\/script>`};return(p,s)=>{const h=C,b=$,i=E;return A(),B(i,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods",padding:"-p--3 p-lg--6"},{example:l(()=>[c("chi-button",{onClick:s[0]||(s[0]=a=>_(0))},"Toggle item 1"),c("chi-button",{class:"-ml--1",onClick:s[1]||(s[1]=a=>_(1))},"Toggle item 2"),c("chi-accordion",{class:"-d--block -mt--2",ref:"parent-accordion",portal:n.portal},[c("div",io,[c("chi-accordion",{ref:"child-accordion",portal:n.portal},null,8,eo)])],8,no)]),"code-webcomponent":l(()=>[t(h,{class:"html",lang:"html",code:m.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(b),t(h,{lang:"html",code:m.htmlblueprint},null,8,["code"])]),_:1})}}}),ao=["portal"],ro={slot:"main-accordion-content"},lo=["portal"],so={slot:"parent-accordion-1-content"},po=["portal"],mo={slot:"parent-accordion-2-content"},ho=["portal"],J=f({__name:"_expand_collapse_all",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("main-accordion"),e=v("parent-accordion"),_=v("child-accordion-1"),m=v("child-accordion-2"),p=[d,e,_,m],s=()=>p.forEach(g=>{var u;return(u=g.value)==null?void 0:u.show()}),h=()=>p.forEach(g=>{var u;return(u=g.value)==null?void 0:u.hide()}),b=(g,u)=>{g!=null&&g.value&&(g.value.accordions=u)};y(()=>{b(d,[{title:"Accordion",template:"main-accordion-content",expanded:!0}]),b(e,[{title:"Accordion item 1",template:"parent-accordion-1-content"},{title:"Accordion item 2",template:"parent-accordion-2-content"}]),b(_,[{title:"Accordion item 1.1",text:"Content of Accordion item 1.1"},{title:"Accordion item 1.2",text:"Content of Accordion item 1.2"}]),b(m,[{title:"Accordion item 2.1",text:"Content of Accordion item 2.1"},{title:"Accordion item 2.2",text:"Content of Accordion item 2.2"}])});const i=o.portal?" portal":"",a={webcomponent:`<chi-button id="expand-all-button">Expand all</chi-button>
<chi-button id="collapse-all-button" class="-ml--1">Collapse all</chi-button>

<chi-accordion id="main-accordion" class="-d--block -mt--2"${i}>
  <div slot="main-accordion-content">
    <chi-accordion id="parent-accordion"${i}>
      <div slot="parent-accordion-1-content">
        <p class="chi-accordion__text">Content of Accordion item 1</p>
        <chi-accordion id="child-accordion-1"${i}></chi-accordion>
      </div>
      <div slot="parent-accordion-2-content">
        <p class="chi-accordion__text">Content of Accordion item 2</p>
        <chi-accordion id="child-accordion-2"${i}></chi-accordion>
      </div>
    </chi-accordion>
  </div>
</chi-accordion>

<script>
  const mainAccordion = document.getElementById('main-accordion');
  const parentAccordion = document.getElementById('parent-accordion');
  const childAccordionOne = document.getElementById('child-accordion-1');
  const childAccordionTwo = document.getElementById('child-accordion-2');
  const expandAllButton = document.getElementById("expand-all-button");
  const collapseAllButton = document.getElementById("collapse-all-button");

  mainAccordion.accordions = [{ title: 'Accordion', template: 'main-accordion-content', expanded: true }];
  parentAccordion.accordions = [
    { title: 'Accordion item 1', template: 'parent-accordion-1-content' },
    { title: 'Accordion item 2', template: 'parent-accordion-2-content' },
  ];
  childAccordionOne.accordions = [
    { title: 'Accordion item 1.1', text: 'Content of Accordion item 1.1' },
    { title: 'Accordion item 1.2', text: 'Content of Accordion item 1.2' },
  ];
  childAccordionTwo.accordions = [
    { title: 'Accordion item 2.1', text: 'Content of Accordion item 2.1' },
    { title: 'Accordion item 2.2', text: 'Content of Accordion item 2.2' }
  ];

  const accordions = [mainAccordion, parentAccordion, childAccordionOne, childAccordionTwo];

  const expandAll = () => accordions.forEach(accordion => accordion.show());
  const collapseAll = () => accordions.forEach(accordion => accordion.hide());

  expandAllButton.addEventListener("click", expandAll);
  collapseAllButton.addEventListener("click", collapseAll);
<\/script>`,htmlblueprint:`<button class="chi-button" id="expand-all">Expand all</button>
<button class="chi-button" id="collapse-all">Collapse all</button>

<div class="chi-accordion" id="expand-collapse">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      ${r("Accordion",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            ${r("Accordion item 1",o.portal,6)}
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion item 1.1",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion item 1.2",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            ${r("Accordion item 2",o.portal,6)}
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion item 2.1",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  ${r("Accordion item 2.2",o.portal,9)}
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const expandCollapseAccordion = chi.accordion(document.getElementById("expand-collapse"));
  const expandAll = document.getElementById("expand-all");
  const collapseAll = document.getElementById("collapse-all");

  expandAll.addEventListener("click", () => expandCollapseAccordion.expandAll());
  collapseAll.addEventListener("click", () => expandCollapseAccordion.collapseAll());
<\/script>`};return(g,u)=>{const w=C,T=$,k=E;return A(),B(k,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all",padding:"-p--3 p-lg--6"},{example:l(()=>[c("chi-button",{onClick:s},"Expand all"),c("chi-button",{class:"-ml--1",onClick:h},"Collapse all"),c("chi-accordion",{class:"-d--block -mt--2",ref:"main-accordion",portal:n.portal},[c("div",ro,[c("chi-accordion",{ref:"parent-accordion",portal:n.portal},[c("div",so,[u[0]||(u[0]=c("p",{class:"chi-accordion__text"},"Content of Accordion item 1",-1)),c("chi-accordion",{ref:"child-accordion-1",portal:n.portal},null,8,po)]),c("div",mo,[u[1]||(u[1]=c("p",{class:"chi-accordion__text"},"Content of Accordion item 2",-1)),c("chi-accordion",{ref:"child-accordion-2",portal:n.portal},null,8,ho)])],8,lo)])],8,ao)]),"code-webcomponent":l(()=>[t(w,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(T),t(w,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),_o=["portal"],j=f({__name:"_disabled",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("example-disabled");y(()=>{d.value&&(d.value.accordions=[{title:"Accordion 1",text:"Content goes here",disabled:!0}])});const e={webcomponent:`<chi-accordion id="example-disabled"${o.portal?" portal":""}></chi-accordion>

<script>
  const accordionDisabled = document.getElementById('example-disabled');

  accordionDisabled.accordions = [{ title: 'Accordion 1', text: 'Content goes here', disabled: true }];
<\/script>`,htmlblueprint:`<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      ${r("Accordion 1",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`};return(_,m)=>{const p=C,s=$,h=E;return A(),B(h,{title:"Disabled",id:"disabled",padding:"-p--3 p-lg--6"},{"example-description":l(()=>m[0]||(m[0]=[c("p",{class:"-text"},[x("Make Accordions appear inactive by adding the property "),c("code",null,"disabled"),x(" in accordions list.")],-1)])),example:l(()=>[c("chi-accordion",{ref:"example-disabled",portal:n.portal},null,8,_o)]),"code-webcomponent":l(()=>[t(p,{class:"html",lang:"html",code:e.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(s),t(p,{lang:"html",code:e.htmlblueprint},null,8,["code"])]),_:1})}}}),uo=["portal"],z=f({__name:"_truncated",props:{portal:{type:Boolean}},setup(n){const o=n,d=v("example-truncated");y(()=>{d.value&&(d.value.accordions=[{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex",text:"Content goes here"}])});const e={webcomponent:`<chi-accordion id="example-truncated" truncated${o.portal?" portal":""}></chi-accordion>

<script>
  const accordionTruncated = document.getElementById('example-truncated');

  accordionTruncated.accordions = [
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex',
      text: 'Content goes here',
    },
  ];
<\/script>`,htmlblueprint:`<div id="example-truncated" class="chi-accordion -truncated">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionTruncated = document.getElementById('example-truncated');

  if (accordionTruncated) {
    chi.accordion(accordionTruncated);
  }
<\/script>`};return(_,m)=>{const p=C,s=$,h=E;return A(),B(h,{title:"Truncated",id:"truncated",padding:"-p--3 -p-lg--6"},{"example-description":l(()=>m[0]||(m[0]=[c("p",{class:"-text"},[x("Truncate long accordion titles by adding property "),c("code",null,"truncated"),x(" to "),c("code",null,"chi-accordion"),x(".")],-1)])),example:l(()=>[c("chi-accordion",{ref:"example-truncated",portal:n.portal,truncated:""},null,8,uo)]),"code-webcomponent":l(()=>[t(p,{class:"html",lang:"html",code:e.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(s),t(p,{lang:"html",code:e.htmlblueprint},null,8,["code"])]),_:1})}}}),go={class:"-text"},vo={key:0},Ao={class:"-text--bold -pl--2"},xo=["size","portal"],H=f({__name:"_sizes",props:{portal:{type:Boolean}},setup(n){const o=n,d=o.portal?["sm","md"]:["sm","md","lg","xl"],e=V([]);y(()=>{e.value.forEach(i=>{i&&(i.accordions=[{title:"Accordion",text:"Content goes here"}])})});function _(i){return`<!-- ${i} -->
<chi-accordion id="example-size-${i}" size="${i}"${o.portal?" portal":""}></chi-accordion>`}function m(i){return`const accordionSize${i.charAt(0).toUpperCase()+i.slice(1)} = document.getElementById('example-size-${i}');`}function p(i){return`accordionSize${i.charAt(0).toUpperCase()+i.slice(1)}.accordions = [{ title: 'Accordion', text: 'Content goes here' }];`}function s(i){return`<!-- ${i}-->
<div class="chi-accordion -${i}" id="example-size-${i}">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      ${r("Accordion",o.portal)}
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`}function h(i){return`chi.accordion(document.getElementById('example-size-${i}'));`}const b={webcomponent:`${d.map(_).join(`

`)}

<script>
  ${d.map(m).join(`
  `)}
 
  ${d.map(p).join(`
  `)}
<\/script>`,htmlblueprint:`${d.map(s).join(`

`)}

<script>
  ${d.map(h).join(`
  `)}
<\/script>`};return(i,a)=>{const g=C,u=$,w=E;return A(),B(w,{title:"Sizes",id:"sizes",padding:"-p--3 -p-lg--6"},{"example-description":l(()=>[c("p",go,[a[1]||(a[1]=x("Accordion supports the following sizes: ")),a[2]||(a[2]=c("code",null,"sm",-1)),a[3]||(a[3]=x(", ")),a[4]||(a[4]=c("code",null,"md",-1)),a[5]||(a[5]=x(" (default)")),n.portal?N("",!0):(A(),I("span",vo,a[0]||(a[0]=[x(", "),c("code",null,"lg",-1),x(", and "),c("code",null,"xl",-1)]))),a[6]||(a[6]=x("."))])]),example:l(()=>[(A(!0),I(R,null,q(S(d),T=>(A(),I(R,{key:T},[c("p",Ao,W(T),1),c("chi-accordion",{size:T,portal:n.portal,ref_for:!0,ref:k=>e.value.push(k)},null,8,xo)],64))),128))]),"code-webcomponent":l(()=>[t(g,{class:"html",lang:"html",code:b.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(u),t(g,{lang:"html",code:b.htmlblueprint},null,8,["code"])]),_:1})}}}),bo={key:0},fo={key:1},Bo=f({__name:"index",setup(n){const o=F();return(d,e)=>(A(),I("div",null,[e[0]||(e[0]=c("h2",null,"Examples",-1)),e[1]||(e[1]=c("p",{class:"-text"},[x("To render accordion, use the class "),c("code",null,"chi-accordion"),x(".")],-1)),["lumen","centurylink"].includes(S(o))?(A(),I("div",bo,[t(L),t(O),t(D),t(J),t(j),t(z),t(H)])):N("",!0),S(o)==="portal"?(A(),I("div",fo,[t(L,{portal:""}),t(G,{portal:""}),t(O,{portal:""}),t(D,{portal:""}),t(J,{portal:""}),t(j,{portal:""}),t(z,{portal:""}),t(H,{portal:""})])):N("",!0)]))}});export{Bo as _};
