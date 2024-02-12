<template lang="pug">
<ComponentExample title="Components contained" id="components-contained" :tabs="exampleTabs" titleSize="h4" additionalClasses="-pb--4">
  template(#example-description)
    p.-text
      | As navigation component is built from other primitive Chi components, most of the components behavior
      | can be replicated on the navigation component. For example, you can use the <code>-animate</code> class
      | on the dropdowns to make the chevron rotate when activated.
  template(#example)
    ul.chi-tabs.chi-navigationExample#navigation-components-contained
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
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")

</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class ComponentsContained extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]

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

<script>chi.navigation(document.getElementById('navigation-components-contained'));<\/script>`,
    };
  }

  get tabsLinksHtml() {
    return [1, 2]
      .map(() => {
        return `  <li>
    <a href="#">Tab Link</a>
  </li>`;
      })
      .join('\n');
  }

  generateTabsDropdownLinksHtml(array: number[], name: string) {
    return array
      .map((item) => {
        return `<a class="chi-dropdown__menu-item" href="#">${name}${item}</a>`;
      })
      .join('');
  }

  mounted() {
    chi.navigation(document.getElementById('navigation-components-contained'));
  }
}
</script>
