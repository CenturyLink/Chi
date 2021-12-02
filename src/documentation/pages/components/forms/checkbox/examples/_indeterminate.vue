<template lang="pug">
  <ComponentExample title="Indeterminate" id="indeterminate" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | A checkbox cannot be set to <code>indeterminate</code> state by an HTML attribute - it must be set by JavaScript.
      | Use the class <code>-indeterminate</code> to achieve the corresponding style of the checkbox.
    .chi-form__item(slot="example")
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input -indeterminate" id="checkbox-ind1")
        label(for="checkbox-ind1" class="chi-checkbox__label") Checkbox
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
