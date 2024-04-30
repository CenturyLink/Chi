<template lang="pug">
<TitleAnchor title="Audio control" id="audio-control" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind and hard of hearing disabilities.
    p.-text
      | If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
  .chi-col.-w--12
    .chi-card.-s--1.-rounded.-mb--3.-mt--1
      .chi-card__header
        .chi-card__title How to pass
      .chi-card__content.-px--3
        ul.accessibility-checklist
          li(v-for="{ itemText, subItems } in checklist") {{ itemText }}
            ul.-text(v-if="subItems")
              li(v-for="item in subItems") {{ item }}
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
          url: 'https://www.w3.org/TR/WCAG22/#distinguishable',
          text: '1.4 Distinguishable',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#audio-control',
          text: '1.4.2 Audio Control',
        },
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable',
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.2 Level A Success Criteria.',
          mainText: 'Level A',
        },
      ],
      checklist: [
        {
          itemText:
            'Can a sound that begins playing automatically on page load be stopped by the user via a control or link to turn the sound off?',
          subItems: [
            'Is the control keyboard operable, located near the beginning of the page, and easily/quickly discovered by the user?',
          ],
        },
        {
          itemText: 'Can the screen reader user still hear the screen reader without other sounds playing/interfering?',
        },
        { itemText: 'If a sound exists, does the sound play for 3 seconds or less, and stop automatically?' },
        { itemText: 'Can a sound be played only on user request?' },
      ],
    };
  },
})
export default class AudioControl extends Vue {}
</script>
