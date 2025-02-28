import{a6 as $,a7 as a}from"./8OrwJQBm.js";const f=(e,o)=>{const n=`
    <span class="chi-dropdown__menu-item_title" slot="menu">Item</span>
    <span class="chi-dropdown__menu-item_text" slot="menu">Item description</span>
  `,s=t=>`  <a class="chi-dropdown__menu-item" href="#" slot="menu">${o?n:`Item ${t}`}</a>`;return Array.from({length:e},(t,i)=>s(i+1)).join(`
`)},w=(e,o)=>{const{showIcon:n,icon:s,iconTooltipMessage:t,search:i,size:c,retainSelection:r,selectMode:l,totalItems:m=4,description:p=!1}=o.dynamicComputedProps,d=[a("icon",s,!!n),a("icon-tooltip-message",t,!!n),a("select-mode",l,!!r)].filter(Boolean),h=$(o,d),u=f(m,p),_=c?` size="${c}"`:"",I=i?`  <chi-search-input${_} placeholder="Search" slot="menu-header"></chi-search-input>`:"";return[`<${e}${h}>`,I,u,`</${e}>`].filter(Boolean).join(`
`)};export{w as snippet};
