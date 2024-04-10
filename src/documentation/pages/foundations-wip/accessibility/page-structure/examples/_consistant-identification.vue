<template lang="pug">
<TitleAnchor title="Consistent Identification" id="consistent-identification" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind, cognitive/intellectual disabilities.
    p.-text
      | Components that have the same functionality within a set of Web pages are identified consistently.
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
          url: 'https://www.w3.org/TR/WCAG22/#predictable',
          text: '3.2 Predictable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#consistent-identification',
          text: '3.2.4 Consistent Identification',
        },
      ],
      badges: [
        {
          tooltipText:
            'Users must be able to understand the information as well as the operation of the user interface.',
          mainText: 'Understandable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level AA Success Criteria.',
          mainText: 'Level AA',
        },
      ],
      checklist: [
        'Are functional components that appear repeatedly within a set of Web pages consistently identified, so that familiar functions are predictable on different Web pages?',
        'Are labels, icons/non-text items and their text alternatives, link text, and components consistent - within a page, and also if repeated on more than one page?',
      ],
    };
  },
})
export default class ConsistentIdentification extends Vue {}
</script>
