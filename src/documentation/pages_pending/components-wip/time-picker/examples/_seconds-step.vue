<template lang="pug">
  <ComponentExample titleSize="h4" title="Seconds step" id="seconds-step" :tabs="exampleTabs">
    template(#example)
      .chi-form__item(style="max-width: 14rem;")
        chi-label(for="example__seconds-step") Label
        chi-time-picker(id="example__seconds-step" seconds-step="30" display-seconds)
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
        webcomponent: `<!-- Seconds step with default value (10 seconds) -->
<chi-label for="example__seconds-step">Label</chi-label>
<chi-time-picker id="example__seconds-step" seconds-step display-seconds></chi-time-picker>

<!-- Seconds step with custom value of 30 seconds -->
<chi-label for="example__seconds-step">Label</chi-label>
<chi-time-picker id="example__seconds-step" seconds-step="30" display-seconds></chi-time-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TwentyFourHourFormat extends Vue { }
</script>
