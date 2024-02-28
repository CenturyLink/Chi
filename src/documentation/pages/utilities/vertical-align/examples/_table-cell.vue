<template lang="pug">
<ComponentExample padding="-p--2" title="Table cell elements" id="vertical-align-table-cell" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Use the vertical-align utility to change the vertical alignment of table cell elements.
  template(#example)
    .-p--1
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
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class TableCellElements extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  columns = [1, 2, 3, 4, 5];
  aligns = ['baseline', 'top', 'middle', 'bottom'];

  get codeSnippets() {
    return {
      htmlblueprint:
        `<table class="chi-table">
  <thead>
    <tr>
` +
        this.generateColumnHtml() +
        `
    </tr>
  </thead>
  <tbody>
    <tr>
` +
        this.generateAlignsHtml() +
        `<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.</td>
    </tr>
  </tbody>
</table>
`,
    };
  }

  generateAlignsHtml() {
    return this.aligns
      .map((item) => {
        return `      <td class="-vertical-align--${item}">${item}</td>`;
      })
      .join('\n');
  }

  generateColumnHtml() {
    return this.columns
      .map(() => {
        return `      <th>Column</th>`;
      })
      .join('\n');
  }
}
</script>
