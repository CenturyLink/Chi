<template lang="pug">
  <ComponentExample title="Interaction" id="interaction" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description") Read this handy introduction to 
      a(href=`../../getting-started/installation`) HTML attributes and DOM properties
    .-position--relative.-z--0.-overflow--hidden(style='height:20rem;' slot="example")
      .-p--3
        .-d--flex.-align-items--center
          button.chi-button.-icon.-flat(aria-label="Toggle drawer" @click="toggleDrawer")
            .chi-button__content
              i.chi-icon.icon-menu.-sm--2(aria-hidden="true")
          b.-ml--2 Click menu button to open Drawer
        p.-text.-mb--3(v-for="item in [1,2]") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit.
          | Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. 
          | Nulla nec quam in turpis fermentum dictum vitae ac nibh. 
          | Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. 
          | Donec semper nunc et tellus convallis, tristique varius turpis gravida. 
          | Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. 
          | Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. 
          | Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. 
          | Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.
      chi-drawer(position="left" backdrop no-header ref="drawer")
        .-p--2.-pt--6.-text Drawer content here
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | Modify the <code>active</code> attribute or property to make the drawer show or hide. 
        | <code>chi-drawer</code> also supports three public methods to change its visibility: <code>show()</code>, <code>hide()</code>, <code>toggle()</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-vue">
      .chi-tab__description
        | Modify the <code>active</code> attribute or property to make the drawer show or hide. 
        | <code>ChiDrawer</code> also supports three public methods to change its visibility: <code>show()</code>, <code>hide()</code>, <code>toggle()</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.vue" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      .chi-tab__description
        | Use the function <code>chi.drawer(elem)</code> to instantiate a new drawer component in the DOM element passed as a parameter. 
        | You must use the trigger element as the parameter.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
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
      codeSnippets: {
        webcomponent: `<!-- Trigger -->
<chi-button id="drawer-trigger" variant="flat" type="icon">
  <chi-icon icon="menu" size="sm--2"></chi-icon>
</chi-button>

<!-- Drawer -->
<chi-drawer id="interactive-drawer" position="left" backdrop no-header>
  <div class="-p--2 -pt--6 -text">Drawer content here</div>
</chi-drawer>

<!-- JavaScript -->
<script>
  var drawer = document.getElementById('interactive-drawer');
  var drawerTrigger = document.getElementById('drawer-trigger');
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
}`,
        htmlblueprint: `<!-- Trigger -->
<button id="drawer-trigger-1" class="chi-button -flat -icon chi-drawer__trigger" data-target="#drawer-1" aria-label="Toggle navigation">
  <div class="chi-button__content">
    <i class="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
  </div>
</button>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div id="drawer-1" class="chi-drawer -left">
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
<script>chi.drawer(document.getElementById('drawer-trigger-1'));<\/script>`
      }
    };
  }
})
export default class Interaction extends Vue {
  toggleDrawer() {
    (this.$refs.drawer as any).toggle();
  }
}
</script>
