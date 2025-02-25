import{ac as o,ad as a,ae as p,af as t}from"./6XaUQmon.js";const d=(n,r)=>{const{separator:e,size:s}=r.dynamicComputedProps,l=e?`${t}`:"",i=s!=="md"?o[s.toUpperCase()]:"";return`<nav class="${[a.BREADCRUMB,i,l].filter(Boolean).join(" ")}" aria-label="Breadcrumb">
  <ol>
    <li class="${a.ITEM}">
      <a href="#">Parent</a>
    </li>
    <li class="${a.ITEM}">
      <a href="#">Child 1</a>
    </li>
    <li class="${a.ITEM} ${p}">
      <a href="#" aria-current="page">Child 2</a>
    </li>
  </ol>
</nav>`};export{d as snippet};
