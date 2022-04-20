<template lang="pug">
  <ComponentExample titleSize="h4" title="Date and Time" id="calendar-date-time" :tabs="exampleTabs">
    .-d--flex(style="width: 28.75rem;" slot="example")
      .chi-datepicker.-week-starts-on-sun.-month-starts-on-wed
        .chi-datepicker__month-row
          .prev
            i.chi-icon.icon-chevron-left.-sm(aria-hidden="true")
          .chi-datepicker__month
            | November 2018
          .next
            i.chi-icon.icon-chevron-right.-sm(aria-hidden="true")
        .chi-datepicker__day-names
          .chi-datepicker__week-day(v-for="weekDay in weekDays")
            | {{weekDay}}
        .chi-datepicker__days
          .chi-datepicker__day(v-for="day in Array(30).keys()") {{+day + 1}}
      .chi-time-picker
        .chi-time-picker__content
          .chi-time-picker__hours
            .chi-time-picker__hour(v-for="hour in hours") {{hour}}
          .chi-time-picker__minutes
            .chi-time-picker__minute(v-for="minute in minutes") {{minute}}
          .chi-time-picker__periods
            .chi-time-picker__period AM
            .chi-time-picker__period PM
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-date></chi-date>
<chi-time></chi-time>`,
        htmlblueprint: ``,
      },
      weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      hours: ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      minutes: Array.from(new Array(60), (x, i) => i < 10 ? ('0' + i) : i)
    };
  },
})
export default class CalendarDateTime extends Vue {}
</script>
