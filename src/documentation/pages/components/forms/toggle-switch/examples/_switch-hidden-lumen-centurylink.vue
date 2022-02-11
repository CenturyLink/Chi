<template lang="pug">
  <ComponentExample title="Switch with Hidden Label" id="switch-hidden-label-portal" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      chi-switch(id='toggle8',label='Label', hide-label)
    <Wrapper slot="code-webcomponent">
      .p--text(class="chi-tab__description")
        | Apply the <code>hide-label</code> attribute to <code>chi-switch</code> to render a switch without a label. Use this method for rendering switches
        | in close proximity to other text that clearly describes its purpose.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .p--text(class="chi-tab__description")
        | Apply the class <code>-label--hide</code> to <code>chi-switch</code> to render a switch without a label. Use this method for rendering switches
        | in close proximity to other text that clearly describes its purpose.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
  <chi-switch id="toggle8" label="Label" hide-label></chi-switch>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-switch -label--hide" for="toggle8">
    <input type="checkbox" class="chi-switch__input" id="toggle8">
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
export default class SwitchHiddenLumenCenturyLink extends Vue {}
</script>
