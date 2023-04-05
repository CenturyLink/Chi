<template lang="pug">
  <ComponentExample title="Base with back link, subtitle, buttons and page-level actions" id="base_with_back_link_subtitle_buttons_page_level_actions" :tabs="exampleTabs" padding="0">
    chi-main(backlink='Back link' title='Page title' subtitle='Page subtitle' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      button.chi-button.-primary.-outline.-bg--white(slot='page-level__actions') Cancel
      button.chi-button.-primary.-ml--1(slot='page-level__actions') Submit
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
        div(v-html="footers.centurylink" v-if="$store.state.themes.theme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="$store.state.themes.theme === 'brightspeed'")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Add page-level actions at the bottom of the application layout by defining <code>slot="page-level__actions"</code> on each <code>chi-button</code>.
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
import {
  generateAllExampleFooters,
  generateExampleFooter
} from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footers: generateAllExampleFooters('back-link-subtitle-buttons-page-level-actions-language-dropdown-button'),
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
        webcomponent: '',
        htmlblueprint: ''
      }
    };
  }
})
export default class BackLinkSubtitleButtonsPageLevelActions extends Vue {
  mounted() {
    const languageDropdown = document.getElementById('back-link-subtitle-buttons-page-level-actions-language-dropdown-button');

    if (languageDropdown) {
      chi.dropdown(languageDropdown);
    }

    this._setCodeSnippets();
  }

  updated() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    const footerTemplate = generateExampleFooter(this.$store.state.themes.theme);

    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
  ${footerTemplate}
</chi-main>

${this.$store.state.themes.theme === 'centurylink' ? '' : '<script>chi.dropdown(document.getElementById(\'language-dropdown-button\'));<\/script>'}`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
        <div class="chi-main__title-subheading">Page subtitle</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
    <div class="-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1">
      <button class="chi-button -primary -outline -bg--white">Cancel</button>
      <button class="chi-button -primary -ml--1">Submit</button>
    </div>
  </div>
  ${footerTemplate}
</div>

${this.$store.state.themes.theme === 'centurylink' ? '' : '<script>chi.dropdown(document.getElementById(\'language-dropdown-button\'));<\/script>'}`;
  }
}
</script>
