<template lang="pug">
<ComponentExample title="Center" id="center-lumen-centurylink" :tabs="exampleTabs">
  template(#example)
    .chi-stat.-center
      div(v-for="stat in stats" :class="stat.num === '2' ? 'chi-stat__item -active' : 'chi-stat__item'")
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__value
              | {{ stat.num }}
            .chi-stat-metric__title
              | {{ stat.title }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      stats: [
        { num: '1', title: 'High Utilization' },
        { num: '1', title: 'Critical Performing' },
        { num: '2', title: 'Services Down' },
        { num: '3', title: 'Scheduled Maintenance' },
      ],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-stat -center">
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">1</div>
        <div class="chi-stat-metric__title">High Utilization</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">1</div>
        <div class="chi-stat-metric__title">Critical Performing</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item -active">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">2</div>
        <div class="chi-stat-metric__title">Services Down</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">3</div>
        <div class="chi-stat-metric__title">Scheduled Maintenance</div>
      </div>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class CenterLumenCenturyLink extends Vue { }
</script>
