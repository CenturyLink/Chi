<template lang="pug">
  <ComponentExample title="Backdrop" id="backdrop" :tabs="exampleTabs" padding="-p--0">
    template(#example-description)
      p.-text An optional backdrop can be added to focus the user's attention on drawer content.
    template(#example)
      .-position--relative.-z--0.-overflow--hidden(style='height:30rem;')
        chi-drawer(position='bottom' backdrop active prevent-auto-hide no-header)
          .-p--2.-pt--6.-text Drawer content here
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-vue)
      Copy(lang="html" :code="codeSnippets.vue" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
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
      ],
      codeSnippets: {
        webcomponent: `<!-- Trigger -->
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
<\/script>`,
        vue: `<!-- Trigger -->
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
}`,
        htmlblueprint: `<!-- Trigger -->
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
<script>chi.drawer(document.getElementById('drawer-backdrop-trigger'));<\/script>`,
      },
    };
  },
})
export default class Backdrop extends Vue { }
</script>
