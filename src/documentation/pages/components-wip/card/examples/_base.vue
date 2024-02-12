<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    template(#example)
      .chi-card(style="max-width:20rem;")
        .chi-card__content
          .chi-card__caption
            | This is a card
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
        htmlblueprint: `<div class="chi-card">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is a card</div>
  </div>
</div>`,
      },
    };
  },
})
export default class Base extends Vue { }
</script>
