<template lang="pug">
  <ComponentExample title="Solid" titleSize="h4" id="tabbed-navigation-lumen-centurylink" :tabs="exampleTabs" padding="-p--3 pb--4">
    ul.chi-tabs.-solid.-border.-lg.chi-navigationExample#example-solid-tabbed-navigation(ref="example__tabs_tabbed_navigation" slot="example")
      li.chi-dropdown.-active
        a.chi-dropdown__trigger(href='#') Active tab
        .chi-dropdown__menu
          a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 1
          a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 2
          div
            a.chi-dropdown__menu-item.chi-dropdown__trigger(href='#') Elem 3 more
            .chi-dropdown__menu
              a.chi-dropdown__menu-item(href='#exampleHashTarget' v-for="(elem, index) in activeElements" :index="index") {{ elem }}
          a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 4
      li(v-for="(link, index) in tabLinks" :index="index") 
        a(href='#exampleHashTarget' @click.prevent="() => {}") {{ link }}
      li.chi-dropdown
        a.chi-dropdown__trigger(ref="example__tabs_tabbed_dropdown" href='#') Tab Dropdown
        .chi-dropdown__menu
          a.chi-dropdown__menu-item(href='#exampleHashTarget' v-for="(elem, index) in tabElements" :index="index") {{ elem }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      tabElements: ['Element 1', 'Element 2', 'Element 3'],
      tabLinks: Array(4).fill('Tab Link'),
      activeElements: ['Elem 3.1', 'Elem 3.2', 'Elem 3.3', 'Elem 3.4'],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TabbedNavigationSolidLumenCenturyLink extends Vue {
  navigation: any;
  dropdown: any;

  _setcodeSnippet() {
    let tabLinks = '', tabElements = '', activeElements = '';
    this.$data.tabLinks.forEach((tabLink: string) => {
      tabLinks += `\n  <li>\n    <a href="#">${tabLink}</a>\n  </li>`
    })
    this.$data.activeElements.forEach((activeEl: string) => {
      activeElements += `<a class="chi-dropdown__menu-item" href="#">${activeEl}</a>`
    })
    this.$data.tabElements.forEach((tabEl: string) => {
      tabElements += `\n      <a class="chi-dropdown__menu-item" href="#">${tabEl}</a>`
    })
    this.$data.codeSnippets.htmlblueprint = `<ul id="navigationExample-1" class="chi-tabs -solid -border -lg">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a>
      <a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">\n          ${activeElements}\n       </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>${tabLinks}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>\n    <div class="chi-dropdown__menu">${tabElements}\n    </div>
  </li>
</ul>\n\n<script>
  const navigationElem = document.getElementById('#example__tabs_navigation_1');
  chi.navigation(navigationElem);\n<\/script>`
  }

  created() {
    this._setcodeSnippet();
  }

  mounted() {
    this.navigation = chi.navigation(this.$refs['example__tabs_tabbed_navigation'] as HTMLElement);
    this.dropdown = chi.dropdown(this.$refs['example__tabs_tabbed_dropdown'] as HTMLElement);
  }

  beforeDestroy() {
    this.navigation.dispose();
    this.dropdown.dispose();
  }
}
</script>
