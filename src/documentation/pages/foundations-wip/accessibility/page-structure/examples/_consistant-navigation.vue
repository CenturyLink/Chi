<template lang="pug">
<TitleAnchor title="Consistent navigation" id="consistent-navigation" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind, low-vision, cognitive/intellectual disabilities.
    p.-text
      | Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.
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
          url: 'https://www.w3.org/TR/WCAG20/#consistent-behavior',
          text: '3.2 Predictable',
        },
        {
          url: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-locations',
          text: '3.2.3 Consistent Navigation',
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
        'Is repeated content and layout presented consistently within a set of Web pages?',
        'Can specific information or functionality be located more than once?',
        'Can the user predict the location of the content they are looking for, and find it more quickly when encountered again?',
      ],
    };
  },
})
export default class ConsistentNavigation extends Vue {}
</script>
