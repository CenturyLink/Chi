import{_ as u}from"./BzQNDISb.js";import{_}from"./C0Zb0D1T.js";import{e as h,f as p,o,w as l,a as e,b as s,d as c,c as v,i as A,t as B,F as k,l as C,k as f,j as T,g as S}from"./BpVBcII5.js";import{_ as W}from"./tNdMX7O9.js";import{_ as z}from"./4ajXz9EY.js";const E=h({__name:"_bubble_centered_lumen_centurylink",setup(d){const a={webcomponent:`<chi-alert color="danger" icon="circle-x" center>
  This is a centered danger alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Centered","title-size":"h4",id:"bubble_centered_lumen_centurylink",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[e("strong",null,"Note:"),c(" Use sparingly. Centered Bubble alerts should only be used to render brief messages on centered forms such as those found on Sign In and Sign Up screens. Centered alerts do not support titles.")],-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-x",center:""},"This is a centered danger alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the attribute "),e("code",null,"center"),c(" to center the content of a Bubble Alert.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Apply the class "),e("code",null,"-center"),c(" to center the content of a Bubble Alert.")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),M=h({__name:"_bubble_sizes_lumen_centurylink",setup(d){const a={webcomponent:`<!-- Small -->
<chi-alert color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Large -->
<chi-alert color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`,htmlblueprint:`<!-- Small -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Small Titled -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Medium -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Medium Titled -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Large -->
<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>
<!-- Large Titled -->
<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Sizes","title-size":"h4",id:"bubble_sizes_lumen_centurylink",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("p",{class:"-text--bold -ml--2"},"sm",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),e("p",{class:"-text--bold -ml--2"},"md (default)",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1),e("p",{class:"-text--bold -ml--2"},"lg",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg"},"This is a large success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success"},"This is a large success alert",-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the "),e("code",null,'size=""'),c(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),c(", "),e("code",null,"md"),c(", and "),e("code",null,"lg"),c(".")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),c(", "),e("code",null,"-md"),c(", and "),e("code",null,"-lg"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),I=h({__name:"_bubble_closable_lumen_centurylink",setup(d){const a={webcomponent:`<!-- closable -->
<chi-alert color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- Large closable Titled -->
<chi-alert color="warning" icon="warning" size="lg" title="Warning" closable>
  This is a large closable warning alert
</chi-alert>`,htmlblueprint:`<!-- Closable -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- closable Titled -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Large closable Titled -->
<div class="chi-alert -warning -close -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a large closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Closable","title-size":"h4",id:"bubble_closable_lumen_centurylink",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},"To allow users to dismiss an alert.",-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",closable:"",mutable:null},"This is a closable warning alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"Warning",closable:"",mutable:null},"This is a closable warning alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",size:"lg",title:"Warning",closable:"",mutable:null},"This is a large closable warning alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use attribute "),e("code",null,"closable"),c(" to render a close button that allows users to dismiss an alert.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the class "),e("code",null,"-close"),c(" and insert a close button "),e("code",null,"chi-alert__close-button"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),L=h({__name:"_bubble_actionable",setup(d){const a={webcomponent:`<chi-alert color="success" icon="circle-check" size="lg" title="Success" closable>
  This is a large closable success alert
  <chi-button slot="chi-alert__actions" color="primary">Action</chi-button>
</chi-alert>`,htmlblueprint:`<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large closable success alert</p>
    <div class="chi-alert__actions">
      <button class="chi-button -primary">Action</button>
    </div>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Actions","title-size":"h4",id:"bubble_actionable",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success",closable:"",mutable:null},[c("This is a large closable success alert"),e("div",{slot:"chi-alert__actions"},[e("chi-button",{color:"primary"},"Action")])],-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Add buttons to an alert by defining "),e("code",null,'slot="chi-alert__actions"'),c(" on each "),e("code",null,"chi-button"),c(".")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("While "),e("code",null,"chi-alert__actions"),c(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),e("code",null,"-lg"),c("."),e("br"),c("Large Alerts have extra "),e("code",null,"chi-alert"),c(" padding, a larger "),e("code",null,"chi-alert__icon"),c(", and a larger "),e("code",null,"chi-alert__close-button"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),$=h({__name:"_bubble_actionable",setup(d){const a={webcomponent:`<chi-alert color="success" icon="circle-check" size="lg" title="Success" closable>
  This is a large closable success alert
  <chi-button slot="chi-alert__actions" size="xs">Action</chi-button>
</chi-alert>`,htmlblueprint:`<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large closable success alert</p>
    <div class="chi-alert__actions">
      <button class="chi-button -xs">Action</button>
    </div>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Actions","title-size":"h4",id:"bubble_actionable",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"lg",title:"Success",closable:"",mutable:null},[c("This is a large closable success alert"),e("chi-button",{size:"xs",slot:"chi-alert__actions"},"Action")],-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Add buttons to an alert by defining "),e("code",null,'slot="chi-alert__actions"'),c(" on each "),e("code",null,"chi-button"),c(".")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("While "),e("code",null,"chi-alert__actions"),c(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),e("code",null,"-lg"),c("."),e("br"),c("Large Alerts have extra "),e("code",null,"chi-alert"),c(" padding, a larger "),e("code",null,"chi-alert__icon"),c(", and a larger "),e("code",null,"chi-alert__close-button"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),U=h({__name:"_banner_default_lumen_centurylink",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="banner" icon="flag">
    This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="banner" icon="circle-check" color="success">
    This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="banner" icon="circle-x" color="danger">
    This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="banner" icon="warning" color="warning">
    This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="banner" icon="circle-info" color="info">
    This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="banner" icon="circle-info" color="muted">
    This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -banner" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -banner -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -banner -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -banner -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -banner -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Default","title-size":"h4",id:"banner_default_lumen_centurylink",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",type:"banner",icon:"flag"},"This is a base alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",type:"banner"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-x",type:"banner"},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",type:"banner"},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",type:"banner"},"This is an info alert",-1),e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",type:"banner"},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),D=h({__name:"_banner_centered_lumen_centurylink",setup(d){const a={webcomponent:`<chi-alert type="banner" icon="circle-x" color="danger" center>
  This is a centered danger alert
</chi-alert>`,htmlblueprint:`<div class="chi-alert -banner -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Centered","title-size":"h4",id:"banner_centered_lumen_centurylink",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},[e("strong",null,"Note:"),c(" Use sparingly. Centered Banner alerts should only be used to render brief messages. Centered alerts do not support titles.")],-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-x",color:"danger",center:""},"This is a centered danger alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the attribute "),e("code",null,"center"),c(" to center the content of a Banner Alert.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Apply the class "),e("code",null,"-center"),c(" to center the content of a Banner Alert.")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),N=h({__name:"_banner_titled_lumen_centurylink",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="banner" icon="flag" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="banner" icon="circle-check" color="success" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="banner" icon="circle-x" color="danger" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="banner" icon="warning" color="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="banner" icon="circle-info" color="info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="banner" icon="circle-info" color="muted" title="Muted">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -banner" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -banner -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -banner -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -banner -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -banner -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Titled","title-size":"h4",id:"banner_titled_lumen_centurylink",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},"The title will automatically get colored based on the alerts semantic color class. To override the title color, apply a text color utility class.",-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",type:"banner",icon:"flag",title:"Base"},"This is a base alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"success",type:"banner"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-x",title:"danger",type:"banner"},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"warning",type:"banner"},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",title:"info",type:"banner"},"This is an info alert",-1),e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",title:"muted",type:"banner"},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use "),e("code",null,'title=""'),c(" attribute to add a title to an Alert.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use "),e("code",null,"chi-alert__title"),c(" class to add a title to an Alert.")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),j=h({__name:"_banner_sizes_lumen_centurylink",setup(d){const a={webcomponent:`<!-- Small -->
<chi-alert type="banner" color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert type="banner" color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert type="banner" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert type="banner" color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Large -->
<chi-alert type="banner" color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert type="banner" color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`,htmlblueprint:`<!-- Small -->
<div class="chi-alert -banner -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Small Titled -->
<div class="chi-alert -banner -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Medium -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Medium Titled -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Large -->
<div class="chi-alert -banner -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>
<!-- Large Titled -->
<div class="chi-alert -banner -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Sizes","title-size":"h4",id:"banner_sizes_lumen_centurylink",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("p",{class:"-text--bold -ml--2"},"sm",-1),e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"sm"},"This is a small success alert",-1),e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"sm",title:"Success"},"This is a small success alert",-1),e("p",{class:"-text--bold -ml--2"},"md (default)",-1),e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",title:"Success"},"This is a success alert",-1),e("p",{class:"-text--bold -ml--2"},"lg",-1),e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"lg"},"This is a large success alert",-1),e("chi-alert",{class:"-m--2",type:"banner",icon:"circle-check",color:"success",size:"lg",title:"Success"},"This is a large success alert",-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the "),e("code",null,'size=""'),c(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),c(", "),e("code",null,"md"),c(", and "),e("code",null,"lg"),c(".")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),c(", "),e("code",null,"-md"),c(", and "),e("code",null,"-lg"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),J=["title","size"],V=h({__name:"_banner_closable_lumen_centurylink",setup(d){const a={webcomponent:`<!-- closable -->
<chi-alert type="banner" color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert type="banner" color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- Large closable Titled -->
<chi-alert type="banner" color="warning" icon="warning" size="lg" title="Warning" closable>
  This is a large closable warning alert
</chi-alert>`,htmlblueprint:`<!-- Closable Base -->
<div class="chi-alert -banner -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Closable Titled -->
<div class="chi-alert -banner -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Large Closable Titled -->
<div class="chi-alert -banner -warning -close -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`},r=[{text:"This is a closable warning alert",extraClass:" -mt--2"},{text:"This is a closable warning alert",title:"Warning"},{text:"This is a large closable warning alert",size:"lg",title:"Warning"}];return(i,t)=>{const n=u,b=_;return o(),p(b,{title:"Closable","title-size":"h4",id:"banner_closable_lumen_centurylink",padding:"-p--1"},{example:l(()=>[(o(),v(k,null,A(r,m=>e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",mutable:null,closable:"",title:m.title,size:m.size,type:"banner"},B(m.text),9,J)),64))]),"code-webcomponent":l(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use attribute "),e("code",null,"closable"),c(" to render a close button that allows users to dismiss an alert.")])],-1)),s(n,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the class "),e("code",null,"-close"),c(" and insert a close button "),e("code",null,"chi-alert__close-button"),c(".")])],-1)),s(n,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),O={class:"-p--1 -bg--grey-20"},F=h({__name:"_banner_actionable_lumen_centurylink",setup(d){const a={webcomponent:`<chi-alert type="banner" icon="flag" size="lg" title="Base" closable>
  This is a large closable alert
  <chi-button slot="chi-alert__actions" color="primary">Action</chi-button>
</chi-alert>`,htmlblueprint:`<div class="chi-alert -banner -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a large closable alert</p>
    <div class="chi-alert__actions">
      <button class="chi-button -primary">Action</button>
    </div>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=W,n=u,b=_;return o(),p(b,{title:"Actionable","title-size":"h4",id:"banner_actionable_lumen_centurylink",padding:"-p--0"},{example:l(()=>[e("div",O,[s(t,null,{default:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",type:"banner",icon:"flag",size:"lg",title:"Base",closable:"",mutable:null},[c(" This is a large closable alert"),e("chi-button",{color:"primary",slot:"chi-alert__actions"},"Action")],-1)])),_:1})])]),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Add buttons to an alert by defining "),e("code",null,'slot="chi-alert__actions"'),c(" on each "),e("code",null,"chi-button"),c(".")])],-1)),s(n,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("While "),e("code",null,"chi-alert__actions"),c(" can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class "),e("code",null,"-lg"),c("."),e("br"),c("Large Alerts have extra "),e("code",null,"chi-alert"),c(" padding, a larger "),e("code",null,"chi-alert__icon"),c(", and a larger "),e("code",null,"chi-alert__close-button"),c(".")])],-1)),s(n,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),H=h({__name:"_toast_default_lumen_centurylink",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="toast" icon="flag">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="toast" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="toast" color="danger" icon="circle-x">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="toast" color="warning" icon="warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="toast" color="info" icon="circle-info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="toast" color="muted" icon="circle-info">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -toast" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Success -->
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Danger -->
<div class="chi-alert -toast -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Warning -->
<div class="chi-alert -toast -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Info -->
<div class="chi-alert -toast -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Muted -->
<div class="chi-alert -toast -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Default","title-size":"h4",id:"toast_default_lumen_centurylink",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",type:"toast",icon:"flag",mutable:null},"This is a base alert",-1),e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-check",color:"success",mutable:null},"This is a success alert",-1),e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-x",color:"danger",mutable:null},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",type:"toast",icon:"warning",color:"warning",mutable:null},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-info",color:"info",mutable:null},"This is an info alert",-1),e("chi-alert",{class:"-m--2",type:"toast",icon:"circle-info",color:"muted",mutable:null},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("To use a toast alert, set the "),e("code",null,"type"),c(" attribute to "),e("code",null,"toast"),c(".")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("To use a toast alert, apply the class "),e("code",null,"-toast"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),R=h({__name:"_toast_titled_lumen_centurylink",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert type="toast" icon="flag" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="toast" icon="circle-check" color="success" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="toast" color="danger" icon="circle-x" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="toast" color="warning" icon="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="toast" color="info" icon="circle-info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="toast" color="muted" icon="circle-info" title="Muted">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert -toast" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Success -->
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Danger -->
<div class="chi-alert -toast -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Warning -->
<div class="chi-alert -toast -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Info -->
<div class="chi-alert -toast -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Muted -->
<div class="chi-alert -toast -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Titled","title-size":"h4",id:"toast_titled_lumen_centurylink",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",type:"toast",icon:"flag",title:"Base",mutable:null},"This is a base alert",-1),e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",title:"success",mutable:null},"This is a success alert",-1),e("chi-alert",{class:"-m--2",type:"toast",color:"danger",icon:"circle-x",title:"danger",mutable:null},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",type:"toast",color:"warning",icon:"warning",title:"warning",mutable:null},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",type:"toast",color:"info",icon:"circle-info",title:"info",mutable:null},"This is an info alert",-1),e("chi-alert",{class:"-m--2",type:"toast",color:"muted",icon:"circle-info",title:"muted",mutable:null},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),q=h({__name:"_toast_sizes_lumen_centurylink",setup(d){const a=C(),r={webcomponent:()=>{const i=`<!-- Small -->
<chi-alert type="toast" color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert type="toast" color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert type="toast" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert type="toast" color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>`;return a.value==="portal"?i:[i,`<!-- Large -->
<chi-alert type="toast" color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert type="toast" color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`].join(`
`)},htmlblueprint:()=>{const i=`<!-- Small -->
<div class="chi-alert -toast -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Small Titled -->
<div class="chi-alert -toast -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Medium -->
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Medium Titled -->
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`;return a.value==="portal"?i:[i,`<!-- Large -->
<div class="chi-alert -toast -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Large Titled -->
<div class="chi-alert -toast -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`].join(`
`)}};return(i,t)=>{const n=u,b=_;return o(),p(b,{title:"Sizes","title-size":"h4",id:"toast_sizes_lumen_centurylink",padding:"-p--1"},{example:l(()=>[t[3]||(t[3]=e("p",{class:"-text--bold -ml--2"},"sm",-1)),t[4]||(t[4]=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"sm",mutable:null},"This is a small success alert",-1)),t[5]||(t[5]=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"sm",title:"Success",mutable:null},"This is a small success alert",-1)),t[6]||(t[6]=e("p",{class:"-text--bold -ml--2"},"md (default)",-1)),t[7]||(t[7]=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",mutable:null},"This is a success alert",-1)),t[8]||(t[8]=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",title:"Success",mutable:null},"This is a success alert",-1)),T(a)!=="portal"?(o(),v(k,{key:0},[t[0]||(t[0]=e("p",{class:"-text--bold -ml--2"},"lg",-1)),t[1]||(t[1]=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"lg",mutable:null},"This is a large success alert",-1)),t[2]||(t[2]=e("chi-alert",{class:"-m--2",type:"toast",color:"success",icon:"circle-check",size:"lg",title:"Success",mutable:null},"This is a large success alert",-1))],64)):f("",!0)]),"code-webcomponent":l(()=>[t[9]||(t[9]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the "),e("code",null,'size=""'),c(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),c(", "),e("code",null,"md"),c(", and "),e("code",null,"lg"),c(".")])],-1)),s(n,{lang:"html",code:r.webcomponent()},null,8,["code"])]),"code-htmlblueprint":l(()=>[t[10]||(t[10]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),c(", "),e("code",null,"-md"),c(", and "),e("code",null,"-lg"),c(".")])],-1)),s(n,{lang:"html",code:r.htmlblueprint()},null,8,["code"])]),_:1})}}}),G=h({__name:"_bubble_default",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert icon="flag">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-x">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Default","title-size":"h4",id:"bubble_default",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("chi-alert",{class:"-m--2",icon:"flag"},"This is a base alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-x"},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning"},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info"},"This is an info alert",-1),e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info"},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("To render an alert use the tag "),e("code",null,"chi-alert"),c(". Use the color attribute to define a semantic color that corresponds to the meaning or value state of your alert. Supported colors include "),e("code",null,"success"),c(", "),e("code",null,"danger"),c(", "),e("code",null,"warning"),c(", "),e("code",null,"info"),c(", and "),e("code",null,"muted"),c(". If no color is defined, alerts will default to the base style which uses the body text color. This is useful for displaying neutral alerts with no specific value state.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("To render an alert, use the class "),e("code",null,"chi-alert"),c(". Apply a semantic color class that corresponds to the meaning or value state of your alert. Supported classes include "),e("code",null,"-success"),c(", "),e("code",null,"-danger"),c(", "),e("code",null,"-warning"),c(", "),e("code",null,"-info"),c(", and "),e("code",null,"-muted"),c(". If no class is defined, alerts will default to the base style which uses the body text color. This is useful for displaying neutral alerts with no specific value state.")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),x=h({__name:"_bubble_titled",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert icon="flag" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-x" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info" title="Muted">
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-x" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Titled","title-size":"h4",id:"bubble_titled",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},"The title will automatically get colored based on the alerts semantic color class.",-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",icon:"flag",title:"Base"},"This is a base alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"success"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-x",title:"danger"},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"warning"},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",title:"info"},"This is an info alert",-1),e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",title:"muted"},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the "),e("code",null,'title=""'),c(" attribute to display a title above the alert text.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use "),e("code",null,"chi-alert__title"),c(" to add a title to an Alert. To override the title color, apply a text color utility class.")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),K=h({__name:"_bubble_clickable",setup(d){const a={webcomponent:`<!-- Clickable alert using chi-link -->
<chi-link href="#" class="-d--block" no-underline no-hover-underline>
  <chi-alert color="info" icon="file" title="Complete platform setup" class="-w--100">
    <chi-icon icon="chevron-right" slot="chi-alert__clickable-icon"></chi-icon>
  </chi-alert>
</chi-link>

<!-- Clickable alert using chi-button -->
<chi-button variant="flat" extra-class="-b--0 -p--0 -text--no-transform -no-hover" fluid>
  <chi-alert color="info" icon="settings" title="Configure your first device" class="-w--100">
    <chi-icon icon="chevron-right" slot="chi-alert__clickable-icon"></chi-icon>
  </chi-alert>
</chi-button>`,htmlblueprint:`<!-- Clickable alert using chi-link -->
<a href="#" class="chi-link -no-underline -no-hover-underline">
  <div class="chi-alert -info" role="alert">
    <i class="chi-alert__icon chi-icon icon-flag" aria-hidden="true"></i>
    <div class="chi-alert__content">
      <p class="chi-alert__title">Complete platform setup</p>
    </div>
    <div class="chi-alert__clickable-icon">
      <i class="chi-icon icon-chevron-right"></i>
    </div>
  </div>
</a>

<!-- Clickable alert using chi-button -->
<button class="chi-button -flat -fluid -b--0 -p--0 -text--no-transform -no-hover">
  <div class="chi-button__content">
    <div class="chi-alert -info -w--100" role="alert">
      <i class="chi-alert__icon chi-icon icon-settings -icon--info" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__title">Configure your first device</p>
      </div>
      <div class="chi-alert__clickable-icon">
        <i class="chi-icon icon-chevron-right"></i>
      </div>
    </div>
  </div>
</button>
`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Clickable","title-size":"h4",id:"alert_closable_interaction"},{example:l(()=>i[0]||(i[0]=[e("chi-link",{href:"#",class:"-d--block -mb--2","no-underline":"","no-hover-underline":""},[e("chi-alert",{color:"info",icon:"file",class:"-w--100",title:"Complete platform setup"},[e("chi-icon",{icon:"chevron-right",slot:"chi-alert__clickable-icon"})])],-1),e("chi-button",{variant:"flat","extra-class":"-b--0 -p--0 -text--no-transform -no-hover",fluid:""},[e("chi-alert",{color:"info",icon:"settings",class:"-w--100",title:"Configure your first device"},[e("chi-icon",{icon:"chevron-right",slot:"chi-alert__clickable-icon"})])],-1)])),"code-webcomponent":l(()=>[s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),P=h({__name:"_bubble_sizes",setup(d){const a={webcomponent:`<!-- Small -->
<chi-alert color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>`,htmlblueprint:`<!-- Small -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Small Titled -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Medium -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Medium Titled -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Sizes","title-size":"h4",id:"bubble_sizes_portal",padding:"-p--1"},{example:l(()=>i[0]||(i[0]=[e("p",{class:"-text--bold -ml--2"},"sm",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm"},"This is a small success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",size:"sm",title:"Success"},"This is a small success alert",-1),e("p",{class:"-text--bold -ml--2"},"md (default)",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check"},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",title:"Success"},"This is a success alert",-1)])),"code-webcomponent":l(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the "),e("code",null,'size=""'),c(" attribute to customize the size of an alert. Supported sizes are "),e("code",null,"sm"),c(" and "),e("code",null,"md"),c(".")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use size classes to customize the size of an alert. Supported size classes are "),e("code",null,"-sm"),c(" and "),e("code",null,"-md"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),Q=h({__name:"_bubble_closable",setup(d){const a={webcomponent:`<!-- closable -->
<chi-alert color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>`,htmlblueprint:`<!-- Closable -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- closable Titled -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Closable","title-size":"h4",id:"bubble_closable_portal",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},"To allow users to dismiss an alert.",-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",closable:"",mutable:null},"This is a closable warning alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",title:"Warning",closable:"",mutable:null},"This is a closable warning alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use attribute "),e("code",null,"closable"),c(" to render a close button that allows users to dismiss an alert.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the class "),e("code",null,"-close"),c(" and insert a close button "),e("code",null,"chi-alert__close-button"),c(".")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),w=h({__name:"_bubble_spinner",setup(d){const a={webcomponent:`<!-- Base - No semantic color defined -->
<chi-alert icon="flag" spinner>
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check" spinner>
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-x" spinner>
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning" spinner>
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info" spinner>
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info" spinner>
  This is a muted alert
</chi-alert>`,htmlblueprint:`<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <div class="chi-alert__spinner">
    <svg class="chi-spinner" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <div class="chi-alert__spinner">
    <svg class="chi-spinner" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <div class="chi-alert__spinner">
    <svg class="chi-spinner" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <div class="chi-alert__spinner">
    <svg class="chi-spinner" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <div class="chi-alert__spinner">
    <svg class="chi-spinner" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
  <div class="chi-alert__spinner">
    <svg class="chi-spinner" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Spinner","title-size":"h4",id:"bubble_spinner",padding:"-p--1"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},"Use the spinner attribute to let users know when information is saving or loading.",-1)])),example:l(()=>i[1]||(i[1]=[e("chi-alert",{class:"-m--2",icon:"flag",spinner:""},"This is a spinner alert",-1),e("chi-alert",{class:"-m--2",color:"success",icon:"circle-check",spinner:""},"This is a success alert",-1),e("chi-alert",{class:"-m--2",color:"danger",icon:"circle-x",spinner:""},"This is a danger alert",-1),e("chi-alert",{class:"-m--2",color:"warning",icon:"warning",spinner:""},"This is a warning alert",-1),e("chi-alert",{class:"-m--2",color:"info",icon:"circle-info",spinner:""},"This is an info alert",-1),e("chi-alert",{class:"-m--2",color:"muted",icon:"circle-info",spinner:""},"This is a muted alert",-1)])),"code-webcomponent":l(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use the "),e("code",null,"spinner"),c(" attribute to display a spinner inside the alert.")])],-1)),s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i[3]||(i[3]=e("div",{class:"chi-tab__description"},[e("span",null,[c("Use "),e("code",null,"spinner"),c(" to add a spinner to an Alert.")])],-1)),s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),X={ref:"alert-container"},y=h({__name:"_bubble_closable_interaction",setup(d){const a=S("alert-container"),r={webcomponent:`<!-- Trigger -->
<chi-button id="alert-trigger-button" color="primary">Click me to show the alert</chi-button>

<!-- Alert -->
<chi-alert id="interactive-alert" icon="warning" color="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>

<!-- Javascript -->
<script>
  const interactiveAlertTrigger = document.getElementById('alert-trigger-button');

  interactiveAlertTrigger.addEventListener('chiClick', () => {
    <!-- Include your custom logic here to launch the alert -->
  })
<\/script>`,htmlblueprint:`<!-- Trigger -->
<button class="chi-button -primary" id="alert-trigger-button">Click me to show the alert</button>

<!-- Alert -->
<div class="chi-alert" role="alert" id="interactive-alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>

<!-- Javascript -->
<script>
const interactiveAlertTrigger = document.getElementById('alert-trigger-button');

interactiveAlertTrigger.addEventListener('click', () => {
    < !--Include your custom logic here to launch the alert-- >
  })
<\/script>`},i=()=>{var b;const t=document.createElement("chi-alert"),n={color:"warning",title:"Warning",icon:"warning",closable:!0};t.classList.add("-mt--2"),t.innerText="This is a closable warning alert",Object.entries(n).forEach(([m,g])=>t.setAttribute(m,g)),(b=a.value)==null||b.appendChild(t)};return(t,n)=>{const b=u,m=z,g=_;return o(),p(g,{title:"Closable alert interaction","title-size":"h4",id:"alert_closable_interaction"},{example:l(()=>[e("chi-button",{id:"alert-trigger-button",color:"primary",onClick:i},"Click me to show the alert"),e("div",X,null,512)]),"code-webcomponent":l(()=>[s(b,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(m),s(b,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),Y=h({__name:"_bubble_clickable",setup(d){const a={webcomponent:`<!-- Clickable alert using chi-link -->
<chi-link href="#" class="-d--block" no-underline no-hover-underline>
  <chi-alert color="info" icon="file" class="-w--100">
    <span class="-text--primary -text--semi-bold -flex--grow1">Complete platform setup</span>
    <chi-icon icon="chevron-right" slot="chi-alert__clickable-icon"></chi-icon>
  </chi-alert>
</chi-link>

<!-- Clickable alert using chi-button -->
<chi-button variant="flat" extra-class="-b--0 -p--0 -text--no-transform -no-hover" fluid>
  <chi-alert color="info" icon="settings" class="-w--100">
    <span class="-text--primary -text--semi-bold -flex--grow1">Configure your first device</span>
    <chi-icon icon="chevron-right" slot="chi-alert__clickable-icon"></chi-icon>
  </chi-alert>
</chi-button>`,htmlblueprint:`<!-- Clickable alert using chi-link -->
<a href="#" class="chi-link -no-underline -no-hover-underline">
  <div class="chi-alert -info" role="alert">
    <i class="chi-alert__icon chi-icon icon-file" aria-hidden="true"></i>
    <div class="chi-alert__content">
      <p class="chi-alert__text -text--primary -text--semi-bold">Complete platform setup</p>
    </div>
    <div class="chi-alert__clickable-icon">
      <i class="chi-icon icon-chevron-right"></i>
    </div>
  </div>
</a>

<!-- Clickable alert using chi-button -->
<button class="chi-button -flat -fluid -b--0 -p--0 -text--no-transform -no-hover">
  <div class="chi-button__content">
    <div class="chi-alert -info -w--100" role="alert">
      <i class="chi-alert__icon chi-icon icon-settings -icon--info" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__text -text--primary -text--semi-bold">Configure your first device</p>
      </div>
      <div class="chi-alert__clickable-icon">
        <i class="chi-icon icon-chevron-right"></i>
      </div>
    </div>
  </div>
</button>
`};return(r,i)=>{const t=u,n=_;return o(),p(n,{title:"Clickable","title-size":"h4",id:"alert_bubble_clickable"},{"example-description":l(()=>i[0]||(i[0]=[e("p",{class:"-text"},"Make an Alert clickable by placing it inside a link or button component.",-1)])),example:l(()=>i[1]||(i[1]=[e("chi-link",{href:"#",class:"-d--block -mb--2","no-underline":"","no-hover-underline":""},[e("chi-alert",{color:"info",icon:"file",class:"-w--100"},[e("span",{class:"-text--primary -text--semi-bold -flex--grow1"},"Complete platform setup"),e("chi-icon",{icon:"chevron-right",slot:"chi-alert__clickable-icon"})])],-1),e("chi-button",{variant:"flat","extra-class":"-b--0 -p--0 -text--no-transform -no-hover",fluid:""},[e("chi-alert",{color:"info",icon:"settings",class:"-w--100"},[e("span",{class:"-text--primary -text--semi-bold -flex--grow1"},"Configure your first device"),e("chi-icon",{icon:"chevron-right",slot:"chi-alert__clickable-icon"})])],-1)])),"code-webcomponent":l(()=>[s(t,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(t,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),Z={ref:"alert-container"},ee=h({__name:"_toast_auto_closing",setup(d){const a=S("alert-container"),r=()=>{var b;const t=document.createElement("chi-alert"),n={type:"toast",icon:"warning",title:"Warning",color:"warning","expiration-time":"4"};t.classList.add("-mt--2"),t.innerText="This is auto closing alert",Object.entries(n).forEach(([m,g])=>t.setAttribute(m,g)),(b=a.value)==null||b.appendChild(t)},i={webcomponent:`<!-- Trigger -->
<chi-button id="alert-trigger-button" color="primary">Click me to show the alert</chi-button>

<!-- Alert -->
<chi-alert id="auto-close-alert" type='toast' icon="warning" title="Warning" color="warning" expiration-time="4" >
  This is auto closing alert
</chi-alert>

<!-- Javascript -->
<script>
  const autoCloseAlertTrigger = document.getElementById('alert-trigger-button');

  autoCloseAlertTrigger.addEventListener('chiClick', () => {
    <!-- Include your custom logic here to launch the alert -->
  })
<\/script>`,htmlblueprint:`<!-- Trigger -->
<button class="chi-button -primary" id="alert-trigger-button">Click me to show the alert</button>

<!-- Alert -->
<div class="chi-alert -toast" role="alert" id="auto-close-alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is auto closing warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>

<!-- Javascript -->
<script>
  const autoCloseAlertTrigger = document.getElementById('alert-trigger-button');
  const autoCloseAlert = document.getElementById('auto-close-alert');

  setTimeout(() => {
      autoCloseAlert.parentNode.removeChild(autoCloseAlert);
  }, this.expirationTime * 1000);

  autoCloseAlertTrigger.addEventListener('click', () => {
    <!-- Include your custom logic here to launch the alert -->
  })
<\/script>`};return(t,n)=>{const b=u,m=z,g=_;return o(),p(g,{title:"Auto closing alert","title-size":"h4",id:"alert_toast_auto_closing"},{example:l(()=>[e("chi-button",{id:"alert-trigger-button",color:"primary",onClick:r},"Click me to show the alert"),e("div",Z,null,512)]),"code-webcomponent":l(()=>[s(b,{lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(m),s(b,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),ie={key:0},ce={key:1},re=h({__name:"index",setup(d){const a=C();return(r,i)=>(o(),v("div",null,[i[4]||(i[4]=e("h2",null,"Examples",-1)),i[5]||(i[5]=e("h3",null,"Bubble",-1)),i[6]||(i[6]=e("p",{class:"-text"},"Bubble alerts are designed for displaying inline messages and notifications within forms, panels, cards, and other content areas. They are Chi's default Alert type.",-1)),s(G),["lumen","centurylink"].includes(T(a))?(o(),v("div",ie,[s(E),s(x),s(w),s(M),s(I),s(y),s(Y),s(L),i[0]||(i[0]=e("div",{class:"chi-divider -my--6 -bt--2"},null,-1)),i[1]||(i[1]=e("h3",null,"Banner",-1)),i[2]||(i[2]=e("p",{class:"-text"},"Banner alerts are commonly presented above or below the Header component and are used for scenarios such as reminding new users to confirm their email address or notifying users when they are experiencing connectivity issues.",-1)),s(U),s(D),s(N),s(j),s(V),s(F),i[3]||(i[3]=e("div",{class:"chi-divider -my--6 -bt--2"},null,-1))])):f("",!0),T(a)==="portal"?(o(),v("div",ce,[s(x),s(w),s(P),s(Q),s(y),s(K),s($)])):f("",!0),i[7]||(i[7]=e("h3",null,"Toast",-1)),i[8]||(i[8]=e("p",{class:"-text"},"Toasts are unobtrusive alerts used to display brief, auto-expiring information.",-1)),s(H),s(R),s(ee),s(q)]))}});export{re as _};
