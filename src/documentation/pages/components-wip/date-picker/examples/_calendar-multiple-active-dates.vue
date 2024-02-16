<template lang="pug">
<ComponentExample titleSize="h4" title="Multiple active dates" id="calendar-multiple-active-dates" :tabs="exampleTabs">
  template(#example)
    chi-date(multiple, value="03/10/2024,03/11/2024,03/12/2024")
  template(#code-webcomponent)
    .chi-tab__description Specify multiple active dates by separating the dates with a comma
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      span.-text--grey Use class <code>-active</code> for the selected date
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class CalendarMultipleActiveDates extends Vue {
  datePickerDates = Array.from(Array(30).keys());
  datePickerDayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: `<chi-date value="03/10/2024,03/11/2024,03/12/2024" multiple></chi-date>`,
    htmlblueprint: ``,
  }
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let datePickerDates = '';
    let datePickerDayNames = '';

    this.datePickerDates.forEach((day: number) => {
      datePickerDates += `
    <div class="chi-datepicker__day ${day >= 9 && day <= 11 ? '-active' : ''}">${day + 1}</div>`;
    });

    this.datePickerDayNames.forEach((dayName: string) => {
      datePickerDayNames += `
    <div class="chi-datepicker__week-day">${dayName}</div>`;
    });

    this.codeSnippets.htmlblueprint = `<div class="chi-datepicker -week-starts-on-sun -month-starts-on-wed">
  <div class="chi-datepicker__month-row">
    <div class="prev">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">March 2024</div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${datePickerDayNames}
  </div>
  <div class="chi-datepicker__days">${datePickerDates}
  </div>
</div>`;
  }
}
</script>
