<template lang="pug">
  <ComponentExample title="Components contained" id="components-contained" :tabs="exampleTabs" titleSize="h4" additionalClasses="-pb--4">
    p.-text(slot="example-description")
      | As navigation component is built from other primitive Chi components, most of the components behavior
      | can be replicated on the navigation component. For example, you can use the <code>-animate</code> class
      | on the dropdowns to make the chevron rotate when activated.
    ul.chi-tabs.chi-navigationExample#navigation-components-contained(slot="example")
      li.chi-dropdown.-active
        a.chi-dropdown__trigger.-animate(href='#') Active Tab
        .chi-dropdown__menu
          a.chi-dropdown__menu-item(v-for="item in [1, 2]" href='#exampleHashTarget') Elem {{ item }}
          div
            a.chi-dropdown__menu-item.chi-dropdown__trigger.-animate(href='#') Elem 3 more
            .chi-dropdown__menu
              a.chi-dropdown__menu-item(v-for="item in [1, 2, 3, 4]" href='#exampleHashTarget') Elem 3.{{ item }}
          a.chi-dropdown__menu-item(href='#') Elem 4
      li(v-for="item in [1, 2]")
        a(href='#exampleHashTarget') Tab Link
      li.chi-dropdown
        a.chi-dropdown__trigger.-animate(href='#') Tab Link
        .chi-dropdown__menu
          a.chi-dropdown__menu-item(v-for="item in [1, 2, 3]" href='#exampleHashTarget') Element {{ item }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    }
  }
})

export default class ComponentsContained extends Vue {
  get codeSnippets() {
    return {
      webcomponent: ``,
      htmlblueprint: `<ul class="chi-tabs" id="navigation-components-contained">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger -animate" href="#">Active Tab</a>
    <div class="chi-dropdown__menu" x-placement="bottom-start">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a><a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          ${this.generateTabsDropdownLinksHtml([1, 2, 3, 4], 'Elem 3.')}
        </div>
      </div><a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${this.tabsLinksHtml}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Link</a>
    <div class="chi-dropdown__menu">
        ${this.generateTabsDropdownLinksHtml([1, 2, 3], 'Element ')}
    </div>
  </li>
</ul>

<script>chi.navigation(document.getElementById('navigation-components-contained'));<\/script>`
    }
  }

  get tabsLinksHtml() {
    return [1, 2].map(() => {
      return (`  <li>
    <a href="#">Tab Link</a>
  </li>`
      )
    }).join('\n');
  }

  generateTabsDropdownLinksHtml(array: number[], name: string) {
    return array.map(item => {
      return (`<a class="chi-dropdown__menu-item" href="#">${name}${item}</a>`
      )
    }).join('');
  }

  mounted() {
    chi.navigation(document.getElementById('navigation-components-contained'));
  }
}
</script>
