<template lang="pug">
<TitleAnchor title="Three flashes or below threshold" id="three-flashes" titleSize="h2" />
.chi-grid
  .chi-col.-w--12
    .chi-breadcrumb
      ol.-text--normal
        li.chi-breadcrumb__item(v-for="({ url, text }) in breadcrumbs")
          a(:href="url" rel="noopener" target="_blank") {{ text }}
  .chi-col.-w--12
    .-lh--3
      .chi-badge.-dark.-outline.-xs.-mr--1(v-for="({ tooltipText, mainText }) in badges" :data-tooltip="tooltipText" data-position="bottom")
        span {{ mainText }}
  .chi-col.-w--12
    p.-text
      | <strong>Benefits:</strong> Photosensitive epilepsy, photosentive seizure disorders.
    p.-text
      | Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.
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

@NuxtComponent({
  data: () => {
    return {
      breadcrumbs: [
        {
          url: 'https://www.w3.org/TR/WCAG20',
          text: 'WCAG 2.0 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#seizure',
          text: '2.3 Seizures',
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#seizure-does-not-violate',
          text: '2.3.1 Three Flashes or Below Threshold',
        },
      ],
      badges: [
        {
          tooltipText: 'Users must be able to operate the interface.',
          mainText: 'Operable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: [
        'Do users have access to the full content of a site without inducing seizures due to photosensitivity?',
        'Can the user suppress any flashing content before it begins?',
        'If there is a flashing area, is it a small area (less than 25% of 10 degrees of the visual field - representing the central area of vision in the eye - approximately 341 x 256 pixels)?',
        'Is the flashing limited on only 3 times in any one second period?',
      ],
    };
  },
})
export default class ThreeFlashes extends Vue {}
</script>
