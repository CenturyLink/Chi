<template lang="pug">
  <ComponentExample title="Icon Link" id="icon-link" :tabs="exampleTabs" additionalClasses="-text">
    template(#example-description)
      p.-text
        | Use icon links to render icons inside link tags. <strong>Note:</strong> All icon links without text labels
        | must define a label in the <code>alternative-text</code> attribute for accessibility.
    template(#example)
      chi-link(href="#" alternative-text="View helpful information about this topic")
        chi-icon(icon="circle-question-outline")
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
        webcomponent: `<chi-link href="#" alternative-text="View helpful information about this topic">
  <chi-icon icon="circle-question-outline"></chi-icon>
</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" aria-label="View helpful information about this topic">
  <div class="chi-link__content">
    <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
  </div>
</a>`,
      },
    };
  },
})
export default class IconLink extends Vue { }
</script>
