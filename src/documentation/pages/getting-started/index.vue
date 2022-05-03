<template lang="pug">
  .docs-article
    header.docs-titlebar
      .chi-grid__container.-introduction
        .chi-grid.-no-gutter
          .chi-col.-w--12.-w-lg--6.-n-lg--2
            .introduction-graphic
              .shape--1
              .shape--2
              .shape--3
              .shape--4
              .shape--5
              .shape--6
          .chi-col.-w--12.-w-lg--6.-n-lg--1
            h1.docs-titlebar__title
              | Build products customers love
            h2.docs-titlebar__description
              | Chi is Lumen's design system for building consistent digital products and experiences.
            .docs-titlebar__buttons
              a.chi-button.-primary.-lg.-uppercase.-px--4.-mb--2.-mb-sm--0(href='../getting-started/installation') Install Chi
              a.chi-button.-dark.-outline.-lg.-uppercase.-px--4.-ml-sm--2.-mb--2.-mb-sm--0(href='../getting-started/whats-new') See What's New In v5.1.0
    section.chi-grid__container.-pt--3
      .chi-grid.-py-lg--2.-py-xl--4
        .chi-col.-w--12.-w-md--6.-w-lg--5.-mb--1.-mb-lg--6
          .chi-grid.-no-gutter
            .chi-col.-w--12.-p--2.-p-lg--0
              h3.-text--h3.-mt--0.-mb--1.-mb-sm--2 Accessible
              p.-text--lg.-text--grey.-m--0
                | Chi components follow the Revised Section 508 and WCAG 2.0 AA standards which ensure the best experience
                | is provided for all customers, including those with disabilities.
        .chi-col.-w--12.-w-md--6.-w-lg--5.-o-lg--2.-mb--1.-mb-lg--6
          .chi-grid.-no-gutter
            .chi-col.-w--12.-p--2.-p-lg--0
              h3.-text--h3.-mt--0.-mb--1.-mb-sm--2 Composable
              p.-text--lg.-text--grey.-m--0
                | Chi components are flexible building blocks that can be implemented as is or assembled
                | in various combinations to satisfy requirements across Consumer, Enterprise, and internal tools.
        .chi-col.-w--12.-w-md--6.-w-lg--5.-mb--1.-mb-lg--6
          .chi-grid.-no-gutter
            .chi-col.-w--12.-p--2.-p-lg--0
              h3.-text--h3.-mt--0.-mb--1.-mb-sm--2 Reusable
              p.-text--lg.-text--grey.-m--0
                | Chi provides consistent, reusable components that continuously evolve with each new
                | release by inheriting Lumen's latest features, improvements, and brand guidelines.
        .chi-col.-w--12.-w-md--6.-w-lg--5.-o-lg--2.-mb--1.-mb-lg--6
          .chi-grid.-no-gutter
            .chi-col.-w--12.-p--2.-p-lg--0
              h3.-text--h3.-mt--0.-mb--1.-mb-sm--2 Compatible
              p.-text--lg.-text--grey.-m--0
                | Chi's framework agnostic web components and independent CSS layer are compatible with any
                | major framework (AngularJS, ReactJS, VueJS) or no framework at all.
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({})
</script>
