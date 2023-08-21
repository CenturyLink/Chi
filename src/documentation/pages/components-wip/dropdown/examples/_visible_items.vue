<template lang="pug">
  <ComponentExample title="Visible Items" id="visible_items" :tabs="exampleTabs">
    p.-text(slot="example-description") Shows only given number of items. 
    .chi-dropdown(slot="example")
        button#dropdown-left-end.chi-button.chi-dropdown__trigger(data-visible-items="3") Visible items
        .chi-dropdown__menu(style="width: 15rem;")
            a.chi-dropdown__menu-item(href='#exampleLink') Item 1
            a.chi-dropdown__menu-item(href='#exampleLink') Item 2
            a.chi-dropdown__menu-item(href='#exampleLink') Item 3
            a.chi-dropdown__menu-item(href='#exampleLink') Item 4
            a.chi-dropdown__menu-item(href='#exampleLink') Item 5
            a.chi-dropdown__menu-item(href='#exampleLink') Item 6
    
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
          htmlblueprint: `TO BE ADDED`
        }
      };
    }
  })
  export default class RangeInput extends Vue {}
  </script>
  