<template lang="pug">
<ComponentExample title="Bordered" id="bordered" additionalClasses="-bg--grey-20" :tabs="exampleTabs">
  template(#example)
    .-p--3.-bg--white
      chi-tabs(id="example__bordered" active-tab="example__bordered-1" border sliding-border)
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type TabsListInterface } from '~/models/models';

@NuxtComponent({})
export default class Bordered extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  tabs = [
    {
      label: 'Active Tab',
      id: 'example__bordered-1',
    },
    {
      label: 'Tab Link',
      id: 'example__bordered-2',
    },
    {
      label: 'Tab Link',
      id: 'example__bordered-3',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs id="example__bordered" active-tab="example__bordered-1" border sliding-border></chi-tabs>

<script>
  document.querySelector('#example__bordered').tabs = [
    {
      label: 'Active Tab',
      id: 'example__bordered-1'
    },
    {
      label: 'Tab Link',
      id: 'example__bordered-2'
    },
    {
      label: 'Tab Link',
      id: 'example__bordered-3'
    }
  ];
<\/script>`,
      htmlblueprint: `<ul class="chi-tabs -border" id="example__bordered">
${this.generateTabsHtml()}
</ul>

<script>chi.tab(document.querySelector('#example__bordered'));<\/script>`,
    };
  }

  generateTabsHtml() {
    return this.tabs
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

  mounted() {
    const element = document.querySelector('#example__bordered') as TabsListInterface;

    if (element) {
      element.tabs = this.tabs;
    }
  }
}
</script>
