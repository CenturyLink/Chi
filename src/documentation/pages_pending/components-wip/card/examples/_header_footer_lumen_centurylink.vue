<template lang="pug">
  <ComponentExample title="Header + Footer" id="header_footer_lumen_centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text Further customize cards by adding both headers <code>chi-card__header</code> and footers <code>chi-card__footer</code>.
    template(#example)
      .chi-card(style="max-width:20rem;")
        .chi-card__header
          .chi-card__title Title
        .chi-card__content
          .chi-card__caption
            | Aenean pretium massa sed vehicula porta. Phasellus id metus felis.
            | Ut felis magna, facilisis ut malesuada nec.
        .chi-card__footer
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
        htmlblueprint: `<div class="chi-card">
  <div class="chi-card__header">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content">
    <div class="chi-card__caption">Aenean pretium massa sed vehicula porta. Phasellus id metus felis. Ut felis magna, facilisis ut malesuada nec.</div>
  </div>
  <div class="chi-card__footer">
    <button class="chi-button -primary">Action</button>
  </div>
</div>`,
      },
    };
  },
})
export default class HeaderFooterLumenCenturylink extends Vue { }
</script>
