<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    template(#example)
      .-py--2
        .chi-label 0%
        chi-progress(value="0" max="100")
      .-py--2
        .chi-label 50%
        chi-progress(value="50" max="100")
      .-py--2
        .chi-label 100%
        chi-progress(value="100" max="100")

    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      .chi-tab__description
        | To render a progress element, use the <code>progress</code> HTML5 tag. Set the value attribute to indicate the current progress.
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
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- 0% -->
<div class="chi-label">0%</div>
<chi-progress value="0" max="100"></chi-progress>

<!-- 50% -->
<div class="chi-label">50%</div>
<chi-progress value="50" max="100"></chi-progress>

<!-- 100% -->
<div class="chi-label">100%</div>
<chi-progress value="100" max="100"></chi-progress>`,
        htmlblueprint: `<!-- 0% -->
<div class="chi-label" id="example-1">0%</div>
<progress aria-labelledby="example-1" value="0" max="100"></progress>

<!-- 50% -->
<div class="chi-label" id="example-2">50%</div>
<progress aria-labelledby="example-2" value="50" max="100"></progress>

<!-- 100% -->
<div class="chi-label" id="example-3">100%</div>
<progress aria-labelledby="example-3" value="100" max="100"></progress>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
