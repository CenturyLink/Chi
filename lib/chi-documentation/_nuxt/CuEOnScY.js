import{_ as I}from"./DJQzEPdv.js";import{e as p,f as A,g as f,o as m,h as u,w as e,a as c,b as i,r as $,c as w,i as N,t as B,F as z,d as h,j as L,k,l as T}from"./CEIPSiTs.js";import{_ as g}from"./onyWiYp2.js";import{_ as b}from"./CS2TcPBX.js";import{_ as x}from"./CAQzZ0uH.js";import{_ as H}from"./DuYLwzm0.js";import{_ as M}from"./BsfKVvmC.js";import{_ as J}from"./BrPn2y03.js";import{_ as W}from"./WxGV3xiO.js";import{_ as R}from"./BvFX0Gaa.js";import{_ as D}from"./DVlY2U0H.js";import{_ as V}from"./Bbl2vpR1.js";import{_ as j}from"./DbhK5PZn.js";import{_ as q}from"./dXn-Sj30.js";import"./DA9BgUq9.js";import"./B52wz4YK.js";import"./DlAUqK2U.js";import"./mn8I5ZFn.js";import"./DtNz156Q.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./NAah3XrW.js";const F={class:"chi-accordion",ref:"accordion-base-example"},O=p({__name:"_base_lumen_centurylink",setup(v){const n=A("accordion-base-example"),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-base">
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
  <\/script>`};return f(()=>{n.value&&chi.accordion(n.value)}),(a,o)=>{const s=g,l=b,d=x;return m(),u(d,{title:"Base",id:"base_lumen_centurylink",tabs:r,padding:"-p--3 -p-lg--6"},{example:e(()=>[c("div",F,o[0]||(o[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 3")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 4")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":e(()=>[i(s,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(l),i(s,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),P={class:"chi-accordion",ref:"example-nested"},G=p({__name:"_nested_lumen_centurylink",setup(v){const n=A("example-nested"),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="nested-accordions">
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
<\/script>`};return f(()=>{n.value&&chi.accordion(n.value)}),(a,o)=>{const s=g,l=b,d=x;return m(),u(d,{title:"Nested",id:"nested_lumen_centurylink",tabs:r,padding:"-p--3 -p-lg--6"},{example:e(()=>[c("div",P,o[0]||(o[0]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Click me to expand Accordion")]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])])])])],-1)]),512)]),"code-webcomponent":e(()=>[i(s,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(l),i(s,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),K={class:"chi-accordion -mt--2",ref:"individual-accordion-items"},Q={class:"chi-accordion__item -expanded"},U={class:"chi-accordion__content"},X={class:"chi-accordion"},Y={class:"chi-accordion__trigger"},Z={class:"chi-accordion__title"},cc={class:"chi-accordion__content"},ic={class:"chi-accordion__text"},oc=p({__name:"_methods_lumen_centurylink",setup(v){const n=A("individual-accordion-items"),r=$([]);let t;const a=l=>t.toggle(r.value[l]);f(()=>{n.value&&(t=chi.accordion(n.value))});const o=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<button class="chi-button" id="toggle-accordion-1">Toggle item 1</button>
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
<\/script>`};return(l,d)=>{const _=g,C=b,y=x;return m(),u(y,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods_lumen_centurylink",tabs:o,padding:"-p--3 -p-lg--6"},{example:e(()=>[c("button",{class:"chi-button",onClick:d[0]||(d[0]=()=>a(1)),id:"toggle-accordion-1"},"Toggle item 1"),c("button",{class:"chi-button -ml--1",onClick:d[1]||(d[1]=()=>a(2)),id:"toggle-accordion-2"},"Toggle item 2"),c("div",K,[c("div",Q,[d[3]||(d[3]=c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")],-1)),c("div",U,[c("div",X,[(m(),w(z,null,N(2,E=>c("div",{class:"chi-accordion__item",ref_for:!0,ref:S=>r.value[E]=S},[c("button",Y,[d[2]||(d[2]=c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1)),c("div",Z,"Accordion item "+B(E),1)]),c("div",cc,[c("p",ic,"Content of Accordion item "+B(E),1)])],512)),64))])])])],512)]),"code-webcomponent":e(()=>[i(_,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(C),i(_,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),nc={class:"chi-accordion -mt--2",ref:"expand-collapse"},ec=p({__name:"_expand_collapse_all_lumen_centurylink",setup(v){const n=A("expand-collapse"),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<button class="chi-button" id="expand-all">Expand all</button>
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
<\/script>`};let a;const o=()=>{a.expandAll()},s=()=>{a.collapseAll()};return f(()=>{n.value&&(a=chi.accordion(n.value))}),(l,d)=>{const _=g,C=b,y=x;return m(),u(y,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all_lumen_centurylink",tabs:r,padding:"-p--3 -p-lg--6"},{example:e(()=>[c("button",{class:"chi-button",onClick:o,id:"expand-all"},"Expand all"),c("button",{class:"chi-button -ml--1",onClick:s,id:"collapse-all"},"Collapse all"),c("div",nc,d[0]||(d[0]=[c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.2")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.2")])])])])])])])],-1)]),512)]),"code-webcomponent":e(()=>[i(_,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(C),i(_,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),tc=p({__name:"_disabled_lumen_centurylink",setup(v){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],r={webcomponent:"",htmlblueprint:`<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`};return(t,a)=>{const o=g,s=b,l=x;return m(),u(l,{title:"Disabled",id:"disabled_lumen_centurylink",tabs:n,padding:"-p--3 -p-lg--6"},{"example-description":e(()=>a[0]||(a[0]=[c("p",{class:"-text"},[h("Make Accordions appear inactive by adding the class "),c("code",null,"-disabled"),h(" or the attribute "),c("code",null,"disabled"),h(" to Accordion trigger")],-1)])),example:e(()=>a[1]||(a[1]=[c("div",{class:"chi-accordion"},null,-1),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger -disabled"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)])),"code-webcomponent":e(()=>[i(o,{class:"html",lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(s),i(o,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),dc={class:"chi-accordion -truncated",ref:"example-truncated"},ac=p({__name:"_truncated_lumen_centurylink",setup(v){const n=A("example-truncated"),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="chi-accordion -truncated" id="example-truncated">
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
<\/script>`};return f(()=>{n.value&&chi.accordion(n.value)}),(a,o)=>{const s=g,l=b,d=x;return m(),u(d,{title:"Truncated",id:"truncated_lumen_centurylink",tabs:r,padding:"-p--3 -p-lg--6"},{"example-description":e(()=>o[0]||(o[0]=[c("p",{class:"-text"},[h("Truncate long accordion titles by adding the class "),c("code",null,"-truncated"),h(" to "),c("code",null,"chi-accordion"),h(".")],-1)])),example:e(()=>[c("div",dc,o[1]||(o[1]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":e(()=>[i(s,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(l),i(s,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),sc=p({__name:"_sizes_lumen_centurylink",setup(v){const n=$([]),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<!-- sm-->
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
<\/script>`};return f(()=>{n.value.forEach(a=>{a&&chi.accordion(a)})}),(a,o)=>{const s=g,l=b,d=x;return m(),u(d,{title:"Sizes",id:"sizes_lumen_centurylink",tabs:r,padding:"-p--3 -p-lg--6"},{"example-description":e(()=>o[0]||(o[0]=[c("p",{class:"-text"},[h("Accordion supports the following sizes: "),c("code",null,"sm"),h(", "),c("code",null,"md"),h(" (default), "),c("code",null,"lg"),h(", and "),c("code",null,"xl"),h(".")],-1)])),example:e(()=>[o[5]||(o[5]=c("p",{class:"-text--bold -pl--2"},"sm",-1)),c("div",{class:"chi-accordion -sm",ref:_=>n.value.push(_)},o[1]||(o[1]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),o[6]||(o[6]=c("p",{class:"-text--bold -pl--2"},"md",-1)),c("div",{class:"chi-accordion -md",ref:_=>n.value.push(_)},o[2]||(o[2]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),o[7]||(o[7]=c("p",{class:"-text--bold -pl--2"},"lg",-1)),c("div",{class:"chi-accordion -lg",ref:_=>n.value.push(_)},o[3]||(o[3]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512),o[8]||(o[8]=c("p",{class:"-text--bold -pl--2"},"xl",-1)),c("div",{class:"chi-accordion -xl",ref:_=>n.value.push(_)},o[4]||(o[4]=[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1)]),512)]),"code-webcomponent":e(()=>[i(s,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":e(()=>[i(l),i(s,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),rc={key:0},lc={key:1},_c=p({__name:"index",setup(v){const n=L();return(r,t)=>(m(),w("div",null,[t[0]||(t[0]=c("h2",null,"Examples",-1)),t[1]||(t[1]=c("p",{class:"-text"},[h("To render accordion, use the class "),c("code",null,"chi-accordion"),h(".")],-1)),["lumen","centurylink"].includes(k(n))?(m(),w("div",rc,[i(O),i(G),i(oc),i(ec),i(tc),i(ac),i(sc)])):T("",!0),["portal"].includes(k(n))?(m(),w("div",lc,[i(H),i(M),i(J),i(W),i(R),i(D),i(V),i(j)])):T("",!0)]))}}),Hc=p({__name:"index",setup(v){return(n,r)=>{const t=I;return m(),u(t,{title:"Accordion",description:"Accordion is used to toggle between hiding and showing content."},{examples:e(()=>[i(_c)]),properties:e(()=>[i(q)]),_:1})}}});export{Hc as default};
