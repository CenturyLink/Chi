<template lang="pug">
  <ComponentExample title="Tabbed Navigation" id="tabbed-navigation-lumen-centurylink" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | The navigation component is a combination of Chi tabs and dropdowns components. You must use
      | <code>chi.navigation</code> function to instantiate the whole group of components, and there is no need for
      | instantiating the tabs nor the dropdowns independently. The navigation components will manage the lifecycle of the
      | descendants' tabs and dropdowns.

    p.-text(slot="example-description")
      | Although navigation reproduces all the functionality that tabs and dropdowns have, like the sliding border or the
      | animated chevron in the dropdowns, it also adds some other new functionalities like the automatic overflow menu,
      | or a wait-for-animation option.

    .-p--3.-pb--4(slot="example")
      ul.chi-tabs.chi-navigationExample#example-tabbed-navigation
        li.chi-dropdown.-active
          a.chi-dropdown__trigger(href='#') Active tab
          .chi-dropdown__menu
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 1
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 2
            div
              a.chi-dropdown__menu-item.chi-dropdown__trigger(href='#') Elem 3 more
              .chi-dropdown__menu
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.1
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.2
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.3
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.4
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 4
        li
          a(href='#exampleHashTarget') Tab Link
        li
          a(href='#exampleHashTarget') Tab Link
        li
          a(href='#exampleHashTarget') Tab Link
        li
          a(href='#exampleHashTarget') Tab Link
        li
          a(href='#exampleHashTarget') Tab Link
        li
          a(href='#exampleHashTarget') Tab Link
        li.chi-dropdown
          a.chi-dropdown__trigger(href='#') Tab Dropdown
          .chi-dropdown__menu
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Element 1
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Element 2
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Element 3
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
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<ul id="navigationExample-1" class="chi-tabs">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a>
      <a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          <a class="chi-dropdown__menu-item" href="#">Elem 3.1</a><a class="chi-dropdown__menu-item" href="#">Elem 3.2</a><a class="chi-dropdown__menu-item" href="#">Elem 3.3</a><a class="chi-dropdown__menu-item" href="#">Elem 3.4</a>
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Element 1</a>
      <a class="chi-dropdown__menu-item" href="#">Element 2</a>
      <a class="chi-dropdown__menu-item" href="#">Element 3</a>
    </div>
  </li>
</ul>

<script>
  const navigationElem = document.getElementById('#navigationExample-1');
  chi.navigation(navigationElem);
<\/script>`,
      },
    };
  },
})
export default class TabbedNavigationLumenCenturyLink extends Vue {
  mounted() {
    chi.navigation(document.getElementById('example-tabbed-navigation'));
  }
}
</script>
