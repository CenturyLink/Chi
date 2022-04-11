<template lang="pug">
  <ComponentExample title="Position" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeDrawerPosition(e)" padding="-p--0">
    .-position--relative.-z--0.-overflow--hidden(style='height:30rem;' slot="example")
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
    <pre class="language-html" v-for="tab in headTabs" :slot="`code-${exampleId}-${tab.id}-webcomponent`" :key="tab.id">
      <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
    </pre>
    <pre class="language-html" v-for="tab in headTabs" :slot="`code-${exampleId}-${tab.id}-vue`" :key="tab.id">
      <code v-highlight="tab.codeSnippets.vue.code" class="html"></code>
    </pre>
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
      headTabs: ['left', 'right', 'top', 'bottom'].map((position, index) => {
        const webComponentIds = [2, 4, 6, 8];
        const htmlBlueprintIds = [3, 5, 7, 9];

        return {
          active: position === 'left' ? true : false,
          id: position,
          label: position.charAt(0).toUpperCase() + position.slice(1),
          codeSnippets: {
            webComponent: {
              code: `<!-- Trigger -->
<chi-button id="drawer-trigger-${webComponentIds[index]}" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="interactive-drawer-${webComponentIds[index]}" position="${position}" no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('interactive-drawer-${webComponentIds[index]}');
  var drawerTrigger = document.getElementById('drawer-trigger-${webComponentIds[index]}');
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
}`
            },
            htmlBlueprint: {
              code: `<!-- Trigger -->
<button id="drawer-trigger-${htmlBlueprintIds[index]}" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-${htmlBlueprintIds[index]}" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div id="drawer-${htmlBlueprintIds[index]}" class="chi-drawer -${position}">
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
<script>chi.drawer(document.getElementById('drawer-trigger-${htmlBlueprintIds[index]}'));<\/script>`
            }
          }
        };
      }),
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
      drawerPosition: 'left',
      exampleId: 'position'
    };
  }
})
export default class Position extends Vue {
  changeDrawerPosition(e: HeadTabsInterface) {
    this.$data.drawerPosition = e.id;
  }
}
</script>
