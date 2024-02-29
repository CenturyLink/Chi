<template lang="pug">
<TitleAnchor title="Contrast" id="contrast" titleSize="h3" />
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
      | <strong>Benefits:</strong> Low-vision and colorblind disabilities.
    p.-text
      | The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
    ul.-text
      li <strong>Large Text:</strong> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1.
      li <strong>Incidental:</strong> Text or images of text that are part of an inactive user interface component, that are pure decoration,that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
      li <strong>Logotypes:</strong> Text that is part of a logo or brand name has no minimum contrast requirement.
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

@NuxtComponent({})
export default class Contrast extends Vue {
  breadcrumbs = [
    {
      url: 'https://www.w3.org/TR/WCAG20',
      text: 'WCAG 2.0 Guideline',
    },
    {
      url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast',
      text: '1.4 Distinguishable',
    },
    {
      url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast',
      text: '1.4.3 Contrast (Minimum)',
    },
  ];
  badges = [
    {
      tooltipText: 'Content must be presentable to users in ways they can perceive.',
      mainText: 'Perceivable',
    },
    {
      tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level AA Success Criteria.',
      mainText: 'Level AA',
    },
  ];
  checklist = [
    'Is the color contrast of the text and its background readable by low-vision users?',
    'Using a color contrast tool - are color contrast ratios at least 4.5:1 for text that is < 18 point/24 px, and for bold text that is < 14 point/18.5 px?',
    'Using a color contrast tool - are color contrast ratios at least 3:1 for large-scale text that is at least 18 point/24 px, and for large-scale bold text that is at least 14 point/18.5 px?',
    'Is there a text that is only decorative and conveys no information? (Decorative text does not need to meet color contrast guidelines)',
  ];

  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.tooltip as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
