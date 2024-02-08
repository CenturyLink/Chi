<template lang="pug">
  <ComponentExample padding="-p--0" title="Text size" id="text-size" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false" additionalStyle="border: none;">
    p.-text(slot="example-description")
      | Text size supports the following sizes: <code>-text--2xs</code>, <code>-text--xs</code>, <code>-text--sm</code>, <code>-text--md</code>,
      | <code>-text--lg</code>, and <code>-text--xl</code>. The default size is <code>-text--md</code>.
    //- <TableComponent slot="example" :data="sizes" :columns="columns" :getContent="getContent" additionalClasses="-mb-0 -bordered" />
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { utilitiesTextColumns } from "~/fixtures/fixtures";
import {ITableColumn, ITableContent} from "~/models/models";
import { generateUtilitiesTextContent } from '~/utilities/utilities';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        }
      ],
      columns: utilitiesTextColumns
    };
  }
})
export default class Size extends Vue {
  sizes = [
    { name: 'xl', value: ['18px (1.125rem)', '28px (1.75rem)'] },
    { name: 'lg', value: ['16px (1rem)', '24px (1.5rem)'] },
    { name: 'md', value: ['14px (0.875rem)', '24px (1.5rem)'] },
    { name: 'sm', value: ['13px (0.8125rem)', '20px (1.25rem)'] },
    { name: 'xs', value: ['12px (0.75rem)', '16px (1rem)'] },
    { name: '2xs', value: ['11px (0.6875rem)', '16px (1rem)'] }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.sizes
      .map(({ name }) => `<p class="-text--${ name }">The quick brown fox jumps over the lazy dog.</p>`)
      .join('\n');
  }

  getContent(column: ITableColumn, content: ITableContent) {
    return generateUtilitiesTextContent(column, content);
  }
}
</script>
