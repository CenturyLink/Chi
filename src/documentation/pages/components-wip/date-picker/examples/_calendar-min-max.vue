<template lang="pug">
  <ComponentExample titleSize="h4" title="Min and Max " id="calendar-min-max" :tabs="exampleTabs">
    chi-date(min="06/06/2019", max="06/22/2019" slot="example")
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
        .chi-tab__description Use class <code>-inactive</code> for deactivated dates.
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
      datePickerDates: Array.from(Array(30).keys()),
      datePickerDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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
        webcomponent: `<chi-date min="06/06/2019" max="06/22/2019"></chi-date>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class CalendarMinMax extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let datePickerDates = '';
    let datePickerDayNames = '';

    this.$data.datePickerDates.forEach((day: number) => {
      datePickerDates += `
    <div class="chi-datepicker__day ${day <= 4 || day >= 22 ? '-inactive' : ''}">${day + 1}</div>`
    });

    this.$data.datePickerDayNames.forEach((dayName: string) => {
      datePickerDayNames += `
    <div class="chi-datepicker__week-day">${dayName}</div>`
    });

    this.$data.codeSnippets.htmlblueprint = `<div class="chi-datepicker -week-starts-on-sun -month-starts-on-sat">
  <div class="chi-datepicker__month-row">
    <div class="prev -disabled">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">June 2019</div>
    <div class="next -disabled">
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
