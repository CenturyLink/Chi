<template lang="pug">
<ComponentExample title="Position" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeDrawerPosition(e)" padding="-p--0">
  template(#example)
    .-position--relative.-z--0.-overflow--hidden(style='height:30rem;')
      .-p--3
        .-text.-mb--1(v-for="item in [1,2,3]") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit.
          | Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna.
          | Nulla nec quam in turpis fermentum dictum vitae ac nibh.
          | Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim.
          | Donec semper nunc et tellus convallis, tristique varius turpis gravida.
          | Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper.
          | Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam.
          | Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum.
          | Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.
      chi-drawer(:position="drawerPosition" active prevent-auto-hide no-header)
        .-p--2.-pt--6.-text Drawer content here

  template(v-for="tab in headTabs" #[`code-${exampleId}-${tab.id}-webcomponent`])
    Copy(lang="html" :code="tab.codeSnippets.webComponent.code" class="html")

  template(v-for="tab in headTabs" #[`code-${exampleId}-${tab.id}-vue`])
    Copy(lang="html" :code="tab.codeSnippets.vue.code" class="html")

  template(v-for="tab in headTabs" #[`code-${exampleId}-${tab.id}-htmlblueprint`])
    <JSNeeded />
    Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '@/models/models';

@NuxtComponent({})
export default class Position extends Vue {
  headTabs = ['left', 'right', 'top', 'bottom'].map((position, index) => {
    return {
      active: position === 'left',
      id: position,
      label: position.charAt(0).toUpperCase() + position.slice(1),
      codeSnippets: {
        webComponent: {
          code: `<!-- Trigger -->
<chi-button id="drawer-position-${position}-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="drawer-position-${position}" position="${position}" no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('drawer-position-${position}');
  var drawerTrigger = document.getElementById('drawer-position-${position}-trigger');
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
  position="${position}"
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
        },
        htmlBlueprint: {
          code: `<!-- Trigger -->
<button id="drawer-position-${position}-trigger" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-position-${position}" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div id="drawer-position-${position}" class="chi-drawer -${position}">
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
<script>chi.drawer(document.getElementById('drawer-position-${position}-trigger'));<\/script>`,
        },
      },
    };
  })
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
  drawerPosition = 'left';
  exampleId = 'position';
  changeDrawerPosition(e: IHeadTabs) {
    this.drawerPosition = e.id;
  }
}
</script>
