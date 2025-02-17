import{a7 as l,a6 as m}from"./CR_XfkrP.js";const p=t=>`
    <div class="chi-carousel__item -p--1">
      Custom item ${t}
    </div>
`,c=t=>`
  <div class="-d--flex" slot="items">
    ${t.join("").trim()}
  </div>
`,u=(t,a)=>{const s=a.dynamicComputedProps,r=[l("interval",s.interval,!!s.autoplay)],e=m(a,r),o=[];for(let i=0;i<((s==null?void 0:s.totalItems)||0);i++){const n=String(i+1);o.push(p(n).trimEnd())}return`<${t}${e}>${c(o)}</${t}>`};export{u as snippet};
