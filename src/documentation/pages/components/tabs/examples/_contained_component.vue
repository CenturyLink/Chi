<template lang="pug">
  <ComponentExample title="Components contained" id="components-contained" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | As navigation component is built from other primitive Chi components, most of the components behavior
      | can be replicated on the navigation component. For example, you can use the <code>-animate</code> class
      | on the dropdowns to make the chevron rotate when activated.

    .-p--3.-pb--4(slot="example")
      ul.chi-tabs.chi-navigationExample#navigation-components-contained
        li.chi-dropdown.-active
          a.chi-dropdown__trigger.-animate(href='#') Active Tab
          .chi-dropdown__menu
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 1
            a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 2
            div
              a.chi-dropdown__menu-item.chi-dropdown__trigger.-animate(href='#') Elem 3 more
              .chi-dropdown__menu
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.1
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.2
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.3
                a.chi-dropdown__menu-item(href='#exampleHashTarget') Elem 3.4
            a.chi-dropdown__menu-item(href='#') Elem 4
        li
          a(href='#exampleHashTarget') Tab Link
        li
          a(href='#exampleHashTarget') Tab Link
        li.chi-dropdown
          a.chi-dropdown__trigger.-animate(href='#') Tab Link
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
        htmlblueprint: `<ul class="chi-tabs" id="navigation-components-contained">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger -animate" href="#">Active Tab</a>
    <div class="chi-dropdown__menu" x-placement="bottom-start">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a><a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          <a class="chi-dropdown__menu-item" href="#">Elem 3.1</a><a class="chi-dropdown__menu-item" href="#">Elem 3.2</a><a class="chi-dropdown__menu-item" href="#">Elem 3.3</a><a class="chi-dropdown__menu-item" href="#">Elem 3.4</a>
        </div>
      </div><a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Link</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Element 1</a><a class="chi-dropdown__menu-item" href="#">Element 2</a><a class="chi-dropdown__menu-item" href="#">Element 3</a>
    </div>
  </li>
</ul>

<script>chi.navigation(document.getElementById('navigation-components-contained'));<\/script>`,
      },
    };
  },
})
export default class ContainedComponent extends Vue {
  mounted() {
    chi.navigation(document.getElementById('navigation-components-contained'));
  }
}
</script>
