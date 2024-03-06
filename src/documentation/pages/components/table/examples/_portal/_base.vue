<template lang="pug">
<ComponentExample title="Portal" id="base-portal" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Enable portal styling by applying class <code>-portal</code>. To display a row in active / selected state,
      | apply class <code>-active</code> to the <code>tr</code>.
  template(#example)
    table.chi-table.-portal
      thead
        tr.-sm
          th Name
          th ID
          th Last Login
      tbody
        tr.-lg(v-for="(row, index) in rows" :key="index" :class="{'-active' : index === 2}")
          td
            a(href='#') {{ row.cell1 }}
          td {{ row.cell2 }}
          td {{ row.cell3 }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      rows: [
        { cell1: 'Name 1', cell2: 'name-1', cell3: 'Dec 18, 2020 3:26 PM' },
        { cell1: 'Name 2', cell2: 'name-2', cell3: 'Dec 18, 2020 2:38 AM' },
        { cell1: 'Name 3', cell2: 'name-3', cell3: 'Nov 5, 2020 10:15 AM' },
      ],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<table class="chi-table -portal">
    <thead>
        <tr class="-sm">
            <th>Name</th>
            <th>ID</th>
            <th>Last Login</th>
        </tr>
    </thead>
    <tbody>
        <tr class="-lg">
            <td><a href="#">Name 1</a></td>
            <td>name-1</td>
            <td>Dec 18, 2020 3:26 PM</td>
        </tr>
        <tr class="-lg">
            <td><a href="#">Name 2</a></td>
            <td>name-2</td>
            <td>Dec 18, 2020 2:38 AM</td>
        </tr>
        <tr class="-active -lg">
            <td><a href="#">Name 3</a></td>
            <td>name-3</td>
            <td>Nov 5, 2020 10:15 AM</td>
        </tr>
    </tbody>
</table>`,
      },
    };
  },
})
export default class BasePortal extends Vue {}
</script>
