<template lang="pug">
<TitleAnchor title="Link Purpose (in context)" id="link-purpose" titleSize="h2" />
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
      | <strong>Benefits:</strong> Visual, cognitive limitations, motion impairment disabilities.
    p.-text
      | The purpose of each link can be determined from the link text alone or from the link text together with its
      |  programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.
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
          url: 'https://www.w3.org/TR/WCAG22/',
          text: 'WCAG 2.2 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#navigable',
          text: '2.4 Navigable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#link-purpose-in-context',
          text: '2.4.4 Link Purpose (In Context)',
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
        'Can the user understand the purpose of the link (without needing additional context) in order to decide whether to follow the link?',
        'Is meaningful link text provided?',
        'Can the user arrive on a link and find out more about the link without losing their place on the page?',
        'Does the context/description of the link precede the link?',
      ],
    };
  },
})
export default class LinkPurpose extends Vue {}
</script>
