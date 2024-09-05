<template lang="pug">
<ComponentExample title="Keep default link behavior" id="link-default-behavior" :tabs="exampleTabs" additionalClasses="-pb--4">
  template(#example-description)
    p.-text
      | By default, Chi JavaScript enabled tabs will ignore default link behavior.
      | To preserve it, specify a target property on the link.
  template(#example)
    chi-tabs#example__default-link-behavior(active-tab="example__default-link-behavior-1" border sliding-border)
      div(slot="panels")
        div(v-for="panel in panels" class="chi-tabs-panel" :id="panel.id" role="tabpanel")
          p.-text {{ panel.text }}

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
export default class TabbedNavigationFlat extends Vue {
  exampleTabs = [
    {
      id: 'webcomponent',
      label: 'Web Component',
      active: true,
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  tabs = [
    {
      label: 'Active Tab',
      id: 'example__default-link-behavior-1',
    },
    {
      label: 'Tab Link',
      id: 'example__default-link-behavior-2',
    },
    {
      label: 'Tab Link',
      id: 'example__default-link-behavior-3',
    },
    {
      label: 'External Link',
      id: 'example__default-link-behavior-4',
      href: 'https://lib.lumen.com/chi/',
      target: '_self',
    },
  ];

  panels = [
    {
      id: 'example__default-link-behavior-1',
      text: 'Tab 1 content',
    },
    {
      id: 'example__default-link-behavior-2',
      text: 'Tab 2 content',
    },
    {
      id: 'example__default-link-behavior-3',
      text: 'Tab 3 content',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs id="example__default-link-behavior" active-tab="example__default-link-behavior-1" border sliding-border>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__default-link-behavior-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__default-link-behavior-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__default-link-behavior-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</chi-tabs>

<script>
  document.getElementById("example__default-link-behavior").tabs = [
    {
      label: 'Active Tab',
      id: 'example__default-link-behavior-1'
    },
    {
      label: 'Tab Link',
      id: 'example__default-link-behavior-2'
    },
    {
      label: 'Tab Link',
      id: 'example__default-link-behavior-3'
    },
    {
      label: 'External Link',
      id: 'example__default-link-behavior-4',
      href: 'https://lib.lumen.com/chi/',
      target: '_self'
    }
  ];
<\/script>`,
      htmlblueprint: `<ul class="chi-tabs" id="example__default-link-behavior" role="tablist" aria-label="Tabs">\n${this.generateTabsHtml()}
  <li><a href="https://lib.lumen.com/chi/" target="_self">External Link</a></li>
</ul>

${this.generateTabsContentHtml()}
</div>

<script>chi.tab(document.getElementById('example__default-link-behavior'));<\/script>`,
    };
  }

  generateTabsHtml() {
    return this.tabs
      .filter(tab => !tab.href).map(({ label, id }, index) => {
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
    return this.panels
      .map(({ text, id }, index) => {
        const isFirstItem = index === 0;
        return `<div class="chi-tabs-panel${isFirstItem ? ' -active' : ''}" id="${id}" role="tabpanel">
  <p class="-text">${text}</p>
</div>`;
      })
      .join('\n');
  }

  mounted() {
    const tabDefaultLinkBehavior = document.querySelector('#example__default-link-behavior') as TabsListInterface;

    if (tabDefaultLinkBehavior) {
      tabDefaultLinkBehavior.tabs = this.tabs;
    }
  }
}
</script>
