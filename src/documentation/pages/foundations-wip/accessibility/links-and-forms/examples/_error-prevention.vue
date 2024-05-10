<template lang="pug">
<TitleAnchor title="Error prevention (Legal, Financial, Data)" id="error-prevention" titleSize="h2" />
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
      | <strong>Benefits:</strong> All disabilities.
    p.-text
      | For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:
    ul.-text
      li(v-for="{ title, text } in items") <strong>{{ title }}:</strong> {{ text }}.
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
          url: 'https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data',
          text: '3.3.4 Error Prevention (Legal, Financial, Data)',
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
        'Can the user correct a mistake to avoid the serious consequences as the result of an action that cannot be reversed?',
        'Are safeguards provided to avoid mistakes that can have serious consequences?',
        'Can the user review, correct, confirm before submitting or deleting?',
        'Is success feedback provided when data is submitted successfully?',
      ],
      items: [
        {
          title: 'Reversible',
          text: 'Submissions are reversible',
        },
        {
          title: 'Checked',
          text: 'Data entered by the user is checked for input errors and the user is provided an opportunity to correct them',
        },
        {
          title: 'Confirmed',
          text: 'A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission',
        },
      ],
    };
  },
})
export default class ErrorPrevention extends Vue {}
</script>
