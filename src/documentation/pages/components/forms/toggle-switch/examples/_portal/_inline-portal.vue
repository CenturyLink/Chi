<template lang="pug">
  <ComponentExample title="Inline" id="inline-portal" :tabs="exampleTabs">
    .-d--flex(slot="example")
      .chi-form__item.-inline
        chi-switch(id='portal-toggle5', size="xs", label='Label')
      .chi-form__item.-inline
        chi-switch(id='portal-toggle6', size="xs", label='Label')
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
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
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
