<template lang="pug">
  <ComponentExample title="Menu item states" id="states" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(#example-description)
      p.-text
        | Menu items support the following states: <code>initial</code>, <code>active</code>, <code>disabled</code> and
        | <code>hover</code>.
    template(#example)
      .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4
        .chi-dropdown__menu.-active
          a.chi-dropdown__menu-item(href='#exampleLink') Item
          a.chi-dropdown__menu-item.-active(href='#exampleLink') Active item
          a.chi-dropdown__menu-item.-disabled(href='#exampleLink') Disabled item
          a.chi-dropdown__menu-item.-hover(href='#exampleLink') Hovered item
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
        htmlblueprint: `<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#">Disabled item</a>
  <a class="chi-dropdown__menu-item -hover" href="#">Hovered item</a>
</div>`,
      },
    };
  },
})
export default class States extends Vue {}
</script>
