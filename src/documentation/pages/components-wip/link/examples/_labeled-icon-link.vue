<template lang="pug">
<ComponentExample title="Labeled Icon Link" id="labeled-icon-link" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Use labeled icon links to render both text and icons inside link tags.
  template(#example)
    chi-link(href="#")
      chi-icon(icon="circle-question-outline")
      span Help
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
        webcomponent: `<chi-link href="#">
  <chi-icon icon="circle-question-outline"></chi-icon>
  <span>Help</span>
</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#">
  <div class="chi-link__content">
    <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
    <span>Help</span>
  </div>
</a>`,
      },
    };
  },
})
export default class LabeledIconLink extends Vue {}
</script>
