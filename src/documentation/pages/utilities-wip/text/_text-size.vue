<template lang="pug">
  ComponentExample(title="Text size" :titleSize="'-h--2'" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true" :additionalStyle="'border: 0;'")
    p.-text(slot="example-description")
      | Text size supports the following sizes: <code>-text--2xs</code>, <code>-text--xs</code>, <code>-text--sm</code>, <code>-text--md</code>,
      | <code>-text--lg</code>, and <code>-text--xl</code>. The default size is <code>-text--md</code>.
    CustomTable(:tableData="table" :border="true" slot="example" :additionalClasses="'-mt--3'")
      template(v-for="body, index in table.body" :slot="`customCell-${index}-0`")
        code {{ body.data[0] }}
        dl.-text.-text--xs.-mt--2 
          dt.-text--bold Font-size:
          dd {{ body.data[1] }}
          dt.-text--bold.-mt--1 Line-height:
          dt {{ body.data[2] }}
      template(v-for="body, index in table.body" :slot="`customCell-${index}-1`")
        p(:class="body.data[0]") The quick brown fox jumps over the lazy dog.
    .example.-bt--0.-mb--3(:slot="`code-snippet-${id}`")
      pre(class="language-html")
        code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TextModel } from '../../../models/models';

@Component({
  data: () => {
    return {
      id: 'text-size',
      sizes: [
        { size: 'xl', font: '18px (1.125rem)', line: '28px (1.75rem)' },
        { size: 'lg', font: '16px (1rem)', line: '24px (1.5rem)' },
        { size: 'md', font: '14px (0.875rem)', line: '24px (1.5rem)' },
        { size: 'sm', font: '13px (0.8125rem)', line: '20px (1.25rem)' },
        { size: 'xs', font: '12px (0.75rem)', line: '16px (1rem)' },
        { size: '2xs', font: '11px (0.6875rem)', line: '16px (1rem)' }
      ],
      table: {
        head: ['Size', 'Example'],
        body: [],
        config: {
          cells: [
            {
              hasCode: false,
              additionalCellClasses: '-w--30 -w-md--20'
            },
            { hasCode: false }
          ]
        }
      },
      codeSnippets: ``
    };
  }
})
export default class TextSize extends Vue {
  created() {
    this._generateTableData();
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sizes.forEach((size: TextModel) => {
      this.$data.codeSnippets += `<p class="-text--${size.size}">The quick brown fox jumps over the lazy dog.</p>\n`;
    });
  }

  _generateTableData() {
    this.$data.sizes.forEach((size: TextModel) => {
      this.$data.table.body.push({
        data: [`-text--${size.size}`, size.font, size.line]
      });
    });
  }
}
</script>
