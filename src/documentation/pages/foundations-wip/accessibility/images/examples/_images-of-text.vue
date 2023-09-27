<template lang="pug">
  div
    <TitleAnchor title="Images of text" id="images-of-text" titleSize="h2" />
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
          | <strong>Benefits:</strong> Low vision, visual tracking problems, cognitive disabilities.
        p.-text
          | Text is used to convey information rather than images of text. Achieve desired default visual presentation, to enable people who require a particular visual presentation
          | of text to be able to adjust the text presentation as needed.
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
          url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast',
          text: '1.4 Distinguishable'
        },
        {
          url: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation',
          text: '1.4.5 Images of Text'
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
        {
          itemText: 'Is an image of text used to convey information instead of text?',
          subItems: [
            'If text cannot be formatted to get the same effect as images of text.',
            'If the effect won\'t be reliably presented on the commonly available user agents.',
            'If using an Assistive Technologies to meet this criterion would interfere with meeting other criteria such as 1.4.4 Resize Text.',
            'Example - where a particular presentation of text is essential to the information being conveyed, such as type samples, logotypes, branding, etc.'
          ]
        }
      ]
    }
  }
})
export default class ImagesOfText extends Vue {}
</script>
