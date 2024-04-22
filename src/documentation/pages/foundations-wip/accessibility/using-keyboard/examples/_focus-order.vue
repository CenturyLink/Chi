<template lang="pug">
<TitleAnchor title="Focus order" id="foxus-order" titleSize="h2" />
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
      | If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive
      | focus in an order that preserves meaning and operability.
  .chi-col.-w--12
    .chi-card.-s--1.-rounded.-mb--3.-mt--1
      .chi-card__header
        .chi-card__title How to pass
      .chi-card__content.-px--3
        p.-text
          | Tab through the page using only the keyboard.
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
          url: 'https://www.w3.org/TR/WCAG22',
          text: 'WCAG 2.2 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#navigable',
          text: '2.4 Navigable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#focus-order',
          text: '2.4.3 Focus Order',
        },
      ],
      badges: [
        {
          tooltipText: 'Users must be able to operate the interface.',
          mainText: 'Operable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: ['Is the navigation order logical and intuitive?', 'Does the tab order make sense?'],
    };
  },
})
export default class FocusOrder extends Vue {}
</script>
