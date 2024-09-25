import{_ as C}from"./DJQzEPdv.js";import{_ as p}from"./onyWiYp2.js";import{_}from"./CAQzZ0uH.js";import{e as b,o,h as u,w as l,a as e,b as i,d as r,c as f,i as g,t as B,n as w,F as x}from"./CEIPSiTs.js";import"./DA9BgUq9.js";import"./B52wz4YK.js";import"./DlAUqK2U.js";import"./mn8I5ZFn.js";import"./DtNz156Q.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./NAah3XrW.js";const P=b({__name:"_base",setup(d){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<nav class="chi-breadcrumb" aria-label="Breadcrumb">
  <ol>
      <li class="chi-breadcrumb__item">
        <a href="#">Parent</a>
      </li>
      <li class="chi-breadcrumb__item">
        <a href="#">Child 1</a>
      </li>
      <li class="chi-breadcrumb__item -active">
        <a href="#" aria-current="page">Child 2</a>
      </li>
  </ol>
</nav>`};return(s,c)=>{const t=p,m=_;return o(),u(m,{title:"Base",id:"base",tabs:n},{example:l(()=>c[0]||(c[0]=[e("nav",{class:"chi-breadcrumb","aria-label":"Breadcrumb"},[e("ol",null,[e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Parent")]),e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Child 1")]),e("li",{class:"chi-breadcrumb__item -active"},[e("a",{href:"#","aria-current":"page"},"Child 2")])])],-1)])),"code-webcomponent":l(()=>[i(t,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i(t,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),T=b({__name:"_alternate-separator",setup(d){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<nav class="chi-breadcrumb -alt" aria-label="Breadcrumb">
  <ol>
      <li class="chi-breadcrumb__item">
        <a href="#">Parent</a>
      </li>
      <li class="chi-breadcrumb__item">
        <a href="#">Child 1</a>
      </li>
      <li class="chi-breadcrumb__item -active">
        <a href="#" aria-current="page">Child 2</a>
      </li>
  </ol>
</nav>`};return(s,c)=>{const t=p,m=_;return o(),u(m,{title:"Alternate Separator",id:"alternate-separator",tabs:n},{"example-description":l(()=>c[0]||(c[0]=[e("p",{class:"-text"},[r("Apply the "),e("code",null,"-alt"),r(" class to render breadcrumbs with an alternate separator.")],-1)])),example:l(()=>c[1]||(c[1]=[e("nav",{class:"chi-breadcrumb -alt","aria-label":"Breadcrumb"},[e("ol",null,[e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Parent")]),e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Child 1")]),e("li",{class:"chi-breadcrumb__item -active"},[e("a",{href:"#","aria-current":"page"},"Child 2")])])],-1)])),"code-webcomponent":l(()=>[i(t,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i(t,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),y={class:"-text--bold"},$=b({__name:"_additional-sizes",setup(d){const n=["xs","sm","md","lg","xl"],a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<!-- xs -->
<nav class="chi-breadcrumb -xs" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- sm -->
<nav class="chi-breadcrumb -sm" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- md -->
<nav class="chi-breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- lg -->
<nav class="chi-breadcrumb -lg" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- xl -->
<nav class="chi-breadcrumb -xl" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>`};return(c,t)=>{const m=p,v=_;return o(),u(v,{title:"Additional Sizes",id:"additional-sizes",tabs:a},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},[r("Breadcrumbs support the following sizes: "),e("code",null,"-xs"),r(", "),e("code",null,"-sm"),r(", "),e("code",null,"-md"),r(", "),e("code",null,"-lg"),r(", and "),e("code",null,"-xl"),r(". The default size is "),e("code",null,"-md"),r(".")],-1)])),example:l(()=>[(o(),f(x,null,g(n,h=>e("div",null,[e("p",y,"-"+B(h),1),e("nav",{class:w(["chi-breadcrumb -mb--2",`-${h}`]),"aria-label":"Breadcrumb"},t[1]||(t[1]=[e("ol",null,[e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Parent")]),e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Child 1")]),e("li",{class:"chi-breadcrumb__item -active"},[e("a",{href:"#","aria-current":"page"},"Child 2")])],-1)]),2)])),64))]),"code-webcomponent":l(()=>[i(m,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[i(m,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),z=b({__name:"index",setup(d){return(n,a)=>(o(),f(x,null,[a[0]||(a[0]=e("h2",null,"Examples",-1)),a[1]||(a[1]=e("p",{class:"-text"},[r("To render a breadcrumb, use the class "),e("code",null,"chi-breadcrumb"),r(".")],-1)),i(P),i(T),i($)],64))}}),j=b({__name:"index",setup(d){return(n,a)=>{const s=C;return o(),u(s,{title:"Breadcrumb",description:"Breadcrumbs are used to help users identify where they are in a site's page hierarchy."},{examples:l(()=>[i(z)]),_:1})}}});export{j as default};
