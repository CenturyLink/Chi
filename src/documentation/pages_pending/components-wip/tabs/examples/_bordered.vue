<template lang="pug">
  <ComponentExample title="Bordered" id="bordered" additionalClasses="-bg--grey-20" :tabs="exampleTabs">
    template(#example)
      .-p--3.-bg--white
        chi-tabs(:active-tab='activeTab' id='example__bordered' border @chiTabChange='chiTabChange' sliding-border)
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

  activeTab = 'tab-a';

  tabLinks = [
    {
      label: 'Active Tab',
      id: 'tab-a',
    },
    {
      label: 'Tab Link',
      id: 'tab-b',
    },
    {
      label: 'Tab Link',
      id: 'tab-c',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs active-tab="tab-a" id="example__bordered" border sliding-border></chi-tabs>

<script>
  const tabsElement = document.querySelector('example__bordered');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a'
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      }
    ];
  }
<\/script>`,
      htmlblueprint: `<ul class="chi-tabs -border">
${this.generateTabsHtml()}
</ul>`,
    };
  }

  chiTabChange(tab: any) {
    this.activeTab = tab.detail.id;
  }

  generateTabsHtml() {
    return this.tabLinks
      .map(({ label, id }, index) => {
        const isFirstItem = index === 0;
        return `  <li${isFirstItem ? ' class="-active"' : ''}>
    <a href="#">${isFirstItem ? 'Active tab' : 'Tab link'}</a>
  </li>`;
      })
      .join('\n');
  }

  mounted() {
    const element = document.querySelector('#example__bordered') as TabsListInterface;

    if (element) {
      element.tabs = this.tabLinks;
    }
  }
}
</script>
