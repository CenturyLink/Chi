<template lang="pug">
  div
    .docs-titlebar
      .chi-grid__container.-introduction
        .chi-grid.-no-gutter
          .chi-col.-w--12.-w-lg--6.-n-lg--2
            .introduction-graphic
              div(v-for="i in 6" :class="`shape--${i}`")
          .chi-col.-w--12.-w-lg--6.-n-lg--1
            h1.docs-titlebar__title Build products customers love
            h2.docs-titlebar__description Chi is Lumen's design system for building consistent digital products and experiences.
            .docs-titlebar__buttons
              a.chi-button.-primary.-lg.-uppercase.-px--4.-mb--2.-mb-sm--0(href='../getting-started/installation') Install Chi
              a.chi-button.-dark.-outline.-lg.-uppercase.-px--4.-ml-sm--2.-mb--2.-mb-sm--0(href='../getting-started/whats-new') {{ buttonText }}

    .chi-grid__container.-pt--3
      .chi-grid.-py-lg--2.-py-xl--4
        .chi-col.-w--12.-w-md--6.-w-lg--5.-mb--1.-mb-lg--6(v-for="({ name, description }, index) in items" :class="index === 1 || index === 3 ? '-o-lg--2' : ''")
          .chi-grid.-no-gutter
            .chi-col.-w--12.-p--2.-p-lg--0
              h3.-text--h3.-mt--0.-mb--1.-mb-sm--2 {{ name }}
              p.-text--lg.-text--grey.-m--0 {{ description }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CHI_VERSION } from '~/constants/configs';

@Component({
  head() {
    return {
      title: 'Chi - Introduction'
    }
  }
})
export default class Introduction extends Vue {
  items = [
    {
      name: 'Accessible',
      description: 'Chi components follow the Revised Section 508 and WCAG 2.0 AA standards which ensure the best experience is provided for all customers, including those with disabilities.'
    },
    {
      name: 'Composable',
      description: 'Chi components are flexible building blocks that can be implemented as is or assembled in various combinations to satisfy requirements across Consumer, Enterprise, and internal tools.'
    },
    {
      name: 'Reusable',
      description: 'Chi provides consistent, reusable components that continuously evolve with each new release by inheriting Lumen\'s latest features, improvements, and brand guidelines.'
    },
    {
      name: 'Compatible',
      description: 'Chi\'s framework agnostic web components and independent CSS layer are compatible with any major framework (AngularJS, ReactJS, VueJS) or no framework at all.'
    }
  ]

  buttonText = `See What's New In v${CHI_VERSION}`
}
</script>
