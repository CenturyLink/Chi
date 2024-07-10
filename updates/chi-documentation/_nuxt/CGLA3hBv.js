var J=Object.defineProperty;var K=(o,n,l)=>n in o?J(o,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[n]=l;var p=(o,n,l)=>K(o,typeof n!="symbol"?n+"":n,l);import{V as $,N as f}from"./uJTUijt2.js";import{o as a,f as g,w as r,a as c,c as b,F as v,i as x,b as u,d as m,t as F,n as S,g as Q,r as _,a3 as R}from"./B5CYXVwa.js";import{_ as y}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{_ as B}from"./DlAUqK2U.js";import U from"./Cklogibh.js";import X from"./CjYnz3cY.js";import Y from"./Bv2QXOkq.js";import Z from"./B6-6jJ0t.js";import k from"./B68H7DQ6.js";import{s as tt}from"./2EwpEKcw.js";import{_ as ot}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./By_bqUVL.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var nt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,st=(o,n,l,s)=>{for(var t=s>1?void 0:s?et(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&nt(n,l,t),t};let C=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`})}};C=st([f({})],C);const lt=c("p",{class:"-text"},[m("To render a button group, wrap a series of buttons in a div and apply the class "),c("code",null,"chi-button-group"),m(".")],-1),it={class:"chi-button-group"},ct={class:"chi-button"};function ut(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Base",id:"base",tabs:o.exampleTabs},{"example-description":r(()=>[lt]),example:r(()=>[c("div",it,[(a(!0),b(v,null,x(Array(3).fill(0),h=>(a(),b("button",ct,"Button"))),256))])]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const at=B(C,[["render",ut]]);var rt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,bt=(o,n,l,s)=>{for(var t=s>1?void 0:s?pt(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&rt(n,l,t),t};let P=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-button-group -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`})}};P=bt([f({})],P);const dt={class:"chi-button-group -fluid"},mt={class:"chi-button"};function ht(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Horizontal",id:"fluid-horizontal",tabs:o.exampleTabs},{example:r(()=>[c("div",dt,[(a(!0),b(v,null,x(Array(3).fill(0),h=>(a(),b("button",mt,"Button"))),256))])]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _t=B(P,[["render",ht]]);var vt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,ft=(o,n,l,s)=>{for(var t=s>1?void 0:s?$t(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&vt(n,l,t),t};let O=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-button-group -vertical -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`})}};O=ft([f({})],O);const Bt={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}},xt={class:"chi-button"};function gt(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Vertical",id:"fluid-vertical",tabs:o.exampleTabs},{example:r(()=>[c("div",Bt,[(a(!0),b(v,null,x(Array(3).fill(0),h=>(a(),b("button",xt,"Button"))),256))])]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const yt=B(O,[["render",gt]]);var wt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,St=(o,n,l,s)=>{for(var t=s>1?void 0:s?zt(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&wt(n,l,t),t};let H=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`})}};H=St([f({})],H);const Ct=c("p",{class:"-text"},"Button groups support all button types and styles, including icons. Mix and match text and icons to form a hybrid button group.",-1),Pt=c("div",{class:"chi-button-group"},[c("button",{class:"chi-button"},"Button"),c("button",{class:"chi-button -icon","aria-label":"Button action"},[c("div",{class:"chi-button__content"},[c("i",{class:"chi-icon icon-atom","aria-hidden":"true"})])])],-1);function Ot(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{title:"Hybrid buttons",id:"hybrid-buttons",tabs:o.exampleTabs},{"example-description":r(()=>[Ct]),example:r(()=>[Pt]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ht=B(H,[["render",Ot]]);var Lt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Vt=(o,n,l,s)=>{for(var t=s>1?void 0:s?Tt(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&Lt(n,l,t),t};let L=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"sizes",["xs","sm","md","lg","xl"]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`})}};L=Vt([f({})],L);const Dt=c("p",{class:"-text"},[m("Hybrid buttons support the following sizes: "),c("code",null,"xs"),m(", "),c("code",null,"sm"),m(", "),c("code",null,"md"),m(", "),c("code",null,"lg"),m(", "),c("code",null,"xl"),m(". The default size is "),c("code",null,"md"),m(".")],-1),jt={class:"-p--0 -d--flex -flex--column"},Et={class:"-text--bold -pl--1 -mb--0"},Ft={class:"chi-button-group -m--1"},At=c("div",{class:"chi-button__content"},[c("i",{class:"chi-icon icon-atom","aria-hidden":"true"})],-1),Mt=[At];function Wt(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Hybrid buttons sizes",id:"hybrid-buttons-sizes-lumen-centurylink",tabs:o.exampleTabs},{"example-description":r(()=>[Dt]),example:r(()=>[(a(!0),b(v,null,x(o.sizes,h=>(a(),b("div",jt,[c("p",Et,"-"+F(h),1),c("div",Ft,[c("button",{class:S(`chi-button -${h}`)},"Button",2),c("button",{class:S(`chi-button -${h} -icon`),"aria-label":"Button action"},Mt,2)])]))),256))]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Nt=B(L,[["render",Wt]]);var Gt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,It=(o,n,l,s)=>{for(var t=s>1?void 0:s?qt(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&Gt(n,l,t),t};let T=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"sizes",["xs","sm","md","lg","xl"]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`})}};T=It([f({})],T);const Jt={class:"-text--bold"},Kt={class:"-d--flex -flex--wrap"},Qt={class:"chi-button-group"};function Rt(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Horizontal",id:"sizes-horizontal-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[(a(!0),b(v,null,x(o.sizes,h=>(a(),b("div",null,[c("p",Jt,"-"+F(h),1),c("div",Kt,[c("div",Qt,[(a(!0),b(v,null,x(Array(3).fill(0),z=>(a(),b("button",{class:S(`chi-button -${h}`)},"Button",2))),256))])])]))),256))]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ut=B(T,[["render",Rt]]);var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Zt=(o,n,l,s)=>{for(var t=s>1?void 0:s?Yt(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&Xt(n,l,t),t};let V=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"sizes",["xs","sm","md","lg","xl"]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- xs -->
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
</div>`})}};V=Zt([f({})],V);const kt={class:"-text--bold"},to={class:"-d--flex -flex--wrap"},oo={class:"chi-button-group -vertical -fluid",style:{width:"12rem"}};function no(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Vertical",id:"sizes-vertical-lumen-centurylink",tabs:o.exampleTabs},{example:r(()=>[(a(!0),b(v,null,x(o.sizes,h=>(a(),b("div",null,[c("p",kt,"-"+F(h),1),c("div",to,[c("div",oo,[(a(!0),b(v,null,x(Array(3).fill(0),z=>(a(),b("button",{class:S(`chi-button -${h}`)},"Button",2))),256))])])]))),256))]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const eo=B(V,[["render",no]]);var so=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,io=(o,n,l,s)=>{for(var t=s>1?void 0:s?lo(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&so(n,l,t),t};let D=class extends ${constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-button-group -vertical">
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
  <button class="chi-button">Button</button>
</div>`})}};D=io([f({})],D);const co=c("p",{class:"-text"},[m("To render a series of buttons vertically, apply the class modifier "),c("code",null,"-vertical"),m(".")],-1),uo={class:"chi-button-group -vertical"},ao={class:"chi-button"};function ro(o,n,l,s,t,i){const e=y,d=w;return a(),g(d,{titleSize:"h4",title:"Vertical",id:"vertical",tabs:o.exampleTabs},{"example-description":r(()=>[co]),example:r(()=>[c("div",uo,[(a(!0),b(v,null,x(Array(3).fill(0),h=>(a(),b("button",ao,"Button"))),256))])]),"code-webcomponent":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[u(e,{class:"html",lang:"html",code:o.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const po=B(D,[["render",ro]]);var bo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,ho=(o,n,l,s)=>{for(var t=s>1?void 0:s?mo(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&bo(n,l,t),t};let j=class extends ${constructor(){super(...arguments);p(this,"selectedTheme",Q())}};j=ho([f({components:{ButtonGroupBase:at,Vertical:po,FluidHorizontal:_t,FluidVertical:yt,SizesHorizontalLumenCenturyLink:Ut,SizesVerticalLumenCenturyLink:eo,HybridButtons:Ht,HybridSizesLumenCenturyLink:Nt,HybridSizesPortal:U,SizesHorizontalPortal:X,SizesVerticalPortal:Y}})],j);const _o=c("h3",null,"Examples",-1),vo=c("h3",null,"Fluid buttons",-1),$o=c("p",{class:"-text"},[m("Button groups can be expanded to fill the parent space by applying the class "),c("code",null,"-fluid"),m(".")],-1),fo={key:0},Bo=R('<h3>Sizes</h3><p class="-text">Button groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.</p>',2),xo={key:1},go=c("h3",null,"Sizes",-1),yo=c("p",{class:"-text"},[m("Button groups support the following sizes: "),c("code",null,"-xs"),m(", "),c("code",null,"-sm"),m(", "),c("code",null,"-md"),m(", "),c("code",null,"-lg"),m(". The default size is "),c("code",null,"-md"),m(".")],-1);function wo(o,n,l,s,t,i){const e=_("ButtonGroupBase"),d=_("Vertical"),h=_("FluidHorizontal"),z=_("FluidVertical"),M=_("SizesHorizontalLumenCenturyLink"),W=_("SizesVerticalLumenCenturyLink"),A=_("HybridButtons"),N=_("HybridSizesLumenCenturyLink"),G=_("SizesHorizontalPortal"),q=_("SizesVerticalPortal"),I=_("HybridSizesPortal");return a(),b(v,null,[_o,u(e),u(d),vo,$o,u(h),u(z),["lumen","centurylink","lumenrebrand24"].includes(o.selectedTheme)?(a(),b("div",fo,[Bo,u(M),u(W),u(A),u(N)])):(a(),b("div",xo,[go,yo,u(G),u(q),u(A),u(I)]))],64)}const zo=B(j,[["render",wo]]);var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,Po=(o,n,l,s)=>{for(var t=s>1?void 0:s?Co(n,l):n,i=o.length-1,e;i>=0;i--)(e=o[i])&&(t=(s?e(n,l,t):e(t))||t);return s&&t&&So(n,l,t),t};let E=class extends ${constructor(){super(...arguments);p(this,"pageTabs",tt)}};E=Po([f({components:{Examples:zo,Accessibility:k,Properties:Z}})],E);const Oo={class:"chi-grid__container -pt--3"},Ho={class:"chi-tabs-panel -active",id:"examples"},Lo={class:"chi-tabs-panel",id:"properties"},To={class:"chi-tabs-panel",id:"accessibility"};function Vo(o,n,l,s,t,i){const e=ot,d=_("Examples"),h=_("Properties"),z=_("Accessibility");return a(),b(v,null,[u(e,{title:"Button group",description:"Button groups are used to wrap a series of buttons on a single line.",tabs:o.pageTabs},null,8,["tabs"]),c("div",Oo,[c("div",Ho,[u(d)]),c("div",Lo,[u(h)]),c("div",To,[u(z)])])],64)}const un=B(E,[["render",Vo]]);export{un as default};
