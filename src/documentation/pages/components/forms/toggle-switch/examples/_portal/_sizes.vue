<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-portal" :tabs="exampleTabs">
    .p-text(slot="example-description" class="-mb--3 -text")
      | Toggle switch supports different sizes: <code>xs</code>, <code>sm</code>.
      | The default size is <code>sm</code>.
    div(slot="example")
      .-p--2
        .chi-form__item
          chi-switch(id='toggle15',label='Label', size='xs')
      .-p--2
        .chi-form__item
          chi-switch(id='toggle16',label='Label', size='sm')
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
        webcomponent: `<!-- xs -->
<div class="chi-form__item">
  <chi-switch id="toggle15" label="Label" size="xs"></chi-switch>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-switch id="toggle16" label="Label" size="sm"></chi-switch>
</div>`,
        htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-switch -xs" for="toggle15">
    <input type="checkbox" class="chi-switch__input" id="toggle15">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-switch -sm" for="toggle16">
    <input type="checkbox" class="chi-switch__input" id="toggle16">
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
export default class SizesPortal extends Vue {}
</script>
