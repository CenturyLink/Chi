<template lang="pug">
  <ComponentExample title="Value, min and max options" id="value-min-max-options" :tabs="exampleTabs">
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__datepicker_date_min_max') Date
      chi-date-picker(id="example__datepicker_date_min_max", value="01/24/2024", min="01/14/2024", max="02/07/2024")
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
        webcomponent: `<chi-label for="example__datepicker_value_min_max_options">Date</chi-label>
<chi-date-picker id="example__datepicker_value_min_max_options" value="01/24/2024" min="01/14/2024" max="02/07/2024">`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__datepicker_value_min_max_options">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="example__datepicker_value_min_max_options" type="text" class="chi-input" value="01/24/2024" min="01/14/2024" max="02/07/2024" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('example__datepicker_value_min_max_options'));<\/script>

<!-- Or configure programmatically -->
<script>
  chi.datePicker(
    document.getElementById('example__datepicker_value_min_max_options'),
    {
      date: '01\/24\/2024',
      min: '01\/24\/2024'
    }
);
<\/script>`,
      },
    };
  },
})
export default class ValueMinMaxOptions extends Vue {}
</script>
