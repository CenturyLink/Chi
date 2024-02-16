<template lang="pug">
<ComponentExample titleSize="h4" title="Switch with Hidden Label" id="switch-hidden-label-portal" :tabs="exampleTabs">
  template(#example)
    .chi-form__item
      chi-switch(id='portal-toggle8', size="xs", label='Label', hide-label)
  template(#code-webcomponent)
    .p--text.chi-tab__description
      | Apply the <code>hide-label</code> attribute to <code>chi-switch</code> to render a switch without a label. Use this method for rendering switches
      | in close proximity to other text that clearly describes its purpose.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .p--text.chi-tab__description
      | Apply the class <code>-label--hide</code> to <code>chi-switch</code> to render a switch without a label. Use this method for rendering switches
      | in close proximity to other text that clearly describes its purpose.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
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
        webcomponent: `<div class="chi-form__item">
  <chi-switch id="portal-toggle8" size="xs" label="Label" hide-label></chi-switch>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-switch -xs -label--hide" for="portal-toggle8">
    <input type="checkbox" class="chi-switch__input" id="portal-toggle8">
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
export default class SwitchHiddenPortal extends Vue { }
</script>
