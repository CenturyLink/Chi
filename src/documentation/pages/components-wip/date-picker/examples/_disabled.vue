<template lang="pug">
  <ComponentExample title="Disabled" id="date-disabled" :tabs="exampleTabs" additionalStyle="z-index: 1;">
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__datepicker_date_2') Date
      chi-date-picker(id="example__datepicker_date_2", disabled)
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
        webcomponent: `<chi-label for="example__datepicker_disabled">Date</chi-label>
<chi-date-picker id="example__datepicker_disabled" disabled></chi-date-picker>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__datepicker_disabled">Date</label>
  <div class="chi-input__wrapper -disabled -icon--right">
    <input id="example__datepicker_disabled" type="text" class="chi-input" placeholder="MM/DD/YYYY" disabled>
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('example__datepicker_disabled'));<\/script>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
