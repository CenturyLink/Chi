<template lang="pug">
<ComponentExample title="Solid" id="horizontal-solid" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
  template(#example)
    .-px--3.-pt--2.-bg--white
      chi-tabs(:active-tab='activeTab' id='example__horizontal-solid' size='lg' sliding-border solid @chiTabChange='chiTabChange')
      .-py--3
        div(v-for="tabContent in tabsContent" :class="['chi-tabs-panel', activeTab === tabContent.id ? '-active' : '']" role="tabpanel")
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
import { type TabsListInterface } from '~/models/models';

@NuxtComponent({})
export default class HorizontalSolid extends Vue {
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

  tabsContent = [
    {
      id: 'tab-a',
      text: 'Tab 1 content',
    },
    {
      id: 'tab-b',
      text: 'Tab 2 content',
    },
    {
      id: 'tab-c',
      text: 'Tab 3 content',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs active-tab="tab-a" id="example__horizontal-solid" size="lg" solid sliding-border></chi-tabs>

${this.generateTabsContentHtml(true)}

<script>
  const tabsElement = document.querySelector('#example__solid');

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
      htmlblueprint: `<ul class="chi-tabs -solid -lg -border" id="example-horizontal-solid-bordered" role="tablist" aria-label="chi-tabs-horizontal">\n${this.generateTabsHtml()}\n</ul>

${this.generateTabsContentHtml(false)}

<script>chi.tab(document.getElementById('example-horizontal-solid-bordered'));<\/script>`,
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
    <a
      href="#${id}"
      role="tab"${!isFirstItem ? '\n      tabindex="-1"' : ''}
      aria-selected="${isFirstItem ? 'true' : 'false'}"
      aria-controls="${id}">${label}</a>
  </li>`;
      })
      .join('\n');
  }

  generateTabsContentHtml(isWebComponent: boolean) {
    return this.tabsContent
      .map(({ text, id }, index) => {
        const isFirstItem = index === 0;
        return `<div class="chi-tabs-panel${isFirstItem ? ' -active' : ''}" id="${
          isWebComponent ? `${id}_content` : id
        }" role="tabpanel">${text}</div>`;
      })
      .join('\n');
  }

  mounted() {
    const element = document.querySelector('#example__horizontal-solid') as TabsListInterface;

    if (element) {
      element.tabs = this.tabLinks;
    }
  }
}
</script>
