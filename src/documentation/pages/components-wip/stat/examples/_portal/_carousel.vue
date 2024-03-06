<template lang="pug">
<ComponentExample title="Carousel" id="carousel-portal" :tabs="exampleTabs">
  template(#example)
    chi-carousel
      div(slot="items")
        .chi-stat
          div(v-for="(stat, index) in stats" :key="index" style="max-width: 168px; min-width: 168px; width: 168px;" :class="stat.active ? 'chi-stat__item -active' : 'chi-stat__item'")
            .chi-stat__content
              .chi-stat-metric
                .chi-stat-metric__value
                  | {{ index + 1 }}
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
        {
          title: 'High Utilization',
        },
        {
          title: 'Critical Performing',
        },
        {
          title: 'Services Down',
        },
        {
          title: 'Scheduled Maintenance',
        },
        {
          title: 'High Utilization',
        },
        {
          title: 'Critical Performing',
        },
        {
          title: 'Services Down',
        },
        {
          title: 'Scheduled Maintenance',
        },
      ],
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-carousel>
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
</chi-carousel>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class CarouselPortal extends Vue {}
</script>
