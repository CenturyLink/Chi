<template lang="pug">
<ComponentExample title="Min/Max/Step" id="min-max-step-expanded" :tabs="exampleTabs">
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
      chi-label(for="unique-id-emm1") Label
      chi-number-input(expanded=true, min="0", max="6", step="2", value="1")#unique-id-emm1
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
        webcomponent: `<chi-label for="unique-id-emm1">Label</chi-label>
<chi-number-input expanded id="unique-id-emm1" min="0" max="6" "step="2" value="1"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-emm1">Label</label>
  <div class="chi-number-input -expanded">
    <input id="unique-id-emm1" class="chi-input" type="number" min="0" max="6" "step="2" value="1" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>
  chi.numberInput(
    document.getElementById('unique-id-emm1'),
    {autofix: true}
  );
<\/script>`,
      },
    };
  },
})
export default class MinMaxStepExpanded extends Vue {}
</script>
