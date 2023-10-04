<template lang="pug">
  div
    <TitleAnchor title="Testing" id="testing" titleSize="h2" />
    <TitleAnchor title="End-to-end tests" id="end-to-end" titleSize="h3" />
    p.-text
      | <a target="_blank" href="https://www.cypress.io" rel="noopener">Cypress</a> is used for end-to-end testing. Tests are located in the
      | <code>cypress/integration</code> folder. To make them run:
    <Copy id="end-to-end">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text
      | You can run end-to-end tests interactively by launching the <code>start</code> command and opening a local version of
      | the Cypress application. Then select the ux-chi root folder as the project folder.

    <TitleAnchor title="Visual regression tests" id="visual-regression-tests" titleSize="h3" />
    p.-text
      | Chi has visual regression tests build for each component that are implemented in
      | <a target="_blank" href="https://github.com/garris/BackstopJS" rel="noopener">BackstopJS</a>. Each Custom Element
      | component MUST have a Custom Element version for the same test files that are implemented in the normal version of Chi.
      | These tests are configured in the <code>backstop-non-responsive-ce.json</code> file.
    p.-text
      | E.g. <code>test/chi/custom-elements/icons.pug</code> will be compared to <code>test/chi/components/icons.pug</code>
      | to ensure both components are rendered in the same way.
    p.-text
      | This tests are run by the common test command
    <Copy id="tests">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint1" lang='bash' class="html"></code>
      </pre>
    </Copy>
    p.-text Reports are available in the <code>reports/html_report/non_responsive_ce/</code> folder.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: '$ chi test-e2e',
        htmlblueprint1: '$ chi test'
      }
    }
  }
})
export default class Testing extends Vue {}
</script>
