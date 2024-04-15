<template lang="pug">
<TitleAnchor title="Keyboard" id="keyboard" titleSize="h2" />
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
      | <strong>Benefits:</strong> Keyboard users (typically people with visual and/or motor/physical disabilities).
    p.-text
      | All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes,
      | except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.
  .chi-col.-w--12
    .chi-card.-s--1.-rounded.-mb--3.-mt--1
      .chi-card__header
        .chi-card__title How to pass
      .chi-card__content.-px--3
        p.-text Fully interact with every interactive aspect of a web page using your keyboard alone - do not use a mouse.
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
          url: 'https://www.w3.org/TR/WCAG22/#keyboard-accessible',
          text: '2.1 Keyboard accessible',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#keyboard',
          text: '2.1.1 Keyboard',
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
        'Can the user access the full functionality of the page or application using a keyboard alone?',
        'Is all information or functionality accessible and operable with a keyboard alone, that would typically be triggered with a mouse?',
      ],
    };
  },
})
export default class Keyboard extends Vue {}
</script>
