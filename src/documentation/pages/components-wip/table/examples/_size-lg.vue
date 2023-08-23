<template lang="pug">
  <ComponentExample titleSize="h4" title="Size -lg" id="size-lg" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Render a <strong>-lg</strong> size by applying the modifier class <code>-lg</code>.
    <TableComponent :data="rows" :columns="tableHead" additionalClasses="-lg" slot="example" />
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
import { getTableHead } from "~/fixtures/fixtures";

@Component({
  data: () => {
    return {
      rows: [
        { cell1: 'Name 1', cell2: 'name-1', cell3: 'Dec 18, 2020 3:26 PM' },
        { cell1: 'Name 2', cell2: 'name-2', cell3: 'Dec 18, 2020 2:38 AM' },
        { cell1: 'Name 3', cell2: 'name-3', cell3: 'Nov 5, 2020 10:15 AM' }
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
        htmlblueprint: `<table class="chi-table -lg">
    <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Last Login</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name 1</td>
            <td>name-1</td>
            <td>Dec 18, 2020 3:26 PM</td>
        </tr>
        <tr>
            <td>Name 2</td>
            <td>name-2</td>
            <td>Dec 18, 2020 2:38 AM</td>
        </tr>
        <tr>
            <td>Name 3</td>
            <td>name-3</td>
            <td>Nov 5, 2020 10:15 AM</td>
        </tr>
    </tbody>
</table>`
      },
    };
  }
})
export default class SizeLg extends Vue {

  get tableHead() {
    return getTableHead();
  }
}
</script>
