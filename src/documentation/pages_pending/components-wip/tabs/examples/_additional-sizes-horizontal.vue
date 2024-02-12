<template lang="pug">
  <ComponentExample title="Horizontal" id="additional-sizes-horizontal" :tabs="exampleTabs" additionalClasses="-pb--4" titleSize="h4">
    template(#example)
      p.-text--bold X-small
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-xs' size='xs' sliding-border)
      p.-text--bold.-mt--6 Small
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-sm' size='sm' sliding-border)
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-md' sliding-border)
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-lg' size='lg' sliding-border)
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webComponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlBlueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { TabsListInterface } from '~/models/models';

@NuxtComponent({})
export default class AdditionalSizesHorizontal extends Vue {
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
  ]
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

  sizes = [
    {
      name: 'X-small',
      value: 'xs',
    },
    {
      name: 'Small',
      value: 'sm',
    },
    {
      name: 'Medium (Base)',
      value: 'md',
    },
    {
      name: 'Large',
      value: 'lg',
    },
  ];

  get codeSnippets() {
    return {
      webComponent: this.webComponentHtml,
      htmlBlueprint: this.blueprintHtml,
    };
  }

  get tabsHtml() {
    return this.tabLinks
      .map((_, index) => {
        const isFirstItem = index === 0;
        return `  <li${isFirstItem ? ' class="-active"' : ''}>
    <a href="#">${isFirstItem ? 'Active tab' : 'Tab link'}</a>
  </li>`;
      })
      .join('\n');
  }

  get webComponentHtml() {
    return this.sizes
      .map(({ name, value }) => {
        return `<!-- ${name} -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-${value}"${value === 'md' ? '' : ` size="${value}`
          } sliding-border></chi-tabs>`;
      })
      .join('\n\n');
  }

  get blueprintHtml() {
    return this.sizes
      .map(({ name, value }) => {
        return `<!-- ${name} -->
<ul class="chi-tabs${value === 'md' ? '' : ` -${value}`}">
${this.tabsHtml}
</ul>`;
      })
      .join('\n\n');
  }

  mounted() {
    const elementXs = document.querySelector('#example__additional-sizes-horizontal-xs') as TabsListInterface;
    const elementSm = document.querySelector('#example__additional-sizes-horizontal-sm') as TabsListInterface;
    const elementMd = document.querySelector('#example__additional-sizes-horizontal-md') as TabsListInterface;
    const elementLg = document.querySelector('#example__additional-sizes-horizontal-lg') as TabsListInterface;

    if (elementXs) elementXs.tabs = this.tabLinks;
    if (elementSm) elementSm.tabs = this.tabLinks;
    if (elementMd) elementMd.tabs = this.tabLinks;
    if (elementLg) elementLg.tabs = this.tabLinks;
  }
}
</script>
