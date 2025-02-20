import{a7 as t,a6 as r}from"./6XaUQmon.js";const a=`
  <chi-button id="example__helputton" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-qstion-outline"></chi-icon>
  </chi-butt>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
`,p=`
  <chi-button color="primary" slot="header-actions">Primary</chi-button>
`,s=`
  <chi-button slot="page-level__actions">Cancel</chi-button>
  <chi-button class="-ml--1" color="primary" slot="page-level__actions">Submit</chi-button>
`,h=`
  <chi-alert color="info" icon="circle-info" size="sm" slot="page-alert" closable>
    This is a page level info alert
  </chi-alert>
`,m=`
<script>
  document.querySelector("#example__help-button").addEventListener("click", function() {
    var popoverElem = document.querySelector("#example__help-popover");
    popoverElem.toggle();
  });
<\/script>
`,v=(u,o)=>{const e=o.dynamicComputedProps,n=[t("subtitle",e.subtitleText,!!e.subtitle),t("backlink",e.backlinkText,!!e.backlink),t("backlink-href","#",!!e.backlink)],c=r(o,n),i=[e.helpIcon&&a,e.buttons&&p,e.actions&&s,e.alert&&h].filter(Boolean).map(l=>{if(typeof l=="string")return l.trimEnd()}).join("").trimEnd();return[`<chi-main${c}>${i}${i?`
`:""}</chi-main>`,e.helpIcon&&m].filter(Boolean).join(`
`)};export{v as snippet};
