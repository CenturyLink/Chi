<template lang="pug">
  div
    p.-text
      | Pages with well-structured content are essential for many web users.
    ul.-text
      li <strong>People with cognitive and learning disabilities</strong> can more easily find and prioritize content on the page.
      li <strong>People using screen readers</strong> can skip to the main content directly and navigate to sections that are important to them.
      li <strong>Keyboard users</strong> can browse pages and their sections more efficiently. Otherwise, users have to press the tab key multiple times to navigate through all links in each section.
      li <strong>People using software that only shows the main content</strong> of a web page, such as people with cognitive disabilities, will receive better results if the page structure is correctly marked up.
      li <strong>People with visual impairments</strong>, including people with low vision, have cues that provide orientation on the page and in the content.
      li <strong>Mobile web users</strong> often have access to a so-called "reader" or "reading" mode that will only show the main content of the page if it is correctly marked up.
      li <strong>People using certain browser plugins</strong> can use landmark roles to jump to specific sections on a page.
      li There are additional benefits to a good, accessible page structure, beyond those experienced by people with disabilities. As an example, search engines can use the data to better index the content of a page.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Description extends Vue {}
</script>
