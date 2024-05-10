<template lang="pug">
<TitleAnchor title="Sensory characteristics" id="sensory-characteristics" titleSize="h3" />
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
      | <strong>Benefits:</strong> Blind and low-vision disabilities
    p.-text
      | Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.
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
export default class SensoryCharacteristics extends Vue {
  breadcrumbs = [
    {
      url: 'https://www.w3.org/TR/WCAG22/',
      text: 'WCAG 2.2 Guideline',
    },
    {
      url: 'https://www.w3.org/TR/WCAG22/#adaptable',
      text: '1.3 Adaptable',
    },
    {
      url: 'https://www.w3.org/TR/WCAG22/#sensory-characteristics',
      text: '1.3.3 Sensory Characteristics',
    },
  ];
  badges = [
    {
      tooltipText: 'Content must be presentable to users in ways they can perceive.',
      mainText: 'Perceivable',
    },
    {
      tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level A Success Criteria.',
      mainText: 'Level A',
    },
  ];
  checklist = [
    'Can the user access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation?',
    'Are descriptions of controls solely via references to visual or auditory cues avoided?',
    'Is additional information provided other than shape and/or location?',
    'Does positioning, color, and labeling help identify the information?',
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
