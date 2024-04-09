<template lang="pug">
<TitleAnchor title="Meaningful sequence" id="meaningful-sequence" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind disabilities
    p.-text
      | When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.
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
          url: 'https://www.w3.org/TR/WCAG22/#adaptable',
          text: '1.3 Adaptable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#meaningful-sequence',
          text: '1.3.2 Meaningful Sequence',
        },
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: [
        "Does the order of the content have a meaningful sequence, such that changing the sequence does not change the content's meaning?",
        'Can Assistive Technologies programmatically determine at least one sequence of the content that makes sense?',
      ],
    };
  },
})
export default class MeaningfulSequence extends Vue {}
</script>
