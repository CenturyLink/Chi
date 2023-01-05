<template lang="pug">
  <ComponentExample title="Scrollable" id="scrollable-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | If the <code>section</code> height is smaller than the <code>table</code>
      | height, the <code>table</code> header will be fixed positioned and
      | content will scroll. Tables must be wrapped in a
      | <code>&lt;section class="chi-table -fixed--header"&gt;</code>
    section.chi-table.-portal.-fixed--header(style='height: 150px' slot="example")
      div
        table
          thead
            tr
              th
                div Name
              th
                div ID
              th
                div Last Login
          tbody
            tr(v-for="(row, index) in rows" :key="index")
              td {{ row.cell1 }}
              td {{ row.cell2 }}
              td {{ row.cell3 }}
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
        htmlblueprint: `<section class="chi-table -portal -fixed--header" style="height: 150px">
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        <div>Name</div>
                    </th>
                    <th>
                        <div>ID</div>
                    </th>
                    <th>
                        <div>Last Login</div>
                    </th>
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
        </table>
    </div>
</section>`
      }
    };
  }
})
export default class ScrollablePortal extends Vue {}
</script>
