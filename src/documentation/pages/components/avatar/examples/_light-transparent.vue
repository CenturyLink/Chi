<template lang="pug">
<ComponentExample title="Light and transparent background" additionalClasses="-bg--black" id="light-transparent" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Both icon and initial avatars support light and transparent versions for dark backgrounds.
  template(#example)
    .chi-grid.-align-items--end
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
