var nt=Object.defineProperty;var ot=(e,t,c)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c;var m=(e,t,c)=>ot(e,typeof t!="symbol"?t+"":t,c);import{V as h,N as v}from"./NAah3XrW.js";import{o as d,h as y,w as r,a as o,d as p,b as s,c as $,F as et,i as it,t as lt,j as ct,m as b}from"./CEIPSiTs.js";import{_ as g}from"./onyWiYp2.js";import{_ as L}from"./CAQzZ0uH.js";import{_}from"./DlAUqK2U.js";import{_ as H}from"./CS2TcPBX.js";import at from"./Een1c90F.js";import st from"./CXCGWNeN.js";import rt from"./Bn60zMZP.js";import ut from"./BTncsj-o.js";import pt from"./DQgpgWET.js";import bt from"./gAM1hy7w.js";import dt from"./ByYI4RMn.js";import mt from"./bn8EkSlP.js";import ht from"./jTLJEb0M.js";import vt from"./CHEsePt0.js";import{s as _t}from"./DtNz156Q.js";import{_ as ft}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B2BTeTyp.js";import"./_tbI9m6B.js";import"./DA9BgUq9.js";var yt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,Lt=(e,t,c,l)=>{for(var n=l>1?void 0:l?gt(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&yt(t,c,n),n};let x=class extends h{};x=Lt([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-button color="primary" disabled>Button</chi-button>',htmlblueprint:`<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Button</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Button</button>`}})})],x);function $t(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h2",title:"Disabled",id:"disabled-lumen-centurylink",tabs:e.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[o("p",{class:"-text"},[p("Make buttons appear inactive by adding the "),o("code",null,"disabled"),p(" boolean attribute or "),o("code",null,"-disabled"),p(" class.")],-1)])),example:r(()=>t[1]||(t[1]=[o("chi-button",{color:"primary",disabled:""},"Button",-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ct=_(x,[["render",$t]]);var xt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,Bt=(e,t,c,l)=>{for(var n=l>1?void 0:l?wt(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&xt(t,c,n),n};let w=class extends h{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"sizes",["xs","sm","md","lg","xl"]);m(this,"codeSnippets",{webcomponent:`<!-- xs -->
<chi-button size="xs">Button</chi-button>
<chi-button type="icon" size="xs" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- sm -->
<chi-button size="sm">Button</chi-button>
<chi-button type="icon" size="sm" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- md -->
<chi-button size="md">Button</chi-button>
<chi-button type="icon" size="md" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- lg -->
<chi-button size="lg">Button</chi-button>
<chi-button type="icon" size="lg" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- xl -->
<chi-button size="xl">Button</chi-button>
<chi-button type="icon" size="xl" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom" />
</chi-button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<!-- xs -->
<button class="chi-button -xs">Button</button>
<button class="chi-button -xs -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- sm -->
<button class="chi-button -sm">Button</button>
<button class="chi-button -sm -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- md -->
<button class="chi-button -md">Button</button>
<button class="chi-button -md -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- lg -->
<button class="chi-button -lg">Button</button>
<button class="chi-button -lg -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- xl -->
<button class="chi-button -xl">Button</button>
<button class="chi-button -xl -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});m(this,"tooltipTexts",[])}mounted(){this.sizes.forEach(c=>{this.tooltipTexts.push(chi.tooltip(this.$refs[`Button-${c}`]))})}beforeDestroy(){this.tooltipTexts.forEach(c=>{c[0].dispose()})}};w=Bt([v({})],w);const Pt={class:"-text--bold -pl--2"},St={class:"chi-col -w--12 -pb--2 -mr--0 -d--flex"},Dt=["size"],Ot=["size"];function Tt(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h2",title:"Sizes",id:"sizes-lumen-centurylink",tabs:e.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[o("p",{class:"-text -mb--3 -text"},[p("Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), Large (lg), and Extra Large (xl). The default size is "),o("code",null,"md"),p(".")],-1)])),example:r(()=>[(d(!0),$(et,null,it(e.sizes,f=>(d(),$("div",null,[o("p",Pt,lt(f),1),o("div",St,[o("chi-button",{size:f},"Button",8,Dt),o("chi-button",{class:"-ml--2",size:f,type:"icon","alternative-text":"Button action",ref_for:!0,ref:`Button-${f}`,"data-tooltip":"Button action","data-position":"bottom"},t[1]||(t[1]=[o("chi-icon",{icon:"atom"},null,-1)]),8,Ot)])]))),256))]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ft=_(w,[["render",Tt]]);var kt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Et=(e,t,c,l)=>{for(var n=l>1?void 0:l?zt(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&kt(t,c,n),n};let B=class extends h{};B=Et([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-button>Base</chi-button>
<chi-button color="primary">Primary</chi-button>
<chi-button color="dark">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary">Secondary</chi-button>
<chi-button color="light">Light</chi-button>`,htmlblueprint:`<!-- For light backgrounds -->
<button class="chi-button">Base</button>
<button class="chi-button -primary">Primary</button>
<button class="chi-button -dark">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary">Secondary</button>
<button class="chi-button -light">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary" href="#" role="button">Link button</a>
<input class="chi-button -primary" type="button" value="Input button">
<input class="chi-button -primary" type="submit" value="Submit button">`}})})],B);function jt(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h3",title:"Solid",padding:"-p--0",id:"solid-lumen-centurylink",tabs:e.exampleTabs},{example:r(()=>t[0]||(t[0]=[o("div",{class:"chi-grid -no-gutter"},[o("div",{class:"chi-col -w--12 -w-md--6"},[o("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[o("div",{class:"-pr--2"},[o("chi-button",{color:""},"Base")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"primary"},"Primary")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"dark"},"Dark")])])]),o("div",{class:"chi-col -w--12 -w-md--6"},[o("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[o("div",{class:"-pr--2"},[o("chi-button",{color:"secondary"},"Secondary")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"light"},"Light")])])])],-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[t[1]||(t[1]=o("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),o("code",null,"<button>"),p(", "),o("code",null,"<a>"),p(" and "),o("code",null,"<input>"),p(" elements.")],-1)),s(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const It=_(B,[["render",jt]]);var Mt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Wt=(e,t,c,l)=>{for(var n=l>1?void 0:l?Ht(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&Mt(t,c,n),n};let P=class extends h{};P=Wt([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-button color="primary" variant="outline">Primary</chi-button>
<chi-button color="dark" variant="outline">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary" variant="outline">Secondary</chi-button>
<chi-button color="light" variant="outline">Light</chi-button>`,htmlblueprint:`<!-- For light backgrounds -->
<button class="chi-button -primary -outline">Primary</button>
<button class="chi-button -dark -outline">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary -outline">Secondary</button>
<button class="chi-button -light -outline">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary -outline" href="#" role="button">Link button</a>
<input class="chi-button -primary -outline" type="button" value="Input button">
<input class="chi-button -primary -outline" type="submit" value="Submit button">`}})})],P);function Ut(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h3",title:"Outline",padding:"-p--0",id:"outline-lumen-centurylink",tabs:e.exampleTabs},{example:r(()=>t[0]||(t[0]=[o("div",{class:"chi-grid -no-gutter"},[o("div",{class:"chi-col -w--12 -w-md--6"},[o("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[o("div",{class:"-pr--2"},[o("chi-button",{color:"primary",variant:"outline"},"Primary")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"dark",variant:"outline"},"Dark")])])]),o("div",{class:"chi-col -w--12 -w-md--6"},[o("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[o("div",{class:"-pr--2"},[o("chi-button",{color:"secondary",variant:"outline"},"Secondary")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"light",variant:"outline"},"Light")])])])],-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[t[1]||(t[1]=o("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),o("code",null,"<button>"),p(", "),o("code",null,"<a>"),p(" and "),o("code",null,"<input>"),p(" elements.")],-1)),s(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const At=_(P,[["render",Ut]]);var Nt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,qt=(e,t,c,l)=>{for(var n=l>1?void 0:l?Vt(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&Nt(t,c,n),n};let S=class extends h{};S=qt([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
<chi-button variant="flat">Base</chi-button>
<chi-button color="primary" variant="flat">Primary</chi-button>
<chi-button color="dark" variant="flat">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary" variant="flat">Secondary</chi-button>
<chi-button color="light" variant="flat">Light</chi-button>`,htmlblueprint:`<!-- For light backgrounds -->
<button class="chi-button -flat">Base</button>
<button class="chi-button -primary -flat">Primary</button>
<button class="chi-button -dark -flat">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary -flat">Secondary</button>
<button class="chi-button -light -flat">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary -flat" href="#" role="button">Link button</a>
<input class="chi-button -primary -flat" type="button" value="Input button">
<input class="chi-button -primary -flat" type="submit" value="Submit button">`}})})],S);function Jt(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h3",title:"Flat",padding:"-p--0",id:"flat-lumen-centurylink",tabs:e.exampleTabs},{example:r(()=>t[0]||(t[0]=[o("div",{class:"-d--flex"},[o("div",{class:"chi-grid -no-gutter"},[o("div",{class:"chi-col -w--12 -w-md--6"},[o("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[o("div",{class:"-pr--2"},[o("chi-button",{color:"",variant:"flat"},"Base")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"primary",variant:"flat"},"Primary")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"dark",variant:"flat"},"Dark")])])]),o("div",{class:"chi-col -w--12 -w-md--6"},[o("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[o("div",{class:"-pr--2"},[o("chi-button",{color:"secondary",variant:"flat"},"Secondary")]),o("div",{class:"-pr--2"},[o("chi-button",{color:"light",variant:"flat"},"Light")])])])])],-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[t[1]||(t[1]=o("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),o("code",null,"<button>"),p(", "),o("code",null,"<a>"),p(" and "),o("code",null,"<input>"),p(" elements.")],-1)),s(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Gt=_(S,[["render",Jt]]);var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Rt=(e,t,c,l)=>{for(var n=l>1?void 0:l?Qt(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&Kt(t,c,n),n};let D=class extends h{};D=Rt([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button uppercase>Button</chi-button>
<chi-button color="primary" uppercase>Button</chi-button>
<chi-button color="primary" variant="outline" uppercase>Button</chi-button>`,htmlblueprint:`<button class="chi-button -uppercase">Button</button>
<button class="chi-button -primary -uppercase">Button</button>
<button class="chi-button -primary -outline -uppercase">Button</button>`}})})],D);function Xt(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h2",title:"Uppercase",id:"uppercase-lumen-centurylink",tabs:e.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[o("p",{class:"-text"},[p("Uppercase buttons style button text with "),o("code",null,"text-transform: uppercase;"),p(" to further emphasize button text labels and distinguish them from surrounding content."),o("span",{class:"-d--block -mt--2"}),o("strong",null,"Note:"),p(" Uppercase styled text can cause rendering issues in certain locales.")],-1)])),example:r(()=>t[1]||(t[1]=[o("div",{class:"-d--flex"},[o("div",{class:"-pr--2"},[o("button",{class:"chi-button -uppercase"},"Button")]),o("div",{class:"-pr--2"},[o("button",{class:"chi-button -primary -uppercase"},"Button")]),o("div",{class:"-pr--2"},[o("button",{class:"chi-button -outline -primary -uppercase"},"Button")])],-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Yt=_(D,[["render",Xt]]);var Zt=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,nn=(e,t,c,l)=>{for(var n=l>1?void 0:l?tn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&Zt(t,c,n),n};let O=class extends h{};O=nn([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- left aligned content -->
<chi-button fluid>Button</chi-button>

<!-- center aligned content -->
<chi-button fluid center>Button</chi-button>`,htmlblueprint:`<!-- left aligned content -->
<button class="chi-button -fluid">Button</button>

<!-- center aligned content -->
<button class="chi-button -fluid -justify-content--center">Button</button>`}})})],O);function on(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h2",title:"Fluid",id:"fluid-lumen-centurylink",tabs:e.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[o("p",{class:"-text"},"Use Fluid buttons to stretch the full width of the parent container.",-1)])),example:r(()=>t[1]||(t[1]=[o("div",{class:"chi-form__item"},[o("button",{class:"chi-button -fluid -mb--2"},"Button"),o("button",{class:"chi-button -fluid -justify-content--center"},"Button")],-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const en=_(O,[["render",on]]);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,an=(e,t,c,l)=>{for(var n=l>1?void 0:l?cn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&ln(t,c,n),n};let T=class extends h{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<!-- base -->
<chi-button type="icon" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- flat -->
<chi-button variant="flat" type="icon" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<!-- base -->
<button class="chi-button -icon" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- flat -->
<button class="chi-button -icon -flat" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});m(this,"tooltip");m(this,"tooltipFlat")}mounted(){this.tooltip=chi.tooltip(this.$refs.edit),this.tooltipFlat=chi.tooltip(this.$refs.editFlat)}beforeDestroy(){this.tooltip.dispose(),this.tooltipFlat.dispose()}};T=an([v({})],T);const sn={type:"icon","alternative-text":"Edit",ref:"edit","data-tooltip":"Edit"},rn={class:"-ml--2",variant:"flat",type:"icon","alternative-text":"Edit",ref:"editFlat","data-tooltip":"Edit"};function un(e,t,c,l,n,a){const i=g,u=H,f=L;return d(),y(f,{titleSize:"h2",title:"Icon buttons",id:"icon-button-lumen-centurylink",tabs:e.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[o("p",{class:"-text"},"For interfaces with limited space, an Icon button can be used for common actions such as editing, deleting, closing, etc.",-1)])),example:r(()=>[o("chi-button",sn,t[1]||(t[1]=[o("chi-icon",{icon:"edit"},null,-1)]),512),o("chi-button",rn,t[2]||(t[2]=[o("chi-icon",{icon:"edit"},null,-1)]),512)]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(u),s(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pn=_(T,[["render",un]]);var bn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,mn=(e,t,c,l)=>{for(var n=l>1?void 0:l?dn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&bn(t,c,n),n};let F=class extends h{};F=mn([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- left aligned -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
</chi-button>

<!-- right aligned -->
<chi-button>
  <span>Button</span>
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- both sides -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
  <chi-icon icon="atom"></chi-icon>
</chi-button>`,htmlblueprint:`<!-- left aligned -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
  </div>
</button>

<!-- right aligned -->
<button class="chi-button">
  <div class="chi-button__content">
    <span>Button</span>
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- both sides -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>`}})})],F);function hn(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h3",title:"Labeled icon buttons",id:"labeled-icon-lumen-centurylink",tabs:e.exampleTabs},{example:r(()=>t[0]||(t[0]=[o("chi-button",null,[o("chi-icon",{icon:"atom"}),o("span",null,"Button")],-1),o("chi-button",{class:"-mr--2 -ml--2"},[o("span",null,"Button"),o("chi-icon",{icon:"atom"})],-1),o("chi-button",null,[o("chi-icon",{icon:"atom"}),o("span",null,"Button"),o("chi-icon",{icon:"atom"})],-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const vn=_(F,[["render",hn]]);var _n=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,yn=(e,t,c,l)=>{for(var n=l>1?void 0:l?fn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&_n(t,c,n),n};let k=class extends h{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button type="float" color="primary" size="xl" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>`,htmlblueprint:`<button class="chi-button -primary -xl -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>`});m(this,"tooltip")}mounted(){this.tooltip=chi.tooltip(this.$refs.chat)}beforeDestroy(){this.tooltip.dispose()}};k=yn([v({})],k);const gn={class:"-d--flex"},Ln={class:"-pr--2"},$n={color:"primary",type:"float",size:"xl","alternative-text":"Chat with Support",ref:"chat","data-tooltip":"Chat with Support"};function Cn(e,t,c,l,n,a){const i=g,u=H,f=L;return d(),y(f,{titleSize:"h3",title:"Floating icon buttons",id:"floating-icon-lumen-centurylink",tabs:e.exampleTabs},{example:r(()=>[o("div",gn,[o("div",Ln,[o("chi-button",$n,t[0]||(t[0]=[o("chi-icon",{icon:"chat"},null,-1)]),512)])])]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(u),s(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xn=_(k,[["render",Cn]]);var wn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Pn=(e,t,c,l)=>{for(var n=l>1?void 0:l?Bn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&wn(t,c,n),n};let z=class extends h{};z=Pn([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-button type="close"></chi-button>',htmlblueprint:`<button class="chi-button -icon -close" aria-label="Close">
  <div class="chi-button__content">
    <i class="chi-icon icon-x" aria-hidden="true"></i>
  </div>
</button>`}})})],z);function Sn(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h3",title:"Close icon button",id:"close-icon",tabs:e.exampleTabs},{example:r(()=>t[0]||(t[0]=[o("chi-button",{type:"close"},null,-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Dn=_(z,[["render",Sn]]);var On=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Fn=(e,t,c,l)=>{for(var n=l>1?void 0:l?Tn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&On(t,c,n),n};let E=class extends h{};E=Fn([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button color="danger">Danger</chi-button>
<chi-button color="danger" variant="outline">Danger</chi-button>
<chi-button color="danger" variant="flat">Danger</chi-button>`,htmlblueprint:`<button class="chi-button -danger">Danger</button>
<button class="chi-button -danger -outline">Danger</button>
<button class="chi-button -danger -flat">Danger</button>`}})})],E);function kn(e,t,c,l,n,a){const i=g,u=L;return d(),y(u,{titleSize:"h2",title:"Danger",id:"danger-lumen-centurylink",tabs:e.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[o("p",{class:"-text"},"For special cases, such as styling a destructive action in an application (e.g. Delete Account), a Danger button may be used.",-1)])),example:r(()=>t[1]||(t[1]=[o("chi-button",{class:"-mr--2",color:"danger"},"Danger",-1),o("chi-button",{class:"-mr--2",variant:"outline",color:"danger"},"Danger",-1),o("chi-button",{variant:"flat",color:"danger"},"Danger",-1)])),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const zn=_(E,[["render",kn]]);var En=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,In=(e,t,c,l)=>{for(var n=l>1?void 0:l?jn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&En(t,c,n),n};let j=class extends h{constructor(){super(...arguments);m(this,"selectedTheme",ct())}};j=In([v({components:{SolidLumenCenturyLink:It,OutlineLumenCenturyLink:At,FlatLumenCenturyLink:Gt,DisabledLumenCenturyLink:Ct,UppercaseLumenCenturyLink:Yt,FluidLumenCenturyLink:en,IconButtonLumenCenturyLink:pn,LabeledIconLumenCenturyLink:vn,FloatingIconLumenCenturyLink:xn,CloseIcon:Dn,DangerLumenCenturyLink:zn,SizesLumenCenturyLink:Ft,ExamplesPortal:at,DisabledPortal:st,FluidPortal:rt,IconButtonPortal:ut,LabeledIconPortal:pt,FloatingIconPortal:bt,DangerPortal:dt,SizesPortal:mt}})],j);const Mn={key:0},Hn={class:"-text"},Wn={key:1};function Un(e,t,c,l,n,a){const i=b("SolidLumenCenturyLink"),u=b("OutlineLumenCenturyLink"),f=b("FlatLumenCenturyLink"),C=b("DisabledLumenCenturyLink"),W=b("UppercaseLumenCenturyLink"),U=b("FluidLumenCenturyLink"),A=b("IconButtonLumenCenturyLink"),N=b("LabeledIconLumenCenturyLink"),V=b("FloatingIconLumenCenturyLink"),M=b("CloseIcon"),q=b("DangerLumenCenturyLink"),J=b("SizesLumenCenturyLink"),G=b("ExamplesPortal"),K=b("DisabledPortal"),Q=b("FluidPortal"),R=b("IconButtonPortal"),X=b("LabeledIconPortal"),Y=b("FloatingIconPortal"),Z=b("DangerPortal"),tt=b("SizesPortal");return d(),$("div",null,[["lumen","centurylink"].includes(e.selectedTheme)?(d(),$("div",Mn,[t[7]||(t[7]=o("h2",null,"Examples",-1)),o("p",Hn,[t[0]||(t[0]=p("Chi includes three button variants: Solid, Outline, and Flat. Use ")),t[1]||(t[1]=o("code",null,"solid",-1)),t[2]||(t[2]=p(" buttons for high emphasis actions, base or ")),t[3]||(t[3]=o("code",null,"outline",-1)),t[4]||(t[4]=p(" buttons for medium emphasis actions, and ")),t[5]||(t[5]=o("code",null,"flat",-1)),t[6]||(t[6]=p(" buttons for low emphasis actions.")),s(i),s(u),s(f),s(C),s(W),s(U),s(A),s(N),s(V),s(M),s(q),s(J)])])):(d(),$("div",Wn,[s(G),s(K),s(Q),s(R),s(X),s(Y),s(M),s(Z),s(tt)]))])}const An=_(j,[["render",Un]]);var Nn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,qn=(e,t,c,l)=>{for(var n=l>1?void 0:l?Vn(t,c):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(l?i(t,c,n):i(n))||n);return l&&n&&Nn(t,c,n),n};let I=class extends h{constructor(){super(...arguments);m(this,"pageTabs",_t)}};I=qn([v({components:{Examples:An,Accessibility:vt,Properties:ht}})],I);const Jn={class:"chi-grid__container -pt--3"},Gn={class:"chi-tabs-panel -active",id:"examples"},Kn={class:"chi-tabs-panel",id:"properties"},Qn={class:"chi-tabs-panel",id:"accessibility"};function Rn(e,t,c,l,n,a){const i=ft,u=b("Examples"),f=b("Properties"),C=b("Accessibility");return d(),$("div",null,[s(i,{title:"Button",description:"Buttons are used to trigger actions in forms, modals, and more.",tabs:e.pageTabs},null,8,["tabs"]),o("div",Jn,[o("div",Gn,[s(u)]),o("div",Kn,[s(f)]),o("div",Qn,[s(C)])])])}const Eo=_(I,[["render",Rn]]);export{Eo as default};
