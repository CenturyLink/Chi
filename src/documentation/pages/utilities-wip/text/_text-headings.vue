<template lang="pug">
  ComponentExample(title="Text headings" :titleSize="'-h--2'" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true" :additionalStyle="'border: 0;'")
    p.-text(slot="example-description") Use classes <code>-text--h1</code> through <code>-text--h6</code> to match Chi's default heading sizes.
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
      heads: [
        { head: 'h1', font: '48px (3rem)', line: '64px (4rem)' },
        { head: 'h2', font: '32px (2rem)', line: '48px (3rem)' },
        { head: 'h3', font: '24px (1.5rem)', line: '32px (2rem)' },
        { head: 'h4', font: '18px (1.125rem)', line: '32px (2rem)' },
        { head: 'h5', font: '16px (1rem)', line: '24px (1.5rem)' },
        { head: 'h6', font: '14px (0.875rem)', line: '24px (1.5rem)' }
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
export default class TextHeadings extends Vue {
  created() {
    this._generateTableData();
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.heads.forEach((head: TextModel) => {
      this.$data.codeSnippets += `<p class="-text--${head.head}">The quick brown fox jumps over the lazy dog.</p>\n`;
    });
  }

  _generateTableData() {
    this.$data.heads.forEach((head: TextModel) => {
      this.$data.table.body.push({
        data: [`-text--${head.head}`, head.font, head.line]
      });
    });
  }
}
</script>
