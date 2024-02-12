<template lang="pug">
  <ComponentExample title="Disabled" id="date-disabled" :tabs="exampleTabs" additionalStyle="z-index: 1;">
    template(#example)
      div(style="max-width: 14rem;")
        chi-label(for='example__datepicker_date_2') Date
        chi-date-picker(id="example__datepicker_date_2", disabled)
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
export default class Disabled extends Vue { }
</script>
