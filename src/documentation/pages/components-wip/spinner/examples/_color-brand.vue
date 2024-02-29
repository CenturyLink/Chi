<template lang="pug">
<ComponentExample title="Brand" padding="-p--0" titleSize="h4" id="color-brand" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Brand spinner colors reinforce Lumen's brand. Use primary or dark for light themes and secondary or light for dark themes.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
        .-p--2.-text--center(v-for="color in ['primary', 'dark']")
          chi-spinner(:color="color", class='-m--1', size='md')
      .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
        .-p--2.-text--center(v-for="color in ['secondary', 'light']")
          chi-spinner(:color="color", class='-m--1', size='md')
  template(#code-webcomponent)
    .chi-tab__description
      | Use the <code>color</code> attribute to change a spinners color.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | Use <a href="/utilities/color">icon color utilities</a> such as <code>-icon--primary</code>
      | and <code>-icon--secondary</code> to change the color of any spinner.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
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
        webcomponent: `<!-- For light backgrounds -->
<chi-spinner color="primary"></chi-spinner>
<chi-spinner color="dark"></chi-spinner>
<!-- For dark backgrounds -->
<chi-spinner color="secondary"></chi-spinner>
<chi-spinner color="light"></chi-spinner>`,
        htmlblueprint: `<!-- For light backgrounds -->
<svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--dark" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- For dark backgrounds -->
<svg class="chi-spinner -icon--secondary" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<svg class="chi-spinner -icon--light" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`,
      },
    };
  },
})
export default class ColorBrand extends Vue {}
</script>
