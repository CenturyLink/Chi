<template lang="pug">
<TitleAnchor title="Timing adjustable" id="timing-adjustable" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind, low vision, deaf, dexterity impairments, and cognitive limitations.
    p.-text
      | For each time limit that is set by the content, at least one of the following is true:
    ul.-text
      li(v-for="{ title, text } in items") <strong>{{ title }}</strong> {{ text }}.
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
          url: 'https://www.w3.org/TR/WCAG22/#enough-time',
          text: '2.2 Enough time',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#timing-adjustable',
          text: '2.2.1 Timing Adjustable',
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
        'Are users with disabilities given adequate time to interact with Web content?',
        'Are options provided  to disable time limits, customize the length of time limits, or request more time before a time limit occurs, in order to helps those users who require more time than expected to successfully complete tasks?',
      ],
      items: [
        {
          title: 'Turn off:',
          text: 'The user is allowed to turn off the time limit before encountering it; or',
        },
        {
          title: 'Adjust:',
          text: 'The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or',
        },
        {
          title: 'Extend:',
          text: 'The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or',
        },
        {
          title: 'Real-time Exception:',
          text: 'The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or',
        },
        {
          title: 'Essential Exception:',
          text: 'The time limit is essential and extending it would invalidate the activity; or',
        },
        {
          title: '20 Hour Exception:',
          text: 'The time limit is longer than 20 hours.',
        },
      ],
    };
  },
})
export default class TimingAdjustable extends Vue {}
</script>
