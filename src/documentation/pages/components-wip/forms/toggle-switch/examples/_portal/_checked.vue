<template lang="pug">
<ComponentExample titleSize="h4" title="Checked" id="checked-portal" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a toggle switch to true.
  template(#example)
    .chi-form__item
      chi-switch(id='toggle-portal-ch1' size="xs" label='Label' checked)
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
