<template lang="pug">
  div
    <TitleAnchor title="Captions live" id="captions-live" titleSize="h2" />
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
          | <strong>Benefits:</strong> Deaf, hearing loss disabilities.
        p.-text
          | Captions are provided for all live audio content in synchronized media.
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
          url: 'https://www.w3.org/TR/WCAG21/#captions-live',
          text: '1.2.4 Captions (Live)'
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
          itemText: 'Can people who are deaf or hard of hearing to watch real-time presentations, including dialogue, and identifies who is speaking, and notates sound effects and other significant audio?',
          subItems: [
            'Applies to the broadcast of synchronized media.'
          ]
        }
      ]
    }
  }
})
export default class CaptionsLive extends Vue {}
</script>
