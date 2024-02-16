<template lang="pug">
<ComponentExample title="Center Aligned" id="center_aligned_lumen_centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text Center align a card by applying the class <code>-align--center</code>.
  template(#example)
    .chi-card.-align--center(style="max-width:20rem;")
      .chi-card__content
        .chi-card__title Title
        .chi-card__caption
          | This is a center aligned card
        .chi-card__actions
          button.chi-button.-primary Action
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
        htmlblueprint: `<div class="chi-card -align--center">
  <div class="chi-card__content">
    <div class="chi-card__title">Title</div>
    <div class="chi-card__caption">This is a center aligned card</div>
    <div class="chi-card__actions">
      <button class="chi-button -primary">Action</button>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class CenterAlignedLumenCenturylink extends Vue { }
</script>
