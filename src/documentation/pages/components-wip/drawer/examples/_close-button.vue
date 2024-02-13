<template lang="pug">
<ComponentExample title="Close button" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeClosable(e)" padding="-p--0">
  template(#example-description)
    p.-text Close buttons provide users with a consistent way to exit Drawers.
      | For special cases, such as requiring users to perform a task
      | that auto-closes the Drawer when complete, a close button may be removed.
  template(#example)
    .-position--relative.-z--0.-overflow--hidden(style='height:15rem;')
      chi-drawer(position='left' :non-closable="closable ? true : false" active backdrop prevent-auto-hide no-header)
        .-p--2.-pt--6.-text Drawer content here
  template(#["`code-${exampleId}-${tab.id}-webcomponent`"] v-for="tab in headTabs" :key="tab.id")
    .chi-tab__description(v-if="tab.codeSnippets.webComponent.description" v-html="tab.codeSnippets.webComponent.description")
    Copy(lang="html" :code="tab.codeSnippets.webComponent.code")

  template(#["`code-${exampleId}-${tab.id}-vue`"] v-for="tab in headTabs" :key="tab.id")
    .chi-tab__description(v-if="tab.codeSnippets.vue.description" v-html="tab.codeSnippets.vue.description")
    Copy(lang="html" :code="tab.codeSnippets.vue.code")

  template(v-for="tab in headTabs" #["`code-${exampleId}-${tab.id}-htmlblueprint`"] :key="tab.id")
    <JSNeeded />
    Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '@/models/models';

@NuxtComponent({})
export default class CloseButton extends Vue {
  headTabs = [
    {
      active: true,
      id: 'closable',
      label: 'Closable',
      codeSnippets: {
        webComponent: {
          code: `<!-- Trigger -->
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
<\/script>`,
        },
        vue: {
          code: `<!-- Trigger -->
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
}`,
          description: `Drawer visibility depends on the prop <code>active</code>.
              Chi Vue Drawer component does not automatically hide when the close button is clicked as prop mutation is an anti-pattern in Vue.
              Use the events <code>chiDrawerHide</code> and <code>chiDrawerClickOutside</code> to set <code>active</code> to false and hide the Drawer.`,
        },
        htmlBlueprint: {
          code: `<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-close-button-trigger'));<\/script>`,
        },
      },
    },
    {
      id: 'non-closable',
      label: 'Non closable',
      codeSnippets: {
        webComponent: {
          code: `<!-- Trigger -->
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
<\/script>`,
          description: `Use the <code>non-closable</code> attribute to render Drawer without a close button`,
        },
        vue: {
          code: `<!-- Trigger -->
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
}`,
          description: `Use the prop <code>nonClosable</code> to render Drawer without a close button`,
        },
        htmlBlueprint: {
          code: `<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-close-button-triger'));<\/script>`,
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
  exampleId = 'close-button';
  closable = false;

  changeClosable(e: IHeadTabs) {
    this.closable = e.id !== 'closable';
  }
}
</script>
