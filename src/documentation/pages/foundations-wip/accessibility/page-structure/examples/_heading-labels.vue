<template lang="pug">
<TitleAnchor title="Headings and labels" id="headings-labels" titleSize="h2" />
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
      | <strong>Benefits:</strong> Visual, cognitive limitations, motion impairment disabilities.
    p.-text
      | Headings and labels describe topic or purpose.
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
          url: 'https://www.w3.org/TR/WCAG22/',
          text: 'WCAG 2.2 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#navigable',
          text: '2.4 Navigable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#headings-and-labels',
          text: '2.4.6 Headings and Labels',
        },
      ],
      badges: [
        {
          tooltipText: 'Users must be able to operate the interface.',
          mainText: 'Operable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level AA Success Criteria.',
          mainText: 'Level AA',
        },
      ],
      checklist: [
        'Can the user understand what information is contained in Web pages and how that information is organized?',
        'Can the user find the information they seek more easily, and can the user understand the relationships between different parts of the content more easily?',
        'Does the label description help the user identify specific components within the content?',
      ],
    };
  },
})
export default class HeadingsLabels extends Vue {}
</script>
