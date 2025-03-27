import{a1 as I,a2 as a}from"./pInVwq2A.js";const $=(e,o)=>{const n=`
    <span class="chi-dropdown__menu-item_title" slot="menu">Item</span>
    <span class="chi-dropdown__menu-item_text" slot="menu">Item description</span>
  `,t=s=>`  <a class="chi-dropdown__menu-item" href="#" slot="menu">${o?n:`Item ${s}`}</a>`;return Array.from({length:e},(s,i)=>t(i+1)).join(`
`)},w=(e,o)=>{const{showIcon:n,icon:t,iconTooltipMessage:s,search:i,size:c,retainSelection:r,selectMode:l,totalItems:m=4,description:p=!1}=o.dynamicComputedProps,d=[a("icon",t,!!n),a("icon-tooltip-message",s,!!n),a("select-mode",l,!!r)].filter(Boolean),h=I(o,d),u=$(m,p),_=c?` size="${c}"`:"",f=i?`  <chi-search-input${_} placeholder="Search" slot="menu-header"></chi-search-input>`:"";return[`<${e}${h}>`,f,u,`</${e}>`].filter(Boolean).join(`
`)};export{w as snippet};
