<template lang="pug">
<ComponentExample title="Spinners in Text Inputs" titleSize="h4" id="spinner-texts" :tabs="exampleTabs">
  template(#example)
    .chi-form__item.-mb--2(v-for="item in textInputs" :key="item.text" style="max-width:20rem")
      chi-label(:for="'spinner-input-' + item") Label
      chi-text-input(:id="'spinner-input-' + item.text" spinner :size="item.size")

  template(#code-webcomponent)
    .chi-tab__description
      | Use the <code>spinner</code> attribute to render a spinner inside a text input. This lets users know when information is saving or loading.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      textInputs: [{ text: '01', size: '' }, { text: '02', size: 'sm' }, { text: '03', size: 'lg' }],
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
</div>`,
      },
    };
  },
})
export default class SpinnerTexts extends Vue {}
</script>
