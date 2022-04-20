<template lang="pug">
  <ComponentExample titleSize="h4" title="Min and Max " id="calendar-min-max" :tabs="exampleTabs">
    chi-date(min="06/06/2019", max="06/22/2019" slot="example")
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
        .chi-tab__description
          | Use class <code>-inactive</code> for deactivated dates.
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
        htmlblueprint: `<div class="chi-datepicker -week-starts-on-sun -month-starts-on-sat">
  <div class="chi-datepicker__month-row">
    <div class="prev -disabled"><i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i></div>
    <div class="chi-datepicker__month">June 2019</div>
    <div class="next -disabled"><i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i></div>
  </div>
  <div class="chi-datepicker__day-names">
    <div class="chi-datepicker__week-day">S</div>
    <div class="chi-datepicker__week-day">M</div>
    <div class="chi-datepicker__week-day">T</div>
    <div class="chi-datepicker__week-day">W</div>
    <div class="chi-datepicker__week-day">T</div>
    <div class="chi-datepicker__week-day">F</div>
    <div class="chi-datepicker__week-day">S</div>
  </div>
  <div class="chi-datepicker__days">
    <div class="chi-datepicker__day -inactive">1</div>
    <div class="chi-datepicker__day -inactive">2</div>
    <div class="chi-datepicker__day -inactive">3</div>
    <div class="chi-datepicker__day -inactive">4</div>
    <div class="chi-datepicker__day -inactive">5</div>
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
    <div class="chi-datepicker__day -inactive">23</div>
    <div class="chi-datepicker__day -inactive">24</div>
    <div class="chi-datepicker__day -inactive">25</div>
    <div class="chi-datepicker__day -inactive">26</div>
    <div class="chi-datepicker__day -inactive">27</div>
    <div class="chi-datepicker__day -inactive">28</div>
    <div class="chi-datepicker__day -inactive">29</div>
    <div class="chi-datepicker__day -inactive">30</div>
  </div>
</div>`,
      },
    };
  },
})
export default class CalendarMinMax extends Vue {}
</script>
