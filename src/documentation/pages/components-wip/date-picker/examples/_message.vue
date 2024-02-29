<template lang="pug">
<ComponentExample title="Message" id="date-message" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>helper-message</code> attribute to provide users with additional information, validation feedback, and other helpful information.
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__date_message') Date
      chi-date-picker(id="example__date_message" helper-message='Optional helper message')

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(:code="codeSnippets.htmlblueprint" lang="html")
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
        webcomponent: `<chi-label for="example__datepicker_date_message">Date</chi-label>
<chi-date-picker id="example__datepicker_date_message" helper-message="Optional helper message"></chi-date-picker>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__datepicker_message">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="example__datepicker_message" type="text" class="chi-input -danger" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon circle-warning" aria-hidden="true"></i>
    Optional helper message
  </div>
</div>

<script>chi.datePicker(document.getElementById('example__datepicker_message'));<\/script>`,
      },
    };
  },
})
export default class Message extends Vue {}
</script>
