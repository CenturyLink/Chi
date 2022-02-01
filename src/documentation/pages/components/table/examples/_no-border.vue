<template lang="pug">
  <ComponentExample title="No Border" id="no-border" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Remove all borders by applying the modifier class <code>-no-border</code>.
    table.chi-table.-no-border(slot="example")
      thead
        tr
          th Name
          th ID
          th Last Login
      tbody
        tr
          td Name 1
          td name-1
          td Dec 18, 2020 3:26 PM
        tr
          td Name 2
          td name-2
          td Dec 18, 2020 2:38 AM
        tr
          td Name 3
          td name-3
          td Nov 5, 2020 10:15 AM
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
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<table class="chi-table -no-border">
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
      }
    };
  }
})
export default class NoBorder extends Vue {}
</script>
