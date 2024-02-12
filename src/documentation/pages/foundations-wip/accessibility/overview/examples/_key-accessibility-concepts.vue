<template lang="pug">
template(v-for="({ title, url, text }) in concepts")
  <TitleAnchor :title="title" :id="url" />
  p.-text.-mt--0 {{ text }}
h3
  | <a class="-text--h4 -text--body -m--0" href='../other'>Other</a>
ul.-text.-mt--0
  li <strong>Time-based Media:</strong> Provide alternatives for time-based media.
  li <strong>Distinguishable:</strong> Make it easier for users to see and hear content including separating foreground from background.
  li <strong>Enough Time:</strong> Provide users enough time to read and use content.
  li <strong>Seizures:</strong> Do not design content in a way that is known to cause seizures.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class KeyAccessibilityConcepts extends Vue {
  concepts = [
    {
      title: 'Using the keyboard',
      url: 'using-keyboard',
      text:
        'The website or application must be completely usable through a keyboard. There can be nothing which requires a mouse.  Blind users who rely on screen readers navigate by using the keyboard. In addition, some users who see the screen perfectly well have impaired motor skills which make it difficult or impossible to control a mouse.',
    },
    {
      title: 'Page structure',
      url: 'page-structure',
      text:
        'Well-structured content allows more efficient navigation and processing. Use HTML and WAI-ARIA to improve navigation and orientation on web pages and in applications. Mark up should include page regions, labeling regions, headings, and content structure.',
    },
    {
      title: 'Color and sensory',
      url: 'color-sensory',
      text:
        'Enables people with visual impairments or color vision deficiencies to interact with digital experiences in the same way as non-visually-impaired people.',
    },
    {
      title: 'Images',
      url: 'images',
      text: 'Images must have text alternatives that describe the information or function represented by them.',
    },
    {
      title: 'Text',
      url: 'text',
      text:
        'Genuine text is much more flexible than images. Text can be resized without losing clarity, and background and text colors can be modified to suit the reading preferences of users. Images are more likely to distort and pixelate when resized.',
    },
    {
      title: 'Links and forms',
      url: 'links-and-forms',
      text:
        'Users usually prefer simple and short forms. Only ask users to enter what is required to complete the transaction or process. If irrelevant or excessive data is requested, users are more likely to abandon the form.',
    },
    {
      title: 'Tables',
      url: 'tables',
      text:
        'Accessible tables need HTML structural markup that indicates header cells and data cells and defines their relationship. Assistive technologies use this information to provide context to users.',
    },
  ];
}
</script>
