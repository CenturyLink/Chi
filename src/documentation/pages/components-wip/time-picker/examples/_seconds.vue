<template lang="pug">
<ComponentExample titleSize="h4" title="Seconds" id="seconds" :tabs="exampleTabs">
  template(#example)
    .chi-form__item(style="max-width: 14rem;")
      chi-label(for="example__seconds") Label
      chi-time-picker(id="example__seconds" display-seconds)
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
        webcomponent: `<chi-label for="example__seconds">Label</chi-label>
<chi-time-picker id="example__seconds" display-seconds></chi-time-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Seconds extends Vue { }
</script>
