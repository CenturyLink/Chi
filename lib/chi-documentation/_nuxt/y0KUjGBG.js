import{e as f,o as i,f as S,w as n,a as s,c,j as b,n as x,t as u,i as r,F as v,b as a,d as o,l as B,k as T}from"./CR_XfkrP.js";import{_ as k}from"./CBk3mWUi.js";import{_ as w}from"./BUnP1NT4.js";import{_ as E}from"./BskPbflv.js";import{_ as I}from"./Apvmmo3P.js";const L={class:"chi-steps -pb--2 -p-sm--6"},F={class:"chi-steps__icon"},P={class:"chi-steps__content"},V={class:"chi-steps__item-title",href:"#"},j={key:0,class:"chi-steps__line"},M=f({__name:"_base",setup(g){const _=[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<ul class="chi-steps">
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
</ul>`};return(y,e)=>{const p=k,m=w;return i(),S(m,{title:"Base",id:"base",tabs:h},{example:n(()=>[s("ul",L,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[s("div",F,[s("div",P,[s("a",V,u(t.title),1)])]),t.title!=="Step 5"?(i(),c("div",j)):r("",!0)],2)),64))])]),"code-webcomponent":n(()=>[a(p,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(p,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"chi-steps -horizontal-label -labels-sm--hide -p-sm--5"},A={class:"chi-steps__content"},N={class:"chi-steps__item-title",href:"#"},R={key:0,class:"chi-steps__line"},O=f({__name:"_horizontal-labels",setup(g){const _=[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<ul class="chi-steps -horizontal-label">
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
</ul>`};return(y,e)=>{const p=k,m=w;return i(),S(m,{title:"Horizontal Labels",id:"horizontal-labels",tabs:h},{"example-description":n(()=>e[0]||(e[0]=[s("p",{class:"-text"},[o("To display steps with horizontal labels, apply the class "),s("code",null,"-horizontal-label"),o(" to the steps container and indicate the active link with the class "),s("code",null,"-active"),o(" and the class "),s("code",null,"-completed"),o(" in the corresponding div tag.")],-1)])),example:n(()=>[s("ul",W,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[e[1]||(e[1]=s("div",{class:"chi-steps__icon"},null,-1)),s("div",A,[s("a",N,u(t.title),1)]),t.title!=="Step 5"?(i(),c("div",R)):r("",!0)],2)),64))])]),"code-webcomponent":n(()=>[a(p,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(p,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"-d--flex -flex--column -justify-content--center -align-items--center"},D={class:"chi-steps -vertical"},J={class:"chi-steps__icon"},q={class:"chi-steps__content"},G={class:"chi-steps__item-title",href:"#"},K={key:0,class:"chi-steps__line"},Q=f({__name:"_vertical",setup(g){const _=[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<ul class="chi-steps -vertical">
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
</ul>`};return(y,e)=>{const p=k,m=w;return i(),S(m,{title:"Vertical",id:"vertical",tabs:h},{"example-description":n(()=>e[0]||(e[0]=[s("p",{class:"-text"},[o("To display steps vertically, apply the class "),s("code",null,"-vertical"),o(" to the steps container.")],-1)])),example:n(()=>[s("div",U,[s("ul",D,[(i(),c(v,null,b(_,(t,d)=>s("li",{class:x(`chi-steps__item ${t.class}`)},[s("div",J,[s("div",q,[s("a",G,u(t.title),1),t.title==="Step 1"?(i(),c(v,{key:0},[e[1]||(e[1]=s("div",{class:"chi-steps__subitem -completed"},[s("i",{class:"chi-icon icon-check -xs","aria-hidden":"true"}),s("p",null,"Completed item")],-1)),e[2]||(e[2]=s("div",{class:"chi-steps__subitem -active"},[s("i",{class:"chi-icon icon-spinner -xs","aria-hidden":"true"}),s("p",null,"In progress item")],-1)),e[3]||(e[3]=s("div",{class:"chi-steps__subitem"},[s("p",null,"Pending item")],-1))],64)):r("",!0)])]),t.title!=="Step 5"?(i(),c("div",K)):r("",!0)],2)),64))])])]),"code-webcomponent":n(()=>[a(p,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(p,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),X={class:"chi-steps -sm -pb--4 -p-sm--6"},Y={class:"chi-steps__icon"},Z={class:"chi-steps__content"},ss={class:"chi-steps__item-title",href:"#"},es={key:0,class:"chi-steps__line"},ts={class:"chi-steps -horizontal-label -sm -labels-sm--hide -p-sm--5"},is={class:"chi-steps__content"},ls={class:"chi-steps__item-title",href:"#"},cs={key:0,class:"chi-steps__line"},ns=f({__name:"_small-horizontal",setup(g){const _=[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Base -->
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
</ul>`};return(y,e)=>{const p=k,m=w;return i(),S(m,{title:"Horizontal",titleSize:"h4",id:"small-horizontal",tabs:h},{example:n(()=>[s("ul",X,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[s("div",Y,[s("div",Z,[s("a",ss,u(t.title),1)])]),t.title!=="Step 5"?(i(),c("div",es)):r("",!0)],2)),64))]),e[1]||(e[1]=s("p",{class:"-text--center"},"Base",-1)),s("ul",ts,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[e[0]||(e[0]=s("div",{class:"chi-steps__icon"},null,-1)),s("div",is,[s("a",ls,u(t.title),1)]),t.title!=="Step 5"?(i(),c("div",cs)):r("",!0)],2)),64))]),e[2]||(e[2]=s("p",{class:"-text--center"},"Horizontal labels",-1))]),"code-webcomponent":n(()=>[a(p,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(p,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),as={class:"-d--flex -flex--column -justify-content--center -align-items--center"},os={class:"chi-steps -vertical -sm"},ps={class:"chi-steps__icon"},_s={class:"chi-steps__content"},ds={class:"chi-steps__item-title",href:"#"},hs=f({__name:"_small-vertical",setup(g){const _=[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<ul class="chi-steps -vertical -sm">
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
</ul>`};return(y,e)=>{const p=k,m=w;return i(),S(m,{title:"Vertical",titleSize:"h4",id:"small-vertical",tabs:h},{example:n(()=>[s("div",as,[s("ul",os,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[s("div",ps,[s("div",_s,[s("a",ds,u(t.title),1),t.title==="Step 1"?(i(),c(v,{key:0},[e[0]||(e[0]=s("div",{class:"chi-steps__subitem -completed"},[s("i",{class:"chi-icon icon-check -xs","aria-hidden":"true"}),s("p",null,"Completed item")],-1)),e[1]||(e[1]=s("div",{class:"chi-steps__subitem -active"},[s("i",{class:"chi-icon icon-spinner -xs","aria-hidden":"true"}),s("p",null,"In progress item")],-1)),e[2]||(e[2]=s("div",{class:"chi-steps__subitem"},[s("p",null,"Pending item")],-1))],64)):r("",!0)])]),e[3]||(e[3]=s("div",{class:"chi-steps__line"},null,-1))],2)),64))])])]),"code-webcomponent":n(()=>[a(p,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(p,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),ms={class:"chi-steps -labels-md--hide -p-sm--5"},rs={class:"chi-steps__icon"},vs={class:"chi-steps__content"},us={class:"chi-steps__item-title",href:"#"},bs={key:0,class:"chi-steps__line"},xs={class:"chi-steps -horizontal-label -labels-lg--hide -pt--2 -p-sm--4"},fs={class:"chi-steps__content"},Ss={class:"chi-steps__item-title",href:"#"},gs={key:0,class:"chi-steps__line"},$s=f({__name:"_responsiveness",setup(g){const _=[{title:"Step 1",class:"-completed"},{title:"Step 2",class:"-completed"},{title:"Step 3",class:"-active"},{title:"Step 4",class:""},{title:"Step 5",class:""}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Visible labels from md breakpoint -->
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
</ul>`};return(y,e)=>{const p=k,m=w;return i(),S(m,{title:"Responsiveness",id:"responsiveness",tabs:h},{"example-description":n(()=>e[0]||(e[0]=[s("p",{class:"-text"},[o("Use "),s("code",null,"-labels-{breakpoint}--hide"),o(" to hide step component labels on specific breakpoints or "),s("code",null,"-labels--hide"),o(" to hide on all breakpoints. Breakpoints supported are "),s("code",null,"sm"),o(", "),s("code",null,"md"),o(", "),s("code",null,"lg"),o(", and "),s("code",null,"xl"),o(". Labels are shown on all breakpoints by default.")],-1)])),example:n(()=>[s("ul",ms,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[s("div",rs,[s("div",vs,[s("a",us,u(t.title),1)])]),t.title!=="Step 5"?(i(),c("div",bs)):r("",!0)],2)),64))]),e[2]||(e[2]=s("p",{class:"-text--center"},"-labels-md--hide",-1)),s("ul",xs,[(i(),c(v,null,b(_,(t,d)=>s("li",{key:d,class:x(`chi-steps__item ${t.class}`)},[e[1]||(e[1]=s("div",{class:"chi-steps__icon"},null,-1)),s("div",fs,[s("a",Ss,u(t.title),1)]),t.title!=="Step 5"?(i(),c("div",gs)):r("",!0)],2)),64))]),e[3]||(e[3]=s("p",{class:"-text--center"},"-labels-lg--hide",-1))]),"code-webcomponent":n(()=>[a(p,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(p,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),ks={class:"-d--flex -flex--column -justify-content--center -align-items--center"},ws={class:"chi-steps -vertical"},ys={class:"chi-steps__icon"},Cs={class:"chi-steps__content"},Hs={class:"chi-steps__item-title -text--h5 -lh--2 -m--0"},zs={class:"-d--flex -justify-content--center -align-items--center"},Bs={key:0,class:"chi-steps__marker chi-icon icon-arrow-right -sm -icon--warning","aria-hidden":"true"},Ts=["icon"],Es=["id"],Is=["reference"],Ls={key:0,class:"chi-steps__actions"},Fs={size:"xs"},Ps={key:0,class:"chi-steps__line"},Vs=f({__name:"_order-progress",setup(g){const _=[{title:"Step 1",class:"-completed",subitems:[{icon:"check",label:"Completed item"}]},{title:"Step 2",class:"-completed",subitems:[{icon:"warning",label:"Completed item"},{icon:"check",label:"Completed item"},{icon:"warning",label:"Completed item",arrow:!0}]},{title:"Step 3",subitems:[{icon:"warning",label:"Pending item",btnAction:"Schedule"}]},{title:"Step 4",class:"",subitems:[{label:"Pending item",btnAction:"Reschedule"}]}],h=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<ul class="chi-steps -vertical">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title -text--h5 -lh--2 -m--0">Step 1</a>
        <div class="chi-steps__subitem -completed">
          <i class="chi-icon icon-check -xs" aria-hidden="true"></i>
          <p>
            Completed item
            <span class="-text--2xs"> | 17 Feb 2021</span>
          </p>
          <button class="chi-button -icon -xs -flat -p--0 -ml--1" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
            <i class="chi-icon icon-circle-info-outline -icon--dark -mr--0" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title -text--h5 -lh--2 -m--0">Step 2</a>
        <div class="chi-steps__subitem -completed">
          <i class="chi-icon icon-warning -xs -icon--warning" aria-hidden="true"></i>
          <p>
            Completed item
            <span class="-text--2xs"> | 17 Feb 2021</span>
          </p>
          <button class="chi-button -icon -xs -flat -p--0 -ml--1" id="example__help-button-1" aria-label="Help" data-target="#example__help-popover-1">
            <i class="chi-icon icon-circle-info-outline -icon--dark -mr--0" aria-hidden="true"></i>
          </button>
        </div>
        <div class="chi-steps__subitem -completed">
          <i class="chi-icon icon-check -xs" aria-hidden="true"></i>
          <p>
            Completed item
            <span class="-text--2xs"> | 17 Feb 2021</span>
          </p>
          <button class="chi-button -icon -xs -flat -p--0 -ml--1" id="example__help-button-2" aria-label="Help" data-target="#example__help-popover-2">
            <i class="chi-icon icon-circle-info-outline -icon--dark -mr--0" aria-hidden="true"></i>
          </button>
        </div>
        <div class="chi-steps__subitem -completed">
          <i class="chi-steps__marker chi-icon icon-arrow-right -sm -icon--warning" aria-hidden="true"></i>
          <i class="chi-icon icon-warning -xs -icon--warning" aria-hidden="true"></i>
          <p>
            Completed item
            <span class="-text--2xs"> | 17 Feb 2021</span>
          </p>
          <button class="chi-button -icon -xs -flat -p--0 -ml--1" id="example__help-button-3" aria-label="Help" data-target="#example__help-popover-3">
            <i class="chi-icon icon-circle-info-outline -icon--dark -mr--0" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title -text--h5 -lh--2 -m--0">Step 3</a>
        <div class="chi-steps__subitem -d--block -pl--0">
          <div class="-d--flex -justify-content--center -align-items--center -mb--1">
            <div class="chi-steps__subitem-icon">
              <i class="chi-icon icon-warning -xs -icon--warning" aria-hidden="true"></i>
            </div>
            <p>
              Pending item
              <span class="-text--2xs"> | 17 Feb 2021</span>
            </p>
            <button class="chi-button -icon -xs -flat -p--0 -ml--1" id="example__help-button-4" aria-label="Help" data-target="#example__help-popover-4">
              <i class="chi-icon icon-circle-info-outline -icon--dark -mr--0" aria-hidden="true"></i>
            </button>
          </div>
          <div class="chi-steps__actions">
            <button class="chi-button -xs">Schedule</button>
          </div>
        </div>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title -text--h5 -lh--2 -m--0">Step 4</a>
        <div class="chi-steps__subitem -d--block -pl--0">
          <div class="-d--flex -justify-content--center -align-items--center -mb--1">
            <div class="chi-steps__subitem-icon"></div>
            <p>
              Pending item
              <span class="-text--2xs"> | 17 Feb 2021</span>
            </p>
            <button class="chi-button -icon -xs -flat -p--0 -ml--1" id="example__help-button-5" aria-label="Help" data-target="#example__help-popover-5">
              <i class="chi-icon icon-circle-info-outline -icon--dark -mr--0" aria-hidden="true"></i>
            </button>
          </div>
          <div class="chi-steps__actions">
            <button class="chi-button -xs">Reschedule</button>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>

<section class="chi-popover chi-popover--top" id="example__help-popover" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--top" id="example__help-popover-1" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--top" id="example__help-popover-2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--top" id="example__help-popover-3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--top" id="example__help-popover-4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--top" id="example__help-popover-5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
      <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__help-button'));
  chi.popover(document.getElementById('example__help-button-1'));
  chi.popover(document.getElementById('example__help-button-2'));
  chi.popover(document.getElementById('example__help-button-3'));
  chi.popover(document.getElementById('example__help-button-4'));
  chi.popover(document.getElementById('example__help-button-5'));
<\/script>`};return(y,e)=>{const p=E,m=k,t=I,d=w;return i(),S(d,{title:"Order progress",id:"order-progres",tabs:h},{example:n(()=>[s("div",ks,[s("ul",ws,[(i(),c(v,null,b(_,(C,H)=>s("li",{class:x(`chi-steps__item ${C.class}`)},[s("div",ys,[s("div",Cs,[s("a",Hs,u(C.title),1),a(p,null,{default:n(()=>[(i(!0),c(v,null,b(C.subitems,($,z)=>(i(),c("div",{class:x(["chi-steps__subitem -completed -d--block",$.class])},[s("div",zs,[$.arrow?(i(),c("i",Bs)):r("",!0),$.icon?(i(),c("chi-icon",{key:1,icon:$.icon,size:"xs","aria-hidden":"true"},null,8,Ts)):r("",!0),s("p",null,[o(u($.label),1),e[0]||(e[0]=s("span",{class:"-text--2xs"}," | 17 Feb 2021",-1))]),s("chi-button",{class:"-p--0 -ml--1",type:"icon",size:"xs",variant:"flat","alternative-text":"Help",id:`help-icon-${H}-${z}`},e[1]||(e[1]=[s("chi-icon",{icon:"circle-info-outline",color:"dark"},null,-1)]),8,Es),s("chi-popover",{position:"top",variant:"text",arrow:"arrow",reference:`#help-icon-${H}-${z}`},"Helpful information goes here.",8,Is)]),$.btnAction?(i(),c("div",Ls,[s("chi-button",Fs,u($.btnAction),1)])):r("",!0)],2))),256))]),_:2},1024)])]),H<_.length-1?(i(),c("div",Ps)):r("",!0)],2)),64))])])]),"code-webcomponent":n(()=>[a(m,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[a(t),a(m,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),Rs=f({__name:"index",setup(g){const _=B();return(h,l)=>(i(),c(v,null,[l[0]||(l[0]=s("h2",null,"Examples",-1)),l[1]||(l[1]=s("p",{class:"-text"},[o("To display steps, apply the class "),s("code",null,"chi-steps"),o(" to a unordered list "),s("code",null,"ul"),o(" and indicate the active link with the class "),s("code",null,"-active"),o(" in the corresponding li tag.")],-1)),a(M),a(O),a(Q),T(_)==="portal"?(i(),S(Vs,{key:0})):r("",!0),l[2]||(l[2]=s("h2",null,"Additional Size",-1)),l[3]||(l[3]=s("h3",null,"Small",-1)),l[4]||(l[4]=s("p",{class:"-text"},[o("Use the "),s("code",null,"-sm"),o(" modifier class to render small steps.")],-1)),a(ns),a(hs),a($s)],64))}});export{Rs as _};
