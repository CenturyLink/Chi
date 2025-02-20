import{a7 as a,aq as o,ar as p}from"./6XaUQmon.js";const b=(s,i)=>{const e=i.dynamicComputedProps,l=e.label,c=[a("size",e.labelSize),a("info-icon",!!e.helpIcon),a("info-icon-message",e.helpIconText,!!e.helpIcon),'for="canvas-number-input"'],r=o({stringProperties:[],booleanProperties:["required"],dynamicComputedProps:e},c),t=r.length>2?"    ":"",m=p(r,3,3),n=[];e.helperMessage&&n.push(`helper-message="${e.helperMessageText}"`);const h=o(i,n),d=p(h,2,2);return`
<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <chi-label${m}${t}>
      ${l}
    </chi-label>
  </div>
  <${s} 
    id="canvas-number-input"
    value="0"${d}  ></${s}>
</div>`.trim()};export{b as snippet};
