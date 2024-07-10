var nt=Object.defineProperty;var ot=(o,e,l)=>e in o?nt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[e]=l;var m=(o,e,l)=>ot(o,typeof e!="symbol"?e+"":e,l);import{V as h,N as _}from"./uJTUijt2.js";import{o as b,f as y,w as r,b as s,a as n,d as p,c as L,F as et,i as it,t as ct,g as lt,r as d}from"./B5CYXVwa.js";import{_ as $}from"./D8GK0F__.js";import{_ as g}from"./DKu8Jd2y.js";import{_ as v}from"./DlAUqK2U.js";import{_ as H}from"./BLbnEGma.js";import at from"./BtOAMj_3.js";import st from"./CZ7fRTco.js";import rt from"./CS1QnkLY.js";import ut from"./CVgDq6v2.js";import pt from"./DFadBIMO.js";import dt from"./U9sGv6eC.js";import bt from"./DTNF6S6h.js";import mt from"./ogsJzRSU.js";import ht from"./B7LdPRTG.js";import _t from"./CrP8nhSA.js";import{s as vt}from"./2EwpEKcw.js";import{_ as ft}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./CRFpwjAl.js";import"./B2eUzt0t.js";import"./C9_DePFx.js";var yt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,gt=(o,e,l,c)=>{for(var t=c>1?void 0:c?$t(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&yt(e,l,t),t};let C=class extends h{};C=gt([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-button color="primary" disabled>Button</chi-button>',htmlblueprint:`<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Button</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Button</button>`}})})],C);const Lt=n("p",{class:"-text"},[p("Make buttons appear inactive by adding the "),n("code",null,"disabled"),p(" boolean attribute or "),n("code",null,"-disabled"),p(" class.")],-1),xt=n("chi-button",{color:"primary",disabled:""},"Button",-1);function Ct(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h2",title:"Disabled",id:"disabled-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[Lt]),example:r(()=>[xt]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const wt=v(C,[["render",Ct]]);var Bt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,St=(o,e,l,c)=>{for(var t=c>1?void 0:c?Pt(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Bt(e,l,t),t};let w=class extends h{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"sizes",["xs","sm","md","lg","xl"]);m(this,"codeSnippets",{webcomponent:`<!-- xs -->
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
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});m(this,"tooltipTexts",[])}mounted(){this.sizes.forEach(l=>{this.tooltipTexts.push(chi.tooltip(this.$refs[`Button-${l}`]))})}beforeDestroy(){this.tooltipTexts.forEach(l=>{l[0].dispose()})}};w=St([_({})],w);const Dt=n("p",{class:"-text -mb--3 -text"},[p("Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), Large (lg), and Extra Large (xl). The default size is "),n("code",null,"md"),p(".")],-1),Ot={class:"-text--bold -pl--2"},Tt={class:"chi-col -w--12 -pb--2 -mr--0 -d--flex"},Ft=["size"],kt=["size"],zt=n("chi-icon",{icon:"atom"},null,-1),Et=[zt];function jt(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h2",title:"Sizes",id:"sizes-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[Dt]),example:r(()=>[(b(!0),L(et,null,it(o.sizes,f=>(b(),L("div",null,[n("p",Ot,ct(f),1),n("div",Tt,[n("chi-button",{size:f},"Button",8,Ft),n("chi-button",{class:"-ml--2",size:f,type:"icon","alternative-text":"Button action",ref_for:!0,ref:`Button-${f}`,"data-tooltip":"Button action","data-position":"bottom"},Et,8,kt)])]))),256))]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const It=v(w,[["render",jt]]);var Mt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Wt=(o,e,l,c)=>{for(var t=c>1?void 0:c?Ht(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Mt(e,l,t),t};let B=class extends h{};B=Wt([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<input class="chi-button -primary" type="submit" value="Submit button">`}})})],B);const Ut=n("div",{class:"chi-grid -no-gutter"},[n("div",{class:"chi-col -w--12 -w-md--6"},[n("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[n("div",{class:"-pr--2"},[n("chi-button",{color:""},"Base")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"primary"},"Primary")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"dark"},"Dark")])])]),n("div",{class:"chi-col -w--12 -w-md--6"},[n("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[n("div",{class:"-pr--2"},[n("chi-button",{color:"secondary"},"Secondary")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"light"},"Light")])])])],-1),At=n("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),n("code",null,"<button>"),p(", "),n("code",null,"<a>"),p(" and "),n("code",null,"<input>"),p(" elements.")],-1);function Nt(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h3",title:"Solid",padding:"-p--0",id:"solid-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[Ut]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[At,s(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Vt=v(B,[["render",Nt]]);var qt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Gt=(o,e,l,c)=>{for(var t=c>1?void 0:c?Jt(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&qt(e,l,t),t};let P=class extends h{};P=Gt([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<input class="chi-button -primary -outline" type="submit" value="Submit button">`}})})],P);const Kt=n("div",{class:"chi-grid -no-gutter"},[n("div",{class:"chi-col -w--12 -w-md--6"},[n("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[n("div",{class:"-pr--2"},[n("chi-button",{color:"primary",variant:"outline"},"Primary")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"dark",variant:"outline"},"Dark")])])]),n("div",{class:"chi-col -w--12 -w-md--6"},[n("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[n("div",{class:"-pr--2"},[n("chi-button",{color:"secondary",variant:"outline"},"Secondary")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"light",variant:"outline"},"Light")])])])],-1),Qt=n("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),n("code",null,"<button>"),p(", "),n("code",null,"<a>"),p(" and "),n("code",null,"<input>"),p(" elements.")],-1);function Rt(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h3",title:"Outline",padding:"-p--0",id:"outline-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[Kt]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[Qt,s(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Xt=v(P,[["render",Rt]]);var Yt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,tn=(o,e,l,c)=>{for(var t=c>1?void 0:c?Zt(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Yt(e,l,t),t};let S=class extends h{};S=tn([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- For light backgrounds -->
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
<input class="chi-button -primary -flat" type="submit" value="Submit button">`}})})],S);const nn=n("div",{class:"-d--flex"},[n("div",{class:"chi-grid -no-gutter"},[n("div",{class:"chi-col -w--12 -w-md--6"},[n("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[n("div",{class:"-pr--2"},[n("chi-button",{color:"",variant:"flat"},"Base")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"primary",variant:"flat"},"Primary")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"dark",variant:"flat"},"Dark")])])]),n("div",{class:"chi-col -w--12 -w-md--6"},[n("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[n("div",{class:"-pr--2"},[n("chi-button",{color:"secondary",variant:"flat"},"Secondary")]),n("div",{class:"-pr--2"},[n("chi-button",{color:"light",variant:"flat"},"Light")])])])])],-1),on=n("div",{class:"p--text chi-tab__description"},[p("Chi supports button classes on "),n("code",null,"<button>"),p(", "),n("code",null,"<a>"),p(" and "),n("code",null,"<input>"),p(" elements.")],-1);function en(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h3",title:"Flat",padding:"-p--0",id:"flat-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[nn]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[on,s(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const cn=v(S,[["render",en]]);var ln=Object.defineProperty,an=Object.getOwnPropertyDescriptor,sn=(o,e,l,c)=>{for(var t=c>1?void 0:c?an(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&ln(e,l,t),t};let D=class extends h{};D=sn([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button uppercase>Button</chi-button>
<chi-button color="primary" uppercase>Button</chi-button>
<chi-button color="primary" variant="outline" uppercase>Button</chi-button>`,htmlblueprint:`<button class="chi-button -uppercase">Button</button>
<button class="chi-button -primary -uppercase">Button</button>
<button class="chi-button -primary -outline -uppercase">Button</button>`}})})],D);const rn=n("p",{class:"-text"},[p("Uppercase buttons style button text with "),n("code",null,"text-transform: uppercase;"),p(" to further emphasize button text labels and distinguish them from surrounding content."),n("span",{class:"-d--block -mt--2"}),n("strong",null,"Note:"),p(" Uppercase styled text can cause rendering issues in certain locales.")],-1),un=n("div",{class:"-d--flex"},[n("div",{class:"-pr--2"},[n("button",{class:"chi-button -uppercase"},"Button")]),n("div",{class:"-pr--2"},[n("button",{class:"chi-button -primary -uppercase"},"Button")]),n("div",{class:"-pr--2"},[n("button",{class:"chi-button -outline -primary -uppercase"},"Button")])],-1);function pn(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h2",title:"Uppercase",id:"uppercase-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[rn]),example:r(()=>[un]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const dn=v(D,[["render",pn]]);var bn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,hn=(o,e,l,c)=>{for(var t=c>1?void 0:c?mn(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&bn(e,l,t),t};let O=class extends h{};O=hn([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- left aligned content -->
<chi-button fluid>Button</chi-button>

<!-- center aligned content -->
<chi-button fluid center>Button</chi-button>`,htmlblueprint:`<!-- left aligned content -->
<button class="chi-button -fluid">Button</button>

<!-- center aligned content -->
<button class="chi-button -fluid -justify-content--center">Button</button>`}})})],O);const _n=n("p",{class:"-text"},"Use Fluid buttons to stretch the full width of the parent container.",-1),vn=n("div",{class:"chi-form__item"},[n("button",{class:"chi-button -fluid -mb--2"},"Button"),n("button",{class:"chi-button -fluid -justify-content--center"},"Button")],-1);function fn(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h2",title:"Fluid",id:"fluid-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[_n]),example:r(()=>[vn]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const yn=v(O,[["render",fn]]);var $n=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,Ln=(o,e,l,c)=>{for(var t=c>1?void 0:c?gn(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&$n(e,l,t),t};let T=class extends h{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<!-- base -->
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
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`});m(this,"tooltip");m(this,"tooltipFlat")}mounted(){this.tooltip=chi.tooltip(this.$refs.edit),this.tooltipFlat=chi.tooltip(this.$refs.editFlat)}beforeDestroy(){this.tooltip.dispose(),this.tooltipFlat.dispose()}};T=Ln([_({})],T);const xn=n("p",{class:"-text"},"For interfaces with limited space, an Icon button can be used for common actions such as editing, deleting, closing, etc.",-1),Cn={type:"icon","alternative-text":"Edit",ref:"edit","data-tooltip":"Edit"},wn=n("chi-icon",{icon:"edit"},null,-1),Bn=[wn],Pn={class:"-ml--2",variant:"flat",type:"icon","alternative-text":"Edit",ref:"editFlat","data-tooltip":"Edit"},Sn=n("chi-icon",{icon:"edit"},null,-1),Dn=[Sn];function On(o,e,l,c,t,a){const i=$,u=H,f=g;return b(),y(f,{titleSize:"h2",title:"Icon buttons",id:"icon-button-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[xn]),example:r(()=>[n("chi-button",Cn,Bn,512),n("chi-button",Pn,Dn,512)]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(u),s(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Tn=v(T,[["render",On]]);var Fn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,zn=(o,e,l,c)=>{for(var t=c>1?void 0:c?kn(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Fn(e,l,t),t};let F=class extends h{};F=zn([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- left aligned -->
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
</button>`}})})],F);const En=n("chi-button",null,[n("chi-icon",{icon:"atom"}),n("span",null,"Button")],-1),jn=n("chi-button",{class:"-mr--2 -ml--2"},[n("span",null,"Button"),n("chi-icon",{icon:"atom"})],-1),In=n("chi-button",null,[n("chi-icon",{icon:"atom"}),n("span",null,"Button"),n("chi-icon",{icon:"atom"})],-1);function Mn(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h3",title:"Labeled icon buttons",id:"labeled-icon-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[En,jn,In]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Hn=v(F,[["render",Mn]]);var Wn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,An=(o,e,l,c)=>{for(var t=c>1?void 0:c?Un(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Wn(e,l,t),t};let k=class extends h{constructor(){super(...arguments);m(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:`<chi-button type="float" color="primary" size="xl" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>`,htmlblueprint:`<button class="chi-button -primary -xl -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>`});m(this,"tooltip")}mounted(){this.tooltip=chi.tooltip(this.$refs.chat)}beforeDestroy(){this.tooltip.dispose()}};k=An([_({})],k);const Nn={class:"-d--flex"},Vn={class:"-pr--2"},qn={color:"primary",type:"float",size:"xl","alternative-text":"Chat with Support",ref:"chat","data-tooltip":"Chat with Support"},Jn=n("chi-icon",{icon:"chat"},null,-1),Gn=[Jn];function Kn(o,e,l,c,t,a){const i=$,u=H,f=g;return b(),y(f,{titleSize:"h3",title:"Floating icon buttons",id:"floating-icon-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[n("div",Nn,[n("div",Vn,[n("chi-button",qn,Gn,512)])])]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(u),s(i,{lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Qn=v(k,[["render",Kn]]);var Rn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Yn=(o,e,l,c)=>{for(var t=c>1?void 0:c?Xn(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Rn(e,l,t),t};let z=class extends h{};z=Yn([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-button type="close"></chi-button>',htmlblueprint:`<button class="chi-button -icon -close" aria-label="Close">
  <div class="chi-button__content">
    <i class="chi-icon icon-x" aria-hidden="true"></i>
  </div>
</button>`}})})],z);const Zn=n("chi-button",{type:"close"},null,-1);function to(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h3",title:"Close icon button",id:"close-icon",tabs:o.exampleTabs},{example:r(()=>[Zn]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const no=v(z,[["render",to]]);var oo=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,io=(o,e,l,c)=>{for(var t=c>1?void 0:c?eo(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&oo(e,l,t),t};let E=class extends h{};E=io([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-button color="danger">Danger</chi-button>
<chi-button color="danger" variant="outline">Danger</chi-button>
<chi-button color="danger" variant="flat">Danger</chi-button>`,htmlblueprint:`<button class="chi-button -danger">Danger</button>
<button class="chi-button -danger -outline">Danger</button>
<button class="chi-button -danger -flat">Danger</button>`}})})],E);const co=n("p",{class:"-text"},"For special cases, such as styling a destructive action in an application (e.g. Delete Account), a Danger button may be used.",-1),lo=n("chi-button",{class:"-mr--2",color:"danger"},"Danger",-1),ao=n("chi-button",{class:"-mr--2",variant:"outline",color:"danger"},"Danger",-1),so=n("chi-button",{variant:"flat",color:"danger"},"Danger",-1);function ro(o,e,l,c,t,a){const i=$,u=g;return b(),y(u,{titleSize:"h2",title:"Danger",id:"danger-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[co]),example:r(()=>[lo,ao,so]),"code-webcomponent":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[s(i,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const uo=v(E,[["render",ro]]);var po=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,mo=(o,e,l,c)=>{for(var t=c>1?void 0:c?bo(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&po(e,l,t),t};let j=class extends h{constructor(){super(...arguments);m(this,"selectedTheme",lt())}};j=mo([_({components:{SolidLumenCenturyLink:Vt,OutlineLumenCenturyLink:Xt,FlatLumenCenturyLink:cn,DisabledLumenCenturyLink:wt,UppercaseLumenCenturyLink:dn,FluidLumenCenturyLink:yn,IconButtonLumenCenturyLink:Tn,LabeledIconLumenCenturyLink:Hn,FloatingIconLumenCenturyLink:Qn,CloseIcon:no,DangerLumenCenturyLink:uo,SizesLumenCenturyLink:It,ExamplesPortal:at,DisabledPortal:st,FluidPortal:rt,IconButtonPortal:ut,LabeledIconPortal:pt,FloatingIconPortal:dt,DangerPortal:bt,SizesPortal:mt}})],j);const ho={key:0},_o=n("h2",null,"Examples",-1),vo={class:"-text"},fo=n("code",null,"solid",-1),yo=n("code",null,"outline",-1),$o=n("code",null,"flat",-1),go={key:1};function Lo(o,e,l,c,t,a){const i=d("SolidLumenCenturyLink"),u=d("OutlineLumenCenturyLink"),f=d("FlatLumenCenturyLink"),x=d("DisabledLumenCenturyLink"),W=d("UppercaseLumenCenturyLink"),U=d("FluidLumenCenturyLink"),A=d("IconButtonLumenCenturyLink"),N=d("LabeledIconLumenCenturyLink"),V=d("FloatingIconLumenCenturyLink"),M=d("CloseIcon"),q=d("DangerLumenCenturyLink"),J=d("SizesLumenCenturyLink"),G=d("ExamplesPortal"),K=d("DisabledPortal"),Q=d("FluidPortal"),R=d("IconButtonPortal"),X=d("LabeledIconPortal"),Y=d("FloatingIconPortal"),Z=d("DangerPortal"),tt=d("SizesPortal");return b(),L("div",null,[["lumen","centurylink","lumenrebrand24"].includes(o.selectedTheme)?(b(),L("div",ho,[_o,n("p",vo,[p("Chi includes three button variants: Solid, Outline, and Flat. Use "),fo,p(" buttons for high emphasis actions, base or "),yo,p(" buttons for medium emphasis actions, and "),$o,p(" buttons for low emphasis actions."),s(i),s(u),s(f),s(x),s(W),s(U),s(A),s(N),s(V),s(M),s(q),s(J)])])):(b(),L("div",go,[s(G),s(K),s(Q),s(R),s(X),s(Y),s(M),s(Z),s(tt)]))])}const xo=v(j,[["render",Lo]]);var Co=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,Bo=(o,e,l,c)=>{for(var t=c>1?void 0:c?wo(e,l):e,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(c?i(e,l,t):i(t))||t);return c&&t&&Co(e,l,t),t};let I=class extends h{constructor(){super(...arguments);m(this,"pageTabs",vt)}};I=Bo([_({components:{Examples:xo,Accessibility:_t,Properties:ht}})],I);const Po={class:"chi-grid__container -pt--3"},So={class:"chi-tabs-panel -active",id:"examples"},Do={class:"chi-tabs-panel",id:"properties"},Oo={class:"chi-tabs-panel",id:"accessibility"};function To(o,e,l,c,t,a){const i=ft,u=d("Examples"),f=d("Properties"),x=d("Accessibility");return b(),L("div",null,[s(i,{title:"Button",description:"Buttons are used to trigger actions in forms, modals, and more.",tabs:o.pageTabs},null,8,["tabs"]),n("div",Po,[n("div",So,[s(u)]),n("div",Do,[s(f)]),n("div",Oo,[s(x)])])])}const he=v(I,[["render",To]]);export{he as default};
