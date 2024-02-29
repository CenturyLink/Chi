<template lang="pug">
<ComponentExample titleSize="h4" title="Switch with Left Label" id="switch-left-label-portal" :tabs="exampleTabs">
  template(#example)
    .chi-form__item
      label.chi-switch.-xs(for="portal-toggle7")
        span.chi-switch__label Label
        input(type="checkbox", class="chi-switch__input", id="portal-toggle7")
        span(class="chi-switch__content")
          span.chi-switch__thumb
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-switch -xs" for="portal-toggle7">
    <span class="chi-switch__label">Label</span>
    <input type="checkbox" class="chi-switch__input" id="portal-toggle7">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
  </label>
</div>`,
      },
    };
  },
})
export default class SwitchLeftPortal extends Vue {}
</script>
