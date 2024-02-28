<template lang="pug">
<ComponentExample title="Base" id="base-date-picker" :tabs="exampleTabs">
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='date') Date
      chi-date-picker(id="date")
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
        webcomponent: `<chi-label for="example__datepicker_base">Date</chi-label>
<chi-date-picker id="example__datepicker_base"></chi-date-picker>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__datepicker_base">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="example__datepicker_base" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('example__datepicker_base'));<\/script>`,
      },
    };
  },
})
export default class BaseDatePicker extends Vue {}
</script>
