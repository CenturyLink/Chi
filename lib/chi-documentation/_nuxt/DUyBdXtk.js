import{_ as k}from"./CcrI_bxZ.js";import{_ as d}from"./Di-ELn2D.js";import{_ as h}from"./Cx7J_iiN.js";import{e as r,o as p,f as u,w as l,a as e,b as t,d as s,c as _,F as f}from"./CRBsHPO5.js";const b=r({__name:"_base",setup(m){const i={webcomponent:'<chi-link href="#">Link</chi-link>',htmlblueprint:'<a class="chi-link" href="#">Link</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Base",id:"base",additionalClasses:"-text"},{example:l(()=>n[0]||(n[0]=[e("chi-link",{href:"#"},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),x=r({__name:"_disabled",setup(m){const i={webcomponent:'<chi-link href="#" disabled>Link</chi-link>',htmlblueprint:'<a class="chi-link -disabled" href="#">Link</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Disabled",id:"disabled",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Make links appear inactive by adding the "),e("code",null,"disabled"),s(" boolean attribute or "),e("code",null,"-disabled"),s(" class.")],-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#",disabled:""},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),g=r({__name:"_no-hover-underline",setup(m){const i={webcomponent:'<chi-link href="#" no-hover-underline>Link</chi-link>',htmlblueprint:'<a class="chi-link -no-hover-underline" href="#">Link</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"No Underline on Hover",id:"no-hover-underline",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Use to remove a link's underline on hover.",-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#","no-hover-underline":""},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),w=r({__name:"_no-underline",setup(m){const i={webcomponent:'<chi-link href="#" no-underline>Link</chi-link>',htmlblueprint:'<a class="chi-link -no-underline" href="#">Link</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"No Underline",id:"no-underline",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Use to remove a link's underline.",-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#","no-underline":""},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),L=r({__name:"_cta",setup(m){const i={webcomponent:'<chi-link href="#" cta>Learn more</chi-link>',htmlblueprint:'<a class="chi-link -cta" href="#">Learn more</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"CTA",id:"cta",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Call to action (CTA) links are prominent links used primarily on marketing web pages to encourage users to perform a specific action (e.g. Get started, Learn more). Use "),e("a",{href:"#additional-sizes"},"link sizes"),s(" to render CTA links larger or smaller.")],-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#",cta:""},"Learn more",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),C=r({__name:"_labeled-icon-link",setup(m){const i={webcomponent:`<chi-link href="#">
  <chi-icon icon="circle-question-outline"></chi-icon>
  <span>Help</span>
</chi-link>`,htmlblueprint:`<a class="chi-link" href="#">
  <div class="chi-link__content">
    <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
    <span>Help</span>
  </div>
</a>`};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Labeled Icon Link",id:"labeled-icon-link",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Use labeled icon links to render both text and icons inside link tags.",-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#"},[e("chi-icon",{icon:"circle-question-outline"}),e("span",null,"Help")],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),v=r({__name:"_icon-link",setup(m){const i={webcomponent:`<chi-link href="#" alternative-text="View helpful information about this topic">
  <chi-icon icon="circle-question-outline"></chi-icon>
</chi-link>`,htmlblueprint:`<a class="chi-link" href="#" aria-label="View helpful information about this topic">
  <div class="chi-link__content">
    <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
  </div>
</a>`};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Icon Link",id:"icon-link",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Use icon links to render icons inside link tags. "),e("strong",null,"Note:"),s(" All icon links without text labels must define a label in the "),e("code",null,"alternative-text"),s(" attribute for accessibility.")],-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#","alternative-text":"View helpful information about this topic"},[e("chi-icon",{icon:"circle-question-outline"})],-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),y=r({__name:"_target",setup(m){const i={webcomponent:`<!-- Open a link in the same frame as it was clicked (default) -->
<chi-link href="#" target="_self">Link</chi-link>

<!-- Open a link in a new window or tab -->
<chi-link href="#" target="_blank">Link</chi-link>

<!-- Open a link in the parent frame -->
<chi-link href="#" target="_parent">Link</chi-link>

<!-- Open a link in the full body of the window -->
<chi-link href="#" target="_top">Link</chi-link>

<!-- Open a link in a custom named frame -->
<chi-link href="#" target="framename">Link</chi-link>`,htmlblueprint:`<!-- Open a link in the same frame as it was clicked (default) -->
<a class="chi-link" href="#" target="_self">Link</a>

<!-- Open a link in a new window or tab -->
<a class="chi-link" href="#" target="_blank">Link</a>

<!-- Open a link in the parent frame -->
<a class="chi-link" href="#" target="_parent">Link</a>

<!-- Open a link in the full body of the window -->
<a class="chi-link" href="#" target="_top">Link</a>

<!-- Open a link in a custom named frame -->
<a class="chi-link" href="#" target="framename">Link</a>
`};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Target",id:"target",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Use target to specify where to open a link. Supported values are: "),e("code",null,"_self"),s(", "),e("code",null,"_blank"),s(", "),e("code",null,"_parent"),s(", "),e("code",null,"_top"),s(", or a custom named frame "),e("em",null,[e("code",null,"framename")]),s(". The default value is "),e("code",null,"_self"),s(".")],-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#",target:"_self"},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),z=r({__name:"_rel",setup(m){const i={webcomponent:'<chi-link href="#" rel="noopener">Link</chi-link>',htmlblueprint:'<a class="chi-link" href="#" rel="noopener">Link</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Rel",id:"rel",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Use rel to set the relationship between the current page and the linked page. Rel supports all HTML a attribute values. Examples include: "),e("code",null,"alternate"),s(", "),e("code",null,"external"),s(", "),e("code",null,"next"),s(", "),e("code",null,"nofollow"),s(", "),e("code",null,"noreferrer"),s(", "),e("code",null,"noopener"),s(", "),e("code",null,"prev"),s(", and more.")],-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#",rel:"noopener"},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),S=r({__name:"_download",setup(m){const i={webcomponent:`<!-- Use default filename -->
<chi-link href="#" download>Link</chi-link>

<!-- Specify custom filename -->
<chi-link href="#" download="custom-filename">Link</chi-link>`,htmlblueprint:`<!-- Use default filename -->
<a class="chi-link" href="#" download>Link</a>

<!-- Specify custom filename -->
<a class="chi-link" href="#" download="custom-filename">Link</a>`};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Download",id:"download",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Use download to prompt users to save a page or document instead of navigating to it. The download attribute accepts an optional value used to name the file. If no value is provided, the original filename is used.",-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#",download:""},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),E=r({__name:"_hreflang",setup(m){const i={webcomponent:'<chi-link href="#" hreflang="en">Link</chi-link>',htmlblueprint:'<a class="chi-link" href="#" hreflang="en">Link</a>'};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Hreflang",id:"hreflang",additionalClasses:"-text"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Use to set the language of the link.",-1)])),example:l(()=>n[1]||(n[1]=[e("chi-link",{href:"#",hreflang:"en"},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),$=r({__name:"_additional-sizes",setup(m){const i={webcomponent:`<!-- xs -->
<chi-link href="#" size="xs">Link</chi-link>

<!-- sm -->
<chi-link href="#" size="sm">Link</chi-link>

<!-- md -->
<chi-link href="#" size="md">Link</chi-link>

<!-- lg -->
<chi-link href="#" size="lg">Link</chi-link>

<!-- xl -->
<chi-link href="#" size="xl">Link</chi-link>`,htmlblueprint:`<!-- xs -->
<a class="chi-link -xs" href="#">Link</a>

<!-- sm -->
<a class="chi-link -sm" href="#">Link</a>

<!-- md -->
<a class="chi-link -md" href="#">Link</a>

<!-- lg -->
<a class="chi-link -lg" href="#">Link</a>

<!-- xl -->
<a class="chi-link -xl" href="#">Link</a>`};return(c,n)=>{const o=d,a=h;return p(),u(a,{title:"Additional Sizes",id:"additional-sizes",additionalClasses:"-text","title-size":"h2"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Links support the following sizes: "),e("code",null,"xs"),s(", "),e("code",null,"sm"),s(", "),e("code",null,"md"),s(", "),e("code",null,"lg"),s(", and "),e("code",null,"xl"),s(". By default, links inherit the font-size of their parent element.")],-1)])),example:l(()=>n[1]||(n[1]=[e("p",{class:"-text--bold"},"xs",-1),e("chi-link",{href:"#",size:"xs"},"Link",-1),e("p",{class:"-text--bold"},"sm",-1),e("chi-link",{href:"#",size:"sm"},"Link",-1),e("p",{class:"-text--bold"},"md",-1),e("chi-link",{href:"#",size:"md"},"Link",-1),e("p",{class:"-text--bold"},"lg",-1),e("chi-link",{href:"#",size:"lg"},"Link",-1),e("p",{class:"-text--bold"},"xl",-1),e("chi-link",{href:"#",size:"xl"},"Link",-1)])),"code-webcomponent":l(()=>[t(o,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[t(o,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),B=r({__name:"index",setup(m){return(i,c)=>{const n=k;return p(),_(f,null,[c[0]||(c[0]=e("h2",null,"Examples",-1)),t(b),t(x),t(w),t(g),t(L),t(n,null,{default:l(()=>[t(C),t(v)]),_:1}),t(y),t(z),t(S),t(E),t($)],64)}}});export{B as _};
