<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text   
        | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
        | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
        | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
    div(slot="example")
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-di1" disabled)
          label(for="checkbox-di1" class="chi-checkbox__label") Checkbox
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-di1" disabled>
    <label class="chi-checkbox__label" for="checkbox-di1">Checkbox</label>
  </div>
</div>`
      }
    };
  }
})
export default class Disabled extends Vue {
  mounted() {}
}
</script>
