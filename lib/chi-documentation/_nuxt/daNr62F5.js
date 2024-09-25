import{_ as h}from"./onyWiYp2.js";import{_}from"./CAQzZ0uH.js";import{e as u,o as d,h as b,w as n,a as e,c as g,i as x,t as c,F as v,b as p}from"./CEIPSiTs.js";const w={class:"-px--4 -pt--4"},f={class:"chi-grid"},k={class:"chi-col -w--12 -w-lg--6 -w-xl--4 -mb--5"},y={class:"chi-card -s--2 -rounded -bg--white -b--base-light -mx--1 -h--100"},$={class:"-d--flex -align-items--center -justify-content--center -bg--grey-10 -p--3"},B=["icon"],T={class:"chi-card__content -p--4 -pb--6"},A={class:"-text--h3 -text--bolder -m--0"},C={class:"-text"},I={href:"#",cta:""},H=u({__name:"_marketing-feature-cards",setup(L){const m=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],a=[{icon:"people-it-professional",title:"Find the right API",description:"Browse our comprehensive API library",buttonText:"Explore APIs"},{icon:"people-software-developer",title:"Learn and build code",description:"Learn how to use our APIs to power your applications",buttonText:"View Guide"},{icon:"products-portal",title:"Launch your application",description:"Register your account and request access to APIs",buttonText:"Get Started"}],r={webcomponent:`<div class="chi-grid">
${a.map(({icon:l,title:t,description:i,buttonText:s})=>`  <div class="chi-col -w--12 -w-lg--6 -w-xl--4 -mb--5">
     <div class="chi-card -s--2 -rounded -bg--white -b--base-light -mx--1 -h--100">
       <div class="-d--flex -align-items--center -justify-content--center -bg--grey-10 -p--3">
         <chi-marketing-icon icon="${l}" size="lg"></chi-marketing-icon>
       </div>
       <div class="chi-card__content -p--4 -pb--6">
         <div class="-text--h3 -text--bolder -m--0">${t}</div>
         <p class="-text">${i}</p>
         <chi-link href="#" cta>${s}</chi-link>
       </div>
     </div>
  </div>`).join(`
`)}
</div>`,htmlblueprint:""};return(l,t)=>{const i=h,s=_;return d(),b(s,{title:"Marketing feature cards",id:"marketing_feature_cards",padding:"-p--0",tabs:m},{"example-description":n(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Use this template to feature product content on marketing oriented webpages.",-1)])),example:n(()=>[e("div",w,[e("div",f,[(d(),g(v,null,x(a,o=>e("div",k,[e("div",y,[e("div",$,[e("chi-marketing-icon",{icon:o.icon,size:"lg"},null,8,B)]),e("div",T,[e("div",A,c(o.title),1),e("p",C,c(o.description),1),e("chi-link",I,c(o.buttonText),1)])])])),64))])])]),"code-webcomponent":n(()=>[p(i,{class:"html",lang:"html",code:r.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[p(i,{class:"html",lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}});export{H as _};
