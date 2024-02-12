<template lang="pug">
  <ComponentExample titleSize="h4" title="Inline" id="inline-portal" :tabs="exampleTabs">
    template(#example)
      .-d--flex
        .chi-form__item.-inline
          chi-switch(id='portal-toggle5', size="xs", label='Label')
        .chi-form__item.-inline
          chi-switch(id='portal-toggle6', size="xs", label='Label')
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
        webcomponent: `<div class="chi-form__item -inline">
  <chi-switch id="portal-toggle5" size="xs" label="Label"></chi-switch>
</div>
<div class="chi-form__item -inline">
  <chi-switch id="portal-toggle6" size="xs" label="Label"></chi-switch>
</div>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item -inline">
    <label class="chi-switch -xs" for="portal-toggle5">
      <input type="checkbox" class="chi-switch__input" id="portal-toggle5">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item -inline">
    <label class="chi-switch -xs" for="portal-toggle6">
      <input type="checkbox" class="chi-switch__input" id="portal-toggle6">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class InlinePortal extends Vue {}
</script>
