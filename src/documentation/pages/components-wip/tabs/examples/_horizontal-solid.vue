<template lang="pug">
<ComponentExample title="Solid" id="horizontal-solid" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
  template(#example)
    .-px--3.-py--2.-bg--white
      chi-tabs(id="example__horizontal-solid" active-tab="example__horizontal-solid-1" size="lg" solid border)
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

  tabs = [
    {
      id: 'example__horizontal-solid-1',
      label: 'Active Tab',
    },
    {
      id: 'example__horizontal-solid-2',
      label: 'Tab Link',
    },
    {
      id: 'example__horizontal-solid-3',
      label: 'Tab Link',
    },
  ];

  panels = [
    {
      id: 'example__horizontal-solid-1',
      text: 'Tab 1 content',
    },
    {
      id: 'example__horizontal-solid-2',
      text: 'Tab 2 content',
    },
    {
      id: 'example__horizontal-solid-3',
      text: 'Tab 3 content',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs id="example__horizontal-solid" active-tab="example__horizontal-solid-1" size="lg" solid border>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__horizontal-solid-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__horizontal-solid-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__horizontal-solid-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</chi-tabs>

<script>
  document.querySelector('#example__horizontal-solid').tabs = [
    {
      id: 'example__horizontal-solid-1',
      label: 'Active Tab'
    },
    {
      id: 'example__horizontal-solid-2',
      label: 'Tab Link'
    },
    {
      id: 'example__horizontal-solid-3',
      label: 'Tab Link'
    }
  ];
<\/script>`,
      htmlblueprint: `<ul class="chi-tabs -solid -border -lg" id="example__horizontal-solid" role="tablist" aria-label="Tabs">\n${this.generateTabsHtml()}\n</ul>

${this.generatePanelsHtml()}

<script>chi.tab(document.getElementById('example__horizontal-solid'));<\/script>`,
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

  generatePanelsHtml() {
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
    const element = document.querySelector('#example__horizontal-solid') as TabsListInterface;

    if (element) {
      element.tabs = this.tabs;
    }
  }
}
</script>
