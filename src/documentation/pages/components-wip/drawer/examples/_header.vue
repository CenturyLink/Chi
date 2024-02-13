<template lang="pug">
<ComponentExample title="Header" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeHeader(e)" padding="-p--0">
  template(#example-description)
    p.-text Header markup is optional. Remove it to make the content fill the drawer.
  template(#example)
    .-position--relative.-z--0.-overflow--hidden(style='height:30rem;')
      chi-drawer(position='bottom' :no-header="!showHeader ? true : false" :title="showHeader ? 'Drawer title here' : null" active backdrop prevent-auto-hide :key="key")
        .-p--2.-text Drawer content here
  template(#["`code-${exampleId}-${tab.id}-webcomponent`"] v-for="tab in headTabs" :key="tab.id")
    Copy(:code="tab.codeSnippets.webComponent.code" lang="html")
  template(#["`code-${exampleId}-${tab.id}-vue`"] v-for="tab in headTabs" :key="tab.id")
    Copy(:code="tab.codeSnippets.vue.code" lang="html")
  template(#["`code-${exampleId}-${tab.id}-htmlblueprint`"] :key="tab.id" v-for="tab in headTabs")
    <JSNeeded />
    Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '../../../../models/models';

@NuxtComponent({})
export default class HeaderTitle extends Vue {
  headTabs = [
    {
      active: true,
      id: 'header',
      label: 'Header',
      codeSnippets: {
        webComponent: {
          code: `<!-- Trigger -->
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
<\/script>`,
        },
        vue: {
          code: `<!-- Trigger -->
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
}`,
        },
        htmlBlueprint: {
          code: `<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-trigger-header'));<\/script>`,
        },
      },
    },
    {
      id: 'no-header',
      label: 'No header',
      codeSnippets: {
        webComponent: {
          code: `<!-- Trigger -->
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
<\/script>`,
        },
        vue: {
          code: `<!-- Trigger -->
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
}`,
        },
        htmlBlueprint: {
          code: `<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-trigger-21'));<\/script>`,
        },
      },
    },
  ]
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'vue',
      label: 'Vue',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  exampleId = 'header';
  showHeader = true;

  key = 0;

  changeHeader(e: IHeadTabs) {
    this.showHeader = e.id === 'header' ? true : false;
    this.key += 1;
  }
}
</script>
