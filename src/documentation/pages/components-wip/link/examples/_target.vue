<template lang="pug">
<ComponentExample title="Target" id="target" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Use target to specify where to open a link. Supported values are: <code>_self</code>, <code>_blank</code>, <code>_parent</code>, <code>_top</code>,
      | or a custom named frame <em><code>framename</code></em>. The default value is <code>_self</code>.
  template(#example)
    chi-link(href="#" target="_self") Link
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
        webcomponent: `<!-- Open a link in the same frame as it was clicked (default) -->
<chi-link href="#" target="_self">Link</chi-link>

<!-- Open a link in a new window or tab -->
<chi-link href="#" target="_blank">Link</chi-link>

<!-- Open a link in the parent frame -->
<chi-link href="#" target="_parent">Link</chi-link>

<!-- Open a link in the full body of the window -->
<chi-link href="#" target="_top">Link</chi-link>

<!-- Open a link in a custom named frame -->
<chi-link href="#" target="framename">Link</chi-link>`,
        htmlblueprint: `<!-- Open a link in the same frame as it was clicked (default) -->
<a class="chi-link" href="#" target="_self">Link</a>

<!-- Open a link in a new window or tab -->
<a class="chi-link" href="#" target="_blank">Link</a>

<!-- Open a link in the parent frame -->
<a class="chi-link" href="#" target="_parent">Link</a>

<!-- Open a link in the full body of the window -->
<a class="chi-link" href="#" target="_top">Link</a>

<!-- Open a link in a custom named frame -->
<a class="chi-link" href="#" target="framename">Link</a>
`,
      },
    };
  },
})
export default class Target extends Vue {}
</script>
