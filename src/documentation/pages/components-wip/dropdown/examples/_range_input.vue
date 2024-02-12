<template lang="pug">
  <ComponentExample title="Range Input" id="range_input" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(#example)
      .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4
        .chi-dropdown__menu.-active
          .chi-dropdown__menu-item
            span.-text.-mr--2 200GB
            input.chi-input(type="range", aria-label="Range description")
            span.-text.-ml--2 5TB
          .chi-divider
          legend.chi-dropdown__menu-item Select range
          .chi-dropdown__menu-item
            input.chi-input(type="range", aria-label="Range description")
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
  <div class="chi-dropdown__menu-item">
    <span class="-text -mr--2">200GB</span>
    <input class="chi-input" type="range" aria-label="Range description">
    <span class="-text -ml--2">5TB</span>
  </div>
  <div class="chi-divider"></div>
  <legend class="chi-dropdown__menu-item">Select range</legend>
  <div class="chi-dropdown__menu-item">
    <input class="chi-input" type="range" aria-label="Range description">
  </div>
</div>`,
      },
    };
  },
})
export default class RangeInput extends Vue {}
</script>
