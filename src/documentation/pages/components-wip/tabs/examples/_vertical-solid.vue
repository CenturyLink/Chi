<template lang="pug">
<ComponentExample title="Solid" id="vertical-solid" :tabs="exampleTabs" titleSize="h4" additionalClasses="-bg--grey-20">
  template(#example)
    //- TODO: Use web component when vertical tab issue is fixed
    //- .-px--3.-bg--white(:class="isPortal ? '-py--2' : ''")
    //-   chi-tabs(id="example__vertical-solid" active-tab="example__vertical-solid-1" vertical sliding-border)
    //-     div(slot="panels")
    //-       div(v-for="panel in panels" class="chi-tabs-panel" :id="panel.id" role="tabpanel")
    //-         p.-text {{ panel.text }}

    .chi-grid.-no-gutter.-bg--white
      //- Tabs
      .chi-col.-w--6.-w-sm--4.-p--3
        ul#example__vertical-solid.chi-tabs.-vertical.-solid.-xl(role="tablist" aria-label="Tabs")
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
import { type TabsListInterface } from '~/models/models';

declare const chi: any;

@NuxtComponent({})
export default class VerticalSolid extends Vue {
  exampleTabs = [
    {
      disabled: true,
      active: false,
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
      label: 'Active Tab',
      id: 'example__vertical-solid-1',
    },
    {
      label: 'Tab Link',
      id: 'example__vertical-solid-2',
    },
    {
      label: 'Tab Link',
      id: 'example__vertical-solid-3',
    },
  ];

  panels = [
    {
      id: 'example__vertical-solid-1',
      text: 'Tab 1 content',
    },
    {
      id: 'example__vertical-solid-2',
      text: 'Tab 2 content',
    },
    {
      id: 'example__vertical-solid-3',
      text: 'Tab 3 content',
    },
  ];

  get codeSnippets() {
    return {
      webcomponent: `<chi-tabs id="example__vertical-solid" active-tab="example__vertical-solid-1" size="xl" vertical solid sliding-border>
  <div slot="panels">
    <div class="chi-tabs-panel" id="example__vertical-solid-1" role="tabpanel">
      <p class="-text">Tab 1 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__vertical-solid-2" role="tabpanel">
      <p class="-text">Tab 2 content</p>
    </div>
    <div class="chi-tabs-panel" id="example__vertical-solid-3" role="tabpanel">
      <p class="-text">Tab 3 content</p>
    </div>
  </div>
</chi-tabs>

<script>
  const tabsElement = document.querySelector('#example__vertical-solid');

  if (tabsElement) {
    tabsElement.tabs = [
      {
        label: 'Active Tab',
        id: 'example__vertical-solid-1'
      },
      {
        label: 'Tab Link',
        id: 'example__vertical-solid-2'
      },
      {
        label: 'Tab Link',
        id: 'example__vertical-solid-3'
      }
    ];
  }
<\/script>`,
      htmlblueprint: `<div class="chi-grid">
  <div class="chi-col">
    <ul class="chi-tabs -vertical -solid -xl" id="example__vertical-solid" role="tablist" aria-label="Tabs">
      ${this.generateTabsHtml()}
    </ul>
  </div>
  <div class="chi-col">
    ${this.generatePanelsHtml()}
  </div>
</div>

<script>chi.tab(document.getElementById('example__vertical-solid'));<\/script>`,
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
    // const element = document.querySelector('#example__vertical-solid') as TabsListInterface;

    // if (element) {
    //   element.tabs = this.tabs;
    // }

    chi.tab(document.getElementById('example__vertical-solid'));
  }
}
</script>
