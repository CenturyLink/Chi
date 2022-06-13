<template lang="pug">
  <ComponentExample titleSize="h4" title="Switch with Left Label" id="switch-left-label-portal" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      label.chi-switch.-xs(for="portal-toggle7")
        span.chi-switch__label Label
        input(type="checkbox", class="chi-switch__input", id="portal-toggle7")
        span(class="chi-switch__content")
          span.chi-switch__thumb
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
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
