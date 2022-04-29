<template lang="pug">
  <ComponentExample title="Value, min and max options" id="value-min-max-options" :tabs="exampleTabs">
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__date_3') Date
      chi-date-picker(id="example__date_3", value="01/24/2019", min="01/14/2019", max="02/07/2019")
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
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="example__value_min_max_options">Date</chi-label>
<chi-date-picker id="example__value_min_max_options" value="01/24/2019" min="01/14/2019" max="02/07/2019">`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__datepicker_3">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="example__datepicker_3" type="text" class="chi-input" value="01/24/2019" min="01/14/2019" max="02/07/2019" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('example__datepicker_3'));<\/script>

<!-- Or configure programmatically -->
<script>
  chi.datePicker(
    document.getElementById('example__datepicker_3'),
    {
      date: '01\/24\/2019',
      min: '01\/24\/2019'
    }
);
<\/script>`,
      },
    };
  },
})
export default class ValueMinMaxOptions extends Vue {}
</script>
