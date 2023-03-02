<template lang="pug">
  <ComponentExample title="Base with back link, subtitle and buttons" id="base_with_back_link_subtitle_buttons" :tabs="exampleTabs">
    chi-main(backlink='Back link' title='Page title' subtitle='Page subtitle' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      button.chi-button.-primary(slot='header-actions') Primary
      div(v-html="footerTemplate" slot="footer")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Add buttons in the header of the application layout by defining <code>slot="header-actions"</code> on each <code>chi-button</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generateExampleFooter } from './_base.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerTemplate: generateExampleFooter('back-link-subtitle-buttons-language-dropdown-button').htmlblueprint,
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- Page content goes here -->
  ${generateExampleFooter().webcomponent}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${generateExampleFooter().htmlblueprint}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'))<\/script>`
      }
    };
  }
})
export default class BackLinkSubtitleButtons extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('back-link-subtitle-buttons-language-dropdown-button'))
  }
}
</script>
