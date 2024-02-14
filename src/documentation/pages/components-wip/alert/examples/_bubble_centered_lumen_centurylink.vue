<template lang="pug">
  <ComponentExample title="Centered" titleSize="h4" id="bubble_centered_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        |  <strong>Note:</strong> Use sparingly. Centered Bubble alerts should only be used to render brief messages on centered forms
        |  such as those found on Sign In and Sign Up screens. Centered alerts do not support titles.
    template(#example)
      chi-alert.-m--2(color='danger', icon='circle-warning', center)
        | This is a centered danger alert
    template(#code-webcomponent)
      .chi-tab__description
        span
          | Use the attribute <code>center</code> to center the content of a Bubble Alert.
      Copy(lang="html" :code="codeSnippets.webcomponent")

    template(#code-htmlblueprint)
      .chi-tab__description
        span
          | Apply the class <code>-center</code> to center the content of a Bubble Alert.
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
        webcomponent: `<chi-alert color="danger" icon="circle-warning" center>
  This is a centered danger alert
</chi-alert>`,
        htmlblueprint: `<div class="chi-alert -danger -center" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a centered danger alert</p>
  </div>
</div>`,
      },
    };
  },
})
export default class BubbleCenteredLumenCenturyLink extends Vue { }
</script>
