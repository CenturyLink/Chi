<template lang="pug">
<ComponentExample title="Keep default link behavior" id="link-default-behavior" :tabs="exampleTabs" additionalClasses="-pb--4">
  template(#example-description)
    p.-text
      | By default, Chi JavaScript enabled tabs will ignore default link behavior.
      | To preserve it, specify a target property on the link.
  template(#example)
    ul#example-default-link-behavior.chi-tabs(role="tablist" aria-label="example-default-link-behavior")
      li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
        a(
          :href="`#${link.id}`"
          role="tab"
          aria-selected="true"
          :aria-controls="link.id"
        ) {{link.label}}
      li
        a(href='https://lib.lumen.com/chi/' target='_self') External Link
    .-py--2
      .chi-tabs-panel(v-for="tabContent in tabsContent" :class="[tabContent.active ? '-active' : '']" :id="tabContent.id" role="tabpanel")
        .-text {{tabContent.text}}
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
export default class TabbedNavigationFlat extends Vue {
  exampleTabs = [
    {
      id: 'webcomponent',
      label: 'Web Component',
      disabled: true,
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
      active: true,
    },
  ];
  tabLinks = [
    {
      id: 'a2',
      label: 'Tab a',
      active: true,
    },
    {
      id: 'b2',
      label: 'Tab b',
    },
    {
      id: 'c2',
      label: 'Tab c',
    },
  ];

  tabsContent = [
    {
      id: 'a2',
      text: 'Content for tab a',
      active: true,
    },
    {
      id: 'b2',
      text: 'Content for tab b',
    },
    {
      id: 'c2',
      text: 'Content for tab c',
    },
  ];

  get codeSnippets() {
    return {
      webComponent: '',
      htmlblueprint: `<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">\n${this.generateTabsHtml()}
  <li><a href="https://lib.lumen.com/chi/" target="_self">External Link</a></li>
</ul>

${this.generateTabsContentHtml()}
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`,
    };
  }

  generateTabsHtml() {
    return this.tabLinks
      .map(({ label, id }, index) => {
        const isFirstItem = index === 0;
        return `  <li${isFirstItem ? ' class="-active"' : ''}>
    <a
      href="#${id}"
      role="tab"${!isFirstItem ? '\n      tabindex="-1"' : ''}
      aria-selected="${isFirstItem ? 'true' : 'false'}"
      aria-controls="${id}">${label}</a>
  </li>`;
      })
      .join('\n');
  }

  generateTabsContentHtml() {
    return this.tabsContent
      .map(({ text, id }, index) => {
        const isFirstItem = index === 0;
        return `<div class="chi-tabs-panel${isFirstItem ? ' -active' : ''}" id="${id}" role="tabpanel">
  <p class="-text">${text}</p>
</div>`;
      })
      .join('\n');
  }

  mounted() {
    chi.tab(document.getElementById('example-default-link-behavior'));
  }
}
</script>
