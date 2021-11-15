<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    div(slot="example")
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-ba1")
          label(for="checkbox-ba1" class="chi-checkbox__label") Checkbox
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
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1">
    <label class="chi-checkbox__label" for="checkbox-ba1">Checkbox</label>
  </div>
</div>`
      }
    };
  }
})
export default class Base extends Vue {
  mounted() {}
}
</script>
