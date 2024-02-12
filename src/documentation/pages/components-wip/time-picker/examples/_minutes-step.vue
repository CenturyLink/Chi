<template lang="pug">
  <ComponentExample titleSize="h4" title="Minutes step" id="minutes-step" :tabs="exampleTabs">
    template(#example)
      .chi-form__item(style="max-width: 14rem;")
        chi-label(for="example__minutes-step") Label
        chi-time-picker(id="example__minutes-step" minutes-step="20")
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- Minutes step with default value (15 minutes) -->
<chi-label for="example__minutes-step">Label</chi-label>
<chi-time-picker id="example__minutes-step" minutes-step></chi-time-picker>

<!-- Minutes step with custom value of 20 minutes -->
<chi-label for="example__minutes-step">Label</chi-label>
<chi-time-picker id="example__minutes-step" minutes-step="20"></chi-time-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TwentyFourHourFormat extends Vue { }
</script>
