<template lang="pug">
  <ComponentExample title="Download" id="download" :tabs="exampleTabs" additionalClasses="-text">
    template(#example-description)
      p.-text
        | Use download to prompt users to save a page or document instead of navigating to it.
        | The download attribute accepts an optional value used to name the file.
        | If no value is provided, the original filename is used.
    template(#example)
      chi-link(href="#" download) Link
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
        webcomponent: `<!-- Use default filename -->
<chi-link href="#" download>Link</chi-link>

<!-- Specify custom filename -->
<chi-link href="#" download="custom-filename">Link</chi-link>`,
        htmlblueprint: `<!-- Use default filename -->
<a class="chi-link" href="#" download>Link</a>

<!-- Specify custom filename -->
<a class="chi-link" href="#" download="custom-filename">Link</a>`,
      },
    };
  },
})
export default class Download extends Vue { }
</script>
