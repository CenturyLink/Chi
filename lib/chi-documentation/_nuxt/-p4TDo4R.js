var F=Object.defineProperty;var R=(e,a,n)=>a in e?F(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var u=(e,a,n)=>R(e,typeof a!="symbol"?a+"":a,n);import{V as g,N as $}from"./NAah3XrW.js";import{_ as w}from"./onyWiYp2.js";import{_ as x}from"./CAQzZ0uH.js";import{o as v,h as _,w as d,a as s,d as l,c as h,F as f,i as C,n as y,t as T,l as P,b as p,p as W,q as M,m as b}from"./CEIPSiTs.js";import{_ as A}from"./DlAUqK2U.js";import{_ as U}from"./Bl3apYiB.js";import q from"./BnVnSTCM.js";import J from"./DO-o4dpr.js";import{s as K}from"./DtNz156Q.js";import{_ as Q}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B52wz4YK.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(e,a,n,r)=>{for(var i=r>1?void 0:r?Y(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&X(a,n,i),i};let j=class extends g{};j=Z([$({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],colors:["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-avatar-group">
  <div class="chi-avatar">L</div>Label text
</div>`}})})],j);const k={class:"chi-grid"},aa={key:0,class:"-mb--1 chi-col -w--6 -w-sm--4 -w-md--6 -w-lg--4 -w-xl--3"},ea={class:"chi-avatar-group"};function ia(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Avatar Groups",id:"avatar-groups",tabs:e.exampleTabs},{"example-description":d(()=>a[0]||(a[0]=[s("p",{class:"-text"},[l("Use avatar groups to group multiple avatars or add descriptive text such as a users name. Render an avatar group by wrapping an avatar in the class "),s("code",null,"chi-avatar-group"),l(".")],-1)])),example:d(()=>[s("div",k,[(v(!0),h(f,null,C(e.colors,c=>(v(),h(f,null,[c!=="secondary"?(v(),h("div",aa,[s("div",ea,[s("div",{class:y(`chi-avatar -${c}`)},"L",2),l("Label "+T(c),1)])])):P("",!0)],64))),256))])]),"code-webcomponent":d(()=>[p(t,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const sa=A(j,[["render",ia]]);var ta=Object.defineProperty,na=Object.getOwnPropertyDescriptor,ra=(e,a,n,r)=>{for(var i=r>1?void 0:r?na(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&ta(a,n,i),i};let S=class extends g{};S=ra([$({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <img src="path/to/image.jpg" alt="avatar">
</div>`}})})],S);function oa(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Base",id:"base",tabs:e.exampleTabs},{example:d(()=>a[0]||(a[0]=[s("div",{class:"chi-avatar"},[s("img",{src:U,alt:"avatar"})],-1)])),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const la=A(S,[["render",oa]]);var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,pa=(e,a,n,r)=>{for(var i=r>1?void 0:r?da(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&ca(a,n,i),i};let I=class extends g{constructor(){super(...arguments);u(this,"baseUrl",W().public.baseUrl);u(this,"showIconAvatar",!1);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"headTabs",[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"}]);u(this,"colors",["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -grey">AA</div>
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
</div>`}})}headTabChanged(n){this.showIconAvatar=n.id==="icon"}};I=pa([$({})],I);const va={class:"-text"},ua=["href"],ma={class:"-p--0"},ha={class:"chi-grid -align-items--end"},ba={key:0,class:"chi-col -w--2 -text--center"},ga={key:0,class:"chi-icon icon-user","aria-hidden":"true"},$a={class:"-text"};function Aa(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Color",id:"color",tabs:e.exampleTabs,headTabs:e.headTabs,onChiHeadTabsChange:e.headTabChanged},M({"example-description":d(()=>[s("p",va,[a[0]||(a[0]=l("Both icon and initial avatars support ")),s("a",{href:`${e.baseUrl}foundations/color/`},"Chi colors",8,ua),a[1]||(a[1]=l(". To color an icon, apply any of the following color classes: ")),a[2]||(a[2]=s("code",null,"-grey",-1)),a[3]||(a[3]=l(", ")),a[4]||(a[4]=s("code",null,"-red",-1)),a[5]||(a[5]=l(", ")),a[6]||(a[6]=s("code",null,"-pink",-1)),a[7]||(a[7]=l(", ")),a[8]||(a[8]=s("code",null,"-purple",-1)),a[9]||(a[9]=l(", ")),a[10]||(a[10]=s("code",null,"-indigo",-1)),a[11]||(a[11]=l(", ")),a[12]||(a[12]=s("code",null,"-navy",-1)),a[13]||(a[13]=l(", ")),a[14]||(a[14]=s("code",null,"-blue",-1)),a[15]||(a[15]=l(", ")),a[16]||(a[16]=s("code",null,"-teal",-1)),a[17]||(a[17]=l(", ")),a[18]||(a[18]=s("code",null,"-green",-1)),a[19]||(a[19]=l(", ")),a[20]||(a[20]=s("code",null,"-yellow",-1)),a[21]||(a[21]=l(", ")),a[22]||(a[22]=s("code",null,"-orange",-1)),a[23]||(a[23]=l(", ")),a[24]||(a[24]=s("code",null,"-secondary",-1)),a[25]||(a[25]=l(", ")),a[26]||(a[26]=s("code",null,"-primary",-1))])]),example:d(()=>[s("div",ma,[s("div",ha,[(v(!0),h(f,null,C(e.colors,c=>(v(),h(f,null,[c!=="secondary"?(v(),h("div",ba,[s("div",{class:y(`chi-avatar -${c}`)},[l(T(e.showIconAvatar?"":"AA"),1),e.showIconAvatar?(v(),h("i",ga)):P("",!0)],2),s("p",$a,T(c),1)])):P("",!0)],64))),256))])])]),_:2},[C(e.headTabs,c=>({name:`code-color-${c.id}-htmlblueprint`,fn:d(()=>[p(t,{lang:"html",code:e.codeSnippets.htmlblueprint[c.id]},null,8,["code"])])}))]),1032,["tabs","headTabs","onChiHeadTabsChange"])}const fa=A(I,[["render",Aa]]);var wa=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,_a=(e,a,n,r)=>{for(var i=r>1?void 0:r?xa(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&wa(a,n,i),i};let B=class extends g{constructor(){super(...arguments);u(this,"baseUrl",W().public.baseUrl);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"iconExamples",["user","users","atom"]);u(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`})}};B=_a([$({})],B);const Ca={class:"-text"},ya=["href"],Ta={class:"chi-grid"},Pa={class:"chi-col -w--2 -w-sm--1"},Oa={class:"chi-avatar"};function ja(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Icon Avatars",id:"icon-avatars",tabs:e.exampleTabs},{"example-description":d(()=>[s("p",Ca,[a[0]||(a[0]=l("Icon avatars can be used when an image is not available. To use, wrap any ")),s("a",{href:`${e.baseUrl}components/icon/`},"Chi icon",8,ya),a[1]||(a[1]=l(" with ")),a[2]||(a[2]=s("code",null,"chi-avatar",-1)),a[3]||(a[3]=l("."))])]),example:d(()=>[s("div",Ta,[(v(!0),h(f,null,C(e.iconExamples,c=>(v(),h("div",Pa,[s("div",Oa,[s("i",{class:y(`chi-icon icon-${c}`),"aria-hidden":"true"},null,2)])]))),256))])]),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Sa=A(B,[["render",ja]]);var Ia=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Da=(e,a,n,r)=>{for(var i=r>1?void 0:r?Ba(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&Ia(a,n,i),i};let D=class extends g{};D=Da([$({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:'<div class="chi-avatar">AA</div>'}})})],D);function La(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Initial Avatars",id:"initial-avatars",tabs:e.exampleTabs},{"example-description":d(()=>a[0]||(a[0]=[s("p",{class:"-text"},[l("Initial avatars can also be used when an image is not available. They are more versatile than icon avatars and support up to two letters. Text utility classes such as "),s("code",null,"-text--uppercase"),l(", "),s("code",null,"-text--lowercase"),l(", and "),s("code",null,"-text--capitalized"),l(" can be applied to force specific casing.")],-1)])),example:d(()=>a[1]||(a[1]=[s("div",{class:"chi-grid"},[s("div",{class:"chi-col -w--2 -w-sm--1"},[s("div",{class:"chi-avatar"},"AA")]),s("div",{class:"chi-col -w--2 -w-sm--1"},[s("div",{class:"chi-avatar"},"M")])],-1)])),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const za=A(D,[["render",La]]);var Ea=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,Wa=(e,a,n,r)=>{for(var i=r>1?void 0:r?Ha(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&Ea(a,n,i),i};let L=class extends g{};L=Wa([$({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="-bg--black">
  <div class="chi-avatar -light">AA</div>
  <div class="chi-avatar -secondary -transparent">AA</div>
  <div class="chi-avatar -light">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
  <div class="chi-avatar -secondary -transparent">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
</div>`}})})],L);function Ma(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Light and transparent background",additionalClasses:"-bg--black",id:"light-transparent",tabs:e.exampleTabs},{"example-description":d(()=>a[0]||(a[0]=[s("p",{class:"-text"},"Both icon and initial avatars support light and transparent versions for dark backgrounds.",-1)])),example:d(()=>a[1]||(a[1]=[s("div",{class:"chi-grid -align-items--end"},[s("div",{class:"chi-col -w--3 -text--center"},[s("div",{class:"chi-avatar -light"},"AA")]),s("div",{class:"chi-col -w--3 -text--center"},[s("div",{class:"chi-avatar -secondary -transparent"},"AA")]),s("div",{class:"chi-col -w--3 -text--center"},[s("div",{class:"chi-avatar -light"},[s("i",{class:"chi-icon icon-user","aria-hidden":"true"})])]),s("div",{class:"chi-col -w--3 -text--center"},[s("div",{class:"chi-avatar -secondary -transparent"},[s("i",{class:"chi-icon icon-user","aria-hidden":"true"})])])],-1)])),"code-webcomponent":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(t,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ua=A(L,[["render",Ma]]);var Ga=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,Va=(e,a,n,r)=>{for(var i=r>1?void 0:r?Na(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&Ga(a,n,i),i};let z=class extends g{constructor(){super(...arguments);u(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);u(this,"headTabs",[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"},{id:"image",label:"Image"}]);u(this,"sizes",["xs","sm","sm--2","sm--3","md","lg","xl","xxl"]);u(this,"columnWidths",{xs:["4","3","1"],sm:["4","3","1"],"sm--2":["4","3","1"],"sm--3":["4","3","1"],md:["4","2","1"],lg:["4","3","2"],xl:["6","3","2"],xxl:["6","4","3"]});u(this,"codeSnippets",{webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -xs">AA</div>
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
</div>`}});u(this,"avatarType","initial")}headTabChanged(n){this.avatarType=n.id}};z=Va([$({})],z);const Fa={class:"-p--0"},Ra={class:"chi-grid -align-items--end"},qa={key:0,class:"chi-icon icon-user","aria-hidden":"true"},Ja={key:1,src:U,alt:"avatar"},Ka={class:"-text"};function Qa(e,a,n,r,i,o){const t=w,m=x;return v(),_(m,{title:"Size",id:"size",tabs:e.exampleTabs,headTabs:e.headTabs,onChiHeadTabsChange:e.headTabChanged},M({"example-description":d(()=>[a[0]||(a[0]=s("p",{class:"-text"},[l("All three avatar styles support a full spectrum of sizes: "),s("code",null,"-xs"),l(", "),s("code",null,"-sm"),l(", "),s("code",null,"-sm--2"),l(", "),s("code",null,"-sm--3"),l(", "),s("code",null,"-md"),l(", "),s("code",null,"-lg"),l(", "),s("code",null,"-xl"),l(", "),s("code",null,"-xxl"),l(". "),s("code",null,"-md"),l(" is the default size.")],-1))]),example:d(()=>[s("div",Fa,[s("div",Ra,[(v(!0),h(f,null,C(e.sizes,c=>(v(),h("div",{class:y(`chi-col -w--${e.columnWidths[c][0]} -w-lg--${e.columnWidths[c][1]} -w-xl--${e.columnWidths[c][2]} -text--center`)},[s("div",{class:y(`chi-avatar -${c}`)},[l(T(e.avatarType==="initial"?"AA":""),1),e.avatarType==="icon"?(v(),h("i",qa)):P("",!0),e.avatarType==="image"?(v(),h("img",Ja)):P("",!0)],2),s("p",Ka,T(c),1)],2))),256))])])]),_:2},[C(e.headTabs,c=>({name:`code-size-${c.id}-htmlblueprint`,fn:d(()=>[p(t,{lang:"html",code:e.codeSnippets.htmlblueprint[c.id]},null,8,["code"])])}))]),1032,["tabs","headTabs","onChiHeadTabsChange"])}const Xa=A(z,[["render",Qa]]);var Ya=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,ka=(e,a,n,r)=>{for(var i=r>1?void 0:r?Za(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&Ya(a,n,i),i};let E=class extends g{};E=ka([$({components:{BaseAvatar:la,IconAvatar:Sa,InitialAvatar:za,ColorCustomization:fa,LightTransparent:Ua,Sizes:Xa,AvatarGroups:sa}})],E);function ae(e,a,n,r,i,o){const t=b("BaseAvatar"),m=b("IconAvatar"),c=b("InitialAvatar"),O=b("ColorCustomization"),G=b("LightTransparent"),N=b("Sizes"),V=b("AvatarGroups");return v(),h(f,null,[a[0]||(a[0]=s("h2",null,"Examples",-1)),a[1]||(a[1]=s("p",{class:"-text"},[l("To render an avatar, apply the class "),s("code",null,"chi-avatar"),l(" to a div element and place an image inside.")],-1)),p(t),p(m),p(c),a[2]||(a[2]=s("h2",null,"Customizations",-1)),p(O),p(G),p(N),p(V)],64)}const ee=A(E,[["render",ae]]);var ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,te=(e,a,n,r)=>{for(var i=r>1?void 0:r?se(a,n):a,o=e.length-1,t;o>=0;o--)(t=e[o])&&(i=(r?t(a,n,i):t(i))||i);return r&&i&&ie(a,n,i),i};let H=class extends g{constructor(){super(...arguments);u(this,"pageTabs",K)}};H=te([$({components:{Examples:ee,Accessibility:J,Properties:q}})],H);const ne={class:"chi-grid__container -pt--3"},re={class:"chi-tabs-panel -active",id:"examples"},oe={class:"chi-tabs-panel",id:"properties"},le={class:"chi-tabs-panel",id:"accessibility"};function ce(e,a,n,r,i,o){const t=Q,m=b("Examples"),c=b("Properties"),O=b("Accessibility");return v(),h(f,null,[p(t,{title:"Avatar",description:"Avatars are used to represent users, groups, and entities.",tabs:e.pageTabs},null,8,["tabs"]),s("div",ne,[s("div",re,[p(m)]),s("div",oe,[p(c)]),s("div",le,[p(O)])])],64)}const Le=A(H,[["render",ce]]);export{Le as default};
