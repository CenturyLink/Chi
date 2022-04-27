<template lang="pug">
  <ComponentExample titleSize="h4" title="Base" id="calendar-base" :tabs="exampleTabs">
    chi-date(slot="example")   
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
        .chi-tab__description
          | Use the classes <code>-month-starts-on-sun</code>,
          | <code>-month-starts-on-mon</code>, <code>-month-starts-on-tue</code>, <code>-month-starts-on-wed</code>,
          | <code>-month-starts-on-thu</code>, <code>-month-starts-on-fri</code> and <code>-month-starts-on-sat</code> to
          | locate the first day in the correct cell.
          br
          | Use the classes <code>-week-starts-on-sun</code> or <code>-week-starts-on-mon</code> to fit the week definition
          | of the desired locale.
          br
          | Use the class <code>-today</code> for the current date
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      datePickerDayInputs: Array.from(Array(30).keys()),
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
        webcomponent: `<chi-date></chi-date>`,
        htmlblueprint: ``
      },
    };
  },
})
export default class BaseCalendar extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let datePickerDayInputs = '';
    let datePickerDayNames = '';

    this.$data.datePickerDayInputs.forEach((day: number) => {
      datePickerDayInputs += `
    <div class="chi-datepicker__day">${day + 1}</div>`
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
    <div class="chi-datepicker__month">
      November 2018
    </div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${datePickerDayNames}
  </div>
  <div class="chi-datepicker__days">${datePickerDayInputs}
  </div>
</div>`;
  }
}
</script>
