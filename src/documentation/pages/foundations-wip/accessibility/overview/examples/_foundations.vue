<template lang="pug">
.chi-expansion-panel.-web-components.-accessibility.-pb--5
  .chi-epanel.-no-step(v-for="({ title, text, question, items }) in foundations" data-chi-epanel-group="web-component-details")
    .chi-epanel__header
      .chi-epanel__title.-w--100(data-chi-epanel-action="toggle")
        i.chi-icon.icon-chevron-right.-mr--2(aria-hidden="true")
        | {{ title }}
      p.-text.-ml--4.-mt--0 {{ text }}
      p.-text.-ml--4.-my--0
        | <strong>Ask:</strong> {{ question }}
    .chi-epanel__collapse
      .-active--only
        .chi-epanel__body
          .chi-epanel__content
            .chi-epanel__text
              ul.-text
                li(v-for="({ itemTitle, url, itemText }) in items")
                  | <a class="-text--bold" target="_blank" :href="`https://www.w3.org/TR/WCAG22/#${ url }`" rel="noopener">{{ itemTitle }}:</a> {{ itemText }}
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class Foundations extends Vue {
  foundations = [
    {
      title: 'Perceivable',
      text: 'Information and user interface components must be presentable to users in ways the can perceive.',
      question: 'Can a user get a context to their senses?',
      items: [
        {
          itemTitle: '1.1 Text-alternatives',
          url: 'text-alternatives',
          itemText:
            'Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.',
        },
        {
          itemTitle: '1.2 Time-based media',
          url: 'time-based-media',
          itemText: 'Provide alternatives for time-based media.',
        },
        {
          itemTitle: '1.3 Adaptable',
          url: 'adaptable',
          itemText:
            'Create content that can be presented in different ways (for example simpler layout) without losing information or structure.',
        },
        {
          itemTitle: '1.4 Distinguishable',
          url: 'distinguishable',
          itemText: 'Make it easier for users to see and hear content including separating foreground from background.',
        },
      ],
    },
    {
      title: 'Operable',
      text: 'User interface components and navigation must be operable.',
      question: 'Can a user successfully use controls, buttons, navigations and other interactive elements?',
      items: [
        {
          itemTitle: '2.1 Keyboard accessible',
          url: 'keyboard-accessible',
          itemText: 'Make all functionality available from a keyboard.',
        },
        {
          itemTitle: '2.2 Enough time',
          url: 'enough-time',
          itemText: 'Provide users enough time to read and use content.',
        },
        {
          itemTitle: '2.3 Seizures',
          url: 'seizures-and-physical-reactions',
          itemText: 'Do not design content in a way that is known to cause seizures.',
        },
        {
          itemTitle: '2.4 Navigable',
          url: 'navigable',
          itemText: 'Provide ways to help users navigate, find content, and determine where they are.',
        },
      ],
    },
    {
      title: 'Understandable',
      text: 'Information and the operation of user interface must be understandable.',
      question:
        'Is the presentation and format consistent, predictable in its design and usage patterns, concise, multimodal, and appropriate to the audience in its voice and tone?',
      items: [
        {
          itemTitle: '3.1 Readable',
          url: 'readable',
          itemText: 'Make text content readable and understandable.',
        },
        {
          itemTitle: '3.2 Predictable',
          url: 'predictable',
          itemText: 'Make web pages appear and operate in predictable ways.',
        },
        {
          itemTitle: '3.3 Input Assistance',
          url: 'input-assistance',
          itemText: 'Help users avoid and correct mistakes.',
        },
      ],
    },
    {
      title: 'Robust',
      text: 'Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.',
      question:
        'Is the website compliant with the standards, and does it work with the assistive technologies - including websites, online documents, multimedia and other information formats?',
      items: [
        {
          itemTitle: '4.1 Compatible',
          url: 'compatible',
          itemText: 'Maximize compatibility with current and future user agents, including assistive technologies.',
        },
      ],
    },
  ];

  mounted() {
    this.$nextTick(() => {
      chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'), {
        mode: 'accordion',
      });
    });
  }
}
</script>
