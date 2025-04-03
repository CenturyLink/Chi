import{av as h,a5 as o,aw as I,ax as _,ay as v,az as x,aA as S,a3 as a,ar as b,aB as P,a8 as z,am as L,an as m}from"./-E9oTzhC.js";const N=e=>({row:["inline-label","inline-label-percentage","inline-label-grid"].includes(e)?` ${S}`:"",grid:e==="inline-label-grid"?` ${v} ${x}`:"",inline:e==="inline-input"?` ${I} ${_}`:"",percentage:e==="inline-label-percentage"?`${o.SIZING.W50}`:"",gridLabel:e==="inline-label-grid"?`${h} ${o.SIZING.W3}`:"",gridInput:e==="inline-label-grid"?`${h} ${o.SIZING.W9}`:""}),T=(e,n)=>[`id="${n}"`,a("helper-message",e.helperMessageText,!!e.helperMessage),a("state","danger",!!e.error),a("helper-message",e.errorText,!!e.error),a("icon-left",e.leftIconName,!!e.leftIcon),a("icon-right",e.rightIconName,!!e.rightIcon)].filter(Boolean),y=(e,n,l)=>{const r=[`for="${n}"`,l.percentage||l.gridLabel?`class="${l.percentage}${l.gridLabel}"`:"",a("size",e.labelSize,e.labelSize!=="md"),a("required",!0,!!e.required),a("info-icon",!0,!!e.helpIcon),a("info-icon-message",e.helpIconText,!!e.helpIcon),a("optional",!0,!!e.optional)].filter(Boolean),i=m(r,4,2),s=r.length>3?"  ":"",t=$=>r.length>3?`
`+" ".repeat($):"";return`<chi-label${i}${s}>${t(3)}${e.label}${t(2)}</chi-label>`},w=e=>{var n;return e.floatingLabel?`<div class="${b.INPUT_WRAPPER} ${P}">
  <input class="${b.INPUT} ${z[((n=e==null?void 0:e.floatingSize)==null?void 0:n.toUpperCase())||""]}" type="text" id="floating-label"/>
  <label for="floating-label">${e.placeholder}</label>
</div>`:null},A=(e,n)=>{const l=n.dynamicComputedProps,r="example_id",i=N((l==null?void 0:l.layout)??""),s=T(l,r),t=y(l,r,i),$=w(l),c=[i.percentage,i.gridInput].filter(Boolean).join(" "),f=[...s,c?`class="${c}"`:""],d=L(n,f),g=m(d,4,2),u=d.length>3?"  ":"";let p=$||`<div class="chi-form__item${i.row}${i.grid}">
  ${t}
  <${e}${g}${u}></${e}>
</div>`;return l.layout==="inline-input"&&(p=`<div class="${o.DISPLAY.FLEX}">
  <div class="chi-form__item${i.row}${i.grid}${i.inline}">
    ${t}
    <${e}${g}></${e}>
  </div>
  <div class="chi-form__item${i.row}${i.grid}${i.inline}">
    <chi-label for="example_id_2">Label Text</chi-label>
    <${e} placeholder="Placeholder Text" size="md" id="example_id_2"></${e}>
  </div>
</div>`),p};export{A as snippet};
