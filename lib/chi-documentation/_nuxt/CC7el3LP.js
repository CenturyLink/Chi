import{a6 as o,a7 as a,a8 as p,a9 as t}from"./CmP53kv-.js";const d=(n,r)=>{const{separator:l,size:s}=r.dynamicComputedProps,e=l?`${p}`:"",i=s!=="md"?o[s.toUpperCase()]:"";return`<nav class="${[a.BREADCRUMB,i,e].filter(Boolean).join(" ")}" aria-label="Breadcrumb">
  <ol>
    <li class="${a.ITEM}">
      <a href="#">Parent</a>
    </li>
    <li class="${a.ITEM}">
      <a href="#">Child 1</a>
    </li>
    <li class="${a.ITEM} ${t}">
      <a href="#" aria-current="page">Child 2</a>
    </li>
  </ol>
</nav>`};export{d as snippet};
