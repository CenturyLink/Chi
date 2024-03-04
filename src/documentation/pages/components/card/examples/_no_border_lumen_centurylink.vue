<template lang="pug">
<ComponentExample title="No Border" id="no_border_lumen_centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text Render a card without a border using the class <code>-no-border</code>.
  template(#example)
    .chi-card.-no-border(style="max-width:20rem;")
      .chi-card__content
        .chi-card__caption
          | This is a card with no border
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
        htmlblueprint: `<div class="chi-card -no-border">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is a card with no border</div>
  </div>
</div>`,
      },
    };
  },
})
export default class NoBorderLumenCenturylink extends Vue {}
</script>
