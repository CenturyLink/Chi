<template lang="pug">
<ComponentExample title="Horizontal" id="additional-sizes-horizontal" :tabs="exampleTabs" additionalClasses="-pb--4" titleSize="h4">
  template(#example)
    p.-text--bold X-small
    .chi-divider.-mb--2
    chi-tabs(id="example__additional-sizes-horizontal-xs" active-tab="example__additional-sizes-horizontal-1" size="xs" sliding-border)
    p.-text--bold.-mt--6 Small
    .chi-divider.-mb--2
    chi-tabs(id="example__additional-sizes-horizontal-sm" active-tab="example__additional-sizes-horizontal-1" size="sm" sliding-border)
    p.-text--bold.-mt--6 Medium (Base)
    .chi-divider.-mb--2
    chi-tabs(id="example__additional-sizes-horizontal-md" active-tab="example__additional-sizes-horizontal-1" sliding-border)
    p.-text--bold.-mt--6 Large
    .chi-divider.-mb--2
    chi-tabs(id="example__additional-sizes-horizontal-lg" active-tab="example__additional-sizes-horizontal-1" size="lg" sliding-border)
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webComponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlBlueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type TabsListInterface } from '~/models/models';

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
  ];

  tabs = [
    {
      label: 'Active Tab',
      id: 'example__additional-sizes-horizontal-1',
    },
    {
      label: 'Tab Link',
      id: 'example__additional-sizes-horizontal-2',
    },
    {
      label: 'Tab Link',
      id: 'example__additional-sizes-horizontal-3',
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
    return this.tabs
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
<chi-tabs id="example__additional-sizes-horizontal-${value}" active-tab="example__additional-sizes-horizontal-${value}-1"${
          value === 'md' ? '' : ` size="${value}"`
        } sliding-border></chi-tabs>`;
      })
      .join('\n\n')
      .concat(`\n\n<script>
  document.querySelector('#example__additional-sizes-horizontal-xs').tabs = [
    {
      id: 'example__additional-sizes-horizontal-xs-1',
      label: 'Active Tab'
    },
    {
      id: 'example__additional-sizes-horizontal-xs-2',
      label: 'Tab Link'
    },
    {
      id: 'example__additional-sizes-horizontal-xs-3',
      label: 'Tab Link'
    }
  ];
<\/script>
`);
  }

  get blueprintHtml() {
    return this.sizes
      .map(({ name, value }) => {
        return `<!-- ${name} -->
<ul class="chi-tabs${value === 'md' ? '' : ` -${value}`}" id="example__additional-sizes-horizontal-${value}">
${this.tabsHtml}
</ul>`;
      })
      .join('\n\n')
      .concat(`\n\n<script>
  chi.tab(document.querySelector('#example__additional-sizes-horizontal-xs'));
<\/script>
`);
  }

  mounted() {
    const elementXs = document.querySelector('#example__additional-sizes-horizontal-xs') as TabsListInterface;
    const elementSm = document.querySelector('#example__additional-sizes-horizontal-sm') as TabsListInterface;
    const elementMd = document.querySelector('#example__additional-sizes-horizontal-md') as TabsListInterface;
    const elementLg = document.querySelector('#example__additional-sizes-horizontal-lg') as TabsListInterface;

    if (elementXs) elementXs.tabs = this.tabs;
    if (elementSm) elementSm.tabs = this.tabs;
    if (elementMd) elementMd.tabs = this.tabs;
    if (elementLg) elementLg.tabs = this.tabs;
  }
}
</script>
