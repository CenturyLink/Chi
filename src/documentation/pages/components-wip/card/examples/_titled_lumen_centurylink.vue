<template lang="pug">
  <ComponentExample title="Titled" id="titled_lumen_centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text Add a title to a card by applying the class <code>chi-card__title</code>.
    template(#example)
      .chi-card(style="max-width:20rem;")
        .chi-card__content
          .chi-card__title Title
          .chi-card__caption This is a titled card
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
    <div class="chi-card__title">Title</div>
    <div class="chi-card__caption">This is a titled card</div>
  </div>
</div>`,
      },
    };
  },
})
export default class TitledLumenCenturylink extends Vue { }
</script>
