<template lang="pug">
<ComponentExample title="Hero" id="hero_lumen_centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text Add a full width image or banner to the top of a card by applying the class <code>chi-card__hero</code>.
  template(#example)
    .chi-card(style="max-width:20rem;")
      .chi-card__hero.-text--inverse(style="width:100%;background:rgba(0,0,0,0.8);")
        p.-text.-p--6.-text--center Hero Image
      .chi-card__content
        .chi-card__caption
          | This is a hero card
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
  <img class="chi-card__hero" src="..." alt="Card Image">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is a hero card</div>
  </div>
</div>`,
      },
    };
  },
})
export default class HeroLumenCenturylinkLumenCenturylink extends Vue { }
</script>
