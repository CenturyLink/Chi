<template lang="pug">
<ComponentExample title="Rel" id="rel" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Use rel to set the relationship between the current page and the linked page. Rel supports all HTML a attribute values.
      | Examples include: <code>alternate</code>, <code>external</code>, <code>next</code>, <code>nofollow</code>, <code>noreferrer</code>, <code>noopener</code>, <code>prev</code>, and more.
  template(#example)
    chi-link(href="#" rel="noopener") Link
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
        webcomponent: `<chi-link href="#" rel="noopener">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" rel="noopener">Link</a>`,
      },
    };
  },
})
export default class Rel extends Vue { }
</script>
