import{ab as $,a1 as a}from"./pInVwq2A.js";const u=(t,i)=>{const c=i.dynamicComputedProps,p=[c.dropdown?`extra-class="${$.TRIGGER}"`:""],s=(c==null?void 0:c.type)==="icon"||(c==null?void 0:c.type)==="float"?`<chi-icon icon="${c==null?void 0:c.iconButton}" />`:c.text,e=c!=null&&c.showIcon&&(c!=null&&c.checkboxIconLeft)?`<chi-icon icon="${c==null?void 0:c.iconLeft}" />`:"",o=c!=null&&c.showIcon&&(c!=null&&c.checkboxIconRight)?`<chi-icon icon="${c==null?void 0:c.iconRight}" />`:"",h=a(i,p),n=[];return e&&n.push(`  ${e}`),s&&n.push(`  ${s}`),o&&n.push(`  ${o}`),`<${t}${h}>
${n.join(`
`)}
</${t}>`};export{u as snippet};
