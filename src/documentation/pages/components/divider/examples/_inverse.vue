<template lang="pug">
<ComponentExample title="Inverse" id="inverse" :tabs="exampleTabs" padding="-p--0">
  template(#example-description)
    p.-text Use the <code>-inverse</code> class to render dividers on dark backgrounds.
  template(#example)
    .-p--3(style="background-color:#000;")
      .chi-divider.-inverse
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Inverse extends Vue {
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
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-divider -inverse"></div>`,
  };
}
</script>
