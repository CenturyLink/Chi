<template lang="pug">
  <ComponentExample title="Indeterminate" id="indeterminate" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text   
        | A checkbox cannot be set to <code>indeterminate</code> state by an HTML attribute - it must be set by JavaScript.
        | Use the class <code>-indeterminate</code> to achieve the corresponding style of the checkbox.
    div(slot="example")
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input -indeterminate" id="checkbox-ind1")
          label(for="checkbox-ind1" class="chi-checkbox__label") Checkbox
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded slot="tab-description" />
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
    <input type="checkbox" class="chi-checkbox__input -indeterminate" id="checkbox-ind1">
    <label class="chi-checkbox__label" for="checkbox-ind1">Checkbox</label>
  </div>
</div>

<!-- JavaScript -->
<script>
  var checkbox = document.getElementById('checkbox-ind1');
  
  checkbox.indeterminate = true;
<\/script>`
      }
    };
  }
})
export default class Indeterminate extends Vue {
  mounted() {
    const checkbox = document.getElementById('checkbox-ind1');

    (checkbox as HTMLInputElement).indeterminate = true;
  }
}
</script>
