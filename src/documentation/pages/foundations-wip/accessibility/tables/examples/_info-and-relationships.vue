<template lang="pug">
<TitleAnchor title="Info and Relationships" id="info-relationships" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind disabilities.
    p.-text
      | Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
    p.-text
      | Information is considered tabular when logical relationships among text, numbers, images, or other data exist in two dimensions (vertical and horizontal).
      | These relationships are represented in columns and rows, and the columns and rows must be recognizable in order for the logical relationships to be perceived.
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
          url: 'https://www.w3.org/TR/WCAG20/#content-structure-separation',
          text: '1.3 Adaptable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic',
          text: '1.3.1 Info and Relationships',
        },
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: [
        'Are corresponding column and row identified, so that Assistive Technologies can programmatically determine the data column and data row relationship for a data cell?',
        'Are columns and rows recognizable in order for the logical relationships to be perceived?',
        'Is the information relationship preserved, even when users cannot see the table or the presentation format is changed?',
      ],
    };
  },
})
export default class InfoAndRelationships extends Vue {}
</script>
