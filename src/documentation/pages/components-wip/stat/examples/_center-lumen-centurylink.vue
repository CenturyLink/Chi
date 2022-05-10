<template lang="pug">
  <ComponentExample title="Center" id="center-lumen-centurylink" :tabs="exampleTabs">
    .chi-stat.-center(slot="example")
      div(v-for="stat in stats" :class="stat.num === '2' ? 'chi-stat__item -active' : 'chi-stat__item'")
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__value
              | {{ stat.num }}
            .chi-stat-metric__title
              | {{ stat.title }}
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
      stats: [
        { num: '1', title: 'High Utilization' },
        { num: '1', title: 'Critical Performing' },
        { num: '2', title: 'Services Down' },
        { num: '3', title: 'Scheduled Maintenance' }
      ],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
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
</div>`
      }
    };
  }
})
export default class CenterLumenCenturyLink extends Vue {}
</script>
