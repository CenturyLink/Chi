<template lang="pug">
  <ComponentExample title="Content Alignment" id="content-alignment" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Chi also supports additional content alignment with inline text align utilities applying the modifier class
      | <code>-text--left</code>, <code>-text--center</code> or <code>-text--right</code>.
    <TableComponent :data="rows" :columns="tableHead" :getContent="getContent" additionalClasses="" slot="example" />
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn } from "~/models/models";
import { getTableHead } from "~/fixtures/fixtures";

@Component({
  data: () => {
    return {
      rows: [
        {
          cell1: { name: 'Name 1', className: '-text--left' },
          cell2: { name: 'name-1', className: '-text--center' },
          cell3: { name: 'Dec 18, 2020 3:26 PM', className: '-text--right' }
        },
        {
          cell1: { name: 'Name 2', className: '-text--left' },
          cell2: { name: 'name-2', className: '-text--center' },
          cell3: { name: 'Dec 18, 2020 2:38 AM', className: '-text--right' }
        },
        {
          cell1: { name: 'Name 3', className: '-text--left' },
          cell2: { name: 'name-3', className: '-text--center' },
          cell3: { name: 'Nov 5, 2020 10:15 AM', className: '-text--right' }
        },
      ],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<table class="chi-table">
    <thead>
        <tr>
            <th class="-text--left">Name</th>
            <th class="-text--center">ID</th>
            <th class="-text--right">Last Login</th>
        </tr>
    </thead>
    <tbody>
        <tr class="-md">
            <td class="-text--left">Name 1</td>
            <td class="-text--center">name-1</td>
            <td class="-text--right">2020 3:26 PM</td>
        </tr>
        <tr class="-md">
            <td class="-text--left">Name 2</td>
            <td class="-text--center">name-2</td>
            <td class="-text--right">2020 3:26 PM</td>
        </tr>
        <tr class="-md">
            <td class="-text--left">Name 3</td>
            <td class="-text--center">name-3</td>
            <td class="-text--right">2020 3:26 PM</td>
        </tr>
    </tbody>
</table>`
      },
    };
  }
})
export default class ContentAlignment extends Vue {
  getContent(column: ITableColumn, content: any) {
    return content[column.key].name;
  }

  get tableHead() {
    return getTableHead({
      col1: { className: '-text--left' },
      col2: { className: '-text--center' },
      col3: { className: '-text--right' },
    });
  }
}
</script>
