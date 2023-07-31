<template lang="pug">
  <ComponentExample title="Flat" id="horizontal-flat" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
    .-px--3.-bg--white(slot="example" :class="isPortal ? '-pt--2' : ''")
      chi-tabs(:active-tab='activeTab' id='example__horizontal-flat' @chiTabChange='chiTabChange' sliding-border)
      .-py--3
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
import { Component, Prop, Vue } from 'vue-property-decorator';
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

export default class HorizontalFlat extends Vue {
  @Prop() isPortal?: boolean;

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
      webcomponent: `<chi-tabs active-tab="tab-a" id="example__horizontal-flat"></chi-tabs>

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

    function clearActiveTab () {
      const tabItems = document.querySelectorAll('.chi-tabs-panel');
      tabItems.forEach(tab => {
        tab.classList.remove('-active');
      });
    }

    tabsElement.addEventListener("chiTabChange", function(event) {
      const content = document.getElementById(event.detail.id + '_content');
      clearActiveTab();
      content.classList.add('-active');
    });
  }
<\/script>`,
        htmlblueprint: `<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">\n${this.generateTabsHtml()}\n</ul>

${this.generateTabsContentHtml(false)}

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`
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
    const element = document.querySelector('#example__horizontal-flat') as TabsListInterface

    if (element) {
      element.tabs = this.tabLinks
    }
  }
}
</script>
