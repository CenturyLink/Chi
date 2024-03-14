<template lang="pug">
<ComponentExample title="Error" id="date-error" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>danger</code> state to provide feedback to users when date fails to validate.
      | To meet accessibility requirements, danger date picker must include an error message explaining the
      | failure and/or how to correct it.
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__date_error') Date
      chi-date-picker(id="example__date_error" state="danger" helper-message="Please select a date")
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
        webcomponent: `<chi-label for="example__datepicker_date_error">Date</chi-label>
<chi-date-picker id="example__datepicker_date_error" state="danger" helper-message="Please select a date"></chi-date-picker>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__datepicker_error">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="example__datepicker_error" type="text" class="chi-input -danger" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon circle-warning" aria-hidden="true"></i>
    Please select a date
  </div>
</div>

<script>chi.datePicker(document.getElementById('example__datepicker_error'));<\/script>`,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
