var re=Object.defineProperty;var be=(t,n,a)=>n in t?re(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;var h=(t,n,a)=>be(t,typeof n!="symbol"?n+"":n,a);import{V as L,d as de,N as w}from"./uJTUijt2.js";import{o as c,f as T,w as u,a as s,n as v,c as b,F as f,i as $,t as _,b as m,h as x,d as z,g as he,r as g}from"./B5CYXVwa.js";import{_ as S}from"./D8GK0F__.js";import{_ as H}from"./BLbnEGma.js";import{_ as E}from"./DKu8Jd2y.js";import{_ as C}from"./DlAUqK2U.js";import pe from"./C0Uyl5VI.js";import me from"./BF_Slpxr.js";import"./2EwpEKcw.js";import{_ as ue}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var _e=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,K=(t,n,a,i)=>{for(var e=i>1?void 0:i?ve(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&_e(n,a,e),e};let y=class extends L{constructor(){super(...arguments);h(this,"isPortal");h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeTab","tab-a");h(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);h(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__horizontal-flat" sliding-border></chi-tabs>

${this.generateTabsContentHtml(!0)}

<script>
  const tabsElement = document.querySelector('example__horizontal-flat');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a'
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">
${this.generateTabsHtml()}
</ul>

${this.generateTabsContentHtml(!1)}

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`}}chiTabChange(a){this.activeTab=a.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:a,id:i},e)=>{const o=e===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${i}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${i}">${a}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(a){return this.tabsContent.map(({text:i,id:e},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${a?`${e}_content`:e}" role="tabpanel">${i}</div>`).join(`
`)}mounted(){const a=document.querySelector("#example__horizontal-flat");a&&(a.tabs=this.tabLinks)}};K([de()],y.prototype,"isPortal",2);y=K([w({})],y);const fe=["active-tab"],$e={class:"-py--3"},Te={class:"-text"};function ge(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Flat",id:"horizontal-flat",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",{class:v(["-px--3 -bg--white",t.isPortal?"-pt--2":""])},[s("chi-tabs",{"active-tab":t.activeTab,id:"example__horizontal-flat","on:chiTabChange":n[0]||(n[0]=(...d)=>t.chiTabChange&&t.chiTabChange(...d)),"sliding-border":""},null,40,fe),s("div",$e,[(c(!0),b(f,null,$(t.tabsContent,d=>(c(),b("div",{class:v(["chi-tabs-panel",t.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",Te,_(d.text),1)],2))),256))])],2)]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xe=C(y,[["render",ge]]);var Le=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Ce=(t,n,a,i)=>{for(var e=i>1?void 0:i?we(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Le(n,a,e),e};let P=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeTab","tab-a");h(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);h(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__vertical-flat" vertical sliding-border></chi-tabs>

${this.generateTabsContentHtml(!0)}

<script>
  const tabsElement = document.querySelector('example__vertical-flat');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a'
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul class="chi-tabs -vertical" id="example-vertical-base" role="tablist" aria-label="chi-tabs-vertical">
${this.generateTabsHtml()}
</ul>

${this.generateTabsContentHtml(!1)}

<script>chi.tab(document.getElementById('example-vertical-base'));<\/script>`}}chiTabChange(a){this.activeTab=a.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:a,id:i},e)=>{const o=e===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${i}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${i}">${a}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(a){return this.tabsContent.map(({text:i,id:e},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${a?`${e}_content`:e}" role="tabpanel">${i}</div>`).join(`
`)}mounted(){const a=document.querySelector("#example__vertical-flat");a&&(a.tabs=this.tabLinks)}};P=Ce([w({})],P);const Ee={class:"chi-grid -no-gutter -bg--white"},Se={class:"chi-col -w--6 -w-sm--4 -p--3"},He=["active-tab"],ze={class:"chi-col -p--3"},ke={class:"-text"};function ye(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Flat",id:"vertical-flat",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",Ee,[s("div",Se,[s("chi-tabs",{"active-tab":t.activeTab,id:"example__vertical-flat",vertical:"","on:chiTabChange":n[0]||(n[0]=(...d)=>t.chiTabChange&&t.chiTabChange(...d)),"sliding-border":""},null,40,He)]),s("div",ze,[(c(!0),b(f,null,$(t.tabsContent,d=>(c(),b("div",{class:v(["chi-tabs-panel",t.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",ke,_(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pe=C(P,[["render",ye]]);var Oe=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,je=(t,n,a,i)=>{for(var e=i>1?void 0:i?Be(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Oe(n,a,e),e};let O=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeTab","tab-a");h(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);h(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__vertical-solid" size='xl' solid vertical sliding-border></chi-tabs>

${this.generateTabsContentHtml(!0)}

<script>
  const tabsElement = document.querySelector('#example__solid');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a'
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul class="chi-tabs -vertical -solid -xl" id="example-vertical-solid-bordered" role="tablist" aria-label="chi-tabs-vertical">
${this.generateTabsHtml()}
</ul>

${this.generateTabsContentHtml(!1)}

<script>chi.tab(document.getElementById('example-vertical-solid-bordered'));<\/script>`}}chiTabChange(a){this.activeTab=a.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:a,id:i},e)=>{const o=e===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${i}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${i}">${a}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(a){return this.tabsContent.map(({text:i,id:e},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${a?`${e}_content`:e}" role="tabpanel">${i}</div>`).join(`
`)}mounted(){const a=document.querySelector("#example__vertical-solid");a&&(a.tabs=this.tabLinks)}};O=je([w({})],O);const Ae={class:"chi-grid -no-gutter -bg--white"},De={class:"chi-col -w--6 -w-sm--4 -p--3"},Fe=["active-tab"],Ie={class:"chi-col -p--3"},Ve={class:"-text"};function Ne(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Solid",id:"vertical-solid",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",Ae,[s("div",De,[s("chi-tabs",{"active-tab":t.activeTab,id:"example__vertical-solid",size:"xl",solid:"",vertical:"","sliding-border":"","on:chiTabChange":n[0]||(n[0]=(...d)=>t.chiTabChange&&t.chiTabChange(...d))},null,40,Fe)]),s("div",Ie,[(c(!0),b(f,null,$(t.tabsContent,d=>(c(),b("div",{class:v(["chi-tabs-panel",t.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",Ve,_(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=C(O,[["render",Ne]]);var Me=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Je=(t,n,a,i)=>{for(var e=i>1?void 0:i?qe(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Me(n,a,e),e};let B=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeTab","tab-a");h(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);h(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__horizontal-solid" size="lg" solid sliding-border></chi-tabs>

${this.generateTabsContentHtml(!0)}

<script>
  const tabsElement = document.querySelector('#example__solid');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a'
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul class="chi-tabs -solid -lg -border" id="example-horizontal-solid-bordered" role="tablist" aria-label="chi-tabs-horizontal">
${this.generateTabsHtml()}
</ul>

${this.generateTabsContentHtml(!1)}

<script>chi.tab(document.getElementById('example-horizontal-solid-bordered'));<\/script>`}}chiTabChange(a){this.activeTab=a.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:a,id:i},e)=>{const o=e===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${i}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${i}">${a}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(a){return this.tabsContent.map(({text:i,id:e},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${a?`${e}_content`:e}" role="tabpanel">${i}</div>`).join(`
`)}mounted(){const a=document.querySelector("#example__horizontal-solid");a&&(a.tabs=this.tabLinks)}};B=Je([w({})],B);const Xe={class:"-px--3 -pt--2 -bg--white"},Re=["active-tab"],Ue={class:"-py--3"},Ye={class:"-text"};function Ke(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Solid",id:"horizontal-solid",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",Xe,[s("chi-tabs",{"active-tab":t.activeTab,id:"example__horizontal-solid",size:"lg","sliding-border":"",solid:"","on:chiTabChange":n[0]||(n[0]=(...d)=>t.chiTabChange&&t.chiTabChange(...d))},null,40,Re),s("div",Ue,[(c(!0),b(f,null,$(t.tabsContent,d=>(c(),b("div",{class:v(["chi-tabs-panel",t.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",Ye,_(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ge=C(B,[["render",Ke]]);var Qe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,et=(t,n,a,i)=>{for(var e=i>1?void 0:i?Ze(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Qe(n,a,e),e};let j=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{id:"webcomponent",label:"Web Component",disabled:!0},{id:"htmlblueprint",label:"HTML Blueprint",active:!0}]);h(this,"tabLinks",[{id:"a2",label:"Tab a",active:!0},{id:"b2",label:"Tab b"},{id:"c2",label:"Tab c"}]);h(this,"tabsContent",[{id:"a2",text:"Content for tab a",active:!0},{id:"b2",text:"Content for tab b"},{id:"c2",text:"Content for tab c"}])}get codeSnippets(){return{webComponent:"",htmlblueprint:`<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">
${this.generateTabsHtml()}
  <li><a href="https://lib.lumen.com/chi/" target="_self">External Link</a></li>
</ul>

${this.generateTabsContentHtml()}
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`}}generateTabsHtml(){return this.tabLinks.map(({label:a,id:i},e)=>{const o=e===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${i}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${i}">${a}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(){return this.tabsContent.map(({text:a,id:i},e)=>`<div class="chi-tabs-panel${e===0?" -active":""}" id="${i}" role="tabpanel">
  <p class="-text">${a}</p>
</div>`).join(`
`)}mounted(){chi.tab(document.getElementById("example-default-link-behavior"))}};j=et([w({})],j);const tt=s("p",{class:"-text"},"By default, Chi JavaScript enabled tabs will ignore default link behavior. To preserve it, specify a target property on the link.",-1),at={class:"chi-tabs",id:"example-default-link-behavior",role:"tablist","aria-label":"example-default-link-behavior"},it=["href","aria-controls"],nt=s("li",null,[s("a",{href:"https://lib.lumen.com/chi/",target:"_self"},"External Link")],-1),st={class:"-py--2"},lt=["id"],ot={class:"-text"};function ct(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Keep default link behavior",id:"link-default-behavior",tabs:t.exampleTabs,additionalClasses:"-pb--4"},{"example-description":u(()=>[tt]),example:u(()=>[s("ul",at,[(c(!0),b(f,null,$(t.tabLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",{href:`#${d.id}`,role:"tab","aria-selected":"true","aria-controls":d.id},_(d.label),9,it)],2))),256)),nt]),s("div",st,[(c(!0),b(f,null,$(t.tabsContent,d=>(c(),b("div",{class:v(["chi-tabs-panel",[d.active?"-active":""]]),id:d.id,role:"tabpanel"},[s("div",ot,_(d.text),1)],10,lt))),256))])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const rt=C(j,[["render",ct]]);var bt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,ht=(t,n,a,i)=>{for(var e=i>1?void 0:i?dt(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&bt(n,a,e),e};let A=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeHeadTab","base");h(this,"tabLinks",[{href:"#",text:"Active Tab",active:!0},{href:"#",text:"Tab Link"},{href:"#",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -icons">
${this.tabsLinksHtml}
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -inverse -icons">
${this.tabsLinksHtml}
</ul>`}}}]}get tabsLinksHtml(){return this.tabLinks.map(({text:a,active:i})=>`  <li${i?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${a}</span>
    </a>
  </li>`).join(`
`)}get isInverse(){return this.activeHeadTab==="inverse"}changeHeadTab(a){this.activeHeadTab=a.id}};A=ht([w({})],A);const pt=["id"],mt=["href","aria-controls"],ut=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1);function _t(t,n,a,i,e,o){const l=E;return c(),T(l,{title:"Horizontal tabs with icons",id:"horizontal-tabs-with-icons",tabs:t.exampleTabs,titleSize:"h4",headTabs:t.headTabs,onChiHeadTabsChange:t.changeHeadTab,additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",{class:v(["-px--3",t.isInverse?"-bg--black":"-bg--white"])},[s("ul",{class:v(["chi-tabs -icons",[t.isInverse?"-inverse":""]]),id:`example-horizontal-with-icons-${t.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-horizontal"},[(c(!0),b(f,null,$(t.tabLinks,p=>(c(),b("li",{class:v([p.active?"-active":""])},[s("a",{href:`#${p.href}`,role:"tab","aria-selected":"true","aria-controls":p.href},[ut,s("span",null,_(p.text),1)],8,mt)],2))),256))],10,pt)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const vt=C(A,[["render",_t]]);var ft=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Tt=(t,n,a,i)=>{for(var e=i>1?void 0:i?$t(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&ft(n,a,e),e};let D=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{href:"",text:"Tab Link",description:"Tab description",active:!0},{href:"",text:"Active Tab",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}])}get codeSnippets(){return{webComponent:"",htmlBlueprint:`<ul class="chi-tabs -vertical -icons -list">
  <li class="-active">
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>
  </li>
  <li>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Active Tab</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>
    <ul class="chi-tabs__subtabs">
${this.subTabsLinksHtml}
    </ul>
  </li>
  <li>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>
  </li>
</ul>`}}get subTabsLinksHtml(){return this.tabLinks.map(()=>`      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
        </a>
      </li>`).join(`
`)}};D=Tt([w({})],D);const gt={class:"-bg--white"},xt={class:"-p--3"},Lt={class:"chi-tabs -icons -vertical -list",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},wt=["href","aria-controls"],Ct=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1),Et={class:"chi-tabs_item-title"},St={key:0,class:"chi-tabs_item-text"},Ht={key:0,class:"chi-tabs__subtabs"},zt={class:"chi-tabs_item",href:"#"},kt={class:"chi-tabs_item-title"},yt={key:0,class:"chi-tabs_item-text"};function Pt(t,n,a,i,e,o){const l=S,p=E;return c(),T(p,{title:"Vertical tabs with icons and description",id:"vertical-tabs-with-icons-and-description",titleSize:"h4",tabs:t.exampleTabs,additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",gt,[s("div",xt,[s("ul",Lt,[(c(!0),b(f,null,$(t.tabLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",{class:"chi-tabs_item",href:`#${r.href}`,role:"tab","aria-selected":"true","aria-controls":r.href},[Ct,s("span",Et,_(r.text),1),r.description?(c(),b("span",St,_(r.description),1)):x("",!0)],8,wt),r.subLinks?(c(),b("ul",Ht,[(c(!0),b(f,null,$(r.subLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",zt,[s("span",kt,_(d.text),1),d.description?(c(),b("span",yt,_(d.description),1)):x("",!0)])],2))),256))])):x("",!0)],2))),256))])])])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ot=C(D,[["render",Pt]]);var Bt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,At=(t,n,a,i)=>{for(var e=i>1?void 0:i?jt(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Bt(n,a,e),e};let F=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeHeadTab","base");h(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical -icons">
${this.tabsLinksHtml}
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical -inverse -icons">
${this.tabsLinksHtml}
</ul>`}}}]}get tabsLinksHtml(){return this.tabLinks.map(({text:n,active:a})=>`  <li${a?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${n}</span>
    </a>
  </li>`).join(`
`)}get isInverse(){return this.activeHeadTab==="inverse"}changeHeadTab(n){this.activeHeadTab=n.id}};F=At([w({})],F);const Dt=["id"],Ft=["href","aria-controls"],It=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1),Vt={key:0,class:"chi-tabs__subtabs"},Nt={href:"#"};function Wt(t,n,a,i,e,o){const l=E;return c(),T(l,{title:"Vertical tabs with icons",id:"vertical-tabs-with-icons",tabs:t.exampleTabs,headTabs:t.headTabs,titleSize:"h4",onChiHeadTabsChange:t.changeHeadTab,additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",{class:v(["-p--3",t.isInverse?"-bg--black":"-bg--white"])},[s("ul",{class:v(["chi-tabs -icons -vertical",[t.isInverse?"-inverse":""]]),id:`example-vertical-with-icons-${t.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(c(!0),b(f,null,$(t.tabLinks,p=>(c(),b("li",{class:v([p.active?"-active":""])},[s("a",{href:`#${p.href}`,role:"tab","aria-selected":"true","aria-controls":p.href},[It,s("span",null,_(p.text),1)],8,Ft),p.subLinks?(c(),b("ul",Vt,[(c(!0),b(f,null,$(p.subLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",Nt,_(r.text),1)],2))),256))])):x("",!0)],2))),256))],10,Dt)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const Mt=C(F,[["render",Wt]]);var qt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Xt=(t,n,a,i)=>{for(var e=i>1?void 0:i?Jt(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&qt(n,a,e),e};let I=class extends L{constructor(){super(...arguments);h(this,"activeHeadTab","base");h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab link"},{href:"",text:"Tab link"}]);h(this,"headTabs",[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
${this.tabsLinksHtml}
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -inverse -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
${this.tabsLinksHtml}
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`}}}])}get isInverse(){return this.activeHeadTab==="inverse"}get tabsLinksHtml(){return this.tabLinks.map((a,i)=>`      <li${i===0?' class="-active"':""}>
        <a href="#">Subtab Link</a>
      </li>`).join(`
`)}changeHeadTab(a){this.activeHeadTab=a.id}};I=Xt([w({})],I);const Rt=["id"],Ut=["href","aria-controls"],Yt={key:0,class:"chi-tabs__subtabs"},Kt={href:"#"};function Gt(t,n,a,i,e,o){const l=E;return c(),T(l,{title:"Vertical Subtabs",id:"vertical-subtabs",additionalClasses:"-bg--grey-20",tabs:t.exampleTabs,headTabs:t.headTabs,onChiHeadTabsChange:t.changeHeadTab},{example:u(()=>[s("div",{class:v(["-p--3",t.isInverse?"-bg--black":"-bg--white"])},[s("ul",{class:v(["chi-tabs -vertical",[t.isInverse?"-inverse":""]]),id:`example-vertical-with-icons-${t.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(c(!0),b(f,null,$(t.tabLinks,p=>(c(),b("li",{class:v([p.active?"-active":""])},[s("a",{href:`#${p.href}`,role:"tab","aria-selected":"true","aria-controls":p.href},_(p.text),9,Ut),p.subLinks?(c(),b("ul",Yt,[(c(!0),b(f,null,$(p.subLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",Kt,_(r.text),1)],2))),256))])):x("",!0)],2))),256))],10,Rt)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const Qt=C(I,[["render",Gt]]);var Zt=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,ta=(t,n,a,i)=>{for(var e=i>1?void 0:i?ea(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Zt(n,a,e),e};let V=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"activeTab","tab-a");h(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__bordered" border sliding-border></chi-tabs>

<script>
  const tabsElement = document.querySelector('example__bordered');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a'
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      }
    ];
  }
<\/script>`,htmlblueprint:`<ul class="chi-tabs -border">
${this.generateTabsHtml()}
</ul>`}}chiTabChange(a){this.activeTab=a.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:a,id:i},e)=>{const o=e===0;return`  <li${o?' class="-active"':""}>
    <a href="#">${o?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)}mounted(){const a=document.querySelector("#example__bordered");a&&(a.tabs=this.tabLinks)}};V=ta([w({})],V);const aa={class:"-p--3 -bg--white"},ia=["active-tab"];function na(t,n,a,i,e,o){const l=S,p=E;return c(),T(p,{title:"Bordered",id:"bordered",additionalClasses:"-bg--grey-20",tabs:t.exampleTabs},{example:u(()=>[s("div",aa,[s("chi-tabs",{"active-tab":t.activeTab,id:"example__bordered",border:"","on:chiTabChange":n[0]||(n[0]=(...r)=>t.chiTabChange&&t.chiTabChange(...r)),"sliding-border":""},null,40,ia)])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const sa=C(V,[["render",na]]);var la=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,ca=(t,n,a,i)=>{for(var e=i>1?void 0:i?oa(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&la(n,a,e),e};let N=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);h(this,"sizes",[{name:"X-small",value:"xs"},{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"}])}get codeSnippets(){return{webComponent:this.webComponentHtml,htmlBlueprint:this.blueprintHtml}}get tabsHtml(){return this.tabLinks.map((a,i)=>{const e=i===0;return`  <li${e?' class="-active"':""}>
    <a href="#">${e?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)}get webComponentHtml(){return this.sizes.map(({name:a,value:i})=>`<!-- ${a} -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-${i}"${i==="md"?"":` size="${i}`} sliding-border></chi-tabs>`).join(`

`)}get blueprintHtml(){return this.sizes.map(({name:a,value:i})=>`<!-- ${a} -->
<ul class="chi-tabs${i==="md"?"":` -${i}`}">
${this.tabsHtml}
</ul>`).join(`

`)}mounted(){const a=document.querySelector("#example__additional-sizes-horizontal-xs"),i=document.querySelector("#example__additional-sizes-horizontal-sm"),e=document.querySelector("#example__additional-sizes-horizontal-md"),o=document.querySelector("#example__additional-sizes-horizontal-lg");a&&(a.tabs=this.tabLinks),i&&(i.tabs=this.tabLinks),e&&(e.tabs=this.tabLinks),o&&(o.tabs=this.tabLinks)}};N=ca([w({})],N);const ra=s("p",{class:"-text--bold"},"X-small",-1),ba=s("div",{class:"chi-divider -mb--2"},null,-1),da=s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-xs",size:"xs","sliding-border":""},null,-1),ha=s("p",{class:"-text--bold -mt--6"},"Small",-1),pa=s("div",{class:"chi-divider -mb--2"},null,-1),ma=s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-sm",size:"sm","sliding-border":""},null,-1),ua=s("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1),_a=s("div",{class:"chi-divider -mb--2"},null,-1),va=s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-md","sliding-border":""},null,-1),fa=s("p",{class:"-text--bold -mt--6"},"Large",-1),$a=s("div",{class:"chi-divider -mb--2"},null,-1),Ta=s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-lg",size:"lg","sliding-border":""},null,-1);function ga(t,n,a,i,e,o){const l=S,p=E;return c(),T(p,{title:"Horizontal",id:"additional-sizes-horizontal",tabs:t.exampleTabs,additionalClasses:"-pb--4",titleSize:"h4"},{example:u(()=>[ra,ba,da,ha,pa,ma,ua,_a,va,fa,$a,Ta]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const xa=C(N,[["render",ga]]);var La=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Ca=(t,n,a,i)=>{for(var e=i>1?void 0:i?wa(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&La(n,a,e),e};let W=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}]);h(this,"sizes",[{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"},{name:"X-Large",value:"xl"}])}get codeSnippets(){return{webComponent:"",htmlBlueprint:this.tabsHtml}}get subTabsHtml(){return this.tabLinks.map((a,i)=>`      <li${i===0?' class="-active"':""}>
        <a href="#">Subtab Link</a>
      </li>`).join(`
`)}get tabsHtml(){return this.sizes.map(({name:a,value:i})=>`<!-- ${a} -->
<ul class="chi-tabs -vertical${i==="md"?"":` -${i}`}">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
${this.subTabsHtml}
    </ul>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>`).join(`

`)}};W=Ca([w({})],W);const Ea=s("p",{class:"-text--bold"},"Small",-1),Sa=s("div",{class:"chi-divider -mb--2"},null,-1),Ha={class:"chi-tabs -vertical -sm"},za=["href","aria-controls"],ka={key:0,class:"chi-tabs__subtabs"},ya={href:"#"},Pa=s("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1),Oa=s("div",{class:"chi-divider -mb--2"},null,-1),Ba={class:"chi-tabs -vertical"},ja=["href","aria-controls"],Aa={key:0,class:"chi-tabs__subtabs"},Da={href:"#"},Fa=s("p",{class:"-text--bold -mt--6"},"Large",-1),Ia=s("div",{class:"chi-divider -mb--2"},null,-1),Va={class:"chi-tabs -vertical -lg"},Na=["href","aria-controls"],Wa={key:0,class:"chi-tabs__subtabs"},Ma={href:"#"},qa=s("p",{class:"-text--bold -mt--6"},"X-Large",-1),Ja=s("div",{class:"chi-divider -mb--2"},null,-1),Xa={class:"chi-tabs -vertical -xl"},Ra=["href","aria-controls"],Ua={key:0,class:"chi-tabs__subtabs"},Ya={href:"#"};function Ka(t,n,a,i,e,o){const l=S,p=E;return c(),T(p,{title:"Vertical",id:"additional-sizes-vertical",tabs:t.exampleTabs,additionalClasses:"-pb--4",titleSize:"h4"},{example:u(()=>[Ea,Sa,s("ul",Ha,[(c(!0),b(f,null,$(t.tabLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",{href:`#${r.href}`,role:"tab","aria-selected":"true","aria-controls":r.href},_(r.text),9,za),r.subLinks?(c(),b("ul",ka,[(c(!0),b(f,null,$(r.subLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",ya,_(d.text),1)],2))),256))])):x("",!0)],2))),256))]),Pa,Oa,s("ul",Ba,[(c(!0),b(f,null,$(t.tabLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",{href:`#${r.href}`,role:"tab","aria-selected":"true","aria-controls":r.href},_(r.text),9,ja),r.subLinks?(c(),b("ul",Aa,[(c(!0),b(f,null,$(r.subLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",Da,_(d.text),1)],2))),256))])):x("",!0)],2))),256))]),Fa,Ia,s("ul",Va,[(c(!0),b(f,null,$(t.tabLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",{href:`#${r.href}`,role:"tab","aria-selected":"true","aria-controls":r.href},_(r.text),9,Na),r.subLinks?(c(),b("ul",Wa,[(c(!0),b(f,null,$(r.subLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",Ma,_(d.text),1)],2))),256))])):x("",!0)],2))),256))]),qa,Ja,s("ul",Xa,[(c(!0),b(f,null,$(t.tabLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",{href:`#${r.href}`,role:"tab","aria-selected":"true","aria-controls":r.href},_(r.text),9,Ra),r.subLinks?(c(),b("ul",Ua,[(c(!0),b(f,null,$(r.subLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",Ya,_(d.text),1)],2))),256))])):x("",!0)],2))),256))])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ga=C(W,[["render",Ka]]);var Qa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,ei=(t,n,a,i)=>{for(var e=i>1?void 0:i?Za(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Qa(n,a,e),e};let M=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{label:"Active Tab",id:"tab-tnf-a",children:[{label:"Elem 1",id:"tab-tnf-a-1"},{label:"Elem 2",id:"tab-tnf-a-2"},{label:"Elem 3 more",id:"tab-tnf-a-3",children:[{label:"Elem 3.1",id:"tab-tnf-a-3-1"},{label:"Elem 3.2",id:"tab-tnf-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tnf-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tnf-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tnf-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tnf-a-3-3"},{label:"Elem 3.4",id:"tab-tnf-a-3-4"}]},{label:"Elem 4",id:"tab-tnf-a-4"}]},{label:"Tab Link",id:"tab-tnf-b"},{label:"Tab Link",id:"tab-tnf-c"},{label:"Tab Link",id:"tab-tnf-d"},{label:"Tab Link",id:"tab-tnf-e"},{label:"Tab Link",id:"tab-tnf-f"},{label:"Tab Link",id:"tab-tnf-g"},{label:"Tab Dropdown",id:"tab-tnf-h",children:[{label:"Element 1",id:"tab-tnf-h-1"},{label:"Element 2",id:"tab-tnf-h-2",children:[{label:"Elem 1",id:"tab-tnf-h-2-1"},{label:"Elem 2",id:"tab-tnf-h-2-2"},{label:"Elem 3 more",id:"tab-tnf-h-2-3",children:[{label:"Elem 3.1",id:"tab-tnf-h-2-3-1"},{label:"Elem 3.2",id:"tab-tnf-h-2-3-2"},{label:"Elem 3.3",id:"tab-tnf-h-2-3-3"}]},{label:"Elem 4",id:"tab-tnf-h-2-4"}]},{label:"Element 3",id:"tab-tnf-h-3"}]}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_flat" sliding-border></chi-tabs>

<script>
  const tabbedNavigationFlatElement = document.querySelector('#example__tabbed_navigation_flat');

  tabbedNavigationFlatElement.tabs = [
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
<\/script>`,htmlblueprint:`<ul id="navigationExample-1" class="chi-tabs">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
${this.generateTabsNestedLinksHtml([1,2])}
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          ${this.generateTabsDropdownLinksHtml()}
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${this.generateTabsLinksHtml()}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
${this.generateTabsNestedLinksHtml([1,2,3])}
    </div>
  </li>
</ul>

<script>
  const navigationElem = document.getElementById('#navigationExample-1');
  chi.navigation(navigationElem);
<\/script>`}}generateTabsLinksHtml(){return[1,2,3,4,5,6].map(()=>`  <li>
    <a href="#">Tab Link</a>
  </li>`).join(`
`)}generateTabsNestedLinksHtml(a){return a.map(i=>`      <a class="chi-dropdown__menu-item" href="#">Element ${i}</a>`).join(`
`)}generateTabsDropdownLinksHtml(){return[1,2,3,4].map(a=>`<a class="chi-dropdown__menu-item" href="#">Elem 3.${a}</a>`).join("")}mounted(){const a=document.querySelector("#example__tabbed_navigation_flat");a&&(a.tabs=this.tabLinks)}};M=ei([w({})],M);const ti=s("chi-tabs",{"active-tab":"tab-tnf-a",id:"example__tabbed_navigation_flat","sliding-border":""},null,-1);function ai(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Flat",id:"tabbed-navigation-flat",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{example:u(()=>[ti]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ii=C(M,[["render",ai]]);var ni=Object.defineProperty,si=Object.getOwnPropertyDescriptor,li=(t,n,a,i)=>{for(var e=i>1?void 0:i?si(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&ni(n,a,e),e};let q=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{label:"Active Tab",id:"tab-tns-a",children:[{label:"Elem 1",id:"tab-tns-a-1"},{label:"Elem 2",id:"tab-tns-a-2"},{label:"Elem 3 more",id:"tab-tns-a-3",children:[{label:"Elem 3.1",id:"tab-tns-a-3-1"},{label:"Elem 3.2",id:"tab-tns-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tns-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tns-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tns-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tns-a-3-3"},{label:"Elem 3.4",id:"tab-tns-a-3-4"}]},{label:"Elem 4",id:"tab-tns-a-4"}]},{label:"Tab Link",id:"tab-tns-b"},{label:"Tab Link",id:"tab-tns-c"},{label:"Tab Link",id:"tab-tns-d"},{label:"Tab Link",id:"tab-tns-e"},{label:"Tab Dropdown",id:"tab-tns-f",children:[{label:"Element 1",id:"tab-tns-f-1"},{label:"Element 2",id:"tab-tns-f-2",children:[{label:"Elem 1",id:"tab-tns-f-2-1"},{label:"Elem 2",id:"tab-tns-f-2-2"},{label:"Elem 3 more",id:"tab-tns-f-2-3",children:[{label:"Elem 3.1",id:"tab-tns-f-2-3-1"},{label:"Elem 3.2",id:"tab-tns-f-2-3-2"},{label:"Elem 3.3",id:"tab-tns-f-2-3-3"}]},{label:"Elem 4",id:"tab-tns-f-2-4"}]},{label:"Element 3",id:"tab-tns-f-3"}]}]);h(this,"codeSnippets",{webcomponent:`<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_solid" size="lg" solid sliding-border></chi-tabs>

<script>
  const tabbedNavigationFlatElement = document.querySelector('#example__tabbed_navigation_solid');

  tabbedNavigationFlatElement.tabs = [
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
<\/script>`,htmlblueprint:`<ul id="navigationExample-1" class="chi-tabs -solid -border -lg">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
${this.generateTabsNestedLinksHtml([1,2])}
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          ${this.generateTabsDropdownLinksHtml()}
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${this.generateTabsLinksHtml()}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
${this.generateTabsNestedLinksHtml([1,2,3])}
    </div>
  </li>
</ul>

<script>
  const navigationElem = document.getElementById('#navigationExample-1');
  chi.navigation(navigationElem);
<\/script>`})}generateTabsLinksHtml(){return[1,2,3,4,5,6].map(()=>`  <li>
    <a href="#">Tab Link</a>
  </li>`).join(`
`)}generateTabsNestedLinksHtml(n){return n.map(a=>`      <a class="chi-dropdown__menu-item" href="#">Element ${a}</a>`).join(`
`)}generateTabsDropdownLinksHtml(){return[1,2,3,4].map(n=>`<a class="chi-dropdown__menu-item" href="#">Elem 3.${n}</a>`).join("")}mounted(){const n=document.querySelector("#example__tabbed_navigation_solid");n&&(n.tabs=this.tabLinks)}};q=li([w({})],q);const oi=s("chi-tabs",{"active-tab":"tab-tns-a",id:"example__tabbed_navigation_solid",size:"lg",solid:"","sliding-border":""},null,-1);function ci(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Solid",id:"tabbed-navigation-solid",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{example:u(()=>[oi]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ri=C(q,[["render",ci]]);var bi=Object.defineProperty,di=Object.getOwnPropertyDescriptor,hi=(t,n,a,i)=>{for(var e=i>1?void 0:i?di(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&bi(n,a,e),e};let J=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}])}get codeSnippets(){return{webcomponent:"",htmlblueprint:`<ul class="chi-tabs" id="navigation-components-contained">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger -animate" href="#">Active Tab</a>
    <div class="chi-dropdown__menu" x-placement="bottom-start">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a><a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          ${this.generateTabsDropdownLinksHtml([1,2,3,4],"Elem 3.")}
        </div>
      </div><a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${this.tabsLinksHtml}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Link</a>
    <div class="chi-dropdown__menu">
        ${this.generateTabsDropdownLinksHtml([1,2,3],"Element ")}
    </div>
  </li>
</ul>

<script>chi.navigation(document.getElementById('navigation-components-contained'));<\/script>`}}get tabsLinksHtml(){return[1,2].map(()=>`  <li>
    <a href="#">Tab Link</a>
  </li>`).join(`
`)}generateTabsDropdownLinksHtml(a,i){return a.map(e=>`<a class="chi-dropdown__menu-item" href="#">${i}${e}</a>`).join("")}mounted(){chi.navigation(document.getElementById("navigation-components-contained"))}};J=hi([w({})],J);const pi=s("p",{class:"-text"},[z("As navigation component is built from other primitive Chi components, most of the components behavior can be replicated on the navigation component. For example, you can use the "),s("code",null,"-animate"),z(" class on the dropdowns to make the chevron rotate when activated.")],-1),mi={class:"chi-tabs chi-navigationExample",id:"navigation-components-contained"},ui={class:"chi-dropdown -active"},_i=s("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Active Tab",-1),vi={class:"chi-dropdown__menu"},fi={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},$i=s("a",{class:"chi-dropdown__menu-item chi-dropdown__trigger -animate",href:"#"},"Elem 3 more",-1),Ti={class:"chi-dropdown__menu"},gi={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},xi=s("a",{class:"chi-dropdown__menu-item",href:"#"},"Elem 4",-1),Li=s("a",{href:"#exampleHashTarget"},"Tab Link",-1),wi=[Li],Ci={class:"chi-dropdown"},Ei=s("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Tab Link",-1),Si={class:"chi-dropdown__menu"},Hi={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"};function zi(t,n,a,i,e,o){const l=S,p=H,r=E;return c(),T(r,{title:"Components contained",id:"components-contained",tabs:t.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{"example-description":u(()=>[pi]),example:u(()=>[s("ul",mi,[s("li",ui,[_i,s("div",vi,[(c(),b(f,null,$([1,2],d=>s("a",fi,"Elem "+_(d),1)),64)),s("div",null,[$i,s("div",Ti,[(c(),b(f,null,$([1,2,3,4],d=>s("a",gi,"Elem 3."+_(d),1)),64))])]),xi])]),(c(),b(f,null,$([1,2],d=>s("li",null,wi)),64)),s("li",Ci,[Ei,s("div",Si,[(c(),b(f,null,$([1,2,3],d=>s("a",Hi,"Element "+_(d),1)),64))])])])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(p),m(l,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ki=C(J,[["render",zi]]);var yi=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,Oi=(t,n,a,i)=>{for(var e=i>1?void 0:i?Pi(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&yi(n,a,e),e};let X=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{href:"?tab=1",text:"Tab Link",active:!0},{href:"?tab=2",text:"Tab Link"},{href:"?tab=3",text:"Tab Link"},{href:"?tab=4",text:"Tab Link"},{href:"?tab=5",text:"Tab Link"},{href:"?tab=6",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"enabled",label:"Enabled",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul id="navigationexample-4-enabled" class="chi-tabs">
${this.tabsLinksHtml}
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-enabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: true}
  );
<\/script>`}}},{id:"disabled",label:"Disabled",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul id="navigationexample-4-disabled" class="chi-tabs">
${this.tabsLinksHtml}
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-disabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: false}
  );
<\/script>`}}}]}get tabsLinksHtml(){return this.tabLinks.map((a,i)=>`  <li${i===0?' class="-active"':""}>
    <a href="/">Tab Link</a>
  </li>`).join(`
`)}};X=Oi([w({})],X);const Bi=s("p",{class:"-text"},[z("Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL. For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this component has the option to wait for the animation to finish and, then, it will redirect the user to the destination URL. You can enable this behavior by setting the "),s("code",null,"waitForAnimations"),z(" option to "),s("code",null,"true"),z(".")],-1),ji={class:"chi-tabs chi-navigationExample chi-customExample"},Ai=["href"];function Di(t,n,a,i,e,o){const l=E;return c(),T(l,{title:"Wait for animations",id:"wait-for-animations",tabs:t.exampleTabs,titleSize:"h4",headTabs:t.headTabs,additionalClasses:"-pb--4"},{"example-description":u(()=>[Bi]),example:u(()=>[s("ul",ji,[(c(!0),b(f,null,$(t.tabLinks,p=>(c(),b("li",{class:v([p.active?"-active":""])},[s("a",{href:`#${p.href}`},_(p.text),9,Ai)],2))),256))])]),_:1},8,["tabs","headTabs"])}const Fi=C(X,[["render",Di]]);var Ii=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,Ni=(t,n,a,i)=>{for(var e=i>1?void 0:i?Vi(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&Ii(n,a,e),e};let R=class extends L{constructor(){super(...arguments);h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"tabLinks",[{href:"",text:"Active Tab",active:!0},{href:"",text:"Tab Link",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}]);h(this,"tabLink",`<a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>`);h(this,"subLink",`<a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>`);h(this,"innerSubLink",`<a class="chi-tabs_item" href="#">
              <span class="chi-tabs_item-title">Subtab Link</span>
              <span class="chi-tabs_item-text">Subtab description</span>
              <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </a>`);h(this,"codeSnippets",{webComponent:"",htmlBlueprint:`<ul class="chi-tabs -vertical -icons -list -tree -lg">
  <li class="-active">
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Active Tab</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>
  </li>
  <li>
    ${this.tabLink}
    <ul class="chi-tabs__subtabs">
      <li>
        ${this.subLink}
      </li>
      <li>
        ${this.subLink}
        <ul class="chi-tabs__subtabs">
          <li>
            ${this.innerSubLink}
          </li>
          <li>
            ${this.innerSubLink}
          </li>
        </ul>
      </li>
      <li>
        ${this.subLink}
      </li>
    </ul>
  </li>
  <li>
    ${this.tabLink}
  </li>
</ul>`})}};R=Ni([w({})],R);const Wi={class:"-p--3"},Mi={class:"chi-tabs -vertical -icons -list -tree -lg",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},qi=["href","aria-controls"],Ji=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1),Xi={class:"chi-tabs_item-title"},Ri={key:0,class:"chi-tabs_item-text"},Ui=s("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[s("div",{class:"chi-button__content"},[s("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1),Yi={key:0,class:"chi-tabs__subtabs"},Ki={class:"chi-tabs_item",href:"#"},Gi={class:"chi-tabs_item-title"},Qi={key:0,class:"chi-tabs_item-text"},Zi=s("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[s("div",{class:"chi-button__content"},[s("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1),en={key:0,class:"chi-tabs__subtabs"},tn={class:"chi-tabs_item",href:"#"},an={class:"chi-tabs_item-title"},nn={key:0,class:"chi-tabs_item-text"},sn=s("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[s("div",{class:"chi-button__content"},[s("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1);function ln(t,n,a,i,e,o){const l=S,p=E;return c(),T(p,{title:"Vertical Tree Tabs",id:"vertical-tree-tabs",titleSize:"h4",tabs:t.exampleTabs},{example:u(()=>[s("div",Wi,[s("ul",Mi,[(c(!0),b(f,null,$(t.tabLinks,r=>(c(),b("li",{class:v([r.active?"-active":""])},[s("a",{class:"chi-tabs_item",href:`#${r.href}`,role:"tab","aria-selected":"true","aria-controls":r.href},[Ji,s("span",Xi,_(r.text),1),r.description?(c(),b("span",Ri,_(r.description),1)):x("",!0),Ui],8,qi),r.subLinks?(c(),b("ul",Yi,[(c(!0),b(f,null,$(r.subLinks,d=>(c(),b("li",{class:v([d.active?"-active":""])},[s("a",Ki,[s("span",Gi,_(d.text),1),d.description?(c(),b("span",Qi,_(d.description),1)):x("",!0),Zi]),d.subLinks?(c(),b("ul",en,[(c(!0),b(f,null,$(d.subLinks,k=>(c(),b("li",{class:v([k.active?"-active":""])},[s("a",tn,[s("span",an,_(k.text),1),k.description?(c(),b("span",nn,_(k.description),1)):x("",!0),sn])],2))),256))])):x("",!0)],2))),256))])):x("",!0)],2))),256))])])]),"code-webcomponent":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[m(l,{class:"html",lang:"html",code:t.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const on=C(R,[["render",ln]]);var cn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,bn=(t,n,a,i)=>{for(var e=i>1?void 0:i?rn(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&cn(n,a,e),e};let U=class extends L{constructor(){super(...arguments);h(this,"theme",he())}get hideThemes(){return this.theme!=="portal"&&this.theme!=="colt"&&this.theme!=="brightspeed"}};U=bn([w({components:{TabbedNavigationFlat:ii,TabbedNavigationSolid:ri,ComponentsContained:ki,WaitForAnimation:Fi,HorizontalFlat:xe,HorizontalSolid:Ge,VerticalFlat:Pe,VerticalSolid:We,LinkDefaultBehavior:rt,HorizontalTabsWithIcon:vt,VerticalTabsWithIcon:Mt,VerticalTabsWithIconAndDescription:Ot,VerticalSubtabs:Qt,Bordered:sa,AdditionalSizesHorizontal:xa,AdditionalSizesVertical:Ga,VerticalTreeTabs:on}})],U);const dn=s("h2",null,"Examples",-1),hn=s("h3",null,"Horizontal",-1),pn=s("h3",null,"Vertical",-1),mn=s("h3",null,"Tabbed navigation bar",-1),un=s("p",{class:"-text"},[z("The navigation component is a combination of Chi tabs and dropdowns components. You must use "),s("code",null,"chi.navigation"),z(" function to instantiate the whole group of components, and there is no need for instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the descendants' tabs and dropdowns.")],-1),_n=s("p",{class:"-text"},"Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu, or a wait-for-animation option.",-1),vn=s("h3",null,"Icons",-1),fn=s("h3",null,"Additional Size",-1);function $n(t,n,a,i,e,o){const l=g("HorizontalFlat"),p=g("HorizontalSolid"),r=g("VerticalFlat"),d=g("VerticalSolid"),k=g("LinkDefaultBehavior"),G=g("TabbedNavigationFlat"),Q=g("TabbedNavigationSolid"),Z=g("ComponentsContained"),ee=g("WaitForAnimation"),te=g("VerticalTreeTabs"),ae=g("HorizontalTabsWithIcon"),ie=g("VerticalTabsWithIcon"),ne=g("VerticalTabsWithIconAndDescription"),se=g("VerticalSubtabs"),le=g("Bordered"),oe=g("AdditionalSizesHorizontal"),ce=g("AdditionalSizesVertical");return c(),b("div",null,[dn,hn,m(l,{isPortal:"!hideThemes"}),m(p),pn,m(r),m(d),t.hideThemes?(c(),T(k,{key:0})):x("",!0),mn,un,_n,m(G),m(Q),t.hideThemes?(c(),T(Z,{key:1})):x("",!0),t.hideThemes?(c(),T(ee,{key:2})):x("",!0),t.hideThemes?x("",!0):(c(),T(te,{key:3})),t.hideThemes?(c(),b(f,{key:4},[vn,m(ae),m(ie),m(ne),m(se),m(le),fn,m(oe),m(ce)],64)):x("",!0)])}const Tn=C(U,[["render",$n]]);var gn=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Ln=(t,n,a,i)=>{for(var e=i>1?void 0:i?xn(n,a):n,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(n,a,e):l(e))||e);return i&&e&&gn(n,a,e),e};let Y=class extends L{};Y=Ln([w({components:{Accessibility:me,Examples:Tn,Properties:pe}})],Y);const wn={class:"chi-grid__container -pt--3"},Cn={class:"chi-tabs-panel -active",id:"examples"},En={class:"chi-tabs-panel",id:"properties"},Sn={class:"chi-tabs-panel",id:"accessibility"};function Hn(t,n,a,i,e,o){const l=ue,p=g("Examples"),r=g("Properties"),d=g("Accessibility");return c(),b("div",null,[m(l,{title:"Tabs",description:"Tabs are used to navigate between views within the same context.",tabs:t.pageTabs},null,8,["tabs"]),s("div",wn,[s("div",Cn,[m(p)]),s("div",En,[m(r)]),s("div",Sn,[m(d)])])])}const os=C(Y,[["render",Hn]]);export{os as default};
