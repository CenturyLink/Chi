<template lang="pug">
  div
    <TitleAnchor title="Prerecorded audio-only and video-only" id="prerecorded-audio-video" titleSize="h2" />
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
          | <strong>Benefits:</strong> Blind, deaf, cognitive/intellectual disabilities.
        p.-text
          | For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:
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
          url: 'https://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt',
          text: '1.2.1 Audio-only and Video-only (Prerecorded)'
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
        'Is information conveyed by prerecorded audio-only and prerecorded video-only content available to all users?  (Examples: Audio recording, text transcript, animation as a tutorial)',
        'Can Assistive Technologies read text alternatives aloud, present then visually, or convert to braille for people who have difficulty perceiving visual content, or have difficulty understanding the meaning of prerecorded video content?',
        'Can text be read for people who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason?'
      ],
      items: [
        {
          title: 'Prerecorded Audio-only:',
          text: 'An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content'
        },
        {
          title: 'Prerecorded Video-only:',
          text: 'Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content'
        }
      ],
    }
  }
})
export default class PrerecordedAudioVideo extends Vue {}
</script>
