<template lang="pug">
  <ComponentExample title="Carousel" id="carousel-portal" :tabs="exampleTabs">
    <Wrapper slot="example">
      chi-carousel
        .chi-stat(slot="items")
          div(v-for="(stat, index) in stats" :key="index" style="max-width: 168px; min-width: 168px; width: 168px;" :class="stat.active ? 'chi-stat__item -active' : 'chi-stat__item'")
            .chi-stat__content
              .chi-stat-metric
                .chi-stat-metric__value
                  | {{ index + 1 }}
                .chi-stat-metric__title
                  | {{ stat.title }}
    </Wrapper>
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
        {
          title: 'High Utilization'
        },
        {
          title: 'Critical Performing'
        },
        {
          title: 'Services Down'
        },
        {
          title: 'Scheduled Maintenance'
        },
        {
          title: 'High Utilization'
        },
        {
          title: 'Critical Performing'
        },
        {
          title: 'Services Down'
        },
        {
          title: 'Scheduled Maintenance'
        }
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
        htmlblueprint: `<chi-carousel>
  <div class="chi-stat" slot="items">
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
          <div class="chi-stat-metric__value">2</div>
          <div class="chi-stat-metric__title">Critical Performing</div>
        </div>
      </div>
    </div>
    <div class="chi-stat__item">
      <div class="chi-stat__content">
        <div class="chi-stat-metric">
          <div class="chi-stat-metric__value">3</div>
          <div class="chi-stat-metric__title">Services Down</div>
        </div>
      </div>
    </div>
    <div class="chi-stat__item">
      <div class="chi-stat__content">
        <div class="chi-stat-metric">
          <div class="chi-stat-metric__value">4</div>
          <div class="chi-stat-metric__title">Scheduled Maintenance</div>
        </div>
      </div>
    </div>
    <div class="chi-stat__item">
      <div class="chi-stat__content">
        <div class="chi-stat-metric">
          <div class="chi-stat-metric__value">5</div>
          <div class="chi-stat-metric__title">High Utilization</div>
        </div>
      </div>
    </div>
    <div class="chi-stat__item">
      <div class="chi-stat__content">
        <div class="chi-stat-metric">
          <div class="chi-stat-metric__value">6</div>
          <div class="chi-stat-metric__title">Critical Performing</div>
        </div>
      </div>
    </div>
    <div class="chi-stat__item">
      <div class="chi-stat__content">
        <div class="chi-stat-metric">
          <div class="chi-stat-metric__value">7</div>
          <div class="chi-stat-metric__title">Services Down</div>
        </div>
      </div>
    </div>
    <div class="chi-stat__item">
      <div class="chi-stat__content">
        <div class="chi-stat-metric">
          <div class="chi-stat-metric__value">8</div>
          <div class="chi-stat-metric__title">Scheduled Maintenance</div>
        </div>
      </div>
    </div>
  </div>
</chi-carousel>`
      }
    };
  }
})
export default class CarouselPortal extends Vue {}
</script>
