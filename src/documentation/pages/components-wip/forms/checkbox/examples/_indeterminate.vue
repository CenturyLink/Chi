<template lang="pug">
<ComponentExample title="Indeterminate" id="indeterminate" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | A checkbox cannot be set to <code>indeterminate</code> state by an HTML attribute - it must be set by JavaScript.
      | Use the class <code>-indeterminate</code> to achieve the corresponding style of the checkbox.
  template(#example)
    .chi-form__item
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input -indeterminate" id="checkbox-ind1")
        label(for="checkbox-ind1" class="chi-checkbox__label") Checkbox
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Indeterminate extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
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
<\/script>`,
  };
  mounted() {
    const checkbox = document.getElementById('checkbox-ind1');

    (checkbox as HTMLInputElement).indeterminate = true;
  }
}
</script>
