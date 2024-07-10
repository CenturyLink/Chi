var G=Object.defineProperty;var K=(i,n,t)=>n in i?G(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var p=(i,n,t)=>K(i,typeof n!="symbol"?n+"":n,t);import{V as b,N as g}from"./uJTUijt2.js";import{o as v,f as C,w as r,b as a,a as c,d as m,g as Q,r as l,c as f,h as z}from"./B5CYXVwa.js";import{_ as A}from"./D8GK0F__.js";import{_ as w}from"./BLbnEGma.js";import{_ as $}from"./DKu8Jd2y.js";import{_ as x}from"./DlAUqK2U.js";import R from"./CArBrlpY.js";import U from"./DK-nlAOc.js";import X from"./BLT2uSrI.js";import Y from"./B2xLciWT.js";import Z from"./D4JbJ1GY.js";import cc from"./CDHHINUF.js";import ic from"./JTJQi2uG.js";import oc from"./QFbvKFP3.js";import nc from"./-Sc68byL.js";import ec from"./PDCbhCdt.js";import{s as tc}from"./2EwpEKcw.js";import{_ as dc}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var sc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,rc=(i,n,t,d)=>{for(var o=d>1?void 0:d?ac(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&sc(n,t,o),o};let L=class extends b{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="example-base">
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
  <\/script>`})}mounted(){const t=document.getElementById("example-base");chi.accordion(t)}};L=rc([g({})],L);const lc=c("div",{class:"chi-accordion",id:"example-base"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 3")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 4")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function _c(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Base",id:"base_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{example:r(()=>[lc]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const hc=x(L,[["render",_c]]);var pc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,uc=(i,n,t,d)=>{for(var o=d>1?void 0:d?mc(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&pc(n,t,o),o};let y=class extends b{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-accordion" id="nested-accordions">
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

  chi.accordion(accordionNested);
<\/script>`})}mounted(){const t=document.getElementById("example-nested");chi.accordion(t)}};y=uc([g({})],y);const vc=c("div",{class:"chi-accordion",id:"example-nested"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Click me to expand Accordion")]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 2.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])])])])])])])],-1);function bc(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Nested",id:"nested_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{example:r(()=>[vc]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const gc=x(y,[["render",bc]]);var xc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,Ac=(i,n,t,d)=>{for(var o=d>1?void 0:d?Cc(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&xc(n,t,o),o};let P=class extends b{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<button class="chi-button" id="toggle-accordion-1">Toggle item 1</button>
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
<\/script>`});p(this,"individualAccordions")}toggleOne(){this.individualAccordions.toggle(this.$refs["invividual-accordion-item-1"])}toggleTwo(){this.individualAccordions.toggle(this.$refs["invividual-accordion-item-2"])}mounted(){const t=document.getElementById("individual-accordion-items");this.individualAccordions=chi.accordion(t)}};P=Ac([g({})],P);const wc={class:"chi-accordion -mt--2",id:"individual-accordion-items"},$c={class:"chi-accordion__item -expanded"},fc=c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")],-1),Lc={class:"chi-accordion__content"},yc={class:"chi-accordion"},Pc={class:"chi-accordion__item",ref:"invividual-accordion-item-1"},Ec=c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1")],-1),Tc=c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1")],-1),Bc=[Ec,Tc],Oc={class:"chi-accordion__item",ref:"invividual-accordion-item-2"},Sc=c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2")],-1),Dc=c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2")],-1),zc=[Sc,Dc];function Nc(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Show / Hide / Toggle of individual items of Accordion",id:"methods_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{example:r(()=>[c("button",{class:"chi-button",onClick:n[0]||(n[0]=(...u)=>i.toggleOne&&i.toggleOne(...u)),id:"toggle-accordion-1"},"Toggle item 1"),c("button",{class:"chi-button -ml--1",onClick:n[1]||(n[1]=(...u)=>i.toggleTwo&&i.toggleTwo(...u)),id:"toggle-accordion-2"},"Toggle item 2"),c("div",wc,[c("div",$c,[fc,c("div",Lc,[c("div",yc,[c("div",Pc,Bc,512),c("div",Oc,zc,512)])])])])]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ic=x(P,[["render",Nc]]);var jc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,kc=(i,n,t,d)=>{for(var o=d>1?void 0:d?Mc(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&jc(n,t,o),o};let E=class extends b{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<button class="chi-button" id="expand-all">Expand all</button>
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
<\/script>`});p(this,"accordion")}expandAll(){this.accordion.expandAll()}collapseAll(){this.accordion.collapseAll()}mounted(){const t=document.getElementById("expand-collapse");this.accordion=chi.accordion(t)}};E=kc([g({})],E);const Hc=c("div",{class:"chi-accordion -mt--2",id:"expand-collapse"},[c("div",{class:"chi-accordion__item -expanded"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 1.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 1.2")])])])])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2"),c("div",{class:"chi-accordion"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2.1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.1")])]),c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion item 2.2")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content of Accordion item 2.2")])])])])])])])])],-1);function Jc(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Expand / Collapse all Accordion items",id:"expand_collapse_all_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{example:r(()=>[c("button",{class:"chi-button",onClick:n[0]||(n[0]=(...u)=>i.expandAll&&i.expandAll(...u)),id:"expand-all"},"Expand all"),c("button",{class:"chi-button -ml--1",onClick:n[1]||(n[1]=(...u)=>i.collapseAll&&i.collapseAll(...u)),id:"collapse-all"},"Collapse all"),Hc]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Wc=x(E,[["render",Jc]]);var Vc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Fc=(i,n,t,d)=>{for(var o=d>1?void 0:d?qc(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&Vc(n,t,o),o};let T=class extends b{};T=Fc([g({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`}})})],T);const Gc=c("p",{class:"-text"},[m("Make Accordions appear inactive by adding the class "),c("code",null,"-disabled"),m(" or the attribute "),c("code",null,"disabled"),m(" to Accordion trigger")],-1),Kc=c("div",{class:"chi-accordion"},null,-1),Qc=c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger -disabled"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion 1")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])],-1);function Rc(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Disabled",id:"disabled_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{"example-description":r(()=>[Gc]),example:r(()=>[Kc,Qc]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Uc=x(T,[["render",Rc]]);var Xc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,Zc=(i,n,t,d)=>{for(var o=d>1?void 0:d?Yc(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&Xc(n,t,o),o};let B=class extends b{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-accordion -truncated" id="example-truncated">
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

  chi.accordion(accordionTruncated);
<\/script>`})}mounted(){chi.accordion(document.getElementById("example-truncated"))}};B=Zc([g({})],B);const ci=c("p",{class:"-text"},[m("Truncate long accordion titles by adding the class "),c("code",null,"-truncated"),m(" to "),c("code",null,"chi-accordion"),m(".")],-1),ii=c("div",{class:"chi-accordion -truncated",id:"example-truncated"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function oi(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Truncated",id:"truncated_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{"example-description":r(()=>[ci]),example:r(()=>[ii]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ni=x(B,[["render",oi]]);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,di=(i,n,t,d)=>{for(var o=d>1?void 0:d?ti(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&ei(n,t,o),o};let O=class extends b{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- sm-->
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
  chi.accordion(document.getElementById('example-size-sm'));
  chi.accordion(document.getElementById('example-size-md'));
  chi.accordion(document.getElementById('example-size-lg'));
  chi.accordion(document.getElementById('example-size-xl'));
<\/script>`})}mounted(){chi.accordion(document.getElementById("example-size-sm")),chi.accordion(document.getElementById("example-size-md")),chi.accordion(document.getElementById("example-size-lg")),chi.accordion(document.getElementById("example-size-xl"))}};O=di([g({})],O);const si=c("p",{class:"-text"},[m("Accordion supports the following sizes: "),c("code",null,"sm"),m(", "),c("code",null,"md"),m(" (default), "),c("code",null,"lg"),m(", and "),c("code",null,"xl"),m(".")],-1),ai=c("p",{class:"-text--bold -pl--2"},"sm",-1),ri=c("div",{class:"chi-accordion -sm",id:"example-size-sm"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1),li=c("p",{class:"-text--bold -pl--2"},"md",-1),_i=c("div",{class:"chi-accordion -md",id:"example-size-md"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1),hi=c("p",{class:"-text--bold -pl--2"},"lg",-1),pi=c("div",{class:"chi-accordion -lg",id:"example-size-lg"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1),mi=c("p",{class:"-text--bold -pl--2"},"xl",-1),ui=c("div",{class:"chi-accordion -xl",id:"example-size-xl"},[c("div",{class:"chi-accordion__item"},[c("button",{class:"chi-accordion__trigger"},[c("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"}),c("div",{class:"chi-accordion__title"},"Accordion")]),c("div",{class:"chi-accordion__content"},[c("p",{class:"chi-accordion__text"},"Content goes here")])])],-1);function vi(i,n,t,d,o,s){const e=A,_=w,h=$;return v(),C(h,{title:"Sizes",id:"sizes_lumen_centurylink",tabs:i.exampleTabs,padding:"-p--3 -p-lg--6"},{"example-description":r(()=>[si]),example:r(()=>[ai,ri,li,_i,hi,pi,mi,ui]),"code-webcomponent":r(()=>[a(e,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a(_),a(e,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const bi=x(O,[["render",vi]]);var gi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Ci=(i,n,t,d)=>{for(var o=d>1?void 0:d?xi(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&gi(n,t,o),o};let S=class extends b{constructor(){super(...arguments);p(this,"selectedTheme",Q())}};S=Ci([g({components:{BaseLumenCenturyLink:hc,BasePortal:R,CardPortal:U,NestedLumenCenturyLink:gc,NestedPortal:X,MethodsLumenCenturyLink:Ic,MethodsPortal:Y,ExpandCollapseAllLumenCenturyLink:Wc,ExpandCollapseAllPortal:Z,DisabledLumenCenturyLink:Uc,DisabledPortal:cc,TruncatedLumenCenturyLink:ni,TruncatedPortal:ic,SizesLumenCenturyLink:bi,SizesPortal:oc}})],S);const Ai=c("h2",null,"Examples",-1),wi=c("p",{class:"-text"},[m("To render accordion, use the class "),c("code",null,"chi-accordion"),m(".")],-1),$i={key:0},fi={key:1};function Li(i,n,t,d,o,s){const e=l("BaseLumenCenturyLink"),_=l("NestedLumenCenturyLink"),h=l("MethodsLumenCenturyLink"),u=l("ExpandCollapseAllLumenCenturyLink"),N=l("DisabledLumenCenturyLink"),I=l("TruncatedLumenCenturyLink"),j=l("SizesLumenCenturyLink"),M=l("BasePortal"),k=l("CardPortal"),H=l("NestedPortal"),J=l("MethodsPortal"),W=l("ExpandCollapseAllPortal"),V=l("DisabledPortal"),q=l("TruncatedPortal"),F=l("SizesPortal");return v(),f("div",null,[Ai,wi,["lumen","centurylink","lumenrebrand24"].includes(i.selectedTheme)?(v(),f("div",$i,[a(e),a(_),a(h),a(u),a(N),a(I),a(j)])):z("",!0),["portal","portalrebrand24"].includes(i.selectedTheme)?(v(),f("div",fi,[a(M),a(k),a(H),a(J),a(W),a(V),a(q),a(F)])):z("",!0)])}const yi=x(S,[["render",Li]]);var Pi=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ti=(i,n,t,d)=>{for(var o=d>1?void 0:d?Ei(n,t):n,s=i.length-1,e;s>=0;s--)(e=i[s])&&(o=(d?e(n,t,o):e(o))||o);return d&&o&&Pi(n,t,o),o};let D=class extends b{constructor(){super(...arguments);p(this,"pageTabs",tc)}};D=Ti([g({components:{Accessibility:ec,Examples:yi,Properties:nc}})],D);const Bi={class:"chi-grid__container -pt--3"},Oi={class:"chi-tabs-panel -active",id:"examples"},Si={class:"chi-tabs-panel",id:"properties"},Di={class:"chi-tabs-panel",id:"accessibility"};function zi(i,n,t,d,o,s){const e=dc,_=l("Examples"),h=l("Properties"),u=l("Accessibility");return v(),f("div",null,[a(e,{title:"Accordion",description:"Accordion is used to toggle between hiding and showing content.",tabs:i.pageTabs},null,8,["tabs"]),c("div",Bi,[c("div",Oi,[a(_)]),c("div",Si,[a(h)]),c("div",Di,[a(u)])])])}const mo=x(D,[["render",zi]]);export{mo as default};
