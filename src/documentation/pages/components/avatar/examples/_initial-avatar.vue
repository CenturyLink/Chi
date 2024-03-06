<template lang="pug">
<ComponentExample title="Initial Avatars" id="initial-avatars" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Initial avatars can also be used when an image is not available.
      | They are more versatile than icon avatars and support up to two letters.
      | Text utility classes such as <code>-text--uppercase</code>, <code>-text--lowercase</code>,
      | and <code>-text--capitalized</code> can be applied to force specific casing.
  template(#example)
    .chi-grid
      .chi-col.-w--2.-w-sm--1
        .chi-avatar AA
      .chi-col.-w--2.-w-sm--1
        .chi-avatar M
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
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
        htmlblueprint: `<div class="chi-avatar">AA</div>`,
      },
    };
  },
})
export default class InitialAvatar extends Vue {}
</script>
