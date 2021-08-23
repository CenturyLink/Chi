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
      <pre class="language-html">
        <code v-highlight="$data.codeSnippet" class="html"></code>
      </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from '~/models/models';

declare const chi: any;

@Component({
  data: () => {
    return {
      codeSnippet: `
        <div class="chi-accordion" id="example-portal-base">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Accordion 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <p class="chi-accordion__text">Content goes here</p>
            </div>
          </div>
          <div class="chi-accordion__item -expanded">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Accordion 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <p class="chi-accordion__text">Content goes here</p>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Accordion 3</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <p class="chi-accordion__text">Content goes here</p>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Accordion 4</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <p class="chi-accordion__text">Content goes here</p>
            </div>
          </div>
        </div>

        <script>
          const accordionBase = document.getElementById('example-portal-base');

          chi.accordion(accordionBase);
        <\/script>`,
    }
  }
})
export default class BaseExample extends Vue {
  theme: Themes = this.$store.state.themes.theme;

  mounted() {
    const accordionBase = document.getElementById('example-base');

    chi.accordion(accordionBase);
  }
}
</script>
