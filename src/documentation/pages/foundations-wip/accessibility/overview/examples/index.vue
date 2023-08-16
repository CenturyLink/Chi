<template lang="pug">
  .chi-grid__container.-pt--3
    <Descriptions />

    h2 Key accessibility concepts
    <KeyAccessibilityConcepts />

    .chi-divider.-my--5

    h3 About assistive technologies
    p.-text.-mt--0
      | Technologies that allow people with disabilities to use a resource are known as assistive technologies. Perhaps the most commonly thought of type of
      | assistive technology for the web are screen readers, which proccess the visible (and sometimes invisible) elements on the screen and read the
      | information aloud to the user. The three most popular screen readers are JAWS, NVDA and VoiceOver (iOS). Other examples of assistive technologies
      | used on the web include Braille translation devices, screen magnifiers, closed captioning, and specialized keyboards.

    h2 Foundations
    h3 The Four Principles of Accessibility (POUR) and the Guidelines
    p.-text Anyone who wants to use the web must have content that is:
    <Foundations />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Descriptions from './_descriptions.vue'
import KeyAccessibilityConcepts from './_key-accessibility-concepts.vue'
import Foundations from './_foundations.vue'

@Component({
  components: {
    Descriptions,
    KeyAccessibilityConcepts,
    Foundations
  }
})
export default class Examples extends Vue {}
</script>
