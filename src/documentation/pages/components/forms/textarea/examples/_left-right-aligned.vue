<template lang="pug">
  <ComponentExample titleSize="h4" title="Left + Right Aligned" id="left-right-aligned" :tabs="exampleTabs">
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__icon-left-right") Label
          chi-textarea(id="example__icon-left-right", icon-left="map-marker", icon-right="check", icon-left-color="muted", icon-right-color="success") Sample text
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
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__icon-left-right">Label</chi-label>
  <chi-textarea id="example__icon-left-right" icon-left="map-marker" icon-right="check" icon-left-color="muted" icon-right-color="success">Sample text</chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left-right">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <textarea class="chi-input" id="example__icon-left-right">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`
      }
    };
  }
})
export default class LeftRightAligned extends Vue {}
</script>
