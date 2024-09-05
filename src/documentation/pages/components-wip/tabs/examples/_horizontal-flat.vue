<template lang="pug">
<ComponentExample title="Flat" id="horizontal-flat" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
  template(#example)
    .-px--3.-bg--white(:class="isPortal ? '-py--2' : ''")
      chi-tabs(id="example__horizontal-flat" active-tab="example__horizontal-flat-1" border sliding-border)
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

  tabs = [
    {
      id: 'example__horizontal-flat-1',
      label: 'Active Tab',
    },
    {
      id: 'example__horizontal-flat-2',
      label: 'Tab Link',
    },
    {
      id: 'example__horizontal-flat-3',
      label: 'Tab Link',
    },
  ];

  panels = [
    {
      id: 'example__horizontal-flat-1',
      text: 'Tab 1 content',
    },
    {
      id: 'example__horizontal-flat-2',
      text: 'Tab 2 content',
    },
    {
      id: 'example__horizontal-flat-3',
      text: 'Tab 3 content',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs id="example__horizontal-flat" active-tab="example__horizontal-flat-1" border sliding-border>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__horizontal-flat-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__horizontal-flat-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__horizontal-flat-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</chi-tabs>

<script>
  document.querySelector('#example__horizontal-flat').tabs = [
    {
      id: 'example__horizontal-flat-1',
      label: 'Active Tab'
    },
    {
      id: 'example__horizontal-flat-2',
      label: 'Tab Link'
    },
    {
      id: 'example__horizontal-flat-3',
      label: 'Tab Link'
    }
  ];
<\/script>`,
      htmlblueprint: `<ul class="chi-tabs -border" id="example__horizontal-flat" role="tablist" aria-label="Tabs">\n${this.generateTabsHtml()}\n</ul>

${this.generatePanelsHtml()}

<script>chi.tab(document.getElementById('example__horizontal-flat'));<\/script>`,
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
    const element = document.querySelector('#example__horizontal-flat') as TabsListInterface;

    if (element) {
      element.tabs = this.tabs;
    }
  }
}
</script>
