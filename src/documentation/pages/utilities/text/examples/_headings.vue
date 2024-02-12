<template lang="pug">
  <ComponentExample padding="-p--0" title="Text headings" id="text-headings" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false" additionalStyle="border: none;">
    template(#example-description)
      p.-text
        | Use classes <code>-text--h1</code> through <code>-text--h6</code> to match Chi's default heading sizes.
    template(#example)
      <TableComponent :data="headings" :columns="columns" :getContent="getContent" additionalClasses="-mb-0 -bordered" />
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { utilitiesTextColumns } from '~/fixtures/fixtures';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { generateUtilitiesTextContent } from '~/utilities/utilities';

@NuxtComponent({})
export default class Headings extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  columns = utilitiesTextColumns;
  headings = [
    { name: 'h1', value: ['48px (3rem)', '64px (4rem)'] },
    { name: 'h2', value: ['32px (2rem)', '48px (3rem)'] },
    { name: 'h3', value: ['24px (1.5rem)', '32px (2rem)'] },
    { name: 'h4', value: ['18px (1.125rem)', '32px (2rem)'] },
    { name: 'h5', value: ['16px (1rem)', '24px (1.5rem)'] },
    { name: 'h6', value: ['14px (0.875rem)', '24px (1.5rem)'] },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.headings
      .map(({ name }) => `<p class="-text--${name}">The quick brown fox jumps over the lazy dog.</p>`)
      .join('\n');
  }

  getContent(column: ITableColumn, content: ITableContent) {
    return generateUtilitiesTextContent(column, content);
  }
}
</script>
