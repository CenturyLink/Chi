<template lang="pug">
  <ComponentExample titleSize="h4" title="Min and Max " id="calendar-min-max" :tabs="exampleTabs">
    template(#example)
      chi-date(min="06/06/2024", max="06/22/2024")
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
        .chi-tab__description Use class <code>-inactive</code> for deactivated dates.
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class CalendarMinMax extends Vue {
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
    webcomponent: `<chi-date min="06/06/2024" max="06/22/2024"></chi-date>`,
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
    <div class="chi-datepicker__day ${day <= 4 || day >= 22 ? '-inactive' : ''}">${day + 1}</div>`;
    });

    this.datePickerDayNames.forEach((dayName: string) => {
      datePickerDayNames += `
    <div class="chi-datepicker__week-day">${dayName}</div>`;
    });

    this.codeSnippets.htmlblueprint = `<div class="chi-datepicker -week-starts-on-sun -month-starts-on-sat">
  <div class="chi-datepicker__month-row">
    <div class="prev -disabled">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">June 2024</div>
    <div class="next -disabled">
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
