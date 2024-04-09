<template lang="pug">
<TitleAnchor title="Language of parts" id="language-parts" titleSize="h2" />
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
      | <strong>Benefits:</strong> All users.
    p.-text
      | The human language of each passage or phrase in the content can be programmatically determined except for
      | proper names, technical terms, words of indeterminate language, and words or phrases that have become part
      | of the vernacular of the immediately surrounding text.
    p.-text
      | Ensure that content is presented according to the presentation and pronunciate rules of a language (if specified).
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
          url: 'https://www.w3.org/TR/WCAG22/#readable',
          text: '3.1 Readable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#language-of-parts',
          text: '3.1.2 Language of Parts',
        },
      ],
      badges: [
        {
          tooltipText:
            'Users must be able to understand the information as well as the operation of the user interface.',
          mainText: 'Understandable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level AA Success Criteria.',
          mainText: 'Level AA',
        },
      ],
      checklist: [
        'Are single words considered part of the language of the surrounding text unless it is clear that a change in language was intended?',
      ],
    };
  },
})
export default class LanguageParts extends Vue {}
</script>
