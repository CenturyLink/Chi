<template lang="pug">
  <ComponentExample title="Description" id="description" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(#example)
      .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4
        .chi-dropdown__menu.-active.-list
          a.chi-dropdown__menu-item(href='#exampleLink')
            span.chi-dropdown__menu-item_title Item
            span.chi-dropdown__menu-item_text Item description
          a.chi-dropdown__menu-item.-active(href='#exampleLink')
            span.chi-dropdown__menu-item_title Active item
            span.chi-dropdown__menu-item_text Item description
          a.chi-dropdown__menu-item.-disabled(href='#exampleLink')
            span.chi-dropdown__menu-item_title Disabled item
            span.chi-dropdown__menu-item_text Item description
          a.chi-dropdown__menu-item.-hover(href='#exampleLink')
            span.chi-dropdown__menu-item_title Hovered item
            span.chi-dropdown__menu-item_text Item description
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
        webcomponent: ``,
        htmlblueprint: `<div class="chi-dropdown__menu -list">
  <a class="chi-dropdown__menu-item" href="#">
    <span class="chi-dropdown__menu-item_title">Item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    <span class="chi-dropdown__menu-item_title">Active item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    <span class="chi-dropdown__menu-item_title">Disabled item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -hover" href="#">
    <span class="chi-dropdown__menu-item_title">Hovered item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
</div>`,
      },
    };
  },
})
export default class Description extends Vue {}
</script>
