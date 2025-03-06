import{_ as d}from"./C_gFFCTR.js";import{_ as r}from"./CmWk2xIH.js";import{e as a,f as b,o as m,w as l,b as n,a as e,d as t,c as h}from"./CmP53kv-.js";const x=a({__name:"_base",setup(u){const o=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<div class="chi-price">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>`};return(_,p)=>{const c=d,i=r;return m(),b(i,{title:"Base",id:"base",tabs:o},{example:l(()=>p[0]||(p[0]=[e("div",{class:"chi-price -m--3"},[e("sup",null,"$"),t("100"),e("sup",null,"00")],-1)])),"code-webcomponent":l(()=>[n(c,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[n(c,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),v=a({__name:"_sizes",setup(u){const o=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:"",htmlblueprint:`<div class="chi-price -sm">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>
<div class="chi-price -md">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>
<div class="chi-price -lg">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>`};return(_,p)=>{const c=d,i=r;return m(),b(i,{title:"Sizes",id:"sizes",padding:"-p--0",tabs:o},{example:l(()=>p[0]||(p[0]=[e("div",{class:"-p--3"},[e("p",{class:"-text--bold -mb--3"},"-sm"),e("div",{class:"chi-price -sm"},[e("sup",null,"$"),t("100"),e("sup",null,"00")]),e("p",{class:"-text--bold -mb--3"},"-md"),e("div",{class:"chi-price -md"},[e("sup",null,"$"),t("100"),e("sup",null,"00")]),e("p",{class:"-text--bold -mb--3"},"-lg"),e("div",{class:"chi-price -lg"},[e("sup",null,"$"),t("100"),e("sup",null,"00")])],-1)])),"code-webcomponent":l(()=>[n(c,{class:"html",lang:"html",code:s.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[n(c,{class:"html",lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),g=a({__name:"index",setup(u){return(o,s)=>(m(),h("div",null,[s[0]||(s[0]=e("h2",null,"Examples",-1)),s[1]||(s[1]=e("p",{class:"-text"},[t("To render price, use the class "),e("code",null,"chi-price"),t(".")],-1)),n(x),n(v)]))}});export{g as _};
