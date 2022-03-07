<template lang="pug">
  <ComponentExample title="Spinners in Text Inputs" titleSize="h4" id="spinner-texts" :tabs="exampleTabs">
    div(slot="example")
      .chi-form__item.-mb--2(style="max-width:20rem")
        chi-label(for="spinner-input-01") Label
        chi-text-input(id="spinner-input-01" spinner)
      .chi-form__item.-mb--2(style="max-width:20rem")
        chi-label(for="spinner-input-02") Label
        chi-text-input(id="spinner-input-02" spinner size="sm")
      .chi-form__item.-mb--2(style="max-width:20rem")
        chi-label(for="spinner-input-03") Label
        chi-text-input(id="spinner-input-03" spinner size="lg")
    <Wrapper slot="code-webcomponent">
      .p--text.chi-tab__description
        | Use the <code>spinner</code> attribute to render a spinner inside a text input. This lets users know when information is saving or loading.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
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
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- Medium (Base) -->
<div class="chi-form__item">
  <chi-label for="spinner-input-01">Label</chi-label>
  <chi-text-input id="spinner-input-01" spinner></chi-text-input>
</div>
<!-- Small -->
<div class="chi-form__item">
  <chi-label for="spinner-input-02">Label</chi-label>
  <chi-text-input id="spinner-input-02" spinner size="sm"></chi-text-input>
</div>
<!-- Large -->
<div class="chi-form__item">
  <chi-label for="spinner-input-03">Label</chi-label>
  <chi-text-input id="spinner-input-03" spinner size="lg"></chi-text-input>
</div>`,
        htmlblueprint: `<!-- Medium (Base) -->
<div class="chi-form__item">
  <label class="chi-label" for="spinner-input-01">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input" placeholder="Placeholder" value="Sample text" id="spinner-input-01">
    <svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>
<!-- Small -->
<div class="chi-form__item">
  <label class="chi-label" for="spinner-input-02">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input -sm" placeholder="Placeholder" value="Sample text" id="spinner-input-02">
    <svg class="chi-spinner -icon--muted -xs" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>
<!-- Large -->
<div class="chi-form__item">
  <label class="chi-label" for="spinner-input-03">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input -lg" placeholder="Placeholder" value="Sample text" id="spinner-input-03">
    <svg class="chi-spinner -icon--muted -sm--2" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
    </div>
  </div>
</div>`
      }
    };
  }
})
export default class SpinnerTexts extends Vue {}
</script>
