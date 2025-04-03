import{a3 as a,am as r,an as p}from"./-E9oTzhC.js";const b=(s,i)=>{const e=i.dynamicComputedProps,l=e.label,c=[a("size",e.labelSize),a("info-icon",!!e.helpIcon),a("info-icon-message",e.helpIconText,!!e.helpIcon),'for="canvas-number-input"'],n=r({stringProperties:[],booleanProperties:["required"],dynamicComputedProps:e},c),t=n.length>2?"    ":"",m=p(n,3,3),o=[];e.helperMessage&&o.push(`helper-message="${e.helperMessageText}"`);const h=r(i,o),d=p(h,2,2);return`
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
