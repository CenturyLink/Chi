var be=Object.defineProperty;var ce=(a,e,i)=>e in a?be(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var p=(a,e,i)=>ce(a,typeof e!="symbol"?e+"":e,i);import{V as L,d as de,N as w}from"./NAah3XrW.js";import{o as r,h as T,w as u,a as s,n as _,c,F as f,i as $,t as v,b as h,l as x,d as z,j as pe,m as g}from"./CEIPSiTs.js";import{_ as S}from"./onyWiYp2.js";import{_ as H}from"./CS2TcPBX.js";import{_ as E}from"./CAQzZ0uH.js";import{_ as C}from"./DlAUqK2U.js";import me from"./405gQiEi.js";import he from"./Bvxda0hH.js";import"./DtNz156Q.js";import{_ as ue}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var ve=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,K=(a,e,i,n)=>{for(var t=n>1?void 0:n?_e(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&ve(e,i,t),t};let y=class extends L{constructor(){super(...arguments);p(this,"isPortal");p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__horizontal-flat" sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const o=t===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__horizontal-flat");i&&(i.tabs=this.tabLinks)}};K([de()],y.prototype,"isPortal",2);y=K([w({})],y);const fe=["active-tab"],$e={class:"-py--3"},Te={class:"-text"};function ge(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Flat",id:"horizontal-flat",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",{class:_(["-px--3 -bg--white",a.isPortal?"-pt--2":""])},[s("chi-tabs",{"active-tab":a.activeTab,id:"example__horizontal-flat","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d)),"sliding-border":""},null,40,fe),s("div",$e,[(r(!0),c(f,null,$(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",Te,v(d.text),1)],2))),256))])],2)]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xe=C(y,[["render",ge]]);var Le=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Ce=(a,e,i,n)=>{for(var t=n>1?void 0:n?we(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Le(e,i,t),t};let P=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__vertical-flat" vertical sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-vertical-base'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const o=t===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__vertical-flat");i&&(i.tabs=this.tabLinks)}};P=Ce([w({})],P);const Ee={class:"chi-grid -no-gutter -bg--white"},Se={class:"chi-col -w--6 -w-sm--4 -p--3"},He=["active-tab"],ze={class:"chi-col -p--3"},ke={class:"-text"};function ye(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Flat",id:"vertical-flat",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",Ee,[s("div",Se,[s("chi-tabs",{"active-tab":a.activeTab,id:"example__vertical-flat",vertical:"","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d)),"sliding-border":""},null,40,He)]),s("div",ze,[(r(!0),c(f,null,$(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",ke,v(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pe=C(P,[["render",ye]]);var Oe=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,je=(a,e,i,n)=>{for(var t=n>1?void 0:n?Be(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Oe(e,i,t),t};let O=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__vertical-solid" size='xl' solid vertical sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-vertical-solid-bordered'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const o=t===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__vertical-solid");i&&(i.tabs=this.tabLinks)}};O=je([w({})],O);const Ae={class:"chi-grid -no-gutter -bg--white"},De={class:"chi-col -w--6 -w-sm--4 -p--3"},Fe=["active-tab"],Ie={class:"chi-col -p--3"},Ve={class:"-text"};function Ne(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Solid",id:"vertical-solid",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",Ae,[s("div",De,[s("chi-tabs",{"active-tab":a.activeTab,id:"example__vertical-solid",size:"xl",solid:"",vertical:"","sliding-border":"","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d))},null,40,Fe)]),s("div",Ie,[(r(!0),c(f,null,$(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",Ve,v(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=C(O,[["render",Ne]]);var Me=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Je=(a,e,i,n)=>{for(var t=n>1?void 0:n?qe(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Me(e,i,t),t};let B=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__horizontal-solid" size="lg" solid sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-horizontal-solid-bordered'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const o=t===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},o)=>`<div class="chi-tabs-panel${o===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__horizontal-solid");i&&(i.tabs=this.tabLinks)}};B=Je([w({})],B);const Xe={class:"-px--3 -pt--2 -bg--white"},Re=["active-tab"],Ue={class:"-py--3"},Ye={class:"-text"};function Ke(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Solid",id:"horizontal-solid",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",Xe,[s("chi-tabs",{"active-tab":a.activeTab,id:"example__horizontal-solid",size:"lg","sliding-border":"",solid:"","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d))},null,40,Re),s("div",Ue,[(r(!0),c(f,null,$(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[s("div",Ye,v(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ge=C(B,[["render",Ke]]);var Qe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,et=(a,e,i,n)=>{for(var t=n>1?void 0:n?Ze(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Qe(e,i,t),t};let j=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{id:"webcomponent",label:"Web Component",disabled:!0},{id:"htmlblueprint",label:"HTML Blueprint",active:!0}]);p(this,"tabLinks",[{id:"a2",label:"Tab a",active:!0},{id:"b2",label:"Tab b"},{id:"c2",label:"Tab c"}]);p(this,"tabsContent",[{id:"a2",text:"Content for tab a",active:!0},{id:"b2",text:"Content for tab b"},{id:"c2",text:"Content for tab c"}])}get codeSnippets(){return{webComponent:"",htmlblueprint:`<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">
${this.generateTabsHtml()}
  <li><a href="https://lib.lumen.com/chi/" target="_self">External Link</a></li>
</ul>

${this.generateTabsContentHtml()}
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`}}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const o=t===0;return`  <li${o?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${o?"":`
      tabindex="-1"`}
      aria-selected="${o?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(){return this.tabsContent.map(({text:i,id:n},t)=>`<div class="chi-tabs-panel${t===0?" -active":""}" id="${n}" role="tabpanel">
  <p class="-text">${i}</p>
</div>`).join(`
`)}mounted(){chi.tab(document.getElementById("example-default-link-behavior"))}};j=et([w({})],j);const tt={class:"chi-tabs",id:"example-default-link-behavior",role:"tablist","aria-label":"example-default-link-behavior"},at=["href","aria-controls"],it={class:"-py--2"},nt=["id"],st={class:"-text"};function lt(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Keep default link behavior",id:"link-default-behavior",tabs:a.exampleTabs,additionalClasses:"-pb--4"},{"example-description":u(()=>e[0]||(e[0]=[s("p",{class:"-text"},"By default, Chi JavaScript enabled tabs will ignore default link behavior. To preserve it, specify a target property on the link.",-1)])),example:u(()=>[s("ul",tt,[(r(!0),c(f,null,$(a.tabLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",{href:`#${d.id}`,role:"tab","aria-selected":"true","aria-controls":d.id},v(d.label),9,at)],2))),256)),e[1]||(e[1]=s("li",null,[s("a",{href:"https://lib.lumen.com/chi/",target:"_self"},"External Link")],-1))]),s("div",it,[(r(!0),c(f,null,$(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",[d.active?"-active":""]]),id:d.id,role:"tabpanel"},[s("div",st,v(d.text),1)],10,nt))),256))])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ot=C(j,[["render",lt]]);var rt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,ct=(a,e,i,n)=>{for(var t=n>1?void 0:n?bt(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&rt(e,i,t),t};let A=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeHeadTab","base");p(this,"tabLinks",[{href:"#",text:"Active Tab",active:!0},{href:"#",text:"Tab Link"},{href:"#",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -icons">
${this.tabsLinksHtml}
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -inverse -icons">
${this.tabsLinksHtml}
</ul>`}}}]}get tabsLinksHtml(){return this.tabLinks.map(({text:i,active:n})=>`  <li${n?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${i}</span>
    </a>
  </li>`).join(`
`)}get isInverse(){return this.activeHeadTab==="inverse"}changeHeadTab(i){this.activeHeadTab=i.id}};A=ct([w({})],A);const dt=["id"],pt=["href","aria-controls"];function mt(a,e,i,n,t,o){const l=E;return r(),T(l,{title:"Horizontal tabs with icons",id:"horizontal-tabs-with-icons",tabs:a.exampleTabs,titleSize:"h4",headTabs:a.headTabs,onChiHeadTabsChange:a.changeHeadTab,additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",{class:_(["-px--3",a.isInverse?"-bg--black":"-bg--white"])},[s("ul",{class:_(["chi-tabs -icons",[a.isInverse?"-inverse":""]]),id:`example-horizontal-with-icons-${a.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-horizontal"},[(r(!0),c(f,null,$(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[s("a",{href:`#${m.href}`,role:"tab","aria-selected":"true","aria-controls":m.href},[e[0]||(e[0]=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),s("span",null,v(m.text),1)],8,pt)],2))),256))],10,dt)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const ht=C(A,[["render",mt]]);var ut=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,_t=(a,e,i,n)=>{for(var t=n>1?void 0:n?vt(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&ut(e,i,t),t};let D=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Tab Link",description:"Tab description",active:!0},{href:"",text:"Active Tab",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}])}get codeSnippets(){return{webComponent:"",htmlBlueprint:`<ul class="chi-tabs -vertical -icons -list">
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
`)}};D=_t([w({})],D);const ft={class:"-bg--white"},$t={class:"-p--3"},Tt={class:"chi-tabs -icons -vertical -list",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},gt=["href","aria-controls"],xt={class:"chi-tabs_item-title"},Lt={key:0,class:"chi-tabs_item-text"},wt={key:0,class:"chi-tabs__subtabs"},Ct={class:"chi-tabs_item",href:"#"},Et={class:"chi-tabs_item-title"},St={key:0,class:"chi-tabs_item-text"};function Ht(a,e,i,n,t,o){const l=S,m=E;return r(),T(m,{title:"Vertical tabs with icons and description",id:"vertical-tabs-with-icons-and-description",titleSize:"h4",tabs:a.exampleTabs,additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",ft,[s("div",$t,[s("ul",Tt,[(r(!0),c(f,null,$(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",{class:"chi-tabs_item",href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},[e[0]||(e[0]=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),s("span",xt,v(b.text),1),b.description?(r(),c("span",Lt,v(b.description),1)):x("",!0)],8,gt),b.subLinks?(r(),c("ul",wt,[(r(!0),c(f,null,$(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",Ct,[s("span",Et,v(d.text),1),d.description?(r(),c("span",St,v(d.description),1)):x("",!0)])],2))),256))])):x("",!0)],2))),256))])])])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const zt=C(D,[["render",Ht]]);var kt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,Pt=(a,e,i,n)=>{for(var t=n>1?void 0:n?yt(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&kt(e,i,t),t};let F=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeHeadTab","base");p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical -icons">
${this.tabsLinksHtml}
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical -inverse -icons">
${this.tabsLinksHtml}
</ul>`}}}]}get tabsLinksHtml(){return this.tabLinks.map(({text:e,active:i})=>`  <li${i?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${e}</span>
    </a>
  </li>`).join(`
`)}get isInverse(){return this.activeHeadTab==="inverse"}changeHeadTab(e){this.activeHeadTab=e.id}};F=Pt([w({})],F);const Ot=["id"],Bt=["href","aria-controls"],jt={key:0,class:"chi-tabs__subtabs"},At={href:"#"};function Dt(a,e,i,n,t,o){const l=E;return r(),T(l,{title:"Vertical tabs with icons",id:"vertical-tabs-with-icons",tabs:a.exampleTabs,headTabs:a.headTabs,titleSize:"h4",onChiHeadTabsChange:a.changeHeadTab,additionalClasses:"-bg--grey-20"},{example:u(()=>[s("div",{class:_(["-p--3",a.isInverse?"-bg--black":"-bg--white"])},[s("ul",{class:_(["chi-tabs -icons -vertical",[a.isInverse?"-inverse":""]]),id:`example-vertical-with-icons-${a.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(r(!0),c(f,null,$(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[s("a",{href:`#${m.href}`,role:"tab","aria-selected":"true","aria-controls":m.href},[e[0]||(e[0]=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),s("span",null,v(m.text),1)],8,Bt),m.subLinks?(r(),c("ul",jt,[(r(!0),c(f,null,$(m.subLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",At,v(b.text),1)],2))),256))])):x("",!0)],2))),256))],10,Ot)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const Ft=C(F,[["render",Dt]]);var It=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Nt=(a,e,i,n)=>{for(var t=n>1?void 0:n?Vt(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&It(e,i,t),t};let I=class extends L{constructor(){super(...arguments);p(this,"activeHeadTab","base");p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab link"},{href:"",text:"Tab link"}]);p(this,"headTabs",[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical">
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
</ul>`}}}])}get isInverse(){return this.activeHeadTab==="inverse"}get tabsLinksHtml(){return this.tabLinks.map((i,n)=>`      <li${n===0?' class="-active"':""}>
        <a href="#">Subtab Link</a>
      </li>`).join(`
`)}changeHeadTab(i){this.activeHeadTab=i.id}};I=Nt([w({})],I);const Wt=["id"],Mt=["href","aria-controls"],qt={key:0,class:"chi-tabs__subtabs"},Jt={href:"#"};function Xt(a,e,i,n,t,o){const l=E;return r(),T(l,{title:"Vertical Subtabs",id:"vertical-subtabs",additionalClasses:"-bg--grey-20",tabs:a.exampleTabs,headTabs:a.headTabs,onChiHeadTabsChange:a.changeHeadTab},{example:u(()=>[s("div",{class:_(["-p--3",a.isInverse?"-bg--black":"-bg--white"])},[s("ul",{class:_(["chi-tabs -vertical",[a.isInverse?"-inverse":""]]),id:`example-vertical-with-icons-${a.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(r(!0),c(f,null,$(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[s("a",{href:`#${m.href}`,role:"tab","aria-selected":"true","aria-controls":m.href},v(m.text),9,Mt),m.subLinks?(r(),c("ul",qt,[(r(!0),c(f,null,$(m.subLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",Jt,v(b.text),1)],2))),256))])):x("",!0)],2))),256))],10,Wt)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const Rt=C(I,[["render",Xt]]);var Ut=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Kt=(a,e,i,n)=>{for(var t=n>1?void 0:n?Yt(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Ut(e,i,t),t};let V=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__bordered" border sliding-border></chi-tabs>

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
</ul>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const o=t===0;return`  <li${o?' class="-active"':""}>
    <a href="#">${o?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)}mounted(){const i=document.querySelector("#example__bordered");i&&(i.tabs=this.tabLinks)}};V=Kt([w({})],V);const Gt={class:"-p--3 -bg--white"},Qt=["active-tab"];function Zt(a,e,i,n,t,o){const l=S,m=E;return r(),T(m,{title:"Bordered",id:"bordered",additionalClasses:"-bg--grey-20",tabs:a.exampleTabs},{example:u(()=>[s("div",Gt,[s("chi-tabs",{"active-tab":a.activeTab,id:"example__bordered",border:"","on:chiTabChange":e[0]||(e[0]=(...b)=>a.chiTabChange&&a.chiTabChange(...b)),"sliding-border":""},null,40,Qt)])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ea=C(V,[["render",Zt]]);var ta=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,ia=(a,e,i,n)=>{for(var t=n>1?void 0:n?aa(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&ta(e,i,t),t};let N=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"sizes",[{name:"X-small",value:"xs"},{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"}])}get codeSnippets(){return{webComponent:this.webComponentHtml,htmlBlueprint:this.blueprintHtml}}get tabsHtml(){return this.tabLinks.map((i,n)=>{const t=n===0;return`  <li${t?' class="-active"':""}>
    <a href="#">${t?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)}get webComponentHtml(){return this.sizes.map(({name:i,value:n})=>`<!-- ${i} -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-${n}"${n==="md"?"":` size="${n}`} sliding-border></chi-tabs>`).join(`

`)}get blueprintHtml(){return this.sizes.map(({name:i,value:n})=>`<!-- ${i} -->
<ul class="chi-tabs${n==="md"?"":` -${n}`}">
${this.tabsHtml}
</ul>`).join(`

`)}mounted(){const i=document.querySelector("#example__additional-sizes-horizontal-xs"),n=document.querySelector("#example__additional-sizes-horizontal-sm"),t=document.querySelector("#example__additional-sizes-horizontal-md"),o=document.querySelector("#example__additional-sizes-horizontal-lg");i&&(i.tabs=this.tabLinks),n&&(n.tabs=this.tabLinks),t&&(t.tabs=this.tabLinks),o&&(o.tabs=this.tabLinks)}};N=ia([w({})],N);function na(a,e,i,n,t,o){const l=S,m=E;return r(),T(m,{title:"Horizontal",id:"additional-sizes-horizontal",tabs:a.exampleTabs,additionalClasses:"-pb--4",titleSize:"h4"},{example:u(()=>e[0]||(e[0]=[s("p",{class:"-text--bold"},"X-small",-1),s("div",{class:"chi-divider -mb--2"},null,-1),s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-xs",size:"xs","sliding-border":""},null,-1),s("p",{class:"-text--bold -mt--6"},"Small",-1),s("div",{class:"chi-divider -mb--2"},null,-1),s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-sm",size:"sm","sliding-border":""},null,-1),s("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1),s("div",{class:"chi-divider -mb--2"},null,-1),s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-md","sliding-border":""},null,-1),s("p",{class:"-text--bold -mt--6"},"Large",-1),s("div",{class:"chi-divider -mb--2"},null,-1),s("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-lg",size:"lg","sliding-border":""},null,-1)])),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const sa=C(N,[["render",na]]);var la=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,ra=(a,e,i,n)=>{for(var t=n>1?void 0:n?oa(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&la(e,i,t),t};let W=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}]);p(this,"sizes",[{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"},{name:"X-Large",value:"xl"}])}get codeSnippets(){return{webComponent:"",htmlBlueprint:this.tabsHtml}}get subTabsHtml(){return this.tabLinks.map((i,n)=>`      <li${n===0?' class="-active"':""}>
        <a href="#">Subtab Link</a>
      </li>`).join(`
`)}get tabsHtml(){return this.sizes.map(({name:i,value:n})=>`<!-- ${i} -->
<ul class="chi-tabs -vertical${n==="md"?"":` -${n}`}">
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

`)}};W=ra([w({})],W);const ba={class:"chi-tabs -vertical -sm"},ca=["href","aria-controls"],da={key:0,class:"chi-tabs__subtabs"},pa={href:"#"},ma={class:"chi-tabs -vertical"},ha=["href","aria-controls"],ua={key:0,class:"chi-tabs__subtabs"},va={href:"#"},_a={class:"chi-tabs -vertical -lg"},fa=["href","aria-controls"],$a={key:0,class:"chi-tabs__subtabs"},Ta={href:"#"},ga={class:"chi-tabs -vertical -xl"},xa=["href","aria-controls"],La={key:0,class:"chi-tabs__subtabs"},wa={href:"#"};function Ca(a,e,i,n,t,o){const l=S,m=E;return r(),T(m,{title:"Vertical",id:"additional-sizes-vertical",tabs:a.exampleTabs,additionalClasses:"-pb--4",titleSize:"h4"},{example:u(()=>[e[0]||(e[0]=s("p",{class:"-text--bold"},"Small",-1)),e[1]||(e[1]=s("div",{class:"chi-divider -mb--2"},null,-1)),s("ul",ba,[(r(!0),c(f,null,$(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,ca),b.subLinks?(r(),c("ul",da,[(r(!0),c(f,null,$(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",pa,v(d.text),1)],2))),256))])):x("",!0)],2))),256))]),e[2]||(e[2]=s("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1)),e[3]||(e[3]=s("div",{class:"chi-divider -mb--2"},null,-1)),s("ul",ma,[(r(!0),c(f,null,$(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,ha),b.subLinks?(r(),c("ul",ua,[(r(!0),c(f,null,$(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",va,v(d.text),1)],2))),256))])):x("",!0)],2))),256))]),e[4]||(e[4]=s("p",{class:"-text--bold -mt--6"},"Large",-1)),e[5]||(e[5]=s("div",{class:"chi-divider -mb--2"},null,-1)),s("ul",_a,[(r(!0),c(f,null,$(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,fa),b.subLinks?(r(),c("ul",$a,[(r(!0),c(f,null,$(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",Ta,v(d.text),1)],2))),256))])):x("",!0)],2))),256))]),e[6]||(e[6]=s("p",{class:"-text--bold -mt--6"},"X-Large",-1)),e[7]||(e[7]=s("div",{class:"chi-divider -mb--2"},null,-1)),s("ul",ga,[(r(!0),c(f,null,$(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,xa),b.subLinks?(r(),c("ul",La,[(r(!0),c(f,null,$(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",wa,v(d.text),1)],2))),256))])):x("",!0)],2))),256))])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ea=C(W,[["render",Ca]]);var Sa=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,za=(a,e,i,n)=>{for(var t=n>1?void 0:n?Ha(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Sa(e,i,t),t};let M=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{label:"Active Tab",id:"tab-tnf-a",children:[{label:"Elem 1",id:"tab-tnf-a-1"},{label:"Elem 2",id:"tab-tnf-a-2"},{label:"Elem 3 more",id:"tab-tnf-a-3",children:[{label:"Elem 3.1",id:"tab-tnf-a-3-1"},{label:"Elem 3.2",id:"tab-tnf-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tnf-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tnf-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tnf-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tnf-a-3-3"},{label:"Elem 3.4",id:"tab-tnf-a-3-4"}]},{label:"Elem 4",id:"tab-tnf-a-4"}]},{label:"Tab Link",id:"tab-tnf-b"},{label:"Tab Link",id:"tab-tnf-c"},{label:"Tab Link",id:"tab-tnf-d"},{label:"Tab Link",id:"tab-tnf-e"},{label:"Tab Link",id:"tab-tnf-f"},{label:"Tab Link",id:"tab-tnf-g"},{label:"Tab Dropdown",id:"tab-tnf-h",children:[{label:"Element 1",id:"tab-tnf-h-1"},{label:"Element 2",id:"tab-tnf-h-2",children:[{label:"Elem 1",id:"tab-tnf-h-2-1"},{label:"Elem 2",id:"tab-tnf-h-2-2"},{label:"Elem 3 more",id:"tab-tnf-h-2-3",children:[{label:"Elem 3.1",id:"tab-tnf-h-2-3-1"},{label:"Elem 3.2",id:"tab-tnf-h-2-3-2"},{label:"Elem 3.3",id:"tab-tnf-h-2-3-3"}]},{label:"Elem 4",id:"tab-tnf-h-2-4"}]},{label:"Element 3",id:"tab-tnf-h-3"}]}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_flat" sliding-border></chi-tabs>

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
`)}generateTabsNestedLinksHtml(i){return i.map(n=>`      <a class="chi-dropdown__menu-item" href="#">Element ${n}</a>`).join(`
`)}generateTabsDropdownLinksHtml(){return[1,2,3,4].map(i=>`<a class="chi-dropdown__menu-item" href="#">Elem 3.${i}</a>`).join("")}mounted(){const i=document.querySelector("#example__tabbed_navigation_flat");i&&(i.tabs=this.tabLinks)}};M=za([w({})],M);function ka(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Flat",id:"tabbed-navigation-flat",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{example:u(()=>e[0]||(e[0]=[s("chi-tabs",{"active-tab":"tab-tnf-a",id:"example__tabbed_navigation_flat","sliding-border":""},null,-1)])),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ya=C(M,[["render",ka]]);var Pa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Ba=(a,e,i,n)=>{for(var t=n>1?void 0:n?Oa(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Pa(e,i,t),t};let q=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{label:"Active Tab",id:"tab-tns-a",children:[{label:"Elem 1",id:"tab-tns-a-1"},{label:"Elem 2",id:"tab-tns-a-2"},{label:"Elem 3 more",id:"tab-tns-a-3",children:[{label:"Elem 3.1",id:"tab-tns-a-3-1"},{label:"Elem 3.2",id:"tab-tns-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tns-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tns-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tns-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tns-a-3-3"},{label:"Elem 3.4",id:"tab-tns-a-3-4"}]},{label:"Elem 4",id:"tab-tns-a-4"}]},{label:"Tab Link",id:"tab-tns-b"},{label:"Tab Link",id:"tab-tns-c"},{label:"Tab Link",id:"tab-tns-d"},{label:"Tab Link",id:"tab-tns-e"},{label:"Tab Dropdown",id:"tab-tns-f",children:[{label:"Element 1",id:"tab-tns-f-1"},{label:"Element 2",id:"tab-tns-f-2",children:[{label:"Elem 1",id:"tab-tns-f-2-1"},{label:"Elem 2",id:"tab-tns-f-2-2"},{label:"Elem 3 more",id:"tab-tns-f-2-3",children:[{label:"Elem 3.1",id:"tab-tns-f-2-3-1"},{label:"Elem 3.2",id:"tab-tns-f-2-3-2"},{label:"Elem 3.3",id:"tab-tns-f-2-3-3"}]},{label:"Elem 4",id:"tab-tns-f-2-4"}]},{label:"Element 3",id:"tab-tns-f-3"}]}]);p(this,"codeSnippets",{webcomponent:`<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_solid" size="lg" solid sliding-border></chi-tabs>

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
`)}generateTabsNestedLinksHtml(e){return e.map(i=>`      <a class="chi-dropdown__menu-item" href="#">Element ${i}</a>`).join(`
`)}generateTabsDropdownLinksHtml(){return[1,2,3,4].map(e=>`<a class="chi-dropdown__menu-item" href="#">Elem 3.${e}</a>`).join("")}mounted(){const e=document.querySelector("#example__tabbed_navigation_solid");e&&(e.tabs=this.tabLinks)}};q=Ba([w({})],q);function ja(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Solid",id:"tabbed-navigation-solid",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{example:u(()=>e[0]||(e[0]=[s("chi-tabs",{"active-tab":"tab-tns-a",id:"example__tabbed_navigation_solid",size:"lg",solid:"","sliding-border":""},null,-1)])),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Aa=C(q,[["render",ja]]);var Da=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,Ia=(a,e,i,n)=>{for(var t=n>1?void 0:n?Fa(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Da(e,i,t),t};let J=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}])}get codeSnippets(){return{webcomponent:"",htmlblueprint:`<ul class="chi-tabs" id="navigation-components-contained">
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
`)}generateTabsDropdownLinksHtml(i,n){return i.map(t=>`<a class="chi-dropdown__menu-item" href="#">${n}${t}</a>`).join("")}mounted(){chi.navigation(document.getElementById("navigation-components-contained"))}};J=Ia([w({})],J);const Va={class:"chi-tabs chi-navigationExample",id:"navigation-components-contained"},Na={class:"chi-dropdown -active"},Wa={class:"chi-dropdown__menu"},Ma={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},qa={class:"chi-dropdown__menu"},Ja={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},Xa={class:"chi-dropdown"},Ra={class:"chi-dropdown__menu"},Ua={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"};function Ya(a,e,i,n,t,o){const l=S,m=H,b=E;return r(),T(b,{title:"Components contained",id:"components-contained",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{"example-description":u(()=>e[0]||(e[0]=[s("p",{class:"-text"},[z("As navigation component is built from other primitive Chi components, most of the components behavior can be replicated on the navigation component. For example, you can use the "),s("code",null,"-animate"),z(" class on the dropdowns to make the chevron rotate when activated.")],-1)])),example:u(()=>[s("ul",Va,[s("li",Na,[e[3]||(e[3]=s("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Active Tab",-1)),s("div",Wa,[(r(),c(f,null,$([1,2],d=>s("a",Ma,"Elem "+v(d),1)),64)),s("div",null,[e[1]||(e[1]=s("a",{class:"chi-dropdown__menu-item chi-dropdown__trigger -animate",href:"#"},"Elem 3 more",-1)),s("div",qa,[(r(),c(f,null,$([1,2,3,4],d=>s("a",Ja,"Elem 3."+v(d),1)),64))])]),e[2]||(e[2]=s("a",{class:"chi-dropdown__menu-item",href:"#"},"Elem 4",-1))])]),(r(),c(f,null,$([1,2],d=>s("li",null,e[4]||(e[4]=[s("a",{href:"#exampleHashTarget"},"Tab Link",-1)]))),64)),s("li",Xa,[e[5]||(e[5]=s("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Tab Link",-1)),s("div",Ra,[(r(),c(f,null,$([1,2,3],d=>s("a",Ua,"Element "+v(d),1)),64))])])])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ka=C(J,[["render",Ya]]);var Ga=Object.defineProperty,Qa=Object.getOwnPropertyDescriptor,Za=(a,e,i,n)=>{for(var t=n>1?void 0:n?Qa(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Ga(e,i,t),t};let X=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"?tab=1",text:"Tab Link",active:!0},{href:"?tab=2",text:"Tab Link"},{href:"?tab=3",text:"Tab Link"},{href:"?tab=4",text:"Tab Link"},{href:"?tab=5",text:"Tab Link"},{href:"?tab=6",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"enabled",label:"Enabled",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul id="navigationexample-4-enabled" class="chi-tabs">
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
<\/script>`}}}]}get tabsLinksHtml(){return this.tabLinks.map((i,n)=>`  <li${n===0?' class="-active"':""}>
    <a href="/">Tab Link</a>
  </li>`).join(`
`)}};X=Za([w({})],X);const ei={class:"chi-tabs chi-navigationExample chi-customExample"},ti=["href"];function ai(a,e,i,n,t,o){const l=E;return r(),T(l,{title:"Wait for animations",id:"wait-for-animations",tabs:a.exampleTabs,titleSize:"h4",headTabs:a.headTabs,additionalClasses:"-pb--4"},{"example-description":u(()=>e[0]||(e[0]=[s("p",{class:"-text"},[z("Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL. For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this component has the option to wait for the animation to finish and, then, it will redirect the user to the destination URL. You can enable this behavior by setting the "),s("code",null,"waitForAnimations"),z(" option to "),s("code",null,"true"),z(".")],-1)])),example:u(()=>[s("ul",ei,[(r(!0),c(f,null,$(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[s("a",{href:`#${m.href}`},v(m.text),9,ti)],2))),256))])]),_:1},8,["tabs","headTabs"])}const ii=C(X,[["render",ai]]);var ni=Object.defineProperty,si=Object.getOwnPropertyDescriptor,li=(a,e,i,n)=>{for(var t=n>1?void 0:n?si(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&ni(e,i,t),t};let R=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0},{href:"",text:"Tab Link",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}]);p(this,"tabLink",`<a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>`);p(this,"subLink",`<a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>`);p(this,"innerSubLink",`<a class="chi-tabs_item" href="#">
              <span class="chi-tabs_item-title">Subtab Link</span>
              <span class="chi-tabs_item-text">Subtab description</span>
              <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </a>`);p(this,"codeSnippets",{webComponent:"",htmlBlueprint:`<ul class="chi-tabs -vertical -icons -list -tree -lg">
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
</ul>`})}};R=li([w({})],R);const oi={class:"-p--3"},ri={class:"chi-tabs -vertical -icons -list -tree -lg",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},bi=["href","aria-controls"],ci={class:"chi-tabs_item-title"},di={key:0,class:"chi-tabs_item-text"},pi={key:0,class:"chi-tabs__subtabs"},mi={class:"chi-tabs_item",href:"#"},hi={class:"chi-tabs_item-title"},ui={key:0,class:"chi-tabs_item-text"},vi={key:0,class:"chi-tabs__subtabs"},_i={class:"chi-tabs_item",href:"#"},fi={class:"chi-tabs_item-title"},$i={key:0,class:"chi-tabs_item-text"};function Ti(a,e,i,n,t,o){const l=S,m=E;return r(),T(m,{title:"Vertical Tree Tabs",id:"vertical-tree-tabs",titleSize:"h4",tabs:a.exampleTabs},{example:u(()=>[s("div",oi,[s("ul",ri,[(r(!0),c(f,null,$(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[s("a",{class:"chi-tabs_item",href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},[e[0]||(e[0]=s("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),s("span",ci,v(b.text),1),b.description?(r(),c("span",di,v(b.description),1)):x("",!0),e[1]||(e[1]=s("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[s("div",{class:"chi-button__content"},[s("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))],8,bi),b.subLinks?(r(),c("ul",pi,[(r(!0),c(f,null,$(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[s("a",mi,[s("span",hi,v(d.text),1),d.description?(r(),c("span",ui,v(d.description),1)):x("",!0),e[2]||(e[2]=s("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[s("div",{class:"chi-button__content"},[s("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))]),d.subLinks?(r(),c("ul",vi,[(r(!0),c(f,null,$(d.subLinks,k=>(r(),c("li",{class:_([k.active?"-active":""])},[s("a",_i,[s("span",fi,v(k.text),1),k.description?(r(),c("span",$i,v(k.description),1)):x("",!0),e[3]||(e[3]=s("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[s("div",{class:"chi-button__content"},[s("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))])],2))),256))])):x("",!0)],2))),256))])):x("",!0)],2))),256))])])]),"code-webcomponent":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(l,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const gi=C(R,[["render",Ti]]);var xi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,wi=(a,e,i,n)=>{for(var t=n>1?void 0:n?Li(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&xi(e,i,t),t};let U=class extends L{constructor(){super(...arguments);p(this,"theme",pe())}get hideThemes(){return this.theme!=="portal"&&this.theme!=="colt"&&this.theme!=="brightspeed"}};U=wi([w({components:{TabbedNavigationFlat:ya,TabbedNavigationSolid:Aa,ComponentsContained:Ka,WaitForAnimation:ii,HorizontalFlat:xe,HorizontalSolid:Ge,VerticalFlat:Pe,VerticalSolid:We,LinkDefaultBehavior:ot,HorizontalTabsWithIcon:ht,VerticalTabsWithIcon:Ft,VerticalTabsWithIconAndDescription:zt,VerticalSubtabs:Rt,Bordered:ea,AdditionalSizesHorizontal:sa,AdditionalSizesVertical:Ea,VerticalTreeTabs:gi}})],U);function Ci(a,e,i,n,t,o){const l=g("HorizontalFlat"),m=g("HorizontalSolid"),b=g("VerticalFlat"),d=g("VerticalSolid"),k=g("LinkDefaultBehavior"),G=g("TabbedNavigationFlat"),Q=g("TabbedNavigationSolid"),Z=g("ComponentsContained"),ee=g("WaitForAnimation"),te=g("VerticalTreeTabs"),ae=g("HorizontalTabsWithIcon"),ie=g("VerticalTabsWithIcon"),ne=g("VerticalTabsWithIconAndDescription"),se=g("VerticalSubtabs"),le=g("Bordered"),oe=g("AdditionalSizesHorizontal"),re=g("AdditionalSizesVertical");return r(),c("div",null,[e[2]||(e[2]=s("h2",null,"Examples",-1)),e[3]||(e[3]=s("h3",null,"Horizontal",-1)),h(l,{isPortal:"!hideThemes"}),h(m),e[4]||(e[4]=s("h3",null,"Vertical",-1)),h(b),h(d),a.hideThemes?(r(),T(k,{key:0})):x("",!0),e[5]||(e[5]=s("h3",null,"Tabbed navigation bar",-1)),e[6]||(e[6]=s("p",{class:"-text"},[z("The navigation component is a combination of Chi tabs and dropdowns components. You must use "),s("code",null,"chi.navigation"),z(" function to instantiate the whole group of components, and there is no need for instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the descendants' tabs and dropdowns.")],-1)),e[7]||(e[7]=s("p",{class:"-text"},"Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu, or a wait-for-animation option.",-1)),h(G),h(Q),a.hideThemes?(r(),T(Z,{key:1})):x("",!0),a.hideThemes?(r(),T(ee,{key:2})):x("",!0),a.hideThemes?x("",!0):(r(),T(te,{key:3})),a.hideThemes?(r(),c(f,{key:4},[e[0]||(e[0]=s("h3",null,"Icons",-1)),h(ae),h(ie),h(ne),h(se),h(le),e[1]||(e[1]=s("h3",null,"Additional Size",-1)),h(oe),h(re)],64)):x("",!0)])}const Ei=C(U,[["render",Ci]]);var Si=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,zi=(a,e,i,n)=>{for(var t=n>1?void 0:n?Hi(e,i):e,o=a.length-1,l;o>=0;o--)(l=a[o])&&(t=(n?l(e,i,t):l(t))||t);return n&&t&&Si(e,i,t),t};let Y=class extends L{};Y=zi([w({components:{Accessibility:he,Examples:Ei,Properties:me}})],Y);const ki={class:"chi-grid__container -pt--3"},yi={class:"chi-tabs-panel -active",id:"examples"},Pi={class:"chi-tabs-panel",id:"properties"},Oi={class:"chi-tabs-panel",id:"accessibility"};function Bi(a,e,i,n,t,o){const l=ue,m=g("Examples"),b=g("Properties"),d=g("Accessibility");return r(),c("div",null,[h(l,{title:"Tabs",description:"Tabs are used to navigate between views within the same context.",tabs:a.pageTabs},null,8,["tabs"]),s("div",ki,[s("div",yi,[h(m)]),s("div",Pi,[h(b)]),s("div",Oi,[h(d)])])])}const hn=C(Y,[["render",Bi]]);export{hn as default};
