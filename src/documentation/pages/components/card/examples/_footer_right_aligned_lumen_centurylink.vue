<template lang="pug">
<ComponentExample title="Footer Right Aligned" id="footer_right_aligned_lumen_centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text Apply the class <code>-align--right</code> on <code>chi-card__footer</code> to right align its contents.
  template(#example)
    .chi-card(style="max-width:20rem;")
      .chi-card__content
        .chi-card__caption
          | Aenean pretium massa sed vehicula porta. Phasellus id metus felis.
          | Ut felis magna, facilisis ut malesuada nec.
      .chi-card__footer.-align--right
        button.chi-button Action 2
        button.chi-button.-primary Action 1
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
    <div class="chi-card__caption">Aenean pretium massa sed vehicula porta. Phasellus id metus felis. Ut felis magna, facilisis ut malesuada nec.</div>
  </div>
  <div class="chi-card__footer -align--right">
    <button class="chi-button">Action 2</button>
    <button class="chi-button -primary">Action 1</button>
  </div>
</div>`,
      },
    };
  },
})
export default class FooterRightAlignedLumenCenturylink extends Vue { }
</script>
