<template lang="pug">
  <ComponentExample title="Initial Avatars" id="initial-avatars" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Initial avatars can also be used when an image is not available.
      | They are more versatile than icon avatars and support up to two letters.
      | Text utility classes such as <code>-text--uppercase</code>, <code>-text--lowercase</code>,
      | and <code>-text--capitalized</code> can be applied to force specific casing.
    .chi-grid(slot="example")
      .chi-col.-w--2.-w-sm--1
        .chi-avatar AA
      .chi-col.-w--2.-w-sm--1
        .chi-avatar M
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
