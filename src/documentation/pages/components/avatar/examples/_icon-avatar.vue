<template lang="pug">
<ComponentExample title="Icon Avatars" id="icon-avatars" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Icon avatars can be used when an image is not available.
      | To use, wrap any <a :href="`${baseUrl}components/icon/`">Chi icon</a> with <code>chi-avatar</code>.
  template(#example)
    .chi-grid
      .chi-col.-w--2.-w-sm--1(v-for="icon in iconExamples")
        .chi-avatar
          i(:class="`chi-icon icon-${icon}`", aria-hidden='true')

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class IconAvatar extends Vue {
  baseUrl = useRuntimeConfig().public.baseUrl;
  exampleTabs = [
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
  ]
  iconExamples = ['user', 'users', 'atom']
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-avatar">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`
  }
}
</script>
