<template lang="pug">
  div
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
          | <strong>Benefits:</strong> Blind keyboard user
        p.-text
          | Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
      .chi-col.-w--12
        .chi-card.-s--1.-rounded.-mb--3.-mt--1
          .chi-card__header
            .chi-card__title How to pass
          .chi-card__content.-px--3
            p.-text Use a screen reader (with your eyes closed):
            ul.accessibility-checklist
              li(v-for="item in checklist") {{ item }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breadcrumbs: [
        {
          url: 'https://www.w3.org/TR/WCAG20',
          text: 'WCAG 2.0 Guideline'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#content-structure-separation',
          text: '1.3 Adaptable'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic',
          text: '1.3.1 Info and Relationships'
        }
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable'
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.',
          mainText: 'Level A'
        }
      ],
      checklist: [
        'Is all content and functionality available to a screen reader?',
        'Does the user have access to all information and features on the page?',
        'Can the user complete all tasks independently?'
      ]
    }
  }
})
export default class InfoAndRelationships extends Vue {}
</script>
