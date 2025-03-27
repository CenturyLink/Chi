import{a7 as o,a8 as a,a9 as p,aa as t}from"./pInVwq2A.js";const d=(n,r)=>{const{separator:l,size:s}=r.dynamicComputedProps,e=l?`${p}`:"",i=s!=="md"?o[s.toUpperCase()]:"";return`<nav class="${[a.BREADCRUMB,i,e].filter(Boolean).join(" ")}" aria-label="Breadcrumb">
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
