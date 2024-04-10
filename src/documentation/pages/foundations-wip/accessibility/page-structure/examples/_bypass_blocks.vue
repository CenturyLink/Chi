<template lang="pug">
<TitleAnchor title="Bypass blocks" id="bypass-blocks" titleSize="h2" />
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
      | <strong>Benefits:</strong> Keyboard users (typically people with blind, low vision and/or motor/physical disabilities).
    p.-text
      | A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.
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
          url: 'https://www.w3.org/TR/WCAG22/#bypass-blocks',
          text: '2.4.1 Bypass Blocks',
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
      checklist: [
        'Can content be navigated sequentially, allowing more direct access to the primary content of the Web page?',
        'If a web page has blocks of text that are repeated within the page (example: navigation, headings), can the blocks of text be "skipped over"?',
        'Can the main content of a web page be reached quickly and easily, with fewer keystrokes?',
      ],
    };
  },
})
export default class BypassBlocks extends Vue {}
</script>
