<template lang="pug">
<ComponentExample title="Titled with content and icon" id="titled_with_content_and_icon_lumen_centurylink" :tabs="exampleTabs">
  template(#example)
    .chi-grid
      .chi-col.-w--6.-w-md--4.-w-lg--3
        .chi-card.-align--center
          .chi-card__content
            .chi-card__title Title
            i.chi-icon.chi-card__icon.-sm--3(class="icon-atom" aria-hidden="true")
            .chi-card__caption
              span.-text--sm Meta Label
              span.-text--xs.-text--grey Sublabel
      .chi-col.-w--6.-w-md--4.-w-lg--3
        .chi-card.-active.-align--center
          .chi-card__content
            .chi-card__title Title
            i.chi-icon.chi-card__icon.-sm--3.chi-card__icon(class="icon-atom" aria-hidden="true")
            .chi-card__caption
              span.-text--sm Meta Label
              span.-text--xs.-text--grey Sublabel
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
        htmlblueprint: `<!-- Base -->
<div class="chi-card -align--center">
  <div class="chi-card__content">
    <div class="chi-card__title">Title</div>
    <i class="chi-card__icon chi-icon icon-atom -sm--3" aria-hidden="true"></i>
    <div class="chi-card__caption">
      <span class="-text--sm">Meta Label</span>
      <span class="-text--xs -text--grey">Sublabel</span>
    </div>
  </div>
</div>
<!-- Active -->
<div class="chi-card -active -align--center">
  <div class="chi-card__content">
    <div class="chi-card__title">Title</div>
    <i class="chi-card__icon chi-icon icon-atom -sm--3" aria-hidden="true"></i>
    <div class="chi-card__caption">
      <span class="-text--sm">Meta Label</span>
      <span class="-text--xs -text--grey">Sublabel</span>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class TitledWithContentAndIconLumenCenturylink extends Vue {}
</script>
