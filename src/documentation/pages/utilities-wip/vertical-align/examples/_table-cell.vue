<template lang="pug">
  <ComponentExample padding="-p--2" title="Table cell elements" id="vertical-align-text-top" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use the vertical-align utility to change the vertical alignment of table cell elements.
    .-p--1(slot="example")
      table.chi-table.-bordered
        thead
          tr
            th Column
            th Column
            th Column
            th Column
            th Column
        tbody
          tr
            td.-vertical-align--baseline baseline
            td.-vertical-align--top top
            td.-vertical-align--middle middle
            td.-vertical-align--bottom bottom
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
      ],
    };
  },
})
export default class TableCellElements extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<table class="chi-table">\n' +
        '  <thead>\n' +
        '    <tr>\n' +
        '      <th>Column</th>\n' +
        '      <th>Column</th>\n' +
        '      <th>Column</th>\n' +
        '      <th>Column</th>\n' +
        '    </tr>\n' +
        '  </thead>\n' +
        '  <tbody>\n' +
        '    <tr>\n' +
        '      <td class="-vertical-align--baseline">baseline</td>\n' +
        '      <td class="-vertical-align--top">top</td>\n' +
        '      <td class="-vertical-align--middle">middle</td>\n' +
        '      <td class="-vertical-align--bottom">bottom</td>\n' +
        '      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae faucibus est. Vestibulum lacinia diam ut dignissim fermentum. Phasellus mollis ut lacus vitae molestie. Nam id libero tristique, porta leo non, ultrices neque.</td>\n' +
        '    </tr>\n' +
        '  </tbody>\n' +
        '</table>',
    };
  }
}
</script>
