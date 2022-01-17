<template lang="pug">
  <ComponentExample title="Animate on Hover" id="animate_on_hover_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Animate a card on hover by applying the class <code>-hover--animate</code>.
    .chi-grid(slot="example")
      .chi-col.-w--6.-w-md--4.-w-lg--3.-mb--3.-mb-lg--0
        .chi-card.-align--center.-hover--animate
          .chi-card__content
            .chi-card__title Title
            i.chi-icon.chi-card__icon.-sm--3(class="icon-atom" aria-hidden="true")
            .chi-card__caption
              span.-text--sm Meta Label
              span.-text--xs.-text--grey Sublabel
      .chi-col.-w--6.-w-md--4.-w-lg--3.-mb--3.-mb-lg--0
        .chi-card.-align--center.-hover--animate
          .chi-card__content
            .chi-card__title Title
            i.chi-icon.chi-card__icon.-sm--3(class="icon-atom" aria-hidden="true")
            .chi-card__caption
              span.-text--sm Meta Label
              span.-text--xs.-text--grey Sublabel
      .chi-col.-w--6.-w-md--4.-w-lg--3.-mb--3.-mb-lg--0
        .chi-card.-align--center.-hover--animate
          .chi-card__content
            .chi-card__title Title
            i.chi-icon.chi-card__icon.-sm--3(class="icon-atom" aria-hidden="true")
            .chi-card__caption
              span.-text--sm Meta Label
              span.-text--xs.-text--grey Sublabel
      .chi-col.-w--6.-w-md--4.-w-lg--3.-mb--3.-mb-lg--0
        .chi-card.-active.-align--center.-hover--animate
          .chi-card__content
            .chi-card__title Title
            i.chi-icon.chi-card__icon.-sm--3.chi-card__icon(class="icon-atom" aria-hidden="true")
            .chi-card__caption
              span.-text--sm Meta Label
              span.-text--xs.-text--grey Sublabel
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- Base -->
<div class="chi-card -align--center -hover--animate">
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
<div class="chi-card -active -align--center -hover--animate">
  <div class="chi-card__content">
    <div class="chi-card__title">Title</div>
    <i class="chi-card__icon chi-icon icon-atom -sm--3" aria-hidden="true"></i>
    <div class="chi-card__caption">
      <span class="-text--sm">Meta Label</span>
      <span class="-text--xs -text--grey">Sublabel</span>
    </div>
  </div>
</div>`
      }
    };
  }
})
export default class AnimateOnHoverLumenCenturylink extends Vue {}
</script>
