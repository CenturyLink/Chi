<template lang="pug">
<ComponentExample titleSize="h3" title="Labeled icon buttons" id="labeled-icon-lumen-centurylink" :tabs="exampleTabs">
  template(#example)
    chi-button
      chi-icon(icon='atom')
      span Button
    chi-button.-mr--2.-ml--2()
      span Button
      chi-icon(icon='atom')
    chi-button
      chi-icon(icon='atom')
      span Button
      chi-icon(icon='atom')

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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- left aligned -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
</chi-button>

<!-- right aligned -->
<chi-button>
  <span>Button</span>
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- both sides -->
<chi-button>
  <chi-icon icon="atom"></chi-icon>
  <span>Button</span>
  <chi-icon icon="atom"></chi-icon>
</chi-button>`,
        htmlblueprint: `<!-- left aligned -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
  </div>
</button>

<!-- right aligned -->
<button class="chi-button">
  <div class="chi-button__content">
    <span>Button</span>
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- both sides -->
<button class="chi-button">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Button</span>
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>`,
      },
    };
  },
})
export default class LabeledIconLumenCenturyLink extends Vue {}
</script>
