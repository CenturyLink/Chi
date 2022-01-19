<template lang="pug">
  <ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a checkbox to true.
    .chi-form__item(slot="example")
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input" id="checkbox-ch1" checked)
        label(for="checkbox-ch1" class="chi-checkbox__label") Checkbox
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ch1" checked>
    <label class="chi-checkbox__label" for="checkbox-ch1">Checkbox</label>
  </div>
</div>`
      }
    };
  }
})
export default class Checked extends Vue {}
</script>
