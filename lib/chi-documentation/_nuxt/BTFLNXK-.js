import{al as _,am as m,a6 as r}from"./pInVwq2A.js";const b=i=>({danger:'<chi-icon icon="circle-warning"></chi-icon>',success:'<chi-icon icon="circle-check"></chi-icon> ',warning:'<chi-icon icon="warning"></chi-icon>'})[i??""]??"",x=i=>{if(!i.helperMessage)return[""];const l=b(i.state);return[`<div class="chi-label -status${i.state?` -${i.state}`:""}">`,...r([l,i.helperMessageText??""].filter(Boolean)),"</div>"]},v=i=>{const{helpIcon:l,helpIconText:e}=i;if(!l)return{element:"",popover:""};const c=`  <div class="chi-label__help" slot="chi-checkbox__help">
      <chi-button id="example__help_button" type="icon" size="xs" variant="flat" alternative-text="Help">
        <chi-icon icon="circle-info-outline"></chi-icon>
      </chi-button>
    </div>`,t=`
<chi-popover id="example__help_popover" position="top" variant="text" arrow="arrow" reference="#example__help_button">
  ${e}
</chi-popover>

<script>
  document.querySelector("#example__help_button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help_popover");
      
      popoverElem.toggle();
    });
<\/script>`;return{element:c,popover:t}},f=(i,l)=>{const e=l.dynamicComputedProps,c=u(e.layout);if(c)return c;const t=x(e),{element:o,popover:p}=v(e),h=[{checked:!e.indeterminate&&e.checked?"checked":""}.checked],a=_(l,h),n=m(a,4,2),s=a.length>=4?"  ":"",d=o?[`<${i}${n}${s}>`,o,`</${i}>`]:[`<${i}${n}${s}></${i}>`];return t.length&&d.push(...t),['<div class="chi-form__item">',...r(d.filter(Boolean)),"</div>",p].filter(Boolean).join(`
`)},u=i=>{const l='<legend class="chi-label">Select options</legend>',e=[{id:"example__stacked1",label:"Option 1"},{id:"example__stacked2",label:"Option 2"},{id:"example__list1",label:"Option 1"},{id:"example__list2",label:"Option 2"},{id:"example__list3",label:"Option 3"},{id:"example__list4",label:"Option 4"},{id:"example__list5",label:"Option 5"},{id:"example__grid1",label:"Option 1"},{id:"example__grid2",label:"Option 2"},{id:"example__grid3",label:"Option 3"},{id:"example__grid4",label:"Option 4"},{id:"example__grid5",label:"Option 5"},{id:"example__grid6",label:"Option 6"},{id:"example__grid7",label:"Option 7"}];switch(i){case"stacked":return`<fieldset>
  ${l}
  <div class="chi-form__item -mb--1">
    <chi-checkbox id="${e[0].id}" label="${e[0].label}"></chi-checkbox>
  </div>
  <div class="chi-form__item">
    <chi-checkbox id="${e[1].id}" label="${e[1].label}"></chi-checkbox>
  </div>
</fieldset>`;case"inline":return`<fieldset>
  ${l}
  <div class="chi-form__item -inline">
    <chi-checkbox id="${e[0].id}" label="${e[0].label}"></chi-checkbox>
  </div>
  <div class="chi-form__item -inline">
    <chi-checkbox id="${e[1].id}" label="${e[1].label}"></chi-checkbox>
  </div>
</fieldset>`;case"list":return`<fieldset>
  ${l}
  <ul class="chi-form__item -list">
    ${e.slice(2,7).map(c=>`<li class="chi-form__item">
      <chi-checkbox id="${c.id}" label="${c.label}"></chi-checkbox>
    </li>`).join("")}
  </ul>
</fieldset>`;case"grid":return`<fieldset>
  <div class="chi-grid">
    <div class="chi-col -w--12 -mb--1">
      ${l}
    </div>
    ${e.slice(7).map(c=>`<div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <chi-checkbox id="${c.id}" label="${c.label}"></chi-checkbox>
      </div>
    </div>`).join("")}
  </div>
</fieldset>`;default:return""}};export{f as snippet};
