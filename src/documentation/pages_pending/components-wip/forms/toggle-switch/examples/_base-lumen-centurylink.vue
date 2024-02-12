<template lang="pug">
  <ComponentExample titleSize="h4" title="Base" id="base-lumen-centurylink" :tabs="exampleTabs">
    template(#example)
      .chi-form__item
        chi-switch(id='toggle-ba1',label='Label')
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
        webcomponent: `<chi-switch id="toggle-ba1" label="Label"></chi-switch>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-switch" for="toggle-ba1">
    <input type="checkbox" class="chi-switch__input" id="toggle-ba1">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`,
      },
    };
  },
})
export default class BaseLumenCenturyLink extends Vue {}
</script>
