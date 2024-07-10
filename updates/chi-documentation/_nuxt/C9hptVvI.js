var N=Object.defineProperty;var U=(c,n,s)=>n in c?N(c,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[n]=s;var h=(c,n,s)=>U(c,typeof n!="symbol"?n+"":n,s);import{V as g,N as m}from"./uJTUijt2.js";import{_}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as u,f as $,w as r,b as d,a as e,d as l,r as b,c as F,F as W}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import{_ as L}from"./C-hgEc7b.js";import V from"./CbMuqlQY.js";import G from"./DsbAxM3p.js";import{s as q}from"./2EwpEKcw.js";import{_ as J}from"./Be4hAolY.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,R=(c,n,s,i)=>{for(var a=i>1?void 0:i?Q(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&K(n,s,a),a};let A=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<!-- For light backgrounds -->
<chi-badge>Base</chi-badge>
<chi-badge color="primary">Primary</chi-badge>
<chi-badge color="success">Success</chi-badge>
<chi-badge color="warning">Warning</chi-badge>
<chi-badge color="danger">Danger</chi-badge>
<chi-badge color="dark">Dark</chi-badge>
<chi-badge color="muted">Muted</chi-badge>

<chi-badge color="accent-1">Accent-1</chi-badge>
<chi-badge color="accent-2">Accent-2</chi-badge>
<chi-badge color="accent-3">Accent-3</chi-badge>
<chi-badge color="accent-4">Accent-4</chi-badge>
<chi-badge color="accent-5">Accent-5</chi-badge>

<!-- For dark backgrounds -->
<chi-badge color="secondary">Secondary</chi-badge>
<chi-badge color="light">Light</chi-badge>`,htmlblueprint:`<!-- For light backgrounds -->
<div class="chi-badge">
  <span>Base</span>
</div>
<div class="chi-badge -primary">
  <span>Primary</span>
</div>
<div class="chi-badge -success">
  <span>Success</span>
</div>
<div class="chi-badge -warning">
  <span>Warning</span>
</div>
<div class="chi-badge -danger">
  <span>Danger</span>
</div>
<div class="chi-badge -dark">
  <span>Dark</span>
</div>
<div class="chi-badge -muted">
  <span>Muted</span>
</div>

<div class="chi-badge -accent-1">
  <span>Accent-1</span>
</div>
<div class="chi-badge -accent-2">
  <span>Accent-2</span>
</div>
<div class="chi-badge -accent-3">
  <span>Accent-3</span>
</div>
<div class="chi-badge -accent-4">
  <span>Accent-4</span>
</div>
<div class="chi-badge -accent-5">
  <span>Accent-5</span>
</div>

<!-- For dark backgrounds -->
<div class="chi-badge -secondary">
  <span>Secondary</span>
</div>
<div class="chi-badge -light">
  <span>Light</span>
</div>`})}};A=R([m({})],A);const X=e("div",{class:"chi-grid -no-gutter"},[e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -text--center"},[e("chi-badge",{class:"-m--1"},"Base"),e("chi-badge",{class:"-m--1",color:"primary"},"Primary"),e("chi-badge",{class:"-m--1",color:"success"},"Success"),e("chi-badge",{class:"-m--1",color:"warning"},"Warning"),e("chi-badge",{class:"-m--1",color:"danger"},"Danger"),e("chi-badge",{class:"-m--1",color:"dark"},"Dark"),e("chi-badge",{class:"-m--1",color:"muted"},"Muted")])]),e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -text--center"},[e("chi-badge",{class:"-m--1",color:"accent-1"},"Accent-1"),e("chi-badge",{class:"-m--1",color:"accent-2"},"Accent-2"),e("chi-badge",{class:"-m--1",color:"accent-3"},"Accent-3"),e("chi-badge",{class:"-m--1",color:"accent-4"},"Accent-4"),e("chi-badge",{class:"-m--1",color:"accent-5"},"Accent-5")])]),e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -bg--black -text--center"},[e("chi-badge",{class:"-m--1",color:"secondary"},"Secondary"),e("chi-badge",{class:"-m--1",color:"light"},"Light")])])],-1),Y=e("div",{class:"chi-tab__description"},[l("To display a badge, use the tag "),e("code",null,"<chi-badge>"),l(". A contextual color (e.g. "),e("code",null,"primary"),l(") can be defined on the "),e("code",null,"color"),l(" attribute to provide alternate styling.")],-1),Z=e("div",{class:"chi-tab__description"},[l("To display a badge, use the class "),e("code",null,"chi-badge"),l(". A contextual class (e.g. "),e("code",null,"-primary"),l(") can be applied to provide alternate styling.")],-1);function k(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Solid",id:"solid",tabs:c.exampleTabs,padding:"-p--0"},{example:r(()=>[X]),"code-webcomponent":r(()=>[Y,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[Z,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ee=v(A,[["render",k]]);var ae=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,ne=(c,n,s,i)=>{for(var a=i>1?void 0:i?ce(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&ae(n,s,a),a};let y=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<!-- For light backgrounds -->
<chi-badge color="primary" variant="outline">Primary</chi-badge>
<chi-badge color="success" variant="outline">Success</chi-badge>
<chi-badge color="warning" variant="outline">Warning</chi-badge>
<chi-badge color="danger" variant="outline">Danger</chi-badge>
<chi-badge color="dark" variant="outline">Dark</chi-badge>
<chi-badge color="muted" variant="outline">Muted</chi-badge>

<chi-badge color="accent-1" variant="outline">Accent-1</chi-badge>
<chi-badge color="accent-2" variant="outline">Accent-2</chi-badge>
<chi-badge color="accent-3" variant="outline">Accent-3</chi-badge>
<chi-badge color="accent-4" variant="outline">Accent-4</chi-badge>
<chi-badge color="accent-5" variant="outline">Accent-5</chi-badge>

<!-- For dark backgrounds -->
<chi-badge color="secondary" variant="outline">Secondary</chi-badge>
<chi-badge color="light" variant="outline">Light</chi-badge>`,htmlblueprint:`<!-- For light backgrounds -->
<div class="chi-badge -primary -outline">
  <span>Primary</span>
</div>
<div class="chi-badge -success -outline">
  <span>Success</span>
</div>
<div class="chi-badge -warning -outline">
  <span>Success</span>
</div>
<div class="chi-badge -danger -outline">
  <span>Danger</span>
</div>
<div class="chi-badge -dark -outline">
  <span>Dark</span>
</div>
<div class="chi-badge -muted -outline">
  <span>Muted</span>
</div>

<div class="chi-badge -accent-1 -outline">
  <span>Accent-1</span>
</div>
<div class="chi-badge -accent-2 -outline">
  <span>Accent-2</span>
</div>
<div class="chi-badge -accent-3 -outline">
  <span>Accent-3</span>
</div>
<div class="chi-badge -accent-4 -outline">
  <span>Accent-4</span>
</div>
<div class="chi-badge -accent-5 -outline">
  <span>Accent-5</span>
</div>

<!-- For dark backgrounds -->
<div class="chi-badge -secondary -outline">
  <span>Secondary</span>
</div>
<div class="chi-badge -light -outline">
  <span>Light</span>
</div>`})}};y=ne([m({})],y);const te=e("div",{class:"chi-grid -no-gutter"},[e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -text--center"},[e("chi-badge",{class:"-m--1",color:"primary",variant:"outline"},"Primary"),e("chi-badge",{class:"-m--1",color:"success",variant:"outline"},"Success"),e("chi-badge",{class:"-m--1",color:"warning",variant:"outline"},"Warning"),e("chi-badge",{class:"-m--1",color:"danger",variant:"outline"},"Danger"),e("chi-badge",{class:"-m--1",color:"dark",variant:"outline"},"Dark"),e("chi-badge",{class:"-m--1",color:"muted",variant:"outline"},"Muted")])]),e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -text--center"},[e("chi-badge",{class:"-m--1",color:"accent-1",variant:"outline"},"Accent-1"),e("chi-badge",{class:"-m--1",color:"accent-2",variant:"outline"},"Accent-2"),e("chi-badge",{class:"-m--1",color:"accent-3",variant:"outline"},"Accent-3"),e("chi-badge",{class:"-m--1",color:"accent-4",variant:"outline"},"Accent-4"),e("chi-badge",{class:"-m--1",color:"accent-5",variant:"outline"},"Accent-5")])]),e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -bg--black -text--center"},[e("chi-badge",{class:"-m--1",color:"secondary",variant:"outline"},"Secondary"),e("chi-badge",{class:"-m--1",color:"light",variant:"outline"},"Light")])])],-1),ie=e("div",{class:"chi-tab__description"},[l("To remove solid background and keep its colored border, set the "),e("code",null,"variant"),l(" attribute value to "),e("code",null,"outline"),l(".")],-1),se=e("div",{class:"chi-tab__description"},[l("To remove solid background and keep its colored border, apply the class "),e("code",null,"-outline"),l(".")],-1);function oe(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Outline",id:"outline",tabs:c.exampleTabs,padding:"-p--0"},{example:r(()=>[te]),"code-webcomponent":r(()=>[ie,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[se,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const le=v(y,[["render",oe]]);var de=Object.defineProperty,re=Object.getOwnPropertyDescriptor,pe=(c,n,s,i)=>{for(var a=i>1?void 0:i?re(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&de(n,s,a),a};let B=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<!-- For light backgrounds -->
<chi-badge color="primary" variant="flat">Primary</chi-badge>
<chi-badge color="success" variant="flat">Success</chi-badge>
<chi-badge color="warning" variant="flat">Warning</chi-badge>
<chi-badge color="danger" variant="flat">Danger</chi-badge>
<chi-badge color="dark" variant="flat">Dark</chi-badge>
<chi-badge color="muted" variant="flat">Muted</chi-badge>

<chi-badge color="accent-1" variant="flat">Accent-1</chi-badge>
<chi-badge color="accent-2" variant="flat">Accent-2</chi-badge>
<chi-badge color="accent-3" variant="flat">Accent-3</chi-badge>
<chi-badge color="accent-4" variant="flat">Accent-4</chi-badge>
<chi-badge color="accent-5" variant="flat">Accent-5</chi-badge>

<!-- For dark backgrounds -->
<chi-badge color="secondary" variant="flat">Secondary</chi-badge>
<chi-badge color="light" variant="flat">Light</chi-badge>`,htmlblueprint:`<!-- For light backgrounds -->
<div class="chi-badge -primary -flat">
  <span>Primary</span>
</div>
<div class="chi-badge -success -flat">
  <span>Success</span>
</div>
<div class="chi-badge -warning -flat">
  <span>Warning</span>
</div>
<div class="chi-badge -danger -flat">
  <span>Danger</span>
</div>
<div class="chi-badge -dark -flat">
  <span>Dark</span>
</div>
<div class="chi-badge -muted -flat">
  <span>Muted</span>
</div>

<div class="chi-badge -accent-1 -flat">
  <span>Accent-1</span>
</div>
<div class="chi-badge -accent-2 -flat">
  <span>Accent-2</span>
</div>
<div class="chi-badge -accent-3 -flat">
  <span>Accent-3</span>
</div>
<div class="chi-badge -accent-4 -flat">
  <span>Accent-4</span>
</div>
<div class="chi-badge -accent-5 -flat">
  <span>Accent-5</span>
</div>

<!-- For dark backgrounds -->
<div class="chi-badge -secondary -flat">
  <span>Secondary</span>
</div>
<div class="chi-badge -light -flat">
  <span>Light</span>
</div>`})}};B=pe([m({})],B);const he=e("div",{class:"chi-grid -no-gutter"},[e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -text--center"},[e("chi-badge",{class:"-m--1",color:"primary",variant:"flat"},"Primary"),e("chi-badge",{class:"-m--1",color:"success",variant:"flat"},"Success"),e("chi-badge",{class:"-m--1",color:"warning",variant:"flat"},"Warning"),e("chi-badge",{class:"-m--1",color:"danger",variant:"flat"},"Danger"),e("chi-badge",{class:"-m--1",color:"dark",variant:"flat"},"Dark"),e("chi-badge",{class:"-m--1",color:"muted",variant:"flat"},"Muted")])]),e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -text--center"},[e("chi-badge",{class:"-m--1",color:"accent-1",variant:"flat"},"Accent-1"),e("chi-badge",{class:"-m--1",color:"accent-2",variant:"flat"},"Accent-2"),e("chi-badge",{class:"-m--1",color:"accent-3",variant:"flat"},"Accent-3"),e("chi-badge",{class:"-m--1",color:"accent-4",variant:"flat"},"Accent-4"),e("chi-badge",{class:"-m--1",color:"accent-5",variant:"flat"},"Accent-5")])]),e("div",{class:"chi-col -w--12"},[e("div",{class:"-p--2 -bg--black -text--center"},[e("chi-badge",{class:"-m--1",color:"secondary",variant:"flat"},"Secondary"),e("chi-badge",{class:"-m--1",color:"light",variant:"flat"},"Light")])])],-1),be=e("div",{class:"chi-tab__description"},[l("To render a badge without background and border, set the "),e("code",null,"variant"),l(" attribute value to "),e("code",null,"flat"),l(".")],-1),ge=e("div",{class:"chi-tab__description"},[l("To render a badge without background and border, apply the class "),e("code",null,"-flat"),l(".")],-1);function me(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Flat",id:"flat",tabs:c.exampleTabs,padding:"-p--0"},{example:r(()=>[he]),"code-webcomponent":r(()=>[be,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[ge,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ue=v(B,[["render",me]]);var ve=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,fe=(c,n,s,i)=>{for(var a=i>1?void 0:i?_e(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&ve(n,s,a),a};let P=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<chi-badge>
  <chi-icon icon="plus" size="xs"></chi-icon>
  <span>Badge</span>
</chi-badge>
<chi-badge>
  <span>Badge</span>
  <chi-icon icon="x" size="xs"></chi-icon>
</chi-badge>
<chi-badge variant="flat" color="success">
  <chi-icon icon="circle"></chi-icon>
  <span>Active</span>
</chi-badge>
<chi-badge variant="flat" color="warning">
  <chi-icon icon="circle-clock"></chi-icon>
  <span>Away</span>
</chi-badge>
<chi-badge variant="flat" color="danger">
  <chi-icon icon="circle-minus"></chi-icon>
  <span>Do not Disturb</span>
</chi-badge>
<chi-badge variant="flat" color="muted">
  <chi-icon icon="circle"></chi-icon>
  <span>Offline</span>
</chi-badge>`,htmlblueprint:`<div class="chi-badge">
  <div class="chi-badge__content">
    <i class="chi-icon -xs icon-plus" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>
<div class="chi-badge">
  <div class="chi-badge__content">
    <span>Badge</span>
    <i class="chi-icon -xs icon-x" aria-hidden="true"></i>
  </div>
</div>
<div class="chi-badge -flat -success">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle" aria-hidden="true"></i>
    <span>Active</span>
  </div>
</div>
<div class="chi-badge -flat -warning">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle-clock" aria-hidden="true"></i>
    <span>Away</span>
  </div>
</div>
<div class="chi-badge -flat -danger">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle-minus" aria-hidden="true"></i>
    <span>Do not disturb</span>
  </div>
</div>
<div class="chi-badge -flat -muted">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle" aria-hidden="true"></i>
    <span>Offline</span>
  </div>
</div>`})}};P=fe([m({})],P);const $e=e("p",{class:"-text"},"Icons can be placed before, after, or on both sides of text.",-1),xe=e("chi-badge",{class:"-m--1"},[e("chi-icon",{icon:"plus",size:"xs"}),e("span",null,"Badge")],-1),we=e("chi-badge",{class:"-m--1"},[e("span",null,"Badge"),e("chi-icon",{icon:"x",size:"xs"})],-1),Se=e("chi-badge",{class:"-m--1",variant:"flat",color:"success"},[e("chi-icon",{icon:"circle"}),e("span",null,"Active")],-1),Ae=e("chi-badge",{class:"-m--1",variant:"flat",color:"warning"},[e("chi-icon",{icon:"circle-clock"}),e("span",null,"Away")],-1),ye=e("chi-badge",{class:"-m--1",variant:"flat",color:"danger"},[e("chi-icon",{icon:"circle-minus"}),e("span",null,"Do not Disturb")],-1),Be=e("chi-badge",{class:"-m--1",variant:"flat",color:"muted"},[e("chi-icon",{icon:"circle"}),e("span",null,"Offline")],-1);function Pe(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Icon badges",id:"icon_badges",tabs:c.exampleTabs,padding:"-p--2"},{"example-description":r(()=>[]),example:r(()=>[xe,we,Se,Ae,ye,Be]),"code-webcomponent":r(()=>[d(t,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[d(t,{class:"html",lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),default:r(()=>[$e]),_:1},8,["tabs"])}const Oe=v(P,[["render",Pe]]);var Te=Object.defineProperty,De=Object.getOwnPropertyDescriptor,ze=(c,n,s,i)=>{for(var a=i>1?void 0:i?De(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&Te(n,s,a),a};let O=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<chi-badge size="sm">Badge</chi-badge>
<chi-badge size="sm" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,htmlblueprint:`<div class="chi-badge -sm">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -sm">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`})}};O=ze([m({})],O);const Ce=e("chi-badge",{class:"-m--1",size:"sm"},"Badge",-1),je=e("chi-badge",{class:"-m--1",size:"sm",variant:"flat"},[e("chi-icon",{icon:"atom"}),e("span",null,"Badge")],-1),Ee=e("div",{class:"chi-tab__description"},[l("Set the attribute "),e("code",null,"size"),l(" to "),e("code",null,"sm"),l(" to render small badges.")],-1),Fe=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"-sm"),l(" modifier class to render small badges.")],-1);function We(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Small",titleSize:"h4",id:"small_size",tabs:c.exampleTabs,padding:"-p--2"},{example:r(()=>[Ce,je]),"code-webcomponent":r(()=>[Ee,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[Fe,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Le=v(O,[["render",We]]);var Me=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ie=(c,n,s,i)=>{for(var a=i>1?void 0:i?He(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&Me(n,s,a),a};let T=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<chi-badge size="xs">Badge</chi-badge>
<chi-badge size="xs" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,htmlblueprint:`<div class="chi-badge -xs">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -xs">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`})}};T=Ie([m({})],T);const Ne=e("chi-badge",{class:"-m--1",size:"xs"},"Badge",-1),Ue=e("chi-badge",{class:"-m--1",size:"xs",variant:"flat"},[e("chi-icon",{icon:"atom"}),e("span",null,"Badge")],-1),Ve=e("div",{class:"chi-tab__description"},[l("Set the attribute "),e("code",null,"size"),l(" to "),e("code",null,"xs"),l(" to render even smaller badges.")],-1),Ge=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"-xs"),l(" modifier class to render even smaller badges.")],-1);function qe(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Extra small",titleSize:"h4",id:"extrasmall_size",tabs:c.exampleTabs,padding:"-p--2"},{example:r(()=>[Ne,Ue]),"code-webcomponent":r(()=>[Ve,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[Ge,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Je=v(T,[["render",qe]]);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Re=(c,n,s,i)=>{for(var a=i>1?void 0:i?Qe(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&Ke(n,s,a),a};let D=class extends g{};D=Re([m({components:{SmallSize:Le,ExtraSmallSize:Je}})],D);const Xe=e("h3",null,"Additional Sizes",-1);function Ye(c,n,s,i,a,o){const t=b("SmallSize"),p=b("ExtraSmallSize");return u(),F(W,null,[Xe,d(t),d(p)],64)}const Ze=v(D,[["render",Ye]]);var ke=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,aa=(c,n,s,i)=>{for(var a=i>1?void 0:i?ea(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&ke(n,s,a),a};let z=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<chi-badge text-transform="uppercase">Badge</chi-badge>
<chi-badge text-transform="lowercase">BADGE</chi-badge>
<chi-badge text-transform="capitalized">badge</chi-badge>`,htmlblueprint:`<div class="chi-badge -text--uppercase">
  <span>Badge</span>
</div>
<div class="chi-badge -text--lowercase">
  <span>Badge</span>
</div>
<div class="chi-badge -text--capitalized">
  <span>Badge</span>
</div>`})}};z=aa([m({})],z);const ca=e("chi-badge",{class:"-m--1","text-transform":"uppercase"},"Badge",-1),na=e("chi-badge",{class:"-m--1","text-transform":"lowercase"},"BADGE",-1),ta=e("chi-badge",{class:"-m--1","text-transform":"capitalized"},"badge",-1),ia=e("div",{class:"chi-tab__description"},[l("Set the "),e("code",null,"text-transform"),l(" attribute to "),e("code",null,"uppercase"),l(" to render badges in uppercase, "),e("code",null,"lowercase"),l(" to render badges in lowercase and "),e("code",null,"capitalized"),l(" to render badges as capitalized.")],-1),sa=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"-text--uppercase"),l(" text utility class to render badges in all uppercase. "),e("code",null,"-text--lowercase"),l(" and "),e("code",null,"-text--capitalized"),l(" are also supported.")],-1);function oa(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Text transform",id:"text_transform",tabs:c.exampleTabs,padding:"-p--2"},{example:r(()=>[ca,na,ta]),"code-webcomponent":r(()=>[ia,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[sa,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const la=v(z,[["render",oa]]);var da=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,pa=(c,n,s,i)=>{for(var a=i>1?void 0:i?ra(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&da(n,s,a),a};let C=class extends g{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:`<chi-badge text-weight="normal">Badge</chi-badge>
<chi-badge text-weight="semi-bold">Badge</chi-badge>
<chi-badge text-weight="bold">Badge</chi-badge>`,htmlblueprint:`<div class="chi-badge -text--normal">
  <span>Badge</span>
</div>
<div class="chi-badge -text--semi-bold">
  <span>Badge</span>
</div>
<div class="chi-badge -text--bold">
  <span>Badge</span>
</div>`})}};C=pa([m({})],C);const ha=e("chi-badge",{class:"-m--1","text-weight":"normal"},"Badge",-1),ba=e("chi-badge",{class:"-m--1","text-weight":"semi-bold"},"Badge",-1),ga=e("chi-badge",{class:"-m--1","text-weight":"bold"},"Badge",-1),ma=e("div",{class:"chi-tab__description"},[l("Set "),e("code",null,"text-weight"),l(" to "),e("code",null,"normal"),l(" to render badges in a normal font-weight, "),e("code",null,"semi-bold"),l(" to render badges in a semi-bold font-weight and "),e("code",null,"bold"),l(" to render badges in a bold font-weight.")],-1),ua=e("div",{class:"chi-tab__description"},[l("Use the "),e("code",null,"-text--normal"),l(" text utility class to render badges in a normal font-weight, "),e("code",null,"-text--semi-bold"),l(" to render badges in a semi-bold font-weight "),e("code",null,"-text--bold"),l(" to render badges in a bold font-weight.")],-1);function va(c,n,s,i,a,o){const t=_,p=f;return u(),$(p,{title:"Text weight",id:"text_weight",tabs:c.exampleTabs,padding:"-p--2"},{example:r(()=>[ha,ba,ga]),"code-webcomponent":r(()=>[ma,d(t,{lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[ua,d(t,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _a=v(C,[["render",va]]);var fa=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,xa=(c,n,s,i)=>{for(var a=i>1?void 0:i?$a(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&fa(n,s,a),a};let j=class extends g{};j=xa([m({components:{Solid:ee,Outline:le,Flat:ue,IconBadges:Oe,AdditionalSizes:Ze,TextTransform:la,TextWeight:_a}})],j);const wa=e("h2",null,"Examples",-1),Sa=e("p",{class:"-text"},[l("Chi includes three badge variants: Solid, Outline, and Flat. Use "),e("code",null,"solid"),l(" badges for high emphasis,base or "),e("code",null,"outline"),l(" badges for medium emphasis, and "),e("code",null,"flat"),l(" badges for low emphasis.")],-1);function Aa(c,n,s,i,a,o){const t=b("Solid"),p=b("Outline"),x=b("Flat"),w=b("IconBadges"),S=b("AdditionalSizes"),M=b("TextTransform"),H=b("TextWeight"),I=L;return u(),F(W,null,[wa,Sa,d(I,{placeholder:"loading..."},{default:r(()=>[d(t),d(p),d(x),d(w),d(S),d(M),d(H)]),_:1})],64)}const ya=v(j,[["render",Aa]]);var Ba=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,Oa=(c,n,s,i)=>{for(var a=i>1?void 0:i?Pa(n,s):n,o=c.length-1,t;o>=0;o--)(t=c[o])&&(a=(i?t(n,s,a):t(a))||a);return i&&a&&Ba(n,s,a),a};let E=class extends g{constructor(){super(...arguments);h(this,"pageTabs",q)}};E=Oa([m({components:{Accessibility:G,Examples:ya,Properties:V}})],E);const Ta={class:"chi-grid__container -pt--3"},Da={class:"chi-tabs-panel -active",id:"examples"},za={class:"chi-tabs-panel",id:"properties"},Ca={class:"chi-tabs-panel",id:"accessibility"};function ja(c,n,s,i,a,o){const t=J,p=b("Examples"),x=b("Properties"),w=b("Accessibility"),S=L;return u(),F(W,null,[d(t,{title:"Badge",description:"Badges are inline elements used to label, categorize, or organize a list of items.",tabs:c.pageTabs},null,8,["tabs"]),e("div",Ta,[d(S,null,{default:r(()=>[e("div",Da,[d(p)]),e("div",za,[d(x)]),e("div",Ca,[d(w)])]),_:1})])],64)}const tc=v(E,[["render",ja]]);export{tc as default};
