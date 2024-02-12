<template lang="pug">
  <ComponentExample title="Hover" id="base" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Dropdown on hover is only supported when trigger and dropdown elements are enclosed in the same div.
        | Use the <code>chi-dropdown__hover</code> class to achieve this.
    template(#example)
      .chi-dropdown.chi-dropdown__hover
        button.chi-button.chi-dropdown__trigger Dropdown component
        .chi-dropdown__menu
          a.chi-dropdown__menu-item(href='#exampleLink') Item 1
          a.chi-dropdown__menu-item(href='#exampleLink') Item 2
          a.chi-dropdown__menu-item(href='#exampleLink') Item 3
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")

  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({
  data: () => {
    return {
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
        htmlblueprint: `<div class="chi-dropdown chi-dropdown__hover">
  <button class="chi-button chi-dropdown__trigger">Dropdown component</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>`,
      },
    };
  },
})
export default class Hover extends Vue {}
</script>
