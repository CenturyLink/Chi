var F=Object.defineProperty;var R=(a,s,n)=>s in a?F(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n;var h=(a,s,n)=>R(a,typeof s!="symbol"?s+"":s,n);import{V as b,N as g}from"./uJTUijt2.js";import{_ as f}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{o as v,f as x,w as d,a as i,c as m,F as A,i as C,n as y,d as r,t as T,h as P,b as p,j as W,k as M,r as _}from"./B5CYXVwa.js";import{_ as $}from"./DlAUqK2U.js";import{_ as U}from"./CZiW5hgT.js";import q from"./DN9HF7uY.js";import J from"./mptbbZqF.js";import{s as K}from"./2EwpEKcw.js";import{_ as Q}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./By_bqUVL.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(a,s,n,c)=>{for(var e=c>1?void 0:c?Y(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&X(s,n,e),e};let j=class extends b{};j=Z([g({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],colors:["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-avatar-group">
  <div class="chi-avatar">L</div>Label text
</div>`}})})],j);const k=i("p",{class:"-text"},[r("Use avatar groups to group multiple avatars or add descriptive text such as a users name. Render an avatar group by wrapping an avatar in the class "),i("code",null,"chi-avatar-group"),r(".")],-1),aa={class:"chi-grid"},ea={key:0,class:"-mb--1 chi-col -w--6 -w-sm--4 -w-md--6 -w-lg--4 -w-xl--3"},ia={class:"chi-avatar-group"};function sa(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Avatar Groups",id:"avatar-groups",tabs:a.exampleTabs},{"example-description":d(()=>[k]),example:d(()=>[i("div",aa,[(v(!0),m(A,null,C(a.colors,l=>(v(),m(A,null,[l!=="secondary"?(v(),m("div",ea,[i("div",ia,[i("div",{class:y(`chi-avatar -${l}`)},"L",2),r("Label "+T(l),1)])])):P("",!0)],64))),256))])]),"code-webcomponent":d(()=>[p(t,{lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ta=$(j,[["render",sa]]);var na=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,oa=(a,s,n,c)=>{for(var e=c>1?void 0:c?ca(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&na(s,n,e),e};let S=class extends b{};S=oa([g({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <img src="path/to/image.jpg" alt="avatar">
</div>`}})})],S);const ra=i("div",{class:"chi-avatar"},[i("img",{src:U,alt:"avatar"})],-1);function la(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Base",id:"base",tabs:a.exampleTabs},{example:d(()=>[ra]),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const da=$(S,[["render",la]]);var pa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ha=(a,s,n,c)=>{for(var e=c>1?void 0:c?va(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&pa(s,n,e),e};let I=class extends b{constructor(){super(...arguments);h(this,"baseUrl",W().public.baseUrl);h(this,"showIconAvatar",!1);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"headTabs",[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"}]);h(this,"colors",["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"]);h(this,"codeSnippets",{webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -grey">AA</div>
<div class="chi-avatar -red">AA</div>
<div class="chi-avatar -pink">AA</div>
<div class="chi-avatar -purple">AA</div>
<div class="chi-avatar -indigo">AA</div>
<div class="chi-avatar -navy">AA</div>
<div class="chi-avatar -blue">AA</div>
<div class="chi-avatar -cyan">AA</div>
<div class="chi-avatar -teal">AA</div>
<div class="chi-avatar -green">AA</div>
<div class="chi-avatar -yellow">AA</div>
<div class="chi-avatar -orange">AA</div>
<div class="chi-avatar -primary">AA</div>`,icon:`<div class="chi-avatar -grey">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -red">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -pink">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -purple">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -indigo">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -navy">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -blue">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -cyan">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -teal">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -green">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -yellow">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -orange">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -primary">
<i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`}})}headTabChanged(n){this.showIconAvatar=n.id==="icon"}};I=ha([g({})],I);const ua={class:"-text"},ma=["href"],_a=i("code",null,"-grey",-1),ba=i("code",null,"-red",-1),ga=i("code",null,"-pink",-1),$a=i("code",null,"-purple",-1),Aa=i("code",null,"-indigo",-1),fa=i("code",null,"-navy",-1),wa=i("code",null,"-blue",-1),xa=i("code",null,"-teal",-1),Ca=i("code",null,"-green",-1),ya=i("code",null,"-yellow",-1),Ta=i("code",null,"-orange",-1),Pa=i("code",null,"-secondary",-1),Oa=i("code",null,"-primary",-1),ja={class:"-p--0"},Sa={class:"chi-grid -align-items--end"},Ia={key:0,class:"chi-col -w--2 -text--center"},Ba={key:0,class:"chi-icon icon-user","aria-hidden":"true"},Da={class:"-text"};function La(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Color",id:"color",tabs:a.exampleTabs,headTabs:a.headTabs,onChiHeadTabsChange:a.headTabChanged},M({"example-description":d(()=>[i("p",ua,[r("Both icon and initial avatars support "),i("a",{href:`${a.baseUrl}foundations/color/`},"Chi colors",8,ma),r(". To color an icon, apply any of the following color classes: "),_a,r(", "),ba,r(", "),ga,r(", "),$a,r(", "),Aa,r(", "),fa,r(", "),wa,r(", "),xa,r(", "),Ca,r(", "),ya,r(", "),Ta,r(", "),Pa,r(", "),Oa])]),example:d(()=>[i("div",ja,[i("div",Sa,[(v(!0),m(A,null,C(a.colors,l=>(v(),m(A,null,[l!=="secondary"?(v(),m("div",Ia,[i("div",{class:y(`chi-avatar -${l}`)},[r(T(a.showIconAvatar?"":"AA"),1),a.showIconAvatar?(v(),m("i",Ba)):P("",!0)],2),i("p",Da,T(l),1)])):P("",!0)],64))),256))])])]),_:2},[C(a.headTabs,l=>({name:`code-color-${l.id}-htmlblueprint`,fn:d(()=>[p(t,{lang:"html",code:a.codeSnippets.htmlblueprint[l.id]},null,8,["code"])])}))]),1032,["tabs","headTabs","onChiHeadTabsChange"])}const za=$(I,[["render",La]]);var Ea=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,Wa=(a,s,n,c)=>{for(var e=c>1?void 0:c?Ha(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&Ea(s,n,e),e};let B=class extends b{constructor(){super(...arguments);h(this,"baseUrl",W().public.baseUrl);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"iconExamples",["user","users","atom"]);h(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`})}};B=Wa([g({})],B);const Ma={class:"-text"},Ua=["href"],Ga=i("code",null,"chi-avatar",-1),Na={class:"chi-grid"},Va={class:"chi-col -w--2 -w-sm--1"},Fa={class:"chi-avatar"};function Ra(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Icon Avatars",id:"icon-avatars",tabs:a.exampleTabs},{"example-description":d(()=>[i("p",Ma,[r("Icon avatars can be used when an image is not available. To use, wrap any "),i("a",{href:`${a.baseUrl}components/icon/`},"Chi icon",8,Ua),r(" with "),Ga,r(".")])]),example:d(()=>[i("div",Na,[(v(!0),m(A,null,C(a.iconExamples,l=>(v(),m("div",Va,[i("div",Fa,[i("i",{class:y(`chi-icon icon-${l}`),"aria-hidden":"true"},null,2)])]))),256))])]),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qa=$(B,[["render",Ra]]);var Ja=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,Qa=(a,s,n,c)=>{for(var e=c>1?void 0:c?Ka(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&Ja(s,n,e),e};let D=class extends b{};D=Qa([g({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:'<div class="chi-avatar">AA</div>'}})})],D);const Xa=i("p",{class:"-text"},[r("Initial avatars can also be used when an image is not available. They are more versatile than icon avatars and support up to two letters. Text utility classes such as "),i("code",null,"-text--uppercase"),r(", "),i("code",null,"-text--lowercase"),r(", and "),i("code",null,"-text--capitalized"),r(" can be applied to force specific casing.")],-1),Ya=i("div",{class:"chi-grid"},[i("div",{class:"chi-col -w--2 -w-sm--1"},[i("div",{class:"chi-avatar"},"AA")]),i("div",{class:"chi-col -w--2 -w-sm--1"},[i("div",{class:"chi-avatar"},"M")])],-1);function Za(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Initial Avatars",id:"initial-avatars",tabs:a.exampleTabs},{"example-description":d(()=>[Xa]),example:d(()=>[Ya]),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ka=$(D,[["render",Za]]);var ae=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,ie=(a,s,n,c)=>{for(var e=c>1?void 0:c?ee(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&ae(s,n,e),e};let L=class extends b{};L=ie([g({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="-bg--black">
  <div class="chi-avatar -light">AA</div>
  <div class="chi-avatar -secondary -transparent">AA</div>
  <div class="chi-avatar -light">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
  <div class="chi-avatar -secondary -transparent">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
</div>`}})})],L);const se=i("p",{class:"-text"},"Both icon and initial avatars support light and transparent versions for dark backgrounds.",-1),te=i("div",{class:"chi-grid -align-items--end"},[i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -light"},"AA")]),i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -secondary -transparent"},"AA")]),i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -light"},[i("i",{class:"chi-icon icon-user","aria-hidden":"true"})])]),i("div",{class:"chi-col -w--3 -text--center"},[i("div",{class:"chi-avatar -secondary -transparent"},[i("i",{class:"chi-icon icon-user","aria-hidden":"true"})])])],-1);function ne(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Light and transparent background",additionalClasses:"-bg--black",id:"light-transparent",tabs:a.exampleTabs},{"example-description":d(()=>[se]),example:d(()=>[te]),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ce=$(L,[["render",ne]]);var oe=Object.defineProperty,re=Object.getOwnPropertyDescriptor,le=(a,s,n,c)=>{for(var e=c>1?void 0:c?re(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&oe(s,n,e),e};let z=class extends b{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"headTabs",[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"},{id:"image",label:"Image"}]);h(this,"sizes",["xs","sm","sm--2","sm--3","md","lg","xl","xxl"]);h(this,"columnWidths",{xs:["4","3","1"],sm:["4","3","1"],"sm--2":["4","3","1"],"sm--3":["4","3","1"],md:["4","2","1"],lg:["4","3","2"],xl:["6","3","2"],xxl:["6","4","3"]});h(this,"codeSnippets",{webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -xs">AA</div>
<div class="chi-avatar -sm">AA</div>
<div class="chi-avatar -sm--2">AA</div>
<div class="chi-avatar -sm--3">AA</div>
<div class="chi-avatar -md">AA</div>
<div class="chi-avatar -lg">AA</div>
<div class="chi-avatar -xl">AA</div>
<div class="chi-avatar -xxl">AA</div>`,icon:`<div class="chi-avatar -xs">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm--2">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm--3">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -md">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -lg">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -xl">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -xxl">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`,image:`<div class="chi-avatar -xs">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm--2">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm--3">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -md">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -lg">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -xl">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -xxl">
  <img src="path/to/image.jpg">
</div>`}});h(this,"avatarType","initial")}headTabChanged(n){this.avatarType=n.id}};z=le([g({})],z);const de=i("p",{class:"-text"},[r("All three avatar styles support a full spectrum of sizes: "),i("code",null,"-xs"),r(", "),i("code",null,"-sm"),r(", "),i("code",null,"-sm--2"),r(", "),i("code",null,"-sm--3"),r(", "),i("code",null,"-md"),r(", "),i("code",null,"-lg"),r(", "),i("code",null,"-xl"),r(", "),i("code",null,"-xxl"),r(". "),i("code",null,"-md"),r(" is the default size.")],-1),pe={class:"-p--0"},ve={class:"chi-grid -align-items--end"},he={key:0,class:"chi-icon icon-user","aria-hidden":"true"},ue={key:1,src:U,alt:"avatar"},me={class:"-text"};function _e(a,s,n,c,e,o){const t=f,u=w;return v(),x(u,{title:"Size",id:"size",tabs:a.exampleTabs,headTabs:a.headTabs,onChiHeadTabsChange:a.headTabChanged},M({"example-description":d(()=>[de]),example:d(()=>[i("div",pe,[i("div",ve,[(v(!0),m(A,null,C(a.sizes,l=>(v(),m("div",{class:y(`chi-col -w--${a.columnWidths[l][0]} -w-lg--${a.columnWidths[l][1]} -w-xl--${a.columnWidths[l][2]} -text--center`)},[i("div",{class:y(`chi-avatar -${l}`)},[r(T(a.avatarType==="initial"?"AA":""),1),a.avatarType==="icon"?(v(),m("i",he)):P("",!0),a.avatarType==="image"?(v(),m("img",ue)):P("",!0)],2),i("p",me,T(l),1)],2))),256))])])]),_:2},[C(a.headTabs,l=>({name:`code-size-${l.id}-htmlblueprint`,fn:d(()=>[p(t,{lang:"html",code:a.codeSnippets.htmlblueprint[l.id]},null,8,["code"])])}))]),1032,["tabs","headTabs","onChiHeadTabsChange"])}const be=$(z,[["render",_e]]);var ge=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Ae=(a,s,n,c)=>{for(var e=c>1?void 0:c?$e(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&ge(s,n,e),e};let E=class extends b{};E=Ae([g({components:{BaseAvatar:da,IconAvatar:qa,InitialAvatar:ka,ColorCustomization:za,LightTransparent:ce,Sizes:be,AvatarGroups:ta}})],E);const fe=i("h2",null,"Examples",-1),we=i("p",{class:"-text"},[r("To render an avatar, apply the class "),i("code",null,"chi-avatar"),r(" to a div element and place an image inside.")],-1),xe=i("h2",null,"Customizations",-1);function Ce(a,s,n,c,e,o){const t=_("BaseAvatar"),u=_("IconAvatar"),l=_("InitialAvatar"),O=_("ColorCustomization"),G=_("LightTransparent"),N=_("Sizes"),V=_("AvatarGroups");return v(),m(A,null,[fe,we,p(t),p(u),p(l),xe,p(O),p(G),p(N),p(V)],64)}const ye=$(E,[["render",Ce]]);var Te=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Oe=(a,s,n,c)=>{for(var e=c>1?void 0:c?Pe(s,n):s,o=a.length-1,t;o>=0;o--)(t=a[o])&&(e=(c?t(s,n,e):t(e))||e);return c&&e&&Te(s,n,e),e};let H=class extends b{constructor(){super(...arguments);h(this,"pageTabs",K)}};H=Oe([g({components:{Examples:ye,Accessibility:J,Properties:q}})],H);const je={class:"chi-grid__container -pt--3"},Se={class:"chi-tabs-panel -active",id:"examples"},Ie={class:"chi-tabs-panel",id:"properties"},Be={class:"chi-tabs-panel",id:"accessibility"};function De(a,s,n,c,e,o){const t=Q,u=_("Examples"),l=_("Properties"),O=_("Accessibility");return v(),m(A,null,[p(t,{title:"Avatar",description:"Avatars are used to represent users, groups, and entities.",tabs:a.pageTabs},null,8,["tabs"]),i("div",je,[i("div",Se,[p(u)]),i("div",Ie,[p(l)]),i("div",Be,[p(O)])])],64)}const ti=$(H,[["render",De]]);export{ti as default};
