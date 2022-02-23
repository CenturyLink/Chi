<template lang="pug">
  <ComponentExample title="Background Icons" id="background-icons-lumen-centurylink" :tabs="exampleTabs">
    .chi-stat(slot="example")
      div(v-for="stat in stats" :class="stat.active ? 'chi-stat__item -active' : 'chi-stat__item'")
        .chi-stat__content
          .chi-stat-metric
            .chi-stat-metric__value
              | {{ stat.num }}
            .chi-stat-metric__title
              | {{ stat.title }}
          .chi-stat-background-icon
            i(:class="['chi-icon', stat.icon]" aria-hidden="true")
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
        { num: '1', title: 'High Utilization', icon: 'icon-file' },
        { num: '1', title: 'Critical Performing', icon: 'icon-warning', active: true },
        { num: '2', title: 'Services Down', icon: 'icon-map-marker' },
        { num: '3', title: 'Scheduled Maintenance', icon: 'icon-mail' }
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
        htmlblueprint: `<div class="chi-stat">
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">1</div>
        <div class="chi-stat-metric__title">High Utilization</div>
      </div>
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-file" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="chi-stat__item -active">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">1</div>
        <div class="chi-stat-metric__title">Critical Performing</div>
      </div>
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-warning" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">2</div>
        <div class="chi-stat-metric__title">Services Down</div>
      </div>
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-map-marker" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">3</div>
        <div class="chi-stat-metric__title">Scheduled Maintenance</div>
      </div>
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-mail" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>`
      }
    };
  }
})
export default class BackgroundIconsLumenCenturyLink extends Vue {}
</script>
