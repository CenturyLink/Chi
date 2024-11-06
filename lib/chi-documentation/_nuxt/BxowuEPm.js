import{e as _,o,f as x,w as n,a as t,d as i,c as a,i as h,F as p,b as s,t as w,n as f,j as z,k as C,q as T}from"./CRBsHPO5.js";import{_ as B}from"./Di-ELn2D.js";import{_ as g}from"./Cx7J_iiN.js";const S={class:"chi-button-group"},H={class:"chi-button"},k=_({__name:"_base",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(l,r)=>{const e=B,u=g;return o(),x(u,{titleSize:"h4",title:"Base",id:"base",tabs:b},{"example-description":n(()=>r[0]||(r[0]=[t("p",{class:"-text"},[i("To render a button group, wrap a series of buttons in a div and apply the class "),t("code",null,"chi-button-group"),i(".")],-1)])),example:n(()=>[t("div",S,[(o(!0),a(p,null,h(Array(3).fill(0),m=>(o(),a("button",H,"Button"))),256))])]),"code-webcomponent":n(()=>[s(e,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(e,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),E={class:"chi-button-group -fluid"},L={class:"chi-button"},M=_({__name:"_fluid-horizontal",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(l,r)=>{const e=B,u=g;return o(),x(u,{titleSize:"h4",title:"Horizontal",id:"fluid-horizontal",tabs:b},{example:n(()=>[t("div",E,[(o(!0),a(p,null,h(Array(3).fill(0),m=>(o(),a("button",L,"Button"))),256))])]),"code-webcomponent":n(()=>[s(e,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(e,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},A={class:"chi-button"},V=_({__name:"_fluid-vertical",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group -vertical -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(l,r)=>{const e=B,u=g;return o(),x(u,{titleSize:"h4",title:"Vertical",id:"fluid-vertical",tabs:b},{example:n(()=>[t("div",W,[(o(!0),a(p,null,h(Array(3).fill(0),m=>(o(),a("button",A,"Button"))),256))])]),"code-webcomponent":n(()=>[s(e,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(e,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),$=_({__name:"_hybrid-buttons",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(l,r)=>{const e=B,u=g;return o(),x(u,{title:"Hybrid buttons",id:"hybrid-buttons",tabs:b},{"example-description":n(()=>r[0]||(r[0]=[t("p",{class:"-text"},"Button groups support all button types and styles, including icons. Mix and match text and icons to form a hybrid button group.",-1)])),example:n(()=>r[1]||(r[1]=[t("div",{class:"chi-button-group"},[t("button",{class:"chi-button"},"Button"),t("button",{class:"chi-button -icon","aria-label":"Button action"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-atom","aria-hidden":"true"})])])],-1)])),"code-webcomponent":n(()=>[s(e,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(e,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),N={class:"-p--0 -d--flex -flex--column"},F={class:"-text--bold -pl--1 -mb--0"},j={class:"chi-button-group -m--1"},q=_({__name:"_hybrid-sizes-lumen-centurylink",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg","xl"],l={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- xl -->
<div class="chi-button-group">
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,e)=>{const u=B,m=g;return o(),x(m,{titleSize:"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-lumen-centurylink",tabs:b},{"example-description":n(()=>e[0]||(e[0]=[t("p",{class:"-text"},[i("Hybrid buttons support the following sizes: "),t("code",null,"xs"),i(", "),t("code",null,"sm"),i(", "),t("code",null,"md"),i(", "),t("code",null,"lg"),i(", "),t("code",null,"xl"),i(". The default size is "),t("code",null,"md"),i(".")],-1)])),example:n(()=>[(o(),a(p,null,h(c,d=>t("div",N,[t("p",F,"-"+w(d),1),t("div",j,[t("button",{class:f(`chi-button -${d}`)},"Button",2),t("button",{class:f(`chi-button -${d} -icon`),"aria-label":"Button action"},e[1]||(e[1]=[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1)]),2)])])),64))]),"code-webcomponent":n(()=>[s(u,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(u,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),D={class:"-p--0 -d--flex -flex--column"},G={class:"-text--bold -pl--1 -mb--0"},I={class:"chi-button-group -m--1"},J=_({__name:"_hybrid-sizes",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg"],l={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(r,e)=>{const u=B,m=g;return o(),x(m,{titleSize:"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-portal",tabs:b},{"example-description":n(()=>e[0]||(e[0]=[t("p",{class:"-text"},[i("Hybrid buttons support the following sizes: "),t("code",null,"xs"),i(", "),t("code",null,"sm"),i(", "),t("code",null,"md"),i(", "),t("code",null,"lg"),i(". The default size is "),t("code",null,"md"),i(".")],-1)])),example:n(()=>[(o(),a(p,null,h(c,d=>t("div",D,[t("p",G,"-"+w(d),1),t("div",I,[t("button",{class:f(`chi-button -${d}`)},"Button",2),t("button",{class:f(`chi-button -${d} -icon`),"aria-label":"Button action"},e[1]||(e[1]=[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1)]),2)])])),64))]),"code-webcomponent":n(()=>[s(u,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(u,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),K={class:"-text--bold"},O={class:"-d--flex -flex--wrap"},P={class:"chi-button-group"},Q=_({__name:"_sizes-horizontal",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg"],l={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>`};return(r,e)=>{const u=B,m=g;return o(),x(m,{titleSize:"h4",title:"Horizontal",id:"horizontal-portal",tabs:b},{example:n(()=>[(o(),a(p,null,h(c,d=>t("div",null,[t("p",K,"-"+w(d),1),t("div",O,[t("div",P,[(o(!0),a(p,null,h(Array(3).fill(0),y=>(o(),a("button",{class:f(`chi-button -${d}`)},"Button",2))),256))])])])),64))]),"code-webcomponent":n(()=>[s(u,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(u,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),R={class:"-text--bold"},U={class:"-d--flex -flex--wrap"},X={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},Y=_({__name:"_sizes-vertical",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg"],l={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>`};return(r,e)=>{const u=B,m=g;return o(),x(m,{titleSize:"h4",title:"Vertical",id:"vertical-portal",tabs:b},{example:n(()=>[(o(),a(p,null,h(c,d=>t("div",null,[t("p",R,"-"+w(d),1),t("div",U,[t("div",X,[(o(!0),a(p,null,h(Array(3).fill(0),y=>(o(),a("button",{class:f(`chi-button -${d}`)},"Button",2))),256))])])])),64))]),"code-webcomponent":n(()=>[s(u,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(u,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),Z={class:"-text--bold"},tt={class:"-d--flex -flex--wrap"},nt={class:"chi-button-group"},ot=_({__name:"_sizes-horizontal-lumen-centurylink",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg","xl"],l={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>
<!-- xl -->
<div class="chi-button-group">
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
</div>`};return(r,e)=>{const u=B,m=g;return o(),x(m,{titleSize:"h4",title:"Horizontal",id:"sizes-horizontal-lumen-centurylink",tabs:b},{example:n(()=>[(o(),a(p,null,h(c,d=>t("div",null,[t("p",Z,"-"+w(d),1),t("div",tt,[t("div",nt,[(o(!0),a(p,null,h(Array(3).fill(0),y=>(o(),a("button",{class:f(`chi-button -${d}`)},"Button",2))),256))])])])),64))]),"code-webcomponent":n(()=>[s(u,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(u,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),lt={class:"-text--bold"},st={class:"-d--flex -flex--wrap"},et={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},ct=_({__name:"_sizes-vertical-lumen-centurylink",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg","xl"],l={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>
<!-- xl -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
</div>`};return(r,e)=>{const u=B,m=g;return o(),x(m,{titleSize:"h4",title:"Vertical",id:"sizes-vertical-lumen-centurylink",tabs:b},{example:n(()=>[(o(),a(p,null,h(c,d=>t("div",null,[t("p",lt,"-"+w(d),1),t("div",st,[t("div",et,[(o(!0),a(p,null,h(Array(3).fill(0),y=>(o(),a("button",{class:f(`chi-button -${d}`)},"Button",2))),256))])])])),64))]),"code-webcomponent":n(()=>[s(u,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(u,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),ut={class:"chi-button-group -vertical"},it={class:"chi-button"},at=_({__name:"_vertical",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group -vertical">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(l,r)=>{const e=B,u=g;return o(),x(u,{titleSize:"h4",title:"Vertical",id:"vertical",tabs:b},{"example-description":n(()=>r[0]||(r[0]=[t("p",{class:"-text"},[i("To render a series of buttons vertically, apply the class modifier "),t("code",null,"-vertical"),i(".")],-1)])),example:n(()=>[t("div",ut,[(o(!0),a(p,null,h(Array(3).fill(0),m=>(o(),a("button",it,"Button"))),256))])]),"code-webcomponent":n(()=>[s(e,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(e,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),bt={key:0},dt={key:1},ht=_({__name:"index",setup(v){const b=z();return(c,l)=>(o(),a(p,null,[l[3]||(l[3]=t("h3",null,"Examples",-1)),s(k),s(at),l[4]||(l[4]=t("h3",null,"Fluid buttons",-1)),l[5]||(l[5]=t("p",{class:"-text"},[i("Button groups can be expanded to fill the parent space by applying the class "),t("code",null,"-fluid"),i(".")],-1)),s(M),s(V),["lumen","centurylink"].includes(C(b))?(o(),a("div",bt,[l[0]||(l[0]=T('<h3>Sizes</h3><p class="-text">Button groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.</p>',2)),s(ot),s(ct),s($),s(q)])):(o(),a("div",dt,[l[1]||(l[1]=t("h3",null,"Sizes",-1)),l[2]||(l[2]=t("p",{class:"-text"},[i("Button groups support the following sizes: "),t("code",null,"-xs"),i(", "),t("code",null,"-sm"),i(", "),t("code",null,"-md"),i(", "),t("code",null,"-lg"),i(". The default size is "),t("code",null,"-md"),i(".")],-1)),s(Q),s(Y),s($),s(J)]))],64))}});export{ht as _};
