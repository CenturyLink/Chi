import{aq as t}from"./CR_XfkrP.js";const b=e=>({labelLegend:e.labelGroup??"",required:!!e.required,optional:!!e.optional}),c=({checkedOption:e,...a},r,o)=>{const i=o+1,l=e!==void 0&&i===+e?"checked":"",d=a[`disabledOption${i}`]?"disabled":"",n=a[`labelOption${i}`]||"";return{id:`id="${r}"`,checked:l,disabled:d,label:n}},s=(e,a)=>e?`
  <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>`:a?`
  <abbr class="chi-label__required" aria-label="Required field">*</abbr>`:"",p=(e,a)=>`
<legend class="chi-label">
  ${e.labelLegend}${a}
</legend>`,u=(e,a)=>{const r=a.dynamicComputedProps;return Array.from({length:3},(o,i)=>{const l=c(r,`canvas-radio-button-${i}`,i),d=[l.id,l.disabled,l.checked,'name="radio"'],n=t(a,d).join(" ");return`  <${e} ${n}>${l.label}</${e}>`}).join(`
`)},m=(e,a)=>{const r=a.dynamicComputedProps,o=b(r),i=s(o.optional,o.required),l=p(o,i),d=u(e,a);return`
${l}
<section>
${d}
</section>`.trim()};export{m as snippet};
