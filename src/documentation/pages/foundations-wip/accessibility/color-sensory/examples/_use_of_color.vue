<template lang="pug">
<TitleAnchor title="Use of color" id="use-of-corol" titleSize="h3" />
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
      | <strong>Benefits:</strong> Colorblind disabilities
    p.-text
      | Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
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
export default class UseOfColor extends Vue {
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
      url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color',
      text: '1.4.1 Use of Color',
    },
  ];
  badges = [
    {
      tooltipText: 'Content must be presentable to users in ways they can perceive.',
      mainText: 'Perceivable',
    },
    {
      tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.',
      mainText: 'Level A',
    },
  ];
  checklist = [
    'Verify that color alone is not used to convey important information.',
    'Can all of the information be understood when viewing the page in grayscale?',
    'Can all of the page functions be performed when viewing the page in grayscale?',
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
