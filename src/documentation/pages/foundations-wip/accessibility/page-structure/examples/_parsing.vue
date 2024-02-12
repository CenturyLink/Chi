<template lang="pug">
<TitleAnchor title="Parsing" id="parsing" titleSize="h2" />
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
      | <strong>Benefits:</strong> All users of Assistive Technologies.
    p.-text
      | In content implemented using markup languages, elements have complete start and end tags, elements are nested
      | according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except
      | where the specifications allow these features.
    p.-text
      | Ensure that Assistive Technologies can parse the content accurately and without crashing.
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
          url: 'https://www.w3.org/TR/WCAG20/#ensure-compat',
          text: '4.1 Compatible',
        },
        {
          url: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-parses',
          text: '4.1.1 Parsing',
        },
      ],
      badges: [
        {
          tooltipText: 'Users must be able to access the content as technologies advance.',
          mainText: 'Robust',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: ['Do Web pages have complete start and end tags that are nested according to specification?'],
    };
  },
})
export default class Parsing extends Vue {}
</script>
