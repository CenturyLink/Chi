import{_ as B}from"./FxC9qxjO.js";import{_ as w}from"./jyPcLEqD.js";import{_ as x}from"./CjH8r42-.js";import{_ as D}from"./DpVkMKUP.js";import{e as b,r as v,o as m,f,w as a,a as e,d as l,c as g,j as y,F as T,b as t,v as A,k as S,i as C}from"./6XaUQmon.js";import{c as H}from"./DJ0opCXE.js";const $={class:"-position--relative -z--0 -overflow--hidden",style:{height:"20rem"}},I={class:"-p--3"},L={class:"-text -mb--3"},M=b({__name:"_interaction",setup(_){const i=v(null),o=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],s={webcomponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__interaction-trigger'));<\/script>`},c=()=>{i.value.toggle()};return(n,r)=>{const d=w,u=x,p=D;return m(),f(p,{title:"Interaction",id:"interaction",tabs:o,padding:"-p--0"},{"example-description":a(()=>r[0]||(r[0]=[e("p",{class:"-text"},[l("Read this handy introduction to "),e("a",{href:"/getting-started/installation"},"HTML attributes and DOM properties")],-1)])),example:a(()=>[e("div",$,[e("div",I,[e("div",{class:"-d--flex -align-items--center"},[e("button",{class:"chi-button -icon -flat","aria-label":"Toggle drawer",onClick:c},r[1]||(r[1]=[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-menu -sm--2","aria-hidden":"true"})],-1)])),r[2]||(r[2]=e("b",{class:"-ml--2"},"Click menu button to open Drawer",-1))]),(m(),g(T,null,y(2,h=>e("p",L,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),e("chi-drawer",{position:"left",backdrop:"","no-header":"",ref_key:"drawer",ref:i},r[3]||(r[3]=[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),512)])]),"code-webcomponent":a(()=>[r[4]||(r[4]=e("div",{class:"chi-tab__description"},[l("Modify the "),e("code",null,"active"),l(" attribute or property to make the drawer show or hide. "),e("code",null,"chi-drawer"),l(" also supports three public methods to change its visibility: "),e("code",null,"show()"),l(", "),e("code",null,"hide()"),l(", "),e("code",null,"toggle()"),l(".")],-1)),t(d,{lang:"html",code:s.webcomponent},null,8,["code"])]),"code-vue":a(()=>[r[5]||(r[5]=e("div",{class:"chi-tab__description"},[l("Modify the "),e("code",null,"active"),l(" property to make the drawer show or hide. "),e("code",null,"ChiDrawer"),l(" also supports three public methods to change its visibility: "),e("code",null,"show()"),l(", "),e("code",null,"hide()"),l(", "),e("code",null,"toggle()"),l(".")],-1)),t(d,{lang:"html",code:s.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(u),r[6]||(r[6]=e("div",{class:"chi-tab__description"},[l("Use the function "),e("code",null,"chi.drawer(elem)"),l(" to instantiate a new drawer component in the DOM element passed as a parameter. You must use the trigger element as the parameter.")],-1)),t(d,{lang:"html",code:s.htmlblueprint},null,8,["code"])]),_:1})}}}),J={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},V={class:"-p--3"},N={class:"-text -mb--1"},q=["position"],z=b({__name:"_position",setup(_){const i=v("left"),o=["left","right","top","bottom"].map(n=>({id:n,active:n==="left",label:H(n)})),s=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],c=A(()=>({webcomponent:`<!-- Trigger -->
<chi-button id="example__${i.value}-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="example__${i.value}" position="${i.value}" no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('example__${i.value}');
  var drawerTrigger = document.getElementById('example__${i.value}-trigger');
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
  position="${i.value}"
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
<button id="example__${i.value}-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#example__${i.value}" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div id="example__${i.value}" class="chi-drawer -${i.value}">
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
<script>chi.drawer(document.getElementById('example__${i.value}-trigger'));<\/script>`}));return(n,r)=>{const d=w,u=x,p=D;return m(),f(p,{title:"Position",id:"position",tabs:s,"head-tabs":S(o),onChiHeadTabsChange:r[0]||(r[0]=h=>i.value=h.id),padding:"-p--0"},{example:a(()=>[e("div",J,[e("div",V,[(m(),g(T,null,y(3,h=>e("div",N,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.")),64))]),e("chi-drawer",{position:i.value,active:"","prevent-auto-hide":"","no-header":""},r[1]||(r[1]=[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),8,q)])]),"code-webcomponent":a(()=>[t(d,{class:"html",lang:"html",code:c.value.webcomponent},null,8,["code"])]),"code-vue":a(()=>[t(d,{class:"html",lang:"html",code:c.value.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(u),t(d,{class:"html",lang:"html",code:c.value.htmlblueprint},null,8,["code"])]),_:1},8,["head-tabs"])}}}),O=b({__name:"_backdrop",setup(_){const i=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__backdrop-trigger'));<\/script>`};return(s,c)=>{const n=w,r=x,d=D;return m(),f(d,{title:"Backdrop",id:"backdrop",tabs:i,padding:"-p--0"},{"example-description":a(()=>c[0]||(c[0]=[e("p",{class:"-text"},"An optional backdrop can be added to focus the user's attention on drawer content.",-1)])),example:a(()=>c[1]||(c[1]=[e("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[e("chi-drawer",{position:"bottom",backdrop:"",active:"","prevent-auto-hide":"","no-header":""},[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here")])],-1)])),"code-webcomponent":a(()=>[t(n,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-vue":a(()=>[t(n,{class:"html",lang:"html",code:o.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(r),t(n,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),W=b({__name:"_titled",setup(_){const i=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__titled-trigger'));<\/script>`};return(s,c)=>{const n=w,r=x,d=D;return m(),f(d,{title:"Titled",id:"titled",tabs:i,padding:"-p--0"},{example:a(()=>c[0]||(c[0]=[e("div",{class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},[e("chi-drawer",{position:"left",title:"Drawer title here",backdrop:"",active:"","prevent-auto-hide":""},[e("div",{class:"-p--2 -text"},"Drawer content here")])],-1)])),"code-webcomponent":a(()=>[t(n,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-vue":a(()=>[t(n,{class:"html",lang:"html",code:o.vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(r),t(n,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"-position--relative -z--0 -overflow--hidden",style:{height:"15rem"}},j=["non-closable"],F=["innerHTML"],P=["innerHTML"],Q=b({__name:"_close-button",setup(_){const i=v(!0),o=v("closable"),s=d=>{i.value=d.id==="closable",o.value=d.id},c=[{active:!0,id:"closable",label:"Closable"},{id:"non-closable",label:"Non closable"}],n={closable:{webcomponent:{code:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__close-button-trigger'));<\/script>`}},"non-closable":{webcomponent:{code:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__close-button-triger'));<\/script>`}}},r=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}];return(d,u)=>{const p=w,h=x,k=D;return m(),f(k,{title:"Close button",id:"close-button",tabs:r,"head-tabs":c,onChiHeadTabsChange:s,padding:"-p--0"},{"example-description":a(()=>u[0]||(u[0]=[e("p",{class:"-text"},"Close buttons provide users with a consistent way to exit Drawers. For special cases, such as requiring users to perform a task that auto-closes the Drawer when complete, a close button may be removed.",-1)])),example:a(()=>[e("div",U,[e("chi-drawer",{position:"left","non-closable":!i.value,active:"",backdrop:"","prevent-auto-hide":"","no-header":""},u[1]||(u[1]=[e("div",{class:"-p--2 -pt--6 -text"},"Drawer content here",-1)]),8,j)])]),"code-webcomponent":a(()=>[n[o.value].webcomponent.description?(m(),g("div",{key:0,class:"chi-tab__description",innerHTML:n[o.value].webcomponent.description},null,8,F)):C("",!0),t(p,{lang:"html",code:n[o.value].webcomponent.code},null,8,["code"])]),"code-vue":a(()=>[n[o.value].vue.description?(m(),g("div",{key:0,class:"chi-tab__description",innerHTML:n[o.value].vue.description},null,8,P)):C("",!0),t(p,{lang:"html",code:n[o.value].vue.code},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(h),t(p,{lang:"html",code:n[o.value].htmlBlueprint.code},null,8,["code"])]),_:1})}}}),R={class:"-position--relative -z--0 -overflow--hidden",style:{height:"30rem"}},Y=["no-header"],G=b({__name:"_header",setup(_){const i=v("header"),o=v(!0),s=v(0),c={header:{webComponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__header-trigger'));<\/script>`},"no-header":{webComponent:`<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('example__header-trigger'));<\/script>`}},n=[{active:!0,id:"header",label:"Header"},{id:"no-header",label:"No header"}],r=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],d=u=>{o.value=u.id==="header",i.value=u.id,s.value++};return(u,p)=>{const h=w,k=x,E=D;return m(),f(E,{title:"Header",id:"header",tabs:r,"head-tabs":n,onChiHeadTabsChange:d,padding:"-p--0"},{"example-description":a(()=>p[0]||(p[0]=[e("p",{class:"-text"},"Header markup is optional. Remove it to make the content fill the drawer.",-1)])),example:a(()=>[e("div",R,[(m(),g("chi-drawer",{position:"bottom","no-header":!o.value,title:"Drawer title here",active:"",backdrop:"","prevent-auto-hide":"",key:s.value},p[1]||(p[1]=[e("div",{class:"-p--2 -text"},"Drawer content here",-1)]),8,Y))])]),"code-webcomponent":a(()=>[t(h,{class:"html",lang:"html",code:c[i.value].webComponent},null,8,["code"])]),"code-vue":a(()=>[t(h,{class:"html",lang:"html",code:c[i.value].vue},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(k),t(h,{class:"html",lang:"html",code:c[i.value].htmlBlueprint},null,8,["code"])]),_:1})}}}),ae=b({__name:"index",setup(_){return(i,o)=>{const s=B;return m(),g(T,null,[o[0]||(o[0]=e("h2",null,"Examples",-1)),t(s,{placeholder:"Loading..."},{default:a(()=>[t(M),t(z),t(O),t(W),t(Q),t(G)]),_:1})],64)}}});export{ae as _};
