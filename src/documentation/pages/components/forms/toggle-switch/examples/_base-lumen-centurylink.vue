<template lang="pug">
  <ComponentExample titleSize="h4" title="Base" id="base-lumen-centurylink" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      chi-switch(id='toggle-ba1',label='Label')
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
