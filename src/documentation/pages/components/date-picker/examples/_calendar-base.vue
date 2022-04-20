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
        htmlblueprint: `<div class="chi-datepicker -week-starts-on-sun -month-starts-on-wed">
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
  <div class="chi-datepicker__day-names">
    <div class="chi-datepicker__week-day">
      S
    </div>
    <div class="chi-datepicker__week-day">
      M
    </div>
    <div class="chi-datepicker__week-day">
      T
    </div>
    <div class="chi-datepicker__week-day">
      W
    </div>
    <div class="chi-datepicker__week-day">
      T
    </div>
    <div class="chi-datepicker__week-day">
      F
    </div>
    <div class="chi-datepicker__week-day">
      S
    </div>
  </div>
  <div class="chi-datepicker__days">
    <div class="chi-datepicker__day">1</div>
    <div class="chi-datepicker__day">2</div>
    <div class="chi-datepicker__day">3</div>
    <div class="chi-datepicker__day">4</div>
    <div class="chi-datepicker__day">5</div>
    <div class="chi-datepicker__day">6</div>
    <div class="chi-datepicker__day">7</div>
    <div class="chi-datepicker__day">8</div>
    <div class="chi-datepicker__day">9</div>
    <div class="chi-datepicker__day">10</div>
    <div class="chi-datepicker__day">11</div>
    <div class="chi-datepicker__day">12</div>
    <div class="chi-datepicker__day">13</div>
    <div class="chi-datepicker__day">14</div>
    <div class="chi-datepicker__day">15</div>
    <div class="chi-datepicker__day">16</div>
    <div class="chi-datepicker__day">17</div>
    <div class="chi-datepicker__day">18</div>
    <div class="chi-datepicker__day">19</div>
    <div class="chi-datepicker__day">20</div>
    <div class="chi-datepicker__day">21</div>
    <div class="chi-datepicker__day">22</div>
    <div class="chi-datepicker__day">23</div>
    <div class="chi-datepicker__day">24</div>
    <div class="chi-datepicker__day">25</div>
    <div class="chi-datepicker__day">26</div>
    <div class="chi-datepicker__day">27</div>
    <div class="chi-datepicker__day">28</div>
    <div class="chi-datepicker__day">29</div>
    <div class="chi-datepicker__day">30</div>
  </div>
</div>`,
      },
    };
  },
})
export default class BaseCalendar extends Vue {
}
</script>
