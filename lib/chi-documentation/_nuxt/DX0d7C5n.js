var N=Object.defineProperty;var j=(t,e,i)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var p=(t,e,i)=>j(t,typeof e!="symbol"?e+"":e,i);import{V as g,N as _}from"./NAah3XrW.js";import{_ as T}from"./onyWiYp2.js";import{_ as $}from"./CS2TcPBX.js";import{_ as C}from"./CAQzZ0uH.js";import{o as v,h as x,w as l,a as o,c as D,F as V,i as w,d as m,b as s,q as O,l as H,m as b}from"./CEIPSiTs.js";import{_ as f}from"./DlAUqK2U.js";import{_ as q}from"./CnZFJwg2.js";import z from"./C5o8Qc0r.js";import W from"./BL-oKWFl.js";import{s as U}from"./DtNz156Q.js";import{_ as F}from"./DFOICsuk.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,Y=(t,e,i,n)=>{for(var r=n>1?void 0:n?R(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&Q(e,i,r),r};let y=class extends g{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:`<!-- Trigger -->
<chi-button id="drawer-interaction-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-interaction" position="left" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-interaction');
  var drawerTrigger = document.getElementById('drawer-interaction-trigger');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`,vue:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="left"
  :active="this.drawerActive"
  :noHeader="true"
  backdrop
>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`,htmlblueprint:`<!-- Trigger -->
<button id="drawer-interaction-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-interaction" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-interaction" class="chi-drawer -left">
      <button class="chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-drawer__content">
        <div class="-p--2 -pt--6 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-interaction-trigger'));<\/script>`})}toggleDrawer(){this.$refs.drawer.toggle()}};y=Y([_({})],y);const G={class:"-position--relative -z--0 -overflow--hidden",style:{height:"20rem"}},K={class:"-p--3"},X={class:"-d--flex -align-items--center"},Z={class:"-text -mb--3"},ee={position:"left",backdrop:"","no-header":"",ref:"drawer"};function te(t,e,i,n,r,d){const a=T,u=$,h=C;return v(),x(h,{title:"Interaction",id:"interaction",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":l(()=>e[1]||(e[1]=[o("p",{class:"-text"},"Read this handy introduction to",-1),o("a",{href:"/getting-started"},"HTML attributes and DOM properties",-1)])),example:l(()=>[o("div",G,[o("div",K,[o("div",X,[o("button",{class:"chi-button -icon -flat","aria-label":"Toggle drawer",onClick:e[0]||(e[0]=(...c)=>t.toggleDrawer&&t.toggleDrawer(...c))},e[2]||(e[2]=[o("div",{class:"chi-button__content"},[o("i",{class:"chi-icon icon-menu -sm--2","aria-hidden":"true"})],-1)])),e[3]||(e[3]=o("b",{class:"-ml--2"},"Click menu button to open Drawer",-1))]),(v(),D(V,null,w([1,2],c=>o("p",Z,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit.Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),o("chi-drawer",ee,e[4]||(e[4]=[o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),512)])]),"code-webcomponent":l(()=>[e[5]||(e[5]=o("div",{class:"chi-tab__description"},[m("Modify the "),o("code",null,"active"),m(" attribute or property to make the drawer show or hide. "),o("code",null,"chi-drawer"),m(" also supports three public methods to change its visibility: "),o("code",null,"show()"),m(", "),o("code",null,"hide()"),m(", "),o("code",null,"toggle()"),m(".")],-1)),s(a,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":l(()=>[e[6]||(e[6]=o("div",{class:"chi-tab__description"},[m("Modify the "),o("code",null,"active"),m(" attribute or property to make the drawer show or hide. "),o("code",null,"ChiDrawer"),m(" also supports three public methods to change its visibility: "),o("code",null,"show()"),m(", "),o("code",null,"hide()"),m(", "),o("code",null,"toggle()"),m(".")],-1)),s(a,{lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(u),e[7]||(e[7]=o("div",{class:"chi-tab__description"},[m("Use the function "),o("code",null,"chi.drawer(elem)"),m(" to instantiate a new drawer component in the DOM element passed as a parameter. You must use the trigger element as the parameter.")],-1)),s(a,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const re=f(y,[["render",te]]);var ie=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,oe=(t,e,i,n)=>{for(var r=n>1?void 0:n?ae(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&ie(e,i,r),r};let S=class extends g{constructor(){super(...arguments);p(this,"headTabs",["left","right","top","bottom"].map((i,n)=>({active:i==="left",id:i,label:i.charAt(0).toUpperCase()+i.slice(1),codeSnippets:{webComponent:{code:`<!-- Trigger -->
<chi-button id="drawer-position-${i}-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-position-${i}" position="${i}" no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-position-${i}');
  var drawerTrigger = document.getElementById('drawer-position-${i}-trigger');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`},vue:{code:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="${i}"
  :active="this.drawerActive"
  :noHeader="true"
  backdrop
>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`},htmlBlueprint:{code:`<!-- Trigger -->
<button id="drawer-position-${i}-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-position-${i}" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div id="drawer-position-${i}" class="chi-drawer -${i}">
  <button class="chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <div class="chi-drawer__content">
    <div class="-p--2 -pt--6 -text">Drawer content here</div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-position-${i}-trigger'));<\/script>`}}})));p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"drawerPosition","left");p(this,"exampleId","position")}changeDrawerPosition(i){this.drawerPosition=i.id}};S=oe([_({})],S);const ne={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},ce={class:"-p--3"},de={class:"-text -mb--1"},se=["position"];function le(t,e,i,n,r,d){const a=T,u=$,h=C;return v(),x(h,{title:"Position",id:t.exampleId,tabs:t.exampleTabs,headTabs:t.headTabs,onChiHeadTabsChange:e[0]||(e[0]=c=>t.changeDrawerPosition(c)),padding:"-p--0"},O({example:l(()=>[o("div",ne,[o("div",ce,[(v(),D(V,null,w([1,2,3],c=>o("div",de,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit.Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),o("chi-drawer",{position:t.drawerPosition,active:"","prevent-auto-hide":"","no-header":""},e[1]||(e[1]=[o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),8,se)])]),_:2},[w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-webcomponent`,fn:l(()=>[s(a,{class:"html",lang:"html",code:c.codeSnippets.webComponent.code},null,8,["code"])])})),w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-vue`,fn:l(()=>[s(a,{class:"html",lang:"html",code:c.codeSnippets.vue.code},null,8,["code"])])})),w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-htmlblueprint`,fn:l(()=>[s(u),s(a,{lang:"html",code:c.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1032,["id","tabs","headTabs"])}const pe=f(S,[["render",le]]);var ue=Object.defineProperty,he=Object.getOwnPropertyDescriptor,me=(t,e,i,n)=>{for(var r=n>1?void 0:n?he(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&ue(e,i,r),r};let B=class extends g{};B=me([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Trigger -->
<chi-button id="drawer-backdrop-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-backdrop" position="bottom" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-backdrop');
  var drawerTrigger = document.getElementById('drawer-backdrop-trigger');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`,vue:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="bottom"
  :active="this.drawerActive"
  :noHeader="true"
  backdrop
>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`,htmlblueprint:`<!-- Trigger -->
<button id="drawer-backdrop-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-backdrop" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-backdrop" class="chi-drawer -bottom">
      <button class="chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-drawer__content">
        <div class="-p--2 -pt--6 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-backdrop-trigger'));<\/script>`}})})],B);function ve(t,e,i,n,r,d){const a=T,u=$,h=C;return v(),x(h,{title:"Backdrop",id:"backdrop",tabs:t.exampleTabs,padding:"-p--0"},{"example-description":l(()=>e[0]||(e[0]=[o("p",{class:"-text"},"An optional backdrop can be added to focus the user's attention on drawer content.",-1)])),example:l(()=>e[1]||(e[1]=[o("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[o("chi-drawer",{position:"bottom",backdrop:"",active:"","prevent-auto-hide":"","no-header":""},[o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here")])],-1)])),"code-webcomponent":l(()=>[s(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":l(()=>[s(a,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(u),s(a,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const we=f(B,[["render",ve]]);var be=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,_e=(t,e,i,n)=>{for(var r=n>1?void 0:n?ge(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&be(e,i,r),r};let E=class extends g{};E=_e([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Trigger -->
<chi-button id="drawer-titled-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-titled" position="left" title="Drawer title here" backdrop>
  <div class="-p--2 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-titled');
  var drawerTrigger = document.getElementById('drawer-titled-trigger');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`,vue:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="left"
  :active="this.drawerActive"
  title="Drawer title here"
  backdrop
>
  <div class="-p--2 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`,htmlblueprint:`<!-- Trigger -->
<button id="drawer-titled-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-titled" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-titled" class="chi-drawer -left">
      <div class="chi-drawer__header">
        <span class="chi-drawer__title">
          Drawer title here
        </span>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="-p--2 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-titled-trigger'));<\/script>`}})})],E);function fe(t,e,i,n,r,d){const a=T,u=$,h=C;return v(),x(h,{title:"Titled",id:"titled",tabs:t.exampleTabs,padding:"-p--0"},{example:l(()=>e[0]||(e[0]=[o("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[o("chi-drawer",{position:"left",title:"Drawer title here",backdrop:"",active:"","prevent-auto-hide":""},[o("div",{class:"-p--2 -text"},"Drawer content here")])],-1)])),"code-webcomponent":l(()=>[s(a,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":l(()=>[s(a,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(u),s(a,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const De=f(E,[["render",fe]]);var Te=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Ce=(t,e,i,n)=>{for(var r=n>1?void 0:n?$e(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&Te(e,i,r),r};let I=class extends g{constructor(){super(...arguments);p(this,"headTabs",[{active:!0,id:"closable",label:"Closable",codeSnippets:{webComponent:{code:`<!-- Trigger -->
<chi-button id="drawer-close-button-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-close-button" position="left" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-close-button');
  var drawerTrigger = document.getElementById('drawer-close-button-trigger');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`},vue:{code:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="left"
  :active="this.drawerActive"
  @chiDrawerHide="() => (this.drawerActive = false)"
  @chiDrawerClickOutside="() => (this.drawerActive = false)"
  backdrop
>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`,description:`Drawer visibility depends on the prop <code>active</code>.
              Chi Vue Drawer component does not automatically hide when the close button is clicked as prop mutation is an anti-pattern in Vue.
              Use the events <code>chiDrawerHide</code> and <code>chiDrawerClickOutside</code> to set <code>active</code> to false and hide the Drawer.`},htmlBlueprint:{code:`<!-- Trigger -->
<button id="drawer-close-button-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-close-button" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-close-button" class="chi-drawer -left">
      <button class="chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-drawer__content">
        <div class="-p--2 -pt--6 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-close-button-trigger'));<\/script>`}}},{id:"non-closable",label:"Non closable",codeSnippets:{webComponent:{code:`<!-- Trigger -->
<chi-button id="drawer-close-button-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-close-button" position="left" backdrop non-closable no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-close-button');
  var drawerTrigger = document.getElementById('drawer-close-button-trigger');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`,description:"Use the <code>non-closable</code> attribute to render Drawer without a close button"},vue:{code:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="left"
  :active="this.drawerActive"
  :nonClosable="true"
  :noHeader="true"
  backdrop
>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`,description:"Use the prop <code>nonClosable</code> to render Drawer without a close button"},htmlBlueprint:{code:`<!-- Trigger -->
<button id="drawer-close-button-triger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-close-button" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-close-button" class="chi-drawer -left">
      <div class="chi-drawer__content">
        <div class="-p--2 -pt--6 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-close-button-triger'));<\/script>`}}}]);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"exampleId","close-button");p(this,"closable",!1)}changeClosable(i){this.closable=i.id!=="closable"}};I=Ce([_({})],I);const xe={class:"-position--relative -z--0 -overflow--hidden",style:{height:"15rem"}},ye=["non-closable"],Se=["innerHTML"],Be=["innerHTML"];function Ee(t,e,i,n,r,d){const a=T,u=$,h=C;return v(),x(h,{title:"Close button",id:t.exampleId,tabs:t.exampleTabs,headTabs:t.headTabs,onChiHeadTabsChange:e[0]||(e[0]=c=>t.changeClosable(c)),padding:"-p--0"},O({"example-description":l(()=>[e[1]||(e[1]=o("p",{class:"-text"},"Close buttons provide users with a consistent way to exit Drawers.For special cases, such as requiring users to perform a task that auto-closes the Drawer when complete, a close button may be removed.",-1))]),example:l(()=>[o("div",xe,[o("chi-drawer",{position:"left","non-closable":!!t.closable,active:"",backdrop:"","prevent-auto-hide":"","no-header":""},e[2]||(e[2]=[o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),8,ye)])]),_:2},[w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-webcomponent`,fn:l(()=>[c.codeSnippets.webComponent.description?(v(),D("div",{key:0,class:"chi-tab__description",innerHTML:c.codeSnippets.webComponent.description},null,8,Se)):H("",!0),s(a,{lang:"html",code:c.codeSnippets.webComponent.code},null,8,["code"])])})),w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-vue`,fn:l(()=>[c.codeSnippets.vue.description?(v(),D("div",{key:0,class:"chi-tab__description",innerHTML:c.codeSnippets.vue.description},null,8,Be)):H("",!0),s(a,{lang:"html",code:c.codeSnippets.vue.code},null,8,["code"])])})),w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-htmlblueprint`,fn:l(()=>[s(u),s(a,{lang:"html",code:c.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1032,["id","tabs","headTabs"])}const Ie=f(I,[["render",Ee]]);var Pe=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Ae=(t,e,i,n)=>{for(var r=n>1?void 0:n?ke(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&Pe(e,i,r),r};let P=class extends g{constructor(){super(...arguments);p(this,"headTabs",[{active:!0,id:"header",label:"Header",codeSnippets:{webComponent:{code:`<!-- Trigger -->
<chi-button id="drawer-trigger-header" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-header" title="Drawer title here" position="bottom" backdrop>
  <div class="-p--2 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-header');
  var drawerTrigger = document.getElementById('drawer-trigger-header');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`},vue:{code:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="bottom"
  :active="this.drawerActive"
  title="Drawer title here"
  backdrop
>
  <div class="-p--2 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`},htmlBlueprint:{code:`<!-- Trigger -->
<button id="drawer-trigger-header" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-header" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-header" class="chi-drawer -bottom">
      <div class="chi-drawer__header">
        <span class="chi-drawer__title">
          Drawer title here
        </span>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="-p--2 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-trigger-header'));<\/script>`}}},{id:"no-header",label:"No header",codeSnippets:{webComponent:{code:`<!-- Trigger -->
<chi-button id="drawer-trigger-20" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="interactive-drawer-20" position="bottom" backdrop no-header>
  <div class="-p--2 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('interactive-drawer-20');
  var drawerTrigger = document.getElementById('drawer-trigger-20');
  drawerTrigger.addEventListener('click', function(){
    drawer.toggle();
    // or drawer.active = !drawer.active;
  });
<\/script>`},vue:{code:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="bottom"
  :active="this.drawerActive"
  :noHeader="true"
  backdrop
>
  <div class="-p--2 -text">Drawer content here</div>
</ChiDrawer>

<!-- Data and Methods -->
data: {
  drawerActive : false;
},
methods: {
  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }
}`},htmlBlueprint:{code:`<!-- Trigger -->
<button id="drawer-trigger-21" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-21" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-21" class="chi-drawer -bottom">
      <button class="chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-drawer__content">
        <div class="-p--2 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('drawer-trigger-21'));<\/script>`}}}]);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"exampleId","header");p(this,"showHeader",!0);p(this,"key",0)}changeHeader(i){this.showHeader=i.id==="header",this.key+=1}};P=Ae([_({})],P);const Oe={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},He=["no-header","title"];function Ve(t,e,i,n,r,d){const a=T,u=$,h=C;return v(),x(h,{title:"Header",id:t.exampleId,tabs:t.exampleTabs,headTabs:t.headTabs,onChiHeadTabsChange:e[0]||(e[0]=c=>t.changeHeader(c)),padding:"-p--0"},O({"example-description":l(()=>[e[1]||(e[1]=o("p",{class:"-text"},"Header markup is optional. Remove it to make the content fill the drawer.",-1))]),example:l(()=>[o("div",Oe,[(v(),D("chi-drawer",{position:"bottom","no-header":!t.showHeader,title:t.showHeader?"Drawer title here":null,active:"",backdrop:"","prevent-auto-hide":"",key:t.key},e[2]||(e[2]=[o("div",{class:"-p--2 -text"},"Drawer content here",-1)]),8,He))])]),_:2},[w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-webcomponent`,fn:l(()=>[s(a,{code:c.codeSnippets.webComponent.code,lang:"html"},null,8,["code"])])})),w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-vue`,fn:l(()=>[s(a,{code:c.codeSnippets.vue.code,lang:"html"},null,8,["code"])])})),w(t.headTabs,c=>({name:`code-${t.exampleId}-${c.id}-htmlblueprint`,fn:l(()=>[s(u),s(a,{lang:"html",code:c.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1032,["id","tabs","headTabs"])}const Le=f(P,[["render",Ve]]);var Me=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ne=(t,e,i,n)=>{for(var r=n>1?void 0:n?Je(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&Me(e,i,r),r};let k=class extends g{};k=Ne([_({components:{Interaction:re,Position:pe,Backdrop:we,Titled:De,CloseButton:Ie,HeaderTitle:Le}})],k);function je(t,e,i,n,r,d){const a=b("Interaction"),u=b("Position"),h=b("Backdrop"),c=b("Titled"),L=b("CloseButton"),M=b("HeaderTitle"),J=q;return v(),D("div",null,[e[0]||(e[0]=o("h2",null,"Examples",-1)),s(J,{placeholder:"Loading..."},{default:l(()=>[s(a),s(u),s(h),s(c),s(L),s(M)]),_:1})])}const qe=f(k,[["render",je]]);var ze=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Ue=(t,e,i,n)=>{for(var r=n>1?void 0:n?We(e,i):e,d=t.length-1,a;d>=0;d--)(a=t[d])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&ze(e,i,r),r};let A=class extends g{constructor(){super(...arguments);p(this,"pageTabs",U)}};A=Ue([_({components:{Accessibility:W,Examples:qe,Properties:z}})],A);const Fe={class:"chi-grid__container -pt--3"},Qe={class:"chi-tabs-panel -active",id:"examples"},Re={class:"chi-tabs-panel",id:"properties"},Ye={class:"chi-tabs-panel",id:"accessibility"};function Ge(t,e,i,n,r,d){const a=F,u=b("Examples"),h=b("Properties"),c=b("Accessibility");return v(),D("div",null,[s(a,{title:"Drawer",description:"Drawers are flexible containers anchored to the top, right, bottom, or left of the screen. They are used primarily in Chi for displaying menus on small devices.",tabs:t.pageTabs},null,8,["tabs"]),o("div",Fe,[o("div",Qe,[s(u)]),o("div",Re,[s(h)]),o("div",Ye,[s(c)])])])}const Dt=f(A,[["render",Ge]]);export{Dt as default};
