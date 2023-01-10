<template lang="pug">
  <ComponentExample titleSize="h4" title="Inline" id="inline-lumen-centurylink" :tabs="exampleTabs">
    .-d--flex(slot="example")
      .chi-form__item.-inline
        chi-switch(id='toggle5', label='Label')
      .chi-form__item.-inline
        chi-switch(id='toggle6', label='Label')
    <Wrapper slot="code-webcomponent">
      .p--text.chi-tab__description
        | Apply the <code>-inline</code> class to <code>chi-form__item</code> for displaying toggle switches inline.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .p--text.chi-tab__description
        | Apply the <code>-inline</code> class to <code>chi-form__item</code> to display switches inline.
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
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item -inline">
  <chi-switch id="toggle5" label="Label"></chi-switch>
</div>
<div class="chi-form__item -inline">
  <chi-switch id="toggle6" label="Label"></chi-switch>
</div>`,
    htmlblueprint: `<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item -inline">
    <label class="chi-switch" for="toggle5">
      <input type="checkbox" class="chi-switch__input" id="toggle5">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item -inline">
    <label class="chi-switch" for="toggle6">
      <input type="checkbox" class="chi-switch__input" id="toggle6">
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
export default class InlineLumenCenturyLink extends Vue {}
</script>
