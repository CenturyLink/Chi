<template lang="pug">
<ComponentExample titleSize="h4" title="Value option" id="value-option" :tabs="exampleTabs">
  template(#example)
    .chi-form__item(style="max-width: 14rem;")
      chi-label(for="example__value-option") Time
      chi-time-picker(id="example__value-option" value="09:00")
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
        webcomponent: `<chi-label for="example__value-option">Label</chi-label>
<chi-time-picker id="example__value-option" value="09:00"></chi-time-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class ValueOption extends Vue {}
</script>
