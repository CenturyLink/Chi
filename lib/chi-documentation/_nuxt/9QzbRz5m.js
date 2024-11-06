import{e as v,g as C,h as w,o as p,f as u,w as n,a as c,b as o,r as B,c as y,i as $,t as E,F as I,d as h,j as L,k,l as S}from"./CRBsHPO5.js";import{_ as g}from"./Di-ELn2D.js";import{_ as b}from"./D1M_ALV-.js";import{_ as x}from"./Cx7J_iiN.js";const z={class:"chi-accordion",ref:"accordion-base-example"},H=v({__name:"_base_lumen_centurylink",setup(m){const t=C("accordion-base-example"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-base">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 2</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 3</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 4</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  </div>

  <script>
  const accordionBase = document.getElementById('example-base');

  chi.accordion(accordionBase);
  <\/script>`};return w(()=>{t.value&&chi.accordion(t.value)}),(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Base",id:"base_lumen_centurylink",tabs:s,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("div",z,i[0]||(i[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 3")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 4")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),M={class:"chi-accordion",ref:"example-nested"},J=v({__name:"_nested_lumen_centurylink",setup(m){const t=C("example-nested"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="nested-accordions">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Click me to expand Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion 1</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion 1.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                  <div class="chi-accordion">
                    <div class="chi-accordion__item">
                      <button class="chi-accordion__trigger">
                        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                        <div class="chi-accordion__title">Accordion 1.1.1</div>
                      </button>
                      <div class="chi-accordion__content">
                        <p class="chi-accordion__text">Content goes here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion 1.2</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion 2</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion 2.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
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
  const accordionNested = document.getElementById('nested-accordions');

if (accordionNested) {
  chi.accordion(accordionNested);
}
<\/script>`};return w(()=>{t.value&&chi.accordion(t.value)}),(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Nested",id:"nested_lumen_centurylink",tabs:s,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("div",M,i[0]||(i[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Click me to expand Accordion")]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])])])])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"chi-accordion -mt--2",ref:"individual-accordion-items"},R={class:"chi-accordion__item -expanded"},D={class:"chi-accordion__content"},O={class:"chi-accordion"},q={class:"chi-accordion__trigger"},V={class:"chi-accordion__title"},F={class:"chi-accordion__content"},j={class:"chi-accordion__text"},P=v({__name:"_methods_lumen_centurylink",setup(m){const t=C("individual-accordion-items"),s=B([]);let d;const a=l=>d.toggle(s.value[l]);w(()=>{t.value&&(d=chi.accordion(t.value))});const i=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],e={webcomponent:"",htmlblueprint:`<button class="chi-button" id="toggle-accordion-1">Toggle item 1</button>
<button class="chi-button" id="toggle-accordion-2">Toggle item 2</button>

<div class="chi-accordion" id="individual-accordion-items">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item" id="invividual-accordion-item-1">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion item 1</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
          </div>
        </div>
        <div class="chi-accordion__item" id="invividual-accordion-item-2">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion item 2</div>
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
<\/script>`};return(l,r)=>{const _=g,A=b,f=x;return p(),u(f,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods_lumen_centurylink",tabs:i,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("button",{class:"chi-button",onClick:r[0]||(r[0]=()=>a(1)),id:"toggle-accordion-1"},"Toggle item 1"),c("button",{class:"chi-button -ml--1",onClick:r[1]||(r[1]=()=>a(2)),id:"toggle-accordion-2"},"Toggle item 2"),c("div",W,[c("div",R,[r[3]||(r[3]=c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")],-1)),c("div",D,[c("div",O,[(p(),y(I,null,$(2,T=>c("div",{class:"chi-accordion__item",ref_for:!0,ref:N=>s.value[T]=N},[c("button",q,[r[2]||(r[2]=c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1)),c("div",V,"Accordion item "+E(T),1)]),c("div",F,[c("p",j,"Content of Accordion item "+E(T),1)])],512)),64))])])])],512)]),"code-webcomponent":n(()=>[o(_,{class:"html",lang:"html",code:e.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(A),o(_,{lang:"html",code:e.htmlblueprint},null,8,["code"])]),_:1})}}}),G={class:"chi-accordion -mt--2",ref:"expand-collapse"},K=v({__name:"_expand_collapse_all_lumen_centurylink",setup(m){const t=C("expand-collapse"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<button class="chi-button" id="expand-all">Expand all</button>
<button class="chi-button" id="collapse-all">Collapse all</button>

<div class="chi-accordion" id="expand-collapse">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion item 1</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 1.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 1.2</div>
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
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion item 2</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 2.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion item 2.2</div>
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

  expandAll.addEventListener("click", () => {
    expandCollapseAccordion.expandAll();
  });

  collapseAll.addEventListener("click", () => {
    expandCollapseAccordion.collapseAll();
  });
<\/script>`};let a;const i=()=>{a.expandAll()},e=()=>{a.collapseAll()};return w(()=>{t.value&&(a=chi.accordion(t.value))}),(l,r)=>{const _=g,A=b,f=x;return p(),u(f,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all_lumen_centurylink",tabs:s,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("button",{class:"chi-button",onClick:i,id:"expand-all"},"Expand all"),c("button",{class:"chi-button -ml--1",onClick:e,id:"collapse-all"},"Collapse all"),c("div",G,r[0]||(r[0]=[c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.2")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.2")])])])])])])])],-1)]),512)]),"code-webcomponent":n(()=>[o(_,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(A),o(_,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Q=v({__name:"_disabled_lumen_centurylink",setup(m){const t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`};return(d,a)=>{const i=g,e=b,l=x;return p(),u(l,{title:"Disabled",id:"disabled_lumen_centurylink",tabs:t,padding:"-p--3 -p-lg--6"},{"example-description":n(()=>a[0]||(a[0]=[c("p",{class:"-text"},[h("Make Accordions appear inactive by adding the class "),c("code",null,"-disabled"),h(" or the attribute "),c("code",null,"disabled"),h(" to Accordion trigger")],-1)])),example:n(()=>a[1]||(a[1]=[c("div",{class:"chi-accordion"},null,-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger -disabled"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)])),"code-webcomponent":n(()=>[o(i,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(e),o(i,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"chi-accordion -truncated",ref:"example-truncated"},X=v({__name:"_truncated_lumen_centurylink",setup(m){const t=C("example-truncated"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<div class="chi-accordion -truncated" id="example-truncated">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex</div>
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
<\/script>`};return w(()=>{t.value&&chi.accordion(t.value)}),(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Truncated",id:"truncated_lumen_centurylink",tabs:s,padding:"-p--3 -p-lg--6"},{"example-description":n(()=>i[0]||(i[0]=[c("p",{class:"-text"},[h("Truncate long accordion titles by adding the class "),c("code",null,"-truncated"),h(" to "),c("code",null,"chi-accordion"),h(".")],-1)])),example:n(()=>[c("div",U,i[1]||(i[1]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Y=v({__name:"_sizes_lumen_centurylink",setup(m){const t=B([]),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<!-- sm-->
<div class="chi-accordion -sm" id="example-size-sm">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- md-->
<div class="chi-accordion -md" id="example-size-md">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- lg-->
<div class="chi-accordion -lg" id="example-size-lg">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- xl-->
<div class="chi-accordion -xl" id="example-size-xl">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>


<script>
if (document.getElementById('example-size-sm')) {
  chi.accordion(document.getElementById('example-size-sm'));
}
if (document.getElementById('example-size-md')) {
  chi.accordion(document.getElementById('example-size-md'));
}
if (document.getElementById('example-size-lg')) {
  chi.accordion(document.getElementById('example-size-lg'));
}
if (document.getElementById('example-size-xl')) {
  chi.accordion(document.getElementById('example-size-xl'));
}
<\/script>`};return w(()=>{t.value.forEach(a=>{a&&chi.accordion(a)})}),(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Sizes",id:"sizes_lumen_centurylink",tabs:s,padding:"-p--3 -p-lg--6"},{"example-description":n(()=>i[0]||(i[0]=[c("p",{class:"-text"},[h("Accordion supports the following sizes: "),c("code",null,"sm"),h(", "),c("code",null,"md"),h(" (default), "),c("code",null,"lg"),h(", and "),c("code",null,"xl"),h(".")],-1)])),example:n(()=>[i[5]||(i[5]=c("p",{class:"-text--bold -pl--2"},"sm",-1)),c("div",{class:"chi-accordion -sm",ref:_=>t.value.push(_)},i[1]||(i[1]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),i[6]||(i[6]=c("p",{class:"-text--bold -pl--2"},"md",-1)),c("div",{class:"chi-accordion -md",ref:_=>t.value.push(_)},i[2]||(i[2]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),i[7]||(i[7]=c("p",{class:"-text--bold -pl--2"},"lg",-1)),c("div",{class:"chi-accordion -lg",ref:_=>t.value.push(_)},i[3]||(i[3]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),i[8]||(i[8]=c("p",{class:"-text--bold -pl--2"},"xl",-1)),c("div",{class:"chi-accordion -xl",ref:_=>t.value.push(_)},i[4]||(i[4]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Z={class:"chi-accordion",ref:"example-portal-base"},cc=v({__name:"_base",setup(m){const t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-portal-base">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 1</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 2</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 3</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 4</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  </div>

  <script>
  const accordionBase = document.getElementById('example-portal-base');

if (accordionBase) {
  chi.accordion(accordionBase);
}
  <//script>`},d=C("example-portal-base");return w(()=>{d.value&&chi.accordion(d.value)}),(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Base",id:"base_portal",tabs:t,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("div",Z,i[0]||(i[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 3"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 4"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),ic={class:"chi-accordion -card",ref:"example-portal-card"},oc=v({__name:"_card",setup(m){const t=C("example-portal-card"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<div class="chi-accordion -card" id="example-portal-card">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 2</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 3</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 4</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionCard = document.getElementById('example-portal-card');

if (accordionCard) {
  chi.accordion(accordionCard);
}
<\/script>`};return w(()=>{t.value&&chi.accordion(t.value)}),(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Card",id:"card_portal",tabs:s,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("div",ic,i[0]||(i[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 3")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 4")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),nc={class:"chi-accordion",ref:"example-portal-nested"},tc=v({__name:"_nested",setup(m){const t=C("example-portal-nested");w(()=>{t.value&&chi.accordion(t.value)});const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-portal-nested">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Click me to expand Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 1.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                  <div class="chi-accordion">
                    <div class="chi-accordion__item">
                      <button class="chi-accordion__trigger">
                        <div class="chi-accordion__title">Accordion 1.1.1</div>
                        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                      </button>
                      <div class="chi-accordion__content">
                        <p class="chi-accordion__text">Content goes here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 1.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 2.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
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
  const accordionNested = document.getElementById('example-portal-nested');

if (accordionNested) {
  chi.accordion(accordionNested);
}
<//script>`};return(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Nested",id:"nested_portal",tabs:s,padding:"-p--3 -p-lg--6"},{example:n(()=>[c("div",nc,i[0]||(i[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Click me to expand Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1.1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 1.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion 2.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])])])])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),ec={class:"chi-accordion -mt--2",ref:"individual-portal-accordion-items"},dc={class:"chi-accordion__item -expanded"},ac={class:"chi-accordion__content"},sc={class:"chi-accordion"},rc={class:"chi-accordion__trigger"},lc={class:"chi-accordion__title"},_c={class:"chi-accordion__content"},hc={class:"chi-accordion__text"},pc=v({__name:"_methods",setup(m){const t=C("individual-portal-accordion-items"),s=B([]);w(()=>{t.value&&chi.accordion(t.value)});const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<button class="chi-button" id="toggle-accordion-portal-1">Toggle item 1</button>
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
<\/script>`};return(i,e)=>{const l=g,r=b,_=x;return p(),u(_,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods_portal",tabs:d,padding:"-p--3 p-lg--6"},{example:n(()=>[c("button",{class:"chi-button -outline -primary",onClick:e[0]||(e[0]=(...A)=>i.toggleOne&&i.toggleOne(...A)),id:"toggle-accordion-portal-1"},"Toggle item 1"),c("button",{class:"chi-button -outline -primary -ml--1",onClick:e[1]||(e[1]=(...A)=>i.toggleTwo&&i.toggleTwo(...A)),id:"toggle-accordion-portal-2"},"Toggle item 2"),c("div",ec,[c("div",dc,[e[3]||(e[3]=c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})],-1)),c("div",ac,[c("div",sc,[(p(),y(I,null,$(2,A=>c("div",{class:"chi-accordion__item",ref_for:!0,ref:f=>s.value[A]=f},[c("button",rc,[e[2]||(e[2]=c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1)),c("div",lc,"Accordion item "+E(A),1)]),c("div",_c,[c("p",hc,"Content of Accordion item "+E(A),1)])],512)),64))])])])],512)]),"code-webcomponent":n(()=>[o(l,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(r),o(l,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),vc={class:"chi-accordion -mt--2",ref:"expand-collapse-portal"},mc=v({__name:"_expand_collapse_all",setup(m){const t=C("expand-collapse-portal"),s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<button class="chi-button" id="expand-all-portal">Expand all</button>
<button class="chi-button" id="collapse-all-portal">Collapse all</button>

<div class="chi-accordion" id="expand-collapse-portal">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 1.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 1.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
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
            <div class="chi-accordion__title">Accordion item 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 2.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 2.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
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
  const expandCollapseAccordion = chi.accordion(document.getElementById("expand-collapse-portal"));
  const expandAll = document.getElementById("expand-all-portal");
  const collapseAll = document.getElementById("collapse-all-portal");

  expandAll.addEventListener("click", () => {
    expandCollapseAccordion.expandAll();
  });

  collapseAll.addEventListener("click", () => {
    expandCollapseAccordion.collapseAll();
  });
<\/script>`};let a;const i=()=>{a.expandAll()},e=()=>{a.collapseAll()};return w(()=>{t.value&&(a=chi.accordion(t.value))}),(l,r)=>{const _=g,A=b,f=x;return p(),u(f,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all_portal",tabs:s,padding:"-p--3 p-lg--6"},{example:n(()=>[c("button",{class:"chi-button -primary -outline",onClick:i,id:"expand-all-portal"},"Expand all"),c("button",{class:"chi-button -primary -outline -ml--1",onClick:e,id:"collapse-all-portal"},"Collapse all"),c("div",vc,r[0]||(r[0]=[c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 1.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.2")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2.1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion item 2.2"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.2")])])])])])])])],-1)]),512)]),"code-webcomponent":n(()=>[o(_,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(A),o(_,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),uc=v({__name:"_disabled",setup(m){const t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <div class="chi-accordion__title">Accordion 1</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`};return(d,a)=>{const i=g,e=b,l=x;return p(),u(l,{title:"Disabled",id:"disabled_portal",tabs:t,padding:"-p--3 p-lg--6"},{"example-description":n(()=>a[0]||(a[0]=[c("p",{class:"-text"},[h("Make Accordions appear inactive by adding the class "),c("code",null,"-disabled"),h(" or the attribute "),c("code",null,"disabled"),h(" to Accordion trigger")],-1)])),example:n(()=>a[1]||(a[1]=[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger -disabled"},[c("div",{class:"chi-accordion__title"},"Accordion 1"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1)])),"code-webcomponent":n(()=>[o(i,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(e),o(i,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),gc={class:"chi-accordion -truncated",ref:"example-portal-truncated"},bc=v({__name:"_truncated",setup(m){const t=C("example-truncated");w(()=>{t.value&&chi.accordion(t.value)});const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<div class="chi-accordion -truncated">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`};return(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Truncated",id:"truncated_portal",tabs:s,padding:"-p--3 -p-lg--6"},{"example-description":n(()=>i[0]||(i[0]=[c("p",{class:"-text"},[h("Truncate long accordion titles by adding the class "),c("code",null,"-truncated"),h(" to "),c("code",null,"chi-accordion"),h(".")],-1)])),example:n(()=>[c("div",gc,i[1]||(i[1]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),xc=v({__name:"_sizes",setup(m){const t=B([]);w(()=>{t.value.forEach(a=>{a&&chi.accordion(a)})});const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],d={webcomponent:"",htmlblueprint:`<!-- sm-->
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
<\/script>`};return(a,i)=>{const e=g,l=b,r=x;return p(),u(r,{title:"Sizes",id:"sizes_portal",tabs:s,padding:"-p--3 -p-lg--6"},{"example-description":n(()=>i[0]||(i[0]=[c("p",{class:"-text"},[h("Accordion supports the following sizes: "),c("code",null,"sm"),h(", "),c("code",null,"md"),h(" (default).")],-1)])),example:n(()=>[i[3]||(i[3]=c("p",{class:"-text--bold -pl--2"},"sm",-1)),c("div",{class:"chi-accordion -sm",ref:_=>t.value.push(_)},i[1]||(i[1]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),i[4]||(i[4]=c("p",{class:"-text--bold -pl--2"},"md",-1)),c("div",{class:"chi-accordion -md",ref:_=>t.value.push(_)},i[2]||(i[2]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("div",{class:"chi-accordion__title"},"Accordion"),c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":n(()=>[o(e,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(l),o(e,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),Ac={key:0},wc={key:1},Bc=v({__name:"index",setup(m){const t=L();return(s,d)=>(p(),y("div",null,[d[0]||(d[0]=c("h2",null,"Examples",-1)),d[1]||(d[1]=c("p",{class:"-text"},[h("To render accordion, use the class "),c("code",null,"chi-accordion"),h(".")],-1)),["lumen","centurylink"].includes(k(t))?(p(),y("div",Ac,[o(H),o(J),o(P),o(K),o(Q),o(X),o(Y)])):S("",!0),["portal"].includes(k(t))?(p(),y("div",wc,[o(cc),o(oc),o(tc),o(pc),o(mc),o(uc),o(bc),o(xc)])):S("",!0)]))}});export{Bc as _};
