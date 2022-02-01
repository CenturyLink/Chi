<template lang="pug">
  <ComponentExample title="Portal" id="base-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Enable portal styling by applying class <code>-portal</code>. To display a row in active / selected state, 
      | apply class <code>-active</code> to the <code>tr</code>.
    table.chi-table.-portal(slot="example")
      thead
        tr.-sm
          th Name
          th ID
          th Last Login
      tbody
        tr.-lg
          td
            a(href='#') Name 1
          td name-1
          td Dec 18, 2020 3:26 PM
        tr.-lg
          td
            a(href='#') Name 2
          td name-2
          td Dec 18, 2020 2:38 AM
        tr.-active.-lg
          td
            a(href='#') Name 3
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
</table>`
      }
    };
  }
})
export default class BasePortal extends Vue {}
</script>
