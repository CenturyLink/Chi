import{V as w,N as P}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as C}from"./DKu8Jd2y.js";import{o as _,f as O,w as h,a as s,c as o,F as u,i as f,n as S,t as x,h as $,b as d,d as m,r as b}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";import N from"./cc4UDBwg.js";import R from"./DjSsfCuT.js";import"./2EwpEKcw.js";import{_ as W}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./By_bqUVL.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var A=Object.defineProperty,I=Object.getOwnPropertyDescriptor,F=(t,l,a,c)=>{for(var e=c>1?void 0:c?I(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&A(l,a,e),e};let z=class extends w{};z=F([P({data:()=>({steps:[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<ul class="chi-steps">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 1</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 2</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 3</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 4</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 5</a>
      </div>
    </div>
  </li>
</ul>`}})})],z);const U={class:"chi-steps -pb--2 -p-sm--6"},q={class:"chi-steps__icon"},G={class:"chi-steps__content"},J={class:"chi-steps__item-title",href:"#"},K={key:0,class:"chi-steps__line"};function Q(t,l,a,c,e,n){const i=g,v=C;return _(),O(v,{title:"Base",id:"base",tabs:t.exampleTabs},{example:h(()=>[s("ul",U,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[s("div",q,[s("div",G,[s("a",J,x(p.title),1)])]),p.title!=="Step 5"?(_(),o("div",K)):$("",!0)],2))),128))])]),"code-webcomponent":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const X=y(z,[["render",Q]]);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,k=(t,l,a,c)=>{for(var e=c>1?void 0:c?Z(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&Y(l,a,e),e};let T=class extends w{};T=k([P({data:()=>({steps:[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<ul class="chi-steps -horizontal-label">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 1</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 2</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 3</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 4</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 5</a>
    </div>
  </li>
</ul>`}})})],T);const ss=s("p",{class:"-text"},[m("To display steps with horizontal labels, apply the class "),s("code",null,"-horizontal-label"),m(" to the steps container and indicate the active link with the class "),s("code",null,"-active"),m(" and the class "),s("code",null,"-completed"),m(" in the corresponding div tag.")],-1),es={class:"chi-steps -horizontal-label -labels-sm--hide -p-sm--5"},ts=s("div",{class:"chi-steps__icon"},null,-1),is={class:"chi-steps__content"},ls={class:"chi-steps__item-title",href:"#"},cs={key:0,class:"chi-steps__line"};function as(t,l,a,c,e,n){const i=g,v=C;return _(),O(v,{title:"Horizontal Labels",id:"horizontal-labels",tabs:t.exampleTabs},{"example-description":h(()=>[ss]),example:h(()=>[s("ul",es,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[ts,s("div",is,[s("a",ls,x(p.title),1)]),p.title!=="Step 5"?(_(),o("div",cs)):$("",!0)],2))),128))])]),"code-webcomponent":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ns=y(T,[["render",as]]);var ps=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,os=(t,l,a,c)=>{for(var e=c>1?void 0:c?_s(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&ps(l,a,e),e};let B=class extends w{};B=os([P({data:()=>({steps:[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<ul class="chi-steps -vertical">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 1</a>
        <div class="chi-steps__subitem -completed">
          <i class="chi-icon icon-check -xs" aria-hidden="true"></i>
          <p>Completed item</p>
        </div>
        <div class="chi-steps__subitem -active">
          <i class="chi-icon icon-spinner -xs" aria-hidden="true"></i>
          <p>In progress item</p>
        </div>
        <div class="chi-steps__subitem">
          <p>Pending item</p>
        </div>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 2</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 3</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 4</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 5</a>
      </div>
    </div>
  </li>
</ul>`}})})],B);const ds=s("p",{class:"-text"},[m("To display steps vertically, apply the class "),s("code",null,"-vertical"),m(" to the steps container.")],-1),hs={class:"-d--flex -flex--column -justify-content--center -align-items--center"},rs={class:"chi-steps -vertical"},ms={class:"chi-steps__icon"},vs={class:"chi-steps__content"},us={class:"chi-steps__item-title",href:"#"},bs=s("div",{class:"chi-steps__subitem -completed"},[s("i",{class:"chi-icon icon-check -xs","aria-hidden":"true"}),s("p",null,"Completed item")],-1),$s=s("div",{class:"chi-steps__subitem -active"},[s("i",{class:"chi-icon icon-spinner -xs","aria-hidden":"true"}),s("p",null,"In progress item")],-1),fs=s("div",{class:"chi-steps__subitem"},[s("p",null,"Pending item")],-1),Ss={key:0,class:"chi-steps__line"};function xs(t,l,a,c,e,n){const i=g,v=C;return _(),O(v,{title:"Vertical",id:"vertical",tabs:t.exampleTabs},{"example-description":h(()=>[ds]),example:h(()=>[s("div",hs,[s("ul",rs,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[s("div",ms,[s("div",vs,[s("a",us,x(p.title),1),p.title==="Step 1"?(_(),o(u,{key:0},[bs,$s,fs],64)):$("",!0)])]),p.title!=="Step 5"?(_(),o("div",Ss)):$("",!0)],2))),128))])])]),"code-webcomponent":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ws=y(B,[["render",xs]]);var Ps=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,gs=(t,l,a,c)=>{for(var e=c>1?void 0:c?ys(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&Ps(l,a,e),e};let H=class extends w{};H=gs([P({data:()=>({steps:[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Base -->
<ul class="chi-steps -sm">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 1</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 2</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 3</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 4</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 5</a>
      </div>
    </div>
  </li>
</ul>
<!-- Horizontal labels -->
<ul class="chi-steps -horizontal-label -sm">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 1</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 2</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 3</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 4</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li clas="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 5</a>
    </div>
  </li>
</ul>`}})})],H);const Cs={class:"chi-steps -sm -pb--4 -p-sm--6"},Os={class:"chi-steps__icon"},zs={class:"chi-steps__content"},Ts={class:"chi-steps__item-title",href:"#"},Bs={key:0,class:"chi-steps__line"},Hs=s("p",{class:"-text--center"},"Base",-1),Vs={class:"chi-steps -horizontal-label -sm -labels-sm--hide -p-sm--5"},js=s("div",{class:"chi-steps__icon"},null,-1),Ds={class:"chi-steps__content"},Es={class:"chi-steps__item-title",href:"#"},Ls={key:0,class:"chi-steps__line"},Ms=s("p",{class:"-text--center"},"Horizontal labels",-1);function Ns(t,l,a,c,e,n){const i=g,v=C;return _(),O(v,{title:"Horizontal",titleSize:"h4",id:"small-horizontal",tabs:t.exampleTabs},{example:h(()=>[s("ul",Cs,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[s("div",Os,[s("div",zs,[s("a",Ts,x(p.title),1)])]),p.title!=="Step 5"?(_(),o("div",Bs)):$("",!0)],2))),128))]),Hs,s("ul",Vs,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[js,s("div",Ds,[s("a",Es,x(p.title),1)]),p.title!=="Step 5"?(_(),o("div",Ls)):$("",!0)],2))),128))]),Ms]),"code-webcomponent":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Rs=y(H,[["render",Ns]]);var Ws=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Is=(t,l,a,c)=>{for(var e=c>1?void 0:c?As(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&Ws(l,a,e),e};let V=class extends w{};V=Is([P({data:()=>({steps:[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<ul class="chi-steps -vertical -sm">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 1</a>
        <div class="chi-steps__subitem -completed">
          <i class="chi-icon icon-check -xs" aria-hidden="true"></i>
          <p>Completed item</p>
        </div>
        <div class="chi-steps__subitem -active">
          <i class="chi-icon icon-spinner -xs" aria-hidden="true"></i>
          <p>In progress item</p>
        </div>
        <div class="chi-steps__subitem">
          <p>Pending item</p>
        </div>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 2</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 3</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 4</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 5</a>
      </div>
    </div>
  </li>
</ul>`}})})],V);const Fs={class:"-d--flex -flex--column -justify-content--center -align-items--center"},Us={class:"chi-steps -vertical -sm"},qs={class:"chi-steps__icon"},Gs={class:"chi-steps__content"},Js={class:"chi-steps__item-title",href:"#"},Ks=s("div",{class:"chi-steps__subitem -completed"},[s("i",{class:"chi-icon icon-check -xs","aria-hidden":"true"}),s("p",null,"Completed item")],-1),Qs=s("div",{class:"chi-steps__subitem -active"},[s("i",{class:"chi-icon icon-spinner -xs","aria-hidden":"true"}),s("p",null,"In progress item")],-1),Xs=s("div",{class:"chi-steps__subitem"},[s("p",null,"Pending item")],-1),Ys=s("div",{class:"chi-steps__line"},null,-1);function Zs(t,l,a,c,e,n){const i=g,v=C;return _(),O(v,{title:"Vertical",titleSize:"h4",id:"small-vertical",tabs:t.exampleTabs},{example:h(()=>[s("div",Fs,[s("ul",Us,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[s("div",qs,[s("div",Gs,[s("a",Js,x(p.title),1),p.title==="Step 1"?(_(),o(u,{key:0},[Ks,Qs,Xs],64)):$("",!0)])]),Ys],2))),128))])])]),"code-webcomponent":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ks=y(V,[["render",Zs]]);var se=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(t,l,a,c)=>{for(var e=c>1?void 0:c?ee(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&se(l,a,e),e};let j=class extends w{};j=te([P({data:()=>({steps:[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Visible labels from md breakpoint -->
<ul class="chi-steps -labels-md--hide">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 1</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 2</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 3</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 4</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 5</a>
      </div>
    </div>
  </li>
</ul>
<!-- Visible labels from lg breakpoint -->
<ul class="chi-steps -horizontal-label -labels-lg--hide">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 1</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 2</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 3</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 4</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 5</a>
    </div>
  </li>
</ul>`}})})],j);const ie=s("p",{class:"-text"},[m("Use "),s("code",null,"-labels-{breakpoint}--hide"),m(" to hide step component labels on specific breakpoints or "),s("code",null,"-labels--hide"),m(" to hide on all breakpoints. Breakpoints supported are "),s("code",null,"sm"),m(", "),s("code",null,"md"),m(", "),s("code",null,"lg"),m(", and "),s("code",null,"xl"),m(". Labels are shown on all breakpoints by default.")],-1),le={class:"chi-steps -labels-md--hide -p-sm--5"},ce={class:"chi-steps__icon"},ae={class:"chi-steps__content"},ne={class:"chi-steps__item-title",href:"#"},pe={key:0,class:"chi-steps__line"},_e=s("p",{class:"-text--center"},"-labels-md--hide",-1),oe={class:"chi-steps -horizontal-label -labels-lg--hide -pt--2 -p-sm--4"},de={class:"chi-steps__icon"},he={class:"chi-steps__content"},re={class:"chi-steps__item-title",href:"#"},me={key:0,class:"chi-steps__line"},ve=s("p",{class:"-text--center"},"-labels-lg--hide",-1);function ue(t,l,a,c,e,n){const i=g,v=C;return _(),O(v,{title:"Responsiveness",id:"responsiveness",tabs:t.exampleTabs},{"example-description":h(()=>[ie]),example:h(()=>[s("ul",le,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[s("div",ce,[s("div",ae,[s("a",ne,x(p.title),1)])]),p.title!=="Step 5"?(_(),o("div",pe)):$("",!0)],2))),128))]),_e,s("ul",oe,[(_(!0),o(u,null,f(t.steps,(p,r)=>(_(),o("li",{key:r,class:S(`chi-steps__item ${p.class}`)},[s("div",de,[s("div",he,[s("a",re,x(p.title),1)])]),p.title!=="Step 5"?(_(),o("div",me)):$("",!0)],2))),128))]),ve]),"code-webcomponent":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[d(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const be=y(j,[["render",ue]]);var $e=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,Se=(t,l,a,c)=>{for(var e=c>1?void 0:c?fe(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&$e(l,a,e),e};let D=class extends w{};D=Se([P({components:{BaseExample:X,HorizontalLabels:ns,Vertical:ws,SmallHorizontal:Rs,SmallVertical:ks,Responsiveness:be}})],D);const xe=s("h2",null,"Examples",-1),we=s("p",{class:"-text"},[m("To display steps, apply the class "),s("code",null,"chi-steps"),m(" to a unordered list "),s("code",null,"ul"),m(" and indicate the active link with the class "),s("code",null,"-active"),m(" in the corresponding li tag.")],-1),Pe=s("h2",null,"Additional Size",-1),ye=s("h3",null,"Small",-1),ge=s("p",{class:"-text"},[m("Use the "),s("code",null,"-sm"),m(" modifier class to render small steps.")],-1);function Ce(t,l,a,c,e,n){const i=b("BaseExample"),v=b("HorizontalLabels"),p=b("Vertical"),r=b("SmallHorizontal"),L=b("SmallVertical"),M=b("Responsiveness");return _(),o("div",null,[xe,we,d(i),d(v),d(p),Pe,ye,ge,d(r),d(L),d(M)])}const Oe=y(D,[["render",Ce]]);var ze=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Be=(t,l,a,c)=>{for(var e=c>1?void 0:c?Te(l,a):l,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(c?i(l,a,e):i(e))||e);return c&&e&&ze(l,a,e),e};let E=class extends w{};E=Be([P({components:{Accessibility:R,Examples:Oe,Properties:N}})],E);const He={class:"chi-grid__container -pt--3"},Ve={class:"chi-tabs-panel -active",id:"examples"},je={class:"chi-tabs-panel",id:"properties"},De={class:"chi-tabs-panel",id:"accessibility"};function Ee(t,l,a,c,e,n){const i=W,v=b("Examples"),p=b("Properties"),r=b("Accessibility");return _(),o("div",null,[d(i,{title:"Steps",description:"Steps are used to help users navigate through multi-step processes.",tabs:t.pageTabs},null,8,["tabs"]),s("div",He,[s("div",Ve,[d(v)]),s("div",je,[d(p)]),s("div",De,[d(r)])])])}const it=y(E,[["render",Ee]]);export{it as default};
