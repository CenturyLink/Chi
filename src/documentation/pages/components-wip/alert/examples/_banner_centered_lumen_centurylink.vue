<template lang="pug">
<ComponentExample title="Centered" titleSize="h4" id="banner_centered_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | <strong>Note:</strong> Use sparingly.
      | Centered Banner alerts should only be used to render brief messages. Centered alerts do not support titles.
  template(#example)
    chi-alert.-m--2(type='banner', icon='circle-warning', color='danger', center)
      | This is a centered danger alert
  template(#code-webcomponent)
    .chi-tab__description
      span
        | Use the attribute <code>center</code> to center the content of a Banner Alert.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      span
        | Apply the class <code>-center</code> to center the content of a Banner Alert.
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
          active: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-alert type="banner" icon="circle-warning" color="danger" center>
  This is a centered danger alert
</chi-alert>`,
        htmlblueprint: `<div class="chi-alert -banner -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`,
      },
    };
  },
})
export default class BannerCenteredLumenCenturyLink extends Vue {}
</script>
