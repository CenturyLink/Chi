var N=Object.defineProperty;var j=(e,r,i)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var p=(e,r,i)=>j(e,typeof r!="symbol"?r+"":r,i);import{V as g,N as _}from"./uJTUijt2.js";import{_ as $}from"./D8GK0F__.js";import{_ as T}from"./BLbnEGma.js";import{_ as C}from"./DKu8Jd2y.js";import{o as v,f as x,w as l,a as o,c as D,F as V,i as w,b as s,d as m,k as O,h as H,r as b}from"./B5CYXVwa.js";import{_ as f}from"./DlAUqK2U.js";import{_ as q}from"./C-hgEc7b.js";import z from"./_nQTzA0C.js";import W from"./CiH4mpxZ.js";import{s as U}from"./2EwpEKcw.js";import{_ as F}from"./Be4hAolY.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,Y=(e,r,i,n)=>{for(var t=n>1?void 0:n?R(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&Q(r,i,t),t};let y=class extends g{constructor(){super(...arguments);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-interaction-trigger'));<\/script>`})}toggleDrawer(){this.$refs.drawer.toggle()}};y=Y([_({})],y);const G=o("p",{class:"-text"},"Read this handy introduction to",-1),K=o("a",{href:"/getting-started"},"HTML attributes and DOM properties",-1),X={class:"-position--relative -z--0 -overflow--hidden",style:{height:"20rem"}},Z={class:"-p--3"},ee={class:"-d--flex -align-items--center"},te=o("div",{class:"chi-button__content"},[o("i",{class:"chi-icon icon-menu -sm--2","aria-hidden":"true"})],-1),re=[te],ie=o("b",{class:"-ml--2"},"Click menu button to open Drawer",-1),ae={class:"-text -mb--3"},oe={position:"left",backdrop:"","no-header":"",ref:"drawer"},ne=o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1),ce=[ne],de=o("div",{class:"chi-tab__description"},[m("Modify the "),o("code",null,"active"),m(" attribute or property to make the drawer show or hide. "),o("code",null,"chi-drawer"),m(" also supports three public methods to change its visibility: "),o("code",null,"show()"),m(", "),o("code",null,"hide()"),m(", "),o("code",null,"toggle()"),m(".")],-1),se=o("div",{class:"chi-tab__description"},[m("Modify the "),o("code",null,"active"),m(" attribute or property to make the drawer show or hide. "),o("code",null,"ChiDrawer"),m(" also supports three public methods to change its visibility: "),o("code",null,"show()"),m(", "),o("code",null,"hide()"),m(", "),o("code",null,"toggle()"),m(".")],-1),le=o("div",{class:"chi-tab__description"},[m("Use the function "),o("code",null,"chi.drawer(elem)"),m(" to instantiate a new drawer component in the DOM element passed as a parameter. You must use the trigger element as the parameter.")],-1);function pe(e,r,i,n,t,d){const a=$,h=T,u=C;return v(),x(u,{title:"Interaction",id:"interaction",tabs:e.exampleTabs,padding:"-p--0"},{"example-description":l(()=>[G,K]),example:l(()=>[o("div",X,[o("div",Z,[o("div",ee,[o("button",{class:"chi-button -icon -flat","aria-label":"Toggle drawer",onClick:r[0]||(r[0]=(...c)=>e.toggleDrawer&&e.toggleDrawer(...c))},re),ie]),(v(),D(V,null,w([1,2],c=>o("p",ae,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit.Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),o("chi-drawer",oe,ce,512)])]),"code-webcomponent":l(()=>[de,s(a,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":l(()=>[se,s(a,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(h),le,s(a,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const he=f(y,[["render",pe]]);var ue=Object.defineProperty,me=Object.getOwnPropertyDescriptor,ve=(e,r,i,n)=>{for(var t=n>1?void 0:n?me(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&ue(r,i,t),t};let S=class extends g{constructor(){super(...arguments);p(this,"headTabs",["left","right","top","bottom"].map((i,n)=>({active:i==="left",id:i,label:i.charAt(0).toUpperCase()+i.slice(1),codeSnippets:{webComponent:{code:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-position-${i}-trigger'));<\/script>`}}})));p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"drawerPosition","left");p(this,"exampleId","position")}changeDrawerPosition(i){this.drawerPosition=i.id}};S=ve([_({})],S);const we={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},be={class:"-p--3"},ge={class:"-text -mb--1"},_e=["position"],fe=o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1),De=[fe];function $e(e,r,i,n,t,d){const a=$,h=T,u=C;return v(),x(u,{title:"Position",id:e.exampleId,tabs:e.exampleTabs,headTabs:e.headTabs,onChiHeadTabsChange:r[0]||(r[0]=c=>e.changeDrawerPosition(c)),padding:"-p--0"},O({example:l(()=>[o("div",we,[o("div",be,[(v(),D(V,null,w([1,2,3],c=>o("div",ge,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit.Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),o("chi-drawer",{position:e.drawerPosition,active:"","prevent-auto-hide":"","no-header":""},De,8,_e)])]),_:2},[w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-webcomponent`,fn:l(()=>[s(a,{class:"html",lang:"html",code:c.codeSnippets.webComponent.code},null,8,["code"])])})),w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-vue`,fn:l(()=>[s(a,{class:"html",lang:"html",code:c.codeSnippets.vue.code},null,8,["code"])])})),w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-htmlblueprint`,fn:l(()=>[s(h),s(a,{lang:"html",code:c.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1032,["id","tabs","headTabs"])}const Te=f(S,[["render",$e]]);var Ce=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,ye=(e,r,i,n)=>{for(var t=n>1?void 0:n?xe(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&Ce(r,i,t),t};let B=class extends g{};B=ye([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-backdrop-trigger'));<\/script>`}})})],B);const Se=o("p",{class:"-text"},"An optional backdrop can be added to focus the user's attention on drawer content.",-1),Be=o("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[o("chi-drawer",{position:"bottom",backdrop:"",active:"","prevent-auto-hide":"","no-header":""},[o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here")])],-1);function Ee(e,r,i,n,t,d){const a=$,h=T,u=C;return v(),x(u,{title:"Backdrop",id:"backdrop",tabs:e.exampleTabs,padding:"-p--0"},{"example-description":l(()=>[Se]),example:l(()=>[Be]),"code-webcomponent":l(()=>[s(a,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":l(()=>[s(a,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(h),s(a,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ie=f(B,[["render",Ee]]);var Pe=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Ae=(e,r,i,n)=>{for(var t=n>1?void 0:n?ke(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&Pe(r,i,t),t};let E=class extends g{};E=Ae([_({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-titled-trigger'));<\/script>`}})})],E);const Oe=o("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[o("chi-drawer",{position:"left",title:"Drawer title here",backdrop:"",active:"","prevent-auto-hide":""},[o("div",{class:"-p--2 -text"},"Drawer content here")])],-1);function He(e,r,i,n,t,d){const a=$,h=T,u=C;return v(),x(u,{title:"Titled",id:"titled",tabs:e.exampleTabs,padding:"-p--0"},{example:l(()=>[Oe]),"code-webcomponent":l(()=>[s(a,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":l(()=>[s(a,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[s(h),s(a,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ve=f(E,[["render",He]]);var Le=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Je=(e,r,i,n)=>{for(var t=n>1?void 0:n?Me(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&Le(r,i,t),t};let I=class extends g{constructor(){super(...arguments);p(this,"headTabs",[{active:!0,id:"closable",label:"Closable",codeSnippets:{webComponent:{code:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-close-button-triger'));<\/script>`}}}]);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"exampleId","close-button");p(this,"closable",!1)}changeClosable(i){this.closable=i.id!=="closable"}};I=Je([_({})],I);const Ne=o("p",{class:"-text"},"Close buttons provide users with a consistent way to exit Drawers.For special cases, such as requiring users to perform a task that auto-closes the Drawer when complete, a close button may be removed.",-1),je={class:"-position--relative -z--0 -overflow--hidden",style:{height:"15rem"}},qe=["non-closable"],ze=o("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1),We=[ze],Ue=["innerHTML"],Fe=["innerHTML"];function Qe(e,r,i,n,t,d){const a=$,h=T,u=C;return v(),x(u,{title:"Close button",id:e.exampleId,tabs:e.exampleTabs,headTabs:e.headTabs,onChiHeadTabsChange:r[0]||(r[0]=c=>e.changeClosable(c)),padding:"-p--0"},O({"example-description":l(()=>[Ne]),example:l(()=>[o("div",je,[o("chi-drawer",{position:"left","non-closable":!!e.closable,active:"",backdrop:"","prevent-auto-hide":"","no-header":""},We,8,qe)])]),_:2},[w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-webcomponent`,fn:l(()=>[c.codeSnippets.webComponent.description?(v(),D("div",{key:0,class:"chi-tab__description",innerHTML:c.codeSnippets.webComponent.description},null,8,Ue)):H("",!0),s(a,{lang:"html",code:c.codeSnippets.webComponent.code},null,8,["code"])])})),w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-vue`,fn:l(()=>[c.codeSnippets.vue.description?(v(),D("div",{key:0,class:"chi-tab__description",innerHTML:c.codeSnippets.vue.description},null,8,Fe)):H("",!0),s(a,{lang:"html",code:c.codeSnippets.vue.code},null,8,["code"])])})),w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-htmlblueprint`,fn:l(()=>[s(h),s(a,{lang:"html",code:c.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1032,["id","tabs","headTabs"])}const Re=f(I,[["render",Qe]]);var Ye=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ke=(e,r,i,n)=>{for(var t=n>1?void 0:n?Ge(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&Ye(r,i,t),t};let P=class extends g{constructor(){super(...arguments);p(this,"headTabs",[{active:!0,id:"header",label:"Header",codeSnippets:{webComponent:{code:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-trigger-21'));<\/script>`}}}]);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"exampleId","header");p(this,"showHeader",!0);p(this,"key",0)}changeHeader(i){this.showHeader=i.id==="header",this.key+=1}};P=Ke([_({})],P);const Xe=o("p",{class:"-text"},"Header markup is optional. Remove it to make the content fill the drawer.",-1),Ze={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},et=["no-header","title"],tt=o("div",{class:"-p--2 -text"},"Drawer content here",-1),rt=[tt];function it(e,r,i,n,t,d){const a=$,h=T,u=C;return v(),x(u,{title:"Header",id:e.exampleId,tabs:e.exampleTabs,headTabs:e.headTabs,onChiHeadTabsChange:r[0]||(r[0]=c=>e.changeHeader(c)),padding:"-p--0"},O({"example-description":l(()=>[Xe]),example:l(()=>[o("div",Ze,[(v(),D("chi-drawer",{position:"bottom","no-header":!e.showHeader,title:e.showHeader?"Drawer title here":null,active:"",backdrop:"","prevent-auto-hide":"",key:e.key},rt,8,et))])]),_:2},[w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-webcomponent`,fn:l(()=>[s(a,{code:c.codeSnippets.webComponent.code,lang:"html"},null,8,["code"])])})),w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-vue`,fn:l(()=>[s(a,{code:c.codeSnippets.vue.code,lang:"html"},null,8,["code"])])})),w(e.headTabs,c=>({name:`code-${e.exampleId}-${c.id}-htmlblueprint`,fn:l(()=>[s(h),s(a,{lang:"html",code:c.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1032,["id","tabs","headTabs"])}const at=f(P,[["render",it]]);var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,ct=(e,r,i,n)=>{for(var t=n>1?void 0:n?nt(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&ot(r,i,t),t};let k=class extends g{};k=ct([_({components:{Interaction:he,Position:Te,Backdrop:Ie,Titled:Ve,CloseButton:Re,HeaderTitle:at}})],k);const dt=o("h2",null,"Examples",-1);function st(e,r,i,n,t,d){const a=b("Interaction"),h=b("Position"),u=b("Backdrop"),c=b("Titled"),L=b("CloseButton"),M=b("HeaderTitle"),J=q;return v(),D("div",null,[dt,s(J,{placeholder:"Loading..."},{default:l(()=>[s(a),s(h),s(u),s(c),s(L),s(M)]),_:1})])}const lt=f(k,[["render",st]]);var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,ut=(e,r,i,n)=>{for(var t=n>1?void 0:n?ht(r,i):r,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(n?a(r,i,t):a(t))||t);return n&&t&&pt(r,i,t),t};let A=class extends g{constructor(){super(...arguments);p(this,"pageTabs",U)}};A=ut([_({components:{Accessibility:W,Examples:lt,Properties:z}})],A);const mt={class:"chi-grid__container -pt--3"},vt={class:"chi-tabs-panel -active",id:"examples"},wt={class:"chi-tabs-panel",id:"properties"},bt={class:"chi-tabs-panel",id:"accessibility"};function gt(e,r,i,n,t,d){const a=F,h=b("Examples"),u=b("Properties"),c=b("Accessibility");return v(),D("div",null,[s(a,{title:"Drawer",description:"Drawers are flexible containers anchored to the top, right, bottom, or left of the screen. They are used primarily in Chi for displaying menus on small devices.",tabs:e.pageTabs},null,8,["tabs"]),o("div",mt,[o("div",vt,[s(h)]),o("div",wt,[s(u)]),o("div",bt,[s(c)])])])}const zt=f(A,[["render",gt]]);export{zt as default};
