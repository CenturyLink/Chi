<template lang="pug">
  <ComponentExample titleSize="h4" title="Disabled" id="disabled-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
    .chi-form__item(slot="example")
      chi-switch(id='toggle-di1', label='Label', disabled)
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
        webcomponent: `<chi-switch id="toggle-di1" label="Label" disabled></chi-switch>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-switch" for="toggle-di1">
    <input type="checkbox" class="chi-switch__input" name="toggle-di1" value="toggle-di1" disabled>
    <span id="toggle-di1" class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`,
      },
    };
  },
})
export default class DisabledLumenCenturyLink extends Vue {}
</script>
