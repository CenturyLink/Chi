<template lang="pug">
  <ComponentExample title="Close button" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeClosable(e)" padding="-p--0">
    p.-text(slot="example-description") Close buttons provide users with a consistent way to exit Drawers. 
      | For special cases, such as requiring users to perform a task 
      | that auto-closes the Drawer when complete, a close button may be removed.
    .-position--relative.-z--0.-overflow--hidden(style='height:15rem;' slot="example")
      chi-drawer(position='left' :non-closable="closable ? true : false" active backdrop prevent-auto-hide no-header)
        .-p--2.-pt--6.-text Drawer content here
    <Wrapper :slot="`code-${exampleId}-${tab.id}-webcomponent`" v-for="tab in headTabs" :key="tab.id">
      .chi-tab__description(v-if="tab.codeSnippets.webComponent.description" v-html="tab.codeSnippets.webComponent.description")  
        | {{ tab.codeSnippets.webComponent.description }}
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper :slot="`code-${exampleId}-${tab.id}-vue`" v-for="tab in headTabs" :key="tab.id">
      .chi-tab__description(v-if="tab.codeSnippets.vue.description" v-html="tab.codeSnippets.vue.description") 
        | {{ tab.codeSnippets.vue.description }}
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.vue.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper v-for="tab in headTabs" :slot="`code-${exampleId}-${tab.id}-htmlblueprint`" :key="tab.id">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.htmlBlueprint.code" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadTabsInterface } from '../../../../models/models';

@Component({
  data: () => {
    return {
      headTabs: [
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
<\/script>`
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
              Use the events <code>chiDrawerHide</code> and <code>chiDrawerClickOutside</code> to set <code>active</code> to false and hide the Drawer.`
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
<script>chi.drawer(document.getElementById('drawer-close-button-trigger'));<\/script>`
            }
          }
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
              description: `Use the <code>non-closable</code> attribute to render Drawer without a close button`
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
              description: `Use the prop <code>nonClosable</code> to render Drawer without a close button`
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
<script>chi.drawer(document.getElementById('drawer-close-button-triger'));<\/script>`
            }
          }
        }
      ],
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'vue',
          label: 'Vue'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      exampleId: 'close-button',
      closable: false
    };
  }
})
export default class CloseButton extends Vue {
  changeClosable(e: HeadTabsInterface) {
    this.$data.closable = e.id === 'closable' ? false : true;
  }
}
</script>
