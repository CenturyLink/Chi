<template lang="pug">
  <ComponentExample title="Min/Max/Step" id="min-max-step" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>min</code> and <code>max</code> attributes to define minimum and maximum values on number inputs.
      | Use the <code>step</code> attribute to indicate the expected granularity.
      <br><br>
      | This example only accepts values between <code>0</code> and <code>6</code>, and as the <code>step</code> is
      | <code>2</code> and initial <code>value</code> is <code>1</code>, only odd values are valid. If you manually write
      | any pair value, or a value greater than 5 or lesser than 1, the component will automatically correct the value.
    <Wrapper slot="example">
      .chi-form__item
        chi-label(for="unique-id-mms1") Label
        chi-number-input#unique-id-mms1(min="0", max="6", step="2", value="1")
    </Wrapper>
    <Wrapper slot="code-webcomponent">    
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
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
<\/script>`
      }
    };
  }
})
export default class MinMaxStep extends Vue {}
</script>
