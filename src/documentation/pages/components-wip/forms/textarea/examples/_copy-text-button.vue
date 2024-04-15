<template lang="pug">
ComponentExample(title="Copy text button" id="copy-text" :tabs="exampleTabs")
  template(#example-description)
    p.-text
      | Use the <code>copy-text</code> attribute to show a copy icon that provides the user the
      | ability to copy the input value into the clipboard.

  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__copy-text-button") Label
          chi-textarea(
            copy-text
            value="Sample Text"
            id="example__copy-text-button"
          )

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    JSNeeded
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class CopyTextButton extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: `<div class="chi-form__item">
  <chi-label for="example__copy-text-button">Label</chi-label>
  <chi-textarea value="Sample Text" id="example__copy-text-button" copy-text></chi-textarea>
</div>`,
    htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__copy-text-button">Label</label>
  <div class="-d--flex -align-items--start">
    <div class="chi-input__wrapper -flex--grow1">
      <textarea type="text" class="chi-input" value="Sample text" id="example__copy-text-button" />
    </div>

    <button id="example_copy-text-button" class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Copy to clipboard">
      <div class="chi-button__content">
        <i class="chi-icon icon-copy -sm" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>
  document.getElementById('example_copy-text-button').addEventListener('click', () => {
    navigator.clipboard?.writeText(
      document.getElementById('example__copy-text-button').getAttribute('value')
    );
  });

  <!-- Tooltip -->
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`
  }
}
</script>
