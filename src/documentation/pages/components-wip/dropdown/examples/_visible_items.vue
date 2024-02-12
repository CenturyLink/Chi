<template lang="pug">
  <ComponentExample title="Visible Items" id="visible_items" :tabs="exampleTabs">
    template(#example-description)
      p.-text Shows only given number of items.
    template(#example)
      .chi-dropdown
        button#dropdown-left-end.chi-button.chi-dropdown__trigger Visible items
        .chi-dropdown__menu(style="overflow-y: auto; max-height: 7rem")
            a.chi-dropdown__menu-item(href='#exampleLink') Item 1
            a.chi-dropdown__menu-item(href='#exampleLink') Item 2
            a.chi-dropdown__menu-item(href='#exampleLink') Item 3
            a.chi-dropdown__menu-item(href='#exampleLink') Item 4
            a.chi-dropdown__menu-item(href='#exampleLink') Item 5
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
        webcomponent: `<chi-dropdown visible-items="3" button="Dropdown, click me">
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 1</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 2</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 3</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 4</a>
        <a class="chi-dropdown__menu-item" href="#" slot="menu">Item 5</a>
      </chi-dropdown>`,
        htmlblueprint: `<div class="chi-dropdown">
      <button id="dropdown-1" class="chi-button chi-dropdown__trigger">Dropdown component</button>
      <div class="chi-dropdown__menu" style="overflow-y: auto; max-height: 7rem">
        <a class="chi-dropdown__menu-item" href="#">Item 1</a>
        <a class="chi-dropdown__menu-item" href="#">Item 2</a>
        <a class="chi-dropdown__menu-item" href="#">Item 3</a>
        <a class="chi-dropdown__menu-item" href="#">Item 4</a>
        <a class="chi-dropdown__menu-item" href="#">Item 5</a>
      </div>
    </div>`,
      },
    };
  },
})
export default class VisibleItems extends Vue {}
</script>
