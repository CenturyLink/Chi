<template lang="pug">
  <ComponentExample titleSize="h4" title="Checked" id="checked-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a toggle switch to true.
    .chi-form__item(slot="example")
      chi-switch(id='toggle-portal-ch1' size="xs" label='Label' checked)
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
        webcomponent: `<chi-switch id="toggle-portal-ch1" label="Label" checked></chi-switch>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-switch -xs" for="toggle-portal-ch1">
    <input type="checkbox" class="chi-switch__input" id="toggle-portal-ch1" checked>
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
export default class CheckedPortal extends Vue {}
</script>
