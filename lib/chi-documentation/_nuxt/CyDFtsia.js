import{a6 as t,a7 as c}from"./CR_XfkrP.js";const P=(i,o)=>{const{clickable:e,text:r,showIcon:l,iconAlert:s,showTitle:a,title:h,actionable:p,actionableText:d}=o.dynamicComputedProps,n=[c("icon",s,!!l),c("title",h,!!a)].filter(Boolean),u=t(o,n),$=t({stringProperties:["color"],booleanProperties:["spinner"],dynamicComputedProps:o.dynamicComputedProps},n);if(e)return['<chi-link href="#" class="-d--block" no-underline no-hover-underline>',`  <${i}${$}>`,'    <chi-icon icon="chevron-right" slot="chi-alert__clickable-icon"></chi-icon>',`  </${i}>`,"</chi-link>"].join(`
`);{const b=p?`
  <chi-button slot="chi-alert__actions" size="xs">${d}</chi-button>`:"";return[`<${i}${u}>`,`  ${r}${b}`,`</${i}>`].join(`
`)}};export{P as snippet};
