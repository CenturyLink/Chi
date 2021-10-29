<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Trigger and dropdown enclosed in the same div.
    div(slot="example")
      .chi-dropdown
        button.chi-button.chi-dropdown__trigger#dropdown-1 Dropdown, click me
        .chi-dropdown__menu
          a.chi-dropdown__menu-item(href='#exampleLink') Item 1
          a.chi-dropdown__menu-item(href='#exampleLink') Item 2
          a.chi-dropdown__menu-item(href='#exampleLink') Item 3
          a.chi-dropdown__menu-item(href='#exampleLink') Item 4
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
        htmlblueprint: `<div class="chi-dropdown">
  <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<\script>chi.dropdown(document.getElementById('dropdown-1'));<\/script>`
      }
    };
  }
})
export default class BaseExample extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('dropdown-1'));
  }
}
</script>
