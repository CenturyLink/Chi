<template lang="pug">
<ComponentExample title="Truncate long menu-items" titleSize="h4" id="truncate_long_menu_items" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
  template(#example-description)
    p.-text
      | Wrap the menu-item content in a div with the class <code>-flex--ellipsis</code> to truncate long strings.
  template(#example)
    .chi-dropdown__menu.-active(style="width:10rem")
      a.chi-dropdown__menu-item(href='#exampleLink') Item 1
      a.chi-dropdown__menu-item(href='#exampleLink') Item 2
      a.chi-dropdown__menu-item(id='example-truncated-menu-item' href='#exampleLink' data-tooltip='Item 3 with truncated longer text')
        .-flex--ellipsis Item 3 with truncated longer text
      a.chi-dropdown__menu-item(href='#exampleLink') Item 4
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class TruncateLongMenuItems extends Vue {
  exampleTabs = [
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
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">
    <div class="-flex--ellipsis" data-tooltip="Item 3 with truncated longer text">Item 3 with truncated longer text</div>
  </a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<!-- Tooltip for truncated text -->
<\script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
  }
  mounted() {
    chi.tooltip(document.getElementById('example-truncated-menu-item'));
  }
}
</script>
