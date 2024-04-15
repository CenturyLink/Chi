<template lang="pug">
<TitleAnchor title="Images of text" id="images-of-text" titleSize="h3" />
.chi-grid
  .chi-col.-w--12
    .chi-breadcrumb
      ol.-text--normal
        li.chi-breadcrumb__item(v-for="({ url, text }) in breadcrumbs")
          a(:href="url" rel="noopener" target="_blank") {{ text }}
  .chi-col.-w--12
    .-lh--3
      .chi-badge.-dark.-outline.-xs.-mr--1(v-for="({ tooltipText, mainText }) in badges" :data-tooltip="tooltipText" ref='tooltip' data-position="bottom")
        span {{ mainText }}
  .chi-col.-w--12
    p.-text
      | <strong>Benefits:</strong> Blind disabilities
    p.-text
      | Text is used to convey information rather than images of text. Achieve desired default visual presentation, to enable people who require a particular visual presentation of text to be able to adjust the text presentation as needed.
  .chi-col.-w--12
    .chi-card.-s--1.-rounded.-mb--3.-mt--1
      .chi-card__header
        .chi-card__title How to pass
      .chi-card__content.-px--3
        ul.accessibility-checklist
          li(v-for="item in checklist") {{ item }}
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({
  data: () => {
    return {
      breadcrumbs: [
        {
          url: 'https://www.w3.org/TR/WCAG22/',
          text: 'WCAG 2.2 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#distinguishable',
          text: '1.4 Distinguishable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#images-of-text',
          text: '1.4.5 Images of Text',
        },
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level AA Success Criteria.',
          mainText: 'Level AA',
        },
      ],
      checklist: [
        'Are images used to present text?',
        'Is text embedded in images?',
        'Is actual text used instead images of text?',
      ],
    };
  },
})
export default class ImagesOfText extends Vue {
  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.tooltip as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
