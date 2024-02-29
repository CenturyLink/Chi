<template lang="pug">
<TitleAnchor title="Language of the page" id="language-page" titleSize="h2" />
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
      | The default human language of each Web page can be programmatically determined.
    p.-text
      | Both Assistive Technologies and conventional user agents can render text more accurately when the language of the
      | Web page is identified.  As a result, users with disabilities will be better able to understand the content.
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
          url: 'https://www.w3.org/TR/WCAG20',
          text: 'WCAG 2.0 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#meaning',
          text: '3.1 Readable',
        },
        {
          url: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id',
          text: '3.1.1 Language of Page',
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
        'Is information provided in the Web page that user agents need to present text and other linguistic content correctly?',
        'Can a screen reader load the correct pronunciation rules?',
        'Can visual browsers display characters and scripts correctly?',
        'Can media players show captions correctly?',
      ],
    };
  },
})
export default class LanguagePage extends Vue {}
</script>
