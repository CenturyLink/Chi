<template lang="pug">
  div
    <TitleAnchor title="Resize text" id="resize-text" titleSize="h3" />
    .chi-grid
      .chi-col.-w--12
        .chi-breadcrumb
          ol.-text--normal
            li.chi-breadcrumb__item(v-for="({ url, text }) in breadcrumbs")
              a(:href="url" rel="noopener" target="_blank") {{ text }}
      .chi-col.-w--12
        .-lh--3
          .chi-badge.-dark.-outline.-xs.-mr--1(v-for="({ tooltipText, mainText }) in badges" :data-tooltip="tooltipText" ref='tooltip' data-position="bottom")
            span {{ mainText }}
      .chi-col.-w--12
        p.-text
          | <strong>Benefits:</strong> Low vision disabilities
        p.-text
          | Except for captions and images of text, text can be resized without Assistive Technology up to 200 percent without loss of content or functionality.
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

declare const chi: any;

@Component({
  data: () => {
    return {
      breadcrumbs: [
        {
          url: 'https://www.w3.org/TR/WCAG20',
          text: 'WCAG 2.0 Guideline'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast',
          text: '1.4 Distinguishable'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale',
          text: '1.4.4 Resize text'
        }
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable'
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level AA Success Criteria.',
          mainText: 'Level AA'
        }
      ],
      checklist: [
        'Can visually rendered text be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of Assistive Technologies such as a screen magnifier?',
        'Including text-based controls (text characters that have been displayed so that they can be seen vs. text characters that are still in data form such as ASCII).',
        'Can content be scaled up to 200% - up to twice the width and height?'
      ]
    }
  }
})
export default class ResizeText extends Vue {
  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.tooltip as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
