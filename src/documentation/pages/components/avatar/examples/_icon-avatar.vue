<template lang="pug">
  <ComponentExample title="Icon Avatars" id="icon-avatars" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Icon avatars can be used when an image is not available.
      | To use, wrap any <a href="/components/icon/">Chi icon</a> with <code>chi-avatar</code>.
    .chi-grid(slot="example")
      .chi-col.-w--2.-w-sm--1(v-for="icon in iconExamples")
        .chi-avatar
          i(:class="`chi-icon icon-${icon}`", aria-hidden='true')
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
      iconExamples: ['user', 'users', 'atom'],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-avatar">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`,
      },
    };
  },
})
export default class IconAvatar extends Vue {}
</script>
