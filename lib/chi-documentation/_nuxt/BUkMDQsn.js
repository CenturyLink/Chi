import{_ as u}from"./C_gFFCTR.js";import{_ as p}from"./CmWk2xIH.js";import{e as b,f as h,o as m,w as r,b as c,a as e,d as l,c as f,i as C,t as g,n as B,F as x}from"./CmP53kv-.js";const w=b({__name:"_base",setup(d){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<nav class="chi-breadcrumb" aria-label="Breadcrumb">
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
</nav>`};return(o,i)=>{const t=u,s=p;return m(),h(s,{title:"Base",id:"base",tabs:n},{example:r(()=>i[0]||(i[0]=[e("nav",{class:"chi-breadcrumb","aria-label":"Breadcrumb"},[e("ol",null,[e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Parent")]),e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Child 1")]),e("li",{class:"chi-breadcrumb__item -active"},[e("a",{href:"#","aria-current":"page"},"Child 2")])])],-1)])),"code-webcomponent":r(()=>[c(t,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(t,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),P=b({__name:"_alternate-separator",setup(d){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:"",htmlblueprint:`<nav class="chi-breadcrumb -alt" aria-label="Breadcrumb">
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
</nav>`};return(o,i)=>{const t=u,s=p;return m(),h(s,{title:"Alternate Separator",id:"alternate-separator",tabs:n},{"example-description":r(()=>i[0]||(i[0]=[e("p",{class:"-text"},[l("Apply the "),e("code",null,"-alt"),l(" class to render breadcrumbs with an alternate separator.")],-1)])),example:r(()=>i[1]||(i[1]=[e("nav",{class:"chi-breadcrumb -alt","aria-label":"Breadcrumb"},[e("ol",null,[e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Parent")]),e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Child 1")]),e("li",{class:"chi-breadcrumb__item -active"},[e("a",{href:"#","aria-current":"page"},"Child 2")])])],-1)])),"code-webcomponent":r(()=>[c(t,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(t,{class:"html",lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),T={class:"-text--bold"},z=b({__name:"_additional-sizes",setup(d){const n=["xs","sm","md","lg","xl"],a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</nav>`};return(i,t)=>{const s=u,v=p;return m(),h(v,{title:"Additional Sizes",id:"additional-sizes",tabs:a},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[l("Breadcrumbs support the following sizes: "),e("code",null,"-xs"),l(", "),e("code",null,"-sm"),l(", "),e("code",null,"-md"),l(", "),e("code",null,"-lg"),l(", and "),e("code",null,"-xl"),l(". The default size is "),e("code",null,"-md"),l(".")],-1)])),example:r(()=>[(m(),f(x,null,C(n,_=>e("div",null,[e("p",T,"-"+g(_),1),e("nav",{class:B(["chi-breadcrumb -mb--2",`-${_}`]),"aria-label":"Breadcrumb"},t[1]||(t[1]=[e("ol",null,[e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Parent")]),e("li",{class:"chi-breadcrumb__item"},[e("a",{href:"#"},"Child 1")]),e("li",{class:"chi-breadcrumb__item -active"},[e("a",{href:"#","aria-current":"page"},"Child 2")])],-1)]),2)])),64))]),"code-webcomponent":r(()=>[c(s,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(s,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),E=b({__name:"index",setup(d){return(n,a)=>(m(),f(x,null,[a[0]||(a[0]=e("h2",null,"Examples",-1)),a[1]||(a[1]=e("p",{class:"-text"},[l("To render a breadcrumb, use the class "),e("code",null,"chi-breadcrumb"),l(".")],-1)),c(w),c(P),c(z)],64))}});export{E as _};
