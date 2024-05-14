<template lang="pug">
ComponentExample(title="Select mode" id="select_mode" :tabs="exampleTabs")
  template(#example-description)
    p.-text
      | The <code>select-mode</code> property enables the looks and feels of the <code>select</code> component,
      | with the advantage of having the options to be shown with styles following the brand guidelines and
      | independent from the operating systems or browsers.
    p.-text
      | With value <code>single</code>, only one option can be selected. With value <code>multi</code> any number
      | of options can be selected, and clicking a selected option will unselect it.

  template(#example)
    chi-dropdown(select-mode="single" button="- Select single -")
      a.chi-dropdown__menu-item(slot='menu') Item 1
      a.chi-dropdown__menu-item(slot='menu') Item 2
      a.chi-dropdown__menu-item(slot='menu') Item 3
      a.chi-dropdown__menu-item(slot='menu') Item 4
    chi-dropdown.-mt--2(select-mode="multi" button="- Select multi -")
      a.chi-dropdown__menu-item(slot='menu') Item 1
      a.chi-dropdown__menu-item(slot='menu') Item 2
      a.chi-dropdown__menu-item(slot='menu') Item 3
      a.chi-dropdown__menu-item(slot='menu') Item 4
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SelectMode extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
      disabled: true
    },
  ];

  codeSnippets = {
    webcomponent: `<!-- Select mode single -->
<chi-dropdown button="- Select single -" select-mode> <!-- or select-mode="single" -->
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>

<!-- Select mode multi -->
<chi-dropdown button="- Select multi -" select-mode="multi">
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,
    htmlblueprint: `
`
  }
}
</script>
