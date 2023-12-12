<template lang="pug">
  <ComponentExample padding="-p--2" title="Table cell elements" id="vertical-align-table-cell" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use the vertical-align utility to change the vertical alignment of table cell elements.
    .-p--1(slot="example")
      table.chi-table.-bordered
        thead
          tr
            th(v-for="item in columns") Column
        tbody
          tr
            td(v-for="item in aligns" :class="`-vertical-align--${item}`") {{ item }}
            td.-w--30
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est.
              | Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie.
              | Nam id libero tristique, porta leo non, ultrices neque.
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ]
    };
  },
})
export default class TableCellElements extends Vue {
  columns = [1, 2, 3, 4, 5];
  aligns = ['baseline', 'top', 'middle', 'bottom'];

  get codeSnippets() {
    return {
      htmlblueprint: `<table class="chi-table">
  <thead>
    <tr>
` +
this.generateColumnHtml()
  + `
    </tr>
  </thead>
  <tbody>
    <tr>
` +
this.generateAlignsHtml()
  + `<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.</td>
    </tr>
  </tbody>
</table>
`
    };
  }

  generateAlignsHtml() {
    return this.aligns.map((item) => {
      return `      <td class="-vertical-align--${ item }">${ item }</td>`
    }).join('\n');
  }

  generateColumnHtml() {
    return this.columns.map(() => {
      return `      <th>Column</th>`
    }).join('\n');
  }
}
</script>
