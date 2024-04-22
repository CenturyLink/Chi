<template lang="pug">
<TitleAnchor title="No keyboard trap" id="no-keyboard" titleSize="h2" />
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
      | <strong>Benefits:</strong> Keyboard users (typically people with visual and/or motor/physical disabilities).
    p.-text
      | If keyboard focus can be moved to a component of the page (such as a plugin) using a keyboard interface, then focus can be moved away
      | from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard
      | exit methods, the user is advised of the method for moving focus away.
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
          url: 'https://www.w3.org/TR/WCAG22',
          text: 'WCAG 2.2 Guideline',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#keyboard-accessible',
          text: '2.1 Keyboard accessible',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#no-keyboard-trap',
          text: '2.1.2 No Keyboard Trap',
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
        'Can the keyboard user be trapped in a subset of the content that can only be exited using a mouse or pointing device?',
        'Is there a keyboard mechanism to return focus to the parent window?',
        'Can the keyboard function for advancing focus within content (commonly the tab key) exit the subset of the content after reaching the final navigation location?',
        'Is help information available for the Web page documents on how to move focus from the content that is not accessibility-supported to the accessibility-supported content via the keyboard?',
        'Can the help information be accessed via the keyboard?',
      ],
    };
  },
})
export default class NoKeyboard extends Vue {}
</script>
