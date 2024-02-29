<template lang="pug">
<ComponentExample title="Flat" id="horizontal-flat" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
  template(#example)
    .-px--3.-bg--white(:class="isPortal ? '-pt--2' : ''")
      chi-tabs(:active-tab='activeTab' id='example__horizontal-flat' @chiTabChange='chiTabChange' sliding-border)
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
import { Vue, Prop } from 'vue-facing-decorator';
import { type TabsListInterface } from '~/models/models';

@NuxtComponent({})
export default class HorizontalFlat extends Vue {
  @Prop() isPortal?: boolean;

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
      webcomponent: `<chi-tabs active-tab="tab-a" id="example__horizontal-flat" sliding-border></chi-tabs>

${this.generateTabsContentHtml(true)}

<script>
  const tabsElement = document.querySelector('example__horizontal-flat');

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
      htmlblueprint: `<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">\n${this.generateTabsHtml()}\n</ul>

${this.generateTabsContentHtml(false)}

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`,
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
    const element = document.querySelector('#example__horizontal-flat') as TabsListInterface;
    if (element) {
      element.tabs = this.tabLinks;
    }
  }
}
</script>
