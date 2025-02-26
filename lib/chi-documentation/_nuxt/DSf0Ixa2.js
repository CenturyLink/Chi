import{_ as A}from"./COVoLJ_Y.js";import{_ as w}from"./B7NIkgJJ.js";import{e as b,o as c,f as y,w as n,a,d as e,c as p,j as T,F as _,n as C,t as f,i as $,b as o,p as j,r as L,k as E}from"./DbZ0H-_C.js";import{_ as H}from"./CrHKLJC1.js";const I={class:"chi-grid"},S={key:0,class:"-mb--1 chi-col -w--6 -w-sm--4 -w-md--6 -w-lg--4 -w-xl--3"},M={class:"chi-avatar-group"},W=b({__name:"_avatar-groups",setup(g){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t=["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"],v={webcomponent:"",htmlblueprint:`<div class="chi-avatar-group">
  <div class="chi-avatar">L</div>Label text
</div>`};return(l,r)=>{const s=A,m=w;return c(),y(m,{title:"Avatar Groups",id:"avatar-groups",tabs:d},{"example-description":n(()=>r[0]||(r[0]=[a("p",{class:"-text"},[e("Use avatar groups to group multiple avatars or add descriptive text such as a users name. Render an avatar group by wrapping an avatar in the class "),a("code",null,"chi-avatar-group"),e(".")],-1)])),example:n(()=>[a("div",I,[(c(),p(_,null,T(t,u=>(c(),p(_,null,[u!=="secondary"?(c(),p("div",S,[a("div",M,[a("div",{class:C(`chi-avatar -${u}`)},"L",2),e("Label "+f(u),1)])])):$("",!0)],64))),64))])]),"code-webcomponent":n(()=>[o(s,{lang:"html",code:v.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(s,{lang:"html",code:v.htmlblueprint},null,8,["code"])]),_:1})}}}),z=b({__name:"_base",setup(g){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <img src="path/to/image.jpg" alt="avatar">
</div>`};return(v,l)=>{const r=A,s=w;return c(),y(s,{title:"Base",id:"base",tabs:d},{example:n(()=>l[0]||(l[0]=[a("div",{class:"chi-avatar"},[a("img",{src:H,alt:"avatar"})],-1)])),"code-webcomponent":n(()=>[o(r,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(r,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"-text"},N=["href"],V={class:"-p--0"},F={class:"chi-grid -align-items--end"},R={key:0,class:"chi-col -w--2 -text--center"},D={key:0,class:"chi-icon icon-user","aria-hidden":"true"},G={class:"-text"},q=b({__name:"_color-customization",setup(g){const d=j().public.baseUrl,t=L(!1),v=L("initial"),l=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],r=[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"}],s=["grey","red","pink","purple","indigo","navy","blue","cyan","teal","green","yellow","orange","secondary","primary"],m={webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -grey">AA</div>
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
</div>`}},u=h=>{v.value=h.id,t.value=h.id==="icon"};return(h,i)=>{const k=A,x=w;return c(),y(x,{title:"Color",id:"color",tabs:l,"head-tabs":r,onChiHeadTabsChange:u},{"example-description":n(()=>[a("p",U,[i[0]||(i[0]=e("Both icon and initial avatars support ")),a("a",{href:`${E(d)}foundations/color/`},"Chi colors",8,N),i[1]||(i[1]=e(". To color an icon, apply any of the following color classes: ")),i[2]||(i[2]=a("code",null,"-grey",-1)),i[3]||(i[3]=e(", ")),i[4]||(i[4]=a("code",null,"-red",-1)),i[5]||(i[5]=e(", ")),i[6]||(i[6]=a("code",null,"-pink",-1)),i[7]||(i[7]=e(", ")),i[8]||(i[8]=a("code",null,"-purple",-1)),i[9]||(i[9]=e(", ")),i[10]||(i[10]=a("code",null,"-indigo",-1)),i[11]||(i[11]=e(", ")),i[12]||(i[12]=a("code",null,"-navy",-1)),i[13]||(i[13]=e(", ")),i[14]||(i[14]=a("code",null,"-blue",-1)),i[15]||(i[15]=e(", ")),i[16]||(i[16]=a("code",null,"-teal",-1)),i[17]||(i[17]=e(", ")),i[18]||(i[18]=a("code",null,"-green",-1)),i[19]||(i[19]=e(", ")),i[20]||(i[20]=a("code",null,"-yellow",-1)),i[21]||(i[21]=e(", ")),i[22]||(i[22]=a("code",null,"-orange",-1)),i[23]||(i[23]=e(", ")),i[24]||(i[24]=a("code",null,"-secondary",-1)),i[25]||(i[25]=e(", ")),i[26]||(i[26]=a("code",null,"-primary",-1))])]),example:n(()=>[a("div",V,[a("div",F,[(c(),p(_,null,T(s,B=>(c(),p(_,null,[B!=="secondary"?(c(),p("div",R,[a("div",{class:C(`chi-avatar -${B}`)},[e(f(t.value?"":"AA"),1),t.value?(c(),p("i",D)):$("",!0)],2),a("p",G,f(B),1)])):$("",!0)],64))),64))])])]),"code-htmlblueprint":n(()=>[o(k,{lang:"html",code:m.htmlblueprint[v.value]},null,8,["code"])]),_:1})}}}),J={class:"-text"},K=["href"],O={class:"chi-grid"},P={class:"chi-col -w--2 -w-sm--1"},Q={class:"chi-avatar"},X=b({__name:"_icon-avatar",setup(g){const d=j().public.baseUrl,t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],v=["user","users","atom"],l={webcomponent:"",htmlblueprint:`<div class="chi-avatar">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`};return(r,s)=>{const m=A,u=w;return c(),y(u,{title:"Icon Avatars",id:"icon-avatars",tabs:t},{"example-description":n(()=>[a("p",J,[s[0]||(s[0]=e("Icon avatars can be used when an image is not available. To use, wrap any ")),a("a",{href:`${E(d)}components/icon/`},"Chi icon",8,K),s[1]||(s[1]=e(" with ")),s[2]||(s[2]=a("code",null,"chi-avatar",-1)),s[3]||(s[3]=e("."))])]),example:n(()=>[a("div",O,[(c(),p(_,null,T(v,h=>a("div",P,[a("div",Q,[a("i",{class:C(`chi-icon icon-${h}`),"aria-hidden":"true"},null,2)])])),64))])]),"code-webcomponent":n(()=>[o(m,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(m,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),Y=b({__name:"_initial-avatar",setup(g){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:'<div class="chi-avatar">AA</div>'};return(v,l)=>{const r=A,s=w;return c(),y(s,{title:"Initial Avatars",id:"initial-avatars",tabs:d},{"example-description":n(()=>l[0]||(l[0]=[a("p",{class:"-text"},[e("Initial avatars can also be used when an image is not available. They are more versatile than icon avatars and support up to two letters. Text utility classes such as "),a("code",null,"-text--uppercase"),e(", "),a("code",null,"-text--lowercase"),e(", and "),a("code",null,"-text--capitalized"),e(" can be applied to force specific casing.")],-1)])),example:n(()=>l[1]||(l[1]=[a("div",{class:"chi-grid"},[a("div",{class:"chi-col -w--2 -w-sm--1"},[a("div",{class:"chi-avatar"},"AA")]),a("div",{class:"chi-col -w--2 -w-sm--1"},[a("div",{class:"chi-avatar"},"M")])],-1)])),"code-webcomponent":n(()=>[o(r,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(r,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),Z=b({__name:"_light-transparent",setup(g){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<div class="-bg--black">
  <div class="chi-avatar -light">AA</div>
  <div class="chi-avatar -secondary -transparent">AA</div>
  <div class="chi-avatar -light">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
  <div class="chi-avatar -secondary -transparent">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
</div>`};return(v,l)=>{const r=A,s=w;return c(),y(s,{title:"Light and transparent background",additionalClasses:"-bg--black",id:"light-transparent",tabs:d},{"example-description":n(()=>l[0]||(l[0]=[a("p",{class:"-text"},"Both icon and initial avatars support light and transparent versions for dark backgrounds.",-1)])),example:n(()=>l[1]||(l[1]=[a("div",{class:"chi-grid -align-items--end"},[a("div",{class:"chi-col -w--3 -text--center"},[a("div",{class:"chi-avatar -light"},"AA")]),a("div",{class:"chi-col -w--3 -text--center"},[a("div",{class:"chi-avatar -secondary -transparent"},"AA")]),a("div",{class:"chi-col -w--3 -text--center"},[a("div",{class:"chi-avatar -light"},[a("i",{class:"chi-icon icon-user","aria-hidden":"true"})])]),a("div",{class:"chi-col -w--3 -text--center"},[a("div",{class:"chi-avatar -secondary -transparent"},[a("i",{class:"chi-icon icon-user","aria-hidden":"true"})])])],-1)])),"code-webcomponent":n(()=>[o(r,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(r,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),aa={class:"-p--0"},ia={class:"chi-grid -align-items--end"},ea={key:0,class:"chi-icon icon-user","aria-hidden":"true"},ta={key:1,src:H,alt:"avatar"},sa={class:"-text"},na=b({__name:"_sizes",setup(g){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t=[{active:!0,id:"initial",label:"Initial"},{id:"icon",label:"Icon"},{id:"image",label:"Image"}],v=["xs","sm","sm--2","sm--3","md","lg","xl","xxl"],l={xs:["4","3","1"],sm:["4","3","1"],"sm--2":["4","3","1"],"sm--3":["4","3","1"],md:["4","2","1"],lg:["4","3","2"],xl:["6","3","2"],xxl:["6","4","3"]},r={webcomponent:"",htmlblueprint:{initial:`<div class="chi-avatar -xs">AA</div>
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
</div>`}},s=L("initial"),m=u=>{s.value=u.id};return(u,h)=>{const i=A,k=w;return c(),y(k,{title:"Size",id:"size",tabs:d,"head-tabs":t,onChiHeadTabsChange:m},{"example-description":n(()=>h[0]||(h[0]=[a("p",{class:"-text"},[e("All three avatar styles support a full spectrum of sizes: "),a("code",null,"-xs"),e(", "),a("code",null,"-sm"),e(", "),a("code",null,"-sm--2"),e(", "),a("code",null,"-sm--3"),e(", "),a("code",null,"-md"),e(", "),a("code",null,"-lg"),e(", "),a("code",null,"-xl"),e(", "),a("code",null,"-xxl"),e(". "),a("code",null,"-md"),e(" is the default size.")],-1)])),example:n(()=>[a("div",aa,[a("div",ia,[(c(),p(_,null,T(v,x=>a("div",{class:C(`chi-col -w--${l[x][0]} -w-lg--${l[x][1]} -w-xl--${l[x][2]} -text--center`)},[a("div",{class:C(`chi-avatar -${x}`)},[e(f(s.value==="initial"?"AA":""),1),s.value==="icon"?(c(),p("i",ea)):$("",!0),s.value==="image"?(c(),p("img",ta)):$("",!0)],2),a("p",sa,f(x),1)],2)),64))])])]),"code-htmlblueprint":n(()=>[o(i,{lang:"html",code:r.htmlblueprint[s.value]},null,8,["code"])]),_:1})}}}),da=b({__name:"index",setup(g){return(d,t)=>(c(),p(_,null,[t[0]||(t[0]=a("h2",null,"Examples",-1)),t[1]||(t[1]=a("p",{class:"-text"},[e("To render an avatar, apply the class "),a("code",null,"chi-avatar"),e(" to a div element and place an image inside.")],-1)),o(z),o(X),o(Y),t[2]||(t[2]=a("h2",null,"Customizations",-1)),o(q),o(Z),o(na),o(W)],64))}});export{da as _};
