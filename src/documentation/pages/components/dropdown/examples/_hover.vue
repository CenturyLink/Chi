<template lang="pug">
  <ComponentExample title="Hover" id="base" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text 
        | Dropdown on hover is only supported when trigger and dropdown elements are enclosed in the same div.
        | Use the <code>chi-dropdown__hover</code> class to achieve this.
    .chi-dropdown.chi-dropdown__hover(slot="example")
      button.chi-button.chi-dropdown__trigger Dropdown component
      .chi-dropdown__menu
        a.chi-dropdown__menu-item(href='#exampleLink') Item 1
        a.chi-dropdown__menu-item(href='#exampleLink') Item 2
        a.chi-dropdown__menu-item(href='#exampleLink') Item 3
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded slot="tab-description" />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-dropdown chi-dropdown__hover">
  <button class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>`
      }
    };
  }
})
export default class Hover extends Vue {
  mounted() {}
}
</script>
