<template lang="pug">
  <ComponentExample title="Light and transparent background" additionalClasses="-bg--black" id="light-transparent" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Both icon and initial avatars support light and transparent versions for dark backgrounds.
    .chi-grid.-align-items--end(slot="example")
      .chi-col.-w--3.-text--center
        div.chi-avatar.-light AA
      .chi-col.-w--3.-text--center
        div.chi-avatar.-secondary.-transparent AA
      .chi-col.-w--3.-text--center
        div.chi-avatar.-light
          i.chi-icon.icon-user(aria-hidden="true")
      .chi-col.-w--3.-text--center
        div.chi-avatar.-secondary.-transparent
          i.chi-icon.icon-user(aria-hidden="true")
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
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
      htmlblueprint: `<div class="-bg--black">
  <div class="chi-avatar -light">AA</div>
  <div class="chi-avatar -secondary -transparent">AA</div>
  <div class="chi-avatar -light">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
  <div class="chi-avatar -secondary -transparent">
    <i class="chi-icon icon-user" aria-hidden="true"></i>
  </div>
</div>`,
      },
    };
  },
})
export default class LightTransparent extends Vue {}
</script>
