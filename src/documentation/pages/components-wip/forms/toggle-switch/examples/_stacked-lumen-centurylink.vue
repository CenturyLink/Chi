<template lang="pug">
  <ComponentExample titleSize="h4" title="Stacked" id="stacked-lumen-centurylink" :tabs="exampleTabs">
    div(slot="example")
      .chi-form__item
        chi-switch(id='toggle3', label='Label')
      .chi-form__item
        chi-switch(id='toggle4', label='Label')
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
        webcomponent: `<div class="chi-form__item">
  <chi-switch id="toggle3" label="Label"></chi-switch>
</div>
<div class="chi-form__item">
  <chi-switch id="toggle4" label="Label"></chi-switch>
</div>`,
      htmlblueprint: `<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item">
    <label class="chi-switch" for="toggle3">
      <input type="checkbox" class="chi-switch__input" id="toggle3">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item">
    <label class="chi-switch" for="toggle4">
      <input type="checkbox" class="chi-switch__input" id="toggle4">
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
export default class StackedLumenCenturyLink extends Vue {}
</script>
