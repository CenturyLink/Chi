<template lang="pug">
  div
    <TitleAnchor title="Multiple ways" id="multiple-ways" titleSize="h2" />
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
          | <strong>Benefits:</strong> Visual, cognitive limitations disabilities.
        p.-text
          | More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.
      .chi-col.-w--12
        .chi-card.-s--1.-rounded.-mb--3.-mt--1
          .chi-card__header
            .chi-card__title How to pass
          .chi-card__content.-px--3
            ul.accessibility-checklist
              li(v-for="item in checklist") {{ item }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breadcrumbs: [
        {
          url: 'https://www.w3.org/TR/WCAG20',
          text: 'WCAG 2.0 Guideline'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms',
          text: '2.4 Navigable'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc',
          text: '2.4.5 Multiple Ways'
        }
      ],
      badges: [
        {
          tooltipText: 'Users must be able to operate the interface.',
          mainText: 'Operable'
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level AA Success Criteria.',
          mainText: 'Level AA'
        }
      ],
      checklist: [
        'Can the user locate content in a manner/technique that best meets their needs (in order to find information faster)?'
      ]
    }
  }
})
export default class MultipleWays extends Vue {}
</script>
