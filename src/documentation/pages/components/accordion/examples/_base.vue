<template lang="pug">
  .example-base
    h3 Base
    .example.-mb--3
      .-p--3.-p-lg--6
        .chi-accordion#example-base
          .chi-accordion__item
            button.chi-accordion__trigger
              i.chi-icon.icon-chevron-down(aria-hidden="true")
              .chi-accordion__title
                | Accordion 1
            .chi-accordion__content
              p.chi-accordion__text Content goes here
          .chi-accordion__item.-expanded
            button.chi-accordion__trigger
              i.chi-icon.icon-chevron-down(aria-hidden="true")
              .chi-accordion__title
                | Accordion 2
            .chi-accordion__content
              p.chi-accordion__text Content goes here
          .chi-accordion__item
            button.chi-accordion__trigger
              i.chi-icon.icon-chevron-down(aria-hidden="true")
              .chi-accordion__title
                | Accordion 3
            .chi-accordion__content
              p.chi-accordion__text Content goes here
          .chi-accordion__item
            button.chi-accordion__trigger
              i.chi-icon.icon-chevron-down(aria-hidden="true")
              .chi-accordion__title
                | Accordion 4
            .chi-accordion__content
              p.chi-accordion__text Content goes here
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from '~/models/models';

declare const chi: any;

@Component({})
export default class BaseExample extends Vue {
  theme: Themes = this.$store.state.themes.theme;

  mounted() {
    const accordionBase = document.getElementById('example-base');

    chi.accordion(accordionBase);
  }
}
</script>
