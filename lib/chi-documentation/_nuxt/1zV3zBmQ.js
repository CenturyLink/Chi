import{e as d,o as r,f as m,w as n,a as t,d as s,b as e,g as x,h as f,q as g,c as B,j as z,t as C,F as E,l as F,k as T}from"./6XaUQmon.js";import{_ as h}from"./jyPcLEqD.js";import{_}from"./DpVkMKUP.js";import{_ as w}from"./CjH8r42-.js";const P=d({__name:"_disabled-lumen-centurylink",setup(b){const i={webcomponent:'<chi-button color="primary" disabled>Button</chi-button>',htmlblueprint:`<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Button</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Button</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Disabled",titleSize:"h2",id:"disabled-lumen-centurylink"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},[s("Make buttons appear inactive by adding the "),t("code",null,"disabled"),s(" boolean attribute or "),t("code",null,"-disabled"),s(" class.")],-1)])),example:n(()=>o[1]||(o[1]=[t("chi-button",{color:"primary",disabled:""},"Button",-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),L={class:"-text--bold -pl--2"},I={class:"chi-col -w--12 -pb--2 -mr--0 -d--flex"},q=["size"],A=["size"],U=["size"],R=d({__name:"_sizes-lumen-centurylink",setup(b){const i=["xs","sm","md","lg","xl"],a=[],o=i.map(c=>x(`button-${c}`));f(()=>{o.forEach(c=>{c.value&&a.push(chi.tooltip(c.value))})}),g(()=>{a.forEach(c=>{var u;(u=c[0])==null||u.dispose()})});const l={webcomponent:`<!-- xs -->
<chi-button size="xs" color="primary">Button</chi-button>
<chi-button size="xs" color="primary" variant="outline">Button</chi-button>
<chi-button size="xs" color="primary" variant="flat" type="icon" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- sm -->
<chi-button size="sm" color="primary">Button</chi-button>
<chi-button size="sm" color="primary" variant="outline">Button</chi-button>
<chi-button size="sm" color="primary" variant="flat" type="icon" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- md -->
<chi-button size="md" color="primary">Button</chi-button>
<chi-button size="md" color="primary" variant="outline">Button</chi-button>
<chi-button size="md" color="primary" variant="flat" type="icon" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- lg -->
<chi-button size="lg" color="primary">Button</chi-button>
<chi-button size="lg" color="primary" variant="outline">Button</chi-button>
<chi-button size="lg" color="primary" variant="flat" type="icon" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- xl -->
<chi-button size="xl" color="primary">Button</chi-button>
<chi-button size="xl" color="primary" variant="outline">Button</chi-button>
<chi-button size="xl" color="primary" variant="flat" type="icon" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom" />
</chi-button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<!-- xs -->
<button class="chi-button -xs -primary">Button</button>
<button class="chi-button -xs -primary -outline">Button</button>
<button class="chi-button -xs -primary -flat -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- sm -->
<button class="chi-button -sm -primary">Button</button>
<button class="chi-button -sm -primary -outline">Button</button>
<button class="chi-button -sm -primary -flat -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- md -->
<button class="chi-button -md -primary">Button</button>
<button class="chi-button -md -primary -outline">Button</button>
<button class="chi-button -md -primary -flat -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- lg -->
<button class="chi-button -lg -primary">Button</button>
<button class="chi-button -lg -primary -outline">Button</button>
<button class="chi-button -lg -primary -flat -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- xl -->
<button class="chi-button -xl -primary">Button</button>
<button class="chi-button -xl -primary -outline">Button</button>
<button class="chi-button -xl -primary -flat -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(c,u)=>{const y=h,v=_;return r(),m(v,{title:"Sizes",titleSize:"h2",id:"sizes-lumen-centurylink"},{"example-description":n(()=>u[0]||(u[0]=[t("p",{class:"-text"},[s("Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), Large (lg), and Extra Large (xl). The default size is "),t("code",null,"md"),s(".")],-1)])),example:n(()=>[(r(),B(E,null,z(i,p=>t("div",null,[t("p",L,C(p),1),t("div",I,[t("chi-button",{size:p,color:"primary"},"Button",8,q),t("chi-button",{class:"-ml--2",size:p},"Button",8,A),t("chi-button",{class:"-ml--2",size:p,type:"icon","alternative-text":"Button action",ref_for:!0,ref:`button-${p}`,"data-tooltip":"Button action","data-position":"bottom",color:"primary",variant:"flat"},u[1]||(u[1]=[t("chi-icon",{icon:"atom"},null,-1)]),8,U)])])),64))]),"code-webcomponent":n(()=>[e(y,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(y,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),j=d({__name:"_solid-lumen-centurylink",setup(b){const i={webcomponent:`<!-- For light backgrounds -->
<chi-button color="primary">Primary</chi-button>
<chi-button color="dark">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary">Secondary</chi-button>
<chi-button color="light">Light</chi-button>`,htmlblueprint:`<!-- For light backgrounds -->
<button class="chi-button -primary">Primary</button>
<button class="chi-button -dark">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary">Secondary</button>
<button class="chi-button -light">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary" href="#" role="button">Link button</a>
<input class="chi-button -primary" type="button" value="Input button">
<input class="chi-button -primary" type="submit" value="Submit button">`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Solid",titleSize:"h3",id:"solid-lumen-centurylink",padding:"-p--0"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},[s("Use "),t("code",null,"solid"),s(" buttons for high emphasis actions.")],-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"chi-grid -no-gutter"},[t("div",{class:"chi-col -w--12 -w-md--6"},[t("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary"},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"dark"},"Dark")])])]),t("div",{class:"chi-col -w--12 -w-md--6"},[t("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[t("div",{class:"-pr--2"},[t("chi-button",{color:"secondary"},"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"light"},"Light")])])])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o[2]||(o[2]=t("div",{class:"p--text chi-tab__description"},[s("Chi supports button classes on "),t("code",null,"<button>"),s(", "),t("code",null,"<a>"),s(" and "),t("code",null,"<input>"),s(" elements.")],-1)),e(l,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),M=d({__name:"_outline-lumen-centurylink",setup(b){const i={webcomponent:`<!-- For light backgrounds -->
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
<input class="chi-button -primary -outline" type="submit" value="Submit button">`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Outline",titleSize:"h3",id:"outline-lumen-centurylink",padding:"-p--0"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},[s("Use "),t("code",null,"outline"),s(" buttons for medium emphasis actions.")],-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"chi-grid -no-gutter"},[t("div",{class:"chi-col -w--12 -w-md--6"},[t("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",variant:"outline"},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"dark",variant:"outline"},"Dark")])])]),t("div",{class:"chi-col -w--12 -w-md--6"},[t("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[t("div",{class:"-pr--2"},[t("chi-button",{color:"secondary",variant:"outline"},"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"light",variant:"outline"},"Light")])])])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o[2]||(o[2]=t("div",{class:"p--text chi-tab__description"},[s("Chi supports button classes on "),t("code",null,"<button>"),s(", "),t("code",null,"<a>"),s(" and "),t("code",null,"<input>"),s(" elements.")],-1)),e(l,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),N=d({__name:"_flat-lumen-centurylink",setup(b){const i={webcomponent:`<!-- For light backgrounds -->
<chi-button color="primary" variant="flat">Primary</chi-button>
<chi-button color="dark" variant="flat">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary" variant="flat">Secondary</chi-button>
<chi-button color="light" variant="flat">Light</chi-button>`,htmlblueprint:`<!-- For light backgrounds -->
<button class="chi-button -primary -flat">Primary</button>
<button class="chi-button -dark -flat">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary -flat">Secondary</button>
<button class="chi-button -light -flat">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary -flat" href="#" role="button">Link button</a>
<input class="chi-button -primary -flat" type="button" value="Input button">
<input class="chi-button -primary -flat" type="submit" value="Submit button">`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Flat",titleSize:"h3",id:"flat-lumen-centurylink",padding:"-p--0"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},[s("Use "),t("code",null,"flat"),s(" buttons for low emphasis actions.")],-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"-d--flex"},[t("div",{class:"chi-grid -no-gutter"},[t("div",{class:"chi-col -w--12 -w-md--6"},[t("div",{class:"-p--3 -d--flex",style:{"justify-content":"center"}},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",variant:"flat"},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"dark",variant:"flat"},"Dark")])])]),t("div",{class:"chi-col -w--12 -w-md--6"},[t("div",{class:"-p--3 -bg--black -d--flex",style:{"justify-content":"center"}},[t("div",{class:"-pr--2"},[t("chi-button",{color:"secondary",variant:"flat"},"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"light",variant:"flat"},"Light")])])])])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o[2]||(o[2]=t("div",{class:"p--text chi-tab__description"},[s("Chi supports button classes on "),t("code",null,"<button>"),s(", "),t("code",null,"<a>"),s(" and "),t("code",null,"<input>"),s(" elements.")],-1)),e(l,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),J=d({__name:"_uppercase-lumen-centurylink",setup(b){const i={webcomponent:`<chi-button color="primary" uppercase>Button</chi-button>
<chi-button color="primary" variant="outline" uppercase>Button</chi-button>`,htmlblueprint:`<button class="chi-button -primary -uppercase">Button</button>
<button class="chi-button -primary -outline -uppercase">Button</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Uppercase",titleSize:"h2",id:"uppercase-lumen-centurylink"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},[s("Uppercase buttons style button text with "),t("code",null,"text-transform: uppercase;"),s(" to further emphasize button text labels and distinguish them from surrounding content.")],-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"-d--flex"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",uppercase:""},"Button")]),t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",variant:"outline",uppercase:""},"Button")])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),O=d({__name:"_fluid-lumen-centurylink",setup(b){const i={webcomponent:"<chi-button fluid>Button</chi-button>",htmlblueprint:'<button class="chi-button -fluid">Button</button>'};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Fluid",titleSize:"h2",id:"fluid-lumen-centurylink"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Use Fluid buttons to stretch the full width of the parent container.",-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"chi-form__item"},[t("chi-button",{fluid:""},"Button")],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),V={type:"icon","alternative-text":"Edit","data-tooltip":"Edit",color:"primary",ref:"buttonBase"},H={class:"-ml--2",type:"icon","alternative-text":"Edit","data-tooltip":"Edit",color:"primary",variant:"outline",ref:"buttonOutline"},G={class:"-ml--2",type:"icon","alternative-text":"Edit","data-tooltip":"Edit",color:"primary",variant:"flat",ref:"buttonFlat"},K=d({__name:"_icon-buttons-lumen-centurylink",setup(b){let i,a,o;const l=x("buttonBase"),c=x("buttonOutline"),u=x("buttonFlat");f(()=>{l.value&&(i=chi.tooltip(l.value)),c.value&&(a=chi.tooltip(c.value)),u.value&&(o=chi.tooltip(u.value))}),g(()=>{i==null||i.dispose(),a==null||a.dispose(),o==null||o.dispose()});const y={webcomponent:`<!-- High emphasis -->
<chi-button type="icon" color="primary" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Medium emphasis -->
<chi-button type="icon" variant="outline" color="primary" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Low emphasis -->
<chi-button type="icon" variant="flat" color="primary" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<!-- High emphasis -->
<button class="chi-button -icon -primary" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Medium emphasis -->
<button class="chi-button -icon -primary -outline" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Low emphasis -->
<button class="chi-button -icon -flat -primary" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(v,p)=>{const S=h,$=w,D=_;return r(),m(D,{title:"Icon buttons",titleSize:"h2",id:"icon-button-lumen-centurylink"},{"example-description":n(()=>p[0]||(p[0]=[t("p",{class:"-text"},"For interfaces with limited space, an Icon button can be used for common actions such as editing, deleting, closing, etc.",-1)])),example:n(()=>[t("chi-button",V,p[1]||(p[1]=[t("chi-icon",{icon:"edit"},null,-1)]),512),t("chi-button",H,p[2]||(p[2]=[t("chi-icon",{icon:"edit"},null,-1)]),512),t("chi-button",G,p[3]||(p[3]=[t("chi-icon",{icon:"edit"},null,-1)]),512)]),"code-webcomponent":n(()=>[e(S,{class:"html",lang:"html",code:y.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e($),e(S,{lang:"html",code:y.htmlblueprint},null,8,["code"])]),_:1})}}}),Q=d({__name:"_labelled-icon-lumen-centurylink",setup(b){const i={webcomponent:`<!-- left aligned -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
</chi-button>

<!-- right aligned -->
<chi-button>
  <span>Button</span>
  <chi-icon icon="arrow-right"></chi-icon>
</chi-button>

<!-- both sides -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
  <chi-icon icon="arrow-right"></chi-icon>
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
    <i class="chi-icon icon-arrow-right" aria-hidden="true"></i>
  </div>
</button>

<!-- both sides -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
    <i class="chi-icon icon-arrow-right" aria-hidden="true"></i>
  </div>
</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Labeled icon buttons",titleSize:"h3",id:"labeled-icon-lumen-centurylink"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Icons can be left aligned, right aligned, or positioned on both sides of text.",-1)])),example:n(()=>o[1]||(o[1]=[t("chi-button",null,[t("chi-icon",{icon:"atom"}),t("span",null,"Button")],-1),t("chi-button",{class:"-mr--2 -ml--2"},[t("span",null,"Button"),t("chi-icon",{icon:"arrow-right"})],-1),t("chi-button",null,[t("chi-icon",{icon:"atom"}),t("span",null,"Button"),t("chi-icon",{icon:"arrow-right"})],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"-d--flex"},X={class:"-pr--2"},Y={color:"primary",type:"float",size:"xl","alternative-text":"Chat with Support",ref:"chat","data-tooltip":"Chat with Support"},Z=d({__name:"_floating-icon-lumen-centurylink",setup(b){let i;const a=x("chat");f(()=>{a.value&&(i=chi.tooltip(a.value))}),g(()=>i==null?void 0:i.dispose());const o={webcomponent:`<chi-button type="float" color="primary" size="xl" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>`,htmlblueprint:`<button class="chi-button -primary -xl -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>`};return(l,c)=>{const u=h,y=w,v=_;return r(),m(v,{title:"Floating icon buttons",id:"floating-icon-lumen-centurylink"},{example:n(()=>[t("div",W,[t("div",X,[t("chi-button",Y,c[0]||(c[0]=[t("chi-icon",{icon:"chat"},null,-1)]),512)])])]),"code-webcomponent":n(()=>[e(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(y),e(u,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),k=d({__name:"_close-icon",setup(b){const i={webcomponent:'<chi-button type="close"></chi-button>',htmlblueprint:`<button class="chi-button -icon -close" aria-label="Close">
  <div class="chi-button__content">
    <i class="chi-icon icon-x" aria-hidden="true"></i>
  </div>
</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Close icon button",titleSize:"h3",id:"close-icon"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Use close icon buttons to exit from components displayed in a layer above the app (e.g. Modals, Popovers, Drawers, etc.).",-1)])),example:n(()=>o[1]||(o[1]=[t("chi-button",{type:"close"},null,-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),tt=d({__name:"_danger-lumen-centurylink",setup(b){const i={webcomponent:`<chi-button color="danger">Danger</chi-button>
<chi-button color="danger" variant="outline">Danger</chi-button>
<chi-button color="danger" variant="flat">Danger</chi-button>`,htmlblueprint:`<button class="chi-button -danger">Danger</button>
<button class="chi-button -danger -outline">Danger</button>
<button class="chi-button -danger -flat">Danger</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Danger",titleSize:"h2",id:"danger-lumen-centurylink"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},"For special cases, such as styling a destructive action in an application (e.g. Delete Account), a Danger button may be used.",-1)])),example:n(()=>o[1]||(o[1]=[t("chi-button",{class:"-mr--2",color:"danger"},"Danger",-1),t("chi-button",{class:"-mr--2",variant:"outline",color:"danger"},"Danger",-1),t("chi-button",{variant:"flat",color:"danger"},"Danger",-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),ot=d({__name:"_example",setup(b){const i={webcomponent:`<!-- Primary -->
<chi-button color="primary">Primary</chi-button>
<!-- Secondary -->
<chi-button>Secondary</chi-button>
<!-- Tertiary -->
<chi-button size="xs">Tertiary</chi-button>`,htmlblueprint:`<!-- Primary -->
<button class="chi-button -primary">Primary</button>
<!-- Secondary -->
<button class="chi-button">Secondary</button>
<!-- Tertiary -->
<button class="chi-button -xs">Tertiary</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary" href="#" role="button">Link button</a>
<input class="chi-button -primary" type="button" value="Input button">
<input class="chi-button -primary" type="submit" value="Submit button">`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Examples",id:"examples-portal"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text -mb--3"},"Use the primary button example for high emphasis actions, secondary button example for medium emphasis actions, and tertiary button example for low emphasis actions.",-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"chi-form__item"},[t("div",{class:"-d--flex -align-items--center"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary"},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",null,"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{size:"xs"},"Tertiary")])])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o[2]||(o[2]=t("div",{class:"p--text chi-tab__description"},[s("Chi supports button classes on "),t("code",null,"<button>"),s(", "),t("code",null,"<a>"),s(" and "),t("code",null,"<input>"),s(" elements.")],-1)),e(l,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),nt=d({__name:"_disabled",setup(b){const i={webcomponent:`<!-- Primary -->
<chi-button color="primary" disabled>Primary</chi-button>
<!-- Secondary -->
<chi-button disabled>Secondary</chi-button>
<!-- Tertiary -->
<chi-button size="xs" disabled>Tertiary</chi-button>`,htmlblueprint:`<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Primary</button>
<button class="chi-button" disabled>Secondary</button>
<button class="chi-button -xs" disabled>Tertiary</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Primary</button>
<button class="chi-button -disabled">Secondary</button>
<button class="chi-button -xs -disabled">Tertiary</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Disabled",titleSize:"h2",id:"disabled-portal"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},[s("Make buttons appear inactive by adding the "),t("code",null,"disabled"),s(" boolean attribute or "),t("code",null,"-disabled"),s(" class.")],-1)])),example:n(()=>o[1]||(o[1]=[t("div",{class:"-d--flex -align-items--center"},[t("div",{class:"-pr--2"},[t("chi-button",{color:"primary",disabled:""},"Primary")]),t("div",{class:"-pr--2"},[t("chi-button",{disabled:""},"Secondary")]),t("div",{class:"-pr--2"},[t("chi-button",{size:"xs",disabled:""},"Tertiary")])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),it=d({__name:"_fluid",setup(b){const i={webcomponent:`<chi-button color="primary" fluid>Primary</chi-button>
<chi-button color="primary" variant="outline" fluid>Secondary</chi-button>`,htmlblueprint:`<button class="chi-button -primary -fluid">Primary</button>
<button class="chi-button -fluid">Secondary</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Fluid",titleSize:"h2",id:"fluid-portal"},{"example-description":n(()=>o[0]||(o[0]=[t("p",{class:"-text"},"Use Fluid buttons to stretch the full width of the parent container.",-1)])),example:n(()=>o[1]||(o[1]=[t("chi-button",{class:"-mb--2",color:"primary",fluid:""},"Primary",-1),t("chi-button",{color:"primary",variant:"outline",fluid:""},"Secondary",-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),et={class:"-d--flex"},ct={class:"-ml--2",variant:"flat",type:"icon","alternative-text":"Edit",ref:"edit","data-tooltip":"Edit"},lt=d({__name:"_icon-button",setup(b){const i=x("edit");let a;f(()=>{i.value&&(a=chi.tooltip(i.value))}),g(()=>a==null?void 0:a.dispose());const o={webcomponent:`<chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(l,c)=>{const u=h,y=w,v=_;return r(),m(v,{title:"Icon buttons",titleSize:"h2",id:"icon-buttons-portal"},{"example-description":n(()=>c[0]||(c[0]=[t("p",{class:"-text"},"For interfaces with limited space, an Icon button can be used for common actions such as editing, deleting, closing, etc.",-1)])),example:n(()=>[t("div",et,[t("chi-button",ct,c[1]||(c[1]=[t("chi-icon",{icon:"edit"},null,-1)]),512)])]),"code-webcomponent":n(()=>[e(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(y),e(u,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),at=d({__name:"_labeled-icon",setup(b){const i={webcomponent:`<chi-button size="xs">
  <chi-icon icon="edit"></chi-icon>
  <span>Edit</span>
</chi-button>`,htmlblueprint:`<button class="chi-button -xs">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
    <span>Edit</span>
  </div>
</button>`};return(a,o)=>{const l=h,c=_;return r(),m(c,{title:"Labeled icon buttons",id:"labeled-portal"},{example:n(()=>o[0]||(o[0]=[t("div",{class:"-d--flex"},[t("div",{class:"-pr--2"},[t("chi-button",{size:"xs"},[t("chi-icon",{icon:"edit"}),t("span",null,"Edit")])])],-1)])),"code-webcomponent":n(()=>[e(l,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(l,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),st={class:"chi-form__item"},ut={class:"-d--flex"},rt={class:"-pr--2"},pt={color:"primary",type:"float",size:"lg","alternative-text":"Chat with Support",ref:"chat","data-tooltip":"Chat with Support"},dt=d({__name:"_floating-icon",setup(b){const i=x("chat");let a;f(()=>{i.value&&(a=chi.tooltip(i.value))}),g(()=>a==null?void 0:a.dispose());const o={webcomponent:`<chi-button type="float" color="primary" size="lg" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<button class="chi-button -primary -lg -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(l,c)=>{const u=h,y=w,v=_;return r(),m(v,{title:"Floating icon buttons",id:"floating-icon-portal"},{example:n(()=>[t("div",st,[t("div",ut,[t("div",rt,[t("chi-button",pt,c[0]||(c[0]=[t("chi-icon",{icon:"chat"},null,-1)]),512)])])])]),"code-webcomponent":n(()=>[e(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(y),e(u,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),bt={class:"-text--bold -pl--2"},mt={class:"chi-col -w--12 -pb--2 -mr--0 -d--flex"},ht={class:"-pr--2"},_t=["size"],yt={class:"-pr--2"},vt=["size"],xt={class:"-pr--2"},ft=["size"],gt=d({__name:"_sizes",setup(b){const i=["xs","sm","md","lg"],a=[],o=i.map(c=>x(`button-${c}`));f(()=>{o.forEach(c=>{c.value&&a.push(chi.tooltip(c.value))})}),g(()=>{a.forEach(c=>{var u;(u=c[0])==null||u.dispose()})});const l={webcomponent:`<!-- xs -->
<chi-button color="primary" size="xs">Button</chi-button>
<chi-button size="xs">Button</chi-button>
<chi-button type="icon" variant="flat" size="xs" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- sm -->
<chi-button color="primary" size="sm">Button</chi-button>
<chi-button size="sm">Button</chi-button>
<chi-button type="icon" variant="flat" size="sm" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- md -->
<chi-button color="primary" size="md">Button</chi-button>
<chi-button size="md">Button</chi-button>
<chi-button type="icon" variant="flat" size="md" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- lg -->
<chi-button color="primary" size="lg">Button</chi-button>
<chi-button size="lg">Button</chi-button>
<chi-button type="icon" variant="flat" size="lg" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,htmlblueprint:`<!-- xs -->
<button class="chi-button -primary -xs">Button</button>
<button class="chi-button -xs">Button</button>
<button class="chi-button -flat -xs -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- sm -->
<button class="chi-button -primary -sm">Button</button>
<button class="chi-button -sm">Button</button>
<button class="chi-button -flat -sm -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- md -->
<button class="chi-button -primary -md">Button</button>
<button class="chi-button -md">Button</button>
<button class="chi-button -flat -md -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- lg -->
<button class="chi-button -primary -lg">Button</button>
<button class="chi-button -lg">Button</button>
<button class="chi-button -flat -lg -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`};return(c,u)=>{const y=h,v=_;return r(),m(v,{title:"Sizes",titleSize:"h2",id:"sizes-portal"},{"example-description":n(()=>u[0]||(u[0]=[t("p",{class:"-text"},[s("Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), and Large (lg). The default size is "),t("code",null,"md"),s(".")],-1)])),example:n(()=>[(r(),B(E,null,z(i,p=>t("div",null,[t("p",bt,C(p),1),t("div",mt,[t("div",ht,[t("chi-button",{size:p,color:"primary"},"Button",8,_t)]),t("div",yt,[t("chi-button",{size:p},"Button",8,vt)]),t("div",xt,[t("chi-button",{size:p,variant:"flat",type:"icon","alternative-text":"Button action",ref_for:!0,ref:`button-${p}`,"data-tooltip":"Button action","data-position":"bottom"},u[1]||(u[1]=[t("chi-icon",{icon:"atom"},null,-1)]),8,ft)])])])),64))]),"code-webcomponent":n(()=>[e(y,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[e(y,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),Bt={key:0},wt={key:1},Et=d({__name:"index",setup(b){const i=F();return(a,o)=>(r(),B("div",null,[["lumen","centurylink"].includes(T(i))?(r(),B("div",Bt,[o[0]||(o[0]=t("h2",null,"Examples",-1)),e(j),e(M),e(N),e(P),e(J),e(O),e(K),e(Q),e(Z),e(k),e(tt),e(R)])):(r(),B("div",wt,[e(ot),e(nt),e(it),e(lt),e(at),e(dt),e(k),e(gt)]))]))}});export{Et as _};
