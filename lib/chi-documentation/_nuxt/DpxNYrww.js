var re=Object.defineProperty;var be=(a,e,i)=>e in a?re(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var p=(a,e,i)=>be(a,typeof e!="symbol"?e+"":e,i);import{o as r,f as $,w as u,a as l,n as _,c,F as f,i as T,t as v,b as h,l as g,d as k,j as ce,v as C}from"./CRBsHPO5.js";import{V as L,d as de,N as x}from"./Bdokak_-.js";import{_ as S}from"./Di-ELn2D.js";import{_ as H}from"./D1M_ALV-.js";import{_ as E}from"./Cx7J_iiN.js";import{_ as w}from"./DlAUqK2U.js";import"./CcrI_bxZ.js";import"./Cf-jS4dB.js";import"./Bxs95XXX.js";import"./CioVcaN-.js";var pe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,Y=(a,e,i,n)=>{for(var t=n>1?void 0:n?me(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&pe(e,i,t),t};let y=class extends L{constructor(){super(...arguments);p(this,"isPortal");p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__horizontal-flat" sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const s=t===0;return`  <li${s?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${s?"":`
      tabindex="-1"`}
      aria-selected="${s?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},s)=>`<div class="chi-tabs-panel${s===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__horizontal-flat");i&&(i.tabs=this.tabLinks)}};Y([de()],y.prototype,"isPortal",2);y=Y([x({})],y);const he=["active-tab"],ue={class:"-py--3"},ve={class:"-text"};function _e(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Flat",id:"horizontal-flat",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",{class:_(["-px--3 -bg--white",a.isPortal?"-pt--2":""])},[l("chi-tabs",{"active-tab":a.activeTab,id:"example__horizontal-flat","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d)),"sliding-border":""},null,40,he),l("div",ue,[(r(!0),c(f,null,T(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[l("div",ve,v(d.text),1)],2))),256))])],2)]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const fe=w(y,[["render",_e]]);var Te=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,ge=(a,e,i,n)=>{for(var t=n>1?void 0:n?$e(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Te(e,i,t),t};let P=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__vertical-flat" vertical sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-vertical-base'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const s=t===0;return`  <li${s?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${s?"":`
      tabindex="-1"`}
      aria-selected="${s?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},s)=>`<div class="chi-tabs-panel${s===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__vertical-flat");i&&(i.tabs=this.tabLinks)}};P=ge([x({})],P);const Le={class:"chi-grid -no-gutter -bg--white"},xe={class:"chi-col -w--6 -w-sm--4 -p--3"},we=["active-tab"],Ce={class:"chi-col -p--3"},Ee={class:"-text"};function Se(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Flat",id:"vertical-flat",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",Le,[l("div",xe,[l("chi-tabs",{"active-tab":a.activeTab,id:"example__vertical-flat",vertical:"","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d)),"sliding-border":""},null,40,we)]),l("div",Ce,[(r(!0),c(f,null,T(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[l("div",Ee,v(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const He=w(P,[["render",Se]]);var ke=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,ye=(a,e,i,n)=>{for(var t=n>1?void 0:n?ze(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&ke(e,i,t),t};let B=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__vertical-solid" size='xl' solid vertical sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-vertical-solid-bordered'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const s=t===0;return`  <li${s?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${s?"":`
      tabindex="-1"`}
      aria-selected="${s?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},s)=>`<div class="chi-tabs-panel${s===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__vertical-solid");i&&(i.tabs=this.tabLinks)}};B=ye([x({})],B);const Pe={class:"chi-grid -no-gutter -bg--white"},Be={class:"chi-col -w--6 -w-sm--4 -p--3"},Oe=["active-tab"],je={class:"chi-col -p--3"},De={class:"-text"};function Ae(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Solid",id:"vertical-solid",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",Pe,[l("div",Be,[l("chi-tabs",{"active-tab":a.activeTab,id:"example__vertical-solid",size:"xl",solid:"",vertical:"","sliding-border":"","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d))},null,40,Oe)]),l("div",je,[(r(!0),c(f,null,T(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[l("div",De,v(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Fe=w(B,[["render",Ae]]);var Ie=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ne=(a,e,i,n)=>{for(var t=n>1?void 0:n?Ve(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Ie(e,i,t),t};let O=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"tabsContent",[{id:"tab-a",text:"Tab 1 content"},{id:"tab-b",text:"Tab 2 content"},{id:"tab-c",text:"Tab 3 content"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__horizontal-solid" size="lg" solid sliding-border></chi-tabs>

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

<script>chi.tab(document.getElementById('example-horizontal-solid-bordered'));<\/script>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const s=t===0;return`  <li${s?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${s?"":`
      tabindex="-1"`}
      aria-selected="${s?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(i){return this.tabsContent.map(({text:n,id:t},s)=>`<div class="chi-tabs-panel${s===0?" -active":""}" id="${i?`${t}_content`:t}" role="tabpanel">${n}</div>`).join(`
`)}mounted(){const i=document.querySelector("#example__horizontal-solid");i&&(i.tabs=this.tabLinks)}};O=Ne([x({})],O);const We={class:"-px--3 -pt--2 -bg--white"},Me=["active-tab"],qe={class:"-py--3"},Je={class:"-text"};function Xe(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Solid",id:"horizontal-solid",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",We,[l("chi-tabs",{"active-tab":a.activeTab,id:"example__horizontal-solid",size:"lg","sliding-border":"",solid:"","on:chiTabChange":e[0]||(e[0]=(...d)=>a.chiTabChange&&a.chiTabChange(...d))},null,40,Me),l("div",qe,[(r(!0),c(f,null,T(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",a.activeTab===d.id?"-active":""]),role:"tabpanel"},[l("div",Je,v(d.text),1)],2))),256))])])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Re=w(O,[["render",Xe]]);var Ue=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ke=(a,e,i,n)=>{for(var t=n>1?void 0:n?Ye(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Ue(e,i,t),t};let j=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{id:"webcomponent",label:"Web Component",disabled:!0},{id:"htmlblueprint",label:"HTML Blueprint",active:!0}]);p(this,"tabLinks",[{id:"a2",label:"Tab a",active:!0},{id:"b2",label:"Tab b"},{id:"c2",label:"Tab c"}]);p(this,"tabsContent",[{id:"a2",text:"Content for tab a",active:!0},{id:"b2",text:"Content for tab b"},{id:"c2",text:"Content for tab c"}])}get codeSnippets(){return{webComponent:"",htmlblueprint:`<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">
${this.generateTabsHtml()}
  <li><a href="https://lib.lumen.com/chi/" target="_self">External Link</a></li>
</ul>

${this.generateTabsContentHtml()}
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`}}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const s=t===0;return`  <li${s?' class="-active"':""}>
    <a
      href="#${n}"
      role="tab"${s?"":`
      tabindex="-1"`}
      aria-selected="${s?"true":"false"}"
      aria-controls="${n}">${i}</a>
  </li>`}).join(`
`)}generateTabsContentHtml(){return this.tabsContent.map(({text:i,id:n},t)=>`<div class="chi-tabs-panel${t===0?" -active":""}" id="${n}" role="tabpanel">
  <p class="-text">${i}</p>
</div>`).join(`
`)}mounted(){chi.tab(document.getElementById("example-default-link-behavior"))}};j=Ke([x({})],j);const Ge={class:"chi-tabs",id:"example-default-link-behavior",role:"tablist","aria-label":"example-default-link-behavior"},Qe=["href","aria-controls"],Ze={class:"-py--2"},et=["id"],tt={class:"-text"};function at(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Keep default link behavior",id:"link-default-behavior",tabs:a.exampleTabs,additionalClasses:"-pb--4"},{"example-description":u(()=>e[0]||(e[0]=[l("p",{class:"-text"},"By default, Chi JavaScript enabled tabs will ignore default link behavior. To preserve it, specify a target property on the link.",-1)])),example:u(()=>[l("ul",Ge,[(r(!0),c(f,null,T(a.tabLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",{href:`#${d.id}`,role:"tab","aria-selected":"true","aria-controls":d.id},v(d.label),9,Qe)],2))),256)),e[1]||(e[1]=l("li",null,[l("a",{href:"https://lib.lumen.com/chi/",target:"_self"},"External Link")],-1))]),l("div",Ze,[(r(!0),c(f,null,T(a.tabsContent,d=>(r(),c("div",{class:_(["chi-tabs-panel",[d.active?"-active":""]]),id:d.id,role:"tabpanel"},[l("div",tt,v(d.text),1)],10,et))),256))])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const it=w(j,[["render",at]]);var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,st=(a,e,i,n)=>{for(var t=n>1?void 0:n?lt(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&nt(e,i,t),t};let D=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeHeadTab","base");p(this,"tabLinks",[{href:"#",text:"Active Tab",active:!0},{href:"#",text:"Tab Link"},{href:"#",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -icons">
${this.tabsLinksHtml}
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -inverse -icons">
${this.tabsLinksHtml}
</ul>`}}}]}get tabsLinksHtml(){return this.tabLinks.map(({text:i,active:n})=>`  <li${n?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${i}</span>
    </a>
  </li>`).join(`
`)}get isInverse(){return this.activeHeadTab==="inverse"}changeHeadTab(i){this.activeHeadTab=i.id}};D=st([x({})],D);const ot=["id"],rt=["href","aria-controls"];function bt(a,e,i,n,t,s){const o=E;return r(),$(o,{title:"Horizontal tabs with icons",id:"horizontal-tabs-with-icons",tabs:a.exampleTabs,titleSize:"h4",headTabs:a.headTabs,onChiHeadTabsChange:a.changeHeadTab,additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",{class:_(["-px--3",a.isInverse?"-bg--black":"-bg--white"])},[l("ul",{class:_(["chi-tabs -icons",[a.isInverse?"-inverse":""]]),id:`example-horizontal-with-icons-${a.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-horizontal"},[(r(!0),c(f,null,T(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[l("a",{href:`#${m.href}`,role:"tab","aria-selected":"true","aria-controls":m.href},[e[0]||(e[0]=l("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),l("span",null,v(m.text),1)],8,rt)],2))),256))],10,ot)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const ct=w(D,[["render",bt]]);var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,mt=(a,e,i,n)=>{for(var t=n>1?void 0:n?pt(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&dt(e,i,t),t};let A=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Tab Link",description:"Tab description",active:!0},{href:"",text:"Active Tab",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}])}get codeSnippets(){return{webComponent:"",htmlBlueprint:`<ul class="chi-tabs -vertical -icons -list">
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
`)}};A=mt([x({})],A);const ht={class:"-bg--white"},ut={class:"-p--3"},vt={class:"chi-tabs -icons -vertical -list",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},_t=["href","aria-controls"],ft={class:"chi-tabs_item-title"},Tt={key:0,class:"chi-tabs_item-text"},$t={key:0,class:"chi-tabs__subtabs"},gt={class:"chi-tabs_item",href:"#"},Lt={class:"chi-tabs_item-title"},xt={key:0,class:"chi-tabs_item-text"};function wt(a,e,i,n,t,s){const o=S,m=E;return r(),$(m,{title:"Vertical tabs with icons and description",id:"vertical-tabs-with-icons-and-description",titleSize:"h4",tabs:a.exampleTabs,additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",ht,[l("div",ut,[l("ul",vt,[(r(!0),c(f,null,T(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",{class:"chi-tabs_item",href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},[e[0]||(e[0]=l("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),l("span",ft,v(b.text),1),b.description?(r(),c("span",Tt,v(b.description),1)):g("",!0)],8,_t),b.subLinks?(r(),c("ul",$t,[(r(!0),c(f,null,T(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",gt,[l("span",Lt,v(d.text),1),d.description?(r(),c("span",xt,v(d.description),1)):g("",!0)])],2))),256))])):g("",!0)],2))),256))])])])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ct=w(A,[["render",wt]]);var Et=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Ht=(a,e,i,n)=>{for(var t=n>1?void 0:n?St(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Et(e,i,t),t};let F=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeHeadTab","base");p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical -icons">
${this.tabsLinksHtml}
</ul>`}}},{id:"inverse",label:"Inverse",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical -inverse -icons">
${this.tabsLinksHtml}
</ul>`}}}]}get tabsLinksHtml(){return this.tabLinks.map(({text:e,active:i})=>`  <li${i?' class="-active"':""}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${e}</span>
    </a>
  </li>`).join(`
`)}get isInverse(){return this.activeHeadTab==="inverse"}changeHeadTab(e){this.activeHeadTab=e.id}};F=Ht([x({})],F);const kt=["id"],zt=["href","aria-controls"],yt={key:0,class:"chi-tabs__subtabs"},Pt={href:"#"};function Bt(a,e,i,n,t,s){const o=E;return r(),$(o,{title:"Vertical tabs with icons",id:"vertical-tabs-with-icons",tabs:a.exampleTabs,headTabs:a.headTabs,titleSize:"h4",onChiHeadTabsChange:a.changeHeadTab,additionalClasses:"-bg--grey-20"},{example:u(()=>[l("div",{class:_(["-p--3",a.isInverse?"-bg--black":"-bg--white"])},[l("ul",{class:_(["chi-tabs -icons -vertical",[a.isInverse?"-inverse":""]]),id:`example-vertical-with-icons-${a.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(r(!0),c(f,null,T(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[l("a",{href:`#${m.href}`,role:"tab","aria-selected":"true","aria-controls":m.href},[e[0]||(e[0]=l("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),l("span",null,v(m.text),1)],8,zt),m.subLinks?(r(),c("ul",yt,[(r(!0),c(f,null,T(m.subLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",Pt,v(b.text),1)],2))),256))])):g("",!0)],2))),256))],10,kt)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const Ot=w(F,[["render",Bt]]);var jt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,At=(a,e,i,n)=>{for(var t=n>1?void 0:n?Dt(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&jt(e,i,t),t};let I=class extends L{constructor(){super(...arguments);p(this,"activeHeadTab","base");p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab link"},{href:"",text:"Tab link"}]);p(this,"headTabs",[{active:!0,id:"base",label:"Base",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul class="chi-tabs -vertical">
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
`)}changeHeadTab(i){this.activeHeadTab=i.id}};I=At([x({})],I);const Ft=["id"],It=["href","aria-controls"],Vt={key:0,class:"chi-tabs__subtabs"},Nt={href:"#"};function Wt(a,e,i,n,t,s){const o=E;return r(),$(o,{title:"Vertical Subtabs",id:"vertical-subtabs",additionalClasses:"-bg--grey-20",tabs:a.exampleTabs,headTabs:a.headTabs,onChiHeadTabsChange:a.changeHeadTab},{example:u(()=>[l("div",{class:_(["-p--3",a.isInverse?"-bg--black":"-bg--white"])},[l("ul",{class:_(["chi-tabs -vertical",[a.isInverse?"-inverse":""]]),id:`example-vertical-with-icons-${a.activeHeadTab}`,role:"tablist","aria-label":"chi-tabs-vertical"},[(r(!0),c(f,null,T(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[l("a",{href:`#${m.href}`,role:"tab","aria-selected":"true","aria-controls":m.href},v(m.text),9,It),m.subLinks?(r(),c("ul",Vt,[(r(!0),c(f,null,T(m.subLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",Nt,v(b.text),1)],2))),256))])):g("",!0)],2))),256))],10,Ft)],2)]),_:1},8,["tabs","headTabs","onChiHeadTabsChange"])}const Mt=w(I,[["render",Wt]]);var qt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Xt=(a,e,i,n)=>{for(var t=n>1?void 0:n?Jt(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&qt(e,i,t),t};let V=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"activeTab","tab-a");p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__bordered" border sliding-border></chi-tabs>

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
</ul>`}}chiTabChange(i){this.activeTab=i.detail.id}generateTabsHtml(){return this.tabLinks.map(({label:i,id:n},t)=>{const s=t===0;return`  <li${s?' class="-active"':""}>
    <a href="#">${s?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)}mounted(){const i=document.querySelector("#example__bordered");i&&(i.tabs=this.tabLinks)}};V=Xt([x({})],V);const Rt={class:"-p--3 -bg--white"},Ut=["active-tab"];function Yt(a,e,i,n,t,s){const o=S,m=E;return r(),$(m,{title:"Bordered",id:"bordered",additionalClasses:"-bg--grey-20",tabs:a.exampleTabs},{example:u(()=>[l("div",Rt,[l("chi-tabs",{"active-tab":a.activeTab,id:"example__bordered",border:"","on:chiTabChange":e[0]||(e[0]=(...b)=>a.chiTabChange&&a.chiTabChange(...b)),"sliding-border":""},null,40,Ut)])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Kt=w(V,[["render",Yt]]);var Gt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Zt=(a,e,i,n)=>{for(var t=n>1?void 0:n?Qt(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Gt(e,i,t),t};let N=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{label:"Active Tab",id:"tab-a"},{label:"Tab Link",id:"tab-b"},{label:"Tab Link",id:"tab-c"}]);p(this,"sizes",[{name:"X-small",value:"xs"},{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"}])}get codeSnippets(){return{webComponent:this.webComponentHtml,htmlBlueprint:this.blueprintHtml}}get tabsHtml(){return this.tabLinks.map((i,n)=>{const t=n===0;return`  <li${t?' class="-active"':""}>
    <a href="#">${t?"Active tab":"Tab link"}</a>
  </li>`}).join(`
`)}get webComponentHtml(){return this.sizes.map(({name:i,value:n})=>`<!-- ${i} -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-${n}"${n==="md"?"":` size="${n}`} sliding-border></chi-tabs>`).join(`

`)}get blueprintHtml(){return this.sizes.map(({name:i,value:n})=>`<!-- ${i} -->
<ul class="chi-tabs${n==="md"?"":` -${n}`}">
${this.tabsHtml}
</ul>`).join(`

`)}mounted(){const i=document.querySelector("#example__additional-sizes-horizontal-xs"),n=document.querySelector("#example__additional-sizes-horizontal-sm"),t=document.querySelector("#example__additional-sizes-horizontal-md"),s=document.querySelector("#example__additional-sizes-horizontal-lg");i&&(i.tabs=this.tabLinks),n&&(n.tabs=this.tabLinks),t&&(t.tabs=this.tabLinks),s&&(s.tabs=this.tabLinks)}};N=Zt([x({})],N);function ea(a,e,i,n,t,s){const o=S,m=E;return r(),$(m,{title:"Horizontal",id:"additional-sizes-horizontal",tabs:a.exampleTabs,additionalClasses:"-pb--4",titleSize:"h4"},{example:u(()=>e[0]||(e[0]=[l("p",{class:"-text--bold"},"X-small",-1),l("div",{class:"chi-divider -mb--2"},null,-1),l("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-xs",size:"xs","sliding-border":""},null,-1),l("p",{class:"-text--bold -mt--6"},"Small",-1),l("div",{class:"chi-divider -mb--2"},null,-1),l("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-sm",size:"sm","sliding-border":""},null,-1),l("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1),l("div",{class:"chi-divider -mb--2"},null,-1),l("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-md","sliding-border":""},null,-1),l("p",{class:"-text--bold -mt--6"},"Large",-1),l("div",{class:"chi-divider -mb--2"},null,-1),l("chi-tabs",{"active-tab":"tab-a",id:"example__additional-sizes-horizontal-lg",size:"lg","sliding-border":""},null,-1)])),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const ta=w(N,[["render",ea]]);var aa=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,na=(a,e,i,n)=>{for(var t=n>1?void 0:n?ia(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&aa(e,i,t),t};let W=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0,subLinks:[{href:"",text:"Subtab Link",active:!0},{href:"",text:"Subtab Link"},{href:"",text:"Subtab Link"}]},{href:"",text:"Tab Link"},{href:"",text:"Tab Link"}]);p(this,"sizes",[{name:"Small",value:"sm"},{name:"Medium (Base)",value:"md"},{name:"Large",value:"lg"},{name:"X-Large",value:"xl"}])}get codeSnippets(){return{webComponent:"",htmlBlueprint:this.tabsHtml}}get subTabsHtml(){return this.tabLinks.map((i,n)=>`      <li${n===0?' class="-active"':""}>
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

`)}};W=na([x({})],W);const la={class:"chi-tabs -vertical -sm"},sa=["href","aria-controls"],oa={key:0,class:"chi-tabs__subtabs"},ra={href:"#"},ba={class:"chi-tabs -vertical"},ca=["href","aria-controls"],da={key:0,class:"chi-tabs__subtabs"},pa={href:"#"},ma={class:"chi-tabs -vertical -lg"},ha=["href","aria-controls"],ua={key:0,class:"chi-tabs__subtabs"},va={href:"#"},_a={class:"chi-tabs -vertical -xl"},fa=["href","aria-controls"],Ta={key:0,class:"chi-tabs__subtabs"},$a={href:"#"};function ga(a,e,i,n,t,s){const o=S,m=E;return r(),$(m,{title:"Vertical",id:"additional-sizes-vertical",tabs:a.exampleTabs,additionalClasses:"-pb--4",titleSize:"h4"},{example:u(()=>[e[0]||(e[0]=l("p",{class:"-text--bold"},"Small",-1)),e[1]||(e[1]=l("div",{class:"chi-divider -mb--2"},null,-1)),l("ul",la,[(r(!0),c(f,null,T(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,sa),b.subLinks?(r(),c("ul",oa,[(r(!0),c(f,null,T(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",ra,v(d.text),1)],2))),256))])):g("",!0)],2))),256))]),e[2]||(e[2]=l("p",{class:"-text--bold -mt--6"},"Medium (Base)",-1)),e[3]||(e[3]=l("div",{class:"chi-divider -mb--2"},null,-1)),l("ul",ba,[(r(!0),c(f,null,T(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,ca),b.subLinks?(r(),c("ul",da,[(r(!0),c(f,null,T(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",pa,v(d.text),1)],2))),256))])):g("",!0)],2))),256))]),e[4]||(e[4]=l("p",{class:"-text--bold -mt--6"},"Large",-1)),e[5]||(e[5]=l("div",{class:"chi-divider -mb--2"},null,-1)),l("ul",ma,[(r(!0),c(f,null,T(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,ha),b.subLinks?(r(),c("ul",ua,[(r(!0),c(f,null,T(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",va,v(d.text),1)],2))),256))])):g("",!0)],2))),256))]),e[6]||(e[6]=l("p",{class:"-text--bold -mt--6"},"X-Large",-1)),e[7]||(e[7]=l("div",{class:"chi-divider -mb--2"},null,-1)),l("ul",_a,[(r(!0),c(f,null,T(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",{href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},v(b.text),9,fa),b.subLinks?(r(),c("ul",Ta,[(r(!0),c(f,null,T(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",$a,v(d.text),1)],2))),256))])):g("",!0)],2))),256))])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const La=w(W,[["render",ga]]);var xa=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Ca=(a,e,i,n)=>{for(var t=n>1?void 0:n?wa(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&xa(e,i,t),t};let M=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{label:"Active Tab",id:"tab-tnf-a",children:[{label:"Elem 1",id:"tab-tnf-a-1"},{label:"Elem 2",id:"tab-tnf-a-2"},{label:"Elem 3 more",id:"tab-tnf-a-3",children:[{label:"Elem 3.1",id:"tab-tnf-a-3-1"},{label:"Elem 3.2",id:"tab-tnf-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tnf-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tnf-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tnf-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tnf-a-3-3"},{label:"Elem 3.4",id:"tab-tnf-a-3-4"}]},{label:"Elem 4",id:"tab-tnf-a-4"}]},{label:"Tab Link",id:"tab-tnf-b"},{label:"Tab Link",id:"tab-tnf-c"},{label:"Tab Link",id:"tab-tnf-d"},{label:"Tab Link",id:"tab-tnf-e"},{label:"Tab Link",id:"tab-tnf-f"},{label:"Tab Link",id:"tab-tnf-g"},{label:"Tab Dropdown",id:"tab-tnf-h",children:[{label:"Element 1",id:"tab-tnf-h-1"},{label:"Element 2",id:"tab-tnf-h-2",children:[{label:"Elem 1",id:"tab-tnf-h-2-1"},{label:"Elem 2",id:"tab-tnf-h-2-2"},{label:"Elem 3 more",id:"tab-tnf-h-2-3",children:[{label:"Elem 3.1",id:"tab-tnf-h-2-3-1"},{label:"Elem 3.2",id:"tab-tnf-h-2-3-2"},{label:"Elem 3.3",id:"tab-tnf-h-2-3-3"}]},{label:"Elem 4",id:"tab-tnf-h-2-4"}]},{label:"Element 3",id:"tab-tnf-h-3"}]}])}get codeSnippets(){return{webcomponent:`<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_flat" sliding-border></chi-tabs>

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
`)}generateTabsDropdownLinksHtml(){return[1,2,3,4].map(i=>`<a class="chi-dropdown__menu-item" href="#">Elem 3.${i}</a>`).join("")}mounted(){const i=document.querySelector("#example__tabbed_navigation_flat");i&&(i.tabs=this.tabLinks)}};M=Ca([x({})],M);function Ea(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Flat",id:"tabbed-navigation-flat",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{example:u(()=>e[0]||(e[0]=[l("chi-tabs",{"active-tab":"tab-tnf-a",id:"example__tabbed_navigation_flat","sliding-border":""},null,-1)])),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Sa=w(M,[["render",Ea]]);var Ha=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,za=(a,e,i,n)=>{for(var t=n>1?void 0:n?ka(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Ha(e,i,t),t};let q=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{label:"Active Tab",id:"tab-tns-a",children:[{label:"Elem 1",id:"tab-tns-a-1"},{label:"Elem 2",id:"tab-tns-a-2"},{label:"Elem 3 more",id:"tab-tns-a-3",children:[{label:"Elem 3.1",id:"tab-tns-a-3-1"},{label:"Elem 3.2",id:"tab-tns-a-3-2",children:[{label:"Elem 3.2.1",id:"tab-tns-a-3-2-1"},{label:"Elem 3.2.2",id:"tab-tns-a-3-2-2"},{label:"Elem 3.2.3",id:"tab-tns-a-3-2-3"}]},{label:"Elem 3.3",id:"tab-tns-a-3-3"},{label:"Elem 3.4",id:"tab-tns-a-3-4"}]},{label:"Elem 4",id:"tab-tns-a-4"}]},{label:"Tab Link",id:"tab-tns-b"},{label:"Tab Link",id:"tab-tns-c"},{label:"Tab Link",id:"tab-tns-d"},{label:"Tab Link",id:"tab-tns-e"},{label:"Tab Dropdown",id:"tab-tns-f",children:[{label:"Element 1",id:"tab-tns-f-1"},{label:"Element 2",id:"tab-tns-f-2",children:[{label:"Elem 1",id:"tab-tns-f-2-1"},{label:"Elem 2",id:"tab-tns-f-2-2"},{label:"Elem 3 more",id:"tab-tns-f-2-3",children:[{label:"Elem 3.1",id:"tab-tns-f-2-3-1"},{label:"Elem 3.2",id:"tab-tns-f-2-3-2"},{label:"Elem 3.3",id:"tab-tns-f-2-3-3"}]},{label:"Elem 4",id:"tab-tns-f-2-4"}]},{label:"Element 3",id:"tab-tns-f-3"}]}]);p(this,"codeSnippets",{webcomponent:`<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_solid" size="lg" solid sliding-border></chi-tabs>

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
`)}generateTabsDropdownLinksHtml(){return[1,2,3,4].map(e=>`<a class="chi-dropdown__menu-item" href="#">Elem 3.${e}</a>`).join("")}mounted(){const e=document.querySelector("#example__tabbed_navigation_solid");e&&(e.tabs=this.tabLinks)}};q=za([x({})],q);function ya(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Solid",id:"tabbed-navigation-solid",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{example:u(()=>e[0]||(e[0]=[l("chi-tabs",{"active-tab":"tab-tns-a",id:"example__tabbed_navigation_solid",size:"lg",solid:"","sliding-border":""},null,-1)])),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pa=w(q,[["render",ya]]);var Ba=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,ja=(a,e,i,n)=>{for(var t=n>1?void 0:n?Oa(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Ba(e,i,t),t};let J=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}])}get codeSnippets(){return{webcomponent:"",htmlblueprint:`<ul class="chi-tabs" id="navigation-components-contained">
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
`)}generateTabsDropdownLinksHtml(i,n){return i.map(t=>`<a class="chi-dropdown__menu-item" href="#">${n}${t}</a>`).join("")}mounted(){chi.navigation(document.getElementById("navigation-components-contained"))}};J=ja([x({})],J);const Da={class:"chi-tabs chi-navigationExample",id:"navigation-components-contained"},Aa={class:"chi-dropdown -active"},Fa={class:"chi-dropdown__menu"},Ia={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},Va={class:"chi-dropdown__menu"},Na={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"},Wa={class:"chi-dropdown"},Ma={class:"chi-dropdown__menu"},qa={class:"chi-dropdown__menu-item",href:"#exampleHashTarget"};function Ja(a,e,i,n,t,s){const o=S,m=H,b=E;return r(),$(b,{title:"Components contained",id:"components-contained",tabs:a.exampleTabs,titleSize:"h4",additionalClasses:"-pb--4"},{"example-description":u(()=>e[0]||(e[0]=[l("p",{class:"-text"},[k("As navigation component is built from other primitive Chi components, most of the components behavior can be replicated on the navigation component. For example, you can use the "),l("code",null,"-animate"),k(" class on the dropdowns to make the chevron rotate when activated.")],-1)])),example:u(()=>[l("ul",Da,[l("li",Aa,[e[3]||(e[3]=l("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Active Tab",-1)),l("div",Fa,[(r(),c(f,null,T([1,2],d=>l("a",Ia,"Elem "+v(d),1)),64)),l("div",null,[e[1]||(e[1]=l("a",{class:"chi-dropdown__menu-item chi-dropdown__trigger -animate",href:"#"},"Elem 3 more",-1)),l("div",Va,[(r(),c(f,null,T([1,2,3,4],d=>l("a",Na,"Elem 3."+v(d),1)),64))])]),e[2]||(e[2]=l("a",{class:"chi-dropdown__menu-item",href:"#"},"Elem 4",-1))])]),(r(),c(f,null,T([1,2],d=>l("li",null,e[4]||(e[4]=[l("a",{href:"#exampleHashTarget"},"Tab Link",-1)]))),64)),l("li",Wa,[e[5]||(e[5]=l("a",{class:"chi-dropdown__trigger -animate",href:"#"},"Tab Link",-1)),l("div",Ma,[(r(),c(f,null,T([1,2,3],d=>l("a",qa,"Element "+v(d),1)),64))])])])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(m),h(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Xa=w(J,[["render",Ja]]);var Ra=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,Ya=(a,e,i,n)=>{for(var t=n>1?void 0:n?Ua(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&Ra(e,i,t),t};let X=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"?tab=1",text:"Tab Link",active:!0},{href:"?tab=2",text:"Tab Link"},{href:"?tab=3",text:"Tab Link"},{href:"?tab=4",text:"Tab Link"},{href:"?tab=5",text:"Tab Link"},{href:"?tab=6",text:"Tab Link"}])}get headTabs(){return[{active:!0,id:"enabled",label:"Enabled",codeSnippets:{webComponent:{code:""},htmlBlueprint:{code:`<ul id="navigationexample-4-enabled" class="chi-tabs">
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
`)}};X=Ya([x({})],X);const Ka={class:"chi-tabs chi-navigationExample chi-customExample"},Ga=["href"];function Qa(a,e,i,n,t,s){const o=E;return r(),$(o,{title:"Wait for animations",id:"wait-for-animations",tabs:a.exampleTabs,titleSize:"h4",headTabs:a.headTabs,additionalClasses:"-pb--4"},{"example-description":u(()=>e[0]||(e[0]=[l("p",{class:"-text"},[k("Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL. For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this component has the option to wait for the animation to finish and, then, it will redirect the user to the destination URL. You can enable this behavior by setting the "),l("code",null,"waitForAnimations"),k(" option to "),l("code",null,"true"),k(".")],-1)])),example:u(()=>[l("ul",Ka,[(r(!0),c(f,null,T(a.tabLinks,m=>(r(),c("li",{class:_([m.active?"-active":""])},[l("a",{href:`#${m.href}`},v(m.text),9,Ga)],2))),256))])]),_:1},8,["tabs","headTabs"])}const Za=w(X,[["render",Qa]]);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ai=(a,e,i,n)=>{for(var t=n>1?void 0:n?ti(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&ei(e,i,t),t};let R=class extends L{constructor(){super(...arguments);p(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"tabLinks",[{href:"",text:"Active Tab",active:!0},{href:"",text:"Tab Link",description:"Tab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description",subLinks:[{href:"",text:"Subtab Link",description:"Subtab description"},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Subtab Link",description:"Subtab description"}]},{href:"",text:"Tab Link",description:"Tab description"}]);p(this,"tabLink",`<a class="chi-tabs_item" href="#">
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
</ul>`})}};R=ai([x({})],R);const ii={class:"-p--3"},ni={class:"chi-tabs -vertical -icons -list -tree -lg",id:"example-vertical-with-icons-and-description",role:"tablist","aria-label":"chi-tabs-vertical"},li=["href","aria-controls"],si={class:"chi-tabs_item-title"},oi={key:0,class:"chi-tabs_item-text"},ri={key:0,class:"chi-tabs__subtabs"},bi={class:"chi-tabs_item",href:"#"},ci={class:"chi-tabs_item-title"},di={key:0,class:"chi-tabs_item-text"},pi={key:0,class:"chi-tabs__subtabs"},mi={class:"chi-tabs_item",href:"#"},hi={class:"chi-tabs_item-title"},ui={key:0,class:"chi-tabs_item-text"};function vi(a,e,i,n,t,s){const o=S,m=E;return r(),$(m,{title:"Vertical Tree Tabs",id:"vertical-tree-tabs",titleSize:"h4",tabs:a.exampleTabs},{example:u(()=>[l("div",ii,[l("ul",ni,[(r(!0),c(f,null,T(a.tabLinks,b=>(r(),c("li",{class:_([b.active?"-active":""])},[l("a",{class:"chi-tabs_item",href:`#${b.href}`,role:"tab","aria-selected":"true","aria-controls":b.href},[e[0]||(e[0]=l("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),l("span",si,v(b.text),1),b.description?(r(),c("span",oi,v(b.description),1)):g("",!0),e[1]||(e[1]=l("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[l("div",{class:"chi-button__content"},[l("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))],8,li),b.subLinks?(r(),c("ul",ri,[(r(!0),c(f,null,T(b.subLinks,d=>(r(),c("li",{class:_([d.active?"-active":""])},[l("a",bi,[l("span",ci,v(d.text),1),d.description?(r(),c("span",di,v(d.description),1)):g("",!0),e[2]||(e[2]=l("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[l("div",{class:"chi-button__content"},[l("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))]),d.subLinks?(r(),c("ul",pi,[(r(!0),c(f,null,T(d.subLinks,z=>(r(),c("li",{class:_([z.active?"-active":""])},[l("a",mi,[l("span",hi,v(z.text),1),z.description?(r(),c("span",ui,v(z.description),1)):g("",!0),e[3]||(e[3]=l("button",{class:"chi-button -icon -flat -no-hover","aria-label":"Button action"},[l("div",{class:"chi-button__content"},[l("i",{class:"chi-icon icon-more-vert","aria-hidden":"true"})])],-1))])],2))),256))])):g("",!0)],2))),256))])):g("",!0)],2))),256))])])]),"code-webcomponent":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.webComponent},null,8,["code"])]),"code-htmlblueprint":u(()=>[h(o,{class:"html",lang:"html",code:a.codeSnippets.htmlBlueprint},null,8,["code"])]),_:1},8,["tabs"])}const _i=w(R,[["render",vi]]);var fi=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,$i=(a,e,i,n)=>{for(var t=n>1?void 0:n?Ti(e,i):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(n?o(e,i,t):o(t))||t);return n&&t&&fi(e,i,t),t};let U=class extends L{constructor(){super(...arguments);p(this,"theme",ce())}get hideThemes(){return this.theme!=="portal"&&this.theme!=="colt"&&this.theme!=="brightspeed"}};U=$i([x({components:{TabbedNavigationFlat:Sa,TabbedNavigationSolid:Pa,ComponentsContained:Xa,WaitForAnimation:Za,HorizontalFlat:fe,HorizontalSolid:Re,VerticalFlat:He,VerticalSolid:Fe,LinkDefaultBehavior:it,HorizontalTabsWithIcon:ct,VerticalTabsWithIcon:Ot,VerticalTabsWithIconAndDescription:Ct,VerticalSubtabs:Mt,Bordered:Kt,AdditionalSizesHorizontal:ta,AdditionalSizesVertical:La,VerticalTreeTabs:_i}})],U);function gi(a,e,i,n,t,s){const o=C("HorizontalFlat"),m=C("HorizontalSolid"),b=C("VerticalFlat"),d=C("VerticalSolid"),z=C("LinkDefaultBehavior"),K=C("TabbedNavigationFlat"),G=C("TabbedNavigationSolid"),Q=C("ComponentsContained"),Z=C("WaitForAnimation"),ee=C("VerticalTreeTabs"),te=C("HorizontalTabsWithIcon"),ae=C("VerticalTabsWithIcon"),ie=C("VerticalTabsWithIconAndDescription"),ne=C("VerticalSubtabs"),le=C("Bordered"),se=C("AdditionalSizesHorizontal"),oe=C("AdditionalSizesVertical");return r(),c("div",null,[e[2]||(e[2]=l("h2",null,"Examples",-1)),e[3]||(e[3]=l("h3",null,"Horizontal",-1)),h(o,{isPortal:"!hideThemes"}),h(m),e[4]||(e[4]=l("h3",null,"Vertical",-1)),h(b),h(d),a.hideThemes?(r(),$(z,{key:0})):g("",!0),e[5]||(e[5]=l("h3",null,"Tabbed navigation bar",-1)),e[6]||(e[6]=l("p",{class:"-text"},[k("The navigation component is a combination of Chi tabs and dropdowns components. You must use "),l("code",null,"chi.navigation"),k(" function to instantiate the whole group of components, and there is no need for instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the descendants' tabs and dropdowns.")],-1)),e[7]||(e[7]=l("p",{class:"-text"},"Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu, or a wait-for-animation option.",-1)),h(K),h(G),a.hideThemes?(r(),$(Q,{key:1})):g("",!0),a.hideThemes?(r(),$(Z,{key:2})):g("",!0),a.hideThemes?g("",!0):(r(),$(ee,{key:3})),a.hideThemes?(r(),c(f,{key:4},[e[0]||(e[0]=l("h3",null,"Icons",-1)),h(te),h(ae),h(ie),h(ne),h(le),e[1]||(e[1]=l("h3",null,"Additional Size",-1)),h(se),h(oe)],64)):g("",!0)])}const Ui=w(U,[["render",gi]]);export{Ui as default};
