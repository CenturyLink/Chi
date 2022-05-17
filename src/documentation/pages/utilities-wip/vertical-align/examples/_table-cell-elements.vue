<template lang="pug">
  ComponentExample(title="Table cell elements" :padding="'-p--3'" :titleSize="'h3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use the vertical-align utility to change the vertical alignment of table cell elements.
    CustomTable(slot="example" :tableData="table" :border="true" :additionalClasses="'-mb--3'")
      template(v-for="data, index in table.body[0].data" :slot="`customCell-0-${index}`") {{ data }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'table-cell-elements',
      table: {
        head: ['Column', 'Column', 'Column', 'Column', 'Column'],
        body: [
          {
            data: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.'
            ]
          }
        ],
        config: {
          cells: [
            {
              hasCode: false,
              additionalCellClasses: '-vertical-align--baseline'
            },
            { hasCode: false, additionalCellClasses: '-vertical-align--top' },
            {
              hasCode: false,
              additionalCellClasses: '-vertical-align--middle'
            },
            {
              hasCode: false,
              additionalCellClasses: '-vertical-align--bottom'
            },
            { hasCode: false, additionalCellClasses: '-w--30' }
          ]
        }
      },
      codeSnippets: ``
    };
  }
})
export default class TableCellElements extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let header = '';
    let bodyContent = '';

    this.$data.table.head.forEach((head: string) => {
      header += `      <th>${head}</th>\n`;
    });

    this.$data.table.body[0].data.forEach((align: string) => {
      bodyContent += `      <td${
        !align.includes('Lorem') ? ` class="-vertical-align--${align}"` : ''
      }>${align}</td>\n`;
    });

    this.$data.codeSnippets = `<table class="chi-table">
  <thead>
    <tr>\n${header}    </tr>
  </thead>
  <tbody>
    <tr>\n${bodyContent}    </tr>
  </tbody>
</table>`;
  }
}
</script>
