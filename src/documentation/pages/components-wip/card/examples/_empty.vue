<template lang="pug">
  <ComponentExample title="Empty" id="empty" :tabs="exampleTabs">
    template(#example-description)
      p.-text Render an empty state card with the class <code>-empty</code>.
    template(#example)
      .chi-card.-empty(style="max-width:20rem;")
        .chi-card__content
          .chi-card__caption
            | This is an empty card
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
        htmlblueprint: `<div class="chi-card -empty">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is an empty card</div>
  </div>
</div>`,
      },
    };
  },
})
export default class Empty extends Vue { }
</script>
