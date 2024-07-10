var L=Object.defineProperty;var H=(t,s,n)=>s in t?L(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;var V=(t,s,n)=>H(t,typeof s!="symbol"?s+"":s,n);import{V as h,N as v}from"./uJTUijt2.js";import{_ as f}from"./D8GK0F__.js";import{_ as x}from"./DKu8Jd2y.js";import{o as d,f as C,w as a,a as i,c as b,F as g,i as w,t as y,b as r,d as u,r as _}from"./B5CYXVwa.js";import{_ as $}from"./DlAUqK2U.js";import M from"./DZmJBK2l.js";import W from"./BoahIkFk.js";import{s as U}from"./2EwpEKcw.js";import{_ as A}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,z=(t,s,n,l)=>{for(var e=l>1?void 0:l?F(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&q(s,n,e),e};let O=class extends h{};O=z([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-carousel>
  <div class="-d--flex" slot="items">
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 1 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 2 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 3 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 4 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 5 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 6 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 7 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 8 -->
    </div>
  </div>
</chi-carousel>`,htmlblueprint:""}})})],O);const G={slot:"items"},I={class:"-d--flex"},J={class:"-w--100 -h--100 -bg--grey-10 -d--flex -align-items--center -justify-content--center"};function K(t,s,n,l,e,c){const o=f,p=x;return d(),C(p,{title:"Base",id:"base",tabs:t.exampleTabs},{example:a(()=>[i("chi-carousel",null,[i("div",G,[i("div",I,[(d(),b(g,null,w([1,2,3,4,5,6,7,8],m=>i("div",{class:"chi-carousel__item -p--1",style:{width:"18.1rem",height:"7rem"},key:m},[i("div",J,y(m),1)])),64))])])])]),"code-webcomponent":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Q=$(O,[["render",K]]);var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(t,s,n,l)=>{for(var e=l>1?void 0:l?X(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&R(s,n,e),e};let B=class extends h{};B=Y([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-carousel single>
  <div class="-d--flex" slot="items">
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 1 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 2 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 3 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 4 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 5 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 6 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 7 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 8 -->
    </div>
  </div>
</chi-carousel>`,htmlblueprint:""}})})],B);const Z=i("p",{class:"-text"},[u("Use the attribute "),i("code",null,"single"),u(" to render single item per view.")],-1),k={single:""},ee={slot:"items"},te={class:"-w--100 -h--100 -bg--grey-10 -d--flex -align-items--center -justify-content--center"};function se(t,s,n,l,e,c){const o=f,p=x;return d(),C(p,{title:"Single element per view",id:"single",tabs:t.exampleTabs},{"example-description":a(()=>[Z]),example:a(()=>[i("chi-carousel",k,[i("div",ee,[(d(),b(g,null,w([1,2,3,4,5,6,7,8],m=>i("div",{class:"chi-carousel__item -p--1",style:{height:"10rem"},key:m},[i("div",te,y(m),1)])),64))])])]),"code-webcomponent":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const oe=$(B,[["render",se]]);var ie=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ne=(t,s,n,l)=>{for(var e=l>1?void 0:l?le(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&ie(s,n,e),e};let S=class extends h{};S=ne([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-carousel dots>
  <div class="-d--flex" slot="items">
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 1 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 2 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 3 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 4 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 5 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 6 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 7 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 8 -->
    </div>
  </div>
</chi-carousel>`,htmlblueprint:""}})})],S);const ce=i("p",{class:"-text"},[u("Use the attribute "),i("code",null,"dots"),u(" to render carousel with dot controller.")],-1),re={dots:""},ae={slot:"items"},me={class:"-d--flex"},pe={class:"-w--100 -h--100 -bg--grey-10 -d--flex -align-items--center -justify-content--center"};function de(t,s,n,l,e,c){const o=f,p=x;return d(),C(p,{title:"Dot controllers",id:"dot-controllers",tabs:t.exampleTabs},{"example-description":a(()=>[ce]),example:a(()=>[i("chi-carousel",re,[i("div",ae,[i("div",me,[(d(),b(g,null,w([1,2,3,4,5,6,7,8],m=>i("div",{class:"chi-carousel__item -p--1",style:{width:"18.1rem",height:"7rem"},key:m},[i("div",pe,y(m),1)])),64))])])])]),"code-webcomponent":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ue=$(S,[["render",de]]);var _e=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ve=(t,s,n,l)=>{for(var e=l>1?void 0:l?he(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&_e(s,n,e),e};let D=class extends h{};D=ve([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-carousel pagination single>
  <div class="-d--flex" slot="items">
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 1 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 2 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 3 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 4 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 5 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 6 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 7 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 8 -->
    </div>
  </div>
</chi-carousel>`,htmlblueprint:""}})})],D);const be=i("p",{class:"-text"},[u("Use the attribute "),i("code",null,"pagination"),u(" to render carousel with pagination.")],-1),$e={pagination:"",single:""},fe={slot:"items"},xe={class:"-d--flex"},Ce={class:"-w--100 -h--100 -bg--grey-10 -d--flex -align-items--center -justify-content--center"};function ge(t,s,n,l,e,c){const o=f,p=x;return d(),C(p,{title:"Pagination",id:"pagination",tabs:t.exampleTabs},{"example-description":a(()=>[be]),example:a(()=>[i("chi-carousel",$e,[i("div",fe,[i("div",xe,[(d(),b(g,null,w([1,2,3,4,5,6,7,8],m=>i("div",{class:"chi-carousel__item -p--1",style:{width:"18.1rem",height:"7rem"},key:m},[i("div",Ce,y(m),1)])),64))])])])]),"code-webcomponent":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const we=$(D,[["render",ge]]);var ye=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Oe=(t,s,n,l)=>{for(var e=l>1?void 0:l?Pe(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&ye(s,n,e),e};let j=class extends h{};j=Oe([v({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<chi-carousel single>
  <button class="examplePreviousButton" slot="previous">
    <i class="chi-icon icon-chevron-left -sm--2" aria-hidden="true"></i>
  </button>
  <button class="exampleNextButton" slot="next">
    <i class="chi-icon icon-chevron-right -sm--2" aria-hidden="true"></i>
  </button>
  <div class="chi-carousel__item" slot="items">View 1</div>
  <div class="chi-carousel__item" slot="items">View 2</div>
  <div class="chi-carousel__item" slot="items">View 3</div>
  <div class="chi-carousel__item" slot="items">View 4</div>
  <div class="chi-carousel__item" slot="items">View 5</div>
  <div class="chi-carousel__item" slot="items">View 6</div>
  <div class="chi-carousel__item" slot="items">View 7</div>
  <div class="chi-carousel__item" slot="items">View 8</div>
</chi-carousel>

<!-- Style custom controllers according to your design requirements -->
<style type="text/css">
  button.examplePreviousButton,
  button.exampleNextButton {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0.5;
    width: 100%;
  }

  button.examplePreviousButton:hover,
  button.exampleNextButton:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>`,htmlblueprint:""}})})],j);const Be=i("p",{class:"-text"},[u("Use "),i("code",null,'slot="previous"'),u(" and "),i("code",null,'slot="next"'),u(" to provide custom controllers to carousel.")],-1),Se={single:""},De=i("div",{slot:"previous"},[i("button",{class:"examplePreviousButton"},[i("i",{class:"chi-icon icon-chevron-left -sm--2","aria-hidden":"true"})])],-1),je=i("div",{slot:"next"},[i("button",{class:"exampleNextButton"},[i("i",{class:"chi-icon icon-chevron-right -sm--2","aria-hidden":"true"})])],-1),Te={slot:"items"};function Ee(t,s,n,l,e,c){const o=f,p=x;return d(),C(p,{title:"Custom Controllers",id:"custom-controllers",tabs:t.exampleTabs},{"example-description":a(()=>[Be]),example:a(()=>[i("chi-carousel",Se,[De,je,i("div",Te,[(d(),b(g,null,w([1,2,3,4,5,6,7,8],m=>i("div",{class:"chi-carousel__item -text--xl -d--flex -align-items--center -justify-content--center -bg--grey-10",style:{height:"20rem","box-sizing":"border-box"},key:m},y(m),1)),64))])])]),"code-webcomponent":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[r(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ve=$(j,[["render",Ee]]);var Ne=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,He=(t,s,n,l)=>{for(var e=l>1?void 0:l?Le(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&Ne(s,n,e),e};let T=class extends h{};T=He([v({components:{BaseExample:Q,Single:oe,DotControllers:ue,Pagination:we,CustomControllers:Ve}})],T);const Me=i("h2",null,"Examples",-1);function We(t,s,n,l,e,c){const o=_("BaseExample"),p=_("Single"),m=_("DotControllers"),P=_("Pagination"),N=_("CustomControllers");return d(),b("div",null,[Me,r(o),r(p),r(m),r(P),r(N)])}const Ue=$(T,[["render",We]]);var Ae=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Fe=(t,s,n,l)=>{for(var e=l>1?void 0:l?qe(s,n):s,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(l?o(s,n,e):o(e))||e);return l&&e&&Ae(s,n,e),e};let E=class extends h{constructor(){super(...arguments);V(this,"pageTabs",U)}};E=Fe([v({components:{Accessibility:W,Examples:Ue,Properties:M}})],E);const ze={class:"chi-grid__container -pt--3"},Ge={class:"chi-tabs-panel -active",id:"examples"},Ie={class:"chi-tabs-panel",id:"properties"},Je={class:"chi-tabs-panel",id:"accessibility"};function Ke(t,s,n,l,e,c){const o=A,p=_("Examples"),m=_("Properties"),P=_("Accessibility");return d(),b("div",null,[r(o,{title:"Carousel",description:"Carousel provides the functionality of sequentially displaying and switching between slides with any type of elements",tabs:t.pageTabs},null,8,["tabs"]),i("div",ze,[i("div",Ge,[r(p)]),i("div",Ie,[r(m)]),i("div",Je,[r(P)])])])}const ht=$(E,[["render",Ke]]);export{ht as default};
