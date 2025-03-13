import{_ as x}from"./BzQNDISb.js";import{_ as B}from"./C0Zb0D1T.js";import{e as _,f as g,o as e,w as n,b as l,a as t,c as p,i as h,F as m,d as i,t as w,n as f,l as z,j as C,m as T}from"./BpVBcII5.js";const H={class:"chi-button-group"},S={class:"chi-button"},E=_({__name:"_base",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(o,d)=>{const s=x,u=B;return e(),g(u,{"title-size":"h4",title:"Base",id:"base",tabs:b},{"example-description":n(()=>d[0]||(d[0]=[t("p",{class:"-text"},[i("To render a button group, wrap a series of buttons in a div and apply the class "),t("code",null,"chi-button-group"),i(".")],-1)])),example:n(()=>[t("div",H,[(e(),p(m,null,h(3,r=>t("button",S,"Button")),64))])]),"code-webcomponent":n(()=>[l(s,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(s,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),k={class:"chi-button-group -fluid"},L={class:"chi-button"},M=_({__name:"_fluid-horizontal",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(o,d)=>{const s=x,u=B;return e(),g(u,{"title-size":"h4",title:"Horizontal",id:"fluid-horizontal",tabs:b},{example:n(()=>[t("div",k,[(e(),p(m,null,h(3,r=>t("button",L,"Button")),64))])]),"code-webcomponent":n(()=>[l(s,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(s,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},V={class:"chi-button"},N=_({__name:"_fluid-vertical",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group -vertical -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(o,d)=>{const s=x,u=B;return e(),g(u,{"title-size":"h4",title:"Vertical",id:"fluid-vertical",tabs:b},{example:n(()=>[t("div",W,[(e(),p(m,null,h(3,r=>t("button",V,"Button")),64))])]),"code-webcomponent":n(()=>[l(s,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(s,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),y=_({__name:"_hybrid-buttons",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`};return(o,d)=>{const s=x,u=B;return e(),g(u,{title:"Hybrid buttons",id:"hybrid-buttons",tabs:b},{"example-description":n(()=>d[0]||(d[0]=[t("p",{class:"-text"},"Button groups support all button types and styles, including icons. Mix and match text and icons to form a hybrid button group.",-1)])),example:n(()=>d[1]||(d[1]=[t("div",{class:"chi-button-group"},[t("button",{class:"chi-button"},"Button"),t("button",{class:"chi-button -icon","aria-label":"Button action"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-atom","aria-hidden":"true"})])])],-1)])),"code-webcomponent":n(()=>[l(s,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(s,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),F={class:"-p--0 -d--flex -flex--column"},j={class:"-text--bold -pl--1 -mb--0"},D={class:"chi-button-group -m--1"},q=_({__name:"_hybrid-sizes-lumen-centurylink",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg","xl"],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`};return(d,s)=>{const u=x,r=B;return e(),g(r,{"title-size":"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-lumen-centurylink",tabs:b},{"example-description":n(()=>s[0]||(s[0]=[t("p",{class:"-text"},[i("Hybrid buttons support the following sizes: "),t("code",null,"xs"),i(", "),t("code",null,"sm"),i(", "),t("code",null,"md"),i(", "),t("code",null,"lg"),i(", "),t("code",null,"xl"),i(". The default size is "),t("code",null,"md"),i(".")],-1)])),example:n(()=>[(e(),p(m,null,h(c,a=>t("div",F,[t("p",j,"-"+w(a),1),t("div",D,[t("button",{class:f(`chi-button -${a}`)},"Button",2),t("button",{class:f(`chi-button -${a} -icon`),"aria-label":"Button action"},s[1]||(s[1]=[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1)]),2)])])),64))]),"code-webcomponent":n(()=>[l(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(u,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),A={class:"-p--0 -d--flex -flex--column"},G={class:"-text--bold -pl--1 -mb--0"},I={class:"chi-button-group -m--1"},J=_({__name:"_hybrid-sizes",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg"],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`};return(d,s)=>{const u=x,r=B;return e(),g(r,{"title-size":"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-portal",tabs:b},{"example-description":n(()=>s[0]||(s[0]=[t("p",{class:"-text"},[i("Hybrid buttons support the following sizes: "),t("code",null,"xs"),i(", "),t("code",null,"sm"),i(", "),t("code",null,"md"),i(", "),t("code",null,"lg"),i(". The default size is "),t("code",null,"md"),i(".")],-1)])),example:n(()=>[(e(),p(m,null,h(c,a=>t("div",A,[t("p",G,"-"+w(a),1),t("div",I,[t("button",{class:f(`chi-button -${a}`)},"Button",2),t("button",{class:f(`chi-button -${a} -icon`),"aria-label":"Button action"},s[1]||(s[1]=[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1)]),2)])])),64))]),"code-webcomponent":n(()=>[l(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(u,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),K={class:"-text--bold"},O={class:"-d--flex -flex--wrap"},P={class:"chi-button-group"},Q=_({__name:"_sizes-horizontal",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg"],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`};return(d,s)=>{const u=x,r=B;return e(),g(r,{"title-size":"h4",title:"Horizontal",id:"horizontal-portal",tabs:b},{example:n(()=>[(e(),p(m,null,h(c,a=>t("div",null,[t("p",K,"-"+w(a),1),t("div",O,[t("div",P,[(e(),p(m,null,h(3,$=>t("button",{class:f(`chi-button -${a}`)},"Button",2)),64))])])])),64))]),"code-webcomponent":n(()=>[l(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(u,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),R={class:"-text--bold"},U={class:"-d--flex -flex--wrap"},X={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},Y=_({__name:"_sizes-vertical",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg"],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`};return(d,s)=>{const u=x,r=B;return e(),g(r,{"title-size":"h4",title:"Vertical",id:"vertical-portal",tabs:b},{example:n(()=>[(e(),p(m,null,h(c,a=>t("div",null,[t("p",R,"-"+w(a),1),t("div",U,[t("div",X,[(e(),p(m,null,h(3,$=>t("button",{class:f(`chi-button -${a}`)},"Button",2)),64))])])])),64))]),"code-webcomponent":n(()=>[l(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(u,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),Z={class:"-text--bold"},tt={class:"-d--flex -flex--wrap"},nt={class:"chi-button-group"},ot=_({__name:"_sizes-horizontal-lumen-centurylink",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg","xl"],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`};return(d,s)=>{const u=x,r=B;return e(),g(r,{"title-size":"h4",title:"Horizontal",id:"sizes-horizontal-lumen-centurylink",tabs:b},{example:n(()=>[(e(),p(m,null,h(c,a=>t("div",null,[t("p",Z,"-"+w(a),1),t("div",tt,[t("div",nt,[(e(),p(m,null,h(3,$=>t("button",{class:f(`chi-button -${a}`)},"Button",2)),64))])])])),64))]),"code-webcomponent":n(()=>[l(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(u,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),lt={class:"-text--bold"},st={class:"-d--flex -flex--wrap"},et={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},ct=_({__name:"_sizes-vertical-lumen-centurylink",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c=["xs","sm","md","lg","xl"],o={webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`};return(d,s)=>{const u=x,r=B;return e(),g(r,{"title-size":"h4",title:"Vertical",id:"sizes-vertical-lumen-centurylink",tabs:b},{example:n(()=>[(e(),p(m,null,h(c,a=>t("div",null,[t("p",lt,"-"+w(a),1),t("div",st,[t("div",et,[(e(),p(m,null,h(3,$=>t("button",{class:f(`chi-button -${a}`)},"Button",2)),64))])])])),64))]),"code-webcomponent":n(()=>[l(u,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(u,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),ut={class:"chi-button-group -vertical"},it={class:"chi-button"},bt=_({__name:"_vertical",setup(v){const b=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],c={webcomponent:"",htmlblueprint:`<div class="chi-button-group -vertical">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`};return(o,d)=>{const s=x,u=B;return e(),g(u,{"title-size":"h4",title:"Vertical",id:"vertical",tabs:b},{"example-description":n(()=>d[0]||(d[0]=[t("p",{class:"-text"},[i("To render a series of buttons vertically, apply the class modifier "),t("code",null,"-vertical"),i(".")],-1)])),example:n(()=>[t("div",ut,[(e(),p(m,null,h(3,r=>t("button",it,"Button")),64))])]),"code-webcomponent":n(()=>[l(s,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[l(s,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),at={key:0},dt={key:1},ht=_({__name:"index",setup(v){const b=z();return(c,o)=>(e(),p(m,null,[o[3]||(o[3]=t("h3",null,"Examples",-1)),l(E),l(bt),o[4]||(o[4]=t("h3",null,"Fluid buttons",-1)),o[5]||(o[5]=t("p",{class:"-text"},[i("Button groups can be expanded to fill the parent space by applying the class "),t("code",null,"-fluid"),i(".")],-1)),l(M),l(N),["lumen","centurylink"].includes(C(b))?(e(),p("div",at,[o[0]||(o[0]=T('<h3>Sizes</h3><p class="-text">Button groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.</p>',2)),l(ot),l(ct),l(y),l(q)])):(e(),p("div",dt,[o[1]||(o[1]=t("h3",null,"Sizes",-1)),o[2]||(o[2]=t("p",{class:"-text"},[i("Button groups support the following sizes: "),t("code",null,"-xs"),i(", "),t("code",null,"-sm"),i(", "),t("code",null,"-md"),i(", "),t("code",null,"-lg"),i(". The default size is "),t("code",null,"-md"),i(".")],-1)),l(Q),l(Y),l(y),l(J)]))],64))}});export{ht as _};
