<template lang="pug">
  <ComponentExample titleSize="h4" title="Multiple active dates" id="calendar-multiple-active-dates" :tabs="exampleTabs">
    chi-date(multiple, value="03/10/2021,03/11/2021,03/12/2021" slot="example")
    <Wrapper slot="code-webcomponent">
      .chi-tab__description Specify multiple active dates by separating the dates with a comma
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        span.-text--grey Use class <code>-active</code> for the selected date
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
      datePickerDates: Array.from(Array(31).keys()),
      datePickerDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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
        webcomponent: `<chi-date value="03/10/2021,03/11/2021,03/12/2021" multiple></chi-date>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class CalendarMultipleActiveDates extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let datePickerDates = '';
    let datePickerDayNames = '';

    this.$data.datePickerDates.forEach((day: number) => {
      datePickerDates += `
    <div class="chi-datepicker__day ${day >= 9 && day <= 11 ? '-active' : ''}">${day + 1}</div>`
    });

    this.$data.datePickerDayNames.forEach((dayName: string) => {
      datePickerDayNames += `
    <div class="chi-datepicker__week-day">${dayName}</div>`
    });

    this.$data.codeSnippets.htmlblueprint = `<div class="chi-datepicker -week-starts-on-sun -month-starts-on-wed">
  <div class="chi-datepicker__month-row">
    <div class="prev">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">March 2021</div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${datePickerDayNames}
  </div>
  <div class="chi-datepicker__days">${datePickerDates}
  </div>
</div>`
  }
}
</script>
