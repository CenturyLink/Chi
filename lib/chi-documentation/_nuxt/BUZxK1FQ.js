import{a7 as e,a6 as l}from"./CR_XfkrP.js";const c=`
<chi-button id="example__button">Click to open popover</chi-button>
`,m=`
<script>
  document.querySelector("#example__button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__popover");
      popoverElem.toggle();
    });
<\/script>
`,d=(t,p)=>{const o=p.dynamicComputedProps,r=['id="example__popover"','reference="#example__button"',e("title",o.title,!!o.showTitle),e("position",o.position,!!o.arrow&&o.position!=="top"),e("drag",o.drag,!o.arrow&&!!o.showTitle),e("modal",o.modal,!o.arrow&&!!o.showTitle)],i=l(p,r),n=`
<${t}${i}>
  ${o.content}
</${t}>
`;return[c,n].map(a=>a.trim()).join(`
`).concat(`
${m}`)};export{d as snippet};
