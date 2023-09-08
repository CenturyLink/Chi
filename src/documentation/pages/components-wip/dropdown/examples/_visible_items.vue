<template lang="pug">
  <ComponentExample title="Visible Items" id="visible_items" :tabs="exampleTabs">
    p.-text(slot="example-description") Shows only given number of items. 
    .chi-dropdown(slot="example")
        button#dropdown-left-end.chi-button.chi-dropdown__trigger Visible items
        .chi-dropdown__menu(style="overflow-y: auto; max-height: 7rem")
            a.chi-dropdown__menu-item(href='#exampleLink') Item 1
            a.chi-dropdown__menu-item(href='#exampleLink') Item 2
            a.chi-dropdown__menu-item(href='#exampleLink') Item 3
            a.chi-dropdown__menu-item(href='#exampleLink') Item 4
            a.chi-dropdown__menu-item(href='#exampleLink') Item 5
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
        htmlblueprint: `<div class="chi-dropdown">
      <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
      <div class="chi-dropdown__menu" style="overflow-y: auto; max-height: 7rem">
        <a class="chi-dropdown__menu-item" href="#">Item 1</a>
        <a class="chi-dropdown__menu-item" href="#">Item 2</a>
        <a class="chi-dropdown__menu-item" href="#">Item 3</a>
        <a class="chi-dropdown__menu-item" href="#">Item 4</a>
        <a class="chi-dropdown__menu-item" href="#">Item 5</a>
      </div>
    </div>`
      }
    };
  }
})
export default class VisibleItems extends Vue {}
</script>
  