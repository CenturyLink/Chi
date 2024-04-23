<template lang="pug">
<TitleAnchor title="Non-text content" id="non-text-content" titleSize="h2" />
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
      | <strong>Benefits:</strong> Blind disabilities.
    p.-text
      | All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below:
    ul.-text
      li(v-for="{ title, text } in items") <strong>{{ title }}</strong> {{ text }}.
    p.-text
      | Images can be one of the following:
    ul.-text
      li(v-for="{ title, text } in secondItems") <strong>{{ title }}</strong> {{ text }}.
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
          url: 'https://www.w3.org/TR/WCAG22/#text-alternatives',
          text: '1.1 Text alternatives',
        },
        {
          url: 'https://www.w3.org/TR/WCAG22/#non-text-content',
          text: '1.1.1 Non-text Content',
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
        'Do all (non-decorative) images have alt text?',
        'Does the alt text provide meaningful information about the image?',
        'If the image is a link, does the alt text describe the link purpose?',
        'Are background images informational? Alt text is needed.',
        'Are background images decorative?  Alt text is not needed.',
        'Can background images be hidden, but still have access to information and functionality?',
      ],
      items: [
        {
          title: 'Controls, Input:',
          text: 'If non-text content is a control or accepts user input, then it has a name that describes its purpose',
        },
        {
          title: 'Time-Based Media:',
          text: 'If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content',
        },
        {
          title: 'Test:',
          text: 'If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.',
        },
        {
          title: 'Sensory:',
          text: 'If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.',
        },
        {
          title: 'CAPTCHA:',
          text: 'If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.',
        },
        {
          title: 'Decoration, Formatting, Invisible:',
          text: 'If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technologies.',
        },
      ],
      secondItems: [
        {
          title: 'Informative:',
          text: 'Conveys a simple concept or information that can be expressed in a short phrase or sentence.',
        },
        {
          title: 'Functional:',
          text: 'Initiatse interactive actions.',
        },
        {
          title: 'Decorative:',
          text: 'Does not add information to the content of a page, and thus the image can have null/empty alt text. Assistive technologies can ignore the image. The image may have adjacent text that sufficiently describes the image.',
        },
      ],
    };
  },
})
export default class NonTextContent extends Vue {}
</script>
