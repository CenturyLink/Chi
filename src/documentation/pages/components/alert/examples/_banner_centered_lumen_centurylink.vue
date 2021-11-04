<template lang="pug">
<ComponentExample title="Centered" titleSize="h4" id="banner_centered_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
  div(slot='example-description')
    p.-text
      | <strong>Note:</strong> Use sparingly.
      | Centered Banner alerts should only be used to render brief messages. Centered alerts do not support titles.
  div(slot='example')
    chi-alert.-m--2(type='banner', icon='circle-warning', color='danger', center)
      | This is a centered danger alert
  div(slot='code-webcomponent')
    .chi-tab__description
      span
        | Use the attribute <code>center</code> to center the content of a Banner Alert.
    pre.language-html
      code(v-highlight="$data.codeSnippets.webcomponent" class="html")
  div(slot='code-htmlblueprint')
    .chi-tab__description
      span
        | Apply the class <code>-center</code> to center the content of a Banner Alert.
    pre.language-html
      code(v-highlight="$data.codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
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
</div>`
      }
    };
  }
})
export default class BannerCenteredLumenCenturyLink extends Vue {
  mounted() {}
}
</script>
