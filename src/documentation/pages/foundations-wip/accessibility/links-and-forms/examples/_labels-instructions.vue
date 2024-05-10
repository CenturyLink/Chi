<template lang="pug">
<TitleAnchor title="Labels or instructions" id="labels-instructions" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind, low-vision, motion impairment, cognitive / intellectual disabilities.
    p.-text
      | Labels or instructions are provided when content requires user input.
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
          url: 'https://www.w3.org/TR/WCAG22/#labels-or-instructions',
          text: '3.3.2 Labels or Instructions',
        },
      ],
      badges: [
        {
          tooltipText:
            'Users must be able to understand the information as well as the operation of the user interface.',
          mainText: 'Understandable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: [
        'Are instructions or labels that identify the controls in a form placed so that users know what input data is expected?',
        'Are data format instructions specified in the instructions or labels, or are examples provided, especially when there are out of customary formats or specific rules for correct input?',
        'Can the user accomplish the task without undue confusion or navigation?',
        'Can the user determine required versus optional fields, so that an incomplete form cannot be submitted?',
        'Are field labels located in close proximity to the associated field?',
      ],
    };
  },
})
export default class LabelsInstructions extends Vue {}
</script>
