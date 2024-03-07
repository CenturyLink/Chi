<template lang="pug">
<TitleAnchor title="Pause, stop, hide" id="pause-stop-hide" titleSize="h2" />
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
      | <strong>Benefits:</strong> Cognitive, attention deficient disorders, low literacy/reading/intellectual disabilities.
    p.-text
      | For moving, blinking, scrolling, or auto-updating information, all of the following are true:
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
          url: 'https://www.w3.org/TR/WCAG20',
          text: 'WCAG 2.0 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#time-limits',
          text: '2.2 Enough time',
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#time-limits-pause',
          text: '2.2.2 Pause, Stop, Hide',
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
        'Is there an option of provided to the user with a means to control the frequency of updates when content Is auto-updating?',
        'Can content be paused and restarted from where it was paused?',
        'Can content stop blinking within 5 seconds?',
      ],
      items: [
        {
          title: 'Moving, blinking, scrolling:',
          text: 'For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and',
        },
        {
          title: 'Auto-updating:',
          text: 'For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential',
        },
      ],
    };
  },
})
export default class PauseStopHide extends Vue {}
</script>
