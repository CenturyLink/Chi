<template lang="pug">
  <ComponentExample title="Solid" id="vertical-solid" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
    .chi-grid.-no-gutter.-bg--white(slot="example")
      .chi-col.-w--6.-w-sm--4.-p--3
        chi-tabs(:active-tab='activeTab' id='example__vertical-solid' size='xl' solid vertical sliding-border @chiTabChange='chiTabChange')
      .chi-col.-p--3
        div(v-for="tabContent in tabsContent" :class="['chi-tabs-panel', activeTab === tabContent.id ? '-active' : '']" role="tabpanel")
          .-text {{tabContent.text}}

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

export default class VerticalSolid extends Vue {
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

  tabsContent = [
    {
      id: 'tab-a',
      text: 'Tab 1 content'
    },
    {
      id: 'tab-b',
      text: 'Tab 2 content'
    },
    {
      id: 'tab-c',
      text: 'Tab 3 content'
    }
  ]

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs active-tab="tab-a" id="example__vertical-solid" size='xl' solid vertical sliding-border></chi-tabs>

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
      htmlblueprint: `<ul class="chi-tabs -vertical -solid -xl" id="example-vertical-solid-bordered" role="tablist" aria-label="chi-tabs-vertical">\n${this.generateTabsHtml()}\n</ul>

${this.generateTabsContentHtml(false)}

<script>chi.tab(document.getElementById('example-vertical-solid-bordered'));<\/script>`
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
    <a
      href="#${id}"
      role="tab"${!isFirstItem ? '\n      tabindex="-1"' : ''}
      aria-selected="${isFirstItem ? 'true' : 'false'}"
      aria-controls="${id}">${label}</a>
  </li>`
      )
    }).join('\n');
  }

  generateTabsContentHtml(isWebComponent: boolean) {
    return this.tabsContent.map(({ text, id }, index) => {
      const isFirstItem = index === 0;
      return (
        `<div class="chi-tabs-panel${isFirstItem ? ' -active' : ''}" id="${isWebComponent ? `${id}_content` : id}" role="tabpanel">${text}</div>`
      )
    }).join('\n');
  }

  mounted() {
    const element = document.querySelector('#example__vertical-solid') as TabsListInterface

    if (element) {
      element.tabs = this.tabLinks
    }
  }
}
</script>
