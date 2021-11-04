<template lang="pug">
  <ComponentExample title="Titled with content and icon" id="titled_with_content_and_icon_lumen_centurylink" :tabs="exampleTabs">
    div(slot="example")
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
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
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
</div>`
      }
    };
  }
})
export default class TitledWithContentAndIconLumenCenturylink extends Vue {
  mounted() {}
}
</script>
