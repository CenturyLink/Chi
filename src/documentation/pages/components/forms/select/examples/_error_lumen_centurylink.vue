<template lang="pug">
  <ComponentExample title="Error" id="error-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>-danger</code> state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. 
      | To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.
    .chi-form__item(style="max-width:20rem" slot="example")
      label(class="chi-label" for="example-er1") Label
        abbr(class="chi-label__required" title="Required field") *
      select(class="chi-select -danger" id="example-er1" required)
        option(value="") Select
        option Option 1
        option Option 2
        option Option 3
      .chi-label.-status.-danger Please select an option.
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
  <label class="chi-label" for="example-er1">
    Label
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </label>
  <select class="chi-select -danger" id="example-er1" required>
    <option value="">Select</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status -danger">Please select an option.</div>
</div>`
      }
    };
  }
})
export default class ErrorLumenCenturyLink extends Vue {}
</script>
