import{_ as B}from"./CcrI_bxZ.js";import{_ as x}from"./Di-ELn2D.js";import{_ as D}from"./D1M_ALV-.js";import{_ as f}from"./Cx7J_iiN.js";import{e as g,r as T,o as u,f as k,w as r,a as e,d as p,c as w,i as h,F as y,b as t,y as $,p as E,k as C,l as S}from"./CRBsHPO5.js";import{c as A}from"./CMnas7rG.js";const I={class:"-position--relative -z--0 -overflow--hidden",style:{height:"20rem"}},H={class:"-p--3"},L={class:"-text -mb--3"},M=g({__name:"_interaction",setup(_){const n=T(null),l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],a={webcomponent:`<!-- Trigger -->
<chi-button id="example__interaction-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__interaction" position="left" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__interaction');
  var drawerTrigger = document.getElementById('example__interaction-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
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
<button
  id="example__interaction-trigger"
  class="chi-button -flat -icon chi-drawer__trigger"
  data-target="#example__interaction"
  aria-label="Toggle navigation"
>
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__interaction" class="chi-drawer -left">
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
<script>chi.drawer(document.getElementById('example__interaction-trigger'));<\/script>`},s=()=>{n.value.toggle()};return(o,i)=>{const c=x,b=D,d=f;return u(),k(d,{title:"Interaction",id:"interaction",tabs:l,padding:"-p--0"},{"example-description":r(()=>i[0]||(i[0]=[e("p",{class:"-text"},[p("Read this handy introduction to "),e("a",{href:"/getting-started/installation"},"HTML attributes and DOM properties")],-1)])),example:r(()=>[e("div",I,[e("div",H,[e("div",{class:"-d--flex -align-items--center"},[e("button",{class:"chi-button -icon -flat","aria-label":"Toggle drawer",onClick:s},i[1]||(i[1]=[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-menu -sm--2","aria-hidden":"true"})],-1)])),i[2]||(i[2]=e("b",{class:"-ml--2"},"Click menu button to open Drawer",-1))]),(u(),w(y,null,h(2,m=>e("p",L,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),e("chi-drawer",{position:"left",backdrop:"","no-header":"",ref_key:"drawer",ref:n},i[3]||(i[3]=[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),512)])]),"code-webcomponent":r(()=>[i[4]||(i[4]=e("div",{class:"chi-tab__description"},[p("Modify the "),e("code",null,"active"),p(" attribute or property to make the drawer show or hide. "),e("code",null,"chi-drawer"),p(" also supports three public methods to change its visibility: "),e("code",null,"show()"),p(", "),e("code",null,"hide()"),p(", "),e("code",null,"toggle()"),p(".")],-1)),t(c,{lang:"html",code:a.webcomponent},null,8,["code"])]),"code-vue":r(()=>[i[5]||(i[5]=e("div",{class:"chi-tab__description"},[p("Modify the "),e("code",null,"active"),p(" property to make the drawer show or hide. "),e("code",null,"ChiDrawer"),p(" also supports three public methods to change its visibility: "),e("code",null,"show()"),p(", "),e("code",null,"hide()"),p(", "),e("code",null,"toggle()"),p(".")],-1)),t(c,{lang:"html",code:a.vue},null,8,["code"])]),"code-htmlblueprint":r(()=>[t(b),i[6]||(i[6]=e("div",{class:"chi-tab__description"},[p("Use the function "),e("code",null,"chi.drawer(elem)"),p(" to instantiate a new drawer component in the DOM element passed as a parameter. You must use the trigger element as the parameter.")],-1)),t(c,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),J={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},V={class:"-p--3"},N={class:"-text -mb--1"},q=["position"],z=g({__name:"_position",setup(_){const n=["left","right","top","bottom"].map(o=>({id:o,active:o==="left",label:A(o)})),l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],a=T("left"),s=$(()=>({webcomponent:`<!-- Trigger -->
<chi-button id="example__${a.value}-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__${a.value}" position="${a.value}" no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__${a.value}');
  var drawerTrigger = document.getElementById('example__${a.value}-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
  });
<\/script>`,vue:`<!-- Trigger -->
<button class="chi-button -flat -icon" @click="() => toggleDrawer()">
  <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
</button>

<!-- Vue component -->
<ChiDrawer
  position="${a.value}"
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
<button id="example__${a.value}-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__${a.value}" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div id="example__${a.value}" class="chi-drawer -${a.value}">
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
<script>chi.drawer(document.getElementById('example__${a.value}-trigger'));<\/script>`}));return(o,i)=>{const c=x,b=D,d=f;return u(),k(d,{title:"Position",id:"position",tabs:l,headTabs:C(n),onChiHeadTabsChange:i[0]||(i[0]=m=>a.value=m.id),padding:"-p--0"},E({example:r(()=>[e("div",J,[e("div",V,[(u(),w(y,null,h(3,m=>e("div",N,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),e("chi-drawer",{position:a.value,active:"","prevent-auto-hide":"","no-header":""},i[1]||(i[1]=[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),8,q)])]),_:2},[h(C(n),m=>({name:`code-position-${m.id}-webcomponent`,fn:r(()=>[t(c,{class:"html",lang:"html",code:s.value.webcomponent},null,8,["code"])])})),h(C(n),m=>({name:`code-position-${m.id}-vue`,fn:r(()=>[t(c,{class:"html",lang:"html",code:s.value.vue},null,8,["code"])])})),h(C(n),m=>({name:`code-position-${m.id}-htmlblueprint`,fn:r(()=>[t(b),t(c,{class:"html",lang:"html",code:s.value.htmlblueprint},null,8,["code"])])}))]),1032,["headTabs"])}}}),O=g({__name:"_backdrop",setup(_){const n=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:`<!-- Trigger -->
<chi-button id="example__backdrop-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__backdrop" position="bottom" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__backdrop');
  var drawerTrigger = document.getElementById('example__backdrop-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
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
<button
  id="example__backdrop-trigger"
  class="chi-button -flat -icon chi-drawer__trigger"
  data-target="#example__backdrop"
  aria-label="Toggle navigation"
>
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__backdrop" class="chi-drawer -bottom">
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
<script>chi.drawer(document.getElementById('example__backdrop-trigger'));<\/script>`};return(a,s)=>{const o=x,i=D,c=f;return u(),k(c,{title:"Backdrop",id:"backdrop",tabs:n,padding:"-p--0"},{"example-description":r(()=>s[0]||(s[0]=[e("p",{class:"-text"},"An optional backdrop can be added to focus the user's attention on drawer content.",-1)])),example:r(()=>s[1]||(s[1]=[e("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[e("chi-drawer",{position:"bottom",backdrop:"",active:"","prevent-auto-hide":"","no-header":""},[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here")])],-1)])),"code-webcomponent":r(()=>[t(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-vue":r(()=>[t(o,{class:"html",lang:"html",code:l.vue},null,8,["code"])]),"code-htmlblueprint":r(()=>[t(i),t(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),W=g({__name:"_titled",setup(_){const n=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:`<!-- Trigger -->
<chi-button id="example__titled-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__titled" position="left" title="Drawer title here" backdrop>
  <div class="-p--2 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__titled');
  var drawerTrigger = document.getElementById('example__titled-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
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
<button id="example__titled-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__titled" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__titled" class="chi-drawer -left">
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
<script>chi.drawer(document.getElementById('example__titled-trigger'));<\/script>`};return(a,s)=>{const o=x,i=D,c=f;return u(),k(c,{title:"Titled",id:"titled",tabs:n,padding:"-p--0"},{example:r(()=>s[0]||(s[0]=[e("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[e("chi-drawer",{position:"left",title:"Drawer title here",backdrop:"",active:"","prevent-auto-hide":""},[e("div",{class:"-p--2 -text"},"Drawer content here")])],-1)])),"code-webcomponent":r(()=>[t(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-vue":r(()=>[t(o,{class:"html",lang:"html",code:l.vue},null,8,["code"])]),"code-htmlblueprint":r(()=>[t(i),t(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"-position--relative -z--0 -overflow--hidden",style:{height:"15rem"}},F=["non-closable"],j=["innerHTML"],P=["innerHTML"],Q=g({__name:"_close-button",setup(_){const n=[{active:!0,id:"closable",label:"Closable",codeSnippets:{webcomponent:{code:`<!-- Trigger -->
<chi-button id="example__close-button-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__close-button" position="left" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__close-button');
  var drawerTrigger = document.getElementById('example__close-button-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
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
<button id="example__close-button-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__close-button" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__close-button" class="chi-drawer -left">
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
<script>chi.drawer(document.getElementById('example__close-button-trigger'));<\/script>`}}},{id:"non-closable",label:"Non closable",codeSnippets:{webcomponent:{code:`<!-- Trigger -->
<chi-button id="example__close-button-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__close-button" position="left" backdrop non-closable no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__close-button');
  var drawerTrigger = document.getElementById('example__close-button-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
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
<button id="example__close-button-triger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__close-button" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__close-button" class="chi-drawer -left">
      <div class="chi-drawer__content">
        <div class="-p--2 -pt--6 -text">Drawer content here</div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>chi.drawer(document.getElementById('example__close-button-triger'));<\/script>`}}}],l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],a=T(!1);return(s,o)=>{const i=x,c=D,b=f;return u(),k(b,{title:"Close button",id:"close-button",tabs:l,headTabs:n,onChiHeadTabsChange:o[0]||(o[0]=d=>a.value=d.id==="closable"),padding:"-p--0"},E({"example-description":r(()=>[o[1]||(o[1]=e("p",{class:"-text"},"Close buttons provide users with a consistent way to exit Drawers. For special cases, such as requiring users to perform a task that auto-closes the Drawer when complete, a close button may be removed.",-1))]),example:r(()=>[e("div",U,[e("chi-drawer",{position:"left","non-closable":!a.value,active:"",backdrop:"","prevent-auto-hide":"","no-header":""},o[2]||(o[2]=[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),8,F)])]),_:2},[h(n,d=>({name:`code-close-button-${d.id}-webcomponent`,fn:r(()=>[d.codeSnippets.webcomponent.description?(u(),w("div",{key:0,class:"chi-tab__description",innerHTML:d.codeSnippets.webcomponent.description},null,8,j)):S("",!0),t(i,{lang:"html",code:d.codeSnippets.webcomponent.code},null,8,["code"])])})),h(n,d=>({name:`code-close-button-${d.id}-vue`,fn:r(()=>[d.codeSnippets.vue.description?(u(),w("div",{key:0,class:"chi-tab__description",innerHTML:d.codeSnippets.vue.description},null,8,P)):S("",!0),t(i,{lang:"html",code:d.codeSnippets.vue.code},null,8,["code"])])})),h(n,d=>({name:`code-close-button-${d.id}-htmlblueprint`,fn:r(()=>[t(c),t(i,{lang:"html",code:d.codeSnippets.htmlBlueprint.code},null,8,["code"])])}))]),1024)}}}),R={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},Y=["no-header"],G=g({__name:"_header",setup(_){const n=[{active:!0,id:"header",label:"Header",codeSnippets:{webComponent:`<!-- Trigger -->
<chi-button id="example__header-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__header" title="Drawer title here" position="bottom" backdrop>
  <div class="-p--2 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__header');
  var drawerTrigger = document.getElementById('example__header-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
  });
<\/script>`,vue:`<!-- Trigger -->
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
}`,htmlBlueprint:`<!-- Trigger -->
<button id="example__header-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__header" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__header" class="chi-drawer -bottom">
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
<script>chi.drawer(document.getElementById('example__header-trigger'));<\/script>`}},{id:"no-header",label:"No header",codeSnippets:{webComponent:`<!-- Trigger -->
<chi-button id="example__header-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__header" position="bottom" backdrop no-header>
  <div class="-p--2 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__header');
  var drawerTrigger = document.getElementById('example__header-trigger');
  drawerTrigger.addEventListener('click', function() {
    drawer.toggle();
    // Or:
    // drawer.active = !drawer.active;
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
}`,htmlBlueprint:`<!-- Trigger -->
<button id="example__header-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__header" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="example__header" class="chi-drawer -bottom">
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
<script>chi.drawer(document.getElementById('example__header-trigger'));<\/script>`}}],l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],a=T(!0),s=T(0),o=i=>{a.value=i.id==="header",s.value++};return(i,c)=>{const b=x,d=D,m=f;return u(),k(m,{title:"Header",id:"header",tabs:l,headTabs:n,onChiHeadTabsChange:c[0]||(c[0]=v=>o(v)),padding:"-p--0"},E({"example-description":r(()=>[c[1]||(c[1]=e("p",{class:"-text"},"Header markup is optional. Remove it to make the content fill the drawer.",-1))]),example:r(()=>[e("div",R,[(u(),w("chi-drawer",{position:"bottom","no-header":!a.value,title:"Drawer title here",active:"",backdrop:"","prevent-auto-hide":"",key:s.value},c[2]||(c[2]=[e("div",{class:"-p--2 -text"},"Drawer content here",-1)]),8,Y))])]),_:2},[h(n,v=>({name:`code-header-${v.id}-webcomponent`,fn:r(()=>[t(b,{class:"html",lang:"html",code:v.codeSnippets.webComponent},null,8,["code"])])})),h(n,v=>({name:`code-header-${v.id}-vue`,fn:r(()=>[t(b,{class:"html",lang:"html",code:v.codeSnippets.vue},null,8,["code"])])})),h(n,v=>({name:`code-header-${v.id}-htmlblueprint`,fn:r(()=>[t(d),t(b,{class:"html",lang:"html",code:v.codeSnippets.htmlBlueprint},null,8,["code"])])}))]),1024)}}}),re=g({__name:"index",setup(_){return(n,l)=>{const a=B;return u(),w(y,null,[l[0]||(l[0]=e("h2",null,"Examples",-1)),t(a,{placeholder:"Loading..."},{default:r(()=>[t(M),t(z),t(O),t(W),t(Q),t(G)]),_:1})],64)}}});export{re as _};
