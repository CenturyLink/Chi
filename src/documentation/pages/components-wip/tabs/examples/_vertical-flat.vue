<template lang="pug">
<ComponentExample title="Flat" id="vertical-flat" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
  template(#example)
    //- TODO: Use web component when vertical tab issue is fixed
    //- .-px--3.-bg--white(:class="isPortal ? '-py--2' : ''")
    //-   chi-tabs(id="example__vertical-flat" active-tab="example__vertical-flat-1" vertical sliding-border)
    //-     div(slot="panels")
    //-       div(v-for="panel in panels" class="chi-tabs-panel" :id="panel.id" role="tabpanel")
    //-         p.-text {{ panel.text }}

    .chi-grid.-no-gutter.-bg--white
      //- Tabs
      .chi-col.-w--6.-w-sm--4.-p--3
        ul#example__vertical-flat.chi-tabs.-vertical(role="tablist" aria-label="Tabs")
          li(v-for="(tab, index) in tabs" :class="{'-active': index === 0 }")
            a(
              :href="`#${tab.id}`"
              role="tab"
              :tabindex="index === 0 ? '-1' : null"
              :aria-selected="index === 0 ? 'true' : 'false'"
              :aria-controls="tab.id"
            ) {{ tab.label }}
      //- Panels
      .chi-col.-p--3
        div(v-for="(tab, index) in panels" :id="tab.id" :class="{'chi-tabs-panel': true, '-active': index === 0}" role="tabpanel")
          p.-text {{ tab.text }}

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
// import { type TabsListInterface } from '~/models/models';

declare const chi: any;

@NuxtComponent({})
export default class VerticalFlat extends Vue {
  exampleTabs = [
    {
      active: false,
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  tabs = [
    {
      id: 'example__vertical-flat-1',
      label: 'Active Tab',
    },
    {
      id: 'example__vertical-flat-2',
      label: 'Tab Link',
    },
    {
      id: 'example__vertical-flat-3',
      label: 'Tab Link',
    },
  ];

  panels = [
    {
      id: 'example__vertical-flat-1',
      text: 'Tab 1 content',
    },
    {
      id: 'example__vertical-flat-2',
      text: 'Tab 2 content',
    },
    {
      id: 'example__vertical-flat-3',
      text: 'Tab 3 content',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs id="example__vertical-flat" active-tab="example__vertical-flat-1" vertical sliding-border>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__vertical-flat-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__vertical-flat-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__vertical-flat-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</chi-tabs>

<script>
  const tabsElement = document.querySelector('#example__vertical-flat');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'example__vertical-flat-1'
      },
      {
        label: 'Tab Link',
        id: 'example__vertical-flat-2'
      },
      {
        label: 'Tab Link',
        id: 'example__vertical-flat-3'
      }
    ];
  }
<\/script>`,
      htmlblueprint: `<div class="chi-grid">
  <div class="chi-col">
    <ul class="chi-tabs -vertical" id="example__vertical-flat" role="tablist" aria-label="Tabs">
      ${this.generateTabsHtml()}
    </ul>
  </div>
  <div class="chi-col">
    ${this.generatePanelsHtml()}
  </div>
</div>

<script>chi.tab(document.getElementById('example__vertical-flat'));<\/script>`,
    };
  }

  generateTabsHtml() {
    return this.tabs
      .map(({ label, id }, index) => {
        const isFirstItem = index === 0;
        return `
      <li${isFirstItem ? ' class="-active"' : ''}>
        <a
          href="#${id}"
          role="tab"${!isFirstItem ? '\n          tabindex="-1"' : ''}
          aria-selected="${isFirstItem ? 'true' : 'false'}"
          aria-controls="${id}">${label}</a>
      </li>`;
      })
      .join('').trim();
  }

  generatePanelsHtml() {
    return this.panels
      .map(({ text, id }, index) => {
        const isFirstItem = index === 0;
        return `
    <div class="chi-tabs-panel${isFirstItem ? ' -active' : ''}" id="${id}" role="tabpanel">
      <p class="-text">${text}</p>
    </div>`;
      })
      .join('').trim();
  }

  mounted() {
    // TODO: Use web component when vertical tab issue is fixed
    // const element = document.querySelector('#example__vertical-flat') as TabsListInterface;

    // if (element) {
    //   element.tabs = this.tabs;
    // }

    chi.tab(document.getElementById('example__vertical-flat'));
  }
}
</script>
