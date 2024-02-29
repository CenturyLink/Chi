<template lang="pug">
<ComponentExample title="Base" titleSize="h4" padding="-p--0" id="base" :tabs="exampleTabs">
  template(#example)
    div(style="position:relative;height:25rem;")
      chi-spinner(color='light', backdrop)
  template(#code-webcomponent)
    .chi-tab__description
      | To render a spinner, use the tag <code>&lt;chi-spinner&gt;</code>.
      br
      | An optional backdrop can be added to focus the user's attention on a spinner. To set a backdrop, use the <code>backdrop</code> attribute.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | To render a spinner, use the class <code>chi-spinner</code>.
      br
      | Wrap spinners in <code>chi-backdrop</code> to overlay content similar to a modal, and add <code>-center</code> class to position it in the middle of the page.
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
        webcomponent: `<chi-spinner color="light" backdrop></chi-spinner>`,
        htmlblueprint: `<div class="chi-backdrop -center">
  <div class="chi-backdrop__wrapper">
    <svg class="chi-spinner -icon--light" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
