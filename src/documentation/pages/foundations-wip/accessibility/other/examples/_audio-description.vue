<template lang="pug">
  div
    <TitleAnchor title="Audio description or media alternative (prerecorded)" id="audio-description" titleSize="h2" />
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
          | <strong>Benefits:</strong> Blind and visual disabilities, cognitive disabilities (people who have difficulty perceiving or understanding moving images).
        p.-text
          | An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
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
          url: 'https://www.w3.org/TR/WCAG20/#media-equiv',
          text: '1.2 Time-based media'
        },
        {
          url: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-audio-desc',
          text: '1.2.3 Audio Description or Media Alternative (Prerecorded)'
        }
      ],
      badges: [
        {
          tooltipText: 'Content must be presentable to users in ways they can perceive.',
          mainText: 'Perceivable'
        },
        {
          tooltipText: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.',
          mainText: 'Level A'
        }
      ],
      checklist: [
        {
          itemText: 'Do people who are blind or visually impaired have access to the visual information in a synchronized media presentation?',
          subItems: [
            'Audio description of the video content, including dialogue, actions, characters, scene changes, and on-screen text.',
            'Text form includes all of the information in the synchronized media (both visual and auditory), including visual context, actions and expressions of actors, and any other visual material, non-speech sounds (laughter, off-screen voices, etc.), and transcripts of all dialogue.'
          ]
        }
      ]
    }
  }
})
export default class AudioDescription extends Vue {}
</script>
