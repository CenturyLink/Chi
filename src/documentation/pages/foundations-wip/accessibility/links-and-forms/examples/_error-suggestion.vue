<template lang="pug">
<TitleAnchor title="Error suggestion" id="error-suggestion" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind, colorblind, motion impairment, cognitive/intellectual disabilities.
    p.-text
      | If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
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
          url: 'https://www.w3.org/TR/WCAG22/#input-assistance',
          text: '3.3 Input assistance',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#error-suggestion',
          text: '3.3.3 Error Suggestion',
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
        'Does the user receive appropriate suggestions for correction of an input error?',
        'Can the user determine how to correct the error?',
      ],
    };
  },
})
export default class ErrorSuggestion extends Vue {}
</script>
