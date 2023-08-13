<template lang="pug">
  <ComponentExample title="Bordered" id="bordered" additionalClasses="-bg--grey-20" :tabs="exampleTabs">
    .-p--3.-bg--white(slot="example")
      chi-tabs(:active-tab='activeTab' id='example__bordered' border @chiTabChange='chiTabChange' sliding-border)
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TabsListInterface } from '~/models/models';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    }
  }
})
export default class Bordered extends Vue {
  activeTab = 'tab-a'

  tabLinks = [
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
  ]

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
</ul>`
    }
  }

  chiTabChange(tab: any) {
    this.activeTab = tab.detail.id
  }

  generateTabsHtml() {
    return this.tabLinks.map(({ label, id }, index) => {
      const isFirstItem = index === 0;
      return (
        `  <li${isFirstItem ? ' class="-active"' : ''}>
    <a href="#">${isFirstItem ? 'Active tab' : 'Tab link'}</a>
  </li>`
      )
    }).join('\n');
  }

  mounted() {
    const element = document.querySelector('#example__bordered') as TabsListInterface

    if (element) {
      element.tabs = this.tabLinks
    }
  }
}
</script>
