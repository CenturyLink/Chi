<template lang="pug">
<TitleAnchor title="On input" id="on-input" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind, low vision, cognitive/intellectual disabilities.
    p.-text
      | Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
    p.-text
      | Changes of context are appropriate only when it is clear that such a change will happen in response to the user's action.
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
          url: 'https://www.w3.org/TR/WCAG22/#on-input',
          text: '3.2.2 On Input',
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
        'Is the user pre-informed/cued when a change to a form control has a change of context?',
        'Is an explanation of what will happen when the control is changed available prior to the controls activation?',
      ],
    };
  },
})
export default class OnInput extends Vue {}
</script>
