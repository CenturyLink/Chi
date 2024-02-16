<template lang="pug">
<ComponentExample title="Sizes" id="sizes" padding="-p--0" :tabs="exampleTabs">
  template(#example)
    .-p--3
      each size in ['sm', 'md', 'lg']
        p.-text--bold.-mb--3= '-' + size
        .chi-price(class=`-${size}`)
          sup
            | $
          | 100
          sup
            | 00
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
        htmlblueprint: `<div class="chi-price -sm">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>
<div class="chi-price -md">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>
<div class="chi-price -lg">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>`,
      },
    };
  },
})
export default class Sizes extends Vue {}
</script>
