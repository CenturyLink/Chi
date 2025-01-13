import{_ as W}from"./HHge0g2Y.js";import{_ as y}from"./C055cWll.js";import{_ as S}from"./BQOZES6b.js";import{_ as z}from"./DvtYg461.js";import{e as L,x as k,o,f as $,w as p,a as e,c as h,i as x,t as v,F as f,b,r as H,n as g,g as M,h as D,l as T,d as A,j as q,k as I}from"./BX7DqjWX.js";const R={class:"-px--3 -bg--white -pt--2"},X={class:"-py--1",slot:"panels"},U=["id"],Y={class:"-text"},K=L({__name:"_horizontal-flat",setup(E){const n=[{label:"Active Tab",id:"example__portal-horizontal-flat-1"},{label:"Tab Link",id:"example__portal-horizontal-flat-2"},{label:"Tab Link",id:"example__portal-horizontal-flat-3"}],m=k(()=>({webcomponent:`<chi-tabs
  id="example__portal-horizontal-flat"
  active-tab="example__portal-horizontal-flat-1"
  border
  sliding-border
>
  <div slot="panels">
${_(2)}
  </div>
</chi-tabs>

<script>
const tabsElement = document.querySelector('example__portal-horizontal-flat');

if (tabsElement) {
  tabsElement.tabs = [
    {
      label: 'Active Tab',
      id: 'example__portal-horizontal-flat-1'
    },
    {
      label: 'Tab Link',
      id: 'example__portal-horizontal-flat-2'
    },
    {
      label: 'Tab Link',
      id: 'example__portal-horizontal-flat-3'
    }
  ];
}
<\/script>`,htmlblueprint:`<ul
  class="chi-tabs -border"
  id="example__portal-horizontal-flat"
  role="tablist"
  aria-label="Tabs"
>
${r()}
</ul>

${_()}

<script>chi.tab(document.getElementById('example__portal-horizontal-flat'));<\/script>`})),r=()=>n.map(({label:d,id:a},l)=>{const t=l===0;return`  <li${t?' class="-active"':""}>
    <a
      href="#${a}"
      role="tab"${t?"":`
      tabindex="-1"`}
      aria-selected="${t?"true":"false"}"
      aria-controls="${a}">${d}</a>
  </li>`}).join(`
`),_=(d=0)=>{const a=" ".repeat(d*2);return n.map(({id:l},t)=>`${a}<div class="chi-tabs-panel" id="${l}" role="tabpanel">
${a}  <p class="-text">Tab ${t+1} content</p>
${a}</div>`).join(`
`)};return(d,a)=>{const l=y,t=S,c=z;return o(),$(c,{title:"Flat",id:"horizontal-flat",titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",R,[e("chi-tabs",{id:"example__portal-horizontal-flat",tabs:n,"active-tab":"example__portal-horizontal-flat-1","sliding-border":"",border:""},[e("div",X,[(o(),h(f,null,x(n,(s,i)=>e("div",{class:"chi-tabs-panel",key:s.id,role:"tabpanel",id:s.id},[e("p",Y,"Tab "+v(i+1)+" content",1)],8,U)),64))])])])]),"code-webcomponent":p(()=>[b(l,{class:"html",lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t),b(l,{lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}}),O={class:"-p--3 -bg--white"},G={class:"chi-col -w--6 -w-sm--8",slot:"panels"},P=["id"],Q={class:"-text"},Z=L({__name:"_vertical-flat",setup(E){const n=[{label:"Active Tab",id:"example__portal-vertical-flat-1"},{label:"Tab Link",id:"example__portal-vertical-flat-2"},{label:"Tab Link",id:"example__portal-vertical-flat-3"}],m=()=>n.map(({label:d,id:a},l)=>{const t=l===0;return`      <li${t?' class="-active"':""}>
        <a
          href="#${a}"
          role="tab"${t?"":`
          tabindex="-1"`}
          aria-selected="${t?"true":"false"}"
          aria-controls="${a}">${d}</a>
      </li>`}).join(`
`),r=d=>{const a="    ";return n.map(({id:l},t)=>`${a}<div class="chi-tabs-panel -active" id="${l}" role="tabpanel">
  ${a}<p class="-text">Tab ${t+1} content</p>
${a}</div>`).join(`
`)},_=k(()=>({webComponent:`<chi-tabs
  id="example__portal-vertical-flat"
  active-tab="example__portal-vertical-flat-1"
  vertical
  sliding-border
>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__portal-vertical-flat-1" role="tabpanel">
      <p class="-text">Tab 1 content<p>
    </div>
    <div class="chi-tabs-panel" id="example__portal-vertical-flat-2" role="tabpanel">
      <p class="-text">Tab 2 content<p>
    </div>
    <div class="chi-tabs-panel" id="example__portal-vertical-flat-3" role="tabpanel">
      <p class="-text">Tab 3 content<p>
    </div>
  </div>
</chi-tabs>

<script>
  document.getElementById("example__portal-vertical-flat").tabs = [
    {
      label: 'Active Tab',
      id: 'example__portal-vertical-flat-1'
    },
    {
      label: 'Tab Link',
      id: 'example__portal-vertical-flat-2'
    },
    {
      label: 'Tab Link',
      id: 'example__portal-vertical-flat-3'
    }
  ];
<\/script>`,htmlBlueprint:`<div class="chi-grid">
  <div class="chi-col">
    <ul
      class="chi-tabs -vertical -animated"
      id="example__portal-vertical-flat"
      role="tablist"
      aria-label="Tabs"
    >
${m()}
    </ul>
  </div>
  <div class="chi-col">
${r()}
  </div>
</div>

<script>chi.tab(document.getElementById('"example__portal-vertical-flat'));<\/script>`}));return(d,a)=>{const l=y,t=S,c=z;return o(),$(c,{title:"Flat",id:"vertical-flat",titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",O,[e("chi-tabs",{tabs:n,"active-tab":"example__portal-vertical-flat-1",vertical:"","sliding-border":""},[e("div",G,[(o(),h(f,null,x(n,(s,i)=>e("div",{class:"chi-tabs-panel",key:s.id,role:"tabpanel",id:s.id},[e("p",Q,"Tab "+v(i+1)+" content",1)],8,P)),64))])])])]),"code-webcomponent":p(()=>[b(l,{lang:"html",code:_.value.webComponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t),b(l,{lang:"html",code:_.value.htmlBlueprint},null,8,["code"])]),_:1})}}}),ee=["inverse"],te=["id"],ae={class:"-text"},le=L({__name:"_horizontal-flat",setup(E){const n=H([{active:!0,id:"base",label:"Base"},{id:"inverse",label:"Inverse"}]),m=H(!1),r=[{label:"Active Tab",id:"example__horizontal-flat-1"},{label:"Tab Link",id:"example__horizontal-flat-2"},{label:"Tab Link",id:"example__horizontal-flat-3"}],_=k(()=>({webComponent:`<chi-tabs
  id="example__horizontal-flat"
  active-tab="example__horizontal-flat-1"
  sliding-border${m.value?`
  inverse
  extra-class="-px--3"`:""}
>
  <div class="-py--1${m.value?" -px--3 -bg--white":""}" slot="panels">
    <div class="chi-tabs-panel" id="example__horizontal-flat-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__horizontal-flat-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__horizontal-flat-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</chi-tabs>

<script>
  document.getElementById("example__horizontal-flat").tabs = [
    {
      label: 'Active Tab',
      id: 'example__horizontal-flat-1'
    },
    {
      label: 'Tab Link',
      id: 'example__horizontal-flat-2'
    },
    {
      label: 'Tab Link',
      id: 'example__horizontal-flat-3'
    }
  ];
<\/script>`,htmlBlueprint:`<ul class="chi-tabs -animated${m.value?" -inverse":""}" id="example__horizontal-flat" role="tablist" aria-label="Tabs">
  <li class="-active">
    <a
      href="#example__horizontal-flat-1"
      role="tab"
      aria-selected="true"
      aria-controls="example__horizontal-flat-1">Active Tab</a>
  </li>
  <li>
    <a
      href="#example__horizontal-flat-2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="example__horizontal-flat-2">Tab Link</a>
  </li>
  <li>
    <a
      href="#example__horizontal-flat-3"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="example__horizontal-flat-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="example__horizontal-flat-1" role="tabpanel">
  <p class="-text">Tab 1 content</p>
</div>
<div class="chi-tabs-panel" id="example__horizontal-flat-2" role="tabpanel">
  <p class="-text">Tab 2 content</p>
</div>
<div class="chi-tabs-panel" id="example__horizontal-flat-3" role="tabpanel">
  <p class="-text">Tab 3 content</p>
</div>

<script>chi.tab(document.querySelector('#example__horizontal-flat'));<\/script>`}));return(d,a)=>{const l=S,t=y,c=z;return o(),$(c,{title:"Flat",id:"horizontal-flat",titleSize:"h4","head-tabs":n.value,onChiHeadTabsChange:a[1]||(a[1]=s=>m.value=s.id==="inverse"),additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",{class:g([m.value?"-bg--black":"-bg--white"])},[e("chi-tabs",{tabs:r,"active-tab":"example__horizontal-flat-1","sliding-border":"",extraClass:"-px--3",inverse:m.value,"on:chiTabChange":a[0]||(a[0]=(...s)=>d.chiTabChange&&d.chiTabChange(...s))},[e("div",{class:g(["-py--1 -px--3",[m.value?"-bg--white":""]]),slot:"panels"},[(o(),h(f,null,x(r,(s,i)=>e("div",{class:"chi-tabs-panel",role:"tabpanel",id:s.id},[e("p",ae,"Tab "+v(i+1)+" content",1)],8,te)),64))],2)],40,ee)],2)]),"code-htmlblueprint":p(()=>[b(l),b(t,{lang:"html",code:_.value.htmlBlueprint},null,8,["code"])]),"code-webcomponent":p(()=>[b(t,{lang:"html",code:_.value.webComponent},null,8,["code"])]),_:1},8,["head-tabs"])}}}),ie=["inverse"],ne=["id"],se={class:"-text"},oe=L({__name:"_vertical-flat",setup(E){const n=H("base"),m=[{label:"Active Tab",id:"example__vertical-flat-1",active:!0},{label:"Tab Link",id:"example__vertical-flat-2"},{label:"Tab Link",id:"example__vertical-flat-3"}],r=i=>i?"-inverse":"",_=i=>{const u=r(i);return m.map(({label:C,id:w},B)=>{const j=B===0;return`  <li${j?' class="-active"':""}>
    <a
      href="#example__vertical-flat${u}-${B+1}"
      role="tab"${j?"":`
      tabindex="-1"`}
      aria-selected="${j?"true":"false"}"
      aria-controls="example__vertical-flat${u}-${B+1}">${C}</a>
  </li>`}).join(`
`)},d=(i,u)=>{const C=r(u),w=i?"    ":"";return m.map(({id:B},j)=>`${w}<div class="chi-tabs-panel${i?"":" -active"}" id="example__vertical-flat${C}-${j+1}" role="tabpanel">
  ${w}<p class="-text">Tab ${j+1} content</p>
${w}</div>`).join(`
`)},a=i=>{const u=r(i);return{webComponent:{code:`<chi-tabs
  id="example__vertical-flat${u}"
  active-tab="example__vertical-flat${u}-1"
  sliding-border
  vertical${i?` 
  inverse`:""}
>
  <div slot="panels" class="chi-col -w--6 -w-sm--8 -p--3">
${d(!0,i)}
  </div>
</chi-tabs>

<script>
  document.getElementById("example__vertical-flat${u}").tabs = [
    {
      label: 'Active Tab',
      id: 'example__vertical-flat${u}-1'
    },
    {
      label: 'Tab Link',
      id: 'example__vertical-flat${u}-2'
    },
    {
      label: 'Tab Link',
      id: 'example__vertical-flat${u}-3'
    }
  ];
<\/script>`},htmlBlueprint:{code:`<ul
  class="chi-tabs -vertical${i?" -inverse":""} -animated"
  id="example__vertical-flat${u}"
  role="tablist"
  aria-label="Tabs"
>
${_(i)}
</ul>

${d(!1,i)}

<script>chi.tab(document.getElementById('"example__vertical-flat${u}'));<\/script>`}}},l=[{active:!0,id:"base",label:"Base"},{active:!1,id:"inverse",label:"Inverse"}],t={base:a(!1),inverse:a(!0)},c=k(()=>n.value==="inverse"),s=i=>{n.value=i.id};return(i,u)=>{const C=S,w=y,B=z;return o(),$(B,{title:"Flat",id:"vertical-flat",titleSize:"h4",additionalClasses:"-bg--grey-20","head-tabs":l,onChiHeadTabsChange:s},{example:p(()=>[e("div",{class:g(["-p--3",c.value?"-bg--black":"-bg--white"])},[e("chi-tabs",{tabs:m,"active-tab":"example__vertical-flat-1",vertical:"","sliding-border":"",inverse:c.value},[e("div",{class:g(["chi-col -w--6 -w-sm--8 -p--3",[c.value?"-bg--white":""]]),slot:"panels"},[(o(),h(f,null,x(m,(j,V)=>e("div",{class:"chi-tabs-panel",role:"tabpanel",id:j.id},[e("p",se,"Tab "+v(V+1)+" content",1)],8,ne)),64))],2)],8,ie)],2)]),"code-htmlblueprint":p(()=>[b(C),b(w,{lang:"html",code:t[n.value].htmlBlueprint.code},null,8,["code"])]),"code-webcomponent":p(()=>[b(w,{lang:"html",code:t[n.value].webComponent.code},null,8,["code"])]),_:1})}}}),ce={class:"-p--3 -bg--white"},re={class:"chi-col -w--6 -w-sm--8 -p--3",slot:"panels"},de=["id"],be={class:"-text"},pe=L({__name:"_vertical-solid",setup(E){const n=[{label:"Active Tab",id:"example__vertical-solid-1"},{label:"Tab Link",id:"example__vertical-solid-2"},{label:"Tab Link",id:"example__vertical-solid-3"}],m=k(()=>({webcomponent:`<chi-tabs
  id="example__vertical-solid"
  active-tab="example__vertical-solid-1"
  size="xl"
  vertical
  solid
>
  <div slot="panels" class="chi-col -w--6 -w-sm--8 -p--3 -bg--white">
    <div class="chi-tabs-panel" id="example__vertical-solid-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__vertical-solid-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__vertical-solid-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</div>

<script>
  document.getElementById("example__vertical-solid").tabs = [
    {
      label: 'Active Tab',
      id: 'example__vertical-solid-1'
    },
    {
      label: 'Tab Link',
      id: 'example__vertical-solid-2'
    },
    {
      label: 'Tab Link',
      id: 'example__vertical-solid-3'
    }
  ];
<\/script>`,htmlblueprint:`<ul
  class="chi-tabs -vertical -solid -xl -animated"
  id="example__vertical-solid"
  role="tablist"
  aria-label="Tabs"
>
${r()}
</ul>

${_()}

<script>chi.tab(document.getElementById('example-vertical-solid'));<\/script>`})),r=()=>n.map(({label:d,id:a},l)=>{const t=l===0;return`  <li${t?' class="-active"':""}>
    <a
      href="#${a}"
      role="tab"${t?"":`
      tabindex="-1"`}
      aria-selected="${t?"true":"false"}"
      aria-controls="${a}">${d}</a>
  </li>`}).join(`
`),_=d=>n.map(({id:a},l)=>`<div class="chi-tabs-panel${l===0?" -active":""}" id="${a}" role="tabpanel">
  <p class="-text">Tab ${l+1} content</p>
</div>`).join(`
`);return(d,a)=>{const l=y,t=S,c=z;return o(),$(c,{title:"Solid",id:"vertical-solid",titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",ce,[e("chi-tabs",{tabs:n,"active-tab":"example__vertical-solid-1",size:"xl",solid:"",vertical:""},[e("div",re,[(o(),h(f,null,x(n,(s,i)=>e("div",{class:"chi-tabs-panel",key:s.id,role:"tabpanel",id:s.id},[e("p",be,"Tab "+v(i+1)+" content",1)],8,de)),64))])])])]),"code-webcomponent":p(()=>[b(l,{class:"html",lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t),b(l,{lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}}),me={class:"-px--3 -pt--2 -bg--white"},he={class:"-py--1",slot:"panels"},_e=["id"],ue={class:"-text"},ve=L({__name:"_horizontal-solid",setup(E){const n=[{label:"Active Tab",id:"example__horizontal-solid-bordered-1"},{label:"Tab Link",id:"example__horizontal-solid-bordered-2"},{label:"Tab Link",id:"example__horizontal-solid-bordered-3"}],m=()=>n.map(({label:d,id:a},l)=>{const t=l===0;return`  <li${t?' class="-active"':""}>
    <a
      href="#${a}"
      role="tab"${t?"":`
      tabindex="-1"`}
      aria-selected="${t?"true":"false"}"
      aria-controls="${a}">${d}</a>
  </li>`}).join(`
`),r=(d=0)=>{const a=" ".repeat(d*2);return n.map(({id:l},t)=>`${a}<div class="chi-tabs-panel" id="${l}" role="tabpanel">
${a}  <p class="-text">Tab ${t+1} content</p>
${a}</div>`).join(`
`)},_={webcomponent:`<chi-tabs
  id="example__horizontal-solid-bordered"
  active-tab="example__horizontal-solid-bordered-1"
  size="lg"
  solid
  border
>
  <div class="-py--3" slot="panels">
${r(2)}
  </div>
</chi-tabs>

<script>
  const tabsElement = document.querySelector('#example__horizontal-solid-bordered');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'example__horizontal-solid-bordered-1'
      },
      {
        label: 'Tab Link',
        id: 'example__horizontal-solid-bordered-2'
      },
      {
        label: 'Tab Link',
        id: 'example__horizontal-solid-bordered-3'
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul
  class="chi-tabs -solid -lg -border"
  id="example__horizontal-solid-bordered"
  role="tablist"
  aria-label="Tabs"
>
${m()}
</ul>

${r()}

<script>chi.tab(document.getElementById('example__horizontal-solid-bordered'));<\/script>`};return(d,a)=>{const l=y,t=S,c=z;return o(),$(c,{title:"Solid",id:"horizontal-solid",titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",me,[e("chi-tabs",{id:"example__horizontal-solid-bordered",tabs:n,"active-tab":"example__horizontal-solid-bordered-1",size:"lg","sliding-border":"",solid:"",border:"","on:chiTabChange":a[0]||(a[0]=(...s)=>d.chiTabChange&&d.chiTabChange(...s))},[e("div",he,[(o(),h(f,null,x(n,(s,i)=>e("div",{class:"chi-tabs-panel",key:s.id,role:"tabpanel",id:s.id},[e("p",ue,"Tab "+v(i+1)+" content",1)],8,_e)),64))])],32)])]),"code-webcomponent":p(()=>[b(l,{class:"html",lang:"html",code:_.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t),b(l,{lang:"html",code:_.htmlblueprint},null,8,["code"])]),_:1})}}}),fe={class:"chi-tabs",ref:"example-default-link-behavior",role:"tablist","aria-label":"example-default-link-behavior"},xe=["href","aria-controls"],ge={class:"-py--2"},$e=["id"],Te={class:"-text"},we=L({__name:"_link-default-behavior",setup(E){const n=M("example-default-link-behavior"),m=[{id:"example__default-link-behavior-a",label:"Tab a",active:!0},{id:"example__default-link-behavior-b",label:"Tab b"},{id:"example__default-link-behavior-c",label:"Tab c"}],r=[{id:"example__default-link-behavior-a",text:"Content for tab a",active:!0},{id:"example__default-link-behavior-b",text:"Content for tab b"},{id:"example__default-link-behavior-c",text:"Content for tab c"}],_=k(()=>({webcomponent:`<chi-tabs
  id="example__default-link-behavior"
  active-tab="example__default-link-behavior-a"
  sliding-border
>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__default-link-behavior-a" role="tabpanel">
      <p class="-text">Content for tab a</p>
    </div>
    <div class="chi-tabs-panel" id="example__default-link-behavior-b" role="tabpanel">
      <p class="-text">Content for tab b</p>
    </div>
    <div class="chi-tabs-panel" id="example__default-link-behavior-c" role="tabpanel">
      <p class="-text">Content for tab c</p>
    </div>
  </div>
</chi-tabs>

<script>
  document.getElementById("example__default-link-behavior").tabs = [
    {
      label: 'Active Tab',
      id: 'example__default-link-behavior-a'
    },
    {
      label: 'Tab Link',
      id: 'example__default-link-behavior-b'
    },
    {
      label: 'Tab Link',
      id: 'example__default-link-behavior-c'
    },
    {
      label: 'External Link',
      id: 'example__default-link-behavior-4',
      href: 'https://lib.lumen.com/chi/',
      target: '_self'
    }
  ];
<\/script>`,htmlblueprint:`<ul
  class="chi-tabs"
  id="example__default-link-behavior"
  role="tablist"
  aria-label="Tabs"
>
  <li class="-active">
    <a
      href="#example__default-link-behavior-a"
      role="tab"
      aria-selected="true"
      aria-controls="example__default-link-behavior-a">Active Tab</a>
  </li>
  <li>
    <a
      href="#example__default-link-behavior-b"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="example__default-link-behavior-b">Tab Link</a>
  </li>
  <li>
    <a
      href="#example__default-link-behavior-c"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="example__default-link-behavior-c">Tab Link</a>
  </li>
  <li><a href="https://lib.lumen.com/chi/" target="_self">External Link</a></li>
</ul>

<div class="chi-tabs-panel -active" id="example__default-link-behavior-a" role="tabpanel">
  <p class="-text">Content for tab a</p>
</div>
<div class="chi-tabs-panel" id="example__default-link-behavior-b" role="tabpanel">
  <p class="-text">Content for tab b</p>
</div>
<div class="chi-tabs-panel" id="example__default-link-behavior-c" role="tabpanel">
  <p class="-text">Content for tab c</p>
</div>

<script>chi.tab(document.getElementById('example__default-link-behavior'));<\/script>`}));return D(()=>{n.value&&chi.tab(n.value)}),(d,a)=>{const l=y,t=S,c=z;return o(),$(c,{title:"Keep default link behavior",id:"link-default-behavior",titleSize:"h2",additionalClasses:"-pb--4"},{"example-description":p(()=>a[0]||(a[0]=[e("p",{class:"-text"},"By default, Chi JavaScript enabled tabs will ignore default link behavior. To preserve it, specify a target property on the link.",-1)])),example:p(()=>[e("ul",fe,[(o(),h(f,null,x(m,s=>e("li",{class:g([s.active?"-active":""])},[e("a",{href:`#${s.id}`,role:"tab","aria-selected":"true","aria-controls":s.id},v(s.label),9,xe)],2)),64)),a[1]||(a[1]=e("li",null,[e("a",{href:"https://lib.lumen.com/chi/",target:"_self"},"External Link")],-1))],512),e("div",ge,[(o(),h(f,null,x(r,s=>e("div",{class:g(["chi-tabs-panel",[s.active?"-active":""]]),id:s.id,role:"tabpanel"},[e("div",Te,v(s.text),1)],10,$e)),64))])]),"code-webcomponent":p(()=>[b(l,{class:"html",lang:"html",code:_.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t),b(l,{lang:"html",code:_.value.htmlblueprint},null,8,["code"])]),_:1})}}}),ke=["id"],Le=["href","aria-controls"],Ee=L({__name:"_horizontal-tabs-with-icons",setup(E){const n=H("base"),m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],r=[{href:"#",text:"Active Tab",active:!0},{href:"#",text:"Tab Link"},{href:"#",text:"Tab Link"}],_=k(()=>r.map(({text:s,active:i})=>`  <li${i?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${s}</span>
    </a>
  </li>`).join(`
`)),d=k(()=>[{active:!0,id:"base",label:"Base",codeSnippets:a(!1)},{id:"inverse",label:"Inverse",codeSnippets:a(!0)}]),a=s=>({webComponent:"",htmlBlueprint:`<ul class="chi-tabs ${s?"-inverse ":""}-icons">
${_.value}
</ul>`}),l={base:a(!1),inverse:a(!0)},t=k(()=>n.value==="inverse"),c=s=>{n.value=s.id};return(s,i)=>{const u=y,C=z;return o(),$(C,{title:"Horizontal tabs with icons",id:"horizontal-tabs-with-icons",tabs:m,"head-tabs":d.value,onChiHeadTabsChange:c,additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",{class:g(["-px--3",t.value?"-bg--black":"-bg--white"])},[e("ul",{class:g(["chi-tabs -icons",[t.value?"-inverse":""]]),id:`example-horizontal-with-icons-${n.value}`,role:"tablist","aria-label":"chi-tabs-horizontal"},[(o(),h(f,null,x(r,(w,B)=>e("li",{key:B,class:g([w.active?"-active":""])},[e("a",{href:`#${w.href}`,role:"tab","aria-selected":"true","aria-controls":w.href},[i[0]||(i[0]=e("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),e("span",null,v(w.text),1)],8,Le)],2)),64))],10,ke)],2)]),"code-htmlblueprint":p(()=>[b(u,{lang:"html",code:l[n.value].htmlBlueprint},null,8,["code"])]),"code-webcomponent":p(()=>[b(u,{lang:"html",code:l[n.value].webComponent},null,8,["code"])]),_:1},8,["head-tabs"])}}}),Ce={class:"-bg--white"},ye={class:"-p--3"},ze={class:"chi-tabs -icons -vertical -list",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},Se=["href","aria-selected","aria-controls"],Be={class:"chi-tabs_item-title"},He={key:0,class:"chi-tabs_item-text"},Ae={key:0,class:"chi-tabs__subtabs"},Ie={class:"chi-tabs_item",href:"#"},je={class:"chi-tabs_item-title"},Fe={key:0,class:"chi-tabs_item-text"},Ne=L({__name:"_vertical-tabs-with-icons-and-description",setup(E){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],m=[{id:"tab1",href:"",text:"Tab Link",description:"Tab description",active:!0},{id:"tab2",href:"",text:"Active Tab",description:"Tab description",subLinks:[{id:"tab2-subtab1",href:"",text:"Subtab Link",description:"Subtab description"},{id:"tab2-subtab2",href:"",text:"Subtab Link",description:"Subtab description"},{id:"tab2-subtab3",href:"",text:"Subtab Link",description:"Subtab description"}]},{id:"tab3",href:"",text:"Tab Link",description:"Tab description"}],r=a=>`<ul class="chi-tabs -vertical -icons -list">
${a.map(t=>{const c=t.active?' class="-active"':"",s=t.href||"#",i=t.description?`<span class="chi-tabs_item-text">${t.description}</span>`:"",u=t.subLinks?`
`+_(t.subLinks):"";return`  <li${c}>
    <a class="chi-tabs_item" href="${s}">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">${t.text}</span>
      ${i}
    </a>${u}
  </li>`}).join(`
`)}
</ul>`;function _(a){return`    <ul class="chi-tabs__subtabs">
${a.map(t=>{const c=t.href||"#",s=t.description?`<span class="chi-tabs_item-text">${t.description}</span>`:"";return`      <li>
        <a class="chi-tabs_item" href="${c}">
          <span class="chi-tabs_item-title">${t.text}</span>
          ${s}
        </a>
      </li>`}).join(`
`)}
    </ul>`}const d={webComponent:"",htmlBlueprint:r(m)};return(a,l)=>{const t=y,c=z;return o(),$(c,{title:"Vertical tabs with icons and description",id:"vertical-tabs-with-icons-and-description",tabs:n,"additional-classes":"-bg--grey-20"},{example:p(()=>[e("div",Ce,[e("div",ye,[e("ul",ze,[(o(),h(f,null,x(m,s=>e("li",{key:s.id,class:g({"-active":s.active})},[e("a",{class:"chi-tabs_item",href:`#${s.href}`,role:"tab","aria-selected":s.active?"true":"false","aria-controls":s.href},[l[0]||(l[0]=e("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),e("span",Be,v(s.text),1),s.description?(o(),h("span",He,v(s.description),1)):T("",!0)],8,Se),s.subLinks?(o(),h("ul",Ae,[(o(!0),h(f,null,x(s.subLinks,i=>(o(),h("li",{key:i.id,class:g({"-active":i.active})},[e("a",Ie,[e("span",je,v(i.text),1),i.description?(o(),h("span",Fe,v(i.description),1)):T("",!0)])],2))),128))])):T("",!0)],2)),64))])])])]),"code-webcomponent":p(()=>[b(t,{class:"html",lang:"html",code:d.webComponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t,{class:"html",lang:"html",code:d.htmlBlueprint},null,8,["code"])]),_:1})}}}),Je=["id"],Me=["href","aria-controls"],De={key:0,class:"chi-tabs__subtabs"},Ve={href:"#"},We=L({__name:"_vertical-tabs-with-icons",setup(E){const n=H("base"),m=H(!1),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],_=[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}],d=k(()=>_.map(({text:s,active:i})=>`  <li${i?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${s}</span>
    </a>
  </li>`).join(`
`)),a=[{active:!0,id:"base",label:"Base"},{id:"inverse",label:"Inverse"}],l=s=>{n.value=s.id,m.value=s.id==="inverse"},t=s=>({webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs ${s?"-inverse ":""}-vertical -icons">
${d.value}
</ul>`}}),c={base:t(!1),inverse:t(!0)};return(s,i)=>{const u=y,C=z;return o(),$(C,{title:"Vertical tabs with icons",id:"vertical-tabs-with-icons",tabs:r,"head-tabs":a,onChiHeadTabsChange:l,additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",{class:g(["-p--3",m.value?"-bg--black":"-bg--white"])},[e("ul",{class:g(["chi-tabs -icons -vertical",[m.value?"-inverse":""]]),id:`example-vertical-with-icons-${n.value}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(o(),h(f,null,x(_,w=>e("li",{class:g([w.active?"-active":""])},[e("a",{href:`#${w.href}`,role:"tab","aria-selected":"true","aria-controls":w.href},[i[0]||(i[0]=e("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),e("span",null,v(w.text),1)],8,Me),w.subLinks?(o(),h("ul",De,[(o(!0),h(f,null,x(w.subLinks,B=>(o(),h("li",{class:g([B.active?"-active":""])},[e("a",Ve,v(B.text),1)],2))),256))])):T("",!0)],2)),64))],10,Je)],2)]),"code-htmlblueprint":p(()=>[b(u,{lang:"html",code:c[n.value].htmlBlueprint.code},null,8,["code"])]),"code-webcomponent":p(()=>[b(u,{lang:"html",code:c[n.value].webComponent.code},null,8,["code"])]),_:1})}}}),qe=["id"],Re=["href","aria-controls"],Xe={key:0,class:"chi-tabs__subtabs"},Ue={href:"#"},Ye=L({__name:"_vertical-subtabs",setup(E){const n=H("base"),m=H(!1),r=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],_=[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab link"},{href:"",text:"Tab link"}],d=[{active:!0,id:"base",label:"Base"},{id:"inverse",label:"Inverse"}],a=c=>{const s=_.map((i,u)=>`      <li${u===0?' class="-active"':""}>
        <a href="#">Subtab Link</a>
      </li>`).join(`
`);return{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs${c?" -inverse":""} -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
${s}
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`}}},l={base:a(!1),inverse:a(!0)},t=c=>{n.value=c.id,m.value=c.id==="inverse"};return(c,s)=>{const i=y,u=z;return o(),$(u,{title:"Vertical Subtabs",id:"vertical-subtabs",additionalClasses:"-bg--grey-20",titleSize:"h2",tabs:r,"head-tabs":d,onChiHeadTabsChange:t},{example:p(()=>[e("div",{class:g(["-p--3",m.value?"-bg--black":"-bg--white"])},[e("ul",{class:g(["chi-tabs -vertical",[m.value?"-inverse":""]]),id:`example-vertical-with-icons-${n.value}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(o(),h(f,null,x(_,C=>e("li",{class:g([C.active?"-active":""])},[e("a",{href:`#${C.href}`,role:"tab","aria-selected":"true","aria-controls":C.href},v(C.text),9,Re),C.subLinks?(o(),h("ul",Xe,[(o(!0),h(f,null,x(C.subLinks,w=>(o(),h("li",{class:g([w.active?"-active":""])},[e("a",Ue,v(w.text),1)],2))),256))])):T("",!0)],2)),64))],10,qe)],2)]),"code-htmlblueprint":p(()=>[b(i,{lang:"html",code:l[n.value].htmlBlueprint.code},null,8,["code"])]),"code-webcomponent":p(()=>[b(i,{lang:"html",code:l[n.value].webComponent.code},null,8,["code"])]),_:1})}}}),Ke=["inverse"],Oe=L({__name:"_bordered",setup(E){const n=H("base"),m=[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}],r=t=>({webComponent:{code:`<chi-tabs id="example__bordered" active-tab="example__bordered-1" border${t?" inverse":""}></chi-tabs>

<script>
  document.getElementById("example__bordered").tabs = [
    {
      label: 'Active Tab',
      id: 'example__bordered-1'
    },
    {
      label: 'Tab Link',
      id: 'example__bordered-2'
    },
    {
      label: 'Tab Link',
      id: 'example__bordered-3'
    }
  ];
<\/script>`},htmlBlueprint:{code:`<ul class="chi-tabs${t?" -inverse":""} -border" id="example__bordered">
  <li class="-active">
    <a href="#">Active Tab</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>

<script>chi.tab(document.querySelector('#example__bordered'));<\/script>`}}),_=[{active:!0,id:"base",label:"Base"},{active:!1,id:"inverse",label:"Inverse"}],d={base:r(!1),inverse:r(!0)},a=k(()=>n.value==="inverse"),l=t=>{n.value=t.id};return(t,c)=>{const s=y,i=z;return o(),$(i,{title:"Bordered",id:"bordered",titleSize:"h2","head-tabs":_,additionalClasses:"-bg--grey-20",onChiHeadTabsChange:l},{example:p(()=>[e("div",{class:g(["-p--3",a.value?"-bg--black":"-bg--white"])},[(o(),h("chi-tabs",{tabs:m,"active-tab":"tab-a",key:n.value,border:"",inverse:a.value},null,8,Ke))],2)]),"code-htmlblueprint":p(()=>[b(s,{lang:"html",code:d[n.value].htmlBlueprint.code},null,8,["code"])]),"code-webcomponent":p(()=>[b(s,{lang:"html",code:d[n.value].webComponent.code},null,8,["code"])]),_:1})}}}),Ge={class:"-px--3 -pt--2 -bg--white"},Pe={class:"-py--1",slot:"panels"},Qe=["id"],Ze={class:"-text"},et=L({__name:"_disabled",setup(E){const n=[{label:"Active Tab",id:"example__disabled-1"},{label:"Tab Link",id:"example__disabled-2"},{label:"Tab Link",id:"example__disabled-3",disabled:!0}],m=()=>n.map(({label:d,id:a},l)=>{const t=l===0;return`  <li${t?' class="-active"':""}${l===2?' class="-disabled"':""}>
    <a
      href="#${a}"
      role="tab"${t?"":`
      tabindex="-1"`}
      aria-selected="${t?"true":"false"}"
      aria-controls="${a}">${d}</a>
  </li>`}).join(`
`),r=(d=0)=>{const a=" ".repeat(d*2);return n.map(({id:l},t)=>`${a}<div class="chi-tabs-panel" id="${l}" role="tabpanel">
${a}  <p class="-text">Tab ${t+1} content</p>
${a}</div>`).join(`
`)},_={webcomponent:`<chi-tabs
  id="example__disabled"
  active-tab="example__disabled-1"
  sliding-border
>
  <div class="-py--3" slot="panels">
${r(2)}
  </div>
</chi-tabs>

<script>
  const tabsElement = document.querySelector('#example__disabled');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'example__disabled-1'
      },
      {
        label: 'Tab Link',
        id: 'example__disabled-2'
      },
      {
        label: 'Tab Link',
        id: 'example__disabled-3',
        disabled: true
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul
  class="chi-tabs"
  id="example__disabled"
  role="tablist"
  aria-label="Tabs"
>
${m()}
</ul>

${r()}

<script>chi.tab(document.getElementById('example__disabled'));<\/script>`};return(d,a)=>{const l=y,t=S,c=z;return o(),$(c,{title:"Disabled",id:"disabled",additionalClasses:"-bg--grey-20"},{example:p(()=>[e("div",Ge,[e("chi-tabs",{id:"example__disabled",tabs:n,"active-tab":"example__disabled-1","sliding-border":"","on:chiTabChange":a[0]||(a[0]=(...s)=>d.chiTabChange&&d.chiTabChange(...s))},[e("div",Pe,[(o(),h(f,null,x(n,(s,i)=>e("div",{class:"chi-tabs-panel",key:s.id,role:"tabpanel",id:s.id},[e("p",Ze,"Tab "+v(i+1)+" content",1)],8,Qe)),64))])],32)])]),"code-webcomponent":p(()=>[b(l,{class:"html",lang:"html",code:_.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(t),b(l,{lang:"html",code:_.htmlblueprint},null,8,["code"])]),_:1})}}}),tt=L({__name:"_additional-sizes-horizontal",setup(E){const n=[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}],m=[{name:"X-small",value:"xs"},{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"}],r=k(()=>({webComponent:d.value,htmlBlueprint:a.value})),_=k(()=>n.map((l,t)=>{const c=t===0;return`  <li${c?' class="-active"':""}>
    <a href="#">${c?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)),d=k(()=>`${m.map(({name:t,value:c})=>`<!-- ${t} -->
<chi-tabs
  id="example__additional-sizes-horizontal-${c}"
  active-tab="example__additional-sizes-horizontal-${c}-1"${c==="md"?"":`
  size="${c}"`}
  sliding-border
>
</chi-tabs>`).join(`

`)}

<script>
  document.getElementById("example__additional-sizes-horizontal-xs").tabs = [
    {
      label: 'Active Tab',
      id: 'example__additional-sizes-horizontal-xs-1'
    },
    {
      label: 'Tab Link',
      id: 'example__additional-sizes-horizontal-xs-2'
    },
    {
      label: 'Tab Link',
      id: 'example__additional-sizes-horizontal-xs-3'
    }
  ];
<\/script>`),a=k(()=>`${m.map(({name:t,value:c})=>`<!-- ${t} -->
<ul class="chi-tabs${c==="md"?"":` -${c}`}">
${_.value}
</ul>`).join(`

`)}

<script>
  chi.tab(document.querySelector('#example__additional-sizes-horizontal-xs'));
<\/script>`);return(l,t)=>{const c=y,s=z;return o(),$(s,{title:"Horizontal",id:"additional-sizes-horizontal",additionalClasses:"-pb--4"},{example:p(()=>[t[0]||(t[0]=e("p",{class:"-text--bold"},"X-small",-1)),t[1]||(t[1]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("chi-tabs",{tabs:n,"active-tab":"tab-a",ref:"additionalSizesHorizontalXs",size:"xs","sliding-border":""},null,512),t[2]||(t[2]=e("p",{class:"-text--bold -mt--6"},"Small",-1)),t[3]||(t[3]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("chi-tabs",{tabs:n,"active-tab":"tab-a",ref:"additionalSizesHorizontalSm",size:"sm","sliding-border":""},null,512),t[4]||(t[4]=e("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1)),t[5]||(t[5]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("chi-tabs",{tabs:n,"active-tab":"tab-a",ref:"additionalSizesHorizontalMd","sliding-border":""},null,512),t[6]||(t[6]=e("p",{class:"-text--bold -mt--6"},"Large",-1)),t[7]||(t[7]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("chi-tabs",{tabs:n,"active-tab":"tab-a",ref:"additionalSizesHorizontalLg",size:"lg","sliding-border":""},null,512)]),"code-webcomponent":p(()=>[t[8]||(t[8]=e("div",{class:"p--text chi-tab__description"},`Use the property "size" with the desired value. Allowed values are: 'xs', 'sm', 'md', 'lg', 'xl'`,-1)),b(c,{class:"html",lang:"html",code:r.value.webComponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(c,{class:"html",lang:"html",code:r.value.htmlBlueprint},null,8,["code"])]),_:1})}}}),at={class:"chi-tabs -vertical -sm"},lt=["href","aria-controls"],it={key:0,class:"chi-tabs__subtabs"},nt={href:"#"},st={class:"chi-tabs -vertical"},ot=["href","aria-controls"],ct={key:0,class:"chi-tabs__subtabs"},rt={href:"#"},dt={class:"chi-tabs -vertical -lg"},bt=["href","aria-controls"],pt={key:0,class:"chi-tabs__subtabs"},mt={href:"#"},ht={class:"chi-tabs -vertical -xl"},_t=["href","aria-controls"],ut={key:0,class:"chi-tabs__subtabs"},vt={href:"#"},ft=L({__name:"_additional-sizes-vertical",setup(E){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],m=[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}],r=[{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"},{name:"X-Large",value:"xl"}],_=k(()=>({webComponent:"",htmlBlueprint:a.value})),d=k(()=>m.map((l,t)=>`      <li${t===0?' class="-active"':""}>
        <a href="#">Subtab Link</a>
      </li>`).join(`
`)),a=k(()=>r.map(({name:l,value:t})=>`<!-- ${l} -->
<ul class="chi-tabs -vertical${t==="md"?"":` -${t}`}">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
${d.value}
    </ul>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>`).join(`

`));return(l,t)=>{const c=y,s=z;return o(),$(s,{title:"Vertical",id:"additional-sizes-vertical",tabs:n,additionalClasses:"-pb--4"},{example:p(()=>[t[0]||(t[0]=e("p",{class:"-text--bold"},"Small",-1)),t[1]||(t[1]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("ul",at,[(o(),h(f,null,x(m,i=>e("li",{class:g([i.active?"-active":""])},[e("a",{href:`#${i.href}`,role:"tab","aria-selected":"true","aria-controls":i.href},v(i.text),9,lt),i.subLinks?(o(),h("ul",it,[(o(!0),h(f,null,x(i.subLinks,u=>(o(),h("li",{class:g([u.active?"-active":""])},[e("a",nt,v(u.text),1)],2))),256))])):T("",!0)],2)),64))]),t[2]||(t[2]=e("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1)),t[3]||(t[3]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("ul",st,[(o(),h(f,null,x(m,i=>e("li",{class:g([i.active?"-active":""])},[e("a",{href:`#${i.href}`,role:"tab","aria-selected":"true","aria-controls":i.href},v(i.text),9,ot),i.subLinks?(o(),h("ul",ct,[(o(!0),h(f,null,x(i.subLinks,u=>(o(),h("li",{class:g([u.active?"-active":""])},[e("a",rt,v(u.text),1)],2))),256))])):T("",!0)],2)),64))]),t[4]||(t[4]=e("p",{class:"-text--bold -mt--6"},"Large",-1)),t[5]||(t[5]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("ul",dt,[(o(),h(f,null,x(m,i=>e("li",{class:g([i.active?"-active":""])},[e("a",{href:`#${i.href}`,role:"tab","aria-selected":"true","aria-controls":i.href},v(i.text),9,bt),i.subLinks?(o(),h("ul",pt,[(o(!0),h(f,null,x(i.subLinks,u=>(o(),h("li",{class:g([u.active?"-active":""])},[e("a",mt,v(u.text),1)],2))),256))])):T("",!0)],2)),64))]),t[6]||(t[6]=e("p",{class:"-text--bold -mt--6"},"X-Large",-1)),t[7]||(t[7]=e("div",{class:"chi-divider -mb--2"},null,-1)),e("ul",ht,[(o(),h(f,null,x(m,i=>e("li",{class:g([i.active?"-active":""])},[e("a",{href:`#${i.href}`,role:"tab","aria-selected":"true","aria-controls":i.href},v(i.text),9,_t),i.subLinks?(o(),h("ul",ut,[(o(!0),h(f,null,x(i.subLinks,u=>(o(),h("li",{class:g([u.active?"-active":""])},[e("a",vt,v(u.text),1)],2))),256))])):T("",!0)],2)),64))])]),"code-webcomponent":p(()=>[b(c,{class:"html",lang:"html",code:_.value.webComponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(c,{class:"html",lang:"html",code:_.value.htmlBlueprint},null,8,["code"])]),_:1})}}}),xt=L({__name:"_tabbed-navigation-flat",setup(E){const n=[{label:"Active Tab",id:"tab-tnf-a",children:[{label:"Elem 1",id:"tab-tnf-a-1"},{label:"Elem 2",id:"tab-tnf-a-2"},{label:"Elem 3 more",id:"tab-tnf-a-3",children:[{label:"Elem 3.1",id:"tab-tnf-a-3-1"},{label:"Elem 3.2",id:"tab-tnf-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tnf-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tnf-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tnf-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tnf-a-3-3"},{label:"Elem 3.4",id:"tab-tnf-a-3-4"}]},{label:"Elem 4",id:"tab-tnf-a-4"}]},{label:"External Links",id:"tab-tnf-b",children:[{label:"Chi documentation in new tab",id:"tab-tnf-b-1"},{label:"Chi documentation in same tab",id:"tab-tnf-b-2"}]},{label:"Tab Link",id:"tab-tnf-c"},{label:"Tab Link",id:"tab-tnf-d"},{label:"Tab Link",id:"tab-tnf-e"},{label:"Tab Link",id:"tab-tnf-f"},{label:"Tab Link",id:"tab-tnf-g"},{label:"Tab Dropdown",id:"tab-h",children:[{label:"Element 1",id:"tab-h-1"},{label:"Element 2",id:"tab-h-2",children:[{label:"Elem 1",id:"tab-h-2-1"},{label:"Elem 2",id:"tab-h-2-2"},{label:"Elem 3 more",id:"tab-h-2-3",children:[{label:"Elem 3.1",id:"tab-h-2-3-1"},{label:"Elem 3.2",id:"tab-h-2-3-2"},{label:"Elem 3.3",id:"tab-h-2-3-3"}]},{label:"Elem 4",id:"tab-h-2-4"}]},{label:"Element 3",id:"tab-h-3"}]}],m=k(()=>({webcomponent:`<chi-tabs id="example__tabbed-navigation-flat" active-tab="tab-a" sliding-border></chi-tabs>

<script>
  document.querySelector('#example__tabbed-navigation-flat').tabs = [
    {
      label: 'Active Tab',
      id: 'tab-a',
      children: [
        {
          label: 'Elem 1',
          id: 'tab-a-1'
        },
        {
          label: 'Elem 2',
          id: 'tab-a-2'
        },
        {
          label: 'Elem 3 more',
          id: 'tab-a-3',
          children: [
            {
              label: 'Elem 3.1',
              id: 'tab-a-3-1'
            },
            {
              label: 'Elem 3.2',
              id: 'tab-a-3-2',
              children: [
                {
                  label: 'Elem 3.2.1',
                  id: 'tab-a-3-2-1'
                },
                {
                  label: 'Elem 3.2.2',
                  id: 'tab-a-3-2-2'
                },
                {
                  label: 'Elem 3.2.3',
                  id: 'tab-a-3-2-3'
                }
              ]
            },
            {
              label: 'Elem 3.3',
              id: 'tab-a-3-3'
            },
            {
              label: 'Elem 3.4',
              id: 'tab-a-3-4'
            }
          ]
        },
        {
          label: 'Elem 4',
          id: 'tab-a-4'
        }
      ]
    },
    {
      label: 'External Links',
      id: 'tab-b',
      children: [
        {
          id: 'tab-b-external-link-new',
          label: 'Chi documentation in new tab',
          href: 'https://lib.lumen.com/chi/'
        },
        {
          id: 'tab-b-external-link-same',
          label: 'Chi documentation in same tab',
          href: 'https://lib.lumen.com/chi/',
          target: '_self'
        },
      ]
    },
    {
      label: 'Tab Link',
      id: 'tab-c'
    },
    {
      label: 'Tab Link',
      id: 'tab-d'
    },
    {
      label: 'Tab Link',
      id: 'tab-e'
    },
    {
      label: 'Tab Link',
      id: 'tab-f'
    },
    {
      label: 'Tab Link',
      id: 'tab-g'
    },
    {
      label: 'Tab Dropdown',
      id: 'tab-h',
      children: [
        {
          label: 'Element 1',
          id: 'tab-h-1'
        },
        {
          label: 'Element 2',
          id: 'tab-h-2',
          children: [
            {
              label: 'Elem 1',
              id: 'tab-h-2-1'
            },
            {
              label: 'Elem 2',
              id: 'tab-h-2-2'
            },
            {
              label: 'Elem 3 more',
              id: 'tab-h-2-3',
              children: [
                {
                  label: 'Elem 3.1',
                  id: 'tab-h-2-3-1'
                },
                {
                  label: 'Elem 3.2',
                  id: 'tab-h-2-3-2'
                },
                {
                  label: 'Elem 3.3',
                  id: 'tab-h-2-3-3'
                }
              ]
            },
            {
              label: 'Elem 4',
              id: 'tab-h-2-4'
            }
          ]
        },
        {
          label: 'Element 3',
          id: 'tab-h-3'
        }
      ]
    }
  ];
<\/script>`,htmlblueprint:`<ul class="chi-tabs" id="example__tabbed-navigation-flat">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
${_([1,2])}
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">${d()}
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active Tab</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="https://lib.lumen.com/chi/" target="_blank">Chi documentation in new tab</a>
      <a class="chi-dropdown__menu-item" href="https://lib.lumen.com/chi/">Chi documentation in same tab</a>
    </div>
  </li>
${r()}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
${_([1,2,3])}
    </div>
  </li>
</ul>

<script>
  chi.navigation(document.getElementById('#example__tabbed-navigation-flat'));
<\/script>`})),r=()=>[1,2,3,4,5,6].map(()=>`  <li>
    <a href="#">Tab Link</a>
  </li>`).join(`
`),_=a=>a.map(l=>`      <a class="chi-dropdown__menu-item" href="#">Element ${l}</a>`).join(`
`),d=()=>[1,2,3,4].map(a=>`
          <a class="chi-dropdown__menu-item" href="#">Elem 3.${a}</a>`).join("");return(a,l)=>{const t=y,c=S,s=z;return o(),$(s,{title:"Flat",id:"tabbed-navigation-flat",additionalClasses:"-pb--4"},{example:p(()=>[e("chi-tabs",{tabs:n,"sliding-border":"","active-tab":"tab-tnf-a"})]),"code-webcomponent":p(()=>[b(t,{class:"html",lang:"html",code:m.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(c),b(t,{lang:"html",code:m.value.htmlblueprint},null,8,["code"])]),_:1})}}}),gt=L({__name:"_tabbed-navigation-solid",setup(E){const n=[{label:"Active Tab",id:"tab-tns-a",children:[{label:"Elem 1",id:"tab-tns-a-1"},{label:"Elem 2",id:"tab-tns-a-2"},{label:"Elem 3 more",id:"tab-tns-a-3",children:[{label:"Elem 3.1",id:"tab-tns-a-3-1"},{label:"Elem 3.2",id:"tab-tns-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tns-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tns-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tns-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tns-a-3-3"},{label:"Elem 3.4",id:"tab-tns-a-3-4"}]},{label:"Elem 4",id:"tab-tns-a-4"}]},{label:"Tab Link",id:"tab-tns-b"},{label:"Tab Link",id:"tab-tns-c"},{label:"Tab Link",id:"tab-tns-d"},{label:"Tab Link",id:"tab-tns-e"},{label:"Tab Dropdown",id:"tab-tns-f",children:[{label:"Element 1",id:"tab-tns-f-1"},{label:"Element 2",id:"tab-tns-f-2",children:[{label:"Elem 1",id:"tab-tns-f-2-1"},{label:"Elem 2",id:"tab-tns-f-2-2"},{label:"Elem 3 more",id:"tab-tns-f-2-3",children:[{label:"Elem 3.1",id:"tab-tns-f-2-3-1"},{label:"Elem 3.2",id:"tab-tns-f-2-3-2"},{label:"Elem 3.3",id:"tab-tns-f-2-3-3"}]},{label:"Elem 4",id:"tab-tns-f-2-4"}]},{label:"Element 3",id:"tab-tns-f-3"}]}],m=()=>[1,2,3,4,5,6].map(()=>`  <li>
    <a href="#">Tab Link</a>
  </li>`).join(`
`),r=a=>a.map(l=>`      <a class="chi-dropdown__menu-item" href="#">Element ${l}</a>`).join(`
`),_=()=>[1,2,3,4].map(a=>`
          <a class="chi-dropdown__menu-item" href="#">Elem 3.${a}</a>`).join(""),d={webcomponent:`<chi-tabs id="example__tabbed-navigation-solid" active-tab="tab-a" size="lg" solid></chi-tabs>

<script>
  document.querySelector('#example__tabbed-navigation-solid').tabs = [
    {
      label: 'Active Tab',
      id: 'tab-a',
      children: [
        {
          label: 'Elem 1',
          id: 'tab-a-1'
        },
        {
          label: 'Elem 2',
          id: 'tab-a-2'
        },
        {
          label: 'Elem 3 more',
          id: 'tab-a-3',
          children: [
            {
              label: 'Elem 3.1',
              id: 'tab-a-3-1'
            },
            {
              label: 'Elem 3.2',
              id: 'tab-a-3-2',
              children: [
                {
                  label: 'Elem 3.2.1',
                  id: 'tab-a-3-2-1'
                },
                {
                  label: 'Elem 3.2.2',
                  id: 'tab-a-3-2-2'
                },
                {
                  label: 'Elem 3.2.3',
                  id: 'tab-a-3-2-3'
                }
              ]
            },
            {
              label: 'Elem 3.3',
              id: 'tab-a-3-3'
            },
            {
              label: 'Elem 3.4',
              id: 'tab-a-3-4'
            }
          ]
        },
        {
          label: 'Elem 4',
          id: 'tab-a-4'
        }
      ]
    },
    {
      label: 'Tab Link',
      id: 'tab-b'
    },
    {
      label: 'Tab Link',
      id: 'tab-c'
    },
    {
      label: 'Tab Link',
      id: 'tab-d'
    },
    {
      label: 'Tab Link',
      id: 'tab-e'
    },
    {
      label: 'Tab Dropdown',
      id: 'tab-f',
      children: [
        {
          label: 'Element 1',
          id: 'tab-f-1'
        },
        {
          label: 'Element 2',
          id: 'tab-f-2',
          children: [
            {
              label: 'Elem 1',
              id: 'tab-f-2-1'
            },
            {
              label: 'Elem 2',
              id: 'tab-f-2-2'
            },
            {
              label: 'Elem 3 more',
              id: 'tab-f-2-3',
              children: [
                {
                  label: 'Elem 3.1',
                  id: 'tab-f-2-3-1'
                },
                {
                  label: 'Elem 3.2',
                  id: 'tab-f-2-3-2'
                },
                {
                  label: 'Elem 3.3',
                  id: 'tab-f-2-3-3'
                }
              ]
            },
            {
              label: 'Elem 4',
              id: 'tab-f-2-4'
            }
          ]
        },
        {
          label: 'Element 3',
          id: 'tab-f-3'
        }
      ]
    }
  ];
<\/script>`,htmlblueprint:`<ul class="chi-tabs -solid -border -lg" id="example__tabbed-navigation-solid">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
${r([1,2])}
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">${_()}
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${m()}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
${r([1,2,3])}
    </div>
  </li>
</ul>

<script>
  chi.navigation(document.getElementById('example__tabbed-navigation-solid'));
<\/script>`};return(a,l)=>{const t=y,c=S,s=z;return o(),$(s,{title:"Solid",id:"tabbed-navigation-solid",additionalClasses:"-pb--4"},{example:p(()=>[e("chi-tabs",{tabs:n,size:"lg",solid:"","sliding-border":"","active-tab":"tab-tns-a"})]),"code-webcomponent":p(()=>[b(t,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(c),b(t,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),$t={class:"chi-tabs chi-navigationExample",ref:"navigation-components-contained"},Tt={class:"chi-dropdown -active"},wt={class:"chi-dropdown__menu"},kt={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},Lt={class:"chi-dropdown__menu"},Et={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},Ct={class:"chi-dropdown"},yt={class:"chi-dropdown__menu"},zt={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},St=L({__name:"_components-contained",setup(E){const n=M("navigation-components-contained");D(()=>{n.value&&chi.navigation(n.value)});const m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],r=k(()=>({webcomponent:"",htmlblueprint:`<ul class="chi-tabs" id="navigation-components-contained">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger -animate" href="#">Active Tab</a>
    <div class="chi-dropdown__menu" x-placement="bottom-start">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a><a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          ${d([1,2,3,4],"Elem 3.")}
        </div>
      </div><a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${_.value}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Link</a>
    <div class="chi-dropdown__menu">
      ${d([1,2,3],"Element ")}
    </div>
  </li>
</ul>

<script>chi.navigation(document.getElementById('navigation-components-contained'));<\/script>`})),_=k(()=>[1,2].map(()=>`  <li>
    <a href="#">Tab Link</a>
  </li>`).join(`
`)),d=(a,l)=>a.map(t=>`<a class="chi-dropdown__menu-item" href="#">${l}${t}</a>`).join("");return(a,l)=>{const t=y,c=S,s=z;return o(),$(s,{title:"Components contained",id:"components-contained",tabs:m,additionalClasses:"-pb--4"},{"example-description":p(()=>l[0]||(l[0]=[e("p",{class:"-text"},[A("As navigation component is built from other primitive Chi components, most of the components behavior can be replicated on the navigation component. For example, you can use the "),e("code",null,"-animate"),A(" class on the dropdowns to make the chevron rotate when activated.")],-1)])),example:p(()=>[e("ul",$t,[e("li",Tt,[l[3]||(l[3]=e("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Active Tab",-1)),e("div",wt,[(o(),h(f,null,x([1,2],i=>e("a",kt,"Elem "+v(i),1)),64)),e("div",null,[l[1]||(l[1]=e("a",{class:"chi-dropdown__menu-item chi-dropdown__trigger -animate",href:"#"},"Elem 3 more",-1)),e("div",Lt,[(o(),h(f,null,x([1,2,3,4],i=>e("a",Et,"Elem 3."+v(i),1)),64))])]),l[2]||(l[2]=e("a",{class:"chi-dropdown__menu-item",href:"#"},"Elem 4",-1))])]),(o(),h(f,null,x([1,2],i=>e("li",null,l[4]||(l[4]=[e("a",{href:"#exampleHashTarget"},"Tab Link",-1)]))),64)),e("li",Ct,[l[5]||(l[5]=e("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Tab Link",-1)),e("div",yt,[(o(),h(f,null,x([1,2,3],i=>e("a",zt,"Element "+v(i),1)),64))])])],512)]),"code-webcomponent":p(()=>[b(t,{class:"html",lang:"html",code:r.value.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(c),b(t,{lang:"html",code:r.value.htmlblueprint},null,8,["code"])]),_:1})}}}),Bt={class:"chi-tabs chi-navigationExample chi-customExample"},Ht=["href"],At=L({__name:"_wait-for-animation",setup(E){const n=H("enabled"),m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],r=[{href:"?tab=1",text:"Tab Link",active:!0},{href:"?tab=2",text:"Tab Link"},{href:"?tab=3",text:"Tab Link"},{href:"?tab=4",text:"Tab Link"},{href:"?tab=5",text:"Tab Link"},{href:"?tab=6",text:"Tab Link"}],_=k(()=>r.map((t,c)=>`  <li${c===0?' class="-active"':""}>
    <a href="/">Tab Link</a>
  </li>`).join(`
`)),d=H([{active:!0,id:"enabled",label:"Enabled"},{id:"disabled",label:"Disabled"}]),a={enabled:{webComponent:{code:""},htmlBlueprint:{code:`<ul id="navigationexample-4-enabled" class="chi-tabs">
${_.value}
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-enabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: true}
  );
<\/script>`}},disabled:{webComponent:{code:""},htmlBlueprint:{code:`<ul id="navigationexample-4-disabled" class="chi-tabs">
${_.value}
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-disabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: false}
  );
<\/script>`}}},l=t=>{n.value=t.id};return(t,c)=>{const s=S,i=y,u=z;return o(),$(u,{title:"Wait for animations",id:"wait-for-animations",tabs:m,"head-tabs":d.value,additionalClasses:"-pb--4",onChiHeadTabsChange:l},{"example-description":p(()=>c[0]||(c[0]=[e("p",{class:"-text"},[A("Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL. For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this component has the option to wait for the animation to finish and, then, it will redirect the user to the destination URL. You can enable this behavior by setting the "),e("code",null,"waitForAnimations"),A(" option to "),e("code",null,"true"),A(".")],-1)])),example:p(()=>[e("ul",Bt,[(o(),h(f,null,x(r,C=>e("li",{class:g([C.active?"-active":""])},[e("a",{href:`#${C.href}`},v(C.text),9,Ht)],2)),64))])]),"code-htmlblueprint":p(()=>[b(s),b(i,{lang:"html",code:a[n.value].htmlBlueprint.code},null,8,["code"])]),_:1},8,["head-tabs"])}}}),It={class:"-p--3"},jt={class:"chi-tabs -vertical -icons -list -tree -lg",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},Ft=["href","aria-controls"],Nt={class:"chi-tabs_item-title"},Jt={key:0,class:"chi-tabs_item-text"},Mt={key:0,class:"chi-tabs__subtabs"},Dt={class:"chi-tabs_item",href:"#"},Vt={class:"chi-tabs_item-title"},Wt={key:0,class:"chi-tabs_item-text"},qt={key:0,class:"chi-tabs__subtabs"},Rt={class:"chi-tabs_item",href:"#"},Xt={class:"chi-tabs_item-title"},Ut={key:0,class:"chi-tabs_item-text"},N=`<a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Tabs">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>`,F=`<a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Tabs">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>`,J=`<a class="chi-tabs_item" href="#">
              <span class="chi-tabs_item-title">Subtab Link</span>
              <span class="chi-tabs_item-text">Subtab description</span>
              <button class="chi-button -icon -flat -no-hover" aria-label="Tabs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </a>`,Yt=L({__name:"_vertical-tree-tabs",setup(E){const n=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],m=[{href:"",text:"Active Tab",active:!0},{href:"",text:"Tab Link",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}],r={webComponent:"",htmlBlueprint:`<ul class="chi-tabs -vertical -icons -list -tree -lg">
  <li class="-active">
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Active Tab</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Tabs">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>
  </li>
  <li>
    ${N}
    <ul class="chi-tabs__subtabs">
      <li>
        ${F}
      </li>
      <li>
        ${F}
        <ul class="chi-tabs__subtabs">
          <li>
            ${J}
          </li>
          <li>
            ${J}
          </li>
        </ul>
      </li>
      <li>
        ${F}
      </li>
    </ul>
  </li>
  <li>
    ${N}
  </li>
</ul>`};return(_,d)=>{const a=y,l=z;return o(),$(l,{title:"Vertical Tree Tabs",id:"vertical-tree-tabs",tabs:n},{example:p(()=>[e("div",It,[e("ul",jt,[(o(),h(f,null,x(m,t=>e("li",{class:g([t.active?"-active":""])},[e("a",{class:"chi-tabs_item",href:`#${t.href}`,role:"tab","aria-selected":"true","aria-controls":t.href},[d[0]||(d[0]=e("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),e("span",Nt,v(t.text),1),t.description?(o(),h("span",Jt,v(t.description),1)):T("",!0),d[1]||(d[1]=e("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Tabs"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))],8,Ft),t.subLinks?(o(),h("ul",Mt,[(o(!0),h(f,null,x(t.subLinks,c=>(o(),h("li",{class:g([c.active?"-active":""])},[e("a",Dt,[e("span",Vt,v(c.text),1),c.description?(o(),h("span",Wt,v(c.description),1)):T("",!0),d[2]||(d[2]=e("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Tabs"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))]),c.subLinks?(o(),h("ul",qt,[(o(!0),h(f,null,x(c.subLinks,s=>(o(),h("li",{class:g([s.active?"-active":""])},[e("a",Rt,[e("span",Xt,v(s.text),1),s.description?(o(),h("span",Ut,v(s.description),1)):T("",!0),d[3]||(d[3]=e("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Tabs"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))])],2))),256))])):T("",!0)],2))),256))])):T("",!0)],2)),64))])])]),"code-webcomponent":p(()=>[b(a,{class:"html",lang:"html",code:r.webComponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[b(a,{class:"html",lang:"html",code:r.htmlBlueprint},null,8,["code"])]),_:1})}}}),Zt=L({__name:"index",setup(E){const n=q();return(m,r)=>{const _=W;return o(),h("div",null,[r[2]||(r[2]=e("h2",null,"Examples",-1)),r[3]||(r[3]=e("h3",null,"Horizontal",-1)),b(_,null,{default:p(()=>[["portal","colt","brightspeed"].includes(I(n))?(o(),$(K,{key:0})):T("",!0),["lumen","centurylink"].includes(I(n))?(o(),$(le,{key:1})):T("",!0),b(ve)]),_:1}),r[4]||(r[4]=e("h3",null,"Vertical",-1)),b(_,null,{default:p(()=>[["lumen","centurylink"].includes(I(n))?(o(),$(oe,{key:0})):T("",!0),["portal","colt","brightspeed"].includes(I(n))?(o(),$(Z,{key:1})):T("",!0),b(pe),["lumen","centurylink"].includes(I(n))?(o(),$(we,{key:2})):T("",!0)]),_:1}),r[5]||(r[5]=e("h2",null,"Tabbed navigation bar",-1)),r[6]||(r[6]=e("p",{class:"-text"},[A("The navigation component is a combination of Chi tabs and dropdowns components. You must use "),e("code",null,"chi.navigation"),A(" function to instantiate the whole group of components, and there is no need for instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the descendants' tabs and dropdowns.")],-1)),r[7]||(r[7]=e("p",{class:"-text"},"Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu, or a wait-for-animation option.",-1)),r[8]||(r[8]=e("p",{class:"-text"},[A("To control the navigation, the web component has support for "),e("code",null,"href"),A(" property for each of the tabs, or any of it's children. By default, any external link is opened in a new window, although it can be controlled through the "),e("code",null,"target"),A(" property.")],-1)),b(_,null,{default:p(()=>[b(xt),b(gt),["lumen","centurylink"].includes(I(n))?(o(),$(St,{key:0})):T("",!0),["lumen","centurylink"].includes(I(n))?(o(),$(At,{key:1})):T("",!0),b(et),["portal","colt","brightspeed"].includes(I(n))?(o(),$(Yt,{key:2})):T("",!0)]),_:1}),["lumen","centurylink"].includes(I(n))?(o(),h(f,{key:0},[r[0]||(r[0]=e("h2",null,"Icons",-1)),b(Ee),b(We),b(Ne),b(Ye),b(Oe),r[1]||(r[1]=e("h2",null,"Additional Sizes",-1)),b(tt),b(ft)],64)):T("",!0)])}}});export{Zt as _};
