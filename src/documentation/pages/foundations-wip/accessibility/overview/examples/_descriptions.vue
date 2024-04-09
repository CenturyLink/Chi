<template lang="pug">
p.-text
  | The Lumen Chi Accessibility Foundations defines how to make web content more accessible to people with disabilities.

p.-text
  | Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and
  | neurological disabilities. According to the <a target="_blank" href="https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html" rel="noopener">CDC</a>,
  | 1 in 4 adults in the United States have some type of functional disability.

p.-text
  | Lumen is required to meet the <a target="_blank" href="https://www.w3.org/TR/WCAG22/" rel="noopener">Web Content Accessibility Guidelines (WCAG 2.2)</a>, Conformance
  | Levels A and AA success criteria. These guidelines and their success criteria will also satisfy the <a target="_blank" href="https://www.section508.gov/" rel="noopener">Revised Section 508</a>
  | of the U.S. Rehabilitation Act (as of January 18, 2018).

p.-text
  | The content within the Lumen Chi Accessibility Foundations is derived from the WCAG principles, guidelines, and success criteria.
  | Although these WCAG guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees,
  | and combinations of disability. These guidelines also make web content more usable by older individuals with changing abilities due to
  | aging and often improve usability for users in general.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Descriptions extends Vue {}
</script>
