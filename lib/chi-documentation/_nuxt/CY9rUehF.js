import{a0 as u,a1 as a}from"./CmP53kv-.js";const v=e=>`
  <div slot="active">
    <div class="chi-epanel__subtitle">${e}</div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to select a product package)
    </p>
  </div>
`,b=`
  <div slot="done">Content in expansion panel are are displayed in done state.</div>
`,m=`
  <div slot="footer">
    <button class="chi-button">Previous</button>
    <button class="chi-button -primary">Continue</button>
  </div>
`,g=`
  <div slot="change">
    <button class="chi-button -primary -flat">Change</button>
  </div>
`,h=(e,i)=>{const{stateIcon:s,stateIconTooltip:p,epanelTitle:c="",state:t,step:l}=i.dynamicComputedProps,d=[a("state-icon",t==="done"&&!!s),a("state-icon-tooltip",p,t==="done"&&!!s),a("step","1",!!l)],r=u(i,d);let n=[t==="active"&&v(c),t==="done"&&b,t==="active"&&m,t==="done"&&g].filter(o=>typeof o=="string").map(o=>o.trimEnd()).join("");return n&&(n+=`
`),`<${e}${r}>${n}</${e}>`};export{h as snippet};
