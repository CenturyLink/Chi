<template lang="pug">
  <ComponentExample title="Placeholder" id="placeholder" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>placeholder</code> attribute to provide users with an example of the type of data
      | that can be entered into an input. <strong>Note:</strong> Placeholder text is not persistent and visually
      | disappears when a value is entered.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__placeholder") Label
          chi-text-input(id="example__placeholder" placeholder="Placeholder")
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
  <chi-label for="example__placeholder">Label</chi-label>
  <chi-text-input id="example__placeholder" placeholder="Placeholder"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__placeholder">Label</label>
  <input type="text" class="chi-input" id="example__placeholder" placeholder="Placeholder">
</div>`
      }
    };
  }
})
export default class Placeholder extends Vue {}
</script>
