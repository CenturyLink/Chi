<template lang="pug">
<ComponentExample title="Min/Max/Step" id="min-max-step" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>min</code> and <code>max</code> attributes to define minimum and maximum values on number inputs.
      | Use the <code>step</code> attribute to indicate the expected granularity.
      <br><br>
      | This example only accepts values between <code>0</code> and <code>6</code>, and as the <code>step</code> is
      | <code>2</code> and initial <code>value</code> is <code>1</code>, only odd values are valid. If you manually write
      | any pair value, or a value greater than 5 or lesser than 1, the component will automatically correct the value.
  template(#example)
    .chi-form__item
      chi-label(for="unique-id-mms1") Label
      chi-number-input#unique-id-mms1(min="0", max="6", step="2", value="1")
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="unique-id-mms1">Label</chi-label>
<chi-number-input id="unique-id-mms1" min="0" max="6" step="2" value="1"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-mms1">Label</label>
  <div class="chi-number-input">
    <input id="unique-id-mms1" type="number" class="chi-input" min="0" max="6" step="2" value="1" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>
  chi.numberInput(
    document.getElementById('unique-id-mms1'),
    {autofix: true}
  );
<\/script>`,
      },
    };
  },
})
export default class MinMaxStep extends Vue {}
</script>
